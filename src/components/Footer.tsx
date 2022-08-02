import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 12px;
  padding: 10px 100px;
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <p>footer</p>
  </StyledFooter>
);

export default Footer;
