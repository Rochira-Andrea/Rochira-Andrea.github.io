
/* ------------------------------------------
*           2D TRANSFORMATIONS
*  ------------------------------------------*/

// target the ANDROID icon
let android = document.getElementById("scandro");

// add an event listener to trigger the scale transform
android.addEventListener("mouseover",function(){
    android.style.cssText = "transform: scale(2.5); transition: transform .3s ease-in;";
});

// add an event listener to scale back
android.addEventListener("mouseout",function(){
    android.style.transform = "none";
});

// target APPLE icon
let apple = document.getElementById("scapple");

// add an event listener to trigger the scale transform
apple.addEventListener("mouseover", function(){
    apple.style.cssText = "transform: scale(-2);  transition: transform 1s ease-in-out;"
});

// add an event listener to scale back
apple.addEventListener("mouseout",function(){
    apple.style.transform = "none";
});

// target BIO-HAZARD icon
let bio = document.getElementById("robio");

// add an event listener to trigger the rotation
bio.addEventListener("mouseover", function(){
    bio.style.cssText = "transform: rotate(360deg); transition: transform 1s linear;";
});

// add an event listener to go back to the initial state
bio.addEventListener("mouseout", function(){
    bio.style.cssText = "none";
});

// target BOWLING-BALL icon
let ball = document.getElementById("robow");

// add an event listener to trigger the rotation
ball.addEventListener("mouseover", function(){
    ball.style.cssText = "transform: rotate(-360deg); transition: transform 1s linear;";
});

// add an event listener to go back to the initial state
ball.addEventListener("mouseout", function(){
    ball.style.cssText = "none";
});

// target RIGHT ARROW icon
let right = document.getElementById("transrigth");

// add an event listener to trigger the translation
right.addEventListener("mouseover", function(){
    right.style.cssText = "transform: translateX(3em); transition: transform 1s ease;";
});

// add an event listener to go back to the initial state
right.addEventListener("mouseout", function(){
    right.style.cssText = "transform: translateX(0em); transition: transform 1s ease;";
});


// target LEFT ARROW icon
let left = document.getElementById("transleft");

// add an event listener to trigger the translation
left.addEventListener("mouseover", function(){
    left.style.cssText = "transform: translateX(-3em); transition: transform 1s ease;";
});

// add an event listener to go back to the initial state
left.addEventListener("mouseout", function(){
    left.style.cssText = "transform: translateX(0em); transition: transform 1s ease;";
});


// target CODEPEN icon
let codepen = document.getElementById("skewcp");

// add an event listener to trigger the skew function
codepen.addEventListener("mouseover", function(){
    codepen.style.cssText = "transform: skewX(30deg); transition: transform 1s ease;";
});

// add an event listener to go back to the initial state
codepen.addEventListener("mouseout", function(){
    codepen.style.cssText = "transform: skewX(0deg); transition: transform 1s ease;";
});


// target FACEBOOK icon
let fb = document.getElementById("skewfb");

// add an event listener to trigger the skew function
fb.addEventListener("mouseover", function(){
    fb.style.cssText = "transform: skewY(30deg); transition: transform 1s ease;";
});

// add an event listener to go back to the initial state
fb.addEventListener("mouseout", function(){
    fb.style.cssText = "transform: skewY(0deg); transition: transform 1s ease;";
});


// target the box to transform
let box = document.getElementById("textbox");

box.addEventListener("mouseover", function(){
    box.style.cssText = "transform: scale(1.25) translateX(6em) rotate(180deg); transition: transform 2s ease;";
});

box.addEventListener("mouseout", function(){
    box.style.cssText = "transform: scale(1) translateX(0em) rotate(0deg); transition: transform 2s ease;";
});

/* ------------------------------------------
*           3D TRANSFORMATIONS
*  ------------------------------------------*/

// target BATTLE-NET icon
let bnet = document.getElementById("perrot3D");

bnet.addEventListener("mouseover", function(){
    bnet.style.cssText = "transform: perspective(90px) rotate3d(1,1,1,65deg); transition: transform 1s ease;";
});

bnet.addEventListener("mouseout", function(){
    bnet.style.cssText = "transform: perspective(0px) rotate3d(0,0,0,0deg); transition: transform 1s ease;";
});

// target FUTBOL icon
let futbol = document.getElementById("futbol");

futbol.addEventListener("mouseover", function(){
    futbol.style.cssText = "transform: scale3D(.75,0.25,.5) translate3D(6em,0,0); transition: transform 1s ease;";
});

futbol.addEventListener("mouseout", function(){
    futbol.style.cssText = "transform: none; transition: transform 1s ease;";
});
