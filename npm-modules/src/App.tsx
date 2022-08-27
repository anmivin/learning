import React, {useEffect} from "react";
import {usePageVisibility} from "./react-visibility/useDocumentVisability";


const App: React.FC = () => {
  const {count, visible, onVisibilityChange } = usePageVisibility();  
   useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log('first handler', isVisible)
    });
    onVisibilityChange((isVisible) => {
      console.log('second handler', isVisible)
    });
  }, [])
  return (
      <>
      <div> Вы покинули страницу: {count} раз Вкладка активна?
          {visible ? "да" : "нет"}</div>
      </>
    );
  };

export default App;