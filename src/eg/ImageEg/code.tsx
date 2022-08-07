import { translate } from '../translate';

export const code = translate(`
import { Image } from 'uix';\n
export const App:React.RC=()=>{
  return (
    <div className="Eg">
      <div className="showEg">
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
    </div>
  );
}
`);
