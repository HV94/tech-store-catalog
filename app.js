/**
 * TechStore Manager - Catalogo & Cassa Registratore POS
 * Sviluppato da Valentyn Haidukov (Perito Informatico - Categorie Protette L. 68/99)
 */

// Catalogo 60 Prodotti Elettronica Retail
const PRODUCTS_DATA = [
  {
    "id": 1,
    "name": "Lenovo LOQ 15IRH9 Gaming",
    "brand": "Lenovo",
    "category": "laptop",
    "modelCode": "83GS002MIX",
    "barcode": "8033221948210",
    "shelf": "Corsia A2 - Scaffale 3",
    "originalPrice": 1199.99,
    "price": 949.99,
    "stock": 5,
    "isPromo": true,
    "specs": [
      "Intel Core i7-13650HX",
      "16GB RAM DDR5",
      "512GB SSD NVMe",
      "RTX 4050 6GB",
      "15.6\" FHD 144Hz"
    ],
    "fullSpecs": {
      "Processore": "Intel Core i7-13650HX (14 core, fino a 4.9 GHz)",
      "RAM": "16 GB DDR5 4800MHz (Espandibile fino a 32GB)",
      "Archiviazione": "512 GB SSD M.2 PCIe 4.0 NVMe",
      "Scheda Grafica": "NVIDIA GeForce RTX 4050 6GB GDDR6",
      "Display": "15.6\" FHD (1920x1080) IPS 144Hz, G-SYNC",
      "Connettività": "Wi-Fi 6 (802.11ax), Bluetooth 5.1, RJ-45 Gigabit",
      "Porte": "3x USB-A 3.2, 1x USB-C con Power Delivery, 1x HDMI 2.1",
      "Garanzia": "24 Mesi Italia Ufficiale Lenovo"
    },
    "pitch": "Ideale per studenti universitari, grafici e appassionati di gaming che cercano massime prestazioni con ottimo raffreddamento e scheda grafica dedicata di ultima generazione.",
    "icon": "laptop"
  },
  {
    "id": 2,
    "name": "Apple MacBook Air 13\" M3",
    "brand": "Apple",
    "category": "laptop",
    "modelCode": "MXCR3T/A",
    "barcode": "8012345678901",
    "shelf": "Vetrina Apple - Reparto 1",
    "originalPrice": 1349.0,
    "price": 1199.0,
    "stock": 8,
    "isPromo": true,
    "specs": [
      "Chip Apple M3 8-core",
      "16GB Memoria Unificata",
      "512GB SSD",
      "Liquid Retina 13.6\"",
      "Autonomia 18h"
    ],
    "fullSpecs": {
      "Processore": "Chip Apple M3 con CPU 8-core e GPU 10-core",
      "RAM": "16 GB Memoria Unificata",
      "Archiviazione": "512 GB SSD ultraveloce",
      "Display": "Liquid Retina 13.6\" (2560x1664) con True Tone",
      "Audio": "4 altoparlanti con Audio Spaziale Dolby Atmos",
      "Connettività": "Wi-Fi 6E, Bluetooth 5.3, MagSafe 3",
      "Batteria": "Fino a 18 ore di riproduzione video",
      "Garanzia": "24 Mesi Ufficiale Apple Care compatibile"
    },
    "pitch": "Perfetto per professionisti e mobilità. Peso piuma (1,24 kg), scocca interamente in alluminio riciclato e autonomia per lavorare due giorni interi senza caricabatterie.",
    "icon": "laptop"
  },
  {
    "id": 3,
    "name": "ASUS Vivobook 15 OLED",
    "brand": "ASUS",
    "category": "laptop",
    "modelCode": "F1505VA-MA241W",
    "barcode": "4711387224190",
    "shelf": "Corsia A1 - Scaffale 1",
    "originalPrice": 799.0,
    "price": 649.99,
    "stock": 12,
    "isPromo": true,
    "specs": [
      "Intel Core i5-13500H",
      "16GB RAM",
      "512GB SSD",
      "15.6\" OLED 2.8K 120Hz",
      "Windows 11 Home"
    ],
    "fullSpecs": {
      "Processore": "Intel Core i5-13500H (12 core, 16 thread)",
      "RAM": "16 GB DDR4 Dual-Channel",
      "Archiviazione": "512 GB SSD NVMe PCIe 3.0",
      "Display": "15.6\" OLED 2.8K (2880x1620) 120Hz, 100% DCI-P3",
      "Tastiera": "Retroilluminata con tastierino numerico ErgoSense",
      "Connettività": "Wi-Fi 6E, Bluetooth 5.2, USB-C, HDMI",
      "Trattamento": "Protezione antibatterica ASUS Antimicrobial Guard",
      "Garanzia": "24 Mesi Ufficiale ASUS Italia"
    },
    "pitch": "Il miglior schermo nella sua fascia di prezzo grazie al pannello OLED dai neri assoluti. Scelta consigliata per smart working, fogli di calcolo e streaming serale.",
    "icon": "laptop"
  },
  {
    "id": 4,
    "name": "Acer Nitro V 15 Gaming",
    "brand": "Acer",
    "category": "laptop",
    "modelCode": "ANV15-51-789J",
    "barcode": "4711121984211",
    "shelf": "Corsia A2 - Scaffale 4",
    "originalPrice": 1099.0,
    "price": 899.99,
    "stock": 6,
    "isPromo": true,
    "specs": [
      "Intel Core i7-13620H",
      "16GB DDR5",
      "1TB SSD PCIe 4.0",
      "RTX 4060 8GB",
      "15.6\" FHD 144Hz"
    ],
    "fullSpecs": {
      "Processore": "Intel Core i7-13620H (10 core, fino a 4.9 GHz)",
      "RAM": "16 GB DDR5 5200MHz",
      "Archiviazione": "1 TB SSD NVMe M.2 ad alta velocità",
      "Scheda Grafica": "NVIDIA GeForce RTX 4060 8GB GDDR6 (DLSS 3.5)",
      "Display": "15.6\" IPS Full HD 144Hz antiriflesso",
      "Raffreddamento": "Doppia ventola con prese d'aria integrate",
      "Garanzia": "24 Mesi Italia"
    },
    "pitch": "Rapporto prestazioni/prezzo imbattibile con scheda video RTX 4060 da 8GB e 1TB di SSD per installare tutti i giochi più recenti senza pensieri.",
    "icon": "laptop"
  },
  {
    "id": 5,
    "name": "HP Pavilion 15 Touchscreen",
    "brand": "HP",
    "category": "laptop",
    "modelCode": "15-eg3014nl",
    "barcode": "8024455667788",
    "shelf": "Corsia A1 - Scaffale 2",
    "originalPrice": 849.0,
    "price": 729.0,
    "stock": 9,
    "isPromo": false,
    "specs": [
      "Intel Core i5-1335U",
      "16GB RAM DDR4",
      "512GB SSD",
      "15.6\" FHD IPS Touch",
      "Audio B&O"
    ],
    "fullSpecs": {
      "Processore": "Intel Core i5-1335U (10 core, grafica Intel Iris Xe)",
      "RAM": "16 GB DDR4 3200MHz",
      "Archiviazione": "512 GB SSD PCIe NVMe M.2",
      "Display": "15.6\" Full HD Touchscreen capacitivo multitouch",
      "Audio": "Altoparlanti doppi Bang & Olufsen con HP Audio Boost",
      "Batteria": "Fino a 8.5 ore con Ricarica Rapida HP (50% in 45 min)",
      "Garanzia": "24 Mesi HP Care Italia"
    },
    "pitch": "Versatile e intuitivo grazie al display touchscreen. Perfetto per la famiglia, studio e gestione fatture in ufficio.",
    "icon": "laptop"
  },
  {
    "id": 6,
    "name": "Dell Inspiron 16 Plus",
    "brand": "Dell",
    "category": "laptop",
    "modelCode": "7630-9421",
    "barcode": "5397184729112",
    "shelf": "Corsia A1 - Scaffale 4",
    "originalPrice": 1499.0,
    "price": 1299.0,
    "stock": 4,
    "isPromo": false,
    "specs": [
      "Intel Core i7-13700H",
      "32GB DDR5",
      "1TB SSD",
      "16\" 2.5K 16:10 120Hz",
      "Thunderbolt 4"
    ],
    "fullSpecs": {
      "Processore": "Intel Core i7-13700H (14 core, 20 thread)",
      "RAM": "32 GB DDR5 4800MHz Dual-Channel",
      "Archiviazione": "1 TB SSD NVMe PCIe Gen4",
      "Display": "16 pollici 2.5K (2560x1600) 16:10, 100% sRGB",
      "Costruzione": "Chassis unibody in alluminio Dark Green",
      "Garanzia": "24 Mesi Dell On-Site Next Business Day"
    },
    "pitch": "Workstation portatile per programmatori, architetti e creator. Schermo 16:10 ampio per visualizzare più righe di codice o timeline di montaggio.",
    "icon": "laptop"
  },
  {
    "id": 7,
    "name": "Apple MacBook Pro 14\" M3 Pro",
    "brand": "Apple",
    "category": "laptop",
    "modelCode": "MRX33T/A",
    "barcode": "8019988112233",
    "shelf": "Vetrina Apple - Reparto 1",
    "originalPrice": 2499.0,
    "price": 2249.0,
    "stock": 3,
    "isPromo": true,
    "specs": [
      "Chip Apple M3 Pro 11-core",
      "18GB Memoria Unificata",
      "512GB SSD",
      "Liquid Retina XDR 120Hz",
      "Nero Siderale"
    ],
    "fullSpecs": {
      "Processore": "Apple M3 Pro (CPU 11-core, GPU 14-core)",
      "RAM": "18 GB Memoria Unificata ad altissima banda",
      "Archiviazione": "512 GB SSD",
      "Display": "14.2\" Liquid Retina XDR (3024x1964) ProMotion 120Hz, 1600 nit",
      "Porte": "3x Thunderbolt 4, HDMI, SDXC card slot, MagSafe 3",
      "Garanzia": "24 Mesi Ufficiale Apple"
    },
    "pitch": "Il massimo strumento di produttività professionale. Display XDR con gamma dinamica estrema e colore Nero Siderale con trattamento anti-impronte.",
    "icon": "laptop"
  },
  {
    "id": 8,
    "name": "MSI Cyborg 15 A12V Gaming",
    "brand": "MSI",
    "category": "laptop",
    "modelCode": "CYBORG-15-A12VF",
    "barcode": "4719072998812",
    "shelf": "Corsia A2 - Scaffale 2",
    "originalPrice": 1049.0,
    "price": 849.0,
    "stock": 7,
    "isPromo": true,
    "specs": [
      "Intel Core i5-12450H",
      "16GB RAM DDR5",
      "512GB SSD",
      "RTX 4060 8GB",
      "Design Semitrasparente"
    ],
    "fullSpecs": {
      "Processore": "Intel Core i5-12450H (8 core)",
      "RAM": "16 GB DDR5",
      "Archiviazione": "512 GB SSD NVMe PCIe 4.0",
      "Scheda Grafica": "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "Display": "15.6\" Full HD IPS 144Hz",
      "Design": "Scocca cyberpunk semitrasparente su tastiera e lati",
      "Garanzia": "24 Mesi MSI Italia con Pick-up & Return"
    },
    "pitch": "Design futuristico semitrasparente unico nel suo genere, abbinato alla potenza della scheda RTX 4060 per giocare a qualsiasi titolo moderno.",
    "icon": "laptop"
  },
  {
    "id": 9,
    "name": "Lenovo ThinkPad E14 Gen 5",
    "brand": "Lenovo",
    "category": "laptop",
    "modelCode": "21JK000RIX",
    "barcode": "8033221998844",
    "shelf": "Corsia A1 - Scaffale 3",
    "originalPrice": 929.0,
    "price": 799.0,
    "stock": 5,
    "isPromo": false,
    "specs": [
      "AMD Ryzen 5 7530U",
      "16GB RAM",
      "512GB SSD",
      "14\" WUXGA IPS 16:10",
      "Tastiera ThinkPad"
    ],
    "fullSpecs": {
      "Processore": "AMD Ryzen 5 7530U (6 core, 12 thread)",
      "RAM": "16 GB DDR4 3200MHz",
      "Archiviazione": "512 GB SSD PCIe NVMe M.2 Opal 2.0",
      "Display": "14\" WUXGA (1920x1200) IPS 300 nit 16:10 antiriflesso",
      "Certificazione": "Standard Militare MIL-STD-810H resistenza urti",
      "Sicurezza": "Chip TPM 2.0 discreto, otturatore webcam ThinkShutter",
      "Garanzia": "24 Mesi Lenovo Premier Support"
    },
    "pitch": "Il punto di riferimento per l'affidabilità aziendale. Tastiera ergonomica leggendaria, scocca corazzata resistente a urti e polvere.",
    "icon": "laptop"
  },
  {
    "id": 10,
    "name": "Microsoft Surface Laptop Go 3",
    "brand": "Microsoft",
    "category": "laptop",
    "modelCode": "XK1-00024",
    "barcode": "8898429988112",
    "shelf": "Corsia A1 - Scaffale 5",
    "originalPrice": 899.0,
    "price": 769.0,
    "stock": 8,
    "isPromo": false,
    "specs": [
      "Intel Core i5-1235U",
      "16GB RAM",
      "256GB SSD",
      "12.4\" PixelSense Touch",
      "Peso 1.13 kg"
    ],
    "fullSpecs": {
      "Processore": "Intel Core i5-1235U 10-core",
      "RAM": "16 GB LPDDR5",
      "Archiviazione": "256 GB SSD rimovibile",
      "Display": "12.4\" PixelSense Touch 3:2 (1536x1024)",
      "Materiali": "Alluminio anodizzato colore Platino",
      "Autonomia": "Fino a 15 ore di utilizzo tipico",
      "Garanzia": "24 Mesi Ufficiale Microsoft"
    },
    "pitch": "Ultra compatto ed elegante. Il formato 3:2 è ottimizzato per leggere documenti e navigare sul web con meno scorrimenti.",
    "icon": "laptop"
  },
  {
    "id": 11,
    "name": "ASUS TUF Gaming A15",
    "brand": "ASUS",
    "category": "laptop",
    "modelCode": "FA507NV-LP023W",
    "barcode": "4711387112290",
    "shelf": "Corsia A2 - Scaffale 1",
    "originalPrice": 1299.0,
    "price": 1099.0,
    "stock": 2,
    "isPromo": true,
    "specs": [
      "AMD Ryzen 7 7735HS",
      "16GB DDR5",
      "1TB SSD",
      "RTX 4060 8GB 140W",
      "Batteria 90Wh"
    ],
    "fullSpecs": {
      "Processore": "AMD Ryzen 7 7735HS (8 core, 16 thread fino a 4.75 GHz)",
      "RAM": "16 GB DDR5 4800MHz Dual Channel",
      "Archiviazione": "1 TB SSD PCIe 4.0 NVMe",
      "Scheda Grafica": "NVIDIA GeForce RTX 4060 8GB GDDR6 TGP max 140W con MUX Switch",
      "Display": "15.6\" Full HD IPS 144Hz, 100% sRGB",
      "Batteria": "Mega batteria da 90Wh con ricarica rapida",
      "Garanzia": "24 Mesi ASUS Italia"
    },
    "pitch": "Potenza grafica ai massimi livelli grazie al TGP a 140 Watt e tecnologia MUX Switch. Chassis certificato per durare nel tempo.",
    "icon": "laptop"
  },
  {
    "id": 12,
    "name": "Samsung Galaxy Book4",
    "brand": "Samsung",
    "category": "laptop",
    "modelCode": "NP750XGK-KG2IT",
    "barcode": "8806095441122",
    "shelf": "Corsia A1 - Scaffale 6",
    "originalPrice": 899.0,
    "price": 699.0,
    "stock": 0,
    "isPromo": true,
    "specs": [
      "Intel Core 5 120U",
      "16GB RAM LPDDR4X",
      "512GB SSD",
      "15.6\" FHD Antiriflesso",
      "Galaxy Ecosystem"
    ],
    "fullSpecs": {
      "Processore": "Intel Core 5 120U (10 core, fino a 5.0 GHz)",
      "RAM": "16 GB LPDDR4X integrata",
      "Archiviazione": "512 GB SSD NVMe con slot aggiuntivo M.2",
      "Display": "15.6\" Full HD IPS con trattamento antiriflesso",
      "Integrazione": "Continuity con smartphone Samsung, Quick Share e Second Screen",
      "Garanzia": "24 Mesi Samsung Italia"
    },
    "pitch": "L'abbinamento ideale per chi possiede già uno smartphone Samsung. Sincronizzazione immediata di foto, appunti e chiamate tra telefono e PC.",
    "icon": "laptop"
  },
  {
    "id": 13,
    "name": "Samsung Galaxy S24 Ultra 5G",
    "brand": "Samsung",
    "category": "smartphone",
    "modelCode": "SM-S928BZTQITV",
    "barcode": "8806095315891",
    "shelf": "Vetrina Telefonia - Reparto 2",
    "originalPrice": 1499.0,
    "price": 1249.0,
    "stock": 6,
    "isPromo": true,
    "specs": [
      "Snapdragon 8 Gen 3",
      "12GB RAM / 256GB",
      "Fotocamera 200MP",
      "Galaxy AI integrata",
      "S-Pen Inclusa"
    ],
    "fullSpecs": {
      "Processore": "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)",
      "Memoria": "12 GB LPDDR5X + 256 GB UFS 4.0",
      "Fotocamere": "Quad Cam 200 MP + 50 MP (Periscopio 5x) + 12 MP Ultrawide + 10 MP Tele",
      "Display": "6.8\" Dynamic AMOLED 2X QHD+ 120Hz, Gorilla Armor antiriflesso",
      "Batteria": "5000 mAh con Ricarica rapida 45W e Wireless PowerShare",
      "Materiali": "Telaio in Titanio grado aerospaziale, Certificato IP68",
      "Intelligenza Artificiale": "Traduzione chiamate live, Cerchia e Cerca con Google",
      "Garanzia": "24 Mesi Italia + 7 Anni di aggiornamenti Android garantiti"
    },
    "pitch": "Il re indiscusso degli smartphone Android. La fotocamera da 200MP e le funzioni Galaxy AI rendono immediata la gestione di documenti, traduzioni e foto professionali.",
    "icon": "phone"
  },
  {
    "id": 14,
    "name": "Apple iPhone 15 Pro",
    "brand": "Apple",
    "category": "smartphone",
    "modelCode": "MTV13QL/A",
    "barcode": "8019988776655",
    "shelf": "Vetrina Apple - Reparto 2",
    "originalPrice": 1239.0,
    "price": 1089.0,
    "stock": 9,
    "isPromo": true,
    "specs": [
      "Chip A17 Pro (3nm)",
      "Titanio Naturale",
      "Fotocamera 48MP Pro",
      "Tasto Azione Rapido",
      "USB-C 3.0 10Gbps"
    ],
    "fullSpecs": {
      "Processore": "Chip A17 Pro con GPU 6-core e Ray Tracing hardware",
      "Memoria": "128 GB NVMe ad alta velocità",
      "Display": "6.1\" Super Retina XDR OLED, ProMotion 120Hz, Dynamic Island",
      "Fotocamera": "Triplo sensore 48 MP principale con 7 lunghezze focali equivalenti",
      "Costruzione": "Scocca in Titanio di grado 5 aerospaziale con retro in vetro satinato",
      "Connettività": "Porta USB-C compatibile USB 3 per trasferimento rapido video ProRes",
      "Garanzia": "24 Mesi Ufficiale Apple Italia"
    },
    "pitch": "Leggero, indistruttibile e maneggevole. La nuova porta USB-C permette di collegare direttamente chiavette, monitor e fotocamere professionali.",
    "icon": "phone"
  },
  {
    "id": 15,
    "name": "Apple iPhone 15 128GB",
    "brand": "Apple",
    "category": "smartphone",
    "modelCode": "MTP03QL/A",
    "barcode": "8019988443322",
    "shelf": "Vetrina Apple - Reparto 2",
    "originalPrice": 879.0,
    "price": 769.0,
    "stock": 14,
    "isPromo": true,
    "specs": [
      "Chip A16 Bionic",
      "Dynamic Island",
      "Fotocamera 48MP",
      "Porta USB-C",
      "Design in Vetro Infuso"
    ],
    "fullSpecs": {
      "Processore": "Apple A16 Bionic 6-core con Neural Engine 16-core",
      "Memoria": "128 GB integrata",
      "Display": "6.1\" Super Retina XDR OLED fino a 2000 nit all'aperto",
      "Fotocamera": "Doppia cam: 48 MP con teleobiettivo 2x ottico + 12 MP ultragrandangolare",
      "Connettività": "USB-C, 5G, Wi-Fi 6, Rilevamento Incidenti stradali e SOS satellitare",
      "Garanzia": "24 Mesi Ufficiale Apple"
    },
    "pitch": "L'iPhone più venduto dell'anno: ora con Dynamic Island, sensore fotografico principale da 48 Megapixel e ricarica standard USB-C.",
    "icon": "phone"
  },
  {
    "id": 16,
    "name": "Google Pixel 8 Pro",
    "brand": "Google",
    "category": "smartphone",
    "modelCode": "GA04834-GB",
    "barcode": "8400441411223",
    "shelf": "Vetrina Telefonia - Reparto 1",
    "originalPrice": 1099.0,
    "price": 849.0,
    "stock": 5,
    "isPromo": true,
    "specs": [
      "Google Tensor G3",
      "12GB RAM / 128GB",
      "Display Super Actua 120Hz",
      "Sensore di Temperatura",
      "7 Anni Update OS"
    ],
    "fullSpecs": {
      "Processore": "Google Tensor G3 con coprocessore Titan M2 di sicurezza",
      "Memoria": "12 GB LPDDR5X + 128 GB UFS 3.1",
      "Display": "6.7\" OLED Super Actua LTPO 1-120Hz, fino a 2400 nit",
      "Fotocamere": "50 MP principale + 48 MP ultrawide con Macro Focus + 48 MP tele 5x ottico",
      "Funzioni AI": "Gomma Magica Audio, Scatto Migliore, Magic Editor",
      "Garanzia": "24 Mesi Google Italia con 7 anni di patch di sicurezza garantite"
    },
    "pitch": "Il punto di riferimento assoluto per la fotografia da smartphone. L'intelligenza artificiale di Google corregge occhi chiusi e rumori di fondo nei video.",
    "icon": "phone"
  },
  {
    "id": 17,
    "name": "Samsung Galaxy A55 5G",
    "brand": "Samsung",
    "category": "smartphone",
    "modelCode": "SM-A556BZKAEUE",
    "barcode": "8806095511223",
    "shelf": "Vetrina Telefonia - Reparto 3",
    "originalPrice": 499.0,
    "price": 379.0,
    "stock": 18,
    "isPromo": true,
    "specs": [
      "Exynos 1480 Octa-Core",
      "8GB RAM / 256GB",
      "Display Super AMOLED 120Hz",
      "Scocca in Metallo & Vetro",
      "IP67"
    ],
    "fullSpecs": {
      "Processore": "Samsung Exynos 1480 con GPU AMD Xclipse 530",
      "Memoria": "8 GB RAM + 256 GB (Espandibile con MicroSD fino a 1TB)",
      "Display": "6.6\" Super AMOLED FHD+ 120Hz con Vision Booster",
      "Fotocamera": "Tripla cam 50 MP stabilizzata OIS + 12 MP Ultra-wide + 5 MP Macro",
      "Batteria": "5000 mAh per 2 giorni di autonomia",
      "Certificazione": "Resistenza ad acqua e polvere IP67",
      "Garanzia": "24 Mesi Samsung Italia"
    },
    "pitch": "Il re della fascia media. Finiture premium con cornice in alluminio spazzolato, schermo brillante sotto il sole e memoria espandibile fino a 1 Terabyte.",
    "icon": "phone"
  },
  {
    "id": 18,
    "name": "Xiaomi 14 5G Leica",
    "brand": "Xiaomi",
    "category": "smartphone",
    "modelCode": "23127PN0CG",
    "barcode": "6934177798811",
    "shelf": "Vetrina Telefonia - Reparto 1",
    "originalPrice": 999.0,
    "price": 799.0,
    "stock": 4,
    "isPromo": true,
    "specs": [
      "Snapdragon 8 Gen 3",
      "12GB RAM / 512GB",
      "Ottiche Leica Summilux",
      "Ricarica 90W HyperCharge",
      "Compatto 6.36\""
    ],
    "fullSpecs": {
      "Processore": "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      "Memoria": "12 GB LPDDR5X + 512 GB UFS 4.0",
      "Display": "6.36\" CrystalRes AMOLED 1.5K 120Hz LTPO, 3000 nit picco",
      "Fotocamere": "Tripla 50 MP Leica (Principale Light Fusion 900 + 75mm Tele + Ultrawide)",
      "Ricarica": "90W cablata (0-100% in 31 minuti) + 50W wireless",
      "Garanzia": "24 Mesi Ufficiale Xiaomi Italia"
    },
    "pitch": "Top di gamma compatto con le celebri ottiche Leica. Ideale per chi cerca uno smartphone comodissimo da tenere in tasca con la fotocamera migliore.",
    "icon": "phone"
  },
  {
    "id": 19,
    "name": "Motorola Edge 50 Pro",
    "brand": "Motorola",
    "category": "smartphone",
    "modelCode": "PB1H0004IT",
    "barcode": "8400232551122",
    "shelf": "Vetrina Telefonia - Reparto 2",
    "originalPrice": 699.0,
    "price": 549.0,
    "stock": 7,
    "isPromo": false,
    "specs": [
      "Snapdragon 7 Gen 3",
      "12GB / 512GB",
      "Display pOLED 144Hz Curvo",
      "Ricarica TurboPower 125W",
      "Colori Pantone"
    ],
    "fullSpecs": {
      "Processore": "Qualcomm Snapdragon 7 Gen 3",
      "Memoria": "12 GB RAM + 512 GB spazio archiviazione",
      "Display": "6.7\" Super HD (1220p) pOLED a 144Hz con calibrazione colori Pantone",
      "Fotocamera": "50 MP con apertura f/1.4 + 10 MP tele 3x + 13 MP ultrawide con macro",
      "Ricarica": "125W TurboPower (carica completa in soli 18 minuti!)",
      "Garanzia": "24 Mesi Motorola Italia"
    },
    "pitch": "Design raffinato con retro in pelle vegana e schermo curvo a 144Hz certificato Pantone. La ricarica da 125W è tra le più veloci sul mercato.",
    "icon": "phone"
  },
  {
    "id": 20,
    "name": "Apple iPad Air 11\" M2",
    "brand": "Apple",
    "category": "smartphone",
    "modelCode": "MUWC3TY/A",
    "barcode": "8019988665544",
    "shelf": "Vetrina Apple - Reparto 3",
    "originalPrice": 719.0,
    "price": 649.0,
    "stock": 10,
    "isPromo": true,
    "specs": [
      "Chip Apple M2",
      "128GB Storage",
      "Display Liquid Retina",
      "Supporto Apple Pencil Pro",
      "Touch ID nel Tasto"
    ],
    "fullSpecs": {
      "Processore": "Chip Apple M2 con CPU 8-core e GPU 10-core",
      "Memoria": "128 GB flash ultraveloce",
      "Display": "11 pollici Liquid Retina (2360x1640) con True Tone e ampia gamma cromatica P3",
      "Fotocamere": "12 MP posteriore 4K + 12 MP frontale orizzontale con Inquadratura Automatica",
      "Accessori": "Compatibile con Magic Keyboard e la nuova Apple Pencil Pro",
      "Garanzia": "24 Mesi Ufficiale Apple"
    },
    "pitch": "Il tablet perfetto per studenti, designer e professionisti. Con il processore M2 gestisce montaggio video 4K, disegno digitale e gaming con fluidità assoluta.",
    "icon": "phone"
  },
  {
    "id": 21,
    "name": "Samsung Galaxy Tab S9 FE",
    "brand": "Samsung",
    "category": "smartphone",
    "modelCode": "SM-X510NZAAEUE",
    "barcode": "8806095223344",
    "shelf": "Vetrina Telefonia - Reparto 3",
    "originalPrice": 549.0,
    "price": 429.0,
    "stock": 11,
    "isPromo": true,
    "specs": [
      "Exynos 1380",
      "6GB RAM / 128GB",
      "S-Pen Inclusa in Confezione",
      "Display 10.9\" 90Hz",
      "Resistente IP68"
    ],
    "fullSpecs": {
      "Processore": "Exynos 1380 Octa-Core",
      "Memoria": "6 GB RAM + 128 GB (Slot MicroSD fino a 1TB)",
      "Display": "10.9 pollici WQXGA (2304x1440) a 90Hz",
      "Pennino": "S-Pen a bassa latenza inclusa gratuitamente nella scatola",
      "Impermeabilità": "Tablet e penna certificati IP68 resistenti ad acqua e polvere",
      "Batteria": "8000 mAh per oltre 18 ore di autonomia",
      "Garanzia": "24 Mesi Samsung Italia"
    },
    "pitch": "Grande valore aggiunto: la penna S-Pen è già inclusa nella confezione per prendere appunti a scuola o all'università senza costi extra.",
    "icon": "phone"
  },
  {
    "id": 22,
    "name": "Redmi Note 13 Pro+ 5G",
    "brand": "Xiaomi",
    "category": "smartphone",
    "modelCode": "23090RA98G",
    "barcode": "6934177722119",
    "shelf": "Vetrina Telefonia - Reparto 4",
    "originalPrice": 449.0,
    "price": 349.0,
    "stock": 8,
    "isPromo": true,
    "specs": [
      "Dimensity 7200-Ultra",
      "12GB RAM / 512GB",
      "Fotocamera 200MP OIS",
      "Display 1.5K Curvo 120Hz",
      "Ricarica 120W"
    ],
    "fullSpecs": {
      "Processore": "MediaTek Dimensity 7200-Ultra (4nm)",
      "Memoria": "12 GB RAM + 512 GB spazio di archiviazione",
      "Display": "6.67\" CrystalRes AMOLED 1.5K 120Hz curvo con Dolby Vision",
      "Fotocamera": "Sensore principale da 200 Megapixel stabilizzato otticamente (OIS)",
      "Ricarica": "120W HyperCharge (100% di batteria in 19 minuti)",
      "Certificazione": "IP68 contro acqua e liquidi",
      "Garanzia": "24 Mesi Ufficiale Xiaomi"
    },
    "pitch": "Offerta bomba: 512GB di memoria interna, ricarica a 120W con caricabatterie incluso e fotocamera da 200MP a un prezzo da fascia media.",
    "icon": "phone"
  },
  {
    "id": 23,
    "name": "Google Pixel 8a 5G",
    "brand": "Google",
    "category": "smartphone",
    "modelCode": "GA05570-GB",
    "barcode": "8400441499881",
    "shelf": "Vetrina Telefonia - Reparto 1",
    "originalPrice": 549.0,
    "price": 479.0,
    "stock": 6,
    "isPromo": false,
    "specs": [
      "Google Tensor G3",
      "8GB RAM / 128GB",
      "Display Actua 120Hz 6.1\"",
      "Fotocamera 64MP",
      "Supporto 7 Anni"
    ],
    "fullSpecs": {
      "Processore": "Google Tensor G3 con coprocessore Titan M2",
      "Memoria": "8 GB LPDDR5X + 128 GB UFS 3.1",
      "Display": "6.1\" OLED Actua 120Hz con vetro Corning Gorilla Glass 3",
      "Fotocamere": "Doppia cam: 64 MP grandangolare + 13 MP ultrawide con campo visivo 120°",
      "Intelligenza Artificiale": "Cerchia e Cerca, Filtro Chiamate antispam avanzato, Traduzione dal vivo",
      "Garanzia": "24 Mesi Google Italia"
    },
    "pitch": "Tutta l'esperienza Pixel e il chip Tensor G3 del modello Pro in formato compatto e a prezzo accessibile. Supporto software garantito fino al 2031.",
    "icon": "phone"
  },
  {
    "id": 24,
    "name": "Apple iPad 10.9\" 10ª Gen",
    "brand": "Apple",
    "category": "smartphone",
    "modelCode": "MPQ03TY/A",
    "barcode": "8019988331122",
    "shelf": "Vetrina Apple - Reparto 3",
    "originalPrice": 439.0,
    "price": 389.0,
    "stock": 1,
    "isPromo": true,
    "specs": [
      "Chip A14 Bionic",
      "64GB Storage",
      "Display Liquid Retina 10.9\"",
      "Porta USB-C",
      "Fotocamera 12MP Orizzontale"
    ],
    "fullSpecs": {
      "Processore": "Chip A14 Bionic con CPU 6-core e Neural Engine 16-core",
      "Memoria": "64 GB integrata",
      "Display": "10.9 pollici Liquid Retina (2360x1640) con tecnologia True Tone",
      "Connettività": "Wi-Fi 6, USB-C per ricarica e accessori, Touch ID integrato nel pulsante superiore",
      "Fotocamera": "Ultra-grandangolo frontale da 12MP sul lato lungo per videochiamate naturali",
      "Garanzia": "24 Mesi Ufficiale Apple"
    },
    "pitch": "L'iPad universale più amato dalle famiglie: perfetto per compiti scolastici, videochiamate su Zoom e navigazione web con la stabilità di iPadOS.",
    "icon": "phone"
  },
  {
    "id": 25,
    "name": "LG OLED evo 55\" Serie C3 4K",
    "brand": "LG",
    "category": "audio",
    "modelCode": "OLED55C34LA",
    "barcode": "8806091234567",
    "shelf": "Reparto TV - Parete 1",
    "originalPrice": 1499.0,
    "price": 1199.0,
    "stock": 3,
    "isPromo": true,
    "specs": [
      "Pannello OLED evo 4K",
      "Processore α9 Gen6 4K",
      "4x HDMI 2.1 120Hz",
      "Dolby Vision & Atmos",
      "webOS 23"
    ],
    "fullSpecs": {
      "Pannello": "55 pollici OLED evo con Brightness Booster e pixel autoilluminanti",
      "Risoluzione": "4K Ultra HD (3840x2160) a 120Hz nativi",
      "Processore Video": "Processore sinergico α9 Gen6 con intelligenza artificiale Deep Learning",
      "Gaming": "4 porte HDMI 2.1 complete (4K@120fps, VRR, NVIDIA G-Sync, AMD FreeSync)",
      "Audio": "Sistema 2.2 canali da 40W con virtualizzazione surround 9.1.2 canali",
      "Garanzia": "24 Mesi Ufficiale LG Italia"
    },
    "pitch": "Il punto di riferimento mondiale per il cinema in casa e le console di nuova generazione (PS5/Xbox Series X). Contrasto infinito e tempo di risposta istantaneo (0,1 ms).",
    "icon": "tv"
  },
  {
    "id": 26,
    "name": "Samsung Neo QLED 65\" 4K QN90C",
    "brand": "Samsung",
    "category": "audio",
    "modelCode": "QE65QN90CATXZT",
    "barcode": "8806095112233",
    "shelf": "Reparto TV - Parete 2",
    "originalPrice": 1799.0,
    "price": 1399.0,
    "stock": 4,
    "isPromo": true,
    "specs": [
      "Quantum Mini LED",
      "Processore Neural Quantum 4K",
      "Anti-Riflesso Avanzato",
      "Gaming Hub Integrato",
      "Audio OTS+"
    ],
    "fullSpecs": {
      "Pannello": "65 pollici Neo QLED con tecnologia Quantum Mini LED",
      "Risoluzione": "4K Ultra HD (3840x2160) fino a 144Hz per PC Gaming",
      "Luminosità": "Picco oltre 2000 nit con Quantum HDR 2000",
      "Trattamento Schermo": "Filtro anti-riflesso Ultra Viewing Angle per salotti molto luminosi",
      "Audio": "Object Tracking Sound+ (OTS+) da 60W a 4.2.2 canali",
      "Garanzia": "24 Mesi Samsung Italia"
    },
    "pitch": "La scelta migliore per stanze molto illuminate o con finestre dirette. I Quantum Mini LED offrono luminosità strabiliante senza alcun timore di burn-in.",
    "icon": "tv"
  },
  {
    "id": 27,
    "name": "Sony BRAVIA 50\" 4K Full Array",
    "brand": "Sony",
    "category": "audio",
    "modelCode": "XR-50X90S",
    "barcode": "4548736134567",
    "shelf": "Reparto TV - Parete 3",
    "originalPrice": 999.0,
    "price": 849.0,
    "stock": 5,
    "isPromo": false,
    "specs": [
      "Cognitive Processor XR",
      "Full Array LED Local Dimming",
      "Perfetto per PS5",
      "Google TV con Assistente Vocale",
      "Acoustic Multi-Audio"
    ],
    "fullSpecs": {
      "Pannello": "50 pollici Full Array LED con controllo a zone indipendenti",
      "Processore": "Cognitive Processor XR che simula la percezione dell'occhio umano",
      "Integrazione Console": "Auto HDR Tone Mapping e Auto Genre Picture Mode con PlayStation 5",
      "Sistema Smart": "Google TV con oltre 10.000 app, Chromecast integrato e AirPlay 2",
      "Garanzia": "24 Mesi Sony Italia"
    },
    "pitch": "Calibrazione cinematografica naturale e massima compatibilità certificata con PlayStation 5 grazie alle regolazioni HDR automatiche.",
    "icon": "tv"
  },
  {
    "id": 28,
    "name": "TCL 55\" QLED 4K Google TV",
    "brand": "TCL",
    "category": "audio",
    "modelCode": "55C641",
    "barcode": "5901292511223",
    "shelf": "Reparto TV - Scaffale B1",
    "originalPrice": 499.0,
    "price": 399.0,
    "stock": 10,
    "isPromo": true,
    "specs": [
      "Tecnologia Quantum Dot",
      "4K HDR PRO con Dolby Vision",
      "Game Master 2.0",
      "Google TV",
      "Cornice Senza Bordi"
    ],
    "fullSpecs": {
      "Pannello": "55 pollici QLED (Quantum Dot) con oltre 1 miliardo di colori",
      "Formati HDR": "Supporto completo HDR10+, Dolby Vision e HLG",
      "Gaming": "Game Bar, ALLM (Auto Low Latency Mode) e acceleratore 120Hz DLG",
      "Audio": "Altoparlanti stereo ONKYO con Dolby Atmos e DTS-HD",
      "Garanzia": "24 Mesi TCL Italia"
    },
    "pitch": "Miglior rapporto qualità/prezzo per una Smart TV da 55 pollici: colori Quantum Dot, supporto a tutti i formati HDR e sistema operativo Google TV fluido e completo.",
    "icon": "tv"
  },
  {
    "id": 29,
    "name": "Sony WH-1000XM5 Cuffie Wireless",
    "brand": "Sony",
    "category": "audio",
    "modelCode": "WH1000XM5B.CE7",
    "barcode": "4548736132582",
    "shelf": "Corsia B1 - Vetrina Audio",
    "originalPrice": 419.0,
    "price": 329.0,
    "stock": 7,
    "isPromo": true,
    "specs": [
      "Cancellazione Rumore Industry-Leading",
      "Doppio Processore V1+QN1",
      "Autonomia 30 Ore",
      "Hi-Res Audio LDAC",
      "Chiamate Cristalline 4 Mic Beamforming"
    ],
    "fullSpecs": {
      "Driver Acustico": "Driver in fibra di carbonio da 30 mm progettato su misura",
      "Noise Cancelling": "8 microfoni integrati con Auto NC Optimizer per eliminare rumori di aerei, treni e uffici",
      "Autonomia": "30 ore con ANC attivo (ricarica rapida: 3 minuti danno 3 ore di musica)",
      "Connettività": "Bluetooth 5.2 Multipoint (si collega contemporaneamente a PC e telefono)",
      "Garanzia": "24 Mesi Ufficiale Sony"
    },
    "pitch": "La regina della cancellazione attiva del rumore. Indispensabile per viaggiare, lavorare in open space o concentrarsi nello studio senza alcuna distrazione.",
    "icon": "audio"
  },
  {
    "id": 30,
    "name": "Apple AirPods Pro 2 USB-C",
    "brand": "Apple",
    "category": "audio",
    "modelCode": "MTJV3ZM/A",
    "barcode": "8019988554433",
    "shelf": "Vetrina Apple - Reparto 1",
    "originalPrice": 279.0,
    "price": 239.0,
    "stock": 16,
    "isPromo": true,
    "specs": [
      "Chip Apple H2",
      "Cancellazione Rumore 2x",
      "Audio Adattivo Intelligente",
      "Custodia USB-C con Altoparlante",
      "IP54 Polvere & Sudore"
    ],
    "fullSpecs": {
      "Processore Acustico": "Chip Apple H2 con equalizzazione adattiva in tempo reale",
      "Riduzione Rumore": "Fino a due volte più efficace rispetto alla prima generazione",
      "Trasparenza": "Modalità Trasparenza adattiva e Rilevamento Conversazione",
      "Custodia MagSafe": "Porta USB-C, chip U1 per localizzazione precisa 'Dov'è' con segnale acustico",
      "Autonomia": "6 ore di ascolto con singola carica, fino a 30 ore con custodia",
      "Garanzia": "24 Mesi Ufficiale Apple"
    },
    "pitch": "L'esperienza audio definitiva per gli utenti iPhone e Mac. Con l'audio adattivo abbassa la musica da solo quando parli con qualcuno.",
    "icon": "audio"
  },
  {
    "id": 31,
    "name": "Sonos Beam Gen 2 Soundbar",
    "brand": "Sonos",
    "category": "audio",
    "modelCode": "BEAM2EU1BLK",
    "barcode": "8717755776655",
    "shelf": "Corsia B1 - Scaffale 3",
    "originalPrice": 549.0,
    "price": 449.0,
    "stock": 4,
    "isPromo": true,
    "specs": [
      "Dolby Atmos 3D",
      "Connessione HDMI eARC",
      "Miglioramento Vocale Dialoghi",
      "Wi-Fi & Apple AirPlay 2",
      "Espandibile con Sub e Rear"
    ],
    "fullSpecs": {
      "Configurazione Audio": "5 amplificatori digitali classe D, 1 tweeter centrale, 4 midwoofer ellittici",
      "Tecnologia Surround": "Elaborazione Dolby Atmos con effetto tridimensionale immersivo",
      "Dialoghi": "Funzione Speech Enhancement per ascoltare dialoghi chiarissimi anche a basso volume",
      "Streaming": "Connessione Wi-Fi ad alta fedeltà con supporto Spotify, Apple Music, Tidal",
      "Garanzia": "24 Mesi Sonos Italia"
    },
    "pitch": "Compatta nelle dimensioni ma potente come un impianto cinema. I dialoghi dei film diventano nitidissimi e si integra con tutto l'ecosistema multiroom Sonos.",
    "icon": "audio"
  },
  {
    "id": 32,
    "name": "Bose QuietComfort Ultra Cuffie",
    "brand": "Bose",
    "category": "audio",
    "modelCode": "880066-0100",
    "barcode": "0178178433221",
    "shelf": "Corsia B1 - Vetrina Audio",
    "originalPrice": 499.0,
    "price": 399.0,
    "stock": 3,
    "isPromo": true,
    "specs": [
      "Audio Spaziale Immersivo Bose",
      "Cancellazione Rumore CustomTune",
      "Comfort Supremo Cuscinetti",
      "Autonomia 24 Ore",
      "Bluetooth 5.3 Multipoint"
    ],
    "fullSpecs": {
      "Tecnologia Sonora": "Bose Immersive Audio per un palcoscenico acustico tridimensionale naturale",
      "Calibrazione": "Tecnologia CustomTune che analizza la forma dell'orecchio per adattare il suono",
      "Comfort": "Materiali ultra-morbidi in pelle sintetica per ascoltare musica ore senza pressione",
      "Modalità Silenziosa": "World-class noise cancelling con modalità Aware per conversare",
      "Garanzia": "24 Mesi Ufficiale Bose Italia"
    },
    "pitch": "Il massimo del comfort al mondo. I morbidi padiglioni e l'innovativo audio immersivo fanno sentire la musica come se provenisse da casse vere davanti a te.",
    "icon": "audio"
  },
  {
    "id": 33,
    "name": "JBL Bar 500 Soundbar con Subwoofer",
    "brand": "JBL",
    "category": "audio",
    "modelCode": "JBLBAR500PROBLKEP",
    "barcode": "6925281998811",
    "shelf": "Corsia B1 - Scaffale 4",
    "originalPrice": 649.0,
    "price": 499.0,
    "stock": 5,
    "isPromo": true,
    "specs": [
      "Potenza Totale 590W",
      "Subwoofer Wireless 10\"",
      "Dolby Atmos 3D",
      "Tecnologia PureVoice",
      "Wi-Fi con AirPlay & Chromecast"
    ],
    "fullSpecs": {
      "Potenza Uscita": "590 Watt RMS totali di impatto cinematografico",
      "Subwoofer": "Subwoofer wireless da 10 pollici (260 mm) per bassi profondi e vibranti",
      "Suono Surround": "MultiBeam e Dolby Atmos virtuale senza diffusori posteriori ingombranti",
      "Calibrazione": "Calibrazione automatica dell'ambiente tramite microfoni interni",
      "Garanzia": "24 Mesi Ufficiale JBL Italia"
    },
    "pitch": "Bassi potenti da far tremare il pavimento grazie al gigantesco subwoofer da 10 pollici senza fili. Perfetta per film d'azione e feste musicali.",
    "icon": "audio"
  },
  {
    "id": 34,
    "name": "Marshall Major IV Cuffie Bluetooth",
    "brand": "Marshall",
    "category": "audio",
    "modelCode": "1005773",
    "barcode": "7340055379881",
    "shelf": "Corsia B1 - Scaffale 2",
    "originalPrice": 149.0,
    "price": 109.0,
    "stock": 8,
    "isPromo": true,
    "specs": [
      "Autonomia Record 80+ Ore",
      "Ricarica Wireless Qi",
      "Suono Caratteristico Marshall",
      "Manopola di Controllo Multidirezionale",
      "Design Iconico Vintage"
    ],
    "fullSpecs": {
      "Driver": "Driver dinamici personalizzati da 40 mm per bassi ruggenti e medi limpidi",
      "Autonomia": "Oltre 80 ore di riproduzione continuativa senza ricaricare",
      "Ricarica": "Supporta ricarica wireless Qi e ricarica rapida (15 minuti danno 15 ore!)",
      "Costruzione": "Pieghevole ultra resistente con finitura in vinile testurizzato stile amplificatore",
      "Garanzia": "24 Mesi Marshall Italia"
    },
    "pitch": "Stile rock intramontabile e autonomia infinita da oltre 80 ore: puoi usarle per settimane intere prima di dover pensare alla ricarica.",
    "icon": "audio"
  },
  {
    "id": 35,
    "name": "Sony HT-S40R Sistema Home Cinema 5.1",
    "brand": "Sony",
    "category": "audio",
    "modelCode": "HTS40R.CEL",
    "barcode": "4548736121122",
    "shelf": "Corsia B1 - Scaffale 5",
    "originalPrice": 399.0,
    "price": 299.0,
    "stock": 6,
    "isPromo": true,
    "specs": [
      "Vero Surround 5.1 Canali",
      "Potenza 600W",
      "Diffusori Posteriori Wireless",
      "Subwoofer Dedicato",
      "HDMI ARC & Bluetooth"
    ],
    "fullSpecs": {
      "Potenza Totale": "600 Watt di potenza pura con decodifica Dolby Digital",
      "Configurazione": "Soundbar a 3 canali + Subwoofer cablato + 2 speaker posteriori con amplificatore wireless",
      "Design": "Evita cavi lunghi dal davanti al retro della stanza grazie al modulo wireless posteriore",
      "Garanzia": "24 Mesi Ufficiale Sony"
    },
    "pitch": "Un vero sistema surround 5.1 con altoparlanti fisici posteriori senza il fastidio di cavi che attraversano il salotto.",
    "icon": "audio"
  },
  {
    "id": 36,
    "name": "JBL Charge 5 Cassa Portatile",
    "brand": "JBL",
    "category": "audio",
    "modelCode": "JBLCHARGE5BLKEU",
    "barcode": "6925281982112",
    "shelf": "Corsia B1 - Vetrina Portatili",
    "originalPrice": 199.0,
    "price": 149.0,
    "stock": 12,
    "isPromo": false,
    "specs": [
      "Suono JBL Original Pro",
      "Impermeabile IP67 Acqua e Sabbia",
      "20 Ore di Autonomia",
      "Powerbank Integrato",
      "Funzione PartyBoost"
    ],
    "fullSpecs": {
      "Acustica": "Driver a lunga escursione, tweeter separato e doppi radiatori passivi per bassi profondi",
      "Resistenza": "Certificazione IP67: resiste a immersioni in acqua e polvere/sabbia",
      "Powerbank": "Batteria da 7500 mAh con porta USB per ricaricare lo smartphone durante la musica",
      "Garanzia": "24 Mesi JBL Italia"
    },
    "pitch": "Lo speaker bluetooth definitivo per mare, piscina o picnic. Robusto, potente e ricarica anche il tuo smartphone se sei a corto di batteria.",
    "icon": "audio"
  },
  {
    "id": 37,
    "name": "Sony PlayStation 5 Slim Digital",
    "brand": "Sony",
    "category": "gaming",
    "modelCode": "CFI-2016B",
    "barcode": "0711719577712",
    "shelf": "Area Gaming - Vetrina Console",
    "originalPrice": 449.99,
    "price": 399.99,
    "stock": 10,
    "isPromo": true,
    "specs": [
      "SSD Ultra-Veloce 1TB",
      "Ray Tracing Hardware",
      "Tempest 3D AudioTech",
      "Controller DualSense Incluso",
      "Design Slim Compatto"
    ],
    "fullSpecs": {
      "Processore": "AMD Ryzen Zen 2 personalizzato a 8 core / 16 thread fino a 3.5 GHz",
      "Scheda Grafica": "Motore grafico RDNA 2 con accelerazione Ray Tracing",
      "Archiviazione": "1 TB SSD proprietario con velocità I/O grezza di 5.5 GB/s",
      "Output Video": "Supporto TV 4K 120Hz, compatibilità 8K e VRR",
      "Feedback": "Feedback aptico e grilletti adattivi dinamici sul controller wireless",
      "Garanzia": "24 Mesi Ufficiale Sony PlayStation Italia"
    },
    "pitch": "La console next-gen più richiesta con capienza aumentata a 1TB di SSD per installare subito tutti i titoli più pesanti.",
    "icon": "laptop"
  },
  {
    "id": 38,
    "name": "Microsoft Xbox Series X 1TB",
    "brand": "Microsoft",
    "category": "gaming",
    "modelCode": "RRT-00008",
    "barcode": "8898426407771",
    "shelf": "Area Gaming - Vetrina Console",
    "originalPrice": 549.99,
    "price": 479.99,
    "stock": 5,
    "isPromo": true,
    "specs": [
      "12 Teraflops di Potenza",
      "Vero 4K Gaming fino a 120 FPS",
      "Lettore Blu-ray 4K UHD",
      "Quick Resume Istantaneo",
      "Xbox Game Pass Ready"
    ],
    "fullSpecs": {
      "Processore": "CPU Zen 2 a 8 core @ 3.8 GHz + GPU RDNA 2 da 12 TFLOPS",
      "Memoria": "16 GB GDDR6 con bus a 320 bit",
      "Archiviazione": "1 TB SSD NVMe personalizzato con architettura Xbox Velocity",
      "Quick Resume": "Passa istantaneamente tra più giochi salvando lo stato esatto in memoria",
      "Garanzia": "24 Mesi Ufficiale Microsoft Italia"
    },
    "pitch": "La console più potente in commercio: 12 Teraflop di pura potenza grafica con lettore disco fisico 4K e accesso al catalogo Game Pass.",
    "icon": "laptop"
  },
  {
    "id": 39,
    "name": "Nintendo Switch Modello OLED",
    "brand": "Nintendo",
    "category": "gaming",
    "modelCode": "HEG-S-KABAA",
    "barcode": "0045496453442",
    "shelf": "Area Gaming - Vetrina Console",
    "originalPrice": 349.99,
    "price": 319.99,
    "stock": 14,
    "isPromo": false,
    "specs": [
      "Schermo OLED 7 Pollici Colori Vivaci",
      "Stand Regolabile Ampio",
      "Memoria Interna 64GB",
      "Porta LAN Cablata nella Base",
      "Modalità Portatile e TV"
    ],
    "fullSpecs": {
      "Display": "7.0 pollici OLED multi-touch capacitivo (colori vividi e nero assoluto)",
      "Audio": "Altoparlanti integrati con suono migliorato",
      "Stand": "Supporto posteriore regolabile per giocare su tavolo da qualsiasi angolazione",
      "Connettività": "Nuova base dock con porta LAN Ethernet integrata per partite online stabili",
      "Garanzia": "24 Mesi Nintendo Italia"
    },
    "pitch": "La console perfetta per giocare in casa e in viaggio con titoli leggendari come Super Mario, Zelda e Pokémon su uno schermo OLED spettacolare.",
    "icon": "laptop"
  },
  {
    "id": 40,
    "name": "ASUS ROG Ally Z1 Extreme",
    "brand": "ASUS",
    "category": "gaming",
    "modelCode": "RC71L-NH001W",
    "barcode": "4711387211122",
    "shelf": "Area Gaming - Banco Prova",
    "originalPrice": 799.0,
    "price": 599.0,
    "stock": 4,
    "isPromo": true,
    "specs": [
      "AMD Ryzen Z1 Extreme",
      "16GB LPDDR5 / 512GB SSD",
      "Display 7\" FHD 120Hz FreeSync",
      "Windows 11 Completo",
      "Ergonomia da Console"
    ],
    "fullSpecs": {
      "Processore": "AMD Ryzen Z1 Extreme (8 core, 16 thread, architettura RDNA 3)",
      "Memoria": "16 GB LPDDR5 6400MHz Dual-Channel",
      "Display": "7 pollici FHD (1920x1080) 120Hz, 500 nit, tempo risposta 7ms, Gorilla Glass Victus",
      "Sistema Operativo": "Windows 11 Home completo: compatibile con Steam, Xbox Game Pass, Epic Games",
      "Garanzia": "24 Mesi Ufficiale ASUS Italia"
    },
    "pitch": "Tutti i tuoi giochi per PC nel palmo della mano: gioca a titoli tripla A su treno, divano o aereo con la massima libertà di Windows 11.",
    "icon": "laptop"
  },
  {
    "id": 41,
    "name": "NVIDIA GeForce RTX 4070 Super",
    "brand": "ASUS",
    "category": "gaming",
    "modelCode": "DUAL-RTX4070S-O12G",
    "barcode": "4711387445511",
    "shelf": "Corsia Componenti - Scaffale C1",
    "originalPrice": 699.0,
    "price": 639.0,
    "stock": 3,
    "isPromo": true,
    "specs": [
      "12GB GDDR6X 192-bit",
      "Architettura Ada Lovelace",
      "DLSS 3.5 Frame Generation",
      "Ray Tracing 3ª Gen",
      "Doppia Ventola Axial-tech"
    ],
    "fullSpecs": {
      "CUDA Cores": "7168 core con frequenza Boost fino a 2550 MHz (OC Mode)",
      "Memoria": "12 GB GDDR6X a 21 Gbps",
      "Tecnologie": "NVIDIA DLSS 3.5 con Frame Generation e Ray Reconstruction, Reflex",
      "Alimentazione": "Connettore 16-pin 12VHPWR (Consumo raccomandato alimentatore 750W)",
      "Garanzia": "36 Mesi Garanzia Produttore"
    },
    "pitch": "La scheda video più consigliata per giocare in 1440p (2K) e 4K a dettagli massimi con Ray Tracing e moltiplicatore di fotogrammi DLSS 3.",
    "icon": "hard-drive"
  },
  {
    "id": 42,
    "name": "Samsung 990 PRO 2TB NVMe SSD",
    "brand": "Samsung",
    "category": "gaming",
    "modelCode": "MZ-V9P2T0BW",
    "barcode": "8806094211122",
    "shelf": "Corsia Componenti - Vetrina SSD",
    "originalPrice": 219.0,
    "price": 169.0,
    "stock": 15,
    "isPromo": true,
    "specs": [
      "Velocità Lettura 7450 MB/s",
      "Velocità Scrittura 6900 MB/s",
      "Interfaccia PCIe 4.0 M.2",
      "DRAM Cache 2GB LPDDR4",
      "Perfetto per PS5 e PC Gaming"
    ],
    "fullSpecs": {
      "Fattore Forma": "M.2 2280 con controller proprietario Samsung Pascal (8nm)",
      "Prestazioni": "Fino a 7450 MB/s in lettura e 6900 MB/s in scrittura sequenziale",
      "Affidabilità": "1200 TBW (Terabyte Scritti) con crittografia hardware AES 256-bit",
      "Software": "Samsung Magician per ottimizzazione prestazioni e aggiornamento firmware",
      "Garanzia": "5 Anni Ufficiale Samsung"
    },
    "pitch": "L'SSD M.2 più veloce e affidabile per espandere la memoria della PlayStation 5 o azzerare i tempi di caricamento su PC da gioco.",
    "icon": "hard-drive"
  },
  {
    "id": 43,
    "name": "Corsair Vengeance DDR5 32GB (2x16)",
    "brand": "Corsair",
    "category": "gaming",
    "modelCode": "CMK32GX5M2B6000C30",
    "barcode": "8400066998811",
    "shelf": "Corsia Componenti - Scaffale C2",
    "originalPrice": 149.0,
    "price": 119.0,
    "stock": 9,
    "isPromo": false,
    "specs": [
      "Velocità 6000 MHz CL30",
      "Kit Dual-Channel 2x16GB",
      "Profilo AMD EXPO & Intel XMP",
      "Dissipatore in Alluminio Puro",
      "Profilo Basso Compatibile"
    ],
    "fullSpecs": {
      "Capacità": "32 GB (2 moduli da 16 GB ciascuno)",
      "Latenza": "CL30 (30-36-36-76) a 1.35V: la latenza ottimale per processori moderni",
      "Compatibilità": "Profili integrati Intel XMP 3.0 e AMD EXPO per overclock facile con un clic da BIOS",
      "Garanzia": "Garanzia a Vita Limitata Corsair"
    },
    "pitch": "Il kit di memorie RAM DDR5 con il miglior tempo di latenza (CL30) a 6000MHz per estrarre il massimo dei fotogrammi da processori Ryzen e Intel.",
    "icon": "hard-drive"
  },
  {
    "id": 44,
    "name": "Logitech G502 HERO Mouse Gaming",
    "brand": "Logitech",
    "category": "gaming",
    "modelCode": "910-005470",
    "barcode": "5099206080263",
    "shelf": "Corsia Periferiche - Banco 1",
    "originalPrice": 89.99,
    "price": 49.99,
    "stock": 20,
    "isPromo": true,
    "specs": [
      "Sensore Ottico HERO 25K",
      "11 Pulsanti Programmabili",
      "Pesi Regolabili (5x 3.6g)",
      "Rotella a Scorrimento Veloce",
      "Illuminazione RGB LIGHTSYNC"
    ],
    "fullSpecs": {
      "Sensore": "Logitech HERO con sensibilità da 100 a 25.600 DPI senza smoothing o accelerazione",
      "Pesi": "5 pesetti rimovibili da 3.6 grammi per personalizzare baricentro e resistenza",
      "Switch Meccanici": "Oltre 50 milioni di clic certificati con tensione a molla metallica",
      "Memoria Integrata": "Salva fino a 5 profili utente direttamente sul mouse",
      "Garanzia": "24 Mesi Logitech Italia"
    },
    "pitch": "Il mouse da gaming più venduto della storia. Ergonomia impeccabile per il palmo della mano, pesi calibrabili e rotella con doppio scatto libero.",
    "icon": "mouse"
  },
  {
    "id": 45,
    "name": "Logitech G PRO X Tastiera Meccanica",
    "brand": "Logitech",
    "category": "gaming",
    "modelCode": "920-009238",
    "barcode": "5099206085511",
    "shelf": "Corsia Periferiche - Banco 1",
    "originalPrice": 149.0,
    "price": 119.0,
    "stock": 6,
    "isPromo": false,
    "specs": [
      "Layout Tenkeyless (TKL)",
      "Switch Meccanici GX Blue Clicky",
      "Cavo Micro-USB Rimovibile",
      "Piedini con Regolazione a 3 Livelli",
      "Design da Esports"
    ],
    "fullSpecs": {
      "Formato": "TKL compatto senza tastierino numerico per lasciare massimo spazio al mouse pad",
      "Switch": "Switch meccanici GX Blue clicky ad alta risposta tattile e sonora",
      "Illuminazione": "RGB programmabile tasto per tasto con memoria interna per tornei",
      "Garanzia": "24 Mesi Ufficiale Logitech"
    },
    "pitch": "Creata con e per i campioni di eSports. Formato compatto che permette di muovere il mouse senza urtare la tastiera durante sessioni competitive.",
    "icon": "mouse"
  },
  {
    "id": 46,
    "name": "Sony DualSense Wireless Controller",
    "brand": "Sony",
    "category": "gaming",
    "modelCode": "CFI-ZCT1W",
    "barcode": "0711719399881",
    "shelf": "Area Gaming - Accessori PS5",
    "originalPrice": 74.99,
    "price": 59.99,
    "stock": 18,
    "isPromo": true,
    "specs": [
      "Feedback Aptico Immersivo",
      "Grilletti Adattivi L2/R2",
      "Microfono Integrato con Mute",
      "Touchpad Multitouch",
      "Compatibile con PS5, PC, iOS & Android"
    ],
    "fullSpecs": {
      "Innovazione": "Doppi attuatori aptici per simulare pioggia, asfalto, sabbia e rinculo delle armi",
      "Grilletti Dinamici": "Resistenza variabile che fa percepire la corda di un arco o i freni di un'auto",
      "Connettività": "Bluetooth e USB-C con presa jack 3.5 mm per cuffie",
      "Garanzia": "24 Mesi Sony Interactive Entertainment"
    },
    "pitch": "Il controller più immersivo mai realizzato: i grilletti offrono resistenza fisica realistica e si connette via Bluetooth anche al PC e smartphone.",
    "icon": "laptop"
  },
  {
    "id": 47,
    "name": "Alimentatore Corsair RM750e 750W",
    "brand": "Corsair",
    "category": "gaming",
    "modelCode": "CP-9020262-EU",
    "barcode": "8400066991122",
    "shelf": "Corsia Componenti - Scaffale C3",
    "originalPrice": 129.0,
    "price": 99.0,
    "stock": 7,
    "isPromo": false,
    "specs": [
      "Certificazione 80 PLUS Gold",
      "Completamente Modulare",
      "Cavo Nativo PCIe 5.0 12VHPWR",
      "Ventola Silenziosa con Modalità Zero RPM",
      "Condensatori 105°C"
    ],
    "fullSpecs": {
      "Efficienza": "80 PLUS Gold (fino al 90% di efficienza termica a carichi medi)",
      "Standard ATX": "Compatibile con ATX 3.0 e PCIe 5.0 pronto per schede NVIDIA RTX serie 40",
      "Cavi": "Completamente modulari a nastro piatto per un cable management pulito nel case",
      "Garanzia": "7 Anni Ufficiale Corsair"
    },
    "pitch": "Il cuore sicuro del tuo PC: certificazione 80 Plus Gold per bassi consumi in bolletta, cavo dedicato per le nuove RTX serie 40 e 7 anni di garanzia.",
    "icon": "hard-drive"
  },
  {
    "id": 48,
    "name": "Dissipatore a Liquido DeepCool LS520",
    "brand": "DeepCool",
    "category": "gaming",
    "modelCode": "R-LS520-BKAMNT-G-1",
    "barcode": "6933412727881",
    "shelf": "Corsia Componenti - Scaffale C3",
    "originalPrice": 109.0,
    "price": 89.0,
    "stock": 0,
    "isPromo": false,
    "specs": [
      "Radiatore 240mm in Alluminio",
      "Pompa ad Alta Efficienza 4ª Gen",
      "2x Ventole FC120 A-RGB",
      "Tecnologia Anti-Leak",
      "Compatibile Intel LGA1700 & AMD AM5"
    ],
    "fullSpecs": {
      "Pompa": "Motore trifase a 3100 RPM con piastra in rame ad alta densità di microcanali",
      "Sicurezza": "Valvola brevettata DeepCool Anti-Leak per la regolazione automatica della pressione interna",
      "Illuminazione": "Piastra a specchio infinito RGB personalizzabile con il proprio logo",
      "Garanzia": "5 Anni DeepCool"
    },
    "pitch": "Raffreddamento a liquido potente e silenzioso con tecnologia brevettata a prova di perdite e splendido effetto a specchio infinito sulla pompa.",
    "icon": "hard-drive"
  },
  {
    "id": 49,
    "name": "Samsung Odyssey G5 27\" Curvo 165Hz",
    "brand": "Samsung",
    "category": "accessori",
    "modelCode": "LS27CG552EUXEN",
    "barcode": "8806095221199",
    "shelf": "Corsia Monitor - Parete 1",
    "originalPrice": 279.0,
    "price": 209.0,
    "stock": 8,
    "isPromo": true,
    "specs": [
      "Display 27\" QHD (2560x1440)",
      "Curvatura Immersiva 1000R",
      "Frequenza 165Hz & 1ms MPRT",
      "AMD FreeSync Premium",
      "Supporto HDR10"
    ],
    "fullSpecs": {
      "Risoluzione": "2K QHD (2560x1440 pixel) per il 77% di spazio visivo in più rispetto al Full HD",
      "Curvatura Schermo": "Raggio 1000R che abbraccia il campo visivo naturale umano riducendo l'affaticamento",
      "Tempo di Risposta": "1 ms MPRT con frequenza di aggiornamento a 165 fotogrammi al secondo",
      "Connessioni": "1x DisplayPort 1.4, 1x HDMI 2.0, Uscita cuffie",
      "Garanzia": "24 Mesi Ufficiale Samsung Italia"
    },
    "pitch": "Il monitor da gaming con il raggio di curvatura 1000R più avvolgente: risoluzione nitida a 1440p per lavorare e giocare senza stancare gli occhi.",
    "icon": "monitor"
  },
  {
    "id": 50,
    "name": "LG UltraGear 27\" IPS 180Hz 1ms",
    "brand": "LG",
    "category": "accessori",
    "modelCode": "27GS75Q-B",
    "barcode": "8806091998811",
    "shelf": "Corsia Monitor - Parete 1",
    "originalPrice": 299.0,
    "price": 239.0,
    "stock": 6,
    "isPromo": true,
    "specs": [
      "Pannello IPS QHD 2K (2560x1440)",
      "180Hz Overclock & 1ms GtG Reale",
      "NVIDIA G-Sync & FreeSync",
      "HDR10 sRGB 99%",
      "Stand Regolabile in Altezza & Pivot 90°"
    ],
    "fullSpecs": {
      "Pannello": "27 pollici IPS con tempo di risposta Gray-to-Gray di 1 ms reale",
      "Ergonomia": "Base ergonomica con regolazione di altezza, inclinazione e rotazione Pivot verticale a 90°",
      "Colori": "Copertura sRGB al 99% per grafica e montaggio video",
      "Garanzia": "24 Mesi Ufficiale LG Italia"
    },
    "pitch": "Colori perfetti da qualsiasi angolazione grazie al pannello IPS e stand completamente regolabile in altezza e verticale (pivot).",
    "icon": "monitor"
  },
  {
    "id": 51,
    "name": "Dell UltraSharp 27\" 4K USB-C Hub",
    "brand": "Dell",
    "category": "accessori",
    "modelCode": "U2723QE",
    "barcode": "5397184654321",
    "shelf": "Corsia Monitor - Banco Business",
    "originalPrice": 699.0,
    "price": 549.0,
    "stock": 3,
    "isPromo": false,
    "specs": [
      "Risoluzione 4K UHD (3840x2160)",
      "Tecnologia IPS Black (Contrasto 2000:1)",
      "Hub USB-C 90W Power Delivery",
      "Porta LAN RJ45 & Switch KVM",
      "98% DCI-P3 Calibrato di Fabbrica"
    ],
    "fullSpecs": {
      "Pannello": "27 pollici IPS Black con neri due volte più profondi rispetto ai display IPS tradizionali",
      "Connettività USB-C": "Un solo cavo USB-C per video 4K, trasmissione dati, connessione internet Ethernet e ricarica notebook a 90W",
      "KVM Switch": "Consente di controllare due computer contemporaneamente con un'unica tastiera e mouse",
      "Garanzia": "36 Mesi Dell con Sostituzione Avanzata Premium Panel"
    },
    "pitch": "Il monitor professionale definitivo: con un solo cavo USB-C alimenta il portatile, trasmette il segnale video 4K e connette internet via cavo.",
    "icon": "monitor"
  },
  {
    "id": 52,
    "name": "Anker Prime Powerbank 20.000mAh 200W",
    "brand": "Anker",
    "category": "accessori",
    "modelCode": "A1336011",
    "barcode": "0194644141122",
    "shelf": "Corsia Accessori - Scaffale D1",
    "originalPrice": 139.99,
    "price": 99.99,
    "stock": 14,
    "isPromo": true,
    "specs": [
      "Potenza Totale 200W",
      "Doppia Porta USB-C da 100W",
      "Display Smart Digitale a Colori",
      "Capacità 20.000 mAh (Ammesso in Aereo)",
      "Ricarica Rapida in 1h15m"
    ],
    "fullSpecs": {
      "Output di Ricarica": "Due porte USB-C e una porta USB-A in grado di erogare fino a 200W complessivi",
      "Display Integrato": "Mostra potenza erogata in tempo reale per ogni porta, stato di carica e salute della batteria",
      "Compatibilità": "Ricarica alla massima velocità MacBook Pro, notebook Windows USB-C, tablet e smartphone",
      "Garanzia": "24 Mesi Ufficiale Anker"
    },
    "pitch": "Ricarica contemporaneamente due computer portatili alla massima velocità. Il display a colori mostra watt, ampere e tempo residuo al secondo.",
    "icon": "hard-drive"
  },
  {
    "id": 53,
    "name": "SanDisk Extreme Portable SSD 1TB",
    "brand": "SanDisk",
    "category": "accessori",
    "modelCode": "SDSSDE61-1T00-G25",
    "barcode": "6196591821122",
    "shelf": "Corsia Accessori - Vetrina Memorie",
    "originalPrice": 149.0,
    "price": 109.0,
    "stock": 18,
    "isPromo": true,
    "specs": [
      "Velocità NVMe fino a 1050 MB/s",
      "Resistente a Cadute fino a 3 Metri",
      "Impermeabile IP65 Acqua & Polvere",
      "Chassis in Silicone con Moschettone",
      "USB-C & USB-A Incluso"
    ],
    "fullSpecs": {
      "Prestazioni": "Velocità di lettura fino a 1050 MB/s e scrittura fino a 1000 MB/s su interfaccia USB 3.2 Gen 2",
      "Protezione": "Chassis rivestito in morbido silicone protettivo, guscio resistente a cadute e pioggia (IP65)",
      "Sicurezza": "Protezione con password e crittografia hardware AES a 256 bit inclusa",
      "Garanzia": "5 Anni Ufficiale Western Digital / SanDisk"
    },
    "pitch": "L'hard disk portatile preferito da fotografi e videomaker: tascabile, ultra veloce per montaggi video 4K e resistente a pioggia, cadute e urti accidentali.",
    "icon": "hard-drive"
  },
  {
    "id": 54,
    "name": "Western Digital My Passport 4TB HDD",
    "brand": "WD",
    "category": "accessori",
    "modelCode": "WDBPKJ0040BBK-WESN",
    "barcode": "7180378698811",
    "shelf": "Corsia Accessori - Scaffale D2",
    "originalPrice": 139.0,
    "price": 114.0,
    "stock": 12,
    "isPromo": false,
    "specs": [
      "Spazio Gigantesco da 4 Terabyte",
      "USB 3.2 Gen 1 Plug & Play",
      "Software WD Backup Automatico",
      "Protezione Password Hardware",
      "Design Sottile Tascabile"
    ],
    "fullSpecs": {
      "Capacità": "4 TB (equivalente a oltre 1 milione di foto o centinaia di film in alta definizione)",
      "Compatibilità": "Formattato per Windows 11 e 10 (facilmente riformattabile per Mac Time Machine)",
      "Garanzia": "36 Mesi Ufficiale Western Digital"
    },
    "pitch": "Capienza enorme a costo contenuto: l'ideale per conservare tutti i ricordi di famiglia, foto, video e copie di sicurezza del computer senza intasare la memoria.",
    "icon": "hard-drive"
  },
  {
    "id": 55,
    "name": "Anker Hub USB-C 8-in-1 100W",
    "brand": "Anker",
    "category": "accessori",
    "modelCode": "A83830A1",
    "barcode": "0194644022112",
    "shelf": "Corsia Accessori - Scaffale D1",
    "originalPrice": 69.99,
    "price": 49.99,
    "stock": 16,
    "isPromo": true,
    "specs": [
      "Porta HDMI 4K@60Hz",
      "Power Delivery 100W Pass-Through",
      "Porta LAN Gigabit Ethernet",
      "2x USB-A 3.2 10Gbps + 1x USB-C Dati",
      "Lettore Schede SD & MicroSD"
    ],
    "fullSpecs": {
      "Connettori": "8 porte in una scocca compatta in alluminio aerospaziale",
      "Uscita Video": "HDMI con supporto 4K Ultra HD a 60Hz per fluidità perfetta su monitor esterni",
      "Velocità Dati": "Porte USB 3.2 Gen 2 con velocità di trasferimento fino a 10 Gbps",
      "Garanzia": "24 Mesi Anker Italia"
    },
    "pitch": "L'accessorio essenziale per qualsiasi notebook moderno con sole porte USB-C: restituisce HDMI, schede SD, cavo di rete e porte USB classiche.",
    "icon": "hard-drive"
  },
  {
    "id": 56,
    "name": "Logitech Brio 4K Ultra HD Webcam",
    "brand": "Logitech",
    "category": "accessori",
    "modelCode": "960-001106",
    "barcode": "5099206069881",
    "shelf": "Corsia Periferiche - Banco 2",
    "originalPrice": 249.0,
    "price": 169.0,
    "stock": 7,
    "isPromo": true,
    "specs": [
      "Risoluzione 4K Ultra HD / 1080p 60fps",
      "Tecnologia RightLight 3 con HDR",
      "Supporto Riconoscimento Facciale Windows Hello",
      "Doppio Microfono con Cancellazione Rumore",
      "Angolo di Visuale Regolabile (65°/78°/90°)"
    ],
    "fullSpecs": {
      "Ottica": "Obiettivo in vetro autofocus di qualità professionale con zoom digitale 5x",
      "Sicurezza": "Sensore a infrarossi compatibile con Windows Hello per sbloccare il PC con il volto",
      "Regolazione Luce": "RightLight 3 compensa automaticamente controluce, penombra o luce solare diretta",
      "Garanzia": "24 Mesi Logitech Italia"
    },
    "pitch": "La webcam da riferimento per riunioni di lavoro su Teams/Zoom e streaming: illumina il viso anche al buio e permette l'accesso al PC con il volto.",
    "icon": "mouse"
  },
  {
    "id": 57,
    "name": "Anker Caricatore GaN 67W 3 Porte",
    "brand": "Anker",
    "category": "accessori",
    "modelCode": "A2669G11",
    "barcode": "0194644122119",
    "shelf": "Corsia Accessori - Scaffale D1",
    "originalPrice": 49.99,
    "price": 36.99,
    "stock": 22,
    "isPromo": true,
    "specs": [
      "Tecnologia GaNPrime al Nitruro di Gallio",
      "2x USB-C + 1x USB-A",
      "Potenza Singola 67W Max",
      "Dimensioni Ridotte del 51%",
      "Protezione Termica ActiveShield 2.0"
    ],
    "fullSpecs": {
      "Semiconduttori GaN": "I semiconduttori al nitruro di gallio riducono le dimensioni e scaldano la metà rispetto ai caricabatterie tradizionali",
      "Compatibilità": "Ricarica portatili (MacBook Air/Pro, Dell, HP), tablet e tutti gli smartphone Samsung/Apple",
      "Garanzia": "24 Mesi Anker Italia"
    },
    "pitch": "Sostituisce tre caricatori ingombranti: carica insieme computer, smartphone e cuffie con una spina tascabile che non scalda.",
    "icon": "hard-drive"
  },
  {
    "id": 58,
    "name": "Supporto Notebook Alluminio Regolabile",
    "brand": "UGREEN",
    "category": "accessori",
    "modelCode": "LP339-40289",
    "barcode": "6957303842111",
    "shelf": "Corsia Accessori - Scaffale D3",
    "originalPrice": 39.99,
    "price": 27.99,
    "stock": 19,
    "isPromo": false,
    "specs": [
      "Lega di Alluminio Spazzolato Robusta",
      "Regolazione a Doppio Snodo fino a 20cm",
      "Favorisce la Dissipazione Termica",
      "Gommini Antiscivolo in Silicone",
      "Completamente Pieghevole"
    ],
    "fullSpecs": {
      "Ergonomia": "Solleva lo schermo del portatile all'altezza degli occhi evitando dolori cervicali",
      "Compatibilità": "Adatto a tutti i laptop da 11 fino a 17.3 pollici con portata fino a 5 kg",
      "Garanzia": "24 Mesi Garanzia Produttore"
    },
    "pitch": "Indispensabile per chi lavora molte ore al computer: posiziona lo schermo all'altezza degli occhi correggendo la postura ed evita il surriscaldamento del laptop.",
    "icon": "monitor"
  },
  {
    "id": 59,
    "name": "Tappetino Mousepad XXL 900x400mm",
    "brand": "Corsair",
    "category": "accessori",
    "modelCode": "CH-9417070-WW",
    "barcode": "8400066221199",
    "shelf": "Corsia Periferiche - Banco 3",
    "originalPrice": 34.99,
    "price": 24.99,
    "stock": 15,
    "isPromo": true,
    "specs": [
      "Dimensioni Giganti 900 x 400 mm",
      "Spessore Comfort 3mm",
      "Tessitura ad Alto Scorrimento",
      "Bordi con Cuciture Anti-Sfilacciamento",
      "Base in Gomma Naturale Antiscivolo"
    ],
    "fullSpecs": {
      "Superficie": "Microtessitura ad attrito ultra-basso ottimizzata sia per sensori ottici che laser",
      "Protezione": "Protegge la scrivania da graffi e usura e ospita comodamente tastiera e mouse insieme",
      "Garanzia": "24 Mesi Corsair Italia"
    },
    "pitch": "Copre interamente l'area di lavoro: offre un appoggio morbido per i polsi e una superficie di scorrimento uniforme per il mouse.",
    "icon": "mouse"
  },
  {
    "id": 60,
    "name": "Cavo HDMI 2.1 Ultra High Speed 8K",
    "brand": "UGREEN",
    "category": "accessori",
    "modelCode": "HD140-80403",
    "barcode": "6957303884033",
    "shelf": "Corsia Cavi & Connessioni",
    "originalPrice": 19.99,
    "price": 14.99,
    "stock": 25,
    "isPromo": false,
    "specs": [
      "Certificato Ufficiale HDMI 2.1",
      "Banda Passante 48 Gbps",
      "Supporto 8K@60Hz & 4K@120Hz/144Hz",
      "Compatibile eARC, VRR, ALLM & HDR Dinamico",
      "Guaina Intrecciata in Nylon & Connettori Oro 24K"
    ],
    "fullSpecs": {
      "Specifiche HDMI": "Ultra High Speed certificato con adesivo olografico ufficiale HDMI Forum",
      "Lunghezza": "2 metri con tripla schermatura contro interferenze elettromagnetiche",
      "Compatibilità": "Ideale per PlayStation 5, Xbox Series X, Smart TV OLED e schede RTX serie 40",
      "Garanzia": "24 Mesi Ufficiale"
    },
    "pitch": "Certificato per sfruttare i 120Hz su TV 4K e console PS5/Xbox Series X senza sfarfallii o perdite di segnale video.",
    "icon": "hard-drive"
  }
];

