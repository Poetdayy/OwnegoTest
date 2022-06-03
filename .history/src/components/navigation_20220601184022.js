import React from "react";

const Navigation = () => {
  return (
    <div class="nav_container">
      <h1 className="nav_title">Milk Tea Store</h1>
      <ul class="nav_listItem">
        <li>
          <a href="#" className="nav_storeLink">
            Store 1
          </a>
        </li>
        <li>
          <a href="#" className="nav_storeLink">
            Store 2
          </a>
        </li>
        <li>
          <a href="#" className="nav_storeLink">
            Store 3
          </a>
        </li>
        <li>
          <a href="#" className="nav_storeLink">
            Store 4
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
