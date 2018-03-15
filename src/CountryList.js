import React from 'react';
import PropTypes from 'prop-types';

import CountryCard from "./CountryCard";

export default class CountryList extends React.Component {

  static propTypes = {
    countries: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.countries.map((country, i) => (
          <CountryCard
            key={i}
            country={country}
          />
        ))}
      </div>
    )
  }
}
