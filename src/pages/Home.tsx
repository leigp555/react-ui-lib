import React, { useState } from 'react';
import styled from 'styled-components';
import Input, { Validate } from '../lib/Input/Input';
import InputIcon from '../lib/Input/InputIcon';
import Password from '../lib/icons/password.svg';
import User from '../lib/icons/user.svg';
import Form from '../lib/Form/Form';
import FormItem from '../lib/Form/FormItem';
import Button from '../lib/Button/Button';

const Wrap = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  flex-direction: column;
  width: 350px;
`;

const Home: React.FC = () => {
  const validate: Validate[] = [
    {
      pattern: /^\w+$/g,
      message: '4-10位数字'
    }
  ];
  const [user, setUser] = useState<{ username: string; password: string }>({
    password: '',
    username: ''
  });
  const username = (value: string) => {
    setUser((state) => ({ ...state, username: value }));
  };
  const password = (value: string) => {
    setUser((state) => ({ ...state, password: value }));
  };
  return (
    <Wrap>
      <Form>
        <FormItem>
          <Input placeholder="用户名" rules={validate} allowClear callback={username}>
            <InputIcon position="left">
              <User width="1em" height="1em" />
            </InputIcon>
          </Input>
        </FormItem>
        <FormItem>
          <Input type="password" placeholder="密码" allowClear callback={password}>
            <InputIcon position="left">
              <Password width="1em" height="1em" />
            </InputIcon>
          </Input>
        </FormItem>
        <FormItem>
          <Button style={{ width: '100%' }} onClick={() => console.log(user)}>
            提交
          </Button>
        </FormItem>
      </Form>
    </Wrap>
  );
};

export default Home;
