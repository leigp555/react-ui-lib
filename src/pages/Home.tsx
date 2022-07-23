import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../lib/Button/Button';
import Drawer from '../lib/Drawer/Drawer';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Home: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    console.log('点击了');
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Wrap>
      <div>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer title="Basic Drawer" position="right" visible={visible} onClose={onClose}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </Wrap>
  );
};

export default Home;
