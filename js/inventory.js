var produceArray = ["Carrots", "Apples", "Kale", "Strawberries", "Squash"];

//array of locations of markets
var locationsArray =[];

//constructor function to build various locations
var MarketLocation = function (neighborhood, address) {
    this.neighborhood = neighborhood;
    this.address = address;
}

//locations pushed into the array
locationsArray.push(new MarketLocation("The Pearl", "123 Marshall St."));
locationsArray.push(new MarketLocation("PSU", "1825 SW Broadway"));
locationsArray.push(new MarketLocation("Sellwood", "789 SE Tacoma St."));
locationsArray.push(new MarketLocation("Northeast", "2035 NE Alberta St"));
locationsArray.push(new MarketLocation("Southeast","3203 SE Woodstock Blvd",));


//code to add text to the paragraph
var message = "blank";

function updatePage() {
    document.getElementById("address-paragraph").innerHTML = message;
}

//code that adds stars to the map and updates the text on the page
function showLocations() {
    if (produceLocationOptions.value == userProfile[0].crops)
    /*if (userProfile[0].crops == produceArray.indexOf("Carrots")) */ {
        document.getElementById("star1").style.visibility = 'visible';
        message = "Address: 123 Marshall St.";
        updatePage();
    } else {
        document.getElementById("star1").style.visibility = 'hidden';
        message = "No options available.";
        updatePage();
    }

}

var produceLocationOptions = null;

function addListeners() {
    produceLocationOptions = document.getElementById("produce-location-options");
    produceLocationOptions.addEventListener("change", showLocations);
}

window.addEventListener("load", addListeners);

/* add 4 more stars */