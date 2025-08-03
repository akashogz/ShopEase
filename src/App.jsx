import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Main from "./components/main.jsx";
import Cart from "./components/cart.jsx";
import ProductPage from "./components/product-page.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [showProduct, setShowProduct] = useState(false);

  function handleAddToCart(product) {
    const existing = cart.find(item => item.productId === product.productId);

    if (existing) {
      const updatedCart = cart.map(item =>
        item.productId === product.productId
          ? { ...item, productQuantity: item.productQuantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, productQuantity: 1 }]);
    }

    setAmount(prev => prev + product.productPrice);
  }

  function increaseQuantity(productId) {
    const updatedCart = cart.map(item =>
      item.productId === productId
        ? {
          ...item,
          productQuantity: item.productQuantity + 1
        }
        : item
    );
    setCart(updatedCart);

    const product = cart.find(item => item.productId === productId);
    if (product) {
      setAmount(prev => prev + product.productPrice);
    }
  }

  function decreaseQuantity(productId) {
    const product = cart.find(item => item.productId === productId);
    if (!product) return;

    if (product.productQuantity === 1) {
      const updatedCart = cart.filter(item => item.productId !== productId);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map(item =>
        item.productId === productId
          ? {
            ...item,
            productQuantity: item.productQuantity - 1
          }
          : item
      );
      setCart(updatedCart);
    }

    setAmount(prev => prev - product.productPrice);
  }

  return (
    <>
      <Navbar setShowCart={setShowCart} setShowProduct={setShowProduct}/>
      {showCart === true ? 
        <Cart cart={cart} setCart={setCart} amount={amount} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/> :
        (showProduct === true ? <ProductPage selectedProduct={selectedProduct}/>:
         <Main cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} amount={amount} setAmount={setAmount} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} showProduct={showProduct} setShowProduct={setShowProduct} setSelectedProduct={setSelectedProduct}/>)}
    </>
  );
}

export default App;
