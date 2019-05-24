
// target a single element, <h3> tag
var heading = document.getElementById('header3');

// use an event listener to trigger the change in style
heading.addEventListener('mouseover',function(){

    // set the style properties to apply
    var look = "text-align: center; font-size: 2em; color: #d2691e;";

    // apply CSS rule
    heading.style.cssText = look;
});

heading.addEventListener('mouseout',function(){

    // remove any CSS style
    heading.style.cssText = 'none';
});


// target the class of elements (label tags)
var labels = document.querySelectorAll('.lab');

// target the class of elements (input tags)
var fields = document.querySelectorAll('.field');

function styleForm() {

    // set the style of the class of HTML elements in a CSS fashion
    var labelCSS = "display:inline-block; " +
                "width:7em; " +
                "color:#628395;";

    // apply the settings specified using "style.cssText"
    for(var i =0; i < labels.length; i++) {
        labels[i].style.cssText = labelCSS;
    }

    // set the style of the class of HTML elements in a CSS fashion
    var fieldCSS = "padding: .7em;" +
                "text-align: center;" +
                "border-radius: 5px;" +
                "border-style: none;" +
                "font-size: .8em;" +
                "margin: .5em 0 0 .5em;" +
                "color: #d2691e;";

    // apply the settings specified using setAttribute() function
    for(var i = 0; i < fields.length; i++){
        fields[i].setAttribute("style",fieldCSS);
    }

}

function unStyleForm(){

    // remove any style from labels
    for(var i =0; i < labels.length; i++) {
        labels[i].style ='none';
    }

    // remove any style from fields, a different way to achieve the goal
    for(var i = 0; i < fields.length; i++){
        fields[i].removeAttribute("style");
    }

}

// target the class of elements (<li> tags)
var lis = document.querySelectorAll('.bullet');

// apply stile to all the <li> tags
function styleList() {

    // set the style of the class of HTML elements in a CSS fashion
    var lisCSS ="background: rgba(0,0,0,0.1);" +
                "margin: 1em 0 0 0;" +
                "display: flex;" +
                "justify-content: center;" +
                "align-items: center;" +
                "border-radius: 5px;" +
                "list-style: none;" +
                "color: #d2691e;" +
                "font-size: 1.2em;" +
                "width: 14em;" +
                "height: 2em;";

    // apply the settings specified using "style.cssText"
    for(var i = 0; i < lis.length; i++){
        lis[i].style.cssText = lisCSS;
    }
}

// remove the stile from all the <li> tags
function unStyleList() {

    // remove any style from bullet list
    for(var i = 0; i < lis.length; i++){
        lis[i].style ='none';
    }
}

// select HTML element to use in the following functions
var frame = document.getElementById('zoom');

// on mouse hover zoom the thumbnail in the bigger container
function zoomIn(element){

    // place image as background of the <section> tag
    frame.style.backgroundImage = "url("+element.src+")";
}

// on mouse leave, remove the image
function zoomOut(element){
    frame.style.backgroundImage = "";
}
