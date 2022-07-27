import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import Upload from './Upload';
import { Tip } from '../Tip/Tip';
import Progress from '../Progress/Progress';

export type Config = {
  multiple: boolean;
  action: string;
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  config: Config;
}
const UploadToServerStyled = styled.div`
  height: 100%;
`;

const UploadToServer: React.FC<Props> = (props) => {
  const { children, config, ...rest } = props;
  const { multiple, action } = config;
  const [processBar, setProcessBar] = useState<{
    [key: string]: { loaded: number; total: number };
  }>({});
  // 发请求
  const ajax = (url: string, data: FormData, filename: string) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('POST', url);
      request.onreadystatechange = () => {
        if (document.readyState === 'complete' && request.status === 200) {
          resolve(request.response);
        } else {
          reject(new Error('上传失败'));
        }
      };
      request.upload.onprogress = (e: ProgressEvent) => {
        setProcessBar((state) => {
          const newBar = { [filename]: { loaded: e.loaded, total: e.loaded } };
          return { ...state, ...newBar };
        });
      };

      request.send(data);
    });
  };
  // 获取源文件
  const getFiles = (data: File[]) => {
    data.forEach((item) => {
      const form = new FormData();
      form.append('ui_file', item);
      ajax(action, form, item.name)
        .then(() => {})
        .catch(() => {
          Tip('error', `${item.name}上传失败`);
        });
    });
    // ;
  };
  const processBarRender = () => {
    return Object.keys(processBar).map((item) => {
      if (processBar.hasOwnProperty.call(processBar, item)) {
        return (
          <>
            <div key={Math.random()} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{item}</span>
              <div style={{ display: 'flex', gap: '5px' }}>
                <span>上传进度:</span>
              </div>
            </div>
            <Progress percent={(processBar[item].loaded / processBar[item].total) * 100 || 0} />
          </>
        );
      }
      return '';
    });
  };
  return (
    <UploadToServerStyled {...rest}>
      <Upload getFiles={getFiles} tip="点击或拖拽上传文件" multiple={multiple} />
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {processBarRender()}
      </div>
    </UploadToServerStyled>
  );
};
UploadToServer.defaultProps = {
  children: ''
};

export default UploadToServer;
