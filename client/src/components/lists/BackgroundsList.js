import BackgroundItem from "../BackgroundItem";
const BackgroundsList = ({ data, countImages }) => {
  return data.map((background) => {
    return (
      <BackgroundItem
        key={background._id}
        image={background.base64}
        name={background.name}
        countImages={countImages}
      />
    );
  });
};

export default BackgroundsList;
