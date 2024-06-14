import axios from "axios";
import React, { useEffect, useState } from "react";

// components
import ItemProduct from "./ItemProduct";
import Loading from "./Loading";

const GetProducts = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(true);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios
      .get(`/products`)
      .then((response) => {
        setListProducts(response);
        setIsShowLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsShowLoading(false);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "50px",
      }}
    >
      {isShowLoading && <Loading />}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "90%",
          margin: "auto",
        }}
      >
        {listProducts.map((element) => (
          <ItemProduct key={element.id} data={element} />
        ))}
      </div>
    </div>
  );
};

export default GetProducts;
