/**
 * StyleHub E-Commerce Central Application Logic
 * Comprehensive State Management, Catalog Database, Auth, Cart, Wishlist, Orders & Admin
 */

// Storage Keys
const STORAGE_KEYS = {
    PRODUCTS: 'stylehub_products_v2',
    CART: 'stylehub_cart_v2',
    WISHLIST: 'stylehub_wishlist_v2',
    USER: 'stylehub_user_v2',
    ORDERS: 'stylehub_orders_v2',
    COUPON: 'stylehub_active_coupon_v2'
};

// Initial Catalog Database
const INITIAL_PRODUCTS = [
    // Men's Products
    {
        id: 'm1',
        name: 'Men Premium Casual Crewneck T-Shirt',
        category: 'Men',
        subCategory: 'T-Shirts',
        price: 799,
        originalPrice: 1499,
        discount: 47,
        rating: 4.6,
        reviewsCount: 142,
        image: 'images/men1.jpg',
        thumbnails: ['images/men1.jpg', 'images/men4.jpg', 'images/men5.jpg'],
        description: 'Crafted from 100% bio-washed breathable combed cotton. Tailored slim fit for exceptional daily comfort and effortless urban style.',
        features: ['100% Combed Cotton', 'Bio-Washed Fabric', 'Ribbed Crewneck', 'Pre-shrunk against color fading'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Navy', 'White', 'Olive'],
        inStock: true,
        stockCount: 45,
        isFeatured: true,
        isTrending: true,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 'm2',
        name: 'Men Slim Fit Stretch Denim Jeans',
        category: 'Men',
        subCategory: 'Jeans',
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        rating: 4.4,
        reviewsCount: 98,
        image: 'images/men2.jpg',
        thumbnails: ['images/men2.jpg', 'images/men3.jpg'],
        description: 'Mid-rise authentic denim engineered with 2% elastane for maximum all-day flexibility. Clean dark wash with classic 5-pocket construction.',
        features: ['98% Cotton, 2% Elastane', 'Heavyweight 12oz Denim', 'Reinforced Rivets', 'YKK Brass Zipper'],
        sizes: ['30', '32', '34', '36', '38'],
        colors: ['Dark Indigo', 'Faded Blue', 'Charcoal Black'],
        inStock: true,
        stockCount: 32,
        isFeatured: true,
        isTrending: false,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 'm3',
        name: 'Men Formal Italian Fit Chino Trousers',
        category: 'Men',
        subCategory: 'Trousers',
        price: 1199,
        originalPrice: 2299,
        discount: 48,
        rating: 4.7,
        reviewsCount: 65,
        image: 'images/men3.jpg',
        thumbnails: ['images/men3.jpg', 'images/men2.jpg'],
        description: 'Sophisticated tapered trousers crafted from brushed cotton twill. Perfect balance between executive workwear and smart casual dinners.',
        features: ['Stretch Cotton Twill', 'Wrinkle-Resistant Finish', 'Concealed coin pocket', 'Clean French fly closure'],
        sizes: ['30', '32', '34', '36'],
        colors: ['Khaki', 'Navy', 'Olive Green', 'Jet Black'],
        inStock: true,
        stockCount: 28,
        isFeatured: false,
        isTrending: true,
        isBestSeller: false,
        isNew: true
    },
    {
        id: 'm4',
        name: 'Men Premium Oxford Button-Down Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 1299,
        originalPrice: 2499,
        discount: 48,
        rating: 4.8,
        reviewsCount: 115,
        image: 'images/men4.jpg',
        thumbnails: ['images/men4.jpg', 'images/men1.jpg'],
        description: 'Classic Oxford cotton weaving gives this shirt subtle texture and durability. Structured button-down collar with a sharp modern silhouette.',
        features: ['100% Yarn-Dyed Oxford Cotton', 'Button-Down Collar', 'Single chest pocket', 'Curved hem for untucked wear'],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Light Blue', 'Crisp White', 'Pink'],
        inStock: true,
        stockCount: 50,
        isFeatured: true,
        isTrending: true,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 'm5',
        name: 'Men Ribbed Knit Pullover Sweater',
        category: 'Men',
        subCategory: 'Winterwear',
        price: 1799,
        originalPrice: 3299,
        discount: 45,
        rating: 4.5,
        reviewsCount: 74,
        image: 'images/men5.jpg',
        thumbnails: ['images/men5.jpg', 'images/men6.jpg'],
        description: 'Cozy medium-weight knit sweater designed to keep you warm with refined aesthetics. Ribbed cuffs and hem provide a snug, elegant drape.',
        features: ['Acrylic-Wool Blend', 'Warm thermal heat retention', 'Anti-pilling treatment', 'Machine washable'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['Heather Grey', 'Burgundy', 'Mustard'],
        inStock: true,
        stockCount: 22,
        isFeatured: false,
        isTrending: true,
        isBestSeller: false,
        isNew: true
    },
    {
        id: 'm6',
        name: 'Men Urban Flight Bomber Jacket',
        category: 'Men',
        subCategory: 'Jackets',
        price: 2199,
        originalPrice: 4499,
        discount: 51,
        rating: 4.9,
        reviewsCount: 160,
        image: 'images/men6.jpg',
        thumbnails: ['images/men6.jpg', 'images/men5.jpg'],
        description: 'Water-resistant nylon outer shell paired with lightweight quilted insulated lining. The ultimate outerwear essential for colder seasons.',
        features: ['Water & Wind-Resistant Shell', 'Sleeve utility zip pocket', 'Ribbed collar and hem', 'Dual internal security pockets'],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Matte Black', 'Army Green', 'Midnight Navy'],
        inStock: true,
        stockCount: 18,
        isFeatured: true,
        isTrending: true,
        isBestSeller: true,
        isNew: true
    },

    // Women's Products
    {
        id: 'w1',
        name: 'Women Hand-Embroidered Straight Kurta',
        category: 'Women',
        subCategory: 'Ethnic',
        price: 999,
        originalPrice: 1899,
        discount: 47,
        rating: 4.7,
        reviewsCount: 185,
        image: 'images/women1.jpg',
        thumbnails: ['images/women1.jpg', 'images/women2.jpg'],
        description: 'Graceful straight-cut festive kurta adorned with intricate thread embroidery and delicate mirror work along the neckline and cuffs.',
        features: ['Pure Chanderi Cotton Blend', 'Zari & Thread Handwork', 'Side slit design with lining', 'Calf-length silhouette'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Mustard Gold', 'Teal Green', 'Dusty Rose'],
        inStock: true,
        stockCount: 40,
        isFeatured: true,
        isTrending: true,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 'w2',
        name: 'Festive Silk Blend Suit Set with Dupatta',
        category: 'Women',
        subCategory: 'Ethnic',
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.9,
        reviewsCount: 210,
        image: 'images/women2.jpg',
        thumbnails: ['images/women2.jpg', 'images/women1.jpg', 'images/women6.jpg'],
        description: 'Complete 3-piece designer ethnic ensemble comprising an embellished kurti, matching cigarette pants, and a luminous organza dupatta.',
        features: ['Art Silk with Cotton Lining', 'Organza Jacquard Dupatta', 'Elasticated Pants with Pockets', 'Dry Clean Recommended'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Royal Emerald', 'Deep Wine', 'Coral Peach'],
        inStock: true,
        stockCount: 25,
        isFeatured: true,
        isTrending: true,
        isBestSeller: true,
        isNew: true
    },
    {
        id: 'w3',
        name: 'Structured Vegan Leather Satchel Handbag',
        category: 'Women',
        subCategory: 'Accessories',
        price: 1899,
        originalPrice: 2999,
        discount: 37,
        rating: 4.8,
        reviewsCount: 132,
        image: 'images/women3.jpg',
        thumbnails: ['images/women3.jpg'],
        description: 'Modern minimalist structured tote featuring gold-tone metallic hardware, multi-compartment interior, and a detachable crossbody strap.',
        features: ['Premium Vegan PU Leather', '3 Zip Compartments', 'Adjustable Shoulder Strap', 'Protective Metal Feet Base'],
        sizes: ['Standard (32x24x12 cm)'],
        colors: ['Mocha Brown', 'Classic Black', 'Ivory Cream'],
        inStock: true,
        stockCount: 30,
        isFeatured: true,
        isTrending: true,
        isBestSeller: false,
        isNew: true
    },
    {
        id: 'w4',
        name: 'Pointed Toe Cushioned Ballet Flats',
        category: 'Women',
        subCategory: 'Footwear',
        price: 899,
        originalPrice: 1599,
        discount: 44,
        rating: 4.5,
        reviewsCount: 78,
        image: 'images/women4.jpg',
        thumbnails: ['images/women4.jpg'],
        description: 'Ultra-flexible everyday ballerinas engineered with dual-density memory foam footbed and anti-skid rubber sole for continuous walking comfort.',
        features: ['Memory Foam Cushioning', 'Breathable Microfiber Lining', 'Anti-Slip TPR Sole', 'Pointed Toe Silhouette'],
        sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
        colors: ['Nude Beige', 'Black', 'Metallic Rose'],
        inStock: true,
        stockCount: 35,
        isFeatured: false,
        isTrending: false,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 'w5',
        name: 'Women Active Training Dri-Fit T-Shirt',
        category: 'Women',
        subCategory: 'Western',
        price: 699,
        originalPrice: 1299,
        discount: 46,
        rating: 4.6,
        reviewsCount: 92,
        image: 'images/women5.jpg',
        thumbnails: ['images/women5.jpg'],
        description: 'Sweat-wicking athletic tee built with 4-way active stretch fabric and breathable mesh side panels. Keeps you cool during high-intensity workouts.',
        features: ['Quick-Dry Polyester Spandex', 'Anti-Odor Technology', 'Reflective Safety Logo', 'Chafe-free Flatlock Seams'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lilac Purple', 'Jet Black', 'Teal Blue'],
        inStock: true,
        stockCount: 60,
        isFeatured: false,
        isTrending: true,
        isBestSeller: false,
        isNew: true
    },
    {
        id: 'w6',
        name: 'Royal Bridal Semi-Stitched Designer Lehenga',
        category: 'Women',
        subCategory: 'Ethnic',
        price: 3999,
        originalPrice: 6999,
        discount: 43,
        rating: 4.9,
        reviewsCount: 154,
        image: 'images/women6.jpg',
        thumbnails: ['images/women6.jpg', 'images/women2.jpg'],
        description: 'Opulent wedding lehenga choli embellished with heavy dori embroidery, sequin highlights, and a voluminous 4-meter flared hemline.',
        features: ['Heavy Velvet & Silk Base', 'Can-Can Layer for Structure', 'Semi-stitched Customizable Fit', 'Heavy Embroidered Net Dupatta'],
        sizes: ['Free Size (Semi-Stitched)'],
        colors: ['Royal Maroon', 'Emerald Green', 'Midnight Navy'],
        inStock: true,
        stockCount: 12,
        isFeatured: true,
        isTrending: true,
        isBestSeller: true,
        isNew: false
    },

    // Kids' Products
    {
        id: 'k1',
        name: 'Boys Vibrant Dinosaur Graphic Cotton T-Shirt',
        category: 'Kids',
        subCategory: 'Boys',
        price: 499,
        originalPrice: 899,
        discount: 44,
        rating: 4.6,
        reviewsCount: 88,
        image: 'images/kids1.jpg',
        thumbnails: ['images/kids1.jpg', 'images/kids6.jpg'],
        description: 'Fun and colorful graphic tee crafted with gentle hypoallergenic 100% organic cotton. Super soft on young sensitive skin.',
        features: ['100% Organic Cotton', 'Non-toxic Eco Inks', 'Tagless Neck Label', 'Tear-resistant Double Stitching'],
        sizes: ['2-3 Y', '4-5 Y', '6-7 Y', '8-9 Y', '10-11 Y'],
        colors: ['Sun Yellow', 'Sky Blue', 'Mint Green'],
        inStock: true,
        stockCount: 50,
        isFeatured: true,
        isTrending: false,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 'k2',
        name: 'Girls Floral Birthday Party Princess Frock',
        category: 'Kids',
        subCategory: 'Girls',
        price: 699,
        originalPrice: 1299,
        discount: 46,
        rating: 4.8,
        reviewsCount: 112,
        image: 'images/kids2.jpg',
        thumbnails: ['images/kids2.jpg'],
        description: 'Charming sleeveless fit-and-flare dress with floral jacquard print, cute waist satin ribbon bow, and multi-tier tulle underlay.',
        features: ['Soft Cotton Inner Lining', 'Invisible Back Zipper', 'Includes Matching Hairband', 'Gentle on skin'],
        sizes: ['2-3 Y', '4-5 Y', '6-7 Y', '8-9 Y'],
        colors: ['Blush Pink', 'Lilac', 'Buttercup Yellow'],
        inStock: true,
        stockCount: 38,
        isFeatured: true,
        isTrending: true,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 'k3',
        name: 'Kids Casual Denim Dungarees & Tee Combo',
        category: 'Kids',
        subCategory: 'Sets',
        price: 899,
        originalPrice: 1599,
        discount: 43,
        rating: 4.7,
        reviewsCount: 76,
        image: 'images/kids3.jpg',
        thumbnails: ['images/kids3.jpg', 'images/kids5.jpg'],
        description: 'Adorable 2-piece set containing adjustable strap denim overalls paired with a soft striped cotton inner t-shirt.',
        features: ['Pre-washed Soft Denim', 'Adjustable Metal Buckles', 'Snap crotch buttons for toddlers', 'Multi-pocket front'],
        sizes: ['1-2 Y', '2-3 Y', '4-5 Y', '6-7 Y'],
        colors: ['Medium Blue', 'Light Denim Wash'],
        inStock: true,
        stockCount: 26,
        isFeatured: false,
        isTrending: true,
        isBestSeller: false,
        isNew: true
    },
    {
        id: 'k4',
        name: 'Kids Cozy Cotton Animal Print Pajama Set',
        category: 'Kids',
        subCategory: 'Nightwear',
        price: 599,
        originalPrice: 999,
        discount: 40,
        rating: 4.5,
        reviewsCount: 64,
        image: 'images/kids4.jpg',
        thumbnails: ['images/kids4.jpg'],
        description: 'Super comfy 2-piece pajama sleep set featuring playful cartoon prints. Elasticated waistband ensures undisturbed sweet sleep.',
        features: ['100% Breathable Cotton', 'Soft Elasticated Waist', 'Snug Ankle Cuffs', 'Machine Washable'],
        sizes: ['2-3 Y', '4-5 Y', '6-7 Y', '8-9 Y', '10-12 Y'],
        colors: ['Starlight Navy', 'Panda Grey', 'Cloud White'],
        inStock: true,
        stockCount: 42,
        isFeatured: false,
        isTrending: false,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 'k5',
        name: 'Kids Stretch Elastic Waist Denim Joggers',
        category: 'Kids',
        subCategory: 'Bottomwear',
        price: 549,
        originalPrice: 999,
        discount: 45,
        rating: 4.6,
        reviewsCount: 82,
        image: 'images/kids5.jpg',
        thumbnails: ['images/kids5.jpg', 'images/kids3.jpg'],
        description: 'Tough yet comfortable stretch denim joggers built with an adjustable drawstring waist and ribbed cuffs for energetic playtime.',
        features: ['Cotton-Spandex Stretch Denim', 'Drawstring Waistband', 'Reinforced Knee Stitching', 'Deep Hand Pockets'],
        sizes: ['3-4 Y', '5-6 Y', '7-8 Y', '9-10 Y'],
        colors: ['Dark Wash', 'Stone Wash Blue'],
        inStock: true,
        stockCount: 30,
        isFeatured: true,
        isTrending: true,
        isBestSeller: false,
        isNew: true
    },
    {
        id: 'k6',
        name: 'Girls Tropical Print Summer Top & Shorts',
        category: 'Kids',
        subCategory: 'Sets',
        price: 449,
        originalPrice: 799,
        discount: 43,
        rating: 4.4,
        reviewsCount: 52,
        image: 'images/kids6.jpg',
        thumbnails: ['images/kids6.jpg', 'images/kids2.jpg'],
        description: 'Lightweight breathable rayon 2-piece holiday set with lively palm leaf prints and ruffle hem sleeves for breezy sunny days.',
        features: ['Ultra-Lightweight Viscose Rayon', 'Ruffled Sleeves & Hem', 'Soft Elastic Waist Shorts', 'Fade-Resistant Print'],
        sizes: ['2-3 Y', '4-5 Y', '6-7 Y', '8-9 Y'],
        colors: ['Tropical Coral', 'Turquoise Floral'],
        inStock: true,
        stockCount: 45,
        isFeatured: false,
        isTrending: true,
        isBestSeller: false,
        isNew: true
    }
];

// Available Coupons
const COUPONS = {
    'WELCOME10': { type: 'percent', value: 10, minSpend: 500, description: '10% OFF on all orders' },
    'STYLE20': { type: 'percent', value: 20, minSpend: 1500, description: '20% OFF on orders above ₹1,500' },
    'FLAT300': { type: 'flat', value: 300, minSpend: 1999, description: 'Flat ₹300 OFF on orders above ₹1,999' }
};

// -------------------------------------------------------------
// Database & Storage Operations
// -------------------------------------------------------------

function getProducts() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch (e) {
        console.error('Error loading products from storage', e);
    }
    // Fallback to initial and save
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
}

function saveProducts(products) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
}

function getProductById(id) {
    const products = getProducts();
    return products.find(p => p.id === id) || null;
}

// -------------------------------------------------------------
// Cart Operations
// -------------------------------------------------------------

function getCart() {
    try {
        const cart = localStorage.getItem(STORAGE_KEYS.CART);
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    updateCartBadges();
}

function addToCart(product, quantity = 1, size = null, color = null) {
    let cart = getCart();
    const chosenSize = size || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard');
    const chosenColor = color || (product.colors && product.colors.length > 0 ? product.colors[0] : 'Default');
    const cartItemId = `${product.id}_${chosenSize}_${chosenColor}`;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += Number(quantity);
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            name: product.name,
            price: Number(product.price),
            originalPrice: Number(product.originalPrice || product.price),
            image: product.image,
            category: product.category,
            size: chosenSize,
            color: chosenColor,
            quantity: Number(quantity)
        });
    }

    saveCart(cart);
    showToast(`Added "${product.name}" to Cart!`, 'success');
}

function removeFromCart(cartItemId) {
    let cart = getCart();
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    saveCart(cart);
    showToast('Item removed from cart', 'info');
}

function updateCartQuantity(cartItemId, delta) {
    let cart = getCart();
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(cartItemId);
    } else {
        saveCart(cart);
    }
}

