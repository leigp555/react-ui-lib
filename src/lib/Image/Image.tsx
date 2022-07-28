import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import EyeIcon from '../icons/eye_show.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  src: string;
}
const TemplateStyled = styled.div`
  > .inner {
    display: inline-block;
    position: relative;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity 250ms;
      > .eye {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        gap: 2px;
        > span {
          color: white;
          font-size: 14px;
        }
      }
    }
    &:hover > .mask {
      opacity: 1;
    }
  }

  img {
    max-width: 100%;
    vertical-align: bottom;
  }
`;
const Image: React.FC<Props> = (props) => {
  const { width, src } = props;
  return (
    <TemplateStyled>
      <div className="inner">
        <img src={src} alt="图片" style={{ width }} />
        <div className="mask">
          <span className="eye">
            <EyeIcon width="1.5em" height="1.5em" fill="#FFFFFF" />
            <span>预览</span>
          </span>
        </div>
      </div>
    </TemplateStyled>
  );
};
Image.defaultProps = {
  width: 100
};

export default Image;
