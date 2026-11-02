// ===== MENU DATA =====
const menuData = [
  // BREAKFAST
  { id: 1, name: "Eggs Benedict", description: "Poached eggs on English muffins with hollandaise sauce, served with hash browns.", price: 18.90, category: "breakfast", image: "images/sha.jpeg" },
  { id: 2, name: "Avocado Toast", description: "Smashed avocado on sourdough with cherry tomatoes, feta, poached egg & microgreens.", price: 16.50, category: "breakfast", image: "images/toast.jpeg" },
  { id: 3, name: "Pancake Stack", description: "Fluffy buttermilk pancakes with maple syrup, fresh berries and whipped cream.", price: 14.90, category: "breakfast", image: "images/pancake-stack.png" },
  { id: 4, name: "Açaí Bowl", description: "Blended açaí topped with granola, banana, coconut flakes and honey drizzle.", price: 15.90, category: "breakfast", image: "images/acai.jpeg" },
  { id: 5, name: "French Toast", description: "Brioche French toast with caramelised banana, cinnamon butter and maple syrup.", price: 14.50, category: "breakfast", image: "images/french.jpeg" },
  { id: 6, name: "Breakfast Burrito", description: "Scrambled eggs, bacon, cheese, avocado and salsa wrapped in a flour tortilla.", price: 17.90, category: "breakfast", image: "images/breakfast burrito.jpeg" },

  // BRUNCH
  { id: 7, name: "Smoked Salmon Bagel", description: "Toasted bagel with cream cheese, smoked salmon, capers, red onion and dill.", price: 19.90, category: "brunch", image: "images/salmon.jpeg" },
  { id: 8, name: "Shakshuka", description: "Baked eggs in spiced tomato sauce with capsicum, onion and crumbled feta.", price: 18.50, category: "brunch", image: "images/egg florentine.jpeg" },
  { id: 9, name: "Chicken & Waffles", description: "Crispy southern fried chicken on Belgian waffles with maple butter and hot sauce.", price: 22.90, category: "brunch", image: "images/pancake-stack.png" },
  { id: 10, name: "Eggs Florentine", description: "Poached eggs on English muffins with sautéed spinach and hollandaise sauce.", price: 19.50, category: "brunch", image: "images/eggs-benedict.png" },
  { id: 11, name: "Brunch Burger", description: "Beef patty with bacon, fried egg, cheddar, lettuce, tomato and chipotle mayo.", price: 24.90, category: "brunch", image: "images/angus-burger.png" },
  { id: 12, name: "Fruit Platter", description: "Seasonal fresh fruit selection with Greek yoghurt, honey and toasted muesli.", price: 16.90, category: "brunch", image: "images/fruit.jpeg" },

  // LUNCH
  { id: 13, name: "Classic Angus Burger", description: "Premium beef patty with lettuce, tomato, special sauce. Served with fries.", price: 24.90, category: "lunch", image: "images/angus-burger.png" },
  { id: 14, name: "Caesar Salad", description: "Crisp romaine, shaved parmesan, croutons, grilled chicken and Caesar dressing.", price: 14.50, category: "lunch", image: "images/avocado-toast.png" },
  { id: 15, name: "Grilled Chicken Wrap", description: "Chargrilled chicken with mixed greens, avocado, feta and garlic aioli in a wrap.", price: 16.90, category: "lunch", image: "images/chicken wrap.jpeg" },
  { id: 16, name: "Fish & Chips", description: "Beer-battered barramundi with chunky chips, garden salad and tartare sauce.", price: 22.50, category: "lunch", image: "images/fishnchips.jpeg" },
  { id: 17, name: "Poke Bowl", description: "Fresh tuna, avocado, edamame, mango, cucumber and sushi rice with ponzu.", price: 19.90, category: "lunch", image: "images/poke bowl.jpeg" },
  { id: 18, name: "Margherita Pizza", description: "Wood-fired pizza with San Marzano tomato, fresh mozzarella and basil.", price: 18.90, category: "lunch", image: "images/pizza.jpeg" },
  { id: 19, name: "Garlic Bread", description: "Wood-fired bread with rich aroma of garlic.", price: 10.00, category: "lunch", image: "images/water.jpeg" },

  // DINNER
  { id: 19, name: "Ribeye Steak", description: "300g grass-fed ribeye, cooked to your liking with roasted vegetables and jus.", price: 42.90, category: "dinner", image: "images/ribeye-steak.png" },
  { id: 20, name: "Grilled Salmon", description: "Atlantic salmon fillet with asparagus, lemon butter sauce and baby potatoes.", price: 36.50, category: "dinner", image: "images/grilled-salmon.png" },
  { id: 21, name: "Lamb Shank", description: "Slow-braised lamb shank with creamy mashed potato, greens and red wine jus.", price: 38.90, category: "dinner", image: "images/lamb.jpeg" },
  { id: 22, name: "Mushroom Risotto", description: "Creamy arborio rice with wild mushrooms, truffle oil and shaved parmesan.", price: 28.50, category: "dinner", image: "images/mushroom.jpeg" },
  { id: 23, name: "Seafood Pasta", description: "Linguine with king prawns, mussels, calamari in a white wine garlic sauce.", price: 34.90, category: "dinner", image: "images/seafood pasta.jpeg" },
  { id: 24, name: "Duck Confit", description: "Crispy duck leg with lentil ragout, orange glaze and seasonal greens.", price: 39.90, category: "dinner", image: "images/duck.jpeg" },

  // DRINKS
  { id: 25, name: "Fresh Lemonade", description: "House-made lemonade with fresh lemons, mint and a touch of honey.", price: 6.00, category: "drinks", image: "images/fresh-lemonade.jpg" },
  { id: 26, name: "Mango Smoothie", description: "Blended mango, banana, yoghurt and a splash of orange juice.", price: 8.90, category: "drinks", image: "images/mango.jpeg" },
  { id: 27, name: "Iced Coffee", description: "Double espresso over ice with cold milk and a scoop of vanilla ice cream.", price: 7.50, category: "drinks", image: "images/iced late.jpeg" },
  { id: 28, name: "Matcha Latte", description: "Ceremonial grade matcha whisked with steamed oat milk and vanilla.", price: 8.50, category: "drinks", image: "images/matcha.jpeg" },
  { id: 29, name: "Fresh Orange Juice", description: "Freshly squeezed Australian oranges, served chilled with ice.", price: 6.90, category: "drinks", image: "images/lemon.jpeg" },
  { id: 30, name: "Sparkling Water", description: "San Pellegrino sparkling mineral water, 500ml bottle.", price: 4.50, category: "drinks", image: "images/water.jpeg" },

  // SPECIALITIES
  { id: 31, name: "Beer Angus Burger", description: "Premium beef patty with lettuce, tomato, special sauce. Served with fries.", price: 29.90, category: "specialities", image: "images/angus-burger.png", isSpecial: true },
  { id: 32, name: "Sydney Seafood Platter", description: "Oysters, king prawns, lobster tail, mussels and calamari on ice with lemon.", price: 54.90, category: "specialities", image: "images/platter.jpeg" },
  { id: 33, name: "Wagyu Beef Tartare", description: "Hand-cut wagyu with cornichons, capers, egg yolk and toasted sourdough.", price: 38.90, category: "specialities", image: "images/beef.jpeg" },
  { id: 34, name: "Pavlova Dessert", description: "Crisp meringue with whipped cream, fresh passionfruit, berries and kiwi.", price: 18.90, category: "specialities", image: "images/dessert.jpeg" }
];

