import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/app.scss";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dingtea from "./pages/Dingtea";
import Gongcha from "./pages/Gongcha";
import Leetee from "./pages/Leetee";
import Tocotoco from "./pages/Tocotoco";

function App() {
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
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/Ding%20Tea" element={<Dingtea></Dingtea>}></Route>
        <Route path="/GongCha" element={<Gongcha></Gongcha>}></Route>
        <Route path="/LeeTee" element={<Leetee></Leetee>}></Route>
        <Route path="/Tocotoco" element={<Tocotoco></Tocotoco>}></Route>
      </Routes>
    </div>
  );
}

export default App;
