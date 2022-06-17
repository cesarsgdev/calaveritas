import { Container } from "../components/styled/Container.styled";
import { useEffect, useState, useRef } from "react";
import Loader from "../components/Loader";
import BackgroundsList from "../components/lists/BackgroundsList";

const Backgrounds = () => {
  const [bgData, setBgData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const imagesLoaded = useRef(0);

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

  const countImages = () => {
    imagesLoaded.current += 1;
    console.log(imagesLoaded.current);
    if (imagesLoaded.current >= bgData.length) {
      setIsLoading(!isLoading);
    }
  };

  if (!bgData && !isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  return (
    <>
      <Container grid>
        <BackgroundsList data={bgData} countImages={countImages} />
      </Container>
    </>
  );
};

export default Backgrounds;
