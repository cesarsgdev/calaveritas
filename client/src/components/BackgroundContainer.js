const BackgroundContainer = ({ image, name }) => {
  return (
    <div>
      <img src={image} alt={name} />
    </div>
  );
};

export default BackgroundContainer;
