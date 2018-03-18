import React from 'react';
import allCountries from 'world-countries/countries';

import CountryList from "../CountryList";

const europeCountries = allCountries.filter(country => country.region === 'Europe');

export default class EuropePage extends React.Component {

  render() {
    return (
      <div>
        <h3>Европа. {europeCountries.length}</h3>
        <CountryList countries={europeCountries}/>
      </div>

    )
  }
}
