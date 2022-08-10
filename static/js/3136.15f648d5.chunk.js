"use strict";(self.webpackChunkuix_react=self.webpackChunkuix_react||[]).push([[3136],{7328:function(e,i,n){n.d(i,{z:function(){return u}});n(2791);var s=n(4070),t=n(6920),r=n(184);s.TU.setOptions({highlight:function(e,i){var n=t.Z.getLanguage(i)?i:"plaintext";return t.Z.highlight(e,{language:n}).value},langPrefix:"hljs language-",gfm:!0});var u=function(e){var i=e.code;return(0,r.jsx)("div",{className:"showCode",dangerouslySetInnerHTML:{__html:(0,s.TU)(i,{breaks:!0})}})}},3136:function(e,i,n){n.r(i),n.d(i,{default:function(){return c}});n(2791);var s=n(1012),t=n(184),r=function(){return(0,t.jsxs)(s.ZT,{children:[(0,t.jsx)(s.Dx,{level:3,children:"\u7b80\u4ecb"}),(0,t.jsx)(s.nv,{children:(0,t.jsx)("p",{children:"\u533a\u9694\u5185\u5bb9\u7684\u5206\u5272\u7ebf\u3002\u3002"})}),(0,t.jsx)(s.Dx,{level:3,children:"\u7ec4\u4ef6\u6982\u8ff0"}),(0,t.jsx)(s.nv,{children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:"Divider\uff1a\u4e3b\u8981\u7ec4\u4ef6"})})}),(0,t.jsx)(s.Dx,{level:3,children:"\u4f7f\u7528\u573a\u666f"}),(0,t.jsx)(s.nv,{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"\u5bf9\u4e0d\u540c\u7ae0\u8282\u7684\u6587\u672c\u6bb5\u843d\u8fdb\u884c\u5206\u5272\u3002"}),(0,t.jsx)("li",{children:"\u5bf9\u884c\u5185\u6587\u5b57/\u94fe\u63a5\u8fdb\u884c\u5206\u5272\uff0c\u4f8b\u5982\u8868\u683c\u7684\u64cd\u4f5c\u5217\u3002"})]})})]})},u=function(){return(0,t.jsxs)("div",{className:"Eg",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum nesciunt, omnis possimus quam quasi repellendus tempora?"}),(0,t.jsx)(s.iz,{position:"left",children:"Text"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum nesciunt, omnis possimus quam quasi repellendus tempora?"}),(0,t.jsx)(s.iz,{position:"left",offset:5,children:"Text"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum nesciunt, omnis possimus quam quasi repellendus tempora?"}),(0,t.jsx)(s.iz,{position:"center",children:"Text"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum nesciunt, omnis possimus quam quasi repellendus tempora?"}),(0,t.jsx)(s.iz,{offset:5,position:"right",children:"Text"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum nesciunt, omnis possimus quam quasi repellendus tempora?"}),(0,t.jsx)(s.iz,{position:"right",children:"Text"})]})]})},a=n(7328),l={header:["\u5c5e\u6027","\u8bf4\u660e","\u7c7b\u578b","\u9ed8\u8ba4\u503c"],body:[{"\u5c5e\u6027":"position","\u8bf4\u660e":"\u6587\u5b57\u4f4d\u7f6e","\u7c7b\u578b":"'left' | 'right' | 'center'","\u9ed8\u8ba4\u503c":"center"},{"\u5c5e\u6027":"offset","\u8bf4\u660e":"\u5411\u6709\u504f\u79fb\u91cf","\u7c7b\u578b":"number","\u9ed8\u8ba4\u503c":0}]},d=function(){return(0,t.jsx)("div",{className:"interface",children:(0,t.jsx)(s.iA,{data:l})})},o=(n(9076),(0,n(5609).I)('\nimport { Divider } from \'uix-react\';\n\nexport const App:React.RC=()=>{\n  return (\n     <div>\n      <div>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti\n          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum\n          nesciunt, omnis possimus quam quasi repellendus tempora?\n        </p>\n        <Divider position="left">Text</Divider>\n      </div>\n      <div>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti\n          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum\n          nesciunt, omnis possimus quam quasi repellendus tempora?\n        </p>\n        <Divider position="left" offset={5}>\n          Text\n        </Divider>\n      </div>\n      <div>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti\n          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum\n          nesciunt, omnis possimus quam quasi repellendus tempora?\n        </p>\n        <Divider position="center">Text</Divider>\n      </div>\n      <div>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti\n          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum\n          nesciunt, omnis possimus quam quasi repellendus tempora?\n        </p>\n        <Divider offset={5} position="right">\n          Text\n        </Divider>\n      </div>\n      <div>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus deleniti\n          expedita inventore ipsum, magni pariatur vel. Accusantium, assumenda ea et iure, laborum\n          nesciunt, omnis possimus quam quasi repellendus tempora?\n        </p>\n        <Divider position="right">Text</Divider>\n      </div>\n     </div>\n  )\n}\n')),c=function(){return(0,t.jsxs)("div",{className:"content-wrap",children:[(0,t.jsx)("h2",{className:"title",children:"Divider \u5206\u5272\u7ebf"}),(0,t.jsx)(r,{}),(0,t.jsx)(s.Dx,{level:3,children:"\u6848\u4f8b"}),(0,t.jsx)(u,{}),(0,t.jsx)(s.Dx,{level:3,children:"\u4ee3\u7801\u793a\u4f8b"}),(0,t.jsx)(a.z,{code:o}),(0,t.jsx)(s.Dx,{level:3,children:"\u63a5\u53e3"}),(0,t.jsx)(d,{})]})}},5609:function(e,i,n){n.d(i,{I:function(){return s}});var s=function(e){return"```javascript"+"".concat(e)+"\n```"}},9076:function(){}}]);
//# sourceMappingURL=3136.15f648d5.chunk.js.map