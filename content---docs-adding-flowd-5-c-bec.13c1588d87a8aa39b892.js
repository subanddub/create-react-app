/*! For license information please see content---docs-adding-flowd-5-c-bec.13c1588d87a8aa39b892.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));r(58),r(31),r(22),r(23),r(59),r(231);var n=r(230);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a={id:"adding-flow",title:"Adding Flow"},u=[],i={rightToc:u},c="wrapper";function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["components"]);return Object(n.b)(c,o({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Flow is a static type checker that helps you write code with fewer bugs. Check out this ",Object(n.b)("a",o({parentName:"p"},{href:"https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb"}),"introduction to using static types in JavaScript")," if you are new to this concept."),Object(n.b)("p",null,"Recent versions of ",Object(n.b)("a",o({parentName:"p"},{href:"https://flow.org/"}),"Flow")," work with Create React App projects out of the box."),Object(n.b)("p",null,"To add Flow to a Create React App project, follow these steps:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Run ",Object(n.b)("inlineCode",{parentName:"li"},"npm install --save flow-bin")," (or ",Object(n.b)("inlineCode",{parentName:"li"},"yarn add flow-bin"),")."),Object(n.b)("li",{parentName:"ol"},"Add ",Object(n.b)("inlineCode",{parentName:"li"},'"flow": "flow"')," to the ",Object(n.b)("inlineCode",{parentName:"li"},"scripts")," section of your ",Object(n.b)("inlineCode",{parentName:"li"},"package.json"),"."),Object(n.b)("li",{parentName:"ol"},"Run ",Object(n.b)("inlineCode",{parentName:"li"},"npm run flow init")," (or ",Object(n.b)("inlineCode",{parentName:"li"},"yarn flow init"),") to create a ",Object(n.b)("a",o({parentName:"li"},{href:"https://flow.org/en/docs/config/"}),Object(n.b)("inlineCode",{parentName:"a"},".flowconfig")," file")," in the root directory."),Object(n.b)("li",{parentName:"ol"},"Add ",Object(n.b)("inlineCode",{parentName:"li"},"// @flow")," to any files you want to type check (for example, to ",Object(n.b)("inlineCode",{parentName:"li"},"src/App.js"),").")),Object(n.b)("p",null,"Now you can run ",Object(n.b)("inlineCode",{parentName:"p"},"npm run flow")," (or ",Object(n.b)("inlineCode",{parentName:"p"},"yarn flow"),") to check the files for type errors.",Object(n.b)("br",{parentName:"p"}),"\n","You can optionally enable an extension for your IDE, such as ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/flowtype/flow-for-vscode"}),"Flow Language Support")," for Visual Studio Code, or leverage the Language Server Protocol standard (e.g. ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/prabirshrestha/vim-lsp/wiki/Servers-Flow"}),"vim LSP"),") to get hints while you type."),Object(n.b)("p",null,"If you'd like to use ",Object(n.b)("a",o({parentName:"p"},{href:"/docs/importing-a-component#absolute-imports"}),"absolute imports")," with Flow,\nmake sure to add the following line to your ",Object(n.b)("inlineCode",{parentName:"p"},".flowconfig")," to make Flow aware of it:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"  [options]\n+ module.name_mapper='^\\([^\\.].*\\)$' -> '<PROJECT_ROOT>/src/\\1'\n")),Object(n.b)("p",null,"To learn more about Flow, check out ",Object(n.b)("a",o({parentName:"p"},{href:"https://flow.org/"}),"its documentation"),"."))}l.isMDXComponent=!0},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),f=u(r),p=n,s=f[i+"."+p]||f[p]||l[p]||a;return r?o.a.createElement(s,Object.assign({},{ref:t},c,{components:r})):o.a.createElement(s,Object.assign({},{ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,u[1]=i;for(var p=2;p<a;p++)u[p]=r[p];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},231:function(e,t,r){"use strict";e.exports=r(232)},232:function(e,t,r){"use strict";var n=r(233),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function O(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||v}function j(){}function g(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var C=g.prototype=new j;C.constructor=g,n(C,O.prototype),C.isPureReactComponent=!0;var S={current:null},k={current:null},N=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)N.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:u,ref:i,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,R=[];function $(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case u:c=!0}}if(c)return n(o,t,""===r?"."+F(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+F(i=t[l],l);c+=e(i,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(i=t.next()).done;)c+=e(i=i.value,f=r+F(i,l++),n,o);else if("object"===i)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return c}(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(P,"$&/")+"/"),A(e,L,t=$(t,a,n,o)),T(t)}function D(){var e=S.current;if(null===e)throw Error(h(321));return e}var q={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,I,t=$(null,null,t,r)),T(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:g,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,r){return D().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,r){return D().useReducer(e,t,r)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:i,Profiler:l,StrictMode:c,Suspense:y,createElement:x,cloneElement:function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)N.call(t,f)&&!_.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:u,ref:i,props:o,_owner:c}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n}},U={default:q},V=U&&q||U;e.exports=V.default||V},233:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,c=u(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(c[f]=r[f]);if(n){i=n(r);for(var p=0;p<i.length;p++)a.call(r,i[p])&&(c[i[p]]=r[i[p]])}}return c}}}]);