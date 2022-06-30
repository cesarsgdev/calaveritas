import styled from "styled-components";

export const CalaveritaDesign = styled.main`
  transform: ${({ zoom }) => `scale(${zoom})`};
  transition: transform 1s;

  & > div {
    position: relative;
    width: ${({ widthSize }) => (widthSize ? `${widthSize}px` : "400px")};
    height: 650px;
    transition: transform 1s;
    margin: auto;
    flex-shrink: 0;
  }

  & img.bgDesign {
    object-fit: cover;
    object-position: center;
    filter: ${({ imgFilter }) => (imgFilter ? `${imgFilter}()` : "none")};
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
    mix-blend-mode: ${({ blendMode }) =>
      blendMode ? `${blendMode}` : "normal"};
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
    font-family: ${({ fontTitle }) =>
      fontTitle ? `${fontTitle}, sans-serif` : "inherit"};
    flex: 1 0 10%;
    color: ${({ fontTitleColor }) =>
      fontTitleColor ? `${fontTitleColor}` : null};
    font-size: ${({ fontSizeTitle }) =>
      fontSizeTitle ? `${fontSizeTitle}px` : "36px"};
    text-align: ${({ fontTitleAlignment }) =>
      fontTitleAlignment ? `${fontTitleAlignment}` : null};
  }

  & div textarea {
    flex: 1 0 85%;
    color: ${({ fontContentColor }) =>
      fontContentColor ? `${fontContentColor}` : null};
    font-family: ${({ fontContent }) =>
      fontContent ? `${fontContent}, sans-serif` : "inherit"};
    font-size: ${({ fontSizeContent }) =>
      fontSizeContent ? `${fontSizeContent}px` : "22px"};
    white-space: nowrap;
    text-align: ${({ fontContentAlignment }) =>
      fontContentAlignment ? `${fontContentAlignment}` : null};
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
