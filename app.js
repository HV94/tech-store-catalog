/**
 * TechStore Manager - Catalogo & POS Preventivi
 * Sviluppato da Valentyn Haidukov (Perito Informatico - Categorie Protette L. 68/99)
 */

// Catalogo Prodotti Elettronica Retail
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Lenovo LOQ 15IRH9 Gaming",
    brand: "Lenovo",
    category: "laptop",
    modelCode: "83GS002MIX",
    barcode: "8033221948210",
    shelf: "Corsia A2 - Scaffale 3",
    originalPrice: 1199.99,
    price: 949.99,
    stock: 5,
    isPromo: true,
    specs: ["Intel Core i7-13650HX", "16GB RAM DDR5", "512GB SSD NVMe", "RTX 4050 6GB", "15.6\" FHD 144Hz"],
    fullSpecs: {
      "Processore": "Intel Core i7-13650HX (14 core, fino a 4.9 GHz)",
      "RAM": "16 GB DDR5 4800MHz (Espandibile fino a 32GB)",
      "Archiviazione": "512 GB SSD M.2 PCIe 4.0 NVMe",
      "Scheda Grafica": "NVIDIA GeForce RTX 4050 6GB GDDR6",
      "Display": "15.6\" FHD (1920x1080) IPS 144Hz, G-SYNC",
      "Connettività": "Wi-Fi 6 (802.11ax), Bluetooth 5.1, RJ-45 Gigabit",
      "Porte": "3x USB-A 3.2, 1x USB-C con Power Delivery, 1x HDMI 2.1",
      "Garanzia": "24 Mesi Italia Ufficiale Lenovo"
    },
    pitch: "Ideale per studenti universitari, grafici e appassionati di gaming che cercano massime prestazioni con ottimo raffreddamento e scheda grafica dedicata di ultima generazione.",
    icon: "laptop"
  },
  {
    id: 2,
    name: "Apple MacBook Air 13\" M3",
    brand: "Apple",
    category: "laptop",
    modelCode: "MXCR3T/A",
    barcode: "8012345678901",
    shelf: "Vetrina Apple - Reparto 1",
    originalPrice: 1349.00,
    price: 1199.00,
    stock: 8,
    isPromo: true,
    specs: ["Chip Apple M3 8-core", "16GB Memoria Unificata", "512GB SSD", "Liquid Retina 13.6\"", "Autonomia 18h"],
    fullSpecs: {
      "Processore": "Chip Apple M3 con CPU 8-core e GPU 10-core",
      "RAM": "16 GB Memoria Unificata",
      "Archiviazione": "512 GB SSD ultraveloce",
      "Display": "Liquid Retina 13.6\" (2560x1664) con True Tone",
      "Audio": "4 altoparlanti con Audio Spaziale Dolby Atmos",
      "Connettività": "Wi-Fi 6E, Bluetooth 5.3, MagSafe 3",
      "Batteria": "Fino a 18 ore di riproduzione video",
      "Garanzia": "24 Mesi Ufficiale Apple Care compatibile"
    },
    pitch: "Perfetto per professionisti e mobilità. Peso piuma (1,24 kg), scocca interamente in alluminio riciclato e autonomia per lavorare due giorni interi senza caricabatterie.",
    icon: "laptop"
  },
  {
    id: 3,
    name: "ASUS Vivobook 15 Oled",
    brand: "ASUS",
    category: "laptop",
    modelCode: "F1505VA-MA241W",
    barcode: "4711387224190",
    shelf: "Corsia A1 - Scaffale 1",
    originalPrice: 799.00,
    price: 649.99,
    stock: 12,
    isPromo: true,
    specs: ["Intel Core i5-13500H", "16GB RAM", "512GB SSD", "15.6\" OLED 2.8K 120Hz", "Windows 11 Home"],
    fullSpecs: {
      "Processore": "Intel Core i5-13500H (12 core, 16 thread)",
      "RAM": "16 GB DDR4 Dual-Channel",
      "Archiviazione": "512 GB SSD NVMe PCIe 3.0",
      "Display": "15.6\" OLED 2.8K (2880x1620) 120Hz, 100% DCI-P3",
      "Tastiera": "Retroilluminata con tastierino numerico ErgoSense",
      "Connettività": "Wi-Fi 6E, Bluetooth 5.2, USB-C, HDMI",
      "Trattamento": "Protezione antibatterica ASUS Antimicrobial Guard",
      "Garanzia": "24 Mesi Ufficiale ASUS Italia"
    },
    pitch: "Il miglior schermo nella sua fascia di prezzo grazie al pannello OLED dai neri assoluti. Scelta consigliata per smart working, fogli di calcolo e streaming serale.",
    icon: "laptop"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    category: "smartphone",
    modelCode: "SM-S928BZTQITV",
    barcode: "8806095315891",
    shelf: "Vetrina Telefonia - Reparto 2",
    originalPrice: 1499.00,
    price: 1249.00,
    stock: 6,
    isPromo: true,
    specs: ["Snapdragon 8 Gen 3", "12GB RAM / 256GB", "Fotocamera 200MP", "Galaxy AI integrata", "S-Pen Inclusa"],
    fullSpecs: {
      "Processore": "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)",
      "Memoria": "12 GB LPDDR5X + 256 GB UFS 4.0",
      "Fotocamere": "Quad Cam 200 MP + 50 MP (Periscopio 5x) + 12 MP Ultrawide + 10 MP Tele",
      "Display": "6.8\" Dynamic AMOLED 2X QHD+ 120Hz, Gorilla Armor antiriflesso",
      "Batteria": "5000 mAh con Ricarica rapida 45W e Wireless PowerShare",
      "Materiali": "Telaio in Titanio grado aerospaziale, Certificato IP68",
      "Intelligenza Artificiale": "Traduzione chiamate live, Cerchia e Cerca con Google",
      "Garanzia": "24 Mesi Italia + 7 Anni di aggiornamenti Android garantiti"
    },
    pitch: "Il re indiscusso degli smartphone Android. La fotocamera da 200MP e le funzioni Galaxy AI rendono immediata la gestione di documenti, traduzioni e foto professionali.",
    icon: "phone"
  },
  {
    id: 5,
    name: "Apple iPhone 15 Pro",
    brand: "Apple",
    category: "smartphone",
    modelCode: "MTV13QL/A",
    barcode: "8019988776655",
    shelf: "Vetrina Apple - Reparto 2",
    originalPrice: 1239.00,
    price: 1089.00,
    stock: 9,
    isPromo: true,
    specs: ["Chip A17 Pro a 3nm", "128GB Memoria", "Fotocamera 48MP Pro", "Tasto Azione", "Porta USB-C 3"],
    fullSpecs: {
      "Processore": "Chip A17 Pro con GPU 6-core e ray tracing",
      "Memoria Interna": "128 GB NVMe",
      "Display": "Super Retina XDR OLED 6.1\" ProMotion 120Hz Always-On",
      "Fotocamera": "Sensore principale 48MP con stabilizzatore su sensore di 2ª gen",
      "Porta Dati": "USB-C con velocità di trasferimento USB 3 (fino a 10Gb/s)",
      "Resistenza": "Ceramic Shield frontale, retro in vetro opaco, telaio in Titanio",
      "Garanzia": "24 Mesi Ufficiale"
    },
    pitch: "Leggerissimo grazie alla scocca in titanio, perfetto per chi vuole il massimo della potenza e durata nel tempo con le dimensioni compatte da 6.1 pollici.",
    icon: "phone"
  },
  {
    id: 6,
    name: "Xiaomi Redmi Note 13 Pro 5G",
    brand: "Xiaomi",
    category: "smartphone",
    modelCode: "MZB0FXGEU",
    barcode: "6941812758129",
    shelf: "Corsia B1 - Telefonia",
    originalPrice: 399.90,
    price: 299.90,
    stock: 14,
    isPromo: true,
    specs: ["Snapdragon 7s Gen 2", "8GB RAM / 256GB", "Fotocamera 200MP OIS", "Display AMOLED 120Hz 1.5K", "Ricarica 67W"],
    fullSpecs: {
      "Processore": "Snapdragon 7s Gen 2 (4nm octa-core)",
      "RAM e Storage": "8 GB LPDDR4X + 256 GB UFS 2.2",
      "Fotocamera": "200 MP con stabilizzazione ottica (OIS) f/1.65",
      "Display": "6.67\" AMOLED CrystalRes 1.5K 120Hz (Luminosità picco 1800 nit)",
      "Batteria": "5100 mAh con Ricarica Turbo 67W (caricabatterie incluso)",
      "Sicurezza": "Sensore impronte sotto lo schermo con monitoraggio battito cardiaco",
      "Garanzia": "24 Mesi Italia"
    },
    pitch: "Best-buy sotto i 300 euro. Fotocamera da 200 megapixel con stabilizzazione ottica, batteria generosa e caricabatterie rapido già incluso nella confezione.",
    icon: "phone"
  },
  {
    id: 7,
    name: "Sony WH-1000XM5 Cuffie Wireless",
    brand: "Sony",
    category: "audio",
    modelCode: "WH1000XM5B.CE7",
    barcode: "4548736132580",
    shelf: "Reparto Audio - Scaffale 1",
    originalPrice: 419.00,
    price: 329.00,
    stock: 7,
    isPromo: true,
    specs: ["ANC Leader Mondiale", "Autonomia 30 Ore", "Hi-Res Audio LDAC", "8 Microfoni con AI", "Custodia Inclusa"],
    fullSpecs: {
      "Driver": "30 mm con cupola in fibra di carbonio ad alta rigidità",
      "Cancellazione Rumore": "Processore V1 integrato + Processore HD QN1 con 8 microfoni",
      "Connettività": "Bluetooth 5.2 multipoint (collegamento a due dispositivi contemporaneamente)",
      "Autonomia": "Fino a 30 ore con ANC attivo, ricarica rapida 3 min = 3 ore di ascolto",
      "Controlli": "Pannello touch intuitivo sul padiglione destro",
      "Garanzia": "24 Mesi Ufficiale Sony"
    },
    pitch: "Il punto di riferimento per isolarsi durante i viaggi o in ufficio. Comfort insuperabile e qualità audio ad altissima risoluzione per musica e call di lavoro.",
    icon: "audio"
  },
  {
    id: 8,
    name: "Samsung Crystal UHD 55\" 4K Smart TV",
    brand: "Samsung",
    category: "audio",
    modelCode: "UE55CU7190UXZT",
    barcode: "8806094918758",
    shelf: "Area Grandi Schermi TV - Corsia C",
    originalPrice: 499.00,
    price: 379.00,
    stock: 4,
    isPromo: false,
    specs: ["55 Pollici 4K UHD", "Processore Crystal 4K", "HDR10+", "Tizen OS Smart TV", "Gaming Hub Xbox Integrato"],
    fullSpecs: {
      "Schermo": "55\" (138 cm) Risoluzione 4K UHD (3840 x 2160)",
      "Elaborazione Immagine": "Processore Crystal 4K con PurColor e Contrast Enhancer",
      "Smart TV": "Sistema Operativo Tizen con Netflix, Prime, Disney+, DAZN e RaiPlay",
      "Audio": "20W RMS con Object Tracking Sound Lite (OTS Lite) e Q-Symphony",
      "Gaming": "Xbox Cloud Gaming integrato senza console fisica necessaria",
      "Connessioni": "3x HDMI con eARC, 1x USB, Wi-Fi 5, Bluetooth 5.2, DVB-T2/C/S2",
      "Garanzia": "24 Mesi Italia"
    },
    pitch: "La Smart TV da 55 pollici con il miglior rapporto qualità/prezzo per il soggiorno. Semplice da usare e pronta per lo streaming e il gaming anche senza console.",
    icon: "tv"
  },
  {
    id: 9,
    name: "Apple AirPods Pro (2ª Generazione)",
    brand: "Apple",
    category: "audio",
    modelCode: "MTJV3ZM/A",
    barcode: "8024567812901",
    shelf: "Vetrina Apple - Accessori",
    originalPrice: 279.00,
    price: 239.00,
    stock: 11,
    isPromo: false,
    specs: ["Chip H2", "Cancellazione Attiva Rumore", "Custodia USB-C MagSafe", "Audio Spaziale Personalizzato"],
    fullSpecs: {
      "Processore": "Chip Apple H2 per audio computazionale avanzato",
      "Cancellazione Rumore": "Fino a 2 volte più efficace rispetto alla 1ª generazione",
      "Trasparenza": "Modalità Trasparenza adattiva con rilevamento conversazione",
      "Autonomia": "Fino a 6 ore di ascolto con singola carica (fino a 30 ore con custodia)",
      "Resistenza": "Resistenti a polvere, sudore e acqua (IP54)",
      "Garanzia": "24 Mesi Ufficiale Apple"
    },
    pitch: "Accessorio fondamentale per gli utenti iPhone. La modalità trasparenza consente di parlare con i colleghi senza mai togliere gli auricolari dalle orecchie.",
    icon: "audio"
  },
  {
    id: 10,
    name: "Logitech MX Master 3S Wireless",
    brand: "Logitech",
    category: "accessori",
    modelCode: "910-006559",
    barcode: "5099206103726",
    shelf: "Corsia D - Periferiche PC",
    originalPrice: 134.99,
    price: 99.90,
    stock: 15,
    isPromo: true,
    specs: ["Sensore 8K DPI Darkfield", "Scorrimento MagSpeed 1000 righe/s", "Click Silenziosi al 90%", "Flow Multi-Dispositivo"],
    fullSpecs: {
      "Sensore": "Darkfield ad alta precisione fino a 8.000 DPI (funziona anche sul vetro)",
      "Scorrimento": "Rotella elettromagnetica MagSpeed in acciaio lavorato",
      "Ergonomia": "Design sagomato per la postura del polso con supporto per il pollice",
      "Connessioni": "Bluetooth Low Energy + Ricevitore USB Logi Bolt",
      "Batteria": "Ricaricabile USB-C con autonomia fino a 70 giorni",
      "Garanzia": "24 Mesi Italia"
    },
    pitch: "Il mouse più amato da sviluppatori, contabili e professionisti dell'ufficio. Consente di lavorare su 3 computer contemporaneamente e non fa rumore di click.",
    icon: "mouse"
  },
  {
    id: 11,
    name: "Samsung SSD Portatile T7 Shield 1TB",
    brand: "Samsung",
    category: "accessori",
    modelCode: "MU-PE1T0S/EU",
    barcode: "8806094000859",
    shelf: "Corsia D - Storage & Backup",
    originalPrice: 149.90,
    price: 109.90,
    stock: 10,
    isPromo: true,
    specs: ["Capacità 1TB", "Velocità 1.050 MB/s", "Resistente a cadute 3m", "Certificato IP65 Acqua & Polvere", "USB 3.2 Gen 2"],
    fullSpecs: {
      "Capacità": "1.000 GB (1 TB)",
      "Interfaccia": "USB 3.2 Gen 2 (10 Gbps) compatibile con PC, Mac, Android e console",
      "Velocità Lettura/Scrittura": "Fino a 1.050 MB/s in lettura e 1.000 MB/s in scrittura",
      "Sicurezza": "Crittografia hardware AES a 256 bit protetta da password",
      "Robustezza": "Rivestimento esterno in gomma resistente a cadute da 3 metri",
      "Garanzia": "36 Mesi Garanzia Limitata Samsung"
    },
    pitch: "La cassaforte digitale tascabile. Perfetto per il backup sicuro di foto, documenti di lavoro e file importanti senza paura di pioggia o cadute accidentali.",
    icon: "hard-drive"
  },
  {
    id: 12,
    name: "Monitor LG UltraGear 27\" QHD Gaming",
    brand: "LG",
    category: "accessori",
    modelCode: "27GR75Q-B",
    barcode: "8806087968517",
    shelf: "Corsia D - Monitor & Schermi",
    originalPrice: 299.99,
    price: 219.00,
    stock: 3,
    isPromo: true,
    specs: ["27\" QHD (2560x1440)", "IPS 1ms (GtG)", "Refresh Rate 165Hz", "G-Sync Compatible & FreeSync", "Stand Regolabile"],
    fullSpecs: {
      "Dimensione & Risoluzione": "27 Pollici Quad HD (2560 x 1440 pixel, 16:9)",
      "Tecnologia Pannello": "IPS con angolo di visione 178° e gamma sRGB 99%",
      "Tempo di Risposta": "1 ms reale (GtG)",
      "Frequenza di Aggiornamento": "165 Hz nativa via DisplayPort 1.4",
      "Ergonomia": "Base pivot regolabile in altezza, inclinazione e rotazione a 90° verticale",
      "Porte": "2x HDMI 2.0, 1x DisplayPort 1.4, Uscita Jack cuffie",
      "Garanzia": "24 Mesi Ufficiale LG Zero Pixel Defect"
    },
    pitch: "Risoluzione nitidissima 2K ideale sia per lavorare comodamente con più finestre affiancate, sia per giocare alla massima fluidità.",
    icon: "monitor"
  }
];

