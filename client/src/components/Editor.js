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
  const [bgImage, setBgImage] = useState(null);
  const [filter, setFilter] = useState(null);
  const [blendMode, setBlendMode] = useState(null);
  const [fontTitle, setFontTitle] = useState(null);
  const [fontContent, setFontContent] = useState(null);
  const [fontSizeTitle, setFontSizeTitle] = useState(null);
  const [fontSizeContent, setFontSizeContent] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    fetch(`../api/calaveritas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setClData(data.data);
          setName(data.data.name);
          setContent(data.data.content);
          setBgImage(data.data.background.base64);
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

  const changeBGColorComplete = (color) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bgColor: color.rgb }),
    };

    fetch(`../api/calaveritas/${id}`, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => {
        console.log(e.message);
      });
  };

  const changeOption = (action, type) => {
    console.log(action, type);
    if (type === "filter") {
      setFilter(action);
    }
    if (type === "blendMode") {
      setBlendMode(action);
    }
    if (type === "fontTitle") {
      setFontTitle(action);
    }
    if (type === "fontContent") {
      setFontContent(action);
    }
    if (type === "fontSizeTitle") {
      setFontSizeTitle(action);
    }
    if (type === "fontSizeContent") {
      setFontSizeContent(action);
    }
  };

  const changeWidth = (widthSize) => {
    setWidth((width) => widthSize);
  };

  const changeBgImage = (base64, imageID) => {
    setBgImage(base64);
    console.log(JSON.stringify({ background: imageID }));
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ background: imageID }),
      redirect: "follow",
    };

    fetch(`../api/calaveritas/${id}`, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => {
        console.log(e.message);
      });
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
            <CalaveritaDesign
              ref={calaveritaDesign}
              bgColor={clData.bgColor}
              imgFilter={filter}
              blendMode={blendMode}
              fontTitle={fontTitle}
              fontContent={fontContent}
              fontSizeContent={fontSizeContent}
              fontSizeTitle={fontSizeTitle}
              widthSize={width}
            >
              <img
                className="bgDesign"
                src={`data:image/jpeg;base64,${bgImage}`}
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
            changeBGColorComplete={changeBGColorComplete}
            changeOption={changeOption}
            changeWidth={changeWidth}
            changeBgImage={changeBgImage}
            bgImage={bgImage}
          />
        </EditorContainer>
      </>
    );
};
export default Editor;
