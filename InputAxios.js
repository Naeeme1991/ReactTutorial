import React, { useState } from "react";
import axios from "axios";

import style from "./InputAxios.module.css";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const InputAxios = () => {
  const [text, setText] = useState({ title: "", body: "" });
  const [successMessage, setSuccessMessage] = useState(false);

  const inputHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setText({ ...text, title: e.target.value });
        break;
      case "body":
        setText({ ...text, body: e.target.value });
        break;
      default:
        break;
    }
  };
  const postData = (data) => {
    axios
      .post(`${BASE_URL}/posts`, { ...data, userId: 1 })
      .then((response) => {
        setSuccessMessage(true);
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  const submitForm = (event) => {
    event.preventDefault();
    postData(text);
  };

  return (
    <div className={style.InputAxiosContainer}>
      <form onSubmit={submitForm}>
        <input
          name="title"
          value={text.title}
          onChange={inputHandler}
          type="text"
          placeholder="Title..."
        />
        <input
          name="body"
          value={text.body}
          onChange={inputHandler}
          type="text"
          placeholder="Body..."
        />
        <button>Send Data</button>
        {successMessage && <span>Data Posted Successfully</span>}
      </form>
    </div>
  );
};

export default InputAxios;
