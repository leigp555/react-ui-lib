import React from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import Alert from '../Alert/Alert';
import './index.scss';

const getRoot = () => {
  const el = document.getElementById('ui-tip-pop');
  if (el) {
    return el;
  }
  const newEl = document.createElement('div');
  newEl.setAttribute('id', 'ui-tip-pop');
  document.body.appendChild(newEl);
  return newEl;
};
const root = getRoot();

export const Tip = (
  type: 'success' | 'info' | 'warning' | 'error' | 'loading',
  content: string,
  delay = 3000
) => {
  const div = document.createElement('div');
  root.appendChild(div);
  const dom = createRoot(div as HTMLElement);
  dom.render(
    createPortal(
      <Alert type={type} className={classNames('ui-tip-popMain', 'ui-alert-wrap', type)}>
        {content}
      </Alert>,
      div
    )
  );
  setTimeout(() => {
    dom.unmount();
    div.remove();
  }, delay);
};
