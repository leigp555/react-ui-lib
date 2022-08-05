import React, { HTMLAttributes } from 'react';
import './index.scss';

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: number | string;
  align?: 'start' | 'center' | 'end' | 'baseline';
  direction?: 'row' | 'column';
}

const Space: React.FC<SpaceProps> = (props) => {
  const { children, size, align, direction } = props;
  return (
    <div>
      <div
        className="ui-space-wrap"
        style={{
          gap: typeof size === 'string' ? size : `${size}px`,
          flexDirection: direction,
          alignItems: align
        }}
      >
        {children}
      </div>
    </div>
  );
};
Space.defaultProps = {
  children: '',
  size: 8,
  align: 'start',
  direction: 'row'
};

export default Space;
