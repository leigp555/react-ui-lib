import { translate } from '../translate';

export const code = translate(`
import { Button, Form, FormItem, Input, InputIcon } from 'uix';\n
export const App:React.RC=()=>{
  const validate: Validate[] = [
    {
      pattern: /^\\w+$/g,
      message: '4-10位数字'
    }
  ];
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="Eg">
      <div style={{ maxWidth: '300px' }}>
        <Form onFinish={onFinish}>
          <FormItem label="username" rules={validate}>
            <Input placeholder="用户名" allowClear>
              <InputIcon position="left">
                <UserIcon width="1em" height="1em" />
              </InputIcon>
            </Input>
          </FormItem>
          <FormItem label="password" rules={validate}>
            <Input type="password" placeholder="密码" allowClear>
              <InputIcon position="left">
                <PassIcon width="1em" height="1em" />
              </InputIcon>
            </Input>
          </FormItem>
          <FormItem>
            <Button style={{ width: '100%' }}>提交</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
`);
