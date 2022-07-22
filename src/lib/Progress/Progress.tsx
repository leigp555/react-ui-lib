import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import './index.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  percent: number;
  finishColor?: string;
  undoneColor?: string;
  format?: (num: number) => string;
  children?: React.ReactNode;
  type?: 'line' | 'circle';
}

const Wrap = styled.div`
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
const LineWrap = styled.div`
  align-items: center;
  gap: 5px;
`;
const LineInner = styled.div`
  width: 100%;
`;
const LineProgress = styled.div`
  height: 10px;
  border-radius: 5px;
  background: ${(props: ProgressStyledProp) =>
    `linear-gradient(90deg,${props.finishColor} 0%, ${props.finishColor} ${props.percent}%, ${props.undoneColor} ${props.percent}%, ${props.undoneColor} 100%)`};
`;

const Progress: React.FC<Props> = (props) => {
  const { children, type, percent, finishColor, undoneColor, format, ...rest } = props;
  return (
    <div>
      <Wrap style={{ display: type === 'circle' ? 'inline-block' : 'none' }}>
        <ProgressStyled
          {...rest}
          percent={percent}
          finishColor={finishColor!}
          undoneColor={undoneColor!}
        >
          <div className="shadow" />
        </ProgressStyled>
        <div className="inner" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
          <span>{format!(percent)}</span>
        </div>
      </Wrap>
      <LineWrap style={{ display: type === 'line' ? 'flex' : 'none' }}>
        <LineInner>
          <LineProgress percent={percent} finishColor={finishColor!} undoneColor={undoneColor!} />
        </LineInner>
        <span style={{ fontSize: '12px' }}>{format!(percent)}</span>
      </LineWrap>
    </div>
  );
};
Progress.defaultProps = {
  children: '',
  finishColor: '#1890ff',
  undoneColor: '#52c41a',
  format: (num: number) => `${num}%`,
  type: 'line'
};

export default Progress;
