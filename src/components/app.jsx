import React, { createContext } from "react";
// import ReactDOM from 'react-dom';

// import Note from './Note';
// import Footer from './Footer';
import LandingPage from "./LandingPage";

export const StyleTypoContext = createContext();

function App() {
  return (
    <StyleTypoContext.Provider
      value={{ fontFamily: "Poppins", fontWeight: 400, fontStyle: "normal"}}
    >
      <div>
        <LandingPage></LandingPage>
      </div>
    </StyleTypoContext.Provider>
  );
}
export default App;
