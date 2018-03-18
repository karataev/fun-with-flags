import React from 'react';
import allCountries from 'world-countries/countries';

import CountryList from "../CountryList";

const countries = allCountries.filter(country => country.region === 'Americas');

export default class AmericaPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Америка. {countries.length}</h3>
        <CountryList countries={countries}/>
      </div>

    )
  }
}
