const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');

app.use(cors());
app.options('*', cors());
/*
const linebot = require('@line/bot-sdk');


const config = {
    channelAccessToken:  process.env.LINE_MESSAGE_CHANNEL_ACCESS_TOKEN,
     channelSecret: process.env.LINE_MESSAGE_CHANNEL_SECRET
};

// create LINE SDK client
const client = new linebot.Client(config);
*/

app.post("/reservePayment",async(req,res)=>{

    let reqProductName = "";
    let reqProductSum = 0;
    var i=0;
    for(i = 0; i< req.body.data.myMenu.length; i++)
    {
        if(req.body.data.myMenu[i].amount > 0)
        {   reqProductName += req.body.data.myMenu[i].abbreviation+"("+ req.body.data.myMenu[i].amount+"), ";
            reqProductSum += (req.body.data.myMenu[i].amount* req.body.data.myMenu[i].price);
        }
    }
    
    
    let formData = {
        productName: reqProductName,
        productImageUrl : req.body.data.productImageUrl,
        amount: reqProductSum,
        orderId: "1234xxxaaa",
        currency: 'THB',
        confirmUrl: process.env.HEROKU_URL+"api/confirmPayment",
        langCd : 'en',
        confirmUrlType: 'SERVER'
    };
   await request({
    method: 'POST',
    url:  process.env.LinePay_Url+'v2/payments/request',
    headers: 
        {
            'Content-Type': 'application/json',
            'X-LINE-ChannelId' : process.env.LinePay_ChannelID,
            'X-LINE-ChannelSecret' : process.env.LinePay_SecretKey,
        
        }
    ,
    body: JSON.stringify(formData),
    },
    function (err, httpResponse, body) {
        if(err)
        {console.log(err, body);}
        //console.log(err, body);
        //res.status(status).send(body);
        res.send(body);
    }
);
 });



app.get("/confirmPayment",async(req,res)=>{
   await res.send("OK");
});

module.exports = {
    path: '/api',
    handler: app
}