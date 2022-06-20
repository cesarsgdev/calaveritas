import { BackgroundItemContainer } from "./styled/BackgroundItemContainer.styled";

const BackgroundItem = ({ image, name, countImages }) => {
  return (
    <BackgroundItemContainer>
      <img
        src={`data:image/png;base64,${image}`}
        alt={name}
        width="100%"
        height="100%"
        onLoad={() => {
          console.log("image loaded");
          countImages();
        }}
      />
      <div>
        <h2>{name}</h2>
      </div>
    </BackgroundItemContainer>
  );
};

export default BackgroundItem;
