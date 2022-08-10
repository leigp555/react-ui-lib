"use strict";(self.webpackChunkuix_react=self.webpackChunkuix_react||[]).push([[3262],{7328:function(e,n,l){l.d(n,{z:function(){return t}});l(2791);var a=l(4070),i=l(6920),c=l(184);a.TU.setOptions({highlight:function(e,n){var l=i.Z.getLanguage(n)?n:"plaintext";return i.Z.highlight(e,{language:l}).value},langPrefix:"hljs language-",gfm:!0});var t=function(e){var n=e.code;return(0,c.jsx)("div",{className:"showCode",dangerouslySetInnerHTML:{__html:(0,a.TU)(n,{breaks:!0})}})}},3262:function(e,n,l){l.r(n),l.d(n,{default:function(){return h}});var a=l(2791),i=l(1012),c=l(184),t=function(){return(0,c.jsxs)(i.ZT,{children:[(0,c.jsx)(i.Dx,{level:3,children:"\u7b80\u4ecb"}),(0,c.jsx)(i.nv,{children:(0,c.jsx)("p",{children:"\u5355\u9009\u6846\u3002"})}),(0,c.jsx)(i.Dx,{level:3,children:"\u7ec4\u4ef6\u6982\u89c8"}),(0,c.jsx)(i.nv,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Radio: \u4e3b\u8981\u7ec4\u4ef6"}),(0,c.jsx)("li",{children:"RadioItem:\u5b50\u7ec4\u4ef6\u3002"})]})}),(0,c.jsx)(i.Dx,{level:3,children:"\u4f7f\u7528\u573a\u666f"}),(0,c.jsx)(i.nv,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"\u7528\u4e8e\u5728\u591a\u4e2a\u5907\u9009\u9879\u4e2d\u9009\u4e2d\u5355\u4e2a\u72b6\u6001\u3002"}),(0,c.jsx)("li",{children:"\u548c Select \u7684\u533a\u522b\u662f\uff0cRadio \u6240\u6709\u9009\u9879\u9ed8\u8ba4\u53ef\u89c1\uff0c\u65b9\u4fbf\u7528\u6237\u5728\u6bd4\u8f83\u4e2d\u9009\u62e9\uff0c\u56e0\u6b64\u9009\u9879\u4e0d\u5b9c\u8fc7\u591a\u3002"})]})})]})},r=l(885),u=function(){var e=(0,a.useState)(2),n=(0,r.Z)(e,2),l=n[0],t=n[1],u=(0,a.useState)(4),s=(0,r.Z)(u,2),d=s[0],o=s[1];return(0,c.jsxs)("div",{className:"Eg",children:[(0,c.jsxs)(i.Y8,{callback:function(e){console.log("xx",e),t(e)},value:l,direction:"row",children:[(0,c.jsx)(i.Rk,{value:1,children:"A"}),(0,c.jsx)(i.Rk,{value:2,children:"B"}),(0,c.jsx)(i.Rk,{value:3,children:"C"}),(0,c.jsx)(i.Rk,{value:4,children:"D"})]}),(0,c.jsxs)(i.Y8,{callback:function(e){console.log("yy",e),o(e)},value:d,direction:"column",children:[(0,c.jsx)(i.Rk,{value:1,children:"A"}),(0,c.jsx)(i.Rk,{value:2,children:"B"}),(0,c.jsx)(i.Rk,{value:3,children:"C"}),(0,c.jsx)(i.Rk,{value:4,children:"D"}),(0,c.jsx)(i.Rk,{value:5,children:"E"})]})]})},s=l(7328),d={header:["\u5c5e\u6027","\u8bf4\u660e","\u7c7b\u578b","\u9ed8\u8ba4\u503c"],body:[{"\u5c5e\u6027":"callback","\u8bf4\u660e":"\u9009\u62e9\u53d8\u5316\u65f6\u7684\u56de\u8c03","\u7c7b\u578b":"Function","\u9ed8\u8ba4\u503c":"null"},{"\u5c5e\u6027":"value","\u8bf4\u660e":"\u9ed8\u8ba4\u9009\u62e9\u7b2c\u51e0\u4e2a","\u7c7b\u578b":"number","\u9ed8\u8ba4\u503c":"1"},{"\u5c5e\u6027":"direction","\u8bf4\u660e":"\u6392\u5217\u65b9\u5f0f","\u7c7b\u578b":"column|row","\u9ed8\u8ba4\u503c":"row"}]},o={header:["\u5c5e\u6027","\u8bf4\u660e","\u7c7b\u578b","\u9ed8\u8ba4\u503c"],body:[{"\u5c5e\u6027":"value","\u8bf4\u660e":"\u5e8f\u53f7\uff0c\u5fc5\u987b\u552f\u4e00","\u7c7b\u578b":"number","\u9ed8\u8ba4\u503c":"\u5fc5\u586b"}]},x=function(){return(0,c.jsxs)("div",{className:"interface",children:[(0,c.jsx)(i.Dx,{level:4,children:"Radio"}),(0,c.jsx)(i.iA,{data:d}),(0,c.jsx)(i.Dx,{level:4,children:"RadioItem"}),(0,c.jsx)(i.iA,{data:o})]})},v=(l(9076),(0,l(5609).I)("\nimport {  Radio, RadioItem } from 'uix-react';\n\nexport const App:React.RC=()=>{\n  const [value, setValue] = useState(2);\n  const [value2, setValue2] = useState(4);\n  const callback = (num: number) => {\n    console.log('xx', num);\n    setValue(num);\n  };\n  const callback2 = (num: number) => {\n    console.log('yy', num);\n    setValue2(num);\n  };\n  return (\n    <div className=\"Eg\">\n      <Radio callback={callback} value={value} direction=\"row\">\n        <RadioItem value={1}>A</RadioItem>\n        <RadioItem value={2}>B</RadioItem>\n        <RadioItem value={3}>C</RadioItem>\n        <RadioItem value={4}>D</RadioItem>\n      </Radio>\n      <Radio callback={callback2} value={value2} direction=\"column\">\n        <RadioItem value={1}>A</RadioItem>\n        <RadioItem value={2}>B</RadioItem>\n        <RadioItem value={3}>C</RadioItem>\n        <RadioItem value={4}>D</RadioItem>\n        <RadioItem value={5}>E</RadioItem>\n      </Radio>\n    </div>\n  );\n}\n")),h=function(){return(0,c.jsxs)("div",{className:"content-wrap",children:[(0,c.jsx)("h2",{className:"title",children:"Radio \u5355\u9009"}),(0,c.jsx)(t,{}),(0,c.jsx)(i.Dx,{level:3,children:"\u6848\u4f8b"}),(0,c.jsx)(u,{}),(0,c.jsx)(i.Dx,{level:3,children:"\u4ee3\u7801\u793a\u4f8b"}),(0,c.jsx)(s.z,{code:v}),(0,c.jsx)(i.Dx,{level:3,children:"\u63a5\u53e3"}),(0,c.jsx)(x,{})]})}},5609:function(e,n,l){l.d(n,{I:function(){return a}});var a=function(e){return"```javascript"+"".concat(e)+"\n```"}},9076:function(){}}]);
//# sourceMappingURL=3262.bb406567.chunk.js.map