// Stato Prodotti & Catalogo
let products = JSON.parse(JSON.stringify(PRODUCTS_DATA));
let filteredProducts = [];
let searchQuery = "";
let selectedCategory = "all";
let selectedBrand = "all";
let sortBy = "featured";
let promoOnly = false;
let inStockOnly = false;

// Stato Carrello & Cassa POS
let cart = [];
let currentPaymentMethod = "cash";
let posSimulatedAuth = null;
let lastCompletedSale = null;

// Elementi DOM Principali
const productsGrid = document.getElementById("products-grid");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("search-input");
const brandSelect = document.getElementById("brand-select");
const sortSelect = document.getElementById("sort-select");
const togglePromoOnly = document.getElementById("toggle-promo-only");
const toggleInstockOnly = document.getElementById("toggle-instock-only");
const btnResetFilters = document.getElementById("btn-reset-filters");

// Elementi Cassa Drawer (Identici a BiblioTech)
const btnOpenCart = document.getElementById("btn-open-cart");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartCountBadge = document.getElementById("cartCountBadge");
const cartEmptyState = document.getElementById("cartEmptyState");
const cartItemsList = document.getElementById("cartItemsList");
const cartDrawerFooter = document.getElementById("cartDrawerFooter");
const cartTotalItems = document.getElementById("cartTotalItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartIva = document.getElementById("cartIva");
const cartGrandTotal = document.getElementById("cartGrandTotal");

// Elementi Pagamento
const payMethodCash = document.getElementById("payMethodCash");
const payMethodPos = document.getElementById("payMethodPos");
const cashPaymentBox = document.getElementById("cashPaymentBox");
const posPaymentBox = document.getElementById("posPaymentBox");
const cashReceivedInput = document.getElementById("cashReceivedInput");
const cashExactBtn = document.getElementById("cashExactBtn");
const changeDueBox = document.getElementById("changeDueBox");
const changeDueValue = document.getElementById("changeDueValue");
const posStatusText = document.getElementById("posStatusText");
const posSimulateBtn = document.getElementById("posSimulateBtn");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

// Modale Scontrino Fiscale
const receiptModal = document.getElementById("receiptModal");
const receiptOverlay = document.getElementById("receiptOverlay");
const receiptDate = document.getElementById("receiptDate");
const receiptDocId = document.getElementById("receiptDocId");
const receiptItemsContainer = document.getElementById("receiptItemsContainer");
const receiptSubtotalAmount = document.getElementById("receiptSubtotalAmount");
const receiptIvaAmount = document.getElementById("receiptIvaAmount");
const receiptTotalAmount = document.getElementById("receiptTotalAmount");
const receiptPaymentType = document.getElementById("receiptPaymentType");
const receiptCashRow = document.getElementById("receiptCashRow");
const receiptCashReceived = document.getElementById("receiptCashReceived");
const receiptChangeRow = document.getElementById("receiptChangeRow");
const receiptChangeAmount = document.getElementById("receiptChangeAmount");
const receiptPosRow = document.getElementById("receiptPosRow");
const receiptPosAuth = document.getElementById("receiptPosAuth");
const downloadPdfReceiptBtn = document.getElementById("downloadPdfReceiptBtn");
const printReceiptBtn = document.getElementById("printReceiptBtn");
const closeReceiptBtn = document.getElementById("closeReceiptBtn");

// Modal Dettaglio Prodotto
const productModal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-content");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Helper Icone SVG
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

// Inizializzazione
document.addEventListener("DOMContentLoaded", () => {
  populateBrands();
  setupEventListeners();
  applyFilters();
  updateHeaderStats();
});

function populateBrands() {
  if (!brandSelect) return;
  const brands = Array.from(new Set(products.map(p => p.brand))).sort();
  brandSelect.innerHTML = '<option value="all">Tutti i Marchi</option>' +
    brands.map(b => `<option value="${b}">${b}</option>`).join('');
}

function setupEventListeners() {
  // Ricerca
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // Category Pills
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedCategory = pill.dataset.category;
      applyFilters();
    });
  });

  // Brand
  brandSelect.addEventListener("change", (e) => {
    selectedBrand = e.target.value;
    applyFilters();
  });

  // Sort
  sortSelect.addEventListener("change", (e) => {
    sortBy = e.target.value;
    applyFilters();
  });

  // Toggles
  togglePromoOnly.addEventListener("change", (e) => {
    promoOnly = e.target.checked;
    applyFilters();
  });
  toggleInstockOnly.addEventListener("change", (e) => {
    inStockOnly = e.target.checked;
    applyFilters();
  });

  btnResetFilters.addEventListener("click", resetAllFilters);

  // Modal Dettaglio
  modalCloseBtn.addEventListener("click", closeModal);
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeModal();
  });

  // Cassa Drawer (Identico a BiblioTech)
  btnOpenCart.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  clearCartBtn.addEventListener("click", clearCart);

  // Metodi Pagamento (Contanti / POS)
  payMethodCash.addEventListener("click", () => setPaymentMethod("cash"));
  payMethodPos.addEventListener("click", () => setPaymentMethod("pos"));

  // Input contanti
  cashReceivedInput.addEventListener("input", calculateCashChange);

  // Quick cash buttons
  cashExactBtn.addEventListener("click", () => {
    const total = getCartTotal();
    cashReceivedInput.value = total.toFixed(2);
    calculateCashChange();
  });

  const quickBtns = document.querySelectorAll(".btn-cash-quick[data-amount]");
  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const add = parseFloat(btn.dataset.amount);
      let cur = parseFloat(cashReceivedInput.value) || 0;
      cashReceivedInput.value = (cur + add).toFixed(2);
      calculateCashChange();
    });
  });

  // Simulatore POS
  posSimulateBtn.addEventListener("click", simulatePosPayment);

  // Checkout
  checkoutBtn.addEventListener("click", processCheckout);

  // Modale Scontrino Fiscale
  downloadPdfReceiptBtn.addEventListener("click", downloadReceiptPdf);
  printReceiptBtn.addEventListener("click", () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      downloadReceiptPdf();
    } else {
      window.print();
    }
  });
  closeReceiptBtn.addEventListener("click", closeReceipt);
  receiptOverlay.addEventListener("click", closeReceipt);

  // Tasto ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
      closeReceipt();
    }
  });
}

