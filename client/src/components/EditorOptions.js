import { OptionsPanel } from "./styled/OptionsPanel.styled";
import OptionsSection from "./OptionsSection";
import transparentBG from "../transparent-bg.jpeg";
import { SketchPicker } from "react-color";
import { useState } from "react";
import EditorOptionsList from "./EditorOptionsList";
import {
  blendColorOptions,
  filterOptions,
  fontFamilies,
  fontSizes,
} from "./data/options";

const EditorOptions = ({ name, clData, changeBGColor, changeOption }) => {
  const [displayPicker, setDisplayPicker] = useState(false);
  const [bgColor, setBgColor] = useState(clData.bgColor);

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
              <div className="subSection">
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
              </div>

              <EditorOptionsList
                title="Blend Mode"
                data={blendColorOptions}
                type="blendMode"
                changeOption={changeOption}
              />
            </div>
            <div className="sectionColumn">
              <div className="subSection">
                <h3>Image</h3>
                <button
                  style={{
                    background: `url(data:image/jpeg;base64,${clData.background.base64})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></button>
              </div>
              <EditorOptionsList
                title="Filter"
                data={filterOptions}
                type="filter"
                changeOption={changeOption}
              />
            </div>
          </div>
        </OptionsSection>
        <OptionsSection title="Font">
          <div className="twoColumns">
            <div className="sectionColumn">
              <div className="subSection">
                <h3>Title</h3>
                <EditorOptionsList
                  title="Family"
                  data={fontFamilies}
                  type="fontTitle"
                  changeOption={changeOption}
                />
                <EditorOptionsList
                  title="Size"
                  data={fontSizes}
                  type="fontSizeTitle"
                  changeOption={changeOption}
                />
              </div>
            </div>
            <div className="sectionColumn">
              <div className="subSection">
                <h3>Content</h3>
                <EditorOptionsList
                  title="Family"
                  data={fontFamilies}
                  type="fontContent"
                  changeOption={changeOption}
                />
                <EditorOptionsList
                  title="Size"
                  data={fontSizes}
                  type="fontSizeContent"
                  changeOption={changeOption}
                />
              </div>
            </div>
          </div>
        </OptionsSection>
        <OptionsSection title="Size"></OptionsSection>
      </OptionsPanel>
    </>
  );
};
export default EditorOptions;
