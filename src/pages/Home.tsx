import React, { useState } from 'react';
import styled from 'styled-components';
import Tag from '../lib/Tag/Tag';
import TagGroup, { Tags } from '../lib/Tag/TagGroup';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: start;
`;

const Home: React.FC = () => {
  const close = (el: HTMLDivElement) => {
    console.log(el);
  };

  const [tags, setTags] = useState<Tags>([
    { id: '1', tagContent: 'purple', color: '#FFFFCC' },
    { id: '2', tagContent: 'magenta', color: 'magenta' },
    { id: '4', tagContent: 'gold', color: 'gold' },
    { id: '5', tagContent: 'gold', color: 'gold' },
    { id: '6', tagContent: 'gold', color: 'gold' },
    { id: '7', tagContent: 'gold', color: 'gold' },
    { id: '8', tagContent: 'gold', color: 'gold' },
    { id: '9', tagContent: 'gold', color: 'gold' },
    { id: '10', tagContent: 'gold', color: 'gold' }
  ]);
  const tagsChange = (tag: Tags) => {
    console.log(tag);
  };
  return (
    <Wrap>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Tag color="#FFFFCC">purple</Tag>
        <Tag color="#FF99FF">purple</Tag>
        <Tag color="#FF0000FF">purple</Tag>
        <Tag color="magentamagenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="black">black</Tag>
        <Tag color="purple">purple</Tag>
        <Tag color="purple" callback={close} closeable>
          purple
        </Tag>
      </div>
      <div>
        <TagGroup tags={tags} setTag={setTags} callback={tagsChange} closeable />
      </div>
      <div>
        <TagGroup tags={tags} setTag={setTags} callback={tagsChange} closeable={false} />
      </div>
    </Wrap>
  );
};

export default Home;
