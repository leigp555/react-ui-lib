import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const TypographyStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  code {
    display: inline-block;
    padding: 0.1em 0.4em;
    font-size: 12px;
    margin: 0 0.2em;
    border-radius: 2px;
    border: 1px solid rgba(100, 100, 100, 0.2);
    color: white;
    background-color: #02101f;
  }
  blockquote {
    border-left: 4px solid rgba(100, 100, 100, 0.2);
    padding-left: 0.6em;
  }
  pre {
    width: 100%;
    word-break: break-all;
    white-space: break-spaces;
    line-height: 1.5em;
    background-color: #f4f4f4;
    padding: 0.4em 0.6em;
    border-radius: 4px;
  }
  a {
    color: #1890ff;
  }
  ol {
    list-style-type: lower-alpha;
  }
  ul {
    list-style-type: square;
  }
  ol,
  ul {
    margin: 0 0 0 14px;
    padding: 0 0 0 4px;
    > li {
      padding-left: 4px;
    }
  }
`;
const Typography: React.FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;
  return <TypographyStyled {...rest}>{children}</TypographyStyled>;
};
Typography.defaultProps = {
  children: ''
};

export default Typography;
