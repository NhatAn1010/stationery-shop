function renderBestProduct(products) 
{
    let html = "";

    products.forEach(p => {
        html += `
            <div class="col-6 col-md-3 col-lg-3 mb-4">
                <div id="product-item--outline" class="product card shadow">
                    <div class="card-body">
                        <div class="card-head mb-1 d-flex justify-content-center">
                            <img src="${p.image}" alt="">
                            <div class="product__item-top">
                                <img src="../img/icon/top-item.png" alt="">
                            </div>
                        </div>

                        <div class="product-title mb-4">
                            <a href="#"> 
                                ${p.name}
                            </a>
                        </div>

                        <div class="d-flex justify-content-between mb-3">
                            <div class="text-danger fw-bold">
                                ${p.price.toLocaleString('vi-VN')}đ
                            </div>
                            <div class="sold fw-bold">
                                Đã bán ${p.sold}
                            </div>
                        </div>

                        <div class="price-sold d-flex justify-content-center">
                            <a href="./product_detail.html?id=${p.id}&cat=${p.category}" class="btn btn-primary">
                                <i class="bi bi-eye"></i>
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

    });
    document.getElementById("best-product").innerHTML = html;
}

function renderDiscountProduct(products) 
{
    let html = "";

    products.forEach(p => {
        html += `
            <div class="col-6 col-md-3 col-lg-3 mb-4">
                <div id="product-item--outline" class="product card shadow">
                    <div class="card-body">
                        <div class="card-head mb-1 d-flex justify-content-center">
                            <img src="${p.image}" alt="">
                        </div>

                        <div class="product-title mb-4">
                            <a href="#"> 
                                ${p.name}
                            </a>
                        </div>

                        <div class="d-flex justify-content-between mb-3">
                            <div class="text-danger fw-bold ">
                                <div class="d-flex">
                                    <p class="text-danger text-decoration-line-through">
                                        ${p.originalPrice.toLocaleString('vi-VN')}đ
                                    </p>
                                    <span class="fw-bold text-muted text-decoration-none ms-2">${(p.discount * 100).toFixed(0)}% off</span>
                                </div> 
                                <span class="fw-bold discount-price bg-danger p-1">${p.price.toLocaleString('vi-VN')}đ </span> 
                            </div>
                            
                            <div class="sold fw-bold">
                                Đã bán ${p.sold}
                            </div>
                        </div>
                        

                        <div class="price-sold d-flex justify-content-center">
                            <a href="./product_detail.html?id=${p.id}&cat=${p.category}" class="btn btn-primary">
                                <i class="bi bi-eye"></i>
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("discount-product").innerHTML = html;
}


function renderForyouProduct(products)
{
    let html = "";

    products.forEach(p => {
        html += `
            <div class="col-6 col-md-3 col-lg-3 mb-4">
                <div id="product-item--outline" class="product card shadow">
                    <div class="card-body">
                        <div class="card-head mb-1 d-flex justify-content-center">
                            <img src="${p.image}" alt="">
                        </div>

                        <div class="product-title mb-4">
                            <a href="#"> 
                                ${p.name}
                            </a>
                        </div>

                        <div class="d-flex justify-content-between mb-3">
                            <div class="text-danger">
                                ${p.price.toLocaleString('vi-VN')}đ
                            </div>
                            <div class="sold fw-bold">
                                Đã bán ${p.sold}
                            </div>
                        </div>

                        <div class="price-sold d-flex justify-content-center">
                            <a href="./product_detail.html?id=${p.id}&cat=${p.category}" class="btn btn-primary">
                                <i class="bi bi-eye"></i>
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("foryou-product").innerHTML = html;
}


fetch("../data/home-product.json")
.then(res => res.json())
.then(data => {
    const bestProduct = data.slice(0, 4);
    const discountProduct = data.slice(4, 8);
    const forProduct = data.slice(8,12);


    renderBestProduct(bestProduct);
    renderDiscountProduct(discountProduct);
    renderForyouProduct(forProduct);
})