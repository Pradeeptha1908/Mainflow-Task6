let products = [];
let buyers = [];

// Add product
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let productName = document.getElementById('product-name').value;
    let productPrice = document.getElementById('product-price').value;
    
    const product = {
        name: productName,
        price: productPrice
    };
    
    products.push(product);
    displayProducts();
    document.getElementById('product-form').reset();
});

// Add buyer
document.getElementById('buyer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let buyerName = document.getElementById('buyer-name').value;
    let buyerContact = document.getElementById('buyer-contact').value;
    
    const buyer = {
        name: buyerName,
        contact: buyerContact
    };
    
    buyers.push(buyer);
    displayBuyers();
    document.getElementById('buyer-form').reset();
});

// Display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(function(product, index) {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} - $${product.price}
            <button class="update-btn" onclick="updateProduct(${index})">Update</button>
            <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>`;
        productList.appendChild(li);
    });
}

// Display buyers
function displayBuyers() {
    const buyerList = document.getElementById('buyer-list');
    buyerList.innerHTML = '';
    buyers.forEach(function(buyer, index) {
        const li = document.createElement('li');
        li.innerHTML = `${buyer.name} - ${buyer.contact}
            <button class="update-btn" onclick="updateBuyer(${index})">Update</button>
            <button class="delete-btn" onclick="deleteBuyer(${index})">Delete</button>`;
        buyerList.appendChild(li);
    });
}

// Update product
function updateProduct(index) {
    const newName = prompt("Enter new product name:", products[index].name);
    const newPrice = prompt("Enter new product price:", products[index].price);

    if (newName !== null && newPrice !== null) {
        products[index].name = newName;
        products[index].price = newPrice;
        displayProducts();
    }
}

// Update buyer
function updateBuyer(index) {
    const newName = prompt("Enter new buyer name:", buyers[index].name);
    const newContact = prompt("Enter new buyer contact:", buyers[index].contact);

    if (newName !== null && newContact !== null) {
        buyers[index].name = newName;
        buyers[index].contact = newContact;
        displayBuyers();
    }
}

// Delete product
function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

// Delete buyer
function deleteBuyer(index) {
    buyers.splice(index, 1);
    displayBuyers();
}

// Search function
function searchItems() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    const filteredBuyers = buyers.filter(buyer => buyer.name.toLowerCase().includes(searchInput));
    
    if (filteredProducts.length > 0) {
        searchResults.innerHTML += '<strong>Products:</strong><ul>';
        filteredProducts.forEach(function(product) {
            searchResults.innerHTML += `<li>${product.name} - $${product.price}</li>`;
        });
        searchResults.innerHTML += '</ul>';
    }
    
    if (filteredBuyers.length > 0) {
        searchResults.innerHTML += '<strong>Buyers:</strong><ul>';
        filteredBuyers.forEach(function(buyer) {
            searchResults.innerHTML += `<li>${buyer.name} - ${buyer.contact}</li>`;
        });
        searchResults.innerHTML += '</ul>';
    }
}
