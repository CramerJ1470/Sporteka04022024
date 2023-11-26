import React from 'react';
// import Country from "./Country";
import {countriesList} from "../assets/countriesList";

function Countries({countries}) {

console.log(countries);


  return (
    <div className= "Countries">
        <h1>Countries List</h1>
      <p id="countriesList">countries</p>
      
      <p>{countriesList}</p>
      {/* {countries.map(country => {
				return (<p>{country}</p>);})}  */}
    </div>
  )
}

export default Countries
