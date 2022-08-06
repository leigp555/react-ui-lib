import React from 'react';
import { Button, Notification } from '../../lib';
import { openNotification } from '../../lib/Notification/Notification';

export const Demo: React.FC = () => {
  const open = () => {
    openNotification(
      <Notification>
        <p>Notification Title</p>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda cum ex
          explicabo fuga, illo ipsa laudantium libero magni minus nobis nostrum, odio quam quibusdam
          recusandae saepe soluta totam voluptates?
        </div>
      </Notification>,
      3000
    );
  };
  return (
    <div className="Eg">
      <div className="showEg">
        <Button onClick={open}>按钮</Button>
      </div>
    </div>
  );
};
