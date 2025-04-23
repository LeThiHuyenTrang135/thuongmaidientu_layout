document.addEventListener("DOMContentLoaded", function () {
    // Bắt tất cả các nút tăng/giảm
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.quantity-box button:first-child');
        const plusBtn = item.querySelector('.quantity-box button:last-child');
        const input = item.querySelector('.quantity-box input');

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(input.value);
            if (quantity > 1) {
                input.value = quantity - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(input.value);
            input.value = quantity + 1;
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const cartItem = this.closest(".cart-item");
            if (cartItem) {
                cartItem.remove();
            }
        });
    });
});

function openCart() {
    document.getElementById('sidebar-cart').classList.add('active');
    document.getElementById('cart-overlay').classList.add('active');
}

function closeCart() {
    document.getElementById('sidebar-cart').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
}

/**Thanh toán */
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.querySelector('.checkout'); // Chọn nút Thanh toán

    checkoutButton.addEventListener('click', () => {
        window.location.href = 'thanhtoan.html'; // Chuyển hướng đến thanhtoan.html
    });
});