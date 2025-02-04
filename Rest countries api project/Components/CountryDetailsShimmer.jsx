import React from 'react'
import './countryDetailsShimmer.css';
import './ShimmerHome.css';
import "../style.css";
import "../country.css";
export default function CountryDetailsShimmer() {
  return (
    // <div className='country-details-container '>
    //     <div className='shimmerBackDiv'>
    //   <span className="back-button shimmerBack"></span>
    //   <span className="back-button shimmerBack"></span>
    //   </div>

    // </div>
     <main>
          <div className="country-details-container">
            <span  className="back-button shimmerBack" >
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <span>  </span>
            <span  className="back-button home shimmerBack" 
            >
              Back to Home
            </span>
            
    
    
             <div className="country-details">
              {/* <img src={countryData.flag} alt="" /> */}
              <div className='flagShimmer'></div>
              <div className="details-text-container">
                <h1 className="h1Shimmer">Pakistan</h1>
                <div className="details-text">
                  <p>
                    <b className='native-name-shimmer'>Native Name: </b>
                    <span className="native-name native-name-shimmer">Pakistan</span>
                  </p>
                  <p>
                    <b className='population-shimmer'> Population: </b>
                    <span className="population population-shimmer">countryData.population</span>
                  </p>
                  <p>
                    <b className='subregion-shimmer'>subRegion: </b>
                    <span className="subregion subregion-shimmer">countryData.subregion</span>
                  </p>
                  
                  <p>
                    <b className='capital-shimmer'>Capital: </b>
                    <span className="capital capital-shimmer">countryData.capital</span>
                  </p>
                  <p>
                    <b className='top-level-domain-shimmer'>Top Level Domain: </b>
                    <span className="top-level-domain top-level-domain-shimmer">countryData.tld</span>
                  </p>
                  <p>
                    <b className='currencies-shimmer'>Currency: </b>
                  <span className="currencies currencies-shimmer">countryData.currency</span>
                  </p>
                  <p>
                    <b className='languages-shimmer'>Languages: </b>
                    <span className="languages languages-shimmer">countryData.languages</span>
                  </p>
                </div>
    
                <div className="border-countries">
                  
                  <b className='border-countries-simmer'>Border Countries: </b>&nbsp;
                  <span className='border-countries-simmer'>India china afghanistan iran flaana dhimakaana</span>
                
                </div> 
                
              </div>
            </div> 
          </div>
        </main>
  )
}
