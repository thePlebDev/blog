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
        .catch(error=>{
          res.status(500)
          console.log(error)
        })
    })


    app.get('/all',(req,res)=>{
      //READ
      postCollection.find().toArray()
      .then(results=>{
        res.status(200)
        res.send(results)
      })
      .catch({
        res.status(500)
        error =>console.error(error)
      })
    })

    app.get('/find',(req,res)=>{
      //find based on title
      postCollection.find({title:`${req.body.title}`}).toArray()
        .then(result=>{
          res.status(200)
          res.send(result)
        })
        .catch(error=>{
          res.status(500)
          console.error(error)})
    })

    app.put('/update',(req,res)=>{
      //UPDATE
      postCollection.update({"_id": ObjectId(`${req.body.id}`)},{
        $set:{"body":req.body.body}
      })
      .then(results=>{
        res.status(200)
        res.send(results)
      })
      .catch(error=>{
        res.status(500)
        res.send(error)
        console.log(error)
      })
    })

    app.delete('/delete',(req,res)=>{
      //DELETE
      postCollection.deleteOne({"_id":ObjectId(`${req.body.id}`)})
        .then(result=>{
          res.status(200)
          res.send(result)
        })
        .catch(error=>{
          res.status(500)
          console.log('error: ' + error)
        })

    })

  })
  .catch(err=>console.error('error: ' + err))

app.listen(3000,function(){
  console.log('listening on 3000')
})
