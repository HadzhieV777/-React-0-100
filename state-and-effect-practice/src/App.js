import React from "react";
import WindowTracker from "./windowTracker";

export default function App() {
  const [show, setShow] = React.useState({
    visible: false,
  });

  function handleClick() {
    setShow((prevShow) => {
      return {
        ...prevShow,
        visible: !prevShow.visible,
      };
    });
  }

  return (
    <div className="container">
      <button onClick={handleClick}>Toggle WindowTracker</button>
      {show.visible ? <WindowTracker /> : ""}
    </div>
  );
}

