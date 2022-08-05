import React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';

// 配置marked
marked.setOptions({
  highlight(str, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(str, { language }).value;
  },
  langPrefix: 'hljs language-',
  gfm: true
});

interface Props {
  code: string;
}

export const CodeShow: React.FC<Props> = ({ code }) => {
  const render = () => {
    return marked(code, { breaks: true });
  };
  return (
    <div
      className="showCode"
      dangerouslySetInnerHTML={{
        __html: render()
      }}
    />
  );
};
