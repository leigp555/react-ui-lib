import React, { HTMLAttributes } from 'react';
import './index.scss';

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <p className="ui-breadcrumbItem-wrap" {...rest} key={Math.random()}>
      {children}
    </p>
  );
};
BreadcrumbItem.defaultProps = {
  children: ''
};

export default BreadcrumbItem;
