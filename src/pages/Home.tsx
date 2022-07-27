import React from 'react';
import styled from 'styled-components';
import Tree, { TypeTree } from '../lib/Tree/Tree';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const treeData: TypeTree[] = [
  {
    title: 'Parent 1',
    key: '0-0',
    children: [
      {
        title: 'Parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0'
          },
          {
            title: 'leaf',
            key: '0-0-0-1'
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

const Home: React.FC = () => {
  return (
    <Wrap>
      <Tree data={treeData} />
    </Wrap>
  );
};

export default Home;
