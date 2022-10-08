import React from "react";
import { GlobalStyle } from "./assets/GlobalStyle";
import { MainWrapper } from "./components/Molecues/MainWrapper/MainWrapper";
import Navigation from "./components/Organism/Navigation/Navigation";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Navigation />
        <div className="container">
          <Outlet />
        </div>
      </MainWrapper>
    </>
  );
};

export default App;
