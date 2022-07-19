import React, { HTMLAttributes, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Left from '../icons/left.svg';
import Right from '../icons/right.svg';
import DoubleLeft from '../icons/doubleLeft.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  defaultPage?: number;
  totalSrc: number;
  perPage?: number;
  callback?: (currentPage: number, start: number, end: number) => void;
}
const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const PageButton = styled(Button).attrs({
  type: 'text',
  radius: true,
  border: 'none'
})`
  height: 2em;
  min-width: 2em;
  padding: 0 2px;
  border: 1px solid #d9d9d9;
  outline: none;
  box-shadow: none;
  &:hover {
    -webkit-filter: brightness(100%);
    border: 1px solid #1890ff;
  }
`;
const PageWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const InputStyled = styled.input`
  max-width: 3em;
  height: 2em;
  outline: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 10px;
  &:focus {
    border: 1px solid #1890ff;
    box-shadow: 0 0 4px 1px rgba(24, 144, 255, 0.2);
  }
`;
const Pagination: React.FC<Props> = (props) => {
  const { children, perPage, callback, defaultPage, totalSrc, ...rest } = props;
  const totalPage = Math.ceil(Math.abs(totalSrc!) / perPage!);
  const [n, setN] = useState(Math.abs(defaultPage! > totalPage ? 1 : defaultPage!)); // 当前处于那一页
  const pageWrap = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dom: ReactNode[] = [];
  // eslint-disable-next-line consistent-return
  const createPageNumber = (i: number): number => {
    let endPage = 0;
    if (totalPage <= 5) {
      endPage = i + 1;
    }
    if (totalPage > 5 && n <= 5) {
      endPage = i + 1;
    }
    if (totalPage > 5 && n > 5) {
      endPage = n - 2 + i;
      if (n + 5 > totalPage) {
        endPage = n - 4 + i;
      }
    }
    return endPage;
  };
  // 初始化
  for (let i = 0; i < (totalPage > 5 ? 5 : totalPage); i++) {
    dom.push(<PageButton key={`button${Math.random()}${i}`}>{createPageNumber(i)}</PageButton>);
  }

  // 左侧被点击
  const leftClick = () => {
    if (n > 1) {
      setN((state) => state - 1);
    }
  };
  // 右侧被点击
  const rightClick = () => {
    if (n < totalPage) {
      setN(() => n + 1);
    }
  };
  const call = useCallback((numberPage: number) => {
    if (perPage) {
      let start = 1;
      let end = 1;
      if (numberPage === 1) {
        start = 1;
      } else {
        start = perPage * numberPage - perPage;
      }
      if (perPage * numberPage > totalSrc) {
        end = totalSrc;
      } else {
        end = perPage * numberPage;
      }
      callback?.(numberPage, start, end);
    }
  }, []);
  const WrapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLButtonElement;
    if (el.tagName.toLowerCase() === 'button') {
      const numberPage = parseInt(el.innerText, 10);
      setN(numberPage);
    }
  };
  //  更多被点击
  const moreClick = () => {
    if (n + 5 < totalPage) {
      setN(() => n + 5);
    } else {
      setN(totalPage);
    }
  };
  // 输入新的页码
  const inputNewPageNumber = () => {
    if (inputRef.current) {
      const pageNumber = parseInt(inputRef.current?.value, 10);
      if (pageNumber >= totalPage) {
        setN(totalPage);
      } else {
        setN(pageNumber);
      }
    }
  };
  useEffect(() => {
    call(n);
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
        onClick={moreClick}
        style={{
          cursor: n >= totalPage! ? 'not-allowed' : 'pointer',
          border: 'none',
          backgroundColor: 'inherit'
        }}
      >
        <DoubleLeft fill="#636567" width="1.1em" height="1.1em" />
      </PageButton>
      <PageButton
        onClick={rightClick}
        style={{ cursor: n >= totalPage! ? 'not-allowed' : 'pointer' }}
      >
        <Right fill="#636567" width="1.1em" height="1.1em" />
      </PageButton>
      <span>跳至</span>
      <InputStyled defaultValue={n} ref={inputRef} onBlur={inputNewPageNumber} />
      <span>页</span>
    </PaginationStyled>
  );
};
Pagination.defaultProps = {
  defaultPage: 1,
  callback: () => {},
  perPage: 5
};

export default Pagination;
