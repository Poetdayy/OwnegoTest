import React from "react";
import { Button } from "bootstrap";

const Container = (props) => {
  return (
    <div className="content_container">
      <h1>{props.name} Menu</h1>
      <button className="btn btn-primary store_filter-button">Filter</button>
    </div>
  );
};

export default Container;
