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
        <Header style={{ height: '60px', backgroundColor: '#02101f' }}>
          <Row gap={10} justify="space-between">
            <Col span={4} justify="center">
              <Logo fill="orange" width="1.5em" height="1.5em" />
            </Col>
            <Col span={50} justify="space-around" color="white">
              <a href="/">导航一</a>
              <a href="/">导航二</a>
              <a href="/">导航三</a>
              <a href="/">导航四</a>
            </Col>
            <Col span={4} justify="end">
              <Button type="link">
                <GitHub fill="yellow" width="1.5em" height="1.5em" />
              </Button>
            </Col>
          </Row>
        </Header>
        <Content style={{ height: '50px', backgroundColor: '#f3f3f3' }}>Main</Content>
        <Footer style={{ height: '50px', backgroundColor: '#f3f3f3' }}>Footer</Footer>
      </Layout>

      <Layout>
        <Header style={{ height: '60px', backgroundColor: '#02101f' }}>
          <Row gap={10} justify="start">
            <Col span={5} offset={2} justify="start">
              <Logo fill="orange" width="1.5em" height="1.5em" />
            </Col>
            <Col span={30} justify="space-between" color="white">
              <a href="/">导航一</a>
              <a href="/">导航二</a>
              <a href="/">导航三</a>
              <a href="/">导航四</a>
            </Col>
            <Col span={4} offset="auto" justify="end">
              <Button type="link">
                <GitHub fill="yellow" width="1.5em" height="1.5em" />
              </Button>
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
