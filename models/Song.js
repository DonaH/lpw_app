var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Setup Song Schema
var songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
  album: String,
  quarter: String   // MI's quarter system
 })

 var Song = mongoose.model('Song', songSchema)

 module.exports = Song
