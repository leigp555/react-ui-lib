import { translate } from '../translate';

export const code = translate(`
import { Collapse, Panel } from 'uix';\n
export const App:React.RC=()=>{
  const text = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius impedit laboriosam nesciunt
      optio praesentium quaerat ratione sequi ullam unde velit! Accusantium dolorum magnam mollitia
      quibusdam rerum sit suscipit temporibus voluptate!
    </p>
  );
  return (
    <div className="Eg">
      <Collapse defaultKey="1">
        <Panel header="This is panel header 1" order="1">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 2" order="2">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 3" order="3">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 4" order="4">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 5" order="5">
          <div>{text}</div>
        </Panel>
      </Collapse>
      <Collapse defaultKey="null">
        <Panel header="This is panel header 1" order="1">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 2" order="2">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 3" order="3">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 4" order="4">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 5" order="5">
          <div>{text}</div>
        </Panel>
      </Collapse>
    </div>
  );
}
`);
