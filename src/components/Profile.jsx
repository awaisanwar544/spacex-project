import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  column-gap: 2em;
  padding: 1em 2em;

  div {
    width: 50%;
  }

  table {
    width: 100%;
  }

  td {
    padding: 1em;
  }

  tr {
    outline: 1px solid black;
  }
`;

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const booked = rockets.filter((item) => {
    if (item.reserved === true) {
      return item;
    }
    return '';
  });
  return (
    <Wrapper>
      <div>
        <h2>My Missions</h2>
        <table>
          <tbody>
            {booked.map((item) => (
              <tr key={item.id}>
                <td>{item.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {booked.map((item) => (
              <tr key={item.id}>
                <td>{item.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Profile;
