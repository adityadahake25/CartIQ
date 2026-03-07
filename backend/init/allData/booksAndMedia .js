const booksAndMedia = [
  {
    id: "PROD601",
    itemName: "Learn JavaScript in 21 Days",
    brand: "CodeCraft Press",
    description:
      "Beginner-friendly, step-by-step JavaScript guide with exercises.",
    category: "Books & Media",

    price: 1661,
    mrp: 1999,
    discountPercentage: 17,
    currency: "INR",

    images: ["https://www.oreilly.com/covers/urn:orm:book:9780134663661/400w/"],

    stock: 120,

    ratings: {
      average: 4.5,
      totalReviews: 210,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 40,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD602",
    itemName: "Books to Die For",
    brand: "HarborHouse",
    description: "Gripping whodunit set in a coastal town with twists.",
    category: "Books & Media",

    price: 1994,
    mrp: 2299,
    discountPercentage: 13,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/81jBRBKdx+L._UF1000,1000_QL80_.jpg",
    ],

    stock: 90,

    ratings: {
      average: 4.3,
      totalReviews: 140,
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
    id: "PROD603",
    itemName: "Children’s Picture Book — Green Thumb Poppy",
    brand: "BrightPages",
    description: "Illustrated story about kindness and exploration.",
    category: "Books & Media",

    price: 832,
    mrp: 999,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://marketplace.canva.com/EAFlEyL-7xQ/2/0/1003w/canva-green-garden-illustration-children%27s-book-cover-9fRMIDYCuC0.jpg",
    ],

    stock: 150,

    ratings: {
      average: 4.6,
      totalReviews: 175,
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
    id: "PROD604",
    itemName: "Hatha & Flow Yoga for Beginners",
    brand: "CalmMotion",
    description: "60-minute guided routines for flexibility and relaxation.",
    category: "Books & Media",

    price: 997,
    mrp: 1199,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://2lazy4gym.com/wp-content/uploads/2018/10/hathayogaflow.jpg?w=640",
    ],

    stock: 85,

    ratings: {
      average: 4.4,
      totalReviews: 110,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 25,
      cashOnDelivery: true,
    },

    isReturnable: false,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD605",
    itemName: "Harry Potter and the Philosopher's Stone",
    brand: "BloomsBury",
    description: "The magical first book in the Harry Potter series.",
    category: "Books & Media",

    price: 1787,
    mrp: 1999,
    discountPercentage: 11,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/81q77Q39nEL._UF1000,1000_QL80_.jpg",
    ],

    stock: 200,

    ratings: {
      average: 4.9,
      totalReviews: 520,
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
    id: "PROD606",
    itemName: "The Silent Patient",
    brand: "Orion Books",
    description:
      "A shocking psychological thriller about a woman's act of violence.",
    category: "Books & Media",

    price: 499,
    mrp: 599,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITLgJv5Mq9nXjXVN4qcPA3v8LupPopb8Z5g&s",
    ],

    stock: 140,

    ratings: {
      average: 4.6,
      totalReviews: 320,
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
    id: "PROD607",
    itemName: "Atomic Habits",
    brand: "Penguin",
    description:
      "An easy and proven way to build good habits and break bad ones.",
    category: "Books & Media",

    price: 550,
    mrp: 699,
    discountPercentage: 21,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/41Wkr448KSL._AC_UF1000,1000_QL80_.jpg",
    ],

    stock: 300,

    ratings: {
      average: 4.8,
      totalReviews: 800,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD608",
    itemName: "The Psychology of Money",
    brand: "Harriman House",
    description: "Timeless lessons on wealth, greed, and happiness.",
    category: "Books & Media",

    price: 399,
    mrp: 499,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPzd6_8icsg7NcKuSvzOqdWELbXNgVkPSpg&s",
    ],

    stock: 260,

    ratings: {
      average: 4.7,
      totalReviews: 610,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD609",
    itemName: "React Design Patterns",
    brand: "Packt Publishing",
    description:
      "Build maintainable and reusable code with React and TypeScript.",
    category: "Books & Media",

    price: 2899,
    mrp: 3299,
    discountPercentage: 12,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/71ZOTiUqmuL._AC_UF1000,1000_QL80_.jpg",
    ],

    stock: 70,

    ratings: {
      average: 4.4,
      totalReviews: 130,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 40,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: false,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD610",
    itemName: "Sapiens: A Brief History of Humankind",
    brand: "Vintage",
    description:
      "Explores the history of the human species from the Stone Age.",
    category: "Books & Media",

    price: 599,
    mrp: 699,
    discountPercentage: 14,
    currency: "INR",

    images: [
      "https://mywholenineyards.com/wp-content/uploads/2023/08/Sapiens-scaled.jpg",
    ],

    stock: 190,

    ratings: {
      average: 4.8,
      totalReviews: 740,
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
    id: "PROD611",
    itemName: "The Alchemist",
    brand: "HarperCollins",
    description:
      "A fable about following your dream and listening to your heart.",
    category: "Books & Media",

    price: 299,
    mrp: 399,
    discountPercentage: 25,
    currency: "INR",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3dMTqDLIxg9HNVqkqjuzgtphgwYGjAWX9w&s",
    ],

    stock: 240,

    ratings: {
      average: 4.7,
      totalReviews: 540,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD612",
    itemName: "A Song of Ice and Fire (Set)",
    brand: "Bantam Books",
    description: "The complete 5-book box set of the Game of Thrones series.",
    category: "Books & Media",

    price: 3499,
    mrp: 3999,
    discountPercentage: 13,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/61xlw1p2V2L._AC_UF350,350_QL80_.jpg",
    ],

    stock: 60,

    ratings: {
      average: 4.8,
      totalReviews: 310,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 3,
      deliveryCharge: 50,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 10,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD613",
    itemName: "Eloquent JavaScript",
    brand: "No Starch Press",
    description: "A modern introduction to programming with JavaScript.",
    category: "Books & Media",

    price: 2199,
    mrp: 2499,
    discountPercentage: 12,
    currency: "INR",

    images: ["https://www.freetechbooks.com/uploads/1472462874-cover.jpg"],

    stock: 110,

    ratings: {
      average: 4.6,
      totalReviews: 190,
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
    id: "PROD614",
    itemName: "Deep Work",
    brand: "Grand Central Publishing",
    description: "Rules for focused success in a distracted world.",
    category: "Books & Media",

    price: 450,
    mrp: 599,
    discountPercentage: 25,
    currency: "INR",

    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/2/JN/OT/TH/147304712/whatsapp-image-2022-02-11-at-3-26-48-pm.jpeg",
    ],

    stock: 180,

    ratings: {
      average: 4.6,
      totalReviews: 350,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD615",
    itemName: "Clean Code",
    brand: "Prentice Hall",
    description:
      "A handbook of agile software craftsmanship by Robert C. Martin.",
    category: "Books & Media",

    price: 2499,
    mrp: 2999,
    discountPercentage: 17,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/41SH-SvWPxL._AC_UF1000,1000_QL80_.jpg",
    ],

    stock: 90,

    ratings: {
      average: 4.8,
      totalReviews: 410,
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
    id: "PROD616",
    itemName: "The Pragmatic Programmer",
    brand: "Addison-Wesley",
    description: "Your journey to mastery in software development.",
    category: "Books & Media",

    price: 2299,
    mrp: 2699,
    discountPercentage: 15,
    currency: "INR",

    images: ["https://www.oreilly.com/library/cover/9780135956977/1200w630h/"],

    stock: 85,

    ratings: {
      average: 4.7,
      totalReviews: 275,
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
    id: "PROD617",
    itemName: "Ikigai",
    brand: "Penguin Life",
    description: "The Japanese secret to a long and happy life.",
    category: "Books & Media",

    price: 399,
    mrp: 499,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg",
    ],

    stock: 220,

    ratings: {
      average: 4.6,
      totalReviews: 600,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },

  {
    id: "PROD618",
    itemName: "Start With Why",
    brand: "Portfolio",
    description: "How great leaders inspire everyone to take action.",
    category: "Books & Media",

    price: 450,
    mrp: 550,
    discountPercentage: 18,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/71ha4cV4GqL._AC_UF1000,1000_QL80_.jpg",
    ],

    stock: 160,

    ratings: {
      average: 4.5,
      totalReviews: 420,
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
    id: "PROD619",
    itemName: "Thinking, Fast and Slow",
    brand: "Farrar, Straus and Giroux",
    description:
      "A groundbreaking exploration of how we think and make decisions.",
    category: "Books & Media",

    price: 699,
    mrp: 899,
    discountPercentage: 22,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/71wvKXWfcML._AC_UF1000,1000_QL80_.jpg",
    ],

    stock: 150,

    ratings: {
      average: 4.7,
      totalReviews: 520,
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
    id: "PROD620",
    itemName: "Rich Dad Poor Dad",
    brand: "Plata Publishing",
    description: "What the rich teach their kids about money.",
    category: "Books & Media",

    price: 399,
    mrp: 499,
    discountPercentage: 20,
    currency: "INR",

    images: [
      "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    ],

    stock: 260,

    ratings: {
      average: 4.6,
      totalReviews: 720,
    },

    deliveryInfo: {
      estimatedDeliveryDays: 2,
      deliveryCharge: 20,
      cashOnDelivery: true,
    },

    isReturnable: true,
    returnDays: 7,

    isFeatured: true,
    createdAt: "2026-02-26T10:30:00Z",
  },
];

module.exports = { data: booksAndMedia };
