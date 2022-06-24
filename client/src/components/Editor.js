import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import transparentBG from "../transparent-bg.jpeg";
import Loader from "./Loader";
import { EditorContainer } from "./styled/EditorContainer.styled";
import { CanvasContainer } from "./styled/CanvasContainer.styled";
import { OptionsPanel } from "./styled/OptionsPanel.styled";
import { CalaveritaDesign } from "./styled/CalaveritaDesign.styled";

const Editor = () => {
  const { id } = useParams();
  const [clData, setClData] = useState({});
  const [zoom, setZoom] = useState(1);
  const navigate = useNavigate();
  const calaveritaDesign = useRef();
  const canvasElement = useRef();

  useEffect(() => {
    fetch(`../api/calaveritas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setClData(data.data);
        } else {
          navigate("/", { replace: false });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleWheel = (e) => {
    if (e.deltaY > 0 && zoom > 0) {
      setZoom((zoom) => zoom - 0.025);
      calaveritaDesign.current.style.transform = `scale(${zoom})`;
    } else {
      setZoom((zoom) => zoom + 0.025);
      calaveritaDesign.current.style.transform = `scale(${zoom})`;
    }
  };

  if (!clData.name) return <Loader loading="editor" />;

  if (clData.name)
    return (
      <>
        <EditorContainer>
          <CanvasContainer
            ref={canvasElement}
            onWheel={handleWheel}
            cbi={transparentBG}
          >
            <CalaveritaDesign ref={calaveritaDesign} />
          </CanvasContainer>
          <OptionsPanel></OptionsPanel>
        </EditorContainer>
      </>
    );
};
export default Editor;