// Stato dell'applicazione
let state = {
  products: [...PRODUCTS_DATA],
  filteredProducts: [...PRODUCTS_DATA],
  searchQuery: "",
  selectedCategory: "all",
  selectedBrand: "all",
  sortBy: "featured",
  promoOnly: false,
  inStockOnly: false,
  cart: []
};

// SVG Icons helper
function getProductSvg(type) {
  switch (type) {
    case 'laptop':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`;
    case 'phone':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`;
    case 'audio':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`;
    case 'tv':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>`;
    case 'mouse':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="7"/><line x1="12" y1="6" x2="12" y2="10"/></svg>`;
    case 'hard-drive':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>`;
    case 'monitor':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
    default:
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
  }
}

// Inizializzazione al caricamento
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  applyFilters();
  updateHeaderStats();
});

// Configurazione Event Listener
function setupEventListeners() {
  // Ricerca testuale
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // Filtro Categoria Pills
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.selectedCategory = pill.dataset.category;
      applyFilters();
    });
  });

  // Filtro Brand
  const brandSelect = document.getElementById("brand-select");
  brandSelect.addEventListener("change", (e) => {
    state.selectedBrand = e.target.value;
    applyFilters();
  });

  // Ordinamento
  const sortSelect = document.getElementById("sort-select");
  sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    applyFilters();
  });

  // Toggle promozioni & magazzino
  document.getElementById("toggle-promo-only").addEventListener("change", (e) => {
    state.promoOnly = e.target.checked;
    applyFilters();
  });

  document.getElementById("toggle-instock-only").addEventListener("change", (e) => {
    state.inStockOnly = e.target.checked;
    applyFilters();
  });

  // Reset filtri
  document.getElementById("btn-reset-filters").addEventListener("click", resetAllFilters);

  // Modal close
  document.getElementById("modal-close-btn").addEventListener("click", closeModal);
  document.getElementById("product-modal").addEventListener("click", (e) => {
    if (e.target.id === "product-modal") closeModal();
  });

  // Carrello / Drawer
  document.getElementById("btn-open-cart").addEventListener("click", openCartDrawer);
  document.getElementById("drawer-close-btn").addEventListener("click", closeCartDrawer);
  document.getElementById("cart-drawer-overlay").addEventListener("click", closeCartDrawer);
  document.getElementById("btn-clear-cart").addEventListener("click", clearCart);

  // Tasto ESC per chiudere modali
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCartDrawer();
    }
  });
}

