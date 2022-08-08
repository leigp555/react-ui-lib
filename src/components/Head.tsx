import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../lib/Layout/Header';
import Row from '../lib/Grid/Row';
import Col from '../lib/Grid/Col';
import Button from '../lib/Button/Button';
import LogoIcon from '../static/logo.svg';
import GithubIcon from '../static/github.svg';

const Logo = styled.span`
  border-radius: 50%;
  background-color: #ffffff;
  width: 3em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavLinkP = styled(NavLink)`
  border-top: 2px solid rgba(255, 255, 255, 0.9);
  height: 50px;
  display: flex;
  align-items: center;
  transition: all 250ms;
  font-weight: 700;
  &.active {
    color: #1890ff;
    border-top: 2px solid #1890ff;
  }
  &:hover {
    color: #1890ff;
    border-top: 2px solid #1890ff;
  }
`;

const Head: React.FC = () => {
  return (
    <Header
      bgc="#fff"
      style={{
        boxShadow: '0 0px 5px 2px rgba(0,0,0,.1)',
        borderBottom: '1px solid rgba(100,100,100,0.2)'
      }}
    >
      <Row gap={0} justify="start" height={50}>
        <Col span={15} offset={4} justify="start" color="red">
          <Logo>
            <LogoIcon width="3em" height="3em" />
          </Logo>
        </Col>
        <Col span={100} justify="space-between" color="white">
          <div
            style={{
              width: '100%',
              display: 'flex',
              gap: '5vw',
              justifyContent: 'start',
              alignItems: 'center',
              color: 'black',
              borderTop: '2px solid white'
            }}
          >
            <NavLinkP to="/docs">文档</NavLinkP>
            <NavLinkP to="/components">组件</NavLinkP>
            <NavLinkP to="/about">关于</NavLinkP>
          </div>
        </Col>
        <Col span={10} justify="center">
          <Button type="link">
            <GithubIcon width="1.5em" height="1.5em" />
          </Button>
        </Col>
      </Row>
    </Header>
  );
};
export default Head;
