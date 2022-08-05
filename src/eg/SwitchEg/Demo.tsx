import React from 'react';
import { Switch } from '../../lib';

export const Demo: React.FC = () => {
  const onChange = (checked: boolean) => {
    console.log(checked);
  };
  return (
    <div className="Eg">
      <Switch defaultChecked callback={onChange} />
      <Switch callback={onChange} />
      <Switch onColor="red" offColor="orange" callback={onChange} defaultChecked />
    </div>
  );
};
