import axios from "axios";
import React, { useEffect, useState } from "react";
import TestDefaultAxios from "./TestDefaultAxios";

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// Interceptors
// Client => API => Server || Server => API => Client
// Client => Request Interceptor => API => Server || Server => API => Response Interceptor => Client

// axios.interceptors.request.use(
//   (request) => {
//     console.log(`Request Send To ${request.url}`);
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );
// axios.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     return response.data;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// Default Global
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const ConcurrencyAxios = () => {
  const [requestState, setRequestState] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    // getAll();
  }, []);

  // const getAll = () => {
  //   setRequestState("Loading ...");
  //   Promise.all([
  //     axios.get(`${BASE_URL}/posts`),
  //     axios.get(`${BASE_URL}/comments`),
  //   ])
  //     .then(
  //       axios.spread((posts, comments) => {
  //         console.log(posts);
  //         setRequestState("Data Received Successfully");
  //         setRequestError("");
  //       })
  //     )
  //     .catch((error) => {
  //       // console.log(error.message);
  //       setRequestState("");
  //       setRequestError(error.message);
  //     });
  // };

  return (
    <div>
      {requestState && <h2 style={{ color: "green" }}>{requestState}</h2>}
      {requestError && <h2 style={{ color: "red" }}>{requestError}</h2>}
      <TestDefaultAxios />
    </div>
  );
};

export default ConcurrencyAxios;
