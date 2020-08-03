const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Post = require('./models/posts.js');
const routes = require('./Routes/routes.js');
const MongoClient = require('mongodb').MongoClient

const app = express();
const connectionString = ''
//connection string

mongoose.connect(connectionString,{useNewUrlParser: true})
app.use(bodyParser.urlencoded({extended: true}))


MongoClient.connect(connectionString,{useUnifiedTopology:true})
  .then(clent=>{
    console.log('connected to database')
    const db = client.db('new-db')
    const personCollection = db.collection("");

    app.post('/quotes',(req,res)=>{
      personCollection.insertOne(req.body)
        .then(result=>{
          console.log(result)
        })
        .catch(error=>console.log(error))
    })
  })
  .catch(err=>console.error('error: ' + err))

app.use(bodyParser.json())

app.post('/quotes',(req,res)=>{
  const posts = new Post ({
    title: req.body.title,
    body:req.body.body
  })
  posts.save((error,document)=>{
    if(error){
      console.log(error)
    }else{
      console.log(document)
    }

  })
})

app.get('/',(req,res)=>{
  res.send('hello world')
})

app.listen(3000,function(){
  console.log('listening on 3000')
})
