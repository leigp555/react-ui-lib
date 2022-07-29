import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const TimelineStyled = styled.div`
  > .wrap {
    display: flex;
    flex-direction: column;
  }
`;
const Timeline: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <TimelineStyled {...rest}>
      <div className="wrap">{children}</div>
    </TimelineStyled>
  );
};
Timeline.defaultProps = {
  children: ''
};

export default Timeline;
