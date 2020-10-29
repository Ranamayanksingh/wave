(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{292:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var c=a(0),n=a.n(c);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,s=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=o(a),p=c,O=d["".concat(b,".").concat(p)]||d[p]||u[p]||s;return a?n.a.createElement(O,r(r({ref:t},l),{},{components:a})):n.a.createElement(O,r({ref:t},l))}));function O(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=a.length,b=new Array(s);b[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:c,b[1]=r;for(var l=2;l<s;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var c=a(2),n=a(6),s=(a(0),a(292)),b={title:"Module h2o_wave.server"},r={unversionedId:"api/server",id:"api/server",isDocsHomePage:!1,title:"Module h2o_wave.server",description:"Functions",source:"@site/docs/api/server.md",slug:"/api/server",permalink:"/wave/docs/api/server",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/api/server.md",version:"current",sidebar:"someSidebar",previous:{title:"Module h2o_wave.ui",permalink:"/wave/docs/api/ui"},next:{title:"Module h2o_wave.graphics",permalink:"/wave/docs/api/graphics"}},i=[{value:"Functions",id:"functions",children:[{value:'app <a name="h2o_wave.server.app"/>',id:"app",children:[]},{value:'listen <a name="h2o_wave.server.listen"/>',id:"listen",children:[]}]},{value:"Classes",id:"classes",children:[{value:'Auth <a name="h2o_wave.server.Auth"/>',id:"auth",children:[]},{value:'Query <a name="h2o_wave.server.Query"/>',id:"query",children:[]},{value:'Q <a name="h2o_wave.server.Query"/>',id:"q",children:[]}]}],l={rightToc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(c.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"functions"},"Functions"),Object(s.b)("div",{className:"api"},Object(s.b)("h3",{id:"app"},"app ",Object(s.b)("a",{name:"h2o_wave.server.app"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"def ",Object(s.b)("span",{class:"ident"},"app"),"(route:\xa0str, mode='unicast')"),Object(s.b)("div",{className:"api__description"}))),Object(s.b)("div",{className:"api"},Object(s.b)("h3",{id:"listen"},"listen ",Object(s.b)("a",{name:"h2o_wave.server.listen"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"def ",Object(s.b)("span",{class:"ident"},"listen"),"(route:\xa0str, handle:\xa0Callable[[",Object(s.b)("a",{title:"h2o_wave.server.Query",href:"#h2o_wave.server.Query"},"Query"),"],\xa0Awaitable[Any]], mode='unicast')"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Launch an application server."),Object(s.b)("h5",{id:"args"},"Args"),Object(s.b)("dl",null,Object(s.b)("dt",null,Object(s.b)("code",null,"route")),Object(s.b)("dd",null,"The route to listen to. e.g. ",Object(s.b)("code",null,"'/foo'")," or ",Object(s.b)("code",null,"'/foo/bar/baz'"),"."),Object(s.b)("dt",null,Object(s.b)("code",null,"handle")),Object(s.b)("dd",null,"The handler function."),Object(s.b)("dt",null,Object(s.b)("code",null,"mode")),Object(s.b)("dd",null,"The server mode. One of ",Object(s.b)("code",null,"'unicast'")," (default),",Object(s.b)("code",null,"'multicast'")," or ",Object(s.b)("code",null,"'broadcast'"),"."))))),Object(s.b)("h2",{id:"classes"},"Classes"),Object(s.b)("div",{className:"api"},Object(s.b)("h3",{id:"auth"},"Auth ",Object(s.b)("a",{name:"h2o_wave.server.Auth"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"class ",Object(s.b)("span",{class:"ident"},"Auth"),"(username:\xa0str, subject:\xa0str)"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Represents authentication information for a given query context. Carries valid information only if single sign on is enabled.")),Object(s.b)("h4",{id:"instance-variables"},"Instance variables"),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{id:"h2o_wave.server.Auth.subject",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"subject")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A unique identifier for the user.")),Object(s.b)("div",{id:"h2o_wave.server.Auth.username",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"username")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The username of the user."))))),Object(s.b)("div",{className:"api"},Object(s.b)("h3",{id:"query"},"Query ",Object(s.b)("a",{name:"h2o_wave.server.Query"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"class ",Object(s.b)("span",{class:"ident"},"Query"),"(site:\xa0",Object(s.b)("a",{title:"h2o_wave.core.AsyncSite",href:"core#h2o_wave.core.AsyncSite"},"AsyncSite"),", mode:\xa0str, username:\xa0str, client_id:\xa0str, route:\xa0str, app_state:\xa0",Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"),", user_state:\xa0",Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"),", client_state:\xa0",Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"),", auth:\xa0",Object(s.b)("a",{title:"h2o_wave.server.Auth",href:"#h2o_wave.server.Auth"},"Auth"),", args:\xa0",Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"),")"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Represents the query context. The query context is passed to the ",Object(s.b)("code",null,"@app")," handler function whenever a query arrives from the browser (page load, user interaction events, etc.). The query context contains useful information about the query, including arguments",Object(s.b)("code",null,"args")," (equivalent to URL query strings) and app-level, user-level and client-level state.")),Object(s.b)("h4",{id:"instance-variables-1"},"Instance variables"),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{id:"h2o_wave.server.Query.app",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"app")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A ",Object(s.b)("code",null,Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"))," instance to hold application-specific state.")),Object(s.b)("div",{id:"h2o_wave.server.Query.args",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"args")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A ",Object(s.b)("code",null,Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"))," instance containing the active request.")),Object(s.b)("div",{id:"h2o_wave.server.Query.auth",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"auth")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The username and subject ID of the authenticated user.")),Object(s.b)("div",{id:"h2o_wave.server.Query.client",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"client")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"An ",Object(s.b)("code",null,Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"))," instance to hold client-specific state.")),Object(s.b)("div",{id:"h2o_wave.server.Query.mode",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"mode")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The server mode. One of ",Object(s.b)("code",null,"'unicast'")," (default),",Object(s.b)("code",null,"'multicast'")," or ",Object(s.b)("code",null,"'broadcast'"),".")),Object(s.b)("div",{id:"h2o_wave.server.Query.page",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"page")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A reference to the current page.")),Object(s.b)("div",{id:"h2o_wave.server.Query.route",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"route")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The route served by the server.")),Object(s.b)("div",{id:"h2o_wave.server.Query.site",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"site")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A reference to the current site.")),Object(s.b)("div",{id:"h2o_wave.server.Query.user",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"user")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A ",Object(s.b)("code",null,Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"))," instance to hold user-specific state.")),Object(s.b)("div",{id:"h2o_wave.server.Query.username",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"username")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The username of the user who initiated the active request."))),Object(s.b)("h4",{id:"methods"},"Methods"),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api"},Object(s.b)("h4",{id:"exec"},"exec ",Object(s.b)("a",{name:"h2o_wave.server.Query.exec"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"async def ",Object(s.b)("span",{class:"ident"},"exec"),"(self, executor:\xa0Union[concurrent.futures._base.Executor,\xa0NoneType], func:\xa0Callable, *args:\xa0Any, **kwargs:\xa0Any) \u2011>\xa0Any"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Execute a function in the background using the specified executor."),Object(s.b)("p",null,"To execute a function in-process, use ",Object(s.b)("code",null,"q.run()"),"."),Object(s.b)("h5",{id:"args"},"Args"),Object(s.b)("dl",null,Object(s.b)("dt",null,Object(s.b)("code",null,"executor")),Object(s.b)("dd",null,"The executor to be used. If None, executes the function in-process."),Object(s.b)("dt",null,Object(s.b)("code",null,"func")),Object(s.b)("dd",null,"The function to to be called."),Object(s.b)("dt",null,Object(s.b)("code",null,"args")),Object(s.b)("dd",null,"Arguments to be passed to the function."),Object(s.b)("dt",null,Object(s.b)("code",null,"kwargs")),Object(s.b)("dd",null,"Keywords arguments to be passed to the function.")),Object(s.b)("h5",{id:"returns"},"Returns"),Object(s.b)("p",null,"The result of the function call.")))),Object(s.b)("div",{className:"api"},Object(s.b)("h4",{id:"run"},"run ",Object(s.b)("a",{name:"h2o_wave.server.Query.run"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"async def ",Object(s.b)("span",{class:"ident"},"run"),"(self, func:\xa0Callable, *args:\xa0Any, **kwargs:\xa0Any) \u2011>\xa0Any"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Execute a function in the background, in-process."),Object(s.b)("p",null,"Equivalent to calling ",Object(s.b)("code",null,"q.exec()")," without an executor."),Object(s.b)("h5",{id:"args"},"Args"),Object(s.b)("dl",null,Object(s.b)("dt",null,Object(s.b)("code",null,"func")),Object(s.b)("dd",null,"The function to to be called."),Object(s.b)("dt",null,Object(s.b)("code",null,"args")),Object(s.b)("dd",null,"Arguments to be passed to the function."),Object(s.b)("dt",null,Object(s.b)("code",null,"kwargs")),Object(s.b)("dd",null,"Keywords arguments to be passed to the function.")),Object(s.b)("h5",{id:"returns"},"Returns"),Object(s.b)("p",null,"The result of the function call.")))),Object(s.b)("div",{className:"api"},Object(s.b)("h4",{id:"sleep"},"sleep ",Object(s.b)("a",{name:"h2o_wave.server.Query.sleep"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"async def ",Object(s.b)("span",{class:"ident"},"sleep"),"(self, delay:\xa0float, result=None) \u2011>\xa0Any"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Suspend execution for the specified number of seconds. Always use ",Object(s.b)("code",null,"q.sleep()")," instead of ",Object(s.b)("code",null,"time.sleep()")," in Wave apps."),Object(s.b)("h5",{id:"args"},"Args"),Object(s.b)("dl",null,Object(s.b)("dt",null,Object(s.b)("code",null,"delay")),Object(s.b)("dd",null,"Number of seconds to sleep."),Object(s.b)("dt",null,Object(s.b)("code",null,"result")),Object(s.b)("dd",null,"Result to return after delay, if any.")),Object(s.b)("h5",{id:"returns"},"Returns"),Object(s.b)("p",null,"The ",Object(s.b)("code",null,"result")," argument, if any, as is."))))))),Object(s.b)("div",{className:"api"},Object(s.b)("h3",{id:"q"},"Q ",Object(s.b)("a",{name:"h2o_wave.server.Query"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"class ",Object(s.b)("span",{class:"ident"},"Q"),"(site:\xa0",Object(s.b)("a",{title:"h2o_wave.core.AsyncSite",href:"core#h2o_wave.core.AsyncSite"},"AsyncSite"),", mode:\xa0str, username:\xa0str, client_id:\xa0str, route:\xa0str, app_state:\xa0",Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"),", user_state:\xa0",Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"),", client_state:\xa0",Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"),", auth:\xa0",Object(s.b)("a",{title:"h2o_wave.server.Auth",href:"#h2o_wave.server.Auth"},"Auth"),", args:\xa0",Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"),")"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Represents the query context. The query context is passed to the ",Object(s.b)("code",null,"@app")," handler function whenever a query arrives from the browser (page load, user interaction events, etc.). The query context contains useful information about the query, including arguments",Object(s.b)("code",null,"args")," (equivalent to URL query strings) and app-level, user-level and client-level state.")),Object(s.b)("h4",{id:"instance-variables-2"},"Instance variables"),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{id:"h2o_wave.server.Query.app",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"app")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A ",Object(s.b)("code",null,Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"))," instance to hold application-specific state.")),Object(s.b)("div",{id:"h2o_wave.server.Query.args",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"args")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A ",Object(s.b)("code",null,Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"))," instance containing the active request.")),Object(s.b)("div",{id:"h2o_wave.server.Query.auth",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"auth")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The username and subject ID of the authenticated user.")),Object(s.b)("div",{id:"h2o_wave.server.Query.client",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"client")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"An ",Object(s.b)("code",null,Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"))," instance to hold client-specific state.")),Object(s.b)("div",{id:"h2o_wave.server.Query.mode",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"mode")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The server mode. One of ",Object(s.b)("code",null,"'unicast'")," (default),",Object(s.b)("code",null,"'multicast'")," or ",Object(s.b)("code",null,"'broadcast'"),".")),Object(s.b)("div",{id:"h2o_wave.server.Query.page",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"page")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A reference to the current page.")),Object(s.b)("div",{id:"h2o_wave.server.Query.route",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"route")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The route served by the server.")),Object(s.b)("div",{id:"h2o_wave.server.Query.site",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"site")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A reference to the current site.")),Object(s.b)("div",{id:"h2o_wave.server.Query.user",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"user")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"A ",Object(s.b)("code",null,Object(s.b)("a",{title:"h2o_wave.core.Expando",href:"core#h2o_wave.core.Expando"},"Expando"))," instance to hold user-specific state.")),Object(s.b)("div",{id:"h2o_wave.server.Query.username",className:"api__signature"},"var ",Object(s.b)("span",{class:"ident"},"username")),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"The username of the user who initiated the active request."))),Object(s.b)("h4",{id:"methods-1"},"Methods"),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api"},Object(s.b)("h4",{id:"exec-1"},"exec ",Object(s.b)("a",{name:"h2o_wave.server.Query.exec"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"async def ",Object(s.b)("span",{class:"ident"},"exec"),"(self, executor:\xa0Union[concurrent.futures._base.Executor,\xa0NoneType], func:\xa0Callable, *args:\xa0Any, **kwargs:\xa0Any) \u2011>\xa0Any"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Execute a function in the background using the specified executor."),Object(s.b)("p",null,"To execute a function in-process, use ",Object(s.b)("code",null,"q.run()"),"."),Object(s.b)("h5",{id:"args"},"Args"),Object(s.b)("dl",null,Object(s.b)("dt",null,Object(s.b)("code",null,"executor")),Object(s.b)("dd",null,"The executor to be used. If None, executes the function in-process."),Object(s.b)("dt",null,Object(s.b)("code",null,"func")),Object(s.b)("dd",null,"The function to to be called."),Object(s.b)("dt",null,Object(s.b)("code",null,"args")),Object(s.b)("dd",null,"Arguments to be passed to the function."),Object(s.b)("dt",null,Object(s.b)("code",null,"kwargs")),Object(s.b)("dd",null,"Keywords arguments to be passed to the function.")),Object(s.b)("h5",{id:"returns"},"Returns"),Object(s.b)("p",null,"The result of the function call.")))),Object(s.b)("div",{className:"api"},Object(s.b)("h4",{id:"run-1"},"run ",Object(s.b)("a",{name:"h2o_wave.server.Query.run"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"async def ",Object(s.b)("span",{class:"ident"},"run"),"(self, func:\xa0Callable, *args:\xa0Any, **kwargs:\xa0Any) \u2011>\xa0Any"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Execute a function in the background, in-process."),Object(s.b)("p",null,"Equivalent to calling ",Object(s.b)("code",null,"q.exec()")," without an executor."),Object(s.b)("h5",{id:"args"},"Args"),Object(s.b)("dl",null,Object(s.b)("dt",null,Object(s.b)("code",null,"func")),Object(s.b)("dd",null,"The function to to be called."),Object(s.b)("dt",null,Object(s.b)("code",null,"args")),Object(s.b)("dd",null,"Arguments to be passed to the function."),Object(s.b)("dt",null,Object(s.b)("code",null,"kwargs")),Object(s.b)("dd",null,"Keywords arguments to be passed to the function.")),Object(s.b)("h5",{id:"returns"},"Returns"),Object(s.b)("p",null,"The result of the function call.")))),Object(s.b)("div",{className:"api"},Object(s.b)("h4",{id:"sleep-1"},"sleep ",Object(s.b)("a",{name:"h2o_wave.server.Query.sleep"})),Object(s.b)("div",{className:"api__body"},Object(s.b)("div",{className:"api__signature"},"async def ",Object(s.b)("span",{class:"ident"},"sleep"),"(self, delay:\xa0float, result=None) \u2011>\xa0Any"),Object(s.b)("div",{className:"api__description"},Object(s.b)("p",null,"Suspend execution for the specified number of seconds. Always use ",Object(s.b)("code",null,"q.sleep()")," instead of ",Object(s.b)("code",null,"time.sleep()")," in Wave apps."),Object(s.b)("h5",{id:"args"},"Args"),Object(s.b)("dl",null,Object(s.b)("dt",null,Object(s.b)("code",null,"delay")),Object(s.b)("dd",null,"Number of seconds to sleep."),Object(s.b)("dt",null,Object(s.b)("code",null,"result")),Object(s.b)("dd",null,"Result to return after delay, if any.")),Object(s.b)("h5",{id:"returns"},"Returns"),Object(s.b)("p",null,"The ",Object(s.b)("code",null,"result")," argument, if any, as is."))))))))}o.isMDXComponent=!0}}]);