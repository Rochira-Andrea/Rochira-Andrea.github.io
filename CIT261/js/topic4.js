
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    var request = new XMLHttpRequest();

    request.setRequestHeader('Access-Control-Allow-Origin','https://api.weatherbit.io/v2.0/current?postal_code=74100&country=IT&key=6323c0e51d8e43b984f1c294bd4f0d0a');
    request.open('GET','https://api.weatherbit.io/v2.0/current?postal_code=74100&country=IT&key=6323c0e51d8e43b984f1c294bd4f0d0a');

    request.onload = function (){

        if(request.status >= 200 && request.status <= 400) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            fillHTMLelement(data);
        } else {
            console.log("Connected but something is preventing to fetch data");
        }
    }

    request.onerror = function (){
        console.log("Connection error");
    }

    request.send();
});


function fillHTMLelement(info){

    var city = info.data[0].city_name;
    var temperature = info.data[0].temp;
    var desc = info.data[0].weather.description;

    document.getElementById('info1').innerHTML = city;
    document.getElementById('info2').innerHTML = temperature + " C&deg;";
    document.getElementById('info3').innerHTML = desc;
}
