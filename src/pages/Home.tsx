import React from 'react';
import styled from 'styled-components';
import Input, { Validate } from '../lib/Input/Input';
import InputIcon from '../lib/Input/InputIcon';
import Row from '../lib/Grid/Row';
import Col from '../lib/Grid/Col';
import Password from '../lib/icons/password.svg';
import User from '../lib/icons/user.svg';
import Eyes from '../lib/icons/eye_show.svg';

const Wrap = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  flex-direction: column;
`;

const Home: React.FC = () => {
  const validate: Validate[] = [
    {
      required: true,
      message: '必填',
      mode: 'onChange'
    },
    {
      pattern: /\d/g,
      message: '必须是数字',
      mode: 'onblur'
    }
  ];
  return (
    <Wrap>
      <Row height={30}>
        <Col span={40} offset={20}>
          <Input placeholder="用户名" validate={validate}>
            <InputIcon position="left">
              <User width="1em" height="1em" />
            </InputIcon>
          </Input>
        </Col>
      </Row>
      <Row height={30}>
        <Col span={40} offset={20}>
          <Input type="password" placeholder="密码">
            <InputIcon position="left">
              <Password width="1em" height="1em" />
            </InputIcon>
            <InputIcon position="right">
              <Eyes width="1em" height="1em" />
            </InputIcon>
          </Input>
        </Col>
      </Row>
    </Wrap>
  );
};

export default Home;