function getActiveCoupon() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.COUPON)) || null;
    } catch (e) {
        return null;
    }
}

function applyCouponCode(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    const coupon = COUPONS[cleanCode];

    if (!coupon) {
        return { success: false, message: 'Invalid coupon code. Try WELCOME10 or STYLE20.' };
    }

    const totals = getCartTotals(false);
    if (totals.subtotal < coupon.minSpend) {
        return { success: false, message: `Minimum cart value of ₹${coupon.minSpend} required for this coupon.` };
    }

    localStorage.setItem(STORAGE_KEYS.COUPON, JSON.stringify({ code: cleanCode, ...coupon }));
    return { success: true, message: `Coupon ${cleanCode} applied successfully!` };
}

function removeCouponCode() {
    localStorage.removeItem(STORAGE_KEYS.COUPON);
    showToast('Coupon removed', 'info');
}

function getCartTotals(includeCoupon = true) {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const originalSubtotal = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
    const productDiscount = originalSubtotal - subtotal;

    let couponDiscount = 0;
    const coupon = includeCoupon ? getActiveCoupon() : null;

    if (coupon && subtotal >= coupon.minSpend) {
        if (coupon.type === 'percent') {
            couponDiscount = Math.round((subtotal * coupon.value) / 100);
        } else if (coupon.type === 'flat') {
            couponDiscount = Math.min(coupon.value, subtotal);
        }
    }

    // Free delivery on orders over ₹999
    const shipping = subtotal === 0 || subtotal > 999 ? 0 : 99;
    const total = Math.max(0, subtotal - couponDiscount + shipping);

    return {
        subtotal,
        originalSubtotal,
        productDiscount,
        couponDiscount,
        coupon,
        shipping,
        total,
        totalItems: cart.reduce((sum, item) => sum + item.quantity, 0)
    };
}

