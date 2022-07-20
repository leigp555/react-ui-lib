import React, { useState } from 'react';

const AppTest: React.FC<{ reg: RegExp }> = (props) => {
  const [value, setValue] = useState('');
  const { reg } = props;
  // const reg = /^\w+$/g;
  const validateFn = (newValue: string) => {
    console.log(reg);
    if (reg) console.log(reg.test(newValue));
  };
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateFn(e.target.value);
    setValue(e.target.value);
  };
  return (
    <input
      value={value}
      onChange={(e) => {
        getValue(e);
      }}
    />
  );
};
export default AppTest;
