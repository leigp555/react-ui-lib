import React from 'react';
import { Button, Tip } from '../../lib';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <div className="showEg">
        <Button
          onClick={() => {
            Tip('success', 'Lorem ipsum dolor sit amet', 3000);
          }}
        >
          success
        </Button>
        <Button
          onClick={() => {
            Tip('info', 'Lorem ipsum dolor sit amet', 3000);
          }}
        >
          info
        </Button>
        <Button
          onClick={() => {
            Tip('warning', 'Lorem ipsum dolor sit amet', 3000);
          }}
        >
          warning
        </Button>
        <Button
          onClick={() => {
            Tip('error', 'Lorem ipsum dolor sit amet', 3000);
          }}
        >
          error
        </Button>
        <Button
          onClick={() => {
            Tip('loading', 'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet', 3000);
          }}
        >
          loading
        </Button>
      </div>
    </div>
  );
};
