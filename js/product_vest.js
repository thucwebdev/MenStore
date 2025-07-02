const Products = [
    {
        id: 1,
        name: "VEST",
        price: "750,000 VND",
        img: "./imgs/item1.webp",
        size: ["48","49","50","51","52"],
        category: "Vest",
    },
     {
        id: 2,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item2.webp",
        size: ["48","49","50","51","52"],
        category: "Vest",
    },
     {
        id: 3,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item3.webp",
        size: ["48","49","50","51","52"],
        category: "Vest",
    },
     {
        id: 4,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item4.webp",
        size: ["48","49","50","51","52"],
        category: "Vest",
    },
     {
        id: 5,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item5.webp",
        size: ["48","49","50","51","52"],
        category: "Vest",
    },
     {
        id: 6,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item6.webp",
        size: ["48","49","50","51","52"],
        category: "Vest",
    },
     {
        id: 7,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item1.webp",
        size: ["48","49","50","51","52"],
        category: "Shirt",
    },
     {
        id: 8,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item1.webp",
        size: ["48","49","50","51","52"],
        category: "Shirt",
    },
     {
        id: 9,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item1.webp",
        size: ["48","49","50","51","52"],
        category: "Shirt",
    },
     {
        id: 10,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item1.webp",
        size: ["48","49","50","51","52"],
        category: "Shirt",
    },
     {
        id: 11,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item1.webp",
        size: ["48","49","50","51","52"],
        category: "Shirt",
    },
     {
        id: 12,
        name: "BEGIN WITH THE Vest",
        price: "750,000 VND",
        img: "./imgs/item1.webp",
        size: ["48","49","50","51","52"],
        category: "Shirt",
    }
   
]

let item = document.getElementById("item");

const vestProducts = Products.filter(product => product.category === "Vest");

vestProducts.forEach((product) => {
    item.innerHTML += `
    <div class="flex flex-col justify-center align-items gap-[15px]">
                <a href="product_detail.html"><img src="${product.img}" alt=""></a>
                <p class="text-center text-[16px] uppercase ">${product.name}</p>
                <p class="text-center text-[red] font-bold">${product.price}</p>
            </div>
    `
})


 

