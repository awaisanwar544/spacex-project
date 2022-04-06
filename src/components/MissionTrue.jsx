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
  border: red 2px solid;
  color: red;
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
  background-color: blue;
  font-size: 12px;
  color: white;
  width: 10em;
  border-radius: 0.5em;
}
`;

const MissionTrue = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p>Active Member</p>
      <button type="button" onClick={() => { dispatch(changeMissionStatus(id)); }}>Leave Mission</button>
    </Wrapper>
  );
};
MissionTrue.propTypes = {
  id: PropTypes.string.isRequired,
};
export default MissionTrue;
