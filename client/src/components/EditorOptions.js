import { OptionsPanel } from "./styled/OptionsPanel.styled";
import OptionsSection from "./OptionsSection";
import transparentBG from "../transparent-bg.jpeg";
import { SketchPicker } from "react-color";
import { useState } from "react";
import EditorOptionsList from "./EditorOptionsList";

const EditorOptions = ({ name, clData, changeBGColor }) => {
  const [displayPicker, setDisplayPicker] = useState(false);
  const [bgColor, setBgColor] = useState(clData.bgColor);

  const blendColorOptions = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "dodge",
    "burn",
    "hard light",
    "soft light",
    "difference",
    "exclusion",
  ];

  const handlePicker = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleBGColorChange = (color, event) => {
    setBgColor(color.rgb);
    changeBGColor(color);
  };
  return (
    <>
      <OptionsPanel>
        <h1>{name}</h1>
        <OptionsSection title="Background">
          <div className="twoColumns">
            <div className="sectionColumn">
              <h3>Color</h3>
              <button
                style={{
                  background: `linear-gradient(rgba(${bgColor.r},${bgColor.g},${bgColor.b},${bgColor.a}), rgba(${bgColor.r},${bgColor.g},${bgColor.b},${bgColor.a})), url(${transparentBG}) center/200px`,
                }}
                onClick={handlePicker}
              ></button>
              {displayPicker && (
                <div className="pickerContainer">
                  <SketchPicker
                    color={bgColor}
                    onChange={handleBGColorChange}
                  />
                </div>
              )}

              <EditorOptionsList data={blendColorOptions} />
            </div>
            <div className="sectionColumn">
              <h3>Image</h3>
              <button
                style={{
                  background: `url(data:image/jpeg;base64,${clData.background.base64})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></button>
            </div>
          </div>
        </OptionsSection>
        <OptionsSection title="Font"></OptionsSection>
        <OptionsSection title="Size"></OptionsSection>
      </OptionsPanel>
    </>
  );
};
export default EditorOptions;
