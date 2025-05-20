import React from "react";
//install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/Signup";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
function Routing() {
  return (
    <Router>
      <Routes>
        {/* This part of the code is only responsible for defining which
        component to show based on the current URL in the browser (whether
        typed, linked to, or navigated to in code) */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:BereketEndPoint" element={<Results />} />
        {/* Here we are saying whenever anything comes after "/category/", then route to the "Results" page. 
        The variable BereketEndPoint gets dynamic values either from what a user writes or from a clicked route from the CategoryCard, which maps and take varying data on it's four d/t components.*/}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
export default Routing;
