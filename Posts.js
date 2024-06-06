import React from "react";

import style from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={style.container}>
      <h2>
        {props.data.id}. {props.data.title}
      </h2>
      <p>{props.data.body}</p>
    </div>
  );
};

export default Posts;
