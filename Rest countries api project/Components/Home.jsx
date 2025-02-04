import React, { useContext } from 'react'
import React, { useState } from "react";
//import Header from "./Components/header";
import "../style.css";
import "../country.css";
import SearchBar from "./SearchBar";
import FilterBox from "./FilterBox";
import CountriesContainer from "./CountriesContainer";
import { useOutletContext } from 'react-router-dom';
import { themeContext } from '../contexts/ThemeContext';



export default function Home() {
      const [query, setQuery] = useState("");
     const contextValue= useOutletContext();
     console.log(contextValue);
     console.log(themeContext);
     const a = useContext(themeContext);
     console.log(a);
     console.log(themeContext.Provider);// ye ek component hota he jisay ham value deke app component me use krsakty hen
     console.log(themeContext.Provider._context._currentValue); // ye braber he console.log(useContext(themeContext));
     console.log(themeContext._currentValue); // ye braber he console.log(useContext(themeContext));
  return (
    <main>
            <div className="search-filter-container">
              {/* filter box or search br dono me hame setquery function bhejna he! */}
              <SearchBar setQuery={setQuery} />
              <FilterBox setQuery={setQuery}/>
            </div>
            <CountriesContainer query={query} />
          </main>
  )
}
