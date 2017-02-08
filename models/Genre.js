var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Setup Genre Schema
var genreSchema = new mongoose.Schema({
  name: String,
 })

 var Genre = mongoose.model('genre', genreSchema)

 module.exports = Genre
