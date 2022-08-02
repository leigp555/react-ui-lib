import React, { HTMLAttributes, ReactNode, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import UploadIcon from '../icons/upload.svg';
import { fileToUrl } from './fileToUrl';

const Wrap = styled.div`
  border: 1px dashed #535971;
  min-height: 100px;
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;
const StyledInput = styled.input`
  display: block;
  flex-grow: 10;
  width: 100%;
  opacity: 0;
`;
const StyledTip = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export interface UploadProps extends HTMLAttributes<HTMLInputElement> {
  getFiles: (data: File[]) => void;
  getImgUrls?: undefined | ((data: string[]) => void);
  getUrlFail?: undefined | (() => void);
  accept?: string;
  multiple?: boolean;
  tip?: ReactNode;
}

const Upload: React.FC<UploadProps> = (props) => {
  const { getFiles, getImgUrls, tip, getUrlFail, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  // 支持点击上传
  const inputFile = useCallback((e: Event) => {
    const el = e.target as HTMLInputElement;
    const fileBlob = Array.from(el.files ? el.files : []) as File[];
    // 执行回调函数
    getFiles(fileBlob);
    if (getImgUrls) {
      const queue = fileBlob.map((item) => {
        return fileToUrl(item);
      });
      Promise.all(queue)
        .then((res) => {
          getImgUrls(res);
        })
        .catch(() => {
          if (getUrlFail) getUrlFail();
        });
    }
  }, []);

  // 支持拖拽上传
  const DropFile = (e: React.DragEvent<HTMLInputElement>) => {
    if (inputRef.current) inputRef.current.removeEventListener('change', inputFile);
    const fileBlob = Array.from(e.dataTransfer.files) as File[];
    getFiles(fileBlob);
    if (getImgUrls) {
      const queue = fileBlob.map((item) => {
        return fileToUrl(item);
      });
      Promise.all(queue)
        .then((res) => {
          getImgUrls(res);
        })
        .catch(() => {
          if (getUrlFail) getUrlFail();
        });
    }
  };
  // 初始化
  useEffect(() => {
    if (inputRef.current) inputRef.current.addEventListener('change', inputFile);
  }, []);
  return (
    <Wrap>
      <StyledTip>
        <UploadIcon fill="#40a9ff" style={{ width: '2em', height: '2em' }} />
        <span>{tip}</span>
      </StyledTip>
      <StyledInput
        {...rest}
        ref={inputRef}
        type="file"
        onDrop={(e: React.DragEvent<HTMLInputElement>) => DropFile(e)}
      />
    </Wrap>
  );
};

Upload.defaultProps = {
  getUrlFail: undefined,
  getImgUrls: undefined,
  accept: '*',
  multiple: false,
  tip: '点击或拖拽上传文件'
};

export default Upload;
