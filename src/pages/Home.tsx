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
        <Header bgc="red">
          <Row gap={0} justify="space-between" height={40}>
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
        <Content bgc="orange" height={200}>
          <Row justify="center" height="200px">
            body
          </Row>
        </Content>
        <Footer bgc="yellow" height={200}>
          <Row justify="center" height={200}>
            footer
          </Row>
        </Footer>
      </Layout>
    </Wrap>
  );
};

export default Home;
