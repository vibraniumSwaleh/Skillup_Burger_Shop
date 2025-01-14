import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      {name:"Login", path:"/login"},
      {name:"Orders", path:"/myorders"},
      {name:"Logout", path:"/login"}
    ];
    setNavLinks(navs);
  }, []);

  return (
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          {navLinks.map((d, i) => (
            <li key={i}>
              <Link to={d.path}>
                <button class="dropdown-item" type="button">
                  {d.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default DropdownMenu;