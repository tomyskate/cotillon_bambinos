const WA_NUMBER = '5491158404213';
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;
const CART_STORAGE_KEY = 'bambinos-cart';
const REVEAL_SELECTOR = '.reveal:not(.visible)';
const SEARCH_DEBOUNCE_MS = 220;
const REMOVE_ANIMATION_MS = 400;
const QTY_ANIMATION_MS = 300;
const TOAST_MS = 2500;

const doc = document;
const dom = {
  navWa: doc.getElementById('nav-wa'),
  heroWa: doc.getElementById('hero-wa'),
  footerWa: doc.getElementById('footer-wa'),
  waFab: doc.getElementById('wa-fab'),
  cartToggle: doc.getElementById('cart-toggle'),
  cartPanel: doc.getElementById('cart-panel'),
  cartClose: doc.getElementById('cart-close'),
  cartClear: doc.getElementById('cart-clear'),
  cartItems: doc.getElementById('cart-items'),
  cartTotals: doc.getElementById('cart-totals'),
  cartCheckout: doc.getElementById('cart-checkout'),
  cartItemCount: doc.getElementById('cart-item-count'),
  cartBadge: doc.getElementById('cart-badge'),
  toastContainer: doc.getElementById('toast-container'),
  catalogueOutput: doc.getElementById('catalogue-output'),
  sortSelect: doc.getElementById('sort-select'),
  searchInput: doc.getElementById('search-input'),
  searchClear: doc.getElementById('search-clear'),
  searchScrollBtn: doc.getElementById('btn-search-scroll'),
  cursor: doc.getElementById('cursor'),
  cursorFollower: doc.getElementById('cursor-follower')
};

const CAT_META = {
  reposteria: { label: 'Reposteria', emoji: 'Tortas' },
  dulces: { label: 'Dulces & Kiosco', emoji: 'Dulces' },
  mascaras: { label: 'Mascaras', emoji: 'Fiesta' },
  juguetes: { label: 'Juguetes', emoji: 'Kids' },
  cotillon: { label: 'Cotillon', emoji: 'Party' },
  combos: { label: 'Combos', emoji: 'Box' }
};

const TAG_MAP = {
  hot: 'Popular',
  new: 'Nuevo',
  sale: 'Oferta',
  ltd: 'Ultimos'
};

const TAG_CLS = {
  hot: 't-hot',
  new: 't-new',
  sale: 't-sale',
  ltd: 't-ltd'
};