function updateCartBadges() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-badge-count').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'inline-flex' : 'none';
    });
}

// -------------------------------------------------------------
// Wishlist Operations
// -------------------------------------------------------------

function getWishlist() {
    try {
        const list = localStorage.getItem(STORAGE_KEYS.WISHLIST);
        return list ? JSON.parse(list) : [];
    } catch (e) {
        return [];
    }
}

function saveWishlist(list) {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
    updateWishlistBadges();
}

function isInWishlist(productId) {
    const list = getWishlist();
    return list.some(item => item.id === productId);
}

function toggleWishlist(product) {
    let list = getWishlist();
    const index = list.findIndex(item => item.id === product.id);

    if (index > -1) {
        list.splice(index, 1);
        saveWishlist(list);
        showToast(`Removed "${product.name}" from Wishlist`, 'info');
        return false;
    } else {
        list.push({
            id: product.id,
            name: product.name,
            price: Number(product.price),
            originalPrice: Number(product.originalPrice || product.price),
            image: product.image,
            category: product.category,
            rating: product.rating || 4.5,
            reviewsCount: product.reviewsCount || 0
        });
        saveWishlist(list);
        showToast(`Added "${product.name}" to Wishlist!`, 'success');
        return true;
    }
}

function moveWishlistToCart(productId) {
    const product = getProductById(productId);
    if (product) {
        addToCart(product);
        // remove from wishlist
        let list = getWishlist();
        list = list.filter(item => item.id !== productId);
        saveWishlist(list);
    }
}

