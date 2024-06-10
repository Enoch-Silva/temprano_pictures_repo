import { Wrapper } from "../styles/Wrapper.style";
import { LogInContainer } from "../styles/Divs.style";

import { LogInEmailInput, LogInPassInput } from "../styles/Inputs.style";
import { LogInForm } from "../styles/Forms.style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const seeUser = localStorage.getItem("users_db");
    const transformUser = JSON.parse(seeUser);

    if (transformUser.email === email && transformUser.password === password) {
      navigate("/home");
    } else {
      setError("E-mail ou senha Incorretos!");
      console.log(error);
    }
  };

  const handleUser = () => {
    var user = {
      name: "Enoch Silva",
      email: "enochsilva69@gmail.com",
      password: "enoch2024",
    };

    localStorage.setItem("users_db", JSON.stringify(user));
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <Wrapper>
      <LogInContainer>
        <LogInForm>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img style={{ height: 40 }} src="/img/temprano-black.png" />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <LogInEmailInput
            type="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <LogInPassInput
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={{
              color: "#fff",
              height: 40,
              width: "30vw",
              borderRadius: 2,
              border: "none",
              background: "#006eff",
            }}
            type="submit"
            onClick={(e) => handleLogin(e)}
          >
            Entrar
          </button>

          <p style={{ fontSize: "13px" }}>Ainda não tens uma conta?</p>
          <button
            style={{
              color: "#fff",
              height: 40,
              width: "30vw",
              borderRadius: 2,
              border: "none",
              background: "#0ab901",
            }}
            type="submit"
          >
            Criar nova conta
          </button>
        </LogInForm>
      </LogInContainer>
    </Wrapper>
  );
};

export default Login;
