/* Focus Event */

let fuoco = document.querySelector('.select');

fuoco.addEventListener('mouseover', function(){
    fuoco.style.cssText = "background: rgba(194,194,194,0.1); transition: background .5s ease-in-out";
});

fuoco.addEventListener('mouseleave',function () {
    fuoco.style.cssText = "background: transparent; transition: background .5s ease-in-out";
});

/* Menu Button Settings */ 
let openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click',function(){
    document.getElementById('overNav').style.width = "100%";
    document.getElementById('openBtn').style.cssText = "visibility: hidden; transition: visibility .5s linear";
});

let closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function () {
    document.getElementById('overNav').style.width = "0%";
    document.getElementById('openBtn').style.cssText = "visibility: inherit; transition: visibility .5s linear";
});

/* Span settings */
function scale(el){
    el.style.cssText = "transform: scale(1.1); transition: transform .5s ease-in-out";
}

function unscale(el){
    el.style.cssText = "transform: scale(1); transition: transform .5s ease-in-out";
}

function insert(el){
    fuoco.value = el.innerText;
    document.getElementById('overNav').style.width = "0%";
    document.getElementById('openBtn').style.cssText = "visibility: inherit; transition: visibility .5s linear";
    document.getElementById('hint').style.cssText = "visibility: hidden;";
}


/* Submit Selection to API */
let submit = document.querySelector('.search-wrapper');

submit.addEventListener('click',function(){

    // retrieve the selected value
    let input = document.getElementById('input').value;

    // create an instance of XMLHttpRequest
    var request = new XMLHttpRequest();

    // establish the connection
    request.open('GET','https://api.le-systeme-solaire.net/rest/bodies/{'+input+'}');

    // if the request is successfully completed, then go ahead
    request.onload = function () {

        // parse the JSON string returned by the API web service server
        var data = JSON.parse(request.responseText);

        // print the parsed data into the console (for debugging purpose)
        console.log(data);

        // call for the function responsible to display the data in the html page
        //fillHTMLelement(data);
    }

    request.send();
});


/* Display Response */

function flip(el){
    el.style.cssText = "transform: rotateY(180deg); transition: transform 1s linear";
}

function flipBack(el){
    el.style.cssText = "transform: none; transition: transform 1s linear";
}