const categorySubtitles = {
  breakfast: "Start your morning right with our freshly prepared breakfast dishes",
  brunch: "The perfect mid-morning feast — hearty, fresh and delicious",
  lunch: "Satisfying midday meals crafted with the finest ingredients",
  dinner: "Elegant evening dining with premium cuts and fresh seafood",
  drinks: "Refreshing beverages to complement your meal",
  specialities: "Chef's signature creations — our most celebrated dishes"
};

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('sfc_cart') || '[]');
let currentCategory = 'breakfast';
let currentView = 'hero'; // hero | menu | checkout | confirmation

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const heroSection = $('#hero-section');
const menuSection = $('#menu-section');
const checkoutSection = $('#checkout-section');
const confirmationSection = $('#confirmation-section');
const menuGrid = $('#menu-grid');
const menuTitle = $('#menu-title');
const menuSubtitle = $('#menu-subtitle');
const cartBar = $('#cart-bar');
const cartBadge = $('#cart-badge');
const cartBarItems = $('#cart-bar-items');
const cartBarTotal = $('#cart-bar-total');
const checkoutItems = $('#checkout-items');
const orderTotals = $('#order-totals');
const placeOrderTotal = $('#place-order-total');
const toast = $('#toast');
const specialBannerContainer = $('#special-banner-container');

