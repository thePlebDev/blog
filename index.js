const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash =require('connect-flash');

const routes = require('./Routes/routes.js');

const app = express();

// mongoose.connect("mongodb://localhost:27017");
//
// app.set("port",process.env.PORT || 3000);
//
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(cookieParser());
// app.use(session({
//   secret:"keyboard_cat",
//   resave:true,
//   saveUninitialized:true
// }))
// app.use(flash());
// app.listen(app.get('port'), function(){
//   console.log("server started on port" + app.get("port"))
// })
app.post('/quotes',(req,res)=>{
  res.send('it do be like that sometimes')
})
app.get('/',(req,res)=>{
  res.send('hello world')
})

app.listen(3000,function(){
  console.log('listening on 3000')
})
