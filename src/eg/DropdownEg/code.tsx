import { translate } from '../translate';

export const code = translate(`
import {  Dropdown, Button } from 'uix-react';\n

const tips: Tip[] = [
  {
    id: 1,
    message: <span style={{ color: 'red' }}>Lorem ipsum</span>
  },
  {
    id: 2,
    message: 'Lorem ipsum dolor sit amet'
  },
  {
    id: 3,
    message: <span style={{ color: '#1890ff' }}>Lorem ipsum dolor</span>
  },
  {
    id: 4,
    message: 'Lorem ipsum'
  }
];
export const App:React.RC=()=>{
  return (
    <div className="Eg">
      <div className="showEg">
        <Dropdown tips={tips}>
          <Button>xxx</Button>
        </Dropdown>
      </div>
    </div>
  );
}
`);
