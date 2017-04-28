var elementReferences = {};


function pageInit(){
    getElementReferences();
    bindCountries();

}

function bindCountries(){
    var countries = getCountries();
    for (var i = 0; i< countries.length; i++){
        var name = countries[i].name;
        var code = countries[i].code;
        var optionTag = buildOptionTag(code,name);
        elementReferences.countries.appendChild(optionTag);
    }   
}

function buildOptionTag(value, text){
    var optionTag=document.createElement("option")
    optionTag.value = value;
    optionTag.textContent = text;
    return optionTag;      
}



function getElementReferences(){
    elementReferences.countries = document.getElementById("dd");   
}


pageInit();





