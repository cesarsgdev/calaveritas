import { Container } from "../components/styled/Container.styled";
import { useEffect, useState, useRef } from "react";
import Loader from "../components/Loader";
import BackgroundsList from "../components/lists/BackgroundsList";

const Backgrounds = () => {
  const [bgData, setBgData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [moreResults, setMoreResults] = useState(true);

  const lastItem = useRef();

  useEffect(() => {
    if (moreResults) {
      fetch(`api/backgrounds?skip=${skip}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success && data.data.length) {
            setBgData((bgData) => [...bgData, ...data.data]);
          } else {
            setMoreResults(false);
          }
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }, [skip]);

  const handleLoadMore = (entries, observer) => {
    if (moreResults) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSkip((skipValue) => skipValue + 10);
        }
      });
    }
  };

  useEffect(() => {
    if (bgData.length) {
      console.log(lastItem.current.id);

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      let observer = new IntersectionObserver(handleLoadMore, options);
      observer.observe(lastItem.current);

      if (!moreResults) {
        observer.disconnect();
      }
    }
  }, [bgData]);

  if (!bgData.length)
    return (
      <Container>
        <Loader loading="backgrounds" />
      </Container>
    );

  return (
    <>
      <Container grid onClick={handleLoadMore}>
        <BackgroundsList data={bgData} ref={lastItem} />
      </Container>
    </>
  );
};

export default Backgrounds;
