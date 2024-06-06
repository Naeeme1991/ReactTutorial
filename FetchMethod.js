import React from "react";
import Posts from "./Posts";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const HEADERS = { "Content-Type": "application/json" };

const FetchMethod = () => {
  const [arrayData, setArrayData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`${BASE_URL}/posts/`, {
      method: "GET",
      headers: HEADERS,
    })
      .then((response) => response.json())
      .then((data) => setArrayData(data))
      .catch((error) => console.log(error.messege));
  };

  const postData = (data) => {
    fetch(`${BASE_URL}/posts/`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.messege));
  };

  const updateData = (data, id) => {
    // https://jsonplaceholder.typicode.com/posts/1
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.messege));
  };

  const deleteData = (id) => {
    // https://jsonplaceholder.typicode.com/posts/1
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: HEADERS,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.messege));
  };

  const fetchHandler = (event) => {
    switch (event.target.name) {
      case "get":
        getData();
        break;
      case "send":
        postData({ title: "Mohammad", body: "Test Body", userId: 125 });
        break;
      case "update":
        updateData(
          { title: "Mohammad 2", body: "Test Body 2", userId: 1245 },
          1
        );
        break;
      case "delete":
        deleteData(1);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {arrayData &&
        arrayData.map((element) => <Posts key={element.id} data={element} />)}
    </div>
  );
};

export default FetchMethod;
