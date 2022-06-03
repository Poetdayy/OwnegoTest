import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/stores")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStore(data);
      });
  }, []);

  return (
    <div className="nav_container">
      <h1 className="nav_title">Milk Tea Store</h1>
      <ul class="nav_listItem">
        <li>
          <a href="#" className="nav_storeLink">
            {store[0].name}
          </a>
        </li>
        <li>
          <a href="#" className="nav_storeLink">
            {store[1].name}
          </a>
        </li>
        <li>
          <a href="#" className="nav_storeLink">
            {store[2].name}
          </a>
        </li>
        <li>
          <a href="#" className="nav_storeLink">
            {store[3].name}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