const PRODUCTS = [
  {
    id: 1,
    name: 'Crema Ledevit Chantilly 500g',
    cat: 'reposteria',
    emoji: 'Crema',
    img: 'img/crema-ledevit-chantilly-500gr.png',
    bg: '#FFF0F5',
    price: 5800,
    tag: 'hot',
    desc: 'Ricas, practicas y listas para usar. Ideales para rellenar, cubrir y decorar tortas, postres y facturas.',
    stars: 5,
    reviews: 142,
    variants: [
      { label: 'Chantilly', img: 'img/crema-ledevit-chantilly-500gr.png', price: 5800 },
      { label: 'Frutilla', img: 'img/crema-ledevit-frutilla-500gr.png', price: 5800 },
      { label: 'Vainilla', img: 'img/crema-ledevit-vainilla-500gr.png', price: 5800 },
      { label: 'Chocolate', img: 'img/crema-ledevit-chocolate-500gr.png', price: 6600 }
    ]
  },
  {
    id: 2,
    name: 'Dulce de Leche Repostero El Bosque x 400 gr',
    cat: 'reposteria',
    emoji: 'DDL',
    img: 'img/dulce-de-leche-repostero-ElBosque-400gr-potTransparente.png',
    bg: '#F5F0FF',
    price: 2300,
    tag: 'new',
    desc: 'De textura firme y sabor tradicional. Ideal para rellenos y decoraciones en tortas, alfajores y postres.',
    stars: 5,
    reviews: 98
  },
  {
    id: 3,
    name: 'Dulce de Leche Repostero Vacalin x 400 gr',
    cat: 'reposteria',
    emoji: 'DDL',
    img: 'img/dulce-de-leche-repostero-vacalin-400gr.png',
    bg: '#FFFBF0',
    price: 3600,
    tag: 'new',
    desc: 'De textura firme y sabor intenso. Ideal para rellenar y decorar tortas, alfajores y postres.',
    stars: 4,
    reviews: 76,
    variants: [
      { label: 'Pote Original', img: 'img/dulce-de-leche-repostero-vacalin-400gr.png', price: 3600 },
      { label: 'Transparente', img: 'img/dulce-de-leche-repostero-vacalin-400gr-potTransparente.png', price: 3500 }
    ]
  },
  {
    id: 4,
    name: 'Relleno Bon O Bon 290 gr',
    cat: 'reposteria',
    emoji: 'Relleno',
    img: 'img/relleno-BonOBon-mani-290gr.png',
    bg: '#FFF3E8',
    price: 6300,
    tag: '',
    desc: 'Cremoso y con intenso sabor a mani. Ideal para rellenos y decoraciones en tortas, postres y facturas.',
    stars: 5,
    reviews: 61
  },
  {
    id: 5,
    name: 'Gel de Brillo Ledevit Sabor Neutro 310 gr',
    cat: 'reposteria',
    emoji: 'Gel',
    img: 'img/GelDeBrillo-ledevit-destello-310gr.png',
    bg: '#F0F5FF',
    price: 4800,
    tag: 'hot',
    desc: 'Ideal para dar un acabado brillante y profesional a tus tortas y postres.',
    stars: 5,
    reviews: 203
  },
  {
    id: 6,
    name: 'Micky Mani Mapsa 450 gr',
    cat: 'reposteria',
    emoji: 'Micky',
    img: 'img/micky-mani-mapsa-450gr.png',
    bg: '#F5F0FF',
    price: 7800,
    oldPrice: 9800,
    tag: 'sale',
    desc: 'Crema de mani, frutilla, menta y pistacho, ideal para rellenos, coberturas o postres.',
    stars: 5,
    reviews: 187,
    variants: [
      { label: 'Mani', img: 'img/micky-mani-mapsa-450gr.png', price: 6000 },
      { label: 'Frutilla', img: 'img/micky-frutilla-mapsa-450gr.png', price: 6000 },
      { label: 'Menta', img: 'img/micky-menta-mapsa-450gr.png', price: 6000 },
      { label: 'Pistacho', img: 'img/micky_Pistacho-Mapsa-450gr.png', price: 6000 }
    ]
  },
  {
    id: 7,
    name: 'Pasta Ballina Para Cubrir Tortas',
    cat: 'reposteria',
    emoji: 'Pasta',
    img: 'img/Pasta-ballina-blanco-500gr.png',
    bg: '#F0F5FF',
    price: 2800,
    tag: '',
    desc: 'Faciles de estirar y modelar, ideales para coberturas lisas y decoraciones creativas.',
    stars: 4,
    reviews: 215,
    variants: [
      { label: 'Blanco', img: 'img/Pasta-ballina-blanco-500gr.png', price: 6000 },
      { label: 'Negro', img: 'img/Pasta-ballina-negro-500gr.png', price: 6000 },
      { label: 'Rojo', img: 'img/Pasta-ballina-rojo-500gr.png', price: 6000 },
      { label: 'Rosa', img: 'img/Pasta-ballina-rosa-500gr.png', price: 6000 },
      { label: 'Verde', img: 'img/Pasta-ballina-verde-500gr.png', price: 6000 },
      { label: 'Amarillo', img: 'img/Pasta-ballina-amarillo-500gr.png', price: 6000 }
    ]
  },
  {
    id: 8,
    name: 'Pasta de Goma Ballina 500 gr',
    cat: 'reposteria',
    emoji: 'Goma',
    img: 'img/PastaDeGoma-ballina-500gr.png',
    bg: '#FFF8E0',
    price: 5000,
    tag: 'new',
    desc: 'Ideal para modelado y decoraciones detalladas.',
    stars: 4,
    reviews: 312
  },
  {
    id: 9,
    name: 'Bizcochuelo Ravana Sabor Vainilla 540 gr',
    cat: 'reposteria',
    emoji: 'Bizcochuelo',
    img: 'img/Bizcochuelo-de-vainilla-Ravana.png',
    bg: '#F0FFF5',
    price: 2800,
    tag: 'new',
    desc: 'Esponjoso y de sabor suave. Ideal como base para tortas.',
    stars: 5,
    reviews: 76
  },
  {
    id: 10,
    name: 'Bizcochuelo Emeth Sabor Vainilla 450 gr',
    cat: 'reposteria',
    emoji: 'Bizcochuelo',
    img: 'img/bizcochuelo-emeth-vainilla-450gr.png',
    bg: '#FFF0F5',
    price: 2000,
    tag: '',
    desc: 'Suave y esponjoso. Ideal como base para preparaciones dulces caseras.',
    stars: 4,
    reviews: 55
  },
  {
    id: 11,
    name: 'Brownie Ledevit 470 gr',
    cat: 'reposteria',
    emoji: 'Brownie',
    img: 'img/brownie-ledevit-470g.png',
    bg: '#F5F0FF',
    price: 4600,
    tag: '',
    desc: 'Humedo y con intenso sabor a chocolate.',
    stars: 4,
    reviews: 88
  },
  { id: 12, name: 'Kit Mascaras Superheroes', cat: 'mascaras', emoji: 'Mask', bg: '#F0F5FF', price: 2400, tag: 'hot', desc: 'Set x4 en EVA resistente.', stars: 4, reviews: 110 },
  { id: 13, name: 'Peluca Arco Iris', cat: 'mascaras', emoji: 'Peluca', bg: '#FFF0F5', price: 1900, tag: 'new', desc: 'Multicolor y lavable. Talle unico.', stars: 5, reviews: 67 },
  { id: 14, name: 'Disfraz Bruja Completo', cat: 'mascaras', emoji: 'Bruja', bg: '#F3F0FF', price: 4100, tag: '', desc: 'Vestido, sombrero y escoba. Talles S, M y L.', stars: 4, reviews: 48 },
  { id: 15, name: 'Bolsa Sorpresa Kids', cat: 'juguetes', emoji: 'Kids', bg: '#FFFBF0', price: 1800, tag: 'new', desc: 'Cinco mini juguetes mas golosinas.', stars: 5, reviews: 320 },
  { id: 16, name: 'Peluche Oso Corazon 25 cm', cat: 'juguetes', emoji: 'Peluche', bg: '#FFF0F5', price: 3600, tag: '', desc: 'Supersuave. Ideal para regalo o sorpresa.', stars: 5, reviews: 92 },
  { id: 17, name: 'Set Plastilina 12 colores', cat: 'juguetes', emoji: 'Arte', bg: '#FFF5E0', price: 2100, tag: '', desc: 'Con moldes y herramientas incluidas.', stars: 4, reviews: 143 },
  { id: 18, name: 'Surtido Golosinas 500 g', cat: 'dulces', emoji: 'Mix', bg: '#F0FFF5', price: 2400, tag: 'hot', desc: 'Mix de caramelos, chicles y chocolatines.', stars: 4, reviews: 441 },
  { id: 19, name: 'Chupetines Artesanales x12', cat: 'dulces', emoji: 'Chupetines', bg: '#FFFBF0', price: 3000, tag: 'new', desc: 'Personalizados con nombre y sabores frutales.', stars: 5, reviews: 178 },
  { id: 20, name: 'Chocolates Artesanales x24', cat: 'dulces', emoji: 'Chocolates', bg: '#FFF3E0', price: 5200, tag: 'hot', desc: 'Rellenos y caja decorada.', stars: 5, reviews: 224 },
  { id: 21, name: 'Garrapinadas 200 g', cat: 'dulces', emoji: 'Garrapinadas', bg: '#FFF8E8', price: 1600, tag: '', desc: 'Mani banado en caramelo artesanal.', stars: 4, reviews: 99 },
  { id: 22, name: 'Combo Baby Shower', cat: 'combos', emoji: 'Combo', bg: '#F0FFF9', price: 14500, oldPrice: 18000, tag: 'sale', desc: 'Torta, cupcakes, globos y decoracion completa.', stars: 5, reviews: 134 },
  { id: 23, name: 'Combo Cumple Princesa', cat: 'combos', emoji: 'Combo', bg: '#FFF0F5', price: 22000, tag: 'ltd', desc: 'Torta, cupcakes, cotillon y arco de globos.', stars: 5, reviews: 89 },
  { id: 24, name: 'Combo Dino Party x10', cat: 'combos', emoji: 'Combo', bg: '#F0FFF5', price: 8900, oldPrice: 11000, tag: 'sale', desc: 'Pinata, kit cotillon y bolsas sorpresa.', stars: 4, reviews: 57 }
];

