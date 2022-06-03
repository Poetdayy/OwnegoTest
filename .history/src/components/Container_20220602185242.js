import React, { useEffect, useState } from "react";
import Card from "./Card";

const Container = (props) => {
  const [Products, setProducts] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/shopProducts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="content">
      <div className="content_container">
        <h1 className="content_title">{props.name} Menu</h1>
        <button className="btn btn-primary store_filter-button">Filter</button>
        <div className="content_dropdown">
          <h4 className="content_dropdown-title">Sort by</h4>
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

        <div className="listItem">
          {Products &&
            Products.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  toppings={item.toppings}
                  price={item.price}
                ></Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Container;
