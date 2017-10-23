const express = require("express");
const app = express();

//make ejs your default view engine
app.set('view engine', 'ejs');

//fetch css and js
app.use(express.static('./public'));

//parse json and form-urlencoded
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


var BookRoute = require("./route/BookRoute.js");
app.use("/api/books", BookRoute);


//404 page
app.get('*', function(req, res){
    res.send('what???', 404);
});


var port = 3000
app.listen(port, function() {
    console.log("listening to port " + port);
});
