import styled, { keyframes } from "styled-components";

const moveLoader = keyframes`
  from {
    transform: translateX(0px);
  }

  to {
    transform: translateX(300px);
  }
`;

export const LoadBar = styled.div`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 15px;
  background: var(--main-violet);
  border-radius: 5px;

  & .loader {
    width: 50px;
    height: 100%;
    background: var(--light-violet);
    transform: rotate(-45deg);
    animation: ${moveLoader} 1s linear infinite;
  }
`;
