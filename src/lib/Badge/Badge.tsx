import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  count?: React.ReactNode;
  overflowCount?: number;
  dot?: boolean;
}
const BadgeStyled = styled.div`
  //background-color: #cccccc;
  position: relative;
  .badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    background-color: #df4402;
    color: white;
    padding: 3px 10px;
    border-radius: 10px;
    border: 2px solid white;
    font-size: 12px;
    &.dot {
      padding: 0;
      border-radius: 50%;
      transform: translate(100%, -100%);
      width: 4px;
      height: 4px;
      border: 4px solid red;
    }
  }
  .badgeIcon {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
`;
const Badge: React.FC<BadgeProps> = (props) => {
  const { children, count, overflowCount, dot, ...rest } = props;
  const render = () => {
    if (typeof count === 'number') {
      return (
        <span className={classNames('badge', `${dot ? 'dot' : ''}`)}>
          {count! > overflowCount! ? `${overflowCount}+` : count}
        </span>
      );
    }
    return <div className="badgeIcon">{count}</div>;
  };
  return (
    <BadgeStyled {...rest}>
      <div className="content">{children}</div>
      <div>{render()}</div>
    </BadgeStyled>
  );
};
Badge.defaultProps = {
  children: '',
  count: 0,
  overflowCount: 10,
  dot: false
};

export default Badge;
