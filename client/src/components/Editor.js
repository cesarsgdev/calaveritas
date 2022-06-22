import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { SketchPicker } from "react-color";

const Editor = () => {
  const { id } = useParams();
  const [clData, setClData] = useState({});
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  // const [bgColor, setBgColor] = useState("#000");
  const [color, setColor] = useState({ r: "141", g: "214", b: "46", a: "1" });
  const navigate = useNavigate();

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

  const handleColorChange = (color) => {
    setColor(color.rgb);
    console.log(color);
  };

  const handleColorComplete = (color) => {};

  if (!clData.name) return <Loader loading="editor" />;

  if (clData.name)
    return (
      <>
        <h1>
          Editor!!!! {id} {clData.name}
        </h1>
        <div
          style={{
            width: "30px",
            height: "30px",
            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
            cursor: "pointer",
          }}
          onClick={() => {
            setDisplayColorPicker(!displayColorPicker);
          }}
        ></div>
        {displayColorPicker && (
          <SketchPicker
            color={color}
            onChange={handleColorChange}
            onChangeComplete={handleColorComplete}
          />
        )}
      </>
    );
};
export default Editor;
