import React from 'react';
import allCountries from 'world-countries/countries';
import flags from '../data/flags';

export default class AllCountriesPage extends React.Component {

  render() {

    return (
      <div>
        all countries
        {allCountries.map((country, i) => (
          <div key={i}>
            {i + 1}. {country.translations.rus.common}, {country.cca2}, {country.region}
            <img src={flags[`flag_${country.cca2}`]} width={100} alt=""/>
          </div>
        ))}
      </div>
    )
  }
}