// ===== TABLE NUMBER =====
function getTableNumber() {
  const params = new URLSearchParams(window.location.search);
  return params.get('table') || '14';
}

// ===== NAVIGATION =====
function showView(view) {
  currentView = view;
  heroSection.style.display = view === 'hero' ? '' : 'none';
  menuSection.classList.toggle('active', view === 'menu');
  checkoutSection.classList.toggle('active', view === 'checkout');
  confirmationSection.classList.toggle('active', view === 'confirmation');
  cartBar.classList.toggle('show', view === 'menu' && cart.length > 0);
  if (view === 'checkout') cartBar.classList.remove('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setCategory(cat) {
  currentCategory = cat;
  $$('.nav-categories a').forEach(a => a.classList.toggle('active', a.dataset.category === cat));
  menuTitle.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
  menuSubtitle.textContent = categorySubtitles[cat];
  renderMenu();
}

// ===== RENDER MENU =====
function renderMenu() {
  const items = menuData.filter(item => item.category === currentCategory);
  const special = items.find(i => i.isSpecial);

  // Special banner
  if (special) {
    specialBannerContainer.innerHTML = `
      <div class="special-banner">
        <img src="${special.image}" alt="${special.name}">
        <div class="special-banner-content">
          <div class="special-tag">⭐ Today's Special</div>
          <h3>${special.name}</h3>
          <p>${special.description}</p>
          <button class="special-order-btn" data-id="${special.id}">Order Special — $${special.price.toFixed(2)}</button>
        </div>
      </div>`;
    specialBannerContainer.querySelector('.special-order-btn').addEventListener('click', () => addToCart(special.id));
  } else {
    specialBannerContainer.innerHTML = '';
  }

  // Grid
  menuGrid.innerHTML = items.map(item => `
    <div class="food-card" id="card-${item.id}">
      <div class="food-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="food-card-img" loading="lazy">
      </div>
      <div class="food-card-body">
        <div class="food-card-name">${item.name}</div>
        <div class="food-card-desc">${item.description}</div>
        <div class="food-card-footer">
          <span class="food-card-price">$${item.price.toFixed(2)}</span>
          <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach events
  menuGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
  });
}

// ===== CART LOGIC =====
function addToCart(itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (!item) return;
  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: itemId, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${item.name} added to cart!`);

  // Button feedback
  const btn = menuGrid.querySelector(`.add-to-cart-btn[data-id="${itemId}"]`);
  if (btn) {
    btn.textContent = '✓ Added';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = 'Add to Cart'; btn.classList.remove('added'); }, 1200);
  }
}

function updateQty(itemId, delta) {
  const entry = cart.find(c => c.id === itemId);
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) {
    cart = cart.filter(c => c.id !== itemId);
  }
  saveCart();
  updateCartUI();
  if (currentView === 'checkout') renderCheckout();
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  saveCart();
  updateCartUI();
  if (currentView === 'checkout') renderCheckout();
}

