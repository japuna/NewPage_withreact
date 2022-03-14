import React, { useEffect, useState } from "react";
import "./App.css";
import ButtonContainer from "./components/buttons-container/buttons-container";
import CoverPage from "./components/cover-page/cover-page";
import CVSectionContainer from "./components/CV-section/CV-section-container";
import Profile from "./components/profile/profile";

const App = () => {
  const [CV, setCV] = useState([]);

  useEffect(() => {
    const getCV = async () => {
      const CVFromServer = await fetchCV();
      setCV(CVFromServer);
    };
    getCV();
  }, []);

  //fetch CV
  const fetchCV = async () => {
    const res = await fetch("http://localhost:5000/CV");
    const data = await res.json();
    console.log(data);
    return data;
  };
  return (
    <>
      <CoverPage />
      <div className="w-full h-5 bg-darkBlue" />
      <ButtonContainer />
      <Profile />
      <CVSectionContainer CVData={CV}></CVSectionContainer>
    </>
  );
};

export default App;
