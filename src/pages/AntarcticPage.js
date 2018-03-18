import React from 'react';
import allCountries from 'world-countries/countries';

import CountryList from "../CountryList";

const countries = allCountries.filter(country => country.region === 'Antarctic');

export default class AntarcticPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Антарктика. {countries.length}</h3>
        <CountryList countries={countries}/>
      </div>

    )
  }
}
