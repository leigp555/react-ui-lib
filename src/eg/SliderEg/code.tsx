import { translate } from '../translate';

export const code = translate(`
import { Slider } from 'uix';\n
export const App:React.RC=()=>{
  const [defaultPercent, setPercent] = useState<number>(20);
  return (
    <div className="Eg">
      <div className="showEg">
        <Slider
          defaultPercent={defaultPercent}
          setPercent={setPercent}
          style={{ width: '300px' }}
        />
      </div>
    </div>
  );
}
`);
