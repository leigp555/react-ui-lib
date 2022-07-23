import React from 'react';
import styled from 'styled-components';
import Alert from '../lib/Alert/Alert';
import SuccessIcon from '../lib/icons/success.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Home: React.FC = () => {
  return (
    <Wrap>
      <Alert type="success">
        <span>Success Text</span>
      </Alert>
      <Alert type="info">
        <span>Info Text</span>
      </Alert>
      <Alert type="warning">
        <span>Warning Text</span>
      </Alert>
      <Alert type="error">
        <span>Error Text</span>
      </Alert>
      <Alert type="error">
        <span>Success Text</span>
      </Alert>
      <Alert defineIcon={<SuccessIcon width="1.5em" height="1.5em" />}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem blanditiis consequuntur
          corporis exercitationem ipsam, nihil nobis optio perspiciatis quas quibusdam repellendus,
          sequi voluptate! Deleniti fuga pariatur qui ratione voluptatibus!
        </span>
      </Alert>
      <Alert type="loading">
        <span>Success Text</span>
      </Alert>
    </Wrap>
  );
};

export default Home;
