import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1000;

  & img {
    width: 10%;
  }
`;
