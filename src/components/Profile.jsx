import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;

  div {
    width: 50%;
  }
`;

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <Wrapper>
      <div>
        <h2>My Missions</h2>
        <table>
          <tbody>
            {rockets.map((item) => (
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
            {rockets.map((item) => (
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
