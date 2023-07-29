const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

const links = document.querySelector(".links")
const userInfo = document.querySelector(".userInfo")
const user = document.getElementById("user")
const logOut = document.getElementById("logout")


////////////////////////////////////////////////////////////////



const username = localStorage.getItem("userName");
if (username) {
    //Navbar//
    menu.addEventListener('click', () => {
        navbar.classList.toggle('open')

        if (menu.classList.contains("fa-bars"))
            menu.classList.replace("fa-bars", "fa-times")

        else
            menu.classList.replace("fa-times", "fa-bars")
    })
    links.remove()
    userInfo.style.display = "flex"
    userInfo.classList.add("userInfoAppearing")
    user.innerHTML = username
}
else {
    navbar.style.display = "none"
    menu.style.display = "none"
}
logOut.addEventListener("click", () => {
    localStorage.clear()
    setTimeout(() => {
        window.location = "signup.html"
    }, 1500)
})

//////////////////////////////////////////////////