import React from "react";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
// npm install @mui/material @emotion/react @emotion/styled-----install from MUI library & import it for the rating element
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
// npm install numeral ------install from Numeral.js for the rating counter
function ProductCard({ product, flex }) {
  const { image, title, id, rating, price } = product; //Destructuring the prop "product"

  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} /> {/*count */}
          <small>{rating?.count}</small>
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

//Note that this component is going to be used by any component who includes it in its return statement and gives it the same prop named "product" as follows
// return (
//   ...... other code (if any)
//     <ProductCard product={the data with image, title, id, rating & price in it} />
//     ..... other code (if any)
// );
