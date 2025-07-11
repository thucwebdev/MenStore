import Products from '../src/assets.js';

let item_shirt = document.getElementById("item_shirt");

const shirtProducts = Products.filter(product => product.category === "Shirt");

shirtProducts.forEach((product) => {
    item_shirt.innerHTML += `
    <div class="flex flex-col justify-center align-items gap-[15px] group ">
                <a href="product_detail.html?id=${product.id}" class="transition-transform duration-300 ease-in-out group-hover:scale-95 "><img  src="${product.img}" alt=""></a>
                <p class="text-center text-[16px] uppercase ">${product.name}</p>
                <p class="text-center text-[red] font-bold">${product.price}</p>
            </div>
    `
})

// Hàm cập nhật số lượng giỏ hàng
function updateCartCount() {
    try {
        const cart = localStorage.getItem('cart');
        const cartItems = cart ? JSON.parse(cart) : [];
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-count').textContent = `(${totalItems})`;
    } catch (error) {
        console.error('Error updating cart count:', error);
        document.getElementById('cart-count').textContent = '(0)';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

window.addEventListener('storage', function(e) {
    if (e.key === 'cart') {
        updateCartCount();
    }
});