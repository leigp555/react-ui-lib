import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Input, { Tip } from '../Input/Input';
import InputIcon from '../Input/InputIcon';
import LeftIcon from '../icons/left2.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const CalendarStyled = styled.div`
  border: 1px solid rgba(100, 100, 100, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
  .select {
    display: flex;
    gap: 10px;
    justify-content: end;
    padding: 10px 20px;
    > .year {
      width: 5em;
      height: 1.5em;
    }
    > .month {
      width: 4em;
      height: 1.5em;
    }
  }
  .everyRow {
    display: flex;
    flex-grow: 1;
  }
  .everyCell {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .week {
    display: flex;
    height: 2.5em;
    width: 100%;
  }
  .everyWeek {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// 获取当前月份
// const currentMonth = dayjs().month();
// 获取当前年份
const currentYear = dayjs().year();

// 创建年份提示
const createYear = () => {
  const year: Tip[] = [];
  const startYear = currentYear - 5;
  for (let i = 0; i < 10; i++) {
    year.push({ id: i, message: `${startYear + i}年` });
  }
  return year;
};
// 创建月份提示
const createMonth = () => {
  const month: Tip[] = [];
  for (let i = 0; i < 12; i++) {
    month.push({ id: i, message: `${i + 1}月` });
  }
  return month;
};

const year: Tip[] = createYear();
const month: Tip[] = createMonth();

const Calendar: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const render = () => {
    const row: React.ReactNode[] = [];
    const column: React.ReactNode[] = [];
    const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    // 生成一行7个元素
    for (let i = 0; i < 7; i++) {
      row.push(
        <div key={Math.random()} className="everyCell">
          {i}
        </div>
      );
    }
    // 生成6行
    for (let i = 0; i < 6; i++) {
      column.push(
        <div key={Math.random()} className="everyRow">
          {row}
        </div>
      );
    }
    return (
      <>
        <div className="week">
          {week.map((item) => {
            return (
              <div key={Math.random()} className="everyWeek">
                {item}
              </div>
            );
          })}
        </div>
        {column}
      </>
    );
  };
  return (
    <CalendarStyled {...rest}>
      <div className="select">
        <div className="year">
          <Input
            tips={year}
            placeholder=""
            style={{
              padding: '0.4em 0.4em',
              minHeight: '1em',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            <InputIcon position="right" style={{ transform: 'rotate(-90deg)' }}>
              <LeftIcon width="0.8em" height="0.8em" />
            </InputIcon>
          </Input>
        </div>
        <div className="month">
          <Input
            tips={month}
            placeholder=""
            style={{
              padding: '0.4em 0.4em',
              minHeight: '1em',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            <InputIcon position="right" style={{ transform: 'rotate(-90deg)' }}>
              <LeftIcon width="0.8em" height="0.8em" />
            </InputIcon>
          </Input>
        </div>
      </div>
      {render()}
    </CalendarStyled>
  );
};
Calendar.defaultProps = {
  children: ''
};

export default Calendar;
