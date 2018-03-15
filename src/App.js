import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import G20Page from './pages/G20Page';
import EuropePage from "./pages/EuropePage";

const Root = styled.div`
padding: 10px;
`;

class App extends Component {

  render() {

    return (
      <Router>
        <Root>
          <ul>
            <li><Link to="g20">Большая двадцатка</Link></li>
            <li><Link to="europe">Европейские страны</Link></li>
          </ul>
          <Route path="/g20" component={G20Page} />
          <Route path="/europe" component={EuropePage} />
        </Root>
      </Router>
    );
  }
}

export default App;
