// StyleHub E-Commerce Shared JavaScript

const CART_KEY = 'stylehub_cart';
const USER_KEY = 'stylehub_user';

// Get Cart from localStorage
function getCart() {
    try {
        const cart = localStorage.getItem(CART_KEY);
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        console.error('Error reading cart', e);
        return [];
    }
}

// Save Cart to localStorage
function saveCart(cart) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        updateCartBadge();
    } catch (e) {
        console.error('Error saving cart', e);
    }
}

// Update Cart Badge Count in Navbar
function updateCartBadge() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const badges = document.querySelectorAll('.cart-badge-count');
    badges.forEach(badge => {
        badge.textContent = totalCount;
        if (totalCount > 0) {
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'inline-block';
        }
    });
}

// Show Toast Notification
function showToast(message, icon = 'fa-check-circle') {
    let toast = document.getElementById('custom-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'custom-toast';
        toast.className = 'custom-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas ${icon} text-success"></i> <span>${message}</span>`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Add Item to Cart
function addToCart(product) {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: Number(product.price),
            image: product.image,
            category: product.category || 'Fashion',
            quantity: 1
        });
    }
    
    saveCart(cart);
    showToast(`"${product.name}" added to cart!`);
}

// Remove Item from Cart
function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    renderCartPage();
    showToast('Item removed from cart', 'fa-info-circle');
}

// Change Quantity (+1 or -1)
function changeQuantity(id, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;
    
    item.quantity = (item.quantity || 1) + delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }
    
    saveCart(cart);
    renderCartPage();
}

// Render Cart Page Content
function renderCartPage() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const emptyCartView = document.getElementById('empty-cart-view');
    const cartFilledView = document.getElementById('cart-filled-view');
    
    if (!cartItemsContainer) return; // Not on cart.html
    
    const cart = getCart();
    
    if (cart.length === 0) {
        if (emptyCartView) emptyCartView.style.display = 'block';
        if (cartFilledView) cartFilledView.style.display = 'none';
        return;
    }
    
    if (emptyCartView) emptyCartView.style.display = 'none';
    if (cartFilledView) cartFilledView.style.display = 'flex';
    
    // Build items HTML
    let subtotal = 0;
    let itemsHtml = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        itemsHtml += `
            <div class="cart-item-card">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://via.placeholder.com/90?text=Product'">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="text-muted small mb-1">${item.category}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeQuantity('${item.id}', -1)" title="Decrease">-</button>
                        <span class="quantity-val">${item.quantity}</span>
                        <button class="quantity-btn" onclick="changeQuantity('${item.id}', 1)" title="Increase">+</button>
                        <span class="text-muted small ml-3">Total: ₹${itemTotal.toLocaleString('en-IN')}</span>
                    </div>
                </div>
                <button class="btn-remove-item" onclick="removeFromCart('${item.id}')" title="Remove Item">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = itemsHtml;
    
    // Calculate Summary
    const discount = subtotal > 1500 ? Math.round(subtotal * 0.1) : 0; // 10% discount over 1500
    const shipping = subtotal > 999 ? 0 : 99;
    const grandTotal = subtotal - discount + shipping;
    
    const subtotalEl = document.getElementById('summary-subtotal');
    const discountEl = document.getElementById('summary-discount');
    const shippingEl = document.getElementById('summary-shipping');
    const totalEl = document.getElementById('summary-total');
    
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (discountEl) discountEl.textContent = `- ₹${discount.toLocaleString('en-IN')}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    if (totalEl) totalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// Checkout action
function proceedToCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const confirmed = confirm('Confirm your order and proceed to payment simulation?');
    if (confirmed) {
        localStorage.removeItem(CART_KEY);
        updateCartBadge();
        renderCartPage();
        alert('🎉 Order Placed Successfully!\n\nThank you for shopping with StyleHub. A confirmation email has been sent.');
        window.location.href = 'index.html';
    }
}

// Auth handlers
function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value.trim();
    if (!email) {
        alert('Please enter your email.');
        return;
    }
    localStorage.setItem(USER_KEY, JSON.stringify({ email: email, name: email.split('@')[0] }));
    $('#signInModal').modal('hide');
    showToast(`Welcome back, ${email.split('@')[0]}!`, 'fa-user-check');
    updateUserNav();
}

function handleSignUp(e) {
    e.preventDefault();
    const name = document.getElementById('signUpName').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    if (!name || !email) {
        alert('Please fill in required fields.');
        return;
    }
    localStorage.setItem(USER_KEY, JSON.stringify({ email: email, name: name }));
    $('#signUpModal').modal('hide');
    showToast(`Account created! Welcome, ${name}!`, 'fa-user-plus');
    updateUserNav();
}

function updateUserNav() {
    try {
        const user = JSON.parse(localStorage.getItem(USER_KEY));
        const authLinks = document.getElementById('nav-auth-links');
        if (user && authLinks) {
            authLinks.innerHTML = `
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" data-toggle="dropdown">
                        <i class="fas fa-user-circle"></i> Hi, ${user.name}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#" onclick="logoutUser()">
                            <i class="fas fa-sign-out-alt mr-2 text-danger"></i> Logout
                        </a>
                    </div>
                </li>
            `;
        }
    } catch(e) {}
}

function logoutUser() {
    localStorage.removeItem(USER_KEY);
    location.reload();
}

// Initialise on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateUserNav();
    renderCartPage();
    
    // Attach Add-to-cart clicks
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                const product = {
                    id: card.dataset.id || Math.random().toString(36).substr(2, 9),
                    name: card.dataset.name || card.querySelector('.product-title').innerText,
                    price: parseFloat(card.dataset.price || '999'),
                    image: card.dataset.image || card.querySelector('img').src,
                    category: card.dataset.category || 'Fashion'
                };
                addToCart(product);
                
                // Visual button feedback
                const origText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> Added!';
                btn.classList.add('added');
                setTimeout(() => {
                    btn.innerHTML = origText;
                    btn.classList.remove('added');
                }, 1200);
            }
        });
    });
});
