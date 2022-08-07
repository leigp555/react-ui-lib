import { translate } from '../translate';

export const code = translate(`
import { Switch } from 'uix';\n
export const App:React.RC=()=>{
  const onChange = (checked: boolean) => {
    console.log(checked);
  };
  return (
    <div className="Eg">
      <Switch defaultChecked callback={onChange} />
      <Switch callback={onChange} />
      <Switch onColor="red" offColor="orange" callback={onChange} defaultChecked />
    </div>
  );
}
`);
