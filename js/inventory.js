
//this array contains the produce options
var produceArray = ["Carrots", "Apples", "Kale", "Strawberries", "Squash", "Lettuce", "Cucumbers", "Tomatoes"];

//array of locations of markets
var locationsArray =[];

//constructor function to build various locations
var MarketLocation = function (neighborhood, address, day, time, starId) {
    this.neighborhood = neighborhood;
    this.address = address;
    this.day = day;
    this.time = time;
    this.starId = starId;
}

//locations pushed into the array
locationsArray.push(new MarketLocation("The Pearl", "123 Marshall St.","Saturday", "10AM-2PM <br><br>", "star1"));
locationsArray.push(new MarketLocation("PSU", "1825 SW Broadway", "Sunday", "12PM-4PM <br><br>", "star2"));
locationsArray.push(new MarketLocation("Sellwood", "789 SE Tacoma St.", "Thurday", "6PM-9PM <br><br>", "star3"));
locationsArray.push(new MarketLocation("Northeast", "2035 NE Alberta St", "Monday", "5:30PM-9PM <br><br>", "star4"));
locationsArray.push(new MarketLocation("Southeast","3203 SE Woodstock Blvd", "Saturday", "11AM-1PM <br><br>", "star5",));


//code to add text to the paragraph
function updatePage(message) {
    document.getElementById("address-paragraph").innerHTML = message;
}

var peopleWithCropsArray = null;

//code that adds stars to the map and updates the text on the page
function findUserWithCrop(crop) {
    peopleWithCropsArray = [];
    for (var index = 0; index < userProfiles.length; index++) {
        var user = userProfiles[index];
        if (user.crops.includes(crop)) {
            peopleWithCropsArray.push(user);
        }
    }
    return peopleWithCropsArray;
}



function findNeighborhoodsForUsers(users) {
    var foundNeighborhoods = [];
    for (var index = 0; index < users.length; index++) {
        var user = users[index];
        var location = locationsArray.find(function(location) {
            return (user.neighborhood == location.neighborhood);
        });
         if (location) {
            foundNeighborhoods.push(location);
         }
    }
    return foundNeighborhoods;
}

function showLocations() {

    var cropIndex = produceArray.indexOf(produceLocationOptions.value);
    var usersWithCrop = findUserWithCrop(cropIndex);
    var foundNeighborhoods = findNeighborhoodsForUsers(usersWithCrop);
    var message = "";
    for (var index = 0; index < locationsArray.length; index++) {
        document.getElementById(locationsArray[index].starId).style.visibility = 'hidden';
    }
    for (var index = 0; index < foundNeighborhoods.length; index++) {
        document.getElementById(foundNeighborhoods[index].starId).style.visibility = 'visible';
        message += foundNeighborhoods[index].neighborhood + ": <br>";
        message += foundNeighborhoods[index].address + "<br>";
        message += foundNeighborhoods[index].day + "<br>";
        message += foundNeighborhoods[index].time;
    }
    updatePage(message);
  }

//variable which gets the drop down menu container
var produceLocationOptions = null;
var userProfiles = null;

//adds event listener to drop down menu, this will be called when page loads
function initialize() {
    produceLocationOptions = document.getElementById("produce-location-options");
    produceLocationOptions.addEventListener("change", showLocations);
    userProfiles = JSON.parse(localStorage.getItem("user-profiles"));
}

window.addEventListener("load", initialize);
