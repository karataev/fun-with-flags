import React from 'react';

import {europeCountries} from '../data/countries';
import CountryList from "../CountryList";

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
