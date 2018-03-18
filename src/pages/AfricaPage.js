import React from 'react';
import allCountries from 'world-countries/countries';

import CountryList from "../CountryList";

const countries = allCountries.filter(country => country.region === 'Africa');

export default class AfricaPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Африка. {countries.length}</h3>
        <CountryList countries={countries}/>
      </div>

    )
  }
}
