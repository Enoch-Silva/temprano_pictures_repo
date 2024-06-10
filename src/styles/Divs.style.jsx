import styled from "styled-components";

export const SignInDiv = styled.div`
  width: 30%;
  padding: 20px;
  height: auto;
  background: #eee;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const GeneralDiv = styled.div`
  width: 100vw;
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const ImageCard = styled.div`
  width: 100%;
  background-color: blue;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: url(${(props) => props.src}) no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ImageInfo = styled.div`
  width: 100%;
  height: 54px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 3px 3px;
  border: none;
  background: transparent;
  background-color: rgba(0, 0, 0, 0.200);
  background-blend-mode: color;
`;

export const CanvasLogo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 54px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  border: none;
  background: transparent;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: color;
  box-shadow: 0px -10px 10px 3px rgba(0, 0, 0, 0.4);
`;

export const MessageView = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f5fc;
`;

export const LogInContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f5fc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogInDivLeft = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0;
`;
export const LogInDivRight = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageView = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  & img {
    width: auto;
    height: 100%;
  }
`;
export const ImageActions = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
`;
