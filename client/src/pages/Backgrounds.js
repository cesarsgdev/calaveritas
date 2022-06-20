import { Container } from "../components/styled/Container.styled";
import { useEffect, useState, useRef } from "react";
import Loader from "../components/Loader";
import BackgroundsList from "../components/lists/BackgroundsList";

const Backgrounds = () => {
  const [bgData, setBgData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("api/backgrounds")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setBgData(data.data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (!bgData && !isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  return (
    <>
      <Container grid>
        <BackgroundsList data={bgData} />
      </Container>
    </>
  );
};

export default Backgrounds;
