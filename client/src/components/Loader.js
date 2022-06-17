import { Overlay } from "./styled/Overlay.styled";
import { LoadBar } from "./styled/LoadBar.styled";
import skullLogo from "../skull-logo.svg";

const Loader = () => {
  return (
    <Overlay>
      <img src={skullLogo} alt="skull-logo" />
      <h1>Loading...</h1>
      <LoadBar />
    </Overlay>
  );
};

export default Loader;
