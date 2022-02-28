import React from "react";
import "./App.css";
import ButtonContainer from './components/buttons-container/buttons-container'
import CoverPage from "./components/cover-page/cover-page";
import Profile from './components/profile/profile'

function App() {
  return (
    <>
      <CoverPage />
      <ButtonContainer />
      <Profile />
    </>
  );
}

export default App;
