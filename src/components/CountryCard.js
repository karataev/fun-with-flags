import React from 'react';
import PropTypes from 'prop-types';

import {Card} from "../styleUtils";
import Flag from "./Flag";

export default class CountryCard extends React.Component {

  static propTypes = {
    country: PropTypes.object.isRequired,
  };

  render() {
    const {country} = this.props;

    return (
      <Card>
        <Flag code={country.code} />
        <div>{country.name} {country.code}</div>
      </Card>
    )
  }
}
