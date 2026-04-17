// ======================================================
// CONFIGURACIÓN — cambiá solo este número
// Formato: 549 + código de área + número (sin espacios)
// Ejemplo Argentina Buenos Aires: 5491155667788
// ======================================================
const WA_NUMBER = '5491158404213';

// ===== WhatsApp helpers =====
const WA_BASE = 'https://wa.me/' + WA_NUMBER + '?text=';
function waProduct(name, price){
  const txt = `Hola Bambinos! 🎉\nMe gustaría pedir:\n*${name}*\nPrecio: ${price}\n\n¿Está disponible?`;
  return WA_BASE + encodeURIComponent(txt);
}
function waGeneral(){
  return WA_BASE + encodeURIComponent('¡Hola Bambinos! 🎈 Quiero consultar sobre sus productos.');
}
function initLinks(){
  const g = waGeneral();
  ['nav-wa','hero-wa','footer-wa','wa-fab'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.href = g;
  });
}

// ===== PRODUCTS DATA =====
// Para agregar productos: copiar un objeto y modificar los valores.
// Campo 'cat': reposteria | dulces | mascaras | juguetes | cotillon | combos
// Campo 'tag': hot | new | sale | ltd | '' (vacío = sin etiqueta)
const PRODUCTS = [
  {id:1,  name:'Crema Ledevit Chantilly 500g', cat:'reposteria', emoji:'🍦', img: 'img/crema-ledevit-chantilly-500gr.png', bg:'#FFF0F5', price:5800, tag:'hot', desc:'ricas, prácticas y listas para usar. Ideales para rellenar, cubrir y decorar tortas, postres y facturas con excelente sabor y textura.', stars:5, reviews:142,
    variants: [
  { label: 'Chantilly', img: 'img/crema-ledevit-chantilly-500gr.png', price: 5800 },
  { label: 'Frutilla',  img: 'img/crema-ledevit-frutilla-500gr.png',  price: 5800 },
  { label: 'Vainilla',  img: 'img/crema-ledevit-vainilla-500gr.png',  price: 5800 },
  { label: 'Chocolate', img: 'img/crema-ledevit-chocolate-500gr.png', price: 6600 },
]
  },
  {id:2, name: 'Dulce de Leche Repostero El Bosque x 400 gr', cat: 'reposteria', emoji: '🧁', img: 'img/dulce-de-leche-repostero-ElBosque-400gr-potTransparente.png', bg: '#F5F0FF', price: 2300, tag: 'new', desc: 'De textura firme y sabor tradicional. Ideal para rellenos y decoraciones en tortas, alfajores y postres.', stars: 5, reviews: 98,
  // ─── VARIANTES ──────────────────────────────────────────────────
  // Cada variante puede tener: label (obligatorio), emoji, bg, desc, price, color
  // Si omitís un campo, el sistema usa el valor base del producto.
},
  {id:3,  name:'Dulce de Leche Repostero Vacalin x 400 gr', cat:'reposteria', emoji:'🍪', img: 'img/dulce-de-leche-repostero-vacalin-400gr.png', bg:'#FFFBF0', price:3600, tag:'new', desc:'De textura firme y sabor intenso. Ideal para rellenar y decorar tortas, alfajores y postres.', stars:4, reviews:76,
    variants: [
      { label: 'Pote Original', img: 'img/dulce-de-leche-repostero-vacalin-400gr.png', price: 3600 },
      { label: 'Transparente', img: 'img/dulce-de-leche-repostero-vacalin-400gr-potTransparente.png', price: 3500 },
    ]
  },
  {id:4,  name:'Relleno Bon O bon 290 gr',  cat:'reposteria', emoji:'🍫', img: 'img/relleno-BonOBon-mani-290gr.png', bg:'#FFF3E8', price:6300, tag:'',     desc:'Cremoso y con intenso sabor a maní. Ideal para rellenos y decoraciones en tortas, postres y facturas.', stars:5, reviews:61},
  {id:5,  name:'Gel De Brillo Ledevit Sabor Neutro 310 gr', cat:'reposteria', emoji:'🦄', img: 'img/GelDeBrillo-ledevit-destello-310gr.png', bg:'#F0F5FF', price:4800, tag:'hot',  desc:'Ideal para dar un acabado brillante y profesional a tus tortas y postres. Su textura ligera facilita la aplicación y resalta frutas y decoraciones sin alterar el sabor. Perfecto para lograr presentaciones más atractivas y prolijas.', stars:5, reviews:203},
  {id:6,  name:'Micky Mani Mapsa 450 gr', cat:'reposteria', emoji:'🎊', img: 'img/micky-mani-mapsa-450gr.png', bg:'#F5F0FF', price:7800, oldPrice:9800, tag:'sale', desc:'Crema de maní, frutilla, menta y pistacho suave y sabrosa, ideal para rellenos, coberturas o disfrutar sola. Su textura cremosa y sabor intenso la hacen perfecta para postres, tortas y preparaciones dulces.', stars:5, reviews:187,
    variants: [
      { label: 'Mani', img: 'img/micky-mani-mapsa-450gr.png', price: 6000 },
      { label: 'Frutilla', img: 'img/micky-frutilla-mapsa-450gr.png', price: 6000 },
      { label: 'Menta', img: 'img/micky-menta-mapsa-450gr.png', price: 6000 },
      { label: 'Pistacho', img: 'img/micky_Pistacho-Mapsa-450gr.png', price: 6000 },
    ]
  },
  {id:7,  name:'Pasta Ballina Para Cubrir Tortas', cat:'reposteria',   emoji:'🎈', img: 'img/Pasta-ballina-blanco-500gr.png', bg:'#F0F5FF', price:2800, tag:'', desc:'Fáciles de estirar y modelar, ideales para lograr coberturas lisas, prolijas y decoraciones creativas en tortas y pastelería.', stars:4, reviews:215,
    variants: [
      { label: 'Blanco', img: 'img/Pasta-ballina-blanco-500gr.png', price: 6000 },
      { label: 'Negro', img: 'img/Pasta-ballina-negro-500gr.png', price: 6000 },
      { label: 'Rojo', img: 'img/Pasta-ballina-rojo-500gr.png', price: 6000 },
      { label: 'Rosa', img: 'img/Pasta-ballina-rosa-500gr.png', price: 6000 },
      { label: 'Verde', img: 'img/Pasta-ballina-verde-500gr.png', price: 6000 },
      { label: 'Amarillo', img: 'img/Pasta-ballina-amarillo-500gr.png', price: 6000 },
    ]
  },
  {id:8,  name:'Pasta De Goma Ballina 500 gr', cat:'reposteria', emoji:'🕯️', img: 'img/PastaDeGoma-ballina-500gr.png', bg:'#FFF8E0', price:5000, tag:'new', desc:'Ideal para modelado y decoraciones detalladas. Flexible, fácil de trabajar y perfecta para flores, figuras y acabados profesionales en tortas.', stars:4, reviews:312},
  {id:9,  name:'Bizcochuelo Ravana Sabor Vainilla 540 gr', cat:'reposteria', emoji:'🦕', img: 'img/Bizcochuelo-de-vainilla-Ravana.png', bg:'#F0FFF5', price:2800, tag:'new', desc:'Esponjoso y de sabor suave. Ideal como base para tortas, fácil de rellenar y perfecto para todo tipo de preparaciones dulces.', stars:5, reviews:76},
  {id:10, name:'Bizcochuelo Emeth Sabor Vainilla 450 gr', cat:'reposteria', emoji:'🎭', img: 'img/bizcochuelo-emeth-vainilla-450gr.png', bg:'#FFF0F5', price:2000, tag:'', desc:'Suave y esponjoso. Ideal como base para tortas, fácil de rellenar y perfecto para preparaciones dulces caseras.', stars:4, reviews:55},
  {id:11, name:'Brownie Ledevit De 470 gr', cat:'reposteria', emoji:'✨', img: 'img/brownie-ledevit-470g.png', bg:'#F5F0FF', price:4600, tag:'', desc:'Húmedo y de intenso sabor a chocolate. Ideal para preparar brownies caseros con textura suave por dentro y un delicioso acabado en cada porción.', stars:4, reviews:88},
  {id:12, name:'Kit Máscaras Superhéroes',    cat:'mascaras',   emoji:'🦸', bg:'#F0F5FF', price:2400,                 tag:'hot',  desc:'Set x4: Spider-Man, Batman, Wonder Woman y Hulk. EVA resistente.',                  stars:4, reviews:110},
  {id:13, name:'Peluca Arco Iris',            cat:'mascaras',   emoji:'🌈', bg:'#FFF0F5', price:1900,                 tag:'new',  desc:'Multicolor, lavable. Talle único adulto y niño.',                                   stars:5, reviews:67},
  {id:14, name:'Disfraz Bruja Completo',      cat:'mascaras',   emoji:'🧙', bg:'#F3F0FF', price:4100,                 tag:'',     desc:'Vestido + sombrero + escoba. Talles S, M y L.',                                    stars:4, reviews:48},
  {id:15, name:'Bolsa Sorpresa Kids',         cat:'juguetes',   emoji:'🎁', bg:'#FFFBF0', price:1800,                 tag:'new',  desc:'5 mini juguetes + golosinas. Ideal para piñata o regalito de cumpleaños.',          stars:5, reviews:320},
  {id:16, name:'Peluche Oso Corazón 25cm',   cat:'juguetes',   emoji:'🧸', bg:'#FFF0F5', price:3600,                 tag:'',     desc:'Supersuave, 25 cm. Ideal para regalo, sorpresa o centro de mesa.',                  stars:5, reviews:92},
  {id:17, name:'Set Plastilina 12 colores',   cat:'juguetes',   emoji:'🎨', bg:'#FFF5E0', price:2100,                 tag:'',     desc:'12 colores vivos. No tóxica. Con moldes y herramientas incluidas.',                 stars:4, reviews:143},
  {id:18, name:'Surtido Golosinas 500g',      cat:'dulces',     emoji:'🍬', bg:'#F0FFF5', price:2400,                 tag:'hot',  desc:'Mix de caramelos, chicles, chupetines y chocolatines. Ideal candy bar.',            stars:4, reviews:441},
  {id:19, name:'Chupetines Artesanales x12',  cat:'dulces',     emoji:'🍭', bg:'#FFFBF0', price:3000,                 tag:'new',  desc:'Personalizados con nombre. Sabores frutales. Sin TACC.',                            stars:5, reviews:178},
  {id:20, name:'Chocolates Artesanales x24',  cat:'dulces',     emoji:'🍫', bg:'#FFF3E0', price:5200,                 tag:'hot',  desc:'Rellenos de maracuyá, dulce de leche o fresa. Caja decorada.',                     stars:5, reviews:224},
  {id:21, name:'Garrapiñadas 200g',           cat:'dulces',     emoji:'🥜', bg:'#FFF8E8', price:1600,                 tag:'',     desc:'Maní bañado en caramelo artesanal. Bolsita sellada lista para candy bar.',          stars:4, reviews:99},
  {id:22, name:'Combo Baby Shower',           cat:'combos',     emoji:'👶', bg:'#F0FFF9', price:14500, oldPrice:18000,tag:'sale', desc:'Torta + cupcakes + globos + decoración completa. Para 20 personas.',              stars:5, reviews:134},
  {id:23, name:'Combo Cumple Princesa',       cat:'combos',     emoji:'👑', bg:'#FFF0F5', price:22000,                tag:'ltd',  desc:'Torta + 12 cupcakes + cotillón x20 + arco de globos decorado.',                   stars:5, reviews:89},
  {id:24, name:'Combo Dino Party x10',        cat:'combos',     emoji:'🦖', bg:'#F0FFF5', price:8900,  oldPrice:11000,tag:'sale', desc:'Piñata dinosaurio + kit cotillón x10 + bolsas sorpresa x10.',                     stars:4, reviews:57},
];

