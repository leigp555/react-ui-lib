import { translate } from '../translate';

const percent = 50;
export const code = translate(`
import { Progress } from 'uix';\n
export const App:React.RC=()=>{
  return (
    <div className="Eg">
      <Progress percent={40} style={{ height: '10px', width: '300px' }} />
      <Progress percent={60} finishColor="orange" undoneColor="green" />
      <Progress type="circle" percent={60} finishColor="red" undoneColor="green" />
      <Progress
        type="circle"
        percent={20}
        finishColor="red"
        undoneColor="green"
        format={(percent) => \`${percent} Days\`}
      />
    </div>
  );
}
`);
