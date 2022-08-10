import React, { useState } from 'react';
import { ColumnMenu, ColumnSub, ItemGroup, Label, MenuItem } from '../../lib';

export const Demo: React.FC = () => {
  const [order, setOrder] = useState<number>(1);
  return (
    <div className="Eg">
      <ColumnMenu defaultOrder={order} setOrder={setOrder} style={{ width: '180px' }}>
        <ColumnSub>
          <ItemGroup>
            <Label>标签1</Label>
            <MenuItem order={1}>Option 1</MenuItem>
            <MenuItem order={2}>Option 2</MenuItem>
            <ItemGroup>
              <Label>标签2</Label>
              <MenuItem order={3}>Option 4</MenuItem>
              <MenuItem order={4}>Option 5</MenuItem>
            </ItemGroup>
          </ItemGroup>
          <ItemGroup>
            <Label>标签3</Label>
            <MenuItem order={5}>Option 6</MenuItem>
            <MenuItem order={6}>Option 7</MenuItem>
            <MenuItem order={7}>Option 8</MenuItem>
          </ItemGroup>
        </ColumnSub>
      </ColumnMenu>
    </div>
  );
};
