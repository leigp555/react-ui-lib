import { translate } from '../translate';

export const code = translate(`
import { Breadcrumb,BreadcrumbItem } from 'uix-react';\n
export const App:React.RC=()=>{
    const [data, setData] = useState<{ content: string; icon: ReactNode }[]>([
    { content: 'Home', icon: <QQIcon fill="#008dff" width="1em" height="1em" /> },
    { content: 'Application Center', icon: <SunIcon fill="#008dff" width="1em" height="1em" /> },
    { content: 'Application List', icon: <RainIcon fill="#008dff" width="1em" height="1em" /> },
    { content: 'Empty', icon: '' }
  ]);
  return (
     <div>
       <div>
        <Button
          onClick={() => {
            setData((state) => [
              ...state,
              { content: 'Add', icon: <SnowIcon fill="#008dff" width="1em" height="1em" /> }
            ]);
          }}
        >
          添加
        </Button>
        <Breadcrumb
          separator="/"
          data={data}
          renderItem={(item) => (
            <BreadcrumbItem>
              {item.icon}
              <span>{item.content}</span>
            </BreadcrumbItem>
          )}
        />
        <Breadcrumb
          separator="~"
          data={data}
          renderItem={(item) => (
            <BreadcrumbItem>
              {item.icon}
              <span>{item.content}</span>
            </BreadcrumbItem>
          )}
        />
      </div>
     </div>
  )
}
`);
