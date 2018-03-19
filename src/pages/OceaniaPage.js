import React from 'react';

import CountryList from "../CountryList";
import {oceaniaCountries} from "../data/countries";

export default class OceaniaPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Океания. {oceaniaCountries.length}</h3>
        <CountryList countries={oceaniaCountries}/>
      </div>

    )
  }
}
