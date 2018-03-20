import React from 'react';
import PropTypes from 'prop-types';

import logic from './quizLogic';
import {europeCountries} from "../data/countries";

export default class QuizMenu extends React.Component {

  static propTypes = {
    onStart: PropTypes.func.isRequired,
  };

  state = {
    flagsNum: 10,
  };

  onFlagsNumChange = e => {
    this.setState({
      flagsNum: e.target.value,
    })
  };

  onStart = () => {
    logic.setMaxLimit(this.state.flagsNum);
    this.props.onStart();
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <h3>Страны Европы</h3>
            <div>Количество флагов: {this.state.flagsNum}</div>
            <input
              type="range"
              min={3}
              max={europeCountries.length}
              value={this.state.flagsNum}
              onChange={this.onFlagsNumChange}
            />
          </div>
          <button onClick={this.onStart}>Старт</button>
        </div>
      </div>
    )
  }
}
