import React from 'react';
import styled from 'styled-components';
import Pagination from '../lib/Pagination/Pagination ';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  const fn = (page: number) => {
    console.log(page);
  };
  return (
    <Wrap>
      <Pagination callback={fn} currentPage={1} totalSrc={5} />
    </Wrap>
  );
};

export default Home;
