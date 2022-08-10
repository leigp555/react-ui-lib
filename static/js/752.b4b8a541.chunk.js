"use strict";(self.webpackChunkuix_react=self.webpackChunkuix_react||[]).push([[752],{7328:function(e,i,n){n.d(i,{z:function(){return u}});n(2791);var t=n(4070),a=n(6920),s=n(184);t.TU.setOptions({highlight:function(e,i){var n=a.Z.getLanguage(i)?i:"plaintext";return a.Z.highlight(e,{language:n}).value},langPrefix:"hljs language-",gfm:!0});var u=function(e){var i=e.code;return(0,s.jsx)("div",{className:"showCode",dangerouslySetInnerHTML:{__html:(0,t.TU)(i,{breaks:!0})}})}},752:function(e,i,n){n.r(i),n.d(i,{default:function(){return p}});var t=n(2791),a=n(5268),s=n(184),u=function(){return(0,s.jsxs)(a.ZT,{children:[(0,s.jsx)(a.Dx,{level:3,children:"\u7b80\u4ecb"}),(0,s.jsx)(a.nv,{children:(0,s.jsx)("p",{children:"\u7528\u4e8e\u9875\u9762\u548c\u533a\u5757\u7684\u52a0\u8f7d\u4e2d\u72b6\u6001\u3002"})}),(0,s.jsx)(a.Dx,{level:3,children:"\u7ec4\u4ef6\u6982\u89c8"}),(0,s.jsx)(a.nv,{children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"Loading: \u4e3b\u8981\u7ec4\u4ef6"})})}),(0,s.jsx)(a.Dx,{level:3,children:"\u4f7f\u7528\u573a\u666f"}),(0,s.jsx)(a.nv,{children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"\u9875\u9762\u5c40\u90e8\u5904\u4e8e\u7b49\u5f85\u5f02\u6b65\u6570\u636e\u6216\u6b63\u5728\u6e32\u67d3\u8fc7\u7a0b\u65f6\uff0c\u5408\u9002\u7684\u52a0\u8f7d\u52a8\u6548\u4f1a\u6709\u6548\u7f13\u89e3\u7528\u6237\u7684\u7126\u8651\u3002"})})})]})},r=n(885),l=function(){var e=(0,t.useState)(!0),i=(0,r.Z)(e,2),n=i[0],u=i[1];return(0,s.jsx)("div",{className:"Eg",children:(0,s.jsxs)("div",{className:"showEg",children:[(0,s.jsxs)(a.gb,{loading:n,children:[(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis recusandae reprehenderit sapiente, suscipit totam velit."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis recusandae reprehenderit sapiente, suscipit totam velit."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis recusandae reprehenderit sapiente, suscipit totam velit."})]}),(0,s.jsx)(a.zx,{onClick:function(){return u(!n)},children:n?"\u52a0\u8f7d\u4e2d":" \u672a\u52a0\u8f7d"})]})})},o=n(7328),c={header:["\u5c5e\u6027","\u8bf4\u660e","\u7c7b\u578b","\u9ed8\u8ba4\u503c"],body:[{"\u5c5e\u6027":"loading","\u8bf4\u660e":"\u663e\u793a\u52a0\u8f7d\u4e2d\u56fe\u6807","\u7c7b\u578b":"boolean","\u9ed8\u8ba4\u503c":"false"}]},d=function(){return(0,s.jsx)("div",{className:"interface",children:(0,s.jsx)(a.iA,{data:c})})},m=(n(9076),(0,n(5609).I)("\nimport {  Button, Loading } from 'uix-react';\n\nexport const App:React.RC=()=>{\n  const [loading, setLoading] = useState(true);\n  return (\n    <div className=\"Eg\">\n      <div className=\"showEg\">\n        <Loading loading={loading}>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus\n            dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis\n            recusandae reprehenderit sapiente, suscipit totam velit.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus\n            dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis\n            recusandae reprehenderit sapiente, suscipit totam velit.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae cum, delectus\n            dolore doloribus ducimus eveniet explicabo iusto labore numquam quae quaerat quis\n            recusandae reprehenderit sapiente, suscipit totam velit.\n          </p>\n        </Loading>\n        <Button onClick={() => setLoading(!loading)}>{loading ? '\u52a0\u8f7d\u4e2d' : ' \u672a\u52a0\u8f7d'}</Button>\n      </div>\n    </div>\n  );\n}\n")),p=function(){return(0,s.jsxs)("div",{className:"content-wrap",children:[(0,s.jsx)("h2",{className:"title",children:"Loading \u52a0\u8f7d\u4e2d"}),(0,s.jsx)(u,{}),(0,s.jsx)(a.Dx,{level:3,children:"\u6848\u4f8b"}),(0,s.jsx)(l,{}),(0,s.jsx)(a.Dx,{level:3,children:"\u4ee3\u7801\u793a\u4f8b"}),(0,s.jsx)(o.z,{code:m}),(0,s.jsx)(a.Dx,{level:3,children:"\u63a5\u53e3"}),(0,s.jsx)(d,{})]})}},5609:function(e,i,n){n.d(i,{I:function(){return t}});var t=function(e){return"```javascript"+"".concat(e)+"\n```"}},9076:function(){}}]);
//# sourceMappingURL=752.b4b8a541.chunk.js.map