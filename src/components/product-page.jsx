import { useState } from "react";

function ProductPage({ selectedProduct, handleAddToCart }) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");

  const handleQtyChange = (event) => {
    const value = Number(event.target.value);
    setQty(value < 1 ? 1 : value);
  };

  const handleAdd = () => {
    handleAddToCart(
      {
        ...selectedProduct,
        size,
        date: new Date().toLocaleDateString(),
      },
      qty
    );
  };

  const sizeOptions = ["XS", "S", "M", "L", "XL"];

  return (
    <section className="main-product">
      <div className="img-container">
        <img
          src={selectedProduct.productImage}
          alt={selectedProduct.productName}
          className="main-img"
        />
      </div>

      <div className="productPageDesc">
        <p className="productPageCategory">/ {selectedProduct.productCategory}</p>
        <h1 className="productPageName">{selectedProduct.productName}</h1>

        <p className="count">
          {selectedProduct.rating}{" "}
          <img
            src={`${selectedProduct.rating}.png`}
            className="rating"
            alt={`${selectedProduct.rating} star rating`}
          />{" "}
          ({selectedProduct.reviews})
        </p>

        <p className="productPageDes">{selectedProduct.productDesc}</p>
        <p className="productPagePrice">
          ${selectedProduct.productPrice / 100}
        </p>

        <p className="productPageText">Size</p>
        <p className="selSize">Selected Size: {size}</p>
        <div className="productSize">
          {sizeOptions.map((s) => (
            <button
              key={s}
              className={size === s ? "active" : ""}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="productPageText">Quantity</p>
        <input
          type="number"
          min="1"
          className="qtyInput"
          value={qty}
          onChange={handleQtyChange}
          aria-label="Product quantity"
        />

        <div className="productPageButton">
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
