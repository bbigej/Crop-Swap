//Object constructor for new
var UserProfile = function (firstName, lastName, userName, password, neighborhood, cropIndexes){
  this.firstname = firstName;
  this.lastname = lastName;
  this.username = userName;
  this.password = password;
  this.neighborhood = neighborhood;
  this.img = picture;
  this.crops = cropIndexes;
}

//Array of user objects
var userProfile = [];

//function to add a new user
var createAccountForm = function(){
    document.getElementById("new-user").innerHTML = ""; //removes the button from the screen
    document.getElementById("login-user").innerHTML = ""; //removes the login from the screen
    var space = document.createElement("br");  //create a break in HTML
    var form = document.getElementById("new-user-info"); //create the HTML form grouping
    header = document.createElement("legend"); //create the legend header
    header.innerText = "Your Profile";  /// tell it what you want the header to say
    form.appendChild(header);  //append the the form with the header

    label1 = document.createElement("label") //create an HTML label for the input
    label1.innerText = "First Name:  "; /// tell it you what you want the label to say
    form.appendChild(label1);   // append the label to the form
    input1 = document.createElement("input"); //create the input
    input1.setAttribute("class", "newuserform"); // set each attribute...the css class
    input1.setAttribute("name", "firtName");    // set the name attribute...where the data will land
    form.appendChild(input1);
    form.appendChild(space.cloneNode());   //creates a break and allows us to do it repeatidly

    label2 = document.createElement("label")
    label2.innerText = "Last Name:  ";
    form.appendChild(label2);
    input2 = document.createElement("input"); //create the input
    input2.setAttribute("class", "newuserform"); // set each attribute...the css class
    input2.setAttribute("name", "lastName");    // set the name attribute...where the data will land
    form.appendChild(input2);
    form.appendChild(space.cloneNode());

    label4 = document.createElement("label")
    label4.innerText = "Neighborhood:  ";
    form.appendChild(label4);
    input4 = document.createElement("input"); //create the input
    input4.setAttribute("class", "newuserform"); // set each attribute...the css class
    input4.setAttribute("name", "neighborhood")    // set the name attribute...where the data will land
    form.appendChild(input4);
    form.appendChild(space.cloneNode());
    form.appendChild(space.cloneNode());

    label5 = document.createElement("label")
    label5.innerText = "User Name:  ";
    form.appendChild(label5);
    input5 = document.createElement("input"); //create the input
    input5.setAttribute("class", "newuserform"); // set each attribute...the css class
    input5.setAttribute("name", "userName")    // set the name attribute...where the data will land
    form.appendChild(input5);
    form.appendChild(space.cloneNode());

    label6 = document.createElement("label")
    label6.innerText = "Password:  ";
    form.appendChild(label6);
    input6 = document.createElement("input"); //create the input
    input6.setAttribute("class", "newuserform"); // set each attribute...the css class
    input6.setAttribute("name", "password")    // set the name attribute...where the data will land
    form.appendChild(input6);
    form.appendChild(space.cloneNode());
    form.appendChild(space.cloneNode());
    form.appendChild(space.cloneNode());

    input5 = document.createElement("input"); //create the input
    input5.setAttribute("type", "button"); // set each attribute...the css class
    input5.setAttribute("value", "Submit");    // set the name attribute...where the data will land
    input5.setAttribute("onclick", "submitFormDetails()");
    form.appendChild(input5);
}

// // function to submit user details into the user object array and clear the new user form from the screen
//   function submitFormDetails(){
//     var form = document.forms["new-user-form"]; //this is "forms" not "form" because the DOM creates several arrays automatically.
//     var newFirsName = form.elements["firstName"].value;
//     var newLastName = form.elements["LastName"].value;
//     var newNeighborhood = form.elements["neighborhood"].value;
//     var newUserName = form.elements["userName"].value;
//     userProfile.push(new UserProfile("Allyson", "Short", "kittens", "Sellwood",[1,3,5]));
//     //buildTable()
//     document.getElementById("new-user-info").innerHTML = ""; //removes the form from the screen
// }
