var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var logger = require ('morgan')
var cors = require('cors')
var Song = require('./models/Song.js')
var Genre = require('./models/Genre.js')
var bluebird = require('bluebird')
// App Constants
var MENSAJE = process.env.MENSAJE

var PORT = process.env.PORT || 3000
var DB_URL = 'mongodb://localhost/pwp_app'

// console.log(MENSAJE)

// Use bluebird
mongoose.Promise = global.Promise;

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
// app.use(bodyParser.urlencoded({extended: false}))

// Set up Root Route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

//  Restful get routes for 'genres'
app.get('/genres', function(req, res){
  Genre
    .find({})
    .exec(function(err, result){
      if (err) {
        throw error
      } else {
        res.json(result)
      }
  })
})

app.get('/genres/:id', function(req, res){
  Genre
    .find({_id:req.params.id})
    .exec(function(err, result){
      res.json(result)
    })
})

app.post('/genres', function(req, res){
  var theGenre = new Genre(req.body)
  console.log("y");
  theGenre.save(function (err, genre) {
    if (err) {
      throw err
    } else {
      res.json(theGenre)
    }
  })
})

app.patch('/genres/:id', function(req, res){
  console.log(req);
  Genre.findOneAndUpdate({_id:req.params.id}, req.body, function (err, genre) {
    if (err) {
      throw err
    } else {
      res.json(genre)
    }
  })
})

app.delete('/genres/:id', function(req, res){
  Genre.remove({_id: req.params.id}, function(err){
    if (err) {
      throw err
    } else {
      res.json({message: 'successfully removed genre'})
    }
  })
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

app.listen(PORT, function(){
  console.log("Server started on port", PORT + '!!!!!!!!!!!!!!')
})
