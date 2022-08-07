import React, { useState } from 'react';
import { Pagination } from '../../lib';

export const Demo: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const fn = (currentPage: number, start: number, end: number) => {
    console.log(start, end);
    setPage(currentPage);
  };
  return (
    <div className="Eg">
      <Pagination callback={fn} defaultPage={page} totalSrc={10} perPage={5} />
      <Pagination callback={fn} defaultPage={page} totalSrc={500} perPage={5} />
      <Pagination callback={fn} defaultPage={page} totalSrc={500} perPage={5} />
      <Pagination callback={fn} defaultPage={page} totalSrc={100} perPage={5} moreTool statistic />
      <Pagination callback={fn} defaultPage={page} totalSrc={500} perPage={5} goTool />
      <Pagination callback={fn} defaultPage={page} totalSrc={500} perPage={5} goTool moreTool />
      <Pagination
        callback={fn}
        defaultPage={page}
        totalSrc={500}
        perPage={5}
        goTool
        moreTool
        statistic
      />
    </div>
  );
};