// Logica di Filtraggio
function applyFilters() {
  let list = [...products];

  if (selectedCategory !== "all") {
    list = list.filter(p => p.category === selectedCategory);
  }

  if (selectedBrand !== "all") {
    list = list.filter(p => p.brand.toLowerCase() === selectedBrand.toLowerCase());
  }

  if (promoOnly) {
    list = list.filter(p => p.isPromo);
  }

  if (inStockOnly) {
    list = list.filter(p => p.stock > 0);
  }

  if (searchQuery !== "") {
    list = list.filter(p => {
      const matchName = p.name.toLowerCase().includes(searchQuery);
      const matchModel = p.modelCode.toLowerCase().includes(searchQuery);
      const matchBarcode = p.barcode.includes(searchQuery);
      const matchBrand = p.brand.toLowerCase().includes(searchQuery);
      const matchSpecs = p.specs.some(s => s.toLowerCase().includes(searchQuery));
      return matchName || matchModel || matchBarcode || matchBrand || matchSpecs;
    });
  }

  switch (sortBy) {
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

  filteredProducts = list;
  renderProducts();
}

// Rendering Catalogo Prodotti
function renderProducts() {
  resultsCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? 'articolo visualizzato' : 'articoli visualizzati'}`;

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  productsGrid.innerHTML = filteredProducts.map(p => {
    const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    const isLowStock = p.stock > 0 && p.stock <= 3;
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
            <h3>${escapeHtml(p.name)}</h3>
            <div class="product-model">Mod: ${escapeHtml(p.modelCode)}</div>

            <div class="specs-list">
              ${p.specs.slice(0, 3).map(s => `<span class="spec-chip">${escapeHtml(s)}</span>`).join('')}
            </div>

            <div class="retail-meta">
              <span>EAN: ${p.barcode}</span>
              <span class="retail-shelf">${escapeHtml(p.shelf)}</span>
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
              Scheda
            </button>
            <button class="btn btn-primary" onclick="addToCart(${p.id})" ${isOutOfStock ? 'disabled title="Esaurito a magazzino"' : 'title="Aggiungi alla Cassa POS"'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              ${isOutOfStock ? 'Esaurito' : '+ Cassa'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function updateHeaderStats() {
  document.getElementById("stat-total-count").textContent = products.length;
  document.getElementById("stat-instock-count").textContent = products.filter(p => p.stock > 0).length;
  document.getElementById("stat-promo-count").textContent = products.filter(p => p.isPromo).length;
}

// Modal Scheda Tecnica
function openProductModal(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;

  let specsRows = "";
  for (const [key, value] of Object.entries(p.fullSpecs)) {
    specsRows += `
      <tr>
        <td class="spec-prop">${escapeHtml(key)}</td>
        <td class="spec-val">${escapeHtml(value)}</td>
      </tr>
    `;
  }

  modalContent.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-icon-lg">
        ${getProductSvg(p.icon)}
      </div>
      <div class="modal-title-area">
        <span class="brand-badge">${escapeHtml(p.brand)}</span>
        <h2>${escapeHtml(p.name)}</h2>
        <div class="modal-subtitle">Codice Modello: <strong>${escapeHtml(p.modelCode)}</strong> &bull; Barcode EAN: <strong>${p.barcode}</strong> &bull; Ubicazione: <strong>${escapeHtml(p.shelf)}</strong></div>
      </div>
    </div>

    <!-- Guida alla Vendita & Consulenza Cliente -->
    <div class="consultation-box">
      <h4>💡 Guida alla Vendita & Consulenza per il Cliente</h4>
      <p>${escapeHtml(p.pitch)}</p>
    </div>

    <h3 style="font-size: 1rem; margin-top: 1.5rem; color: #fff;">Specifiche Tecniche Hardware Dettagliate</h3>
    <table class="specs-table">
      <tbody>
        ${specsRows}
      </tbody>
    </table>

    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Prezzo Retail IVA Inclusa (22%)</div>
        <div style="font-size: 1.75rem; font-weight: 800; font-family: var(--font-mono); color: var(--accent-cyan);">
          € ${p.price.toFixed(2).replace('.', ',')}
          ${p.originalPrice ? `<span style="font-size: 0.9rem; text-decoration: line-through; color: var(--text-dim); margin-left: 0.5rem;">€ ${p.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
      </div>

      <button class="btn btn-primary" onclick="addToCart(${p.id}); closeModal();" ${p.stock === 0 ? 'disabled' : ''}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        ${p.stock === 0 ? 'Esaurito a magazzino' : 'Aggiungi alla Cassa POS'}
      </button>
    </div>
  `;

  productModal.classList.add("open");
}

function closeModal() {
  productModal.classList.remove("open");
}

function resetAllFilters() {
  searchQuery = "";
  selectedCategory = "all";
  selectedBrand = "all";
  sortBy = "featured";
  promoOnly = false;
  inStockOnly = false;

  searchInput.value = "";
  brandSelect.value = "all";
  sortSelect.value = "featured";
  togglePromoOnly.checked = false;
  toggleInstockOnly.checked = false;

  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === "all");
  });

  applyFilters();
}

// =========================================================================
// GESTIONE CASSA & CARRELLO (IDENTICO A BIBLIOTECH)
// =========================================================================
function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  calculateCashChange();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

window.addToCart = function(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  if (prod.stock <= 0) {
    alert(`"${prod.name}" è esaurito a magazzino!`);
    return;
  }

  const existing = cart.find(item => item.id === id);
  if (existing) {
    if (existing.quantity < prod.stock) {
      existing.quantity += 1;
    } else {
      alert(`Hai già inserito nella cassa tutti i ${prod.stock} pezzi disponibili a magazzino!`);
      return;
    }
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      modelCode: prod.modelCode,
      brand: prod.brand,
      barcode: prod.barcode,
      price: Number(prod.price),
      quantity: 1,
      maxStock: prod.stock
    });
  }

  updateCartUI();
  openCart();
};

window.updateCartQty = function(id, delta) {
  const item = cart.find(i => i.id === id);
  const prod = products.find(p => p.id === id);
  if (!item || !prod) return;

  const newQty = item.quantity + delta;
  if (newQty <= 0) {
    cart = cart.filter(i => i.id !== id);
  } else if (newQty > prod.stock) {
    alert(`Disponibilità massima raggiunta (${prod.stock} pezzi a magazzino).`);
    return;
  } else {
    item.quantity = newQty;
  }

  updateCartUI();
};

window.removeFromCart = function(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
};

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Vuoi svuotare la cassa?")) {
    cart = [];
    updateCartUI();
  }
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = getCartTotal();
  const iva = totalAmount * (0.22 / 1.22); // 22% scorporo
  const subtotal = totalAmount - iva;

  // Badge header
  cartCountBadge.textContent = totalQty;
  if (totalQty > 0) {
    cartCountBadge.style.display = "inline-flex";
  } else {
    cartCountBadge.style.display = "none";
  }

  if (cart.length === 0) {
    cartEmptyState.classList.remove("hidden");
    cartItemsList.classList.add("hidden");
    cartDrawerFooter.classList.add("hidden");
    return;
  }

  cartEmptyState.classList.add("hidden");
  cartItemsList.classList.remove("hidden");
  cartDrawerFooter.classList.remove("hidden");

  // Render righe carrello
  cartItemsList.innerHTML = cart.map(item => {
    const sub = item.price * item.quantity;
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <div class="cart-item-title" title="${escapeHtml(item.name)}">${escapeHtml(item.name)}</div>
          <div class="cart-item-author">EAN: ${item.barcode} &bull; Mod: ${escapeHtml(item.modelCode)}</div>
          <div class="cart-item-price">€ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity} = € ${sub.toFixed(2).replace('.', ',')}</div>
        </div>
        <div class="cart-qty-controls">
          <button class="btn-qty" onclick="updateCartQty(${item.id}, -1)" title="Diminuisci">-</button>
          <span class="cart-qty-value">${item.quantity}</span>
          <button class="btn-qty" onclick="updateCartQty(${item.id}, 1)" ${item.quantity >= item.maxStock ? 'disabled' : ''} title="Aumenta">+</button>
          <button class="btn-cart-remove" onclick="removeFromCart(${item.id})" title="Rimuovi">&times;</button>
        </div>
      </div>
    `;
  }).join("");

  cartTotalItems.textContent = `${totalQty} pezzi`;
  cartSubtotal.textContent = `€ ${subtotal.toFixed(2).replace('.', ',')}`;
  cartIva.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  cartGrandTotal.textContent = `€ ${totalAmount.toFixed(2).replace('.', ',')}`;

  calculateCashChange();
}

