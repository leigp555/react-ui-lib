import { translate } from '../translate';

export const code = translate(`
import { Tip, Upload, UploadToServer } from 'uix';\n
export const App:React.RC=()=>{
  // 获取源文件
  const getFiles = (data: Blob[]) => {
    console.log(data);
    Tip('success', \`获取成功\`);
  };
  // 如果上传的是图片文件可以通过这个回调获取图片的base64信息
  const getImgUrls = (urls: string[]) => {
    console.log(urls);
  };
  // 获取图片base64信息失败将执行这个回调
  const getUrlFail = () => {
    Tip('error', \`获取失败\`);
  };
  const config = (): Config => {
    return {
      multiple: true,
      action: 'http://localhost:8000/v1/upload'
    };
  };
  return (
    <div className="Eg">
      <UploadToServer style={{ height: '200px' }} config={config()} />
      <Upload
        style={{ height: '200px' }}
        getFiles={getFiles}
        getImgUrls={getImgUrls}
        getUrlFail={getUrlFail}
        accept={'image/*'}
        tip="点击或拖拽上传图片"
        multiple
      />
      <Upload
        style={{ height: '200px' }}
        getFiles={getFiles}
        getImgUrls={getImgUrls}
        getUrlFail={getUrlFail}
      />
    </div>
  );
}
`);
