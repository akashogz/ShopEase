import products from '../products.js';
import addToCart from '../assets/addtocart.svg';
import { useState } from 'react';

function main({ cart, setCart, handleAddToCart, amount, setAmount, selectedCategory, setSelectedCategory }) {
    const [toFind, setToFind] = useState("");

    function handleToFind(event) {
        setToFind(event.target.value);
    }
    
    return (
        <>
            <div className="main-container">
                <input type="text" placeholder="Search" className="main-search" onChange={() => handleToFind(event)}/>
                <div className="categories">
                    <button onClick={() => setSelectedCategory("All")}>All</button>
                    <button onClick={() => setSelectedCategory("Men")}>Men</button>
                    <button onClick={() => setSelectedCategory("Women")}>Women</button>
                    <button onClick={() => setSelectedCategory("Accessories")}>Accessories</button>
                </div>
                <div className="products">
                    {products
                        .filter(product => 
                            product.productName.toLowerCase().includes(toFind.toLowerCase())
                        )
                        .filter(product =>
                            selectedCategory === "All" || product.productCategory === selectedCategory
                        )
                        .map(product => (
                            <div className="product" key={product.productId}>
                                <img src={product.productImage} className="productImage" />
                                <div className="productDesc">
                                    <div>
                                        <p className="productName">{product.productName}</p>
                                        <p className="productPrice">${product.productPrice / 100}</p>
                                    </div>
                                    <img
                                        src={addToCart}
                                        className="addToCart"
                                        onClick={() => handleAddToCart(product)}
                                    />
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </>
    )
}

export default main