// Logica di Filtraggio & Ordinamento
function applyFilters() {
  let list = [...state.products];

  // Filtro Categoria
  if (state.selectedCategory !== "all") {
    list = list.filter(p => p.category === state.selectedCategory);
  }

  // Filtro Marchio
  if (state.selectedBrand !== "all") {
    list = list.filter(p => p.brand.toLowerCase() === state.selectedBrand.toLowerCase());
  }

  // Toggle Solo Promo
  if (state.promoOnly) {
    list = list.filter(p => p.isPromo);
  }

  // Toggle Solo a Magazzino
  if (state.inStockOnly) {
    list = list.filter(p => p.stock > 0);
  }

  // Ricerca libera (nome, modello, barcode, scheda tecnica)
  if (state.searchQuery !== "") {
    const q = state.searchQuery;
    list = list.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchModel = p.modelCode.toLowerCase().includes(q);
      const matchBarcode = p.barcode.includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      const matchSpecs = p.specs.some(s => s.toLowerCase().includes(q));
      return matchName || matchModel || matchBarcode || matchBrand || matchSpecs;
    });
  }

  // Ordinamento
  switch (state.sortBy) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "discount":
      list.sort((a, b) => {
        const discA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
        const discB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
        return discB - discA;
      });
      break;
    case "stock":
      list.sort((a, b) => b.stock - a.stock);
      break;
    case "featured":
    default:
      list.sort((a, b) => a.id - b.id);
      break;
  }

  state.filteredProducts = list;
  renderProducts();
}

