import React, { useState } from 'react';
import styled from 'styled-components';
import { Radio } from '../lib/Radio/Radio';

const Wrap = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  flex-direction: column;
  width: 350px;
`;

const Home: React.FC = () => {
  const [value, setValue] = useState(2);
  const callback = (num: number) => {
    console.log(num);
    setValue(num);
  };
  return (
    <Wrap>
      <Radio.Group callback={callback} value={value}>
        <Radio.Item value={1}>A</Radio.Item>
        <Radio.Item value={2}>B</Radio.Item>
        <Radio.Item value={3}>C</Radio.Item>
        <Radio.Item value={4}>D</Radio.Item>
      </Radio.Group>
    </Wrap>
  );
};

export default Home;