function setPaymentMethod(method) {
  currentPaymentMethod = method;
  if (method === "cash") {
    payMethodCash.classList.add("active");
    payMethodPos.classList.remove("active");
    cashPaymentBox.classList.remove("hidden");
    posPaymentBox.classList.add("hidden");
  } else {
    payMethodPos.classList.add("active");
    payMethodCash.classList.remove("active");
    posPaymentBox.classList.remove("hidden");
    cashPaymentBox.classList.add("hidden");
  }
}

function calculateCashChange() {
  const total = getCartTotal();
  const received = parseFloat(cashReceivedInput.value);

  if (isNaN(received) || received === 0) {
    changeDueBox.className = "change-box info";
    changeDueBox.innerHTML = `<span>Resto dovuto al cliente:</span><strong>€ 0,00</strong>`;
    return;
  }

  const diff = received - total;
  if (diff >= 0) {
    changeDueBox.className = "change-box info";
    changeDueBox.innerHTML = `<span>Resto dovuto al cliente:</span><strong>€ ${diff.toFixed(2).replace('.', ',')}</strong>`;
  } else {
    changeDueBox.className = "change-box error";
    changeDueBox.innerHTML = `<span>Importo insufficiente:</span><strong>- € ${Math.abs(diff).toFixed(2).replace('.', ',')}</strong>`;
  }
}

