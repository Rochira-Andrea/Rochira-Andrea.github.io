// base JavaScript object
var heavenlyBody = { name:"Sun", volume:"1,300,000 x Earths", mass:"333,000 x Earths", composition:{hydrogen:"73.46%", helium:"24.85%", oxygen:"0.77%",carbon:"0.29%",iron:"0.16%"}};


// stringify the Javascript object and nad set indentation by passing some parameters
function stringIt(){

    var str = JSON.stringify(heavenlyBody,null,3);

    console.log(str);

    var newStr = "<pre>"+str+"</pre>";

    document.getElementById('outOne').innerHTML = newStr;
}

// stringify after calling the rep() function
function replaceIt(){

    var str = JSON.stringify(heavenlyBody,rep,3);

    console.log(str);

    var newStr = "<pre>"+str+"</pre>";

    document.getElementById('outTwo').innerHTML = newStr;

}
// convert JavaScript object into a string, but replace values including "Earths" with actual values
function rep(key, value){
    switch (key){
        case 'volume':
            value = "1.41 × 10^18 cubic kilometers";
            return value;
            break;
        case 'mass':
            value = "1.9885 × 10^30 kilograms";
            return value;
            break;
        default:
            return value;
    }
}

// stringify only specific attributes from the original object by specifying its attributes
function filterIt(){

    // convert JavaScript object into a string, but select specific attributes
    var str = JSON.stringify(heavenlyBody,['name','volume','mass'],3);

    console.log(str);

    var newStr = "<pre>"+str+"</pre>";

    document.getElementById('outThree').innerHTML = newStr;
}

// pull content from a JSON file
function parseJson(){

    var str = document.getElementById('jsonstr').innerText;

    // console.log(str);

    // parse the JSON string
    var obj = JSON.parse(str);

    // place relevant values in each readonly input field
    document.getElementById('firstName').value = obj.contacts.firstName;
    document.getElementById('lastName').value = obj.contacts.lastName;
    document.getElementById('gender').value = obj.contacts.gender;
    document.getElementById('birthYear').value = obj.contacts.birthYear;
    document.getElementById('street').value = obj.contacts.address.street;
    document.getElementById('city').value = obj.contacts.address.city;
    document.getElementById('state').value = obj.contacts.address.state;
    document.getElementById('zipCode').value = obj.contacts.address.zipCode;

}

// reset form
function reset(){
    document.getElementsByClassName("field").reset();
}







