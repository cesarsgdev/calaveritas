import { EditorsOptionsContainer } from "./styled/EditorOptionsList.styled";
import { useState } from "react";

const EditorOptionsList = ({ data, title, type, changeOption, font }) => {
  const [displayList, setDisplayList] = useState(false);
  const [defaultOpt, setDefaultOpt] = useState(data[0]);

  const handleDisplay = () => {
    setDisplayList(!displayList);
  };

  const handleSelectOption = (e) => {
    setDisplayList(!displayList);
    setDefaultOpt(e.target.textContent);
    changeOption(e.target.textContent, e.target.type);
  };

  return (
    <>
      <div className="subSection">
        <h3>{title}</h3>
        <button className="listButton" onClick={handleDisplay}>
          {defaultOpt}
        </button>
        {displayList && (
          <EditorsOptionsContainer>
            {data.map((option, i) => {
              return (
                <li
                  style={{
                    fontFamily: font ? `${option}, sans-serif` : "inherit",
                  }}
                  type={type}
                  key={i}
                  onClick={handleSelectOption}
                >
                  {option}
                </li>
              );
            })}
          </EditorsOptionsContainer>
        )}
      </div>
    </>
  );
};
export default EditorOptionsList;
