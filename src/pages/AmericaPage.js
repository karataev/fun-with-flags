import React from 'react';

import {americaCountries} from "../data/countries";
import CountryList from "../CountryList";

export default class AmericaPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Америка. {americaCountries.length}</h3>
        <CountryList countries={americaCountries}/>
      </div>

    )
  }
}
