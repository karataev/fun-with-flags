import React from 'react';

import {asiaCountries} from "../data/countries";
import CountryList from "../components/CountryList";

export default class AsiaPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Азия. {asiaCountries.length}</h3>
        <CountryList countries={asiaCountries}/>
      </div>

    )
  }
}
