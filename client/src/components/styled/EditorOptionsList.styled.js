import styled from "styled-components";

export const EditorsOptionsContainer = styled.ul`
  position: absolute;
  width: 100%;
  background: #fff;
  list-style: none;
  height: 200px;
  overflow: scroll;
  bottom: -210px;

  & li {
    padding: 5px 10px;
    transition: 0.5s;
  }

  & li:hover {
    background: lightgray;
    cursor: pointer;
  }
`;
