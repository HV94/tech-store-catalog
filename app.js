/**
 * ==============================================================================
 * PROGETTO: Catalogo Hardware IT & Preventivi Cassa
 * CANDIDATO: Valentyn Haidukov (Perito Informatico - Help Desk L1 & Supporto IT)
 * CARATTERISTICHE:
 * - 20 referenze hardware IT ripartite in 5 categorie specializzate
 * - Ricerca istantanea per nome, componente o codice EAN
 * - Ordinamento per prezzo e disponibilità magazzino
 * - Scheda tecnica modale con specifiche complete del dispositivo
 * - Gestione cassa/preventivo con calcolo automatico IVA al 22% e scontrino
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. DATASET REFERENZE HARDWARE IT (20 prodotti specialistici)
// ------------------------------------------------------------------------------
const CATALOGO_HARDWARE = [
  // Categoria: Notebook & PC
  {
    id: 1,
    nome: "Apple MacBook Air 13\" M2",
    categoria: "laptop",
    categoriaNome: "Notebook & PC",
    marca: "Apple",
    prezzo: 1099.00,
    prezzoListino: 1249.00,
    pezzi: 12,
    ean: "194253131001",
    specifiche: "Chip Apple M2 (8 CPU / 8 GPU), 8GB RAM Unificata, SSD 256GB, Display Liquid Retina 13.6\", Autonomia 18h.",
    icona: "💻"
  },
  {
    id: 2,
    nome: "Lenovo ThinkPad T14 Gen 4",
    categoria: "laptop",
    categoriaNome: "Notebook & PC",
    marca: "Lenovo",
    prezzo: 1290.00,
    prezzoListino: 1450.00,
    pezzi: 8,
    ean: "019680345678",
    specifiche: "Intel Core i7-1355U, 16GB RAM DDR5, SSD 512GB NVMe PCIe 4.0, Display 14\" IPS FHD+ 400 nits, Windows 11 Pro.",
    icona: "💻"
  },
  {
    id: 3,
    nome: "Dell XPS 13 Plus 9320",
    categoria: "laptop",
    categoriaNome: "Notebook & PC",
    marca: "Dell",
    prezzo: 1499.00,
    prezzoListino: 1699.00,
    pezzi: 6,
    ean: "539718471209",
    specifiche: "Intel Core i7-1360P, 32GB LPDDR5, SSD 1TB NVMe, Schermo 13.4\" OLED 3.5K Touch, Chassis Alluminio CNC.",
    icona: "💻"
  },
  {
    id: 4,
    nome: "ASUS ROG Zephyrus G16 Gaming",
    categoria: "laptop",
    categoriaNome: "Notebook & PC",
    marca: "ASUS",
    prezzo: 1899.00,
    prezzoListino: 2199.00,
    pezzi: 5,
    ean: "471138709123",
    specifiche: "Intel Core Ultra 9 185H, NVIDIA RTX 4070 8GB GDDR6, 32GB RAM DDR5, SSD 1TB, Display 16\" OLED 240Hz ROG Nebula.",
    icona: "🎮"
  },

  // Categoria: Smartphone & Tablet
  {
    id: 5,
    nome: "Apple iPhone 15 Pro 128GB",
    categoria: "smartphone",
    categoriaNome: "Smartphone & Tablet",
    marca: "Apple",
    prezzo: 1129.00,
    prezzoListino: 1239.00,
    pezzi: 15,
    ean: "195949038291",
    specifiche: "Chip A17 Pro (3nm), Design in Titanio Grado 5, Fotocamera principale 48MP con teleobiettivo 3x, Porta USB-C 3.0.",
    icona: "📱"
  },
  {
    id: 6,
    nome: "Samsung Galaxy S24 Ultra 256GB",
    categoria: "smartphone",
    categoriaNome: "Smartphone & Tablet",
    marca: "Samsung",
    prezzo: 1299.00,
    prezzoListino: 1499.00,
    pezzi: 10,
    ean: "880609532187",
    specifiche: "Snapdragon 8 Gen 3 for Galaxy, 12GB RAM, Display Dynamic AMOLED 2X 6.8\" 120Hz antiriflesso, Fotocamera 200MP, S Pen.",
    icona: "📱"
  },
  {
    id: 7,
    nome: "Google Pixel 8 Pro 128GB",
    categoria: "smartphone",
    categoriaNome: "Smartphone & Tablet",
    marca: "Google",
    prezzo: 899.00,
    prezzoListino: 1099.00,
    pezzi: 8,
    ean: "084024470512",
    specifiche: "Google Tensor G3 con chip Titan M2, Fotocamera tripla con zoom 30x, Display Super Actua 6.7\" OLED 120Hz, 7 anni update.",
    icona: "📱"
  },
  {
    id: 8,
    nome: "Apple iPad Air 11\" M2 Wi-Fi 128GB",
    categoria: "smartphone",
    categoriaNome: "Smartphone & Tablet",
    marca: "Apple",
    prezzo: 679.00,
    prezzoListino: 719.00,
    pezzi: 14,
    ean: "195949392019",
    specifiche: "Chip Apple M2, Display Liquid Retina 11\" con True Tone e ampia gamma cromatica P3, supporto Apple Pencil Pro.",
    icona: "📱"
  },

  // Categoria: Audio & Smart TV
  {
    id: 9,
    nome: "Sony WH-1000XM5 Cuffie Wireless",
    categoria: "audio",
    categoriaNome: "Audio & Smart TV",
    marca: "Sony",
    prezzo: 349.00,
    prezzoListino: 420.00,
    pezzi: 16,
    ean: "454873613256",
    specifiche: "Cancellazione attiva del rumore leader del settore con doppio processore V1/QN1, 8 microfoni, Autonomia 30h, Audio Hi-Res LDAC.",
    icona: "🎧"
  },
  {
    id: 10,
    nome: "Apple AirPods Pro (2ª Gen) USB-C",
    categoria: "audio",
    categoriaNome: "Audio & Smart TV",
    marca: "Apple",
    prezzo: 249.00,
    prezzoListino: 279.00,
    pezzi: 25,
    ean: "195949052518",
    specifiche: "Chip Apple H2, Cancellazione attiva del rumore raddoppiata, Audio Spaziale personalizzato, Custodia MagSafe USB-C.",
    icona: "🎧"
  },
  {
    id: 11,
    nome: "LG OLED evo 55\" Serie C3 Smart TV",
    categoria: "audio",
    categoriaNome: "Audio & Smart TV",
    marca: "LG",
    prezzo: 1199.00,
    prezzoListino: 1599.00,
    pezzi: 4,
    ean: "880609172901",
    specifiche: "Pannello OLED 4K con pixel autoilluminanti, Processore α9 Gen6 4K, 4 porte HDMI 2.1 (4K@120Hz, VRR, G-Sync), webOS 23.",
    icona: "📺"
  },
  {
    id: 12,
    nome: "Bose QuietComfort Ultra Cuffie",
    categoria: "audio",
    categoriaNome: "Audio & Smart TV",
    marca: "Bose",
    prezzo: 399.00,
    prezzoListino: 499.00,
    pezzi: 7,
    ean: "017817843219",
    specifiche: "Audio Immersivo Bose con tracciamento spaziale della testa, Modalità Quiet/Aware, 24 ore di autonomia, cuscinetti in pelle sintetica.",
    icona: "🎧"
  },

  // Categoria: Componenti & Gaming
  {
    id: 13,
    nome: "NVIDIA GeForce RTX 4070 Super 12GB",
    categoria: "gaming",
    categoriaNome: "Componenti & Gaming",
    marca: "NVIDIA",
    prezzo: 659.00,
    prezzoListino: 699.00,
    pezzi: 9,
    ean: "471907202391",
    specifiche: "Architettura Ada Lovelace, 12GB GDDR6X su bus 192-bit, DLSS 3.5 con Frame Generation, Ray Tracing 3ª Gen, TDP 220W.",
    icona: "⚡"
  },
  {
    id: 14,
    nome: "AMD Ryzen 7 7800X3D Processore",
    categoria: "gaming",
    categoriaNome: "Componenti & Gaming",
    marca: "AMD",
    prezzo: 389.00,
    prezzoListino: 449.00,
    pezzi: 11,
    ean: "073014331493",
    specifiche: "8 Core / 16 Thread su Socket AM5, 96MB 3D V-Cache (104MB cache totale), Boost fino a 5.0 GHz, TDP 120W, PCI-Express 5.0.",
    icona: "⚡"
  },
  {
    id: 15,
    nome: "Samsung 990 PRO 2TB NVMe PCIe 4.0",
    categoria: "gaming",
    categoriaNome: "Componenti & Gaming",
    marca: "Samsung",
    prezzo: 179.00,
    prezzoListino: 219.00,
    pezzi: 20,
    ean: "880609438901",
    specifiche: "Velocità lettura sequenziale fino a 7.450 MB/s, scrittura fino a 6.900 MB/s, V-NAND TLC, controller Nickel-coated, 1200 TBW.",
    icona: "💾"
  },
  {
    id: 16,
    nome: "Corsair Vengeance RGB DDR5 32GB (2x16GB)",
    categoria: "gaming",
    categoriaNome: "Componenti & Gaming",
    marca: "Corsair",
    prezzo: 129.00,
    prezzoListino: 149.00,
    pezzi: 15,
    ean: "084000669921",
    specifiche: "Kit dual-channel DDR5-6000MHz CL30 con supporto profili Intel XMP 3.0 e AMD EXPO, illuminazione RGB a 10 zone.",
    icona: "⚡"
  },

  // Categoria: Monitor & Accessori
  {
    id: 17,
    nome: "Dell UltraSharp 27\" 4K USB-C Hub (U2723QE)",
    categoria: "accessori",
    categoriaNome: "Monitor & Accessori",
    marca: "Dell",
    prezzo: 589.00,
    prezzoListino: 689.00,
    pezzi: 8,
    ean: "539718456711",
    specifiche: "Pannello IPS Black con contrasto 2000:1, risoluzione 3840x2160, 98% DCI-P3, Hub USB-C con erogazione 90W PD, porta Ethernet RJ45.",
    icona: "🖥️"
  },
  {
    id: 18,
    nome: "Logitech MX Master 3S Mouse Wireless",
    categoria: "accessori",
    categoriaNome: "Monitor & Accessori",
    marca: "Logitech",
    prezzo: 99.00,
    prezzoListino: 129.00,
    pezzi: 22,
    ean: "509920610372",
    specifiche: "Sensore ottico Darkfield 8000 DPI funzionante anche su vetro, scorrimento MagSpeed elettromagnetico, clic silenziosi Quiet Clicks.",
    icona: "🖱️"
  },
  {
    id: 19,
    nome: "Keychron K2 Pro Tastiera Meccanica Wireless",
    categoria: "accessori",
    categoriaNome: "Monitor & Accessori",
    marca: "Keychron",
    prezzo: 119.00,
    prezzoListino: 139.00,
    pezzi: 10,
    ean: "489524880192",
    specifiche: "Layout 75% compatto, switch Gateron G Pro Brown Hot-swappable, firmware QMK/VIA completamente programmabile, Bluetooth 5.1 / USB.",
    icona: "⌨️"
  },
  {
    id: 20,
    nome: "CalDigit TS4 Docking Station Thunderbolt 4",
    categoria: "accessori",
    categoriaNome: "Monitor & Accessori",
    marca: "CalDigit",
    prezzo: 399.00,
    prezzoListino: 449.00,
    pezzi: 6,
    ean: "850013962110",
    specifiche: "18 porte di espansione: ricarica 98W al laptop, 3 porte Thunderbolt 4, porta DisplayPort 1.4, Ethernet 2.5 GbE, lettore schede SD/microSD UHS-II.",
    icona: "🔌"
  }
];

// ------------------------------------------------------------------------------
// 2. STATO DELL'APPLICAZIONE
// ------------------------------------------------------------------------------
let carrello = [];
let filtroCategoria = 'all';
let filtroRicerca = '';
let filtroMarca = 'all';
let ordinamento = 'featured';
let soloPromo = false;
let soloInStock = false;
let metodoPagamento = 'cash';

// ------------------------------------------------------------------------------
// 3. INIZIALIZZAZIONE & EVENTI
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  popolaSelettoreBrand();
  renderCatalogo();
  aggiornaMetricheHeader();
  setupEventListeners();
});

function setupEventListeners() {
  // Ricerca testuale
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filtroRicerca = e.target.value.trim().toLowerCase();
      renderCatalogo();
    });
  }

  // Filtro Categorie (Pills)
  const catPills = document.querySelectorAll('.cat-pill');
  catPills.forEach(btn => {
    btn.addEventListener('click', () => {
      catPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filtroCategoria = btn.getAttribute('data-category');
      renderCatalogo();
    });
  });

  // Filtro Brand
  const brandSelect = document.getElementById('brand-select');
  if (brandSelect) {
    brandSelect.addEventListener('change', (e) => {
      filtroMarca = e.target.value;
      renderCatalogo();
    });
  }

  // Ordinamento
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      ordinamento = e.target.value;
      renderCatalogo();
    });
  }

  // Toggles promo e disponibilità
  const promoToggle = document.getElementById('toggle-promo-only');
  if (promoToggle) {
    promoToggle.addEventListener('change', (e) => {
      soloPromo = e.target.checked;
      renderCatalogo();
    });
  }

  const stockToggle = document.getElementById('toggle-instock-only');
  if (stockToggle) {
    stockToggle.addEventListener('change', (e) => {
      soloInStock = e.target.checked;
      renderCatalogo();
    });
  }

  // Ripristina filtri
  const resetBtn = document.getElementById('btn-reset-filters');
  if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);

  // Modale Dettaglio Prodotto
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const productModal = document.getElementById('product-modal');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  // Metodi di Pagamento Cassa
  const payMethodCash = document.getElementById('payMethodCash');
  const payMethodPos = document.getElementById('payMethodPos');
  const cashBox = document.getElementById('cashPaymentBox');
  const posBox = document.getElementById('posPaymentBox');

  if (payMethodCash && payMethodPos) {
    payMethodCash.addEventListener('click', () => {
      metodoPagamento = 'cash';
      payMethodCash.classList.add('active');
      payMethodPos.classList.remove('active');
      if (cashBox) cashBox.classList.remove('hidden');
      if (posBox) posBox.classList.add('hidden');
    });

    payMethodPos.addEventListener('click', () => {
      metodoPagamento = 'pos';
      payMethodPos.classList.add('active');
      payMethodCash.classList.remove('active');
      if (cashBox) cashBox.classList.add('hidden');
      if (posBox) posBox.classList.remove('hidden');
    });
  }

  // Calcolo Resto
  const cashInput = document.getElementById('cashReceivedInput');
  if (cashInput) cashInput.addEventListener('input', calcolaResto);

  const quickBtns = document.querySelectorAll('.btn-cash-quick');
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const totale = calcolaTotaleCarrello();
      if (btn.id === 'cashExactBtn') {
        if (cashInput) cashInput.value = totale.toFixed(2);
      } else {
        const amt = parseFloat(btn.getAttribute('data-amount') || '0');
        if (cashInput) {
          const cur = parseFloat(cashInput.value) || 0;
          cashInput.value = (cur + amt).toFixed(2);
        }
      }
      calcolaResto();
    });
  });

  // Tasto Checkout
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', processCheckout);
}

function popolaSelettoreBrand() {
  const brandSelect = document.getElementById('brand-select');
  if (!brandSelect) return;

  const brands = Array.from(new Set(CATALOGO_HARDWARE.map(p => p.marca))).sort();
  brandSelect.innerHTML = `<option value="all">Tutti i Marchi (${brands.length})</option>` +
    brands.map(b => `<option value="${b}">${b}</option>`).join('');
}

// ------------------------------------------------------------------------------
// 4. RENDERING CATALOGO & FILTRAGGIO
// ------------------------------------------------------------------------------
function renderCatalogo() {
  const container = document.getElementById('products-grid');
  const resultsCount = document.getElementById('results-count');
  const emptyState = document.getElementById('empty-state');
  if (!container) return;

  let filtrati = CATALOGO_HARDWARE.filter(p => {
    const matchCat = (filtroCategoria === 'all' || p.categoria === filtroCategoria);
    const matchBrand = (filtroMarca === 'all' || p.marca === filtroMarca);
    const matchRicerca = !filtroRicerca || 
      p.nome.toLowerCase().includes(filtroRicerca) ||
      p.marca.toLowerCase().includes(filtroRicerca) ||
      p.specifiche.toLowerCase().includes(filtroRicerca) ||
      p.ean.includes(filtroRicerca);
    const matchPromo = !soloPromo || (p.prezzoListino && p.prezzoListino > p.prezzo);
    const matchStock = !soloInStock || (p.pezzi > 0);

    return matchCat && matchBrand && matchRicerca && matchPromo && matchStock;
  });

  // Ordinamento
  if (ordinamento === 'price-asc') {
    filtrati.sort((a, b) => a.prezzo - b.prezzo);
  } else if (ordinamento === 'price-desc') {
    filtrati.sort((a, b) => b.prezzo - a.prezzo);
  } else if (ordinamento === 'stock') {
    filtrati.sort((a, b) => b.pezzi - a.pezzi);
  } else if (ordinamento === 'discount') {
    filtrati.sort((a, b) => ((b.prezzoListino - b.prezzo) / b.prezzoListino) - ((a.prezzoListino - a.prezzo) / a.prezzoListino));
  }

  if (resultsCount) resultsCount.textContent = `${filtrati.length} articoli visualizzati`;

  if (filtrati.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = filtrati.map(p => {
    const sconto = p.prezzoListino && p.prezzoListino > p.prezzo ?
      Math.round(((p.prezzoListino - p.prezzo) / p.prezzoListino) * 100) : 0;

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-image-container" style="background: rgba(15, 23, 42, 0.6); display: flex; align-items: center; justify-content: center; font-size: 2.8rem; border-radius: 10px; cursor: pointer;" onclick="openProductModal(${p.id})">
          ${p.icona}
        </div>
        <div class="product-info" style="display: flex; flex-direction: column; gap: 0.25rem;">
          <span class="card-brand" style="font-size: 0.75rem; color: #38bdf8; font-weight: 600; text-transform: uppercase;">${p.marca} &bull; ${p.categoriaNome}</span>
          <h3 style="font-size: 0.95rem; font-weight: 700; color: #f8fafc; line-height: 1.3; cursor: pointer;" onclick="openProductModal(${p.id})">${p.nome}</h3>
          
          <div class="product-pricing" style="display: flex; align-items: baseline; gap: 0.5rem; margin: 0.25rem 0;">
            <span class="product-price" style="font-size: 1.15rem; font-weight: 800; color: #34d399;">€ ${p.prezzo.toFixed(2).replace('.', ',')}</span>
            ${sconto > 0 ? `<span style="font-size: 0.75rem; color: #f87171; text-decoration: line-through;">€ ${p.prezzoListino.toFixed(2).replace('.', ',')}</span>` : ''}
            <span class="product-stock" style="font-size: 0.75rem; color: #94a3b8; margin-left: auto;">Disp: ${p.pezzi} pz</span>
          </div>
        </div>

        <div class="card-actions" style="margin-top: auto; display: flex; gap: 0.4rem;">
          <button class="btn btn-outline" style="flex: 1; padding: 0.5rem; font-size: 0.78rem;" onclick="openProductModal(${p.id})">
            Scheda Tecnica
          </button>
          <button class="btn btn-primary" style="flex: 1.2; padding: 0.5rem; font-size: 0.78rem;" onclick="addToCart(${p.id})">
            🛒 Aggiungi
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function resetAllFilters() {
  filtroCategoria = 'all';
  filtroRicerca = '';
  filtroMarca = 'all';
  ordinamento = 'featured';
  soloPromo = false;
  soloInStock = false;

  const searchInput = document.getElementById('search-input');
  const brandSelect = document.getElementById('brand-select');
  const sortSelect = document.getElementById('sort-select');
  const promoToggle = document.getElementById('toggle-promo-only');
  const stockToggle = document.getElementById('toggle-instock-only');

  if (searchInput) searchInput.value = '';
  if (brandSelect) brandSelect.value = 'all';
  if (sortSelect) sortSelect.value = 'featured';
  if (promoToggle) promoToggle.checked = false;
  if (stockToggle) stockToggle.checked = false;

  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  const allPill = document.querySelector('.cat-pill[data-category="all"]');
  if (allPill) allPill.classList.add('active');

  renderCatalogo();
}

// ------------------------------------------------------------------------------
// 5. MODALE SCHEDA TECNICA
// ------------------------------------------------------------------------------
function openProductModal(id) {
  const prodotto = CATALOGO_HARDWARE.find(p => p.id === id);
  if (!prodotto) return;

  const modal = document.getElementById('product-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="display: flex; gap: 1.25rem; flex-wrap: wrap; align-items: center; margin-bottom: 1rem;">
      <div style="font-size: 3.5rem; background: rgba(15, 23, 42, 0.7); width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 12px;">
        ${prodotto.icona}
      </div>
      <div>
        <div style="font-size: 0.8rem; color: #38bdf8; font-weight: 700; text-transform: uppercase;">${prodotto.marca} &bull; ${prodotto.categoriaNome}</div>
        <h2 style="font-size: 1.25rem; color: #fff; margin: 0.2rem 0;">${prodotto.nome}</h2>
        <div style="font-size: 0.82rem; color: #94a3b8;">Codice EAN Barcode: <code>${prodotto.ean}</code></div>
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.5); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.85rem; color: #f8fafc; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.05em;">Specifiche Tecniche</h4>
      <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.5;">${prodotto.specifiche}</p>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;">
      <div>
        <div style="font-size: 0.75rem; color: #94a3b8;">Prezzo IVA Inclusa (22%):</div>
        <div style="font-size: 1.4rem; font-weight: 800; color: #34d399;">€ ${prodotto.prezzo.toFixed(2).replace('.', ',')}</div>
      </div>
      <button class="btn btn-primary" onclick="addToCart(${prodotto.id}); closeProductModal();" style="padding: 0.65rem 1.25rem; font-size: 0.9rem;">
        🛒 Aggiungi al Preventivo Cassa
      </button>
    </div>
  `;

  modal.classList.add('active');
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('active');
}

// ------------------------------------------------------------------------------
// 6. GESTIONE CASSA / PREVENTIVO
// ------------------------------------------------------------------------------
function addToCart(id) {
  const prodotto = CATALOGO_HARDWARE.find(p => p.id === id);
  if (!prodotto) return;

  const itemEsistente = carrello.find(i => i.id === id);
  if (itemEsistente) {
    itemEsistente.quantita += 1;
  } else {
    carrello.push({
      id: prodotto.id,
      nome: prodotto.nome,
      marca: prodotto.marca,
      prezzo: prodotto.prezzo,
      ean: prodotto.ean,
      quantita: 1
    });
  }

  updateCartUI();
  openCart();
}

function updateCartQty(id, delta) {
  const item = carrello.find(i => i.id === id);
  if (!item) return;

  item.quantita += delta;
  if (item.quantita <= 0) {
    carrello = carrello.filter(i => i.id !== id);
  }

  updateCartUI();
}

function removeFromCart(id) {
  carrello = carrello.filter(i => i.id !== id);
  updateCartUI();
}

function clearCart() {
  carrello = [];
  updateCartUI();
}

function calcolaTotaleCarrello() {
  return carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCountBadge');
  const emptyState = document.getElementById('cartEmptyState');
  const itemsList = document.getElementById('cartItemsList');
  const drawerFooter = document.getElementById('cartDrawerFooter');

  const totalePezzi = carrello.reduce((acc, i) => acc + i.quantita, 0);

  if (countBadge) {
    countBadge.textContent = totalePezzi;
    countBadge.style.display = totalePezzi > 0 ? 'inline-block' : 'none';
  }

  if (carrello.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (itemsList) itemsList.classList.add('hidden');
    if (drawerFooter) drawerFooter.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (itemsList) itemsList.classList.remove('hidden');
  if (drawerFooter) drawerFooter.classList.remove('hidden');

  if (itemsList) {
    itemsList.innerHTML = carrello.map(item => `
      <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); gap: 0.5rem;">
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 0.88rem; font-weight: 600; color: #f8fafc; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.nome}</div>
          <div style="font-size: 0.78rem; color: #94a3b8;">€ ${item.prezzo.toFixed(2).replace('.', ',')} cad.</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)" style="width: 28px; height: 28px; border-radius: 6px; background: rgba(255,255,255,0.1); color: #fff; border: none; font-size: 1rem; cursor: pointer;">-</button>
          <span style="font-weight: 700; font-size: 0.9rem; min-width: 20px; text-align: center;">${item.quantita}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)" style="width: 28px; height: 28px; border-radius: 6px; background: rgba(255,255,255,0.1); color: #fff; border: none; font-size: 1rem; cursor: pointer;">+</button>
          <button onclick="removeFromCart(${item.id})" title="Rimuovi" style="background: none; border: none; color: #f87171; font-size: 1.1rem; cursor: pointer; padding: 0 4px;">&times;</button>
        </div>
      </div>
    `).join('');
  }

  // Calcolo Totali
  const totale = calcolaTotaleCarrello();
  const imponibile = totale / 1.22;
  const iva = totale - imponibile;

  const totalItemsEl = document.getElementById('cartTotalItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  const ivaEl = document.getElementById('cartIva');
  const grandTotalEl = document.getElementById('cartGrandTotal');

  if (totalItemsEl) totalItemsEl.textContent = `${totalePezzi} pezzi`;
  if (subtotalEl) subtotalEl.textContent = `€ ${imponibile.toFixed(2).replace('.', ',')}`;
  if (ivaEl) ivaEl.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  if (grandTotalEl) grandTotalEl.textContent = `€ ${totale.toFixed(2).replace('.', ',')}`;

  calcolaResto();
}

function calcolaResto() {
  const cashInput = document.getElementById('cashReceivedInput');
  const changeVal = document.getElementById('changeDueValue');
  if (!cashInput || !changeVal) return;

  const totale = calcolaTotaleCarrello();
  const ricevuto = parseFloat(cashInput.value) || 0;
  const resto = Math.max(0, ricevuto - totale);
  changeVal.textContent = `€ ${resto.toFixed(2).replace('.', ',')}`;
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

// ------------------------------------------------------------------------------
// 7. SCONTRINO FISCALE & STAMPA PREVENTIVO
// ------------------------------------------------------------------------------
function processCheckout() {
  if (carrello.length === 0) {
    alert("Attenzione: la cassa è vuota. Aggiungi almeno un articolo prima di procedere.");
    return;
  }

  const totale = calcolaTotaleCarrello();
  const imponibile = totale / 1.22;
  const iva = totale - imponibile;

  const modal = document.getElementById('receiptModal');
  const content = document.getElementById('receiptModalContent') || document.getElementById('receiptPaper');

  const dataStr = new Date().toLocaleDateString('it-IT') + ' - ' + new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  const docId = 'PREV-TECH-' + Math.floor(100000 + Math.random() * 900000);

  // Stampa diretta finestra o riepilogo scontrino
  const conferma = confirm(`Confermi l'emissione del preventivo / scontrino di vendita per un totale di € ${totale.toFixed(2).replace('.', ',')}?`);
  if (conferma) {
    window.print();
    carrello = [];
    updateCartUI();
    closeCart();
  }
}

function aggiornaMetricheHeader() {
  const totalCountEl = document.getElementById('stat-total-count');
  const inStockEl = document.getElementById('stat-instock-count');
  const promoEl = document.getElementById('stat-promo-count');

  if (totalCountEl) totalCountEl.textContent = CATALOGO_HARDWARE.length;
  if (inStockEl) inStockEl.textContent = CATALOGO_HARDWARE.reduce((a, b) => a + b.pezzi, 0) + ' pz';
  if (promoEl) promoEl.textContent = CATALOGO_HARDWARE.filter(p => p.prezzoListino && p.prezzoListino > p.prezzo).length;
}
