import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
import { Wrapper } from "../styles/Wrapper.style";
import { ImageContainer, ImageCard, ImageInfo } from "../styles/Divs.style";

import {  Subtitulo  } from "../styles/Texto";
import { Spinner } from "react-bootstrap";
import Rodape from "../components/Rodape";
import AddForm from "../components/AddForm";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "react-modal";
import "./Modal.style.css";
import { FaTrash, FaDownload  } from "react-icons/fa";
import { BiImage } from "react-icons/bi";

Modal.setAppElement("#root");

const Home = () => {
  // CONFIGS DO CARREGAMENTO DE FOTOS DA API
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

  const [currentUser, setCurrentUser] = useState("");

  const getCurrentUser = () => {
    const usersFetch = localStorage.getItem("users_db");
    const objectize = JSON.parse(usersFetch);

    var userName = objectize.name;
    setCurrentUser(userName);
    console.log(currentUser);
  };

  useEffect(() => {
    getPictures();
    getCurrentUser();
  }, []);

  // Carregamento da foto individual em outra pagina
  function openPhoto(url) {
    window.open(url, "_blank");
  }

  // CONFIG DA REMOÇÃO DE UMA IMAGEM
  const [message, setMessage] = useState("");

  function notifyDelete(content) {
    toast.success(content, {
      autoClose: 2000,
    });
  }

  const deletePicture = async (id) => {
    var deleteUrl = `http://localhost:3010/picture/${id}`;

    try {
      const response = await axios.delete(deleteUrl);
      setMessage(response.data.message);
      notifyDelete(response.data.message);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  // CONFIGS DO DOWNLOAD DA IMAGEM
  const getPicture = async (src, nome) => {
    var oneImageUrl = `http://localhost:3010/${src}`;

    await axios
      .get(oneImageUrl, {
        responseType: "blob",
      })
      .then((obj) => {
        const url = URL.createObjectURL(obj.data);
        const a = document.createElement("a");
        a.href = url;
        a.download = nome;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      })
      .catch((err) => console.error(err));
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("users_db");
    navigate("/login");
  };

  const dataActual = moment().format("DD/MM/YYYY");
  const horaActual = moment().format("HH:mm");

  function notify() {
    toast.success(`WHITE Technologies Inc. - ${horaActual}`);
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/temprano-white.png"
              alt="Temprano logo"
              style={{ height: 40 }}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Sobre</Nav.Link>
          </Nav>
          <NavDropdown
            style={{ color: "#fff", marginRight: 30 }}
            title={currentUser}
            id="basic-nav-dropdown"
            data-bs-theme="light"
          >
            <NavDropdown.Item href="#">
              <Button
                style={{ width: "100%" }}
                variant="danger"
                onClick={handleLogout}
              >
                Sair
              </Button>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link></Nav.Link>
        </Container>
      </Navbar>
      <AddForm></AddForm>
      <Wrapper>
        <ImageContainer>
          {pictures.length === 0 ? (
            <div
              style={{
                width: "100vw",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spinner
                variant="primary"
                style={{ height: 60, width: 60 }}
              ></Spinner>
            </div>
          ) : (
            pictures.map((picture) => ( 
              <>
                <ImageCard
                  key={picture.id}
                  src={`http://localhost:3010/${picture.src}`}
                >
                  <BiImage
                    style={{
                      fontSize: 30,
                      color: "white",
                      alignSelf: "flex-end",
                      marginRight: 20,
                      marginBottom: 190,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      openPhoto(`http://localhost:3010/${picture.src}`)
                    }
                  ></BiImage>
                  <ImageInfo>
                    <Subtitulo>{picture.name}</Subtitulo>
                    <div style={{ display: "flex", gap: 10 }}>
                      <Button variant="danger">
                        <FaTrash
                          onClick={() => deletePicture(picture.id)}
                        ></FaTrash>
                      </Button>
                      <Button variant="success">
                        <FaDownload
                          onClick={() =>
                            getPicture(
                              picture.src,
                              `${picture.name}-${picture.src}`
                            )
                          }
                        ></FaDownload>
                      </Button>
                    </div>
                  </ImageInfo>
                </ImageCard>
              </>
            ))
          )}
        </ImageContainer>
      </Wrapper>
      <Rodape></Rodape>
    </>
  );
};

export default Home;
