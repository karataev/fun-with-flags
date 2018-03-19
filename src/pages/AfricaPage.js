import React from 'react';

import {africaCountries} from "../data/countries";
import CountryList from "../components/CountryList";

export default class AfricaPage extends React.Component {

  render() {
    return (
      <div>
        <h3>Африка. {africaCountries.length}</h3>
        <CountryList countries={africaCountries}/>
      </div>

    )
  }
}
