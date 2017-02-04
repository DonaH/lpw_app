var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var logger = require ('morgan')
var cors = require('cors')
var Song = require('./models/Song.js')
var Genre = require('./models/Genre.js')
// App Constants
var MENSAJE = process.env.MENSAJE

var PORT = process.env.PORT || 3000
var DB_URL = 'mongodb://localhost/pwp_app'

// console.log(MENSAJE)

// Connect to DB
mongoose.connect(DB_URL, function(err){
  if(err) return console.log(err)
  console.log("Connected to MongoDB * * * * * pwp_app!")
})

// Initialize your express app
var app = express()

// Set up middleware
app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set up Root Route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

//  Restful get routes for 'songs'
app.get('/songs', function(req, res){
  Song.find({}, function(err, songs){
    res.json(songs)
  })
})
//  Restful get routes for 'songs:id'
//  Restful post routes for 'songs'
//  Restful patch routes for 'songs:id'
//  Restful delete routes for 'songs:id'

//  Restful get routes for 'genres'
app.get('/genres', function(req, res){
  Genre.find({}, function(err, genres){
    res.json(genres)
  })
})


app.listen(PORT, function(){
  console.log("Server started on port", PORT + '!!!!!!!!!!!!!!')
})
