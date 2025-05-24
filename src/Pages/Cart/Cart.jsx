import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/Payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;

// let a =[1,2,3]
// let result = a.reduce((pre, curr)=>{
//   return pre+curr
// })
// console.log(result);
