import React from "react";
import styled, { css } from "styled-components";

export const Box = ({ degrees= "-4deg", colour= "rgba(255, 255, 190, 0.2)", width = "615px"}) => css`
  border: 2px solid white;
  border-radius: 30px;
  box-shadow: 2px 5px 12px 10px ${colour};
  content: "";
  margin-top: -86px;
  opacity: 0.7;
  padding: 60px;
  position: absolute;
  transform: rotate(${degrees});
  width: ${width};
`;

export const MyName = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 18rem;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  &::before {
    ${Box({})};
  }
  &::after {
    ${Box({degrees: "0deg", colour:"rgba(79, 25, 94, 0.7)", width: "580px"})};
  }
  & h1 {
    font-size: 4rem;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    line-height: 3.5rem;
    .white-shadow {
      text-shadow: 2px 5px 12px rgba(255, 255, 190, 0.5);
    }
    .secondary-shadow {
      text-shadow: 2px 5px 12px rgba(12, 112, 157, 0.7);
    }
  }
`;

export const StyledCounter = styled.div`
  width: 100%;
  height: 18rem;
  .styledCounter__canvas1 {
    width: 100%;
    height: 100%;
    background-color: #4f195e;
  }
`;
