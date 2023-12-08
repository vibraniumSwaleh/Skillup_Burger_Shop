// Write all the code here
import React from "react";

function OrderDetails() {
    return(<div className="orderDetails">
    <main>
    <h1>ORDER DETAILS</h1>

    <div>
    <h1>SHIPPING</h1>
    <p>Address: dfvdjfd;sj</p>
    </div>

    <div>
    <h1>CONTACT</h1>
    <p>Name: John Doe</p>
    <p>Phone: 1235554</p>
    </div>

    <div>
    <h1>STATUS</h1>
    <p>Order Status: Processing</p>
    <p>Placed At: 12:51</p>
    <p>Delivered At: 12:51</p>
    </div>

    <div>
    <h1>PAYMENT</h1>
    <p>Payment Method: Processing</p>
    <p>Payment Reference: 12:51</p>
    <p>Paid At: 12:51</p>
    </div>

    <div>
    <h1>AMOUNT</h1>
    <p>Items Total Method: ₹ 2536</p>
    <p>Shipping Charges: ₹102</p>
    <p>Tax: ₹56</p>
    <p>Total Amount: ₹2694</p>
    </div>

    <h2>ORDERED ITEMS</h2>
    <article>
    <div>
    <h4>Cheese burger</h4>
    <p>12 x 232</p>
    </div>

    <div>
    <h4>Veg Cheese burger</h4>
    <p>10 x 500</p>
    </div>

    <div>
    <h4>Burger Fries</h4>
    <p>10 x 1800</p>
    </div>

    <div>
    <h1>Sub Total</h1>
    <h1>₹2132</h1>
    </div>
    </article>

    </main>
    </div>);
};
export default OrderDetails;