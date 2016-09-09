var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var db = require('./db');
var drawingController = require('./resources/drawingController');
var path = require('path');

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/../public'));
app.use('/static', express.static(__dirname + '/../public/node_modules/fabric/dist'));

var animals = [];
var clients = {};
var rounds = 0;
var queried = false;
var images;

io.on('connection', function(socket) {
  
  socket.on('name', function (name) {
    socket.name = name;
    clients[name] = 0;
    io.emit('readyView');
  });

  socket.on('ready', function () {
    io.sockets.emit('countdown', animals[Math.floor(Math.random() * animals.length)]);
    setTimeout(function () {
      io.emit('draw');
      setTimeout(function () {
        io.emit('end');
      }, 5000);
    }, 4000);
  });
  
  socket.on('image', function (data) {
    
    drawingController.addDrawing({
      playerName: socket.name,
      roundId: rounds,
      vectorDrawing: data
    });
    
    setTimeout(function () {
      if (!queried) {
        drawingController.retrieveRoundsDrawings(rounds, function (images) {
          io.sockets.emit('vote', images);
        });
        queried = true;
      }
    }, 4000);
      
  });
      
  socket.on('vote', function (name) {
    clients[name]++;
    
    setTimeout(function () {
      for (var i = 0; i < images.length; i++) {
        images[i].votes = clients[images[i][name]];
      }
      io.emit('results', images);
    }, Math.max(10000, clients.length * 2000));
    
  });

  socket.on('again', function () {
    rounds++;
    queried = false;
    io.emit('readyView');
  });

  socket.on('disconnect', function (something) {
    console.log('A SOCKET DISCONNECTED!');
    delete clients[socket.name];
  });

});

http.listen(3000, function(data) {
  console.log('server starting...');
});