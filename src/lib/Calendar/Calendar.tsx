import React, { HTMLAttributes, useRef, useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import AutoComplete, { Tip } from '../AutoComplete/AutoComplete';
import LeftIcon from '../icons/left2.svg';
import './index.scss';

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  callback?: (dataValue: string) => void;
}

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

const Calendar: React.FC<CalendarProps> = (props) => {
  const { children, callback, ...rest } = props;
  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<string>(
    currentMonth.toString() + currentDay.toString()
  );

  const firstDay = useRef<string>(getFirstDay(`${year}-${month}`));
  const changeYear = (value: string) => {
    setYear(parseInt(value.split(' ')[0], 10));
  };
  const changeMonth = (value: string) => {
    const newMonth = parseInt(value.split(' ')[0], 10);
    setMonth(newMonth);
    setSelectedDay(newMonth.toString() + currentDay.toString());
  };
  const changeDay = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLSpanElement;
    const classArr = Array.from(el.classList);
    if (el.tagName.toLowerCase() === 'span' && classArr.indexOf('everyCell') >= 0) {
      const day = el.getAttribute('data-day');
      const dayArr = day?.split('-');
      if (dayArr) {
        setSelectedDay(`${dayArr[1]}${dayArr[2]}`);
        if (dayArr[1] === '0') {
          callback!(`${parseInt(dayArr[0], 10) - 1}-12-${dayArr[2]}`);
        } else if (dayArr[1] === '13') {
          callback!(`${parseInt(dayArr[0], 10) + 1}-01-${dayArr[2]}`);
        } else {
          callback!(`${dayArr[0]}-${dayArr[1]}-${dayArr[2]}`);
        }
      }
    }
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
    const week = ['一', '二', '三', '四', '五', '六', '日'];
    // 生成一行7个元素
    const row = (num: number, start: number, cellMonth: number) => {
      const arr: React.ReactNode[] = [];
      for (let i = 0; i < num; i++) {
        arr.push(
          <span
            key={Math.random()}
            className={classNames(
              'everyCell',
              selectedDay === cellMonth.toString() + (start + i).toString() ? 'selected' : ''
            )}
            title={`${year}-${cellMonth}-${start + i}`}
            data-day={`${year}-${cellMonth}-${start + i}`}
          >
            {start + i < 10 ? `0${start + i}` : start + i}
          </span>
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
        <div
          className="day"
          role="presentation"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            changeDay(e);
          }}
        >
          {column}
        </div>
      </>
    );
  };
  return (
    <div className="ui-wrap" {...rest}>
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
    </div>
  );
};
Calendar.defaultProps = {
  children: '',
  callback: () => {}
};

export default Calendar;
