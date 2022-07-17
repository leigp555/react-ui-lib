import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const BreadcrumbStyled = styled.div`
  display: flex;
  align-items: center;
  height: 1.5em;
  line-height: 1.5em;
  text-align: center;
  gap: 5px;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  separator?: string;
  children?: React.ReactNode;
}
const Breadcrumb: React.FC<Props> = (props) => {
  const { children, separator, ...rest } = props;
  const render = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && index !== 0) {
        return (
          <>
            <span>{separator}</span>
            {child}
          </>
        );
      }
      return child;
    });
  };
  return <BreadcrumbStyled {...rest}>{render()}</BreadcrumbStyled>;
};
Breadcrumb.defaultProps = {
  separator: '/',
  children: ''
};

export default Breadcrumb;
