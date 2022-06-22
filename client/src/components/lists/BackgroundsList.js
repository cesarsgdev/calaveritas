import BackgroundItem from "../BackgroundItem";
import * as React from "react";
const BackgroundsList = React.forwardRef(({ data }, ref) => {
  const otherItems = React.useRef();

  return data.map((background, i) => {
    return (
      <BackgroundItem
        id={background._id}
        key={background._id}
        image={background.base64}
        name={background.name}
        ref={i + 1 === data.length ? ref : otherItems}
      />
    );
  });
});

export default BackgroundsList;
