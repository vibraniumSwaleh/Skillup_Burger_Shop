import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const customItems = [
    {
      orderId: "Cheeseburger",
      status: "Pending",
      itemQty: 2,
      amount: 200,
      paymentMethod: "Credit Card"
    },
    {
      orderId: "Veggie Burger",
      status: "Delivered",
      itemQty: 1,
      amount: 100,
      paymentMethod: "PayPal"
    },
    {
      orderId: "Chicken Burger",
      status: "Delivered",
      itemQty: 3,
      amount: 637,
      paymentMethod: "PayPal"
    }
  ];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customItems.map((item, index) => (
              <tr key={index}>
                <td>{item.orderId}</td>
                <td>{item.status}</td>
                <td>{item.itemQty}</td>
                <td>₹{item.amount}</td>
                <td>{item.paymentMethod}</td>
                <td>
                  <Link to={`/orders/${item.orderId}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
