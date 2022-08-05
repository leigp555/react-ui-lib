import { translate } from '../translate';

export const dropdown = translate(`
import { Button } from 'uix';\n
export const App:React.RC=()=>{
  return (
     <div>
        <Button>按钮</Button>
        <Button type="primary">按钮</Button>
        <Button type="default">按钮</Button>
        <Button type="link">按钮</Button>
        <Button type="text">按钮</Button>
        <Button type="dashed">按钮</Button>
        <Button disabled>按钮</Button>
        <Button radius>按钮</Button>
     </div>
  )
}
`);
