import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type VNode = ReactElement & { type: { name: string } };
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  icon?: ReactNode;
  src?: string;
  children?: React.ReactNode;
  bgc?: string;
}

type PropsStyled = {
  size: number;
  bgc?: string;
};

const AvatarStyled = styled.div`
  padding: ${(props: PropsStyled) => `${props.size * 0.2}px`};
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: PropsStyled) => props.bgc};
`;

const Avatar: React.FC<AvatarProps> = (props) => {
  const { children, size, icon, src, ...rest } = props;
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
      <AvatarStyled size={size!} {...rest}>
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
      </AvatarStyled>
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
