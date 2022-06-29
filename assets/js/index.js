/** Geolocalizzazione **/
var key = "39a1a2e6b6e227d118f6ab23d3d1da04";

async function geoLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	}else{
		x.innerText = "Geolocalizzazione non supportata da questo browser";
	};
}

async function showPosition(position){
	let lat = position.coords.latitude;
	let lon = position.coords.longitude;

	var response = await
	fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key + "&units=metric&lang=it",
		{method:"GET"}
		);

	var jsonObj = await response.json();

	document.getElementById('location').innerText = jsonObj.name + " " + jsonObj.main.temp + "°";
	document.getElementById('local').innerText = jsonObj.weather[0].description + "\n" + "Umidità: " + jsonObj.main.humidity + "%\n" + "Vento: " + jsonObj.wind.speed + " m/s";
	document.getElementById('meteoLocal').src = "http://openweathermap.org/img/w/" + jsonObj.weather[0].icon + ".png";

}

geoLocation();

/** Dark Mode **/
const check = document.getElementById("check"),
	h2 = document.getElementsByTagName("h2");

if(localStorage.getItem('darkMode') === null){
	localStorage.setItem('darkMode', "false");
}

checkStatus()

function checkStatus(){
	if(localStorage.getItem('darkMode') === "true"){
		check.checked = true;
		document.body.style.backgroundColor = "#222";
		h2[0].style.color = "#fff";
	}else{
		check.checked = false;
		document.body.style.backgroundColor = "#fff";
		h2[0].style.color = "#222";
	}
}

function changeStatus(){
	if(localStorage.getItem('darkMode') === "true"){
		localStorage.setItem('darkMode', "false");
		checkStatus();
	}else{
		localStorage.setItem('darkMode', "true");
		checkStatus();	
	}
}