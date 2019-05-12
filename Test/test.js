// create a variable to hold the html button item
var btn = document.getElementById('btn');

// add an event listener to the button
btn.addEventListener('click', function(){

    // retrieve the value from the radio button checked
    //var city = document.forms.list.city.value;

    // alternative working solution but a bit slower
    // var city = document.querySelector('input[name="city"]:checked').value;

    // create an instance of XMLHttpRequest
    var request = new XMLHttpRequest();

    // establish the connection
    request.open('GET','http://dev.virtualearth.net/REST/v1/Locations?q=los%20angeles&output=json&key=AiHEmAatcY9KyySrdotAy9AkyhZqcGZegE9pRvecG25MQpbShbWNYGmj8YzmLBKj');

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

    var city = info.resourceSets[0].resources[0].name;
    var latitude = info.resourceSets[0].resources[0].point.coordinates[0];
    var longitude = info.resourceSets[0].resources[0].point.coordinates[1];

    document.getElementById('info2').innerHTML = latitude;
    document.getElementById('info3').innerHTML = longitude;
    document.getElementById('info1').innerHTML = city;


}