function updateWishlistBadges() {
    const list = getWishlist();
    const count = list.length;
    document.querySelectorAll('.wishlist-badge-count').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'inline-flex' : 'none';
    });

    // Update heart icons on cards
    document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
        const id = btn.dataset.id;
        if (id) {
            const active = isInWishlist(id);
            btn.classList.toggle('active', active);
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = active ? 'fas fa-heart text-danger' : 'far fa-heart';
            }
        }
    });
}

// -------------------------------------------------------------
// Authentication & User Session
// -------------------------------------------------------------

function getCurrentUser() {
    try {
        const u = localStorage.getItem(STORAGE_KEYS.USER);
        return u ? JSON.parse(u) : null;
    } catch (e) {
        return null;
    }
}

function loginUser(email, password, remember = false) {
    if (!email || !password) return { success: false, message: 'Please provide email and password' };

    const name = email.split('@')[0];
    const user = {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email: email,
        phone: '+91 98765 43210',
        joinedDate: new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }),
        addresses: [
            { id: 'addr_1', type: 'Home', line1: 'Flat 402, Skyline Towers', city: 'Ernakulam', state: 'Kerala', pin: '682001', isDefault: true }
        ]
    };

    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    updateNavbarAuth();
    showToast(`Welcome back, ${user.name}!`, 'success');
    return { success: true, user };
}

