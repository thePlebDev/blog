const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Post = require('./models/posts.js');
const routes = require('./Routes/routes.js');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const app = express();
const connectionString = ''
//connection string

mongoose.connect(connectionString,{useNewUrlParser: true})
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


MongoClient.connect(connectionString,{useUnifiedTopology:true},{ useUnifiedTopology: true })
  .then(client=>{
    console.log('connected to database')
    const db = client.db('new-db')
    const postCollection = db.collection("posts");


    app.post('/posts',(req,res)=>{
      //CREATE
      postCollection.insertOne(req.body)
        .then(result=>{
          console.log(result)
          res.send('all good');
        })
        .catch(error=>console.log(error))
    })


    app.get('/all',(req,res)=>{
      //READ
      postCollection.find().toArray()
      .then(results=>{
        res.send(results)
      })
      .catch(error =>console.error(error))
    })

    app.put('/update',(req,res)=>{
      //UPDATE
      postCollection.update({"_id": ObjectId(`${req.body.id}`)},{
        $set:{"body":req.body.body}
      })
      .then(results=>{
        console.log(results)
        res.send(results)
      })
      .catch(error=>{
        res.send(error)
        console.log(error)
      })
    })
    app.delete('/delete',(req,res)=>{

    })
      //DELETE
  })
  .catch(err=>console.error('error: ' + err))



// app.post('/quotes',(req,res)=>{
//   const posts = new Post ({
//     title: req.body.title,
//     body:req.body.body
//   })
//   posts.save((error,document)=>{
//     if(error){
//       console.log(error)
//     }else{
//       console.log(document)
//     }
//
//   })
// })

app.get('/',(req,res)=>{
  res.send('hello world')
})

app.listen(3000,function(){
  console.log('listening on 3000')
})
