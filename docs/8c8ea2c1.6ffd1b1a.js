(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{182:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),p=(r(0),r(292)),o={title:"Form / Stepper"},i={unversionedId:"examples/stepper",id:"examples/stepper",isDocsHomePage:!1,title:"Form / Stepper",description:"Use Stepper to show progress through numbered steps.",source:"@site/docs/examples/stepper.md",slug:"/examples/stepper",permalink:"/wave/docs/examples/stepper",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/stepper.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Markup",permalink:"/wave/docs/examples/form-markup"},next:{title:"Table / Markdown",permalink:"/wave/docs/examples/table-markdown"}},s=[],c={rightToc:s};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Use Stepper to show progress through numbered steps."),Object(p.b)("div",{className:"cover",style:{backgroundImage:"url("+r(392).default+")"}}),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui\n\n\n@app('/demo')\nasync def serve(q: Q):\n    q.page['basic-stepper'] = ui.form_card(\n        box='1 1 4 1',\n        items=[\n            ui.stepper(name='basic-stepper', items=[\n                ui.step(label='Step 1'),\n                ui.step(label='Step 2'),\n                ui.step(label='Step 3'),\n            ])\n        ]\n    )\n    q.page['icon-stepper'] = ui.form_card(\n        box='1 2 4 1',\n        items=[\n            ui.stepper(name='icon-stepper', items=[\n                ui.step(label='Step 1', icon='MailLowImportance'),\n                ui.step(label='Step 2', icon='TaskManagerMirrored'),\n                ui.step(label='Step 3', icon='Cafe'),\n            ])\n        ]\n    )\n    q.page['almost-done-stepper'] = ui.form_card(\n        box='1 3 4 1',\n        items=[\n            ui.stepper(name='almost-done-stepper', items=[\n                ui.step(label='Step 1', done=True),\n                ui.step(label='Step 2', done=True),\n                ui.step(label='Step 3'),\n            ])\n        ]\n    )\n    await q.page.save()\n")))}u.isMDXComponent=!0},292:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,d=l["".concat(o,".").concat(b)]||l[b]||m[b]||p;return r?a.a.createElement(d,i(i({ref:t},c),{},{components:r})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},392:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/stepper-6ec5c425af780ae34209e38d2ae8821a.png"}}]);