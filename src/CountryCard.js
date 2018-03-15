import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags';
import styled from 'styled-components';

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
        <Flag code={country.code} width="128" />
        <div>{country.title}</div>
      </Root>
    )
  }
}
