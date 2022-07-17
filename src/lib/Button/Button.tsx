import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

type PropsStyle = {
  $radius?: boolean;
  $disabled?: boolean;
};

const ButtonStyled = styled.button`
  &:hover {
    -webkit-filter: brightness(90%);
  }
  &:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }
  &.primary {
    background-color: ${(props: PropsStyle) => (props.$disabled ? '#f5f5f5' : '#1890ff')};
    color: ${(props: PropsStyle) => (props.$disabled ? '#b8b8cb' : '#f5f5f5')};
    outline: ${(props: PropsStyle) =>
      props.$disabled ? '1px solid #b8b8cb' : '1px solid #1890ff'};
    &:hover {
      outline: 1px solid #1890ff;
    }
  }
  &.default {
    background-color: ${(props: PropsStyle) => (props.$disabled ? '#f5f5f5' : '#ffffff')};
    color: ${(props: PropsStyle) => (props.$disabled ? '#b8b8cb' : '#636567')};
    outline: ${(props: PropsStyle) =>
      props.$disabled ? '1px solid #b8b8cb' : '1px solid #1890ff'};
    &:hover {
      outline: 1px solid #1890ff;
      color: ${(props: PropsStyle) => (props.$disabled ? '#b8b8cb' : '#1890ff')};
    }
  }
  &.text {
    background-color: ${(props: PropsStyle) => (props.$disabled ? '#f5f5f5' : '#ffffff')};
    color: ${(props: PropsStyle) => (props.$disabled ? '#b8b8cb' : '#636567')};
    &:hover {
      color: ${(props: PropsStyle) => (props.$disabled ? '#b8b8cb' : '#1890ff')};
    }
  }
  &.dashed {
    background-color: ${(props: PropsStyle) => (props.$disabled ? '#f5f5f5' : '#ffffff')};
    color: ${(props: PropsStyle) => (props.$disabled ? '#b8b8cb' : '#636567')};
    outline: ${(props: PropsStyle) =>
      props.$disabled ? '1px dashed #b8b8cb' : '1px dashed #1890ff'};
    &:hover {
      outline: 1px dashed #1890ff;
    }
  }
  &.link {
    background-color: inherit;
    color: ${(props: PropsStyle) => (props.$disabled ? '#b8b8cb' : '#7b7b7b')};
    &:hover {
      color: ${(props: PropsStyle) => (props.$disabled ? '#b8b8cb' : '#1890ff')};
    }
  }
  border: none;
  outline: none;
  box-shadow: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 15px;
  cursor: ${(props: PropsStyle) => (props.$disabled ? 'not-allowed' : 'auto')};
  border-radius: ${(props: PropsStyle) => (props.$radius ? '4px' : 0)};
  white-space: nowrap;
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  radius?: boolean;
  disabled?: boolean;
  type?: 'primary' | 'text' | 'link' | 'dashed' | 'default';
  children?: ReactNode;
}
const Button: React.FC<Props> = (props) => {
  const { radius, disabled, type, children, className, ...rest } = props;
  return (
    <ButtonStyled
      {...rest}
      $radius={radius}
      $disabled={disabled}
      disabled={disabled}
      className={classNames(type, className)}
    >
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  radius: false,
  type: 'primary',
  disabled: false,
  children: '按钮'
};

export default Button;
