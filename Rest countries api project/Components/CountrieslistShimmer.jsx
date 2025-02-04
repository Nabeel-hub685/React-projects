import React from 'react'
import './ShimmerHome.css';


export default function CountrieslistShimmer() {
  const arr = Array.from({length:250});
  const mapped =arr.map((card, i)=>{
      return <div key={i} class="country-card homeShimmer" ></div>
  })
  console.log(mapped);
  return (
    <div className='countries-container '>
        {/* <div class="country-card homeShimmer" ></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div>
        <div class="country-card homeShimmer"></div> */}

        {
          mapped
        }
      
    </div>
  )
}
