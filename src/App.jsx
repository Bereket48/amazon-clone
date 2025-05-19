import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CarouselEffect from "./components/Carousel/CarouselEffect"; //I used CarouselEffect than Carousel b/c he updated it to this
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import Routing from "./Router";

function App() {
  return (
    <>
      {/* <Header />
      <CarouselEffect /> 
      <Category />
      <Product /> */}
      <Routing />
    </>
  );
}

export default App;
