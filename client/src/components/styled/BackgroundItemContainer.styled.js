import styled from "styled-components";

export const BackgroundItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;

  & h2 {
    color: var(--main-violet);
    text-align: center;
    background: #fff;
    padding: 5px;
    border-radius: 3px;
  }

  &:hover div {
    opacity: 1;
  }

  &:hover img {
    filter: grayscale();
  }
  & img {
    object-fit: cover;
    border-radius: 5px;
    transition: 1s;
    filter: grayscale();
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.75); */
    background: var(--main-violet-trans);
    opacity: 1;
    border-radius: 5px;
    transition: 1s;
  }
`;
