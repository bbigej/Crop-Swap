//TODO get user data for local storage

var signInObject = {
  firstName: "Allyson",
  lastName: "Ultreras",
  userName: "username",
  password: "password",
  neighborhood: "Sellwood",
  img: "picture.png",
  crops: [0,1,2],
}

//==========Produce Array==========
var produceArray = ["Carrots", "Apples", "Kale", "Strawberries", "Squash"];
//==========Produce Array==========

function getCropInfo(crop, index) {

  var tableCrop = document.createElement("tr");
  var tdCrop = document.createElement("td");
  tdCrop.innerText = crop;
  tableCrop.appendChild(tdCrop);

  var tdAdd = document.createElement("td");
  var tdAddBtn = document.createElement("button");
  tdAddBtn.innerText = "Add Crop";
  tdAddBtn.setAttribute("type", "button");
  tdAddBtn.classList.add("addCrop");
  tdAddBtn.dataset.index = index;
  tdAdd.appendChild(tdAddBtn);
  tableCrop.appendChild(tdAdd);

  var tdRemove = document.createElement("td");
  var tdRemoveBtn = document.createElement("button");
  tdRemoveBtn.innerText = "Remove Crop";
  tdRemoveBtn.setAttribute("type", "button");
  tdRemoveBtn.dataset.index = index;
  tdRemoveBtn.classList.add("removeCrop");
  tdRemove.appendChild(tdRemoveBtn);
  tableCrop.appendChild(tdRemove);

  document.getElementById('user-produce').appendChild(tableCrop);

}

function buildTable() {
  for (var index = 0; index < produceArray.length; index++) {
    getCropInfo(produceArray[index], index);
  }
}
buildTable();

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

// TODO: function for event handler for the add and remove buttons
//    show and hide remove button
// function buildList() {
//   var list = document.getElementById("student-list");
//   for (index = 0; index < students.length; index++) {
//     var student = students[index];
//     var studentItem = document.createElement("li");
//     studentItem.innerText = student.name;
//     studentItem.addEventListener("click", showStudentInfo);
//     studentItem.dataset.index = index;
//     list.appendChild(studentItem);
//   }
// }
//
// function showStudentInfo(event) {
//   var clickedItem = event.target;
//   var studentIndex = parseInt(clickedItem.dataset.index);
//   var student = students[studentIndex];
//   document.getElementById('student-name').innerText = student.name;
//   if (student.github == "") {
//     var accountName = prompt("GitHub Account Name: ");
//     student.github = accountName;
//   }
//   var githubURL = "http://www.github.com/"+student.github;
//   document.getElementById('repo-name').innerText = githubURL;
//   document.getElementById('repo-name').href = githubURL;
// }
