import Products from '../src/assets.js';




let item = document.getElementById("item");

const vestProducts = Products.filter(product => product.category === "Vest");

vestProducts.forEach((product) => {
    item.innerHTML += `
    <div class="flex flex-col justify-center align-items gap-[15px] group ">
                <a href="product_detail.html?id=${product.id}" class="transition-transform duration-300 ease-in-out group-hover:scale-95 "><img  src="${product.img}" alt=""></a>
                <p class="text-center text-[16px] uppercase ">${product.name}</p>
                <p class="text-center text-[red] font-bold">${product.price}</p>
            </div>
    `
})




 

