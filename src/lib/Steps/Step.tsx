import React, { HTMLAttributes } from 'react';

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  name?: string;
  value?: React.ReactNode;
}

const Step: React.FC<StepProps> = (props) => {
  const { value, ...rest } = props;
  return (
    <div {...rest}>
      <div>{value}</div>
    </div>
  );
};
Step.defaultProps = {
  children: '',
  name: 'Step',
  value: ''
};

export default Step;
