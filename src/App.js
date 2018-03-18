import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import EuropePage from "./pages/EuropePage";
import AllCountriesPage from "./pages/AllCountriesPage";

const Root = styled.div`
padding: 10px;
`;

class App extends Component {

  render() {

    return (
      <Router>
        <Root>
          <ul>
            <li><Link to="all-countries">Все страны</Link></li>
            <li><Link to="europe">Европейские страны</Link></li>
          </ul>
          <Route path="/all-countries" component={AllCountriesPage} />
          <Route path="/europe" component={EuropePage} />
        </Root>
      </Router>
    );
  }
}

export default App;
