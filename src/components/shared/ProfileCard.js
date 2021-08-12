import React from 'react';
import { Image } from 'react-bootstrap';
import DA from '../default_avatar.png';

const ProfileCard = ({image, children}) => {
  return (
    <>
    <div className="profile-card">
      <div className="profile-card-inner">
        <div className="profile-card-front">
          <Image src={image || DA} alt="Avatar" fluid thumbnail />
        </div>
        <div className="profile-card-back">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfileCard;