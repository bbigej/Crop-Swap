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
userProfile.push(new UserProfile("Allyson", "Short", "A", "B", "Sellwood", "picture", 0));

//function to create a form that lets a new user add their profile
var createAccountForm = function(){
    var input = document.getElementById("new-user");
    input.parentElement.removeChild(input); //removes the create an account button from the screen
    var login=document.getElementById("login-user");
    login.setAttribute("class", "hide");

    var space = document.createElement("br");  //create a break in HTML
    var fieldset = document.createElement("fieldset");
    var form = document.getElementById("new-user-info"); //create the HTML form grouping
    header = document.createElement("legend"); //create the legend header
    header.innerText = "Your Profile";  /// tell it what you want the header to say
    fieldset.appendChild(header);  //append the the form with the header
    form.appendChild(fieldset);  //append the the form with the header

    label1 = document.createElement("label") //create an HTML label for the input
    label1.innerText = "First Name:  "; /// tell it you what you want the label to say
    fieldset.appendChild(label1);   // append the label to the form
    input1 = document.createElement("input"); //create the input
    input1.setAttribute("class", "newuserform"); // set each attribute...the css class
    input1.setAttribute("name", "firstName");    // set the name attribute...where the data will land
    fieldset.appendChild(input1);
    fieldset.appendChild(space.cloneNode());   //creates a break and allows us to do it repeatidly

    label2 = document.createElement("label")
    label2.innerText = "Last Name:  ";
    fieldset.appendChild(label2);
    input2 = document.createElement("input"); //create the input
    input2.setAttribute("class", "newuserform"); // set each attribute...the css class
    input2.setAttribute("name", "lastName");    // set the name attribute...where the data will land
    fieldset.appendChild(input2);
    fieldset.appendChild(space.cloneNode());;

    label4 = document.createElement("label")
    label4.innerText = "Neighborhood:  ";
    fieldset.appendChild(label4);
    input4 = document.createElement("input"); //create the input
    input4.setAttribute("class", "newuserform"); // set each attribute...the css class
    input4.setAttribute("name", "neighborhood");    // set the name attribute...where the data will land
    fieldset.appendChild(input4);
    fieldset.appendChild(space.cloneNode());
    fieldset.appendChild(space.cloneNode());

    label5 = document.createElement("label")
    label5.innerText = "User Name:  ";
    fieldset.appendChild(label5);
    input5 = document.createElement("input"); //create the input
    input5.setAttribute("class", "newuserform"); // set each attribute...the css class
    input5.setAttribute("name", "userName");    // set the name attribute...where the data will land
    fieldset.appendChild(input5);
    fieldset.appendChild(space.cloneNode());

    label6 = document.createElement("label")
    label6.innerText = "Password:  ";
    fieldset.appendChild(label6);
    input6 = document.createElement("input"); //create the input
    input6.setAttribute("class", "newuserform"); // set each attribute...the css class
    input6.setAttribute("name", "password");    // set the name attribute...where the data will land
    fieldset.appendChild(input6);
    fieldset.appendChild(space.cloneNode());
    fieldset.appendChild(space.cloneNode());
    fieldset.appendChild(space.cloneNode());

    input5 = document.createElement("input"); //create the input
    input5.setAttribute("type", "button"); // set each attribute...the css class
    input5.setAttribute("value", "Submit");    // set the name attribute...where the data will land
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
    userProfile.push(new UserProfile(newFirstName, newLastName, newNeighborhood, newUserName, newUserPassword));
    document.getElementById("new-user-info").innerHTML = ""; //removes the form from the screen
    var login = document.getElementById("login-user");
    login.setAttribute("class", "");
}

//this is a function to validate the username/password inputs
function loginUser() {
  var form = document.getElementById("login-user");
  var userNameInput = form.Username;
  var passwordInput = document.getElementById("input").innerHTML = "Password";
  var userMatch = userProfile.find (function (profile) {
      return((profile.userName == userNameInput) && (profile.password == passwordInput))
      if(!userMatch) {
        "No account found. Please create an account"
      } else {
        "link to userprofile screen"
      }
    });
}
