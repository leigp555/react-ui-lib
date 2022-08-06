import React from 'react';
import { Button, Empty } from '../../lib';
import EmptyIcon from '../../lib/icons/empty2.svg';
import EmptyIcon3 from '../../lib/icons/empty3.svg';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <div style={{ border: '1px solid orange', padding: '20px' }}>
        <Empty
          icon={<EmptyIcon width="3em" height="3em" />}
          description={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores
              dolorum ducimus, eos, impedit
            </p>
          }
        >
          <Button type="primary">back</Button>
        </Empty>
      </div>
      <div style={{ border: '1px solid orange', padding: '20px' }}>
        <Empty
          description={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores
              dolorum ducimus, eos, impedit
            </p>
          }
        >
          <Button type="primary">back</Button>
        </Empty>
      </div>
      <div style={{ border: '1px solid orange', padding: '20px' }}>
        <Empty icon={<EmptyIcon3 width="3em" height="3em" />}>
          <Button type="primary">back</Button>
        </Empty>
      </div>
    </div>
  );
};
