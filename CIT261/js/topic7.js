
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

    // remove any style from fields
    for(var i = 0; i < fields.length; i++){
        fields[i].removeAttribute("style");
    }

}


var lis = document.querySelectorAll('.bullet');

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

function unStyleList() {

    // remove any style from bullet list
    for(var i = 0; i < lis.length; i++){
        lis[i].style ='none';
    }

}
