const express = require('express');
const app = express();
/*
const linebot = require('@line/bot-sdk');


const config = {
    channelAccessToken:  process.env.LINE_MESSAGE_CHANNEL_ACCESS_TOKEN,
     channelSecret: process.env.LINE_MESSAGE_CHANNEL_SECRET
};

// create LINE SDK client
const client = new linebot.Client(config);
*/

app.get("/confirmPayment",async(req,res)=>{
   await res.send("OK");
});

module.exports = {
    path: '/api',
    handler: app
}