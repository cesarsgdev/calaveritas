import styled from "styled-components";

export const OptionsPanel = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  background: var(--main-violet);
  flex: 1 1 400px;
  padding: 20px;

  h1 {
    font-size: 36px;
    color: #fff;
    background: var(--main-violet-hover);
    padding: 10px;
    border-radius: 3px;
  }

  & .optionSection {
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    width: 100%;
    height: fit-content;
    background: var(--main-violet-hover);
    transition: 1.5s;
    border-radius: 3px;
    padding: 10px;
  }

  /* & .optionSection:hover {
    background: var(--main-yellow-trans);
  }

  & .optionSection:hover h2 {
    color: #000;
  } */

  & .optionSection h2 {
    font-size: 14px;
    text-transform: uppercase;
    color: var(--lighter-violet);
  }

  & .optionSection h3 {
    font-size: 14px;
    color: #fff;
  }

  & .optionSection div.twoColumns {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
  }

  & div.twoColumns div.sectionColumn {
    position: relative;
    display: flex;
    flex-flow: column;
    gap: 20px;
    flex: 1 1 40%;
    background: rgba(0, 0, 0, 0.25);
    padding: 10px;
    justify-content: center;
  }

  & div.sectionColumn div.subSection {
    position: relative;
    display: flex;
    gap: 10px;
    flex-flow: column nowrap;
  }

  & div.sectionColumn div.subSection .listButton {
    height: 30px;
  }

  & div.twoColumns button {
    width: 100%;
    height: 50px;
    border: 1px solid #fff;
    cursor: pointer;
  }

  & div.twoColumns .pickerContainer {
    position: absolute;
    bottom: -305px;
    z-index: 1000;
  }
`;
