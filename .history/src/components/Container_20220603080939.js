import React, { useEffect, useState } from "react";
import Card from "./Card";
import Form from "react-bootstrap/Form";
import { orderBy } from "lodash";
import _ from "lodash";

const Container = (props) => {
  const [Products, setProducts] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);
  const [productsInStore, setproductsInStore] = useState([]);
  const [sortState, setSortState] = useState("none");

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

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  return (
    <div className="content">
      <div className="content_container">
        <h1 className="content_title">{props.name} Menu</h1>
        <button className="btn btn-primary store_filter-button">Filter</button>
        <div className="content_dropdown">
          <h4 className="content_dropdown-title">Sort by</h4>

          <Form.Select
            class="dropdownMenuButton"
            aria-label="Default select example"
            onChange={(e) => setSortState(e.target.value)}
          >
            <option>Open this select menu</option>
            <option value="1">Name Ads</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
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
