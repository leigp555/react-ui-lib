import React from "react";
import styled from "styled-components";

interface Props {
}

const StyledFooter = styled.footer`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 12px;
  padding: 10px 100px;
`


const Footer: React.FC<Props> = () => {
    return (
        <StyledFooter>
            <p>footer</p>
        </StyledFooter>
    )
}

export default Footer
