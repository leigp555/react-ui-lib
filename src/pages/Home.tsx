import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from '../lib/Loading/Loading';
import Button from '../lib/Button/Button';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Wrap>
      <Loading loading={loading}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus
          dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis
          recusandae reprehenderit sapiente, suscipit totam velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus
          dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis
          recusandae reprehenderit sapiente, suscipit totam velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus
          dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis
          recusandae reprehenderit sapiente, suscipit totam velit.
        </p>
      </Loading>
      <Button onClick={() => setLoading(!loading)}>{loading ? '加载中' : ' 未加载'}</Button>
    </Wrap>
  );
};

export default Home;
