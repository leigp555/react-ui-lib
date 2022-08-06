import React from 'react';
import { Card } from '../../lib';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <div>
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
      <div>
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
      <div>
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  );
};
