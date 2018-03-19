import React from 'react';
import PropTypes from 'prop-types';

import {Card} from "../styleUtils";
import Flag from "../components/Flag";

const Root = Card.extend`
cursor: ${props => props.country.done ? 'default' : 'pointer'};
background: ${props => props.country.done ? 'green' : '#eee'}
`;

export default class CountryQuizCard extends React.Component {

  static propTypes = {
    country: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  onSelect = () => {
    if (this.props.country.done) return;

    this.props.onSelect(this.props.country);
  };

  render() {
    const {country} = this.props;

    return (
      <Root onClick={this.onSelect} {...this.props}>
        <Flag code={country.code} />
        <div>
          {country.done ? country.name : '?'}
        </div>
      </Root>
    )
  }
}
