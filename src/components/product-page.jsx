function productPage({ selectedProduct }){
    return (
        <>
        <div className="main-product">
            <img src={selectedProduct.productImage}/>
            <div className="productPageDesc">
                <p className="productPageCategory">/ {selectedProduct.productCategory}</p>
                <p className="productPageName">{selectedProduct.productName}</p>
                <p className="productPageDes">{selectedProduct.productDesc}</p>
                <p className="productPagePrice">${(selectedProduct.productPrice)/100}</p>
                <p className="productPageText">Size</p>
                <div className="productSize">
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
                <p className="productPageText">Quantity</p>
                <input type="number" placeholder="Enter Quantity"/>
                <div className="productPageButton"><button>Add to Cart</button></div>
            </div>
        </div>
        </>
    )
}

export default productPage