import React from 'react';
import styled from 'styled-components';
import Card from '../lib/Card/Card';

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
        <Card
          cardTitle="Default size card"
          action={
            <a href="/#" style={{ color: 'red' }}>
              More
            </a>
          }
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div className="row" style={{ backgroundColor: '#ccc', padding: '20px' }}>
        <Card
          bordered={false}
          cardTitle="Default size card"
          action={
            <a href="/#" style={{ color: 'red' }}>
              More
            </a>
          }
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div className="row">
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </Wrap>
  );
};

export default Home;
