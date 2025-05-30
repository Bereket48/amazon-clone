import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import { initialState, reducer } from "./utils/reducer.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>  {/* Sharing state and dispatch across downstream */}
      <App />
    </DataProvider>
  </StrictMode>
);
