// create a variable to hold the html button item
var btn = document.getElementById('btn');

// add an event listener to the button
btn.addEventListener('click', function(){

    // retrieve the value from the radio button checked
    var city = document.forms.list.city.value;

    // alternative working solution but a bit slower
    // var city = document.querySelector('input[name="city"]:checked').value;

    // create an instance of XMLHttpRequest
    var request = new XMLHttpRequest();

    // establish the connection
    request.open('GET','https://api.weatherbit.io/v2.0/current?city_id='+city+'&key=6323c0e51d8e43b984f1c294bd4f0d0a');

    // workaround
    // request.open('GET','https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?postal_code='+city+'&country=US&key=6323c0e51d8e43b984f1c294bd4f0d0a');

    // if the request is successfully completed, then go ahead
    request.onload = function () {

        // parse the JSON string returned by the API web service server
        var data = JSON.parse(request.responseText);

        // print the parsed data into the console (for debugging purpose)
        console.log(data);

        // call for the function responsible to display the data in the html page
        fillHTMLelement(data);
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
