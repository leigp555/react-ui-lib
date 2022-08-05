import React, { HTMLAttributes } from 'react';
import './index.scss';

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  strong?: boolean;
  code?: boolean;
  keyboard?: boolean;
  mark?: boolean;
}

const Text: React.FC<TextProps> = (props) => {
  const { children, strong, keyboard, mark, code, ...rest } = props;
  const render = () => {
    if (strong) {
      return <strong>{children}</strong>;
    }
    if (keyboard) {
      return <span className="ui-keyboard">{children}</span>;
    }
    if (mark) {
      return <mark className="ui-marked">{children}</mark>;
    }
    if (code) {
      return <code>{children}</code>;
    }
  };
  return (
    <div className="ui-Text-wrap" {...rest}>
      {render()}
    </div>
  );
};
Text.defaultProps = {
  children: '',
  strong: false,
  code: false,
  keyboard: false,
  mark: false
};

export default Text;
