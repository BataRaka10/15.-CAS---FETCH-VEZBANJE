
// /**
//  * ajax, axios, fetch, postReq, XHR...
//  * 
//  * 
//  * FETCH
//  * 
//  * CORS
//  *   Cross Origin Resource Sharing
//  *   => Izvor (Origin) - odakle pozivamo API
//  *   
//  *      -> Idi na dummyjson.com/test
//  *      -> uzmi odgovor
//  *      -> prikazi odgovor
//  *      asingrono (Async)
//  * 
//  *     Promise -> garancija da cete dobiti odgovor
//  *         Kada? 
//  *         Sta ce biti odgovor? 
//  *         Da li dolazi do greske?
//  * 
//  *   Pozovi https://dummyjson.com/test
//  *      -> Promise: Obecavam ti da ces nekada dobiti odgovor
//  *      -> Kod nastavla da se izvrsava
//  * 
//  *     -> Pozovi dummyjson API:
//  *        -> Obecavam da cu ti dati odgovor
//  * 
//  *   -> Nastavlja kod 
//  * 
//  * mojaGaraza.rs
//  *  -> API od OTP banke (30s)
//  *  -> OTP Banka ne radi
//  * 
//  *

let productsHolder = document.getElementById("products")

let searchProduct = document.getElementById("searchProduct")

let response = fetch("https://dummyjson.com/test")
    .then(function(response) {
        if (response.ok) {
            console.log("Uspesno poslali api!")
        }

        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })


searchProduct.addEventListener("click", function() {

    let searchText = document.getElementById("searchText")
    // console.log(searchText.value)

    let searchLink = "https://dummyjson.com/products/search?q=" + searchText.value;
    console.log(searchLink)

    fetch(searchLink).then(response2 => response2.json())
        .then(function(data2) {
            console.log(data2)
            productsHolder.innerHTML = "";
            for (let product of data2.products) {
                appendProductToHolder(product)
            }
        })
})


let response2 = fetch("https://dummyjson.com/products?limit=20&sortBy=price&order=desc")
    .then(function(response2) {
        console.log("Domaci ok")

        return response2.json()
    })
    .then(function(data2) {
        console.log(data2)
        // console.log(data2.products)

        for (let product of data2.products ) {
            // console.log(product.title, product.category)
            appendProductToHolder(product)

            // let singleProduct = document.createElement("div")

            // let productTitle = document.createElement("h2")
            // productTitle.innerText = product.title

            // let productCategory = document.createElement("p")
            // productCategory.innerText = product.category

            // let productPrice = document.createElement("p")
            // productPrice.innerText = product.price

            // singleProduct.append(productTitle, productCategory, productPrice)

            // productsHolder.append(singleProduct)
        }
    })


function appendProductToHolder(product) {
    
    let singleProduct = document.createElement("div")

    let productTitle = document.createElement("h2")
    productTitle.innerText = product.title

    let productCategory = document.createElement("p")
    productCategory.innerText = product.category

    let productPrice = document.createElement("p")
    productPrice.innerText = product.price

    singleProduct.append(productTitle, productCategory, productPrice)

    productsHolder.append(singleProduct)
}











// let response = fetch("https://dummyjson.com/test")
    // 1.then odgovor od naseg promisa -> uspesno je proslo
    // skraceno
    // .then(response => response.json())

    // .then(function(response) {
        // console.log("")
        // ako je odgovor ok
    //     if (response.ok) {
    //         console.log("Uspesno smo pozvali api!")
    //     }
    //     return response.json(); // vracamoo u sledecu funkciju uodgovor
        // odavde vratiti podatke
    // })
    // ovo hvata podatke
    // .then(function(data) {
    //     console.log(data);
    // })



// domaci
// API vraca 20 podataka po stranici, sortirati po ceni najvise ka najmanjoj
// ASC i DESC = (Asceding rastuci) i (Descnding = padajuci)








/**
 *  .then(response => response.json())
 *  isto kao
 *  .then(function(response) {
 *  return response.json(); 
 *  })
 */











// let productsHolder = document.getElementById("products")

// let searchProduct = document.getElementById("searchProduct")

