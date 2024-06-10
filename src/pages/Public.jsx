import { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper } from "../styles/Wrapper.style";
import { Spinner } from "react-bootstrap";

const Public = () => {
  const [pictures, setPictures] = useState([]);

  var imageUrl = "http://localhost:3010/pictures";

  const getPictures = async () => {
    try {
      const response = await axios.get(imageUrl);
      const data = response.data;
      setPictures(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <div className="container">
      <div className="text">
        <h1>Suas Fotos...</h1>
      </div>
      <br />
      {pictures.length === 0 ? (
        <Spinner variant="primary"></Spinner>
      ) : (
        pictures.map((picture) => (
          <div className="imageContainer" key={picture.id}>
            <h2>{picture.name}</h2>
            <img src={`http://localhost:3010/${picture.src}`} />
          </div>
        ))
      )}
    </div>
  );
};

export default Public;
