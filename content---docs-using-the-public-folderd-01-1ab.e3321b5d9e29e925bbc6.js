/*! For license information please see content---docs-using-the-public-folderd-01-1ab.e3321b5d9e29e925bbc6.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));n(58),n(31),n(22),n(23),n(59),n(231);var r=n(230);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={id:"using-the-public-folder",title:"Using the Public Folder"},i=[{value:"Changing the HTML",id:"changing-the-html",children:[]},{value:"Adding Assets Outside of the Module System",id:"adding-assets-outside-of-the-module-system",children:[]},{value:"When to Use the public Folder",id:"when-to-use-the-public-folder",children:[]}],l={rightToc:i},u="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(u,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@0.5.0")," and higher.")),Object(r.b)("h2",{id:"changing-the-html"},"Changing the HTML"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"public")," folder contains the HTML file so you can tweak it, for example, to ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/title-and-meta-tags"}),"set the page title"),".\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"<script>")," tag with the compiled code will be added to it automatically during the build process."),Object(r.b)("h2",{id:"adding-assets-outside-of-the-module-system"},"Adding Assets Outside of the Module System"),Object(r.b)("p",null,"You can also add other assets to the ",Object(r.b)("inlineCode",{parentName:"p"},"public")," folder."),Object(r.b)("p",null,"Note that we normally encourage you to ",Object(r.b)("inlineCode",{parentName:"p"},"import")," assets in JavaScript files instead.\nFor example, see the sections on ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/adding-a-stylesheet"}),"adding a stylesheet")," and ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/adding-images-fonts-and-files"}),"adding images and fonts"),".\nThis mechanism provides a number of benefits:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Scripts and stylesheets get minified and bundled together to avoid extra network requests."),Object(r.b)("li",{parentName:"ul"},"Missing files cause compilation errors instead of 404 errors for your users."),Object(r.b)("li",{parentName:"ul"},"Result filenames include content hashes so you don\u2019t need to worry about browsers caching their old versions.")),Object(r.b)("p",null,"However there is an ",Object(r.b)("strong",{parentName:"p"},"escape hatch")," that you can use to add an asset outside of the module system."),Object(r.b)("p",null,"If you put a file into the ",Object(r.b)("inlineCode",{parentName:"p"},"public")," folder, it will ",Object(r.b)("strong",{parentName:"p"},"not")," be processed by Webpack. Instead it will be copied into the build folder untouched. To reference assets in the ",Object(r.b)("inlineCode",{parentName:"p"},"public")," folder, you need to use an environment variable called ",Object(r.b)("inlineCode",{parentName:"p"},"PUBLIC_URL"),"."),Object(r.b)("p",null,"Inside ",Object(r.b)("inlineCode",{parentName:"p"},"index.html"),", you can use it like this:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-html"}),'<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n')),Object(r.b)("p",null,"Only files inside the ",Object(r.b)("inlineCode",{parentName:"p"},"public")," folder will be accessible by ",Object(r.b)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," prefix. If you need to use a file from ",Object(r.b)("inlineCode",{parentName:"p"},"src")," or ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),", you\u2019ll have to copy it there to explicitly specify your intention to make this file a part of the build."),Object(r.b)("p",null,"When you run ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build"),", Create React App will substitute ",Object(r.b)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL."),Object(r.b)("p",null,"In JavaScript code, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"process.env.PUBLIC_URL")," for similar purposes:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"render() {\n  // Note: this is an escape hatch and should be used sparingly!\n  // Normally we recommend using `import` for getting asset URLs\n  // as described in \u201cAdding Images and Fonts\u201d above this section.\n  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;\n}\n")),Object(r.b)("p",null,"Keep in mind the downsides of this approach:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"None of the files in ",Object(r.b)("inlineCode",{parentName:"li"},"public")," folder get post-processed or minified."),Object(r.b)("li",{parentName:"ul"},"Missing files will not be called at compilation time, and will cause 404 errors for your users."),Object(r.b)("li",{parentName:"ul"},"Result filenames won\u2019t include content hashes so you\u2019ll need to add query arguments or rename them every time they change.")),Object(r.b)("h2",{id:"when-to-use-the-public-folder"},"When to Use the ",Object(r.b)("inlineCode",{parentName:"h2"},"public")," Folder"),Object(r.b)("p",null,"Normally we recommend importing ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/adding-a-stylesheet"}),"stylesheets"),", ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/adding-images-fonts-and-files"}),"images, and fonts")," from JavaScript.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"public")," folder is useful as a workaround for a number of less common cases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You need a file with a specific name in the build output, such as ",Object(r.b)("a",o({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"}),Object(r.b)("inlineCode",{parentName:"a"},"manifest.webmanifest")),"."),Object(r.b)("li",{parentName:"ul"},"You have thousands of images and need to dynamically reference their paths."),Object(r.b)("li",{parentName:"ul"},"You want to include a small script like ",Object(r.b)("a",o({parentName:"li"},{href:"https://github.hubspot.com/pace/docs/welcome/"}),Object(r.b)("inlineCode",{parentName:"a"},"pace.js"))," outside of the bundled code."),Object(r.b)("li",{parentName:"ul"},"Some library may be incompatible with Webpack and you have no other option but to include it as a ",Object(r.b)("inlineCode",{parentName:"li"},"<script>")," tag.")),Object(r.b)("p",null,"Note that if you add a ",Object(r.b)("inlineCode",{parentName:"p"},"<script>")," that declares global variables, you also need to read the next section on using them."))}c.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),p=r,f=s[l+"."+p]||s[p]||c[p]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},u,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";e.exports=n(232)},232:function(e,t,n){"use strict";var r=n(233),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var N=w.prototype=new v;N.constructor=w,r(N,j.prototype),N.isPureReactComponent=!0;var C={current:null},S={current:null},k=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,E=[];function U(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var u=!1;if(null===t)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case i:u=!0}}if(u)return r(o,t,""===n?"."+T(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=n+T(l=t[c],c);u+=e(l,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(l=t.next()).done;)u+=e(l=l.value,s=n+T(l,c++),r,o);else if("object"===l)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),$(e,M,t=U(t,a,r,o)),L(t)}function q(){var e=C.current;if(null===e)throw Error(y(321));return e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,I,t=U(null,null,t,n)),L(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(y(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:l,Profiler:c,StrictMode:u,Suspense:d,createElement:x,cloneElement:function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)k.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var p=0;p<s;p++)c[p]=arguments[p+2];o.children=c}return{$$typeof:a,type:e.type,key:i,ref:l,props:o,_owner:u}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r}},B={default:F},D=B&&F||B;e.exports=D.default||D},233:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,u=i(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(u[s]=n[s]);if(r){l=r(n);for(var p=0;p<l.length;p++)a.call(n,l[p])&&(u[l[p]]=n[l[p]])}}return u}}}]);