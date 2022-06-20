import { Container } from "./styled/Container.styled";
import { Button } from "./styled/Button.styled";
import skeletons from "../skeletons.svg";

const NoCalaveritas = () => {
  return (
    <>
      <img style={{ width: "15%" }} src={skeletons} />
      <h1 style={{ color: "lightgray" }}>You don't have any Calaveritas yet</h1>
      <Button dark fontSize="24px" width="fit-content">
        Create Calaverita
      </Button>
    </>
  );
};
export default NoCalaveritas;
