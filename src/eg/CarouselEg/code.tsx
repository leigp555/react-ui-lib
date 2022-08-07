import { translate } from '../translate';

export const code = translate(`
import {  Carousel, CarouselItem } from 'uix';\n
export const App:React.RC=()=>{
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  };
  const fn = (num: number) => {
    console.log('num1', num);
  };
  const fn2 = (num: number) => {
    console.log('num2', num);
  };
  return (
    <div className="Eg">
      <div style={{ width: '350px', height: '164px' }}>
        <Carousel dot callback={fn} autoPlay={false}>
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
      </div>
      <div style={{ width: '350px', height: '164px' }}>
        <Carousel dot callback={fn2}>
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
      </div>
      <div style={{ width: '350px', height: '164px' }}>
        <Carousel dot={false} autoPlay={false}>
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
      </div>
    </div>
  );
}
`);
