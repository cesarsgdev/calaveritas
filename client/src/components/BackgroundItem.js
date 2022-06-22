import { BackgroundItemContainer } from "./styled/BackgroundItemContainer.styled";
import { Overlay } from "./styled/Overlay.styled";
import { useState } from "react";
import BGActionButtons from "./BGActionButtons";
import * as React from "react";

const BackgroundItem = React.forwardRef(({ id, image, name }, ref) => {
  const [preview, setPreview] = useState(false);

  const handlePreview = () => {
    console.log(`Handled preview...`);
    setPreview(!preview);
  };
  return (
    <>
      <BackgroundItemContainer id={id} ref={ref}>
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
});

export default BackgroundItem;
