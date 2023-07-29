const divFavProducts = document.querySelector(".favProducts")
const emptyFav = document.querySelector(".emptyFav")


function displayFavProducts() {
    let favProducts = JSON.parse(localStorage.getItem("favProducts"))

    if (favProducts.length == 0) {
        emptyFav.style.display = "block"
    }

    let favProductsUI = ""
    favProducts.forEach((product) => {

        favProductsUI += `
        <div class="box">
            <div class="image">
                 <img src="${product.image}" alt="">
            </div>
            <div class="content">
                <h3>${product.productName}</h3>
                <div class="price"> ${product.price} </div>
                <button class="remove" onclick="removeFavProducts(${product.id})"><i class="fa fa-trash" id="favorite"></i></button>
            </div>
        </div>
        `
    })

    divFavProducts.innerHTML = favProductsUI
}
displayFavProducts()






// let filteredItem;
// function removeFavProducts(id) {
//     const getFavproducts = localStorage.getItem("favProducts")
//     let getmyProducts = JSON.parse(localStorage.getItem("myProducts"))

//     if (getFavproducts) {
//         const products = JSON.parse(getFavproducts)
//         const filteredFavProduct = products.filter(product => product.id !== id)
//         localStorage.setItem('favProducts', JSON.stringify(filteredFavProduct))

//         getmyProducts = getmyProducts.map(product => {
//             filteredFavProduct.map(p => { filteredItem = p })

//             if (product.id !== filteredItem.id) {
//                 product.liked = false
//                 localStorage.setItem("myProducts", JSON.stringify(getmyProducts));
//             }
//         })
//         displayFavProducts(products)
//     }
// }


function removeFavProducts(id) {
    const getFavProducts = localStorage.getItem("favProducts");
    let getmyProducts = JSON.parse(localStorage.getItem("myProducts"));

    if (getFavProducts) {
        const products = JSON.parse(getFavProducts);
        const filteredFavProduct = products.filter(product => product.id !== id);
        localStorage.setItem('favProducts', JSON.stringify(filteredFavProduct));

        // Update the 'liked' property in the 'getmyProducts' array
        getmyProducts = getmyProducts.map(product => {
            const isLiked = filteredFavProduct.some(favProduct => favProduct.id === product.id);
            return { ...product, liked: isLiked };
        });

        localStorage.setItem("myProducts", JSON.stringify(getmyProducts));

        displayFavProducts(filteredFavProduct);

    }
}



