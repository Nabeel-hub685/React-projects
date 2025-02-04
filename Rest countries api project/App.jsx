import React, { useState } from "react";
//import Header from "./Components/header";
import "./style.css";
import "./country.css";
import SearchBar from "./Components/SearchBar";
import FilterBox from "./Components/FilterBox";
import CountriesContainer from "./Components/CountriesContainer";
import { Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { themeContext } from "./contexts/ThemeContext";

export default function App() {
  const [query, setQuery] = useState("");
  console.log("app wala function");
  
  return (
    <>
    <themeContext.Provider value="nabeel context updated value!, updated again"> 
    <Header/>
     <Outlet context={'Nabeel ka outlet context !'}/>
     </themeContext.Provider>
      
      
      
    </>
  );
}
