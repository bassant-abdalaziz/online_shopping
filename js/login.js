const userName = document.getElementById("userName")
const password = document.getElementById("Password")
const btnSignin = document.getElementById("btn-signin")
const spans = document.querySelectorAll(".failed")



function success(myInput) {
    myInput.classList.remove("fail")
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



//Password
function validatePassword() {
    let regexPassword = /^(([A-Z]|[a-z]){1,}|[0-9]{1,}|.){8,}$/
    if (regexPassword.test(password.value) == true) {
        success(password)
        spans[1].innerHTML = " "
    }
    else {
        failed(password)
        spans[1].innerHTML = "Please, enter password at least 8 contains letters , numbers and symbols"
    }
}
password.addEventListener("blur", validatePassword)


//compare username and password with data in localstorage

const getuserName = localStorage.getItem("userName")
const getPassword = localStorage.getItem("password")

function checkuserName() {
    if (userName.value !== getuserName) {
        spans[0].innerHTML = "invalid username"
    }
    else {
        spans[0].innerHTML = " "
    }
}

function checkPassword() {
    if (password.value !== getPassword) {
        spans[1].innerHTML = "invalid password"
    }

    else {
        spans[1].innerHTML = " "
    }
}

btnSignin.addEventListener("click", (e) => {
    e.preventDefault();

    if (userName.value === "" || password.value === "") {
        alert("Please, Fill All Inputs")
    }

    else {

        if (userName.value === getuserName && password.value === getPassword) {

            setTimeout(() => {
                window.location = 'index.html'
            }, 1500);
        }

        else {
            checkuserName()
            checkPassword()
        }

    }
})