// ProfilePage.js
import React from 'react';
import './profile.css';
import Footer from '../footer/Footer';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-image"
        />
        <h2>Username</h2>
      </div>
      <div className="profile-details">
        <p>Email: user@example.com</p>
        <p>Bio: A passionate sports enthusiast</p>
      </div>
      <div className="profile-activity">
        <h3>Activity History</h3>
        <ul>
          <li>Joined SportEka on January 1, 2022</li>
          <li>Participated in the Football League</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
