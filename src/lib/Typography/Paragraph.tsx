import React, { HTMLAttributes } from 'react';
import './index.scss';

export interface ParagraphProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="ui-Paragraph" {...rest}>
      {children}
    </div>
  );
};
Paragraph.defaultProps = {
  children: ''
};

export default Paragraph;
