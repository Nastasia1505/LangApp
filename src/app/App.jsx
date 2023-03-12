import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Router from "./Router";


function App() {
  const [library, setLibrary] = useState(
    JSON.parse(localStorage.getItem("library")) || []
  );
  const [playWords, setPlayWords] = useState([library.slice(-10).lenght]);
  return (<BrowserRouter>
    <Layout />
    <Router library={library} setLibrary={setLibrary} playWords={playWords} setPlayWords={setPlayWords} />
  </BrowserRouter>)

}

export default App;
