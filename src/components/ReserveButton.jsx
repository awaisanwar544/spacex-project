import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';

const Wrapper = styled.div`
  button {
    background-color: #1c2cdb;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 0.5em;
  }
`;

const ReserveButton = ({ id }) => {
  const dispath = useDispatch();
  return (

    <Wrapper>
      <button
        id={id}
        onClick={() => {
          dispath(reserveRocket(id));
        }}
        type="button"
      >
        Reserve Rocket

      </button>
    </Wrapper>
  );
};

ReserveButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ReserveButton;
