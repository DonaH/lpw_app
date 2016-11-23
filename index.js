var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')
// App Constants
var MENSAJE = process.env.MENSAJE

var PORT = process.env.PORT || 3000
// var DB_URL = 'mongodb://localhost/test'
var DB_URL = 'mongodb://localhost/pwp_app'

// console.log(MENSAJE)

// Connect to DB
mongoose.connect(DB_URL)

// Setup Song Model
var Song = mongoose.model('Song', {
  title: String,
  artist: String,
  genre: String,
  album: String,
  quarter: String   // MI's quarter system
 })

// Initialize your express app
var app = express()

// Set up middleware
app.use(express.static('public'))
app.use(bodyParser.json())

// Set up Root Route
app.get('/', function(request, response){
  response.sendFile(__dirname + '/public/index.html')
})

//  Restful get routes for 'songs'
//  Restful get routes for 'songs:id'
//  Restful post routes for 'songs'
//  Restful patch routes for 'songs:id'
//  Restful delete routes for 'songs:id'

app.listen(PORT, function(){
  console.log("Server started on port", PORT + '!!!!!!!!!!!!!!')
})
