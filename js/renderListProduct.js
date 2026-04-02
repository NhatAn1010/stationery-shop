

export function renderListProduct(products)
{
    let html = "";

    products.forEach(p => {
        html += `
            <div class="col-6 col-md-3 col-lg-3 mb-3">
                <div class="product card shadow">
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
                            <a href="./product_detail.html?id=${p.id}&cat=${p.category}" >
                                <button class="btn btn-primary">
                                    <i class="bi bi-eye"></i>
                                    Xem chi tiết
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
        `;
    });

    document.getElementById("list-product").innerHTML = html;

}

