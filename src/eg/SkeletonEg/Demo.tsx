import React, { useState } from 'react';
import { Button, Skeleton, SkeletonItem } from '../../lib';

export const Demo: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loading2, setLoading2] = useState<boolean>(true);
  const wrapCss: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  };
  return (
    <div className="Eg">
      <div style={wrapCss}>
        <div>
          <Button onClick={() => setLoading(!loading)}>{loading ? '正在加载' : '已加载'}</Button>
        </div>

        <Skeleton loading={loading}>
          <SkeletonItem height={60} span={50} offset={20} />
          <SkeletonItem span={50} offset={10} />
          <SkeletonItem span={50} offset={10} />
          <SkeletonItem span={50} offset={10} />
        </Skeleton>
      </div>
      <div style={wrapCss}>
        <div>
          <Button onClick={() => setLoading2(!loading2)}>{loading2 ? '正在加载' : '已加载'}</Button>
        </div>
        <Skeleton loading={loading2}>
          <SkeletonItem span={20} offset={0} />
          <SkeletonItem span={80} offset={0} />
          <SkeletonItem span={60} offset={0} />
          <SkeletonItem span={100} offset={0} />
        </Skeleton>
      </div>
    </div>
  );
};
