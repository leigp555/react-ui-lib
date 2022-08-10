// 文档页
import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Content from '../lib/Layout/Content';
import DocAside from '../components/DocAside';
import Loading from '../components/Loading';
import { Button, Drawer } from '../lib';

export const Docs: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Content>
      <div className="menu-button">
        <Button
          onClick={() => {
            showDrawer();
          }}
        >
          菜单
        </Button>
      </div>
      <Drawer title="简介" position="left" visible={visible} onClose={onClose} width={220}>
        <div>
          <DocAside />
        </div>
      </Drawer>
      <div className="ui-aside-eg">
        <DocAside />
      </div>
      <div className="component-show">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Content>
  );
};
