import React from 'react';
import { getImg } from '../../../utils/helpers';
import './style.css';

export const WallCards = (props) => {
  const { image, email, icon } = props.datas;
  return (
    <>
      <a href='https://twitter.com/plasbit' className="communityWall_first_imgbtn">
        <div className="communityWall_card_imggroup">
          <img className="communityWall_card_img" alt="community_img" src={getImg(`trading/${image}.jpeg`)} />
          <div className="communityWall_shadow_panel">
            <div className="communityWall_shadow_content">
              {icon}
              <span style={{ marginLeft: 10 }}>{email}</span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
