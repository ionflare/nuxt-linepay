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
      link: [{rel: 'icon', type: 'image/x-icon', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css'}, {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'} ]
      //<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
      //link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}, {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'} ]
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
      baseURL: API_URL
    },
    
   
}