"use strict";(self.webpackChunkuix_react=self.webpackChunkuix_react||[]).push([[4993],{7328:function(e,n,r){r.d(n,{z:function(){return l}});r(2791);var s=r(4070),i=r(6920),t=r(184);s.TU.setOptions({highlight:function(e,n){var r=i.Z.getLanguage(n)?n:"plaintext";return i.Z.highlight(e,{language:r}).value},langPrefix:"hljs language-",gfm:!0});var l=function(e){var n=e.code;return(0,t.jsx)("div",{className:"showCode",dangerouslySetInnerHTML:{__html:(0,s.TU)(n,{breaks:!0})}})}},3786:function(e,n,r){r.r(n),r.d(n,{default:function(){return u}});r(2791);var s=r(1012),i=r(184),t=function(){return(0,i.jsxs)(s.ZT,{children:[(0,i.jsx)(s.Dx,{level:3,children:"\u7b80\u4ecb"}),(0,i.jsx)(s.nv,{children:(0,i.jsx)("p",{children:"\u5c55\u793a\u64cd\u4f5c\u7684\u5f53\u524d\u8fdb\u5ea6\u3002"})}),(0,i.jsx)(s.Dx,{level:3,children:"\u7ec4\u4ef6\u6982\u89c8"}),(0,i.jsx)(s.nv,{children:(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"Progress: \u4e3b\u8981\u7ec4\u4ef6"})})}),(0,i.jsx)(s.Dx,{level:3,children:"\u4f7f\u7528\u573a\u666f"}),(0,i.jsxs)(s.nv,{children:[(0,i.jsx)("p",{children:"\u5728\u64cd\u4f5c\u9700\u8981\u8f83\u957f\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u65f6\uff0c\u4e3a\u7528\u6237\u663e\u793a\u8be5\u64cd\u4f5c\u7684\u5f53\u524d\u8fdb\u5ea6\u548c\u72b6\u6001\u3002"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"\u5f53\u4e00\u4e2a\u64cd\u4f5c\u4f1a\u6253\u65ad\u5f53\u524d\u754c\u9762\uff0c\u6216\u8005\u9700\u8981\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u4e14\u8017\u65f6\u53ef\u80fd\u8d85\u8fc7 2 \u79d2\u65f6\uff1b"}),(0,i.jsx)("li",{children:"\u5f53\u9700\u8981\u663e\u793a\u4e00\u4e2a\u64cd\u4f5c\u5b8c\u6210\u7684\u767e\u5206\u6bd4\u65f6\u3002"})]})]})]})},l=function(){return(0,i.jsxs)("div",{className:"Eg",children:[(0,i.jsx)(s.Ex,{percent:40,style:{height:"10px",width:"300px"}}),(0,i.jsx)(s.Ex,{percent:60,finishColor:"orange",undoneColor:"green"}),(0,i.jsx)(s.Ex,{type:"circle",percent:60,finishColor:"red",undoneColor:"green"}),(0,i.jsx)(s.Ex,{type:"circle",percent:20,finishColor:"red",undoneColor:"green",format:function(e){return"".concat(e," Days")}})]})},c=r(7328),o={header:["\u5c5e\u6027","\u8bf4\u660e","\u7c7b\u578b","\u9ed8\u8ba4\u503c"],body:[{"\u5c5e\u6027":"percent","\u8bf4\u660e":"\u9ed8\u8ba4\u8fdb\u5ea6","\u7c7b\u578b":"number","\u9ed8\u8ba4\u503c":""},{"\u5c5e\u6027":"finishColor","\u8bf4\u660e":"\u5b8c\u6210\u72b6\u6001\u7684\u989c\u8272","\u7c7b\u578b":"string","\u9ed8\u8ba4\u503c":"#1890ff"},{"\u5c5e\u6027":"undoneColor","\u8bf4\u660e":"\u672a\u5b8c\u6210\u72b6\u6001\u7684\u989c\u8272","\u7c7b\u578b":"string","\u9ed8\u8ba4\u503c":"#52c41a"},{"\u5c5e\u6027":"format","\u8bf4\u660e":"\u683c\u5f0f\u5316","\u7c7b\u578b":"(num: number) => string","\u9ed8\u8ba4\u503c":""},{"\u5c5e\u6027":"type","\u8bf4\u660e":"\u5706\u5f62\u8fdb\u5ea6\u6761\u6216\u7ebf\u578b\u8fdb\u5ea6\u6761","\u7c7b\u578b":"'line' | 'circle'","\u9ed8\u8ba4\u503c":"line"},{"\u5c5e\u6027":"dot","\u8bf4\u660e":"\u5b8c\u6210\u8fdb\u5ea6\u6761\u672b\u5c3e\u5706\u70b9","\u7c7b\u578b":"boolean","\u9ed8\u8ba4\u503c":"false"},{"\u5c5e\u6027":"statistic","\u8bf4\u660e":"\u8fdb\u5ea6\u7edf\u8ba1","\u7c7b\u578b":"boolean","\u9ed8\u8ba4\u503c":"false"}]},a=function(){return(0,i.jsx)("div",{className:"interface",children:(0,i.jsx)(s.iA,{data:o})})},d=(r(9076),(0,r(5609).I)('\nimport { Progress } from \'uix-react\';\n\nexport const App:React.RC=()=>{\n  return (\n    <div className="Eg">\n      <Progress percent={40} style={{ height: \'10px\', width: \'300px\' }} />\n      <Progress percent={60} finishColor="orange" undoneColor="green" />\n      <Progress type="circle" percent={60} finishColor="red" undoneColor="green" />\n      <Progress\n        type="circle"\n        percent={20}\n        finishColor="red"\n        undoneColor="green"\n        format={(percent) => `'.concat(50," Days`}\n      />\n    </div>\n  );\n}\n"))),u=function(){return(0,i.jsxs)("div",{className:"content-wrap",children:[(0,i.jsx)("h2",{className:"title",children:"Progress \u8fdb\u5ea6\u6761"}),(0,i.jsx)(t,{}),(0,i.jsx)(s.Dx,{level:3,children:"\u6848\u4f8b"}),(0,i.jsx)(l,{}),(0,i.jsx)(s.Dx,{level:3,children:"\u4ee3\u7801\u793a\u4f8b"}),(0,i.jsx)(c.z,{code:d}),(0,i.jsx)(s.Dx,{level:3,children:"\u63a5\u53e3"}),(0,i.jsx)(a,{})]})}},5609:function(e,n,r){r.d(n,{I:function(){return s}});var s=function(e){return"```javascript"+"".concat(e)+"\n```"}},9076:function(){}}]);
//# sourceMappingURL=4993.211a6674.chunk.js.map