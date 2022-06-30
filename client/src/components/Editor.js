import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toCanvas, toSvg } from "html-to-image";
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
  const calaveritaDesign = useRef(null);
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
  const [fontTitleColor, setFontTitleColor] = useState("#FFF");
  const [fontContentColor, setFontContentColor] = useState("#FFF");
  const [fontTitleAlignment, setFontTitleAlignment] = useState("left");
  const [fontContentAlignment, setFontContentAlignment] = useState("left");
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
      // calaveritaDesign.current.style.transform = `scale(${zoom})`;
    } else {
      setZoom((zoom) => zoom + 0.025);
      // calaveritaDesign.current.style.transform = `scale(${zoom})`;
    }
  };

  const changeBGColor = (color) => {
    const temp = { ...clData };
    temp.properties.bgColor = color.rgb;
    setClData({ ...temp });
  };

  const changeBGColorComplete = (color) => {
    console.log(color);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties: { bgColor: color.rgb } }),
    };

    fetch(`../api/calaveritas/${id}`, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => {
        console.log(e.message);
      });
  };

  const changeOption = (action, type) => {
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

    if (type === "fontTitleColor") {
      setFontTitleColor(action);
    }

    if (type === "fontContentColor") {
      setFontContentColor(action);
    }

    if (action === "Left" && type === "fontTitleAlign") {
      setFontTitleAlignment("left");
    }

    if (action === "Center" && type === "fontTitleAlign") {
      setFontTitleAlignment("center");
    }

    if (action === "Right" && type === "fontTitleAlign") {
      setFontTitleAlignment("right");
    }

    if (action === "Left" && type === "fontContentAlign") {
      setFontContentAlignment("left");
    }

    if (action === "Center" && type === "fontContentAlign") {
      setFontContentAlignment("center");
    }

    if (action === "Right" && type === "fontContentAlign") {
      setFontContentAlignment("right");
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

  const saveContent = (e) => {
    // console.log(e.target.innerHTML);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: e.target.innerHTML }),
      redirect: "follow",
    };

    fetch(`../api/calaveritas/${id}`, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => {
        console.log(e.message);
      });
  };

  const saveImage = () => {
    console.log(calaveritaDesign.current);
    htmlToImage
      .toPng(calaveritaDesign.current, {
        cacheBust: true,
        canvasWidth: 400,
        canvasHeight: 650,
        pixelRatio: 1,
        skipAutoScale: true,
      })
      .then(function (dataUrl) {
        console.log(dataUrl);
      });

    // htmlToImage
    //   .toCanvas(calaveritaDesign.current, {
    //     cacheBust: true,
    //     canvasWidth: 400,
    //     canvasHeight: 650,
    //     pixelRatio: 1,
    //     skipAutoScale: true,
    //   })
    //   .then(function (canvas) {
    //     // console.log(dataUrl);
    //     document.body.appendChild(canvas);
    //   });
  };

  const saveImage2 = useCallback(() => {
    // console.log(calaveritaDesign.current);
    titleInput.current.style.border = "none";
    contentInput.current.style.border = "none";

    htmlToImage
      .toJpeg(calaveritaDesign.current, {
        // cacheBust: true,
        // canvasWidth: 400,
        // canvasHeight: 650,
        filter: filter,
      })
      .then(function (dataUrl) {
        console.log(dataUrl);
        titleInput.current.style.border = "1px dashed lightgray";
        contentInput.current.style.border = "1px dashed lightgray";
      });
  }, [calaveritaDesign]);

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
              bgColor={clData.properties.bgColor}
              imgFilter={filter}
              blendMode={blendMode}
              fontTitle={fontTitle}
              fontContent={fontContent}
              fontSizeContent={fontSizeContent}
              fontSizeTitle={fontSizeTitle}
              fontTitleColor={fontTitleColor}
              fontContentColor={fontContentColor}
              fontTitleAlignment={fontTitleAlignment}
              fontContentAlignment={fontContentAlignment}
              widthSize={width}
              zoom={zoom}
            >
              <div ref={calaveritaDesign}>
                <img
                  className="bgDesign"
                  src={`data:image/jpeg;base64,${bgImage}`}
                  alt="background"
                  width="100%"
                  height="100%"
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
                    onBlur={saveContent}
                  ></textarea>
                </div>
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
            saveImage={saveImage2}
          />
        </EditorContainer>
      </>
    );
};
export default Editor;
