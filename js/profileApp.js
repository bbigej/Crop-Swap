//TODO get user data for local storage

var signInObject = {
  firstName: "Allyson",
  lastName: "Ultreras",
  userName: "username",
  password: "password",
  neighborhood: "Sellwood",
  img: "picture.png",
  crops: [0,1,2,3,4],
}

//==========Produce Array==========
var produceArray = ["Carrots", "Apples", "Kale", "Strawberries", "Squash"];
//==========Produce Array==========



function profileContainer() {
  console.log(userProfile.length);
  var container = document.getElementById("profile-container");
    var userFirstName = document.createElement("p");
    userFirstName.innerText = signInObject.firstName + " " + signInObject.lastName;
    container.appendChild(userFirstName);
    var elUserName = document.createElement("p");
    elUserName.innerText = signInObject.userName;
    container.appendChild(elUserName);
    var elPicture = document.createElement("img");
    elPicture.src = signInObject.img;
    container.appendChild(elPicture);
  }
profileContainer()

function dropCrop(crop, index) {
  var elDropDown = document.getElementById("drop-produce");
  var elCropDown = document.createElement("option");
  elCropDown.innerText = crop;
  elCropDown.value = index;
  elDropDown.appendChild(elCropDown);
}

function handleAdd() {
  var cropSelected = document.getElementById("drop-produce");
  var index = parseInt(cropSelected.value);
  console.log(cropSelected.value);
  signInObject.crops.push(index);
  cropSelected.innerHTML = "";
  document.getElementById('user-produce').innerHTML = "";
  buildTable();
}
var addCropDrop = document.getElementById("addCrop");
addCropDrop.addEventListener("click", handleAdd);

function handleRemove(event) {
  var produceIndex = parseInt(event.target.dataset.index);
  var cropIndex = signInObject.crops.indexOf(produceIndex);
  signInObject.crops.splice(cropIndex, 1);
  document.getElementById('user-produce').innerHTML = "";
  document.getElementById("drop-produce").innerHTML = "";
  buildTable();
}


function getCropInfo(crop, index) {
  var tableCrop = document.createElement("tr");
  var tdCrop = document.createElement("td");
  tdCrop.innerText = crop;
  tableCrop.appendChild(tdCrop);

  var tdRemove = document.createElement("td");
  var tdRemoveBtn = document.createElement("button");
  tdRemoveBtn.innerText = "Remove Crop";
  tdRemoveBtn.setAttribute("type", "button");
  tdRemoveBtn.dataset.index = index;
  tdRemoveBtn.classList.add("removeCrop");
  tdRemove.appendChild(tdRemoveBtn);
  tableCrop.appendChild(tdRemove);
  document.getElementById('user-produce').appendChild(tableCrop);
  tdRemoveBtn.addEventListener("click", handleRemove);
}


function buildTable() {
  for (var index = 0; index < produceArray.length; index++) {
    if (signInObject.crops.indexOf(index) >= 0) {
      getCropInfo(produceArray[index], index);
    } else {
      dropCrop(produceArray[index], index);
    }
  }
}
buildTable();
