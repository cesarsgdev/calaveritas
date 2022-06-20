import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1000;

  & img {
    width: 10%;
  }

  & img.previewBackground {
    width: auto;
    height: 70%;
    border-radius: 5px;
  }

  & div.actionButtons {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
  }
`;
