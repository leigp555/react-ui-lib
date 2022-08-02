import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  mode?: 'left' | 'right' | 'alternate';
}
const TimelineStyled = styled.div`
  > .wrap {
    display: flex;
    flex-direction: column;

    &.alternate {
      transform: translateX(50%);
      .itemWrap:nth-child(even) {
        > .content {
          transform: translateY(-5px) translateX(calc(-100% - 40px));
        }
      }
    }
    &.right {
      transform: translateX(50%);
      .itemWrap > .content {
        transform: translateY(-5px) translateX(calc(-100% - 40px));
      }
    }
  }
`;
const Timeline: React.FC<TimelineProps> = (props) => {
  const { children, mode, ...rest } = props;
  return (
    <TimelineStyled {...rest}>
      <div className={classNames('wrap', mode)}>{children}</div>
    </TimelineStyled>
  );
};
Timeline.defaultProps = {
  children: '',
  mode: 'left'
};

export default Timeline;
