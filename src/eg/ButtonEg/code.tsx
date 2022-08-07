import { translate } from '../translate';

export const code = translate(`
import { Button } from 'uix';\n
export const App:React.RC=()=>{
  return (
     <div>
       <div className="perEg">
        <Title level={4}>基本样式:</Title>
        <div className="showEg">
          <Button>按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="default">按钮</Button>
          <Button type="link">按钮</Button>
          <Button type="text">按钮</Button>
          <Button type="dashed">按钮</Button>
          <Button disabled>按钮</Button>
          <Button radius>按钮</Button>
        </div>
      </div>
      <div className="perEg">
        <Title level={4}>不同大小:</Title>
        <div className="showEg" style={{ alignItems: 'center' }}>
          <div>
            <Button type="primary" size="big">
              big
            </Button>
          </div>
          <div>
            <Button type="primary" size="normal">
              normal
            </Button>
          </div>
          <div>
            <Button type="primary" size="small">
              small
            </Button>
          </div>
        </div>
      </div>
      <div className="perEg">
        <Title level={4}>加载中</Title>
        <div className="showEg" style={{ alignItems: 'center' }}>
          <Button type="primary" loading>
            Loading
          </Button>
        </div>
      </div>
     </div>
  )
}
`);
