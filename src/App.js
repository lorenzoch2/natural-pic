import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./Context";

export default function App() {
  const [pics, setPics] = useState([]);
  const shareInfo = { pics, setPics };

  const naturalPicsApi = async() => {
    const response = await fetch(`${process.env.PUBLIC_URL}/fotos.json`);
    const data = await response.json();
    setPics(data.photos)
  } 

    useEffect(() => {
    naturalPicsApi();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={shareInfo}>
        <BrowserRouter basename="/natural-pic">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
