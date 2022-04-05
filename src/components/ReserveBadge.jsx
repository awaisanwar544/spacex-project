import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    background-color: green;
    border: none;
    color: white;
    padding: 0.25em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 0.75em;
    border-radius: 0.5em;
    margin-right: 1em;
`;

const ReserveBadge = () => (

  <Wrapper>
    Reserved
  </Wrapper>
);

export default ReserveBadge;
