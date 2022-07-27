import React, { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import RightIcon from '../icons/right3.svg';

export interface TypeTree {
  title: ReactNode;
  key: string;
  children?: TypeTree[];
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: TypeTree[];
}
const TreeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: red;
  .inner-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: orange;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    > .title {
      display: flex;
      gap: 8px;
      align-items: center;
      > span {
        display: flex;
        align-items: center;
        white-space: nowrap;
      }
    }
  }
  .inner-container {
    opacity: 0;
    transition: all 1s;
  }
  .hidden {
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
  .visible.inner-container {
    opacity: 1;
    height: auto;
  }
`;
const Tree: React.FC<Props> = (props) => {
  const { data } = props;
  const render = (renderData: TypeTree[]): ReactNode => {
    return renderData.map((item) => {
      if (item.children) {
        return (
          <div key={item.key} className="container">
            <div
              className="title"
              role="presentation"
              onClick={(e: MouseEvent<HTMLDivElement>) => {
                const el = e.currentTarget.parentNode!.children[1] as HTMLDivElement;
                el.classList.add('visible');
              }}
            >
              <span>
                <RightIcon width="0.8em" height="0.8em" />
              </span>
              <span>{item.title}</span>
            </div>
            <div className={classNames('inner-container', 'hidden')} style={{ marginLeft: '20px' }}>
              {render(item.children)}
            </div>
          </div>
        );
      }
      return (
        <div style={{ marginLeft: '0.8em' }} key={item.key}>
          {item.title}
        </div>
      );
    });
  };
  return <TreeStyled>{render(data)}</TreeStyled>;
};
Tree.defaultProps = {};

export default Tree;
