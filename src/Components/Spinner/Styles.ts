import styled, { keyframes } from "styled-components";

//Keyframes - Animation
const animateBg = keyframes`
 0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360px)};
 
`;
const animate = keyframes`
  0% {
    transform: scale(1);
  }
  80%,
  100% {
    transform: scale(0);
  }
}
`;
const text = keyframes`
 50% {
    color: #000;
  }
`;

//Styles
export const Spinner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  animation: ${animateBg} 10s linear infinite;
`;

export const Main = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const Content = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--i)));
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #00ff0a;
    box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
      0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
    animation: ${animate} 2s linear infinite;
    animation-delay: calc(0.09s * var(--i));
  }
  &.text {
    color: #00ff0a;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 20px;
    margin-top: 45px;
    height: unset;
    left: 35px;
    animation: ${text} 3s linear infinite;
    &::before {
      display: none;
    }
  }
`;
