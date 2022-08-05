import React, { Dispatch, HTMLAttributes, SetStateAction, useEffect, useRef } from 'react';
import './index.scss';

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  format?: (num: number) => string;
  defaultPercent: number;
  setPercent: Dispatch<SetStateAction<number>>;
}

const Slider: React.FC<SliderProps> = (props) => {
  const { children, defaultPercent, setPercent, format, ...rest } = props;

  const isMove = useRef<boolean>(false);
  const spanRef = useRef<HTMLButtonElement | null>(null);
  const dotFocus = () => {
    spanRef.current?.classList.add('dotFocus');
  };
  const dotBlur = () => {
    spanRef.current?.classList.remove('dotFocus');
  };

  const moveHandle = (e: { clientX: number }) => {
    if (isMove.current) {
      const { clientX } = e;
      const parentNode = spanRef.current!.parentNode as HTMLDivElement;
      const parentClientX = parentNode.getBoundingClientRect().left;
      const parentWidth = parentNode.getBoundingClientRect().width;
      const percent = ((clientX - parentClientX) / parentWidth) * 100;
      if (percent < 100 && percent > 0) {
        spanRef.current!.style.transform = `translate(calc(${
          clientX - parentClientX
        }px - 50%),-50%)`;
        setPercent(() => {
          return percent;
        });
      } else if (percent > 100) {
        setPercent(100);
      } else if (percent < 0) {
        setPercent(0);
      }
    }
  };
  const cancelHandle = () => {
    isMove.current = false;
    document.body.removeEventListener('mousemove', moveHandle);
  };
  const outHandle = () => {
    document.body.removeEventListener('mousemove', moveHandle);
    document.body.removeEventListener('mouseup', cancelHandle);
    isMove.current = false;
  };
  const dotDown = () => {
    isMove.current = true;
    document.body.removeEventListener('mouseleave', outHandle);
    document.body.addEventListener('mousemove', moveHandle);
    document.body.addEventListener('mouseup', cancelHandle);
    document.body.addEventListener('mouseleave', outHandle);
  };
  useEffect(() => {
    const parentNode = spanRef.current!.parentNode as HTMLDivElement;
    const parentWidth = parentNode.getBoundingClientRect().width;
    spanRef.current!.style.transform = `translate(calc(${
      (parentWidth * defaultPercent) / 100
    }px - 50%),-50%)`;
  }, []);
  useEffect(() => {
    return () => {
      document.body.removeEventListener('mousemove', moveHandle);
      document.body.removeEventListener('mouseup', cancelHandle);
      document.body.removeEventListener('mouseleave', outHandle);
    };
  }, []);
  return (
    <div className="ui-slider-wrap" {...rest}>
      <div
        className="inner"
        style={{
          background: `
        linear-gradient(
        90deg,
        #69c0ff 0%,
        #69c0ff ${defaultPercent}%,
        #e1e1e1 ${defaultPercent}%,
        #e1e1e1 100%
  )`
        }}
      >
        <div className="progress" />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          className="dot"
          onFocus={dotFocus}
          onBlur={dotBlur}
          onMouseDown={dotDown}
          ref={spanRef}
        />
      </div>
      <span style={{ fontSize: '12px', userSelect: 'none' }}>
        {format!(Math.ceil(defaultPercent))}
      </span>
    </div>
  );
};
Slider.defaultProps = {
  children: '',
  format: (num: number) => `${num}%`
};

export default Slider;
