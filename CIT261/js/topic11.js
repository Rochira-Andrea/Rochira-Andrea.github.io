
// target the first container
let checkBox = document.getElementById('checkBox');

// target the div containers (curtains)
let panels = document.querySelectorAll('.curtain__panel');

checkBox.addEventListener('click',function () {

    // loop through the div containers (curtains) and apply the transition properties
    for(let i =0; i < panels.length; i++) {
        panels[i].style.transition = "all 1s ease-out";
    }
});

// target the second container
let colorBox = document.getElementById('box2');

// create an array of colors to loop through at every click
let colors = ["#037E36","#F6AE2D","#F6511D","#00A8E8","#D7263D","#003459"];

// set a counter as a starting index value
let i = 0;

// add an event listener to collect any user click and change color
colorBox.addEventListener('click', function(){

    // check if the counter is lower than the array length and increase or reset it accordingly
    if (i < colors.length){
        // transition from a background color to the next in the array
        colorBox.style.cssText = "background:" + colors[i] + "; transition: background 1.5s linear";
        i++;
    } else {
        i = 0;
        colorBox.style.cssText = "background:" + colors[i] + "; transition: background 1.5s linear";
        i++;
    }
});

// control transitions in the third container
// transition to 100% height
function spike(elem){
    elem.style.cssText = "height: 100%; transition: height .5s linear";
}
// transition back to 20% height
function back(elem){
    elem.style.cssText = "height: 20%; transition: height .5s linear";
}

// control transitions in the fourth container

let flip = document.getElementById('box4');

flip.addEventListener('mouseover', function(){
    flip.style.cssText = "transform: rotateY(180deg); transition: all 1s linear";
});

flip.addEventListener('mouseleave',function(){
    flip.style.cssText = "transform: none; transition: all 1s linear";
});






