// const express = require("express");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const User = require('../models/user.js');
//
// const router = express.Router();
//
// router.get('/signup',()=>{
//   res.render('signup')
// })
//
// router.post('/quotes',(req,res)=>{
//   console.log('hellooooooo')
// })
// //body parser add the username and password to req.body. it will parse all incoming requests
// router.post('/signup',function(req,res){
//   let username = req.body.username;
//   let password = req.body.password;
//
//   User.findOne({ username:username },function(err,user){
//     if (err){return next(err); }
//     if(user) {
//       req.flash('error'," User already exists");
//       return res.redirect("/signup");
//     }
//     let newUser = new User({
//       username: username,
//       password: password
//     });
//     newUser.save(next);
//   })
// },passport.authenticate('login',{
//   successRedirect:'/',
//   failureRedirect:'/signup',
//   failureFlash:true
// }))
