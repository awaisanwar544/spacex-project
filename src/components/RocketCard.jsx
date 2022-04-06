import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ReserveButton from './ReserveButton';
import LeaveButton from './LeaveButton';
import ReserveBadge from './ReserveBadge';

const Wrapper = styled.div`
  display: flex;
  column-gap: 1em;
  padding: 1em 2em;

  img {
    width: 100%;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }
`;

const ImgDiv = styled.div`
  flex-grow: 1;
  max-width: 15em;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 3;
`;

const RocketCard = (props) => {
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;
  return (
    <Wrapper>
      <ImgDiv>
        <img src={flickrImages} alt="" />
      </ImgDiv>
      <ContentDiv>
        <h3>{rocketName}</h3>
        <p>
          <span>
            {(() => {
              if (reserved) {
                return <ReserveBadge />;
              }
              return '';
            })()}
          </span>
          {description}
        </p>
        {(() => {
          if (reserved) {
            return <LeaveButton id={id} />;
          }
          return <ReserveButton id={id} />;
        })()}
      </ContentDiv>
    </Wrapper>
  );
};

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketCard;