function simulatePosPayment() {
  posStatusText.textContent = "⏳ Connessione al circuito bancario in corso...";
  posSimulateBtn.disabled = true;

  setTimeout(() => {
    posSimulatedAuth = "#TS-" + Math.floor(10000 + Math.random() * 90000);
    posStatusText.innerHTML = `✅ <strong>TRANSAZIONE APPROVATA!</strong> Codice AUTH: ${posSimulatedAuth}`;
    posSimulateBtn.disabled = false;
  }, 600);
}

function processCheckout() {
  if (cart.length === 0) {
    alert("La cassa è vuota!");
    return;
  }

  const total = getCartTotal();
  const iva = total * (0.22 / 1.22);
  const subtotal = total - iva;

  let cashGiven = parseFloat(cashReceivedInput.value);
  let change = 0;

  if (currentPaymentMethod === "cash") {
    if (isNaN(cashGiven) || cashGiven < total) {
      if (isNaN(cashGiven) || cashGiven === 0) {
        cashGiven = total;
        change = 0;
      } else {
        alert(`Il contante inserito (€ ${cashGiven.toFixed(2)}) è inferiore al totale dovuto (€ ${total.toFixed(2)})!`);
        cashReceivedInput.focus();
        return;
      }
    } else {
      change = cashGiven - total;
    }
  } else {
    if (!posSimulatedAuth) {
      posSimulatedAuth = "#TS-" + Math.floor(10000 + Math.random() * 90000);
    }
  }

  // 1. Scarico automatico scorte inventario
  cart.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - item.quantity);
    }
  });

  // Salva stato vendita per generatore PDF
  const now = new Date();
  const dateStr = now.toLocaleDateString("it-IT") + " - " + now.toLocaleTimeString("it-IT", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const docId = `DOC #TS-${Math.floor(10000 + Math.random() * 90000)}`;

  lastCompletedSale = {
    docId: docId,
    date: dateStr,
    items: cart.map(i => ({ ...i })),
    subtotal: subtotal,
    iva: iva,
    total: total,
    paymentType: currentPaymentMethod === "cash" ? "CONTANTI" : "CARTA / POS ELETTRONICO",
    cashGiven: cashGiven,
    change: change,
    authCode: posSimulatedAuth
  };

  // 2. Mostra Scontrino Fiscale
  showReceipt(lastCompletedSale);

  // 3. Reset carrello cassa
  cart = [];
  cashReceivedInput.value = "";
  posSimulatedAuth = null;
  posStatusText.textContent = "Pronto per inserimento carta o Contactless...";
  updateCartUI();
  closeCart();

  // Aggiorna catalogo e statistiche
  applyFilters();
  updateHeaderStats();
}

