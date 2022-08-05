import React, { ReactNode, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from '../../lib';
import QQIcon from '../../static/qq.svg';
import SunIcon from '../../static/sunny.svg';
import RainIcon from '../../static/rain.svg';
import SnowIcon from '../../static/snow.svg';

export const Demo: React.FC = () => {
  const [data, setData] = useState<{ content: string; icon: ReactNode }[]>([
    { content: 'Home', icon: <QQIcon fill="#008dff" width="1em" height="1em" /> },
    { content: 'Application Center', icon: <SunIcon fill="#008dff" width="1em" height="1em" /> },
    { content: 'Application List', icon: <RainIcon fill="#008dff" width="1em" height="1em" /> },
    { content: 'Empty', icon: '' }
  ]);
  return (
    <div className="Eg">
      <div>
        <Button
          onClick={() => {
            setData((state) => [
              ...state,
              { content: 'Add', icon: <SnowIcon fill="#008dff" width="1em" height="1em" /> }
            ]);
          }}
        >
          添加
        </Button>
        <Breadcrumb
          separator="/"
          data={data}
          renderItem={(item) => (
            <BreadcrumbItem>
              {item.icon}
              <span>{item.content}</span>
            </BreadcrumbItem>
          )}
        />
        <Breadcrumb
          separator="~"
          data={data}
          renderItem={(item) => (
            <BreadcrumbItem>
              {item.icon}
              <span>{item.content}</span>
            </BreadcrumbItem>
          )}
        />
      </div>
    </div>
  );
};
