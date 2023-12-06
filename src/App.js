import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Premium from "./page/premium";
import Berlangganan from "./page/berlangganan";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/premium" element={<Premium />}></Route>
        <Route path="/berlangganan" element={<Berlangganan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
