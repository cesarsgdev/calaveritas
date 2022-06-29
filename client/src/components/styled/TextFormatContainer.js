import styled from "styled-components";

export const TextFormatContainer = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  gap: 5px;

  & li {
    flex: 1 1 20%;
  }

  & li button {
    background: var(--main-yellow);
    height: 30px !important;
    border: none !important;
    border-radius: 3px;
  }

  & li button.fontColor {
    background: ${(props) => props.buttonColor};
  }

  & li button svg {
    width: 15px;
    height: 15px;
  }

  & .textPickerContainer {
    position: absolute;
    bottom: 40px;
  }
`;
