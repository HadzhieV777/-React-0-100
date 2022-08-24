import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    // Cleaning up after any side effect to prevent memory leaks
    return function () {
      window.removeEventListener("resize", watchWidth);
    };

  }, []);
  return <h1 className="window-tracker">Window width: {windowWidth}</h1>;
}
