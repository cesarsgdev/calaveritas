import { useEffect, useState } from "react";

const EditorBgSelector = ({ changeBgImage }) => {
  const [bgData, setBgData] = useState(false);
  const [preview, setPreview] = useState(false);
  useEffect(() => {
    fetch(`../api/backgrounds`)
      .then((response) => response.json())
      .then((data) => {
        setBgData(data.data);
        setPreview(data.data[0]);
        console.log(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handlePreview = (e, i) => {
    setPreview(bgData[i]);
  };

  if (!bgData)
    return (
      <section>
        <div>Loading</div>
      </section>
    );

  if (bgData)
    return (
      <>
        <section
          onClick={(e) => {
            // e.stopPropagation();
          }}
        >
          <div className="backgrounds">
            {bgData.map((background, i) => {
              return (
                <button
                  onClick={(e) => {
                    changeBgImage(background.base64);
                  }}
                  onMouseOver={(e) => {
                    handlePreview(e, i);
                  }}
                  id={background._id}
                  key={background._id}
                  style={{
                    width: "100%",
                    height: "100px",
                    background: `url(data:image/jpeg;base64,${background.base64}`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                ></button>
              );
            })}
          </div>
          <div className="previews">
            <img
              alt={preview.name}
              src={`data:image/jpeg;base64,${preview.base64}`}
              width="100%"
              height="100%"
            />
          </div>
        </section>
      </>
    );
};

export default EditorBgSelector;
