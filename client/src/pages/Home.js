import { Container } from "../components/styled/Container.styled";
import { Overlay } from "../components/styled/Overlay.styled";
import Loader from "../components/Loader";
import NoCalaveritas from "../components/NoCalaveritas";
import { useState, useEffect } from "react";

const Home = () => {
  const [clData, setClData] = useState([]);

  useEffect(() => {
    // fetch("api/calaveritas")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.success) {
    //       setClData(data.data);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e.message);
    //   });
  }, []);

  if (!clData)
    return (
      <Container>
        <Loader loading="calaveritas" />
      </Container>
    );

  if (!clData.length)
    return (
      <Container flex flow="column wrap" justify="center" align="center">
        <NoCalaveritas />
      </Container>
    );

  return (
    <>
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default Home;
