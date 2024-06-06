import axios from "axios";
import React, { useEffect } from "react";

const TestDefaultAxios = () => {
  useEffect(() => {
    testGetDataWithBaseUrl();
  }, []);

  const testGetDataWithBaseUrl = () => {
    axios.get("/posts").then((response) => console.log(response));
  };

  return <div></div>;
};

export default TestDefaultAxios;
