import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { Main } from "./components/Main/Main";
import { MainContextProvider } from "./components/Main/MainContext";

function App() {
  return (
    <div>
      <MainContextProvider>
        <Main />
      </MainContextProvider>
    </div>
  );
}

export default App;
