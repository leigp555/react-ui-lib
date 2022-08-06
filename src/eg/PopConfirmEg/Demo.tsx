import React from 'react';
import { Button, PopConfirm } from '../../lib';

export const Demo: React.FC = () => {
  const confirm = () => {
    console.log('confirm');
  };

  const cancel = () => {
    console.log('cancel');
  };
  return (
    <div className="Eg" style={{ alignItems: 'center', padding: '120px' }}>
      <PopConfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
        position="top"
      >
        <Button type="link">delete</Button>
      </PopConfirm>
      <PopConfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
        position="bottom"
      >
        <Button type="link">delete</Button>
      </PopConfirm>
      <PopConfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
        position="left"
      >
        <Button type="link">delete</Button>
      </PopConfirm>
      <PopConfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
        position="right"
      >
        <Button type="link">delete</Button>
      </PopConfirm>
    </div>
  );
};
