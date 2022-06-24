import styled from "styled-components";

export const CalaveritaDesign = styled.main`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  width: 400px;
  height: 650px;
  /* background: black; */
  background: ${({ bg, bgColor }) =>
    `url(data:image/jpeg;base64,${bg}), rgba(${bgColor.r},${bgColor.g},${bgColor.b},${bgColor.a})`};
  background-blend-mode: multiply;
  padding: 10px;
  transition: 1s;

  & input[type="text"] {
    flex: 1 0 10%;
    color: #fff;
    font-size: 36px;
  }

  & textarea {
    flex: 1 0 85%;
    color: #fff;
    font-family: inherit;
    font-size: 18px;
  }

  & input,
  textarea {
    background: transparent;
    border: 1px dashed lightgray;
    transition: 0.5s;
    padding: 10px 5px;
  }

  & input:hover,
  textarea:hover {
    border: 1px solid blue;
    /* cursor: pointer; */
  }
`;
