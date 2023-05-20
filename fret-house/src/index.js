import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider } from "./context/DataContext";
import {FilterProvider} from "./context/FilterContext"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Call make Server
makeServer();

root.render(
  <StrictMode>
    <Router>
      <DataProvider>
        <FilterProvider>
         <App />
        </FilterProvider>
      </DataProvider>
    </Router>
  </StrictMode>
);
