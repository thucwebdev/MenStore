// Cart management functions
function getCart() {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error getting cart from localStorage:", error);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart saved:", cart);
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
}

// function formatPrice(price) {
//     // Remove any non-numeric characters except dots and commas
//     const numericPrice = price.toString().replace(/[^\d.,]/g, '');
//     // Convert to number and format
//     const num = parseFloat(numericPrice.replace(/,/g, ''));
//     return num.toLocaleString('vi-VN') + '₫';
// }
function formatPrice(price) {

  const numericPrice = price.toString().replace(/[^\d.,]/g, "");
  const num = parseFloat(numericPrice.replace(/,/g, ""));

  const formatted = num.toLocaleString("vi-VN") + "₫";

  return formatted;
}

function calculateItemTotal(price, quantity) {
  const numericPrice = parseFloat(
    price
      .toString()
      .replace(/[^\d.,]/g, "")
      .replace(/,/g, "")
  );
  return numericPrice * quantity;
}

function updateQuantity(itemId, size, newQuantity) {
  let cart = getCart();
  const itemIndex = cart.findIndex(
    (item) => item.id === itemId && item.size === size
  );

  if (itemIndex !== -1) {
    if (newQuantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = newQuantity;
    }
    saveCart(cart);
    loadCartItems();
  }
}

function removeItem(itemId, size) {
  console.log("Đang xóa item:", itemId, size);
  let cart = getCart();
  cart = cart.filter(
    (item) => !(String(item.id) === String(itemId) && item.size === size)
  );
  saveCart(cart);
  loadCartItems();
  showSuccessModal("Đã xóa sản phẩm khỏi giỏ hàng!");
}
function loadCartItems() {
  try {
    const cart = getCart();
    const cartItemsContainer = document.getElementById("cart-items");
    const emptyCartContainer = document.getElementById("empty-cart");
    const mainContent = document.querySelector("main");

    if (cart.length === 0) {
      mainContent.classList.add("hidden");
      emptyCartContainer.classList.remove("hidden");
      return;
    }

    mainContent.classList.remove("hidden");
    emptyCartContainer.classList.add("hidden");

    let cartHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
      const itemTotal = calculateItemTotal(item.price, item.quantity);
      subtotal += itemTotal;

      cartHTML += `
                <div class="cart-item border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:mb-0">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <img src="${item.img}" alt="${
        item.name
      }" class="w-20 h-20 object-cover rounded-lg">
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-lg font-medium text-gray-900 truncate">${
                                  item.name
                                }</h3>
                                <button onclick="showConfirmModal('${
                                  item.id
                                }', '${
        item.size
      }', 'remove')" class="text-red-600 hover:text-red-800 transition-colors ml-4">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                            <div class="flex items-center space-x-4 mb-3">
                                <span class="text-sm text-gray-600">Size: <span class="font-semibold">${
                                  item.size
                                }</span></span>
                                <span class="text-sm text-gray-600">Giá: <span class="font-semibold text-red-600">${formatPrice(
                                  item.price
                                )}</span></span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-3">
                                    <span class="text-sm text-gray-600">Số lượng:</span>
                                    <div class="flex items-center space-x-2">
                                        <button onclick="updateQuantity('${
                                          item.id
                                        }', '${item.size}', ${
        item.quantity - 1
      })" class="quantity-btn w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                            <i class="fas fa-minus text-xs"></i>
                                        </button>
                                        <span class="w-12 text-center font-semibold">${
                                          item.quantity
                                        }</span>
                                        <button onclick="updateQuantity('${
                                          item.id
                                        }', '${item.size}', ${
        item.quantity + 1
      })" class="quantity-btn w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                            <i class="fas fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="text-lg font-bold text-gray-900">${formatPrice(
                                      itemTotal
                                    )}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    });

    cartItemsContainer.innerHTML = cartHTML;

    // Update summary - Thêm debug chi tiết
    const shipping = subtotal > 0 ? 30000 : 0;
    const total = subtotal + shipping;

    // Kiểm tra từng element trước khi cập nhật
    const cartCountEl = document.getElementById("cart-count");
    const subtotalEl = document.getElementById("subtotal");
    const shippingEl = document.getElementById("shipping");
    const totalEl = document.getElementById("total");

    if (cartCountEl) {
      cartCountEl.textContent = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    } else {
      console.error(" cart-count element not found");
    }

    if (subtotalEl) {
      subtotalEl.textContent = formatPrice(subtotal);
    } else {
      console.error(" subtotal element not found");
    }

    if (shippingEl) {
      shippingEl.textContent = subtotal > 0 ? formatPrice(shipping) : "0₫";
    } else {
      console.error(" shipping element not found");
    }

    if (totalEl) {
      totalEl.textContent = formatPrice(total);
    } else {
      console.error(" total element not found");
    }
  } catch (error) {
    console.error("Error in loadCartItems:", error);
  }
}

function showConfirmModal(itemId, size, action) {
  console.log("Xác nhận xóa:", itemId, size, action);
  const modal = document.getElementById("confirmModal");
  const message = document.getElementById("confirmMessage");
  const confirmButton = document.getElementById("confirmButton");

  if (action === "remove") {
    message.textContent =
      "Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?";
    confirmButton.onclick = () => {
      removeItem(itemId, size);
      closeConfirmModal();
    };
  } else if (action === "clear") {
    message.textContent =
      "Bạn có chắc chắn muốn xóa tất cả sản phẩm khỏi giỏ hàng?";
    confirmButton.onclick = () => {
      clearCart();
      closeConfirmModal();
      removeItem(itemId, size);
    };
  }

  modal.classList.remove("hidden");
  setTimeout(() => {
    modal
      .querySelector(".modal-content")
      .classList.add("modal-content-enter-active");
  }, 10);
}

function closeConfirmModal() {
  const modal = document.getElementById("confirmModal");
  modal
    .querySelector(".modal-content")
    .classList.remove("modal-content-enter-active");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

function showSuccessModal(message) {
  document.getElementById("successMessage").textContent = message;
  const modal = document.getElementById("successModal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal
      .querySelector(".modal-content")
      .classList.add("modal-content-enter-active");
  }, 10);
}

function closeSuccessModal() {
  const modal = document.getElementById("successModal");
  modal
    .querySelector(".modal-content")
    .classList.remove("modal-content-enter-active");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCartItems();
  showSuccessModal("Đã xóa tất cả sản phẩm khỏi giỏ hàng!");
}

function clearAllCart() {
  showConfirmModal("", "", "clear");
}

function checkout() {
  const cart = getCart();
  if (cart.length === 0) {
    showSuccessModal("Giỏ hàng trống, vui lòng thêm sản phẩm!");
    return;
  }

  // Simulate checkout process
  showSuccessModal("Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
  setTimeout(() => {
    clearCart();
  }, 2000);
}

function continueShopping() {
  // Redirect to shop page
  window.location.href = "index.html"; 
}

// Close modal when clicking outside
document.getElementById("confirmModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeConfirmModal();
  }
});

document.getElementById("successModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeSuccessModal();
  }
});

// Load cart items when page loads
document.addEventListener("DOMContentLoaded", function () {
  loadCartItems();
});
