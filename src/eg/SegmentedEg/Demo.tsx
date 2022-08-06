import React, { useEffect, useState } from 'react';
import { Segmented } from '../../lib';

export const Demo: React.FC = () => {
  const [value, setValue] = useState<React.ReactNode>('Daily');
  const [value2, setValue2] = useState<React.ReactNode>('Monthly');
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="Eg">
      <div>
        <Segmented
          options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
          value={value}
          changeValue={setValue}
        />
      </div>

      <Segmented
        options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
        value={value2}
        changeValue={setValue2}
      />
    </div>
  );
};
