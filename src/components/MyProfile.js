import React from 'react';
import FlipCard from './shared/FlipCard';
import Profile from './Avatar.png';

const MyProfile = () => {
  return (
    <FlipCard image={Profile}>
      <h1>Ahsan Ullah</h1>
      <p>Software Engineer</p>
      <p>Programming is my passion!</p>
        
      <div className="social-links">
        <a as="button" href="https://www.linkedin.com/in/ahsan-ullah-665aa7215"><span className="fa fa-linkedin"></span></a>
        <a as="button" href="#"><span className="fa fa-facebook"></span></a>
        <a as="button" href="#"><span className="fa fa-twitter"></span></a>
      </div>
    </FlipCard>
  );
}

export default MyProfile;

