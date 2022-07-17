import React from 'react';
import styled from 'styled-components';
import Layout from '../lib/Layout/Layout';
import Header from '../lib/Layout/Header';
import Content from '../lib/Layout/Content';
import Footer from '../lib/Layout/Footer';
import Row from '../lib/Grid/Row';
import Col from '../lib/Grid/Col';

const Wrap = styled.div`
  > div {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <Layout>
        <Header style={{ height: '40px', backgroundColor: '#f3f3f3' }}>
          <Row>
            <Col span={10} offset={2} color="yellow" style={{ backgroundColor: 'orange' }}>
              icon
            </Col>
            <Col
              span={50}
              offset={3}
              gap={10}
              justify="space-around"
              style={{ backgroundColor: 'orange' }}
            >
              <nav>xxx</nav>
              <nav>xxx</nav>
              <nav>xxx</nav>
              <nav>xxx</nav>
            </Col>
          </Row>
        </Header>
        <Content style={{ height: '50px', backgroundColor: '#f3f3f3' }}>Main</Content>
        <Footer style={{ height: '50px', backgroundColor: '#f3f3f3' }}>Footer</Footer>
      </Layout>
    </Wrap>
  );
};

export default Home;
