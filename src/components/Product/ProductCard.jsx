import React from "react";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
// npm install @mui/material @emotion/react @emotion/styled-----install from MUI library & import it for the rating element
import Rating from "@mui/material/Rating";
// npm install numeral ------install from Numeral.js for the rating counter
function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={`${classes.card_container}`}> 
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} /> {/*count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}
export default ProductCard;
