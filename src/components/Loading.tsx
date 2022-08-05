import React, { useEffect } from 'react';
import nprogress from 'nprogress';

nprogress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});

const Loading: React.FC = () => {
  useEffect(() => {
    nprogress.start();
  }, []);
  useEffect(() => () => {
    nprogress.done();
  });
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

export default Loading;
