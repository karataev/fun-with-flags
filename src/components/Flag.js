import React from 'react';
import PropTypes from 'prop-types';

import flags from "../data/flags";

export default class Flag extends React.Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };

  static defaultProps = {
    width: 100,
  };

  render() {
    const {code, width} = this.props;

    return (
      <img src={flags[`flag_${code}`]} width={width} alt={code} />
    )
  }
}
