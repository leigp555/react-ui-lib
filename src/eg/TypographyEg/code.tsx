import { translate } from '../translate';

export const code = translate(`
import { Divider, Paragraph, Text, Title, Typography } from 'uix';\n
export const App:React.RC=()=>{
  return (
     <div>
       <Typography>
        <Title>Introduction</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi aut deserunt
          exercitationem ipsa ut. Ab, amet aut consequatur doloribus excepturi id labore maiores
          perspiciatis quidem suscipit totam unde voluptatibus.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim molestias perferendis
          sed vel. Deleniti distinctio facilis fugiat officiis quo! Est fugit magnam officia
          provident quidem, vitae. In pariatur, tempore.
          <Text mark>『amet』和『dolor』</Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
          <Text strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>。
        </Paragraph>
        <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at cum distinctio ea
          eveniet exercitationem facilis iusto maiores minus mollitia nostrum, nulla placeat rem
          repellendus rerum, sed veniam vero voluptatibus?（<Text code>Sketch</Text> 和
          <Text code>Axure</Text>），Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Adipisci amet blanditiis consectetur consequatur ducimus, earum, error fugit in mollitia
          quam quibusdam quod reiciendis rem reprehenderit, rerum sed ullam voluptates voluptatum.。
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              <a href="/docs/spec/proximity-cn">reprehenderit</a>
            </li>
            <li>
              <a href="/docs/spec/overview-cn">reprehenderit</a>
            </li>
            <li>
              <a href="/docs/resources-cn">reprehenderit</a>
            </li>
          </ul>
        </Paragraph>

        <Paragraph>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid
            doloribus, ducimus enim explicabo fugiat, harum nulla praesentium quia quis repellendus
            temporibus unde velit voluptatem voluptatibus! Fugit, saepe?
          </blockquote>
          <pre style={{ marginTop: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque error
            illum laboriosam odit, provident quaerat reiciendis rem velit voluptatibus! Cupiditate
            dignissimos est illum impedit natus neque reiciendis unde voluptatibus?
          </pre>
        </Paragraph>

        <Paragraph>
          press <Text keyboard>Esc</Text> out
        </Paragraph>
        <Divider>page one</Divider>
      </Typography>
     </div>
  )
}
`);
