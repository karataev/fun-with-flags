import React from 'react';

import {allCountries} from "../data/countries";
import CountryCard from "../CountryCard";

const g20Codes = 'aus arg bra gbr deu ind idn ita can chn mex rus sau usa tur fra kor zaf jpn eun'.split(' ');
const countries = allCountries.filter(country => {
  return g20Codes.indexOf(country.code) > -1;
});

export default class G20Page extends React.Component {

  render() {
    return (
      <div>
        <h3>Большая двадцатка</h3>
        {countries.map((country, i) => (
          <CountryCard
            key={i}
            country={country}
          />
        ))}
      </div>
    )
  }
}
