import React from 'react';
import { Image } from '../../lib';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <div className="showEg">
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
    </div>
  );
};
