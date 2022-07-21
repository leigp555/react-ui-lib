import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface RadioItemProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  checked?: boolean;
  name?: string;
  children?: React.ReactNode;
}
const RadioItemStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  > span {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
`;
const InputStyled = styled.input.attrs(() => ({ type: 'radio' }))`
  cursor: pointer;
`;

const RadioItem: React.FC<RadioItemProps> = (props) => {
  const { children, checked, name, value, ...rest } = props;
  return (
    <RadioItemStyled {...rest}>
      <InputStyled value={value} name={name} defaultChecked={checked} />
      <span>{children}</span>
    </RadioItemStyled>
  );
};
RadioItem.defaultProps = {
  checked: false,
  value: 1,
  name: 'radio',
  children: ''
};

export default RadioItem;
