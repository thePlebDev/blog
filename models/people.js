const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const peopleSchema = new Schema({
  name:String,
  age:Number
})


const People = mongoose.model('Tank',schema);

module.exports = People
