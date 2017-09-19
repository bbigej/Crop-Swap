var produceArray = ["Carrots", "Apples", "Kale", "Strawberries", "Squash"];

var locationsArray =[];

var MarketLocation = function (neighborhood, address) {
    this.neighborhood = neighborhood;
    this.address = address;
}

locationsArray.push(new MarketLocation("The Pearl", "123 Marshall St."));
locationsArray.push(new MarketLocation("PSU", "1825 SW Broadway"));
locationsArray.push(new MarketLocation("Sellwood", "789 SE Tacoma St."));
locationsArray.push(new MarketLocation("Northeast", "2035 NE Alberta St"));
locationsArray.push(new MarketLocation("Southeast","3203 SE Woodstock Blvd",));

var produceLocationOptions = document.getElementsByClassName("produce-location-option");
for (var index = 0; index < produceLocationOptions.length; index++) {
produceLocationOptions.addEventListener("change", showLocations);
}

var message = "blank";

function updatePage() {
    document.getElementById("address-paragraph").innerHTML = message;
}

function showLocations() {
    if (userProfile[0].crops == produceArray.indexOf("Carrots")) {
        document.getElementById("star1").style.visibility = 'visible';
        message = "Address: 123 Marshall St.";
        updatePage();
    } else {
        message = "No options available.";
        updatePage();
    }

}