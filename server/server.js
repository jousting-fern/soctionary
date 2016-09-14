var express = require('express');  
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 1337;

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/../public'));
app.use('/static', express.static(__dirname + '/../public/node_modules/fabric/dist'));

var animals = [
  'penguin',
  'turtle',
  'butterfly',
  'dragonfly',
  'frog',
  'monkey',
  'shark',
  'fish',
  'bird',
  'elephant',
  'dolphin',
  'dog',
  'horse',
  'bunny',
  'snail',
  'mouse',
  'seal',
  'pig',
  'cow',
  'turkey',
  'camel',
  'cat',
  'rhino',
  'bear',
  'spider',
  'ant',
  'caterpillar',
  'porcupine',
  'anteater'
];

var images;
var rooms = {};

io.on('connection', function(socket) {
  
  socket.on('name', function (data) {
    socket.name = data.name;
    if (data.room) {
      socket.join(data.room.toLowerCase);
    } else {
      var alph = 'abcdefghijklmnopqrstuvwxyz';
      do {
        var room = '';
        for (var i = 0; i < 5; i++) {
          console.log(alph[Math.floor(Math.random() * 26)])
          room += alph[Math.floor(Math.random() * 26)];
          console.log('room', room);
        }
      } while (rooms[room] !== undefined)
      rooms[room] = {};
      rooms[room].locked = false;
      rooms[room].round = {};
    }
    socket.join(room);
    console.log(room);
    console.log(socket);
    socket.emit('readyView', room);
  });

  socket.on('ready', function () {
    for (var key in socket.rooms) {
      if (key.length === 5) {
        var room = key;
      }
    }
    if (!rooms[room].locked) {
      rooms[room].locked = true;
      console.log('room in ready', room);
      io.to(room).emit('countdown', animals[Math.floor(Math.random() * animals.length)]);
      setTimeout(function () {
        io.to(room).emit('draw');
        setTimeout(function () {
          io.to(room).emit('end');
        }, 5000);
      }, 4000);
      setTimeout(function () {
        rooms[room].locked = false;
      }, 30000);
    }
  });
  
  socket.on('image', function (data) {
    for (var key in socket.rooms) {
      if (key.length === 5) {
        var room = key;
      }
    }
    rooms[room].round[socket.name] = {
      votes: 0,
      vectorDrawing: data
    };
    
    setTimeout(function () {
      console.log('DATA HERE IS', rooms[room]);
      var time = Math.max(15);
      console.log('time', time);
      io.to(room).emit('vote', {
        images: rooms[room].round,
        time: time,
        playerName: socket.name
      });
      setTimeout(function () {
        io.to(room).emit('countVotes');
      }, time * 1000);

    }, 3000);
     
  });
      
  socket.on('vote', function (name) {
    for (var key in socket.rooms) {
      if (key.length === 5) {
        var room = key;
      }
    }
    if (name) {
      rooms[room].round[name].votes++;
    }
        
    setTimeout(function () {
      socket.emit('results', rooms[room].round);
    }, 1000);
  });

  socket.on('again', function () {
    rooms[room].round = {};
    io.emit('readyView');
  });

  socket.on('disconnect', function (something) {
    console.log('A SOCKET DISCONNECTED!');
    for (var key in socket.rooms) {
      if (key.length === 5) {
        var room = key;
      }
    }
    if (room) {
      delete rooms[room].round[socket.name];
      if (Object.keys(rooms[room].round).length === 0) {
        delete rooms[room];
      }
    }
  });

});


http.listen(port, function(data) {
  console.log('listening on ' + port);

});