import React, { useEffect } from "react";
import Card from "./Card";
import Products from "../data/products.json";

const Container = (props) => {
  return (
    <div className="content">
      <div className="content_container">
        <h1 className="content_title">{props.name} Menu</h1>
        <button className="btn btn-primary store_filter-button">Filter</button>
        <div className="content_dropdown">
          <h4 className="content_dropdown-title">Sort by</h4>
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
              <a class="dropdown-item" href="#">
                Price (Dsc)
              </a>
            </div>
          </div>
        </div>

        <div className="listItem">
          {Products &&
            Products.map((item) => <Card key={item.id} id={item.id}></Card>)}
        </div>
      </div>
    </div>
  );
};

export default Container;
