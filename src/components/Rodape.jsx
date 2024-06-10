import "./Rodape.css";

const Rodape = () => {
  return (
    <div className="rodape">
      <div className="rodMiddle">
        <div className="rodLogo">
          <img src="/img/temprano-black.png" style={{ height: 60 }} />
        </div>
        <div className="rodInfo">
          <p>+244 937 583 104</p>
          <p>white.com</p>
          <p>enochsilva69@outlook.com</p>
          <p>Rua de Mormogão, Rangel - Luanda</p>
        </div>
      </div>
      <div className="rodBottom">
        <p>
          <strong>White</strong> Technologies, Inc.
        </p>
        <p>Enoch Silva © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Rodape;
