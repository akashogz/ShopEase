import { useState } from "react";
import products from "../products.js";
import addToCart from "../assets/addtocart.svg";

function Main({
  handleAddToCart,
  selectedCategory,
  setSelectedCategory,
  setSelectedProduct,
  setView,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        selectedCategory === "All" ||
        product.productCategory === selectedCategory
    );

  const categories = ["All", "Men", "Women", "Accessories"];

  return (
    <main className="main-container">
      <div><input
        type="text"
        placeholder="Search products..."
        className="main-search"
        value={searchTerm}
        onChange={handleSearchChange}
      /></div>

      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product" key={product.productId}>
            <img
              src={product.productImage}
              alt={product.productName}
              className="productImage"
              onClick={() => {
                setSelectedProduct(product);
                setView("product");
              }}
            />
            <div className="productDesc">
              <div>
                <p className="productName">{product.productName}</p>
                <p className="productPrice">
                  ${product.productPrice / 100}
                </p>
              </div>
              <img
                src={addToCart}
                alt="Add to cart"
                className="addToCart"
                onClick={() =>
                  handleAddToCart(
                    {
                      ...product,
                      size: "M",
                      date: new Date().toLocaleDateString(),
                    },
                    1
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
