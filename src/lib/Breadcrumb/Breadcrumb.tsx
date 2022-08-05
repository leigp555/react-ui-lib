import React, { HTMLAttributes, ReactNode } from 'react';
import './index.scss';

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  separator?: string;
  renderItem: (item: any) => ReactNode;
  data: any[];
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { children, separator, renderItem, data, ...rest } = props;
  const render = () => {
    return data.map((item, index) => {
      if (index !== 0) {
        return (
          <div className="ui-inner" key={Math.random()}>
            <span>{separator}</span>
            <span>{renderItem(item)}</span>
          </div>
        );
      }
      return <div key={Math.random()}>{renderItem(item)}</div>;
    });
  };
  return (
    <div className="ui-wrap" {...rest}>
      {render()}
    </div>
  );
};
Breadcrumb.defaultProps = {
  separator: '/',
  children: ''
};

export default Breadcrumb;
