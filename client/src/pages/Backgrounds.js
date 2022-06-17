import { Container } from "../components/styled/Container.styled";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Backgrounds = () => {
  const [bgData, setBgData] = useState(null);

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

  if (!bgData)
    return (
      <Container>
        <Loader />
      </Container>
    );

  return (
    <>
      <Container>
        {bgData.map((background) => {
          return <h1>{background.name}</h1>;
        })}
      </Container>
    </>
  );
};

export default Backgrounds;