// ===== STATE =====
let activeCat = 'todos';
let searchQuery = '';
let cart = JSON.parse(localStorage.getItem('bambinos-cart')) || [];

// ===== CART CONFIG =====

// ===== CART FUNCTIONS =====
function syncCartFromStorage() {
  cart = JSON.parse(localStorage.getItem('bambinos-cart')) || [];
}

function buildCartItemKey(product) {
  const variantKey = product.variantId || product.variantLabel || 'base';
  return `${product.id}::${variantKey}`;
}

function sanitizeCartItem(product) {
  const variantLabel = product.variantLabel || '';
  const variantId = product.variantId || variantLabel || 'base';
  const qty = Math.max(1, Number(product.qty) || 1);
  const item = {
    id: product.id,
    name: product.name,
    price: Number(product.price) || 0,
    img: product.img || '',
    emoji: product.emoji || '',
    qty,
    variantLabel,
    variantId
  };
  item.key = buildCartItemKey(item);
  return item;
}

function saveCart() {
  cart = cart.map(item => {
    const normalized = { ...item };
    normalized.variantLabel = normalized.variantLabel || '';
    normalized.variantId = normalized.variantId || normalized.variantLabel || 'base';
    normalized.key = normalized.key || buildCartItemKey(normalized);
    normalized.qty = Math.max(1, Number(normalized.qty) || 1);
    normalized.price = Number(normalized.price) || 0;
    return normalized;
  });
  localStorage.setItem('bambinos-cart', JSON.stringify(cart));
}

