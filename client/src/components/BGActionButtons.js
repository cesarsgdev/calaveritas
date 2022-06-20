import { Button } from "./styled/Button.styled";
const BGActionButtons = ({ previewAction, noPreview }) => {
  return (
    <div className="actionButtons">
      {!noPreview && <Button onClick={previewAction}>Preview</Button>}
      <Button>Create</Button>
    </div>
  );
};
export default BGActionButtons;
