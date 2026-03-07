const clothing = [
  {
    id: "PROD401",
    itemName: "Men’s Slim Fit Jeans",
    brand: "UrbanThread",
    description: "Stretch denim with tapered leg.",
    category: "Clothing & Apparel",

    price: 1599,
    mrp: 1999,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/13009194/2022/11/24/23f85ef4-52b8-4590-af09-29143019bf6b1669290075161TheIndianGarageCoMenNavyBlueSlimFitMid-RiseCleanLookJeans1.jpg",
    ],

    stock: 120,

    ratings: {
      average: 4.5,
      totalReviews: 245,
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
    id: "PROD402",
    itemName: "Women’s V-neck T-shirt",
    brand: "CottonCloud",
    description: "Soft cotton fabric for comfort.",
    category: "Clothing & Apparel",

    price: 699,
    mrp: 899,
    discountPercentage: 22,
    currency: "INR",

    images: [
      "https://shopduer.com/cdn/shop/products/WTJR820-ONLY-TEE-V-NECK-BLACK_0433_2.jpg?v=1660432793",
    ],

    stock: 160,

    ratings: {
      average: 4.4,
      totalReviews: 188,
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
    id: "PROD403",
    itemName: "Lightweight Windbreaker Jacket",
    brand: "AeroWear",
    description: "Water-resistant and breathable jacket.",
    category: "Clothing & Apparel",

    price: 2499,
    mrp: 2999,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://fortcollins.co.in/cdn/shop/files/fort-collins-men-grey-slim-fit-windbreaker-jacket-with-adjustable-hood-bd136-1.webp?v=1725282783&width=2048",
    ],

    stock: 90,

    ratings: {
      average: 4.6,
      totalReviews: 210,
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
    id: "PROD404",
    itemName: "Kids’ Cartoon Hoodie",
    brand: "LittleJoy",
    description: "Cozy hoodie with fun cartoon prints.",
    category: "Clothing & Apparel",

    price: 799,
    mrp: 999,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://moomin.us/cdn/shop/files/USMN0069-KID-HOOD-HGRY_1200x.jpg?v=1736329484",
    ],

    stock: 140,

    ratings: {
      average: 4.4,
      totalReviews: 132,
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
    id: "PROD405",
    itemName: "Women’s Slip-on Loafers",
    brand: "StepEase",
    description: "Faux-leather loafers with cushioned insole.",
    category: "Clothing & Apparel",

    price: 1299,
    mrp: 1599,
    discountPercentage: 19,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/61mflKPpMUL._UY1000_.jpg"],

    stock: 110,

    ratings: {
      average: 4.3,
      totalReviews: 120,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD406",
    itemName: "Formal White Shirt",
    brand: "OfficeLine",
    description: "Classic button-up formal shirt.",
    category: "Clothing & Apparel",

    price: 999,
    mrp: 1299,
    discountPercentage: 23,
    currency: "INR",

    images: [
      "https://myraymond.com/cdn/shop/files/PMSX18661-W1-1.jpg?v=1729163840",
    ],

    stock: 150,

    ratings: {
      average: 4.5,
      totalReviews: 205,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD407",
    itemName: "Men’s Casual Sneakers",
    brand: "StreetStep",
    description: "Comfortable sneakers for daily wear.",
    category: "Clothing & Apparel",

    price: 1799,
    mrp: 2199,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRChMpUsSHCfW_yiyOtg9AtStPOjOnrzxXbwtTvUR5IuqvTeV2yfPFZv_sqNqw_fNxo3wjyI4i7zF8iqvvsTUbRMPqaLv3YFjqX37tkelngpci-4AhnVyP70Lc",
    ],

    stock: 130,

    ratings: {
      average: 4.6,
      totalReviews: 320,
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
    id: "PROD408",
    itemName: "Women’s Anarkali Kurta",
    brand: "Ethniq",
    description: "Printed cotton kurta with flared design.",
    category: "Clothing & Apparel",

    price: 1499,
    mrp: 1899,
    discountPercentage: 21,
    currency: "INR",

    images: [
      "https://textilenow.com/cdn/shop/files/1257_ORANGE_1_FRONT.jpg?v=1733380867&width=3154",
    ],

    stock: 120,

    ratings: {
      average: 4.5,
      totalReviews: 198,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD409",
    itemName: "Sports Track Pants",
    brand: "FlexiFit",
    description: "Breathable stretch fabric for workouts.",
    category: "Clothing & Apparel",

    price: 899,
    mrp: 1199,
    discountPercentage: 25,
    currency: "INR",

    images: [
      "https://www.sports52wear.com/cdn/shop/files/469598512007_1.jpg?v=1735974755",
    ],

    stock: 150,

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

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD410",
    itemName: "Kids Denim Shorts",
    brand: "MiniTrend",
    description: "Trendy denim shorts for kids.",
    category: "Clothing & Apparel",

    price: 499,
    mrp: 649,
    discountPercentage: 23,
    currency: "INR",

    images: [
      "https://5.imimg.com/data5/CH/CP/MY-18197578/kids-denim-shorts.jpg",
    ],

    stock: 180,

    ratings: {
      average: 4.3,
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
    id: "PROD411",
    itemName: "Men's Polo T-Shirt",
    brand: "OfficeLine",
    description: "Classic fit cotton pique polo for business casual wear.",
    category: "Clothing & Apparel",

    price: 1199,
    mrp: 1499,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNHkinnXAIcfGiaFGv0YpHqVeKlmKhjC-UY1AnPNU_PmVy4n5J7mKxl5ZMx-nBy7FHBjblrm53UvJbIMg-q6sTF67TC_kXDW7UZbHFroGkKPRwZ_j3LDhSSTFV70UJLBLsXP-KUEM&usqp=CAc",
    ],

    stock: 150,

    ratings: {
      average: 4.5,
      totalReviews: 210,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD412",
    itemName: "Women's High-Waisted Leggings",
    brand: "FlexiFit",
    description: "Squat-proof, moisture-wicking fabric for yoga and gym.",
    category: "Clothing & Apparel",

    price: 1499,
    mrp: 1799,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRucoqLkZ5O6LTPirx-OSXgjb2oBLUdAwPgCnf6FV8XnkJNrEjceObWVTemN7wrzwPv8yrC92feE_tjHaeezt3czuj_cqbxq8eEw5ybpJBvKt2EPQwZOyA-&usqp=CAc",
    ],

    stock: 120,

    ratings: {
      average: 4.6,
      totalReviews: 260,
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
    id: "PROD413",
    itemName: "Unisex Canvas Sneakers",
    brand: "StreetStep",
    description: "Classic lace-up low-top sneakers with rubber sole.",
    category: "Clothing & Apparel",

    price: 1999,
    mrp: 2399,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://trufflecollection.co.in/cdn/shop/files/TC-LKCAN3-NVY_1_1000x.jpg?v=1756387914",
    ],

    stock: 110,

    ratings: {
      average: 4.5,
      totalReviews: 185,
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
    id: "PROD414",
    itemName: "Men's Cargo Shorts",
    brand: "UrbanThread",
    description: "Multi-pocket durable cotton shorts for outdoor utility.",
    category: "Clothing & Apparel",

    price: 1299,
    mrp: 1599,
    discountPercentage: 19,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4mcTWnnPtLuiVdwb_2mu79g763Q-sK1BeA&s",
    ],

    stock: 140,

    ratings: {
      average: 4.4,
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
    id: "PROD415",
    itemName: "Women's Denim Jacket",
    brand: "CottonCloud",
    description: "Vintage wash oversized denim jacket with metal buttons.",
    category: "Clothing & Apparel",

    price: 2899,
    mrp: 3499,
    discountPercentage: 17,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/81VJwJiTobL._AC_UY1100_.jpg"],

    stock: 90,

    ratings: {
      average: 4.6,
      totalReviews: 210,
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
    id: "PROD416",
    itemName: "Kids' Waterproof Raincoat",
    brand: "LittleJoy",
    description: "Bright hooded raincoat with reflective safety strips.",
    category: "Clothing & Apparel",

    price: 999,
    mrp: 1299,
    discountPercentage: 23,
    currency: "INR",

    images: [
      "https://zeelretail.com/cdn/shop/files/ZEEL-Royal-Blue-Avenger-Kids-Premium-Waterproof-Raincoat-Zeelretail-249316258.jpg?v=1747742356",
    ],

    stock: 150,

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
    id: "PROD417",
    itemName: "Men's Leather Belt",
    brand: "OfficeLine",
    description: "100% genuine leather belt with brushed nickel buckle.",
    category: "Clothing & Apparel",

    price: 899,
    mrp: 1099,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://growmore.in/cdn/shop/files/1_d1c505b6-4fbd-4f74-ba58-dba9e23fac1a.jpg?v=1734765994",
    ],

    stock: 160,

    ratings: {
      average: 4.4,
      totalReviews: 145,
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
    id: "PROD418",
    itemName: "Women's Floral Maxi Dress",
    brand: "Ethniq",
    description: "Flowy summer dress with adjustable waist tie.",
    category: "Clothing & Apparel",

    price: 2499,
    mrp: 2999,
    discountPercentage: 17,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/7130xqoe0NL._AC_UY1100_.jpg"],

    stock: 100,

    ratings: {
      average: 4.6,
      totalReviews: 220,
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
    id: "PROD419",
    itemName: "Men's Pullover Hoodie",
    brand: "AeroWear",
    description: "Heavyweight fleece hoodie with kangaroo pocket.",
    category: "Clothing & Apparel",

    price: 1799,
    mrp: 2199,
    discountPercentage: 18,
    currency: "INR",

    images: ["https://m.media-amazon.com/images/I/81RwFYIBQFL._AC_UY1100_.jpg"],

    stock: 120,

    ratings: {
      average: 4.5,
      totalReviews: 198,
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
    id: "PROD420",
    itemName: "Women's Tote Bag",
    brand: "StepEase",
    description: "Large capacity faux-leather tote for work or travel.",
    category: "Clothing & Apparel",

    price: 1599,
    mrp: 1999,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQWDjESEgtVqD21bdS92tffhE3dfa6VTWcEXDulJGDIDqeD2Ogf7s1t2866l9Gwe35WhGRJSopvTpx_cVfMfuZKdAFaAg1u4j6Y_UOQUE5mSSgCIP5IhGUWkCykt2RBWTze2tY5L1xN&usqp=CAc",
    ],

    stock: 110,

    ratings: {
      average: 4.4,
      totalReviews: 150,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 30,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },
  {
    id: "PROD421",
    itemName: "Kids' 5-Pack Cotton Socks",
    brand: "MiniTrend",
    description: "Breathable and colorful socks with reinforced heels.",
    category: "Clothing & Apparel",

    price: 449,
    mrp: 599,
    discountPercentage: 25,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQLyvJaFzjxvRiTZpmiFlLotPI3bP30ovYHRySvEhmoyONkzm3iJezkuahbxkzwj6vsKsQev_IOYxG1JXa7Qvpo-9On6XFkP4r3ztBaIvtqQ8Uto0yLuoLa&usqp=CAc",
    ],

    stock: 200,

    ratings: {
      average: 4.4,
      totalReviews: 138,
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
    id: "PROD422",
    itemName: "Men's Performance Polo",
    brand: "FlexiFit",
    description: "Quick-dry athletic polo for golf and active sports.",
    category: "Clothing & Apparel",

    price: 1399,
    mrp: 1699,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzLpBaYKPDzUN9mCWFMNOa_CznBwTrXYCbgktVZKFUxjZdgOfykCoMJdglscWigkErgm6j-wCy9JETR-WkKMO5hJkGJBBSwb2H22LXz9_sPjCQDHQ7Jh7MkuU&usqp=CAc",
    ],

    stock: 130,

    ratings: {
      average: 4.5,
      totalReviews: 190,
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
    id: "PROD423",
    itemName: "Women's Leather Crossbody Bag",
    brand: "StepEase",
    description: "Minimalist small handbag with adjustable strap.",
    category: "Clothing & Apparel",

    price: 1899,
    mrp: 2299,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxv64MEhs0Qna4jctRni_WY23JoOfbmQ_COdKFt9wD-M8bT_I92urLcRVjoAanyBdHvmnKlNDmDz95d_XW2ehrZt3RSpxeW13bOlf3lBNOQJCAOhcWlcrCAN6qY0A34MKgl95E4qs&usqp=CAc",
    ],

    stock: 110,

    ratings: {
      average: 4.4,
      totalReviews: 165,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 35,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD424",
    itemName: "Men's Chino Trousers",
    brand: "UrbanThread",
    description: "Slim-fit cotton chinos for a versatile look.",
    category: "Clothing & Apparel",

    price: 1699,
    mrp: 2099,
    discountPercentage: 19,
    currency: "INR",

    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBH5hh4uUdcm2-M-V7DVaund-WrZ10gw8SQ8CexaYQxGOerH3dgcB0X0lL3_Rm003YuA6lnze09R8rSebSVWDNazd1YFv1Jy9mRMP__e-AXXlpVi4jjT0KXQ&usqp=CAc",
    ],

    stock: 120,

    ratings: {
      average: 4.5,
      totalReviews: 205,
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
    id: "PROD425",
    itemName: "Unisex Beanie Hat",
    brand: "AeroWear",
    description: "Soft rib-knit acrylic beanie for cold weather.",
    category: "Clothing & Apparel",

    price: 399,
    mrp: 499,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRab-jkXsQQn-eQXVFX531mVuOzhUOC9LqV-Xt3mkEBtxF2fSGZnr31P2mZXBKHtX4ZtRHXa4eNHkWhV0eJlTar29-JucNuDAg34S9Hd6pJO0nWwvX6pmlMsVIaZ7IYh9Cloqf5g&usqp=CAc",
    ],

    stock: 170,

    ratings: {
      average: 4.3,
      totalReviews: 130,
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

module.exports = { data: clothing };
