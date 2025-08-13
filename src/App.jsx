import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Main from "./components/main.jsx";
import Cart from "./components/cart.jsx";
import ProductPage from "./components/product-page.jsx";
import Orders from "./components/orders.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentView, setCurrentView] = useState("main");
  const [orders, setOrders] = useState([]);

  const handleAddToCart = (product, quantity) => {
    const existingItem = cart.find(item => item.productId === product.productId);

    if (existingItem) {
      setCart(cart.map(item =>
        item.productId === product.productId
          ? { ...item, productQuantity: item.productQuantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, productQuantity: quantity }]);
    }

    setTotalAmount(prev => prev + product.productPrice * quantity);
  };

  const increaseQuantity = (productId) => {
    const product = cart.find(item => item.productId === productId);
    if (!product) return;

    setCart(cart.map(item =>
      item.productId === productId
        ? { ...item, productQuantity: item.productQuantity + 1 }
        : item
    ));

    setTotalAmount(prev => prev + product.productPrice);
  };

  const decreaseQuantity = (productId) => {
    const product = cart.find(item => item.productId === productId);
    if (!product) return;

    if (product.productQuantity === 1) {
      setCart(cart.filter(item => item.productId !== productId));
    } else {
      setCart(cart.map(item =>
        item.productId === productId
          ? { ...item, productQuantity: item.productQuantity - 1 }
          : item
      ));
    }

    setTotalAmount(prev => prev - product.productPrice);
  };

  return (
    <>
      <Navbar
        setView={setCurrentView}
        setSelectedCategory={setSelectedCategory}
      />

      {currentView === "cart" && (
        <Cart
          cart={cart}
          amount={totalAmount}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          setOrder={setOrders}
        />
      )}

      {currentView === "product" && selectedProduct && (
        <ProductPage
          selectedProduct={selectedProduct}
          handleAddToCart={handleAddToCart}
        />
      )}

      {currentView === "orders" && (
        <Orders order={orders} />
      )}

      {currentView === "main" && (
        <Main
          cart={cart}
          handleAddToCart={handleAddToCart}
          amount={totalAmount}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setView={setCurrentView}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </>
  );
}

export default App;