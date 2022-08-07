import { translate } from '../translate';

export const code = translate(`
import { Button, Drawer } from 'uix';\n
export const App:React.RC=()=>{
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer2 = () => {
    setVisible2(true);
  };
  const onClose2 = () => {
    setVisible2(false);
  };
  const showDrawer3 = () => {
    setVisible3(true);
  };
  const onClose3 = () => {
    setVisible3(false);
  };
  const showDrawer4 = () => {
    setVisible4(true);
  };
  const onClose4 = () => {
    setVisible4(false);
  };
  return (
    <div className="Eg">
      <div style={{ display: 'flex', gap: '20px' }}>
        <Button type="primary" onClick={showDrawer}>
          right
        </Button>
        <Button type="primary" onClick={showDrawer2}>
          left
        </Button>
        <Button type="primary" onClick={showDrawer3}>
          top
        </Button>
        <Button type="primary" onClick={showDrawer4}>
          bottom
        </Button>
        <Drawer
          title="Basic Drawer"
          position="right"
          visible={visible}
          onClose={onClose}
          width={400}
          height={400}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Drawer
          title="Basic Drawer"
          position="left"
          visible={visible2}
          onClose={onClose2}
          width={400}
          height={400}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Drawer
          title="Basic Drawer"
          position="top"
          visible={visible3}
          onClose={onClose3}
          width={400}
          height={200}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Drawer
          title="Basic Drawer"
          position="bottom"
          visible={visible4}
          onClose={onClose4}
          width={400}
          height={200}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </div>
  );
}
`);
