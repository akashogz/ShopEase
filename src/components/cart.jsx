import { useState } from "react"

function cart({ cart, amount, increaseQuantity, decreaseQuantity }) {


    return (
        <>
            <div className="main-container">
                <p className="shoppingBag">Shopping Bag</p>
                {cart.map((item, index) => 
                    <div className="itemContainer" key={index}>
                        <div className="itemDesc">
                            <img src = {item.productImage}/>
                            <div>
                                <p className="itemName">{item.productName}</p>
                                <p className="itemSize">Size 32</p>
                            </div>
                        </div>
                        <div className="cartButtons">
                            <button onClick={() => decreaseQuantity(item.productId)}>-</button>
                            <p>{item.productQuantity}</p>
                            <button onClick={() => increaseQuantity(item.productId)}>+</button>
                        </div>
                    </div>
                )}
                {cart.length > 0 ? 
                    <>
                    <p className="priceSummary">Order Summary</p>
                    <div className="priceDesc">
                        <div className="priceAttributes">
                            <p>Subtotal</p>
                            <p>${amount/100}</p>
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
                        <button className="checkOut">Checkout</button>
                    </div>
                    </> : null }
            </div>
        </>
    )
}

export default cart