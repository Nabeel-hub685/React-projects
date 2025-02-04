import React from "react";
import { Link, useOutletContext } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function CountryCard({
  namee,
  population,
  img,
  capital,
  region,
}) {
  //console.log(namee);

   const contextValue= useOutletContext();

      //  console.log(contextValue);
  return (
    <>
      {/* <a class="country-card" href={`/country?name=${namee}`}>  */}
      {/* <Link class="country-card" to={`/country?name=${namee}`}>  */}
      <Link class="country-card" to={`/${namee}`} state={`Nabeel state to ${namee} country!`}> 

        <img src={img} alt="South Georgia flag" />
        <div class="card-text">
          <h3 class="card-title">{namee}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-PK")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </Link>
    </>
  );
}
