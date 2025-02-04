import React, { useEffect, useState } from "react";

// import CountriesData from "../CountriesData.js";
import CountryCard from "./CountryCard.jsx";
import CountrieslistShimmer from "./CountrieslistShimmer.jsx";

export default function CountriesContainer({ query }) {
  // let CountriesData = [];

  // lets make it state variable

  const [CountriesData, setCountriesData] = useState([]);

  useEffect(() => {
    console.log('i m fetching data');
    fetchData();
    console.log('i have fetched data');
      
      
    
  }, []);

  // fetch("https://restcountries.com/v3.1/all")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     CountriesData = data;
  //     console.log(CountriesData);
  //     console.log("this is countries containter");
  //   });

  async function fetchData() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json(); // response.json() se pehly bhi await likhna boht zroori he!
    //CountriesData = data;
    setCountriesData(data);

    console.log(CountriesData);
    console.log("this is countries containter");
  }

  // if (CountriesData.length === 0) {
  //   fetchData();
  // }

  const array = CountriesData.filter((value) => {
    return value.name.common.toLowerCase().includes(query) || value.region.toLowerCase().includes(query);
  }).map((value) => {
    // console.log(value);
    return (
      <CountryCard
        key={value.name.common}
        namee={value.name.common}
        population={value.population}
        img={value.flags.svg}
        capital={value.capital}
        region={value.region}
      />
    );
  });
  // console.log(array);

  if(CountriesData.length===0){
    console.log("home page reloading!");
    return(
      // <div>
      //   <h1>Loading data.....! </h1>
      // </div>
      <CountrieslistShimmer/>
      
    )
    
  }

  return (
    
    
    <div className="countries-container">
      {/* {[<CountryCard />, <CountryCard />, <CountryCard />, <CountryCard />]} */}
      {array};
    </div>
    
    
  );
}
