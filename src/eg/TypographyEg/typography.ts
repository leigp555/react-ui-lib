import { translate } from '../translate';

export const typography = translate(`
import { Text, Divider, Typography, Paragraph, Title } from 'uix';\n
export const App:React.RC=()=>{
  return (
     <div>
       <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis dignissimos
              dolore, doloribus enim eveniet, explicabo fugiat id impedit iure laboriosam laborum
              nobis officia praesentium quasi sed sequi tempora, unde.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore dolorem
              ducimus facilis hic possimus praesentium totam unde? Ipsa nam, soluta? Ad et quasi,
              ratione repudiandae sunt tempora temporibus veritatis.
              <Text strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, et, natus? Ad
                delectus deserunt doloribus, error explicabo id illum incidunt laborum minima,
                officiis, pariatur quasi reprehenderit sint? Dolores, tempora, vitae.
              </Text>
            </Paragraph>
            <Title level={2}> Lorem ipsum dolor sit amet,</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi
              corporis debitis, doloribus ducimus error excepturi exercitationem facilis id iure
              maxime modi nostrum optio quas recusandae repellendus sed suscipit? (
              <Text code>Lorem</Text> and
              <Text code>Lorem</Text>), Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid, aspernatur consequuntur deserunt dolorum ex inventore ipsa ipsam magnam magni
              minus molestias nam natus numquam optio perspiciatis quos temporibus vel veniam?
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <a href="/docs/spec/proximity">Principles</a>
                </li>
                <li>
                  <a href="/docs/spec/overview">Patterns</a>
                </li>
                <li>
                  <a href="/docs/resources">Resource Download</a>
                </li>
              </ul>
            </Paragraph>

            <Paragraph>
              Press <Text keyboard>Esc</Text> to exit...
            </Paragraph>

            <Divider />

            <Title>Introduction</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi aut
              deserunt exercitationem ipsa ut. Ab, amet aut consequatur doloribus excepturi id
              labore maiores perspiciatis quidem suscipit totam unde voluptatibus.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim molestias
              perferendis sed vel. Deleniti distinctio facilis fugiat officiis quo! Est fugit magnam
              officia provident quidem, vitae. In pariatur, tempore.
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
              Adipisci amet blanditiis consectetur consequatur ducimus, earum, error fugit in
              mollitia quam quibusdam quod reiciendis rem reprehenderit, rerum sed ullam voluptates
              voluptatum.。
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
                doloribus, ducimus enim explicabo fugiat, harum nulla praesentium quia quis
                repellendus temporibus unde velit voluptatem voluptatibus! Fugit, saepe?
              </blockquote>
              <pre style={{ marginTop: '10px' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque
                error illum laboriosam odit, provident quaerat reiciendis rem velit voluptatibus!
                Cupiditate dignissimos est illum impedit natus neque reiciendis unde voluptatibus?
              </pre>
            </Paragraph>

            <Paragraph>
              press<Text keyboard>Esc</Text>out
            </Paragraph>
          </Typography>
     </div>
  )
}
`);