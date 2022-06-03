import React from "react";
import { Button } from "bootstrap";

const Container = (props) => {
  return (
    <div>
      <h1>{props.name}} Menu</h1>
      <button className="store_filter-button">Filter</button>
    </div>
  );
};

export default Container;