function showReceipt(sale) {
  receiptDate.textContent = sale.date;
  receiptDocId.textContent = sale.docId;
  receiptSubtotalAmount.textContent = `€ ${sale.subtotal.toFixed(2).replace('.', ',')}`;
  receiptIvaAmount.textContent = `€ ${sale.iva.toFixed(2).replace('.', ',')}`;
  receiptTotalAmount.textContent = `€ ${sale.total.toFixed(2).replace('.', ',')}`;
  receiptPaymentType.textContent = sale.paymentType;

  if (sale.paymentType === "CONTANTI") {
    receiptCashRow.style.display = "flex";
    receiptChangeRow.style.display = "flex";
    receiptPosRow.style.display = "none";
    receiptCashReceived.textContent = `€ ${sale.cashGiven.toFixed(2).replace('.', ',')}`;
    receiptChangeAmount.textContent = `€ ${sale.change.toFixed(2).replace('.', ',')}`;
  } else {
    receiptCashRow.style.display = "none";
    receiptChangeRow.style.display = "none";
    receiptPosRow.style.display = "flex";
    receiptPosAuth.textContent = sale.authCode;
  }

  receiptItemsContainer.innerHTML = sale.items.map(item => `
    <div>
      <div class="receipt-item-line">
        <span>${escapeHtml(item.name.substring(0, 24))}</span>
        <span>€ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
      </div>
      <div class="receipt-item-sub">
        ${item.quantity} pz x € ${item.price.toFixed(2).replace('.', ',')} [IVA 22%] &bull; EAN: ${item.barcode}
      </div>
    </div>
  `).join('');

  receiptModal.classList.remove("hidden");
}

