import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import EmptyIcon from '../icons/empty1.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  description?: React.ReactNode;
}
const EmptyStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const EmptyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;
const Empty: React.FC<Props> = (props) => {
  const { children, icon, description, ...rest } = props;
  return (
    <EmptyStyled {...rest}>
      <EmptyWrap>
        <span>{icon}</span>
        <div>{description}</div>
        <div>{children}</div>
      </EmptyWrap>
    </EmptyStyled>
  );
};
Empty.defaultProps = {
  children: '',
  icon: <EmptyIcon width="3em" height="3em" />,
  description: ''
};

export default Empty;
