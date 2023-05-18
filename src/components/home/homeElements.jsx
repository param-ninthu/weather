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
          justify-content: center;
          align-items: center;
          height: 70%;
          width: 70%;
          background-color: #fff;
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
  background-color: #000;
`;
