import styled from "styled-components";

export const CalaveritaDesign = styled.main`
  position: relative;
  width: 400px;
  height: 650px;
  transition: transform 1s;

  & img.bgDesign {
    width: calc(100%);
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  & div.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: ${({ bgColor }) =>
      `rgba(${bgColor.r},${bgColor.g},${bgColor.b},${bgColor.a})`};
    z-index: 1000;
    mix-blend-mode: normal;
  }

  & div.text {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 2000;
    padding: 10px;
    background: transparent;
  }

  & div input[type="text"] {
    flex: 1 0 10%;
    color: #fff;
    font-size: 36px;
  }

  & div textarea {
    flex: 1 0 85%;
    color: #fff;
    font-family: inherit;
    font-size: 22px;
    white-space: nowrap;
  }

  & div input,
  div textarea {
    background: transparent;
    border: 1px dashed lightgray;
    transition: 0.5s;
    padding: 10px 5px;
  }

  & div input:hover,
  div textarea:hover {
    border: 1px solid blue;
  }
`;
