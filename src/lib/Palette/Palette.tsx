import React from 'react';
import styled from 'styled-components';
import ColorGroup from './ColorGroup';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 100%;
`;

const Palette: React.FC = () => {
  return (
    <Wrap>
      <section>
        <ColorGroup
          kind="red"
          title="红色"
          description="是一种激奋的色彩。刺激效果，能使人产生冲动，愤怒，热情，活力的感觉。"
        />
      </section>
      <section>
        <ColorGroup
          kind="orange"
          title="橙色"
          description="也是一种激奋的色彩，具有轻快，欢欣，热烈，温馨，时尚的效果。"
        />
      </section>
      <section>
        <ColorGroup
          kind="yellow"
          title="黄色"
          description="具有快乐，希望，智慧和轻快的个性，它的明度最高。"
        />
      </section>
      <section>
        <ColorGroup
          kind="Yellow_green"
          title="黄绿色"
          description="具有快乐，希望，智慧和轻快的个性，它的明度最高。"
        />
      </section>
      <section>
        <ColorGroup
          kind="green"
          title="绿色"
          description="介于冷暖两中色彩的中间，显得和睦，宁静，健康，安全的感觉。 它和金黄，淡白搭配，可以产生优雅，舒适的气氛。"
        />
      </section>
      <section>
        <ColorGroup
          kind="turquoise"
          title="青绿色"
          description="介于冷暖两中色彩的中间，显得和睦，宁静，健康，安全的感觉。 它和金黄，淡白搭配，可以产生优雅，舒适的气氛。"
        />
      </section>
      <section>
        <ColorGroup
          kind="blue"
          title="蓝色"
          description="是最具凉爽，清新，专业的色彩。它和白色混合，能体现柔顺，淡雅，浪漫的气氛(象天空的色彩:) 白色---具有洁白，明快，纯真，清洁的感受。"
        />
      </section>
      <section>
        <ColorGroup
          kind="Blue_purple"
          title="蓝紫色"
          description="是最具凉爽，清新，专业的色彩。它和白色混合，能体现柔顺，淡雅，浪漫的气氛(象天空的色彩:) 白色---具有洁白，明快，纯真，清洁的感受。"
        />
      </section>
      <section>
        <ColorGroup kind="purple" title="紫色" />
      </section>
      <section>
        <ColorGroup kind="amaranth" title="蓝紫色" />
      </section>
    </Wrap>
  );
};

export default Palette;
