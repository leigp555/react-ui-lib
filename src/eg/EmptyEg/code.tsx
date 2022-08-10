import { translate } from '../translate';

export const code = translate(`
import { Button, Empty } from 'uix-react';\n
export const App:React.RC=()=>{
return (
    <div className="Eg">
      <div style={{ border: '1px solid orange', padding: '20px' }}>
        <Empty
          icon={<EmptyIcon width="3em" height="3em" />}
          description={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores
              dolorum ducimus, eos, impedit
            </p>
          }
        >
          <Button type="primary">back</Button>
        </Empty>
      </div>
      <div style={{ border: '1px solid orange', padding: '20px' }}>
        <Empty
          description={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores
              dolorum ducimus, eos, impedit
            </p>
          }
        >
          <Button type="primary">back</Button>
        </Empty>
      </div>
      <div style={{ border: '1px solid orange', padding: '20px' }}>
        <Empty icon={<EmptyIcon3 width="3em" height="3em" />}>
          <Button type="primary">back</Button>
        </Empty>
      </div>
    </div>
  );
}
`);