const isTouchDevice = window.matchMedia('(hover:none)').matches || ('ontouchstart' in window);
const productById = new Map(PRODUCTS.map(product => [String(product.id), product]));
const cardState = new Map();
const revealObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}, { threshold: 0.08 });

let activeCat = 'todos';
let searchQuery = '';
let searchTimer = null;
let cart = loadCart();

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  cart = cart.map(normalizeCartItem);
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function normalizeCartItem(product) {
  const variantLabel = product.variantLabel || '';
  const variantId = product.variantId || variantLabel || 'base';
  return {
    id: product.id,
    key: buildCartItemKey({ id: product.id, variantId, variantLabel }),
    name: product.name,
    price: Number(product.price) || 0,
    img: product.img || '',
    emoji: product.emoji || '',
    qty: Math.max(1, Number(product.qty) || 1),
    variantLabel,
    variantId
  };
}

function buildCartItemKey(product) {
  return `${product.id}::${product.variantId || product.variantLabel || 'base'}`;
}

function buildWhatsappLink(message) {
  return WA_BASE + encodeURIComponent(message);
}

function waProductMessage(name, price) {
  return `Hola Bambinos!\nMe gustaria pedir:\n*${name}*\nPrecio: ${price}\n\nEsta disponible?`;
}

function waGeneralMessage() {
  return 'Hola Bambinos! Quiero consultar sobre sus productos.';
}

