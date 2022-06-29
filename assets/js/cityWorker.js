self.addEventListener('message', async event => { 
    const name = event.data;
    const key = "39a1a2e6b6e227d118f6ab23d3d1da04"; 
    
    var response;
    var jsonObj;

    if(name != 'roma'){
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=metric&lang=it&appid=" + key,
                        {method:"GET"}
                        );

        jsonObj = await response.json();
    }else if(name == 'roma'){
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41&lon=12.4839&appid=" + key,
                        {method:"GET"}
                        );

        jsonObj = await response.json();
    }

    self.postMessage({ 
        city: name, 
        img: jsonObj.weather[0].icon,
        temp: jsonObj.main.temp 
    }); 
});
