import { translate } from '../translate';

export const code = translate(`
import { Col, Input, InputIcon, Row } from 'uix-react';\n
export const App:React.RC=()=>{
  const validate: Validate[] = [
    {
      pattern: /^\\w+$/g,
      message: '4-10位数字'
    }
  ];
  const tips: Tip[] = [
    {
      id: 1,
      message: 'xxx'
    },
    {
      id: 2,
      message: 'yyy'
    },
    {
      id: 2,
      message: 'zzz'
    }
  ];
  const callback = (value: string) => {
    console.log(value);
  };
  return (
    <div className="Eg">
      <Row height={30}>
        <Col span={25} offset={0}>
          <Input placeholder="用户名" rules={validate} callback={callback}>
            <InputIcon position="left">
              <UserIcon width="1em" height="1em" />
            </InputIcon>
          </Input>
        </Col>
      </Row>
      <Row height={30}>
        <Col span={25} offset={0}>
          <Input placeholder="用户名" rules={validate} allowClear>
            <InputIcon position="left">
              <UserIcon width="1em" height="1em" />
            </InputIcon>
          </Input>
        </Col>
      </Row>
      <Row height={30}>
        <Col span={25} offset={0}>
          <Input type="password" placeholder="密码" allowClear>
            <InputIcon position="left">
              <PassIcon width="1em" height="1em" />
            </InputIcon>
          </Input>
        </Col>
      </Row>
      <Row height={30}>
        <Col span={25} offset={0}>
          <Input allowClear tips={tips} />
        </Col>
      </Row>
    </div>
  );
}
`);
