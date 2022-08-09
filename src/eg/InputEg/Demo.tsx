import React from 'react';
import { Input, InputIcon } from '../../lib';
import { Tip, Validate } from '../../lib/Input/Input';
import UserIcon from '../../lib/icons/user.svg';
import PassIcon from '../../lib/icons/password.svg';

export const Demo: React.FC = () => {
  const validate: Validate[] = [
    {
      pattern: /^\w+$/g,
      message: '4-10位数字'
    }
  ];
  const tips: Tip[] = [
    {
      id: 1,
      message: 'xxx'
    },
    {
      id: 2,
      message: 'yyy'
    },
    {
      id: 2,
      message: 'zzz'
    }
  ];
  const callback = (value: string) => {
    console.log(value);
  };
  return (
    <div className="Eg">
      <div style={{ height: '60px', width: '250px' }}>
        <Input placeholder="用户名" rules={validate} callback={callback}>
          <InputIcon position="left">
            <UserIcon width="1em" height="1em" />
          </InputIcon>
        </Input>
      </div>
      <div style={{ height: '60px', width: '250px' }}>
        <Input placeholder="用户名" rules={validate} allowClear>
          <InputIcon position="left">
            <UserIcon width="1em" height="1em" />
          </InputIcon>
        </Input>
      </div>
      <div style={{ height: '60px', width: '250px' }}>
        <Input type="password" placeholder="密码" allowClear>
          <InputIcon position="left">
            <PassIcon width="1em" height="1em" />
          </InputIcon>
        </Input>
      </div>
      <div style={{ height: '60px', width: '250px' }}>
        <Input allowClear tips={tips} />
      </div>
    </div>
  );
};
