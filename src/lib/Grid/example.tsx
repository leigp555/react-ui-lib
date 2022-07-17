import React from 'react';
import styled from 'styled-components';
import Col from './Col';
import Row from './Row';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <Row>
        <Col style={{ backgroundColor: 'red' }} />
      </Row>
      <Row>
        <Col span={60} style={{ backgroundColor: 'red' }} />
      </Row>
      <Row gap={5}>
        <Col span={50} style={{ backgroundColor: 'red' }} />
        <Col span={15} style={{ backgroundColor: 'red' }} />
        <Col span={15} style={{ backgroundColor: 'red' }} />
        <Col span={15} style={{ backgroundColor: 'red' }} />
      </Row>
      <Row justify="end">
        <Col span={5} style={{ backgroundColor: 'red' }} />
        <Col span={5} offset={1} style={{ backgroundColor: 'blue' }} />
        <Col span={5} style={{ backgroundColor: 'blue' }} />
        <Col span={50} style={{ backgroundColor: 'blue' }} />
      </Row>
      <Row aline="center">
        <Col span={25} offset={1} style={{ backgroundColor: 'red' }} />
        <Col span={15} offset={1} style={{ backgroundColor: 'red', height: '100px' }} />
      </Row>
      <Row gap={20} justify="space-between">
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
        <Col span={20} style={{ backgroundColor: 'red' }} />
      </Row>
    </Wrap>
  );
};

export default Home;
