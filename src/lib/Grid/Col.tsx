import React, { HTMLAttributes } from 'react';
// 24/100

interface Props extends HTMLAttributes<HTMLDivElement> {
  span?: number;
  offset?: number;
  children?: React.ReactNode;
}

const Col: React.FC<Props> = (props) => {
  const { span, offset, children, style, ...rest } = props;
  return (
    <div
      style={{
        height: '40px',
        ...style,
        width: `${(span! * 100) / 100}%`,
        marginLeft: `${(offset! * 100) / 100}%`
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  span: 100,
  offset: 0,
  children: ''
};
export default Col;
