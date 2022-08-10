import { translate } from '../translate';

export const code = translate(`
import {  Button, Loading } from 'uix-react';\n
export const App:React.RC=()=>{
  const [loading, setLoading] = useState(true);
  return (
    <div className="Eg">
      <div className="showEg">
        <Loading loading={loading}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus
            dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis
            recusandae reprehenderit sapiente, suscipit totam velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus
            dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis
            recusandae reprehenderit sapiente, suscipit totam velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus
            dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis
            recusandae reprehenderit sapiente, suscipit totam velit.
          </p>
        </Loading>
        <Button onClick={() => setLoading(!loading)}>{loading ? '加载中' : ' 未加载'}</Button>
      </div>
    </div>
  );
}
`);
