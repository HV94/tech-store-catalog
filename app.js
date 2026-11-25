/**
 * ==============================================================================
 * TECHSTORE MANAGER - CATALOGO PRODOTTI INFORMATICA & CASSA POS
 * Sviluppato da Valentyn Haidukov (Perito Informatico - L. 68/99)
 * ==============================================================================
 * Codice sorgente JavaScript Vanilla pulito, lineare e trasparente.
 * Caratteristiche principali:
 * - Catalogo 20 referenze hardware IT con immagini fotografiche ad alta definizione
 * - Filtri per categoria, marca, offerte promozionali e disponibilità
 * - Scheda tecnica modale con specifiche complete e codice EAN
 * - Carrello cassa preventivi con calcolo IVA 4% e stampa scontrino (window.print)
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. DATASET REFERENZE CATALOGO HARDWARE IT (20 prodotti specialistici)
// ------------------------------------------------------------------------------
const CATALOGO_HARDWARE = [
  // Categoria: Notebook & PC
  {
    id: 1,
    nome: 'Apple MacBook Air 13" M2',
    categoria: 'laptop',
    categoriaNome: 'Notebook & PC',
    marca: 'Apple',
    prezzo: 749.00,
    prezzoListino: 899.00,
    pezzi: 12,
    ean: '194253131001',
    specifiche: 'Chip Apple M2 (8 CPU / 8 GPU), 8GB RAM Unificata, SSD 256GB, Display Liquid Retina 13.6", Autonomia 18h.',
    icona: '💻',
    immagine: 'images/prod-1.jpg'
  },
  {
    id: 2,
    nome: 'Lenovo ThinkPad T14 Gen 4',
    categoria: 'laptop',
    categoriaNome: 'Notebook & PC',
    marca: 'Lenovo',
    prezzo: 649.00,
    prezzoListino: 799.00,
    pezzi: 8,
    ean: '019680345678',
    specifiche: 'Intel Core i7-1355U, 16GB RAM DDR5, SSD 512GB NVMe PCIe 4.0, Display 14" IPS FHD+ 400 nits, Windows 11 Pro.',
    icona: '💻',
    immagine: 'images/prod-2.jpg'
  },
  {
    id: 3,
    nome: 'Dell XPS 13 Plus 9320',
    categoria: 'laptop',
    categoriaNome: 'Notebook & PC',
    marca: 'Dell',
    prezzo: 799.00,
    prezzoListino: 950.00,
    pezzi: 6,
    ean: '539718471209',
    specifiche: 'Intel Core i7-1360P, 32GB LPDDR5, SSD 1TB NVMe, Schermo 13.4" OLED 3.5K Touch, Chassis Alluminio CNC.',
    icona: '💻',
    immagine: 'images/prod-3.jpg'
  },
  {
    id: 4,
    nome: 'ASUS ROG Zephyrus G16 Gaming',
    categoria: 'laptop',
    categoriaNome: 'Notebook & PC',
    marca: 'ASUS',
    prezzo: 949.00,
    prezzoListino: 1199.00,
    pezzi: 5,
    ean: '471138709123',
    specifiche: 'Intel Core Ultra 9 185H, NVIDIA RTX 4070 8GB GDDR6, 32GB RAM DDR5, SSD 1TB, Display 16" OLED 240Hz ROG Nebula.',
    icona: '💻',
    immagine: 'images/prod-4.jpg'
  },

  // Categoria: Smartphone & Tablet
  {
    id: 5,
    nome: 'Apple iPhone 15 Pro 128GB',
    categoria: 'smartphone',
    categoriaNome: 'Smartphone & Tablet',
    marca: 'Apple',
    prezzo: 699.00,
    prezzoListino: 829.00,
    pezzi: 15,
    ean: '195949038291',
    specifiche: 'Chip A17 Pro (3nm), Design in Titanio Grado 5, Fotocamera principale 48MP con teleobiettivo 3x, Porta USB-C 3.0.',
    icona: '📱',
    immagine: 'images/prod-5.jpg'
  },
  {
    id: 6,
    nome: 'Samsung Galaxy S24 Ultra 256GB',
    categoria: 'smartphone',
    categoriaNome: 'Smartphone & Tablet',
    marca: 'Samsung',
    prezzo: 749.00,
    prezzoListino: 899.00,
    pezzi: 10,
    ean: '880609532187',
    specifiche: 'Snapdragon 8 Gen 3 for Galaxy, 12GB RAM, Display Dynamic AMOLED 2X 6.8" 120Hz antiriflesso, Fotocamera 200MP, S Pen.',
    icona: '📱',
    immagine: 'images/prod-6.jpg'
  },
  {
    id: 7,
    nome: 'Google Pixel 8 Pro 128GB',
    categoria: 'smartphone',
    categoriaNome: 'Smartphone & Tablet',
    marca: 'Google',
    prezzo: 499.00,
    prezzoListino: 599.00,
    pezzi: 8,
    ean: '084024470512',
    specifiche: 'Google Tensor G3 con chip Titan M2, Fotocamera tripla con zoom 30x, Display Super Actua 6.7" OLED 120Hz, 7 anni update.',
    icona: '📱',
    immagine: 'images/prod-7.jpg'
  },
  {
    id: 8,
    nome: 'Apple iPad Air 11" M2 Wi-Fi 128GB',
    categoria: 'smartphone',
    categoriaNome: 'Smartphone & Tablet',
    marca: 'Apple',
    prezzo: 399.00,
    prezzoListino: 469.00,
    pezzi: 14,
    ean: '195949392019',
    specifiche: 'Chip Apple M2, Display Liquid Retina 11" con True Tone e ampia gamma cromatica P3, supporto Apple Pencil Pro.',
    icona: '📲',
    immagine: 'images/prod-8.jpg'
  },

  // Categoria: Audio & Smart TV
  {
    id: 9,
    nome: 'Sony WH-1000XM5 Cuffie Wireless',
    categoria: 'audio',
    categoriaNome: 'Audio & Smart TV',
    marca: 'Sony',
    prezzo: 189.00,
    prezzoListino: 249.00,
    pezzi: 16,
    ean: '454873613256',
    specifiche: 'Cancellazione attiva del rumore leader del settore con doppio processore V1/QN1, 8 microfoni, Autonomia 30h, Audio Hi-Res LDAC.',
    icona: '🎧',
    immagine: 'images/prod-9.jpg'
  },
  {
    id: 10,
    nome: 'Apple AirPods Pro (2ª Gen) USB-C',
    categoria: 'audio',
    categoriaNome: 'Audio & Smart TV',
    marca: 'Apple',
    prezzo: 149.00,
    prezzoListino: 189.00,
    pezzi: 25,
    ean: '195949052518',
    specifiche: 'Chip Apple H2, Cancellazione attiva del rumore raddoppiata, Audio Spaziale personalizzato, Custodia MagSafe USB-C.',
    icona: '🎧',
    immagine: 'images/prod-10.jpg'
  },
  {
    id: 11,
    nome: 'LG OLED evo 55" Serie C3 Smart TV',
    categoria: 'audio',
    categoriaNome: 'Audio & Smart TV',
    marca: 'LG',
    prezzo: 699.00,
    prezzoListino: 899.00,
    pezzi: 4,
    ean: '880609172901',
    specifiche: 'Pannello OLED 4K con pixel autoilluminanti, Processore α9 Gen6 4K, 4 porte HDMI 2.1 (4K@120Hz, VRR, G-Sync), webOS 23.',
    icona: '📺',
    immagine: 'images/prod-11.jpg'
  },
  {
    id: 12,
    nome: 'Bose QuietComfort Ultra Cuffie',
    categoria: 'audio',
    categoriaNome: 'Audio & Smart TV',
    marca: 'Bose',
    prezzo: 219.00,
    prezzoListino: 279.00,
    pezzi: 7,
    ean: '017817843219',
    specifiche: 'Audio Immersivo Bose con tracciamento spaziale della testa, Modalità Quiet/Aware, 24 ore di autonomia, cuscinetti in pelle sintetica.',
    icona: '🎧',
    immagine: 'images/prod-12.jpg'
  },

  // Categoria: Componenti & Gaming
  {
    id: 13,
    nome: 'NVIDIA GeForce RTX 4070 Super 12GB',
    categoria: 'gaming',
    categoriaNome: 'Componenti & Gaming',
    marca: 'NVIDIA',
    prezzo: 389.00,
    prezzoListino: 449.00,
    pezzi: 6,
    ean: '083516800341',
    specifiche: 'Architettura Ada Lovelace, 12GB GDDR6X su bus 192-bit, DLSS 3.5 con Frame Generation, Ray Tracing di 3ª generazione.',
    icona: '🖥️',
    immagine: 'images/prod-13.jpg'
  },
  {
    id: 14,
    nome: 'AMD Ryzen 7 7800X3D Processore',
    categoria: 'gaming',
    categoriaNome: 'Componenti & Gaming',
    marca: 'AMD',
    prezzo: 239.00,
    prezzoListino: 299.00,
    pezzi: 11,
    ean: '073014331493',
    specifiche: '8 Core / 16 Thread su socket AM5, 96MB 3D V-Cache (104MB cache totale), Boost fino a 5.0 GHz, TDP 120W, PCIe 5.0.',
    icona: '🔲',
    immagine: 'images/prod-14.jpg'
  },
  {
    id: 15,
    nome: 'Samsung 990 PRO 2TB NVMe PCIe 4.0',
    categoria: 'gaming',
    categoriaNome: 'Componenti & Gaming',
    marca: 'Samsung',
    prezzo: 99.00,
    prezzoListino: 129.00,
    pezzi: 18,
    ean: '880609439210',
    specifiche: 'Lettura sequenziale fino a 7.450 MB/s, scrittura fino a 6.900 MB/s, fattore di forma M.2 2280, controller Pascal, garanzia 5 anni.',
    icona: '💽',
    immagine: 'images/prod-15.jpg'
  },
  {
    id: 16,
    nome: 'Corsair Vengeance RGB DDR5 32GB (2x16GB)',
    categoria: 'gaming',
    categoriaNome: 'Componenti & Gaming',
    marca: 'Corsair',
    prezzo: 69.00,
    prezzoListino: 89.00,
    pezzi: 14,
    ean: '084000669988',
    specifiche: 'Frequenza 6000MHz, Latenza CL30, Supporto profili Intel XMP 3.0 e AMD EXPO, Dissipatore in alluminio con barra LED RGB.',
    icona: '⚡',
    immagine: 'images/prod-16.jpg'
  },

  // Categoria: Monitor & Accessori
  {
    id: 17,
    nome: 'Dell UltraSharp 27" 4K USB-C Hub (U2723QE)',
    categoria: 'accessori',
    categoriaNome: 'Monitor & Accessori',
    marca: 'Dell',
    prezzo: 299.00,
    prezzoListino: 379.00,
    pezzi: 5,
    ean: '539718465689',
    specifiche: 'Pannello IPS Black con contrasto 2000:1, Risoluzione 4K UHD (3840x2160), 98% DCI-P3, Hub USB-C con Power Delivery 90W e porta RJ45.',
    icona: '🖥️',
    immagine: 'images/prod-17.jpg'
  },
  {
    id: 18,
    nome: 'Logitech MX Master 3S Mouse Wireless',
    categoria: 'accessori',
    categoriaNome: 'Monitor & Accessori',
    marca: 'Logitech',
    prezzo: 59.00,
    prezzoListino: 79.00,
    pezzi: 22,
    ean: '509920610373',
    specifiche: 'Sensore ottico Darkfield 8000 DPI utilizzabile anche su vetro, Scorrimento elettromagnetico MagSpeed, Clic silenziosi (-90% rumore).',
    icona: '🖱️',
    immagine: 'images/prod-18.jpg'
  },
  {
    id: 19,
    nome: 'Keychron K2 Pro Tastiera Meccanica Wireless',
    categoria: 'accessori',
    categoriaNome: 'Monitor & Accessori',
    marca: 'Keychron',
    prezzo: 69.00,
    prezzoListino: 89.00,
    pezzi: 9,
    ean: '489524882194',
    specifiche: 'Layout 75%, Switch Meccanici Hot-swap Keychron K Pro Red, Connessione Bluetooth 5.1 e cavo Type-C, Compatibile Mac & Windows.',
    icona: '⌨️',
    immagine: 'images/prod-19.jpg'
  },
  {
    id: 20,
    nome: 'CalDigit TS4 Docking Station Thunderbolt 4',
    categoria: 'accessori',
    categoriaNome: 'Monitor & Accessori',
    marca: 'CalDigit',
    prezzo: 199.00,
    prezzoListino: 249.00,
    pezzi: 4,
    ean: '085002258901',
    specifiche: '18 Porte di espansione: 3x Thunderbolt 4, 5x USB-A 3.2, 3x USB-C 10Gbps, DisplayPort 1.4, Ethernet 2.5GbE, Power Delivery fino a 98W.',
    icona: '🔌',
    immagine: 'images/prod-20.jpg'
  }
];

// ------------------------------------------------------------------------------
// 2. STATO APPLICAZIONE (Filtri & Carrello Cassa)
// ------------------------------------------------------------------------------
let carrello = [];
let metodoPagamento = 'cash';
let filtroCategoria = 'all';
let filtroRicerca = '';
let filtroMarca = 'all';
let ordinamento = 'featured';
let soloPromo = false;
let soloInStock = false;

// ------------------------------------------------------------------------------
// 3. INIZIALIZZAZIONE & EVENT LISTENERS
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  inizializzaFiltri();
  inizializzaCarrello();
  aggiornaStatistiche();
  renderCatalogo();
});

function inizializzaFiltri() {
  // Categoria Buttons
  const catButtons = document.querySelectorAll('.cat-btn, [data-category]');
  catButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      catButtons.forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      filtroCategoria = target.getAttribute('data-category') || 'all';
      renderCatalogo();
    });
  });

  // Ricerca testuale rapida
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filtroRicerca = e.target.value.trim().toLowerCase();
      renderCatalogo();
    });
  }

  // Filtro Marca
  const brandSelect = document.getElementById('brand-select');
  if (brandSelect) {
    // Popola marche univoche
    const marche = [...new Set(CATALOGO_HARDWARE.map(p => p.marca))].sort();
    marche.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = m;
      brandSelect.appendChild(opt);
    });

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

  // Toggle Solo Promo
  const promoToggle = document.getElementById('toggle-promo-only');
  if (promoToggle) {
    promoToggle.addEventListener('change', (e) => {
      soloPromo = e.target.checked;
      renderCatalogo();
    });
  }

  // Toggle Solo In Stock
  const stockToggle = document.getElementById('toggle-instock-only');
  if (stockToggle) {
    stockToggle.addEventListener('change', (e) => {
      soloInStock = e.target.checked;
      renderCatalogo();
    });
  }

  // Chiudi modale con tasto ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
    }
  });

  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('product-modal');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

function inizializzaCarrello() {
  const openCartBtn = document.getElementById('btn-open-cart');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const overlay = document.getElementById('cartOverlay');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
  if (checkoutBtn) checkoutBtn.addEventListener('click', completaVendita);

  // Metodi di Pagamento Cassa (Contanti / POS)
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

  // Calcolo Resto Contanti in Tempo Reale
  const cashInput = document.getElementById('cashReceivedInput');
  if (cashInput) {
    cashInput.addEventListener('input', calcolaResto);
  }

  const cashExactBtn = document.getElementById('cashExactBtn');
  if (cashExactBtn) {
    cashExactBtn.addEventListener('click', () => {
      const totaleLordo = carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
      if (cashInput) {
        cashInput.value = totaleLordo.toFixed(2);
        calcolaResto();
      }
    });
  }

  const quickBtns = document.querySelectorAll('.btn-cash-quick[data-amount]');
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const extra = parseFloat(btn.getAttribute('data-amount')) || 0;
      const current = parseFloat(cashInput?.value) || 0;
      if (cashInput) {
        cashInput.value = (current + extra).toFixed(2);
        calcolaResto();
      }
    });
  });

  // Simulazione Contactless POS
  const posSimulateBtn = document.getElementById('posSimulateBtn');
  const posStatusText = document.getElementById('posStatusText');
  if (posSimulateBtn && posStatusText) {
    posSimulateBtn.addEventListener('click', () => {
      posStatusText.textContent = 'Transazione POS Approvata! Codice Auth #94821';
      posStatusText.style.color = '#34d399';
    });
  }

  // Chiusura e Stampa Scontrino
  const closeReceiptBtn = document.getElementById('closeReceiptBtn');
  const receiptOverlay = document.getElementById('receiptOverlay');
  const printReceiptBtn = document.getElementById('printReceiptBtn');
  const downloadPdfReceiptBtn = document.getElementById('downloadPdfReceiptBtn');

  if (closeReceiptBtn) closeReceiptBtn.addEventListener('click', chiudiScontrino);
  const closeReceiptCornerBtn = document.getElementById('closeReceiptCornerBtn');
  if (closeReceiptCornerBtn) closeReceiptCornerBtn.addEventListener('click', chiudiScontrino);
  if (receiptOverlay) receiptOverlay.addEventListener('click', chiudiScontrino);
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener('click', () => window.print());
  }
  if (downloadPdfReceiptBtn) {
    downloadPdfReceiptBtn.addEventListener('click', () => window.print());
  }
}

// ------------------------------------------------------------------------------
// 4. RENDERING CATALOGO PRODOTTI
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

  if (resultsCount) {
    resultsCount.textContent = `${filtrati.length} articoli visualizzati`;
  }

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
        <div class="product-image-container" style="position: relative; width: 100%; height: 180px; border-radius: 12px; overflow: hidden; background: #111827; display: flex; align-items: center; justify-content: center; padding: 12px; cursor: pointer; border: 1px solid rgba(255,255,255,0.08);" onclick="openProductModal(${p.id})">
          <img src="${p.immagine}" alt="${p.nome}" loading="lazy" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-size: 2.8rem; background: #ffffff; color: #0f172a;">${p.icona}</div>
          <span style="position: absolute; top: 8px; right: 8px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(4px); padding: 3px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);">${p.icona} ${p.marca}</span>
        </div>
        <div class="product-info" style="display: flex; flex-direction: column; gap: 0.25rem;">
          <span class="card-brand" style="font-size: 0.75rem; color: #38bdf8; font-weight: 600; text-transform: uppercase;">${p.categoriaNome}</span>
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

  const catButtons = document.querySelectorAll('.cat-btn, [data-category]');
  catButtons.forEach(b => {
    b.classList.remove('active');
    if (b.getAttribute('data-category') === 'all') b.classList.add('active');
  });

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
      <div style="width: 130px; height: 130px; border-radius: 12px; overflow: hidden; background: #111827; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; padding: 10px;">
        <img src="${prodotto.immagine}" alt="${prodotto.nome}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
      </div>
      <div style="flex: 1; min-width: 200px;">
        <div style="font-size: 0.8rem; color: #38bdf8; font-weight: 700; text-transform: uppercase;">${prodotto.icona} ${prodotto.marca} &bull; ${prodotto.categoriaNome}</div>
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
        <div style="font-size: 0.75rem; color: #94a3b8;">Prezzo al pubblico (IVA 4% incl.):</div>
        <div style="font-size: 1.5rem; font-weight: 800; color: #34d399;">€ ${prodotto.prezzo.toFixed(2).replace('.', ',')}</div>
      </div>
      <button class="btn btn-primary" style="padding: 0.65rem 1.25rem; font-size: 0.9rem;" onclick="addToCart(${prodotto.id}); closeModal();">
        🛒 Aggiungi al Preventivo
      </button>
    </div>
  `;

  modal.classList.add('open');
}

function closeModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('open');
}

// ------------------------------------------------------------------------------
// 6. GESTIONE CARRELLO & PREVENTIVO CASSA POS
// ------------------------------------------------------------------------------
function addToCart(id) {
  const prodotto = CATALOGO_HARDWARE.find(p => p.id === id);
  if (!prodotto) return;

  const itemEsistente = carrello.find(item => item.id === id);
  if (itemEsistente) {
    if (itemEsistente.quantita < prodotto.pezzi) {
      itemEsistente.quantita++;
    } else {
      alert(`Attenzione: disponibili solo ${prodotto.pezzi} unità a magazzino per questo articolo.`);
      return;
    }
  } else {
    carrello.push({
      id: prodotto.id,
      nome: prodotto.nome,
      marca: prodotto.marca,
      prezzo: prodotto.prezzo,
      quantita: 1
    });
  }

  aggiornaCarrelloUI();
  openCart();
}

function updateCartQuantity(id, delta) {
  const item = carrello.find(i => i.id === id);
  if (!item) return;

  const prodotto = CATALOGO_HARDWARE.find(p => p.id === id);
  const maxStock = prodotto ? prodotto.pezzi : 99;

  item.quantita += delta;
  if (item.quantita > maxStock) {
    item.quantita = maxStock;
    alert(`Raggiunta quantità massima disponibile a magazzino (${maxStock} pz).`);
  }

  if (item.quantita <= 0) {
    carrello = carrello.filter(i => i.id !== id);
  }

  aggiornaCarrelloUI();
}

function removeFromCart(id) {
  carrello = carrello.filter(i => i.id !== id);
  aggiornaCarrelloUI();
}

function clearCart() {
  if (carrello.length === 0) return;
  if (confirm('Sei sicuro di voler svuotare il carrello preventivi?')) {
    carrello = [];
    aggiornaCarrelloUI();
  }
}

function calcolaResto() {
  const cashInput = document.getElementById('cashReceivedInput');
  const changeDueValue = document.getElementById('changeDueValue');
  if (!changeDueValue) return;

  const totaleLordo = carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
  const ricevuto = cashInput ? (parseFloat(cashInput.value) || 0) : 0;
  const resto = Math.max(0, ricevuto - totaleLordo);
  changeDueValue.textContent = `€ ${resto.toFixed(2).replace('.', ',')}`;
}

function aggiornaCarrelloUI() {
  const countBadge = document.getElementById('cartCountBadge');
  const emptyState = document.getElementById('cartEmptyState');
  const itemsList = document.getElementById('cartItemsList');
  const footer = document.getElementById('cartDrawerFooter');

  const subtotalEl = document.getElementById('cartSubtotal');
  const ivaEl = document.getElementById('cartIva');
  const totalItemsEl = document.getElementById('cartTotalItems');
  const grandTotalEl = document.getElementById('cartGrandTotal');

  const totalePezzi = carrello.reduce((acc, i) => acc + i.quantita, 0);
  const totaleLordo = carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
  const imponibile = totaleLordo / 1.04;
  const iva = totaleLordo - imponibile;

  if (countBadge) {
    if (totalePezzi > 0) {
      countBadge.style.display = 'inline-block';
      countBadge.textContent = totalePezzi;
    } else {
      countBadge.style.display = 'none';
    }
  }

  if (carrello.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (itemsList) {
      itemsList.classList.add('hidden');
      itemsList.innerHTML = '';
    }
    if (footer) footer.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (itemsList) {
    itemsList.classList.remove('hidden');
    itemsList.innerHTML = carrello.map(item => `
      <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); gap: 0.5rem;">
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 0.88rem; font-weight: 600; color: #f8fafc; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.nome}</div>
          <div style="font-size: 0.78rem; color: #94a3b8;">€ ${item.prezzo.toFixed(2).replace('.', ',')} cad.</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)" style="width: 26px; height: 26px; border-radius: 6px; background: rgba(255,255,255,0.1); color: #fff; border: none; font-size: 0.9rem; cursor: pointer;">-</button>
          <span style="font-weight: 700; font-size: 0.85rem; min-width: 18px; text-align: center;">${item.quantita}</span>
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)" style="width: 26px; height: 26px; border-radius: 6px; background: rgba(255,255,255,0.1); color: #fff; border: none; font-size: 0.9rem; cursor: pointer;">+</button>
          <button onclick="removeFromCart(${item.id})" title="Rimuovi" style="background: none; border: none; color: #f87171; font-size: 1.1rem; cursor: pointer; padding: 0 4px;">&times;</button>
        </div>
      </div>
    `).join('');
  }

  if (footer) footer.classList.remove('hidden');

  if (totalItemsEl) totalItemsEl.textContent = `${totalePezzi} pezzi`;
  if (subtotalEl) subtotalEl.textContent = `€ ${imponibile.toFixed(2).replace('.', ',')}`;
  if (ivaEl) ivaEl.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  if (grandTotalEl) grandTotalEl.textContent = `€ ${totaleLordo.toFixed(2).replace('.', ',')}`;

  calcolaResto();
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

function completaVendita() {
  if (carrello.length === 0) {
    alert('Il carrello cassa è vuoto. Aggiungi almeno un articolo prima di completare la vendita.');
    return;
  }

  const totaleLordo = carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
  const imponibile = totaleLordo / 1.04;
  const iva = totaleLordo - imponibile;

  const cashInput = document.getElementById('cashReceivedInput');
  const ricevuto = metodoPagamento === 'cash' ? (parseFloat(cashInput?.value) || totaleLordo) : totaleLordo;
  const resto = Math.max(0, ricevuto - totaleLordo);

  // 1. Scala le quantità vendute dal magazzino
  carrello.forEach(cartItem => {
    const prod = CATALOGO_HARDWARE.find(p => p.id === cartItem.id);
    if (prod) {
      prod.pezzi = Math.max(0, prod.pezzi - cartItem.quantita);
    }
  });

  // 2. Popola data, ora e codice documento nello scontrino
  const adesso = new Date();
  const dataStr = adesso.toLocaleDateString('it-IT') + ' - ' + adesso.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  const docIdStr = 'DOC #TS-' + Math.floor(10000 + Math.random() * 90000);

  const receiptDateEl = document.getElementById('receiptDate');
  const receiptDocIdEl = document.getElementById('receiptDocId');
  if (receiptDateEl) receiptDateEl.textContent = dataStr;
  if (receiptDocIdEl) receiptDocIdEl.textContent = docIdStr;

  // 3. Popola le righe dei prodotti nello scontrino
  const itemsContainer = document.getElementById('receiptItemsContainer');
  if (itemsContainer) {
    itemsContainer.innerHTML = carrello.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.3rem;">
        <span style="font-weight: 600;">${item.quantita}x ${item.nome.substring(0, 24)}</span>
        <span>€ ${(item.prezzo * item.quantita).toFixed(2).replace('.', ',')}</span>
      </div>
    `).join('');
  }

  // 4. Popola i totali e il metodo di pagamento
  const recSubtotal = document.getElementById('receiptSubtotalAmount');
  const recIva = document.getElementById('receiptIvaAmount');
  const recTotal = document.getElementById('receiptTotalAmount');
  const recPayType = document.getElementById('receiptPaymentType');
  const recCashRow = document.getElementById('receiptCashRow');
  const recCashReceived = document.getElementById('receiptCashReceived');
  const recChangeRow = document.getElementById('receiptChangeRow');
  const recChangeAmount = document.getElementById('receiptChangeAmount');
  const recPosRow = document.getElementById('receiptPosRow');

  if (recSubtotal) recSubtotal.textContent = `€ ${imponibile.toFixed(2).replace('.', ',')}`;
  if (recIva) recIva.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  if (recTotal) recTotal.textContent = `€ ${totaleLordo.toFixed(2).replace('.', ',')}`;
  if (recPayType) recPayType.textContent = metodoPagamento === 'cash' ? 'CONTANTI' : 'CARTA / POS';

  if (metodoPagamento === 'cash') {
    if (recCashRow) recCashRow.style.display = 'flex';
    if (recChangeRow) recChangeRow.style.display = 'flex';
    if (recCashReceived) recCashReceived.textContent = `€ ${ricevuto.toFixed(2).replace('.', ',')}`;
    if (recChangeAmount) recChangeAmount.textContent = `€ ${resto.toFixed(2).replace('.', ',')}`;
    if (recPosRow) recPosRow.style.display = 'none';
  } else {
    if (recCashRow) recCashRow.style.display = 'none';
    if (recChangeRow) recChangeRow.style.display = 'none';
    if (recPosRow) recPosRow.style.display = 'flex';
  }

  // 5. Chiudi carrello drawer e apri modale scontrino
  closeCart();
  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) receiptModal.classList.remove('hidden');
}

function chiudiScontrino() {
  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) receiptModal.classList.add('hidden');

  // Svuota la cassa per la prossima vendita
  carrello = [];
  const cashInput = document.getElementById('cashReceivedInput');
  if (cashInput) cashInput.value = '';
  const changeDueValue = document.getElementById('changeDueValue');
  if (changeDueValue) changeDueValue.textContent = '€ 0.00';

  aggiornaCarrelloUI();
  aggiornaStatistiche();
  renderCatalogo();
}

function aggiornaStatistiche() {
  const totalCountEl = document.getElementById('stat-total-count');
  const inStockCountEl = document.getElementById('stat-instock-count');
  const promoCountEl = document.getElementById('stat-promo-count');

  const total = CATALOGO_HARDWARE.length;
  const inStock = CATALOGO_HARDWARE.filter(p => p.pezzi > 0).length;
  const inPromo = CATALOGO_HARDWARE.filter(p => p.prezzoListino && p.prezzoListino > p.prezzo).length;

  if (totalCountEl) totalCountEl.textContent = total;
  if (inStockCountEl) inStockCountEl.textContent = inStock;
  if (promoCountEl) promoCountEl.textContent = inPromo;
}
