const productID = localStorage.getItem("productID")
const productDetails = document.querySelector(".product-details")


const product = products.find((product) => product.id == productID)


productDetails.innerHTML = `
    <div class="content">
        <h3 >${product.productName}</h3>
         <div class="price"> ${product.price} </div>
    </div>

    <div class="image">
         <img src="${product.image}" alt="">
    </div>
    `
