import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeMissionStatus } from '../redux/missions/missions';

const Wrapper = styled.td`
  display: flex;
  column-gap: 1em;
  padding-top: 2em;
  border: none !important;
  
  button {
    background-color: none;
    border: grey 2px solid;
    color: grey;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 0.5em;
  }
  p {
    text-align: center;
  margin: auto;
  padding: 0.1rem;
  background-color: #7a7a7a;
  font-size: 12px;
  color: white;
  width: 10em;
  border-radius: 0.5em;
   }
`;
const MissionFalse = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p>Not a Member</p>
      <button type="button" onClick={() => { dispatch(changeMissionStatus(id)); }}>Join Mission</button>
    </Wrapper>
  );
};
MissionFalse.propTypes = {
  id: PropTypes.string.isRequired,
};
export default MissionFalse;
