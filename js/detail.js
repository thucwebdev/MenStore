import Products from "../src/assets.js";


const params = new URLSearchParams(window.location.search);
const id = params.get("id");


const product = Products.find((p) => p.id == id);


if (product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-name-des").textContent = product.name;
  document.getElementById("product-img").src = product.img;
  document.getElementById("product-img2").src = product.img;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-color").textContent = product.color;

   renderRelatedProducts(product);
}


function renderRelatedProducts(currentProduct) {
  let relateItem = document.getElementById("relate_item");
  let relateProducts = [];

  if (currentProduct.type === "ÁO SƠ MI NAM") {
    relateProducts = Products.filter(
      (item) => item.type === "ÁO SƠ MI NAM" && item.id !== currentProduct.id
    );
  } else if (currentProduct.type === "BỘ SƯU TẬP VEST ADAM 2025") {
    relateProducts = Products.filter(
      (item) => item.type === "BỘ SƯU TẬP VEST ADAM 2025" && item.id !== currentProduct.id
    );
  } else {
    relateProducts = Products.filter(
      (item) => item.type === currentProduct.type && item.id !== currentProduct.id
    );
  }

relateProducts = relateProducts.slice(0, 8);


relateProducts.forEach((item) => {
  relateItem.innerHTML += `
        <swiper-slide>
            <a href="./product_detail.html?id=${item.id}" class="group">
              <div class="group">
                <img
                  src="${item.img}"
                  class="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  alt="${item.name}"
                />
                <div class="mt-8">
                <h3 class="text-base font-medium ">${item.name}</h3>
                <p class="text-base text-red-600">${item.price}</p>
            </div>
              </div>
            </a>
        </swiper-slide>
    `;
});
}