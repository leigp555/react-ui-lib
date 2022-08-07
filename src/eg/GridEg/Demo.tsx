import React from 'react';
import { Col, Row } from '../../lib';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <Row height={40}>
        <Col justify="center" style={{ backgroundColor: 'orange' }}>
          100%
        </Col>
      </Row>
      <Row height={40}>
        <Col span={30} offset="auto" justify="center" style={{ backgroundColor: 'orange' }}>
          30%
        </Col>
      </Row>
      <Row gap={5} height={40}>
        <Col justify="center" span={50} style={{ backgroundColor: 'orange' }}>
          50%
        </Col>
        <Col span={15} style={{ backgroundColor: 'red' }} />
        <Col span={15} style={{ backgroundColor: 'red' }} />
        <Col span={15} style={{ backgroundColor: 'red' }} />
      </Row>
      <Row justify="end" height={20}>
        <Col span={5} style={{ backgroundColor: 'red' }} />
        <Col span={5} offset={1} style={{ backgroundColor: 'blue' }} />
        <Col span={5} style={{ backgroundColor: 'blue' }} />
        <Col span={50} style={{ backgroundColor: 'blue' }} />
      </Row>
      <Row aline="center" height={120}>
        <Col span={25} offset={1} style={{ backgroundColor: 'red', height: '20px' }} />
        <Col span={15} offset={1} style={{ backgroundColor: 'red', height: '100px' }} />
      </Row>
      <Row gap={20} justify="space-between" height={20}>
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
      </Row>
    </div>
  );
};
