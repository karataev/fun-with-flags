import React, { Component } from 'react';
import styled from 'styled-components';

import CountryCard from "./CountryCard";
import countries from './data/countries';

const Root = styled.div`
padding: 10px;
`;

class App extends Component {

  render() {

    return (
      <Root>
        <h1>Большая двадцатка</h1>
        {countries.map(country => (
          <CountryCard
            key={country.code}
            country={country}
          />
        ))}
      </Root>
    );
  }
}

export default App;
