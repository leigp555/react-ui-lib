import React from 'react';
import styled from 'styled-components';
import Avatar from '../lib/Avatar/Avatar';
import User from '../lib/icons/user.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 350px;
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <Avatar size={40}>
        <User width="5em" height="5em" />
      </Avatar>
      <Avatar src="https://joeschmoe.io/api/v1/random" size={64} />
      <Avatar size={100}>
        <User width="2em" height="2em" />
      </Avatar>
    </Wrap>
  );
};

export default Home;