function addToCart(product) {
  syncCartFromStorage();
  const itemToAdd = sanitizeCartItem(product);
  const existing = cart.find(item => item.key === itemToAdd.key);
  if (existing) {
    existing.qty += itemToAdd.qty;
  } else {
    cart.push(itemToAdd);
  }
  saveCart();
  renderCartPanel();
  // Animation feedback
  const panel = document.getElementById('cart-panel');
  if (panel) {
    panel.classList.add('item-added');
    setTimeout(() => panel.classList.remove('item-added'), 400);
  }
  updateCartBadge();
  showToast('🛒 Agregado al carrito!');
}

function removeFromCart(key) {
  // Animation: mark for removal first
  const itemEl = document.querySelector(`[onclick="removeFromCart('${key}')"]`).closest('.cart-item');
  if (itemEl) {
    itemEl.classList.add('item-removing');
    setTimeout(() => {
      syncCartFromStorage();
      cart = cart.filter(item => item.key !== key);
      saveCart();
      renderCartPanel();
      updateCartBadge();
    }, 400);
  } else {
    // Fallback if element not found
    syncCartFromStorage();
    cart = cart.filter(item => item.key !== key);
    saveCart();
    renderCartPanel();
    updateCartBadge();
  }
}

function updateQuantity(key, qty) {
  syncCartFromStorage();
  const item = cart.find(item => item.key === key);
  if (!item) return;
  const safeQty = Math.max(1, Number(qty) || 1);
  item.qty = safeQty;
  saveCart();
  renderCartPanel();
  // Animation feedback
  const itemEl = document.querySelector(`[onclick="updateQuantity('${key}', ${safeQty})"]`).closest('.cart-item');
  if (itemEl) {
    itemEl.classList.add('qty-updated');
    setTimeout(() => itemEl.classList.remove('qty-updated'), 300);
  }
  updateCartBadge();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCartPanel();
  updateCartBadge();
}

