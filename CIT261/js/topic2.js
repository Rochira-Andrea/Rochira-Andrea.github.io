// function to show object creation patterns
function retrieve(){

    // Set values to pass to the creation functions according to user selection
    let hero = document.forms.list.hero.value;

    // call the creation function based on the hero selected
    switch (hero){
        case 'frodo':
            let frodo = heroFactory("Frodo Baggins","hobbit","County");
            document.getElementById('factory1').value = frodo.name;
            document.getElementById('factory2').value = frodo.allUpper();
            document.getElementById('factory3').value = frodo.provenance;
            break;
        case 'arwen':
            let arwen = new HeroConstructor("Arwen Undómiel", "Elf", "Elrond");
            document.getElementById('const1').value = arwen.name;
            document.getElementById('const2').value = arwen.allUpper();
            document.getElementById('const3').value = arwen.provenance;
            break;
        case 'aragorn':
            let aragorn = new heroProto();
            // overriding
            aragorn.name ="Aragorn";
            aragorn.race = "human";
            document.getElementById('proto1').value = aragorn.name;
            document.getElementById('proto2').value = aragorn.allUpper();
            document.getElementById('proto3').value = aragorn.provenance;
            break;
    }
}

// Factory function
let heroFactory = function(name, race, provenance){
    return {
        name: name,
        race: race,
        provenance: provenance,
        allUpper: function(){
            return this.race.toUpperCase();
        }
    }
};

// Construction function
let HeroConstructor = function(name, race, provenance){
    this.name = name;
    this.race = race;
    this.provenance = provenance;
    this.allUpper = function(){
         return this.race.toUpperCase();
    }
};

// Prototype function
let heroProto = function(){
};
heroProto.prototype.name = "Unknown";
heroProto.prototype.race = "Unknown";
heroProto.prototype.provenance = "Unknown";
heroProto.prototype.allUpper = function(){ return this.race.toUpperCase() };


// prototyping and inheritance functions

function proto(){

    let Elf = { race:"Sindarin Elf", provenance:"Woodland Realm" };
    let Weapon = { bow:"bow", dagger:"daggers" };

    // using Object.create() function
    let legolasCreate = Object.create(Elf);
    legolasCreate.name = "Legolas";
    legolasCreate.gender = "M";
    document.getElementById("create1").value = legolasCreate.name;
    document.getElementById("create2").value = legolasCreate.gender;
    document.getElementById("create3").value = legolasCreate.race;
    document.getElementById("create4").value = legolasCreate.provenance;

    // using the spread operator
    let legolasSpread = {...Elf};
    legolasSpread.name = "Legolas";
    legolasSpread.gender = "M";
    document.getElementById("spread1").value = legolasSpread.name;
    document.getElementById("spread2").value = legolasSpread.gender;
    document.getElementById("spread3").value = legolasSpread.race;
    document.getElementById("spread4").value = legolasSpread.provenance;

    // using Object.assign() function
    let legolasAssign = Object.assign({},Elf,Weapon);
    legolasAssign.name = "Legolas";
    document.getElementById("assign1").value = legolasAssign.name;
    document.getElementById("assign2").value = legolasAssign.race;
    document.getElementById("assign3").value = legolasAssign.bow;
    document.getElementById("assign4").value = legolasAssign.dagger;


}



// function to reset input fields in the forms
function reset(){
    document.getElementsByClassName("field").reset();
}





