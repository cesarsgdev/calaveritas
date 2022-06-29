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
  background: ${({ dark }) =>
    dark ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"};
  z-index: 30000;

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

  & section {
    display: flex;
    flex-flow: row nowrap;
    width: 75%;
    height: 75%;
    background: #fff;
    padding: 20px;
  }

  & section .backgrounds {
    flex: 1 0 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px 100px;
    gap: 10px;
    padding: 20px;
    border-right: 4px solid var(--main-violet);
  }

  & section .backgrounds button {
    border: 5px solid gray;
    cursor: pointer;
    transition: 0.5s;
  }

  & section .backgrounds button:hover {
    transform: scale(1.02);
    border-color: var(--main-yellow-trans);
  }

  & section .previews {
    padding: 20px;
    flex: 1 0 25%;
  }

  & section .previews img {
    width: 100%;
    object-fit: cover;
  }
`;
