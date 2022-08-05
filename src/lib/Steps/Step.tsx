import React, { HTMLAttributes } from 'react';

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
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
  value: ''
};

export default Step;