function getCartTotals() {
  syncCartFromStorage();
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  return { total, count: cart.reduce((sum, item) => sum + item.qty, 0) };
}

function updateCartBadge() {
  const totals = getCartTotals();
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = totals.count || '0';
    badge.classList.toggle('has-items', totals.count > 0);
  }
}

function toggleCart() {
  const panel = document.getElementById('cart-panel');
  if (panel) {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
      renderCartPanel();
    }
  }
}

function renderCartPanel() {
  syncCartFromStorage();
  const container = document.getElementById('cart-items');
  const countEl = document.getElementById('cart-item-count');
  const checkoutEl = document.getElementById('cart-checkout');
  const totals = getCartTotals();
  
  // Update item count
  if (countEl) {
    countEl.textContent = totals.count + ' producto' + (totals.count !== 1 ? 's' : '');
  }
  
  if (totals.count === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🛒</span>
        <div class="cart-empty-title">Carrito vacío</div>
        <div class="cart-empty-sub">Agregá productos para empezar tu pedido</div>
        <button class="cart-empty-btn" onclick="document.getElementById('cart-toggle').click()">Ver productos</button>
      </div>
    `;
    const totalsEl = document.getElementById('cart-totals');
    if (totalsEl) {
      totalsEl.innerHTML = `
        <div class="total-row total-final">
          <span>Total</span>
          <span>${fmt(0)}</span>
        </div>
      `;
    }
    if (checkoutEl) {
      checkoutEl.href = '#';
    }
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.img ? `<img src="${item.img}" alt="${item.name}">` : `<span>${item.emoji || '🛒'}</span>`}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${item.variantLabel ? `<div class="cart-item-variant">Variante: ${item.variantLabel}</div>` : ''}
        <div class="cart-item-price">${fmt(item.price)}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="updateQuantity('${item.key}', ${item.qty - 1})" class="qty-btn">-</button>
        <span class="qty-value">${item.qty}</span>
        <button onclick="updateQuantity('${item.key}', ${item.qty + 1})" class="qty-btn">+</button>
      </div>
      <div class="cart-item-subtotal">${fmt(item.price * item.qty)}</div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.key}')">✕</button>
    </div>
  `).join('');

  // Update totals
  const totalsEl = document.getElementById('cart-totals');
  if (totalsEl) {
    totalsEl.innerHTML = `
      <div class="total-row total-final">
        <span>Total</span>
        <span>${fmt(totals.total)}</span>
      </div>
    `;
  }
  
  // Update checkout WA link
  if (checkoutEl && totals.count > 0) {
    const itemsList = cart.map(item => {
      const variantTxt = item.variantLabel ? ` (Variant: ${item.variantLabel})` : '';
      return `${item.name}${variantTxt} x${item.qty} - ${fmt(item.price * item.qty)}`;
    }).join('\n');
    const totalFmt = fmt(totals.total);
    const message = `¡Hola Bambinos! 🛒\n\n*Mi pedido:*\n${itemsList}\n\n*Total: ${totalFmt}*\n\n¿siguen en stock?`;
    checkoutEl.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message);
  }
}

