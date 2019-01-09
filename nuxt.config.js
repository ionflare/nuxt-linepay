require("dotenv").config();
const bodyParser = require('body-parser')
const session = require('express-session')

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
    script: [{ src: 'https://d.line-scdn.net/liff/1.0/sdk.js' }],
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