function initLinks() {
  const href = buildWhatsappLink(waGeneralMessage());
  [dom.navWa, dom.heroWa, dom.footerWa, dom.waFab].forEach(link => {
    if (link) link.href = href;
  });
}

function fmt(value) {
  return '$' + value.toLocaleString('es-AR');
}

function showToast(message) {
  const toast = doc.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  (dom.toastContainer || doc.body).appendChild(toast);
  window.setTimeout(() => toast.remove(), TOAST_MS);
}

function getCartTotals() {
  return cart.reduce((acc, item) => {
    acc.total += item.price * item.qty;
    acc.count += item.qty;
    return acc;
  }, { total: 0, count: 0 });
}

function updateCartBadge() {
  const totals = getCartTotals();
  dom.cartBadge.textContent = totals.count || '0';
  dom.cartBadge.classList.toggle('has-items', totals.count > 0);
}

function renderCartPanel() {
  const totals = getCartTotals();
  dom.cartItemCount.textContent = `${totals.count} producto${totals.count === 1 ? '' : 's'}`;

  if (!totals.count) {
    dom.cartItems.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">Carrito</span>
        <div class="cart-empty-title">Carrito vacio</div>
        <div class="cart-empty-sub">Agrega productos para empezar tu pedido</div>
        <button class="cart-empty-btn" type="button" data-cart-action="browse">Ver productos</button>
      </div>
    `;
    dom.cartTotals.innerHTML = `
      <div class="total-row total-final">
        <span>Total</span>
        <span>${fmt(0)}</span>
      </div>
    `;
    dom.cartCheckout.href = '#';
    return;
  }

  dom.cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" data-cart-key="${item.key}">
      <div class="cart-item-img">${item.img ? `<img src="${item.img}" alt="${escapeHtml(item.name)}">` : `<span>${escapeHtml(item.emoji || 'Item')}</span>`}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${escapeHtml(item.name)}</div>
        ${item.variantLabel ? `<div class="cart-item-variant">Variante: ${escapeHtml(item.variantLabel)}</div>` : ''}
        <div class="cart-item-price">${fmt(item.price)}</div>
      </div>
      <div class="cart-item-qty">
        <button type="button" class="qty-btn" data-action="decrease" data-key="${item.key}">-</button>
        <span class="qty-value">${item.qty}</span>
        <button type="button" class="qty-btn" data-action="increase" data-key="${item.key}">+</button>
      </div>
      <div class="cart-item-subtotal">${fmt(item.price * item.qty)}</div>
      <button class="cart-item-remove" type="button" data-action="remove" data-key="${item.key}">x</button>
    </div>
  `).join('');

  dom.cartTotals.innerHTML = `
    <div class="total-row total-final">
      <span>Total</span>
      <span>${fmt(totals.total)}</span>
    </div>
  `;

  const itemsList = cart.map(item => {
    const variantText = item.variantLabel ? ` (Variante: ${item.variantLabel})` : '';
    return `${item.name}${variantText} x${item.qty} - ${fmt(item.price * item.qty)}`;
  }).join('\n');

  dom.cartCheckout.href = buildWhatsappLink(
    `Hola Bambinos!\n\n*Mi pedido:*\n${itemsList}\n\n*Total: ${fmt(totals.total)}*\n\nSiguen en stock?`
  );
}

