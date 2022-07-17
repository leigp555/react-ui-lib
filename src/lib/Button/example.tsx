import React from 'react';
import styled from 'styled-components';
import QQ from 'src/static/icons/qq.svg';
import Sun from 'src/static/icons/sunny.svg';
import Cloud from 'src/static/icons/cloud.svg';
import Button from './Button';

const Wrap = styled.div`
  > div {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
const Inner = styled.div`
  display: flex;
  gap: 10px;
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <div>primary</div>
      <Inner>
        <Button type="primary">xxx</Button>
        <Button type="primary" radius>
          xxx
        </Button>
        <Button type="primary" disabled>
          xxx
        </Button>
      </Inner>

      <div>default</div>
      <Inner>
        <Button type="default">xxx</Button>
        <Button type="default" radius>
          xxx
        </Button>
        <Button type="default" disabled>
          xxx
        </Button>
      </Inner>

      <div>text</div>
      <Inner>
        <Button type="text">xxx</Button>
        <Button type="text" radius>
          xxx
        </Button>
        <Button type="text" disabled>
          xxx
        </Button>
      </Inner>
      <div>dashed</div>
      <Inner>
        <Button type="dashed">xxx</Button>
        <Button type="dashed" radius>
          xxx
        </Button>
        <Button type="dashed" disabled>
          xxx
        </Button>
      </Inner>
      <div>link</div>
      <Inner>
        <Button type="link">xxx</Button>
        <Button type="link" radius>
          xxx
        </Button>
        <Button type="link" disabled>
          xxx
        </Button>
      </Inner>
      <div>icon</div>
      <Inner>
        <Button type="primary">
          <QQ fill="yellow" width="1.2em" height="1.2em" />
        </Button>
        <Button type="primary">
          <Sun fill="yellow" width="1.2em" height="1.2em" />
        </Button>
        <Button type="primary">
          <Cloud fill="yellow" width="1.2em" height="1.2em" />
        </Button>
      </Inner>
    </Wrap>
  );
};

export default Home;
