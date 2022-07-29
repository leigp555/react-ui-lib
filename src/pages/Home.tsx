import React from 'react';
import styled from 'styled-components';
import Badge from '../lib/Badge/Badge';
import Avatar from '../lib/Avatar/Avatar';
import User from '../lib/icons/user.svg';
import SunIcon from '../static/icons/sunny.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: start;
  align-items: start;
  > .row {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: start;
    align-items: center;
  }
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <div className="row">
        <Badge count={200} overflowCount={99}>
          <div style={{ backgroundColor: '#ccc' }}>
            <Avatar size={32}>
              <User width="5em" height="5em" />
            </Avatar>
          </div>
        </Badge>
        <Badge count={200} overflowCount={10}>
          <div style={{ backgroundColor: '#ccc' }}>
            <Avatar size={32}>
              <User width="5em" height="5em" />
            </Avatar>
          </div>
        </Badge>
        <Badge count={2000} overflowCount={999}>
          <div style={{ backgroundColor: '#ccc' }}>
            <Avatar size={32}>
              <User width="5em" height="5em" />
            </Avatar>
          </div>
        </Badge>
      </div>
      <div className="row">
        <Badge count={<SunIcon width="1.5em" height="1.5em" />}>
          <div style={{ backgroundColor: '#ccc' }}>
            <Avatar size={32}>
              <User width="5em" height="5em" />
            </Avatar>
          </div>
        </Badge>
      </div>
      <div className="row">
        <Badge dot>
          <p style={{ color: '#1890ff' }}>Lorem ipsum dolor sit amet</p>
        </Badge>
      </div>
    </Wrap>
  );
};

export default Home;
