import React, { useEffect, useState } from "react";
import Card from "./Card";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Container = (props) => {
  const [Products, setProducts] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);
  const [productsInStore, setproductsInStore] = useState([]);

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
        setShopProducts(data);
      });
  }, []);

  useEffect(() => {
    const checkProducts = shopProducts.filter((item) => item.shop === props.id);
    setproductsInStore(checkProducts);
  }, []);

  return (
    <div className="content">
      <div className="content_container">
        <h1 className="content_title">{props.name} Menu</h1>
        <button className="btn btn-primary store_filter-button">Filter</button>
        <div className="content_dropdown">
          <h4 className="content_dropdown-title">Sort by</h4>

          <Dropdown className="dropdownMenuButton">
            <Dropdown.Toggle id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {shopProducts.map((item) => item.shop === 1) ? (
          <h1>Hello</h1>
        ) : (
          <h1>Vui</h1>
        )}

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