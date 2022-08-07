import { translate } from '../translate';

export const code = translate(`
import { TimeItem, Timeline } from 'uix';\n
export const App:React.RC=()=>{
  return (
    <div className="Eg">
      <Timeline mode="left">
        <TimeItem color="red">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </TimeItem>
        <TimeItem color="green">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
        <TimeItem color="blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </TimeItem>
        <TimeItem color="orange">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
        <TimeItem dotIcon={<SunIcon width="1em" height="1em" />}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
      </Timeline>
      <Timeline mode="right">
        <TimeItem color="red">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </TimeItem>
        <TimeItem color="green">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
        <TimeItem color="blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </TimeItem>
        <TimeItem color="orange">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
        <TimeItem dotIcon={<SunIcon width="1em" height="1em" />}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
      </Timeline>
      <Timeline mode="alternate">
        <TimeItem color="red">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </TimeItem>
        <TimeItem color="green">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
        <TimeItem color="blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </TimeItem>
        <TimeItem color="orange">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
        <TimeItem dotIcon={<SunIcon width="1em" height="1em" />}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </TimeItem>
      </Timeline>
    </div>
  );
}
`);
