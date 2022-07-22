import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import SuccessIcon from '../icons/success.svg';
import WarningIcon from '../icons/warning.svg';
import ErrIcon from '../icons/error.svg';
import NotFoundIcon from '../icons/notFound.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  status: 'success' | 'warning' | 'error' | '404';
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  gap?: number;
}
const ResultStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .titles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    > .title {
      font-size: 1.5em;
      font-weight: 700;
    }
    > .subTitle {
      font-size: 12px;
      font-weight: 500;
    }
  }
  > .actions {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;
const Result: React.FC<Props> = (props) => {
  const { children, gap, title, subTitle, status, ...rest } = props;
  return (
    <ResultStyled style={{ gap: `${gap}px` }} {...rest}>
      <span>
        <SuccessIcon
          style={{ display: status === 'success' ? 'inline-block' : 'none' }}
          width="4em"
          height="4em"
        />
        <WarningIcon
          style={{ display: status === 'warning' ? 'inline-block' : 'none' }}
          width="4em"
          height="4em"
        />
        <ErrIcon
          style={{ display: status === 'error' ? 'inline-block' : 'none' }}
          width="4em"
          height="4em"
        />
        <NotFoundIcon
          style={{ display: status === '404' ? 'inline-block' : 'none' }}
          width="10em"
          height="10em"
        />
      </span>
      <div className="titles">
        <p className="title">{title}</p>
        <p className="subTitle">{subTitle}</p>
      </div>
      <div className="actions">{children}</div>
    </ResultStyled>
  );
};
Result.defaultProps = {
  children: '',
  title: '',
  subTitle: '',
  gap: 50
};

export default Result;
