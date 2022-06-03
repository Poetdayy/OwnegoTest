import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [store, setStore] = useState([]);
  useEffectfect(() => {
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