function registerUser(name, email, password) {
    if (!name || !email || !password) return { success: false, message: 'All fields are required.' };

    const user = {
        name: name,
        email: email,
        phone: '',
        joinedDate: new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }),
        addresses: []
    };

    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    updateNavbarAuth();
    showToast(`Account created successfully! Welcome, ${name}.`, 'success');
    return { success: true, user };
}

function logoutUser() {
    localStorage.removeItem(STORAGE_KEYS.USER);
    showToast('Logged out successfully', 'info');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 600);
}

function updateNavbarAuth() {
    const user = getCurrentUser();
    const container = document.getElementById('nav-user-actions');
    if (!container) return;

    if (user) {
        container.innerHTML = `
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white d-flex align-items-center" href="#" id="userMenuDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="user-avatar-circle mr-2">${user.name.charAt(0).toUpperCase()}</div>
                    <span class="d-none d-lg-inline">${user.name}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow-lg border-0 py-2" aria-labelledby="userMenuDropdown">
                    <div class="px-3 py-2 border-bottom mb-1">
                        <p class="font-weight-bold mb-0 text-dark">${user.name}</p>
                        <small class="text-muted">${user.email}</small>
                    </div>
                    <a class="dropdown-item py-2" href="dashboard.html"><i class="fas fa-user-circle mr-2 text-primary"></i> My Account</a>
                    <a class="dropdown-item py-2" href="dashboard.html#orders"><i class="fas fa-box-open mr-2 text-info"></i> My Orders</a>
                    <a class="dropdown-item py-2" href="wishlist.html"><i class="fas fa-heart mr-2 text-danger"></i> Wishlist</a>
                    <a class="dropdown-item py-2" href="order-tracking.html"><i class="fas fa-shipping-fast mr-2 text-warning"></i> Track Order</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item py-2" href="admin.html"><i class="fas fa-sliders-h mr-2 text-secondary"></i> Admin Panel</a>
                    <a class="dropdown-item py-2 text-danger" href="#" onclick="logoutUser()"><i class="fas fa-sign-out-alt mr-2"></i> Logout</a>
                </div>
            </li>
        `;
    } else {
        container.innerHTML = `
            <li class="nav-item">
                <a class="nav-link text-white font-weight-500" href="auth.html">
                    <i class="fas fa-user mr-1"></i> Sign In
                </a>
            </li>
        `;
    }
}

