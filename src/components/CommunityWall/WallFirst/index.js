import React from 'react';
import { WallCards } from '../WallCards';
import TwitterOutlined from '@ant-design/icons/TwitterOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import times from 'lodash/times'
import './First.css';
import { Trans as T } from 'react-i18next';
import { useResize } from '../../../utils/helpers';

export const WallFirst = () => {
  const { isMobile } = useResize();
  return (
    <div className="communityWall_first_container">
      <div className="communityWall_sticky_container">
        <div className="communityWall_first_title">
          <h1 className="main_title_h1">
            <T>communityWallPage.first.title.0</T>
          </h1>
          <span>
            <T>communityWallPage.first.title.1</T>
          </span>
          <span className="communityWall_first_animation">
            <T>communityWallPage.first.title.2</T>
          </span>
        </div>
        <div className="communityWall_first_btngroup">
          <a className="communityWall_first_btn" href="https://twitter.com/compose/tweet?hashtags=PlasBit">
            { isMobile
              ? <T>communityWallPage.first.text.1</T> : <T>communityWallPage.first.text.0</T> }
            <TwitterOutlined />
          </a>
        </div>
      </div>
      <div className="communityWall_imggroup_container">
        <div className="communityWall_first_imggroup">
          {
            times(20, (i) => (
              <WallCards key={i} datas={{ image: i + 1, icon: <UserOutlined />, email: '@PlasBit' }} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
