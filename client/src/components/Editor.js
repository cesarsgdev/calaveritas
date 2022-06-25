import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import transparentBG from "../transparent-bg.jpeg";
import logo from "../logo.svg";
import Loader from "./Loader";
import { EditorContainer } from "./styled/EditorContainer.styled";
import { CanvasContainer } from "./styled/CanvasContainer.styled";
import { CanvasFooterInfo } from "./styled/CanvasFooterInfo.styled";
import { CalaveritaDesign } from "./styled/CalaveritaDesign.styled";
import EditorOptions from "./EditorOptions";

const Editor = () => {
  const { id } = useParams();
  const [clData, setClData] = useState({});
  const [zoom, setZoom] = useState(1);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const calaveritaDesign = useRef();
  const canvasElement = useRef();
  const titleInput = useRef();
  const contentInput = useRef();

  useEffect(() => {
    fetch(`../api/calaveritas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setClData(data.data);
          setName(data.data.name);
          setContent(data.data.content);
          console.log(data);
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

  const changeBGColor = (color) => {
    const temp = { ...clData };
    temp.bgColor = color.rgb;
    setClData({ ...temp });
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
            <img src={logo} alt="logo" />
            <CalaveritaDesign ref={calaveritaDesign} bgColor={clData.bgColor}>
              <img
                className="bgDesign"
                src={`data:image/jpeg;base64,${clData.background.base64}`}
                alt="background"
              />
              <div className="overlay"></div>
              <div className="text">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  ref={titleInput}
                />
                <textarea
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  ref={contentInput}
                  onBlur={() => {
                    console.log(contentInput.current.innerHTML);
                  }}
                ></textarea>
              </div>
            </CalaveritaDesign>
            <CanvasFooterInfo>
              <div>{name}.clv</div>
              <div>{Math.round(zoom * 100)}%</div>
            </CanvasFooterInfo>
          </CanvasContainer>
          <EditorOptions
            name={name}
            clData={clData}
            changeBGColor={changeBGColor}
          />
        </EditorContainer>
      </>
    );
};
export default Editor;
