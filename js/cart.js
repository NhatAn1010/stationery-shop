function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function addToCart(product, quantity = 1) {
    let cart = getCart();
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
        cart[index].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image || "../img/no-image.png",
            quantity: quantity
        });
    }
    saveCart(cart);
}


function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

function updateQuantity(productId, quantity) {
    let cart = getCart();
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity = quantity;
        saveCart(cart);
        renderCart();
    }
}

// expose ra window
window.addToCart = addToCart;
window.getCart = getCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;