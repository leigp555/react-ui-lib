import React from 'react';
import styled from 'styled-components';
import Empty from '../lib/Empty/Empty';
import Button from '../lib/Button/Button';
import EmptyIcon from '../lib/icons/empty2.svg';
import EmptyIcon3 from '../lib/icons/empty3.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <Empty
        icon={<EmptyIcon width="3em" height="3em" />}
        description={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores
            dolorum ducimus, eos, impedit
          </p>
        }
      >
        <Button type="primary">back</Button>
      </Empty>
      <Empty
        description={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores
            dolorum ducimus, eos, impedit
          </p>
        }
      >
        <Button type="primary">back</Button>
      </Empty>
      <Empty icon={<EmptyIcon3 width="3em" height="3em" />}>
        <Button type="primary">back</Button>
      </Empty>
    </Wrap>
  );
};

export default Home;
