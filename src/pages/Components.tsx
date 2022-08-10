// 组件页
import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Content from '../lib/Layout/Content';
import ComponentAside from '../components/ComponentAside';
import Loading from '../components/Loading';
import { Button, Drawer } from '../lib';

export const Components: React.FC = () => {
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
      <Drawer title="组件概览" position="left" visible={visible} onClose={onClose} width={220}>
        <div>
          <ComponentAside />
        </div>
      </Drawer>
      <div className="ui-aside-eg">
        <ComponentAside />
      </div>
      <div className="component-show" id="app-component-show">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Content>
  );
};
