import React from "react";

import style from "./ItemProduct.module.css";

import imageTest from "./imageTest.jpg";

const ItemProduct = (props) => {
  console.log(props);
  const { title, category, image, description, price } = props.data;

  return (
    <div className={style.ipContainer}>
      <img src={image} alt="" />
      <h2>{title.substring(0, 20)}</h2>
      <span>{category}</span>
      <p>{description.substring(0, 65)} ...</p>
      <div className={style.ipCTA}>
        <span>{price} $</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemProduct;
