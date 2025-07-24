let cart = [];

function addToCart(service, price) {
    // Add service to cart
    cart.push({ service, price });
    document.getElementById('cartCount').textContent = cart.length;
}

function showCart() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div>
                <p><strong>${item.service}</strong> - $${item.price}/hour</p>
            </div>
        `;
    });
}

function checkout() {
    if (cart.length > 0) {
        document.getElementById('cartSection').style.display = 'none';
        document.getElementById('bookingSection').style.display = 'block';
    }
}

document.getElementById('cartLink').addEventListener('click', () => {
    showCart();
    document.getElementById('cartSection').style.display = 'block';
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('customerName').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    alert(`Booking Confirmed! \nName: ${name}\nAddress: ${address}\nPayment Method: ${paymentMethod}`);
    cart = []; // Clear cart after booking
    document.getElementById('cartCount').textContent = cart.length;
    document.getElementById('bookingSection').style.display = 'none';
});