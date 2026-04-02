export function callPagination(dataProduct, renderProduct)
{
    let currentPage = 1;
    const perPage = 12;
    const products = dataProduct;
    const totalPage = Math.ceil(products.length / perPage);

    window.changePage = changePage;
    renderPage();
    
    function changePage(page) {
        currentPage = page;
        renderPage();
        window.scrollTo(0, 0);
    }

    function renderPage()
    {
        let start = (currentPage - 1) * perPage;
        let end = start + perPage;

        const productPerPage = products.slice(start, end);

        renderProduct(productPerPage);
        pagination();
    }


    function pagination() 
    {
        let html = "";
        let htmlPrev = "";
        let htmlCont = "";

        htmlPrev += `
            <button id="prev-button" class="btn btn-danger ms-2">
                <
            </button>
        `;
        for(let i = 1; i <= totalPage;i += 1)
        {
            html += `               
                <button class="btn ms-2 ${(i === currentPage)? "btn-success" : "btn-white"}" onclick="changePage(${i})">
                ${i}
                </button>
            `;
        }


        htmlCont += `
        <button id="cont-button" class="btn btn-danger ms-2">
        >
        </button>
        `;
        document.getElementById("pagination").innerHTML = htmlPrev + html + htmlCont;

        const prevButton = document.getElementById("prev-button");
        const contButton = document.getElementById("cont-button");

        prevButton.addEventListener('click', () => {
            if(currentPage > 1) changePage(currentPage - 1); 

        })

        contButton.addEventListener('click', () => {
            if(currentPage < totalPage) changePage(currentPage + 1);    
        })
    }
}