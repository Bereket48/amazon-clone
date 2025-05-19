import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
function Product() {
  //npm i axios----install axios and import it above
  const [products, setProducts] = useState([]); //initialize products as an empty array to ensure .map() works on the first render
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.products_container}>
      {products.map((singleProduct) => {
        return <ProductCard product={singleProduct} key={singleProduct.id} />;
      })}
    </section>
  );
}

export default Product;

//Better advanced syntax
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to load products.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <section>
//       {products.map((singleProduct) => (
//         <ProductCard product={singleProduct} key={singleProduct.id} />
//       ))}
//     </section>
//   );
// }

// export default Product;