function addToCart(product) {
  const itemToAdd = normalizeCartItem(product);
  const existing = cart.find(item => item.key === itemToAdd.key);
  if (existing) {
    existing.qty += itemToAdd.qty;
  } else {
    cart.push(itemToAdd);
  }
  saveCart();
  renderCartPanel();
  dom.cartPanel.classList.add('item-added');
  window.setTimeout(() => dom.cartPanel.classList.remove('item-added'), REMOVE_ANIMATION_MS);
  updateCartBadge();
  showToast('Agregado al carrito');
}

function removeFromCart(key) {
  const itemEl = doc.querySelector(`.cart-item[data-cart-key="${CSS.escape(key)}"]`);
  const commitRemoval = () => {
    cart = cart.filter(item => item.key !== key);
    saveCart();
    renderCartPanel();
    updateCartBadge();
  };

  if (!itemEl) {
    commitRemoval();
    return;
  }

  itemEl.classList.add('item-removing');
  window.setTimeout(commitRemoval, REMOVE_ANIMATION_MS);
}

function updateQuantity(key, qty) {
  const item = cart.find(entry => entry.key === key);
  if (!item) return;
  item.qty = Math.max(1, Number(qty) || 1);
  saveCart();
  renderCartPanel();
  updateCartBadge();
  const itemEl = doc.querySelector(`.cart-item[data-cart-key="${CSS.escape(key)}"]`);
  if (!itemEl) return;
  itemEl.classList.add('qty-updated');
  window.setTimeout(() => itemEl.classList.remove('qty-updated'), QTY_ANIMATION_MS);
}

function clearCart() {
  cart = [];
  saveCart();
  renderCartPanel();
  updateCartBadge();
}

function toggleCart(forceState) {
  const shouldOpen = typeof forceState === 'boolean'
    ? forceState
    : !dom.cartPanel.classList.contains('open');
  dom.cartPanel.classList.toggle('open', shouldOpen);
  dom.cartPanel.setAttribute('aria-hidden', String(!shouldOpen));
  dom.cartToggle.setAttribute('aria-expanded', String(shouldOpen));
  if (shouldOpen) renderCartPanel();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getFilteredProducts() {
  const query = searchQuery.trim().toLowerCase();
  const sort = dom.sortSelect.value;
  const filtered = PRODUCTS.filter(product => {
    const matchesCat = activeCat === 'todos' || product.cat === activeCat;
    const matchesSearch = !query || [product.name, product.cat, product.desc].some(value =>
      value.toLowerCase().includes(query)
    );
    return matchesCat && matchesSearch;
  });

  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sort === 'rating') filtered.sort((a, b) => b.stars - a.stars || b.reviews - a.reviews);

  return filtered;
}

function updateResultPill(products) {
  if (!dom.resultPill) return;
  if (searchQuery) {
    dom.resultPill.textContent = `${products.length} resultado${products.length === 1 ? '' : 's'} para "${searchQuery}"`;
    return;
  }

  if (activeCat !== 'todos') {
    dom.resultPill.textContent = `${products.length} productos - ${CAT_META[activeCat].label}`;
    return;
  }

  dom.resultPill.textContent = `${products.length} productos`;
}

