var express = require('express'),
    stickies = require('./routes/stickies');
 
var app = express();
 

var port = process.env.PORT || 3000;

app.configure(function () {
    app.use(express.logger('dev'));     
    app.use(express.bodyParser());
});

/* enabling CORS see : http://www.html5rocks.com/en/tutorials/cors/ */
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


app.get('/', stickies.findAll);
app.get('/pinboard', stickies.findAll);



/*
changes made 8December2014, by Hemant kumar.
*/

//Handling post requests for this URL, calling a function from stickies.js.

app.post('/pinboard', stickies.saveEntry);

/*
changes end
*/



app.get('/pinboard/:id', stickies.detaild);
app.get('/test', stickies.test);
 
app.listen(port);
console.log('Listening on pt 3000...');