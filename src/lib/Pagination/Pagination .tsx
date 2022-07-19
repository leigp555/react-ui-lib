import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Left from '../icons/left.svg';
import Right from '../icons/right.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  currentPage?: number;
  totalSrc: number;
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
  const pageWrap = useRef<HTMLDivElement | null>(null);
  const dom: ReactNode[] = [];

  // eslint-disable-next-line consistent-return
  const createPageNumber = (i: number): number => {
    let endPage = 0;
    if (totalSrc <= 5) {
      endPage = i + 1;
    }
    if (totalSrc > 5 && n <= 5) {
      endPage = i + 1;
    }
    if (totalSrc > 5 && n > 5) {
      endPage = n - 4 + i;
    }
    return endPage;
  };
  // 初始化
  for (let i = 0; i < (totalSrc > 5 ? 5 : totalSrc); i++) {
    dom.push(<PageButton key={`button${Math.random()}${i}`}>{createPageNumber(i)}</PageButton>);
  }
  // const totalPage = Math.abs(totalSrc!) / 5;

  // 左侧被点击
  const leftClick = () => {
    if (n > 1) {
      setN((state) => state - 1);
    }
  };
  // 右侧被点击
  const rightClick = () => {
    if (n < totalSrc) {
      setN(() => n + 1);
    }
  };
  const WrapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLButtonElement;
    if (el.tagName.toLowerCase() === 'button') {
      const numberPage = parseInt(el.innerText, 10);
      callback?.(numberPage);
      setN(numberPage);
    }
  };

  useEffect(() => {
    if (pageWrap.current) {
      const childList = Array.from(pageWrap.current.children as unknown as HTMLButtonElement[]);
      childList.forEach((item) => {
        if (item.innerText === n.toString()) {
          item.style.color = '#1890ff';
          item.style.border = '1px solid #1890ff';
        }
      });
    }
  }, [n]);
  return (
    <PaginationStyled {...rest}>
      <PageButton onClick={leftClick} style={{ cursor: n <= 1 ? 'not-allowed' : 'pointer' }}>
        <Left fill="#636567" width="1.1em" height="1.1em" />
      </PageButton>
      <PageWrap
        ref={pageWrap}
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
  callback: () => {}
};

export default Pagination;
