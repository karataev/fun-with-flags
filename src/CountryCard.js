import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import flags from "./data/flags";

const Root = styled.div`
border: 1px solid #666;
padding: 10px;
text-align: center;
display: inline-block;
margin-right: 10px;
background-color: #eee;
`;

export default class CountryCard extends React.Component {

  static propTypes = {
    country: PropTypes.object.isRequired,
  };

  render() {
    const {country} = this.props;

    return (
      <Root>
        <img src={flags[`flag_${country.cca2}`]} width={100} alt=""/>
        <div>{country.name.common}</div>
      </Root>
    )
  }
}
