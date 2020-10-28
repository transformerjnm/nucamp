let products = [
    {
        id: 1,
        name: "WildFlower Honey",
        description: "Local wildflower honey in a mason jar.",
        price: 16.05,
        imgSrc: process.env.PUBLIC_URL + '/assets/images/honey.jpg',
        imgAlt: "Glass Jar of local Wildflower Honey image.",
        bestSeller: true,
    },
    {
        id: 2,
        name: "Empty Mason Jar",
        description: "Empty Mason Jar perfect for sweet tea cup!",
        price: 5.25,
        imgSrc: process.env.PUBLIC_URL + '/assets/images/masonjar.jpg',
        imgAlt: "Empty Mason Jar spilling sweet tea image.",
        bestSeller: true,
    },
    {
        id: 3,
        name: "Southern Charm Shirt: mens white",
        description: "Southern Charm t-shirt for men.",
        price: 10.10,
        imgSrc: process.env.PUBLIC_URL + '/assets/images/t-shirt.jpg',
        imgAlt: "Southern Charm White T-shirt image.",
        bestSeller: true,
    },
    {
        id: 4,
        name: "Somersby Cider",
        description: "The best cider in a glass bottle.",
        price: 8.00,
        imgSrc: process.env.PUBLIC_URL + '/assets/images/cider.jpg',
        imgAlt: "The best Glass Bottle Cider image.",
        bestSeller: true,
    },
    {
        id: 5,
        name: "Assorted candy",
        description: "One pound bag of mystery assorted candy.",
        price: 6.00,
        imgSrc: process.env.PUBLIC_URL + '/assets/images/candy.jpg',
        imgAlt: "Sweet and delicious assorted candy image.",
        bestSeller: true,
    },
    {
        id: 6,
        name: "Handmade soap bar four pack",
        description: "Four cleansing handmade soap bars.",
        price: 7.30,
        imgSrc: process.env.PUBLIC_URL + '/assets/images/soap.jpg',
        imgAlt: "Four handmade soap bars stacked vertically image.",
        bestSeller: true,
    },
];

/*fetch('/')
.then(response => response.json())
.then(data => console.log(data));*/

export default products;