import React from "react";
import './Slider.scss'

export const Slider = () => {
  const LocalData = JSON.parse(localStorage.getItem("slider")) || 0;

  const saveStorage = (data, dataName = "slider") => {
    localStorage.setItem(dataName, JSON.stringify(data));
  };

  const [value, setValue] = React.useState(LocalData);
  React.useEffect(() => {
    document.body.style.backgroundColor = `rgb(${255 - value}, ${
      255 - value
    }, ${255 - value})`;
  }, [value]);

  return (
    <>
      <input
        type="range"
        class="slider"
        id="myRange"
        min="0"
        max="255"
        value={value}
        onChange={(evt) => (
          setValue(evt.target.value), saveStorage(evt.target.value)
        )}
      />
    </>
  );
};
