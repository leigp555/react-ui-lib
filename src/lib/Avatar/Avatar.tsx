import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import './index.scss';

type VNode = ReactElement & { type: { name: string } };
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  icon?: ReactNode;
  src?: string;
  children?: React.ReactNode;
  bgc?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { children, size, icon, src, bgc, ...rest } = props;
  const render = () => {
    return React.Children.map(children, (child: ReactNode) => {
      const vNode = child as VNode;
      if (vNode) {
        return React.cloneElement(vNode, {
          style: { width: `${size}px`, height: `${size}px`, verticalAlign: 'center' }
        });
      }
    });
  };
  return (
    <div>
      <div
        className="ui-wrap"
        style={{ padding: `${size! * 0.2}px`, backgroundColor: bgc }}
        {...rest}
      >
        {render()}
        <img
          src={src}
          alt=""
          style={{
            width: `${size! * 0.6}px`,
            height: `${size! * 0.6}px`,
            display: src ? 'block' : 'none'
          }}
        />
      </div>
    </div>
  );
};
Avatar.defaultProps = {
  size: 40,
  icon: '',
  src: '',
  bgc: '#cccccc',
  children: ''
};

export default Avatar;
