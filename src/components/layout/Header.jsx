// Write all the code here
import React from "react";
import Logo from "../../assets/logo.png";
import DropdownMenu from "./DropdownMenu";


function Header() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand me-2" href="/">
            <img className="m-1"
            src={Logo}
            height="50"
            alt="MDB Logo"
            loading="lazy"/>
          </a>

          <button data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Burger Shop</a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
            <a data-mdb-ripple-init className="nav-link active" href="/">Home</a>
            <a data-mdb-ripple-init className="nav-link active" href="/contact">Contact</a>
            <a data-mdb-ripple-init className="nav-link active" href="/about">About</a>
            <a data-mdb-ripple-init className="nav-link active" href="/myorders">Shopping Cart</a>
            <DropdownMenu/>
            </div>
          </div>


        </div>
      </nav>
    );
};

export default Header;
