import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
const TitleStyled = styled.div`
  h1,
  h2,
  h3,
  h4.h5.h6 {
    font-weight: bold;
    color: #262626;
    text-align: start;
    display: inline-block;
    margin-bottom: 19px;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.83em;
  }
  h6 {
    font-size: 0.75em;
  }
`;
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
    <TitleStyled {...rest} className={classNames(`level${level}`)}>
      {render()}
    </TitleStyled>
  );
};
Title.defaultProps = {
  children: '',
  level: 1
};

export default Title;
