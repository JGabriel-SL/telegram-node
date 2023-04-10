// Telegram Bot Config.
const Telegram = require('node-telegram-bot-api');
const token = "6064602079:AAFV63TB2vrl7EkDiWm8yWY4vsEjKulGdOw";
// const chat_id = -805741695;
const chat_id = -977884394;
const bot = new Telegram(token, {polling: true});

const express = require('express');
const app = express();

app.use(express.json());

/* A mensagem ja irá chegar 'mastigada'? Ou será tratada por aqui ? 
[ 
    {
        title: "Máquinas"
        msg: "Z máquina está em CRÍTICO"
        value: ""
        detail: ""
    },
    {
        title: "Climatização"
        msg: "X máquina está em CRÍTICO"
        value: ""
        detail: ""
    },
    {
        title: "Máquinas"
        msg:" Y máquina está em ALERTA há algumas horas"
        value: ""
        detail: ""
    }
]
*/

app.post('/sendMessage', (req, res) => {
    res.json(req.body);
    req.body.forEach(c => {
        bot.sendMessage(chat_id, c.msg)
    });
});


const image = "https://h3d9f2s8.rocketcdn.me/wp-content/uploads/2022/08/Power-BI-Dashboard.png"

app.post('/sendImage', (req, res) => {
    try {
        bot.sendMessage(chat_id, 'Segue o anexo das analises: ');
        bot.sendPhoto(chat_id, image);
        res.send(200);
    } catch (err) {
        res.send(err);
    }
})

app.post('/send')

app.listen(3000, () => {
    console.log('O servidor está funcionando...')
});