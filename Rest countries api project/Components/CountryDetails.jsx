// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import CountryDetailsShimmer from "./countryDetailsShimmer";

// //MOST IMPORTANT NOTE! KABHI BHI USE EFFECT K CALL BACK FUNCTION KO ASYNC NHI BNANA HE BALKE BALKE FETCH DATA ALAG SE FUNCTION BNAAKE CALL BACK FUNCTION ME CALL KRDENA HE !

// export default function CountryDetails() {
//   const params = useParams();
//   console.log(params);
//   const countryName = params.country;
//  const [countryData, setCountryData]= useState({});

//   useEffect( () => {
//     // let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
//     // let data = await response.json();
//     // console.log(data);
//     // console.log(Object.values(data[0].name.nativeName)[0].common);
//     // console.log(Object.values(data[0].currencies)[0].name);

//     // setCountryData(
//     //   {
//     //     nativeName: Object.values(data[0].name.nativeName)[0].common,
//     //     population: `${data[0].population.toLocaleString("en-PK")}`,
//     //     subregion: data[0].subregion,
//     //     languages: Object.values(data[0].languages)[0],
//     //     capital: data[0].capital[0],
//     //     tld: data[0].tld[0],
//     //     currency: Object.values(data[0].currencies)[0].name,
//     //     flag: data[0].flags.svg,
       

//     //   }
//     // )
    
//     fetchData();



//   }, [countryName]);


//   async function fetchData(){
//     let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
//     let data = await response.json();
    
//     console.log(data);
//     console.log(Object.values(data[0].name.nativeName)[0].common);
//     console.log(Object.values(data[0].currencies)[0].name);

//     setCountryData(
//       {
//         nativeName: Object.values(data[0].name.nativeName)[0].common,
//         population: `${data[0].population.toLocaleString("en-PK")}`,
//         subregion: data[0].subregion,
//         languages: Object.values(data[0].languages)[0],
//         capital: data[0].capital[0],
//         tld: data[0].tld[0],
//         currency: Object.values(data[0].currencies)[0].name,
//         flag: data[0].flags.svg,
//        // borders: ['India', 'China', 'Iran', 'Afghanistan'],
//         // borders:data[0].borders,
//          borders: [],
       

//       }
//     )
    
//   if(!countryData.borders){
//     countryData.borders=[];
// }

// console.log(data[0].borders);

// if(data[0].borders){

//  data[0].borders.map(async (border)=>{
//    let response2 = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
//    let data2 = await response2.json();
//    const borderNames=[data2][0][0].name.common;
//    console.log(borderNames);
//    // jab previous state se update krna hota he to ham to ham useState wale function me ek callback function pass krty hen!
//   // setCountryData((prevState)=>({...prevState, borders: [...prevState.borders,borderNames]}));
//   setCountryData((prevState) => ({
//     ...prevState,
//     borders: [...prevState.borders, borderNames],
//   }));
 
   
// }

// )};
//  //console.log(borderArray);



//   }

//   if(Object.values(countryData).length===0){
//     return(
//       // <div>
//       //   <h1>Loading data.....! </h1>
//       // </div>
//        <CountryDetailsShimmer/>
//     )
//   }
  
  
//   return (
//     // countryData && ( // iska mtlb he jab countryData aajae tab hi ye poora render kro
    
//     <main>
//       <div className="country-details-container">
//         <span  className="back-button" onClick={()=>{
//               history.back();
//         }}>
//           <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
//         </span>
//         <span>  </span>
//         <Link to='http://localhost:1234/'><span  className="back-button home" 
//         >
//           Back to Home
//         </span>
//         </Link>


//         <div className="country-details">
//           <img src={countryData.flag} alt="" />
//           <div className="details-text-container">
//             <h1>{countryName}</h1>
//             <div className="details-text">
//               <p>
//                 <b>Native Name: </b>
//                 <span className="native-name">{countryData.nativeName}</span>
//               </p>
//               <p>
//                 <b>Population: </b>
//                 <span className="population">{countryData.population}</span>
//               </p>
//               <p>
//                 <b>subRegion: </b>
//                 <span className="subregion">{countryData.subregion}</span>
//               </p>
              
//               <p>
//                 <b>Capital: </b>
//                 <span className="capital">{countryData.capital}</span>
//               </p>
//               <p>
//                 <b>Top Level Domain: </b>
//                 <span className="top-level-domain">{countryData.tld}</span>
//               </p>
//               <p>
//                 <b>Currency: </b>
//               <span className="currencies">{countryData.currency}</span>
//               </p>
//               <p>
//                 <b>Languages: </b>
//                 <span className="languages">{countryData.languages}</span>
//               </p>
//             </div>

//            { Object.values(countryData).length!==0 && countryData.borders && countryData.borders.length!==0 ? (
//             <div className="border-countries">
              
//               <b>Border Countries: </b>&nbsp;
//               {
//                 Object.values(countryData).length!==0 ?
//                 countryData.borders.map((border)=>
//                             <Link to={`/${border}`} key={border}>{border}</Link>
//                 )
//                 : ''
//               }
            
//             </div>) : ''}
            
//           </div>
//         </div>
//       </div>
//     </main>
    
//   // )
//   )

// ;
  
// }


















import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailsShimmer from "./countryDetailsShimmer";
import { themeContext } from "../contexts/ThemeContext";

export default function CountryDetails() {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(true); // New loading state

 // const location = useLocation();    
 // it returns an object with other keys including 'state' key or uski value wahi hoti he jo hamne pichle component k link tag k 'state' attribute me pass ki hoti he!
//console.log(location);
///console.log(location.state);

// ham useLocation() ko aese destructure krke bhi use krsakty hen

const {state} = useLocation();
console.log(state);

console.log(useContext(themeContext));

  useEffect(() => {
    // Show shimmer effect when country changes
    setLoading(true);

    // Fetch country details
    fetchData();
  }, [countryName]);

  async function fetchData() {
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      let data = await response.json();

      setCountryData({
        nativeName: Object.values(data[0].name.nativeName)[0].common,
        population: `${data[0].population.toLocaleString("en-PK")}`,
        subregion: data[0].subregion,
        languages: Object.values(data[0].languages)[0],
        capital: data[0].capital[0],
        tld: data[0].tld[0],
        currency: Object.values(data[0].currencies)[0].name,
        flag: data[0].flags.svg,
        borders: [],
      });

      // Fetch border country names
      if (data[0].borders) {
        for (const border of data[0].borders) {
          let response2 = await fetch(
            `https://restcountries.com/v3.1/alpha/${border}`
          );
          let data2 = await response2.json();
          const borderName = data2[0].name.common;

          setCountryData((prevState) => ({
            ...prevState,
            borders: [...prevState.borders, borderName],
          }));
        }
      }

      setLoading(false); // Hide shimmer effect after fetching data
    }
     catch (error) {
      console.error("Error fetching country details:", error);
      setLoading(false); // Stop loading in case of error
    }
  }

  if (loading) {
    return <CountryDetailsShimmer />; // Display shimmer while loading
  }

  return (
    <main>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <Link to="http://localhost:1234/">
          <span className="back-button home">Back to Home</span>
        </Link>

        <div className="country-details">
          <img src={countryData.flag} alt="" />
          <div className="details-text-container">
            <h1>{countryName}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Subregion: </b>
                <span className="subregion">{countryData.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currency: </b>
                <span className="currencies">{countryData.currency}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>

            {countryData.borders && countryData.borders.length > 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link to={`/${border}`} key={border}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
