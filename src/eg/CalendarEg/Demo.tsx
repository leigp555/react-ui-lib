import React from 'react';
import { Calendar } from '../../lib';

export const Demo: React.FC = () => {
  const fn = (dataValue: string) => {
    console.log(dataValue);
  };
  return (
    <div className="Eg">
      <div style={{ width: '300px', height: '280px' }}>
        <Calendar callback={fn} />
      </div>
    </div>
  );
};
