
// ONLOAD event in the first container
window.onload = function(){
    let elem = document.getElementById('spin');
    elem.style.cssText = "animation: spin 3s linear infinite";
};

// FOCUS event in the second container
let fuoco = document.getElementById('focus');

fuoco.addEventListener('focusin', function(){
    fuoco.style.cssText = "background: #9B2F22; transition: all .5s ease-in-out";
});

fuoco.addEventListener('focusout',function () {
    fuoco.style.cssText = "background: #e63b25; transition: all .5s ease-in-out";
});

// CLICK event in the third container
function scale(elem){
    elem.classList.toggle("scale");
}

// ONMOUSE events in the fourth container
let moveon = document.getElementById('box4');
let quote = document.getElementById('quote');
let tip1 = document.getElementById('tip1');

moveon.addEventListener('mouseover', function () {
    quote.style.display = "inherit";
    tip1.style.display = "none";
});

moveon.addEventListener('mouseout', function () {
    quote.style.display = "none";
    tip1.style.display = "block";
});


// MOUSEDOWN/UP events in the fifth container
let movup = document.getElementById('box5');
let tip2 = document.getElementById('tip2');

movup.addEventListener('mousedown', function () {
    movup.style.backgroundImage = "url('img/SLTemple.jpeg')";
    movup.style.backgroundSize = "cover";
    tip2.style.display = "none";
});

movup.addEventListener('mouseup', function () {
    movup.style.backgroundImage = "";
    tip2.style.display = "block";
});


// KEYBOARD events in the sixth container
let keypress = document.getElementById('press');

keypress.addEventListener('keypress', function(){
    keypress.style.cssText = "background: #9B2F22; transition: background .5s ease-in-out; color: #E9A500;";
});

keypress.addEventListener('focusout',function () {
    keypress.style.cssText = "background: #e63b25; transition: background .5s ease-in-out;";
});

let release = document.getElementById('release');

release.onkeyup = function(){
    this.value = this.value.toUpperCase();
    release.style.cssText = "color: #E9A500;";
};


// ANIMATION events in container zero
let anime = document.getElementById('anime');

anime.addEventListener('click',function () {

    anime.classList.add('spin');

});

anime.addEventListener('animationstart',function(){
    anime.innerHTML = "Start";
});

anime.addEventListener('animationend',function () {

    anime.innerHTML = "End";

    // reset the properties after 1.5s, so the user can click again
    setTimeout(function(){

        anime.classList.remove('spin');

        anime.innerHTML = "Click Me";
    },1500);
});


/* ***************************
*  ****** TOUCH EVENTS *******
*  *************************** */


// TOUCHSTART event in the seventh container
let tstart = document.getElementById('box7');
let num = document.getElementById('counter');
let counter = 0;

tstart.addEventListener('touchstart',function () {

    // this tweak prevents a context menu to appear on long taps
    tstart.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };

    counter++;
    num.innerHTML = counter.toString();
    //
});

tstart.addEventListener('touchend',function () {
    return false;
});

// TOUCHSTART/TOUCHEND event in the eighth container
let tend = document.getElementById('box8');

tend.addEventListener('touchstart',function () {
    tend.style.cssText = "background: #93b7d2; transition: background .5s linear;";

    // this tweak prevents a context menu to appear on long taps
    tend.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };

});

tend.addEventListener('touchend',function () {
    tend.style.cssText = "background: transparent; transition: background .5s linear;";
});

// TOUCHMOVE event in the ninth container
let mouseX = 0, mouseY = 0;
let boxMove = document.getElementById('box9');
let output = document.getElementById('coordinates');

// this tweak prevents a context menu to appear on long taps
boxMove.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

boxMove.addEventListener("touchstart", function () {
    return false;
});

boxMove.addEventListener("touchend", function () {
    return false;
});

boxMove.addEventListener("touchmove", function (event) {

    // capture pointer's coordinates
    mouseX = event.changedTouches[0].pageX.toFixed();
    mouseY = event.changedTouches[0].pageY.toFixed();

    output.innerHTML = mouseX + ', ' + mouseY;

});













