import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  percent: number;
  finishColor?: string;
  undoneColor?: string;
  format?: (num: number) => string;
  children?: React.ReactNode;
  type?: 'line' | 'circle';
  dot?: boolean;
  statistic?: boolean;
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
  gap: 10px;
`;

const LineProgress = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: ${(props: ProgressStyledProp) =>
    `linear-gradient(90deg,${props.finishColor} 0%, ${props.finishColor} ${props.percent}%, ${props.undoneColor} ${props.percent}%, ${props.undoneColor} 100%)`};
  > .dot {
    width: 16px;
    height: 16px;
    outline: none;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #91d5ff;
    position: absolute;
    top: 0;
    left: ${(props: ProgressStyledProp) => `${props.percent}%`};
    transform: translate(-50%, -4px);
    cursor: pointer;
    &:active {
      box-shadow: 0 0 4px 4px rgba(105, 192, 255, 0.5);
    }
    &.dotFocus {
      box-shadow: 0 0 4px 4px rgba(105, 192, 255, 0.5);
    }
  }
`;

const Progress: React.FC<ProgressProps> = (props) => {
  const { children, type, percent, finishColor, statistic, undoneColor, format, dot, ...rest } =
    props;

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
        <LineProgress
          percent={percent}
          finishColor={finishColor!}
          undoneColor={undoneColor!}
          {...rest}
        >
          {dot ? (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button className="dot" />
          ) : (
            ''
          )}
        </LineProgress>
        <span style={{ fontSize: '12px', display: statistic ? 'inline-block' : 'none' }}>
          {format!(percent)}
        </span>
      </LineWrap>
    </div>
  );
};
Progress.defaultProps = {
  children: '',
  finishColor: '#1890ff',
  undoneColor: '#52c41a',
  format: (num: number) => `${num}%`,
  type: 'line',
  dot: false,
  statistic: true
};

export default Progress;
