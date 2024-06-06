import axios from "axios";
import React, { useState } from "react";

const BASE_URL = "https://v2.convertapi.com";

const UploadImage = () => {
  const [imageurl, setImageUrl] = useState("");
  let formData = new FormData();

  const onFileChange = (event) => {
    formData.append("file", event.target.files[0]);
  };

  const uploadImageHandler = () => {
    axios
      .post(`${BASE_URL}/upload`, formData)
      .then((response) => setImageUrl(response.data.Url))
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div>
        <input type="file" name="FILE_UPLOAD" onChange={onFileChange} />
        <div>
          <button onClick={uploadImageHandler}>Upload</button>
        </div>
        {imageurl && <img src={imageurl} alt="Image" />}
      </div>
    </div>
  );
};

export default UploadImage;
