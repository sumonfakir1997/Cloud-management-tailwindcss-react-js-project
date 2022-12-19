import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const PhotoContext = createContext(null);

const ContextPhoto = () => {
  const [initialState, setInitialState] = useState({
    photos:[],
  });
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=20"
      );
      const formattedResponse = await response.json();
      setInitialState((state) => ({
        ...state,
        photos: formattedResponse,
      }));
    })();
  }, []);

  return (
    <PhotoContext.Provider value={{ ...initialState }}>
      <App />
    </PhotoContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ContextPhoto />
  //  </React.StrictMode>
);
