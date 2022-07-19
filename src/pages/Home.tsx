import React from 'react';
import styled from 'styled-components';
import Pagination from '../lib/Pagination/Pagination ';

const Wrap = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  flex-direction: column;
`;

const Home: React.FC = () => {
  const fn = (currentPage: number, start: number, end: number) => {
    console.log(start, end);
  };
  return (
    <Wrap>
      <Pagination callback={fn} defaultPage={1} totalSrc={10} perPage={5} />{' '}
      <Pagination callback={fn} defaultPage={2} totalSrc={50} perPage={5} />{' '}
      <Pagination callback={fn} defaultPage={1} totalSrc={50} perPage={5} />{' '}
      <Pagination callback={fn} defaultPage={1} totalSrc={500} perPage={5} goTool />
      <Pagination callback={fn} defaultPage={1} totalSrc={10} perPage={5} moreTool />
    </Wrap>
  );
};

export default Home;
