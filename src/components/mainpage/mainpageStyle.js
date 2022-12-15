import styled from "styled-components";
import { keyframes } from "styled-components";

export const container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
`;

export const navbar = styled.div`
  position: fixed;
  background-color: white;
  height: 75px;
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  color: black;
  text-shadow: 5px 5px 0px black;
`;

const showtext = keyframes`
    0% {
        margin-top: 0rem;
        opacity: 0;
    }
    2.5% {
        margin-top: 3.5rem;
        opacity: 0.1;
    }
    20% {
        margin-top: 1.5rem;
        opacity: 0.2;
        transition-timing-function: ease-out;
    }
    22.5% {
        margin-top: 5rem;
        opacity: 0.35;
    }
    40% {
        margin-top: 3.5rem;
        opacity: 0.5;
    }
    100% {
        margin-top: 5rem;
        opacity: 1;
    }
`;

export const mainText = styled.div`
  width: 300px;
  height: 200px;
  font-size: 100px;
  color: white;
  text-shadow: 5px 5px 3px gray;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 3rem;
  animation: ${showtext} 2.5s;
  animation-fill-mode: forwards;
`;
