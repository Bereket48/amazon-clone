import React, { useContext } from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import amazonLogo from "../../assets/pngimg.com - amazon_PNG11.png"; // We need this unless we use a direct url in the img's src.
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { useReducer } from "react";
function Header() {
  // const [state,dispatch]=useContext(DataContext) // Destructuring "state" we can access basket as used below
  const [{ basket }, dispatch] = useContext(DataContext);
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header_container}>
            {/* logo section */}
            <div className={classes.logo_container}>
              <Link to="/">
                <img src={amazonLogo} alt="amazon logo" />
              </Link>
              {/* Logo image sourced from assets pngimg.com */}
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            {/* search section */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" />
              <BsSearch size={25} />
            </div>
            {/* other section */}
            <div className={classes.order_container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />

                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
              <Link to="/auth">
                <p>Sign In</p>
                <span>Account & Lists</span>
              </Link>
              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{basket.length}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
