import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "primary":
        return css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
        `;
      case "secondary":
        return css`
          display: flex;
          height: 70%;
          width: 70%;
          border-radius: 10px;
        `;
    }
  }}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 100%;
  background-color: transparent;
`;

export const Input = styled.input`
  height: 100%;
  width: 80%;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #03c988;
`;

export const Button = styled.button`
  height: 100%;
  width: 20%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: #fff;
  background-color: #66347f;
  cursor: pointer;
`;
