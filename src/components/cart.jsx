import { useState } from "react";

function Cart({ cart, setCart, amount, increaseQuantity, decreaseQuantity, setOrder }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  return (
    <>
      <div className={`main-container ${orderPlaced ? "dimmed" : ""}`}>
        <p className="shoppingBag">Shopping Bag</p>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div className="itemContainer" key={index}>
                <div className="itemDesc">
                  <img src={item.productImage} alt={item.productName} />
                  <div>
                    <p className="itemName">{item.productName}</p>
                    <p className="itemSize">Size {item.size}</p>
                  </div>
                </div>
                <div className="cartButtons">
                  <button onClick={() => decreaseQuantity(item.productId)}>-</button>
                  <p>{item.productQuantity}</p>
                  <button onClick={() => increaseQuantity(item.productId)}>+</button>
                </div>
              </div>
            ))}

            <p className="priceSummary">Order Summary</p>
            <div className="priceDesc">
              <div className="priceAttributes">
                <p>Subtotal</p>
                <p>${amount / 100}</p>
              </div>
              <div className="priceAttributes">
                <p>Shipping</p>
                <p>$5</p>
              </div>
              <div className="priceAttributes">
                <p>Tax</p>
                <p>$10</p>
              </div>
              <div className="priceAttributes">
                <p>Total</p>
                <p>${((amount / 100) + 10 + 5).toFixed(2)}</p>
              </div>
              <button
                className="checkOut"
                onClick={() => {
                  setOrderPlaced(true);
                  setOrder((prev) => [...prev, ...cart]);
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {orderPlaced && (
        <div className="overlay">
          <div className="modal">
            <h2>Thank you!</h2>
            <p>Your order has been placed successfully.</p>
            <button
              onClick={() => {
                setOrderPlaced(false);
                setCart([]);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
