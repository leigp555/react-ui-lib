import { translate } from '../translate';

export const code = translate(`
import { Affix } from 'uix-react';\n
export const App:React.RC=()=>{
 const [top, setTop] = useState(200);
  const render = (num: number): React.ReactNode[] => {
    const vNode: React.ReactNode[] = [];
    for (let i = 0; i < num; i++) {
      vNode.push(
        <p key={Math.random()}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, delectus deleniti
          enim, eveniet hic magnam nihil nisi placeat quam quibusdam ratione reiciendis rem
          repellendus reprehenderit saepe sequi, similique tenetur.
        </p>
      );
    }
    return vNode;
  };
  return (
    <div className="Eg">
      <div>{render(2)}</div>
      <Affix
        offsetTop={100}
        rowPosition="center"
        container={document.getElementById('app-component-show')}
      >
        <Button onClick={() => setTop(top + 10)}>距离顶部100px固定,水平中间</Button>
      </Affix>
      <div>{render(8)}</div>
      <Affix offsetTop={top} container={document.getElementById('app-component-show')}>
        <div role="presentation">
          <Button onClick={() => setTop(top + 10)}> 距离顶部200px固定，水平左边</Button>
        </div>
      </Affix>
      <div>{render(10)}</div>
      <Affix
        offsetTop={300}
        rowPosition="end"
        container={document.getElementById('app-component-show')}
      >
        <Button onClick={() => setTop(top + 10)}>距离顶部300px固定,水平右边</Button>
      </Affix>
      <div>{render(10)}</div>
    </div>
  );
`);
