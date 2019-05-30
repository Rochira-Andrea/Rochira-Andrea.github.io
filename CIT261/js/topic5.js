
// check if the local storage contains any items
function checkLS() {

    if( localStorage.getItem("arrValues") !== null ){
        document.getElementById("bef").style.display = "none";
    }
}


// collect the user inputs, distribute them in different entities, store them locally and refresh the page
function storeAndRefresh(){

    // retrieve user inputs
    var nname = document.getElementById('nickName').value,
        uni = document.getElementById('university').value,
        age = document.getElementById('age').value;

    // create array
    var arr = [nname,uni,age];

    // create associative array
    var assarr = {"nickname":nname,"university":uni,"existence":age};

    // create object
    var obj = {nickname:nname, university:uni, existence:age};

    // save the JavaScript entities in the local storage as JSON strings
    localStorage.setItem("arrValues",JSON.stringify(arr));
    localStorage.setItem("assarrValues",JSON.stringify(assarr));
    localStorage.setItem("objValues",JSON.stringify(obj));

    console.log( localStorage.getItem("arrValues") );
    console.log( localStorage.getItem("assarrValues") );
    console.log( localStorage.getItem("objValues") );

    refresh();
}


function refresh() {
    history.go(0);
}

// retrieve values from the items stored in the local storage
function retrieve(){

    // parse the JSON string into its corresponding JavaScript array
    var localArr = JSON.parse( localStorage.getItem("arrValues"));
    // fill the form labeled "From an Array"
    document.getElementById('arr1').value = localArr[0];
    document.getElementById('arr2').value = localArr[1];
    document.getElementById('arr3').value = localArr[2];

    // parse the JSON string into its corresponding JavaScript associative array
    var localAssarr = JSON.parse( localStorage.getItem("assarrValues"));
    // fill the form labeled "From an Associative Array"
    document.getElementById("assarr1").value = localAssarr["nickname"];
    document.getElementById("assarr2").value = localAssarr["university"];
    document.getElementById("assarr3").value = localAssarr["existence"];

    // parse the JSON string into its corresponding JavaScript object
    var localObj = JSON.parse( localStorage.getItem("objValues"));
    // fill the form labeled "From an Object"
    document.getElementById("obj1").value = localObj.nickname;
    document.getElementById("obj2").value = localObj.university;
    document.getElementById("obj3").value = localObj.existence;

}

// empty local storage
function emptyLS(){

    localStorage.removeItem("arrValues");
    localStorage.removeItem("assarrValues");
    localStorage.removeItem("objValues");

    refresh();
}
