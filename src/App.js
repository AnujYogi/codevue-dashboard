import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { PageNotFound } from "./components/PageNotFound";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"about-us"} element={<AboutUs />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
