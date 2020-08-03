const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const blogSchema = new Schema({
  title:{type:String,required:true},
  body:{type:String,required:true},
  date:{type:Date, default:Date.now}
})

const Post = mongoose.model('Post',blogSchema)

module.exports = Post
