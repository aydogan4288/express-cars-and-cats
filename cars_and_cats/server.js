var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response) {
   response.render('index.html');
});

app.get('/cars.html', function(request, response) {
   response.render('/cars.html');
});

app.get('/cats.html', function(request, response) {
   response.render('./static/cats.html');
});

app.get('/form.html', function(request, response) {
   response.render('./static/form.html');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
