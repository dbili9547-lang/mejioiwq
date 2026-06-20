export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;
    const ua = req.headers['user-agent'] || 'Unknown';
    
    const message = `
<b>🔥 НОВЫЙ ЛОГ</b>
IP: ${ip}
User-Agent: ${ua}
Время: ${new Date().toLocaleString()}`;
    
    const BOT_TOKEN = '8600820741:AAEDil-CtU8mvICLJgFP4nBPeJgawHvhGvQ';
    const CHAT_ID = '870299796';
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;
    
    fetch(url).catch(() => {});
    res.writeHead(302, { 'Location': 'https://t.me/hitvpnbot?start=157035967454517' });
    res.end();
}
