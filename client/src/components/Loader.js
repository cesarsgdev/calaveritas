import { Overlay } from "./styled/Overlay.styled";
import { LoadBar } from "./styled/LoadBar.styled";
import skullLogo from "../skull-logo.svg";

const Loader = ({ loading }) => {
  return (
    <Overlay>
      <img src={skullLogo} alt="Las Calaveritas" />
      <h1>Loading {loading}...</h1>
      <LoadBar>
        <div className="loader"></div>
      </LoadBar>
    </Overlay>
  );
};

export default Loader;
