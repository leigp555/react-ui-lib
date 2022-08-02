import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  value?: React.ReactNode;
}
const StepStyled = styled.div``;
const Step: React.FC<StepProps> = (props) => {
  const { value, ...rest } = props;
  return (
    <StepStyled {...rest}>
      <div>{value}</div>
    </StepStyled>
  );
};
Step.defaultProps = {
  children: '',
  value: ''
};

export default Step;
