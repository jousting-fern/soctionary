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
  'fishy',
  'birdie',
  'elephant',
  'dolphin',
  'puppy',
  'horsey',
  'bunny',
  'snail',
  'mouse',
  'seal',
  'piggy',
  'cow',
  'turkey',
  'camel',
  'kitty',
  'rhino',
  'bear',
  'spider',
  'ant',
  'caterpillar',
  'porcupine',
  'anteater',
  'platypus',
  'chicken',
  'hippo',
  'flamingo',
  'snake',
  'iguana',
  'alligator',
  'starfish',
  'armadillo',
  'octopus',
  'sheep',
  'chupacabra',
  'kangaroo',
  'beaver',
  'crab',
  'manatee',
  'deer',
  'whale',
  'wolf',
  'squirrel',
  'skunk',
  'lion',
  'giraffe',
  'buffalo',
  'bat',
  'bee',
  'beetle',
  'owl',
  'ostrich',
  'hummingbird',
  'worm',
  'jellyfish',
  't-rex',
  'slug',
  'dragon',
  'goat',
  'ram',
  'stingray',
  'human',
  'narwhal',
  'shrimp',
  'lobster',
  'eagle',
  'tiger',
  'clam',
  'squid',
  'kiwi',
  'walrus',
  'peacock',
  'koala',
  'duck',
  'goose',
  'stegosaurus',
  'liger',
  'ferret',
  'warthog',
  'swan',
  'hamster',
  'fly',
  'piranha',
  'unicorn',
  'cyclops',
  'ghost',
  'griffin',
  'sphinx',
  'cobra',
  'werewolf',
  'pegasus',
  'harpy',
  'gorilla',
  'otter',
  'grasshopper',
  'moose',
  'sea cucumber',
  'eel',
  'weasel',
  'angler fish',
  'minotaur',
  'wolverine',
  'mantis',
  'loch ness monster',
  'kraken',
  'yeti',
  'toucan',
  'seahorse',
  'clownfish',
  
];

var images;
var rooms = {};

io.on('connection', function(socket) {
  
  socket.on('name', function (data) {
    console.log('room is ', data.room);
    socket.name = data.name;
    if (data.room && rooms[data.room]) {
      var room = data.room;
      socket.join(room.toLowerCase().trim());
    } else if (!data.room) {
      var alph = 'abcdefghijklmnopqrstuvwxyz';
      do {
        var room = '';
        for (var i = 0; i < 5; i++) {
          //console.log(alph[Math.floor(Math.random() * 26)])
          room += alph[Math.floor(Math.random() * 26)];
          console.log('room', room);
        }
      } while (rooms[room] !== undefined)
      rooms[room] = {};
      rooms[room].round = {};
      socket.join(room);
    } else {
      room = data.room.toLowerCase().trim();
      rooms[room] = {};
      rooms[room].round = {};
      socket.join(room);
    }
    //console.log(room);
    //console.log(socket);
    rooms[room].userCount ? rooms[room].userCount++ : rooms[room].userCount = 1;
    rooms[room].state = 'ready';
    socket.emit('readyView', room);
  });

  socket.on('ready', function () {
    for (var key in socket.rooms) {
      if (key.length === 5) {
        var room = key;
      }
    }
    if (rooms[room].state === 'ready') {
      rooms[room].state = 'drawing';
      console.log('room in ready', room);
      io.to(room).emit('countdown', animals[Math.floor(Math.random() * animals.length)]);
      setTimeout(function () {
        io.to(room).emit('draw');
        setTimeout(function () {
          io.to(room).emit('end');
        }, 5000);
      }, 4000);
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
    if (rooms[room].state === 'drawing') {
      setTimeout(function () {
        rooms[room].state = 'voting';
      }, 100);
      
      
      setTimeout(function () {
        //console.log('DATA HERE IS', rooms[room]);
        var time = Math.max(15);
        //console.log('time', time);
        console.log('vote pictures are', rooms[room].round)
        io.to(room).emit('vote', {
          images: rooms[room].round,
          time: time,
          playerName: socket.name
        });
        setTimeout(function () {
          io.to(room).emit('countVotes');
        }, time * 1000);

      }, 3000);
    }
  });
      
  socket.on('vote', function (name) {
    for (var key in socket.rooms) {
      if (key.length === 5) {
        var room = key;
      }
    }
    if (rooms[room].state === 'voting') {
      setTimeout(function () {
        rooms[room].state = 'result';
      }, 100);
      
      if (name) {
        rooms[room].round[name].votes++;
      }
          
      setTimeout(function () {
        console.log('pictures are', rooms[room].round)
        socket.emit('results', rooms[room].round);
      }, 1000);
    }
  });

  socket.on('again', function () {
    for (var key in socket.rooms) {
      if (key.length === 5) {
        var room = key;
      }
    }
    if (rooms[room].state = 'result') {
      rooms[room].state = 'ready';
      rooms[room].round = {};
      io.to(room).emit('readyView', room);
    }
  });

  socket.on('disconnect', function () {
    console.log('A SOCKET DISCONNECTED!');
    for (var key in socket.rooms) {
      if (key.length === 5) {
        var room = key;
      }
    }
    if (rooms[room]) {
      rooms[room].userCount--;
      if (rooms[room].userCount < 1) {
        delete rooms[room];
      }
    }
    
  });

});


http.listen(port, function(data) {
  console.log('listening on ' + port);

});