import React from 'react';
import styled from 'styled-components';
import Skeleton from '../lib/Skeleton/Skeleton';
import SkeletonItem from '../lib/Skeleton/SkeletonItem';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  gap: 100px;
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <Skeleton>
        <SkeletonItem height={60} span={50} offset={20} />
        <SkeletonItem span={50} offset={10} />
        <SkeletonItem span={50} offset={10} />
        <SkeletonItem span={50} offset={10} />
      </Skeleton>
      <Skeleton>
        <SkeletonItem span={20} offset={0} />
        <SkeletonItem span={80} offset={0} />
        <SkeletonItem span={60} offset={0} />
        <SkeletonItem span={100} offset={0} />
      </Skeleton>
    </Wrap>
  );
};

export default Home;
