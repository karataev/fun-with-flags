import React from 'react';

import {
  westEurope,
  eastEurope,
  northEurope,
  southEurope,
} from "../data/countries";
import CountryList from "../CountryList";

export default class EuropePage extends React.Component {

  render() {
    return (
      <div>
        <h3>Европейские страны</h3>
        <h4>Западная Европа</h4>
        <CountryList countries={westEurope}/>
        <h4>Восточная Европа</h4>
        <CountryList countries={eastEurope}/>
        <h4>Северная Европа</h4>
        <CountryList countries={northEurope}/>
        <h4>Южная Европа</h4>
        <CountryList countries={southEurope}/>
      </div>

    )
  }
}