function showToast(message) {
  // Simple toast para feedback
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function fmt(n){ return '$' + n.toLocaleString('es-AR') }

// ===== FILTER + SORT =====
function getFiltered(){
  const q = searchQuery.toLowerCase().trim();
  const sort = document.getElementById('sort-select').value;
  let list = PRODUCTS.filter(p => {
    const catOk = activeCat === 'todos' || p.cat === activeCat;
    const searchOk = !q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return catOk && searchOk;
  });
  if(sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if(sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if(sort === 'rating')     list.sort((a,b) => b.stars - a.stars || b.reviews - a.reviews);
  return list;
}

// ===== RENDER =====
// Categories order for grouped display
const CAT_META = {
  reposteria: {label:'Repostería',    emoji:'🎂'},
  dulces:     {label:'Dulces & Kiosco',emoji:'🍬'},
  mascaras:   {label:'Máscaras',       emoji:'🎭'},
  juguetes:   {label:'Juguetes',       emoji:'🧸'},
  cotillon:   {label:'Cotillón',       emoji:'🎊'},
  combos:     {label:'Combos',         emoji:'🎁'},
};
const TAG_MAP  = {hot:'🔥 Popular', new:'✨ Nuevo', sale:'💜 Oferta', ltd:'⏳ Últimos'};
const TAG_CLS  = {hot:'t-hot', new:'t-new', sale:'t-sale', ltd:'t-ltd'};

function render(){
  const filtered = getFiltered();
  const out = document.getElementById('catalogue-output');

  // Update result pill
  const pill = document.getElementById('result-pill');
  if(searchQuery){
    pill.textContent = filtered.length + ' resultado' + (filtered.length !== 1 ? 's' : '') + ' para "' + searchQuery + '"';
  } else if(activeCat !== 'todos'){
    pill.textContent = filtered.length + ' productos — ' + CAT_META[activeCat].label;
  } else {
    pill.textContent = filtered.length + ' productos';
  }

  if(filtered.length === 0){
    out.innerHTML = `<div class="products-grid">
      <div class="empty-state">
        <span class="empty-icon">🔍</span>
        <div class="empty-title">Sin resultados</div>
        <div class="empty-sub">Probá con otro nombre o categoría.</div>
        <button class="empty-btn" onclick="clearAll()">Ver todos los productos</button>
      </div>
    </div>`;
    return;
  }

  // Si hay filtro activo (categoría específica o búsqueda), mostrar grilla plana
  if(activeCat !== 'todos' || searchQuery){
    out.innerHTML = `<div class="products-grid" id="flat-grid"></div>`;
    const grid = document.getElementById('flat-grid');
    filtered.forEach((p, i) => {
      grid.appendChild(makeCard(p, i));
    });
    observeReveal();
    return;
  }

  // Sin filtro: agrupar por categoría
  const byCat = {};
  filtered.forEach(p => {
    if(!byCat[p.cat]) byCat[p.cat] = [];
    byCat[p.cat].push(p);
  });

  let html = '';
  Object.keys(CAT_META).forEach(cat => {
    const items = byCat[cat];
    if(!items || items.length === 0) return;
    const meta = CAT_META[cat];
    html += `
      <div class="cat-section-head reveal">
        <div class="cat-section-label">
          <span class="cat-section-emoji">${meta.emoji}</span>
          <span class="cat-section-title">${meta.label}</span>
          <span class="cat-section-count">${items.length} producto${items.length!==1?'s':''}</span>
        </div>
        <div class="cat-section-line"></div>
      </div>
      <div class="products-grid" id="grid-${cat}"></div>`;
  });
  out.innerHTML = html;

  Object.keys(CAT_META).forEach(cat => {
    const items = byCat[cat];
    if(!items) return;
    const grid = document.getElementById('grid-' + cat);
    if(!grid) return;
    items.forEach((p, i) => grid.appendChild(makeCard(p, i)));
  });

  observeReveal();
}

// ===== BUILD CARD (con soporte de variantes) =====
function makeCard(p, i) {

  // --- Estado activo de variante para esta card ---
  let activeVariant = p.variants ? p.variants[0] : null;

  // --- Helpers para leer el estado actual ---
  function currentEmoji()  { return activeVariant ? (activeVariant.emoji || p.emoji) : p.emoji; }
  function currentImg()    { return activeVariant ? (activeVariant.img   || p.img)   : p.img;   }
  function currentBg()     { return activeVariant ? (activeVariant.bg    || p.bg)    : p.bg;    }
  function currentDesc()   { return activeVariant ? (activeVariant.desc  || p.desc)  : p.desc;  }
  function currentPrice()  { return activeVariant ? (activeVariant.price || p.price) : p.price; }
  // ¿Este producto usa imágenes?
  const usesImages = !!(p.img || (p.variants && p.variants.some(v => v.img)));

  // --- Link WA dinámico ---
  function buildWaLink() {
    const name  = activeVariant ? `${p.name} — ${activeVariant.label}` : p.name;
    const price = fmt(currentPrice());
    const txt   = `Hola Bambinos! 🎉\nMe gustaría pedir:\n*${name}*\nPrecio: ${price}\n\n¿Está disponible?`;
    return WA_BASE + encodeURIComponent(txt);
  }

  // --- Tags ---
  const tagHTML = p.tag ? `<span class="pc-tag ${TAG_CLS[p.tag]}">${TAG_MAP[p.tag]}</span>` : '';
  const oldHTML = p.oldPrice ? `<span class="pc-old">${fmt(p.oldPrice)}</span>` : '';

  // --- Chips HTML (solo si hay variantes) ---
  function buildChipsHTML() {
    if (!p.variants) return '';
    return `<div class="pc-variants">
      ${p.variants.map((v, idx) => {
        const dotHTML = v.color ? `<span class="vr-dot" style="background:${v.color};border-color:${v.color}"></span>` : '';
        return `<button
          class="vr-chip${idx === 0 ? ' active' : ''}"
          data-idx="${idx}"
          onclick="selectVariant(this)"
        >${dotHTML}${v.label}</button>`;
      }).join('')}
    </div>`;
  }

  // --- Construir el div ---
  const div = document.createElement('div');
  div.className = 'product-card reveal';
  div.style.transitionDelay = (i * 0.045) + 's';

  // Guardar referencia al array de variantes en el DOM
  if (p.variants) div._variants = p.variants;

  div.innerHTML = `
    <div class="pc-img" style="background:${usesImages ? 'transparent' : currentBg()}">
  ${usesImages
    ? `<img src="${currentImg()}" alt="${p.name}" class="pc-product-img">`
    : `<span class="pc-emoji">${currentEmoji()}</span>`
  }
      <div class="pc-tags">${tagHTML}</div>
      <button class="pc-wish pc-cart-add" type="button">🛒</button>
      <div class="pc-overlay">
        <p class="pc-overlay-desc">${currentDesc()}</p>
      </div>
    </div>
    <div class="pc-body">
      <div class="pc-cat">${p.cat}</div>
      <div class="pc-name">${p.name}</div>
      ${buildChipsHTML()}
      <div class="pc-foot">
        <div class="pc-prices">${oldHTML}<span class="pc-price">${fmt(currentPrice())}</span></div>
        <a class="btn-wa-card" href="${buildWaLink()}" target="_blank" rel="noopener">
          <span class="wa-icon-sm" style="font-size:14px">💬</span>
          <span class="btn-wa-text">Pedir</span>
        </a>
      </div>
    </div>`;

  // --- Función de selección (closure sobre div y activeVariant) ---
  div.selectVariant = function(btn) {
    const idx     = parseInt(btn.dataset.idx);
    activeVariant = div._variants[idx];

    // 1. Actualizar chips activos
    div.querySelectorAll('.vr-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');

    // 2. Cambiar imagen O emoji + fondo según tipo de producto
    if (usesImages) {
      const imgEl = div.querySelector('.pc-product-img');
      if (imgEl) {
        imgEl.classList.remove('swapping');
        void imgEl.offsetWidth;
        imgEl.classList.add('swapping');
        imgEl.addEventListener('animationend', () => {
          imgEl.src = currentImg();
          imgEl.classList.remove('swapping');
        }, { once: true });
      }
      // fondo solo si la variante lo especifica explícitamente
      if (activeVariant.bg) div.querySelector('.pc-img').style.background = activeVariant.bg;
    } else {
      const emojiEl = div.querySelector('.pc-emoji');
      const imgEl   = div.querySelector('.pc-img');
      if (emojiEl) {
        emojiEl.classList.remove('swapping');
        void emojiEl.offsetWidth;
        emojiEl.classList.add('swapping');
        emojiEl.addEventListener('animationend', () => {
          emojiEl.textContent = currentEmoji();
          emojiEl.classList.remove('swapping');
        }, { once: true });
      }
      if (activeVariant.bg) imgEl.style.background = activeVariant.bg;
    }

    // 3. (ver paso 5) descripción se actualiza junto con WA link

    // 4. Actualizar precio
    const priceEl = div.querySelector('.pc-price');
    if (priceEl) priceEl.textContent = fmt(currentPrice());

    // 5. Actualizar link de WhatsApp del botón de la card
    const newLink = buildWaLink();
    div.querySelectorAll('.btn-wa-card').forEach(a => a.href = newLink);
    // Actualizar descripción en overlay si está abierto
    const descEl2 = div.querySelector('.pc-overlay-desc');
    if (descEl2) descEl2.textContent = currentDesc();
  };

  // --- Add to cart (siempre usa la variante seleccionada actual) ---
  const addBtn = div.querySelector('.pc-cart-add');
  if (addBtn) {
    addBtn.addEventListener('click', function(e){
      e.stopPropagation();
      addToCart({
        id: p.id,
        name: p.name,
        price: currentPrice(),
        img: currentImg() || '',
        emoji: currentEmoji(),
        qty: 1,
        variantLabel: activeVariant ? activeVariant.label : '',
        variantId: activeVariant ? activeVariant.label : 'base'
      });
    });
  }

  // --- Touch: SOLO la imagen activa/desactiva el overlay (toggle) ---
  const pcImgEl = div.querySelector('.pc-img');
  pcImgEl.addEventListener('click', function(e) {
    // Wish button maneja su propio click
    if (e.target.closest('.pc-wish')) return;
    // Solo en dispositivos touch
    if (!window.matchMedia('(hover:none)').matches) return;

    const isTouched = this.classList.contains('img-touched');
    // Cerrar todos los otros overlays abiertos
    document.querySelectorAll('.pc-img.img-touched').forEach(el => {
      if (el !== this) el.classList.remove('img-touched');
    });
    // Toggle este
    this.classList.toggle('img-touched', !isTouched);
    e.stopPropagation();
  });

  return div;
}

// Función global para que los chips puedan llamarla desde onclick
function selectVariant(btn) {
  const card = btn.closest('.product-card');
  if (card && card.selectVariant) card.selectVariant(btn);
}

// ===== FILTER =====
function setFilter(cat, btn){
  activeCat = cat;
  document.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  render();
}

// ===== SEARCH =====
let searchTimer;
document.getElementById('search-input').addEventListener('input', function(){
  clearTimeout(searchTimer);
  const val = this.value;
  searchTimer = setTimeout(() => {
    searchQuery = val.trim();
    document.getElementById('search-clear').classList.toggle('visible', searchQuery.length > 0);
    render();
  }, 220);
});

function clearSearch(){
  document.getElementById('search-input').value = '';
  searchQuery = '';
  document.getElementById('search-clear').classList.remove('visible');
  render();
}

function clearAll(){
  clearSearch();
  setFilter('todos', document.querySelector('.chip[data-cat="todos"]'));
}

// ===== EVENT LISTENERS (reemplazan los onclick/onchange inline del HTML) =====

// Botón "Buscar productos" del hero
document.getElementById('btn-search-scroll').addEventListener('click', function(){
  const input = document.getElementById('search-input');
  input.focus();
  input.scrollIntoView({behavior:'smooth', block:'center'});
});

// Botón limpiar búsqueda
document.getElementById('search-clear').addEventListener('click', clearSearch);

// Chips de filtro de categoría
document.querySelectorAll('.chip[data-cat]').forEach(function(btn){
  btn.addEventListener('click', function(){
    setFilter(this.dataset.cat, this);
  });
});

// Select de ordenamiento
document.getElementById('sort-select').addEventListener('change', render);

// Cerrar overlay cuando el toque cae fuera de la imagen
document.addEventListener('click', e => {
  if (e.target.closest('.vr-chip')) return; // cambiar variante no cierra
  if (!e.target.closest('.pc-img')) {
    document.querySelectorAll('.pc-img.img-touched').forEach(el => el.classList.remove('img-touched'));
  }
});

// ===== SCROLL REVEAL =====
function observeReveal(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// ===== CURSOR — solo en dispositivos con mouse =====
const cur = document.getElementById('cursor');
const fol = document.getElementById('cursor-follower');
const isTouch = window.matchMedia('(hover:none)').matches || ('ontouchstart' in window);
let mx=0, my=0, fx=0, fy=0;
if(!isTouch){
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  });
  (function tick(){
    fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12;
    fol.style.left = fx + 'px'; fol.style.top = fy + 'px';
    requestAnimationFrame(tick);
  })();
  document.addEventListener('mouseover', e => {
    if(e.target.closest('a,button,[onclick]')){
      cur.classList.add('hov'); fol.classList.add('hov');
    } else {
      cur.classList.remove('hov'); fol.classList.remove('hov');
    }
  });
}

// ===== INIT =====
initLinks();
syncCartFromStorage();
updateCartBadge(); // Inicializar badge del carrito
renderCartPanel();
render();
