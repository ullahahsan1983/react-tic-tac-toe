import React from 'react';
import ProfileCard from './shared/ProfileCard';
import Avatar from './Avatar.png';

const MyProfile = () => {
  return (
    <ProfileCard image={Avatar}>
      <div className="social-links link-group">
        <a as="button" href="#"><span className="fa fa-facebook"></span></a>
        <a as="button" href="#"><span className="fa fa-twitter"></span></a>
        <a as="button" href="https://www.linkedin.com/in/ahsan-ullah-665aa7215"><span className="fa fa-linkedin"></span></a>
      </div>
      <div className="contact-links link-group">
        <span><span className="fa fa-phone"></span>  <span className="contact-info">+8801973906968</span></span>
        <span><span className="fa fa-envelope"></span>  <span className="contact-info">ullahahsan1983@gmail.com</span></span>
      </div>
      <div className="profile-info">
        <p>Software Engineer</p>
      </div>
      <div className="profile-title">
        Ahsan Ullah
      </div>        
    </ProfileCard>
  );
}

export default MyProfile;

