import React, { HTMLAttributes } from 'react';
import './index.scss';
import classNames from 'classnames';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  count?: React.ReactNode;
  overflowCount?: number;
  dot?: boolean;
}

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
    <div className="ui-wrap" {...rest}>
      <div className="content">{children}</div>
      <div>{render()}</div>
    </div>
  );
};
Badge.defaultProps = {
  children: '',
  count: 0,
  overflowCount: 10,
  dot: false
};

export default Badge;
