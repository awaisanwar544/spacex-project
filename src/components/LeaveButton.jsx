import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { cancelReservation } from '../redux/rockets/rockets';

const Wrapper = styled.div`
  button {
    background-color: #fff;
    border: 0.1em solid #9a9a9a;
    color: #9a9a9a;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 0.5em;
  }
`;

const LeaveButton = ({ id }) => {
  const dispatch = useDispatch();
  return (

    <Wrapper>
      <button
        id={id}
        onClick={() => {
          dispatch(cancelReservation(id));
        }}
        type="button"
      >
        Cancel Reservation
      </button>
    </Wrapper>
  );
};

LeaveButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default LeaveButton;