// let response = fetch("https://dummyjson.com/test")
//     .then(function(response) {
//         console.log(response.ok)
//         if (response.ok) {
//             console.log("Uspesno smo dobili api!")
//         }
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//     })

// searchProduct.addEventListener("click", function() {

//     let searchText = document.getElementById("searchText")
    // console.log(searchText.value)
//     let searchLink = "https://dummyjson.com/products/search?q=" + searchText.value;
//     console.log(searchLink)



// })


// let response2 = fetch("https://dummyjson.com/products?limit=20&sortBy=price&order=desc")
//     .then(function(response2) {
//         if (response2.ok) {
//             console.log("domaci ok")
//         }
//         return response2.json();
//     })
//     .then(function(data2) {
//         console.log(data2)
//         for (let product of data2.products) {
            // console.log(product.title, product.category)
//             appendProductToHolder(product)

            // let singleProduct = document.createElement("div")

            // let productTitle = document.createElement("p")
            // productTitle.innerText = product.title

            // let productCategory = document.createElement("p")
            // productCategory.innerText = product.category

            // let productPrice = document.createElement("p")
            // productPrice.innerText = product.price

            // singleProduct.append(productTitle, productCategory, productPrice)

            // productsHolder.appendChild(singleProduct)

            // console.log(singleProduct)
//         }
//     })


// function appendProductToHolder(product) {

//     let singleProduct = document.createElement("div")

//     let productTitle = document.createElement("p")
//     productTitle.innerText = product.title

//     let productCategory = document.createElement("p")
//     productCategory.innerText = product.category

//     let productPrice = document.createElement("p")
//     productPrice.innerText = product.price

//     singleProduct.append(productTitle, productCategory, productPrice)

//     productsHolder.appendChild(singleProduct)
// }












// let productsHolder = document.getElementById("products")

// let searchProduct = document.getElementById("searchProduct")

// let response = fetch("https://dummyjson.com/test")
    // then se izvrsava tek kada dobije odgovor
    // prvi then -> odgovor od promisa -> uspesno proslo / ako odg OK - uspesno pozvali API
//     .then(function(response) {
//         console.log(response.ok)
//         if (response.ok) {
//             console.log("Uspesno smo pozvali api!")
//         }
//         return response.json();
    // vracamo u sledecu funkciju taj odgovor
//     })
    // iz tog odgovora vadi te podatke
//     .then(function(data) {
//         console.log(data)

//     })

// domaci
// API vraca 20 podataka po stranici, sortirati po ceni najvise ka najmanjoj
// ASC i DESC = (Asceding rastuci) i (Descnding = padajuci)

// searchProduct.addEventListener("click", function() {
    // console.log("Works")
//     let searchText = document.getElementById("searchText")
    // console.log(searchText.value)
    // mi uzimamo searchText element
    // pravimo link za pretragu /   q - serch parametar za pretragu
//     let searchLink = "https://dummyjson.com/products/search?q=" + searchText.value;
//     console.log(searchLink)

    // fecth za pozivanje API
//     fetch(searchLink)
        // u prvom dobijamo promise
        // prvom ok propso si - vrati jason sa podartcima
//         .then(function(response) {
//             return response.json();
//         })
        // 2. filtrira podatke / u 2.konkretne podatke koje zelino
//         .then(function(data) {
//             productsHolder.innerHTML = "";
//             // console.log(data)
//             for (let product of data.products) {
//                 appendProductToHolder(product)
//             }
//         })

// })


// .then(response => response.json())
    
// .then(function(response) {
//     return response.json()
// })

// let response2 = fetch("https://dummyjson.com/products?limit=20&sortBy=price&order=desc")

    // .then(function(response2) {
    //     if (response2.ok) {
    //         console.log("radi ok")
    //     }
    //     return response2.json()
    // })
    // sakraceno
//     .then(response => response.json())
//     .then(function(data2) {
//         console.log(data2)
        // console.log(data2.products)

//         for (let product of data2.products) {
            // console.log(product.title, product.category)
//             appendProductToHolder(product);

            // let singleProduct = document.createElement("div")

            // let productTitle = document.createElement("h2")
            // productTitle.innerText = product.title

            // let productCategory = document.createElement("p")
            // productCategory.innerText = product.category

            // let  productPrice = document.createElement("p")
            // productPrice.innerText = product.price

            // singleProduct.append(productTitle, productCategory, productPrice)

            // productsHolder.append(singleProduct)
