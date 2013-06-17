var express = require('express');

var app = module.exports = express();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
});

// Routes
app.get('/', function(req, res){
 res.render('index', { title: 'Express' })
});

app.listen(3001);
console.log("Express server listening on port 3000");
