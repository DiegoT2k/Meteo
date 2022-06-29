const myWorker = new Worker("js/cityWorker.js");

const city = ['milano', 'firenze', 'roma', 'palermo', 'parigi', 'londra', 
			'madrid', 'amsterdam', 'lima', 'new york', 'mosca', 'sydney'];

city.forEach(cityElement => { 
    myWorker.postMessage(cityElement); 
}); 

myWorker.addEventListener('message', event => { 
    const data = event.data; 
    document.getElementById('' + data.city + '').innerHTML += data.temp + "°";
    document.getElementById(data.city + 'Img').src = "http://openweathermap.org/img/w/" + data.img + ".png";
});



/** 
var xhrObject = new XMLHttpRequest();
var key = "39a1a2e6b6e227d118f6ab23d3d1da04";

function success(){
	var data = JSON.parse(this.responseText);
	document.getElementById('time').innerHTML += data.main.temp + "°"
	document.getElementById('milano').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
};

xhrObject.onload = success;

xhrObject.open(
	"GET",
	"https://api.openweathermap.org/data/2.5/weather?lat=45.4643&lon=9.1895&appid="+key+"&units=metric&lang=it",
	true
);

xhrObject.send();
**/