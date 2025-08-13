function Orders({ order }) {
  return (
    <div className="orders-main">
      <h1>Orders</h1>

      {order.length === 0 ? (
        <p className="no-orders">You haven’t placed any orders yet.</p>
      ) : (
        order.map((item) => (
          <div className="orders-product" key={`${item.productId}-${item.date}`}>
            <img
              src={item.productImage}
              alt={item.productName}
              className="orders-img"
            />

            <div className="orders-desc">
              <p className="orders-status">On Its Way</p>
              <p className="orders-name">{item.productName}</p>
              <p className="orders-size">{item.productDesc}</p>
              <p className="orders-date">Placed On: {item.date}</p>
              <button className="orders-btn">View or Manage</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
