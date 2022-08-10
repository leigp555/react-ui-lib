import { translate } from '../translate';

export const code = translate(`
import { Button, Modal } from 'uix-react';\n
export const App:React.RC=()=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log('确定');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log('取消');
  };

  const showModal2 = () => {
    setIsModalVisible2(true);
  };
  const handleOk2 = () => {
    setIsModalVisible2(false);
    console.log('确定');
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
    console.log('取消');
  };
  return (
    <div className="Eg">
      <div>
        <Button type="primary" onClick={showModal}>
          have mask
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
      <div>
        <Button type="primary" onClick={showModal2}>
          no mask
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible2}
          onOk={handleOk2}
          onCancel={handleCancel2}
          mask={false}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
}
`);
