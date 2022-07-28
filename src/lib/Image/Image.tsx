import React, { HTMLAttributes, useRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import CancelIcon from '../icons/cha.svg';
import EyeIcon from '../icons/eye_show.svg';
import BigIcon from '../icons/biger.svg';
import SmallIcon from '../icons/smaller.svg';
import TurnLeftIcon from '../icons/turnLeft.svg';

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
const PortalWrap = styled.div`
  width: 100%;
  height: 100%;
  > .action {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: end;
    width: 100%;
    gap: 30px;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 12px 50px;
    > span {
      color: white;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`;
const PortalImg = styled.img`
  height: 100vh;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  transition: all 500ms;
  pointer-events: none;
`;
const Image: React.FC<Props> = (props) => {
  const { width, src } = props;
  const imgRef = useRef<HTMLImageElement | null>(null);
  const rotate = useRef<number>(0);
  const scale = useRef<number>(1);
  const portal = () => {
    const getRoot = () => {
      const el = document.getElementById('ui-image-pop');
      if (el) {
        return el;
      }
      const newEl = document.createElement('div');
      newEl.setAttribute('id', 'ui-image-pop');
      document.body.appendChild(newEl);
      return newEl;
    };
    const root = getRoot();
    const dom = createRoot(root as HTMLElement);
    dom.render(
      createPortal(
        <PortalWrap>
          <div className="action">
            <span
              role="presentation"
              onClick={() => {
                imgRef.current!.style.transform = `translateX(-50%) rotate(${
                  rotate.current - 90
                }deg)`;
                rotate.current -= 90;
              }}
            >
              <TurnLeftIcon height="1.5em" width="1.5em" fill="#FFFFFF" />
            </span>
            <span
              role="presentation"
              onClick={() => {
                imgRef.current!.style.transform = `translateX(-50%) rotate(${
                  rotate.current + 90
                }deg)`;
                rotate.current += 90;
              }}
            >
              <TurnLeftIcon
                height="1.5em"
                width="1.5em"
                fill="#FFFFFF"
                style={{ transform: 'rotateY(180deg)' }}
              />
            </span>
            <span
              role="presentation"
              onClick={() => {
                imgRef.current!.style.transform = `translateX(-50%) scale(${scale.current - 0.1})`;
                scale.current -= 0.1;
              }}
            >
              <SmallIcon height="1.4em" width="1.4em" fill="#FFFFFF" />
            </span>
            <span
              role="presentation"
              onClick={() => {
                imgRef.current!.style.transform = `translateX(-50%) scale(${scale.current + 0.1})`;
                scale.current += 0.1;
              }}
            >
              <BigIcon height="1.4em" width="1.4em" fill="#FFFFFF" />
            </span>
            <span
              role="presentation"
              onClick={() => {
                root.remove();
                rotate.current = 0;
              }}
            >
              <CancelIcon height="1.2em" width="1.2em" fill="#FFFFFF" />
            </span>
          </div>
          <PortalImg ref={imgRef} src={src} alt="图片" />
        </PortalWrap>,
        document.getElementById('ui-image-pop')!
      )
    );
  };
  return (
    <TemplateStyled>
      <div className="inner" role="presentation" onClick={portal}>
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
