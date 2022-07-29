import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  cardTitle?: React.ReactNode;
  action?: React.ReactNode;
  bordered?: boolean;
}
const CardStyled = styled.div`
  &.bordered {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  > .title {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    > .cardTitle,
    .action {
      display: flex;
      align-items: center;
    }
  }
  > .content {
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 10px;
  }
`;
const Card: React.FC<Props> = (props) => {
  const { children, cardTitle, bordered, action, ...rest } = props;
  return (
    <CardStyled {...rest} className={classNames(`${bordered ? 'bordered' : ''}`)}>
      <div className="title" style={{ display: cardTitle ? 'flex' : 'none' }}>
        <div className="cardTitle">{cardTitle}</div>
        <div className="action">{action}</div>
      </div>
      <div className={classNames('content')}>{children}</div>
    </CardStyled>
  );
};
Card.defaultProps = {
  children: '',
  cardTitle: '',
  action: '',
  bordered: true
};

export default Card;
