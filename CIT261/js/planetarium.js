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
    document.getElementById('logo').style.cssText = "visibility: hidden";
});

let closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function () {
    document.getElementById('overNav').style.width = "0%";
    document.getElementById('openBtn').style.cssText = "visibility: inherit; transition: visibility .5s linear";
    document.getElementById('logo').style.cssText = "visibility: inherit; transition: visibility .5s linear .4s";
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
    document.getElementById('logo').style.cssText = "visibility: inherit; transition: visibility .5s linear .4s";
    document.getElementById('hint').style.cssText = "visibility: hidden;";
    document.getElementById('bottomBtn').style.display = "none";
    document.getElementById('display-response').style.display = "none";
}


/* Submit Selection to API */
let submit = document.querySelector('.search-wrapper');

submit.addEventListener('click',function(){

    // make sure the tiles are flipped correctly after any search
    let tiles = document.querySelectorAll('.tile');

    tiles.forEach(flipBack);
    function flipBack(el){
        el.style.cssText = "transform: none; transition: transform .3s linear";
    }

    // retrieve the selected value
    let input = document.getElementById('input').value;

    if(input === ""){
        document.getElementById('hint').innerText = "Please enter or select a name";


    }else {

        // create an instance of XMLHttpRequest
        let request = new XMLHttpRequest();

        // some values have spaces in between, here we match the user selection with the correct body id
        if (input === "The Little Prince") {
            input = "petitprince";
        } else if (input.indexOf(" ") !== -1){
            input = (input.replace(/\//g, '')).replace(/ /g,"");
            console.log();
        }

        // establish the connection
        request.open('GET', 'https://api.le-systeme-solaire.net/rest.php/bodies/' + input);


        // if the request is successfully completed, then go ahead
        request.onload = function () {

            // parse the JSON string returned by the API web service server
            let data = JSON.parse(request.responseText);

            // print the parsed data into the console (for debugging purpose)
            //console.log(data);

            // call for the function responsible to display the data in the html page
            fillHTMLelement(data);
        }

        request.send();
    }
});


function fillHTMLelement(jstring){
    document.getElementById('bottomBtn').style.cssText = "display: flex; flex-flow: row nowrap; justify-content: center; position:absolute; bottom:4em; left:47.5%; animation: upDownBtn 2s linear infinite;";
    document.getElementById('display-response').style.cssText = "display: flex; flex-flow: row wrap; align-items: center; justify-content: space-evenly; width: 100vw; height: 100vh;";
    document.getElementById('hint').innerText = "Great! Now scroll down or click on the arrow";
    document.getElementById('hint').style.visibility = "visible";

    // make sure to empty any child node within the information tiles
    let backs = document.querySelectorAll('.back');

    backs.forEach(clean);

    function clean(back){
        while (back.firstChild) {
            back.removeChild(back.firstChild);
        }
    }

    /* handle heavenly body name in the Name tile */
    if(jstring.englishName !== "") {
        document.getElementById('body-name').innerText = jstring.englishName;
    } else {
        document.getElementById('body-name').innerText = jstring.name;
    }

    // handle information in the General Info frame
    let generalBox = document.querySelector('.general');

    if(jstring.englishName == "Sun"){
            let p = document.createElement('p');
            generalBox.appendChild(p).innerHTML = "The Sun is the star at the center of the Solar System. It is by far the most important source of energy for life on Earth. ";
    }

    if(jstring.isPlanet === true){
            let p = document.createElement('p');
            generalBox.appendChild(p).innerHTML = jstring.englishName + " is a planet";
    } else if (jstring.isPlanet === false && jstring.englishName !== "Sun") {
            let p = document.createElement('p');
            generalBox.appendChild(p).innerHTML = jstring.englishName + " is a moon of " + jstring.aroundPlanet.planet;
    }


    if(jstring.alternativeName !== ""){
        let p = document.createElement('p');
        generalBox.appendChild(p).innerHTML = "Alternative Name: " + jstring.alternativeName;
    }

    if(jstring.discoveredBy !== "") {
        let p = document.createElement('p');
        generalBox.appendChild(p).innerHTML = "Discovered By: " + jstring.discoveredBy;
    }

    if(jstring.discoveryDate !== "") {
        let p = document.createElement('p');
        generalBox.appendChild(p).innerHTML = "Discovery Date: " + jstring.discoveryDate;
    }

    // handle information in the Orbital Parameters frame
    let orbital = document.querySelector('.orbital');

    if(jstring.perihelion !== 0 && jstring.aphelion !== 0){
        let p1 = document.createElement('p');
        orbital.appendChild(p1).innerHTML = "Perihelion: " + jstring.perihelion + " km";
        let p2 = document.createElement('p');
        orbital.appendChild(p2).innerHTML = "Aphelion: " + jstring.aphelion + " km";
    }

    if(jstring.eccentricity !== ""){
        let p = document.createElement('p');
        orbital.appendChild(p).innerHTML = "Eccentricity: " + jstring.eccentricity;
    }

    if(jstring.sideralOrbit !== ""){
        let p = document.createElement('p');
        orbital.appendChild(p).innerHTML = "Orbital Period: " + jstring.sideralOrbit + " days";
    }

    if(jstring.inclination !== ""){
        let p = document.createElement('p');
        orbital.appendChild(p).innerHTML = "Inclination: " + jstring.inclination + " degrees";
    }

    // handle information in the Physical Properties frame
    let physical = document.querySelector('.physical');

    if(jstring.density !== ""){
        let p = document.createElement('p');
        physical.appendChild(p).innerHTML = "Mean Density: " + jstring.density + " g/cm"+ "<sup>3</sup>";
    }

    if(jstring.gravity !== ""){
        let p = document.createElement('p');
        physical.appendChild(p).innerHTML = "Gravity: " + jstring.gravity + " m/s"+ "<sup>2</sup>";
    }

    if(jstring.meanRadius !== ""){
        let p = document.createElement('p');
        physical.appendChild(p).innerHTML = "Mean Radius: " + jstring.meanRadius + " km";
    }

    if(jstring.vol.volValue !== "" && jstring.vol.volValue !== 0){
        let p = document.createElement('p');
        physical.appendChild(p).innerHTML = "Volume: " + jstring.vol.volValue + " x 10"+"<sup>"+ jstring.vol.volExponent +"</sup>"+" km"+ "<sup>3</sup>";
    }

    if(jstring.mass.massValue !== ""){
        let p = document.createElement('p');
        physical.appendChild(p).innerHTML = "Mass: " + jstring.mass.massValue + " x 10"+"<sup>"+ jstring.mass.massExponent +"</sup>"+ " kg";
    }

}

/* Flip Tiles */

function flip(el){
    el.style.cssText = "transform: rotateY(180deg); transition: transform .4s linear .2s";
}
