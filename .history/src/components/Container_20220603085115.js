import React, { useEffect, useState } from "react";
import Card from "./Card";
import Form from "react-bootstrap/Form";
import { orderBy } from "lodash";
import _ from "lodash";

const Container = (props) => {
  const [Products, setProducts] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);
  const [productsInStore, setproductsInStore] = useState([]);
  const [sortState, setSortState] = useState("one");
  console.log(sortState);

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

  function handleNameAds(sortState) {
    if (sortState === "one") {
      let NameAds = _.orderBy(Products, ["name"], ["asc"]);
      return NameAds;
    } else if (sortState === "two") {
      let NameDsc = _.orderBy(Products, ["name"], ["desc"]);
      return NameDsc;
    } else if (sortState === "three") {
      let PriceAds = _.orderBy(Products, ["price"], ["asc"]);
      return PriceAds;
    }
     } else if (sortState === "four") {
      let PriceDsc = _.orderBy(Products, ["price"], ["desc"]);
      return PriceDsc;
     }
  }
  console.log(handleNameAds(sortState));

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
            <option value="one">Name Ads</option>
            <option value="two">Name Dsc</option>
            <option value="three">Price Ads</option>
            <option value="four">Price Dsc</option>
          </Form.Select>
        </div>

        <div className="listItem">
          {handleNameAds(sortState).map((item) => {
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
