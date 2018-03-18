import React from 'react';
import allCountries from 'world-countries/countries';

import CountryList from "../CountryList";

const countries = allCountries.filter(country => country.region === 'Asia');

export default class AsiaPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Азия. {countries.length}</h3>
        <CountryList countries={countries}/>
      </div>

    )
  }
}
