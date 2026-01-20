import React from "react";
import { useEffect, useState } from "react";
import ProductList from "../src/components/ProductList";
import axios from "axios";


function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };
  
  return (
    <div>
      <ProductList
        products={products}
        refresh={fetchProducts}
      />
    </div>
  );
}

export default Admin;
