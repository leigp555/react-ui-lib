import { translate } from '../translate';

export const code = translate(`
import { Calendar } from 'uix-react';\n
export const App:React.RC=()=>{
  const fn = (dataValue: string) => {
    console.log(dataValue);
  };
  return (
    <div className="Eg">
      <div className="showEg" style={{ width: '300px', height: '300px' }}>
        <Calendar callback={fn} />
      </div>
    </div>
  );
}
`);
