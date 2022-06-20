import styled from "styled-components";

export const Button = styled.button`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  background: ${({ dark }) =>
    dark ? "var(--main-violet)" : "var(--main-yellow)"};
  color: ${({ dark }) => (dark ? "#FFF" : "#000")};
  width: ${({ width }) => (width ? width : "150px")};
  height: fit-content;
  padding: 15px;
  border: none;
  border-radius: 5px;
  transition: 1s;
  letter-spacing: -0.5px;
  cursor: pointer;

  &:hover {
    background: ${({ dark }) =>
      dark ? "var(--main-violet-hover)" : "var(--main-yellow-trans)"};
  }
`;
