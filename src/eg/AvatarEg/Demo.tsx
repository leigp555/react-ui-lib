import React from 'react';
import { Avatar } from '../../lib';
import UserIcon from '../../lib/icons/user.svg';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <div className="showEg" style={{ gap: '50px' }}>
        <Avatar size={20}>
          <UserIcon width="5em" height="5em" />
        </Avatar>
        <Avatar src="https://joeschmoe.io/api/v1/random" size={40} />
        <Avatar size={30}>
          <UserIcon width="2em" height="2em" />
        </Avatar>
        <Avatar size={60} bgc="#1890ff">
          <UserIcon width="2em" height="2em" />
        </Avatar>
        <Avatar size={50} bgc="inherit">
          <UserIcon width="2em" height="2em" />
        </Avatar>
      </div>
    </div>
  );
};
