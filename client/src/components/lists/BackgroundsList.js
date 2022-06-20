import BackgroundItem from "../BackgroundItem";
const BackgroundsList = ({ data }) => {
  return data.map((background) => {
    return (
      <BackgroundItem
        id={background._id}
        key={background._id}
        image={background.base64}
        name={background.name}
      />
    );
  });
};

export default BackgroundsList;
