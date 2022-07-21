import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type VNode = ReactElement & { type: { name: string } };
interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  icon?: ReactNode;
  src?: string;
  children?: React.ReactNode;
}

type PropsStyled = {
  size: number;
};

const AvatarStyled = styled.div`
  padding: ${(props: PropsStyled) => `${props.size * 0.2}px`};
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
`;

const Avatar: React.FC<Props> = (props) => {
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
  children: ''
};

export default Avatar;
