import { translate } from '../translate';

export const code = translate(`
import {  Button, Notification ,openNotification} from 'uix-react';\n
export const App:React.RC=()=>{
  const open = () => {
    openNotification(
      <Notification>
        <p>Notification Title</p>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda cum ex
          explicabo fuga, illo ipsa laudantium libero magni minus nobis nostrum, odio quam quibusdam
          recusandae saepe soluta totam voluptates?
        </div>
      </Notification>,
      3000
    );
  };
  return (
    <div className="Eg">
      <div className="showEg">
        <Button onClick={open}>按钮</Button>
      </div>
    </div>
  );
}
`);
