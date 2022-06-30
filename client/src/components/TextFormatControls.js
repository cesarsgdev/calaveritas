import { TextFormatContainer } from "./styled/TextFormatContainer";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";
import { SketchPicker } from "react-color";
import { useState } from "react";

const TextFormatControls = ({ changeOption, type, align }) => {
  const [displayPicker, setDisplayPicker] = useState(false);
  const [btnColor, setBtnColor] = useState("#FFFFFF");
  const [titleAlign, setTitleAlign] = useState("left");

  const handleColorDisplay = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleColorChange = (color, event) => {
    changeOption(color.hex, type);
    setBtnColor(color.hex);
  };

  const handleTextAlign = (e, title, action) => {
    changeOption(title, align);
    setTitleAlign(title.toLowerCase());
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
          <button
            className={`${titleAlign === "left" ? `active` : null}`}
            title="Left"
            onClick={(e) => {
              handleTextAlign(e, "Left", "fontTitleAlign");
            }}
          >
            <FaAlignLeft />
          </button>
        </li>
        <li>
          <button
            className={`${titleAlign === "center" ? `active` : null}`}
            title="Center"
            onClick={(e) => {
              handleTextAlign(e, "Center", "fontTitleAlign");
            }}
          >
            <FaAlignCenter />
          </button>
        </li>

        <li>
          <button
            className={`${titleAlign === "right" ? `active` : null}`}
            title="Right"
            onClick={(e) => {
              handleTextAlign(e, "Right", "fontTitleAlign");
            }}
          >
            <FaAlignRight title="Right" />
          </button>
        </li>
      </TextFormatContainer>
    </>
  );
};

export default TextFormatControls;
