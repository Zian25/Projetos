// Externals
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config({path:"/utils/.env"})

// Internals
import {getWeather} from "./src/network/weather.js";

const opt = {polling:true}

const bot = new TelegramBot(String("YOUR BOT TOKEN"), opt);


bot.onText(RegExp('/\\current/'), (msg)=>{
    const chatId = msg.chat.id
    const resp = getWeather({current:true})
    resp.then((valor)=>{bot.sendMessage(chatId, valor)})
})

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (!msg.text){return}
    console.log(`${msg.from.username} disse: ${msg.text}`)
    if (msg.text.toString().toLowerCase().includes("/current")){
        const resp = getWeather({current:true})
        resp.then((valor)=>{bot.sendMessage(chatId, valor)})
    }
});

bot.on("polling_error", console.log)