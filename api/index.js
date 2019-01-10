const express = require('express');
//const session = require('express-session')
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


app.get("/getTime", async (req,res)=>{
    let timeInMss = await genOrderId();
    res.send(timeInMss);
});


function  genOrderId(){
   
    let rawDateTime = new Date();
    let res1 = rawDateTime.toString().split(" ");
    //let res2 = res1[0].split("-");
    //ex ==> Thu Jan 10 2019 10:56:16 GMT+0700 (SE Asia Standard Time)
    let resTime = res1[4].split(":");
    let strResult = res1[3]+res1[2]+res1[1]+resTime[0]+resTime[1]+resTime[2];

    return strResult;

}

app.post("/reservePayment",async(req,res)=>{

    let reqProductName = "";
    let reqProductSum = 0;
    var i=0;
    for(i = 0; i< req.body.data.myMenu.length; i++)
    {
        if(req.body.data.myMenu[i].amount > 0)
        {   reqProductName += req.body.data.myMenu[i].name+"("+ req.body.data.myMenu[i].amount+"), ";
            reqProductSum += (req.body.data.myMenu[i].amount* req.body.data.myMenu[i].price);
        }
    }
    
    
   
   
    let newOrderId = genOrderId();


    let formData = {
        productName: reqProductName,
        productImageUrl : req.body.data.productImageUrl,
        amount: reqProductSum,
        orderId: newOrderId,
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
        //res.send(body);
        req.session.LinePay_amount = reqProductSum;
        req.session.LinePay_currency = formData.currency;
        res.send(body);
        //res.redirect(response.info.paymentUrl.web);
    }
);
 });



app.get("/confirmPayment",async(req,res)=>{
   
    let formConfirm = {   
        //transactionId: req.query.transactionId,
        amount: req.session.LinePay_amount,
        currency:  req.session.LinePay_currency
    };

   await request({
    method: 'POST',
    url:  process.env.LinePay_Url+"v2/payments/"+req.query.transactionId+"/confirm",
    headers: 
        {
            'Content-Type': 'application/json',
            'X-LINE-ChannelId' : process.env.LinePay_ChannelID,
            'X-LINE-ChannelSecret' : process.env.LinePay_SecretKey,
        
        }
    ,
    body: JSON.stringify(formConfirm),
    },
    function (err, httpResponse, body) {
       
        //console.log(err, body);
        //res.status(status).send(body)
        if(body.returnCode == "0000")
        {  res.send("Transaction is completed"); }
        else
        {res.send(req.session.LinePay_amount + "-" + req.session.LinePay_currency+ "-"+body);  }
       
    });

});


module.exports = {
    path: '/api',
    handler: app
}