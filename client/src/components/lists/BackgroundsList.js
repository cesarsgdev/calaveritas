import BackgroundContainer from "../BackgroundContainer";
const BackgroundsList = ({ data }) => {
  data.map((background) => {
    return (
      <BackgroundContainer image={background.url} name={background.name} />
    );
  });
};

export default BackgroundsList;
