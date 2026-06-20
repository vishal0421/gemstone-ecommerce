const products = [
  {
    id: 'gemstone-bead-necklace',
    name: 'Gemstone Bead Necklace',
    description: 'Handcrafted bead necklace with powerful healing energy.',
    price: 49,
    category: 'Necklace',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/334628244/FR/NL/HZ/105984570/gemstone-bead-necklace-250x250.png',
    rating: 4.9
  },
  {
    id: 'crystal-bracelet',
    name: 'Crystal Bracelet',
    description: 'Elegant bracelet infused with chakra-balancing crystal beads.',
    price: 39,
    category: 'Bracelet',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/NG/TH/VD/105984570/71c8nvsyzvl-ul1500--250x250.jpg',
    rating: 4.8
  },
  {
    id: 'natural-gemstone-pendant',
    name: 'Natural Gemstone Pendant',
    description: 'Premium pendant carved from authentic gemstones.',
    price: 59,
    category: 'Pendant',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/365967085/AW/OC/GY/105984570/14-250x250.png',
    rating: 4.9
  },
  {
    id: 'healing-stone-bracelet',
    name: 'Healing Stone Bracelet',
    description: 'Balance your energy with this refined stone bracelet.',
    price: 42,
    category: 'Bracelet',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/323610039/VY/UR/SS/105984570/8-250x250.png',
    rating: 4.7
  },
  {
    id: 'crystal-pyramid',
    name: 'Crystal Pyramid',
    description: 'Luxury crystal pyramid to elevate any meditation space.',
    price: 72,
    category: 'Decor',
    image: 'https://5.imimg.com/data5/SELLER/Default/2026/3/593715332/ZO/BU/QF/105984570/91-250x250.png',
    rating: 4.9
  },
  {
    id: 'natural-crystal-tree',
    name: 'Natural Crystal Tree',
    description: 'Ornamental crystal tree with brilliant healing glow.',
    price: 85,
    category: 'Decor',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/345411903/TQ/FX/LE/105984570/33-250x250.png',
    rating: 5.0
  },
  {
    id: 'orgone-energy-pyramid',
    name: 'Orgone Energy Pyramid',
    description: 'High-vibration pyramid for harmony and protection.',
    price: 68,
    category: 'Decor',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/6/518977605/DT/VX/RM/105984570/227-250x250.png',
    rating: 4.8
  },
  {
    id: 'healing-crystal-set',
    name: 'Healing Crystal Set',
    description: 'Curated crystal set for spiritual rituals and gifting.',
    price: 95,
    category: 'Set',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/6/520022397/GG/RZ/SK/105984570/231-250x250.png',
    rating: 4.9
  },
  {
    id: 'orgone-generator',
    name: 'Orgone Generator',
    description: 'Premium energy generator for home balance and clarity.',
    price: 89,
    category: 'Decor',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/10/554736022/HB/DJ/MM/105984570/orgone-57-250x250.png',
    rating: 4.8
  },
  {
    id: 'gemstone-bracelet-premium',
    name: 'Gemstone Bracelet Premium',
    description: 'Luxury premium bracelet with an elevated gemstone finish.',
    price: 55,
    category: 'Bracelet',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/3/494474381/CU/GZ/AD/105984570/81kaaip7ljl-sl1500-250x250.jpg',
    rating: 4.9
  },
  {
    id: 'natural-crystal-decor',
    name: 'Natural Crystal Decor',
    description: 'Refined crystal decor accent for luxury interiors.',
    price: 47,
    category: 'Decor',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/3/497682011/MI/XM/LJ/105984570/74-250x250.png',
    rating: 4.8
  },
  {
    id: 'raw-pyrite-7-horses',
    name: 'Raw Pyrite 7 Horses',
    description: 'Premium pyrite sculpture for abundance and wellness.',
    price: 102,
    category: 'Decor',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/547124824/RS/EL/PN/105984570/natural-raw-pyrite-frame-with-7-horses-wholesale-vastu-feng-shui-decor-250x250.png',
    rating: 4.7
  },
  {
    id: 'gemstone-healing-product',
    name: 'Gemstone Healing Product',
    description: 'Premium healing product designed for mindful rituals.',
    price: 69,
    category: 'Set',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/8/533401024/IZ/YI/SK/105984570/308-copy-2-250x250.png',
    rating: 4.9
  },
  {
    id: 'premium-crystal-collection',
    name: 'Premium Crystal Collection',
    description: 'Curated luxury crystal collection for scintillating style.',
    price: 120,
    category: 'Collection',
    image: 'https://5.imimg.com/data5/SELLER/Default/2026/4/600018316/LD/YK/QC/105984570/326-250x250.png',
    rating: 5.0
  },
  {
    id: 'spiritual-energy-product',
    name: 'Spiritual Energy Product',
    description: 'Elegant spiritual product engineered for energy transformation.',
    price: 53,
    category: 'Bracelet',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/513982320/YC/RE/XN/105984570/179-250x250.png',
    rating: 4.8
  },
  {
    id: 'crystal-decor-item',
    name: 'Crystal Decor Item',
    description: 'Minimalist decor item crafted with curated crystal details.',
    price: 38,
    category: 'Decor',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/447245057/BP/NC/IR/105984570/58-250x250.png',
    rating: 4.6
  }
];

export default products;
