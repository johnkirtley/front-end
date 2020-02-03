import React from "react";

import CampaignCard from '../card/campaign-card';

const OrganizationProfile = (props) => {

  const handleClick = e => {
    e.preventDefault();
    props.history.push('/create-campaign');
  }

  return (
    <div className='profile'>
      <div className='user-info'>
        <div className='profile-image'></div>
        <div className='user-info-text'>
        <h2>Caribbean Sea Turtle Project</h2>
        <p>St. George's, Grenada</p>
        <p>Conservation Organization</p>
        </div>
      </div>
      <div className='feed-buttons'>
        <h3><span>Campaigns</span></h3>
        <h3 onClick={handleClick}>Start New Campaign</h3>
      </div>
      <div className='feed'>
        <CampaignCard />
      </div>
    </div>
  );
};

export default OrganizationProfile;
