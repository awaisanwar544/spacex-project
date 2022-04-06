import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeMissionStatus } from '../redux/missions/missions';

const Wrapper = styled.div`
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
    margin: auto;
    padding 0.1rem;
    background-color: grey;
    font-size: 12px;
    color: white;
   }
`;
const MissionFalse = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <td><p>Not a Member</p></td>
      <td>
        <button type="button" onClick={() => { dispatch(changeMissionStatus(id)); }}>Join Mission</button>
      </td>
    </Wrapper>
  );
};
MissionFalse.propTypes = {
  id: PropTypes.string.isRequired,
};
export default MissionFalse;
