const grocery = [
  //Grocery

  {
    id: "PROD001",
    itemName: "Organic Whole Milk (1L)",
    brand: "FarmFresh",
    description: "Pasteurized organic milk from grass-fed cows.",
    category: "Grocery",

    price: 89,
    mrp: 95,
    discountPercentage: 6,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/71L+CjuBuPL.jpg"],

    stock: 120,

    ratings: {
      average: 4.5,
      totalReviews: 128,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 1,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "1L",
    expiryDate: "2026-03-10",
    ingredients: ["Organic Milk"],

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD002",
    itemName: "Classic Basmati Rice (5kg)",
    brand: "GoldenGrain",
    description: "Long-grain aromatic basmati rice.",
    category: "Grocery",

    price: 1350,
    mrp: 1500,
    discountPercentage: 10,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxm58BEIppg4UqpZwrDAXghnX3CQTZ_C-YrA&s",
    ],

    stock: 200,

    ratings: {
      average: 4.7,
      totalReviews: 412,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "5kg",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD003",
    itemName: "Extra Virgin Olive Oil (500ml)",
    brand: "VerdeOlio",
    description: "Cold-pressed olive oil rich in flavor.",
    category: "Grocery",

    price: 650,
    mrp: 720,
    discountPercentage: 10,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdpwyt9yvecb4b72JAIYhGQ38GdDxQ-D_EQ&s",
    ],

    stock: 90,

    ratings: {
      average: 4.6,
      totalReviews: 233,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "500ml",
    ingredients: ["Olive Oil"],

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD004",
    itemName: "Crunchy Peanut Butter (340g)",
    brand: "NuttyNest",
    description: "Roasted peanuts with crunchy texture.",
    category: "Grocery",

    price: 299,
    mrp: 330,
    discountPercentage: 9,
    currency: "INR",

    images: [
      "https://cpimg.tistatic.com/6884887/b/4/340gm-crunchy-peanut-butter.jpg",
    ],

    stock: 110,

    ratings: {
      average: 4.4,
      totalReviews: 156,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "340g",
    ingredients: ["Roasted Peanuts", "Salt"],

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD005",
    itemName: "Organic Bananas (1kg)",
    brand: "NatureBasket",
    description: "Ripe bananas, ideal for snacking.",
    category: "Grocery",

    price: 60,
    mrp: 70,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://www.orgpick.com/cdn/shop/products/banana-powder_large_f0d6750f-b412-4815-b1e1-7779bf18c354.jpg?v=1612510545",
    ],

    stock: 150,

    ratings: {
      average: 4.3,
      totalReviews: 98,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 1,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "1kg",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD006",
    itemName: "Brown Bread (400g)",
    brand: "BakeHouse",
    description: "Freshly baked whole wheat bread loaf.",
    category: "Grocery",

    price: 45,
    mrp: 50,
    discountPercentage: 10,
    currency: "INR",

    images: [
      "https://www.jiomart.com/images/product/original/490191335/modern-hi-fibre-brown-bread-400-g-pack-product-images-o490191335-p490191335-0-202502091858.jpg?im=Resize=(420,420)",
    ],

    stock: 100,

    ratings: {
      average: 4.2,
      totalReviews: 77,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 1,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "400g",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD007",
    itemName: "Organic Honey (250g)",
    brand: "BeePure",
    description: "Natural honey sourced from wild forests.",
    category: "Grocery",

    price: 210,
    mrp: 240,
    discountPercentage: 12,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/61449NU-ImL.jpg"],

    stock: 80,

    ratings: {
      average: 4.6,
      totalReviews: 210,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "250g",
    ingredients: ["Raw Honey"],

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD008",
    itemName: "Potato Chips (200g)",
    brand: "CrispyBite",
    description: "Classic salted potato chips.",
    category: "Grocery",

    price: 50,
    mrp: 60,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://neelamfoodlandmumbai.com/cdn/shop/files/432_1.jpg?v=1752068536",
    ],

    stock: 220,

    ratings: {
      average: 4.1,
      totalReviews: 140,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "200g",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD009",
    itemName: "Green Tea (100 bags)",
    brand: "HerbalSip",
    description: "Refreshing green tea rich in antioxidants.",
    category: "Grocery",

    price: 340,
    mrp: 380,
    discountPercentage: 10,
    currency: "INR",

    images: [
      "https://www.tatanutrikorner.com/cdn/shop/files/6111BGWu7BL._SL1100.jpg?v=1748933747&width=1445",
    ],

    stock: 90,

    ratings: {
      average: 4.5,
      totalReviews: 265,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "100 tea bags",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD010",
    itemName: "Organic Tomatoes (1kg)",
    brand: "FreshHarvest",
    description: "Juicy farm-fresh tomatoes.",
    category: "Grocery",

    price: 90,
    mrp: 110,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLJw9AXbMzyVLRc299Zcuue0EFmjAuRHz0A&s",
    ],

    stock: 140,

    ratings: {
      average: 4.3,
      totalReviews: 104,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 1,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "1kg",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD011",
    itemName: "Greek Yogurt (500g)",
    brand: "DairyPure",
    description: "Thick and creamy probiotic yogurt.",
    category: "Grocery",

    price: 180,
    mrp: 210,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvOK3jJuKFkH4z2M1auX4OhukQDlpz-QurU5Ss1DpaYb_4A-x1UqUimCmTgROy-j8dQXqe0wl65M8fW2SsIvw1ufe5g-JUNvep-2b9z2rIsyqxvwLIGeYZVzx-JTg9n87Yj7LCEnXf514&usqp=CAc",
    ],

    stock: 80,

    ratings: {
      average: 4.6,
      totalReviews: 170,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 1,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "500g",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD012",
    itemName: "Organic Quinoa (1kg)",
    brand: "SuperFoods",
    description: "Triple-rinsed white quinoa grains.",
    category: "Grocery",

    price: 450,
    mrp: 520,
    discountPercentage: 13,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQn8MJ6rXBDgNl5cAbKcWaStfqP1A9W-wtY4QZTYHWs6Or9ZzEbax6w8ULJufeh0T_3tJqnypR1URCLaHdt5UKnu50Kn8WREan11c0oljQc49aHLH39tkLLXA50cLqdnXj0gutcAA&usqp=CAc",
    ],

    stock: 70,

    ratings: {
      average: 4.7,
      totalReviews: 205,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "1kg",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD013",
    itemName: "Almond Milk (1L)",
    brand: "NutriDrink",
    description: "Unsweetened vanilla almond milk.",
    category: "Grocery",

    price: 250,
    mrp: 290,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/531851146/NR/LW/WI/6974356/only-earth-almond-milk-1ltr-500x500.jpg",
    ],

    stock: 95,

    ratings: {
      average: 4.4,
      totalReviews: 143,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "1L",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD014",
    itemName: "Dark Chocolate (100g)",
    brand: "CocoaCrave",
    description: "85% Cocoa single-origin chocolate bar.",
    category: "Grocery",

    price: 199,
    mrp: 230,
    discountPercentage: 13,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/418el8gWALL.jpg"],

    stock: 120,

    ratings: {
      average: 4.5,
      totalReviews: 220,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "100g",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD015",
    itemName: "Rolled Oats (1kg)",
    brand: "MorningOats",
    description: "Whole grain oats for a healthy breakfast.",
    category: "Grocery",

    price: 210,
    mrp: 250,
    discountPercentage: 16,
    currency: "INR",

    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUo-oPKaZcGxxO5hKazi_BuLEFj00pPBPRz8bKz_TZkIC12HtAz5ItrT4z84mAxuV6Bsd7Y05m9L9u8dUGjfLRs38BmqFwLtLjJuMpsYHVSkzzIyD3-tWWcEB23kyJ3zZZ9JuvH8M&usqp=CAc",
    ],

    stock: 150,

    ratings: {
      average: 4.6,
      totalReviews: 198,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "1kg",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD016",
    itemName: "Avocados (Pack of 2)",
    brand: "FreshHarvest",
    description: "Creamy Hass avocados.",
    category: "Grocery",

    price: 350,
    mrp: 390,
    discountPercentage: 10,
    currency: "INR",

    images: [
      "https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg",
    ],

    stock: 60,

    ratings: {
      average: 4.4,
      totalReviews: 92,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 1,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "Pack of 2",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD017",
    itemName: "Cold Brew Coffee (500ml)",
    brand: "BeanBlast",
    description: "Ready-to-drink smooth cold brew.",
    category: "Grocery",

    price: 150,
    mrp: 180,
    discountPercentage: 16,
    currency: "INR",

    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtaaNaYM2QFCLIcseE9CNXA51JJQyMSCUJAQUT6Y684np8Zn1NWakC594v-IZTJ-YX5pOPlG10nNZhXJ5e3ZOQR-gsOGN3HIIdJSBS3HBJvF7Ag66CpMZ2n85lFUjfDp4Vez-_rpE&usqp=CAc",
    ],

    stock: 85,

    ratings: {
      average: 4.3,
      totalReviews: 130,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "500ml",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD018",
    itemName: "Whole Wheat Pasta (500g)",
    brand: "Italiano",
    description: "Fusilli pasta made from 100% durum wheat.",
    category: "Grocery",

    price: 120,
    mrp: 150,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvrsLn9bmpxIflTniDTw6DXrLiyD0csvzjcs0sRQg5Qwf5sE2z1RDvWcomVG2OarinTj4W4Lj5SDJzaRltnBUQsEcExF0K6ep0mfOwHb3HTfut9oR8tAMHPptZ75Dz8f2tem0LiQ&usqp=CAc",
    ],

    stock: 140,

    ratings: {
      average: 4.4,
      totalReviews: 176,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "500g",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD019",
    itemName: "Sea Salt (500g)",
    brand: "OceanGrit",
    description: "Fine grain natural sea salt.",
    category: "Grocery",

    price: 65,
    mrp: 80,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNNExN01b1rV6Dn7VTeOpQeeUAfu21kK667yVFOB1KFpa1OHv6d5-8X5DjIYTwrEqAw1QcPI0GZkdaXVaymuYSh4YkxE1bAJs9Q25ULKY4cfqh_TvoKaokc2k7eRsNsDU8Ox-mSg&usqp=CAc",
    ],

    stock: 180,

    ratings: {
      average: 4.2,
      totalReviews: 88,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "500g",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD020",
    itemName: "Sparkling Water (750ml)",
    brand: "FizzPure",
    description: "Naturally carbonated mineral water.",
    category: "Grocery",

    price: 95,
    mrp: 120,
    discountPercentage: 21,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRB6k_SZUDrMFGn_KeQSRc-y6qiwqX9o7RlGhNWsggsb2kOncSpv44SsnBnZCXiEjMTGSINETb8JR2r5gX3_Pb4zz5LbUIE7dEAdK358m2T3TtGpUZ548ZASGESm60WxBWTIIFA8Ko&usqp=CAc",
    ],

    stock: 160,

    ratings: {
      average: 4.1,
      totalReviews: 73,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "750ml",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD021",
    itemName: "Organic Eggs (Dozen)",
    brand: "FarmFresh",
    description: "Free-range brown eggs.",
    category: "Grocery",

    price: 180,
    mrp: 210,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRG6Vj-kTIMbzKFc7VdjMAu6qL0Zrum16JpNTaYBhQ9Yx1O3vx33Dv5aibt7ASvPHlIUMW-MijU95Yeh-Oyznyx8lm-SpgrBpCf3K0nvraYcUgrVJdPERVt7Mh3DNLizw2hNGX9js2uWQ&usqp=CAc",
    ],

    stock: 120,

    ratings: {
      average: 4.6,
      totalReviews: 212,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 1,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "12 eggs",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD022",
    itemName: "Red Lentils (1kg)",
    brand: "PulsePlus",
    description: "Split red lentils high in protein.",
    category: "Grocery",

    price: 140,
    mrp: 170,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRk1lNugwktK3vyQS1cylM5ak0SA9jrJ5vBS4lNmxRVsQhxS31ztC1mD8sGGe8kId2O0oq16GUUmgBwbxEc-r4C7gLRi0irZmwMu2V2vFZMiYe3O2U2snAXBqDnge4WzrEZhyGfZQ&usqp=CAc",
    ],

    stock: 200,

    ratings: {
      average: 4.5,
      totalReviews: 184,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "1kg",

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD023",
    itemName: "Coconut Oil (500ml)",
    brand: "VerdeOlio",
    description: "Extra virgin cold-pressed coconut oil.",
    category: "Grocery",

    price: 320,
    mrp: 360,
    discountPercentage: 11,
    currency: "INR",

    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRaRpCy-4IqqFbCp1izh0NV-pToOy6SbmYBLWI-pBVh-c8PIh7NVjC_djZe4Ll6E8ENZ96LAkestHue8GYqwENbTGXGCTnD2qfWpHrtz0cy95rxghtTxNSG7jqwiVi_CphSHTJHhdg&usqp=CAc",
    ],

    stock: 90,

    ratings: {
      average: 4.6,
      totalReviews: 201,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    weight: "500ml",
    ingredients: ["Coconut Oil"],

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD024",
    itemName: "Blueberries (125g)",
    brand: "NatureBasket",
    description: "Fresh antioxidant-rich blueberries.",
    category: "Grocery",

    price: 400,
    mrp: 450,
    discountPercentage: 11,
    currency: "INR",

    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZ_6-rctRofujoOrw1qeJIAkhEaux4Z9oKBRWJlV2bYzl4XeJFUxINwky8HJ10fbm6DqqO0dG2OKco-KVk-67KjwfsLrF3CgaDUHKXvPu7k5uVU1HUTY91zaK2YU3V&usqp=CAc",
    ],

    stock: 60,

    ratings: {
      average: 4.7,
      totalReviews: 142,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 1,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "125g",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD025",
    itemName: "Cheddar Cheese (200g)",
    brand: "DairyPure",
    description: "Sharp aged white cheddar.",
    category: "Grocery",

    price: 280,
    mrp: 320,
    discountPercentage: 12,
    currency: "INR",

    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3M8TTD4QQXAMEIUcv7W0d4_LU3Osx-cWSy5HNkZg9CO0KtzNmfxyRt6jye2d04yzjlZutIee3hYC98jabL_EgBAEtUoUfPUsrypFVLLJgh-1swknXUHPCsBcOCc4HxGQEUe6YJX2_jq8&usqp=CAc",
    ],

    stock: 75,

    ratings: {
      average: 4.5,
      totalReviews: 190,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: false,
    returnDays: 0,

    weight: "200g",

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },
];

export default grocery;
