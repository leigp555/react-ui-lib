import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import styled from 'styled-components';

export interface Options {
  label: React.ReactNode;
  value: string;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  options: Options[];
  checked: string[];
  setChecked: Dispatch<SetStateAction<string[]>>;
}
const CheckboxStyled = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  .wrap {
    display: flex;
    align-items: center;
    gap: 5px;
    > .checkBox {
      cursor: pointer;
    }
    > .label {
      font-size: 14px;
      cursor: pointer;
      user-select: none;
    }
  }
`;

const Checkbox: React.FC<Props> = (props) => {
  const { children, options, checked, setChecked, ...rest } = props;
  const haveChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const input = el.children[0] as HTMLInputElement;
    if (checked.indexOf(input.value) >= 0) {
      setChecked((state) => {
        const arr = [...state];
        arr.splice(arr.indexOf(input.value), 1);
        return arr;
      });
    } else {
      setChecked((state) => {
        return [...state, input.value];
      });
    }
  };
  const render = () => {
    return options.map((item) => {
      return (
        <div
          role="presentation"
          key={item.value}
          className="wrap"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            haveChange(e);
          }}
        >
          <input
            type="checkbox"
            className="checkBox"
            id={item.value}
            defaultValue={item.value}
            checked={checked!.indexOf(item.value) >= 0}
            onChange={() => {}}
          />
          <div className="label">{item.label}</div>
        </div>
      );
    });
  };
  return <CheckboxStyled {...rest}>{render()}</CheckboxStyled>;
};

Checkbox.defaultProps = {
  children: ''
};

export default Checkbox;
