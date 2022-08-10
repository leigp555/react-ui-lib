import { translate } from '../translate';

export const code = translate(`
import { Avatar, Badge } from 'uix-react';\n
export const App:React.RC=()=>{
  return (
    <div className="Eg">
      <div className="showEg" style={{ gap: '50px' }}>
        <Badge count={200} overflowCount={99}>
          <div style={{ backgroundColor: '#ccc' }}>
            <Avatar size={32}>
              <UserIcon width="5em" height="5em" />
            </Avatar>
          </div>
        </Badge>
        <Badge count={200} overflowCount={10}>
          <div style={{ backgroundColor: '#ccc' }}>
            <Avatar size={32}>
              <UserIcon width="5em" height="5em" />
            </Avatar>
          </div>
        </Badge>
        <Badge count={2000} overflowCount={999}>
          <div style={{ backgroundColor: '#ccc' }}>
            <Avatar size={32}>
              <UserIcon width="5em" height="5em" />
            </Avatar>
          </div>
        </Badge>
      </div>
      <div className="showEg">
        <Badge count={<SunIcon width="1.5em" height="1.5em" />}>
          <div style={{ backgroundColor: '#ccc' }}>
            <Avatar size={32}>
              <UserIcon width="5em" height="5em" />
            </Avatar>
          </div>
        </Badge>
      </div>
      <div className="showEg">
        <Badge dot>
          <p style={{ color: '#1890ff' }}>Lorem ipsum dolor sit amet</p>
        </Badge>
      </div>
    </div>
  );
}
`);
