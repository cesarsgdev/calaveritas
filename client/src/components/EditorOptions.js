import { OptionsPanel } from "./styled/OptionsPanel.styled";
import OptionsSection from "./OptionsSection";
import transparentBG from "../transparent-bg.jpeg";
import { SketchPicker } from "react-color";
import { useState } from "react";
import EditorOptionsList from "./EditorOptionsList";
import { Overlay } from "./styled/Overlay.styled";
import EditorBgSelector from "./EditorBgSelector";
import {
  blendColorOptions,
  filterOptions,
  fontFamilies,
  fontSizes,
} from "./data/options";

const EditorOptions = ({
  name,
  clData,
  changeBGColor,
  changeBGColorComplete,
  changeOption,
  changeWidth,
  changeBgImage,
  bgImage,
}) => {
  const [displayPicker, setDisplayPicker] = useState(false);
  const [bgColor, setBgColor] = useState(clData.bgColor);
  const [width, setWidth] = useState(400);
  const [bgSelect, setBgSelect] = useState(false);

  const handlePicker = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleBGColorChange = (color, event) => {
    setBgColor(color.rgb);
    changeBGColor(color);
  };

  const handleBGColorComplete = (color, event) => {
    changeBGColorComplete(color);
  };

  const handleBgSelect = (e) => {
    setBgSelect(!bgSelect);
  };
  return (
    <>
      <OptionsPanel bgBtnImage={bgImage}>
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
                      onChangeComplete={handleBGColorComplete}
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
                  className="btnImgBg"
                  style={
                    {
                      // background: `url(data:image/jpeg;base64,${bgImage})`,
                      // backgroundSize: "160px",
                      // backgroundPosition: "center",
                    }
                  }
                  onClick={handleBgSelect}
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
                <h3 className="titleSubSection">Title</h3>
                <EditorOptionsList
                  title="Family"
                  data={fontFamilies}
                  type="fontTitle"
                  changeOption={changeOption}
                  font={true}
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
                <h3 className="titleSubSection">Content</h3>
                <EditorOptionsList
                  title="Family"
                  data={fontFamilies}
                  type="fontContent"
                  changeOption={changeOption}
                  font={true}
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
        <OptionsSection title="Size">
          <div className="twoColumns">
            <div className="sectionColumn">
              <div className="subSection">
                <input
                  type="text"
                  value={width}
                  onChange={(e) => {
                    setWidth((width) => e.target.value);
                  }}
                  onBlur={(e) => {
                    changeWidth(width);
                  }}
                />
              </div>
            </div>
          </div>
        </OptionsSection>
      </OptionsPanel>
      {bgSelect && (
        <Overlay dark onClick={handleBgSelect}>
          <EditorBgSelector changeBgImage={changeBgImage}></EditorBgSelector>
        </Overlay>
      )}
    </>
  );
};
export default EditorOptions;
