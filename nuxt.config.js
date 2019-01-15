require("dotenv").config();
const bodyParser = require('body-parser')
const session = require('express-session')
const pkg = {name : "LinePayLiff", description : "Test Line Pay"}

 // setBaseURL
var env = process.env.NODE_ENV || 'development';
if (env === 'development' || env === 'test') {
  var API_URL='http://localhost:3000' //blank: localhost:3000
}
else{
  var API_URL=process.env.HEROKU_URL
}
module.exports = {
    mode: 'universal',


    head: {
      title: pkg.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description }
      ],
      // ===(1)開始===
      script: [{ src: 'https://d.line-scdn.net/liff/1.0/sdk.js' }],
      // ===(1)終了===
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },



    serverMiddleware:[
      
      bodyParser.json(),
      session({
        secret: 'test',
        resave: false,
        saveUninitialized: false,
        cookie            : {
          // maxAge : 1000 * 60 * 60 * 24 * 30, // 30日
          maxAge : 1000 * 60 * 60, // 60min
      }
      }),
      
      '~/api'
      
    ],
    
    loading: { color: "#FFFFFF" },
    
    plugins: [
    "@/plugins/vuetify",
    ],
    modules: [
       
      '@nuxtjs/axios',
 
    
    ],
    axios: {
      // See https://github.com/nuxt-community/axios-module#options
      baseURL: API_URL
    },
    
   
}