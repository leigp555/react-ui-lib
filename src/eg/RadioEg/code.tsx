import { translate } from '../translate';

export const code = translate(`
import {  Radio, RadioItem } from 'uix';\n
export const App:React.RC=()=>{
  const [value, setValue] = useState(2);
  const [value2, setValue2] = useState(4);
  const callback = (num: number) => {
    console.log('xx', num);
    setValue(num);
  };
  const callback2 = (num: number) => {
    console.log('yy', num);
    setValue2(num);
  };
  return (
    <div className="Eg">
      <Radio callback={callback} value={value} direction="row">
        <RadioItem value={1}>A</RadioItem>
        <RadioItem value={2}>B</RadioItem>
        <RadioItem value={3}>C</RadioItem>
        <RadioItem value={4}>D</RadioItem>
      </Radio>
      <Radio callback={callback2} value={value2} direction="column">
        <RadioItem value={1}>A</RadioItem>
        <RadioItem value={2}>B</RadioItem>
        <RadioItem value={3}>C</RadioItem>
        <RadioItem value={4}>D</RadioItem>
        <RadioItem value={5}>E</RadioItem>
      </Radio>
    </div>
  );
}
`);
