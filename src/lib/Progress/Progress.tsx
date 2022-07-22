import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import './index.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  percent: number;
  finishColor?: string;
  undoneColor?: string;
  format?: (num: number) => string;
  children?: React.ReactNode;
}

const Wrap = styled.div`
  display: inline-block;
  position: relative;

  > .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;
type ProgressStyledProp = {
  percent: number;
  finishColor: string;
  undoneColor: string;
};
const ProgressStyled = styled.div`
  display: inline-block;

  > .shadow {
    width: 100px;
    height: 100px;
    position: relative;
    border-radius: 50%;
    background: ${(props: ProgressStyledProp) =>
      `conic-gradient(${props.finishColor} 0%, ${props.finishColor} ${props.percent}%, ${props.undoneColor} ${props.percent}%, ${props.undoneColor} 100%)`};
    mask: radial-gradient(transparent 40px, #000 41px);
  }
`;
const Progress: React.FC<Props> = (props) => {
  const { children, percent, finishColor, undoneColor, format, ...rest } = props;
  return (
    <div>
      <Wrap>
        <ProgressStyled
          {...rest}
          percent={percent}
          finishColor={finishColor!}
          undoneColor={undoneColor!}
        >
          <div className="shadow" />
        </ProgressStyled>
        <div className="inner" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
          {format!(percent)}
        </div>
      </Wrap>
    </div>
  );
};
Progress.defaultProps = {
  children: '',
  finishColor: '#1890ff',
  undoneColor: '#666666',
  format: (num: number) => `${num}%`
};

export default Progress;
