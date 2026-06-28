#!/bin/bash
# ============================================================
# Harb-i Strateji — Deploy Script
# Tarih: 28 Haziran 2026
# Açıklama: Siteyi systemd servisi olarak deploy eder
# ============================================================

set -e

SITE_DIR="/home/ubuntu/simulasyon"
SERVICE_NAME="harbi-strateji"
PORT=8080

echo "╔══════════════════════════════════════════════╗"
echo "║  Harb-i Strateji — Deploy Script            ║"
echo "╚══════════════════════════════════════════════╝"
echo ""

# 1. Mevcut sunucuyu durdur
echo "[1/5] Mevcut sunucu durduruluyor..."
pkill -f "serve_nocache.py" 2>/dev/null || true
sudo systemctl stop $SERVICE_NAME 2>/dev/null || true
sleep 1

# 2. Python serve script'ini güncelle
echo "[2/5] Sunucu scripti kontrol ediliyor..."
cat > "$SITE_DIR/serve_nocache.py" << 'PYEOF'
import http.server
import socketserver
import os

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Suppress access logs for cleaner output
        pass

PORT = 8080
os.chdir('/home/ubuntu/simulasyon')

with socketserver.TCPServer(("0.0.0.0", PORT), NoCacheHandler) as httpd:
    print(f"Harb-i Strateji sunucusu port {PORT} üzerinde çalışıyor...")
    httpd.serve_forever()
PYEOF

# 3. Systemd service oluştur
echo "[3/5] Systemd servisi oluşturuluyor..."
sudo tee /etc/systemd/system/$SERVICE_NAME.service > /dev/null << SVCEOF
[Unit]
Description=Harb-i Strateji Web Server
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=$SITE_DIR
ExecStart=/usr/bin/python3 $SITE_DIR/serve_nocache.py
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
SVCEOF

# 4. Servisi başlat
echo "[4/5] Servis başlatılıyor..."
sudo systemctl daemon-reload
sudo systemctl enable $SERVICE_NAME
sudo systemctl start $SERVICE_NAME
sleep 2

# 5. Doğrulama
echo "[5/5] Doğrulama yapılıyor..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT/index.html)
if [ "$STATUS" = "200" ]; then
    echo ""
    echo "✅ Deploy başarılı!"
    echo ""
    echo "╔══════════════════════════════════════════════╗"
    echo "║  Site Bilgileri                             ║"
    echo "╠══════════════════════════════════════════════╣"
    echo "║  URL: http://34.26.23.122:$PORT             ║"
    echo "║  Ana Sayfa: http://34.26.23.122:$PORT/index.html"
    echo "║  Servis: systemctl status $SERVICE_NAME     ║"
    echo "║  Loglar: journalctl -u $SERVICE_NAME -f     ║"
    echo "╚══════════════════════════════════════════════╝"
    echo ""
    echo "Toplam sayfa: $(ls $SITE_DIR/*.html | wc -l)"
    echo "Aktif içerik: $(grep -L 'http-equiv=\"refresh\"' $SITE_DIR/*.html | wc -l)"
else
    echo "❌ Deploy başarısız! HTTP status: $STATUS"
    echo "Logları kontrol edin: journalctl -u $SERVICE_NAME -n 20"
    exit 1
fi
