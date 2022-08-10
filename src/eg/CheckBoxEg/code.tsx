import { translate } from '../translate';

export const code = translate(`
import { Button, Checkbox } from 'uix-react';\n
export const App:React.RC=()=>{
  const options: Options[] = [
    { label: 'apple', value: 'apple' },
    { label: 'pear', value: 'pear' },
    { label: 'orange', value: 'orange' },
    { label: 'yellow', value: 'yellow' },
    { label: 'red', value: 'red' },
    { label: 'black', value: 'black' },
    { label: 'blue', value: 'blue' }
  ];
  const [checked, setChecked] = useState<string[]>(['apple']);
  useEffect(() => {
    console.log(checked);
  }, [checked]);
  return (
    <div className="Eg">
      <div>
        <Checkbox options={options} checked={checked} setChecked={setChecked} />
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Button
          onClick={() => {
            console.log(checked);
          }}
        >
          log selected
        </Button>
        <Button
          onClick={() => {
            const arr = options.reduce((result, item) => {
              result.push(item.value);
              return result;
            }, [] as string[]);
            setChecked(arr);
          }}
        >
          check all
        </Button>
        <Button
          onClick={() => {
            setChecked([]);
          }}
        >
          clear all
        </Button>
      </div>
      <div>
        <Checkbox
          options={options}
          checked={checked}
          setChecked={setChecked}
          style={{ flexDirection: 'column', gap: '5px' }}
        />
      </div>
    </div>
  );
}
`);
