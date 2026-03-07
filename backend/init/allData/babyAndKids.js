const babyAndKids = [
  //Baby & Kids

  {
    id: "PROD101",
    itemName: "Convertible Baby Car Seat",
    brand: "LittleGuardian",
    description: "Safe car seat with recline.",
    category: "Baby & Kids",

    price: 8999,
    mrp: 10499,
    discountPercentage: 14,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/61+pNd4MC6L.AC_SX500.jpg"],

    stock: 45,

    ratings: {
      average: 4.6,
      totalReviews: 218,
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
    id: "PROD102",
    itemName: "Silicone Baby Feeding Set",
    brand: "TinyBites",
    description: "Plate, bowl and spoon set.",
    category: "Baby & Kids",

    price: 899,
    mrp: 1099,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9V3JD4JIB6SeiExdza0HBghhVDs1yDS78ag&s",
    ],

    stock: 120,

    ratings: {
      average: 4.5,
      totalReviews: 143,
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
    id: "PROD103",
    itemName: "Learning Tablet (Ages 3–7)",
    brand: "SmartTots",
    description: "Educational kids tablet.",
    category: "Baby & Kids",

    price: 3999,
    mrp: 4499,
    discountPercentage: 11,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/71Gle25tz5L._UF1000,1000_QL80_.jpg",
    ],

    stock: 60,

    ratings: {
      average: 4.3,
      totalReviews: 189,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD104",
    itemName: "Organic Cotton Baby Onesie",
    brand: "SnuggleBug",
    description: "3-pack breathable onesie.",
    category: "Baby & Kids",

    price: 1099,
    mrp: 1299,
    discountPercentage: 15,
    currency: "INR",

    images: [
      "https://image.hm.com/assets/hm/55/73/5573e0d18c80ab19c8dfc0c14cc997fea0d2a9cb.jpg?imwidth=1260",
    ],

    stock: 150,

    ratings: {
      average: 4.4,
      totalReviews: 167,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD105",
    itemName: "Wooden Building Blocks",
    brand: "BuildBright",
    description: "50-piece colorful block set.",
    category: "Baby & Kids",

    price: 799,
    mrp: 999,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/81tnEH0VoOL._UF1000,1000_QL80_.jpg",
    ],

    stock: 110,

    ratings: {
      average: 4.6,
      totalReviews: 211,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD106",
    itemName: "Soft Plush Teddy Bear",
    brand: "CuddleToy",
    description: "Large cuddly teddy bear.",
    category: "Baby & Kids",

    price: 699,
    mrp: 899,
    discountPercentage: 22,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/51E9WfTeELL._UF1000,1000_QL80_.jpg",
    ],

    stock: 140,

    ratings: {
      average: 4.5,
      totalReviews: 190,
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

  {
    id: "PROD107",
    itemName: "Kids Study Table Set",
    brand: "LearnMate",
    description: "Adjustable table and chair.",
    category: "Baby & Kids",

    price: 2799,
    mrp: 3299,
    discountPercentage: 15,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/4125rGg9+6L._SR290,290_.jpg"],

    stock: 70,

    ratings: {
      average: 4.3,
      totalReviews: 121,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 4,
      deliveryCharge: 40,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD108",
    itemName: "Baby Stroller",
    brand: "EasyMove",
    description: "Lightweight foldable stroller.",
    category: "Baby & Kids",

    price: 4999,
    mrp: 5899,
    discountPercentage: 15,
    currency: "INR",

    images: [
      "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/33361241/2025/3/31/f0431428-f8ca-41b5-88f4-6c1a16d4cc3a1743430949721-Juniors-by-BabyshopJuniors-Guardian-Baby-Stroller-5961743430-1.jpg",
    ],

    stock: 55,

    ratings: {
      average: 4.5,
      totalReviews: 201,
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
    id: "PROD109",
    itemName: "Kids Water Bottle (350ml)",
    brand: "FunSip",
    description: "Leak-proof cartoon bottle.",
    category: "Baby & Kids",

    price: 299,
    mrp: 349,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://baboons.in/cdn/shop/files/baboons_350ml_stainless_steel_water_bottle_with_pomegranate_design_and_sipper_straw_lid.jpg?v=1720764676",
    ],

    stock: 200,

    ratings: {
      average: 4.2,
      totalReviews: 88,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 15,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD110",
    itemName: "Baby Blanket",
    brand: "CozyCot",
    description: "Soft cotton baby blanket.",
    category: "Baby & Kids",

    price: 499,
    mrp: 649,
    discountPercentage: 23,
    currency: "INR",

    images: [
      "https://nanahuchy.com.au/cdn/shop/files/personalised-baby-blanket-bobble-pink-nana-huchy-1152094357_1000x.jpg?v=1743077203",
    ],

    stock: 130,

    ratings: {
      average: 4.6,
      totalReviews: 175,
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

  {
    id: "PROD111",
    itemName: "Baby Video Monitor",
    brand: "SafeSight",
    description: "Night vision camera with two-way audio.",
    category: "Baby & Kids",

    price: 4500,
    mrp: 5200,
    discountPercentage: 13,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTi4FFrWviLawoU_3AtN1dbngXgyTmp8BHM2cPty36GHt5ksZfEvvzlr9_3pxItt6YK4ntD1vBicSzfHgbJ0m5m7x7NyA8DANUffZ4Y3c96O-pAqyCeB521ZhgWAihQI1pwjAc-jMyQxA&usqp=CAc",
    ],

    stock: 60,

    ratings: {
      average: 4.4,
      totalReviews: 152,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 35,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD112",
    itemName: "Musical Crib Mobile",
    brand: "DreamyNights",
    description: "Rotating mobile with soothing lullabies.",
    category: "Baby & Kids",

    price: 1299,
    mrp: 1599,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/31ejO8XoUuL._SY300_SX300_QL70_FMwebp_.jpg",
    ],

    stock: 95,

    ratings: {
      average: 4.5,
      totalReviews: 110,
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

  {
    id: "PROD113",
    itemName: "Silicone Teething Toy",
    brand: "TinyBites",
    description: "BPA-free easy-grip teether.",
    category: "Baby & Kids",

    price: 349,
    mrp: 420,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/41hpImfhjRL._SY300_SX300_QL70_FMwebp_.jpg",
    ],

    stock: 200,

    ratings: {
      average: 4.3,
      totalReviews: 89,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 15,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD114",
    itemName: "Toddler Backpack",
    brand: "LittleJoy",
    description: "Cute animal-themed mini backpack.",
    category: "Baby & Kids",

    price: 899,
    mrp: 1099,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTl9aw_zNi5212tCKhyEvG-2nlio3Z0ZVytd5iM4qFoWOBO8mbS7g06wyXhlk__0BEipzmtdb_YWmzbIPjDm4DpQIYhIaSJcpg3nwMDKtkCP0VJsNHHtZIJ-EQgns_M9y9kkB3eMUE&usqp=CAc",
    ],

    stock: 120,

    ratings: {
      average: 4.4,
      totalReviews: 134,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD115",
    itemName: "Magnetic Tiles Set",
    brand: "BuildBright",
    description: "60-piece 3D magnetic building set.",
    category: "Baby & Kids",

    price: 2499,
    mrp: 2999,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiwfSDrHDNiiWALEx449o1GKgwBCk3x8n6Utn21HYXUTgXrJV6ahmEHEmjJWbBFmH6KURbOygWf0EyQvS5NAc5ILTg9LlBwkqRqFU1TVa9ep5ne-FmFsQRIBrty9iW7-bCESNAnYA&usqp=CAc",
    ],

    stock: 80,

    ratings: {
      average: 4.7,
      totalReviews: 210,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD116",
    itemName: "Bath Toy Set",
    brand: "SplashFun",
    description: "Stacking cups and rubber ducks.",
    category: "Baby & Kids",

    price: 599,
    mrp: 750,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSecOt-vh2uAPAhpkWccZROV87B67tPvXW81d7Iew5TiLVDcbG8BwSNJ1vdC3sKAhd65U5AKtEvMkX9iZL1YusLv53FqeFDx_pXHi4R_Rxak6H4ktjJkO5XnNjQH4JczR9nMW8gZA&usqp=CAc",
    ],

    stock: 160,

    ratings: {
      average: 4.5,
      totalReviews: 141,
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

  {
    id: "PROD117",
    itemName: "Electric Baby Swing",
    brand: "EasyMove",
    description: "5-speed automatic rocking swing.",
    category: "Baby & Kids",

    price: 6500,
    mrp: 7500,
    discountPercentage: 13,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTchiio7LkO_DtObf6t5MD36D6oduAtz-4A15QM19usKalC3B69BgVHmJvhtk3AjRWWmhwKNFAckOmXi9a7vo_0JJGe_dzdLgTI9V8nLeDED2RYFrcxArWtHbtdE7X6ZT3cPus1PKU&usqp=CAc",
    ],

    stock: 50,

    ratings: {
      average: 4.4,
      totalReviews: 118,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 4,
      deliveryCharge: 40,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD118",
    itemName: "Kids Art Easel",
    brand: "LearnMate",
    description: "Double-sided chalkboard and whiteboard.",
    category: "Baby & Kids",

    price: 3200,
    mrp: 3800,
    discountPercentage: 16,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSs68HInlW-lL7p9U8sW5c9n7tzHbF7davW7IqEOcsrF-fDykqM12w_B1R6k7c9j65AXCen2_2AY8cdVXK_uDKDIAiyN-XT-sq_kZ7st_h86fmB9dirNDdDp_KsIwEBIWdCAeoloi0L-A&usqp=CAc",
    ],

    stock: 75,

    ratings: {
      average: 4.6,
      totalReviews: 164,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 35,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD119",
    itemName: "Diaper Bag Organizer",
    brand: "LittleGuardian",
    description: "Multi-pocket waterproof travel bag.",
    category: "Baby & Kids",

    price: 1899,
    mrp: 2199,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LNxkMkce0bresksQWpyp_--gB4eD9n6Pog&s",
    ],

    stock: 100,

    ratings: {
      average: 4.5,
      totalReviews: 137,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD120",
    itemName: "Baby Bath Tub",
    brand: "CozyCot",
    description: "Ergonomic tub with temperature sensor.",
    category: "Baby & Kids",

    price: 1499,
    mrp: 1799,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKrYCpu-41gGNMm3h3Pfa9nRLI4jY-jEvvyxOXMezX-56Caj6ROya5hXwJUIu3wWJp6aoPcs2QPJpoyflSJj6lgrXWNG3XJg&usqp=CAc",
    ],

    stock: 85,

    ratings: {
      average: 4.4,
      totalReviews: 120,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },
  {
    id: "PROD121",
    itemName: "Potty Training Seat",
    brand: "TinyBites",
    description: "Comfortable seat with splash guard.",
    category: "Baby & Kids",

    price: 799,
    mrp: 950,
    discountPercentage: 16,
    currency: "INR",

    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-OionPIOyG5t-OqnMo8WZ1CXRH4Dj4r5tgCOQo1G_Cdl2mM3ZApEIIbkA_s7CTsBfrpDWWoX0RmV1Z80pUxz9KNeHPUV4sHFcGRMoVJIle23LNijPcPJe4YvhCZJ2NzmoOQODwsc9Og&usqp=CAc",
    ],

    stock: 130,

    ratings: {
      average: 4.3,
      totalReviews: 92,
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

  {
    id: "PROD122",
    itemName: "Kids Roller Skates",
    brand: "ActiveShield",
    description: "Adjustable size beginner skates.",
    category: "Baby & Kids",

    price: 2100,
    mrp: 2499,
    discountPercentage: 16,
    currency: "INR",

    images: [
      "https://www.lifelongindiaonline.com/cdn/shop/files/1_4_4eddf604-50e4-4146-847c-ccda324f0900.jpg?v=1752145058&width=940",
    ],

    stock: 75,

    ratings: {
      average: 4.4,
      totalReviews: 141,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD123",
    itemName: "Alphabet Floor Mat",
    brand: "SmartTots",
    description: "Interlocking foam letters mat.",
    category: "Baby & Kids",

    price: 1199,
    mrp: 1499,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/51xO89gDIhL._SY300_SX300_QL70_FMwebp_.jpg",
    ],

    stock: 110,

    ratings: {
      average: 4.5,
      totalReviews: 156,
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

  {
    id: "PROD124",
    itemName: "Baby Carrier Ergonomic",
    brand: "SnuggleBug",
    description: "Front and back carry positions.",
    category: "Baby & Kids",

    price: 3999,
    mrp: 4599,
    discountPercentage: 13,
    currency: "INR",

    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRPjTecgjjKYC4EviG057gko1ohNz6vdk2a80K8v9GyQYsOgUkVBevR_GruWUTSX98kz17y09gwos6xN5RxE7hW0kIifrYQLLkOy8TWKDMSx4sbNq1qMd6f6HaEU1xVvI6VtOPcbQ&usqp=CAc",
    ],

    stock: 65,

    ratings: {
      average: 4.6,
      totalReviews: 178,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 35,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD125",
    itemName: "Night Light Projector",
    brand: "DreamyNights",
    description: "Starry sky room projector for kids.",
    category: "Baby & Kids",

    price: 999,
    mrp: 1299,
    discountPercentage: 23,
    currency: "INR",

    images: [
      "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/24734060/2023/8/30/e1910b2d-eba1-43ff-9c60-f44d0737905b1693391995884StarMoonProjectorLampwithLightLidforNursery1.jpg",
    ],

    stock: 120,

    ratings: {
      average: 4.4,
      totalReviews: 133,
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

module.exports = { data: babyAndKids };
