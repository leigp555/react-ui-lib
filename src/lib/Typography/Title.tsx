import React, { HTMLAttributes } from 'react';
import './index.scss';
import classNames from 'classnames';

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: React.FC<TitleProps> = (props) => {
  const { children, level, ...rest } = props;
  const render = () => {
    switch (level) {
      case 1:
        return <h1>{children}</h1>;
      case 2:
        return <h2>{children}</h2>;
      case 3:
        return <h3>{children}</h3>;
      case 4:
        return <h4>{children}</h4>;
      case 5:
        return <h5>{children}</h5>;
      case 6:
        return <h6>{children}</h6>;
      default:
        return <h4>{children}</h4>;
    }
  };
  return (
    <div {...rest} className={classNames(`level${level}`, 'ui-title-wrap')}>
      {render()}
    </div>
  );
};
Title.defaultProps = {
  children: '',
  level: 1
};

export default Title;