// -------------------------------------------------------------
// Orders Management
// -------------------------------------------------------------

function getOrders() {
    try {
        const orders = localStorage.getItem(STORAGE_KEYS.ORDERS);
        return orders ? JSON.parse(orders) : getSampleOrders();
    } catch (e) {
        return getSampleOrders();
    }
}

function getSampleOrders() {
    const samples = [
        {
            id: 'SH-84920',
            date: '28 Sep 2026',
            status: 'Delivered',
            total: 2298,
            paymentMethod: 'UPI (Google Pay)',
            deliveryDate: '30 Sep 2026',
            items: [
                { id: 'm1', name: 'Men Premium Casual Crewneck T-Shirt', price: 799, quantity: 1, size: 'L', color: 'Navy', image: 'images/men1.jpg' },
                { id: 'm2', name: 'Men Slim Fit Stretch Denim Jeans', price: 1499, quantity: 1, size: '32', color: 'Dark Indigo', image: 'images/men2.jpg' }
            ],
            shippingAddress: { name: 'Shabna M', address: 'Skyline Heights, Marine Drive', city: 'Ernakulam', state: 'Kerala', pin: '682031' }
        },
        {
            id: 'SH-84921',
            date: '30 Sep 2026',
            status: 'Processing',
            total: 2499,
            paymentMethod: 'Credit Card',
            deliveryDate: '03 Oct 2026',
            items: [
                { id: 'w2', name: 'Festive Silk Blend Suit Set with Dupatta', price: 2499, quantity: 1, size: 'M', color: 'Royal Emerald', image: 'images/women2.jpg' }
            ],
            shippingAddress: { name: 'Shabna M', address: 'Skyline Heights, Marine Drive', city: 'Ernakulam', state: 'Kerala', pin: '682031' }
        }
    ];
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(samples));
    return samples;
}

function placeOrder(customerDetails, paymentMethod) {
    const cart = getCart();
    if (cart.length === 0) return { success: false, message: 'Your cart is empty' };

    const totals = getCartTotals();
    const orderId = 'SH-' + Math.floor(10000 + Math.random() * 90000);
    const estDate = new Date();
    estDate.setDate(estDate.getDate() + 3);

    const newOrder = {
        id: orderId,
        date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        status: 'Processing',
        total: totals.total,
        subtotal: totals.subtotal,
        discount: totals.couponDiscount,
        shipping: totals.shipping,
        paymentMethod: paymentMethod || 'Cash On Delivery',
        deliveryDate: estDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        items: [...cart],
        shippingAddress: customerDetails
    };

    const orders = getOrders();
    orders.unshift(newOrder);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));

    // Clear cart and coupon
    localStorage.removeItem(STORAGE_KEYS.CART);
    localStorage.removeItem(STORAGE_KEYS.COUPON);
    updateCartBadges();

    return { success: true, order: newOrder };
}

function getOrderById(id) {
    const orders = getOrders();
    return orders.find(o => o.id.toLowerCase() === id.trim().toLowerCase()) || null;
}

// -------------------------------------------------------------
// UI Utilities & Shared Components
// -------------------------------------------------------------

