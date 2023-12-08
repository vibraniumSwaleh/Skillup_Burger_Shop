import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
// import burger3 here
import burger3 from "../../assets/burger3.png";
import { useState } from "react";

const CartItem = ({ id, value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={() => increment(id)}>+</button>
    </div>
  </div>
);


const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ]);

  const increment = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const subtotal = items.reduce((total, item) => total + item.count * 2000, 0);
  const tax = subtotal * 0.18;
  const shippingCharges = 200;
  const total = subtotal + tax + shippingCharges;

  return (
    <section className="cart">
      <main>
        <CartItem
          id={1}
          title={"Cheese Burger"}
          img={burger1}
          value={items.find((item) => item.id === 1)?.count || 0}
          increment={increment}
          decrement={decrement}
        />
        <CartItem
          id={2}
          title={"Veg Cheese Burger"}
          img={burger2}
          value={items.find((item) => item.id === 2)?.count || 0}
          increment={increment}
          decrement={decrement}
        />
        <CartItem
          id={3}
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={items.find((item) => item.id === 3)?.count || 0}
          increment={increment}
          decrement={decrement}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subtotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;



