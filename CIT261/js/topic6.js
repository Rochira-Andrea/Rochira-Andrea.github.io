
// FIRST CONTAINER: APPEND CHILD & REMOVE CHILD

// target the container
let box1 = document.getElementById('box1');
let tip1 = document.getElementById('tip1');

function appChild(){

    let count = box1.querySelectorAll('span');

    if(count.length === 0){
        tip1.style.display = "none";
    }

    // create an element
    let span = document.createElement('span');

    // add the element to a specific container
    box1.appendChild(span);

}

function remChild(){

    // count all the <span> tags within the parent element (returns an array)
    let count = box1.querySelectorAll('span');

    // check if there is at least one <span> tag in the array
    if (count.length > 0){
        // remove the first <span> tag in the array
        box1.removeChild(count[0]);
    } else {
        // if there are no <span> tag left, display a message
        tip1.style.display = "block";
        tip1.innerHTML = "No More Child to Remove";
    }

}

// SECOND CONTAINER: REPLACE CHILD
let box2 = document.getElementById('box2');
let tip2 = document.getElementById('tip2');

// create an element
let p = document.createElement('p');

function repChild() {

    p.style.background = "#FFBE00";
    p.textContent = "I'm New!";

    // remove the existing paragraph and place the new one
    box2.replaceChild(p,tip2);
}

function revert(){
    box2.replaceChild(tip2,p);
}

// THIRD CONTAINER: INSERT BEFORE
let box3 = document.getElementById('box3');
let spanFrag = document.createElement('span');
let spanTarget = document.getElementById('tip3');

function insBefore(){

    // add content to the new <span> tag
    spanFrag.textContent = "Life";

    // insert the new <span> before the existing one
    box3.insertBefore(spanFrag,spanTarget);

}

// remove the element inserted before
function remInsert(){
    // count all the <span> tags within the parent element (returns an array)
    let count = box3.querySelectorAll('span');

    // check if there is at least one <span> tag in the array
    if (count.length == 2){
        // remove the first <span> tag in the array
        box3.removeChild(count[0]);
    }
}

// FOURTH CONTAINER: SET/REMOVE ATTRIBUTE

let inputFields = document.querySelectorAll('input');

// add a class attribute to apply style configured in the CSS stylesheet
function setAtt(){
    for(let field of inputFields){
        field.setAttribute('class','field');
    }
}
// remove the class attribute to remove the style previously applied
function remAtt(){
    for(let field of inputFields){
        field.removeAttribute('class');
    }
}






