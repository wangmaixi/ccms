(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/tableColumns/number/index.mdx":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=t("react"),u=t("./node_modules/@mdx-js/react/dist/esm.js"),r=t("./node_modules/father/node_modules/docz/dist/index.esm.js"),i=t("./src/components/tableColumns/number/index.tsx"),l=t("./src/steps/table/index.tsx"),p={};function s(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(u.b)("wrapper",Object.assign({},p,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"number-\u6570\u503c\u8868\u683c\u9879"},"Number \u6570\u503c\u8868\u683c\u9879"),Object(u.b)("p",null,"\u8868\u683c\u9879\u5185\u7684\u6570\u503c\u9009\u9879\u3002"),Object(u.b)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),Object(u.b)("p",null,"\u8868\u683c\u5185\u9700\u8981\u8bbe\u7f6e\u6570\u503c\u9009\u9879\u65f6\u3002",Object(u.b)("br",null),"\n\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u53ef\u914d\u7f6e\u9879\uff1a"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"\u524d\u540e\u7f00\u5b57\u7b26"),Object(u.b)("li",{parentName:"ul"},"\u6570\u503c\u5c0f\u6570\u4f4d"),Object(u.b)("li",{parentName:"ul"},"\u51fd\u6570\u8ba1\u7b97")),Object(u.b)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),Object(u.b)("h3",{id:"\u914d\u7f6e\u5316json\u53c2\u8003"},"\u914d\u7f6e\u5316JSON\u53c2\u8003"),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"config"),"\u4e2d",Object(u.b)("inlineCode",{parentName:"p"},"columns"),"\u4e3a\u8868\u683c\u5217\u914d\u7f6e\u4fe1\u606f"),Object(u.b)("pre",null,Object(u.b)("code",Object.assign({parentName:"pre"},{}),'  columns:[\n    {\n      field: "number",\n      label: "\u6570\u503c",\n      type: "number",\n      precision: 2,\n      style: {\n        prefix: "\xa5",\n        postfix: "\u5143"\n      },\n      default: {\n        type: "static",\n        value: 20\n      }\n    }\n  ]\n')),Object(u.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(u.b)("h3",{id:"\u7ec4\u4ef6\u5355\u72ec\u8c03\u7528"},"\u7ec4\u4ef6\u5355\u72ec\u8c03\u7528"),Object(u.b)(r.c,{__position:0,__code:"() => {\n  return <Number value={20} />\n}",__scope:{props:this?this.props:t,useState:b.useState,Playground:r.c,Props:r.d,Number:i.b,PropsType:i.a,Table:l.b},mdxType:"Playground"},(function(){return Object(u.b)(i.b,{value:20,mdxType:"Number"})})),Object(u.b)("h3",{id:"\u65e0\u53c2\u6570\u9ed8\u8ba4\u503c"},"\u65e0\u53c2\u6570\u9ed8\u8ba4\u503c"),Object(u.b)(r.c,{__position:1,__code:"<Table\n  data={{\n    0: [{}],\n  }}\n  config={{\n    primary: 'index',\n    columns: [\n      {\n        field: 'number',\n        label: '\u6570\u503c-\u65e0\u53c2\u6570\u9ed8\u8ba4\u503c',\n        type: 'number',\n        defaultValue: '\u6682\u65e0\u6570\u636e',\n      },\n    ],\n  }}\n  step={0}\n  onSubmit={() => {}}\n  onUnmount={() => {}}\n  onMount={() => {}}\n  ref={form => {\n    form.willMount()\n  }}\n/>",__scope:{props:this?this.props:t,useState:b.useState,Playground:r.c,Props:r.d,Number:i.b,PropsType:i.a,Table:l.b},mdxType:"Playground"},Object(u.b)(l.b,{data:{0:[{}]},config:{primary:"index",columns:[{field:"number",label:"\u6570\u503c-\u65e0\u53c2\u6570\u9ed8\u8ba4\u503c",type:"number",defaultValue:"\u6682\u65e0\u6570\u636e"}]},step:0,onSubmit:function(){},onUnmount:function(){},onMount:function(){},ref:function(n){n.willMount()},mdxType:"Table"})),Object(u.b)("h3",{id:"\u6807\u51c6\u503c"},"\u6807\u51c6\u503c"),Object(u.b)(r.c,{__position:2,__code:"<Table\n  data={{\n    0: [{ number: 20 }],\n  }}\n  config={{\n    primary: 'index',\n    columns: [\n      {\n        field: 'number',\n        label: '\u6570\u503c-\u6807\u51c6\u503c',\n        type: 'number',\n      },\n    ],\n  }}\n  step={0}\n  onSubmit={() => {}}\n  onUnmount={() => {}}\n  onMount={() => {}}\n  ref={form => {\n    form.willMount()\n  }}\n/>",__scope:{props:this?this.props:t,useState:b.useState,Playground:r.c,Props:r.d,Number:i.b,PropsType:i.a,Table:l.b},mdxType:"Playground"},Object(u.b)(l.b,{data:{0:[{number:20}]},config:{primary:"index",columns:[{field:"number",label:"\u6570\u503c-\u6807\u51c6\u503c",type:"number"}]},step:0,onSubmit:function(){},onUnmount:function(){},onMount:function(){},ref:function(n){n.willMount()},mdxType:"Table"})),Object(u.b)("h3",{id:"\u683c\u5f0f\u5316\u5c0f\u6570\u4f4d"},"\u683c\u5f0f\u5316\u5c0f\u6570\u4f4d"),Object(u.b)(r.c,{__position:3,__code:"<Table\n  data={{\n    0: [{ number: 20 }],\n  }}\n  config={{\n    primary: 'index',\n    columns: [\n      {\n        field: 'number',\n        label: '\u6570\u503c-\u683c\u5f0f\u5316',\n        type: 'number',\n        precision: 2,\n      },\n    ],\n  }}\n  step={0}\n  onSubmit={() => {}}\n  onUnmount={() => {}}\n  onMount={() => {}}\n  ref={form => {\n    form.willMount()\n  }}\n/>",__scope:{props:this?this.props:t,useState:b.useState,Playground:r.c,Props:r.d,Number:i.b,PropsType:i.a,Table:l.b},mdxType:"Playground"},Object(u.b)(l.b,{data:{0:[{number:20}]},config:{primary:"index",columns:[{field:"number",label:"\u6570\u503c-\u683c\u5f0f\u5316",type:"number",precision:2}]},step:0,onSubmit:function(){},onUnmount:function(){},onMount:function(){},ref:function(n){n.willMount()},mdxType:"Table"})),Object(u.b)("h3",{id:"\u5b9a\u4e49\u989c\u8272\u4e0e\u5b57\u4f53"},"\u5b9a\u4e49\u989c\u8272\u4e0e\u5b57\u4f53"),Object(u.b)(r.c,{__position:4,__code:"<Table\n  data={{\n    0: [{ number: 20 }],\n  }}\n  config={{\n    primary: 'index',\n    columns: [\n      {\n        field: 'number',\n        label: '\u6570\u503c-\u5b9a\u4e49\u989c\u8272\u4e0e\u5b57\u4f53',\n        type: 'number',\n        style: {\n          color: 'green',\n          fontSize: 16,\n        },\n      },\n    ],\n  }}\n  step={0}\n  onSubmit={() => {}}\n  onUnmount={() => {}}\n  onMount={() => {}}\n  ref={form => {\n    form.willMount()\n  }}\n/>",__scope:{props:this?this.props:t,useState:b.useState,Playground:r.c,Props:r.d,Number:i.b,PropsType:i.a,Table:l.b},mdxType:"Playground"},Object(u.b)(l.b,{data:{0:[{number:20}]},config:{primary:"index",columns:[{field:"number",label:"\u6570\u503c-\u5b9a\u4e49\u989c\u8272\u4e0e\u5b57\u4f53",type:"number",style:{color:"green",fontSize:16}}]},step:0,onSubmit:function(){},onUnmount:function(){},onMount:function(){},ref:function(n){n.willMount()},mdxType:"Table"})),Object(u.b)("h3",{id:"\u5b9a\u4e49\u524d\u7f00\u4e0e\u540e\u7f00"},"\u5b9a\u4e49\u524d\u7f00\u4e0e\u540e\u7f00"),Object(u.b)(r.c,{__position:5,__code:"<Table\n  data={{\n    0: [{ number: 20 }],\n  }}\n  config={{\n    primary: 'index',\n    columns: [\n      {\n        field: 'number',\n        label: '\u6570\u503c-\u5b9a\u4e49\u524d\u7f00\u4e0e\u540e\u7f00',\n        type: 'number',\n        precision: 2,\n        style: {\n          prefix: '\xa5',\n          postfix: '\u5143',\n        },\n      },\n    ],\n  }}\n  step={0}\n  onSubmit={() => {}}\n  onUnmount={() => {}}\n  onMount={() => {}}\n  ref={form => {\n    form.willMount()\n  }}\n/>",__scope:{props:this?this.props:t,useState:b.useState,Playground:r.c,Props:r.d,Number:i.b,PropsType:i.a,Table:l.b},mdxType:"Playground"},Object(u.b)(l.b,{data:{0:[{number:20}]},config:{primary:"index",columns:[{field:"number",label:"\u6570\u503c-\u5b9a\u4e49\u524d\u7f00\u4e0e\u540e\u7f00",type:"number",precision:2,style:{prefix:"\xa5",postfix:"\u5143"}}]},step:0,onSubmit:function(){},onUnmount:function(){},onMount:function(){},ref:function(n){n.willMount()},mdxType:"Table"})),Object(u.b)("h2",{id:"apis"},"APIs"),Object(u.b)(r.d,{of:i.a,mdxType:"Props"}))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/tableColumns/number/index.mdx"}}),s.isMDXComponent=!0}}]);