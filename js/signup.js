const userName = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("conPassword")
const btnSignup = document.getElementById("btn-signup")
const spans = document.querySelectorAll(".failed")



function success(myInput) {
    myInput.classList.remove("fail")
    myInput.classList.add("success")
}

function failed(myInput) {
    myInput.classList.remove("success")
    myInput.classList.add("fail")
}

//UserName
function validateUserName() {
    let regexUserName = /^([A-Z]|[a-z]){3,10}[0-9]{1,10}$/
    if (regexUserName.test(userName.value) == true) {
        success(userName)
        spans[0].innerHTML = " "
    }
    else {
        failed(userName)
        spans[0].innerHTML = "Please, enter username contains only letters and numbers"
    }
}
userName.addEventListener("blur", validateUserName)


//Email
function validateEmail() {
    let regexEmail = /^[\w]+@[a-z]+\.[a-z]{2,3}$/
    if (regexEmail.test(email.value) == true) {
        success(email)
        spans[1].innerHTML = " "
    }
    else {
        failed(email)
        spans[1].innerHTML = "Please, enter valid email contains @ and ."
    }
}
email.addEventListener("blur", validateEmail)


//Password
function validatePassword() {
    let regexPassword = /^(([A-Z]|[a-z]){1,}|[0-9]{1,}|.){8,}$/
    if (regexPassword.test(password.value) == true) {
        success(password)
        spans[2].innerHTML = " "
    }
    else {
        failed(password)
        spans[2].innerHTML = "Please, enter password at least 8 contains letters , numbers and symbols"
    }
}
password.addEventListener("blur", validatePassword)


//Confirm Password
function validateconfirmPassword() {
    let regexconfirmPassword = /^(([A-Z]|[a-z]){1,}|[0-9]{1,}|.){8,}$/
    if (regexconfirmPassword.test(confirmPassword.value) == true) {
        success(confirmPassword)
        spans[3].innerHTML = " "
    }
    else {
        failed(confirmPassword)
        spans[3].innerHTML = "Please, confirm your password"
    }
}
confirmPassword.addEventListener("blur", validateconfirmPassword)


//Check Password
function checkPassword() {
    if (confirmPassword.value !== password.value) {
        failed(confirmPassword)
        spans[3].innerHTML = "password is not identical to original password"
        return false
    }
}



btnSignup.addEventListener("click", (e) => {
    e.preventDefault();

    if (userName.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
        alert("Please, Fill All Inputs")
    }

    else {
        checkPassword()
        if (checkPassword() !== false) {
            localStorage.setItem("userName", userName.value)
            localStorage.setItem("email", email.value)
            localStorage.setItem("password", password.value)
            localStorage.setItem("confirmPassword", confirmPassword.value)

            setTimeout(() => {
                window.location = 'login.html'
            }, 1500);

            userName.value = ""
            email.value = ""
        }
    }
})