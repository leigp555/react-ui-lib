import React, { HTMLAttributes, useRef, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import classNames from 'classnames';
import AutoComplete, { Tip } from '../AutoComplete/AutoComplete';
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
  padding: 10px 0;
  .select {
    display: flex;
    gap: 10px;
    justify-content: end;
    padding: 0 10px 10px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    > .year {
      width: 6em;
      height: 1.5em;
    }
    > .month {
      width: 4.5em;
      height: 1.5em;
    }
  }
  .everyRow {
    display: flex;
    flex-grow: 1;
    padding: 0 10px;
    font-size: 14px;
    line-height: 1.5em;
    font-weight: 400;
    color: #000000d9;
  }
  .everyCell {
    flex-grow: 1;
    flex-shrink: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    > span {
      width: 2em;
      line-height: 2em;
      text-align: center;
    }
    &.selected {
      > span {
        background-color: #1890ff;
        color: white;
      }
    }
  }
  .week {
    display: flex;
    height: 2.5em;
    width: 100%;
    padding: 0 10px;
  }
  .everyWeek {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// 获取当前月份
const currentMonth = dayjs().month() + 1;

// 获取当前年份
const currentYear = dayjs().year();

// 获取当前处于本月那一天
const currentDay = dayjs().date();

// 创建年份提示
const createYear = () => {
  const year: Tip[] = [];
  const startYear = currentYear - 5;
  for (let i = 0; i < 10; i++) {
    year.push({ id: i, message: `${startYear + i} 年` });
  }
  return year;
};
// 创建月份提示
const createMonth = () => {
  const month: Tip[] = [];
  for (let i = 0; i < 12; i++) {
    month.push({ id: i, message: `${i + 1} 月` });
  }
  return month;
};
// 获取月份的第一天
const getFirstDay = (data: string) => {
  return `${data}-01`;
};
const yearTip: Tip[] = createYear();
const monthTip: Tip[] = createMonth();

const Calendar: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(currentMonth);
  const selectedDay = useRef<string>(month.toString() + currentDay.toString());

  const firstDay = useRef<string>(getFirstDay(`${year}-${month}`));
  const changeYear = (value: string) => {
    setYear(parseInt(value.split(' ')[0], 10));
  };
  const changeMonth = (value: string) => {
    const newMonth = parseInt(value.split(' ')[0], 10);
    setMonth(newMonth);
    selectedDay.current = newMonth.toString() + currentDay.toString();
  };
  const render = () => {
    firstDay.current = getFirstDay(`${year}-${month}`);
    // 获取当月首日星期几
    const firstDayWeek = () => {
      if (dayjs(firstDay.current).day() === 0) {
        return 7;
      }
      return dayjs(firstDay.current).day();
    };
    // 获取当月总天数
    const currentMonthTotalDay = dayjs(firstDay.current).daysInMonth();
    // 获取上月首日
    const lastMonthFirstDay = getFirstDay(
      dayjs(firstDay.current).subtract(1, 'month').format('YYYY-MM')
    );
    // 获取上月总天数
    const lastMonthTotalDay = dayjs(lastMonthFirstDay).daysInMonth();
    const column: React.ReactNode[] = [];
    const mid: React.ReactNode[] = [];
    const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    // 生成一行7个元素
    const row = (num: number, start: number, cellMonth: number) => {
      const arr: React.ReactNode[] = [];
      for (let i = 0; i < num; i++) {
        arr.push(
          <div
            key={Math.random()}
            className={classNames(
              'everyCell',
              selectedDay.current === cellMonth.toString() + (start + i).toString()
                ? 'selected'
                : ''
            )}
            title={`${year}-${cellMonth}-${start + i}`}
          >
            <span>{start + i < 10 ? `0${start + i}` : start + i}</span>
          </div>
        );
      }
      return arr;
    };
    // 生成6行
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        const arr1 = mid.concat(
          row(firstDayWeek() - 1, lastMonthTotalDay - firstDayWeek() + 2, month - 1)
        );
        const arr2 = arr1.concat(row(8 - firstDayWeek(), 1, month));
        column.push(
          <div key={Math.random()} className="everyRow">
            {arr2}
          </div>
        );
      } else if (i === 4 && firstDayWeek() <= 5) {
        const restDay = currentMonthTotalDay - (7 * 4 - firstDayWeek() + 2) + 1;
        const arr1 = mid.concat(row(restDay, 7 * 4 - firstDayWeek() + 2, month));
        const arr2 = arr1.concat(row(7 - restDay, 1, month + 1));
        column.push(
          <div key={Math.random()} className="everyRow">
            {arr2}
          </div>
        );
      } else if (i === 5 && firstDayWeek() <= 5) {
        const restDay = currentMonthTotalDay - (7 * 4 - firstDayWeek() + 2) + 1;
        column.push(
          <div key={Math.random()} className="everyRow">
            {row(7, 7 - restDay + 1, month + 1)}
          </div>
        );
      } else if (i === 5 && firstDayWeek() > 5) {
        const restDay = currentMonthTotalDay - (7 * 5 - firstDayWeek() + 2) + 1;
        const arr1 = mid.concat(row(restDay, 7 * 5 - firstDayWeek() + 2, month));
        const arr2 = arr1.concat(row(7 - restDay, 1, month + 1));
        column.push(
          <div key={Math.random()} className="everyRow">
            {arr2}
          </div>
        );
      } else {
        column.push(
          <div key={Math.random()} className="everyRow">
            {row(7, 7 * i - firstDayWeek() + 2, month)}
          </div>
        );
      }
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
          <AutoComplete
            tips={yearTip}
            value={`${year.toString()} 年`}
            callback={changeYear}
            style={{ cursor: 'pointer' }}
          >
            <LeftIcon width="0.8em" height="0.8em" style={{ transform: 'rotate(-90deg)' }} />
          </AutoComplete>
        </div>
        <div className="month">
          <AutoComplete
            tips={monthTip}
            value={`${month.toString()} 月`}
            callback={changeMonth}
            style={{ cursor: 'pointer' }}
          >
            <LeftIcon width="0.8em" height="0.8em" style={{ transform: 'rotate(-90deg)' }} />
          </AutoComplete>
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
