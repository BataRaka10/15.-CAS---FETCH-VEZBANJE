
/**
 * ajax, axios, fetch, postReq, XHR...
 * 
 * 
 * FETCH
 * 
 * CORS
 *   Cross Origin Resource Sharing
 *   => Izvor (Origin) - odakle pozivamo API
 *   
 *      -> Idi na dummyjson.com/test
 *      -> uzmi odgovor
 *      -> prikazi odgovor
 *      asingrono (Async)
 * 
 *     Promise garancija da cete dobiti odgovor
 *         Kada? 
 *         Sta ce biti odgovor? 
 *         Da li dolazi do greske?
 * 
 *   Pozovi https://dummyjson.com/test
 *      -> Promise: Obecavam ti da ces nekada dobiti odgovor
 *      -> Kod nastavla da se izvrsava
 * 
 *     -> Pozovi dummyjson API:
 *     -> Obecavam da cu ti dati odgovor
 * 
 *   -> Nastavlja kod 
 * 
 * mojaGaraza.rs
 *  -> API od OTP banke (30s)
 *  -> OTP Banka ne radi
 * 
 */

// let productsHolder = document.getElementById("products")

// let searchProduct = document.getElementById("searchProduct")


// API vraca 20 podataka, sortirani po ceni od najvise ka najmanjoj

// searchProduct.addEventListener("click", function() {

//     let searchText = document.getElementById("searchText")
//     // console.log(searchText.value)
//     let searchLink = ('https://dummyjson.com/products/search?q=phone') + searchText.value;
    // console.log(searchLink)

//     fetch(searchLink)
//         .then(function(response2) {
//             return response2.json()
//         })
//         .then(function(data2) {
            // console.log(data2)
//             productsHolder.innerHTML = "";
//             for (let product of data2.products) {
//             appendProductToHolder(product)
//         }
//     })

// })

// then se izvrasa tek kaad dobije odgovor
// let response = fetch("https://dummyjson.com/test")
//     .then(function(response) {
        // console.log(response)
//         if (response.ok) {
//             console.log("Uspesno pozvali api!")
//         }
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data)
//     })


// let response2 = fetch('https://dummyjson.com/products?limit=20&sortBy=price&oreder=desc')
//     .then(function(response2) {
//         if (response2.ok) {
//             console.log("ok PI")
//         }
//         return response2.json()
//     })
//     .then(function(data2) {
        // console.log(data2)
//         for (let product of data2.products) {
//             appendProductToHolder(product)
            // console.log(product.title, product.category)

            // let singleProduct = document.createElement("div")

            // let productTitle = document.createElement("h1")
            // productTitle.innerText = product.title

            // let productCategory = document.createElement("p")
            // productCategory.innerText = product.category

            // singleProduct.append(productTitle, productCategory)

            // console.log(singleProduct)
            // productsHolder.append(singleProduct)
        // }
    // })

// function appendProductToHolder(product) {

//     let singleProduct = document.createElement("div")

//     let productTitle = document.createElement("h1")
//     productTitle.innerText = product.title

//     let productCategory = document.createElement("p")
//     productCategory.innerText = product.category

//     let productPrice = document.createElement("p")
//     productPrice.innerText = product.price

//     singleProduct.append(productTitle, productCategory, productPrice)

//     productsHolder.append(singleProduct)
// }



// let response = fetch("https://dummyjson.com/test")
//     .then(function(response) {
        // console.log(response.ok)
//         if (response.ok) {
//             console.log("Uspesno smo pozvali api!")
//         }
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data)
//     })

// API vraca 20 podataka, sortirani po ceni od najvise ka najmanjoj
// ASC i DESC = (Asceding rastuci) i (Descnding = padajuci)

// searchProduct.addEventListener("click", function() {
//     let searchText = document.getElementById("searchText")
    // console.log(searchText.value)
//     let searchLink = "https://dummyjson.com/products/search?q=" + searchText.value;

//     console.log(searchLink)

// })

// domaci: limit and skip
// let response2 = fetch("https://dummyjson.com/products?limit=20&sortBy=price&order=desc")
//     .then(function(response2) {
//         if (response2.ok) {
//             console.log("res2 ok")
//         }
//         return response2.json()
//     })
//     .then(function(data2) {
        // console.log(data2.products)
//         for (let product of data2.products) {
            // console.log(product.title, product.category)
//             appendProductToHolder(product);

            // let singleProduct = document.createElement("div")

            // let productTitle = document.createElement("h1")
            // productTitle.innerText = product.title

            // let productCategory = document.createElement("p")
            // productCategory.innerText = product.category

            // singleProduct.append(productTitle, productCategory)
            // console.log(singleProduct)

            // productsHolder.append(singleProduct)
//         }
//     })




// function appendProductToHolder(product) {
//     let singleProduct = document.createElement("div")

//     let productTitle = document.createElement("h1")
//     productTitle.innerText = product.title

//     let productCategory = document.createElement("p")
//     productCategory.innerText = product.category

//     let productPrice = document.createElement("p")
//     productPrice.innerText = product.price

//     singleProduct.append(productTitle, productCategory, productPrice)
//     // console.log(singleProduct)

//     productsHolder.append(singleProduct)

// }


























// let productsHolder = document.getAnimations("products")

// let searchProduct = document.getElementById("searchProduct")
// domaci: API vraca 20 podataka, sortirani po ceni od najvise ka najnizoj
// ASC i DESC (Ascending) rastuci, Descending) pasdajuci
// searchProduct.addEventListener("click", function() {

//     let searchText = document.getElementById("searchText")
//     console.log(searchText.value)
// })

// //                                    then(dodajemo na taj fetch)
//  & novi PARAMETAR
// let response = fetch("https://dummyjson.com/test")
    // 1. then - odgovor od naseg promisa
    // .then(function(response) {
    // console.log(2);
    // console.log(response.ok);
    // ako je odg. ok
        // if(response.ok) {
            // console.log("Uspesno smo pozvasli api")
        // }
        // return response.json()
        // vracamo u tu funckiju odgovor
    // })
    // a on iz tog odgovora vadi te podatke
    // .then(function(data) {
    //     console.log(data)
    // })

// console.log(response)

// vezba
// GET parametar (povecanje limita) ? pocinjete sa tim paramertrom (?limit=10) 
// let response2 = fetch("https://dummyjson.com/test").then(function(response2) {
//     if (response2.ok) {
//         console.log("Poziv Ok")
//     }
//     return response2.json()
//     })
//     .then(function(data2) {
//         console.log(data2.products)
        // console.log(data2.products)
        // petlja preko svih tih proizvoda
        // for (let product of data2.products) {
            
            // ispisali stavke iz nje
            // console.log(product.title, product.category);

            // napraviti div element
//             let singleProduct = document.createElement("div")

//             let productTitle = document.createElement("h1")

//             productTitle.innerText = product.title

//             let productCategory = document.createElement("p")
//             productCategory.innerText = product.category

//             singleProduct.append(produ)

//             console.log(singleProduct)
//         }

// })


