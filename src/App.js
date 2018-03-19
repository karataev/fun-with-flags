import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import EuropePage from "./pages/EuropePage";
import AllCountriesPage from "./pages/AllCountriesPage";
import AsiaPage from "./pages/AsiaPage";
import AmericaPage from "./pages/AmericaPage";
import AfricaPage from "./pages/AfricaPage";
import OceaniaPage from "./pages/OceaniaPage";
import EuropaQuizPage from "./quiz/EuropaQuizPage";

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
            <li><Link to="europe">Европа</Link></li>
            <li><Link to="asia">Азия</Link></li>
            <li><Link to="america">Америка</Link></li>
            <li><Link to="africa">Африка</Link></li>
            <li><Link to="oceania">Океания</Link></li>
            <li><Link to="europa-quiz">Европа. Тест</Link></li>
          </ul>
          <Route path="/all-countries" component={AllCountriesPage} />
          <Route path="/europe" component={EuropePage} />
          <Route path="/asia" component={AsiaPage} />
          <Route path="/america" component={AmericaPage} />
          <Route path="/africa" component={AfricaPage} />
          <Route path="/oceania" component={OceaniaPage} />
          <Route path="/europa-quiz" component={EuropaQuizPage} />
        </Root>
      </Router>
    );
  }
}

export default App;
