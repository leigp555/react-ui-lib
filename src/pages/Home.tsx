import React from 'react';
import styled from 'styled-components';
import Layout from '../lib/Layout/Layout';
import Header from '../lib/Layout/Header';
import Content from '../lib/Layout/Content';
import Footer from '../lib/Layout/Footer';
import Row from '../lib/Grid/Row';
import Col from '../lib/Grid/Col';
import Logo from '../static/icons/qq.svg';
import GitHub from '../static/icons/github.svg';
import Button from '../lib/Button/Button';

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
        <Header style={{ height: '50px', backgroundColor: '#02101f' }}>
          <Row gap={20} justify="start" style={{ height: '40px' }}>
            <Col span={5} offset={2} justify="start">
              <Logo fill="orange" width="1.5em" height="1.5em" />
            </Col>
            <Col span={20} justify="space-between" color="white">
              <a href="/">导航一</a>
              <a href="/">导航二</a>
              <a href="/">导航三</a>
              <a href="/">导航四</a>
            </Col>
            <Col span={10} offset="auto" justify="end">
              <Button type="link">
                <GitHub fill="yellow" width="1.5em" height="1.5em" />
              </Button>
            </Col>
          </Row>
        </Header>
      </Layout>
      <Layout>
        <Header style={{ backgroundColor: '#02101f' }}>
          <Row gap={0} justify="space-between" style={{ height: '40px' }}>
            <Col span={10} offset={2} justify="start">
              <Logo fill="orange" width="1.5em" height="1.5em" />
            </Col>
            <Col span={30} justify="space-between" color="white">
              <a href="/">导航一</a>
              <a href="/">导航二</a>
              <a href="/">导航三</a>
              <a href="/">导航四</a>
            </Col>
            <Col span={10} justify="end">
              <Button type="link">
                <GitHub fill="yellow" width="1.5em" height="1.5em" />
              </Button>
            </Col>
          </Row>
        </Header>
        <Content>
          <Row justify="center">body</Row>
        </Content>
        <Footer>xxx</Footer>
      </Layout>
    </Wrap>
  );
};

export default Home;
