
//==========Produce Array==========
var produceArray = ["Carrots", "Apples", "Kale", "Strawberries", "Squash"];
//==========Produce Array==========
var currentUser = null;

//function to create a container that hosts the Signed In user First Name, Last Name and Picture
function profileContainer() {
    currentUser = JSON.parse(localStorage.getItem("currentUserKey"));
    if (currentUser != null) {
      var container = document.getElementById("profile-container");
      var elFirstLastName = document.createElement("p"); //create the First and Last name elements
      elFirstLastName.setAttribute("contenteditable", true);
      //=====================
      elFirstLastName.innerText = currentUser.firstName + " " + currentUser.lastName;  // tell it what Name and Last name to show
      container.appendChild(elFirstLastName);  //append the Name and Last name to the container
      var elUserName = document.createElement("p"); //create the Username element
      elUserName.innerText = currentUser.userName; //tell it what to write inside
      container.appendChild(elUserName); //append the username to the container
      var elPicture = document.createElement("img"); //create the image element
      elPicture.src = currentUser.img; // tell it what to write inside
      container.appendChild(elPicture); // append the picture to the container
    }
  }
profileContainer()

//function to create the dropdown menu with produce options
function dropCrop (crop, index) {
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
  currentUser.crops.push(index);
  cropSelected.innerHTML = "";
  document.getElementById('user-produce').innerHTML = "";
  buildTable();
  localStorage.setItem("currentUserKey", JSON.stringify(currentUser));
}
var addCropDrop = document.getElementById("addCrop");
addCropDrop.addEventListener("click", handleAdd);

function handleRemove(event) {
  var produceIndex = parseInt(event.target.dataset.index);
  var cropIndex = currentUser.crops.indexOf(produceIndex);
  console.log(currentUser);
  currentUser.crops.splice(cropIndex, 1);
  document.getElementById('user-produce').innerHTML = "";
  document.getElementById("drop-produce").innerHTML = "";
  buildTable();
  localStorage.setItem("currentUserKey", JSON.stringify(currentUser));
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
  if (currentUser != null) {
    for (var index = 0; index < produceArray.length; index++) {
      if (currentUser.crops.indexOf(index) >= 0) {
        getCropInfo(produceArray[index], index);
      } else {
        dropCrop(produceArray[index], index);
      }
    }
  } else {
    location.assign("welcome.html");
  }
}
buildTable();