function buildEmptyState() {
  return `
    <div class="products-grid">
      <div class="empty-state">
        <span class="empty-icon">Buscar</span>
        <div class="empty-title">Sin resultados</div>
        <div class="empty-sub">Proba con otro nombre o categoria.</div>
        <button class="empty-btn" type="button" data-clear-all="true">Ver todos los productos</button>
      </div>
    </div>
  `;
}

function buildGroupedCatalogue(products) {
  const byCategory = products.reduce((acc, product) => {
    (acc[product.cat] ||= []).push(product);
    return acc;
  }, {});

  const fragment = doc.createDocumentFragment();

  for (const [cat, meta] of Object.entries(CAT_META)) {
    const items = byCategory[cat];
    if (!items?.length) continue;

    const header = doc.createElement('div');
    header.className = 'cat-section-head reveal';
    header.innerHTML = `
      <div class="cat-section-label">
        <span class="cat-section-emoji">${meta.emoji}</span>
        <span class="cat-section-title">${meta.label}</span>
        <span class="cat-section-count">${items.length} producto${items.length === 1 ? '' : 's'}</span>
      </div>
      <div class="cat-section-line"></div>
    `;

    const grid = doc.createElement('div');
    grid.className = 'products-grid';
    items.forEach((product, index) => grid.appendChild(makeCard(product, index)));

    fragment.append(header, grid);
  }

  return fragment;
}

function makeCard(product, index) {
  const card = doc.createElement('div');
  card.className = 'product-card reveal';
  card.style.transitionDelay = `${index * 0.045}s`;
  card.dataset.productId = String(product.id);

  const initialVariant = product.variants?.[0] || null;
  const state = {
    productId: product.id,
    activeVariantIndex: initialVariant ? 0 : -1
  };
  cardState.set(String(product.id), state);

  const view = getCardView(product, state.activeVariantIndex);
  card.innerHTML = cardMarkup(product, view);
  return card;
}

function getCardView(product, variantIndex) {
  const variant = variantIndex >= 0 ? product.variants?.[variantIndex] || null : null;
  return {
    variantIndex,
    variant,
    usesImages: Boolean(product.img || product.variants?.some(item => item.img)),
    name: variant ? `${product.name} - ${variant.label}` : product.name,
    img: variant?.img || product.img,
    emoji: variant?.emoji || product.emoji,
    bg: variant?.bg || product.bg,
    desc: variant?.desc || product.desc,
    price: variant?.price || product.price,
    variantLabel: variant?.label || ''
  };
}

function cardMarkup(product, view) {
  const tagHtml = product.tag ? `<span class="pc-tag ${TAG_CLS[product.tag]}">${TAG_MAP[product.tag]}</span>` : '';
  const oldPriceHtml = product.oldPrice ? `<span class="pc-old">${fmt(product.oldPrice)}</span>` : '';
  const variantsHtml = product.variants ? `
    <div class="pc-variants">
      ${product.variants.map((variant, idx) => `
        <button
          class="vr-chip${idx === view.variantIndex ? ' active' : ''}"
          type="button"
          data-card-action="variant"
          data-variant-index="${idx}"
        >${escapeHtml(variant.label)}</button>
      `).join('')}
    </div>
  ` : '';

  return `
    <div class="pc-img" style="background:${view.usesImages ? 'transparent' : view.bg}">
      ${view.usesImages
        ? `<img src="${view.img}" alt="${escapeHtml(product.name)}" class="pc-product-img">`
        : `<span class="pc-emoji">${escapeHtml(view.emoji)}</span>`
      }
      <div class="pc-tags">${tagHtml}</div>
      <button class="pc-wish pc-cart-add" type="button" data-card-action="add">+</button>
      <div class="pc-overlay">
        <p class="pc-overlay-desc">${escapeHtml(view.desc)}</p>
      </div>
    </div>
    <div class="pc-body">
      <div class="pc-cat">${escapeHtml(product.cat)}</div>
      <div class="pc-name">${escapeHtml(product.name)}</div>
      ${variantsHtml}
      <div class="pc-foot">
        <div class="pc-prices">${oldPriceHtml}<span class="pc-price">${fmt(view.price)}</span></div>
        <a class="btn-wa-card" href="${buildWhatsappLink(waProductMessage(view.name, fmt(view.price)))}" target="_blank" rel="noopener">
          <span class="wa-icon-sm" style="font-size:14px">WA</span>
          <span class="btn-wa-text">Pedir</span>
        </a>
      </div>
    </div>
  `;
}

