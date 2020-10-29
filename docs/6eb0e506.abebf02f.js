(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),o=(t(0),t(292)),s={title:"Table / Group by"},i={unversionedId:"examples/table-groupby",id:"examples/table-groupby",isDocsHomePage:!1,title:"Table / Group by",description:"Allow grouping a table by column values.",source:"@site/docs/examples/table-groupby.md",slug:"/examples/table-groupby",permalink:"/wave/docs/examples/table-groupby",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/table-groupby.md",version:"current",sidebar:"someSidebar",previous:{title:"Table / Download",permalink:"/wave/docs/examples/table-download"},next:{title:"Table / Preselection",permalink:"/wave/docs/examples/table-select"}},l=[],u={rightToc:l};function c(e){var n=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,s,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allow grouping a table by column values."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+t(374).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import random\nfrom faker import Faker\nfrom h2o_wave import main, app, Q, ui\n\nfake = Faker()\n\n_id = 0\n\n\nclass Issue:\n    def __init__(self, text: str, status: str, progress: float, icon: str, notifications: str):\n        global _id\n        _id += 1\n        self.id = f'I{_id}'\n        self.text = text\n        self.status = status\n        self.views = 0\n        self.progress = progress\n        self.icon = icon\n        self.notifications = notifications\n\n\n# Create some issues\nissues = [\n    Issue(\n        text=fake.sentence(),\n        status=('Closed' if i % 2 == 0 else 'Open'),\n        progress=random.random(),\n        icon=('BoxCheckmarkSolid' if random.random() > 0.5 else 'BoxMultiplySolid'),\n        notifications=('Off' if random.random() > 0.5 else 'On')) for i in range(100)\n]\n\n# Create columns for our issue table.\ncolumns = [\n    ui.table_column(name='text', label='Issue'),\n    ui.table_column(name='status', label='Status'),\n    ui.table_column(name='notifications', label='Notifications'),\n    ui.table_column(name='done', label='Done', cell_type=ui.icon_table_cell_type()),\n    ui.table_column(name='views', label='Views'),\n    ui.table_column(name='progress', label='Progress', cell_type=ui.progress_table_cell_type()),\n]\n\n\n@app('/demo')\nasync def serve(q: Q):\n    q.page['form'] = ui.form_card(box='1 1 -1 11', items=[\n        ui.table(\n            name='issues',\n            columns=columns,\n            rows=[ui.table_row(\n                name=issue.id,\n                cells=[issue.text, issue.status, issue.notifications, issue.icon, str(issue.views), issue.progress]) for\n                issue in issues],\n            groupable=True,\n        )])\n    await q.page.save()\n")))}c.isMDXComponent=!0},292:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),c=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return t?a.a.createElement(f,i(i({ref:n},u),{},{components:t})):a.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},374:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/table-groupby-8a15ae0b2ea905a6961c5783aebe43c5.png"}}]);