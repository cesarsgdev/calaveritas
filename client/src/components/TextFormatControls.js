import { TextFormatContainer } from "./styled/TextFormatContainer";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";
import { SketchPicker } from "react-color";
import { useState } from "react";

const TextFormatControls = ({ changeOption, type }) => {
  const [displayPicker, setDisplayPicker] = useState(false);
  const [btnColor, setBtnColor] = useState("#FFFFFF");

  const handleColorDisplay = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleColorChange = (color, event) => {
    // console.log(color);
    // console.log(event);
    changeOption(color.hex, type);
    setBtnColor(color.hex);
  };
  return (
    <>
      <TextFormatContainer buttonColor={btnColor}>
        {displayPicker && (
          <div className="textPickerContainer">
            <SketchPicker
              color={btnColor}
              style={{ position: "absolute" }}
              disableAlpha
              width="150px"
              onChange={handleColorChange}
            />
          </div>
        )}
        <li>
          <button
            title="Color"
            className="fontColor"
            onClick={handleColorDisplay}
          ></button>
        </li>
        <li>
          <button title="Left">
            <FaAlignLeft />
          </button>
        </li>
        <li>
          <button title="Center">
            <FaAlignCenter />
          </button>
        </li>

        <li>
          <button>
            <FaAlignRight title="Right" />
          </button>
        </li>
      </TextFormatContainer>
    </>
  );
};

export default TextFormatControls;