// Rendering dei Prodotti nella Griglia
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");
  const countLabel = document.getElementById("results-count");

  countLabel.textContent = `${state.filteredProducts.length} ${state.filteredProducts.length === 1 ? 'articolo trovato' : 'articoli trovati'}`;

  if (state.filteredProducts.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  grid.innerHTML = state.filteredProducts.map(p => {
    const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    const isLowStock = p.stock > 0 && p.stock <= 4;
    const isOutOfStock = p.stock === 0;

    return `
      <article class="product-card" data-id="${p.id}">
        <div>
          <div class="card-top">
            <span class="brand-badge">${p.brand}</span>
            ${p.isPromo ? `<span class="promo-badge">Volantino -${discount}%</span>` : ''}
          </div>

          <div class="product-visual">
            <div class="product-icon-wrapper">
              ${getProductSvg(p.icon)}
            </div>
          </div>

          <div class="product-info">
            <h3>${p.name}</h3>
            <div class="product-model">Mod: ${p.modelCode}</div>

            <div class="specs-list">
              ${p.specs.slice(0, 3).map(s => `<span class="spec-chip">${s}</span>`).join('')}
            </div>

            <div class="retail-meta">
              <span>EAN: ${p.barcode}</span>
              <span class="retail-shelf">${p.shelf}</span>
            </div>
          </div>
        </div>

        <div class="card-bottom">
          <div class="pricing-row">
            <div class="prices">
              ${p.originalPrice ? `<span class="price-original">€ ${p.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
              <span class="price-current">€ ${p.price.toFixed(2).replace('.', ',')}</span>
            </div>

            <div class="stock-status">
              <span class="stock-dot ${isOutOfStock ? 'out' : (isLowStock ? 'low' : '')}"></span>
              <span>${isOutOfStock ? 'Esaurito' : `${p.stock} pz disponibili`}</span>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn btn-secondary" onclick="openProductModal(${p.id})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Scheda Tecnica
            </button>
            <button class="btn btn-primary" onclick="addToCart(${p.id})" title="Aggiungi al Preventivo Cassa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Aggiorna metriche nell'header
function updateHeaderStats() {
  document.getElementById("stat-total-count").textContent = state.products.length;
  const inStock = state.products.filter(p => p.stock > 0).length;
  document.getElementById("stat-instock-count").textContent = inStock;
  const inPromo = state.products.filter(p => p.isPromo).length;
  document.getElementById("stat-promo-count").textContent = inPromo;
}

// Modal Scheda Tecnica
function openProductModal(id) {
  const p = state.products.find(item => item.id === id);
  if (!p) return;

  const modalBody = document.getElementById("modal-content");
  const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;

  let specsRows = "";
  for (const [key, value] of Object.entries(p.fullSpecs)) {
    specsRows += `
      <tr>
        <td class="spec-prop">${key}</td>
        <td class="spec-val">${value}</td>
      </tr>
    `;
  }

  modalBody.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-icon-lg">
        ${getProductSvg(p.icon)}
      </div>
      <div class="modal-title-area">
        <span class="brand-badge">${p.brand}</span>
        <h2>${p.name}</h2>
        <div class="modal-subtitle">Codice Modello: <strong>${p.modelCode}</strong> &bull; Barcode EAN: <strong>${p.barcode}</strong></div>
      </div>
    </div>

    <!-- Consulenza Cliente Retail (Punti di forza) -->
    <div class="consultation-box">
      <h4>💡 Guida alla Vendita & Consulenza per il Cliente</h4>
      <p>${p.pitch}</p>
    </div>

    <h3 style="font-size: 1rem; margin-top: 1.5rem; color: #fff;">Specifiche Tecniche Dettagliate</h3>
    <table class="specs-table">
      <tbody>
        ${specsRows}
      </tbody>
    </table>

    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Prezzo Retail Iva Inclusa</div>
        <div style="font-size: 1.75rem; font-weight: 800; font-family: var(--font-mono); color: var(--accent-cyan);">
          € ${p.price.toFixed(2).replace('.', ',')}
          ${p.originalPrice ? `<span style="font-size: 0.9rem; text-decoration: line-through; color: var(--text-dim); margin-left: 0.5rem;">€ ${p.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
      </div>

      <button class="btn btn-primary" onclick="addToCart(${p.id}); closeModal();">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        Aggiungi al Preventivo Cassa
      </button>
    </div>
  `;

  document.getElementById("product-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("product-modal").classList.remove("open");
}

// Reset di tutti i filtri
function resetAllFilters() {
  state.searchQuery = "";
  state.selectedCategory = "all";
  state.selectedBrand = "all";
  state.sortBy = "featured";
  state.promoOnly = false;
  state.inStockOnly = false;

  document.getElementById("search-input").value = "";
  document.getElementById("brand-select").value = "all";
  document.getElementById("sort-select").value = "featured";
  document.getElementById("toggle-promo-only").checked = false;
  document.getElementById("toggle-instock-only").checked = false;

  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === "all");
  });

  applyFilters();
}

// Gestione Preventivo & Carrello Cassa
function addToCart(id) {
  const product = state.products.find(p => p.id === id);
  if (!product) return;

  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCartDrawer();
}

function updateCartQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== id);
  }

  updateCartUI();
}

