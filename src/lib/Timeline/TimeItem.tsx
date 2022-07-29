import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  color?: string;
}
const TimeItemStyled = styled.div`
  padding: 0 20px 40px 20px;
  position: relative;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  &:last-child {
    border: none;
  }
  > .content {
    display: inline-flex;
    word-wrap: break-word;
    flex-direction: column;
    gap: 10px;
    line-height: 1.5em;
    transform: translateY(-5px);
    //transform: translateY(-5px) translateX(calc(-100% - 40px));
  }
  > .dot {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transform: translateX(-52%);
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

const TimeItem: React.FC<Props> = (props) => {
  const { children, color, ...rest } = props;
  return (
    <TimeItemStyled>
      <span style={{ border: `2px solid ${color}` }} className="dot" />
      <div className="content" {...rest}>
        {children}
      </div>
    </TimeItemStyled>
  );
};
TimeItem.defaultProps = {
  children: '',
  color: '#1890ff'
};

export default TimeItem;