//         }

//     })


// function appendProductToHolder(product) {

//     let singleProduct = document.createElement("div")

//     let productTitle = document.createElement("h2")
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
//     console.log(response.ok)
//         if (response.ok) {
//             console.log("Uspesno smo dobili api!")
//         }
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//     })


// let response2 = fetch("https://dummyjson.com/products")
//     .then(function(response2) {
//         console.log(response2.ok)
//         if (response2.ok) {
//             console.log("ok api vezba")
//         }
//         return response2.json();
//     })
//     .then(function(data2) {
//         // console.log(data2)
//         console.log(data2.products)

//         for (let product of data2.products) {
//             console.log(product.title, product.category)

            // let singleProduct = document.createElement("div")

            // let productTitle = document.createElement("h2")
            // productTitle.innerText = productTitle.title

            // let productCategory = document.createElement("p")
            // productCategory.innerText = product.category

            // let productPrice = document.createElement("p")
            // productPrice.innerText = product.price

            // singleProduct.append(productTitle, productCategory, productPrice)

    //         console.log(singleProduct)
    //     }
    // })

// function appendProductToHolder(product) {

// let singleProduct = document.createElement("div")

//     let productTitle = document.createElement("h2")
//     productTitle.innerText = productTitle.title

//     let productCategory = document.createElement("p")
//     productCategory.innerText = product.category

//     let productPrice = document.createElement("p")
//     productPrice.innerText = product.price

//     singleProduct.append(productTitle, productCategory, productPrice)
// }


// let productsHolder = document.getElementById("products")

// let searchProduct = document.getElementById("searchProduct")


// than - tek kada dobije odgovor
// let response = fetch("https://dummyjson.com/test")
//     .then(function(response) {
        // console.log(response.ok);
//         if (response.ok) {
            // ako je odgovor ok
//             console.log("Uspesno smo pozvali api!")
//         }
        // vraticemo dalje u sledeci funkciju
        // vraca promise
//         return response.json();
//     })
//     // u drugom than dobiojamo odgovor
//     .then(function(data) {
//         console.log(data)
//     })

// API vraca 20 podataka po stranici, sortirati po ceni najvise ka najmanjoj
// ASC i DESC = (Asceding rastuci) i (Descnding = padajuci)

// searchProduct.addEventListener("click", function() {
    // console.log("Works")
//     let searchText = document.getElementById("searchText")
    // console.log(searchText.vale)
    // q - search parametar za pretragu
//     let searchLink = "https://dummyjson.com/products/search?q=phone" + searchText.value;
    // console.log(searchLink)

//     fetch(searchLink)
//         .then(function(response){
            // proso vrati jason sa podatcinma/ dobili promise
//             return response.json();
//         })
        // filtriramo podatke
//         .then(function(data) {
//             console.log(data)
//         })

// })

// domaci:     fetch pozivamo API
// let response2 = fetch("https://dummyjson.com/products?limit=20&sortBy=price&order=desc")
//     .then(function(response2) {
//         if (response2.ok) {
//             console.log("ok api")
//         }
//         return response2.json();
//     })
    // .then(function(data2) {
        // console.log(data2.products)
        // for (let product of data2.products) {
            // console.log(product.title, product.category)
            // appendProductToHolder(product)

            // let singleProduct = document.createElement("div")

            // let productTitle = document.createElement("h2")
            // productTitle.innerText = product.title

            // let productCategory = document.createElement("p")
            // productCategory.innerText = product.category

            // singleProduct.append(productTitle, productCategory)

            // productsHolder.append(singleProduct)
            // console.log(singleProduct)
    //     }

    // })

// function appendProductToHolder(product) {

//     let singleProduct = document.createElement("div")

//     let productTitle = document.createElement("h2")
//     productTitle.innerText = product.title

//     let productCategory = document.createElement("p")
//     productCategory.innerText = product.category

//     let productPrice = document.createElement("p")
//     productPrice.innerText = product.price

//     singleProduct.append(productTitle, productCategory, productPrice)

//     productsHolder.append(singleProduct)

// }
