
function calcAndArray(){

    // INPUT: let the user provide the quantities, the operator and the result
    var a = parseInt(document.getElementById('firstOperand').value);
    var operator = document.getElementById('operator').value;
    var b = parseInt(document.getElementById('secondOperand').value);
    var answer = parseInt(document.getElementById('answer').value);

    // PROCESSING: let the program perform the operation based on the user input and compare the result to the user answer
    var solution;
    var message;

    // check on the operator
    switch (operator) {
        case '+':
            // call for parameterized function
            solution = add(a, b);
            break;
        case '-':
            // call for parameterized function
            solution = sub(a, b);
            break;
        case '*':
            // call for parameterized function
            solution = per(a, b);
            break;
        case '/':
            // call for parameterized function
            solution = div(a, b);
            break;
        case '%':
            // call for parameterized function
            solution = mod(a, b);
            break;
        default:
            message = "Missing or misspelled operator";
            // display a basic error message into the specified html element
            return document.getElementById('output').innerHTML = message;
    }


    // check on the solution
    if (solution === answer) {
        message = "Correct! Good job.";
        // add this answer to the array
        addToArray(answer);
    } else {
        message = "Incorrect. Please review the expression.";
    }

    // OUTPUT: display a confirmation message into the specified html element
    document.getElementById('output').innerHTML = message;

    var span = "<span>";
    // loop through the array an display it where indicated
    for(var i = 0; i < results.length; i++){
        span += results[i] + "<span>" + "&nbsp;&nbsp;";
    }

    document.getElementById("arrayList").innerHTML = span;

}

function add(first, second) {
    return first + second;
}

function sub(first, second){
    return first - second;
}

function per(first, second){
    return first * second;
}

function div(first, second) {
    return first / second;
}

function mod(first,second){
    return first % second;
}

var results = new Array();

function addToArray(value){
    results.push(value);
}

function reset(){
    document.getElementsByClassName("field").reset();
}










