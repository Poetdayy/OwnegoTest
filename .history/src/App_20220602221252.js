import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/app.scss";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DingTea from "./src/pages/Dingtea.js";
import Gongcha from "./src/pages/Gongcha.js";
import LeeTee from "./src/pages/LeeTee.js";
import Tocotoco from "./src/pages/Tocotoco.js";
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
        <Route path="/" element={<DingTea></DingTea>}></Route>
        <Route path="/GongCha" element={<Gongcha></Gongcha>}></Route>
        <Route path="/LeeTee" element={<LeeTee></LeeTee>}></Route>
        <Route path="/Tocotoco" element={<Tocotoco></Tocotoco>}></Route>
      </Routes>
      <Container></Container>
    </div>
  );
}

export default App;
