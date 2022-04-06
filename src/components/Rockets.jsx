import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import RocketCard from './RocketCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);
  return (
    <div>
      {rockets.map((item) => (
        <RocketCard
          key={item.id}
          id={item.id}
          rocketName={item.rocket_name}
          description={item.description}
          flickrImages={item.flickr_images[0]}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
};

RocketCard.defaultProps = {
  reserved: false,
};

export default Rockets;
