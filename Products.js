/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import shoe1 from "../Assets/shoe1.png";
import shoe2 from "../Assets/shoe2.png";
import shoe3 from "../Assets/shoe3.png";
import shoe4 from "../Assets/shoe4.png";

function Products() {
  const [items, setitems] = useState([
    {
      image: shoe1,
      id: 1,
    },
    {
      image: shoe2,
      id: 2,
    },
    {
      image: shoe3,
      id: 3,
    },
    {
      image: shoe4,
      id: 4,
    },
  ]);
  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  /*
    setLoading(false);
  }).catch((error) => {
    setError(error);
    setLoading(false);
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } */
  return (
    <div className="productcontainer">
      <h1>Shoes on Sale!!!</h1>
      {items.map((data) => (
        <>
          <img className="shoe" id="1" src={data.image} alt="images of shoes" />
          <span className="adidas">Adidas Black Fit</span>
          <button>Purchase</button>
        </>
      ))}
    </div>
  );
}

export default Products;
