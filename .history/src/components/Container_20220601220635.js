import React from "react";
import { Button } from "bootstrap";

const Container = (props) => {
  return (
    <div className="content">
      <div className="content_container">
        <h1>{props.name} Menu</h1>
        <button className="btn btn-primary store_filter-button">Filter</button>
      </div>

      <div class="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Name (Asc)
          </a>
          <a class="dropdown-item" href="#">
            Name (Dsc)
          </a>
          <a class="dropdown-item" href="#">
            Price (Asc)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container;
