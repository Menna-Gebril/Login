var loginForm = document.getElementById("loginForm");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginAlert = document.getElementById("loginAlert");
var loginSuccessAlert = document.getElementById("loginSuccessAlert");

var allUsers = [];




if (localStorage.getItem("allUsers") !== null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default behaviour of the form
    login();
});

function login() {
    var userData = {
        email: loginEmail.value,
        password: loginPassword.value,
    };
    console.log(userData);

    if (isLoginValid(userData) === true) {
        console.log("you are logged in");
        loginSuccessAlert.classList.replace("d-none", "d-block")
        loginAlert.classList.replace("d-block", "d-none")
        window.location.href ='../welcome/welcome.html'




    } else {
        console.log("user not found, please sign up!");
        loginAlert.classList.replace("d-none", "d-block")
        loginSuccessAlert.classList.replace("d-block", "d-none")

    }
}

function isLoginValid(userData) {
    for (var i = 0; i < allUsers.length; i++) {
        if (
            allUsers[i].email.toLowerCase() === userData.email.toLowerCase() &&
            allUsers[i].password.toLowerCase() === userData.password.toLowerCase()
        ) {
            console.log("user found");
            localStorage.setItem("userName", allUsers[i].name);
            return true;
        }
    }
    return false;
}


