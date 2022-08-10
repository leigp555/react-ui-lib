"use strict";(self.webpackChunkuix_react=self.webpackChunkuix_react||[]).push([[4903],{7328:function(e,n,r){r.d(n,{z:function(){return s}});r(2791);var t=r(4070),l=r(6920),i=r(184);t.TU.setOptions({highlight:function(e,n){var r=l.Z.getLanguage(n)?n:"plaintext";return l.Z.highlight(e,{language:r}).value},langPrefix:"hljs language-",gfm:!0});var s=function(e){var n=e.code;return(0,i.jsx)("div",{className:"showCode",dangerouslySetInnerHTML:{__html:(0,t.TU)(n,{breaks:!0})}})}},4903:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(2791),l=r(5268),i=r(184),s=function(){return(0,i.jsxs)(l.ZT,{children:[(0,i.jsx)(l.Dx,{level:3,children:"\u7b80\u4ecb"}),(0,i.jsx)(l.nv,{children:(0,i.jsx)("p",{children:"\u4e3a\u9875\u9762\u548c\u529f\u80fd\u63d0\u4f9b\u5bfc\u822a\u7684\u83dc\u5355\u5217\u8868\u3002"})}),(0,i.jsx)(l.Dx,{level:3,children:"\u7ec4\u4ef6\u6982\u89c8"}),(0,i.jsx)(l.nv,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"\u4f7f\u7528\u5bfc\u822a\u83dc\u5355\u53ef\u4ee5\u5feb\u901f\u5728\u7f51\u7ad9\u7684\u9875\u9762\u95f4\u8df3\u8f6c\u3002"}),(0,i.jsx)("li",{children:"\u5bfc\u822a\u540c\u7ea7\u4e4b\u95f4\u5728\u903b\u8f91\u4e0a\u9700\u4e3a\u5e76\u5217\u4e14\u4e92\u65a5\u7684\u5173\u7cfb\u3002"})]})}),(0,i.jsx)(l.Dx,{level:3,children:"\u4f7f\u7528\u573a\u666f"}),(0,i.jsx)(l.nv,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"\u4f7f\u7528\u5bfc\u822a\u83dc\u5355\u53ef\u4ee5\u5feb\u901f\u5728\u7f51\u7ad9\u7684\u9875\u9762\u95f4\u8df3\u8f6c\u3002"}),(0,i.jsx)("li",{children:"\u5bfc\u822a\u540c\u7ea7\u4e4b\u95f4\u5728\u903b\u8f91\u4e0a\u9700\u4e3a\u5e76\u5217\u4e14\u4e92\u65a5\u7684\u5173\u7cfb\u3002"})]})})]})},u=r(885),d=function(){var e=(0,t.useState)(1),n=(0,u.Z)(e,2),r=n[0],s=n[1];return(0,i.jsx)("div",{className:"Eg",children:(0,i.jsx)(l.ov,{defaultOrder:r,setOrder:s,style:{width:"180px"},children:(0,i.jsxs)(l.Kz,{children:[(0,i.jsxs)(l.BW,{children:[(0,i.jsx)(l.__,{children:"\u6807\u7b7e1"}),(0,i.jsx)(l.sN,{order:1,children:"Option 1"}),(0,i.jsx)(l.sN,{order:2,children:"Option 2"}),(0,i.jsxs)(l.BW,{children:[(0,i.jsx)(l.__,{children:"\u6807\u7b7e2"}),(0,i.jsx)(l.sN,{order:3,children:"Option 4"}),(0,i.jsx)(l.sN,{order:4,children:"Option 5"})]})]}),(0,i.jsxs)(l.BW,{children:[(0,i.jsx)(l.__,{children:"\u6807\u7b7e3"}),(0,i.jsx)(l.sN,{order:5,children:"Option 6"}),(0,i.jsx)(l.sN,{order:6,children:"Option 7"}),(0,i.jsx)(l.sN,{order:7,children:"Option 8"})]})]})})})},c=r(7328),o={header:["\u5c5e\u6027","\u8bf4\u660e","\u7c7b\u578b","\u9ed8\u8ba4\u503c"],body:[{"\u5c5e\u6027":"order","\u8bf4\u660e":"\u552f\u4e00key","\u7c7b\u578b":"number","\u9ed8\u8ba4\u503c":"1"}]},x=function(){return(0,i.jsxs)("div",{className:"interface",children:[(0,i.jsx)(l.Dx,{level:4,children:"MenuItem"}),(0,i.jsx)(l.iA,{data:o})]})},a=(r(9076),(0,r(5609).I)("\nimport {  ColumnMenu, ColumnSub, ItemGroup, Label, MenuItem  } from 'uix-react';\n\nexport const App:React.RC=()=>{\n  const [order, setOrder] = useState<number>(1);\n  return (\n    <div className=\"Eg\">\n      <ColumnMenu defaultOrder={order} setOrder={setOrder} style={{ width: '180px' }}>\n        <ColumnSub>\n          <ItemGroup>\n            <Label>\u6807\u7b7e1</Label>\n            <MenuItem order={1}>Option 1</MenuItem>\n            <MenuItem order={2}>Option 2</MenuItem>\n            <ItemGroup>\n              <Label>\u6807\u7b7e2</Label>\n              <MenuItem order={3}>Option 4</MenuItem>\n              <MenuItem order={4}>Option 5</MenuItem>\n            </ItemGroup>\n          </ItemGroup>\n          <ItemGroup>\n            <Label>\u6807\u7b7e3</Label>\n            <MenuItem order={5}>Option 6</MenuItem>\n            <MenuItem order={6}>Option 7</MenuItem>\n            <MenuItem order={7}>Option 8</MenuItem>\n          </ItemGroup>\n        </ColumnSub>\n      </ColumnMenu>\n    </div>\n  );\n}\n")),h=function(){return(0,i.jsxs)("div",{className:"content-wrap",children:[(0,i.jsx)("h2",{className:"title",children:"Menu \u83dc\u5355"}),(0,i.jsx)(s,{}),(0,i.jsx)(l.Dx,{level:3,children:"\u6848\u4f8b"}),(0,i.jsx)(d,{}),(0,i.jsx)(l.Dx,{level:3,children:"\u4ee3\u7801\u793a\u4f8b"}),(0,i.jsx)(c.z,{code:a}),(0,i.jsx)(l.Dx,{level:3,children:"\u63a5\u53e3"}),(0,i.jsx)(x,{})]})}},5609:function(e,n,r){r.d(n,{I:function(){return t}});var t=function(e){return"```javascript"+"".concat(e)+"\n```"}},9076:function(){}}]);
//# sourceMappingURL=4903.91f665ac.chunk.js.map