import { EditorsOptionsContainer } from "./styled/EditorOptionsList.styled";
import { useState } from "react";

const EditorOptionsList = ({ data, title }) => {
  const [displayList, setDisplayList] = useState(false);
  const [defaultOpt, setDefaultOpt] = useState(data[0]);

  const handleDisplay = () => {
    setDisplayList(!displayList);
  };

  const handleSelectOption = (e) => {
    setDisplayList(!displayList);
    setDefaultOpt(e.target.textContent);
  };

  return (
    <>
      <div>
        <h3>{title}</h3>
        <button onClick={handleDisplay}>{defaultOpt}</button>
        {displayList && (
          <EditorsOptionsContainer>
            {data.map((option, i) => {
              return (
                <li key={i} onClick={handleSelectOption}>
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
