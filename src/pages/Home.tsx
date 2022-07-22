import React from 'react';
import styled from 'styled-components';
import Carousel from '../lib/Carousel/Carousel ';
import CarouselItem from '../lib/Carousel/CarouselItem';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 350px;
`;

const Home: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  };
  return (
    <Wrap>
      <Carousel>
        <CarouselItem order={1}>
          <h3 style={contentStyle}>1</h3>
        </CarouselItem>
        <CarouselItem order={2}>
          <h3 style={contentStyle}>2</h3>
        </CarouselItem>
        <CarouselItem order={3}>
          <h3 style={contentStyle}>3</h3>
        </CarouselItem>
        <CarouselItem order={4}>
          <h3 style={contentStyle}>4</h3>
        </CarouselItem>
      </Carousel>
    </Wrap>
  );
};

export default Home;
