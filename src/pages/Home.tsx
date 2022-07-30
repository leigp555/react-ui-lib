import React, { useState } from 'react';
import styled from 'styled-components';
import Affix from '../lib/Affix/Affix';
import Button from '../lib/Button/Button';

const Wrap = styled.div`
  //display: flex;
  //flex-direction: column;
  //gap: 50px;
  //justify-content: start;
  //align-items: start;
  line-height: 1.5em;
  > .row {
    //display: flex;
    //flex-direction: row;
    //gap: 50px;
    //justify-content: start;
    //align-items: center;
  }
`;

const Home: React.FC = () => {
  const [top, setTop] = useState(200);
  const render = (num: number): React.ReactNode[] => {
    const vNode: React.ReactNode[] = [];
    for (let i = 0; i < num; i++) {
      vNode.push(
        <p key={Math.random()}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, delectus deleniti
          enim, eveniet hic magnam nihil nisi placeat quam quibusdam ratione reiciendis rem
          repellendus reprehenderit saepe sequi, similique tenetur.
        </p>
      );
    }
    return vNode;
  };
  return (
    <Wrap>
      <div>{render(2)}</div>
      <Affix offsetTop={50} rowPosition="center">
        <Button onClick={() => setTop(top + 10)}>距离顶部50px固定,水平中间</Button>
      </Affix>
      <div>{render(8)}</div>
      <Affix offsetTop={top}>
        <div role="presentation">
          <Button onClick={() => setTop(top + 10)}> 距离顶部200px固定，水平左边</Button>
        </div>
      </Affix>
      <Affix offsetTop={400} rowPosition="end">
        <Button onClick={() => setTop(top + 10)}>距离顶部400px固定,水平右边</Button>
      </Affix>
      <div>{render(100)}</div>
    </Wrap>
  );
};

export default Home;
