import React from 'react';
import allCountries from 'world-countries/countries';

import CountryList from "../CountryList";

const countries = allCountries.filter(country => country.region === 'Oceania');

export default class OceaniaPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Океания. {countries.length}</h3>
        <CountryList countries={countries}/>
      </div>

    )
  }
}
