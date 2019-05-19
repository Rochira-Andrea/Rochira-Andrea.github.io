
function calcAndArray() {

    // INPUT: let the user provide the quantities, the operator and the result
    var a = parseInt(document.getElementById('firstOperand').value);
    var operator = document.getElementById('operator').value;
    var b = parseInt(document.getElementById('secondOperand').value);
    var answer = parseInt(document.getElementById('answer').value);

    // PROCESSING: let the program perform the operation based on the user input and compare the result to the user answer
    var solution;
    var message;

    // SWITCH statement to check on the operator
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

    // IF statement to check on the solution
    if (solution === answer) {
        message = "Correct! Good job.";
        // add this answer to the array
        addToArray(answer);
    } else {
        message = "Incorrect. Please review the expression.";
    }

    // Associative Array #1
    var express = {"fo":a,"op":operator,"so":b, "ans":answer,"message":message};
    addLogExp(express);

    // OUTPUT: display a confirmation message into the specified html element
    document.getElementById('output').innerHTML = message;

    // FOR loop through the array and display its items where indicated
    var spanOne = "<span>";

    for (var i = 0; i < results.length; i++) {
        spanOne += results[i] + "</span>" + "&nbsp;&nbsp;";
    }

    document.getElementById("arrayList").innerHTML = spanOne;

    // WHILE loop to sum array items
    var j = 0;
    var sum = 0;

    if (results.length == 0) {
        document.getElementById("arraySum").innerHTML = "";
    } else {
        while (j < results.length) {
            sum += results[j];
            j += 1;
        }
        document.getElementById("arraySum").innerHTML = "" + sum;
    }

    // FOR-EACH loop to multiply array items
    var product = 1;
    if (results.length == 0) {
        document.getElementById("arrayProduct").innerHTML = "";
    } else {
        for(var result of results){
            product *= result;
        }
        document.getElementById("arrayProduct").innerHTML = "" + product;
    }
}

function selectOperator(ide){

    // Associative Array #2
    var operators = {"addition":"+","subtraction":"-","multiplication":"*","division":"/","modulus":"%"};

    switch (ide){
        case "addition":
            document.getElementById('operator').value = operators['addition'];
            break;
        case "subtraction":
            document.getElementById('operator').value = operators['subtraction'];
            break;
        case "multiplication":
            document.getElementById('operator').value = operators['multiplication'];
            break;
        case "division":
            document.getElementById('operator').value = operators['division'];
            break;
        case "modulus":
            document.getElementById('operator').value = operators['modulus'];
            break
    }
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

// Array to hold results
var results = [];

function addToArray(value){
    results.push(value);
    document.getElementById("attempts").innerHTML = "" + results.length;
}

// Array to hold associative arrays of expression logs
var logs = [];

function addLogExp(log){
    // add log to array
    logs.push(log);
}

function viewLogs(){

    // hold container element
    var dad = document.getElementById('logs');

    // internal loop counter
    var j = 1;

    // variable to use for concatenating array contents
    var par = "<span>";

    // loop through the array of associative array entries
    for (var i = 0; i < logs.length; i++) {

        par += 'Attempt #'+ j + ':&nbsp;&nbsp;'
            + logs[i]['fo'] + ' '
            + logs[i]['op'] + ' '
            + logs[i]['so'] + ' = '
            + logs[i]['ans'] + '&nbsp;&nbsp;'
            + logs[i]['message']
            + '</span><br>';
        j++;
    }

    dad.innerHTML = par;
}

function reset(){
    document.getElementsByClassName("field").reset();
}










