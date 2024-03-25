// React Imports
import { useState } from "react";
// Component Imports
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Table from "./components/Table";
import Footer from "./components/Footer";
// Style Imports
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      {isLoggedIn && <MainContent />}
      {isLoggedIn && <Table />}
      <Footer />
    </>
  );
};

export default App;
