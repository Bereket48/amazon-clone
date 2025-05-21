import React from "react";
import classes from "./ProductDetail.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import { useState, useEffect } from "react";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // return (
  //   <Layout>
  //     <ProductCard product={product} />
  //   </Layout>
  // );
  return (
    <Layout>
      {product && product.id ? (
        <ProductCard product={product} />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}

export default ProductDetail;