function showToast(message, type = 'success') {
    let container = document.getElementById('toast-notification-hub');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-notification-hub';
        container.className = 'toast-hub';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `custom-toast-pill toast-${type} animate-slide-up`;
    
    let iconClass = 'fa-check-circle text-success';
    if (type === 'error') iconClass = 'fa-exclamation-circle text-danger';
    if (type === 'info') iconClass = 'fa-info-circle text-info';

    toast.innerHTML = `
        <i class="fas ${iconClass} toast-icon"></i>
        <span class="toast-msg">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-fadeout');
        setTimeout(() => toast.remove(), 400);
    }, 3200);
}

function renderProductCard(product) {
    const discount = product.discount || Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const inWish = isInWishlist(product.id);

    return `
        <div class="col-xl-3 col-lg-4 col-md-6 col-6 mb-4">
            <div class="modern-product-card h-100" data-id="${product.id}">
                <div class="card-media-wrapper">
                    ${discount > 0 ? `<span class="badge-discount-chip">${discount}% OFF</span>` : ''}
                    ${product.isNew ? `<span class="badge-new-chip">NEW</span>` : ''}
                    <button class="btn-wishlist-toggle ${inWish ? 'active' : ''}" data-id="${product.id}" onclick="handleWishlistClick('${product.id}', this)" title="Add to Wishlist">
                        <i class="${inWish ? 'fas fa-heart text-danger' : 'far fa-heart'}"></i>
                    </button>
                    <a href="product-detail.html?id=${product.id}" class="product-media-link">
                        <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy" onerror="this.src='images/banner1.jpg'">
                    </a>
                    <button class="btn-quick-view" onclick="openQuickView('${product.id}')">
                        <i class="fas fa-eye mr-1"></i> Quick View
                    </button>
                </div>
                <div class="card-content-area">
                    <div class="product-meta-row">
                        <span class="product-subcat">${product.category} • ${product.subCategory || 'Fashion'}</span>
                        <div class="star-rating-pill">
                            <i class="fas fa-star text-warning"></i>
                            <span>${product.rating || 4.5}</span>
                            <span class="text-muted small">(${product.reviewsCount || 10})</span>
                        </div>
                    </div>
                    <h6 class="product-headline">
                        <a href="product-detail.html?id=${product.id}" title="${product.name}">${product.name}</a>
                    </h6>
                    <div class="product-price-row">
                        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                        ${product.originalPrice > product.price ? `<span class="strikethrough-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    </div>
                    <div class="card-action-buttons">
                        <button class="btn-add-cart-action" onclick="handleCardAddToCart('${product.id}')">
                            <i class="fas fa-shopping-bag mr-1"></i> Add to Cart
                        </button>
                        <button class="btn-buy-now-action" onclick="handleCardBuyNow('${product.id}')">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleWishlistClick(productId, btn) {
    const product = getProductById(productId);
    if (!product) return;
    const active = toggleWishlist(product);
    btn.classList.toggle('active', active);
    const icon = btn.querySelector('i');
    if (icon) {
        icon.className = active ? 'fas fa-heart text-danger' : 'far fa-heart';
    }
}

function handleCardAddToCart(productId) {
    const product = getProductById(productId);
    if (product) {
        addToCart(product);
    }
}

function handleCardBuyNow(productId) {
    const product = getProductById(productId);
    if (product) {
        addToCart(product);
        window.location.href = 'checkout.html';
    }
}

function openQuickView(productId) {
    const product = getProductById(productId);
    if (!product) return;

    let modal = document.getElementById('quickViewModal');
    if (!modal) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="modal fade" id="quickViewModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content border-0 shadow-2xl rounded-xl overflow-hidden" id="quickViewModalContent">
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(div);
        modal = document.getElementById('quickViewModal');
    }

    const modalContent = document.getElementById('quickViewModalContent');
    const discount = product.discount || Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    modalContent.innerHTML = `
        <div class="modal-body p-0">
            <button type="button" class="close quick-view-close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="row no-gutters">
                <div class="col-md-6 bg-light d-flex align-items-center justify-content-center p-3">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-lg quick-view-img" style="max-height: 400px; object-fit: cover;">
                </div>
                <div class="col-md-6 p-4 d-flex flex-column justify-content-between">
                    <div>
                        <span class="badge badge-light text-primary font-weight-bold text-uppercase mb-2">${product.category} • ${product.subCategory}</span>
                        <h4 class="font-weight-bold mb-2 text-slate-900">${product.name}</h4>
                        <div class="d-flex align-items-center mb-3">
                            <div class="text-warning mr-2">
                                <i class="fas fa-star"></i>
                                <span class="font-weight-bold ml-1">${product.rating}</span>
                            </div>
                            <span class="text-muted small">(${product.reviewsCount} customer reviews)</span>
                        </div>
                        <div class="d-flex align-items-baseline gap-2 mb-3">
                            <span class="h3 font-weight-bold text-primary mb-0 mr-2">₹${product.price.toLocaleString('en-IN')}</span>
                            ${product.originalPrice > product.price ? `<span class="text-muted text-decoration-line-through h5 mb-0 mr-2">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                            <span class="badge badge-danger font-weight-bold">${discount}% OFF</span>
                        </div>
                        <p class="text-muted small mb-4">${product.description}</p>
                        
                        ${product.sizes && product.sizes.length > 0 ? `
                            <div class="mb-3">
                                <label class="font-weight-600 text-dark small mb-1">Select Size:</label>
                                <div class="d-flex flex-wrap gap-2 size-pill-group" id="qv-size-group">
                                    ${product.sizes.map((s, idx) => `
                                        <button type="button" class="btn btn-outline-secondary btn-sm size-pill ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewPill(this)">${s}</button>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="pt-3 border-top">
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary flex-grow-1 font-weight-600 py-2 shadow-sm" onclick="handleQuickViewAdd('${product.id}')">
                                <i class="fas fa-shopping-bag mr-1"></i> Add to Cart
                            </button>
                            <a href="product-detail.html?id=${product.id}" class="btn btn-outline-dark px-3 py-2 font-weight-600">
                                Full Details <i class="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#quickViewModal').modal('show');
}

function selectQuickViewPill(btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.size-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function handleQuickViewAdd(productId) {
    const product = getProductById(productId);
    if (!product) return;
    const activeSizeBtn = document.querySelector('#qv-size-group .size-pill.active');
    const size = activeSizeBtn ? activeSizeBtn.innerText.trim() : null;
    addToCart(product, 1, size);
    $('#quickViewModal').modal('hide');
}

// -------------------------------------------------------------
// Search Engine & Live Suggestions
// -------------------------------------------------------------

function setupGlobalSearch() {
    const inputs = document.querySelectorAll('.global-search-input');
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            const resultsBox = document.getElementById('search-dropdown-results');
            if (!resultsBox) return;

            if (query.length < 2) {
                resultsBox.style.display = 'none';
                return;
            }

            const products = getProducts();
            const matches = products.filter(p => 
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query) ||
                (p.subCategory && p.subCategory.toLowerCase().includes(query))
            ).slice(0, 5);

            if (matches.length === 0) {
                resultsBox.innerHTML = `
                    <div class="p-3 text-center text-muted small">
                        <i class="fas fa-search mb-1"></i><br>No products found for "${query}"
                    </div>
                `;
            } else {
                resultsBox.innerHTML = matches.map(p => `
                    <a href="product-detail.html?id=${p.id}" class="search-result-item d-flex align-items-center p-2 text-decoration-none">
                        <img src="${p.image}" alt="${p.name}" class="search-thumb mr-3">
                        <div class="flex-grow-1 overflow-hidden">
                            <div class="search-item-title text-truncate font-weight-600 text-dark small">${p.name}</div>
                            <span class="text-primary font-weight-bold small">₹${p.price.toLocaleString('en-IN')}</span>
                            <span class="badge badge-light text-muted ml-2">${p.category}</span>
                        </div>
                    </a>
                `).join('') + `
                    <div class="p-2 border-top text-center bg-light">
                        <a href="shop.html?q=${encodeURIComponent(query)}" class="small font-weight-bold text-primary">View all results <i class="fas fa-arrow-right ml-1"></i></a>
                    </div>
                `;
            }
            resultsBox.style.display = 'block';
        });

        // Close on blur / click outside
        document.addEventListener('click', (e) => {
            const resultsBox = document.getElementById('search-dropdown-results');
            if (resultsBox && !e.target.closest('.search-container-box')) {
                resultsBox.style.display = 'none';
            }
        });
    });
}

// -------------------------------------------------------------
// Live Countdown Timer (Deal of the Day)
// -------------------------------------------------------------

function startDealCountdown(elementId, hours = 12) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let targetTime = localStorage.getItem('stylehub_deal_target');
    if (!targetTime || new Date(targetTime).getTime() <= Date.now()) {
        targetTime = new Date(Date.now() + hours * 3600 * 1000).toISOString();
        localStorage.setItem('stylehub_deal_target', targetTime);
    }

    const timer = setInterval(() => {
        const remaining = new Date(targetTime).getTime() - Date.now();
        if (remaining <= 0) {
            clearInterval(timer);
            localStorage.removeItem('stylehub_deal_target');
            startDealCountdown(elementId, hours);
            return;
        }

        const h = Math.floor(remaining / (1000 * 60 * 60));
        const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((remaining % (1000 * 60)) / 1000);

        el.innerHTML = `
            <div class="timer-unit"><span class="timer-num">${String(h).padStart(2, '0')}</span><span class="timer-lbl">Hours</span></div>
            <span class="timer-colon">:</span>
            <div class="timer-unit"><span class="timer-num">${String(m).padStart(2, '0')}</span><span class="timer-lbl">Mins</span></div>
            <span class="timer-colon">:</span>
            <div class="timer-unit"><span class="timer-num">${String(s).padStart(2, '0')}</span><span class="timer-lbl">Secs</span></div>
        `;
    }, 1000);
}

// -------------------------------------------------------------
// DOM Initialization
// -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Ensure catalog is populated
    getProducts();
    updateCartBadges();
    updateWishlistBadges();
    updateNavbarAuth();
    setupGlobalSearch();

    // Initialize deal timer if element exists
    startDealCountdown('deal-timer-display', 14);
});
