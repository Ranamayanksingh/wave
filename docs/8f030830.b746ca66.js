(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(292)),i={title:"Development"},c={unversionedId:"development",id:"development",isDocsHomePage:!1,title:"Development",description:"Wave scripts are plain Python programs. Wave apps are ASGI programs. You can develop, debug and test them from the command-line, from the Python REPL, or from your favorite text editor.",source:"@site/docs/development.md",slug:"/development",permalink:"/wave/docs/development",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/development.md",version:"current",sidebar:"someSidebar",previous:{title:"Command Line Interface",permalink:"/wave/docs/cli"},next:{title:"Browser Testing",permalink:"/wave/docs/browser-testing"}},l=[{value:"Getting started",id:"getting-started",children:[{value:"Using PyCharm",id:"using-pycharm",children:[]},{value:"Using Visual Studio Code",id:"using-visual-studio-code",children:[]}]},{value:"Debugging Apps",id:"debugging-apps",children:[{value:"Using PyCharm",id:"using-pycharm-1",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Wave scripts are plain Python programs. Wave apps are ASGI programs. You can develop, debug and test them from the command-line, from the Python REPL, or from your favorite text editor."),Object(r.b)("p",null,"Both ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.jetbrains.com/pycharm/download"}),"PyCharm Community Edition")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")," are excellent for Python programming."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"At the time of writing, PyCharm's type-checking and error-detection is superior to Visual Studio Code's Python plugin."))),Object(r.b)("h2",{id:"getting-started"},"Getting started"),Object(r.b)("p",null,"The simplest way to get started in either PyCharm or Visual Studio Code is the same: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a working directory."),Object(r.b)("li",{parentName:"ol"},"Set up a Python ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/tutorial/venv.html"}),"virtual environment"),"."),Object(r.b)("li",{parentName:"ol"},"Install the ",Object(r.b)("inlineCode",{parentName:"li"},"h2o-wave")," package."),Object(r.b)("li",{parentName:"ol"},"Open the directory in your IDE.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"mkdir $HOME/wave-apps\ncd $HOME/wave-apps\npython3 -m venv venv\n./venv/bin/pip install h2o-wave\n")),Object(r.b)("h3",{id:"using-pycharm"},"Using PyCharm"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Launch PyCharm"),Object(r.b)("li",{parentName:"ol"},'Click "File" -> "Open...", then choose ',Object(r.b)("inlineCode",{parentName:"li"},"$HOME/wave-apps"),"."),Object(r.b)("li",{parentName:"ol"},"Right-click on ",Object(r.b)("inlineCode",{parentName:"li"},"wave-apps"),' in the "Project" tree, then click "New" -> "Python File".'),Object(r.b)("li",{parentName:"ol"},"Enter a file name, say, ",Object(r.b)("inlineCode",{parentName:"li"},"foo.py"),"."),Object(r.b)("li",{parentName:"ol"},"Write some code (see sample below)."),Object(r.b)("li",{parentName:"ol"},'Right-click anywhere inside the file and choose "Run foo" or "Debug foo".')),Object(r.b)("h3",{id:"using-visual-studio-code"},"Using Visual Studio Code"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Launch Visual Studio Code"),Object(r.b)("li",{parentName:"ol"},'Click "File" -> "Open...", then choose ',Object(r.b)("inlineCode",{parentName:"li"},"$HOME/wave-apps"),"."),Object(r.b)("li",{parentName:"ol"},'Click "File" -> "New File"; save the file as, say, ',Object(r.b)("inlineCode",{parentName:"li"},"foo.py"),"."),Object(r.b)("li",{parentName:"ol"},'You should now get a prompt asking if you want to install extensions for Python. Click "Install".'),Object(r.b)("li",{parentName:"ol"},"Write some code (see sample below)."),Object(r.b)("li",{parentName:"ol"},"Hit ",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+F5")," to run, or ",Object(r.b)("inlineCode",{parentName:"li"},"F5")," to debug.")),Object(r.b)("h2",{id:"debugging-apps"},"Debugging Apps"),Object(r.b)("p",null,"To debug Wave apps, set your IDE or editor's configuration to execute the command ",Object(r.b)("inlineCode",{parentName:"p"},"python -m h2o_wave run --no-reload foo")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"python foo.py"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The command ",Object(r.b)("inlineCode",{parentName:"p"},"wave run --no-reload foo")," is equivalent to ",Object(r.b)("inlineCode",{parentName:"p"},"python -m h2o_wave run --no-reload foo"),"."))),Object(r.b)("h3",{id:"using-pycharm-1"},"Using PyCharm"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Open the "Run/Debug Configurations" dialog for your script.'),Object(r.b)("li",{parentName:"ul"},'Under "Configuration", change the "Script path" dropdown to "Module name".'),Object(r.b)("li",{parentName:"ul"},'Set "Module name" to ',Object(r.b)("inlineCode",{parentName:"li"},"h2o_wave"),"."),Object(r.b)("li",{parentName:"ul"},'Set "Parameters" to ',Object(r.b)("inlineCode",{parentName:"li"},"start foo")," (assuming your app's source code is in ",Object(r.b)("inlineCode",{parentName:"li"},"foo.py"),")")))}b.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||r;return n?o.a.createElement(u,c(c({ref:t},p),{},{components:n})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);