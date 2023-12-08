// Write all the code here
import React from "react";

function Footer() {
    return(<footer>
      <div>
      <div>
      <dl>
        <dt><h2>Burger Shop</h2></dt>
        <dd><p>We are trying to give you the best taste possible.</p></dd>
      </dl>
      </div>

      <div>
      <p className="m-0">We give attention to genuine feedback. </p>
      </div>
      </div>

      <div className="d-flex justify-content-center flex-column align-items-end">
      <p className="m-0">Follow US</p>
      <ul className="list-unstyled m-3">
        <li className="p-3"><a href="#"><i className="link-light bi bi-twitter-x"></i></a></li>
        <li className="p-3"><a href="#"><i className="link-light bi bi-instagram"></i></a></li>
        <li className="p-3"><a href="#"><i className="link-light bi bi-facebook"></i></a></li>
      </ul>
      </div>
    </footer>);
};

export default Footer;
