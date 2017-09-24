//Object constructor for new
var UserProfile = function (firstname, lastname, username, password, neighborhood, picture, cropIndexes){
  this.firstName = firstname;
  this.lastName = lastname;
  this.userName = username;
  this.password = password;
  this.neighborhood = neighborhood;
  this.img = picture;
  this.crops = cropIndexes;
}

//Array of user objects
var userProfile = [];
userProfile.push(new UserProfile("Allyson", "Short", "A", "B", "NorthEast", "images/oneeyedbunny.jpg", [0,1,4,6,7]));
userProfile.push(new UserProfile("Tanya", "Griego", "T", "B", "Sellwood", "images/racoon.jpg", [1,2,4,5,6]));
userProfile.push(new UserProfile("Sandra", "Ultreras", "S", "U", "The Pearl", "images/ape.jpg", [0,3,7]));
userProfile.push(new UserProfile("Bryan", "Bigej", "B", "B", "PSU", "images/yak.jpg", [0,2,3,4,7]));
localStorage.setItem("user-profiles", JSON.stringify(userProfile));

//function to create a form that lets a new user add their profile
var createAccountForm = function(instructions){
    // var input = document.getElementById("new-user");
    // input.parentElement.removeChild(input); //removes the create an account button from the screen
    // //var login = document.getElementById("login_user");
    // var login = document.login_user;
    // login.setAttribute("class", "hide");

    var container = document.getElementById("profile-forms");
    container.innerHTML="";
    var form= document.createElement("form")
    form.setAttribute("id", "new-user-info");
    form.setAttribute("name", "new-user-form");
    container.appendChild(form);
    if (instructions) {
      form.appendChild(instructions)
    }

    var space = document.createElement("br");  //create a break in HTML
    var fieldset = document.createElement("fieldset");
    header = document.createElement("legend"); //create the legend header
    header.innerText = "Your Profile";  /// tell it what you want the header to say
    fieldset.appendChild(header);  //append the the form with the header
    form.appendChild(fieldset);  //append the the form with the header

    label1 = document.createElement("label") //create an HTML label for the input
    label1.innerText = "First Name:  "; /// tell it you what you want the label to say
    fieldset.appendChild(label1);   // append the label to the form
    input1 = document.createElement("input"); //create the input
    input1.setAttribute("name", "firstName");    // set the name attribute...where the data will land
    fieldset.appendChild(input1);
    fieldset.appendChild(space.cloneNode());   //creates a break and allows us to do it repeatidly

    label2 = document.createElement("label")
    label2.innerText = "Last Name:  ";
    fieldset.appendChild(label2);
    input2 = document.createElement("input"); //create the input
    input2.setAttribute("name", "lastName");    // set the name attribute...where the data will land
    fieldset.appendChild(input2);
    fieldset.appendChild(space.cloneNode());;

    label4 = document.createElement("label")
    label4.innerText = "Neighborhood:  ";
    fieldset.appendChild(label4);
    input4 = document.createElement("input"); //create the input
    input4.setAttribute("name", "neighborhood");    // set the name attribute...where the data will land
    fieldset.appendChild(input4);
    fieldset.appendChild(space.cloneNode());
    fieldset.appendChild(space.cloneNode());

    label5 = document.createElement("label")
    label5.innerText = "User Name:  ";
    fieldset.appendChild(label5);
    input5 = document.createElement("input"); //create the input
    input5.setAttribute("name", "userName");    // set the name attribute...where the data will land
    fieldset.appendChild(input5);
    fieldset.appendChild(space.cloneNode());

    label6 = document.createElement("label")
    label6.innerText = "Password:  ";
    fieldset.appendChild(label6);
    input6 = document.createElement("input"); //create the input
    input6.setAttribute("name", "password");    // set the name attribute...where the data will land
    fieldset.appendChild(input6);
    fieldset.appendChild(space.cloneNode());
    fieldset.appendChild(space.cloneNode());
    fieldset.appendChild(space.cloneNode());

    input5 = document.createElement("input"); //create the input
    input5.setAttribute("type", "button"); // set each attribute...the css class
    input5.setAttribute("value", "Create Profile");    // set the name attribute...where the data will land
    input5.setAttribute("class", "new-profile-submit-button");
    input5.setAttribute("onclick", "submitFormDetails()");
    fieldset.appendChild(input5);
}

// // function to submit user details into the user objects and clear the new user form from the screen
  function submitFormDetails(){
    var form = document.forms["new-user-form"];
    var newFirstName = form.elements["firstName"].value;
    var newLastName = form.elements["lastName"].value;
    var newNeighborhood = form.elements["neighborhood"].value;
    var newUserName = form.elements["userName"].value;
    var newUserPassword = form.elements["password"].value;
    var currentUser = new UserProfile(newFirstName, newLastName, newNeighborhood, newUserName, newUserPassword,"",[]);
    userProfile.push(currentUser);
    localStorage.setItem("currentUserKey", JSON.stringify(currentUser)); //adds to local storage
    document.getElementById("new-user-info").innerHTML = ""; //removes the form from the screen
    //console.log("newFirstName");
  //  var login = document.getElementById("login_user");
    var login = document.login_user;
  //  login.setAttribute("class", ""); //unhides the user login
    window.location = "profile.html"
  }

//this is a function to validate the username/password inputs
function loginUser() {
  var form = document.login_user;
  var userNameInput = form.Username.value;
  var passwordInput = form.Password.value;
  var userMatch = userProfile.find (function (profile) {
      return((profile.userName == userNameInput) && (profile.password == passwordInput))
    });
    if(!userMatch) {
      var instructions = document.createElement("p");
      instructions.innerText = "No account found. Please create an account below.";
      createAccountForm (instructions);
      } else {
      localStorage.setItem("currentUserKey", JSON.stringify(userMatch)); //adds to local storage
      window.location = "profile.html";

    }
}
