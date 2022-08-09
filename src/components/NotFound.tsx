import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from '../lib';

const NotFound: React.FC = () => {
  const router = useNavigate();
  return (
    <div className="not-found">
      <Result gap={20} status="404" title="请求的资源不存在" subTitle="请检查网络，网址是否正确">
        <Button
          type="primary"
          key="console"
          onClick={() => {
            router(-1);
          }}
        >
          返回
        </Button>
      </Result>
    </div>
  );
};

export default NotFound;
