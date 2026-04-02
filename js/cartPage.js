function renderCart() {
    const cart = getCart();
    const container = document.getElementById("cart-list");
    if (!container) return;
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = '<p id="cart" class="d-flex justify-content-center">Giỏ hàng trống!</p>';
        return;
    }

    cart.forEach(item => {
        const row = document.createElement("div");
        row.classList.add("cart-item", "mb-3", "pt-5");
        row.innerHTML = `
            <div class="d-flex">
            <img src="${item.image}" class="me-3" style="width:150px; height:150px; object-fit:contain;">
            <div class="row w-100 justify-content-center">
                <div class="col-12 col-md-9">  
                <h5>${item.name}</h5>
                <p>Giá: ${item.price.toLocaleString('vi-VN')}đ</p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-success btn-minus ">-</button>
                        <span class="mx-4 text-center">Số lượng: ${item.quantity}</span>
                        <button class="btn btn-success btn-plus">+</button>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <button class="btn btn-danger btn-delete mx-3 px-3 mt-2 mt-md-2 rounded-pill">
                        <i class="bi bi-trash3 me-2"></i>
                        Hủy sản phẩm
                    </button>
                </div>      
            </div>
        </div>
        `;
        container.appendChild(row);

        row.querySelector(".btn-delete").addEventListener("click", () => {
            removeFromCart(item.id);
        });

        row.querySelector('.btn-minus').addEventListener('click', () => {
            updateQuantity(item.id ,item.quantity - 1);
        });
        row.querySelector('.btn-plus').addEventListener('click', () => {
            updateQuantity(item.id ,item.quantity + 1);
        });
    });


    let btnBuy = document.getElementById("cart-buy");
    btnBuy.addEventListener("click", () => {
        window.location.href = "checkout.html"; // dẫn tới form thanh toán
    });
}

document.addEventListener("DOMContentLoaded", renderCart);