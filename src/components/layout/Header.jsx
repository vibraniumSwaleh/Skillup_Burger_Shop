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
            alt="Burger Logo"
            loading="lazy"/>
          </a>

          <button 
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarButtonsExample">
            <div className="d-flex justify-content-end bg-body-tertiary mb-2">
            <a data-mdb-ripple-init className="nav-link active" href="/">Home</a>
            <a data-mdb-ripple-init className="nav-link active" href="/contact">Contact</a>
            <a data-mdb-ripple-init className="nav-link active" href="/about">About</a>
            <a data-mdb-ripple-init className="nav-link active" href="/cart">Shopping Cart</a>
            <DropdownMenu/>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Header;







