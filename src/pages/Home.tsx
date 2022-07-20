import React from 'react';
import styled from 'styled-components';
import Input, { Validate } from '../lib/Input/Input';
import InputIcon from '../lib/Input/InputIcon';
import Row from '../lib/Grid/Row';
import Col from '../lib/Grid/Col';
import Password from '../lib/icons/password.svg';
import User from '../lib/icons/user.svg';

const Wrap = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  flex-direction: column;
`;

const Home: React.FC = () => {
  const validate: Validate[] = [
    {
      pattern: /^\w+$/g,
      message: '4-10位数字',
      mode: 'onblur'
    }
  ];
  const callback = (value: string) => {
    console.log(value);
  };
  return (
    <Wrap>
      <Row height={30}>
        <Col span={40} offset={20}>
          <Input placeholder="用户名" rules={validate} callback={callback}>
            <InputIcon position="left">
              <User width="1em" height="1em" />
            </InputIcon>
          </Input>
        </Col>
      </Row>
      <Row height={30}>
        <Col span={40} offset={20}>
          <Input placeholder="用户名" rules={validate} allowClear>
            <InputIcon position="left">
              <User width="1em" height="1em" />
            </InputIcon>
          </Input>
        </Col>
      </Row>
      <Row height={30}>
        <Col span={40} offset={20}>
          <Input type="password" placeholder="密码" allowClear rules={validate}>
            <InputIcon position="left">
              <Password width="1em" height="1em" />
            </InputIcon>
          </Input>
        </Col>
      </Row>
      <Row height={30}>
        <Col span={40} offset={20}>
          <Input allowClear />
        </Col>
      </Row>
    </Wrap>
  );
};

export default Home;
