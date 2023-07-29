const divproductsIncart = document.querySelector(".productsIncart")
const emptyCart = document.querySelector(".emptyCart")

function displayProductsInCart() {
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"))

    if (productsInCart.length == 0) {
        emptyCart.style.display = "block"
    }

    let productsInCartUI = ""
    productsInCart.forEach((product) => {

        productsInCartUI += `
        <div class="box">
            <div class="image">
                 <img src="${product.image}" alt="">
            </div>
            <div class="content">
                <h3>${product.productName}</h3>
                <div class="price"> ${product.price} </div>
                <div class="price"> quantity: ${product.quantity} </div>
                <button class="remove" onclick="removeProductFromCart(${product.id})"><i class="fa fa-trash" id="favorite"></i></button>
            </div>
        </div>
        `
    })

    divproductsIncart.innerHTML = productsInCartUI
}
displayProductsInCart()


//Remove Product
function removeProductFromCart(id) {
    const getproductsInCart = localStorage.getItem("productsInCart")

    if (getproductsInCart) {
        const products = JSON.parse(getproductsInCart)
        const filteredProduct = products.filter(product => product.id !== id)
        localStorage.setItem('productsInCart', JSON.stringify(filteredProduct))
        displayProductsInCart()
    }
}







