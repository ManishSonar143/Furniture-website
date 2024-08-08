function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity; // Calculate total based on quantity
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

window.onload = loadCart; // Load cart when the page loads
