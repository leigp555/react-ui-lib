import React, { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import RightIcon from '../icons/right3.svg';

export interface TypeTree {
  title: ReactNode;
  key: string;
  children?: TypeTree[];
}

export interface TreeProps extends HTMLAttributes<HTMLDivElement> {
  data: TypeTree[];
}
const TreeStyled = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  color: rgba(0, 0, 0, 1);
  .inner-container {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-left: 1em;
    gap: 8px;
    //border: 2px solid red;
    .title {
      .content {
        white-space: nowrap;
        display: flex;
        gap: 5px;
        align-items: center;
      }
    }
  }
  .container {
    //display: flex;
    flex-direction: column;

    //gap: 5px;
    //border: 2px solid red;
    //margin-bottom: 10px;
    > .ui-tree-title {
      display: flex;
      gap: 8px;
      align-items: center;
      .content {
        white-space: nowrap;
        display: flex;
        gap: 5px;
        align-items: center;
      }
      > .icon {
        display: flex;
        align-items: center;
        white-space: nowrap;
        cursor: pointer;
        transition: all 250ms;
      }
      .icon.rotate {
        transform: rotate(90deg);
      }
    }
  }
  .inner-container {
    transition: all 250ms;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
  .visible.inner-container {
    opacity: 1;
    height: auto;
  }
`;

const NoChild = styled.div`
  margin-left: calc(0.8em + 8px);
  display: flex;
  //gap: 5px;
  align-items: center;
`;
const Tree: React.FC<TreeProps> = (props) => {
  const { data } = props;
  const render = (renderData: TypeTree[]): ReactNode => {
    return renderData.map((item) => {
      if (item.children) {
        return (
          <div key={item.key} className="container">
            <div className="ui-tree-title">
              <span
                className="icon"
                role="presentation"
                onClick={(e: MouseEvent<HTMLDivElement>) => {
                  const el = e.currentTarget.parentNode!.parentNode!.children[1] as HTMLDivElement;
                  const iconEl = e.currentTarget;
                  if (el.getAttribute('class')!.split(' ').indexOf('visible') < 0) {
                    el.classList.add('visible');
                    iconEl.classList.add('rotate');
                  } else {
                    el.classList.remove('visible');
                    iconEl.classList.remove('rotate');
                  }
                }}
              >
                <RightIcon width="0.8em" height="0.8em" />
              </span>
              <span className="content">{item.title}</span>
            </div>
            <div className={classNames('inner-container', 'hidden')}>{render(item.children)}</div>
          </div>
        );
      }
      return <NoChild key={item.key}>{item.title}</NoChild>;
    });
  };
  return <TreeStyled>{render(data)}</TreeStyled>;
};
Tree.defaultProps = {};

export default Tree;
