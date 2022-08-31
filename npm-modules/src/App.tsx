import React, { useEffect } from "react";
import { usePageVisibility } from "./react-visibility/useDocumentVisability";
import { useMediaQuery } from "./react-responsive/useMediaQuery";
import Example from "./react-responsive/example";

const App: React.FC = () => {
  const { count, visible, onVisibilityChange } = usePageVisibility();
  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log("first handler", isVisible);
    });
    onVisibilityChange((isVisible) => {
      console.log("second handler", isVisible);
    });
  }, []);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <>
      <div>
        {" "}
        Вы покинули страницу: {count} раз Вкладка активна?{" "}
        {visible ? "да" : "нет"}
      </div>
      <div>
        <h1>Device Test!</h1>
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You have a huge screen</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
        {isRetina ? <p>You are retina</p> : <p>You are not retina</p>}
      </div>
      <Example />
    </>
  );
};

export default App;
