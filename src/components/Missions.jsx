import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((store) => store.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) { dispatch(getMissions()); }
  }, [dispatch]);
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => {
          const {
            missionId, missionName, missionDescription, missionStatus,
          } = mission;
          return (
            <Mission
              key={missionId}
              {...{
                missionId, missionName, missionDescription, missionStatus,
              }}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default Missions;
