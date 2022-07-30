import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  value?: React.ReactNode;
}
const StepStyled = styled.div``;
const Step: React.FC<Props> = (props) => {
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
