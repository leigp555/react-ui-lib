import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface TimeItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  color?: string;
  dotIcon?: React.ReactNode;
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
  }
  > .dot {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transform: translateX(-52%);
    background-color: white;

    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;

const TimeItem: React.FC<TimeItemProps> = (props) => {
  const { children, color, dotIcon, ...rest } = props;
  return (
    <TimeItemStyled className="itemWrap">
      {dotIcon ? (
        <div className="dot">{dotIcon}</div>
      ) : (
        <span
          style={{ border: `2px solid ${color}`, width: '10px', height: '10px' }}
          className="dot"
        />
      )}
      <div className="content" {...rest}>
        {children}
      </div>
    </TimeItemStyled>
  );
};
TimeItem.defaultProps = {
  children: '',
  color: '#1890ff',
  dotIcon: ''
};

export default TimeItem;
