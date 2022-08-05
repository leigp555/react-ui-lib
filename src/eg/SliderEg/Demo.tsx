import React, { useState } from 'react';
import { Slider } from '../../lib';

export const Demo: React.FC = () => {
  const [defaultPercent, setPercent] = useState<number>(20);
  return (
    <div className="Eg">
      <div className="showEg">
        <Slider
          defaultPercent={defaultPercent}
          setPercent={setPercent}
          style={{ width: '300px' }}
        />
      </div>
    </div>
  );
};
