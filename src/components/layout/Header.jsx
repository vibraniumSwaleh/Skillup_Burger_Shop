// Write all the code here
import React from "react";
import Logo from "../../assets/logo.png";
import DropdownMenu from "./DropdownMenu";


function Header() {
    return( <nav className="nav nav-underline justify-content-end">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <img className="m-1"
          src={Logo}
          height="50"
          alt="MDB Logo"
          loading="lazy"
          style={{marginTop: "2px"}}
        />
      </a>
    <a className="nav-link active" aria-current="page" href="/">Home</a>
    <a className="nav-link" href="/contact">Contact</a>
    <a className="nav-link" href="/about">About</a>
    <a className="nav-link" href="/cart">Shopping Cart</a>
    <DropdownMenu/>
  </nav>);
};

export default Header;



