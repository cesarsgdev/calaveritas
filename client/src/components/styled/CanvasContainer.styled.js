import styled from "styled-components";

export const CanvasContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1 1 75%;
  background: ${({ cbi }) => (cbi ? `url(${cbi})` : "")}, rgba(220, 220, 220, 1);
  background-blend-mode: darken;
  background-repeat: repeat;
  background-size: 500px;
  overflow: hidden;

  & > img {
    width: 350px;
    position: absolute;
    top: 10px;
    left: 10px;
    background: var(--main-violet);
    padding: 5px;
    border-radius: 3px;
  }
`;
