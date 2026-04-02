import { renderListProduct } from "./renderListProduct.js";
import { callPagination } from "./pagination.js";



fetch('../data/art-product.json')
.then(r => r.json())
.then(data => {
    callPagination(data, renderListProduct);
});