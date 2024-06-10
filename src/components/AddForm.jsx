import { useState } from "react";
import axios from "axios";
import { ImageAdd } from "../styles/Forms.style";
import { NameInput, SendInput } from "../styles/Inputs.style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  function notifyAdiction(content) {
    toast.success(content, {
      autoClose: 2000,
    });
  }

  const uploadPicture = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    var imagePostUrl = "http://localhost:3010/picture/"; 

    await axios
      .post(imagePostUrl, { name, file }, headers)
      .then((response) => {
        setMessage(response.data.message);
        notifyAdiction(response.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: 10, color: "#003a87" }}>
        Adicione uma foto a sua galeria
      </h3>

      <ImageAdd onSubmit={uploadPicture}>
        <NameInput
          type="text"
          name="name"
          placeholder="Digite um nome para a foto"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          name="file"
          accept={[".jpg", ".png", ".jpeg", ".jfif"]}
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <SendInput type="submit">Enviar</SendInput>
      </ImageAdd>
    </>
  );
};

export default AddForm;
