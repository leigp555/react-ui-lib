import React, { HTMLAttributes, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import Cha from '../icons/cha.svg';
import './index.scss';

const getRoot = () => {
  const el = document.getElementById('pop');
  if (el) {
    return el;
  }
  const newEl = document.createElement('div');
  newEl.setAttribute('id', 'pop');
  document.body.appendChild(newEl);
  return newEl;
};
const root = getRoot();
let oldDiv: HTMLDivElement | null = null;

export const openNotification = (vNode: ReactNode, delay = 3000) => {
  const div = document.createElement('div');
  root.insertBefore(div, oldDiv);
  oldDiv = div;
  const dom = createRoot(div as HTMLElement);
  dom.render(createPortal(vNode, div));
  setTimeout(() => {
    dom.unmount();
    div.remove();
    oldDiv = null;
  }, delay);
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const NotificationStyled = styled.div`
  position: relative;
  line-height: 1.5em;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
  > .u1-button {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
const Notification: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const [show, setShow] = useState<boolean>(true);
  return (
    <NotificationStyled style={{ display: show ? 'flex' : 'none' }} className="popMain" {...rest}>
      {children}
      <div className="u1-button" role="presentation" onClick={() => setShow(false)}>
        <Cha width="1em" height="1em" />
      </div>
    </NotificationStyled>
  );
};
Notification.defaultProps = {
  children: ''
};

export default Notification;
