//TODO get user data for local storage

//=========================

//========================

var cropArray = ["Apples", "Carrots", "Strawberries", "Squash", "Kale"];

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
  for (var index = 0; index < cropArray.length; index++) {
    getCropInfo(cropArray[index], index);
  }
}
buildTable();


// TODO: function for event handler for the add and remove buttons
//    show and hide remove button
