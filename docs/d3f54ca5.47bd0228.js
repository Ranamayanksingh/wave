(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(292)),o={title:"Wave Apps"},p={unversionedId:"apps",id:"apps",isDocsHomePage:!1,title:"Wave Apps",description:"A Wave app is the primary mechanism to publish interactive web content in Wave.",source:"@site/docs/apps.md",slug:"/apps",permalink:"/wave/docs/apps",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/apps.md",version:"current",sidebar:"someSidebar",previous:{title:"Wave Scripts",permalink:"/wave/docs/scripts"},next:{title:"Pages",permalink:"/wave/docs/pages"}},c=[{value:"Structure",id:"structure",children:[]},{value:"Runtime context",id:"runtime-context",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Wave app is the primary mechanism to publish interactive web content in Wave."),Object(i.b)("p",null,"A Wave app can publish content and handle user interactions, unlike a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/wave/docs/scripts"}),"Wave script"),", which can publish content but not handle user interactions."),Object(i.b)("h2",{id:"structure"},"Structure"),Object(i.b)("p",null,"Here is the skeleton of a Wave app:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py",metastring:'title="app.py"',title:'"app.py"'}),"from h2o_wave import main, app, Q, ui\n\n@app('/foo')\nasync def serve(q: Q):\n    # Modify the page\n    q.page['qux'] = ui.some_card()\n    \n    # Save the page\n    await q.page.save()\n")),Object(i.b)("p",null,"An app typically imports four symbols from ",Object(i.b)("inlineCode",{parentName:"p"},"h2o_wave"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"main"),": An ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://asgi.readthedocs.io/en/latest/"}),"ASGI"),"-compatible function. See ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/wave/docs/deployment"}),"Deployment"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"app"),": A decorator for your query handler (or request handler)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Q"),": A class that represents the query sent to your query handler. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ui"),": The module containing the API for drawing UI elements.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@app()")," has one required argument - the route your app is interested in (in this case ",Object(i.b)("inlineCode",{parentName:"p"},"/foo"),"). Whenever a user performs any action at ",Object(i.b)("inlineCode",{parentName:"p"},"/foo")," - access the page, reload it, click a button, access a menu, enter text, and so on - the query handler ",Object(i.b)("inlineCode",{parentName:"p"},"serve()")," is called. The details about what action was performed, and who  performed the action, are available in the argument passed to ",Object(i.b)("inlineCode",{parentName:"p"},"serve()"),", the ",Object(i.b)("em",{parentName:"p"},"query context")," ",Object(i.b)("inlineCode",{parentName:"p"},"q")," (of type ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"api/server#q"}),"Q"),")."),Object(i.b)("p",null,"Wave apps are run using the ",Object(i.b)("inlineCode",{parentName:"p"},"wave run")," command, which accepts the name of the Python module in which ",Object(i.b)("inlineCode",{parentName:"p"},"main")," is imported from ",Object(i.b)("inlineCode",{parentName:"p"},"h2o_wave"),"."),Object(i.b)("p",null,"If your app is contained in ",Object(i.b)("inlineCode",{parentName:"p"},"app.py"),", run it like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"wave run app\n")),Object(i.b)("p",null,"If your app is contained in ",Object(i.b)("inlineCode",{parentName:"p"},"path/to/app.py"),", run it like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"wave run path.to.app\n")),Object(i.b)("p",null,"When run, the app starts an event loop listening for user interaction events, and announces itself to the Wave server. The Wave server then starts routing any user actions happening at ",Object(i.b)("inlineCode",{parentName:"p"},"/foo")," to your app. "),Object(i.b)("h2",{id:"runtime-context"},"Runtime context"),Object(i.b)("p",null,"The query context ",Object(i.b)("inlineCode",{parentName:"p"},"q")," carries the following attributes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"route"),": The route at which the action was performed (in this case, ",Object(i.b)("inlineCode",{parentName:"li"},"/foo"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),": A reference to the current ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/wave/docs/pages"}),"page")," (in this case, the page hosted at ",Object(i.b)("inlineCode",{parentName:"li"},"/foo"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"site"),": A reference to the page's parent site, from which you can grab references to other pages."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args"),": The ",Object(i.b)("em",{parentName:"li"},"event arguments"),", a dictionary-like object containing information about the user action."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"app"),", ",Object(i.b)("inlineCode",{parentName:"li"},"user"),", ",Object(i.b)("inlineCode",{parentName:"li"},"client"),": Dictionary-like objects holding ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/wave/docs/state"}),"server-side state"),", at the app-level, the user-level and the client-level, respectively. Here, 'client' refers to the browser tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"username"),": The username of the user who performed the action."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mode"),": The ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/wave/docs/realtime"}),"app's realtime mode"),", one of ",Object(i.b)("inlineCode",{parentName:"li"},"unicast"),", ",Object(i.b)("inlineCode",{parentName:"li"},"multicast"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"broadcast"),".")))}b.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,p(p({ref:t},l),{},{components:n})):r.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);