import React from 'react';
import { Tree } from '../../lib';
import { TypeTree } from '../../lib/Tree/Tree';

const treeData: TypeTree[] = [
  {
    title: 'Parent 1',
    key: '1-0',
    children: [
      {
        title: 'Parent 1-0',
        key: '1-0-0',
        children: [
          {
            title: 'leaf',
            key: '1-0-0-0'
          },
          {
            title: 'leaf',
            key: '1-0-0-1',
            children: [
              {
                title: 'leaf',
                key: '1-0-0-1-0'
              },
              {
                title: <span>支持图标</span>,
                key: '1-0-0-1-1',
                children: [
                  {
                    title: '商品价格',
                    key: '1-0-0-0-1-0'
                  },
                  {
                    title: '商品详情',
                    key: '1-0-0-0-1-1'
                  },
                  {
                    title: (
                      <a style={{ color: 'red' }} href="/#">
                        商品链接
                      </a>
                    ),
                    key: '1-0-0-1-1-2'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }]
      }
    ]
  },
  {
    title: 'Parent 2',
    key: '2-0',
    children: [
      {
        title: 'Parent 2-0',
        key: '2-0-0',
        children: [
          {
            title: 'leaf',
            key: '2-0-0-0'
          },
          {
            title: 'leaf',
            key: '0-0-0-1'
          }
        ]
      },
      {
        title: 'Parent 2-1',
        key: '2-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }]
      }
    ]
  }
];

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <div className="showEg">
        <Tree data={treeData} />
      </div>
    </div>
  );
};
