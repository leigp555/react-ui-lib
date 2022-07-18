import React, { HTMLAttributes, ReactNode, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Left from '../icons/left.svg';
import Right from '../icons/right.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  currentPage?: number;
  totalSrc?: number;
  callback?: (page: number) => void;
}
const PaginationStyled = styled.div`
  display: flex;
  gap: 8px;
`;
const PageButton = styled(Button).attrs({
  type: 'default',
  radius: true
})`
  height: 2em;
  min-width: 2em;
  padding: 0 2px;
  border: 1px solid #d9d9d9;
  &:hover {
    -webkit-filter: brightness(100%);
    border: 1px solid #1890ff;
  }
`;
const PageWrap = styled.div`
  display: flex;
  gap: 8px;
`;
const Pagination: React.FC<Props> = (props) => {
  const { children, callback, currentPage, totalSrc, ...rest } = props;
  const [n, setN] = useState(Math.abs(currentPage!)); // 当前处于那一页
  const dom: ReactNode[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    dom.push(<PageButton key={`button${i}`}>{i + 1}</PageButton>);
  }
  // const totalPage = Math.abs(totalSrc!) / 5;

  const leftClick = () => {
    if (n > 1) {
      setN((state) => state - 1);
    }
  };
  const rightClick = () => {
    if (n < totalSrc!) {
      setN(() => n + 1);
    }
  };
  const WrapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLElement;
    if (el.tagName.toLowerCase() === 'button') {
      const numberPage = parseInt(el.innerText, 10);
      callback?.(numberPage);
      setN(() => numberPage);
    }
  };
  return (
    <PaginationStyled {...rest}>
      <PageButton onClick={leftClick} style={{ cursor: n <= 1 ? 'not-allowed' : 'pointer' }}>
        <Left fill="#636567" width="1.1em" height="1.1em" />
      </PageButton>
      <PageWrap
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          WrapClick(e);
        }}
        role="presentation"
      >
        {dom}
      </PageWrap>
      <PageButton
        onClick={rightClick}
        style={{ cursor: n >= totalSrc! ? 'not-allowed' : 'pointer' }}
      >
        <Right fill="#636567" width="1.1em" height="1.1em" />
      </PageButton>
    </PaginationStyled>
  );
};
Pagination.defaultProps = {
  currentPage: 1,
  totalSrc: 1,
  callback: () => {}
};

export default Pagination;
