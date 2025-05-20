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
      <CarouselEffect /> ....these three lines are replaced with Landing component which is embeded with LayOut component
      <Category />
      <Product /> */}
      <Routing />
    </>
  );
}

export default App;