function render() {
  const products = getFilteredProducts();
  updateResultPill(products);

  if (!products.length) {
    dom.catalogueOutput.innerHTML = buildEmptyState();
    return;
  }

  cardState.clear();
  dom.catalogueOutput.innerHTML = '';

  if (activeCat !== 'todos' || searchQuery) {
    const grid = doc.createElement('div');
    grid.className = 'products-grid';
    products.forEach((product, index) => grid.appendChild(makeCard(product, index)));
    dom.catalogueOutput.appendChild(grid);
    observeReveal();
    return;
  }

  dom.catalogueOutput.appendChild(buildGroupedCatalogue(products));
  observeReveal();
}

function setFilter(cat, button) {
  activeCat = cat;
  doc.querySelectorAll('.chip').forEach(chip => chip.classList.toggle('active', chip === button));
  render();
}

function clearSearch() {
  dom.searchInput.value = '';
  searchQuery = '';
  dom.searchClear.classList.remove('visible');
  render();
}

function clearAll() {
  clearSearch();
  setFilter('todos', doc.querySelector('.chip[data-cat="todos"]'));
}

function observeReveal() {
  doc.querySelectorAll(REVEAL_SELECTOR).forEach(element => revealObserver.observe(element));
}

function getCardElements(card) {
  return {
    imageWrap: card.querySelector('.pc-img'),
    image: card.querySelector('.pc-product-img'),
    emoji: card.querySelector('.pc-emoji'),
    desc: card.querySelector('.pc-overlay-desc'),
    price: card.querySelector('.pc-price'),
    waLink: card.querySelector('.btn-wa-card')
  };
}

function updateCardVariant(card, variantIndex) {
  const product = productById.get(card.dataset.productId);
  if (!product) return;
  const state = cardState.get(card.dataset.productId);
  if (!state) return;

  state.activeVariantIndex = variantIndex;
  const view = getCardView(product, variantIndex);
  const elements = getCardElements(card);

  card.querySelectorAll('.vr-chip').forEach((button, index) => {
    button.classList.toggle('active', index === variantIndex);
  });

  if (view.usesImages && elements.image) {
    elements.image.src = view.img;
    elements.image.classList.remove('swapping');
    void elements.image.offsetWidth;
    elements.image.classList.add('swapping');
    elements.image.addEventListener('animationend', () => elements.image.classList.remove('swapping'), { once: true });
  }

  if (!view.usesImages && elements.emoji) {
    elements.emoji.textContent = view.emoji;
    elements.emoji.classList.remove('swapping');
    void elements.emoji.offsetWidth;
    elements.emoji.classList.add('swapping');
    elements.emoji.addEventListener('animationend', () => elements.emoji.classList.remove('swapping'), { once: true });
  }

  if (elements.imageWrap) {
    elements.imageWrap.style.background = view.usesImages ? 'transparent' : view.bg;
  }
  if (elements.desc) elements.desc.textContent = view.desc;
  if (elements.price) elements.price.textContent = fmt(view.price);
  if (elements.waLink) elements.waLink.href = buildWhatsappLink(waProductMessage(view.name, fmt(view.price)));
}

function getSelectedProductPayload(card) {
  const product = productById.get(card.dataset.productId);
  const state = cardState.get(card.dataset.productId);
  if (!product || !state) return null;

  const view = getCardView(product, state.activeVariantIndex);
  return {
    id: product.id,
    name: product.name,
    price: view.price,
    img: view.img || '',
    emoji: view.emoji,
    qty: 1,
    variantLabel: view.variantLabel,
    variantId: view.variantLabel || 'base'
  };
}

function closeTouchedOverlays(exceptElement = null) {
  doc.querySelectorAll('.pc-img.img-touched').forEach(element => {
    if (element !== exceptElement) element.classList.remove('img-touched');
  });
}

