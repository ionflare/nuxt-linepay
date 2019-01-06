require("dotenv").config();
const bodyParser = require('body-parser')
//const session = require('express-session')

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