function closeReceipt() {
  receiptModal.classList.add("hidden");
}

// ==========================================================================
// Generatore di Scontrino Fiscale & Preventivo in PDF Puro (Mobile & Desktop)
// ==========================================================================
function generateTechReceiptPdfBlob(sale) {
  if (!sale) return null;

  const storeName = "TECHSTORE - ELETTRONICA RETAIL";
  const storeAddr = "P. Vendita: Citta' Sant'Angelo (PE)";
  const operator = "Operatore: Valentyn Haidukov (Cassa 01)";

  const lines = [
    "================================",
    "      " + storeName,
    storeAddr,
    "Data: " + sale.date,
    operator,
    sale.docId,
    "================================",
    ""
  ];

  sale.items.forEach(item => {
    const title = item.name.substring(0, 22);
    const priceStr = "EUR " + (item.price * item.quantity).toFixed(2);
    const pad = Math.max(1, 32 - title.length - priceStr.length);
    lines.push(title + " ".repeat(pad) + priceStr);
    lines.push("  " + item.quantity + " pz x EUR " + item.price.toFixed(2) + " [IVA 22%]");
    lines.push("  EAN: " + item.barcode);
  });

  lines.push("");
  lines.push("--------------------------------");
  const subStr = "EUR " + sale.subtotal.toFixed(2);
  lines.push("IMPONIBILE:       " + " ".repeat(Math.max(1, 32 - 18 - subStr.length)) + subStr);

  const ivaStr = "EUR " + sale.iva.toFixed(2);
  lines.push("IVA 22% SCORPORO: " + " ".repeat(Math.max(1, 32 - 18 - ivaStr.length)) + ivaStr);

  const totStr = "EUR " + sale.total.toFixed(2);
  lines.push("TOTALE COMPLESSIVO: " + " ".repeat(Math.max(1, 32 - 20 - totStr.length)) + totStr);
  lines.push("PAGAMENTO: " + sale.paymentType);

  if (sale.paymentType === "CONTANTI" && sale.cashGiven !== undefined) {
    lines.push("RICEVUTO: EUR " + sale.cashGiven.toFixed(2));
    lines.push("RESTO:    EUR " + sale.change.toFixed(2));
  } else if (sale.authCode) {
    lines.push("CODICE AUTH POS: " + sale.authCode);
  }

  lines.push("================================");
  lines.push("Garanzia Legale 24 Mesi (D.Lgs 206/05)");
  lines.push("Conserva per assistenza tecnica");
  lines.push("||||| ||||||| |||| |||||||| ||||");
  lines.push("GRAZIE PER LA VISITA!");
  lines.push("hv94.github.io/tech-store-catalog");

  const pageHeight = Math.max(420, lines.length * 15 + 90);
  const startY = pageHeight - 35;

  let stream = "BT\n/F1 9 Tf\n14 TL\n18 " + startY + " Td\n";
  lines.forEach(l => {
    const esc = l.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    stream += "(" + esc + ") '\n";
  });
  stream += "ET\n";

  const streamBytes = new TextEncoder().encode(stream);
  const streamLen = streamBytes.length;

  let body = "%PDF-1.4\n";
  const offsets = [0];

  function addObj(str) {
    offsets.push(new TextEncoder().encode(body).length);
    body += str;
  }

  addObj("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  addObj("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
  addObj("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 227 " + pageHeight + "] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n");
  addObj("4 0 obj\n<< /Length " + streamLen + " >>\nstream\n" + stream + "\nendstream\nendobj\n");
  addObj("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>\nendobj\n");

  const startxref = new TextEncoder().encode(body).length;
  let xref = "xref\n0 6\n0000000000 65535 f \n";
  for (let i = 1; i <= 5; i++) {
    xref += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  }
  const trailer = "trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n" + startxref + "\n%%EOF\n";

  return new Blob([new TextEncoder().encode(body + xref + trailer)], { type: "application/pdf" });
}

function downloadReceiptPdf() {
  if (!lastCompletedSale) {
    alert("Nessun dato di vendita recente da scaricare!");
    return;
  }

  const pdfBlob = generateTechReceiptPdfBlob(lastCompletedSale);
  if (!pdfBlob) {
    alert("Errore nella generazione dello scontrino PDF.");
    return;
  }

  const fileName = "scontrino_techstore_" + Date.now() + ".pdf";
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (downloadPdfReceiptBtn) {
    const originalText = downloadPdfReceiptBtn.innerHTML;
    downloadPdfReceiptBtn.innerHTML = "⏳ Download in corso...";
    downloadPdfReceiptBtn.disabled = true;
    setTimeout(() => {
      downloadPdfReceiptBtn.innerHTML = originalText;
      downloadPdfReceiptBtn.disabled = false;
    }, 2500);
  }

  // 1. Smartphone: Web Share API nativa con file PDF reale
  if (isMobile && typeof navigator.share === "function" && typeof File !== "undefined") {
    try {
      const file = new File([pdfBlob], fileName, { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
          files: [file],
          title: "Scontrino Fiscale TechStore",
          text: "Scontrino TechStore - Totale: EUR " + lastCompletedSale.total.toFixed(2)
        }).catch(err => {
          if (err && err.name !== "AbortError") {
            fallbackMobilePdf(pdfBlob, fileName);
          }
        });
        return;
      }
    } catch (shareErr) {
      console.warn("Web Share API non disponibile:", shareErr);
    }
  }

  // 2. Fallback mobile
  if (isMobile) {
    fallbackMobilePdf(pdfBlob, fileName);
    return;
  }

  // 3. Desktop download diretto classico
  triggerDirectDownload(pdfBlob, fileName);
}

function fallbackMobilePdf(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  if (!win) {
    triggerDirectDownload(blob, fileName);
  } else {
    setTimeout(() => URL.revokeObjectURL(url), 120000);
  }
}

function triggerDirectDownload(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

// Utility anti-XSS
function escapeHtml(str) {
  if (!str) return "";
  return str.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Esporta su window per onclick inline
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.resetAllFilters = resetAllFilters;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.closeReceipt = closeReceipt;