function initSearch() {
  dom.searchInput.addEventListener('input', event => {
    window.clearTimeout(searchTimer);
    const nextValue = event.currentTarget.value;
    searchTimer = window.setTimeout(() => {
      searchQuery = nextValue.trim();
      dom.searchClear.classList.toggle('visible', searchQuery.length > 0);
      render();
    }, SEARCH_DEBOUNCE_MS);
  });

  dom.searchClear.addEventListener('click', clearSearch);
  dom.searchScrollBtn.addEventListener('click', () => {
    dom.searchInput.focus();
    dom.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function initFilters() {
  doc.querySelectorAll('.chip[data-cat]').forEach(button => {
    button.addEventListener('click', () => setFilter(button.dataset.cat, button));
  });
  dom.sortSelect.addEventListener('change', render);
}

function initCartControls() {
  dom.cartToggle.addEventListener('click', () => toggleCart());
  dom.cartClose.addEventListener('click', () => toggleCart(false));
  dom.cartClear.addEventListener('click', clearCart);

  dom.cartItems.addEventListener('click', event => {
    const browseButton = event.target.closest('[data-cart-action="browse"]');
    if (!browseButton) return;
    toggleCart(false);
    dom.searchInput.focus();
    dom.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function initCatalogueDelegation() {
  dom.catalogueOutput.addEventListener('click', event => {
    const clearAllButton = event.target.closest('[data-clear-all="true"]');
    if (clearAllButton) {
      clearAll();
      return;
    }

    const card = event.target.closest('.product-card');
    if (!card) return;

    const actionButton = event.target.closest('[data-card-action]');
    if (actionButton?.dataset.cardAction === 'variant') {
      updateCardVariant(card, Number(actionButton.dataset.variantIndex));
      return;
    }

    if (actionButton?.dataset.cardAction === 'add') {
      const payload = getSelectedProductPayload(card);
      if (payload) addToCart(payload);
      return;
    }

    const imageWrap = event.target.closest('.pc-img');
    if (!imageWrap || !isTouchDevice) return;
    if (event.target.closest('.pc-wish')) return;

    const willOpen = !imageWrap.classList.contains('img-touched');
    closeTouchedOverlays(imageWrap);
    imageWrap.classList.toggle('img-touched', willOpen);
  });
}

function initDocumentDelegation() {
  doc.addEventListener('click', event => {
    const cartActionButton = event.target.closest('[data-action]');
    if (cartActionButton) {
      const key = cartActionButton.dataset.key;
      if (cartActionButton.dataset.action === 'remove') return void removeFromCart(key);
      const item = cart.find(entry => entry.key === key);
      if (!item) return;
      if (cartActionButton.dataset.action === 'increase') return void updateQuantity(key, item.qty + 1);
      if (cartActionButton.dataset.action === 'decrease') return void updateQuantity(key, item.qty - 1);
    }

    if (!event.target.closest('.pc-img')) {
      closeTouchedOverlays();
    }
  });
}

function initCursor() {
  if (isTouchDevice || !dom.cursor || !dom.cursorFollower) return;

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  doc.addEventListener('mousemove', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dom.cursor.style.left = `${mouseX}px`;
    dom.cursor.style.top = `${mouseY}px`;
  });

  function tick() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    dom.cursorFollower.style.left = `${followerX}px`;
    dom.cursorFollower.style.top = `${followerY}px`;
    window.requestAnimationFrame(tick);
  }

  tick();

  doc.addEventListener('mouseover', event => {
    const hoveringInteractive = Boolean(event.target.closest('a, button, [data-card-action], [data-action]'));
    dom.cursor.classList.toggle('hov', hoveringInteractive);
    dom.cursorFollower.classList.toggle('hov', hoveringInteractive);
  });
}

function init() {
  initLinks();
  initSearch();
  initFilters();
  initCartControls();
  initCatalogueDelegation();
  initDocumentDelegation();
  initCursor();
  renderCartPanel();
  updateCartBadge();
  render();
}

init();

window.toggleCart = toggleCart;
window.clearCart = clearCart;
