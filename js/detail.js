import Products from "../src/assets.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = Products.find((p) => p.id == id);
const typeNameProduct = document.getElementById("type_name_product");
if (product) {
  typeNameProduct.textContent = product.type;
}
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

// size options
const sizeOptions = document.getElementById("size-options");
const sizes = product.size;
sizes.forEach((size) => {
  sizeOptions.innerHTML += `
    <div class="flex items-center justify-center px-2 min-w-[35px] h-[35px] border solid border-[#ccc] rounded-[999px] text-[12px] cursor-pointer size" data-size="${size}">
      ${size}
    </div>
  `;
});

let selectedSize = null;

// Add click event to size options
const sizeElements = document.querySelectorAll(".size");
sizeElements.forEach((sizeElement) => {
  sizeElement.addEventListener("click", () => {
    sizeElements.forEach((element) => {
      element.classList.remove("bg-black", "text-white");
    });
    sizeElement.classList.add("bg-black", "text-white");
    selectedSize = sizeElement.getAttribute("data-size");
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Cart management functions
    function getCart() {
        try {
            const cart = localStorage.getItem('cart');
            return cart ? JSON.parse(cart) : [];
        } catch (error) {
            console.error('Error getting cart from localStorage:', error);
            return [];
        }
    }

    function saveCart(cart) {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Cart saved to localStorage:', cart);
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
        }
    }

    function addItemToCart(productId, productName, productPrice, productImg, size, quantity) {
        let cart = getCart();
        
        // Tìm sản phẩm đã có trong giỏ hàng với cùng id và size
        const existingItemIndex = cart.findIndex(item => 
            item.id === productId && item.size === size
        );

        if (existingItemIndex !== -1) {
            // Nếu sản phẩm đã có, tăng số lượng
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Nếu chưa có, thêm sản phẩm mới
            const newItem = {
                id: productId,
                name: productName,
                price: productPrice,
                img: productImg,
                size: size,
                quantity: quantity,
                addedAt: new Date().toISOString()
            };
            cart.push(newItem);
        }

        saveCart(cart);
        return cart;
    }

    function getCartCount() {
        const cart = getCart();
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Load cart count khi trang load
    let cartCount = getCartCount();
    console.log('Initial cart count:', cartCount);
    console.log('Current cart items:', getCart());

    // Function to show warning modal
    function showWarningModal(message) {
        document.getElementById("warningMessage").textContent = message;
        const modal = document.getElementById('warningModal');
        modal.classList.remove('hidden');
        
        setTimeout(() => {
            modal.querySelector('.modal-content').classList.add('modal-content-enter-active');
        }, 10);
    }

    // Function to show success modal
    function showSuccessModal(message) {
        document.getElementById("successMessage").textContent = message;
        const modal = document.getElementById('successModal');
        modal.classList.remove('hidden');
        
        setTimeout(() => {
            modal.querySelector('.modal-content').classList.add('modal-content-enter-active');
        }, 10);
    }

    // Function to close warning modal
    function closeWarningModal() {
        const modal = document.getElementById('warningModal');
        modal.querySelector('.modal-content').classList.remove('modal-content-enter-active');
        
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    // Function to close success modal
    function closeSuccessModal() {
        const modal = document.getElementById('successModal');
        modal.querySelector('.modal-content').classList.remove('modal-content-enter-active');
        
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    // Function to update cart count display
    function updateCartCount() {
        cartCount = getCartCount();
        document.getElementById("cart-count").textContent = `(${cartCount})`;
        console.log('Cart count updated:', cartCount);
    }

    // Function to add to cart
    function addToCart() {
        if (!selectedSize) {
            showWarningModal("Bạn chưa chọn size!");
            return;
        }

        const quantity = parseInt(document.getElementById("quantity-input").value);
        
        // Thêm sản phẩm vào giỏ hàng
        const updatedCart = addItemToCart(
            product.id,
            product.name,
            product.price,
            product.img,
            selectedSize,
            quantity
        );

        updateCartCount();
        showSuccessModal(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
        
        // Log thông tin chi tiết
        console.log('Product added to cart:', {
            id: product.id,
            name: product.name,
            price: product.price,
            size: selectedSize,
            quantity: quantity
        });
        console.log('Updated cart:', updatedCart);
    }

    // Function to buy now
    function buyNow() {
        if (!selectedSize) {
            showWarningModal("Bạn chưa chọn size!");
            return;
        }

        const quantity = parseInt(document.getElementById("quantity-input").value);
        
        // Thêm sản phẩm vào giỏ hàng
        const updatedCart = addItemToCart(
            product.id,
            product.name,
            product.price,
            product.img,
            selectedSize,
            quantity
        );

        updateCartCount();
        showSuccessModal(`Đặt hàng thành công ${quantity} sản phẩm!`);
        
        // Log thông tin chi tiết
        console.log('Product bought:', {
            id: product.id,
            name: product.name,
            price: product.price,
            size: selectedSize,
            quantity: quantity
        });
        console.log('Updated cart:', updatedCart);
    }

    // Initialize cart count display
    updateCartCount();

    // Add event listeners to buttons
    document.getElementById("add-to-cart").addEventListener("click", addToCart);
    document.getElementById("buy-now").addEventListener("click", buyNow);

    // Close modal when clicking outside
    document.getElementById('warningModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeWarningModal();
        }
    });

    document.getElementById('successModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeSuccessModal();
        }
    });

    // Expose functions globally for onclick handlers
    window.closeWarningModal = closeWarningModal;
    window.closeSuccessModal = closeSuccessModal;
    
    // Expose cart functions globally (nếu cần sử dụng ở nơi khác)
    window.getCart = getCart;
    window.clearCart = function() {
        localStorage.removeItem('cart');
        updateCartCount();
        console.log('Cart cleared');
    };
});