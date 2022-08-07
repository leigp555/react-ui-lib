import { translate } from '../translate';

export const code = translate(`
import { Divider } from 'uix';\n
export const App:React.RC=()=>{
  return (
     <div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti
          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum
          nesciunt, omnis possimus quam quasi repellendus tempora?
        </p>
        <Divider position="left">Text</Divider>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti
          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum
          nesciunt, omnis possimus quam quasi repellendus tempora?
        </p>
        <Divider position="left" offset={5}>
          Text
        </Divider>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti
          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum
          nesciunt, omnis possimus quam quasi repellendus tempora?
        </p>
        <Divider position="center">Text</Divider>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti
          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum
          nesciunt, omnis possimus quam quasi repellendus tempora?
        </p>
        <Divider offset={5} position="right">
          Text
        </Divider>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti
          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum
          nesciunt, omnis possimus quam quasi repellendus tempora?
        </p>
        <Divider position="right">Text</Divider>
      </div>
     </div>
  )
}
`);
