import React from 'react';
import styled from 'styled-components';
import Notification, { openNotification } from '../lib/Notification/Notification';

import Button from '../lib/Button/Button';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Home: React.FC = () => {
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
    <Wrap>
      <div>
        <Button onClick={open}>按钮</Button>
      </div>
    </Wrap>
  );
};

export default Home;
