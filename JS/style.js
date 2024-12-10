var registerForm = document.getElementById("registerForm")
var signName = document.getElementById("signName")
var signEmail = document.getElementById("signEmail")
var signPassword = document.getElementById("signPassword")
var nameAlert = document.getElementById("nameAlert")
var emailAlert = document.getElementById("emailAlert")
var passwordAlert = document.getElementById("passwordAlert")
var existAlert = document.getElementById("existAlert")
var successAlert = document.getElementById("successAlert")
var allUsers = [];

if(localStorage.getItem("allUsers") !== null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    if (checkIfAllInputsAreValid()) {
      console.log("user is added");
      addUser();
     }
  });
  function addUser() {
    var newUser = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value,
    };

    if (isExist(newUser) == true) {
        console.log("email is already exist");
        existAlert.classList.replace("d-none", "d-block");
        successAlert.classList.replace("d-block", "d-none");
    } else {
        console.log(newUser);
        allUsers.push(newUser);
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        successAlert.classList.replace("d-none", "d-block");
        existAlert.classList.replace("d-block", "d-none");



        window.location.href = 'sign in/sign-in.html'
        console.log(allUsers);
        console.log("user is new");
    }
}

function isExist(newUser) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
            console.log("email is already existed");
            return true;
        }
    }
    return false;
}

  function validateAllInputs(regex, element, alertMsg) {
    var pattern = regex;  
    if (pattern.test(element.value) === true) {
      console.log("valid");
      alertMsg.classList.replace("d-block", "d-none");
      return true;
    } else {
      console.log("invalid");
      alertMsg.classList.replace("d-none", "d-block");
      return false;
    }
  }
  
  function checkIfAllInputsAreValid() {
    if (
      validateAllInputs(/[a-zA-Z]{2,}$/, signName, nameAlert) &&
      validateAllInputs(
        /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
        signEmail,
        emailAlert
      ) &&
      validateAllInputs(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*(){}:";'.,<>\/?])[A-Za-z\d!@#\$%\^&\*(){}:";'.,<>\/?]{8,}$/,
        signPassword,
        passwordAlert
      )
    ) {
      console.log("all inputs are valid");
      return true;
    } else {
      return false;
    }
  }
  