function clearCart() {
  state.cart = [];
  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById("cart-items-container");
  const badge = document.getElementById("cart-badge-count");
  const subtotalEl = document.getElementById("cart-subtotal");
  const ivaEl = document.getElementById("cart-iva");
  const totalEl = document.getElementById("cart-total");

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-dim);">
        <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🛒</p>
        <p style="font-weight: 600; color: var(--text-muted);">Il carrello preventivi è vuoto.</p>
        <p style="font-size: 0.8125rem;">Aggiungi prodotti dal catalogo per simulare scontrino o preventivo.</p>
      </div>
    `;
    subtotalEl.textContent = "€ 0,00";
    ivaEl.textContent = "€ 0,00";
    totalEl.textContent = "€ 0,00";
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>€ ${item.price.toFixed(2).replace('.', ',')} &bull; EAN: ${item.barcode}</p>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
        <span class="qty-count">${item.quantity}</span>
        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const iva = total * (0.22 / 1.22); // Scorporo IVA 22%
  const subtotal = total - iva;

  subtotalEl.textContent = `€ ${subtotal.toFixed(2).replace('.', ',')}`;
  ivaEl.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  totalEl.textContent = `€ ${total.toFixed(2).replace('.', ',')}`;
}

function openCartDrawer() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-drawer-overlay").classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-drawer-overlay").classList.remove("open");
}

// Esporta funzioni per handler inline
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.resetAllFilters = resetAllFilters;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
