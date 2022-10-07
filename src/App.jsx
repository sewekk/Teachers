import React from "react";
import { GlobalStyle } from "./assets/GlobalStyle";
import { MainWrapper } from "./components/Molecues/MainWrapper/MainWrapper";
import Navigation from "./components/Organism/Navigation/Navigation";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Navigation />
        <div>
          <Outlet />
        </div>
      </MainWrapper>
    </>
  );
};

export default App;
