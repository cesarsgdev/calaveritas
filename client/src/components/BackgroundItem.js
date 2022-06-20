import { BackgroundItemContainer } from "./styled/BackgroundItemContainer.styled";
import { Button } from "./styled/Button.styled";
import { Overlay } from "./styled/Overlay.styled";
import { useState } from "react";
import BGActionButtons from "./BGActionButtons";

const BackgroundItem = ({ id, image, name }) => {
  const [preview, setPreview] = useState(false);

  const handlePreview = () => {
    console.log(`Handled preview...`);
    setPreview(!preview);
  };
  return (
    <>
      <BackgroundItemContainer id={id}>
        <img
          src={`data:image/png;base64,${image}`}
          alt={name}
          width="100%"
          height="100%"
        />
        <div>
          <h2>{name}</h2>
          <BGActionButtons previewAction={handlePreview} />
        </div>
      </BackgroundItemContainer>
      {preview && (
        <Overlay onClick={handlePreview}>
          <img
            className="previewBackground"
            src={`data:image/png;base64,${image}`}
            alt={name}
          />

          <BGActionButtons noPreview="true" />
        </Overlay>
      )}
    </>
  );
};

export default BackgroundItem;
