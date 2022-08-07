import { translate } from '../translate';

export const code = translate(`
import { Segmented } from 'uix';\n
export const App:React.RC=()=>{
  const [value, setValue] = useState<React.ReactNode>('Daily');
  const [value2, setValue2] = useState<React.ReactNode>('Monthly');
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="Eg">
      <div>
        <Segmented
          options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
          value={value}
          changeValue={setValue}
        />
      </div>

      <Segmented
        options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
        value={value2}
        changeValue={setValue2}
      />
    </div>
  );
}
`);
