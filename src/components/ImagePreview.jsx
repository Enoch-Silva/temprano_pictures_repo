import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";

import {
  PreviewContainer,
  ImageView,
  ImageActions,
} from "../styles/Divs.style";

const ImagePreview = ( {singlePicture} ) => {
  const [pictures, setPictures] = useState([]);

  const [picture, setPicture] = useState([]);

  var oneImageUrl = `http://localhost:3010/picture/${singlePicture}`;

  const getPicture = async () => {
    try {
      const response = await axios.get(oneImageUrl);
      const onePicture = response.data;
      //console.log(pictueId);
      //console.log(onePicture[0].src);
      //setPicture(onePicture);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //getPicture();
    mostrarProp();
  }, []);

  function mostrarProp() {
    console.log(singlePicture);
  }

  return (
    <PreviewContainer>
      <ImageView>
        {pictures.length === 0 ? (
          <Spinner variant="primary"></Spinner>
        ) : (
          <img src={`http://localhost:3010/${picture.src}`} alt="" />
        )}
      </ImageView>
      <ImageActions></ImageActions>
    </PreviewContainer>
  );
};

export default ImagePreview;
