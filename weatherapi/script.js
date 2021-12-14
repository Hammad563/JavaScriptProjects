
var city = "Toronto";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=f852d366bd93a77322363abd175bd26c",
function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    
    $('.icon').attr('src', icon);
    $('.temp').append(temp);
    $('.weather').append(weather);
});