function getCartTotal() {
  return cart.reduce((sum, entry) => {
    const item = menuData.find(i => i.id === entry.id);
    return sum + (item ? item.price * entry.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, entry) => sum + entry.qty, 0);
}

function saveCart() {
  localStorage.setItem('sfc_cart', JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

// ===== UPDATE CART UI =====
function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();

  // Badge
  cartBadge.textContent = count;
  cartBadge.classList.toggle('show', count > 0);

  // Cart bar
  cartBar.classList.toggle('show', currentView === 'menu' && count > 0);
  cartBarTotal.textContent = `$${total.toFixed(2)}`;

  // Cart bar items summary
  const itemSummary = cart.map(entry => {
    const item = menuData.find(i => i.id === entry.id);
    return `${entry.qty}x ${item.name} - $${(item.price * entry.qty).toFixed(2)}`;
  }).join(' · ');
  cartBarItems.textContent = itemSummary;
}

// ===== RENDER CHECKOUT =====
function renderCheckout() {
  $('#table-number').textContent = getTableNumber();

  if (cart.length === 0) {
    checkoutItems.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:24px;">Your cart is empty.</p>';
    orderTotals.innerHTML = '';
    placeOrderTotal.textContent = '$0.00';
    return;
  }

  checkoutItems.innerHTML = cart.map(entry => {
    const item = menuData.find(i => i.id === entry.id);
    return `
      <div class="order-item">
        <div class="order-item-info">
          <div class="order-item-name">${entry.qty}x ${item.name}</div>
          <div class="order-item-desc">${item.description}</div>
          <div class="order-item-qty">
            <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
            <span>${entry.qty}</span>
            <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
            <button class="order-item-remove" data-id="${item.id}">Remove</button>
          </div>
        </div>
        <span class="order-item-price">$${(item.price * entry.qty).toFixed(2)}</span>
      </div>`;
  }).join('');

  const subtotal = getCartTotal();
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  orderTotals.innerHTML = `
    <div class="order-total-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
    <div class="order-total-row"><span>GST (10%)</span><span>$${tax.toFixed(2)}</span></div>
    <div class="order-total-row total"><span>TOTAL</span><span>$${total.toFixed(2)}</span></div>`;

  placeOrderTotal.textContent = `$${total.toFixed(2)}`;

  // Events
  checkoutItems.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta)));
  });
  checkoutItems.querySelectorAll('.order-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

// ===== PLACE ORDER =====
function placeOrder() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }

  const orderId = 'SFC-' + String(Math.floor(1000 + Math.random() * 9000));
  const subtotal = getCartTotal();
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  $('#confirmation-order-id').textContent = `Order #${orderId}`;
  const itemCount = getCartCount();
  $('#est-time').textContent = itemCount <= 3 ? '15-20 minutes' : itemCount <= 6 ? '20-30 minutes' : '30-40 minutes';

  const details = $('#confirmation-details');
  details.innerHTML = `
    <h4>Order #${orderId} — Table ${getTableNumber()}</h4>
    ${cart.map(entry => {
    const item = menuData.find(i => i.id === entry.id);
    return `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border-color);">
        <span>${entry.qty}x ${item.name}</span>
        <span style="font-weight:600;">$${(item.price * entry.qty).toFixed(2)}</span>
      </div>`;
  }).join('')}
    <div style="display:flex;justify-content:space-between;padding:10px 0 0;font-weight:700;font-size:1.1rem;margin-top:8px;border-top:2px solid var(--green-dark);">
      <span>Total (incl. GST)</span><span style="color:var(--green-primary);">$${total.toFixed(2)}</span>
    </div>`;

  clearCart();
  showView('confirmation');
}

// ===== TOAST =====
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===== PAYMENT SELECTION =====
function initPayment() {
  $$('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      $$('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input').checked = true;
    });
  });
}

// ===== EVENT LISTENERS =====
function init() {
  // Browse menu CTA
  $('#browse-menu-btn').addEventListener('click', () => {
    showView('menu');
    setCategory('breakfast');
  });

  // Logo → hero
  $('#nav-logo').addEventListener('click', (e) => { e.preventDefault(); showView('hero'); });

  // Category nav
  $$('.nav-categories a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showView('menu');
      setCategory(link.dataset.category);
      // Close mobile menu
      $('#nav-categories').classList.remove('open');
    });
  });

  // Mobile toggle
  $('#mobile-toggle').addEventListener('click', () => {
    $('#nav-categories').classList.toggle('open');
  });

  // Cart button → checkout
  $('#nav-cart-btn').addEventListener('click', () => {
    if (cart.length === 0) { showToast('Your cart is empty — add some items first!'); return; }
    showView('checkout');
    renderCheckout();
  });

  // Confirm order (from cart bar)
  $('#confirm-order-btn').addEventListener('click', () => {
    showView('checkout');
    renderCheckout();
  });

  // Back to menu
  $('#back-to-menu-btn').addEventListener('click', () => {
    showView('menu');
  });

  // Place order
  $('#place-order-btn').addEventListener('click', placeOrder);

  // New order
  $('#new-order-btn').addEventListener('click', () => {
    showView('hero');
  });

  // Payment
  initPayment();

  // Init UI
  updateCartUI();
  showView('hero');
}

document.addEventListener('DOMContentLoaded', init);
