import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import Upload from './Upload';
import { Tip } from '../Tip/Tip';
import Progress from '../Progress/Progress';

export type Config = {
  multiple: boolean;
  action: string;
};

export interface UploadToServerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  config: Config;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  > .processBar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > .title {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const UploadToServerStyled = styled.div`
  height: 20vh;
`;

const UploadToServer: React.FC<UploadToServerProps> = (props) => {
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
            <div className="title" key={Math.random()}>
              <span>{item}</span>
              <span>上传进度:</span>
            </div>
            <Progress percent={(processBar[item].loaded / processBar[item].total) * 100 || 0} />
          </>
        );
      }
      return '';
    });
  };
  return (
    <Wrap>
      <UploadToServerStyled {...rest}>
        <Upload getFiles={getFiles} tip="点击或拖拽上传文件" multiple={multiple} />
      </UploadToServerStyled>
      <div className="processBar">{processBarRender()}</div>
    </Wrap>
  );
};
UploadToServer.defaultProps = {
  children: ''
};

export default UploadToServer;
