import styled from "styled-components";

export const BackgroundItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: 1s;

  &:hover {
    transform: scale(1.04);
  }

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
    filter: grayscale(50%);
  }
  & img {
    object-fit: cover;
    border-radius: 5px;
    transition: 1s;
    filter: grayscale() blur(3px);
  }

  & > div {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 20px;
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

  & div.actionButtons {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
  }
`;
