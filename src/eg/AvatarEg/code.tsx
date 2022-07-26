import { translate } from '../translate';

export const code = translate(`
import { Avatar } from 'uix-react';\n
export const App:React.RC=()=>{
  return (
    <div className="Eg">
      <div className="showEg" style={{ gap: '50px' }}>
        <Avatar size={20}>
          <UserIcon width="5em" height="5em" />
        </Avatar>
        <Avatar src="https://joeschmoe.io/api/v1/random" size={40} />
        <Avatar size={30}>
          <UserIcon width="2em" height="2em" />
        </Avatar>
        <Avatar size={60} bgc="#1890ff">
          <UserIcon width="2em" height="2em" />
        </Avatar>
        <Avatar size={50} bgc="inherit">
          <UserIcon width="2em" height="2em" />
        </Avatar>
      </div>
    </div>
  );
}
`);
