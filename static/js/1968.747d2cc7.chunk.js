"use strict";(self.webpackChunkuix_react=self.webpackChunkuix_react||[]).push([[1968],{1968:function(n,e,i){i.r(e),i.d(e,{default:function(){return x}});var t=i(2791),r=i(5268),o=i(184),s=function(){return(0,o.jsxs)(r.ZT,{children:[(0,o.jsx)(r.Dx,{level:3,children:"\u7b80\u4ecb"}),(0,o.jsx)(r.nv,{children:(0,o.jsx)("p",{children:"\u5c06\u9875\u9762\u5143\u7d20\u9489\u5728\u53ef\u89c6\u8303\u56f4\u3002"})}),(0,o.jsx)(r.Dx,{level:3,children:"\u7ec4\u4ef6\u6982\u89c8"}),(0,o.jsx)(r.nv,{children:(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:"Affix: \u4e3b\u8981\u7ec4\u4ef6"})})}),(0,o.jsx)(r.Dx,{level:3,children:"\u4f7f\u7528\u573a\u666f"}),(0,o.jsx)(r.nv,{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"\u5f53\u5185\u5bb9\u533a\u57df\u6bd4\u8f83\u957f\uff0c\u9700\u8981\u6eda\u52a8\u9875\u9762\u65f6\uff0c\u8fd9\u90e8\u5206\u5185\u5bb9\u5bf9\u5e94\u7684\u64cd\u4f5c\u6216\u8005\u5bfc\u822a\u9700\u8981\u5728\u6eda\u52a8\u8303\u56f4\u5185\u59cb\u7ec8\u5c55\u73b0\u3002\u5e38\u7528\u4e8e\u4fa7\u8fb9\u83dc\u5355\u548c\u6309\u94ae\u7ec4\u5408\u3002"}),(0,o.jsx)("li",{children:"\u9875\u9762\u53ef\u89c6\u8303\u56f4\u8fc7\u5c0f\u65f6\uff0c\u614e\u7528\u6b64\u529f\u80fd\u4ee5\u514d\u906e\u6321\u9875\u9762\u5185\u5bb9\u3002"})]})})]})},c=i(885),d=function(){var n=(0,t.useState)(200),e=(0,c.Z)(n,2),i=e[0],s=e[1],d=function(n){for(var e=[],i=0;i<n;i++)e.push((0,o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, delectus deleniti enim, eveniet hic magnam nihil nisi placeat quam quibusdam ratione reiciendis rem repellendus reprehenderit saepe sequi, similique tenetur."},Math.random()));return e};return(0,o.jsxs)("div",{className:"Eg",children:[(0,o.jsx)("div",{children:d(2)}),(0,o.jsx)(r.D_,{offsetTop:100,rowPosition:"center",container:document.getElementById("app-component-show"),children:(0,o.jsx)(r.zx,{onClick:function(){return s(i+10)},children:"\u8ddd\u79bb\u9876\u90e8100px\u56fa\u5b9a,\u6c34\u5e73\u4e2d\u95f4"})}),(0,o.jsx)("div",{children:d(8)}),(0,o.jsx)(r.D_,{offsetTop:i,container:document.getElementById("app-component-show"),children:(0,o.jsx)("div",{role:"presentation",children:(0,o.jsx)(r.zx,{onClick:function(){return s(i+10)},children:" \u8ddd\u79bb\u9876\u90e8200px\u56fa\u5b9a\uff0c\u6c34\u5e73\u5de6\u8fb9"})})}),(0,o.jsx)("div",{children:d(10)}),(0,o.jsx)(r.D_,{offsetTop:300,rowPosition:"end",container:document.getElementById("app-component-show"),children:(0,o.jsx)(r.zx,{onClick:function(){return s(i+10)},children:"\u8ddd\u79bb\u9876\u90e8300px\u56fa\u5b9a,\u6c34\u5e73\u53f3\u8fb9"})}),(0,o.jsx)("div",{children:d(10)})]})},l=i(7328),a={header:["\u5c5e\u6027","\u8bf4\u660e","\u7c7b\u578b","\u9ed8\u8ba4\u503c"],body:[{"\u5c5e\u6027":"offsetTop","\u8bf4\u660e":"\u8ddd\u79bb\u9876\u90e8\u591a\u5c11\u65f6\u5f00\u59cb\u56fa\u9489","\u7c7b\u578b":"HTMLElement","\u9ed8\u8ba4\u503c":"document.body"},{"\u5c5e\u6027":"container","\u8bf4\u660e":"\u6ed1\u52a8\u7684\u5bb9\u5668","\u7c7b\u578b":"number","\u9ed8\u8ba4\u503c":"0"},{"\u5c5e\u6027":"rowPosition","\u8bf4\u660e":"\u6c34\u5e73\u4f4d\u7f6e","\u7c7b\u578b":"'start' | 'center' | 'end'","\u9ed8\u8ba4\u503c":"start"}]},u=function(){return(0,o.jsx)("div",{className:"interface",children:(0,o.jsx)(r.iA,{data:a})})},p=(i(9076),(0,i(5609).I)("\nimport { Affix } from 'uix-react';\n\nexport const App:React.RC=()=>{\n const [top, setTop] = useState(200);\n  const render = (num: number): React.ReactNode[] => {\n    const vNode: React.ReactNode[] = [];\n    for (let i = 0; i < num; i++) {\n      vNode.push(\n        <p key={Math.random()}>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, delectus deleniti\n          enim, eveniet hic magnam nihil nisi placeat quam quibusdam ratione reiciendis rem\n          repellendus reprehenderit saepe sequi, similique tenetur.\n        </p>\n      );\n    }\n    return vNode;\n  };\n  return (\n    <div className=\"Eg\">\n      <div>{render(2)}</div>\n      <Affix\n        offsetTop={100}\n        rowPosition=\"center\"\n        container={document.getElementById('app-component-show')}\n      >\n        <Button onClick={() => setTop(top + 10)}>\u8ddd\u79bb\u9876\u90e8100px\u56fa\u5b9a,\u6c34\u5e73\u4e2d\u95f4</Button>\n      </Affix>\n      <div>{render(8)}</div>\n      <Affix offsetTop={top} container={document.getElementById('app-component-show')}>\n        <div role=\"presentation\">\n          <Button onClick={() => setTop(top + 10)}> \u8ddd\u79bb\u9876\u90e8200px\u56fa\u5b9a\uff0c\u6c34\u5e73\u5de6\u8fb9</Button>\n        </div>\n      </Affix>\n      <div>{render(10)}</div>\n      <Affix\n        offsetTop={300}\n        rowPosition=\"end\"\n        container={document.getElementById('app-component-show')}\n      >\n        <Button onClick={() => setTop(top + 10)}>\u8ddd\u79bb\u9876\u90e8300px\u56fa\u5b9a,\u6c34\u5e73\u53f3\u8fb9</Button>\n      </Affix>\n      <div>{render(10)}</div>\n    </div>\n  );\n")),x=function(){return(0,o.jsxs)("div",{className:"content-wrap",children:[(0,o.jsx)("h2",{className:"title",children:"Affix \u56fa\u9489"}),(0,o.jsx)(s,{}),(0,o.jsx)(r.Dx,{level:3,children:"\u6848\u4f8b"}),(0,o.jsx)(d,{}),(0,o.jsx)(r.Dx,{level:3,children:"\u4ee3\u7801\u793a\u4f8b"}),(0,o.jsx)(l.z,{code:p}),(0,o.jsx)(r.Dx,{level:3,children:"\u63a5\u53e3"}),(0,o.jsx)(u,{})]})}},7328:function(n,e,i){i.d(e,{z:function(){return s}});i(2791);var t=i(4070),r=i(6920),o=i(184);t.TU.setOptions({highlight:function(n,e){var i=r.Z.getLanguage(e)?e:"plaintext";return r.Z.highlight(n,{language:i}).value},langPrefix:"hljs language-",gfm:!0});var s=function(n){var e=n.code;return(0,o.jsx)("div",{className:"showCode",dangerouslySetInnerHTML:{__html:(0,t.TU)(e,{breaks:!0})}})}},5609:function(n,e,i){i.d(e,{I:function(){return t}});var t=function(n){return"```javascript"+"".concat(n)+"\n```"}},9076:function(){}}]);
//# sourceMappingURL=1968.747d2cc7.chunk.js.map