import { translate } from '../translate';

export const code = translate(`
import { AutoComplete } from 'uix';\n

const tips: Tip[] = [
  {
    id: 1,
    message: 'xxx'
  },
  {
    id: 2,
    message: 'yyy'
  },
  {
    id: 3,
    message: 'zzz'
  },
  {
    id: 4,
    message: 'yyy'
  },
  {
    id: 5,
    message: 'yyy'
  },
  {
    id: 6,
    message: 'yyy'
  },
  {
    id: 7,
    message: 'yyy'
  },
  {
    id: 8,
    message: 'yyy'
  },
  {
    id: 9,
    message: 'yyy'
  },
  {
    id: 10,
    message: 'yyy'
  },
  {
    id: 11,
    message: 'yyy'
  },
  {
    id: 12,
    message: 'yyy'
  }
];
export const App:React.RC=()=>{
  const [value, setValue] = useState<string>('111');
  const fn = (selected: string) => {
    console.log(selected);
    setValue(selected);
  };
  return (
    <div className="Eg">
      <AutoComplete tips={tips} value={value} callback={fn} style={{ width: '200px' }}>
        <LeftIcon width="0.8em" height="0.8em" style={{ transform: 'rotate(-90deg)' }} />
      </AutoComplete>
    </div>
  );
}
`);
