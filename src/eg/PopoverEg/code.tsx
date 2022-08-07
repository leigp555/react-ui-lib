import { translate } from '../translate';

export const code = translate(`
import { Button, Popover } from 'uix';\n
export const App:React.RC=()=>{
  const content = (
    <>
      <p>Content</p>
      <p>Content</p>
    </>
  );
  return (
    <div className="Eg" style={{ alignItems: 'center', padding: '100px 0' }}>
      <div className="showEg">
        <Popover position="rightTop" content={content} title="Title" trigger="hover">
          <Button>rightTop</Button>
        </Popover>
        <Popover position="rightCenter" content={content} title="Title" trigger="hover">
          <Button>rightCenter</Button>
        </Popover>
        <Popover position="rightBottom" content={content} title="Title" trigger="hover">
          <Button>rightBottom</Button>
        </Popover>
      </div>
      <div className="showEg">
        <Popover position="leftTop" content={content} title="Title" trigger="click">
          <Button>leftTop</Button>
        </Popover>
        <Popover position="leftCenter" content={content} title="Title" trigger="click">
          <Button>leftCenter</Button>
        </Popover>
        <Popover position="leftBottom" content={content} title="Title" trigger="click">
          <Button>leftBottom</Button>
        </Popover>
      </div>
      <div className="showEg">
        <Popover position="topLeft" content={content} title="Title" trigger="click">
          <Button>topLeft</Button>
        </Popover>
        <Popover position="topCenter" content={content} title="Title" trigger="click">
          <Button>topCenter</Button>
        </Popover>
        <Popover position="topRight" content={content} title="Title" trigger="click">
          <Button>topRight</Button>
        </Popover>
      </div>
      <div className="showEg">
        <Popover position="bottomLeft" content={content} title="Title" trigger="click">
          <Button>bottomLeft</Button>
        </Popover>
        <Popover position="bottomCenter" content={content} title="Title" trigger="click">
          <Button>bottomCenter</Button>
        </Popover>
        <Popover position="bottomRight" content={content} title="Title" trigger="click">
          <Button>bottomRight</Button>
        </Popover>
      </div>
    </div>
  );
}
`);
