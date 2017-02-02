var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Setup Genre Schema
var genreSchema = new mongoose.Schema({
  genre: String,
 })

 var Genre = mongoose.model('Genre', genreSchema)

 module.exports = Genre
