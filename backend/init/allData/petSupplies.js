const petSupplies = [
  {
    id: "PROD801",
    itemName: "Grain-free Dry Dog Food (5 kg)",
    brand: "Pawsome",
    description: "High-protein formula with real chicken and vegetables.",
    category: "Pet Supplies",

    price: 3490,
    mrp: 3999,
    discountPercentage: 13,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDf7C9alBWzzsjrkDyiD4sxqbVhzVTLQvipw&s",
    ],

    stock: 90,

    ratings: {
      average: 4.6,
      totalReviews: 220,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 50,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD802",
    itemName: "Cat Litter Clumping (10L)",
    brand: "FreshPaws",
    description: "Low-dust clumping litter with odor control.",
    category: "Pet Supplies",

    price: 1247,
    mrp: 1499,
    discountPercentage: 17,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/81seogVHMQL.jpg"],

    stock: 150,

    ratings: {
      average: 4.5,
      totalReviews: 180,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 35,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD803",
    itemName: "Automatic Pet Feeder (Timed)",
    brand: "FeedBuddy",
    description: "Programmable portions and schedule for daily meals.",
    category: "Pet Supplies",

    price: 4991,
    mrp: 5799,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TUc3KGpB2HtNLz1hG4XDPUxVpKs5n3lnTA&s",
    ],

    stock: 70,

    ratings: {
      average: 4.4,
      totalReviews: 135,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 40,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD804",
    itemName: "Interactive Laser Toy for Cats",
    brand: "PlayPurr",
    description:
      "Automatic rotating laser to keep cats active and entertained.",
    category: "Pet Supplies",

    price: 1370,
    mrp: 1599,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/507556450/RX/TJ/PJ/157692127/cat-collar-toy-500x500.jpg",
    ],

    stock: 120,

    ratings: {
      average: 4.3,
      totalReviews: 160,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD805",
    itemName: "Dog Harness (Medium)",
    brand: "WalkSafe",
    description:
      "Padded adjustable harness with reflective strips for evening walks.",
    category: "Pet Supplies",

    price: 1579,
    mrp: 1899,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/71Cf7+jJIcL._UF894,1000_QL80_.jpg",
    ],

    stock: 110,

    ratings: {
      average: 4.5,
      totalReviews: 175,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },
  {
    id: "PROD806",
    itemName: "Orthopedic Dog Bed (Large)",
    brand: "Pawsome",
    description: "Memory foam bed for joint relief and comfort.",
    category: "Pet Supplies",

    price: 3899,
    mrp: 4599,
    discountPercentage: 15,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/91TztABAWGL.jpg"],

    stock: 80,

    ratings: {
      average: 4.6,
      totalReviews: 140,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 45,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD807",
    itemName: "Multi-Level Cat Tree",
    brand: "PlayPurr",
    description: "60-inch tall activity center with scratching posts.",
    category: "Pet Supplies",

    price: 5499,
    mrp: 6299,
    discountPercentage: 13,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQCkl4HkQV_tn8mRZlM8HDMqx4ZWOleVBgQ&s",
    ],

    stock: 60,

    ratings: {
      average: 4.7,
      totalReviews: 125,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 4,
      deliveryCharge: 60,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD808",
    itemName: "Stainless Steel Pet Fountain",
    brand: "FeedBuddy",
    description: "Filtered 2L automatic water dispenser for cats and dogs.",
    category: "Pet Supplies",

    price: 2499,
    mrp: 2899,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://images-cdn.ubuy.com.sa/6626b373662974590f1596c7-stainless-steel-cat-water-fountain.jpg",
    ],

    stock: 100,

    ratings: {
      average: 4.5,
      totalReviews: 150,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 35,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD809",
    itemName: "Pet Grooming Vacuum Kit",
    brand: "FreshPaws",
    description: "Professional deshedding tool with suction attachment.",
    category: "Pet Supplies",

    price: 7999,
    mrp: 8999,
    discountPercentage: 11,
    currency: "INR",

    images: [
      "https://images-cdn.ubuy.co.in/66502c0376607c54540f5e53-pet-grooming-kit-vacuum-suction.jpg",
    ],

    stock: 50,

    ratings: {
      average: 4.6,
      totalReviews: 95,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 4,
      deliveryCharge: 70,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD810",
    itemName: "LED Safety Dog Collar",
    brand: "WalkSafe",
    description: "USB rechargeable glowing collar for night walks.",
    category: "Pet Supplies",

    price: 699,
    mrp: 899,
    discountPercentage: 22,
    currency: "INR",

    images: [
      "https://blazin.io/cdn/shop/products/BLUE-Artboard2_800x.png?v=1674749501",
    ],

    stock: 180,

    ratings: {
      average: 4.4,
      totalReviews: 160,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },
];

export default petSupplies;
