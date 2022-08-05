import React, { HTMLAttributes } from 'react';
import './index.scss';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="ui-typography-wrap" {...rest}>
      {children}
    </div>
  );
};
Typography.defaultProps = {
  children: ''
};

export default Typography;
