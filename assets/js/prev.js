var x = document.getElementById('local');
var y = document.getElementById('location');
var z = document.getElementById('meteoLocal');
var city = document.getElementById('location').innerHTML;

async function setNow(){
	var response = await
	fetch("http://api.openweathermap.org/geo/1.0/direct?q="+ city +"&appid=39a1a2e6b6e227d118f6ab23d3d1da04",
		{method:"GET"}
		);

	var jsonObjCoord = await response.json();
	var lat = jsonObjCoord[0].lat;
	var lon = jsonObjCoord[0].lon;

	var response = await
	fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=39a1a2e6b6e227d118f6ab23d3d1da04&units=metric&lang=it",
		{method:"GET"}
		);

	var jsonObj = await response.json();

	y.textContent = jsonObj.name + " " + jsonObj.main.temp + "°";
	x.innerText = jsonObj.weather[0].description + "\n" + "Umidità: " + jsonObj.main.humidity + "%\n" + "Vento: " + jsonObj.wind.speed + " m/s";
	z.src = "http://openweathermap.org/img/w/" + jsonObj.weather[0].icon + ".png";
	
}

async function getWeatherWeek(){
	var response = await
	fetch("http://api.openweathermap.org/geo/1.0/direct?q="+ city +"&appid=39a1a2e6b6e227d118f6ab23d3d1da04",
		{method:"GET"}
		);

	var jsonObjCoord = await response.json();
	var lat = jsonObjCoord[0].lat;
	var lon = jsonObjCoord[0].lon;

	var response = await
	fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=current,minutely,hourly&appid=39a1a2e6b6e227d118f6ab23d3d1da04&units=metric",
		{method:"GET"}
		);

	var jsonObj = await response.json();
	console.log(jsonObj);

	for(let i = 1; i < 8; i++){
		document.getElementById('meteo' + i).src = "http://openweathermap.org/img/w/" + jsonObj.daily[i].weather[0].icon + ".png";
		document.getElementById('temp'+ i +'max').textContent = jsonObj.daily[i].temp.max + "°";
		document.getElementById('temp'+ i +'min').textContent = jsonObj.daily[i].temp.min + "°";

		document.getElementById('rain' + i).textContent = jsonObj.daily[i].pop * 100 + "%";	
	}

	var day = new Date();
	day.setDate(day.getDate()+2);
	for(let i = 2; i < 8; i++){
		document.getElementById('row'+i).textContent = day.getDate() + "/" + (day.getMonth()+1);
		day.setDate(day.getDate()+1);	
	}

}


getWeatherWeek();
setNow()