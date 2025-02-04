import React, { useContext, useState } from "react";
import { themeContext } from "../contexts/ThemeContext";


// const arr = CountriesData.filter((value) => {
//   // console.log("Nabeel".includes("Nab"));
//   return value.name.common.toLowerCase().includes("pak");
// });
// console.log(arr);

export default function SearchBar({ setQuery }) {
 console.log(useContext(themeContext)); 
  return (
    <>
      <div class="search-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
          }}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
}
