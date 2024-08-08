function addToCart(item) {
    let cart = []; // Always start with an empty cart
    item.quantity = 1; // Set quantity to 1 for the newly added item
    cart.push(item); // Add the item to the cart

    localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart to localStorage
    window.location.href = 'cart.html'; // Redirect to the cart page
}


fetch('furniture.json')
    .then(response => response.json())
    .then(furniture => {
        const container = document.getElementById('furniture-container');

        furniture.forEach(item => {
            const furnitureItem = document.createElement('div');
            furnitureItem.className = 'card';
            furnitureItem.innerHTML = `
                <div style="margin-bottom: 10px;">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">$${item.price}</p>
                        <button class="btn btn-primary add-to-cart-btn">ADD TO CART</button>
                    </div>
                </div>
            `;

            // Get the "Add to Cart" button and attach the event listener to it
            const addToCartBtn = furnitureItem.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the click event from propagating to the card
                addToCart(item); // Add item to cart when button is clicked
            });

            container.appendChild(furnitureItem);
        });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

   