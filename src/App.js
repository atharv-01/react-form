import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Final from "./components/Final";

import "./App.css";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/Final" element={<Final />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
