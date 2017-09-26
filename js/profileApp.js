//array with fake data 
var produceArray = ["Carrots", "Apples", "Kale", "Strawberries", "Squash", "Lettuce", "Cucumbers", "Tomatoes"];
var currentUser = null;

//function to create a container that holds the Signed In user First Name, Last Name, Picture and Neighborhood
function profileContainer() {
    currentUser = JSON.parse(localStorage.getItem("currentUserKey"));//get info from localStorage
    if (currentUser != null) {
      var container = document.getElementById("profile-container");

      var elPicture = document.createElement("img"); //create the image element
      elPicture.id = "user-picture"
      elPicture.src = currentUser.img; // tell it what to write inside
      container.appendChild(elPicture); // append the picture to the container
      var elUserPicture = document.createElement("p")
      elUserPicture.innerText = "Update your picture: ";
      container.appendChild(elUserPicture);
      var elUpdatePicture = document.createElement("input");
      elUpdatePicture.setAttribute("type", "file");
      elUpdatePicture.setAttribute("accept", ".jpg, .jpeg, .png");
      container.appendChild(elUpdatePicture);
      elUpdatePicture.addEventListener("change", handlePicture);

      var elFirstLastName = document.createElement("p"); //create the First and Last name elements
      nameLabel = document.createElement("label")
      nameLabel.innerText = "Name: ";
      elFirstLastName.appendChild(nameLabel);

      var elFirstName = document.createElement("span");
      elFirstName.setAttribute("contenteditable", true);
      elFirstName.innerText = currentUser.firstName;
      elFirstName.addEventListener("input", handleFirstName);
      elFirstLastName.appendChild(elFirstName);

      var elLastName = document.createElement("span");
      elLastName.setAttribute("contenteditable", true);
      elLastName.innerText = currentUser.lastName;
      elLastName.addEventListener("input", handleLastName);
      elFirstLastName.appendChild(elLastName);
      container.appendChild(elFirstLastName);  //append the Name and Last name to the container


      var elUserName = document.createElement("p"); //create the Username element
      container.appendChild(elUserName); //append the username to the container
      userNameLabel = document.createElement("label")
      elUserName.appendChild(userNameLabel);
      userNameLabel.innerText = "Username: ";
      var elUserNameSpan = document.createElement("span");
      elUserName.appendChild(elUserNameSpan);
      elUserNameSpan.setAttribute("contenteditable", true);
      elUserNameSpan.innerText = currentUser.userName; //tell it what to write inside
      elUserNameSpan.addEventListener("input", handleUserName);

      var elNeighborhood = document.createElement("p"); //create the Username element
      container.appendChild(elNeighborhood); //append the username to the container
      userNaighborhood = document.createElement("label")
      elNeighborhood.appendChild(userNaighborhood);
      userNaighborhood.innerText = "Neighborhood: ";
      var elNeighborhoodSpan = document.createElement("span");
      elNeighborhood.appendChild(elNeighborhoodSpan);
      elNeighborhoodSpan.setAttribute("contenteditable", true);
      elNeighborhoodSpan.innerText = currentUser.neighborhood; //tell it what to write inside
      elNeighborhoodSpan.addEventListener("input", handleNeighborhood);

    }
  }
profileContainer()

function handlePicture (event) {
    if (event.target.files.length > 0) {
      var file = event.target.files[0];
      var reader = new FileReader(); //creates a new file reader object
      reader.readAsDataURL(file); //method is used to read the contents of the image file.
      reader.addEventListener("load", function() {
        var base64image = reader.result;  //result attribute contains the data as a URL representing the file's data as a base64 encoded string.
        document.getElementById("user-picture").src = base64image;
        currentUser.img = base64image; //relates the image of current user with its base64image
        localStorage.setItem("currentUserKey", JSON.stringify(currentUser)); //updates localStorage
      })
    }
}

function handleFirstName (event) {
  currentUser.firstName = event.target.innerText;
  localStorage.setItem("currentUserKey", JSON.stringify(currentUser));
}

function handleLastName (event) {
  currentUser.lastName = event.target.innerText;
  localStorage.setItem("currentUserKey", JSON.stringify(currentUser));
}

function handleUserName (event) {
  currentUser.userName = event.target.innerText;
  localStorage.setItem("currentUserKey", JSON.stringify(currentUser));
}

function handleNeighborhood (event) {
  currentUser.neighborhood = event.target.innerText;
  localStorage.setItem("currentUserKey", JSON.stringify(currentUser));
}



//function to create the dropdown menu with produce options
function dropCrop (crop, index) {
  var elDropDown = document.getElementById("drop-produce");
  var elCropDown = document.createElement("option");
  elCropDown.innerText = crop;
  elCropDown.value = index;
  elDropDown.appendChild(elCropDown);
}

//function to
function handleAdd() {
  var cropSelected = document.getElementById("drop-produce");
  var index = parseInt(cropSelected.value);
  currentUser.crops.push(index);
  cropSelected.innerHTML = "";
  document.getElementById('user-produce').innerHTML = "";
  buildTable();
  localStorage.setItem("currentUserKey", JSON.stringify(currentUser));
}
var addCropDrop = document.getElementById("addCrop");
addCropDrop.addEventListener("click", handleAdd);

function handleRemove(event) {
  var produceIndex = parseInt(event.target.dataset.index); //dtatset property allows access to all data attributes set on the element
  var cropIndex = currentUser.crops.indexOf(produceIndex); //method returns the index within the calling String object
  currentUser.crops.splice(cropIndex, 1); //method to change the content of the array to add new element
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
    location.assign("welcome.html"); //has to have a signed in user or it takes back to welcome page
  }
}
buildTable();
