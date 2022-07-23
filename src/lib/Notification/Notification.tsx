import React, { HTMLAttributes, ReactNode } from 'react';
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
export const openNotification = (vNode: ReactNode) => {
  const div = document.createElement('div');
  root.appendChild(div);
  const dom = createRoot(div as HTMLElement);
  dom.render(createPortal(vNode, div));
  setTimeout(() => {
    dom.unmount();
    div.remove();
  }, 3000);
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const NotificationStyled = styled.div`
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
  return (
    <NotificationStyled {...rest}>
      {children}
      <div className="u1-button" role="presentation">
        <Cha width="1em" height="1em" />
      </div>
    </NotificationStyled>
  );
};
Notification.defaultProps = {
  children: ''
};

export default Notification;
