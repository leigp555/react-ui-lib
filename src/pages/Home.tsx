import React from 'react';
import styled from 'styled-components';
import UploadToServer, { Config } from '../lib/Upload/UploadToServer';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  height: 200px;
`;

const Home: React.FC = () => {
  const config = (): Config => {
    return {
      multiple: true,
      action: 'http://localhost:8000/v1/upload'
    };
  };
  return (
    <Wrap>
      <UploadToServer config={config()} />
    </Wrap>
  );
};

export default Home;
