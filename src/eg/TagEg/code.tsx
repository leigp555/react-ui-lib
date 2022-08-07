import { translate } from '../translate';

export const code = translate(`
import { Tag, TagGroup } from 'uix';\n
export const App:React.RC=()=>{
  const close = (el: HTMLDivElement) => {
    console.log(el);
  };

  const [tags, setTags] = useState<Tags>([
    { id: '1', tagContent: 'purple', color: '#FFFFCC' },
    { id: '2', tagContent: 'magenta', color: 'magenta' },
    { id: '4', tagContent: 'gold', color: 'gold' },
    { id: '5', tagContent: 'gold', color: 'gold' },
    { id: '6', tagContent: 'gold', color: 'gold' },
    { id: '7', tagContent: 'gold', color: 'gold' },
    { id: '8', tagContent: 'gold', color: 'gold', closeable: true },
    { id: '9', tagContent: 'gold', color: 'gold', closeable: true },
    { id: '10', tagContent: 'gold', color: 'gold', closeable: true }
  ]);
  const tagsChange = (tag: Tags) => {
    console.log(tag);
  };
  return (
    <div className="Eg">
      <div className="showEg">
        <Tag color="#FFFFCC">purple</Tag>
        <Tag color="#FF99FF">purple</Tag>
        <Tag color="#FF0000FF">purple</Tag>
        <Tag color="magentamagenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="black">black</Tag>
        <Tag color="purple">purple</Tag>
        <Tag color="purple" callback={close} closeable>
          purple
        </Tag>
      </div>
      <div>
        <TagGroup tags={tags} setTag={setTags} callback={tagsChange} closeable />
      </div>
      <div>
        <TagGroup tags={tags} setTag={setTags} callback={tagsChange} closeable={false} />
      </div>
    </div>
  );
}
`);
