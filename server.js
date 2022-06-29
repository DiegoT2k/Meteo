const express = require('express');
const path = require('path'); // per riferirci alle nostre risorse
const bodyParser = require('body-parser');

let urlEncoded = bodyParser.urlencoded({extended: false});

//configure dotenv package
require('dotenv').config();

const app = express(); // creiamo una variabile per usare i metodi express
const port = process.env.PORT || 8080;

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//indica dove si trovano i file statici
app.use(express.static(__dirname + '/assets'));

//root 
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/index', function(req, res){
	res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/cerca', function(req, res){
	res.sendFile(path.join(__dirname, '/views/cerca.html'));
});

app.get('/meteo', function(req, res){
	res.sendFile(path.join(__dirname, '/views/meteo.html'));
});

app.get('/cercaPrevisioni', function(req, res){
	res.sendFile(path.join(__dirname, '/views/cercaPrevisioni.html'));
});

app.post('/previsioni', urlEncoded, (req, res)=>{
	const city = req.body.city;
	res.sendFile(path.join(__dirname, '/views/previsioni.html'));
	res.render('previsioni', {title:city});
});

app.get('/form', function(req, res){
	res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.listen(port);
console.log('Server started ad http://localhost:' + port);

