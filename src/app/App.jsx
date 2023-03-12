import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Router from "./Router";


function App() {

  return (<BrowserRouter>
    <Layout />
    <Router />
  </BrowserRouter>)

}

export default App;
