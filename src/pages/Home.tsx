import React from 'react';
import styled from 'styled-components';
import PopConfirm from '../lib/Popconfirm/Popconfirm';
import Button from '../lib/Button/Button';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 50px;
`;

const Home: React.FC = () => {
  const confirm = () => {
    console.log('confirm');
  };

  const cancel = () => {
    console.log('cancel');
  };

  return (
    <Wrap>
      <PopConfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button type="link">delete</Button>
      </PopConfirm>
    </Wrap>
  );
};

export default Home;
