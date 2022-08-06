import React from 'react';
import { Button, Result } from '../../lib';

export const Demo: React.FC = () => {
  const wrapCss: React.CSSProperties = {
    padding: '50px 20px',
    border: '1px solid orange'
  };
  return (
    <div className="Eg">
      <div style={wrapCss}>
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        >
          <Button type="primary" key="console">
            Back
          </Button>
          <Button key="buy">Next</Button>
        </Result>
      </div>
      <div style={wrapCss}>
        <Result
          status="warning"
          title="Your operation has been executed"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        >
          <Button type="primary" key="console">
            Back
          </Button>
          <Button key="buy">Close</Button>
        </Result>
      </div>
      <div style={wrapCss}>
        <Result
          gap={40}
          status="error"
          title="There are some problems with your operation"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        >
          <Button type="primary" key="console">
            Back
          </Button>
          <Button key="buy">Close</Button>
        </Result>
      </div>
      <div style={wrapCss}>
        <Result
          gap={20}
          status="404"
          title="Your operation has been executed"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        >
          <Button type="primary" key="console">
            Back
          </Button>
          <Button key="buy">Close</Button>
        </Result>
      </div>
    </div>
  );
};
