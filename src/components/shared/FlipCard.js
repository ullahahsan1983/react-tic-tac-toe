import React from 'react';

const FlipCard = ({image, children}) => {
  return (
    <>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image || "img_avatar.png"} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}

export default FlipCard;

