import React from 'react';

import {europeCountries} from "../data/countries";
import CountryQuizCard from "./CountryQuizCard";
import logic from './quizLogic';


export default class EuropaQuizPage extends React.Component {

  constructor(props) {
    super(props);

    logic.start(europeCountries);

    this.state = {
      currentCountry: logic.getCurrentCountry(),
      countries: logic.getCountries(),
    }
  }

  onCountrySelect = country => {
    logic.select(country);

    this.setState({
      currentCountry: logic.getCurrentCountry(),
    })
  };

  render() {
    const {currentCountry, countries} = this.state;

    return (
      <div>
        <h3>{currentCountry && currentCountry.name}</h3>
        <h3>{!currentCountry && 'Победа'}</h3>
        <div>
          {countries.map(country => (
            <CountryQuizCard
              key={country.code}
              country={country}
              onSelect={this.onCountrySelect}
            />
          ))}
        </div>
      </div>
    )
  }
}
