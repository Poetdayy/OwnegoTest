import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/stores")
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
        {store.map((item) => {
          return (
            <li>
              <Link to={item.name} className="nav_storeLink">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
