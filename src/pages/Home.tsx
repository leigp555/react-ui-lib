import React from 'react';
import styled from 'styled-components';
import Result from '../lib/Result/Result';
import Button from '../lib/Button/Button';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  height: 400px;
`;

const Home: React.FC = () => {
  return (
    <>
      <Wrap>
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
      </Wrap>
      <Wrap>
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
      </Wrap>
      <Wrap>
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
      </Wrap>
      <Wrap>
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
      </Wrap>
    </>
  );
};

export default Home;
