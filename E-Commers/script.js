titleElmt = document.querySelector('#title')
descriptionElmt = document.querySelector('#description')
categoryElmt = document.querySelector('#category')
brandElmt = document.querySelector('#brand')
priceElmt = document.querySelector('#price')
quantityElmt = document.querySelector('#quantity')
cartLengthElmt = document.getElementById('cartLength')

const renderProductsElmt = document.querySelector('#renderProducts')

products = []
cart = []

function saveToLocal(p) {
    localStorage.setItem('B81', JSON.stringify(p))
}
function getFromLocal() {
    return JSON.parse(localStorage.getItem('B81'))
}
function saveCartToLocal(c) {
    localStorage.setItem('Cart81', JSON.stringify(c))
}

function getCartFromLocal() {
    return JSON.parse(localStorage.getItem('Cart81'))
}

function renderProducts() {
    renderProducts = getFromLocal()
    console.log('renderProducts', renderProducts)
    //  const map = new Map(Object.entries(renderProducts));
    renderProductsElmt.innerHTML = renderProducts.map((prod, index) => `
                <div class='col-12 col-md-6 col-lg-4 mr-2 mb-3'>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title">${prod.title}</h4>
        <p class="card-text">${prod.description}</p>
         <p class="card-text">${prod.category}</p>
        <h5>Price : &#8377; <span>${prod.price}</span></h5>
        <button class="btn btn-primary" onclick="addToCart(${prod.id})">Add To Cart</button>
      </div>
    </div>

                </div>
        `).join('')

    //     renderProductsElmt.innerHTML = `
    //   <div class='col-12 col-md-6 col-lg-4 mr-2'>
    // <div class="card" style="width: 18rem;">
    //   <div class="card-body">
    //     <h4 class="card-title">${map.get('title')}</h4>
    //     <p class="card-text">${map.get('description')}</p>
    //     <h5>Price : &#8377; <span>${map.get('price')}</span></h5>
    //     <button class="btn btn-primary" onclick="addToCart(${map.get('id')})">Add To Cart</button>
    //   </div>
    // </div>
    //  `
}



function AddNewProduct() {
    titleV = titleElmt.value
    descrV = descriptionElmt.value
    categoryV = categoryElmt.value
    brandV = brandElmt.value
    priceV = Number(priceElmt.value)
    quantityV = Number(quantityElmt.value)

    newProduct = {
        id: Date.now(),
        title: titleV,
        description: descrV,
        category: categoryV,
        brand: brandV,
        price: priceV,
        quantity: quantityV
    }
    getProd = getFromLocal()
    console.log('getProd', getProd)
    if (getProd == null) {
        saveToLocal(newProduct)
        console.log('newProduct', newProduct);
    }
    else {
        getProd.push(newProduct)
        console.log('after push newProduct', getProd)
        saveToLocal(getProd)
    }
   // renderProducts()

    titleElmt.value = ''
    descriptionElmt.value = ''
    categoryElmt.value = ''
    brandElmt.value = ''
    priceElmt.value = ''
    quantityElmt.value = ''
    // close the modal after succesfully added prodcut 
    window.location.reload();
}

function addToCart(id) {
    const getCArtFromLocal = getCartFromLocal()

    getProd = getFromLocal()

    findIndex1 = getProd.findIndex((p) => p.id == id)
    if (findIndex1 == -1) {
        alert('Cant add to cart')
    }

    newCartItem = getProd[findIndex1]

    // create new object for id,name and price and new property as quantity only 
    // Before add check that item is presnt or not in cart array 
    // if present increase quantity by 1
    // add this object to cart

    getCArtFromLocal.push(newCartItem)
    saveCartToLocal(getCArtFromLocal)
    console.log('getCArtFromLocal', getCArtFromLocal)
    cartLengthElmt.textContent = getCArtFromLocal.length
}




window.addEventListener('DOMContentLoaded', () => {
 //localStorage.removeItem('b81');
    getProd = getFromLocal()

    if (!getProd) {
        saveToLocal(products)
    }
    renderProducts()
    getCart = getCartFromLocal()
    if (!getCart) {
        saveCartToLocal(cart)
    }
    cartLengthElmt.textContent = getCart.length

})





// *******************. localStorage concept. *************
// str = 'Batch81'

// localStorage.setItem('batch', str)
// str2 = localStorage.getItem('batch')
// console.log(str2)

// objBatch = {
//     id:243,
//     name:'Batch81'
// }

// localStorage.setItem('b', JSON.stringify(objBatch))
// newObj = JSON.parse(localStorage.getItem('b'))

// console.log(newObj)
// console.log(typeof(newObj))