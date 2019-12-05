/*! For license information please see content---docs-troubleshooting-992-211.d4c22063d010f3ea5004.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));n(58),n(31),n(22),n(23),n(59),n(231);var r=n(230);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},i=[{value:"npm start doesn\u2019t detect changes",id:"npm-start-doesnt-detect-changes",children:[]},{value:"npm test hangs or crashes on macOS Sierra",id:"npm-test-hangs-or-crashes-on-macos-sierra",children:[]},{value:"npm run build exits too early",id:"npm-run-build-exits-too-early",children:[]},{value:"npm run build fails on Heroku",id:"npm-run-build-fails-on-heroku",children:[]},{value:"Moment.js locales are missing",id:"momentjs-locales-are-missing",children:[]},{value:"npm run build fails to minify",id:"npm-run-build-fails-to-minify",children:[]}],l={rightToc:i},c="wrapper";function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"npm-start-doesnt-detect-changes"},Object(r.b)("inlineCode",{parentName:"h2"},"npm start")," doesn\u2019t detect changes"),Object(r.b)("p",null,"When you save a file while ",Object(r.b)("inlineCode",{parentName:"p"},"npm start")," is running, the browser should refresh with the updated code."),Object(r.b)("p",null,"If this doesn\u2019t happen, try one of the following workarounds:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check that your file is imported by your entrypoint. TypeScript will show errors on any of your source files, but webpack only reloads your files if they are directly or indirectly imported by one of your entrypoints."),Object(r.b)("li",{parentName:"ul"},"If your project is in a Dropbox folder, try moving it out."),Object(r.b)("li",{parentName:"ul"},"If the watcher doesn\u2019t see a file called ",Object(r.b)("inlineCode",{parentName:"li"},"index.js")," and you\u2019re referencing it by the folder name, you ",Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/facebook/create-react-app/issues/1164"}),"need to restart the watcher")," due to a Webpack bug."),Object(r.b)("li",{parentName:"ul"},"Some editors like Vim and IntelliJ have a \u201csafe write\u201d feature that currently breaks the watcher. You will need to disable it. Follow the instructions in ",Object(r.b)("a",o({parentName:"li"},{href:"https://webpack.js.org/guides/development/#adjusting-your-text-editor"}),"\u201cAdjusting Your Text Editor\u201d"),"."),Object(r.b)("li",{parentName:"ul"},"If your project path contains parentheses, try moving the project to a path without them. This is caused by a ",Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/webpack/watchpack/issues/42"}),"Webpack watcher bug"),"."),Object(r.b)("li",{parentName:"ul"},"On Linux and macOS, you might need to ",Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/webpack/docs/wiki/troubleshooting#not-enough-watchers"}),"tweak system settings")," to allow more watchers."),Object(r.b)("li",{parentName:"ul"},"If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an ",Object(r.b)("inlineCode",{parentName:"li"},".env")," file in your project directory if it doesn\u2019t exist, and add ",Object(r.b)("inlineCode",{parentName:"li"},"CHOKIDAR_USEPOLLING=true")," to it. This ensures that the next time you run ",Object(r.b)("inlineCode",{parentName:"li"},"npm start"),", the watcher uses the polling mode, as necessary inside a VM.")),Object(r.b)("p",null,"If none of these solutions help please leave a comment ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/659"}),"in this thread"),"."),Object(r.b)("h2",{id:"npm-test-hangs-or-crashes-on-macos-sierra"},Object(r.b)("inlineCode",{parentName:"h2"},"npm test")," hangs or crashes on macOS Sierra"),Object(r.b)("p",null,"If you run ",Object(r.b)("inlineCode",{parentName:"p"},"npm test")," and the console gets stuck after printing ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts test")," to the console there might be a problem with your ",Object(r.b)("a",o({parentName:"p"},{href:"https://facebook.github.io/watchman/"}),"Watchman")," installation as described in ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/713"}),"facebook/create-react-app#713"),"."),Object(r.b)("p",null,"We recommend deleting ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," in your project and running ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn")," if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/facebook/jest/issues/1767"}),"facebook/jest#1767")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/facebook/watchman/issues/358"}),"facebook/watchman#358")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/ember-cli/ember-cli/issues/6259"}),"ember-cli/ember-cli#6259"))),Object(r.b)("p",null,"It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use ",Object(r.b)("a",o({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),", you can run these commands to update it:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"watchman shutdown-server\nbrew update\nbrew reinstall watchman\n")),Object(r.b)("p",null,"You can find ",Object(r.b)("a",o({parentName:"p"},{href:"https://facebook.github.io/watchman/docs/install.html#build-install"}),"other installation methods")," on the Watchman documentation page."),Object(r.b)("p",null,"If this still doesn\u2019t help, try running ",Object(r.b)("inlineCode",{parentName:"p"},"launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist"),"."),Object(r.b)("p",null,"There are also reports that ",Object(r.b)("em",{parentName:"p"},"uninstalling")," Watchman fixes the issue. So if nothing else helps, remove it from your system and try again."),Object(r.b)("h2",{id:"npm-run-build-exits-too-early"},Object(r.b)("inlineCode",{parentName:"h2"},"npm run build")," exits too early"),Object(r.b)("p",null,"It is reported that ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build")," can fail on machines with limited memory and no swap space, which is common in cloud environments. Even with small projects this command can increase RAM usage in your system by hundreds of megabytes, so if you have less than 1 GB of available memory your build is likely to fail with the following message:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The build failed because the process exited too early. This probably means the system ran out of memory or someone called ",Object(r.b)("inlineCode",{parentName:"p"},"kill -9")," on the process.")),Object(r.b)("p",null,"If you are completely sure that you didn't terminate the process, consider ",Object(r.b)("a",o({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04"}),"adding some swap space")," to the machine you\u2019re building on, or build the project locally."),Object(r.b)("h2",{id:"npm-run-build-fails-on-heroku"},Object(r.b)("inlineCode",{parentName:"h2"},"npm run build")," fails on Heroku"),Object(r.b)("p",null,"This may be a problem with case sensitive filenames.\nPlease refer to ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/deployment#resolving-heroku-deployment-errors"}),"this section"),"."),Object(r.b)("h2",{id:"momentjs-locales-are-missing"},"Moment.js locales are missing"),Object(r.b)("p",null,"If you use a ",Object(r.b)("a",o({parentName:"p"},{href:"https://momentjs.com/"}),"Moment.js"),", you might notice that only the English locale is available by default. This is because the locale files are large, and you probably only need a subset of ",Object(r.b)("a",o({parentName:"p"},{href:"https://momentjs.com/#multiple-locale-support"}),"all the locales provided by Moment.js"),"."),Object(r.b)("p",null,"To add a specific Moment.js locale to your bundle, you need to import it explicitly."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"import moment from 'moment';\nimport 'moment/locale/fr';\n")),Object(r.b)("p",null,"If you are importing multiple locales this way, you can later switch between them by calling ",Object(r.b)("inlineCode",{parentName:"p"},"moment.locale()")," with the locale name:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"import moment from 'moment';\nimport 'moment/locale/fr';\nimport 'moment/locale/es';\n\n// ...\n\nmoment.locale('fr');\n")),Object(r.b)("p",null,"This will only work for locales that have been explicitly imported before."),Object(r.b)("h2",{id:"npm-run-build-fails-to-minify"},Object(r.b)("inlineCode",{parentName:"h2"},"npm run build")," fails to minify"),Object(r.b)("p",null,"Before ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0"),", this problem was caused by third party ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," using modern JavaScript features because the minifier couldn't handle them during the build. This has been solved by compiling standard modern JavaScript features inside ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," in ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher."),Object(r.b)("p",null,"If you're seeing this error, you're likely using an old version of ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts"),". You can either fix it by avoiding a dependency that uses modern syntax, or by upgrading to ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@>=2.0.0")," and following the migration instructions in the changelog."))}u.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),p=r,b=s[l+"."+p]||s[p]||u[p]||a;return n?o.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";e.exports=n(232)},232:function(e,t,n){"use strict";var r=n(233),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,b=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var m=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var d="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var k=w.prototype=new v;k.constructor=w,r(k,O.prototype),k.isPureReactComponent=!0;var N={current:null},C={current:null},x=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,I=[];function P(e,t,n,r){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return r(o,t,""===n?"."+M(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+M(l=t[u],u);c+=e(l,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=d&&t[d]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,s=n+M(l,u++),r,o);else if("object"===l)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(T,"$&/")+"/"),R(e,L,t=P(t,a,r,o)),$(t)}function D(){var e=N.current;if(null===e)throw Error(y(321));return e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,A,t=P(null,null,t,n)),$(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(y(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,n){return D().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,n){return D().useReducer(e,t,n)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:l,Profiler:u,StrictMode:c,Suspense:f,createElement:_,cloneElement:function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)x.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:l,props:o,_owner:c}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},W={default:F},U=W&&F||W;e.exports=U.default||U},233:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(c[s]=n[s]);if(r){l=r(n);for(var p=0;p<l.length;p++)a.call(n,l[p])&&(c[l[p]]=n[l[p]])}}return c}}}]);