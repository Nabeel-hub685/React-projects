import React from 'react'

export default function FilterBox({setQuery}) {
  return (
    <>
    <select class="filter-by-region" onChange={(e)=>{
         setQuery(e.target.value.toLowerCase());
    }}>
          <option hidden>Filter by Region</option> 
          {/* option tag me hidden attribute dene se select tag wo wala option nhi dikhaata , bs usko as a main heading dikhaata he! */}
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      
    </>
  )
}
