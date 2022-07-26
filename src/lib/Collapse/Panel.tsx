import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import RightIcon from '../icons/right2.svg';
import './index.scss';

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
    line-height: 1.5em;
    padding: 0 16px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    height: 0;
    overflow: hidden;
    transition: all 250ms;
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
        <span
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)', transition: 'all 250ms' }}
        >
          <RightIcon width="1em" height="1em" fill="black" />
        </span>

        <p>{header}</p>
      </div>
      <div className={classNames('body', `${isOpen ? 'open' : ''}`)}>{children}</div>
    </PanelStyled>
  );
};
Panel.defaultProps = {
  children: ''
};

export default Panel;
