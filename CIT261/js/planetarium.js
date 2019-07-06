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
    document.getElementById('bottomBtn').style.display = "none";
    document.getElementById('display-response').style.display = "none";
}


/* Submit Selection to API */
let submit = document.querySelector('.search-wrapper');

submit.addEventListener('click',function(){

    // retrieve the selected value
    let input = document.getElementById('input').value;

    if(input === ""){
        document.getElementById('hint').innerText = "Please enter or select a name";
    }else {

        // create an instance of XMLHttpRequest
        var request = new XMLHttpRequest();

        // some values have spaces in between, here we match the user selection with the correct body id
        if (input === "The Little Prince") {
            input = "petitprince";

        } else if (input === "Ultima Thule") {
            input = "ultima-thule";
        }
        // establish the connection
        request.open('GET', 'https://api.le-systeme-solaire.net/rest.php/bodies/' + input);


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
    }
});


function fillHTMLelement(jstring){
    document.getElementById('bottomBtn').style.cssText = "display: flex; flex-flow: row nowrap; justify-content: center; position:absolute; bottom:1em; left:47.5%; animation: upDownBtn 3s linear infinite;";
    document.getElementById('display-response').style.cssText = "display: flex; flex-flow: row wrap; align-items: center; justify-content: space-evenly; width: 100vw; height: 100vh;";
    document.getElementById('body-name').innerText = jstring.englishName;



}

/* Display Response */

function flip(el){
    el.style.cssText = "transform: rotateY(180deg); transition: transform 1s linear";
}

function flipBack(el){
    el.style.cssText = "transform: none; transition: transform 1s linear";
}
