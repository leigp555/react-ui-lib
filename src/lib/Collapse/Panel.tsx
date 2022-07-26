import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import RightIcon from '../icons/right2.svg';
import DownIcon from '../icons/down.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  header: string;
  key: string;
}
const PanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  > .header {
    padding: 12px 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #fafafa;
    > span {
      display: flex;
      align-items: center;
    }
  }
  > .body {
    padding: 16px;
    line-height: 1.5em;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }
`;
const Panel: React.FC<Props> = (props) => {
  const { children, header, key, ...rest } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <PanelStyled {...rest}>
      <div
        role="presentation"
        className="header"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <span>
            <DownIcon width="1em" height="1em" fill="black" />
          </span>
        ) : (
          <span>
            <RightIcon width="0.8em" height="0.8em" fill="black" />
          </span>
        )}
        <p>{header}</p>
      </div>
      <div className="body" style={{ display: isOpen ? 'block' : 'none' }}>
        {children}
      </div>
    </PanelStyled>
  );
};
Panel.defaultProps = {
  children: ''
};

export default Panel;
