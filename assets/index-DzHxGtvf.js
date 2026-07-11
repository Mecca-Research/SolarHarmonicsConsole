(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var hd={exports:{}},Xl={};var R_;function sS(){if(R_)return Xl;R_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Xl.Fragment=t,Xl.jsx=i,Xl.jsxs=i,Xl}var w_;function oS(){return w_||(w_=1,hd.exports=sS()),hd.exports}var de=oS(),dd={exports:{}},Wl={},pd={exports:{}},md={};var C_;function lS(){return C_||(C_=1,(function(s){function t(F,B){var ht=F.length;F.push(B);t:for(;0<ht;){var St=ht-1>>>1,D=F[St];if(0<l(D,B))F[St]=B,F[ht]=D,ht=St;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var B=F[0],ht=F.pop();if(ht!==B){F[0]=ht;t:for(var St=0,D=F.length,Q=D>>>1;St<Q;){var ct=2*(St+1)-1,_t=F[ct],qt=ct+1,he=F[qt];if(0>l(_t,ht))qt<D&&0>l(he,_t)?(F[St]=he,F[qt]=ht,St=qt):(F[St]=_t,F[ct]=ht,St=ct);else if(qt<D&&0>l(he,ht))F[St]=he,F[qt]=ht,St=qt;else break t}}return B}function l(F,B){var ht=F.sortIndex-B.sortIndex;return ht!==0?ht:F.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],d=[],g=1,x=null,_=3,y=!1,E=!1,w=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var B=i(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=F)r(d),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(d)}}function z(F){if(w=!1,N(F),!E)if(i(m)!==null)E=!0,H||(H=!0,at());else{var B=i(d);B!==null&&it(z,B.startTime-F)}}var H=!1,k=-1,T=5,L=-1;function ft(){return M?!0:!(s.unstable_now()-L<T)}function V(){if(M=!1,H){var F=s.unstable_now();L=F;var B=!0;try{t:{E=!1,w&&(w=!1,C(k),k=-1),y=!0;var ht=_;try{e:{for(N(F),x=i(m);x!==null&&!(x.expirationTime>F&&ft());){var St=x.callback;if(typeof St=="function"){x.callback=null,_=x.priorityLevel;var D=St(x.expirationTime<=F);if(F=s.unstable_now(),typeof D=="function"){x.callback=D,N(F),B=!0;break e}x===i(m)&&r(m),N(F)}else r(m);x=i(m)}if(x!==null)B=!0;else{var Q=i(d);Q!==null&&it(z,Q.startTime-F),B=!1}}break t}finally{x=null,_=ht,y=!1}B=void 0}}finally{B?at():H=!1}}}var at;if(typeof P=="function")at=function(){P(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,xt=st.port2;st.port1.onmessage=V,at=function(){xt.postMessage(null)}}else at=function(){v(V,0)};function it(F,B){k=v(function(){F(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(F){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var ht=_;_=B;try{return F()}finally{_=ht}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ht=_;_=F;try{return B()}finally{_=ht}},s.unstable_scheduleCallback=function(F,B,ht){var St=s.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?St+ht:St):ht=St,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ht+D,F={id:g++,callback:B,priorityLevel:F,startTime:ht,expirationTime:D,sortIndex:-1},ht>St?(F.sortIndex=ht,t(d,F),i(m)===null&&F===i(d)&&(w?(C(k),k=-1):w=!0,it(z,ht-St))):(F.sortIndex=D,t(m,F),E||y||(E=!0,H||(H=!0,at()))),F},s.unstable_shouldYield=ft,s.unstable_wrapCallback=function(F){var B=_;return function(){var ht=_;_=B;try{return F.apply(this,arguments)}finally{_=ht}}}})(md)),md}var D_;function cS(){return D_||(D_=1,pd.exports=lS()),pd.exports}var gd={exports:{}},Pe={};var U_;function uS(){if(U_)return Pe;U_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function M(D,Q,ct){this.props=D,this.context=Q,this.refs=w,this.updater=ct||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=M.prototype;function C(D,Q,ct){this.props=D,this.context=Q,this.refs=w,this.updater=ct||y}var P=C.prototype=new v;P.constructor=C,E(P,M.prototype),P.isPureReactComponent=!0;var N=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function k(D,Q,ct,_t,qt,he){return ct=he.ref,{$$typeof:s,type:D,key:Q,ref:ct!==void 0?ct:null,props:he}}function T(D,Q){return k(D.type,Q,void 0,void 0,void 0,D.props)}function L(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function ft(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ct){return Q[ct]})}var V=/\/+/g;function at(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?ft(""+D.key):Q.toString(36)}function st(){}function xt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(st,st):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function it(D,Q,ct,_t,qt){var he=typeof D;(he==="undefined"||he==="boolean")&&(D=null);var tt=!1;if(D===null)tt=!0;else switch(he){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(D.$$typeof){case s:case t:tt=!0;break;case g:return tt=D._init,it(tt(D._payload),Q,ct,_t,qt)}}if(tt)return qt=qt(D),tt=_t===""?"."+at(D,0):_t,N(qt)?(ct="",tt!=null&&(ct=tt.replace(V,"$&/")+"/"),it(qt,Q,ct,"",function(Me){return Me})):qt!=null&&(L(qt)&&(qt=T(qt,ct+(qt.key==null||D&&D.key===qt.key?"":(""+qt.key).replace(V,"$&/")+"/")+tt)),Q.push(qt)),1;tt=0;var Ct=_t===""?".":_t+":";if(N(D))for(var gt=0;gt<D.length;gt++)_t=D[gt],he=Ct+at(_t,gt),tt+=it(_t,Q,ct,he,qt);else if(gt=_(D),typeof gt=="function")for(D=gt.call(D),gt=0;!(_t=D.next()).done;)_t=_t.value,he=Ct+at(_t,gt++),tt+=it(_t,Q,ct,he,qt);else if(he==="object"){if(typeof D.then=="function")return it(xt(D),Q,ct,_t,qt);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return tt}function F(D,Q,ct){if(D==null)return D;var _t=[],qt=0;return it(D,_t,"","",function(he){return Q.call(ct,he,qt++)}),_t}function B(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(ct){(D._status===0||D._status===-1)&&(D._status=1,D._result=ct)},function(ct){(D._status===0||D._status===-1)&&(D._status=2,D._result=ct)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var ht=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function St(){}return Pe.Children={map:F,forEach:function(D,Q,ct){F(D,function(){Q.apply(this,arguments)},ct)},count:function(D){var Q=0;return F(D,function(){Q++}),Q},toArray:function(D){return F(D,function(Q){return Q})||[]},only:function(D){if(!L(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Pe.Component=M,Pe.Fragment=i,Pe.Profiler=l,Pe.PureComponent=C,Pe.StrictMode=r,Pe.Suspense=m,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},Pe.cache=function(D){return function(){return D.apply(null,arguments)}},Pe.cloneElement=function(D,Q,ct){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var _t=E({},D.props),qt=D.key,he=void 0;if(Q!=null)for(tt in Q.ref!==void 0&&(he=void 0),Q.key!==void 0&&(qt=""+Q.key),Q)!H.call(Q,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&Q.ref===void 0||(_t[tt]=Q[tt]);var tt=arguments.length-2;if(tt===1)_t.children=ct;else if(1<tt){for(var Ct=Array(tt),gt=0;gt<tt;gt++)Ct[gt]=arguments[gt+2];_t.children=Ct}return k(D.type,qt,void 0,void 0,he,_t)},Pe.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},Pe.createElement=function(D,Q,ct){var _t,qt={},he=null;if(Q!=null)for(_t in Q.key!==void 0&&(he=""+Q.key),Q)H.call(Q,_t)&&_t!=="key"&&_t!=="__self"&&_t!=="__source"&&(qt[_t]=Q[_t]);var tt=arguments.length-2;if(tt===1)qt.children=ct;else if(1<tt){for(var Ct=Array(tt),gt=0;gt<tt;gt++)Ct[gt]=arguments[gt+2];qt.children=Ct}if(D&&D.defaultProps)for(_t in tt=D.defaultProps,tt)qt[_t]===void 0&&(qt[_t]=tt[_t]);return k(D,he,void 0,void 0,null,qt)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(D){return{$$typeof:p,render:D}},Pe.isValidElement=L,Pe.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:B}},Pe.memo=function(D,Q){return{$$typeof:d,type:D,compare:Q===void 0?null:Q}},Pe.startTransition=function(D){var Q=z.T,ct={};z.T=ct;try{var _t=D(),qt=z.S;qt!==null&&qt(ct,_t),typeof _t=="object"&&_t!==null&&typeof _t.then=="function"&&_t.then(St,ht)}catch(he){ht(he)}finally{z.T=Q}},Pe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Pe.use=function(D){return z.H.use(D)},Pe.useActionState=function(D,Q,ct){return z.H.useActionState(D,Q,ct)},Pe.useCallback=function(D,Q){return z.H.useCallback(D,Q)},Pe.useContext=function(D){return z.H.useContext(D)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(D,Q){return z.H.useDeferredValue(D,Q)},Pe.useEffect=function(D,Q,ct){var _t=z.H;if(typeof ct=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _t.useEffect(D,Q)},Pe.useId=function(){return z.H.useId()},Pe.useImperativeHandle=function(D,Q,ct){return z.H.useImperativeHandle(D,Q,ct)},Pe.useInsertionEffect=function(D,Q){return z.H.useInsertionEffect(D,Q)},Pe.useLayoutEffect=function(D,Q){return z.H.useLayoutEffect(D,Q)},Pe.useMemo=function(D,Q){return z.H.useMemo(D,Q)},Pe.useOptimistic=function(D,Q){return z.H.useOptimistic(D,Q)},Pe.useReducer=function(D,Q,ct){return z.H.useReducer(D,Q,ct)},Pe.useRef=function(D){return z.H.useRef(D)},Pe.useState=function(D){return z.H.useState(D)},Pe.useSyncExternalStore=function(D,Q,ct){return z.H.useSyncExternalStore(D,Q,ct)},Pe.useTransition=function(){return z.H.useTransition()},Pe.version="19.1.0",Pe}var L_;function Kp(){return L_||(L_=1,gd.exports=uS()),gd.exports}var _d={exports:{}},wi={};var N_;function fS(){if(N_)return wi;N_=1;var s=Kp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return wi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wi.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},wi.flushSync=function(m){var d=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=d,r.p=g,r.d.f()}},wi.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},wi.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wi.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,x=p(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},wi.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},wi.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,x=p(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},wi.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},wi.requestFormReset=function(m){r.d.r(m)},wi.unstable_batchedUpdates=function(m,d){return m(d)},wi.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},wi.useFormStatus=function(){return f.H.useHostTransitionStatus()},wi.version="19.1.0",wi}var P_;function hS(){if(P_)return _d.exports;P_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),_d.exports=fS(),_d.exports}var O_;function dS(){if(O_)return Wl;O_=1;var s=cS(),t=Kp(),i=hS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=h;break}if(A===o){S=!0,o=u,a=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===a){S=!0,a=h,o=u;break}if(A===o){S=!0,o=h,a=u;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case w:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case P:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:xt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return xt(e(n))}catch{}}return null}var it=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},St=[],D=-1;function Q(e){return{current:e}}function ct(e){0>D||(e.current=St[D],St[D]=null,D--)}function _t(e,n){D++,St[D]=e.current,e.current=n}var qt=Q(null),he=Q(null),tt=Q(null),Ct=Q(null);function gt(e,n){switch(_t(tt,n),_t(he,e),_t(qt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?e_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=e_(n),e=n_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ct(qt),_t(qt,e)}function Me(){ct(qt),ct(he),ct(tt)}function ve(e){e.memoizedState!==null&&_t(Ct,e);var n=qt.current,a=n_(n,e.type);n!==a&&(_t(he,e),_t(qt,a))}function xe(e){he.current===e&&(ct(qt),ct(he)),Ct.current===e&&(ct(Ct),zl._currentValue=ht)}var Rn=Object.prototype.hasOwnProperty,Ue=s.unstable_scheduleCallback,je=s.unstable_cancelCallback,Xe=s.unstable_shouldYield,me=s.unstable_requestPaint,Ve=s.unstable_now,X=s.unstable_getCurrentPriorityLevel,En=s.unstable_ImmediatePriority,Je=s.unstable_UserBlockingPriority,an=s.unstable_NormalPriority,oe=s.unstable_LowPriority,O=s.unstable_IdlePriority,b=s.log,K=s.unstable_setDisableYieldValue,yt=null,Tt=null;function vt(e){if(typeof b=="function"&&K(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(yt,e)}catch{}}var jt=Math.clz32?Math.clz32:ye,Ht=Math.log,pe=Math.LN2;function ye(e){return e>>>=0,e===0?32:31-(Ht(e)/pe|0)|0}var Ut=256,Ot=4194304;function ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ie(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=ee(o):(S&=A,S!==0?u=ee(S):a||(a=A&~e,a!==0&&(u=ee(a))))):(A=o&~h,A!==0?u=ee(A):S!==0?u=ee(S):a||(a=o&~e,a!==0&&(u=ee(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function De(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Ut;return Ut<<=1,(Ut&4194048)===0&&(Ut=256),e}function zt(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function It(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function te(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nt(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,lt=e.hiddenUpdates;for(a=S&~a;0<a;){var bt=31-jt(a),wt=1<<bt;A[bt]=0,G[bt]=-1;var ut=lt[bt];if(ut!==null)for(lt[bt]=null,bt=0;bt<ut.length;bt++){var mt=ut[bt];mt!==null&&(mt.lane&=-536870913)}a&=~wt}o!==0&&Mt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function Mt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-jt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function se(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-jt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Se(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ie(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ze(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:S_(e.type))}function Ni(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Pn=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Pn,Yn="__reactProps$"+Pn,Oa="__reactContainer$"+Pn,fi="__reactEvents$"+Pn,us="__reactListeners$"+Pn,Pi="__reactHandles$"+Pn,Ei="__reactResources$"+Pn,ai="__reactMarker$"+Pn;function Ar(e){delete e[Ln],delete e[Yn],delete e[fi],delete e[us],delete e[Pi]}function ji(e){var n=e[Ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oa]||a[Ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=s_(e);e!==null;){if(a=e[Ln])return a;e=s_(e)}return n}e=a,a=e.parentNode}return null}function la(e){if(e=e[Ln]||e[Oa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Zi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ca(e){var n=e[Ei];return n||(n=e[Ei]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function On(e){e[ai]=!0}var Rr=new Set,In={};function ua(e,n){Ia(e,n),Ia(e+"Capture",n)}function Ia(e,n){for(In[e]=n,e=0;e<n.length;e++)Rr.add(n[e])}var $o=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fs={},R={};function J(e){return Rn.call(R,e)?!0:Rn.call(fs,e)?!1:$o.test(e)?R[e]=!0:(fs[e]=!0,!1)}function dt(e,n,a){if(J(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ot(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Wt,Jt;function Gt(e){if(Wt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+e+Jt}var ae=!1;function le(e,n){if(!e||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var wt=function(){throw Error()};if(Object.defineProperty(wt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(wt,[])}catch(mt){var ut=mt}Reflect.construct(e,[],wt)}else{try{wt.call()}catch(mt){ut=mt}e.call(wt.prototype)}}else{try{throw Error()}catch(mt){ut=mt}(wt=e())&&typeof wt.catch=="function"&&wt.catch(function(){})}}catch(mt){if(mt&&ut&&typeof mt.stack=="string")return[mt.stack,ut.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var G=S.split(`
`),lt=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<lt.length&&!lt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===lt.length)for(o=G.length-1,u=lt.length-1;1<=o&&0<=u&&G[o]!==lt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==lt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==lt[u]){var bt=`
`+G[o].replace(" at new "," at ");return e.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",e.displayName)),bt}while(1<=o&&0<=u);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Gt(a):""}function Ee(e){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Gt("Activity");default:return""}}function we(e){try{var n="";do n+=Ee(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gn(e){var n=Ke(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ln(e){e._valueTracker||(e._valueTracker=gn(e))}function $e(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ce=/[\n"\\]/g;function un(e){return e.replace(ce,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(e,n,a,o,u,h,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?jn(e,S,$t(n)):a!=null?jn(e,S,$t(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+$t(A):e.removeAttribute("name")}function hi(e,n,a,o,u,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function jn(e,n,a){n==="number"&&wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Vn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function fa(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(it(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var di=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Le(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||di.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function pi(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Le(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Le(e,h,n[h])}function Ki(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ya=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(e){return Vs.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ea=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,$a=null;function tl(e){var n=la(e);if(n&&(e=n.stateNode)){var a=e[Yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(He(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Yn]||null;if(!u)throw Error(r(90));He(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&$e(o)}break t;case"textarea":fa(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Vn(e,!!a.multiple,n,!1)}}}var Xs=!1;function vc(e,n,a){if(Xs)return e(n,a);Xs=!0;try{var o=e(n);return o}finally{if(Xs=!1,(Ja!==null||$a!==null)&&($c(),Ja&&(n=Ja,e=$a,$a=Ja=null,tl(n),e)))for(n=0;n<e.length;n++)tl(e[n])}}function wr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),el=!1;if(mi)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){el=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{el=!1}var Vi=null,ki=null,ba=null;function xc(){if(ba)return ba;var e,n=ki,a=n.length,o,u="value"in Vi?Vi.value:Vi.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return ba=u.slice(e,1<o?1-o:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ds(){return!0}function nl(){return!1}function bi(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ds:nl,this.isPropagationStopped=nl,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=bi(tr),I=g({},tr,{view:0,detail:0}),q=bi(I),j,U,pt,Rt=g({},I,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kt,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(j=e.screenX-pt.screenX,U=e.screenY-pt.screenY):U=j=0,pt=e),j)},movementY:function(e){return"movementY"in e?e.movementY:U}}),Lt=bi(Rt),et=g({},Rt,{dataTransfer:0}),Et=bi(et),Dt=g({},I,{relatedTarget:0}),Vt=bi(Dt),Bt=g({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xt=bi(Bt),re=g({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ue=bi(re),Yt=g({},tr,{data:0}),Pt=bi(Yt),Kt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ft={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ne={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ge(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ne[e])?!!n[e]:!1}function kt(){return ge}var Ae=g({},I,{key:function(e){if(e.key){var n=Kt[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ft[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kt,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ne=bi(Ae),Fe=g({},Rt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_n=bi(Fe),Cn=g({},I,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kt}),tn=bi(Cn),Fn=g({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gi=bi(Fn),_i=g({},Rt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kn=bi(_i),Oi=g({},tr,{newState:0,oldState:0}),Ti=bi(Oi),Ii=[9,13,27,32],ri=mi&&"CompositionEvent"in window,Ai=null;mi&&"documentMode"in document&&(Ai=document.documentMode);var Fa=mi&&"TextEvent"in window&&!Ai,qs=mi&&(!ri||Ai&&8<Ai&&11>=Ai),ha=" ",hm=!1;function dm(e,n){switch(e){case"keyup":return Ii.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Lx(e,n){switch(e){case"compositionend":return pm(n);case"keypress":return n.which!==32?null:(hm=!0,ha);case"textInput":return e=n.data,e===ha&&hm?null:e;default:return null}}function Nx(e,n){if(Ys)return e==="compositionend"||!ri&&dm(e,n)?(e=xc(),ba=ki=Vi=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qs&&n.locale!=="ko"?null:n.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Px[e.type]:n==="textarea"}function gm(e,n,a,o){Ja?$a?$a.push(o):$a=[o]:Ja=o,n=ru(n,"onChange"),0<n.length&&(a=new Ws("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var il=null,al=null;function Ox(e){Kg(e,0)}function Mc(e){var n=Zi(e);if($e(n))return e}function _m(e,n){if(e==="change")return n}var vm=!1;if(mi){var yf;if(mi){var Ef="oninput"in document;if(!Ef){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Ef=typeof xm.oninput=="function"}yf=Ef}else yf=!1;vm=yf&&(!document.documentMode||9<document.documentMode)}function Mm(){il&&(il.detachEvent("onpropertychange",Sm),al=il=null)}function Sm(e){if(e.propertyName==="value"&&Mc(al)){var n=[];gm(n,al,e,ks(e)),vc(Ox,n)}}function Ix(e,n,a){e==="focusin"?(Mm(),il=n,al=a,il.attachEvent("onpropertychange",Sm)):e==="focusout"&&Mm()}function Fx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mc(al)}function Bx(e,n){if(e==="click")return Mc(n)}function zx(e,n){if(e==="input"||e==="change")return Mc(n)}function Hx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qi=typeof Object.is=="function"?Object.is:Hx;function rl(e,n){if(Qi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Rn.call(n,u)||!Qi(e[u],n[u]))return!1}return!0}function ym(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Em(e,n){var a=ym(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ym(a)}}function bm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=wn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=wn(e.document)}return n}function bf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Gx=mi&&"documentMode"in document&&11>=document.documentMode,js=null,Tf=null,sl=null,Af=!1;function Am(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Af||js==null||js!==wn(o)||(o=js,"selectionStart"in o&&bf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),sl&&rl(sl,o)||(sl=o,o=ru(Tf,"onSelect"),0<o.length&&(n=new Ws("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=js)))}function ps(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Rf={},Rm={};mi&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ms(e){if(Rf[e])return Rf[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rm)return Rf[e]=n[a];return e}var wm=ms("animationend"),Cm=ms("animationiteration"),Dm=ms("animationstart"),Vx=ms("transitionrun"),kx=ms("transitionstart"),Xx=ms("transitioncancel"),Um=ms("transitionend"),Lm=new Map,wf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wf.push("scrollEnd");function Ta(e,n){Lm.set(e,n),ua(n,[e])}var Nm=new WeakMap;function da(e,n){if(typeof e=="object"&&e!==null){var a=Nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:we(n)},Nm.set(e,n),n)}return{value:e,source:n,stack:we(n)}}var pa=[],Ks=0,Cf=0;function Sc(){for(var e=Ks,n=Cf=Ks=0;n<e;){var a=pa[n];pa[n++]=null;var o=pa[n];pa[n++]=null;var u=pa[n];pa[n++]=null;var h=pa[n];if(pa[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&Pm(a,u,h)}}function yc(e,n,a,o){pa[Ks++]=e,pa[Ks++]=n,pa[Ks++]=a,pa[Ks++]=o,Cf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Df(e,n,a,o){return yc(e,n,a,o),Ec(e)}function Qs(e,n){return yc(e,null,null,n),Ec(e)}function Pm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-jt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Ec(e){if(50<Ul)throw Ul=0,Ih=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Js={};function Wx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ji(e,n,a,o){return new Wx(e,n,a,o)}function Uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function er(e,n){var a=e.alternate;return a===null?(a=Ji(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Om(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bc(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Uf(e)&&(S=1);else if(typeof e=="string")S=YM(e,a,qt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Ji(31,a,n,u),e.elementType=L,e.lanes=h,e;case E:return gs(a.children,u,h,n);case w:S=8,u|=24;break;case M:return e=Ji(12,a,n,u|2),e.elementType=M,e.lanes=h,e;case z:return e=Ji(13,a,n,u),e.elementType=z,e.lanes=h,e;case H:return e=Ji(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case P:S=10;break t;case C:S=9;break t;case N:S=11;break t;case k:S=14;break t;case T:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Ji(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function gs(e,n,a,o){return e=Ji(7,e,o,n),e.lanes=a,e}function Lf(e,n,a){return e=Ji(6,e,null,n),e.lanes=a,e}function Nf(e,n,a){return n=Ji(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var $s=[],to=0,Tc=null,Ac=0,ma=[],ga=0,_s=null,nr=1,ir="";function vs(e,n){$s[to++]=Ac,$s[to++]=Tc,Tc=e,Ac=n}function Im(e,n,a){ma[ga++]=nr,ma[ga++]=ir,ma[ga++]=_s,_s=e;var o=nr;e=ir;var u=32-jt(o)-1;o&=~(1<<u),a+=1;var h=32-jt(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,nr=1<<32-jt(n)+u|a<<u|o,ir=h+e}else nr=1<<h|a<<u|o,ir=e}function Pf(e){e.return!==null&&(vs(e,1),Im(e,1,0))}function Of(e){for(;e===Tc;)Tc=$s[--to],$s[to]=null,Ac=$s[--to],$s[to]=null;for(;e===_s;)_s=ma[--ga],ma[ga]=null,ir=ma[--ga],ma[ga]=null,nr=ma[--ga],ma[ga]=null}var Fi=null,zn=null,cn=!1,xs=null,Ba=!1,If=Error(r(519));function Ms(e){var n=Error(r(418,""));throw cl(da(n,e)),If}function Fm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ln]=e,n[Yn]=o,a){case"dialog":qe("cancel",n),qe("close",n);break;case"iframe":case"object":case"embed":qe("load",n);break;case"video":case"audio":for(a=0;a<Nl.length;a++)qe(Nl[a],n);break;case"source":qe("error",n);break;case"img":case"image":case"link":qe("error",n),qe("load",n);break;case"details":qe("toggle",n);break;case"input":qe("invalid",n),hi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ln(n);break;case"select":qe("invalid",n);break;case"textarea":qe("invalid",n),rn(n,o.value,o.defaultValue,o.children),ln(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(qe("beforetoggle",n),qe("toggle",n)),o.onScroll!=null&&qe("scroll",n),o.onScrollEnd!=null&&qe("scrollend",n),o.onClick!=null&&(n.onclick=su),n=!0):n=!1,n||Ms(e)}function Bm(e){for(Fi=e.return;Fi;)switch(Fi.tag){case 5:case 13:Ba=!1;return;case 27:case 3:Ba=!0;return;default:Fi=Fi.return}}function ol(e){if(e!==Fi)return!1;if(!cn)return Bm(e),cn=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Jh(e.type,e.memoizedProps)),a=!a),a&&zn&&Ms(e),Bm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){zn=Ra(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}zn=null}}else n===27?(n=zn,qr(e.type)?(e=nd,nd=null,zn=e):zn=n):zn=Fi?Ra(e.stateNode.nextSibling):null;return!0}function ll(){zn=Fi=null,cn=!1}function zm(){var e=xs;return e!==null&&(qi===null?qi=e:qi.push.apply(qi,e),xs=null),e}function cl(e){xs===null?xs=[e]:xs.push(e)}var Ff=Q(null),Ss=null,ar=null;function Ur(e,n,a){_t(Ff,n._currentValue),n._currentValue=a}function rr(e){e._currentValue=Ff.current,ct(Ff)}function Bf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function zf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Bf(h.return,a,e),o||(S=null);break t}h=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Bf(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function ul(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=u.type;Qi(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===Ct.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}u=u.return}e!==null&&zf(n,e,a,o),n.flags|=262144}function Rc(e){for(e=e.firstContext;e!==null;){if(!Qi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ys(e){Ss=e,ar=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ri(e){return Hm(Ss,e)}function wc(e,n){return Ss===null&&ys(e),Hm(e,n)}function Hm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ar===null){if(e===null)throw Error(r(308));ar=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ar=ar.next=n;return a}var qx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Yx=s.unstable_scheduleCallback,jx=s.unstable_NormalPriority,ti={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hf(){return{controller:new qx,data:new Map,refCount:0}}function fl(e){e.refCount--,e.refCount===0&&Yx(jx,function(){e.controller.abort()})}var hl=null,Gf=0,eo=0,no=null;function Zx(e,n){if(hl===null){var a=hl=[];Gf=0,eo=kh(),no={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gf++,n.then(Gm,Gm),n}function Gm(){if(--Gf===0&&hl!==null){no!==null&&(no.status="fulfilled");var e=hl;hl=null,eo=0,no=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Kx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Vm=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zx(e,n),Vm!==null&&Vm(e,n)};var Es=Q(null);function Vf(){var e=Es.current;return e!==null?e:Tn.pooledCache}function Cc(e,n){n===null?_t(Es,Es.current):_t(Es,n.pool)}function km(){var e=Vf();return e===null?null:{parent:ti._currentValue,pool:e}}var dl=Error(r(460)),Xm=Error(r(474)),Dc=Error(r(542)),kf={then:function(){}};function Wm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Uc(){}function qm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Uc,Uc),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e;default:if(typeof n.status=="string")n.then(Uc,Uc);else{if(e=Tn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e}throw pl=n,dl}}var pl=null;function Ym(){if(pl===null)throw Error(r(459));var e=pl;return pl=null,e}function jm(e){if(e===dl||e===Dc)throw Error(r(483))}var Lr=!1;function Xf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(fn&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ec(e),Pm(e,null,a),n}return yc(e,o,n,a),Ec(e)}function ml(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,se(e,a)}}function qf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yf=!1;function gl(){if(Yf){var e=no;if(e!==null)throw e}}function _l(e,n,a,o){Yf=!1;var u=e.updateQueue;Lr=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,lt=G.next;G.next=null,S===null?h=lt:S.next=lt,S=G;var bt=e.alternate;bt!==null&&(bt=bt.updateQueue,A=bt.lastBaseUpdate,A!==S&&(A===null?bt.firstBaseUpdate=lt:A.next=lt,bt.lastBaseUpdate=G))}if(h!==null){var wt=u.baseState;S=0,bt=lt=G=null,A=h;do{var ut=A.lane&-536870913,mt=ut!==A.lane;if(mt?(en&ut)===ut:(o&ut)===ut){ut!==0&&ut===eo&&(Yf=!0),bt!==null&&(bt=bt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Re=e,be=A;ut=n;var Mn=a;switch(be.tag){case 1:if(Re=be.payload,typeof Re=="function"){wt=Re.call(Mn,wt,ut);break t}wt=Re;break t;case 3:Re.flags=Re.flags&-65537|128;case 0:if(Re=be.payload,ut=typeof Re=="function"?Re.call(Mn,wt,ut):Re,ut==null)break t;wt=g({},wt,ut);break t;case 2:Lr=!0}}ut=A.callback,ut!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[ut]:mt.push(ut))}else mt={lane:ut,tag:A.tag,payload:A.payload,callback:A.callback,next:null},bt===null?(lt=bt=mt,G=wt):bt=bt.next=mt,S|=ut;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;mt=A,A=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);bt===null&&(G=wt),u.baseState=G,u.firstBaseUpdate=lt,u.lastBaseUpdate=bt,h===null&&(u.shared.lanes=0),Vr|=S,e.lanes=S,e.memoizedState=wt}}function Zm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Km(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zm(a[e],n)}var io=Q(null),Lc=Q(0);function Qm(e,n){e=hr,_t(Lc,e),_t(io,n),hr=e|n.baseLanes}function jf(){_t(Lc,hr),_t(io,io.current)}function Zf(){hr=Lc.current,ct(io),ct(Lc)}var Or=0,Ge=null,vn=null,Zn=null,Nc=!1,ao=!1,bs=!1,Pc=0,vl=0,ro=null,Qx=0;function Xn(){throw Error(r(321))}function Kf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qi(e[a],n[a]))return!1;return!0}function Qf(e,n,a,o,u,h){return Or=h,Ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?P0:O0,bs=!1,h=a(o,u),bs=!1,ao&&(h=$m(n,a,o,u)),Jm(e),h}function Jm(e){F.H=Hc;var n=vn!==null&&vn.next!==null;if(Or=0,Zn=vn=Ge=null,Nc=!1,vl=0,ro=null,n)throw Error(r(300));e===null||si||(e=e.dependencies,e!==null&&Rc(e)&&(si=!0))}function $m(e,n,a,o){Ge=e;var u=0;do{if(ao&&(ro=null),vl=0,ao=!1,25<=u)throw Error(r(301));if(u+=1,Zn=vn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=aM,h=n(a,o)}while(ao);return h}function Jx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?xl(n):n,e=e.useState()[0],(vn!==null?vn.memoizedState:null)!==e&&(Ge.flags|=1024),n}function Jf(){var e=Pc!==0;return Pc=0,e}function $f(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function th(e){if(Nc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nc=!1}Or=0,Zn=vn=Ge=null,ao=!1,vl=Pc=0,ro=null}function Xi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zn===null?Ge.memoizedState=Zn=e:Zn=Zn.next=e,Zn}function Kn(){if(vn===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=vn.next;var n=Zn===null?Ge.memoizedState:Zn.next;if(n!==null)Zn=n,vn=e;else{if(e===null)throw Ge.alternate===null?Error(r(467)):Error(r(310));vn=e,e={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Zn===null?Ge.memoizedState=Zn=e:Zn=Zn.next=e}return Zn}function eh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xl(e){var n=vl;return vl+=1,ro===null&&(ro=[]),e=qm(ro,e,n),n=Ge,(Zn===null?n.memoizedState:Zn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?P0:O0),e}function Oc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xl(e);if(e.$$typeof===P)return Ri(e)}throw Error(r(438,String(e)))}function nh(e){var n=null,a=Ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=eh(),Ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ft;return n.index++,a}function sr(e,n){return typeof n=="function"?n(e):n}function Ic(e){var n=Kn();return ih(n,vn,e)}function ih(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=S=null,G=null,lt=n,bt=!1;do{var wt=lt.lane&-536870913;if(wt!==lt.lane?(en&wt)===wt:(Or&wt)===wt){var ut=lt.revertLane;if(ut===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),wt===eo&&(bt=!0);else if((Or&ut)===ut){lt=lt.next,ut===eo&&(bt=!0);continue}else wt={lane:0,revertLane:lt.revertLane,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},G===null?(A=G=wt,S=h):G=G.next=wt,Ge.lanes|=ut,Vr|=ut;wt=lt.action,bs&&a(h,wt),h=lt.hasEagerState?lt.eagerState:a(h,wt)}else ut={lane:wt,revertLane:lt.revertLane,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},G===null?(A=G=ut,S=h):G=G.next=ut,Ge.lanes|=wt,Vr|=wt;lt=lt.next}while(lt!==null&&lt!==n);if(G===null?S=h:G.next=A,!Qi(h,e.memoizedState)&&(si=!0,bt&&(a=no,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ah(e){var n=Kn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);Qi(h,n.memoizedState)||(si=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function t0(e,n,a){var o=Ge,u=Kn(),h=cn;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Qi((vn||u).memoizedState,a);S&&(u.memoizedState=a,si=!0),u=u.queue;var A=i0.bind(null,o,u,e);if(Ml(2048,8,A,[e]),u.getSnapshot!==n||S||Zn!==null&&Zn.memoizedState.tag&1){if(o.flags|=2048,so(9,Fc(),n0.bind(null,o,u,a,n),null),Tn===null)throw Error(r(349));h||(Or&124)!==0||e0(o,n,a)}return a}function e0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ge.updateQueue,n===null?(n=eh(),Ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function n0(e,n,a,o){n.value=a,n.getSnapshot=o,a0(n)&&r0(e)}function i0(e,n,a){return a(function(){a0(n)&&r0(e)})}function a0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qi(e,a)}catch{return!0}}function r0(e){var n=Qs(e,2);n!==null&&ia(n,e,2)}function rh(e){var n=Xi();if(typeof e=="function"){var a=e;if(e=a(),bs){vt(!0);try{a()}finally{vt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},n}function s0(e,n,a,o){return e.baseState=a,ih(e,vn,typeof o=="function"?o:sr)}function $x(e,n,a,o,u){if(zc(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,o0(n,h)):(h.next=a.next,n.pending=a.next=h)}}function o0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=F.T,S={};F.T=S;try{var A=a(u,o),G=F.S;G!==null&&G(S,A),l0(e,n,A)}catch(lt){sh(e,n,lt)}finally{F.T=h}}else try{h=a(u,o),l0(e,n,h)}catch(lt){sh(e,n,lt)}}function l0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){c0(e,n,o)},function(o){return sh(e,n,o)}):c0(e,n,a)}function c0(e,n,a){n.status="fulfilled",n.value=a,u0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,o0(e,a)))}function sh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,u0(n),n=n.next;while(n!==o)}e.action=null}function u0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function f0(e,n){return n}function h0(e,n){if(cn){var a=Tn.formState;if(a!==null){t:{var o=Ge;if(cn){if(zn){e:{for(var u=zn,h=Ba;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ra(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){zn=Ra(u.nextSibling),o=u.data==="F!";break t}}Ms(o)}o=!1}o&&(n=a[0])}}return a=Xi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:f0,lastRenderedState:n},a.queue=o,a=U0.bind(null,Ge,o),o.dispatch=a,o=rh(!1),h=fh.bind(null,Ge,!1,o.queue),o=Xi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=$x.bind(null,Ge,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function d0(e){var n=Kn();return p0(n,vn,e)}function p0(e,n,a){if(n=ih(e,n,f0)[0],e=Ic(sr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xl(n)}catch(S){throw S===dl?Dc:S}else o=n;n=Kn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Ge.flags|=2048,so(9,Fc(),tM.bind(null,u,a),null)),[o,h,e]}function tM(e,n){e.action=n}function m0(e){var n=Kn(),a=vn;if(a!==null)return p0(n,a,e);Kn(),n=n.memoizedState,a=Kn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function so(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ge.updateQueue,n===null&&(n=eh(),Ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Fc(){return{destroy:void 0,resource:void 0}}function g0(){return Kn().memoizedState}function Bc(e,n,a,o){var u=Xi();o=o===void 0?null:o,Ge.flags|=e,u.memoizedState=so(1|n,Fc(),a,o)}function Ml(e,n,a,o){var u=Kn();o=o===void 0?null:o;var h=u.memoizedState.inst;vn!==null&&o!==null&&Kf(o,vn.memoizedState.deps)?u.memoizedState=so(n,h,a,o):(Ge.flags|=e,u.memoizedState=so(1|n,h,a,o))}function _0(e,n){Bc(8390656,8,e,n)}function v0(e,n){Ml(2048,8,e,n)}function x0(e,n){return Ml(4,2,e,n)}function M0(e,n){return Ml(4,4,e,n)}function S0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function y0(e,n,a){a=a!=null?a.concat([e]):null,Ml(4,4,S0.bind(null,n,e),a)}function oh(){}function E0(e,n){var a=Kn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Kf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function b0(e,n){var a=Kn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Kf(n,o[1]))return o[0];if(o=e(),bs){vt(!0);try{e()}finally{vt(!1)}}return a.memoizedState=[o,n],o}function lh(e,n,a){return a===void 0||(Or&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Rg(),Ge.lanes|=e,Vr|=e,a)}function T0(e,n,a,o){return Qi(a,n)?a:io.current!==null?(e=lh(e,a,o),Qi(e,n)||(si=!0),e):(Or&42)===0?(si=!0,e.memoizedState=a):(e=Rg(),Ge.lanes|=e,Vr|=e,n)}function A0(e,n,a,o,u){var h=B.p;B.p=h!==0&&8>h?h:8;var S=F.T,A={};F.T=A,fh(e,!1,n,a);try{var G=u(),lt=F.S;if(lt!==null&&lt(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var bt=Kx(G,o);Sl(e,n,bt,na(e))}else Sl(e,n,o,na(e))}catch(wt){Sl(e,n,{then:function(){},status:"rejected",reason:wt},na())}finally{B.p=h,F.T=S}}function eM(){}function ch(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=R0(e).queue;A0(e,u,n,ht,a===null?eM:function(){return w0(e),a(o)})}function R0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:ht},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function w0(e){var n=R0(e).next.queue;Sl(e,n,{},na())}function uh(){return Ri(zl)}function C0(){return Kn().memoizedState}function D0(){return Kn().memoizedState}function nM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=na();e=Nr(a);var o=Pr(n,e,a);o!==null&&(ia(o,n,a),ml(o,n,a)),n={cache:Hf()},e.payload=n;return}n=n.return}}function iM(e,n,a){var o=na();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zc(e)?L0(n,a):(a=Df(e,n,a,o),a!==null&&(ia(a,e,o),N0(a,n,o)))}function U0(e,n,a){var o=na();Sl(e,n,a,o)}function Sl(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zc(e))L0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,A=h(S,a);if(u.hasEagerState=!0,u.eagerState=A,Qi(A,S))return yc(e,n,u,0),Tn===null&&Sc(),!1}catch{}if(a=Df(e,n,u,o),a!==null)return ia(a,e,o),N0(a,n,o),!0}return!1}function fh(e,n,a,o){if(o={lane:2,revertLane:kh(),action:o,hasEagerState:!1,eagerState:null,next:null},zc(e)){if(n)throw Error(r(479))}else n=Df(e,a,o,2),n!==null&&ia(n,e,2)}function zc(e){var n=e.alternate;return e===Ge||n!==null&&n===Ge}function L0(e,n){ao=Nc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function N0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,se(e,a)}}var Hc={readContext:Ri,use:Oc,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useLayoutEffect:Xn,useInsertionEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useSyncExternalStore:Xn,useId:Xn,useHostTransitionStatus:Xn,useFormState:Xn,useActionState:Xn,useOptimistic:Xn,useMemoCache:Xn,useCacheRefresh:Xn},P0={readContext:Ri,use:Oc,useCallback:function(e,n){return Xi().memoizedState=[e,n===void 0?null:n],e},useContext:Ri,useEffect:_0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bc(4194308,4,S0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bc(4194308,4,e,n)},useInsertionEffect:function(e,n){Bc(4,2,e,n)},useMemo:function(e,n){var a=Xi();n=n===void 0?null:n;var o=e();if(bs){vt(!0);try{e()}finally{vt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xi();if(a!==void 0){var u=a(n);if(bs){vt(!0);try{a(n)}finally{vt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=iM.bind(null,Ge,e),[o.memoizedState,e]},useRef:function(e){var n=Xi();return e={current:e},n.memoizedState=e},useState:function(e){e=rh(e);var n=e.queue,a=U0.bind(null,Ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:oh,useDeferredValue:function(e,n){var a=Xi();return lh(a,e,n)},useTransition:function(){var e=rh(!1);return e=A0.bind(null,Ge,e.queue,!0,!1),Xi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ge,u=Xi();if(cn){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Tn===null)throw Error(r(349));(en&124)!==0||e0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,_0(i0.bind(null,o,h,e),[e]),o.flags|=2048,so(9,Fc(),n0.bind(null,o,h,a,n),null),a},useId:function(){var e=Xi(),n=Tn.identifierPrefix;if(cn){var a=ir,o=nr;a=(o&~(1<<32-jt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Pc++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Qx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:uh,useFormState:h0,useActionState:h0,useOptimistic:function(e){var n=Xi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=fh.bind(null,Ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:nh,useCacheRefresh:function(){return Xi().memoizedState=nM.bind(null,Ge)}},O0={readContext:Ri,use:Oc,useCallback:E0,useContext:Ri,useEffect:v0,useImperativeHandle:y0,useInsertionEffect:x0,useLayoutEffect:M0,useMemo:b0,useReducer:Ic,useRef:g0,useState:function(){return Ic(sr)},useDebugValue:oh,useDeferredValue:function(e,n){var a=Kn();return T0(a,vn.memoizedState,e,n)},useTransition:function(){var e=Ic(sr)[0],n=Kn().memoizedState;return[typeof e=="boolean"?e:xl(e),n]},useSyncExternalStore:t0,useId:C0,useHostTransitionStatus:uh,useFormState:d0,useActionState:d0,useOptimistic:function(e,n){var a=Kn();return s0(a,vn,e,n)},useMemoCache:nh,useCacheRefresh:D0},aM={readContext:Ri,use:Oc,useCallback:E0,useContext:Ri,useEffect:v0,useImperativeHandle:y0,useInsertionEffect:x0,useLayoutEffect:M0,useMemo:b0,useReducer:ah,useRef:g0,useState:function(){return ah(sr)},useDebugValue:oh,useDeferredValue:function(e,n){var a=Kn();return vn===null?lh(a,e,n):T0(a,vn.memoizedState,e,n)},useTransition:function(){var e=ah(sr)[0],n=Kn().memoizedState;return[typeof e=="boolean"?e:xl(e),n]},useSyncExternalStore:t0,useId:C0,useHostTransitionStatus:uh,useFormState:m0,useActionState:m0,useOptimistic:function(e,n){var a=Kn();return vn!==null?s0(a,vn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nh,useCacheRefresh:D0},oo=null,yl=0;function Gc(e){var n=yl;return yl+=1,oo===null&&(oo=[]),qm(oo,e,n)}function El(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Vc(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function I0(e){var n=e._init;return n(e._payload)}function F0(e){function n($,Y){if(e){var rt=$.deletions;rt===null?($.deletions=[Y],$.flags|=16):rt.push(Y)}}function a($,Y){if(!e)return null;for(;Y!==null;)n($,Y),Y=Y.sibling;return null}function o($){for(var Y=new Map;$!==null;)$.key!==null?Y.set($.key,$):Y.set($.index,$),$=$.sibling;return Y}function u($,Y){return $=er($,Y),$.index=0,$.sibling=null,$}function h($,Y,rt){return $.index=rt,e?(rt=$.alternate,rt!==null?(rt=rt.index,rt<Y?($.flags|=67108866,Y):rt):($.flags|=67108866,Y)):($.flags|=1048576,Y)}function S($){return e&&$.alternate===null&&($.flags|=67108866),$}function A($,Y,rt,At){return Y===null||Y.tag!==6?(Y=Lf(rt,$.mode,At),Y.return=$,Y):(Y=u(Y,rt),Y.return=$,Y)}function G($,Y,rt,At){var fe=rt.type;return fe===E?bt($,Y,rt.props.children,At,rt.key):Y!==null&&(Y.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===T&&I0(fe)===Y.type)?(Y=u(Y,rt.props),El(Y,rt),Y.return=$,Y):(Y=bc(rt.type,rt.key,rt.props,null,$.mode,At),El(Y,rt),Y.return=$,Y)}function lt($,Y,rt,At){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==rt.containerInfo||Y.stateNode.implementation!==rt.implementation?(Y=Nf(rt,$.mode,At),Y.return=$,Y):(Y=u(Y,rt.children||[]),Y.return=$,Y)}function bt($,Y,rt,At,fe){return Y===null||Y.tag!==7?(Y=gs(rt,$.mode,At,fe),Y.return=$,Y):(Y=u(Y,rt),Y.return=$,Y)}function wt($,Y,rt){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Lf(""+Y,$.mode,rt),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case _:return rt=bc(Y.type,Y.key,Y.props,null,$.mode,rt),El(rt,Y),rt.return=$,rt;case y:return Y=Nf(Y,$.mode,rt),Y.return=$,Y;case T:var At=Y._init;return Y=At(Y._payload),wt($,Y,rt)}if(it(Y)||at(Y))return Y=gs(Y,$.mode,rt,null),Y.return=$,Y;if(typeof Y.then=="function")return wt($,Gc(Y),rt);if(Y.$$typeof===P)return wt($,wc($,Y),rt);Vc($,Y)}return null}function ut($,Y,rt,At){var fe=Y!==null?Y.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return fe!==null?null:A($,Y,""+rt,At);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case _:return rt.key===fe?G($,Y,rt,At):null;case y:return rt.key===fe?lt($,Y,rt,At):null;case T:return fe=rt._init,rt=fe(rt._payload),ut($,Y,rt,At)}if(it(rt)||at(rt))return fe!==null?null:bt($,Y,rt,At,null);if(typeof rt.then=="function")return ut($,Y,Gc(rt),At);if(rt.$$typeof===P)return ut($,Y,wc($,rt),At);Vc($,rt)}return null}function mt($,Y,rt,At,fe){if(typeof At=="string"&&At!==""||typeof At=="number"||typeof At=="bigint")return $=$.get(rt)||null,A(Y,$,""+At,fe);if(typeof At=="object"&&At!==null){switch(At.$$typeof){case _:return $=$.get(At.key===null?rt:At.key)||null,G(Y,$,At,fe);case y:return $=$.get(At.key===null?rt:At.key)||null,lt(Y,$,At,fe);case T:var ke=At._init;return At=ke(At._payload),mt($,Y,rt,At,fe)}if(it(At)||at(At))return $=$.get(rt)||null,bt(Y,$,At,fe,null);if(typeof At.then=="function")return mt($,Y,rt,Gc(At),fe);if(At.$$typeof===P)return mt($,Y,rt,wc(Y,At),fe);Vc(Y,At)}return null}function Re($,Y,rt,At){for(var fe=null,ke=null,_e=Y,Te=Y=0,li=null;_e!==null&&Te<rt.length;Te++){_e.index>Te?(li=_e,_e=null):li=_e.sibling;var on=ut($,_e,rt[Te],At);if(on===null){_e===null&&(_e=li);break}e&&_e&&on.alternate===null&&n($,_e),Y=h(on,Y,Te),ke===null?fe=on:ke.sibling=on,ke=on,_e=li}if(Te===rt.length)return a($,_e),cn&&vs($,Te),fe;if(_e===null){for(;Te<rt.length;Te++)_e=wt($,rt[Te],At),_e!==null&&(Y=h(_e,Y,Te),ke===null?fe=_e:ke.sibling=_e,ke=_e);return cn&&vs($,Te),fe}for(_e=o(_e);Te<rt.length;Te++)li=mt(_e,$,Te,rt[Te],At),li!==null&&(e&&li.alternate!==null&&_e.delete(li.key===null?Te:li.key),Y=h(li,Y,Te),ke===null?fe=li:ke.sibling=li,ke=li);return e&&_e.forEach(function(Qr){return n($,Qr)}),cn&&vs($,Te),fe}function be($,Y,rt,At){if(rt==null)throw Error(r(151));for(var fe=null,ke=null,_e=Y,Te=Y=0,li=null,on=rt.next();_e!==null&&!on.done;Te++,on=rt.next()){_e.index>Te?(li=_e,_e=null):li=_e.sibling;var Qr=ut($,_e,on.value,At);if(Qr===null){_e===null&&(_e=li);break}e&&_e&&Qr.alternate===null&&n($,_e),Y=h(Qr,Y,Te),ke===null?fe=Qr:ke.sibling=Qr,ke=Qr,_e=li}if(on.done)return a($,_e),cn&&vs($,Te),fe;if(_e===null){for(;!on.done;Te++,on=rt.next())on=wt($,on.value,At),on!==null&&(Y=h(on,Y,Te),ke===null?fe=on:ke.sibling=on,ke=on);return cn&&vs($,Te),fe}for(_e=o(_e);!on.done;Te++,on=rt.next())on=mt(_e,$,Te,on.value,At),on!==null&&(e&&on.alternate!==null&&_e.delete(on.key===null?Te:on.key),Y=h(on,Y,Te),ke===null?fe=on:ke.sibling=on,ke=on);return e&&_e.forEach(function(rS){return n($,rS)}),cn&&vs($,Te),fe}function Mn($,Y,rt,At){if(typeof rt=="object"&&rt!==null&&rt.type===E&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case _:t:{for(var fe=rt.key;Y!==null;){if(Y.key===fe){if(fe=rt.type,fe===E){if(Y.tag===7){a($,Y.sibling),At=u(Y,rt.props.children),At.return=$,$=At;break t}}else if(Y.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===T&&I0(fe)===Y.type){a($,Y.sibling),At=u(Y,rt.props),El(At,rt),At.return=$,$=At;break t}a($,Y);break}else n($,Y);Y=Y.sibling}rt.type===E?(At=gs(rt.props.children,$.mode,At,rt.key),At.return=$,$=At):(At=bc(rt.type,rt.key,rt.props,null,$.mode,At),El(At,rt),At.return=$,$=At)}return S($);case y:t:{for(fe=rt.key;Y!==null;){if(Y.key===fe)if(Y.tag===4&&Y.stateNode.containerInfo===rt.containerInfo&&Y.stateNode.implementation===rt.implementation){a($,Y.sibling),At=u(Y,rt.children||[]),At.return=$,$=At;break t}else{a($,Y);break}else n($,Y);Y=Y.sibling}At=Nf(rt,$.mode,At),At.return=$,$=At}return S($);case T:return fe=rt._init,rt=fe(rt._payload),Mn($,Y,rt,At)}if(it(rt))return Re($,Y,rt,At);if(at(rt)){if(fe=at(rt),typeof fe!="function")throw Error(r(150));return rt=fe.call(rt),be($,Y,rt,At)}if(typeof rt.then=="function")return Mn($,Y,Gc(rt),At);if(rt.$$typeof===P)return Mn($,Y,wc($,rt),At);Vc($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,Y!==null&&Y.tag===6?(a($,Y.sibling),At=u(Y,rt),At.return=$,$=At):(a($,Y),At=Lf(rt,$.mode,At),At.return=$,$=At),S($)):a($,Y)}return function($,Y,rt,At){try{yl=0;var fe=Mn($,Y,rt,At);return oo=null,fe}catch(_e){if(_e===dl||_e===Dc)throw _e;var ke=Ji(29,_e,null,$.mode);return ke.lanes=At,ke.return=$,ke}}}var lo=F0(!0),B0=F0(!1),_a=Q(null),za=null;function Ir(e){var n=e.alternate;_t(ei,ei.current&1),_t(_a,e),za===null&&(n===null||io.current!==null||n.memoizedState!==null)&&(za=e)}function z0(e){if(e.tag===22){if(_t(ei,ei.current),_t(_a,e),za===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(za=e)}}else Fr()}function Fr(){_t(ei,ei.current),_t(_a,_a.current)}function or(e){ct(_a),za===e&&(za=null),ct(ei)}var ei=Q(0);function kc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ed(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function hh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var dh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=na(),u=Nr(o);u.payload=n,a!=null&&(u.callback=a),n=Pr(e,u,o),n!==null&&(ia(n,e,o),ml(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=na(),u=Nr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pr(e,u,o),n!==null&&(ia(n,e,o),ml(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=na(),o=Nr(a);o.tag=2,n!=null&&(o.callback=n),n=Pr(e,o,a),n!==null&&(ia(n,e,a),ml(n,e,a))}};function H0(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!rl(a,o)||!rl(u,h):!0}function G0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&dh.enqueueReplaceState(n,n.state,null)}function Ts(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Xc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function V0(e){Xc(e)}function k0(e){console.error(e)}function X0(e){Xc(e)}function Wc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function W0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ph(e,n,a){return a=Nr(a),a.tag=3,a.payload={element:null},a.callback=function(){Wc(e,n)},a}function q0(e){return e=Nr(e),e.tag=3,e}function Y0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){W0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){W0(n,a,o),typeof u!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function rM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ul(n,a,u,!0),a=_a.current,a!==null){switch(a.tag){case 13:return za===null?Bh():a.alternate===null&&Hn===0&&(Hn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===kf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Hh(e,o,u)),!1;case 22:return a.flags|=65536,o===kf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Hh(e,o,u)),!1}throw Error(r(435,a.tag))}return Hh(e,o,u),Bh(),!1}if(cn)return n=_a.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==If&&(e=Error(r(422),{cause:o}),cl(da(e,a)))):(o!==If&&(n=Error(r(423),{cause:o}),cl(da(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=da(o,a),u=ph(e.stateNode,o,u),qf(e,u),Hn!==4&&(Hn=2)),!1;var h=Error(r(520),{cause:o});if(h=da(h,a),Dl===null?Dl=[h]:Dl.push(h),Hn!==4&&(Hn=2),n===null)return!0;o=da(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ph(a.stateNode,o,e),qf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(kr===null||!kr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=q0(u),Y0(u,e,a,o),qf(a,u),!1}a=a.return}while(a!==null);return!1}var j0=Error(r(461)),si=!1;function vi(e,n,a,o){n.child=e===null?B0(n,null,a,o):lo(n,e.child,a,o)}function Z0(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return ys(n),o=Qf(e,n,a,S,h,u),A=Jf(),e!==null&&!si?($f(e,n,u),lr(e,n,u)):(cn&&A&&Pf(n),n.flags|=1,vi(e,n,o,u),n.child)}function K0(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Uf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Q0(e,n,h,o,u)):(e=bc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!yh(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:rl,a(S,o)&&e.ref===n.ref)return lr(e,n,u)}return n.flags|=1,e=er(h,o),e.ref=n.ref,e.return=n,n.child=e}function Q0(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(rl(h,o)&&e.ref===n.ref)if(si=!1,n.pendingProps=o=h,yh(e,u))(e.flags&131072)!==0&&(si=!0);else return n.lanes=e.lanes,lr(e,n,u)}return mh(e,n,a,o,u)}function J0(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return $0(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cc(n,h!==null?h.cachePool:null),h!==null?Qm(n,h):jf(),z0(n);else return n.lanes=n.childLanes=536870912,$0(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Cc(n,h.cachePool),Qm(n,h),Fr(),n.memoizedState=null):(e!==null&&Cc(n,null),jf(),Fr());return vi(e,n,u,a),n.child}function $0(e,n,a,o){var u=Vf();return u=u===null?null:{parent:ti._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Cc(n,null),jf(),z0(n),e!==null&&ul(e,n,o,!0),null}function qc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mh(e,n,a,o,u){return ys(n),a=Qf(e,n,a,o,void 0,u),o=Jf(),e!==null&&!si?($f(e,n,u),lr(e,n,u)):(cn&&o&&Pf(n),n.flags|=1,vi(e,n,a,u),n.child)}function tg(e,n,a,o,u,h){return ys(n),n.updateQueue=null,a=$m(n,o,a,u),Jm(e),o=Jf(),e!==null&&!si?($f(e,n,h),lr(e,n,h)):(cn&&o&&Pf(n),n.flags|=1,vi(e,n,a,h),n.child)}function eg(e,n,a,o,u){if(ys(n),n.stateNode===null){var h=Js,S=a.contextType;typeof S=="object"&&S!==null&&(h=Ri(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=dh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Xf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Ri(S):Js,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(hh(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&dh.enqueueReplaceState(h,h.state,null),_l(n,o,h,u),gl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,G=Ts(a,A);h.props=G;var lt=h.context,bt=a.contextType;S=Js,typeof bt=="object"&&bt!==null&&(S=Ri(bt));var wt=a.getDerivedStateFromProps;bt=typeof wt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,bt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||lt!==S)&&G0(n,h,o,S),Lr=!1;var ut=n.memoizedState;h.state=ut,_l(n,o,h,u),gl(),lt=n.memoizedState,A||ut!==lt||Lr?(typeof wt=="function"&&(hh(n,a,wt,o),lt=n.memoizedState),(G=Lr||H0(n,a,G,o,ut,lt,S))?(bt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=S,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Wf(e,n),S=n.memoizedProps,bt=Ts(a,S),h.props=bt,wt=n.pendingProps,ut=h.context,lt=a.contextType,G=Js,typeof lt=="object"&&lt!==null&&(G=Ri(lt)),A=a.getDerivedStateFromProps,(lt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==wt||ut!==G)&&G0(n,h,o,G),Lr=!1,ut=n.memoizedState,h.state=ut,_l(n,o,h,u),gl();var mt=n.memoizedState;S!==wt||ut!==mt||Lr||e!==null&&e.dependencies!==null&&Rc(e.dependencies)?(typeof A=="function"&&(hh(n,a,A,o),mt=n.memoizedState),(bt=Lr||H0(n,a,bt,o,ut,mt,G)||e!==null&&e.dependencies!==null&&Rc(e.dependencies))?(lt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,mt,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,mt,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=mt),h.props=o,h.state=mt,h.context=G,o=bt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,qc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=lo(n,e.child,null,u),n.child=lo(n,null,a,u)):vi(e,n,a,u),n.memoizedState=h.state,e=n.child):e=lr(e,n,u),e}function ng(e,n,a,o){return ll(),n.flags|=256,vi(e,n,a,o),n.child}var gh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _h(e){return{baseLanes:e,cachePool:km()}}function vh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=va),e}function ig(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(ei.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(cn){if(u?Ir(n):Fr(),cn){var A=zn,G;if(G=A){t:{for(G=A,A=Ba;G.nodeType!==8;){if(!A){A=null;break t}if(G=Ra(G.nextSibling),G===null){A=null;break t}}A=G}A!==null?(n.memoizedState={dehydrated:A,treeContext:_s!==null?{id:nr,overflow:ir}:null,retryLane:536870912,hydrationErrors:null},G=Ji(18,null,null,0),G.stateNode=A,G.return=n,n.child=G,Fi=n,zn=null,G=!0):G=!1}G||Ms(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return ed(A)?n.lanes=32:n.lanes=536870912,null;or(n)}return A=o.children,o=o.fallback,u?(Fr(),u=n.mode,A=Yc({mode:"hidden",children:A},u),o=gs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=_h(a),u.childLanes=vh(e,S,a),n.memoizedState=gh,o):(Ir(n),xh(n,A))}if(G=e.memoizedState,G!==null&&(A=G.dehydrated,A!==null)){if(h)n.flags&256?(Ir(n),n.flags&=-257,n=Mh(e,n,a)):n.memoizedState!==null?(Fr(),n.child=e.child,n.flags|=128,n=null):(Fr(),u=o.fallback,A=n.mode,o=Yc({mode:"visible",children:o.children},A),u=gs(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,lo(n,e.child,null,a),o=n.child,o.memoizedState=_h(a),o.childLanes=vh(e,S,a),n.memoizedState=gh,n=u);else if(Ir(n),ed(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var lt=S.dgst;S=lt,o=Error(r(419)),o.stack="",o.digest=S,cl({value:o,source:null,stack:null}),n=Mh(e,n,a)}else if(si||ul(e,n,a,!1),S=(a&e.childLanes)!==0,si||S){if(S=Tn,S!==null&&(o=a&-a,o=(o&42)!==0?1:Se(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,Qs(e,o),ia(S,e,o),j0;A.data==="$?"||Bh(),n=Mh(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,zn=Ra(A.nextSibling),Fi=n,cn=!0,xs=null,Ba=!1,e!==null&&(ma[ga++]=nr,ma[ga++]=ir,ma[ga++]=_s,nr=e.id,ir=e.overflow,_s=n),n=xh(n,o.children),n.flags|=4096);return n}return u?(Fr(),u=o.fallback,A=n.mode,G=e.child,lt=G.sibling,o=er(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,lt!==null?u=er(lt,u):(u=gs(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=_h(a):(G=A.cachePool,G!==null?(lt=ti._currentValue,G=G.parent!==lt?{parent:lt,pool:lt}:G):G=km(),A={baseLanes:A.baseLanes|a,cachePool:G}),u.memoizedState=A,u.childLanes=vh(e,S,a),n.memoizedState=gh,o):(Ir(n),a=e.child,e=a.sibling,a=er(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function xh(e,n){return n=Yc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Yc(e,n){return e=Ji(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Mh(e,n,a){return lo(n,e.child,null,a),e=xh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ag(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Bf(e.return,n,a)}function Sh(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function rg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(vi(e,n,o.children,a),o=ei.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,a,n);else if(e.tag===19)ag(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(_t(ei,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&kc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sh(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&kc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Sh(n,!0,a,null,h);break;case"together":Sh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function lr(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Vr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ul(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=er(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=er(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function yh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rc(e)))}function sM(e,n,a){switch(n.tag){case 3:gt(n,n.stateNode.containerInfo),Ur(n,ti,e.memoizedState.cache),ll();break;case 27:case 5:ve(n);break;case 4:gt(n,n.stateNode.containerInfo);break;case 10:Ur(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ir(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ig(e,n,a):(Ir(n),e=lr(e,n,a),e!==null?e.sibling:null);Ir(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ul(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return rg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(ei,ei.current),o)break;return null;case 22:case 23:return n.lanes=0,J0(e,n,a);case 24:Ur(n,ti,e.memoizedState.cache)}return lr(e,n,a)}function sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)si=!0;else{if(!yh(e,a)&&(n.flags&128)===0)return si=!1,sM(e,n,a);si=(e.flags&131072)!==0}else si=!1,cn&&(n.flags&1048576)!==0&&Im(n,Ac,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Uf(o)?(e=Ts(o,e),n.tag=1,n=eg(null,n,o,e,a)):(n.tag=0,n=mh(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=Z0(null,n,o,e,a);break t}else if(u===k){n.tag=14,n=K0(null,n,o,e,a);break t}}throw n=xt(o)||o,Error(r(306,n,""))}}return n;case 0:return mh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ts(o,n.pendingProps),eg(e,n,o,u,a);case 3:t:{if(gt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Wf(e,n),_l(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ur(n,ti,o),o!==h.cache&&zf(n,[ti],a,!0),gl(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ng(e,n,o,a);break t}else if(o!==u){u=da(Error(r(424)),n),cl(u),n=ng(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,zn=Ra(e.firstChild),Fi=n,cn=!0,xs=null,Ba=!0,a=B0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ll(),o===u){n=lr(e,n,a);break t}vi(e,n,o,a)}n=n.child}return n;case 26:return qc(e,n),e===null?(a=u_(n.type,null,n.pendingProps,null))?n.memoizedState=a:cn||(a=n.type,e=n.pendingProps,o=ou(tt.current).createElement(a),o[Ln]=n,o[Yn]=e,Mi(o,a,e),On(o),n.stateNode=o):n.memoizedState=u_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ve(n),e===null&&cn&&(o=n.stateNode=o_(n.type,n.pendingProps,tt.current),Fi=n,Ba=!0,u=zn,qr(n.type)?(nd=u,zn=Ra(o.firstChild)):zn=u),vi(e,n,n.pendingProps.children,a),qc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&cn&&((u=o=zn)&&(o=PM(o,n.type,n.pendingProps,Ba),o!==null?(n.stateNode=o,Fi=n,zn=Ra(o.firstChild),Ba=!1,u=!0):u=!1),u||Ms(n)),ve(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,Jh(u,h)?o=null:S!==null&&Jh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Qf(e,n,Jx,null,null,a),zl._currentValue=u),qc(e,n),vi(e,n,o,a),n.child;case 6:return e===null&&cn&&((e=a=zn)&&(a=OM(a,n.pendingProps,Ba),a!==null?(n.stateNode=a,Fi=n,zn=null,e=!0):e=!1),e||Ms(n)),null;case 13:return ig(e,n,a);case 4:return gt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=lo(n,null,o,a):vi(e,n,o,a),n.child;case 11:return Z0(e,n,n.type,n.pendingProps,a);case 7:return vi(e,n,n.pendingProps,a),n.child;case 8:return vi(e,n,n.pendingProps.children,a),n.child;case 12:return vi(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ur(n,n.type,o.value),vi(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ys(n),u=Ri(u),o=o(u),n.flags|=1,vi(e,n,o,a),n.child;case 14:return K0(e,n,n.type,n.pendingProps,a);case 15:return Q0(e,n,n.type,n.pendingProps,a);case 19:return rg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Yc(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=er(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return J0(e,n,a);case 24:return ys(n),o=Ri(ti),e===null?(u=Vf(),u===null&&(u=Tn,h=Hf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Xf(n),Ur(n,ti,u)):((e.lanes&a)!==0&&(Wf(e,n),_l(n,null,null,a),gl()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ur(n,ti,o)):(o=h.cache,Ur(n,ti,o),o!==u.cache&&zf(n,[ti],a,!0))),vi(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function cr(e){e.flags|=4}function og(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!m_(n)){if(n=_a.current,n!==null&&((en&4194048)===en?za!==null:(en&62914560)!==en&&(en&536870912)===0||n!==za))throw pl=kf,Xm;e.flags|=8192}}function jc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?zt():536870912,e.lanes|=n,ho|=n)}function bl(e,n){if(!cn)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Bn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function oM(e,n,a){var o=n.pendingProps;switch(Of(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(n),null;case 1:return Bn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),rr(ti),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ol(n)?cr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zm())),Bn(n),null;case 26:return a=n.memoizedState,e===null?(cr(n),a!==null?(Bn(n),og(n,a)):(Bn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(cr(n),Bn(n),og(n,a)):(Bn(n),n.flags&=-16777217):(e.memoizedProps!==o&&cr(n),Bn(n),n.flags&=-16777217),null;case 27:xe(n),a=tt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&cr(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Bn(n),null}e=qt.current,ol(n)?Fm(n):(e=o_(u,o,a),n.stateNode=e,cr(n))}return Bn(n),null;case 5:if(xe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&cr(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Bn(n),null}if(e=qt.current,ol(n))Fm(n);else{switch(u=ou(tt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[Ln]=n,e[Yn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mi(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&cr(n)}}return Bn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&cr(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=tt.current,ol(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Fi,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||Ms(n)}else e=ou(e).createTextNode(o),e[Ln]=n,n.stateNode=e}return Bn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ol(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ln]=n}else ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Bn(n),u=!1}else u=zm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(or(n),n):(or(n),null)}if(or(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),jc(n,n.updateQueue),Bn(n),null;case 4:return Me(),e===null&&Yh(n.stateNode.containerInfo),Bn(n),null;case 10:return rr(n.type),Bn(n),null;case 19:if(ct(ei),u=n.memoizedState,u===null)return Bn(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)bl(u,!1);else{if(Hn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=kc(e),h!==null){for(n.flags|=128,bl(u,!1),e=h.updateQueue,n.updateQueue=e,jc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Om(a,e),a=a.sibling;return _t(ei,ei.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ve()>Qc&&(n.flags|=128,o=!0,bl(u,!1),n.lanes=4194304)}else{if(!o)if(e=kc(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,jc(n,e),bl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!cn)return Bn(n),null}else 2*Ve()-u.renderingStartTime>Qc&&a!==536870912&&(n.flags|=128,o=!0,bl(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ve(),n.sibling=null,e=ei.current,_t(ei,o?e&1|2:e&1),n):(Bn(n),null);case 22:case 23:return or(n),Zf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Bn(n),n.subtreeFlags&6&&(n.flags|=8192)):Bn(n),a=n.updateQueue,a!==null&&jc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ct(Es),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),rr(ti),Bn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function lM(e,n){switch(Of(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rr(ti),Me(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xe(n),null;case 13:if(or(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ct(ei),null;case 4:return Me(),null;case 10:return rr(n.type),null;case 22:case 23:return or(n),Zf(),e!==null&&ct(Es),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return rr(ti),null;case 25:return null;default:return null}}function lg(e,n){switch(Of(n),n.tag){case 3:rr(ti),Me();break;case 26:case 27:case 5:xe(n);break;case 4:Me();break;case 13:or(n);break;case 19:ct(ei);break;case 10:rr(n.type);break;case 22:case 23:or(n),Zf(),e!==null&&ct(Es);break;case 24:rr(ti)}}function Tl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){yn(n,n.return,A)}}function Br(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var G=a,lt=A;try{lt()}catch(bt){yn(u,G,bt)}}}o=o.next}while(o!==h)}}catch(bt){yn(n,n.return,bt)}}function cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Km(n,a)}catch(o){yn(e,e.return,o)}}}function ug(e,n,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){yn(e,n,o)}}function Al(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){yn(e,n,u)}}function Ha(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){yn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){yn(e,n,u)}else a.current=null}function fg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){yn(e,e.return,u)}}function Eh(e,n,a){try{var o=e.stateNode;CM(o,e.type,a,n),o[Yn]=n}catch(u){yn(e,e.return,u)}}function hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qr(e.type)||e.tag===4}function bh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Th(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=su));else if(o!==4&&(o===27&&qr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Th(e,n,a),e=e.sibling;e!==null;)Th(e,n,a),e=e.sibling}function Zc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zc(e,n,a),e=e.sibling;e!==null;)Zc(e,n,a),e=e.sibling}function dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mi(n,o,a),n[Ln]=e,n[Yn]=a}catch(h){yn(e,e.return,h)}}var ur=!1,Wn=!1,Ah=!1,pg=typeof WeakSet=="function"?WeakSet:Set,oi=null;function cM(e,n){if(e=e.containerInfo,Kh=du,e=Tm(e),bf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,A=-1,G=-1,lt=0,bt=0,wt=e,ut=null;e:for(;;){for(var mt;wt!==a||u!==0&&wt.nodeType!==3||(A=S+u),wt!==h||o!==0&&wt.nodeType!==3||(G=S+o),wt.nodeType===3&&(S+=wt.nodeValue.length),(mt=wt.firstChild)!==null;)ut=wt,wt=mt;for(;;){if(wt===e)break e;if(ut===a&&++lt===u&&(A=S),ut===h&&++bt===o&&(G=S),(mt=wt.nextSibling)!==null)break;wt=ut,ut=wt.parentNode}wt=mt}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qh={focusedElem:e,selectionRange:a},du=!1,oi=n;oi!==null;)if(n=oi,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,oi=e;else for(;oi!==null;){switch(n=oi,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Re=Ts(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Re,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(be){yn(a,a.return,be)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)td(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":td(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,oi=e;break}oi=n.return}}function mg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:zr(e,a),o&4&&Tl(5,a);break;case 1:if(zr(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){yn(a,a.return,S)}else{var u=Ts(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){yn(a,a.return,S)}}o&64&&cg(a),o&512&&Al(a,a.return);break;case 3:if(zr(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Km(e,n)}catch(S){yn(a,a.return,S)}}break;case 27:n===null&&o&4&&dg(a);case 26:case 5:zr(e,a),n===null&&o&4&&fg(a),o&512&&Al(a,a.return);break;case 12:zr(e,a);break;case 13:zr(e,a),o&4&&vg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vM.bind(null,a),IM(e,a))));break;case 22:if(o=a.memoizedState!==null||ur,!o){n=n!==null&&n.memoizedState!==null||Wn,u=ur;var h=Wn;ur=o,(Wn=n)&&!h?Hr(e,a,(a.subtreeFlags&8772)!==0):zr(e,a),ur=u,Wn=h}break;case 30:break;default:zr(e,a)}}function gg(e){var n=e.alternate;n!==null&&(e.alternate=null,gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ar(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Nn=null,Wi=!1;function fr(e,n,a){for(a=a.child;a!==null;)_g(e,n,a),a=a.sibling}function _g(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:Wn||Ha(a,n),fr(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Wn||Ha(a,n);var o=Nn,u=Wi;qr(a.type)&&(Nn=a.stateNode,Wi=!1),fr(e,n,a),Ol(a.stateNode),Nn=o,Wi=u;break;case 5:Wn||Ha(a,n);case 6:if(o=Nn,u=Wi,Nn=null,fr(e,n,a),Nn=o,Wi=u,Nn!==null)if(Wi)try{(Nn.nodeType===9?Nn.body:Nn.nodeName==="HTML"?Nn.ownerDocument.body:Nn).removeChild(a.stateNode)}catch(h){yn(a,n,h)}else try{Nn.removeChild(a.stateNode)}catch(h){yn(a,n,h)}break;case 18:Nn!==null&&(Wi?(e=Nn,r_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),kl(e)):r_(Nn,a.stateNode));break;case 4:o=Nn,u=Wi,Nn=a.stateNode.containerInfo,Wi=!0,fr(e,n,a),Nn=o,Wi=u;break;case 0:case 11:case 14:case 15:Wn||Br(2,a,n),Wn||Br(4,a,n),fr(e,n,a);break;case 1:Wn||(Ha(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ug(a,n,o)),fr(e,n,a);break;case 21:fr(e,n,a);break;case 22:Wn=(o=Wn)||a.memoizedState!==null,fr(e,n,a),Wn=o;break;default:fr(e,n,a)}}function vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kl(e)}catch(a){yn(n,n.return,a)}}function uM(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pg),n;default:throw Error(r(435,e.tag))}}function Rh(e,n){var a=uM(e);n.forEach(function(o){var u=xM.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function $i(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(qr(A.type)){Nn=A.stateNode,Wi=!1;break t}break;case 5:Nn=A.stateNode,Wi=!1;break t;case 3:case 4:Nn=A.stateNode.containerInfo,Wi=!0;break t}A=A.return}if(Nn===null)throw Error(r(160));_g(h,S,u),Nn=null,Wi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)xg(n,e),n=n.sibling}var Aa=null;function xg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$i(n,e),ta(e),o&4&&(Br(3,e,e.return),Tl(3,e),Br(5,e,e.return));break;case 1:$i(n,e),ta(e),o&512&&(Wn||a===null||Ha(a,a.return)),o&64&&ur&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Aa;if($i(n,e),ta(e),o&512&&(Wn||a===null||Ha(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ai]||h[Ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Mi(h,o,a),h[Ln]=e,On(h),o=h;break t;case"link":var S=d_("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}h=u.createElement(o),Mi(h,o,a),u.head.appendChild(h);break;case"meta":if(S=d_("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}h=u.createElement(o),Mi(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[Ln]=e,On(h),o=h}e.stateNode=o}else p_(u,e.type,e.stateNode);else e.stateNode=h_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?p_(u,e.type,e.stateNode):h_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Eh(e,e.memoizedProps,a.memoizedProps)}break;case 27:$i(n,e),ta(e),o&512&&(Wn||a===null||Ha(a,a.return)),a!==null&&o&4&&Eh(e,e.memoizedProps,a.memoizedProps);break;case 5:if($i(n,e),ta(e),o&512&&(Wn||a===null||Ha(a,a.return)),e.flags&32){u=e.stateNode;try{bn(u,"")}catch(mt){yn(e,e.return,mt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Eh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Ah=!0);break;case 6:if($i(n,e),ta(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(mt){yn(e,e.return,mt)}}break;case 3:if(uu=null,u=Aa,Aa=lu(n.containerInfo),$i(n,e),Aa=u,ta(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{kl(n.containerInfo)}catch(mt){yn(e,e.return,mt)}Ah&&(Ah=!1,Mg(e));break;case 4:o=Aa,Aa=lu(e.stateNode.containerInfo),$i(n,e),ta(e),Aa=o;break;case 12:$i(n,e),ta(e);break;case 13:$i(n,e),ta(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nh=Ve()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rh(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,lt=ur,bt=Wn;if(ur=lt||u,Wn=bt||G,$i(n,e),Wn=bt,ur=lt,ta(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ur||Wn||As(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=G.stateNode;var wt=G.memoizedProps.style,ut=wt!=null&&wt.hasOwnProperty("display")?wt.display:null;A.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(mt){yn(G,G.return,mt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(mt){yn(G,G.return,mt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Rh(e,a))));break;case 19:$i(n,e),ta(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rh(e,o)));break;case 30:break;case 21:break;default:$i(n,e),ta(e)}}function ta(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(hg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=bh(e);Zc(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(bn(S,""),a.flags&=-33);var A=bh(e);Zc(e,A,S);break;case 3:case 4:var G=a.stateNode.containerInfo,lt=bh(e);Th(e,lt,G);break;default:throw Error(r(161))}}catch(bt){yn(e,e.return,bt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function zr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(e,n.alternate,n),n=n.sibling}function As(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Br(4,n,n.return),As(n);break;case 1:Ha(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ug(n,n.return,a),As(n);break;case 27:Ol(n.stateNode);case 26:case 5:Ha(n,n.return),As(n);break;case 22:n.memoizedState===null&&As(n);break;case 30:As(n);break;default:As(n)}e=e.sibling}}function Hr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Hr(u,h,a),Tl(4,h);break;case 1:if(Hr(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){yn(o,o.return,lt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Zm(G[u],A)}catch(lt){yn(o,o.return,lt)}}a&&S&64&&cg(h),Al(h,h.return);break;case 27:dg(h);case 26:case 5:Hr(u,h,a),a&&o===null&&S&4&&fg(h),Al(h,h.return);break;case 12:Hr(u,h,a);break;case 13:Hr(u,h,a),a&&S&4&&vg(u,h);break;case 22:h.memoizedState===null&&Hr(u,h,a),Al(h,h.return);break;case 30:break;default:Hr(u,h,a)}n=n.sibling}}function wh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fl(a))}function Ch(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fl(e))}function Ga(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sg(e,n,a,o),n=n.sibling}function Sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ga(e,n,a,o),u&2048&&Tl(9,n);break;case 1:Ga(e,n,a,o);break;case 3:Ga(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fl(e)));break;case 12:if(u&2048){Ga(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){yn(n,n.return,G)}}else Ga(e,n,a,o);break;case 13:Ga(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Ga(e,n,a,o):Rl(e,n):h._visibility&2?Ga(e,n,a,o):(h._visibility|=2,co(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&wh(S,n);break;case 24:Ga(e,n,a,o),u&2048&&Ch(n.alternate,n);break;default:Ga(e,n,a,o)}}function co(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,S=n,A=a,G=o,lt=S.flags;switch(S.tag){case 0:case 11:case 15:co(h,S,A,G,u),Tl(8,S);break;case 23:break;case 22:var bt=S.stateNode;S.memoizedState!==null?bt._visibility&2?co(h,S,A,G,u):Rl(h,S):(bt._visibility|=2,co(h,S,A,G,u)),u&&lt&2048&&wh(S.alternate,S);break;case 24:co(h,S,A,G,u),u&&lt&2048&&Ch(S.alternate,S);break;default:co(h,S,A,G,u)}n=n.sibling}}function Rl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Rl(a,o),u&2048&&wh(o.alternate,o);break;case 24:Rl(a,o),u&2048&&Ch(o.alternate,o);break;default:Rl(a,o)}n=n.sibling}}var wl=8192;function uo(e){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)yg(e),e=e.sibling}function yg(e){switch(e.tag){case 26:uo(e),e.flags&wl&&e.memoizedState!==null&&ZM(Aa,e.memoizedState,e.memoizedProps);break;case 5:uo(e);break;case 3:case 4:var n=Aa;Aa=lu(e.stateNode.containerInfo),uo(e),Aa=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=wl,wl=16777216,uo(e),wl=n):uo(e));break;default:uo(e)}}function Eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];oi=o,Tg(o,e)}Eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&Br(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kc(e)):Cl(e);break;default:Cl(e)}}function Kc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];oi=o,Tg(o,e)}Eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Br(8,n,n.return),Kc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kc(n));break;default:Kc(n)}e=e.sibling}}function Tg(e,n){for(;oi!==null;){var a=oi;switch(a.tag){case 0:case 11:case 15:Br(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,oi=o;else t:for(a=e;oi!==null;){o=oi;var u=o.sibling,h=o.return;if(gg(o),o===a){oi=null;break t}if(u!==null){u.return=h,oi=u;break t}oi=h}}}var fM={getCacheForType:function(e){var n=Ri(ti),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},hM=typeof WeakMap=="function"?WeakMap:Map,fn=0,Tn=null,We=null,en=0,hn=0,ea=null,Gr=!1,fo=!1,Dh=!1,hr=0,Hn=0,Vr=0,Rs=0,Uh=0,va=0,ho=0,Dl=null,qi=null,Lh=!1,Nh=0,Qc=1/0,Jc=null,kr=null,xi=0,Xr=null,po=null,mo=0,Ph=0,Oh=null,Ag=null,Ul=0,Ih=null;function na(){if((fn&2)!==0&&en!==0)return en&-en;if(F.T!==null){var e=eo;return e!==0?e:kh()}return Ze()}function Rg(){va===0&&(va=(en&536870912)===0||cn?W():536870912);var e=_a.current;return e!==null&&(e.flags|=32),va}function ia(e,n,a){(e===Tn&&(hn===2||hn===9)||e.cancelPendingCommit!==null)&&(go(e,0),Wr(e,en,va,!1)),te(e,a),((fn&2)===0||e!==Tn)&&(e===Tn&&((fn&2)===0&&(Rs|=a),Hn===4&&Wr(e,en,va,!1)),Va(e))}function wg(e,n,a){if((fn&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Zt(e,n),u=o?mM(e,n):zh(e,n,!0),h=o;do{if(u===0){fo&&!o&&Wr(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!dM(a)){u=zh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=Dl;var G=A.current.memoizedState.isDehydrated;if(G&&(go(A,S).flags|=256),S=zh(A,S,!1),S!==2){if(Dh&&!G){A.errorRecoveryDisabledLanes|=h,Rs|=h,u=4;break t}h=qi,qi=u,h!==null&&(qi===null?qi=h:qi.push.apply(qi,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){go(e,0),Wr(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wr(o,n,va,!Gr);break t;case 2:qi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Nh+300-Ve(),10<u)){if(Wr(o,n,va,!Gr),ie(o,0,!0)!==0)break t;o.timeoutHandle=i_(Cg.bind(null,o,a,qi,Jc,Lh,n,va,Rs,ho,Gr,h,2,-0,0),u);break t}Cg(o,a,qi,Jc,Lh,n,va,Rs,ho,Gr,h,0,-0,0)}}break}while(!0);Va(e)}function Cg(e,n,a,o,u,h,S,A,G,lt,bt,wt,ut,mt){if(e.timeoutHandle=-1,wt=n.subtreeFlags,(wt&8192||(wt&16785408)===16785408)&&(Bl={stylesheets:null,count:0,unsuspend:jM},yg(n),wt=KM(),wt!==null)){e.cancelPendingCommit=wt(Ig.bind(null,e,n,h,a,o,u,S,A,G,bt,1,ut,mt)),Wr(e,h,S,!lt);return}Ig(e,n,h,a,o,u,S,A,G)}function dM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Qi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wr(e,n,a,o){n&=~Uh,n&=~Rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-jt(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&Mt(e,a,n)}function $c(){return(fn&6)===0?(Ll(0),!1):!0}function Fh(){if(We!==null){if(hn===0)var e=We.return;else e=We,ar=Ss=null,th(e),oo=null,yl=0,e=We;for(;e!==null;)lg(e.alternate,e),e=e.return;We=null}}function go(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,UM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Fh(),Tn=e,We=a=er(e.current,null),en=n,hn=0,ea=null,Gr=!1,fo=Zt(e,n),Dh=!1,ho=va=Uh=Rs=Vr=Hn=0,qi=Dl=null,Lh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-jt(o),h=1<<u;n|=e[u],o&=~h}return hr=n,Sc(),a}function Dg(e,n){Ge=null,F.H=Hc,n===dl||n===Dc?(n=Ym(),hn=3):n===Xm?(n=Ym(),hn=4):hn=n===j0?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ea=n,We===null&&(Hn=1,Wc(e,da(n,e.current)))}function Ug(){var e=F.H;return F.H=Hc,e===null?Hc:e}function Lg(){var e=F.A;return F.A=fM,e}function Bh(){Hn=4,Gr||(en&4194048)!==en&&_a.current!==null||(fo=!0),(Vr&134217727)===0&&(Rs&134217727)===0||Tn===null||Wr(Tn,en,va,!1)}function zh(e,n,a){var o=fn;fn|=2;var u=Ug(),h=Lg();(Tn!==e||en!==n)&&(Jc=null,go(e,n)),n=!1;var S=Hn;t:do try{if(hn!==0&&We!==null){var A=We,G=ea;switch(hn){case 8:Fh(),S=6;break t;case 3:case 2:case 9:case 6:_a.current===null&&(n=!0);var lt=hn;if(hn=0,ea=null,_o(e,A,G,lt),a&&fo){S=0;break t}break;default:lt=hn,hn=0,ea=null,_o(e,A,G,lt)}}pM(),S=Hn;break}catch(bt){Dg(e,bt)}while(!0);return n&&e.shellSuspendCounter++,ar=Ss=null,fn=o,F.H=u,F.A=h,We===null&&(Tn=null,en=0,Sc()),S}function pM(){for(;We!==null;)Ng(We)}function mM(e,n){var a=fn;fn|=2;var o=Ug(),u=Lg();Tn!==e||en!==n?(Jc=null,Qc=Ve()+500,go(e,n)):fo=Zt(e,n);t:do try{if(hn!==0&&We!==null){n=We;var h=ea;e:switch(hn){case 1:hn=0,ea=null,_o(e,n,h,1);break;case 2:case 9:if(Wm(h)){hn=0,ea=null,Pg(n);break}n=function(){hn!==2&&hn!==9||Tn!==e||(hn=7),Va(e)},h.then(n,n);break t;case 3:hn=7;break t;case 4:hn=5;break t;case 7:Wm(h)?(hn=0,ea=null,Pg(n)):(hn=0,ea=null,_o(e,n,h,7));break;case 5:var S=null;switch(We.tag){case 26:S=We.memoizedState;case 5:case 27:var A=We;if(!S||m_(S)){hn=0,ea=null;var G=A.sibling;if(G!==null)We=G;else{var lt=A.return;lt!==null?(We=lt,tu(lt)):We=null}break e}}hn=0,ea=null,_o(e,n,h,5);break;case 6:hn=0,ea=null,_o(e,n,h,6);break;case 8:Fh(),Hn=6;break t;default:throw Error(r(462))}}gM();break}catch(bt){Dg(e,bt)}while(!0);return ar=Ss=null,F.H=o,F.A=u,fn=a,We!==null?0:(Tn=null,en=0,Sc(),Hn)}function gM(){for(;We!==null&&!Xe();)Ng(We)}function Ng(e){var n=sg(e.alternate,e,hr);e.memoizedProps=e.pendingProps,n===null?tu(e):We=n}function Pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,en);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,en);break;case 5:th(n);default:lg(a,n),n=We=Om(n,hr),n=sg(a,n,hr)}e.memoizedProps=e.pendingProps,n===null?tu(e):We=n}function _o(e,n,a,o){ar=Ss=null,th(n),oo=null,yl=0;var u=n.return;try{if(rM(e,u,n,a,en)){Hn=1,Wc(e,da(a,e.current)),We=null;return}}catch(h){if(u!==null)throw We=u,h;Hn=1,Wc(e,da(a,e.current)),We=null;return}n.flags&32768?(cn||o===1?e=!0:fo||(en&536870912)!==0?e=!1:(Gr=e=!0,(o===2||o===9||o===3||o===6)&&(o=_a.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(n,e)):tu(n)}function tu(e){var n=e;do{if((n.flags&32768)!==0){Og(n,Gr);return}e=n.return;var a=oM(n.alternate,n,hr);if(a!==null){We=a;return}if(n=n.sibling,n!==null){We=n;return}We=n=e}while(n!==null);Hn===0&&(Hn=5)}function Og(e,n){do{var a=lM(e.alternate,e);if(a!==null){a.flags&=32767,We=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){We=e;return}We=e=a}while(e!==null);Hn=6,We=null}function Ig(e,n,a,o,u,h,S,A,G){e.cancelPendingCommit=null;do eu();while(xi!==0);if((fn&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Cf,Nt(e,a,h,S,A,G),e===Tn&&(We=Tn=null,en=0),po=n,Xr=e,mo=a,Ph=h,Oh=u,Ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,MM(an,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=B.p,B.p=2,S=fn,fn|=4;try{cM(e,n,a)}finally{fn=S,B.p=u,F.T=o}}xi=1,Fg(),Bg(),zg()}}function Fg(){if(xi===1){xi=0;var e=Xr,n=po,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=fn;fn|=4;try{xg(n,e);var h=Qh,S=Tm(e.containerInfo),A=h.focusedElem,G=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&bm(A.ownerDocument.documentElement,A)){if(G!==null&&bf(A)){var lt=G.start,bt=G.end;if(bt===void 0&&(bt=lt),"selectionStart"in A)A.selectionStart=lt,A.selectionEnd=Math.min(bt,A.value.length);else{var wt=A.ownerDocument||document,ut=wt&&wt.defaultView||window;if(ut.getSelection){var mt=ut.getSelection(),Re=A.textContent.length,be=Math.min(G.start,Re),Mn=G.end===void 0?be:Math.min(G.end,Re);!mt.extend&&be>Mn&&(S=Mn,Mn=be,be=S);var $=Em(A,be),Y=Em(A,Mn);if($&&Y&&(mt.rangeCount!==1||mt.anchorNode!==$.node||mt.anchorOffset!==$.offset||mt.focusNode!==Y.node||mt.focusOffset!==Y.offset)){var rt=wt.createRange();rt.setStart($.node,$.offset),mt.removeAllRanges(),be>Mn?(mt.addRange(rt),mt.extend(Y.node,Y.offset)):(rt.setEnd(Y.node,Y.offset),mt.addRange(rt))}}}}for(wt=[],mt=A;mt=mt.parentNode;)mt.nodeType===1&&wt.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<wt.length;A++){var At=wt[A];At.element.scrollLeft=At.left,At.element.scrollTop=At.top}}du=!!Kh,Qh=Kh=null}finally{fn=u,B.p=o,F.T=a}}e.current=n,xi=2}}function Bg(){if(xi===2){xi=0;var e=Xr,n=po,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=fn;fn|=4;try{mg(e,n.alternate,n)}finally{fn=u,B.p=o,F.T=a}}xi=3}}function zg(){if(xi===4||xi===3){xi=0,me();var e=Xr,n=po,a=mo,o=Ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xi=5:(xi=0,po=Xr=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(kr=null),Ie(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=B.p,B.p=2,F.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{F.T=n,B.p=u}}(mo&3)!==0&&eu(),Va(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Ih?Ul++:(Ul=0,Ih=e):Ul=0,Ll(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fl(n)))}function eu(e){return Fg(),Bg(),zg(),Gg()}function Gg(){if(xi!==5)return!1;var e=Xr,n=Ph;Ph=0;var a=Ie(mo),o=F.T,u=B.p;try{B.p=32>a?32:a,F.T=null,a=Oh,Oh=null;var h=Xr,S=mo;if(xi=0,po=Xr=null,mo=0,(fn&6)!==0)throw Error(r(331));var A=fn;if(fn|=4,bg(h.current),Sg(h,h.current,S,a),fn=A,Ll(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(yt,h)}catch{}return!0}finally{B.p=u,F.T=o,Hg(e,n)}}function Vg(e,n,a){n=da(a,n),n=ph(e.stateNode,n,2),e=Pr(e,n,2),e!==null&&(te(e,2),Va(e))}function yn(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(kr===null||!kr.has(o))){e=da(a,e),a=q0(2),o=Pr(n,a,2),o!==null&&(Y0(a,o,n,e),te(o,2),Va(o));break}}n=n.return}}function Hh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new hM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Dh=!0,u.add(a),e=_M.bind(null,e,n,a),n.then(e,e))}function _M(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Tn===e&&(en&a)===a&&(Hn===4||Hn===3&&(en&62914560)===en&&300>Ve()-Nh?(fn&2)===0&&go(e,0):Uh|=a,ho===en&&(ho=0)),Va(e)}function kg(e,n){n===0&&(n=zt()),e=Qs(e,n),e!==null&&(te(e,n),Va(e))}function vM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function xM(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),kg(e,a)}function MM(e,n){return Ue(e,n)}var nu=null,vo=null,Gh=!1,iu=!1,Vh=!1,ws=0;function Va(e){e!==vo&&e.next===null&&(vo===null?nu=vo=e:vo=vo.next=e),iu=!0,Gh||(Gh=!0,yM())}function Ll(e,n){if(!Vh&&iu){Vh=!0;do for(var a=!1,o=nu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-jt(42|e)+1)-1,h&=u&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Yg(o,h))}else h=en,h=ie(o,o===Tn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Zt(o,h)||(a=!0,Yg(o,h));o=o.next}while(a);Vh=!1}}function SM(){Xg()}function Xg(){iu=Gh=!1;var e=0;ws!==0&&(DM()&&(e=ws),ws=0);for(var n=Ve(),a=null,o=nu;o!==null;){var u=o.next,h=Wg(o,n);h===0?(o.next=null,a===null?nu=u:a.next=u,u===null&&(vo=a)):(a=o,(e!==0||(h&3)!==0)&&(iu=!0)),o=u}Ll(e)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-jt(h),A=1<<S,G=u[S];G===-1?((A&a)===0||(A&o)!==0)&&(u[S]=De(A,n)):G<=n&&(e.expiredLanes|=A),h&=~A}if(n=Tn,a=en,a=ie(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(hn===2||hn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&je(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&je(o),Ie(a)){case 2:case 8:a=Je;break;case 32:a=an;break;case 268435456:a=O;break;default:a=an}return o=qg.bind(null,e),a=Ue(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&je(o),e.callbackPriority=2,e.callbackNode=null,2}function qg(e,n){if(xi!==0&&xi!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(eu()&&e.callbackNode!==a)return null;var o=en;return o=ie(e,e===Tn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(wg(e,o,n),Wg(e,Ve()),e.callbackNode!=null&&e.callbackNode===a?qg.bind(null,e):null)}function Yg(e,n){if(eu())return null;wg(e,n,!0)}function yM(){LM(function(){(fn&6)!==0?Ue(En,SM):Xg()})}function kh(){return ws===0&&(ws=W()),ws}function jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hs(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function EM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=jg((u[Yn]||null).action),S=o.submitter;S&&(n=(n=S[Yn]||null)?jg(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var A=new Ws("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ws!==0){var G=S?Zg(u,S):new FormData(u);ch(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(A.preventDefault(),G=S?Zg(u,S):new FormData(u),ch(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var Xh=0;Xh<wf.length;Xh++){var Wh=wf[Xh],bM=Wh.toLowerCase(),TM=Wh[0].toUpperCase()+Wh.slice(1);Ta(bM,"on"+TM)}Ta(wm,"onAnimationEnd"),Ta(Cm,"onAnimationIteration"),Ta(Dm,"onAnimationStart"),Ta("dblclick","onDoubleClick"),Ta("focusin","onFocus"),Ta("focusout","onBlur"),Ta(Vx,"onTransitionRun"),Ta(kx,"onTransitionStart"),Ta(Xx,"onTransitionCancel"),Ta(Um,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nl));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],G=A.instance,lt=A.currentTarget;if(A=A.listener,G!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=lt;try{h(u)}catch(bt){Xc(bt)}u.currentTarget=null,h=G}else for(S=0;S<o.length;S++){if(A=o[S],G=A.instance,lt=A.currentTarget,A=A.listener,G!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=lt;try{h(u)}catch(bt){Xc(bt)}u.currentTarget=null,h=G}}}}function qe(e,n){var a=n[fi];a===void 0&&(a=n[fi]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function qh(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var au="_reactListening"+Math.random().toString(36).slice(2);function Yh(e){if(!e[au]){e[au]=!0,Rr.forEach(function(a){a!=="selectionchange"&&(AM.has(a)||qh(a,!1,e),qh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[au]||(n[au]=!0,qh("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(S_(n)){case 2:var u=$M;break;case 8:u=tS;break;default:u=od}a=u.bind(null,n,a,e),u=void 0,!el||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function jh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=ji(A),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=h=S;continue t}A=A.parentNode}}o=o.return}vc(function(){var lt=h,bt=ks(a),wt=[];t:{var ut=Lm.get(e);if(ut!==void 0){var mt=Ws,Re=e;switch(e){case"keypress":if(Dr(a)===0)break t;case"keydown":case"keyup":mt=Ne;break;case"focusin":Re="focus",mt=Vt;break;case"focusout":Re="blur",mt=Vt;break;case"beforeblur":case"afterblur":mt=Vt;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=Lt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=Et;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=tn;break;case wm:case Cm:case Dm:mt=Xt;break;case Um:mt=gi;break;case"scroll":case"scrollend":mt=q;break;case"wheel":mt=kn;break;case"copy":case"cut":case"paste":mt=ue;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=_n;break;case"toggle":case"beforetoggle":mt=Ti}var be=(n&4)!==0,Mn=!be&&(e==="scroll"||e==="scrollend"),$=be?ut!==null?ut+"Capture":null:ut;be=[];for(var Y=lt,rt;Y!==null;){var At=Y;if(rt=At.stateNode,At=At.tag,At!==5&&At!==26&&At!==27||rt===null||$===null||(At=wr(Y,$),At!=null&&be.push(Pl(Y,At,rt))),Mn)break;Y=Y.return}0<be.length&&(ut=new mt(ut,Re,null,a,bt),wt.push({event:ut,listeners:be}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",mt=e==="mouseout"||e==="pointerout",ut&&a!==Ea&&(Re=a.relatedTarget||a.fromElement)&&(ji(Re)||Re[Oa]))break t;if((mt||ut)&&(ut=bt.window===bt?bt:(ut=bt.ownerDocument)?ut.defaultView||ut.parentWindow:window,mt?(Re=a.relatedTarget||a.toElement,mt=lt,Re=Re?ji(Re):null,Re!==null&&(Mn=c(Re),be=Re.tag,Re!==Mn||be!==5&&be!==27&&be!==6)&&(Re=null)):(mt=null,Re=lt),mt!==Re)){if(be=Lt,At="onMouseLeave",$="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(be=_n,At="onPointerLeave",$="onPointerEnter",Y="pointer"),Mn=mt==null?ut:Zi(mt),rt=Re==null?ut:Zi(Re),ut=new be(At,Y+"leave",mt,a,bt),ut.target=Mn,ut.relatedTarget=rt,At=null,ji(bt)===lt&&(be=new be($,Y+"enter",Re,a,bt),be.target=rt,be.relatedTarget=Mn,At=be),Mn=At,mt&&Re)e:{for(be=mt,$=Re,Y=0,rt=be;rt;rt=xo(rt))Y++;for(rt=0,At=$;At;At=xo(At))rt++;for(;0<Y-rt;)be=xo(be),Y--;for(;0<rt-Y;)$=xo($),rt--;for(;Y--;){if(be===$||$!==null&&be===$.alternate)break e;be=xo(be),$=xo($)}be=null}else be=null;mt!==null&&Jg(wt,ut,mt,be,!1),Re!==null&&Mn!==null&&Jg(wt,Mn,Re,be,!0)}}t:{if(ut=lt?Zi(lt):window,mt=ut.nodeName&&ut.nodeName.toLowerCase(),mt==="select"||mt==="input"&&ut.type==="file")var fe=_m;else if(mm(ut))if(vm)fe=zx;else{fe=Fx;var ke=Ix}else mt=ut.nodeName,!mt||mt.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?lt&&Ki(lt.elementType)&&(fe=_m):fe=Bx;if(fe&&(fe=fe(e,lt))){gm(wt,fe,a,bt);break t}ke&&ke(e,ut,lt),e==="focusout"&&lt&&ut.type==="number"&&lt.memoizedProps.value!=null&&jn(ut,"number",ut.value)}switch(ke=lt?Zi(lt):window,e){case"focusin":(mm(ke)||ke.contentEditable==="true")&&(js=ke,Tf=lt,sl=null);break;case"focusout":sl=Tf=js=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Am(wt,a,bt);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":Am(wt,a,bt)}var _e;if(ri)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Ys?dm(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(qs&&a.locale!=="ko"&&(Ys||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ys&&(_e=xc()):(Vi=bt,ki="value"in Vi?Vi.value:Vi.textContent,Ys=!0)),ke=ru(lt,Te),0<ke.length&&(Te=new Pt(Te,e,null,a,bt),wt.push({event:Te,listeners:ke}),_e?Te.data=_e:(_e=pm(a),_e!==null&&(Te.data=_e)))),(_e=Fa?Lx(e,a):Nx(e,a))&&(Te=ru(lt,"onBeforeInput"),0<Te.length&&(ke=new Pt("onBeforeInput","beforeinput",null,a,bt),wt.push({event:ke,listeners:Te}),ke.data=_e)),EM(wt,e,lt,a,bt)}Kg(wt,n)})}function Pl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ru(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=wr(e,a),u!=null&&o.unshift(Pl(e,u,h)),u=wr(e,n),u!=null&&o.push(Pl(e,u,h))),e.tag===3)return o;e=e.return}return[]}function xo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jg(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var A=a,G=A.alternate,lt=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||lt===null||(G=lt,u?(lt=wr(a,h),lt!=null&&S.unshift(Pl(a,lt,G))):u||(lt=wr(a,h),lt!=null&&S.push(Pl(a,lt,G)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var RM=/\r\n?/g,wM=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(RM,`
`).replace(wM,"")}function t_(e,n){return n=$g(n),$g(e)===n}function su(){}function xn(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&bn(e,""+o);break;case"className":ot(e,"class",o);break;case"tabIndex":ot(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(e,a,o);break;case"style":pi(e,o,h);break;case"data":if(n!=="object"){ot(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&xn(e,n,"name",u.name,u,null),xn(e,n,"formEncType",u.formEncType,u,null),xn(e,n,"formMethod",u.formMethod,u,null),xn(e,n,"formTarget",u.formTarget,u,null)):(xn(e,n,"encType",u.encType,u,null),xn(e,n,"method",u.method,u,null),xn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=su);break;case"onScroll":o!=null&&qe("scroll",e);break;case"onScrollEnd":o!=null&&qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":qe("beforetoggle",e),qe("toggle",e),dt(e,"popover",o);break;case"xlinkActuate":nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":dt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ya.get(a)||a,dt(e,a,o))}}function Zh(e,n,a,o,u,h){switch(a){case"style":pi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?bn(e,o):(typeof o=="number"||typeof o=="bigint")&&bn(e,""+o);break;case"onScroll":o!=null&&qe("scroll",e);break;case"onScrollEnd":o!=null&&qe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=su);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!In.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):dt(e,a,o)}}}function Mi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",e),qe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:xn(e,n,h,S,a,null)}}u&&xn(e,n,"srcSet",a.srcSet,a,null),o&&xn(e,n,"src",a.src,a,null);return;case"input":qe("invalid",e);var A=h=S=u=null,G=null,lt=null;for(o in a)if(a.hasOwnProperty(o)){var bt=a[o];if(bt!=null)switch(o){case"name":u=bt;break;case"type":S=bt;break;case"checked":G=bt;break;case"defaultChecked":lt=bt;break;case"value":h=bt;break;case"defaultValue":A=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(r(137,n));break;default:xn(e,n,o,bt,a,null)}}hi(e,h,A,G,lt,S,u,!1),ln(e);return;case"select":qe("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:xn(e,n,u,A,a,null)}n=h,a=S,e.multiple=!!o,n!=null?Vn(e,!!o,n,!1):a!=null&&Vn(e,!!o,a,!0);return;case"textarea":qe("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:xn(e,n,S,A,a,null)}rn(e,o,u,h),ln(e);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":xn(e,n,G,o,a,null));return;case"dialog":qe("beforetoggle",e),qe("toggle",e),qe("cancel",e),qe("close",e);break;case"iframe":case"object":qe("load",e);break;case"video":case"audio":for(o=0;o<Nl.length;o++)qe(Nl[o],e);break;case"image":qe("error",e),qe("load",e);break;case"details":qe("toggle",e);break;case"embed":case"source":case"link":qe("error",e),qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in a)if(a.hasOwnProperty(lt)&&(o=a[lt],o!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:xn(e,n,lt,o,a,null)}return;default:if(Ki(n)){for(bt in a)a.hasOwnProperty(bt)&&(o=a[bt],o!==void 0&&Zh(e,n,bt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&xn(e,n,A,o,a,null))}function CM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,A=null,G=null,lt=null,bt=null;for(mt in a){var wt=a[mt];if(a.hasOwnProperty(mt)&&wt!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":G=wt;default:o.hasOwnProperty(mt)||xn(e,n,mt,null,o,wt)}}for(var ut in o){var mt=o[ut];if(wt=a[ut],o.hasOwnProperty(ut)&&(mt!=null||wt!=null))switch(ut){case"type":h=mt;break;case"name":u=mt;break;case"checked":lt=mt;break;case"defaultChecked":bt=mt;break;case"value":S=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:mt!==wt&&xn(e,n,ut,mt,o,wt)}}He(e,S,A,G,lt,bt,h,u);return;case"select":mt=S=A=ut=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":mt=G;default:o.hasOwnProperty(h)||xn(e,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":ut=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==G&&xn(e,n,u,h,o,G)}n=A,a=S,o=mt,ut!=null?Vn(e,!!a,ut,!1):!!o!=!!a&&(n!=null?Vn(e,!!a,n,!0):Vn(e,!!a,a?[]:"",!1));return;case"textarea":mt=ut=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:xn(e,n,A,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":ut=u;break;case"defaultValue":mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&xn(e,n,S,u,o,h)}fa(e,ut,mt);return;case"option":for(var Re in a)ut=a[Re],a.hasOwnProperty(Re)&&ut!=null&&!o.hasOwnProperty(Re)&&(Re==="selected"?e.selected=!1:xn(e,n,Re,null,o,ut));for(G in o)ut=o[G],mt=a[G],o.hasOwnProperty(G)&&ut!==mt&&(ut!=null||mt!=null)&&(G==="selected"?e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol":xn(e,n,G,ut,o,mt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in a)ut=a[be],a.hasOwnProperty(be)&&ut!=null&&!o.hasOwnProperty(be)&&xn(e,n,be,null,o,ut);for(lt in o)if(ut=o[lt],mt=a[lt],o.hasOwnProperty(lt)&&ut!==mt&&(ut!=null||mt!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:xn(e,n,lt,ut,o,mt)}return;default:if(Ki(n)){for(var Mn in a)ut=a[Mn],a.hasOwnProperty(Mn)&&ut!==void 0&&!o.hasOwnProperty(Mn)&&Zh(e,n,Mn,void 0,o,ut);for(bt in o)ut=o[bt],mt=a[bt],!o.hasOwnProperty(bt)||ut===mt||ut===void 0&&mt===void 0||Zh(e,n,bt,ut,o,mt);return}}for(var $ in a)ut=a[$],a.hasOwnProperty($)&&ut!=null&&!o.hasOwnProperty($)&&xn(e,n,$,null,o,ut);for(wt in o)ut=o[wt],mt=a[wt],!o.hasOwnProperty(wt)||ut===mt||ut==null&&mt==null||xn(e,n,wt,ut,o,mt)}var Kh=null,Qh=null;function ou(e){return e.nodeType===9?e:e.ownerDocument}function e_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $h=null;function DM(){var e=window.event;return e&&e.type==="popstate"?e===$h?!1:($h=e,!0):($h=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(e){return a_.resolve(null).then(e).catch(NM)}:i_;function NM(e){setTimeout(function(){throw e})}function qr(e){return e==="head"}function r_(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&Ol(S.documentElement),a&2&&Ol(S.body),a&4)for(a=S.head,Ol(a),S=a.firstChild;S;){var A=S.nextSibling,G=S.nodeName;S[ai]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=A}}if(u===0){e.removeChild(h),kl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);kl(n)}function td(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":td(a),Ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function PM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ai])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ra(e.nextSibling),e===null)break}return null}function OM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ra(e.nextSibling),e===null))return null;return e}function ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function IM(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ra(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var nd=null;function s_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function o_(e,n,a){switch(n=ou(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ol(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ar(e)}var xa=new Map,l_=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dr=B.d;B.d={f:FM,r:BM,D:zM,C:HM,L:GM,m:VM,X:XM,S:kM,M:WM};function FM(){var e=dr.f(),n=$c();return e||n}function BM(e){var n=la(e);n!==null&&n.tag===5&&n.type==="form"?w0(n):dr.r(e)}var Mo=typeof document>"u"?null:document;function c_(e,n,a){var o=Mo;if(o&&typeof n=="string"&&n){var u=un(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),l_.has(u)||(l_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mi(n,"link",e),On(n),o.head.appendChild(n)))}}function zM(e){dr.D(e),c_("dns-prefetch",e,null)}function HM(e,n){dr.C(e,n),c_("preconnect",e,n)}function GM(e,n,a){dr.L(e,n,a);var o=Mo;if(o&&e&&n){var u='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(e)+'"]';var h=u;switch(n){case"style":h=So(e);break;case"script":h=yo(e)}xa.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xa.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Il(h))||n==="script"&&o.querySelector(Fl(h))||(n=o.createElement("link"),Mi(n,"link",e),On(n),o.head.appendChild(n)))}}function VM(e,n){dr.m(e,n);var a=Mo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+un(o)+'"][href="'+un(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=yo(e)}if(!xa.has(h)&&(e=g({rel:"modulepreload",href:e},n),xa.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fl(h)))return}o=a.createElement("link"),Mi(o,"link",e),On(o),a.head.appendChild(o)}}}function kM(e,n,a){dr.S(e,n,a);var o=Mo;if(o&&e){var u=ca(o).hoistableStyles,h=So(e);n=n||"default";var S=u.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Il(h)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xa.get(h))&&id(e,a);var G=S=o.createElement("link");On(G),Mi(G,"link",e),G._p=new Promise(function(lt,bt){G.onload=lt,G.onerror=bt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,cu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(h,S)}}}function XM(e,n){dr.X(e,n);var a=Mo;if(a&&e){var o=ca(a).hoistableScripts,u=yo(e),h=o.get(u);h||(h=a.querySelector(Fl(u)),h||(e=g({src:e,async:!0},n),(n=xa.get(u))&&ad(e,n),h=a.createElement("script"),On(h),Mi(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function WM(e,n){dr.M(e,n);var a=Mo;if(a&&e){var o=ca(a).hoistableScripts,u=yo(e),h=o.get(u);h||(h=a.querySelector(Fl(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=xa.get(u))&&ad(e,n),h=a.createElement("script"),On(h),Mi(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function u_(e,n,a,o){var u=(u=tt.current)?lu(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=So(a.href),a=ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=So(a.href);var h=ca(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Il(e)))&&!h._p&&(S.instance=h,S.state.loading=5),xa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xa.set(e,a),h||qM(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yo(a),a=ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function So(e){return'href="'+un(e)+'"'}function Il(e){return'link[rel="stylesheet"]['+e+"]"}function f_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function qM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mi(n,"link",a),On(n),e.head.appendChild(n))}function yo(e){return'[src="'+un(e)+'"]'}function Fl(e){return"script[async]"+e}function h_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+un(a.href)+'"]');if(o)return n.instance=o,On(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),On(o),Mi(o,"style",u),cu(o,a.precedence,e),n.instance=o;case"stylesheet":u=So(a.href);var h=e.querySelector(Il(u));if(h)return n.state.loading|=4,n.instance=h,On(h),h;o=f_(a),(u=xa.get(u))&&id(o,u),h=(e.ownerDocument||e).createElement("link"),On(h);var S=h;return S._p=new Promise(function(A,G){S.onload=A,S.onerror=G}),Mi(h,"link",o),n.state.loading|=4,cu(h,a.precedence,e),n.instance=h;case"script":return h=yo(a.src),(u=e.querySelector(Fl(h)))?(n.instance=u,On(u),u):(o=a,(u=xa.get(h))&&(o=g({},a),ad(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),On(u),Mi(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cu(o,a.precedence,e));return n.instance}function cu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ad(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uu=null;function d_(e,n,a){if(uu===null){var o=new Map,u=uu=new Map;u.set(a,o)}else u=uu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[ai]||h[Ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function p_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function YM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function m_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Bl=null;function jM(){}function ZM(e,n,a){if(Bl===null)throw Error(r(475));var o=Bl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=So(a.href),h=e.querySelector(Il(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=fu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,On(h);return}h=e.ownerDocument||e,a=f_(a),(u=xa.get(u))&&id(a,u),h=h.createElement("link"),On(h);var S=h;S._p=new Promise(function(A,G){S.onload=A,S.onerror=G}),Mi(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=fu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function KM(){if(Bl===null)throw Error(r(475));var e=Bl;return e.stylesheets&&e.count===0&&rd(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&rd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function fu(){if(this.count--,this.count===0){if(this.stylesheets)rd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hu=null;function rd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hu=new Map,n.forEach(QM,e),hu=null,fu.call(e))}function QM(e,n){if(!(n.state.loading&4)){var a=hu.get(e);if(a)var o=a.get(null);else{a=new Map,hu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=fu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var zl={$$typeof:P,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function JM(e,n,a,o,u,h,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=It(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.hiddenUpdates=It(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function g_(e,n,a,o,u,h,S,A,G,lt,bt,wt){return e=new JM(e,n,a,S,A,G,lt,wt),n=1,h===!0&&(n|=24),h=Ji(3,null,null,n),e.current=h,h.stateNode=e,n=Hf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Xf(h),e}function __(e){return e?(e=Js,e):Js}function v_(e,n,a,o,u,h){u=__(u),o.context===null?o.context=u:o.pendingContext=u,o=Nr(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Pr(e,o,n),a!==null&&(ia(a,e,n),ml(a,e,n))}function x_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sd(e,n){x_(e,n),(e=e.alternate)&&x_(e,n)}function M_(e){if(e.tag===13){var n=Qs(e,67108864);n!==null&&ia(n,e,67108864),sd(e,67108864)}}var du=!0;function $M(e,n,a,o){var u=F.T;F.T=null;var h=B.p;try{B.p=2,od(e,n,a,o)}finally{B.p=h,F.T=u}}function tS(e,n,a,o){var u=F.T;F.T=null;var h=B.p;try{B.p=8,od(e,n,a,o)}finally{B.p=h,F.T=u}}function od(e,n,a,o){if(du){var u=ld(o);if(u===null)jh(e,n,o,pu,a),y_(e,o);else if(nS(u,e,n,a,o))o.stopPropagation();else if(y_(e,o),n&4&&-1<eS.indexOf(e)){for(;u!==null;){var h=la(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=ee(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var G=1<<31-jt(S);A.entanglements[1]|=G,S&=~G}Va(h),(fn&6)===0&&(Qc=Ve()+500,Ll(0))}}break;case 13:A=Qs(h,2),A!==null&&ia(A,h,2),$c(),sd(h,2)}if(h=ld(o),h===null&&jh(e,n,o,pu,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else jh(e,n,o,null,a)}}function ld(e){return e=ks(e),cd(e)}var pu=null;function cd(e){if(pu=null,e=ji(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pu=e,null}function S_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case En:return 2;case Je:return 8;case an:case oe:return 32;case O:return 268435456;default:return 32}default:return 32}}var ud=!1,Yr=null,jr=null,Zr=null,Hl=new Map,Gl=new Map,Kr=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y_(e,n){switch(e){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Hl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(n.pointerId)}}function Vl(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=la(n),n!==null&&M_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function nS(e,n,a,o,u){switch(n){case"focusin":return Yr=Vl(Yr,e,n,a,o,u),!0;case"dragenter":return jr=Vl(jr,e,n,a,o,u),!0;case"mouseover":return Zr=Vl(Zr,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Hl.set(h,Vl(Hl.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Gl.set(h,Vl(Gl.get(h)||null,e,n,a,o,u)),!0}return!1}function E_(e){var n=ji(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){if(a.tag===13){var o=na();o=Se(o);var u=Qs(a,o);u!==null&&ia(u,a,o),sd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ld(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ea=o,a.target.dispatchEvent(o),Ea=null}else return n=la(a),n!==null&&M_(n),e.blockedOn=a,!1;n.shift()}return!0}function b_(e,n,a){mu(e)&&a.delete(n)}function iS(){ud=!1,Yr!==null&&mu(Yr)&&(Yr=null),jr!==null&&mu(jr)&&(jr=null),Zr!==null&&mu(Zr)&&(Zr=null),Hl.forEach(b_),Gl.forEach(b_)}function gu(e,n){e.blockedOn===n&&(e.blockedOn=null,ud||(ud=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,iS)))}var _u=null;function T_(e){_u!==e&&(_u=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){_u===e&&(_u=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(cd(o||a)===null)continue;break}var h=la(a);h!==null&&(e.splice(n,3),n-=3,ch(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function kl(e){function n(G){return gu(G,e)}Yr!==null&&gu(Yr,e),jr!==null&&gu(jr,e),Zr!==null&&gu(Zr,e),Hl.forEach(n),Gl.forEach(n);for(var a=0;a<Kr.length;a++){var o=Kr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Kr.length&&(a=Kr[0],a.blockedOn===null);)E_(a),a.blockedOn===null&&Kr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[Yn]||null;if(typeof h=="function")S||T_(a);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[Yn]||null)A=S.formAction;else if(cd(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),T_(a)}}}function fd(e){this._internalRoot=e}vu.prototype.render=fd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=na();v_(a,o,e,n,null,null)},vu.prototype.unmount=fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;v_(e.current,2,null,e,null,null),$c(),n[Oa]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ze();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Kr.length&&n!==0&&n<Kr[a].priority;a++);Kr.splice(a,0,e),a===0&&E_(e)}};var A_=t.version;if(A_!=="19.1.0")throw Error(r(527,A_,"19.1.0"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var aS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{yt=xu.inject(aS),Tt=xu}catch{}}return Wl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=V0,h=k0,S=X0,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=g_(e,1,!1,null,null,a,o,u,h,S,A,null),e[Oa]=n.current,Yh(e),new fd(n)},Wl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=V0,S=k0,A=X0,G=null,lt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(lt=a.formState)),n=g_(e,1,!0,n,a??null,o,u,h,S,A,G,lt),n.context=__(null),a=n.current,o=na(),o=Se(o),u=Nr(o),u.callback=null,Pr(a,u,o),a=o,n.current.lanes=a,te(n,a),Va(n),e[Oa]=n.current,Yh(e),new vu(n)},Wl.version="19.1.0",Wl}var I_;function pS(){if(I_)return dd.exports;I_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),dd.exports=dS(),dd.exports}var mS=pS(),Dn=Kp();const Qp="183",gS=0,F_=1,_S=2,tf=1,vS=2,ic=3,Er=0,Gi=1,La=2,Mr=0,Hs=1,Vo=2,B_=3,z_=4,xS=5,Is=100,MS=101,SS=102,yS=103,ES=104,bS=200,TS=201,AS=202,RS=203,tp=204,ep=205,wS=206,CS=207,DS=208,US=209,LS=210,NS=211,PS=212,OS=213,IS=214,np=0,ip=1,ap=2,Wo=3,rp=4,sp=5,op=6,lp=7,Qv=0,FS=1,BS=2,ja=0,Jv=1,$v=2,tx=3,Jp=4,ex=5,nx=6,ix=7,ax=300,Gs=301,qo=302,vd=303,xd=304,gf=306,cp=1e3,xr=1001,up=1002,yi=1003,zS=1004,Mu=1005,Ui=1006,Md=1007,Bs=1008,oa=1009,rx=1010,sx=1011,cc=1012,$p=1013,Ka=1014,qa=1015,br=1016,tm=1017,em=1018,uc=1020,ox=35902,lx=35899,cx=1021,ux=1022,Pa=1023,Tr=1026,zs=1027,fx=1028,nm=1029,Yo=1030,im=1031,am=1033,ef=33776,nf=33777,af=33778,rf=33779,fp=35840,hp=35841,dp=35842,pp=35843,mp=36196,gp=37492,_p=37496,vp=37488,xp=37489,Mp=37490,Sp=37491,yp=37808,Ep=37809,bp=37810,Tp=37811,Ap=37812,Rp=37813,wp=37814,Cp=37815,Dp=37816,Up=37817,Lp=37818,Np=37819,Pp=37820,Op=37821,Ip=36492,Fp=36494,Bp=36495,zp=36283,Hp=36284,Gp=36285,Vp=36286,HS=3200,hx=0,GS=1,ss="",Sn="srgb",jo="srgb-linear",lf="linear",pn="srgb",Eo=7680,H_=519,VS=512,kS=513,XS=514,rm=515,WS=516,qS=517,sm=518,YS=519,kp=35044,Su=35048,G_="300 es",Ya=2e3,fc=2001;function jS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function hc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ZS(){const s=hc("canvas");return s.style.display="block",s}const V_={};function cf(...s){const t="THREE."+s.shift();console.log(t,...s)}function dx(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ce(...s){s=dx(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function nn(...s){s=dx(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function uf(...s){const t=s.join(" ");t in V_||(V_[t]=!0,Ce(...s))}function KS(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const QS={[np]:ip,[ap]:op,[rp]:lp,[Wo]:sp,[ip]:np,[op]:ap,[lp]:rp,[sp]:Wo};class Ko{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let k_=1234567;const oc=Math.PI/180,dc=180/Math.PI;function Sr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ci[s&255]+Ci[s>>8&255]+Ci[s>>16&255]+Ci[s>>24&255]+"-"+Ci[t&255]+Ci[t>>8&255]+"-"+Ci[t>>16&15|64]+Ci[t>>24&255]+"-"+Ci[i&63|128]+Ci[i>>8&255]+"-"+Ci[i>>16&255]+Ci[i>>24&255]+Ci[r&255]+Ci[r>>8&255]+Ci[r>>16&255]+Ci[r>>24&255]).toLowerCase()}function Qe(s,t,i){return Math.max(t,Math.min(i,s))}function om(s,t){return(s%t+t)%t}function JS(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function $S(s,t,i){return s!==t?(i-s)/(t-s):0}function lc(s,t,i){return(1-i)*s+i*t}function ty(s,t,i,r){return lc(s,t,1-Math.exp(-i*r))}function ey(s,t=1){return t-Math.abs(om(s,t*2)-t)}function ny(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function iy(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function ay(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ry(s,t){return s+Math.random()*(t-s)}function sy(s){return s*(.5-Math.random())}function oy(s){s!==void 0&&(k_=s);let t=k_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ly(s){return s*oc}function cy(s){return s*dc}function uy(s){return(s&s-1)===0&&s!==0}function fy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dy(s,t,i,r,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((t+r)/2),g=f((t+r)/2),x=c((t-r)/2),_=f((t-r)/2),y=c((r-t)/2),E=f((r-t)/2);switch(l){case"XYX":s.set(p*g,m*x,m*_,p*d);break;case"YZY":s.set(m*_,p*g,m*x,p*d);break;case"ZXZ":s.set(m*x,m*_,p*g,p*d);break;case"XZX":s.set(p*g,m*E,m*y,p*d);break;case"YXY":s.set(m*y,p*g,m*E,p*d);break;case"ZYZ":s.set(m*E,m*y,p*g,p*d);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Na(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const py={DEG2RAD:oc,RAD2DEG:dc,generateUUID:Sr,clamp:Qe,euclideanModulo:om,mapLinear:JS,inverseLerp:$S,lerp:lc,damp:ty,pingpong:ey,smoothstep:ny,smootherstep:iy,randInt:ay,randFloat:ry,randFloatSpread:sy,seededRandom:oy,degToRad:ly,radToDeg:cy,isPowerOfTwo:uy,ceilPowerOfTwo:fy,floorPowerOfTwo:hy,setQuaternionFromProperEuler:dy,normalize:mn,denormalize:Na};class ze{constructor(t=0,i=0){ze.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Qe(this.x,t.x,i.x),this.y=Qe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Qe(this.x,t,i),this.y=Qe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Qe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,p){let m=r[l+0],d=r[l+1],g=r[l+2],x=r[l+3],_=c[f+0],y=c[f+1],E=c[f+2],w=c[f+3];if(x!==w||m!==_||d!==y||g!==E){let M=m*_+d*y+g*E+x*w;M<0&&(_=-_,y=-y,E=-E,w=-w,M=-M);let v=1-p;if(M<.9995){const C=Math.acos(M),P=Math.sin(C);v=Math.sin(v*C)/P,p=Math.sin(p*C)/P,m=m*v+_*p,d=d*v+y*p,g=g*v+E*p,x=x*v+w*p}else{m=m*v+_*p,d=d*v+y*p,g=g*v+E*p,x=x*v+w*p;const C=1/Math.sqrt(m*m+d*d+g*g+x*x);m*=C,d*=C,g*=C,x*=C}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,f){const p=r[l],m=r[l+1],d=r[l+2],g=r[l+3],x=c[f],_=c[f+1],y=c[f+2],E=c[f+3];return t[i]=p*E+g*x+m*y-d*_,t[i+1]=m*E+g*_+d*x-p*y,t[i+2]=d*E+g*y+p*_-m*x,t[i+3]=g*E-p*x-m*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(r/2),g=p(l/2),x=p(c/2),_=m(r/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=_*g*x+d*y*E,this._y=d*y*x-_*g*E,this._z=d*g*E+_*y*x,this._w=d*g*x-_*y*E;break;case"YXZ":this._x=_*g*x+d*y*E,this._y=d*y*x-_*g*E,this._z=d*g*E-_*y*x,this._w=d*g*x+_*y*E;break;case"ZXY":this._x=_*g*x-d*y*E,this._y=d*y*x+_*g*E,this._z=d*g*E+_*y*x,this._w=d*g*x-_*y*E;break;case"ZYX":this._x=_*g*x-d*y*E,this._y=d*y*x+_*g*E,this._z=d*g*E-_*y*x,this._w=d*g*x+_*y*E;break;case"YZX":this._x=_*g*x+d*y*E,this._y=d*y*x+_*g*E,this._z=d*g*E-_*y*x,this._w=d*g*x-_*y*E;break;case"XZY":this._x=_*g*x-d*y*E,this._y=d*y*x-_*g*E,this._z=d*g*E+_*y*x,this._w=d*g*x+_*y*E;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],g=i[6],x=i[10],_=r+p+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-d)*y,this._z=(f-l)*y}else if(r>p&&r>x){const y=2*Math.sqrt(1+r-p-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+d)/y}else if(p>x){const y=2*Math.sqrt(1+p-r-x);this._w=(c-d)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-r-p);this._w=(f-l)/y,this._x=(c+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+f*p+l*d-c*m,this._y=l*g+f*m+c*p-r*d,this._z=c*g+f*d+r*m-l*p,this._w=f*g-r*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(X_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(X_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*r),g=2*(p*i-c*l),x=2*(c*r-f*i);return this.x=i+m*d+f*x-p*g,this.y=r+m*g+p*d-c*x,this.z=l+m*x+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Qe(this.x,t.x,i.x),this.y=Qe(this.y,t.y,i.y),this.z=Qe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Qe(this.x,t,i),this.y=Qe(this.y,t,i),this.z=Qe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Sd.copy(this).projectOnVector(t),this.sub(Sd)}reflect(t){return this.sub(Sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Qe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new Z,X_=new Qo;class Oe{constructor(t,i,r,l,c,f,p,m,d){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,p,m,d)}set(t,i,r,l,c,f,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],d=r[1],g=r[4],x=r[7],_=r[2],y=r[5],E=r[8],w=l[0],M=l[3],v=l[6],C=l[1],P=l[4],N=l[7],z=l[2],H=l[5],k=l[8];return c[0]=f*w+p*C+m*z,c[3]=f*M+p*P+m*H,c[6]=f*v+p*N+m*k,c[1]=d*w+g*C+x*z,c[4]=d*M+g*P+x*H,c[7]=d*v+g*N+x*k,c[2]=_*w+y*C+E*z,c[5]=_*M+y*P+E*H,c[8]=_*v+y*N+E*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*p*d-r*c*g+r*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],x=g*f-p*d,_=p*m-g*c,y=d*c-f*m,E=i*x+r*_+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=x*w,t[1]=(l*d-g*r)*w,t[2]=(p*r-l*f)*w,t[3]=_*w,t[4]=(g*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=y*w,t[7]=(r*m-d*i)*w,t[8]=(f*i-r*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(yd.makeScale(t,i)),this}rotate(t){return this.premultiply(yd.makeRotation(-t)),this}translate(t,i){return this.premultiply(yd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yd=new Oe,W_=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function my(){const s={enabled:!0,workingColorSpace:jo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===pn&&(l.r=yr(l.r),l.g=yr(l.g),l.b=yr(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===pn&&(l.r=Xo(l.r),l.g=Xo(l.g),l.b=Xo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?lf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return uf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return uf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[jo]:{primaries:t,whitePoint:r,transfer:lf,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:r,transfer:pn,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),s}const sn=my();function yr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bo;class gy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{bo===void 0&&(bo=hc("canvas")),bo.width=t.width,bo.height=t.height;const l=bo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=bo}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=hc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=yr(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(yr(i[r]/255)*255):i[r]=yr(i[r]);return{data:i,width:t.width,height:t.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _y=0;class lm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Sr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Ed(l[f].image)):c.push(Ed(l[f]))}else c=Ed(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let vy=0;const bd=new Z;class qn extends Ko{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=xr,l=xr,c=Ui,f=Bs,p=Pa,m=oa,d=qn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Sr(),this.name="",this.source=new lm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){Ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ax)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cp:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case up:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cp:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case up:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=ax;qn.DEFAULT_ANISOTROPY=1;class Gn{constructor(t=0,i=0,r=0,l=1){Gn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,d=m[0],g=m[4],x=m[8],_=m[1],y=m[5],E=m[9],w=m[2],M=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+w)<.1&&Math.abs(E+M)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(d+1)/2,N=(y+1)/2,z=(v+1)/2,H=(g+_)/4,k=(x+w)/4,T=(E+M)/4;return P>N&&P>z?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=H/r,c=k/r):N>z?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=H/l,c=T/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=k/c,l=T/c),this.set(r,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(x-w)*(x-w)+(_-g)*(_-g));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(x-w)/C,this.z=(_-g)/C,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Qe(this.x,t.x,i.x),this.y=Qe(this.y,t.y,i.y),this.z=Qe(this.z,t.z,i.z),this.w=Qe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Qe(this.x,t,i),this.y=Qe(this.y,t,i),this.z=Qe(this.z,t,i),this.w=Qe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xy extends Ko{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Gn(0,0,t,i),this.scissorTest=!1,this.viewport=new Gn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new qn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new lm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Za extends xy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class px extends qn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class My extends qn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(t,i,r,l,c,f,p,m,d,g,x,_,y,E,w,M){An.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,p,m,d,g,x,_,y,E,w,M)}set(t,i,r,l,c,f,p,m,d,g,x,_,y,E,w,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=p,v[13]=m,v[2]=d,v[6]=g,v[10]=x,v[14]=_,v[3]=y,v[7]=E,v[11]=w,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new An().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/To.setFromMatrixColumn(t,0).length(),c=1/To.setFromMatrixColumn(t,1).length(),f=1/To.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=f*g,y=f*x,E=p*g,w=p*x;i[0]=m*g,i[4]=-m*x,i[8]=d,i[1]=y+E*d,i[5]=_-w*d,i[9]=-p*m,i[2]=w-_*d,i[6]=E+y*d,i[10]=f*m}else if(t.order==="YXZ"){const _=m*g,y=m*x,E=d*g,w=d*x;i[0]=_+w*p,i[4]=E*p-y,i[8]=f*d,i[1]=f*x,i[5]=f*g,i[9]=-p,i[2]=y*p-E,i[6]=w+_*p,i[10]=f*m}else if(t.order==="ZXY"){const _=m*g,y=m*x,E=d*g,w=d*x;i[0]=_-w*p,i[4]=-f*x,i[8]=E+y*p,i[1]=y+E*p,i[5]=f*g,i[9]=w-_*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const _=f*g,y=f*x,E=p*g,w=p*x;i[0]=m*g,i[4]=E*d-y,i[8]=_*d+w,i[1]=m*x,i[5]=w*d+_,i[9]=y*d-E,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,y=f*d,E=p*m,w=p*d;i[0]=m*g,i[4]=w-_*x,i[8]=E*x+y,i[1]=x,i[5]=f*g,i[9]=-p*g,i[2]=-d*g,i[6]=y*x+E,i[10]=_-w*x}else if(t.order==="XZY"){const _=f*m,y=f*d,E=p*m,w=p*d;i[0]=m*g,i[4]=-x,i[8]=d*g,i[1]=_*x+w,i[5]=f*g,i[9]=y*x-E,i[2]=E*x-y,i[6]=p*g,i[10]=w*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sy,t,yy)}lookAt(t,i,r){const l=this.elements;return aa.subVectors(t,i),aa.lengthSq()===0&&(aa.z=1),aa.normalize(),Jr.crossVectors(r,aa),Jr.lengthSq()===0&&(Math.abs(r.z)===1?aa.x+=1e-4:aa.z+=1e-4,aa.normalize(),Jr.crossVectors(r,aa)),Jr.normalize(),yu.crossVectors(aa,Jr),l[0]=Jr.x,l[4]=yu.x,l[8]=aa.x,l[1]=Jr.y,l[5]=yu.y,l[9]=aa.y,l[2]=Jr.z,l[6]=yu.z,l[10]=aa.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],d=r[12],g=r[1],x=r[5],_=r[9],y=r[13],E=r[2],w=r[6],M=r[10],v=r[14],C=r[3],P=r[7],N=r[11],z=r[15],H=l[0],k=l[4],T=l[8],L=l[12],ft=l[1],V=l[5],at=l[9],st=l[13],xt=l[2],it=l[6],F=l[10],B=l[14],ht=l[3],St=l[7],D=l[11],Q=l[15];return c[0]=f*H+p*ft+m*xt+d*ht,c[4]=f*k+p*V+m*it+d*St,c[8]=f*T+p*at+m*F+d*D,c[12]=f*L+p*st+m*B+d*Q,c[1]=g*H+x*ft+_*xt+y*ht,c[5]=g*k+x*V+_*it+y*St,c[9]=g*T+x*at+_*F+y*D,c[13]=g*L+x*st+_*B+y*Q,c[2]=E*H+w*ft+M*xt+v*ht,c[6]=E*k+w*V+M*it+v*St,c[10]=E*T+w*at+M*F+v*D,c[14]=E*L+w*st+M*B+v*Q,c[3]=C*H+P*ft+N*xt+z*ht,c[7]=C*k+P*V+N*it+z*St,c[11]=C*T+P*at+N*F+z*D,c[15]=C*L+P*st+N*B+z*Q,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],g=t[2],x=t[6],_=t[10],y=t[14],E=t[3],w=t[7],M=t[11],v=t[15],C=m*y-d*_,P=p*y-d*x,N=p*_-m*x,z=f*y-d*g,H=f*_-m*g,k=f*x-p*g;return i*(w*C-M*P+v*N)-r*(E*C-M*z+v*H)+l*(E*P-w*z+v*k)-c*(E*N-w*H+M*k)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],x=t[9],_=t[10],y=t[11],E=t[12],w=t[13],M=t[14],v=t[15],C=i*p-r*f,P=i*m-l*f,N=i*d-c*f,z=r*m-l*p,H=r*d-c*p,k=l*d-c*m,T=g*w-x*E,L=g*M-_*E,ft=g*v-y*E,V=x*M-_*w,at=x*v-y*w,st=_*v-y*M,xt=C*st-P*at+N*V+z*ft-H*L+k*T;if(xt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const it=1/xt;return t[0]=(p*st-m*at+d*V)*it,t[1]=(l*at-r*st-c*V)*it,t[2]=(w*k-M*H+v*z)*it,t[3]=(_*H-x*k-y*z)*it,t[4]=(m*ft-f*st-d*L)*it,t[5]=(i*st-l*ft+c*L)*it,t[6]=(M*N-E*k-v*P)*it,t[7]=(g*k-_*N+y*P)*it,t[8]=(f*at-p*ft+d*T)*it,t[9]=(r*ft-i*at-c*T)*it,t[10]=(E*H-w*N+v*C)*it,t[11]=(x*N-g*H-y*C)*it,t[12]=(p*L-f*V-m*T)*it,t[13]=(i*V-r*L+l*T)*it,t[14]=(w*P-E*z-M*C)*it,t[15]=(g*z-x*P+_*C)*it,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,p=t.y,m=t.z,d=c*f,g=c*p;return this.set(d*f+r,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+r,g*m-l*f,0,d*m-l*p,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,g=f+f,x=p+p,_=c*d,y=c*g,E=c*x,w=f*g,M=f*x,v=p*x,C=m*d,P=m*g,N=m*x,z=r.x,H=r.y,k=r.z;return l[0]=(1-(w+v))*z,l[1]=(y+N)*z,l[2]=(E-P)*z,l[3]=0,l[4]=(y-N)*H,l[5]=(1-(_+v))*H,l[6]=(M+C)*H,l[7]=0,l[8]=(E+P)*k,l[9]=(M-C)*k,l[10]=(1-(_+w))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let f=To.set(l[0],l[1],l[2]).length();const p=To.set(l[4],l[5],l[6]).length(),m=To.set(l[8],l[9],l[10]).length();c<0&&(f=-f),wa.copy(this);const d=1/f,g=1/p,x=1/m;return wa.elements[0]*=d,wa.elements[1]*=d,wa.elements[2]*=d,wa.elements[4]*=g,wa.elements[5]*=g,wa.elements[6]*=g,wa.elements[8]*=x,wa.elements[9]*=x,wa.elements[10]*=x,i.setFromRotationMatrix(wa),r.x=f,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,f,p=Ya,m=!1){const d=this.elements,g=2*c/(i-t),x=2*c/(r-l),_=(i+t)/(i-t),y=(r+l)/(r-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(p===Ya)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(p===fc)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=x,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,r,l,c,f,p=Ya,m=!1){const d=this.elements,g=2/(i-t),x=2/(r-l),_=-(i+t)/(i-t),y=-(r+l)/(r-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(p===Ya)E=-2/(f-c),w=-(f+c)/(f-c);else if(p===fc)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=x,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const To=new Z,wa=new An,Sy=new Z(0,0,0),yy=new Z(1,1,1),Jr=new Z,yu=new Z,aa=new Z,Y_=new An,j_=new Qo;class Qa{constructor(t=0,i=0,r=0,l=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],g=l[9],x=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Qe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(Qe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Y_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return j_.setFromEuler(this),this.setFromQuaternion(j_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class cm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ey=0;const Z_=new Z,Ao=new Qo,pr=new An,Eu=new Z,ql=new Z,by=new Z,Ty=new Qo,K_=new Z(1,0,0),Q_=new Z(0,1,0),J_=new Z(0,0,1),$_={type:"added"},Ay={type:"removed"},Ro={type:"childadded",child:null},Td={type:"childremoved",child:null};class ui extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const t=new Z,i=new Qa,r=new Qo,l=new Z(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new An},normalMatrix:{value:new Oe}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ao.setFromAxisAngle(t,i),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(t,i){return Ao.setFromAxisAngle(t,i),this.quaternion.premultiply(Ao),this}rotateX(t){return this.rotateOnAxis(K_,t)}rotateY(t){return this.rotateOnAxis(Q_,t)}rotateZ(t){return this.rotateOnAxis(J_,t)}translateOnAxis(t,i){return Z_.copy(t).applyQuaternion(this.quaternion),this.position.add(Z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(K_,t)}translateY(t){return this.translateOnAxis(Q_,t)}translateZ(t){return this.translateOnAxis(J_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Eu.copy(t):Eu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(ql,Eu,this.up):pr.lookAt(Eu,ql,this.up),this.quaternion.setFromRotationMatrix(pr),l&&(pr.extractRotation(l.matrixWorld),Ao.setFromRotationMatrix(pr),this.quaternion.premultiply(Ao.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(nn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($_),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ay),Td.child=t,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pr.multiply(t.parent.matrixWorld)),t.applyMatrix4(pr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($_),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,t,by),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,Ty,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),x=f(t.shapes),_=f(t.skeletons),y=f(t.animations),E=f(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ui.DEFAULT_UP=new Z(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ac extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ry={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,r),v=this._getHandJoint(d,w);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],_=g.position.distanceTo(x.position),y=.02,E=.005;d.inputState.pinching&&_>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ac;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},bu={h:0,s:0,l:0};function Rd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ye{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,sn.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=sn.workingColorSpace){return this.r=t,this.g=i,this.b=r,sn.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=sn.workingColorSpace){if(t=om(t,1),i=Qe(i,0,1),r=Qe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Rd(f,c,t+1/3),this.g=Rd(f,c,t),this.b=Rd(f,c,t-1/3)}return sn.colorSpaceToWorking(this,l),this}setStyle(t,i=Sn){function r(c){c!==void 0&&parseFloat(c)<1&&Ce("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Ce("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);Ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Sn){const r=mx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):Ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}copyLinearToSRGB(t){return this.r=Xo(t.r),this.g=Xo(t.g),this.b=Xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return sn.workingToColorSpace(Di.copy(this),t),Math.round(Qe(Di.r*255,0,255))*65536+Math.round(Qe(Di.g*255,0,255))*256+Math.round(Qe(Di.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=sn.workingColorSpace){sn.workingToColorSpace(Di.copy(this),i);const r=Di.r,l=Di.g,c=Di.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,d;const g=(p+f)/2;if(p===f)m=0,d=0;else{const x=f-p;switch(d=g<=.5?x/(f+p):x/(2-f-p),f){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=sn.workingColorSpace){return sn.workingToColorSpace(Di.copy(this),i),t.r=Di.r,t.g=Di.g,t.b=Di.b,t}getStyle(t=Sn){sn.workingToColorSpace(Di.copy(this),t);const i=Di.r,r=Di.g,l=Di.b;return t!==Sn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL($r),this.setHSL($r.h+t,$r.s+i,$r.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL($r),t.getHSL(bu);const r=lc($r.h,bu.h,i),l=lc($r.s,bu.s,i),c=lc($r.l,bu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Di=new Ye;Ye.NAMES=mx;class wy extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qa,this.environmentIntensity=1,this.environmentRotation=new Qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ca=new Z,mr=new Z,wd=new Z,gr=new Z,wo=new Z,Co=new Z,tv=new Z,Cd=new Z,Dd=new Z,Ud=new Z,Ld=new Gn,Nd=new Gn,Pd=new Gn;class Sa{constructor(t=new Z,i=new Z,r=new Z){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ca.subVectors(t,i),l.cross(Ca);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ca.subVectors(l,i),mr.subVectors(r,i),wd.subVectors(t,i);const f=Ca.dot(Ca),p=Ca.dot(mr),m=Ca.dot(wd),d=mr.dot(mr),g=mr.dot(wd),x=f*d-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,y=(d*m-p*g)*_,E=(f*g-p*m)*_;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(t,i,r,l,c,f,p,m){return this.getBarycoord(t,i,r,l,gr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,gr.x),m.addScaledVector(f,gr.y),m.addScaledVector(p,gr.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return Ld.setScalar(0),Nd.setScalar(0),Pd.setScalar(0),Ld.fromBufferAttribute(t,i),Nd.fromBufferAttribute(t,r),Pd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Ld,c.x),f.addScaledVector(Nd,c.y),f.addScaledVector(Pd,c.z),f}static isFrontFacing(t,i,r,l){return Ca.subVectors(r,i),mr.subVectors(t,i),Ca.cross(mr).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ca.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Ca.cross(mr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Sa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Sa.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Sa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,p;wo.subVectors(l,r),Co.subVectors(c,r),Cd.subVectors(t,r);const m=wo.dot(Cd),d=Co.dot(Cd);if(m<=0&&d<=0)return i.copy(r);Dd.subVectors(t,l);const g=wo.dot(Dd),x=Co.dot(Dd);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*d;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(wo,f);Ud.subVectors(t,c);const y=wo.dot(Ud),E=Co.dot(Ud);if(E>=0&&y<=E)return i.copy(c);const w=y*d-m*E;if(w<=0&&d>=0&&E<=0)return p=d/(d-E),i.copy(r).addScaledVector(Co,p);const M=g*E-y*x;if(M<=0&&x-g>=0&&y-E>=0)return tv.subVectors(c,l),p=(x-g)/(x-g+(y-E)),i.copy(l).addScaledVector(tv,p);const v=1/(M+w+_);return f=w*v,p=_*v,i.copy(r).addScaledVector(wo,f).addScaledVector(Co,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gc{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Da.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Da.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Da.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Da):Da.fromBufferAttribute(c,f),Da.applyMatrix4(t.matrixWorld),this.expandByPoint(Da);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tu.copy(r.boundingBox)),Tu.applyMatrix4(t.matrixWorld),this.union(Tu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Da),Da.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yl),Au.subVectors(this.max,Yl),Do.subVectors(t.a,Yl),Uo.subVectors(t.b,Yl),Lo.subVectors(t.c,Yl),ts.subVectors(Uo,Do),es.subVectors(Lo,Uo),Cs.subVectors(Do,Lo);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Cs.z,Cs.y,ts.z,0,-ts.x,es.z,0,-es.x,Cs.z,0,-Cs.x,-ts.y,ts.x,0,-es.y,es.x,0,-Cs.y,Cs.x,0];return!Od(i,Do,Uo,Lo,Au)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,Do,Uo,Lo,Au))?!1:(Ru.crossVectors(ts,es),i=[Ru.x,Ru.y,Ru.z],Od(i,Do,Uo,Lo,Au))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Da).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Da).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_r),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _r=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Da=new Z,Tu=new gc,Do=new Z,Uo=new Z,Lo=new Z,ts=new Z,es=new Z,Cs=new Z,Yl=new Z,Au=new Z,Ru=new Z,Ds=new Z;function Od(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Ds.fromArray(s,c);const p=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=t.dot(Ds),d=i.dot(Ds),g=r.dot(Ds);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const Qn=new Z,wu=new ze;let Cy=0;class Jn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=kp,this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wu.fromBufferAttribute(this,i),wu.applyMatrix3(t),this.setXY(i,wu.x,wu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Qn.fromBufferAttribute(this,i),Qn.applyMatrix3(t),this.setXYZ(i,Qn.x,Qn.y,Qn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Qn.fromBufferAttribute(this,i),Qn.applyMatrix4(t),this.setXYZ(i,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Qn.fromBufferAttribute(this,i),Qn.applyNormalMatrix(t),this.setXYZ(i,Qn.x,Qn.y,Qn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Qn.fromBufferAttribute(this,i),Qn.transformDirection(t),this.setXYZ(i,Qn.x,Qn.y,Qn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Na(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=mn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Na(i,this.array)),i}setX(t,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Na(i,this.array)),i}setY(t,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Na(i,this.array)),i}setZ(t,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Na(i,this.array)),i}setW(t,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=mn(i,this.array),r=mn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=mn(i,this.array),r=mn(r,this.array),l=mn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=mn(i,this.array),r=mn(r,this.array),l=mn(l,this.array),c=mn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kp&&(t.usage=this.usage),t}}class gx extends Jn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class _x extends Jn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Li extends Jn{constructor(t,i,r){super(new Float32Array(t),i,r)}}const Dy=new gc,jl=new Z,Id=new Z;class ls{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Dy.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jl.subVectors(t,this.center);const i=jl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(jl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jl.copy(t.center).add(Id)),this.expandByPoint(jl.copy(t.center).sub(Id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Uy=0;const Ma=new An,Fd=new ui,No=new Z,ra=new gc,Zl=new gc,ci=new Z;class $n extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jS(t)?_x:gx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Oe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ma.makeRotationFromQuaternion(t),this.applyMatrix4(Ma),this}rotateX(t){return Ma.makeRotationX(t),this.applyMatrix4(Ma),this}rotateY(t){return Ma.makeRotationY(t),this.applyMatrix4(Ma),this}rotateZ(t){return Ma.makeRotationZ(t),this.applyMatrix4(Ma),this}translate(t,i,r){return Ma.makeTranslation(t,i,r),this.applyMatrix4(Ma),this}scale(t,i,r){return Ma.makeScale(t,i,r),this.applyMatrix4(Ma),this}lookAt(t){return Fd.lookAt(t),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Li(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ra.setFromBufferAttribute(c),this.morphTargetsRelative?(ci.addVectors(this.boundingBox.min,ra.min),this.boundingBox.expandByPoint(ci),ci.addVectors(this.boundingBox.max,ra.max),this.boundingBox.expandByPoint(ci)):(this.boundingBox.expandByPoint(ra.min),this.boundingBox.expandByPoint(ra.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const r=this.boundingSphere.center;if(ra.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Zl.setFromBufferAttribute(p),this.morphTargetsRelative?(ci.addVectors(ra.min,Zl.min),ra.expandByPoint(ci),ci.addVectors(ra.max,Zl.max),ra.expandByPoint(ci)):(ra.expandByPoint(Zl.min),ra.expandByPoint(Zl.max))}ra.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)ci.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(ci));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)ci.fromBufferAttribute(p,d),m&&(No.fromBufferAttribute(t,d),ci.add(No)),l=Math.max(l,r.distanceToSquared(ci))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new Z,m[T]=new Z;const d=new Z,g=new Z,x=new Z,_=new ze,y=new ze,E=new ze,w=new Z,M=new Z;function v(T,L,ft){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),x.fromBufferAttribute(r,ft),_.fromBufferAttribute(c,T),y.fromBufferAttribute(c,L),E.fromBufferAttribute(c,ft),g.sub(d),x.sub(d),y.sub(_),E.sub(_);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(V),M.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),p[T].add(w),p[L].add(w),p[ft].add(w),m[T].add(M),m[L].add(M),m[ft].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,L=C.length;T<L;++T){const ft=C[T],V=ft.start,at=ft.count;for(let st=V,xt=V+at;st<xt;st+=3)v(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const P=new Z,N=new Z,z=new Z,H=new Z;function k(T){z.fromBufferAttribute(l,T),H.copy(z);const L=p[T];P.copy(L),P.sub(z.multiplyScalar(z.dot(L))).normalize(),N.crossVectors(H,L);const V=N.dot(m[T])<0?-1:1;f.setXYZW(T,P.x,P.y,P.z,V)}for(let T=0,L=C.length;T<L;++T){const ft=C[T],V=ft.start,at=ft.count;for(let st=V,xt=V+at;st<xt;st+=3)k(t.getX(st+0)),k(t.getX(st+1)),k(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Jn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const l=new Z,c=new Z,f=new Z,p=new Z,m=new Z,d=new Z,g=new Z,x=new Z;if(t)for(let _=0,y=t.count;_<y;_+=3){const E=t.getX(_+0),w=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,M),p.add(g),m.add(g),d.add(g),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)ci.fromBufferAttribute(t,i),ci.normalize(),t.setXYZ(i,ci.x,ci.y,ci.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,x=p.normalized,_=new d.constructor(m.length*g);let y=0,E=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*g;for(let v=0;v<g;v++)_[E++]=d[y++]}return new Jn(_,g,x)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,x=d.length;g<x;g++){const _=d[g],y=t(_,r);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let x=0,_=d.length;x<_;x++){const y=d[x];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],x=c[d];for(let _=0,y=x.length;_<y;_++)g.push(x[_].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const x=f[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ly{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=kp,this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bi=new Z;class ff{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bi.fromBufferAttribute(this,i),Bi.applyMatrix4(t),this.setXYZ(i,Bi.x,Bi.y,Bi.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bi.fromBufferAttribute(this,i),Bi.applyNormalMatrix(t),this.setXYZ(i,Bi.x,Bi.y,Bi.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bi.fromBufferAttribute(this,i),Bi.transformDirection(t),this.setXYZ(i,Bi.x,Bi.y,Bi.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Na(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=mn(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=mn(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=mn(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=mn(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=mn(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Na(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Na(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Na(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Na(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=mn(i,this.array),r=mn(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=mn(i,this.array),r=mn(r,this.array),l=mn(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=mn(i,this.array),r=mn(r,this.array),l=mn(l,this.array),c=mn(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){cf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Jn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ff(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){cf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ny=0;class cs extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Hs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tp,this.blendDst=ep,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){Ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==tp&&(r.blendSrc=this.blendSrc),this.blendDst!==ep&&(r.blendDst=this.blendDst),this.blendEquation!==Is&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Eo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Eo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Eo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sf extends cs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Po;const Kl=new Z,Oo=new Z,Io=new Z,Fo=new ze,Ql=new ze,vx=new An,Cu=new Z,Jl=new Z,Du=new Z,ev=new ze,Bd=new ze,nv=new ze;class iv extends ui{constructor(t=new sf){if(super(),this.isSprite=!0,this.type="Sprite",Po===void 0){Po=new $n;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Ly(i,5);Po.setIndex([0,1,2,0,2,3]),Po.setAttribute("position",new ff(r,3,0,!1)),Po.setAttribute("uv",new ff(r,2,3,!1))}this.geometry=Po,this.material=t,this.center=new ze(.5,.5),this.count=1}raycast(t,i){t.camera===null&&nn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oo.setFromMatrixScale(this.matrixWorld),vx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Io.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oo.multiplyScalar(-Io.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Uu(Cu.set(-.5,-.5,0),Io,f,Oo,l,c),Uu(Jl.set(.5,-.5,0),Io,f,Oo,l,c),Uu(Du.set(.5,.5,0),Io,f,Oo,l,c),ev.set(0,0),Bd.set(1,0),nv.set(1,1);let p=t.ray.intersectTriangle(Cu,Jl,Du,!1,Kl);if(p===null&&(Uu(Jl.set(-.5,.5,0),Io,f,Oo,l,c),Bd.set(0,1),p=t.ray.intersectTriangle(Cu,Du,Jl,!1,Kl),p===null))return;const m=t.ray.origin.distanceTo(Kl);m<t.near||m>t.far||i.push({distance:m,point:Kl.clone(),uv:Sa.getInterpolation(Kl,Cu,Jl,Du,ev,Bd,nv,new ze),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Uu(s,t,i,r,l,c){Fo.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Ql.x=c*Fo.x-l*Fo.y,Ql.y=l*Fo.x+c*Fo.y):Ql.copy(Fo),s.copy(t),s.x+=Ql.x,s.y+=Ql.y,s.applyMatrix4(vx)}const vr=new Z,zd=new Z,Lu=new Z,ns=new Z,Hd=new Z,Nu=new Z,Gd=new Z;class _f{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vr)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=vr.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(vr.copy(this.origin).addScaledVector(this.direction,i),vr.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){zd.copy(t).add(i).multiplyScalar(.5),Lu.copy(i).sub(t).normalize(),ns.copy(this.origin).sub(zd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Lu),p=ns.dot(this.direction),m=-ns.dot(Lu),d=ns.lengthSq(),g=Math.abs(1-f*f);let x,_,y,E;if(g>0)if(x=f*m-p,_=f*p-m,E=c*g,x>=0)if(_>=-E)if(_<=E){const w=1/g;x*=w,_*=w,y=x*(x+f*_+2*p)+_*(f*x+_+2*m)+d}else _=c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;else _=-c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;else _<=-E?(x=Math.max(0,-(-f*c+p)),_=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+d):_<=E?(x=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+d):(x=Math.max(0,-(f*c+p)),_=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+d);else _=f>0?-c:c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(zd).addScaledVector(Lu,_),y}intersectSphere(t,i){vr.subVectors(t.center,this.origin);const r=vr.dot(this.direction),l=vr.dot(vr)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,p,m;const d=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return d>=0?(r=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(r=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(p=(t.min.z-_.z)*x,m=(t.max.z-_.z)*x):(p=(t.max.z-_.z)*x,m=(t.min.z-_.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,vr)!==null}intersectTriangle(t,i,r,l,c){Hd.subVectors(i,t),Nu.subVectors(r,t),Gd.crossVectors(Hd,Nu);let f=this.direction.dot(Gd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ns.subVectors(this.origin,t);const m=p*this.direction.dot(Nu.crossVectors(ns,Nu));if(m<0)return null;const d=p*this.direction.dot(Hd.cross(ns));if(d<0||m+d>f)return null;const g=-p*ns.dot(Gd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ko extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.combine=Qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const av=new An,Us=new _f,Pu=new ls,rv=new Z,Ou=new Z,Iu=new Z,Fu=new Z,Vd=new Z,Bu=new Z,sv=new Z,zu=new Z;class Si extends ui{constructor(t=new $n,i=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Bu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],x=c[m];g!==0&&(Vd.fromBufferAttribute(x,t),f?Bu.addScaledVector(Vd,g):Bu.addScaledVector(Vd.sub(i),g))}i.add(Bu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pu.copy(r.boundingSphere),Pu.applyMatrix4(c),Us.copy(t.ray).recast(t.near),!(Pu.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Pu,rv)===null||Us.origin.distanceToSquared(rv)>(t.far-t.near)**2))&&(av.copy(c).invert(),Us.copy(t.ray).applyMatrix4(av),!(r.boundingBox!==null&&Us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Us)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,w=_.length;E<w;E++){const M=_[E],v=f[M.materialIndex],C=Math.max(M.start,y.start),P=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let N=C,z=P;N<z;N+=3){const H=p.getX(N),k=p.getX(N+1),T=p.getX(N+2);l=Hu(this,v,t,r,d,g,x,H,k,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=E,v=w;M<v;M+=3){const C=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=Hu(this,f,t,r,d,g,x,C,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=_.length;E<w;E++){const M=_[E],v=f[M.materialIndex],C=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=C,z=P;N<z;N+=3){const H=N,k=N+1,T=N+2;l=Hu(this,v,t,r,d,g,x,H,k,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=E,v=w;M<v;M+=3){const C=M,P=M+1,N=M+2;l=Hu(this,f,t,r,d,g,x,C,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Py(s,t,i,r,l,c,f,p){let m;if(t.side===Gi?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,t.side===Er,p),m===null)return null;zu.copy(p),zu.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(zu);return d<i.near||d>i.far?null:{distance:d,point:zu.clone(),object:s}}function Hu(s,t,i,r,l,c,f,p,m,d){s.getVertexPosition(p,Ou),s.getVertexPosition(m,Iu),s.getVertexPosition(d,Fu);const g=Py(s,t,i,r,Ou,Iu,Fu,sv);if(g){const x=new Z;Sa.getBarycoord(sv,Ou,Iu,Fu,x),l&&(g.uv=Sa.getInterpolatedAttribute(l,p,m,d,x,new ze)),c&&(g.uv1=Sa.getInterpolatedAttribute(c,p,m,d,x,new ze)),f&&(g.normal=Sa.getInterpolatedAttribute(f,p,m,d,x,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new Z,materialIndex:0};Sa.getNormal(Ou,Iu,Fu,_.normal),g.face=_,g.barycoord=x}return g}class Oy extends qn{constructor(t=null,i=1,r=1,l,c,f,p,m,d=yi,g=yi,x,_){super(null,f,p,m,d,g,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kd=new Z,Iy=new Z,Fy=new Oe;class Os{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=kd.subVectors(r,i).cross(Iy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(kd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Fy.getNormalMatrix(t),l=this.coplanarPoint(kd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new ls,By=new ze(.5,.5),Gu=new Z;class um{constructor(t=new Os,i=new Os,r=new Os,l=new Os,c=new Os,f=new Os){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ya,r=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],g=c[4],x=c[5],_=c[6],y=c[7],E=c[8],w=c[9],M=c[10],v=c[11],C=c[12],P=c[13],N=c[14],z=c[15];if(l[0].setComponents(d-f,y-g,v-E,z-C).normalize(),l[1].setComponents(d+f,y+g,v+E,z+C).normalize(),l[2].setComponents(d+p,y+x,v+w,z+P).normalize(),l[3].setComponents(d-p,y-x,v-w,z-P).normalize(),r)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(d-m,y-_,v-M,z-N).normalize();else if(l[4].setComponents(d-m,y-_,v-M,z-N).normalize(),i===Ya)l[5].setComponents(d+m,y+_,v+M,z+N).normalize();else if(i===fc)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const i=By.distanceTo(t.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gu.x=l.normal.x>0?t.max.x:t.min.x,Gu.y=l.normal.y>0?t.max.y:t.min.y,Gu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xp extends cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hf=new Z,df=new Z,ov=new An,$l=new _f,Vu=new ls,Xd=new Z,lv=new Z;class zy extends ui{constructor(t=new $n,i=new Xp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)hf.fromBufferAttribute(i,l-1),df.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=hf.distanceTo(df);t.setAttribute("lineDistance",new Li(r,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vu.copy(r.boundingSphere),Vu.applyMatrix4(l),Vu.radius+=c,t.ray.intersectsSphere(Vu)===!1)return;ov.copy(l).invert(),$l.copy(t.ray).applyMatrix4(ov);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let w=y,M=E-1;w<M;w+=d){const v=g.getX(w),C=g.getX(w+1),P=ku(this,t,$l,m,v,C,w);P&&i.push(P)}if(this.isLineLoop){const w=g.getX(E-1),M=g.getX(y),v=ku(this,t,$l,m,w,M,E-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let w=y,M=E-1;w<M;w+=d){const v=ku(this,t,$l,m,w,w+1,w);v&&i.push(v)}if(this.isLineLoop){const w=ku(this,t,$l,m,E-1,y,E-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function ku(s,t,i,r,l,c,f){const p=s.geometry.attributes.position;if(hf.fromBufferAttribute(p,l),df.fromBufferAttribute(p,c),i.distanceSqToSegment(hf,df,Xd,lv)>r)return;Xd.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(Xd);if(!(d<t.near||d>t.far))return{distance:d,point:lv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class cv extends zy{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class xx extends cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uv=new An,Wp=new _f,Xu=new ls,Wu=new Z;class qu extends ui{constructor(t=new $n,i=new xx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xu.copy(r.boundingSphere),Xu.applyMatrix4(l),Xu.radius+=c,t.ray.intersectsSphere(Xu)===!1)return;uv.copy(l).invert(),Wp.copy(t.ray).applyMatrix4(uv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=r.index,x=r.attributes.position;if(d!==null){const _=Math.max(0,f.start),y=Math.min(d.count,f.start+f.count);for(let E=_,w=y;E<w;E++){const M=d.getX(E);Wu.fromBufferAttribute(x,M),fv(Wu,M,m,l,t,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(x.count,f.start+f.count);for(let E=_,w=y;E<w;E++)Wu.fromBufferAttribute(x,E),fv(Wu,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function fv(s,t,i,r,l,c,f){const p=Wp.distanceSqToPoint(s);if(p<i){const m=new Z;Wp.closestPointToPoint(s,m),m.applyMatrix4(r);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Mx extends qn{constructor(t=[],i=Gs,r,l,c,f,p,m,d,g){super(t,i,r,l,c,f,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yi extends qn{constructor(t,i,r,l,c,f,p,m,d){super(t,i,r,l,c,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pc extends qn{constructor(t,i,r=Ka,l,c,f,p=yi,m=yi,d,g=Tr,x=1){if(g!==Tr&&g!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,c,f,p,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Hy extends pc{constructor(t,i=Ka,r=Gs,l,c,f=yi,p=yi,m,d=Tr){const g={width:t,height:t,depth:1},x=[g,g,g,g,g,g];super(t,t,i,r,l,c,f,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Sx extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _c extends $n{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],x=[];let _=0,y=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Li(d,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(x,2));function E(w,M,v,C,P,N,z,H,k,T,L){const ft=N/k,V=z/T,at=N/2,st=z/2,xt=H/2,it=k+1,F=T+1;let B=0,ht=0;const St=new Z;for(let D=0;D<F;D++){const Q=D*V-st;for(let ct=0;ct<it;ct++){const _t=ct*ft-at;St[w]=_t*C,St[M]=Q*P,St[v]=xt,d.push(St.x,St.y,St.z),St[w]=0,St[M]=0,St[v]=H>0?1:-1,g.push(St.x,St.y,St.z),x.push(ct/k),x.push(1-D/T),B+=1}}for(let D=0;D<T;D++)for(let Q=0;Q<k;Q++){const ct=_+Q+it*D,_t=_+Q+it*(D+1),qt=_+(Q+1)+it*(D+1),he=_+(Q+1)+it*D;m.push(ct,_t,he),m.push(_t,qt,he),ht+=6}p.addGroup(y,ht,L),y+=ht,_+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class vf extends $n{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,g=m+1,x=t/p,_=i/m,y=[],E=[],w=[],M=[];for(let v=0;v<g;v++){const C=v*_-f;for(let P=0;P<d;P++){const N=P*x-c;E.push(N,-C,0),w.push(0,0,1),M.push(P/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<p;C++){const P=C+d*v,N=C+d*(v+1),z=C+1+d*(v+1),H=C+1+d*v;y.push(P,N,H),y.push(N,z,H)}this.setIndex(y),this.setAttribute("position",new Li(E,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vf(t.width,t.height,t.widthSegments,t.heightSegments)}}class pf extends $n{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],d=[],g=[];let x=t;const _=(i-t)/l,y=new Z,E=new ze;for(let w=0;w<=l;w++){for(let M=0;M<=r;M++){const v=c+M/r*f;y.x=x*Math.cos(v),y.y=x*Math.sin(v),m.push(y.x,y.y,y.z),d.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,g.push(E.x,E.y)}x+=_}for(let w=0;w<l;w++){const M=w*(r+1);for(let v=0;v<r;v++){const C=v+M,P=C,N=C+r+1,z=C+r+2,H=C+1;p.push(P,N,H),p.push(N,z,H)}}this.setIndex(p),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(d,3)),this.setAttribute("uv",new Li(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rs extends $n{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+p,Math.PI);let d=0;const g=[],x=new Z,_=new Z,y=[],E=[],w=[],M=[];for(let v=0;v<=r;v++){const C=[],P=v/r;let N=0;v===0&&f===0?N=.5/i:v===r&&m===Math.PI&&(N=-.5/i);for(let z=0;z<=i;z++){const H=z/i;x.x=-t*Math.cos(l+H*c)*Math.sin(f+P*p),x.y=t*Math.cos(f+P*p),x.z=t*Math.sin(l+H*c)*Math.sin(f+P*p),E.push(x.x,x.y,x.z),_.copy(x).normalize(),w.push(_.x,_.y,_.z),M.push(H+N,1-P),C.push(d++)}g.push(C)}for(let v=0;v<r;v++)for(let C=0;C<i;C++){const P=g[v][C+1],N=g[v][C],z=g[v+1][C],H=g[v+1][C+1];(v!==0||f>0)&&y.push(P,N,H),(v!==r-1||m<Math.PI)&&y.push(N,z,H)}this.setIndex(y),this.setAttribute("position",new Li(E,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Zo(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zi(s){const t={};for(let i=0;i<s.length;i++){const r=Zo(s[i]);for(const l in r)t[l]=r[l]}return t}function Gy(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function yx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:sn.workingColorSpace}const Vy={clone:Zo,merge:zi};var ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ky,this.fragmentShader=Xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zo(t.uniforms),this.uniformsGroups=Gy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Wy extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hv extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hx,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qy extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yy extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(dv(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!dv(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function dv(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class jy{constructor(t,i,r){const l=this;let c=!1,f=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){p++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,p),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,p),f===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return d.push(g,x),this},this.removeHandler=function(g){const x=d.indexOf(g);return x!==-1&&d.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=d.length;x<_;x+=2){const y=d[x],E=d[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zy=new jy;class fm{constructor(t){this.manager=t!==void 0?t:Zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}fm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bo=new WeakMap;class Ky extends fm{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Wd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let x=Bo.get(f);x===void 0&&(x=[],Bo.set(f,x)),x.push({onLoad:i,onError:l})}return f}const p=hc("img");function m(){g(),i&&i(this);const x=Bo.get(this)||[];for(let _=0;_<x.length;_++){const y=x[_];y.onLoad&&y.onLoad(this)}Bo.delete(this),c.manager.itemEnd(t)}function d(x){g(),l&&l(x),Wd.remove(`image:${t}`);const _=Bo.get(this)||[];for(let y=0;y<_.length;y++){const E=_[y];E.onError&&E.onError(x)}Bo.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Wd.add(`image:${t}`,p),c.manager.itemStart(t),p.src=t,p}}class Qy extends fm{constructor(t){super(t)}load(t,i,r,l){const c=new qn,f=new Ky(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class Ex extends ui{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qd=new An,pv=new Z,mv=new Z;class Jy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=oa,this.map=null,this.mapPass=null,this.matrix=new An,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new um,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;pv.setFromMatrixPosition(t.matrixWorld),i.position.copy(pv),mv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(mv),i.updateMatrixWorld(),qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===fc||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yu=new Z,ju=new Qo,ka=new Z;class bx extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=Ya,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yu,ju,ka),ka.x===1&&ka.y===1&&ka.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yu,ju,ka.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Yu,ju,ka),ka.x===1&&ka.y===1&&ka.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yu,ju,ka.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new Z,gv=new ze,_v=new ze;class sa extends bx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=dc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,gv,_v),i.subVectors(_v,gv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(oc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/d,l*=f.width/m,r*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class $y extends Jy{constructor(){super(new sa(90,1,.5,500)),this.isPointLightShadow=!0}}class t1 extends Ex{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new $y}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Tx extends bx{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class e1 extends Ex{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const zo=-90,Ho=1;class n1 extends ui{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new sa(zo,Ho,t,i);l.layers=this.layers,this.add(l);const c=new sa(zo,Ho,t,i);c.layers=this.layers,this.add(c);const f=new sa(zo,Ho,t,i);f.layers=this.layers,this.add(f);const p=new sa(zo,Ho,t,i);p.layers=this.layers,this.add(p);const m=new sa(zo,Ho,t,i);m.layers=this.layers,this.add(m);const d=new sa(zo,Ho,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===Ya)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,g]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(x,_,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class i1 extends sa{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const vv=new An;class a1{constructor(t,i,r=0,l=1/0){this.ray=new _f(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new cm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):nn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return vv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vv),this}intersectObject(t,i=!0,r=[]){return qp(t,this,r,i),r.sort(xv),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)qp(t[l],this,r,i);return r.sort(xv),r}}function xv(s,t){return s.distance-t.distance}function qp(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,p=c.length;f<p;f++)qp(c[f],t,i,!0)}}function Mv(s,t,i,r){const l=r1(r);switch(i){case cx:return s*t;case fx:return s*t/l.components*l.byteLength;case nm:return s*t/l.components*l.byteLength;case Yo:return s*t*2/l.components*l.byteLength;case im:return s*t*2/l.components*l.byteLength;case ux:return s*t*3/l.components*l.byteLength;case Pa:return s*t*4/l.components*l.byteLength;case am:return s*t*4/l.components*l.byteLength;case ef:case nf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case af:case rf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hp:case pp:return Math.max(s,16)*Math.max(t,8)/4;case fp:case dp:return Math.max(s,8)*Math.max(t,8)/2;case mp:case gp:case vp:case xp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _p:case Mp:case Sp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ep:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Tp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ap:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Dp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Up:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Lp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Np:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Op:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ip:case Fp:case Bp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zp:case Hp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Gp:case Vp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function r1(s){switch(s){case oa:case rx:return{byteLength:1,components:1};case cc:case sx:case br:return{byteLength:2,components:1};case tm:case em:return{byteLength:2,components:4};case Ka:case $p:case qa:return{byteLength:4,components:1};case ox:case lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);function Ax(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function s1(s){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,x=d.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,d,g),p.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,d){const g=m.array,x=m.updateRanges;if(s.bindBuffer(d,p),x.length===0)s.bufferSubData(d,0,g);else{x.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<x.length;y++){const E=x[_],w=x[y];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++_,x[_]=w)}x.length=_+1;for(let y=0,E=x.length;y<E;y++){const w=x[y];s.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var o1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F1="gl_FragColor = linearToOutputTexel( gl_FragColor );",B1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ME=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ob=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,db=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ub=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:o1,alphahash_pars_fragment:l1,alphamap_fragment:c1,alphamap_pars_fragment:u1,alphatest_fragment:f1,alphatest_pars_fragment:h1,aomap_fragment:d1,aomap_pars_fragment:p1,batching_pars_vertex:m1,batching_vertex:g1,begin_vertex:_1,beginnormal_vertex:v1,bsdfs:x1,iridescence_fragment:M1,bumpmap_pars_fragment:S1,clipping_planes_fragment:y1,clipping_planes_pars_fragment:E1,clipping_planes_pars_vertex:b1,clipping_planes_vertex:T1,color_fragment:A1,color_pars_fragment:R1,color_pars_vertex:w1,color_vertex:C1,common:D1,cube_uv_reflection_fragment:U1,defaultnormal_vertex:L1,displacementmap_pars_vertex:N1,displacementmap_vertex:P1,emissivemap_fragment:O1,emissivemap_pars_fragment:I1,colorspace_fragment:F1,colorspace_pars_fragment:B1,envmap_fragment:z1,envmap_common_pars_fragment:H1,envmap_pars_fragment:G1,envmap_pars_vertex:V1,envmap_physical_pars_fragment:$1,envmap_vertex:k1,fog_vertex:X1,fog_pars_vertex:W1,fog_fragment:q1,fog_pars_fragment:Y1,gradientmap_pars_fragment:j1,lightmap_pars_fragment:Z1,lights_lambert_fragment:K1,lights_lambert_pars_fragment:Q1,lights_pars_begin:J1,lights_toon_fragment:tE,lights_toon_pars_fragment:eE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:aE,lights_physical_pars_fragment:rE,lights_fragment_begin:sE,lights_fragment_maps:oE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:hE,map_fragment:dE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:ME,morphnormal_vertex:SE,morphtarget_pars_vertex:yE,morphtarget_vertex:EE,normal_fragment_begin:bE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:RE,normal_vertex:wE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:NE,opaque_fragment:PE,packing:OE,premultiplied_alpha_fragment:IE,project_vertex:FE,dithering_fragment:BE,dithering_pars_fragment:zE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:XE,shadowmask_pars_fragment:WE,skinbase_vertex:qE,skinning_pars_vertex:YE,skinning_vertex:jE,skinnormal_vertex:ZE,specularmap_fragment:KE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:$E,transmission_fragment:tb,transmission_pars_fragment:eb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:ab,worldpos_vertex:rb,background_vert:sb,background_frag:ob,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:fb,depth_vert:hb,depth_frag:db,distance_vert:pb,distance_frag:mb,equirect_vert:gb,equirect_frag:_b,linedashed_vert:vb,linedashed_frag:xb,meshbasic_vert:Mb,meshbasic_frag:Sb,meshlambert_vert:yb,meshlambert_frag:Eb,meshmatcap_vert:bb,meshmatcap_frag:Tb,meshnormal_vert:Ab,meshnormal_frag:Rb,meshphong_vert:wb,meshphong_frag:Cb,meshphysical_vert:Db,meshphysical_frag:Ub,meshtoon_vert:Lb,meshtoon_frag:Nb,points_vert:Pb,points_frag:Ob,shadow_vert:Ib,shadow_frag:Fb,sprite_vert:Bb,sprite_frag:zb},Qt={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Wa={basic:{uniforms:zi([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:zi([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:zi([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:zi([Qt.common,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.roughnessmap,Qt.metalnessmap,Qt.fog,Qt.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:zi([Qt.common,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.gradientmap,Qt.fog,Qt.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:zi([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:zi([Qt.points,Qt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:zi([Qt.common,Qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:zi([Qt.common,Qt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:zi([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:zi([Qt.sprite,Qt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:zi([Qt.common,Qt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:zi([Qt.lights,Qt.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Wa.physical={uniforms:zi([Wa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Zu={r:0,b:0,g:0},Ns=new Qa,Hb=new An;function Gb(s,t,i,r,l,c){const f=new Ye(0);let p=l===!0?0:1,m,d,g=null,x=0,_=null;function y(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const N=C.backgroundBlurriness>0;P=t.get(P,N)}return P}function E(C){let P=!1;const N=y(C);N===null?M(f,p):N&&N.isColor&&(M(N,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(C,P){const N=y(P);N&&(N.isCubeTexture||N.mapping===gf)?(d===void 0&&(d=new Si(new _c(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Zo(Wa.backgroundCube.uniforms),vertexShader:Wa.backgroundCube.vertexShader,fragmentShader:Wa.backgroundCube.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,H,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ns.copy(P.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(Ns)),d.material.toneMapped=sn.getTransfer(N.colorSpace)!==pn,(g!==N||x!==N.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,g=N,x=N.version,_=s.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Si(new vf(2,2),new Hi({name:"BackgroundMaterial",uniforms:Zo(Wa.background.uniforms),vertexShader:Wa.background.vertexShader,fragmentShader:Wa.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=sn.getTransfer(N.colorSpace)!==pn,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||x!==N.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,g=N,x=N.version,_=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,P){C.getRGB(Zu,yx(s)),i.buffers.color.setClear(Zu.r,Zu.g,Zu.b,P,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,P=1){f.set(C),p=P,M(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(f,p)},render:E,addToRenderList:w,dispose:v}}function Vb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,f=!1;function p(V,at,st,xt,it){let F=!1;const B=x(V,xt,st,at);c!==B&&(c=B,d(c.object)),F=y(V,xt,st,it),F&&E(V,xt,st,it),it!==null&&t.update(it,s.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,N(V,at,st,xt),it!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function m(){return s.createVertexArray()}function d(V){return s.bindVertexArray(V)}function g(V){return s.deleteVertexArray(V)}function x(V,at,st,xt){const it=xt.wireframe===!0;let F=r[at.id];F===void 0&&(F={},r[at.id]=F);const B=V.isInstancedMesh===!0?V.id:0;let ht=F[B];ht===void 0&&(ht={},F[B]=ht);let St=ht[st.id];St===void 0&&(St={},ht[st.id]=St);let D=St[it];return D===void 0&&(D=_(m()),St[it]=D),D}function _(V){const at=[],st=[],xt=[];for(let it=0;it<i;it++)at[it]=0,st[it]=0,xt[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:st,attributeDivisors:xt,object:V,attributes:{},index:null}}function y(V,at,st,xt){const it=c.attributes,F=at.attributes;let B=0;const ht=st.getAttributes();for(const St in ht)if(ht[St].location>=0){const Q=it[St];let ct=F[St];if(ct===void 0&&(St==="instanceMatrix"&&V.instanceMatrix&&(ct=V.instanceMatrix),St==="instanceColor"&&V.instanceColor&&(ct=V.instanceColor)),Q===void 0||Q.attribute!==ct||ct&&Q.data!==ct.data)return!0;B++}return c.attributesNum!==B||c.index!==xt}function E(V,at,st,xt){const it={},F=at.attributes;let B=0;const ht=st.getAttributes();for(const St in ht)if(ht[St].location>=0){let Q=F[St];Q===void 0&&(St==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),St==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor));const ct={};ct.attribute=Q,Q&&Q.data&&(ct.data=Q.data),it[St]=ct,B++}c.attributes=it,c.attributesNum=B,c.index=xt}function w(){const V=c.newAttributes;for(let at=0,st=V.length;at<st;at++)V[at]=0}function M(V){v(V,0)}function v(V,at){const st=c.newAttributes,xt=c.enabledAttributes,it=c.attributeDivisors;st[V]=1,xt[V]===0&&(s.enableVertexAttribArray(V),xt[V]=1),it[V]!==at&&(s.vertexAttribDivisor(V,at),it[V]=at)}function C(){const V=c.newAttributes,at=c.enabledAttributes;for(let st=0,xt=at.length;st<xt;st++)at[st]!==V[st]&&(s.disableVertexAttribArray(st),at[st]=0)}function P(V,at,st,xt,it,F,B){B===!0?s.vertexAttribIPointer(V,at,st,it,F):s.vertexAttribPointer(V,at,st,xt,it,F)}function N(V,at,st,xt){w();const it=xt.attributes,F=st.getAttributes(),B=at.defaultAttributeValues;for(const ht in F){const St=F[ht];if(St.location>=0){let D=it[ht];if(D===void 0&&(ht==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),ht==="instanceColor"&&V.instanceColor&&(D=V.instanceColor)),D!==void 0){const Q=D.normalized,ct=D.itemSize,_t=t.get(D);if(_t===void 0)continue;const qt=_t.buffer,he=_t.type,tt=_t.bytesPerElement,Ct=he===s.INT||he===s.UNSIGNED_INT||D.gpuType===$p;if(D.isInterleavedBufferAttribute){const gt=D.data,Me=gt.stride,ve=D.offset;if(gt.isInstancedInterleavedBuffer){for(let xe=0;xe<St.locationSize;xe++)v(St.location+xe,gt.meshPerAttribute);V.isInstancedMesh!==!0&&xt._maxInstanceCount===void 0&&(xt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let xe=0;xe<St.locationSize;xe++)M(St.location+xe);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let xe=0;xe<St.locationSize;xe++)P(St.location+xe,ct/St.locationSize,he,Q,Me*tt,(ve+ct/St.locationSize*xe)*tt,Ct)}else{if(D.isInstancedBufferAttribute){for(let gt=0;gt<St.locationSize;gt++)v(St.location+gt,D.meshPerAttribute);V.isInstancedMesh!==!0&&xt._maxInstanceCount===void 0&&(xt._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let gt=0;gt<St.locationSize;gt++)M(St.location+gt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let gt=0;gt<St.locationSize;gt++)P(St.location+gt,ct/St.locationSize,he,Q,ct*tt,ct/St.locationSize*gt*tt,Ct)}}else if(B!==void 0){const Q=B[ht];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(St.location,Q);break;case 3:s.vertexAttrib3fv(St.location,Q);break;case 4:s.vertexAttrib4fv(St.location,Q);break;default:s.vertexAttrib1fv(St.location,Q)}}}}C()}function z(){L();for(const V in r){const at=r[V];for(const st in at){const xt=at[st];for(const it in xt){const F=xt[it];for(const B in F)g(F[B].object),delete F[B];delete xt[it]}}delete r[V]}}function H(V){if(r[V.id]===void 0)return;const at=r[V.id];for(const st in at){const xt=at[st];for(const it in xt){const F=xt[it];for(const B in F)g(F[B].object),delete F[B];delete xt[it]}}delete r[V.id]}function k(V){for(const at in r){const st=r[at];for(const xt in st){const it=st[xt];if(it[V.id]===void 0)continue;const F=it[V.id];for(const B in F)g(F[B].object),delete F[B];delete it[V.id]}}}function T(V){for(const at in r){const st=r[at],xt=V.isInstancedMesh===!0?V.id:0,it=st[xt];if(it!==void 0){for(const F in it){const B=it[F];for(const ht in B)g(B[ht].object),delete B[ht];delete it[F]}delete st[xt],Object.keys(st).length===0&&delete r[at]}}}function L(){ft(),f=!0,c!==l&&(c=l,d(c.object))}function ft(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:ft,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function kb(s,t,i){let r;function l(d){r=d}function c(d,g){s.drawArrays(r,d,g),i.update(g,r,1)}function f(d,g,x){x!==0&&(s.drawArraysInstanced(r,d,g,x),i.update(g,r,x))}function p(d,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];i.update(y,r,1)}function m(d,g,x,_){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)f(d[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(r,d,0,g,0,_,0,x);let E=0;for(let w=0;w<x;w++)E+=g[w]*_[w];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Xb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==Pa&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const T=k===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==oa&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==qa&&!T)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(Ce("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),H=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:N,maxSamples:z,samples:H}}function Wb(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Os,p=new Oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||r!==0||l;return l=_,r=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,y){const E=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,v=s.get(x);if(!l||E===null||E.length===0||c&&!M)c?g(null):d();else{const C=c?0:r,P=C*4;let N=v.clippingState||null;m.value=N,N=g(E,_,P,y);for(let z=0;z!==P;++z)N[z]=i[z];v.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,_,y,E){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const v=y+w*4,C=_.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<v)&&(M=new Float32Array(v));for(let P=0,N=y;P!==w;++P,N+=4)f.copy(x[P]).applyMatrix4(C,p),f.normal.toArray(M,N),M[N+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const os=4,Sv=[.125,.215,.35,.446,.526,.582],Fs=20,qb=256,tc=new Tx,yv=new Ye;let Yd=null,jd=0,Zd=0,Kd=!1;const Yb=new Z;class Ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=Yb}=c;Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yd,jd,Zd),this._renderer.xr.enabled=Kd,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===qo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:br,format:Pa,colorSpace:jo,depthBuffer:!1},l=bv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jb(c)),this._blurMaterial=Kb(c,t,i),this._ggxMaterial=Zb(c,t,i)}return l}_compileMaterial(t){const i=new Si(new $n,t);this._renderer.compile(i,tc)}_sceneToCubeUV(t,i,r,l,c){const m=new sa(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(yv),x.toneMapping=ja,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new _c,new ko({name:"PMREM.Background",side:Gi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let v=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,v=!0):(M.color.copy(yv),v=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):N===1?(m.up.set(0,0,d[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const z=this._cubeSize;Go(l,N*z,P>2?z:0,z,z),x.setRenderTarget(l),v&&x.render(w,m),x.render(t,m)}x.toneMapping=y,x.autoClear=_,t.background=C}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Gs||t.mapping===qo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Go(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,tc)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-g*g),_=0+d*1.25,y=x*_,{_lodMax:E}=this,w=this._sizeLods[r],M=3*w*(r>E-os?r-E+os:0),v=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Go(c,M,v,3*w,2*w),l.setRenderTarget(c),l.render(p,tc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Go(t,M,v,3*w,2*w),l.setRenderTarget(t),l.render(p,tc)}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=d;const _=d.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Fs-1),w=c/E,M=isFinite(c)?1+Math.floor(g*w):Fs;M>Fs&&Ce(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Fs}`);const v=[];let C=0;for(let k=0;k<Fs;++k){const T=k/w,L=Math.exp(-T*T/2);v.push(L),k===0?C+=L:k<M&&(C+=2*L)}for(let k=0;k<v.length;k++)v[k]=v[k]/C;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-r;const N=this._sizeLods[l],z=3*N*(l>P-os?l-P+os:0),H=4*(this._cubeSize-N);Go(i,z,H,3*N,2*N),m.setRenderTarget(i),m.render(x,tc)}}function jb(s){const t=[],i=[],r=[];let l=s;const c=s-os+1+Sv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>s-os?m=Sv[f-s+os-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,x=1+d,_=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,w=3,M=2,v=1,C=new Float32Array(w*E*y),P=new Float32Array(M*E*y),N=new Float32Array(v*E*y);for(let H=0;H<y;H++){const k=H%3*2/3-1,T=H>2?0:-1,L=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];C.set(L,w*E*H),P.set(_,M*E*H);const ft=[H,H,H,H,H,H];N.set(ft,v*E*H)}const z=new $n;z.setAttribute("position",new Jn(C,w)),z.setAttribute("uv",new Jn(P,M)),z.setAttribute("faceIndex",new Jn(N,v)),r.push(new Si(z,null)),l>os&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function bv(s,t,i){const r=new Za(s,t,i);return r.texture.mapping=gf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Go(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function Zb(s,t,i){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Kb(s,t,i){const r=new Float32Array(Fs),l=new Z(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Tv(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Av(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rx extends Za{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Mx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new _c(5,5,5),c=new Hi({name:"CubemapFromEquirect",uniforms:Zo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gi,blending:Mr});c.uniforms.tEquirect.value=i;const f=new Si(l,c),p=i.minFilter;return i.minFilter===Bs&&(i.minFilter=Ui),new n1(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}function Qb(s){let t=new WeakMap,i=new WeakMap,r=null;function l(_,y=!1){return _==null?null:y?f(_):c(_)}function c(_){if(_&&_.isTexture){const y=_.mapping;if(y===vd||y===xd)if(t.has(_)){const E=t.get(_).texture;return p(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const w=new Rx(E.height);return w.fromEquirectangularTexture(s,_),t.set(_,w),_.addEventListener("dispose",d),p(w.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const y=_.mapping,E=y===vd||y===xd,w=y===Gs||y===qo;if(E||w){let M=i.get(_);const v=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return r===null&&(r=new Ev(s)),M=E?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const C=_.image;return E&&C&&C.height>0||w&&C&&m(C)?(r===null&&(r=new Ev(s)),M=E?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",g),M.texture):null}}}return _}function p(_,y){return y===vd?_.mapping=Gs:y===xd&&(_.mapping=qo),_}function m(_){let y=0;const E=6;for(let w=0;w<E;w++)_[w]!==void 0&&y++;return y===E}function d(_){const y=_.target;y.removeEventListener("dispose",d);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function g(_){const y=_.target;y.removeEventListener("dispose",g);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function x(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function Jb(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&uf("WebGLRenderer: "+r+" extension not supported."),l}}}function $b(s,t,i,r){const l={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const y in _)t.update(_[y],s.ARRAY_BUFFER)}function d(x){const _=[],y=x.index,E=x.attributes.position;let w=0;if(E===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let P=0,N=C.length;P<N;P+=3){const z=C[P+0],H=C[P+1],k=C[P+2];_.push(z,H,H,k,k,z)}}else{const C=E.array;w=E.version;for(let P=0,N=C.length/3-1;P<N;P+=3){const z=P+0,H=P+1,k=P+2;_.push(z,H,H,k,k,z)}}const M=new(E.count>=65535?_x:gx)(_,1);M.version=w;const v=c.get(x);v&&t.remove(v),c.set(x,M)}function g(x){const _=c.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:g}}function tT(s,t,i){let r;function l(_){r=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,y){s.drawElements(r,y,c,_*f),i.update(y,r,1)}function d(_,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,_*f,E),i.update(y,r,E))}function g(_,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,r,1)}function x(_,y,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)d(_[v]/f,y[v],w[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,w,0,E);let v=0;for(let C=0;C<E;C++)v+=y[C]*w[C];i.update(v,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function eT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:nn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function nT(s,t,i){const r=new WeakMap,l=new Gn;function c(f,p,m){const d=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(p);if(_===void 0||_.count!==x){let ft=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",ft)};var y=ft;_!==void 0&&_.texture.dispose();const E=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;E===!0&&(N=1),w===!0&&(N=2),M===!0&&(N=3);let z=p.attributes.position.count*N,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const k=new Float32Array(z*H*4*x),T=new px(k,z,H,x);T.type=qa,T.needsUpdate=!0;const L=N*4;for(let V=0;V<x;V++){const at=v[V],st=C[V],xt=P[V],it=z*H*4*V;for(let F=0;F<at.count;F++){const B=F*L;E===!0&&(l.fromBufferAttribute(at,F),k[it+B+0]=l.x,k[it+B+1]=l.y,k[it+B+2]=l.z,k[it+B+3]=0),w===!0&&(l.fromBufferAttribute(st,F),k[it+B+4]=l.x,k[it+B+5]=l.y,k[it+B+6]=l.z,k[it+B+7]=0),M===!0&&(l.fromBufferAttribute(xt,F),k[it+B+8]=l.x,k[it+B+9]=l.y,k[it+B+10]=l.z,k[it+B+11]=xt.itemSize===4?l.w:1)}}_={count:x,texture:T,size:new ze(z,H)},r.set(p,_),p.addEventListener("dispose",ft)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<d.length;M++)E+=d[M];const w=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function iT(s,t,i,r,l){let c=new WeakMap;function f(d){const g=l.render.frame,x=d.geometry,_=t.get(d,x);if(c.get(_)!==g&&(t.update(_),c.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return _}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const aT={[Jv]:"LINEAR_TONE_MAPPING",[$v]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[Jp]:"ACES_FILMIC_TONE_MAPPING",[nx]:"AGX_TONE_MAPPING",[ix]:"NEUTRAL_TONE_MAPPING",[ex]:"CUSTOM_TONE_MAPPING"};function rT(s,t,i,r,l){const c=new Za(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Za(t,i,{type:br,depthBuffer:!1,stencilBuffer:!1}),p=new $n;p.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Li([0,2,0,0,2,0],2));const m=new Wy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Si(p,m),g=new Tx(-1,1,1,-1,0,1);let x=null,_=null,y=!1,E,w=null,M=[],v=!1;this.setSize=function(C,P){c.setSize(C,P),f.setSize(C,P);for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(C,P)}},this.setEffects=function(C){M=C,v=M.length>0&&M[0].isRenderPass===!0;const P=c.width,N=c.height;for(let z=0;z<M.length;z++){const H=M[z];H.setSize&&H.setSize(P,N)}},this.begin=function(C,P){if(y||C.toneMapping===ja&&M.length===0)return!1;if(w=P,P!==null){const N=P.width,z=P.height;(c.width!==N||c.height!==z)&&this.setSize(N,z)}return v===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=ja,!0},this.hasRenderPass=function(){return v},this.end=function(C,P){C.toneMapping=E,y=!0;let N=c,z=f;for(let H=0;H<M.length;H++){const k=M[H];if(k.enabled!==!1&&(k.render(C,z,N,P),k.needsSwap!==!1)){const T=N;N=z,z=T}}if(x!==C.outputColorSpace||_!==C.toneMapping){x=C.outputColorSpace,_=C.toneMapping,m.defines={},sn.getTransfer(x)===pn&&(m.defines.SRGB_TRANSFER="");const H=aT[_];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(w),C.render(d,g),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const wx=new qn,Yp=new pc(1,1),Cx=new px,Dx=new My,Ux=new Mx,Rv=[],wv=[],Cv=new Float32Array(16),Dv=new Float32Array(9),Uv=new Float32Array(4);function Jo(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Rv[l];if(c===void 0&&(c=new Float32Array(l),Rv[l]=c),t!==0){r.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,s[f].toArray(c,p)}return c}function ni(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function ii(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Mf(s,t){let i=wv[t];i===void 0&&(i=new Int32Array(t),wv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function sT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function oT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ni(i,t))return;s.uniform2fv(this.addr,t),ii(i,t)}}function lT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ni(i,t))return;s.uniform3fv(this.addr,t),ii(i,t)}}function cT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ni(i,t))return;s.uniform4fv(this.addr,t),ii(i,t)}}function uT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(ni(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),ii(i,t)}else{if(ni(i,r))return;Uv.set(r),s.uniformMatrix2fv(this.addr,!1,Uv),ii(i,r)}}function fT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(ni(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),ii(i,t)}else{if(ni(i,r))return;Dv.set(r),s.uniformMatrix3fv(this.addr,!1,Dv),ii(i,r)}}function hT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(ni(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),ii(i,t)}else{if(ni(i,r))return;Cv.set(r),s.uniformMatrix4fv(this.addr,!1,Cv),ii(i,r)}}function dT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function pT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ni(i,t))return;s.uniform2iv(this.addr,t),ii(i,t)}}function mT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ni(i,t))return;s.uniform3iv(this.addr,t),ii(i,t)}}function gT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ni(i,t))return;s.uniform4iv(this.addr,t),ii(i,t)}}function _T(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function vT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ni(i,t))return;s.uniform2uiv(this.addr,t),ii(i,t)}}function xT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ni(i,t))return;s.uniform3uiv(this.addr,t),ii(i,t)}}function MT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ni(i,t))return;s.uniform4uiv(this.addr,t),ii(i,t)}}function ST(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Yp.compareFunction=i.isReversedDepthBuffer()?sm:rm,c=Yp):c=wx,i.setTexture2D(t||c,l)}function yT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Dx,l)}function ET(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Ux,l)}function bT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Cx,l)}function TT(s){switch(s){case 5126:return sT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return hT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return bT}}function AT(s,t){s.uniform1fv(this.addr,t)}function RT(s,t){const i=Jo(t,this.size,2);s.uniform2fv(this.addr,i)}function wT(s,t){const i=Jo(t,this.size,3);s.uniform3fv(this.addr,i)}function CT(s,t){const i=Jo(t,this.size,4);s.uniform4fv(this.addr,i)}function DT(s,t){const i=Jo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function UT(s,t){const i=Jo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function LT(s,t){const i=Jo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function NT(s,t){s.uniform1iv(this.addr,t)}function PT(s,t){s.uniform2iv(this.addr,t)}function OT(s,t){s.uniform3iv(this.addr,t)}function IT(s,t){s.uniform4iv(this.addr,t)}function FT(s,t){s.uniform1uiv(this.addr,t)}function BT(s,t){s.uniform2uiv(this.addr,t)}function zT(s,t){s.uniform3uiv(this.addr,t)}function HT(s,t){s.uniform4uiv(this.addr,t)}function GT(s,t,i){const r=this.cache,l=t.length,c=Mf(i,l);ni(r,c)||(s.uniform1iv(this.addr,c),ii(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Yp:f=wx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function VT(s,t,i){const r=this.cache,l=t.length,c=Mf(i,l);ni(r,c)||(s.uniform1iv(this.addr,c),ii(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Dx,c[f])}function kT(s,t,i){const r=this.cache,l=t.length,c=Mf(i,l);ni(r,c)||(s.uniform1iv(this.addr,c),ii(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ux,c[f])}function XT(s,t,i){const r=this.cache,l=t.length,c=Mf(i,l);ni(r,c)||(s.uniform1iv(this.addr,c),ii(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Cx,c[f])}function WT(s){switch(s){case 5126:return AT;case 35664:return RT;case 35665:return wT;case 35666:return CT;case 35674:return DT;case 35675:return UT;case 35676:return LT;case 5124:case 35670:return NT;case 35667:case 35671:return PT;case 35668:case 35672:return OT;case 35669:case 35673:return IT;case 5125:return FT;case 36294:return BT;case 36295:return zT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return XT}}class qT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=TT(i.type)}}class YT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WT(i.type)}}class jT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const Qd=/(\w+)(\])?(\[|\.)?/g;function Lv(s,t){s.seq.push(t),s.map[t.id]=t}function ZT(s,t,i){const r=s.name,l=r.length;for(Qd.lastIndex=0;;){const c=Qd.exec(r),f=Qd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Lv(i,d===void 0?new qT(p,s,t):new YT(p,s,t));break}else{let x=i.map[p];x===void 0&&(x=new jT(p),Lv(i,x)),i=x}}}class of{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);ZT(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Nv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const KT=37297;let QT=0;function JT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const Pv=new Oe;function $T(s){sn._getMatrix(Pv,sn.workingColorSpace,s);const t=`mat3( ${Pv.elements.map(i=>i.toFixed(4))} )`;switch(sn.getTransfer(s)){case lf:return[t,"LinearTransferOETF"];case pn:return[t,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ov(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+JT(s.getShaderSource(t),p)}else return c}function t2(s,t){const i=$T(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const e2={[Jv]:"Linear",[$v]:"Reinhard",[tx]:"Cineon",[Jp]:"ACESFilmic",[nx]:"AgX",[ix]:"Neutral",[ex]:"Custom"};function n2(s,t){const i=e2[t];return i===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ku=new Z;function i2(){sn.getLuminanceCoefficients(Ku);const s=Ku.x.toFixed(4),t=Ku.y.toFixed(4),i=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rc).join(`
`)}function r2(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function s2(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:p}}return i}function rc(s){return s!==""}function Iv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o2=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(s){return s.replace(o2,c2)}const l2=new Map;function c2(s,t){let i=Be[t];if(i===void 0){const r=l2.get(t);if(r!==void 0)i=Be[r],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return jp(i)}const u2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bv(s){return s.replace(u2,f2)}function f2(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const h2={[tf]:"SHADOWMAP_TYPE_PCF",[ic]:"SHADOWMAP_TYPE_VSM"};function d2(s){return h2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p2={[Gs]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE",[gf]:"ENVMAP_TYPE_CUBE_UV"};function m2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":p2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const g2={[qo]:"ENVMAP_MODE_REFRACTION"};function _2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":g2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const v2={[Qv]:"ENVMAP_BLENDING_MULTIPLY",[FS]:"ENVMAP_BLENDING_MIX",[BS]:"ENVMAP_BLENDING_ADD"};function x2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":v2[s.combine]||"ENVMAP_BLENDING_NONE"}function M2(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function S2(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=d2(i),d=m2(i),g=_2(i),x=x2(i),_=M2(i),y=a2(i),E=r2(c),w=l.createProgram();let M,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(rc).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(rc).join(`
`),v.length>0&&(v+=`
`)):(M=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rc).join(`
`),v=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?Be.tonemapping_pars_fragment:"",i.toneMapping!==ja?n2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,t2("linearToOutputTexel",i.outputColorSpace),i2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rc).join(`
`)),f=jp(f),f=Iv(f,i),f=Fv(f,i),p=jp(p),p=Iv(p,i),p=Fv(p,i),f=Bv(f),p=Bv(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===G_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=C+M+f,N=C+v+p,z=Nv(l,l.VERTEX_SHADER,P),H=Nv(l,l.FRAGMENT_SHADER,N);l.attachShader(w,z),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function k(V){if(s.debug.checkShaderErrors){const at=l.getProgramInfoLog(w)||"",st=l.getShaderInfoLog(z)||"",xt=l.getShaderInfoLog(H)||"",it=at.trim(),F=st.trim(),B=xt.trim();let ht=!0,St=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,z,H);else{const D=Ov(l,z,"vertex"),Q=Ov(l,H,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+it+`
`+D+`
`+Q)}else it!==""?Ce("WebGLProgram: Program Info Log:",it):(F===""||B==="")&&(St=!1);St&&(V.diagnostics={runnable:ht,programLog:it,vertexShader:{log:F,prefix:M},fragmentShader:{log:B,prefix:v}})}l.deleteShader(z),l.deleteShader(H),T=new of(l,w),L=s2(l,w)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let ft=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ft===!1&&(ft=l.getProgramParameter(w,KT)),ft},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=H,this}let y2=0;class E2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new b2(t),i.set(t,r)),r}}class b2{constructor(t){this.id=y2++,this.code=t,this.usedTimes=0}}function T2(s,t,i,r,l,c){const f=new cm,p=new E2,m=new Set,d=[],g=new Map,x=r.logarithmicDepthBuffer;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,ft,V,at){const st=V.fog,xt=at.geometry,it=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||it,F),ht=B&&B.mapping===gf?B.image.height:null,St=y[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&Ce("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const D=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,Q=D!==void 0?D.length:0;let ct=0;xt.morphAttributes.position!==void 0&&(ct=1),xt.morphAttributes.normal!==void 0&&(ct=2),xt.morphAttributes.color!==void 0&&(ct=3);let _t,qt,he,tt;if(St){const Ze=Wa[St];_t=Ze.vertexShader,qt=Ze.fragmentShader}else _t=T.vertexShader,qt=T.fragmentShader,p.update(T),he=p.getVertexShaderID(T),tt=p.getFragmentShaderID(T);const Ct=s.getRenderTarget(),gt=s.state.buffers.depth.getReversed(),Me=at.isInstancedMesh===!0,ve=at.isBatchedMesh===!0,xe=!!T.map,Rn=!!T.matcap,Ue=!!B,je=!!T.aoMap,Xe=!!T.lightMap,me=!!T.bumpMap,Ve=!!T.normalMap,X=!!T.displacementMap,En=!!T.emissiveMap,Je=!!T.metalnessMap,an=!!T.roughnessMap,oe=T.anisotropy>0,O=T.clearcoat>0,b=T.dispersion>0,K=T.iridescence>0,yt=T.sheen>0,Tt=T.transmission>0,vt=oe&&!!T.anisotropyMap,jt=O&&!!T.clearcoatMap,Ht=O&&!!T.clearcoatNormalMap,pe=O&&!!T.clearcoatRoughnessMap,ye=K&&!!T.iridescenceMap,Ut=K&&!!T.iridescenceThicknessMap,Ot=yt&&!!T.sheenColorMap,ee=yt&&!!T.sheenRoughnessMap,ie=!!T.specularMap,Zt=!!T.specularColorMap,De=!!T.specularIntensityMap,W=Tt&&!!T.transmissionMap,zt=Tt&&!!T.thicknessMap,It=!!T.gradientMap,te=!!T.alphaMap,Nt=T.alphaTest>0,Mt=!!T.alphaHash,se=!!T.extensions;let Se=ja;T.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Ie={shaderID:St,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:qt,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:ve,batchingColor:ve&&at._colorsTexture!==null,instancing:Me,instancingColor:Me&&at.instanceColor!==null,instancingMorph:Me&&at.morphTexture!==null,outputColorSpace:Ct===null?s.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:jo,alphaToCoverage:!!T.alphaToCoverage,map:xe,matcap:Rn,envMap:Ue,envMapMode:Ue&&B.mapping,envMapCubeUVHeight:ht,aoMap:je,lightMap:Xe,bumpMap:me,normalMap:Ve,displacementMap:X,emissiveMap:En,normalMapObjectSpace:Ve&&T.normalMapType===GS,normalMapTangentSpace:Ve&&T.normalMapType===hx,metalnessMap:Je,roughnessMap:an,anisotropy:oe,anisotropyMap:vt,clearcoat:O,clearcoatMap:jt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:pe,dispersion:b,iridescence:K,iridescenceMap:ye,iridescenceThicknessMap:Ut,sheen:yt,sheenColorMap:Ot,sheenRoughnessMap:ee,specularMap:ie,specularColorMap:Zt,specularIntensityMap:De,transmission:Tt,transmissionMap:W,thicknessMap:zt,gradientMap:It,opaque:T.transparent===!1&&T.blending===Hs&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:Nt,alphaHash:Mt,combine:T.combine,mapUv:xe&&E(T.map.channel),aoMapUv:je&&E(T.aoMap.channel),lightMapUv:Xe&&E(T.lightMap.channel),bumpMapUv:me&&E(T.bumpMap.channel),normalMapUv:Ve&&E(T.normalMap.channel),displacementMapUv:X&&E(T.displacementMap.channel),emissiveMapUv:En&&E(T.emissiveMap.channel),metalnessMapUv:Je&&E(T.metalnessMap.channel),roughnessMapUv:an&&E(T.roughnessMap.channel),anisotropyMapUv:vt&&E(T.anisotropyMap.channel),clearcoatMapUv:jt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:ee&&E(T.sheenRoughnessMap.channel),specularMapUv:ie&&E(T.specularMap.channel),specularColorMapUv:Zt&&E(T.specularColorMap.channel),specularIntensityMapUv:De&&E(T.specularIntensityMap.channel),transmissionMapUv:W&&E(T.transmissionMap.channel),thicknessMapUv:zt&&E(T.thicknessMap.channel),alphaMapUv:te&&E(T.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(Ve||oe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!xt.attributes.uv&&(xe||te),fog:!!st,useFog:T.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||xt.attributes.normal===void 0&&Ve===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:gt,skinning:at.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ct,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&ft.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:xe&&T.map.isVideoTexture===!0&&sn.getTransfer(T.map.colorSpace)===pn,decodeVideoTextureEmissive:En&&T.emissiveMap.isVideoTexture===!0&&sn.getTransfer(T.emissiveMap.colorSpace)===pn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===La,flipSided:T.side===Gi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:se&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&T.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ft in T.defines)L.push(ft),L.push(T.defines[ft]);return T.isRawShaderMaterial===!1&&(v(L,T),C(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function v(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function P(T){const L=y[T.type];let ft;if(L){const V=Wa[L];ft=Vy.clone(V.uniforms)}else ft=T.uniforms;return ft}function N(T,L){let ft=g.get(L);return ft!==void 0?++ft.usedTimes:(ft=new S2(s,L,T,l),d.push(ft),g.set(L,ft)),ft}function z(T){if(--T.usedTimes===0){const L=d.indexOf(T);d[L]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function H(T){p.remove(T)}function k(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:z,releaseShaderCache:H,programs:d,dispose:k}}function A2(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function R2(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Hv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function p(_,y,E,w,M,v){let C=s[t];return C===void 0?(C={id:_.id,object:_,geometry:y,material:E,materialVariant:f(_),groupOrder:w,renderOrder:_.renderOrder,z:M,group:v},s[t]=C):(C.id=_.id,C.object=_,C.geometry=y,C.material=E,C.materialVariant=f(_),C.groupOrder=w,C.renderOrder=_.renderOrder,C.z=M,C.group=v),t++,C}function m(_,y,E,w,M,v){const C=p(_,y,E,w,M,v);E.transmission>0?r.push(C):E.transparent===!0?l.push(C):i.push(C)}function d(_,y,E,w,M,v){const C=p(_,y,E,w,M,v);E.transmission>0?r.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function g(_,y){i.length>1&&i.sort(_||R2),r.length>1&&r.sort(y||Hv),l.length>1&&l.sort(y||Hv)}function x(){for(let _=t,y=s.length;_<y;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:d,finish:x,sort:g}}function w2(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Gv,s.set(r,[f])):l>=c.length?(f=new Gv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function C2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Ye};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":i={color:new Ye,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[t.id]=i,i}}}function D2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let U2=0;function L2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function N2(s){const t=new C2,i=D2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new Z);const l=new Z,c=new An,f=new An;function p(d){let g=0,x=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,E=0,w=0,M=0,v=0,C=0,P=0,N=0,z=0,H=0,k=0;d.sort(L2);for(let L=0,ft=d.length;L<ft;L++){const V=d[L],at=V.color,st=V.intensity,xt=V.distance;let it=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Yo?it=V.shadow.map.texture:it=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=at.r*st,x+=at.g*st,_+=at.b*st;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],st);k++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,ht=i.get(V);ht.shadowIntensity=B.intensity,ht.shadowBias=B.bias,ht.shadowNormalBias=B.normalBias,ht.shadowRadius=B.radius,ht.shadowMapSize=B.mapSize,r.directionalShadow[y]=ht,r.directionalShadowMap[y]=it,r.directionalShadowMatrix[y]=V.shadow.matrix,C++}r.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(at).multiplyScalar(st),F.distance=xt,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[w]=F;const B=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,B.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[w]=B.matrix,V.castShadow){const ht=i.get(V);ht.shadowIntensity=B.intensity,ht.shadowBias=B.bias,ht.shadowNormalBias=B.normalBias,ht.shadowRadius=B.radius,ht.shadowMapSize=B.mapSize,r.spotShadow[w]=ht,r.spotShadowMap[w]=it,N++}w++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(at).multiplyScalar(st),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const B=V.shadow,ht=i.get(V);ht.shadowIntensity=B.intensity,ht.shadowBias=B.bias,ht.shadowNormalBias=B.normalBias,ht.shadowRadius=B.radius,ht.shadowMapSize=B.mapSize,ht.shadowCameraNear=B.camera.near,ht.shadowCameraFar=B.camera.far,r.pointShadow[E]=ht,r.pointShadowMap[E]=it,r.pointShadowMatrix[E]=V.shadow.matrix,P++}r.point[E]=F,E++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(st),F.groundColor.copy(V.groundColor).multiplyScalar(st),r.hemi[v]=F,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Qt.LTC_FLOAT_1,r.rectAreaLTC2=Qt.LTC_FLOAT_2):(r.rectAreaLTC1=Qt.LTC_HALF_1,r.rectAreaLTC2=Qt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==C||T.numPointShadows!==P||T.numSpotShadows!==N||T.numSpotMaps!==z||T.numLightProbes!==k)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=M,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+z-H,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=k,T.directionalLength=y,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=C,T.numPointShadows=P,T.numSpotShadows=N,T.numSpotMaps=z,T.numLightProbes=k,r.version=U2++)}function m(d,g){let x=0,_=0,y=0,E=0,w=0;const M=g.matrixWorldInverse;for(let v=0,C=d.length;v<C;v++){const P=d[v];if(P.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),x++}else if(P.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),f.identity(),c.copy(P.matrixWorld),c.premultiply(M),f.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(P.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const N=r.hemi[w];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:r}}function Vv(s){const t=new N2(s),i=[],r=[];function l(g){d.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function P2(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Vv(s),t.set(l,[p])):c>=f.length?(p=new Vv(s),f.push(p)):p=f[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const O2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,F2=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],B2=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],kv=new An,ec=new Z,Jd=new Z;function z2(s,t,i){let r=new um;const l=new ze,c=new ze,f=new Gn,p=new qy,m=new Yy,d={},g=i.maxTextureSize,x={[Er]:Gi,[Gi]:Er,[La]:La},_=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:O2,fragmentShader:I2}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new $n;E.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Si(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let v=this.type;this.render=function(H,k,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;this.type===vS&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tf);const L=s.getRenderTarget(),ft=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),at=s.state;at.setBlending(Mr),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const st=v!==this.type;st&&k.traverse(function(xt){xt.material&&(Array.isArray(xt.material)?xt.material.forEach(it=>it.needsUpdate=!0):xt.material.needsUpdate=!0)});for(let xt=0,it=H.length;xt<it;xt++){const F=H[xt],B=F.shadow;if(B===void 0){Ce("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ht=B.getFrameExtents();l.multiply(ht),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ht.x),l.x=c.x*ht.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ht.y),l.y=c.y*ht.y,B.mapSize.y=c.y));const St=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=St,B.map===null||st===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ic){if(F.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Za(l.x,l.y,{format:Yo,type:br,minFilter:Ui,magFilter:Ui,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new pc(l.x,l.y,qa),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=Tr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yi,B.map.depthTexture.magFilter=yi}else F.isPointLight?(B.map=new Rx(l.x),B.map.depthTexture=new Hy(l.x,Ka)):(B.map=new Za(l.x,l.y),B.map.depthTexture=new pc(l.x,l.y,Ka)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=Tr,this.type===tf?(B.map.depthTexture.compareFunction=St?sm:rm,B.map.depthTexture.minFilter=Ui,B.map.depthTexture.magFilter=Ui):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yi,B.map.depthTexture.magFilter=yi);B.camera.updateProjectionMatrix()}const D=B.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<D;Q++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(B.map),s.clear());const ct=B.getViewport(Q);f.set(c.x*ct.x,c.y*ct.y,c.x*ct.z,c.y*ct.w),at.viewport(f)}if(F.isPointLight){const ct=B.camera,_t=B.matrix,qt=F.distance||ct.far;qt!==ct.far&&(ct.far=qt,ct.updateProjectionMatrix()),ec.setFromMatrixPosition(F.matrixWorld),ct.position.copy(ec),Jd.copy(ct.position),Jd.add(F2[Q]),ct.up.copy(B2[Q]),ct.lookAt(Jd),ct.updateMatrixWorld(),_t.makeTranslation(-ec.x,-ec.y,-ec.z),kv.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),B._frustum.setFromProjectionMatrix(kv,ct.coordinateSystem,ct.reversedDepth)}else B.updateMatrices(F);r=B.getFrustum(),N(k,T,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===ic&&C(B,T),B.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(L,ft,V)};function C(H,k){const T=t.update(w);_.defines.VSM_SAMPLES!==H.blurSamples&&(_.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Za(l.x,l.y,{format:Yo,type:br})),_.uniforms.shadow_pass.value=H.map.depthTexture,_.uniforms.resolution.value=H.mapSize,_.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(k,null,T,_,w,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(k,null,T,y,w,null)}function P(H,k,T,L){let ft=null;const V=T.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)ft=V;else if(ft=T.isPointLight===!0?m:p,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const at=ft.uuid,st=k.uuid;let xt=d[at];xt===void 0&&(xt={},d[at]=xt);let it=xt[st];it===void 0&&(it=ft.clone(),xt[st]=it,k.addEventListener("dispose",z)),ft=it}if(ft.visible=k.visible,ft.wireframe=k.wireframe,L===ic?ft.side=k.shadowSide!==null?k.shadowSide:k.side:ft.side=k.shadowSide!==null?k.shadowSide:x[k.side],ft.alphaMap=k.alphaMap,ft.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,ft.map=k.map,ft.clipShadows=k.clipShadows,ft.clippingPlanes=k.clippingPlanes,ft.clipIntersection=k.clipIntersection,ft.displacementMap=k.displacementMap,ft.displacementScale=k.displacementScale,ft.displacementBias=k.displacementBias,ft.wireframeLinewidth=k.wireframeLinewidth,ft.linewidth=k.linewidth,T.isPointLight===!0&&ft.isMeshDistanceMaterial===!0){const at=s.properties.get(ft);at.light=T}return ft}function N(H,k,T,L,ft){if(H.visible===!1)return;if(H.layers.test(k.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&ft===ic)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,H.matrixWorld);const st=t.update(H),xt=H.material;if(Array.isArray(xt)){const it=st.groups;for(let F=0,B=it.length;F<B;F++){const ht=it[F],St=xt[ht.materialIndex];if(St&&St.visible){const D=P(H,St,L,ft);H.onBeforeShadow(s,H,k,T,st,D,ht),s.renderBufferDirect(T,null,st,D,H,ht),H.onAfterShadow(s,H,k,T,st,D,ht)}}}else if(xt.visible){const it=P(H,xt,L,ft);H.onBeforeShadow(s,H,k,T,st,it,null),s.renderBufferDirect(T,null,st,it,H,null),H.onAfterShadow(s,H,k,T,st,it,null)}}const at=H.children;for(let st=0,xt=at.length;st<xt;st++)N(at[st],k,T,L,ft)}function z(H){H.target.removeEventListener("dispose",z);for(const T in d){const L=d[T],ft=H.target.uuid;ft in L&&(L[ft].dispose(),delete L[ft])}}}function H2(s,t){function i(){let W=!1;const zt=new Gn;let It=null;const te=new Gn(0,0,0,0);return{setMask:function(Nt){It!==Nt&&!W&&(s.colorMask(Nt,Nt,Nt,Nt),It=Nt)},setLocked:function(Nt){W=Nt},setClear:function(Nt,Mt,se,Se,Ie){Ie===!0&&(Nt*=Se,Mt*=Se,se*=Se),zt.set(Nt,Mt,se,Se),te.equals(zt)===!1&&(s.clearColor(Nt,Mt,se,Se),te.copy(zt))},reset:function(){W=!1,It=null,te.set(-1,0,0,0)}}}function r(){let W=!1,zt=!1,It=null,te=null,Nt=null;return{setReversed:function(Mt){if(zt!==Mt){const se=t.get("EXT_clip_control");Mt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),zt=Mt;const Se=Nt;Nt=null,this.setClear(Se)}},getReversed:function(){return zt},setTest:function(Mt){Mt?Ct(s.DEPTH_TEST):gt(s.DEPTH_TEST)},setMask:function(Mt){It!==Mt&&!W&&(s.depthMask(Mt),It=Mt)},setFunc:function(Mt){if(zt&&(Mt=QS[Mt]),te!==Mt){switch(Mt){case np:s.depthFunc(s.NEVER);break;case ip:s.depthFunc(s.ALWAYS);break;case ap:s.depthFunc(s.LESS);break;case Wo:s.depthFunc(s.LEQUAL);break;case rp:s.depthFunc(s.EQUAL);break;case sp:s.depthFunc(s.GEQUAL);break;case op:s.depthFunc(s.GREATER);break;case lp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=Mt}},setLocked:function(Mt){W=Mt},setClear:function(Mt){Nt!==Mt&&(Nt=Mt,zt&&(Mt=1-Mt),s.clearDepth(Mt))},reset:function(){W=!1,It=null,te=null,Nt=null,zt=!1}}}function l(){let W=!1,zt=null,It=null,te=null,Nt=null,Mt=null,se=null,Se=null,Ie=null;return{setTest:function(Ze){W||(Ze?Ct(s.STENCIL_TEST):gt(s.STENCIL_TEST))},setMask:function(Ze){zt!==Ze&&!W&&(s.stencilMask(Ze),zt=Ze)},setFunc:function(Ze,Ni,Pn){(It!==Ze||te!==Ni||Nt!==Pn)&&(s.stencilFunc(Ze,Ni,Pn),It=Ze,te=Ni,Nt=Pn)},setOp:function(Ze,Ni,Pn){(Mt!==Ze||se!==Ni||Se!==Pn)&&(s.stencilOp(Ze,Ni,Pn),Mt=Ze,se=Ni,Se=Pn)},setLocked:function(Ze){W=Ze},setClear:function(Ze){Ie!==Ze&&(s.clearStencil(Ze),Ie=Ze)},reset:function(){W=!1,zt=null,It=null,te=null,Nt=null,Mt=null,se=null,Se=null,Ie=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,d=new WeakMap;let g={},x={},_=new WeakMap,y=[],E=null,w=!1,M=null,v=null,C=null,P=null,N=null,z=null,H=null,k=new Ye(0,0,0),T=0,L=!1,ft=null,V=null,at=null,st=null,xt=null;const it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const ht=s.getParameter(s.VERSION);ht.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ht)[1]),F=B>=1):ht.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),F=B>=2);let St=null,D={};const Q=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),_t=new Gn().fromArray(Q),qt=new Gn().fromArray(ct);function he(W,zt,It,te){const Nt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(W,Mt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let se=0;se<It;se++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(zt,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(zt+se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return Mt}const tt={};tt[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Ct(s.DEPTH_TEST),f.setFunc(Wo),me(!1),Ve(F_),Ct(s.CULL_FACE),je(Mr);function Ct(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function gt(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Me(W,zt){return x[W]!==zt?(s.bindFramebuffer(W,zt),x[W]=zt,W===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=zt),W===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=zt),!0):!1}function ve(W,zt){let It=y,te=!1;if(W){It=_.get(zt),It===void 0&&(It=[],_.set(zt,It));const Nt=W.textures;if(It.length!==Nt.length||It[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,se=Nt.length;Mt<se;Mt++)It[Mt]=s.COLOR_ATTACHMENT0+Mt;It.length=Nt.length,te=!0}}else It[0]!==s.BACK&&(It[0]=s.BACK,te=!0);te&&s.drawBuffers(It)}function xe(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const Rn={[Is]:s.FUNC_ADD,[MS]:s.FUNC_SUBTRACT,[SS]:s.FUNC_REVERSE_SUBTRACT};Rn[yS]=s.MIN,Rn[ES]=s.MAX;const Ue={[bS]:s.ZERO,[TS]:s.ONE,[AS]:s.SRC_COLOR,[tp]:s.SRC_ALPHA,[LS]:s.SRC_ALPHA_SATURATE,[DS]:s.DST_COLOR,[wS]:s.DST_ALPHA,[RS]:s.ONE_MINUS_SRC_COLOR,[ep]:s.ONE_MINUS_SRC_ALPHA,[US]:s.ONE_MINUS_DST_COLOR,[CS]:s.ONE_MINUS_DST_ALPHA,[NS]:s.CONSTANT_COLOR,[PS]:s.ONE_MINUS_CONSTANT_COLOR,[OS]:s.CONSTANT_ALPHA,[IS]:s.ONE_MINUS_CONSTANT_ALPHA};function je(W,zt,It,te,Nt,Mt,se,Se,Ie,Ze){if(W===Mr){w===!0&&(gt(s.BLEND),w=!1);return}if(w===!1&&(Ct(s.BLEND),w=!0),W!==xS){if(W!==M||Ze!==L){if((v!==Is||N!==Is)&&(s.blendEquation(s.FUNC_ADD),v=Is,N=Is),Ze)switch(W){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vo:s.blendFunc(s.ONE,s.ONE);break;case B_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case z_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:nn("WebGLState: Invalid blending: ",W);break}else switch(W){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case B_:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",W);break}C=null,P=null,z=null,H=null,k.set(0,0,0),T=0,M=W,L=Ze}return}Nt=Nt||zt,Mt=Mt||It,se=se||te,(zt!==v||Nt!==N)&&(s.blendEquationSeparate(Rn[zt],Rn[Nt]),v=zt,N=Nt),(It!==C||te!==P||Mt!==z||se!==H)&&(s.blendFuncSeparate(Ue[It],Ue[te],Ue[Mt],Ue[se]),C=It,P=te,z=Mt,H=se),(Se.equals(k)===!1||Ie!==T)&&(s.blendColor(Se.r,Se.g,Se.b,Ie),k.copy(Se),T=Ie),M=W,L=!1}function Xe(W,zt){W.side===La?gt(s.CULL_FACE):Ct(s.CULL_FACE);let It=W.side===Gi;zt&&(It=!It),me(It),W.blending===Hs&&W.transparent===!1?je(Mr):je(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const te=W.stencilWrite;p.setTest(te),te&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),En(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ct(s.SAMPLE_ALPHA_TO_COVERAGE):gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(W){ft!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),ft=W)}function Ve(W){W!==gS?(Ct(s.CULL_FACE),W!==V&&(W===F_?s.cullFace(s.BACK):W===_S?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):gt(s.CULL_FACE),V=W}function X(W){W!==at&&(F&&s.lineWidth(W),at=W)}function En(W,zt,It){W?(Ct(s.POLYGON_OFFSET_FILL),(st!==zt||xt!==It)&&(st=zt,xt=It,f.getReversed()&&(zt=-zt),s.polygonOffset(zt,It))):gt(s.POLYGON_OFFSET_FILL)}function Je(W){W?Ct(s.SCISSOR_TEST):gt(s.SCISSOR_TEST)}function an(W){W===void 0&&(W=s.TEXTURE0+it-1),St!==W&&(s.activeTexture(W),St=W)}function oe(W,zt,It){It===void 0&&(St===null?It=s.TEXTURE0+it-1:It=St);let te=D[It];te===void 0&&(te={type:void 0,texture:void 0},D[It]=te),(te.type!==W||te.texture!==zt)&&(St!==It&&(s.activeTexture(It),St=It),s.bindTexture(W,zt||tt[W]),te.type=W,te.texture=zt)}function O(){const W=D[St];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(W){nn("WebGLState:",W)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(W){nn("WebGLState:",W)}}function yt(){try{s.texSubImage2D(...arguments)}catch(W){nn("WebGLState:",W)}}function Tt(){try{s.texSubImage3D(...arguments)}catch(W){nn("WebGLState:",W)}}function vt(){try{s.compressedTexSubImage2D(...arguments)}catch(W){nn("WebGLState:",W)}}function jt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){nn("WebGLState:",W)}}function Ht(){try{s.texStorage2D(...arguments)}catch(W){nn("WebGLState:",W)}}function pe(){try{s.texStorage3D(...arguments)}catch(W){nn("WebGLState:",W)}}function ye(){try{s.texImage2D(...arguments)}catch(W){nn("WebGLState:",W)}}function Ut(){try{s.texImage3D(...arguments)}catch(W){nn("WebGLState:",W)}}function Ot(W){_t.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function ee(W){qt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),qt.copy(W))}function ie(W,zt){let It=d.get(zt);It===void 0&&(It=new WeakMap,d.set(zt,It));let te=It.get(W);te===void 0&&(te=s.getUniformBlockIndex(zt,W.name),It.set(W,te))}function Zt(W,zt){const te=d.get(zt).get(W);m.get(zt)!==te&&(s.uniformBlockBinding(zt,te,W.__bindingPointIndex),m.set(zt,te))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},St=null,D={},x={},_=new WeakMap,y=[],E=null,w=!1,M=null,v=null,C=null,P=null,N=null,z=null,H=null,k=new Ye(0,0,0),T=0,L=!1,ft=null,V=null,at=null,st=null,xt=null,_t.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Ct,disable:gt,bindFramebuffer:Me,drawBuffers:ve,useProgram:xe,setBlending:je,setMaterial:Xe,setFlipSided:me,setCullFace:Ve,setLineWidth:X,setPolygonOffset:En,setScissorTest:Je,activeTexture:an,bindTexture:oe,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:ye,texImage3D:Ut,updateUBOMapping:ie,uniformBlockBinding:Zt,texStorage2D:Ht,texStorage3D:pe,texSubImage2D:yt,texSubImage3D:Tt,compressedTexSubImage2D:vt,compressedTexSubImage3D:jt,scissor:Ot,viewport:ee,reset:De}}function G2(s,t,i,r,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ze,g=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return y?new OffscreenCanvas(O,b):hc("canvas")}function w(O,b,K){let yt=1;const Tt=oe(O);if((Tt.width>K||Tt.height>K)&&(yt=K/Math.max(Tt.width,Tt.height)),yt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const vt=Math.floor(yt*Tt.width),jt=Math.floor(yt*Tt.height);x===void 0&&(x=E(vt,jt));const Ht=b?E(vt,jt):x;return Ht.width=vt,Ht.height=jt,Ht.getContext("2d").drawImage(O,0,0,vt,jt),Ce("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+vt+"x"+jt+")."),Ht}else return"data"in O&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){s.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(O,b,K,yt,Tt=!1){if(O!==null){if(s[O]!==void 0)return s[O];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let vt=b;if(b===s.RED&&(K===s.FLOAT&&(vt=s.R32F),K===s.HALF_FLOAT&&(vt=s.R16F),K===s.UNSIGNED_BYTE&&(vt=s.R8)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(vt=s.R8UI),K===s.UNSIGNED_SHORT&&(vt=s.R16UI),K===s.UNSIGNED_INT&&(vt=s.R32UI),K===s.BYTE&&(vt=s.R8I),K===s.SHORT&&(vt=s.R16I),K===s.INT&&(vt=s.R32I)),b===s.RG&&(K===s.FLOAT&&(vt=s.RG32F),K===s.HALF_FLOAT&&(vt=s.RG16F),K===s.UNSIGNED_BYTE&&(vt=s.RG8)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(vt=s.RG8UI),K===s.UNSIGNED_SHORT&&(vt=s.RG16UI),K===s.UNSIGNED_INT&&(vt=s.RG32UI),K===s.BYTE&&(vt=s.RG8I),K===s.SHORT&&(vt=s.RG16I),K===s.INT&&(vt=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(vt=s.RGB8UI),K===s.UNSIGNED_SHORT&&(vt=s.RGB16UI),K===s.UNSIGNED_INT&&(vt=s.RGB32UI),K===s.BYTE&&(vt=s.RGB8I),K===s.SHORT&&(vt=s.RGB16I),K===s.INT&&(vt=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(vt=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(vt=s.RGBA16UI),K===s.UNSIGNED_INT&&(vt=s.RGBA32UI),K===s.BYTE&&(vt=s.RGBA8I),K===s.SHORT&&(vt=s.RGBA16I),K===s.INT&&(vt=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(vt=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(vt=s.R11F_G11F_B10F)),b===s.RGBA){const jt=Tt?lf:sn.getTransfer(yt);K===s.FLOAT&&(vt=s.RGBA32F),K===s.HALF_FLOAT&&(vt=s.RGBA16F),K===s.UNSIGNED_BYTE&&(vt=jt===pn?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(vt=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(vt=s.RGB5_A1)}return(vt===s.R16F||vt===s.R32F||vt===s.RG16F||vt===s.RG32F||vt===s.RGBA16F||vt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function N(O,b){let K;return O?b===null||b===Ka||b===uc?K=s.DEPTH24_STENCIL8:b===qa?K=s.DEPTH32F_STENCIL8:b===cc&&(K=s.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ka||b===uc?K=s.DEPTH_COMPONENT24:b===qa?K=s.DEPTH_COMPONENT32F:b===cc&&(K=s.DEPTH_COMPONENT16),K}function z(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==yi&&O.minFilter!==Ui?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function H(O){const b=O.target;b.removeEventListener("dispose",H),T(b),b.isVideoTexture&&g.delete(b)}function k(O){const b=O.target;b.removeEventListener("dispose",k),ft(b)}function T(O){const b=r.get(O);if(b.__webglInit===void 0)return;const K=O.source,yt=_.get(K);if(yt){const Tt=yt[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&L(O),Object.keys(yt).length===0&&_.delete(K)}r.remove(O)}function L(O){const b=r.get(O);s.deleteTexture(b.__webglTexture);const K=O.source,yt=_.get(K);delete yt[b.__cacheKey],f.memory.textures--}function ft(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(b.__webglFramebuffer[yt]))for(let Tt=0;Tt<b.__webglFramebuffer[yt].length;Tt++)s.deleteFramebuffer(b.__webglFramebuffer[yt][Tt]);else s.deleteFramebuffer(b.__webglFramebuffer[yt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[yt])}else{if(Array.isArray(b.__webglFramebuffer))for(let yt=0;yt<b.__webglFramebuffer.length;yt++)s.deleteFramebuffer(b.__webglFramebuffer[yt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let yt=0;yt<b.__webglColorRenderbuffer.length;yt++)b.__webglColorRenderbuffer[yt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[yt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=O.textures;for(let yt=0,Tt=K.length;yt<Tt;yt++){const vt=r.get(K[yt]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),f.memory.textures--),r.remove(K[yt])}r.remove(O)}let V=0;function at(){V=0}function st(){const O=V;return O>=l.maxTextures&&Ce("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function xt(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function it(O,b){const K=r.get(O);if(O.isVideoTexture&&Je(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&K.__version!==O.version){const yt=O.image;if(yt===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(K,O,b);return}}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function F(O,b){const K=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){tt(K,O,b);return}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function B(O,b){const K=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){tt(K,O,b);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function ht(O,b){const K=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&K.__version!==O.version){Ct(K,O,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const St={[cp]:s.REPEAT,[xr]:s.CLAMP_TO_EDGE,[up]:s.MIRRORED_REPEAT},D={[yi]:s.NEAREST,[zS]:s.NEAREST_MIPMAP_NEAREST,[Mu]:s.NEAREST_MIPMAP_LINEAR,[Ui]:s.LINEAR,[Md]:s.LINEAR_MIPMAP_NEAREST,[Bs]:s.LINEAR_MIPMAP_LINEAR},Q={[VS]:s.NEVER,[YS]:s.ALWAYS,[kS]:s.LESS,[rm]:s.LEQUAL,[XS]:s.EQUAL,[sm]:s.GEQUAL,[WS]:s.GREATER,[qS]:s.NOTEQUAL};function ct(O,b){if(b.type===qa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ui||b.magFilter===Md||b.magFilter===Mu||b.magFilter===Bs||b.minFilter===Ui||b.minFilter===Md||b.minFilter===Mu||b.minFilter===Bs)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,St[b.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,St[b.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,St[b.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,D[b.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===yi||b.minFilter!==Mu&&b.minFilter!==Bs||b.type===qa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function _t(O,b){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",H));const yt=b.source;let Tt=_.get(yt);Tt===void 0&&(Tt={},_.set(yt,Tt));const vt=xt(b);if(vt!==O.__cacheKey){Tt[vt]===void 0&&(Tt[vt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,K=!0),Tt[vt].usedTimes++;const jt=Tt[O.__cacheKey];jt!==void 0&&(Tt[O.__cacheKey].usedTimes--,jt.usedTimes===0&&L(b)),O.__cacheKey=vt,O.__webglTexture=Tt[vt].texture}return K}function qt(O,b,K){return Math.floor(Math.floor(O/K)/b)}function he(O,b,K,yt){const vt=O.updateRanges;if(vt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,yt,b.data);else{vt.sort((Ut,Ot)=>Ut.start-Ot.start);let jt=0;for(let Ut=1;Ut<vt.length;Ut++){const Ot=vt[jt],ee=vt[Ut],ie=Ot.start+Ot.count,Zt=qt(ee.start,b.width,4),De=qt(Ot.start,b.width,4);ee.start<=ie+1&&Zt===De&&qt(ee.start+ee.count-1,b.width,4)===Zt?Ot.count=Math.max(Ot.count,ee.start+ee.count-Ot.start):(++jt,vt[jt]=ee)}vt.length=jt+1;const Ht=s.getParameter(s.UNPACK_ROW_LENGTH),pe=s.getParameter(s.UNPACK_SKIP_PIXELS),ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ut=0,Ot=vt.length;Ut<Ot;Ut++){const ee=vt[Ut],ie=Math.floor(ee.start/4),Zt=Math.ceil(ee.count/4),De=ie%b.width,W=Math.floor(ie/b.width),zt=Zt,It=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,De),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,De,W,zt,It,K,yt,b.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ht),s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,ye)}}function tt(O,b,K){let yt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(yt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(yt=s.TEXTURE_3D);const Tt=_t(O,b),vt=b.source;i.bindTexture(yt,O.__webglTexture,s.TEXTURE0+K);const jt=r.get(vt);if(vt.version!==jt.__version||Tt===!0){i.activeTexture(s.TEXTURE0+K);const Ht=sn.getPrimaries(sn.workingColorSpace),pe=b.colorSpace===ss?null:sn.getPrimaries(b.colorSpace),ye=b.colorSpace===ss||Ht===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Ut=w(b.image,!1,l.maxTextureSize);Ut=an(b,Ut);const Ot=c.convert(b.format,b.colorSpace),ee=c.convert(b.type);let ie=P(b.internalFormat,Ot,ee,b.colorSpace,b.isVideoTexture);ct(yt,b);let Zt;const De=b.mipmaps,W=b.isVideoTexture!==!0,zt=jt.__version===void 0||Tt===!0,It=vt.dataReady,te=z(b,Ut);if(b.isDepthTexture)ie=N(b.format===zs,b.type),zt&&(W?i.texStorage2D(s.TEXTURE_2D,1,ie,Ut.width,Ut.height):i.texImage2D(s.TEXTURE_2D,0,ie,Ut.width,Ut.height,0,Ot,ee,null));else if(b.isDataTexture)if(De.length>0){W&&zt&&i.texStorage2D(s.TEXTURE_2D,te,ie,De[0].width,De[0].height);for(let Nt=0,Mt=De.length;Nt<Mt;Nt++)Zt=De[Nt],W?It&&i.texSubImage2D(s.TEXTURE_2D,Nt,0,0,Zt.width,Zt.height,Ot,ee,Zt.data):i.texImage2D(s.TEXTURE_2D,Nt,ie,Zt.width,Zt.height,0,Ot,ee,Zt.data);b.generateMipmaps=!1}else W?(zt&&i.texStorage2D(s.TEXTURE_2D,te,ie,Ut.width,Ut.height),It&&he(b,Ut,Ot,ee)):i.texImage2D(s.TEXTURE_2D,0,ie,Ut.width,Ut.height,0,Ot,ee,Ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&zt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,te,ie,De[0].width,De[0].height,Ut.depth);for(let Nt=0,Mt=De.length;Nt<Mt;Nt++)if(Zt=De[Nt],b.format!==Pa)if(Ot!==null)if(W){if(It)if(b.layerUpdates.size>0){const se=Mv(Zt.width,Zt.height,b.format,b.type);for(const Se of b.layerUpdates){const Ie=Zt.data.subarray(Se*se/Zt.data.BYTES_PER_ELEMENT,(Se+1)*se/Zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Nt,0,0,Se,Zt.width,Zt.height,1,Ot,Ie)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Nt,0,0,0,Zt.width,Zt.height,Ut.depth,Ot,Zt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Nt,ie,Zt.width,Zt.height,Ut.depth,0,Zt.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?It&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Nt,0,0,0,Zt.width,Zt.height,Ut.depth,Ot,ee,Zt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Nt,ie,Zt.width,Zt.height,Ut.depth,0,Ot,ee,Zt.data)}else{W&&zt&&i.texStorage2D(s.TEXTURE_2D,te,ie,De[0].width,De[0].height);for(let Nt=0,Mt=De.length;Nt<Mt;Nt++)Zt=De[Nt],b.format!==Pa?Ot!==null?W?It&&i.compressedTexSubImage2D(s.TEXTURE_2D,Nt,0,0,Zt.width,Zt.height,Ot,Zt.data):i.compressedTexImage2D(s.TEXTURE_2D,Nt,ie,Zt.width,Zt.height,0,Zt.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?It&&i.texSubImage2D(s.TEXTURE_2D,Nt,0,0,Zt.width,Zt.height,Ot,ee,Zt.data):i.texImage2D(s.TEXTURE_2D,Nt,ie,Zt.width,Zt.height,0,Ot,ee,Zt.data)}else if(b.isDataArrayTexture)if(W){if(zt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,te,ie,Ut.width,Ut.height,Ut.depth),It)if(b.layerUpdates.size>0){const Nt=Mv(Ut.width,Ut.height,b.format,b.type);for(const Mt of b.layerUpdates){const se=Ut.data.subarray(Mt*Nt/Ut.data.BYTES_PER_ELEMENT,(Mt+1)*Nt/Ut.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,Ut.width,Ut.height,1,Ot,ee,se)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ut.width,Ut.height,Ut.depth,Ot,ee,Ut.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ie,Ut.width,Ut.height,Ut.depth,0,Ot,ee,Ut.data);else if(b.isData3DTexture)W?(zt&&i.texStorage3D(s.TEXTURE_3D,te,ie,Ut.width,Ut.height,Ut.depth),It&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ut.width,Ut.height,Ut.depth,Ot,ee,Ut.data)):i.texImage3D(s.TEXTURE_3D,0,ie,Ut.width,Ut.height,Ut.depth,0,Ot,ee,Ut.data);else if(b.isFramebufferTexture){if(zt)if(W)i.texStorage2D(s.TEXTURE_2D,te,ie,Ut.width,Ut.height);else{let Nt=Ut.width,Mt=Ut.height;for(let se=0;se<te;se++)i.texImage2D(s.TEXTURE_2D,se,ie,Nt,Mt,0,Ot,ee,null),Nt>>=1,Mt>>=1}}else if(De.length>0){if(W&&zt){const Nt=oe(De[0]);i.texStorage2D(s.TEXTURE_2D,te,ie,Nt.width,Nt.height)}for(let Nt=0,Mt=De.length;Nt<Mt;Nt++)Zt=De[Nt],W?It&&i.texSubImage2D(s.TEXTURE_2D,Nt,0,0,Ot,ee,Zt):i.texImage2D(s.TEXTURE_2D,Nt,ie,Ot,ee,Zt);b.generateMipmaps=!1}else if(W){if(zt){const Nt=oe(Ut);i.texStorage2D(s.TEXTURE_2D,te,ie,Nt.width,Nt.height)}It&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,ee,Ut)}else i.texImage2D(s.TEXTURE_2D,0,ie,Ot,ee,Ut);M(b)&&v(yt),jt.__version=vt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ct(O,b,K){if(b.image.length!==6)return;const yt=_t(O,b),Tt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+K);const vt=r.get(Tt);if(Tt.version!==vt.__version||yt===!0){i.activeTexture(s.TEXTURE0+K);const jt=sn.getPrimaries(sn.workingColorSpace),Ht=b.colorSpace===ss?null:sn.getPrimaries(b.colorSpace),pe=b.colorSpace===ss||jt===Ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,Ut=b.image[0]&&b.image[0].isDataTexture,Ot=[];for(let Mt=0;Mt<6;Mt++)!ye&&!Ut?Ot[Mt]=w(b.image[Mt],!0,l.maxCubemapSize):Ot[Mt]=Ut?b.image[Mt].image:b.image[Mt],Ot[Mt]=an(b,Ot[Mt]);const ee=Ot[0],ie=c.convert(b.format,b.colorSpace),Zt=c.convert(b.type),De=P(b.internalFormat,ie,Zt,b.colorSpace),W=b.isVideoTexture!==!0,zt=vt.__version===void 0||yt===!0,It=Tt.dataReady;let te=z(b,ee);ct(s.TEXTURE_CUBE_MAP,b);let Nt;if(ye){W&&zt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,te,De,ee.width,ee.height);for(let Mt=0;Mt<6;Mt++){Nt=Ot[Mt].mipmaps;for(let se=0;se<Nt.length;se++){const Se=Nt[se];b.format!==Pa?ie!==null?W?It&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,0,0,Se.width,Se.height,ie,Se.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,De,Se.width,Se.height,0,Se.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?It&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,0,0,Se.width,Se.height,ie,Zt,Se.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,De,Se.width,Se.height,0,ie,Zt,Se.data)}}}else{if(Nt=b.mipmaps,W&&zt){Nt.length>0&&te++;const Mt=oe(Ot[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,te,De,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Ut){W?It&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ot[Mt].width,Ot[Mt].height,ie,Zt,Ot[Mt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,De,Ot[Mt].width,Ot[Mt].height,0,ie,Zt,Ot[Mt].data);for(let se=0;se<Nt.length;se++){const Ie=Nt[se].image[Mt].image;W?It&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,0,0,Ie.width,Ie.height,ie,Zt,Ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,De,Ie.width,Ie.height,0,ie,Zt,Ie.data)}}else{W?It&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ie,Zt,Ot[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,De,ie,Zt,Ot[Mt]);for(let se=0;se<Nt.length;se++){const Se=Nt[se];W?It&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,0,0,ie,Zt,Se.image[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,De,ie,Zt,Se.image[Mt])}}}M(b)&&v(s.TEXTURE_CUBE_MAP),vt.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function gt(O,b,K,yt,Tt,vt){const jt=c.convert(K.format,K.colorSpace),Ht=c.convert(K.type),pe=P(K.internalFormat,jt,Ht,K.colorSpace),ye=r.get(b),Ut=r.get(K);if(Ut.__renderTarget=b,!ye.__hasExternalTextures){const Ot=Math.max(1,b.width>>vt),ee=Math.max(1,b.height>>vt);Tt===s.TEXTURE_3D||Tt===s.TEXTURE_2D_ARRAY?i.texImage3D(Tt,vt,pe,Ot,ee,b.depth,0,jt,Ht,null):i.texImage2D(Tt,vt,pe,Ot,ee,0,jt,Ht,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),En(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,Tt,Ut.__webglTexture,0,X(b)):(Tt===s.TEXTURE_2D||Tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,yt,Tt,Ut.__webglTexture,vt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(O,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,O),b.depthBuffer){const yt=b.depthTexture,Tt=yt&&yt.isDepthTexture?yt.type:null,vt=N(b.stencilBuffer,Tt),jt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;En(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(b),vt,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(b),vt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,vt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,jt,s.RENDERBUFFER,O)}else{const yt=b.textures;for(let Tt=0;Tt<yt.length;Tt++){const vt=yt[Tt],jt=c.convert(vt.format,vt.colorSpace),Ht=c.convert(vt.type),pe=P(vt.internalFormat,jt,Ht,vt.colorSpace);En(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(b),pe,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(b),pe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(O,b,K){const yt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=r.get(b.depthTexture);if(Tt.__renderTarget=b,(!Tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),yt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",H)),Tt.__webglTexture===void 0){Tt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Tt.__webglTexture),ct(s.TEXTURE_CUBE_MAP,b.depthTexture);const ye=c.convert(b.depthTexture.format),Ut=c.convert(b.depthTexture.type);let Ot;b.depthTexture.format===Tr?Ot=s.DEPTH_COMPONENT24:b.depthTexture.format===zs&&(Ot=s.DEPTH24_STENCIL8);for(let ee=0;ee<6;ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ot,b.width,b.height,0,ye,Ut,null)}}else it(b.depthTexture,0);const vt=Tt.__webglTexture,jt=X(b),Ht=yt?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,pe=b.depthTexture.format===zs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Tr)En(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,Ht,vt,0,jt):s.framebufferTexture2D(s.FRAMEBUFFER,pe,Ht,vt,0);else if(b.depthTexture.format===zs)En(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,Ht,vt,0,jt):s.framebufferTexture2D(s.FRAMEBUFFER,pe,Ht,vt,0);else throw new Error("Unknown depthTexture format")}function xe(O){const b=r.get(O),K=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const yt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),yt){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,yt.removeEventListener("dispose",Tt)};yt.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=yt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let yt=0;yt<6;yt++)ve(b.__webglFramebuffer[yt],O,yt);else{const yt=O.texture.mipmaps;yt&&yt.length>0?ve(b.__webglFramebuffer[0],O,0):ve(b.__webglFramebuffer,O,0)}else if(K){b.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[yt]),b.__webglDepthbuffer[yt]===void 0)b.__webglDepthbuffer[yt]=s.createRenderbuffer(),Me(b.__webglDepthbuffer[yt],O,!1);else{const Tt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=b.__webglDepthbuffer[yt];s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,vt)}}else{const yt=O.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Me(b.__webglDepthbuffer,O,!1);else{const Tt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,vt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Rn(O,b,K){const yt=r.get(O);b!==void 0&&gt(yt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&xe(O)}function Ue(O){const b=O.texture,K=r.get(O),yt=r.get(b);O.addEventListener("dispose",k);const Tt=O.textures,vt=O.isWebGLCubeRenderTarget===!0,jt=Tt.length>1;if(jt||(yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture()),yt.__version=b.version,f.memory.textures++),vt){K.__webglFramebuffer=[];for(let Ht=0;Ht<6;Ht++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ht]=[];for(let pe=0;pe<b.mipmaps.length;pe++)K.__webglFramebuffer[Ht][pe]=s.createFramebuffer()}else K.__webglFramebuffer[Ht]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ht=0;Ht<b.mipmaps.length;Ht++)K.__webglFramebuffer[Ht]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(jt)for(let Ht=0,pe=Tt.length;Ht<pe;Ht++){const ye=r.get(Tt[Ht]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&En(O)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ht=0;Ht<Tt.length;Ht++){const pe=Tt[Ht];K.__webglColorRenderbuffer[Ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ht]);const ye=c.convert(pe.format,pe.colorSpace),Ut=c.convert(pe.type),Ot=P(pe.internalFormat,ye,Ut,pe.colorSpace,O.isXRRenderTarget===!0),ee=X(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Ot,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(K.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(vt){i.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),ct(s.TEXTURE_CUBE_MAP,b);for(let Ht=0;Ht<6;Ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)gt(K.__webglFramebuffer[Ht][pe],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,pe);else gt(K.__webglFramebuffer[Ht],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0);M(b)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ht=0,pe=Tt.length;Ht<pe;Ht++){const ye=Tt[Ht],Ut=r.get(ye);let Ot=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ot=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ot,Ut.__webglTexture),ct(Ot,ye),gt(K.__webglFramebuffer,O,ye,s.COLOR_ATTACHMENT0+Ht,Ot,0),M(ye)&&v(Ot)}i.unbindTexture()}else{let Ht=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ht=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ht,yt.__webglTexture),ct(Ht,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)gt(K.__webglFramebuffer[pe],O,b,s.COLOR_ATTACHMENT0,Ht,pe);else gt(K.__webglFramebuffer,O,b,s.COLOR_ATTACHMENT0,Ht,0);M(b)&&v(Ht),i.unbindTexture()}O.depthBuffer&&xe(O)}function je(O){const b=O.textures;for(let K=0,yt=b.length;K<yt;K++){const Tt=b[K];if(M(Tt)){const vt=C(O),jt=r.get(Tt).__webglTexture;i.bindTexture(vt,jt),v(vt),i.unbindTexture()}}}const Xe=[],me=[];function Ve(O){if(O.samples>0){if(En(O)===!1){const b=O.textures,K=O.width,yt=O.height;let Tt=s.COLOR_BUFFER_BIT;const vt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,jt=r.get(O),Ht=b.length>1;if(Ht)for(let ye=0;ye<b.length;ye++)i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const pe=O.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Tt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Tt|=s.STENCIL_BUFFER_BIT)),Ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,jt.__webglColorRenderbuffer[ye]);const Ut=r.get(b[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ut,0)}s.blitFramebuffer(0,0,K,yt,0,0,K,yt,Tt,s.NEAREST),m===!0&&(Xe.length=0,me.length=0,Xe.push(s.COLOR_ATTACHMENT0+ye),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Xe.push(vt),me.push(vt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ht)for(let ye=0;ye<b.length;ye++){i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,jt.__webglColorRenderbuffer[ye]);const Ut=r.get(b[ye]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,Ut,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function X(O){return Math.min(l.maxSamples,O.samples)}function En(O){const b=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Je(O){const b=f.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function an(O,b){const K=O.colorSpace,yt=O.format,Tt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||K!==jo&&K!==ss&&(sn.getTransfer(K)===pn?(yt!==Pa||Tt!==oa)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",K)),b}function oe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=st,this.resetTextureUnits=at,this.setTexture2D=it,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=ht,this.rebindTextures=Rn,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=En,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function V2(s,t){function i(r,l=ss){let c;const f=sn.getTransfer(l);if(r===oa)return s.UNSIGNED_BYTE;if(r===tm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===em)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ox)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===lx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===rx)return s.BYTE;if(r===sx)return s.SHORT;if(r===cc)return s.UNSIGNED_SHORT;if(r===$p)return s.INT;if(r===Ka)return s.UNSIGNED_INT;if(r===qa)return s.FLOAT;if(r===br)return s.HALF_FLOAT;if(r===cx)return s.ALPHA;if(r===ux)return s.RGB;if(r===Pa)return s.RGBA;if(r===Tr)return s.DEPTH_COMPONENT;if(r===zs)return s.DEPTH_STENCIL;if(r===fx)return s.RED;if(r===nm)return s.RED_INTEGER;if(r===Yo)return s.RG;if(r===im)return s.RG_INTEGER;if(r===am)return s.RGBA_INTEGER;if(r===ef||r===nf||r===af||r===rf)if(f===pn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ef)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===af)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ef)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===af)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fp||r===hp||r===dp||r===pp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===fp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mp||r===gp||r===_p||r===vp||r===xp||r===Mp||r===Sp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===mp||r===gp)return f===pn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_p)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===vp)return c.COMPRESSED_R11_EAC;if(r===xp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Mp)return c.COMPRESSED_RG11_EAC;if(r===Sp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===yp||r===Ep||r===bp||r===Tp||r===Ap||r===Rp||r===wp||r===Cp||r===Dp||r===Up||r===Lp||r===Np||r===Pp||r===Op)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===yp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ep)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ap)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Up)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Np)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pp)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Op)return f===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ip||r===Fp||r===Bp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Ip)return f===pn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zp||r===Hp||r===Gp||r===Vp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===zp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===uc?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const k2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class W2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Sx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Hi({vertexShader:k2,fragmentShader:X2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new vf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q2 extends Ko{constructor(t,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,g=null,x=null,_=null,y=null,E=null;const w=typeof XRWebGLBinding<"u",M=new W2,v={},C=i.getContextAttributes();let P=null,N=null;const z=[],H=[],k=new ze;let T=null;const L=new sa;L.viewport=new Gn;const ft=new sa;ft.viewport=new Gn;const V=[L,ft],at=new i1;let st=null,xt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Ct=z[tt];return Ct===void 0&&(Ct=new Ad,z[tt]=Ct),Ct.getTargetRaySpace()},this.getControllerGrip=function(tt){let Ct=z[tt];return Ct===void 0&&(Ct=new Ad,z[tt]=Ct),Ct.getGripSpace()},this.getHand=function(tt){let Ct=z[tt];return Ct===void 0&&(Ct=new Ad,z[tt]=Ct),Ct.getHandSpace()};function it(tt){const Ct=H.indexOf(tt.inputSource);if(Ct===-1)return;const gt=z[Ct];gt!==void 0&&(gt.update(tt.inputSource,tt.frame,d||f),gt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function F(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",B);for(let tt=0;tt<z.length;tt++){const Ct=H[tt];Ct!==null&&(H[tt]=null,z[tt].disconnect(Ct))}st=null,xt=null,M.reset();for(const tt in v)delete v[tt];t.setRenderTarget(P),y=null,_=null,x=null,l=null,N=null,he.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){p=tt,r.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(tt){d=tt},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",F),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(k),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Me=null,ve=null;C.depth&&(ve=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=C.stencil?zs:Tr,Me=C.stencil?uc:Ka);const xe={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(xe),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),N=new Za(_.textureWidth,_.textureHeight,{format:Pa,type:oa,depthTexture:new pc(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const gt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Za(y.framebufferWidth,y.framebufferHeight,{format:Pa,type:oa,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),he.setContext(l),he.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(tt){for(let Ct=0;Ct<tt.removed.length;Ct++){const gt=tt.removed[Ct],Me=H.indexOf(gt);Me>=0&&(H[Me]=null,z[Me].disconnect(gt))}for(let Ct=0;Ct<tt.added.length;Ct++){const gt=tt.added[Ct];let Me=H.indexOf(gt);if(Me===-1){for(let xe=0;xe<z.length;xe++)if(xe>=H.length){H.push(gt),Me=xe;break}else if(H[xe]===null){H[xe]=gt,Me=xe;break}if(Me===-1)break}const ve=z[Me];ve&&ve.connect(gt)}}const ht=new Z,St=new Z;function D(tt,Ct,gt){ht.setFromMatrixPosition(Ct.matrixWorld),St.setFromMatrixPosition(gt.matrixWorld);const Me=ht.distanceTo(St),ve=Ct.projectionMatrix.elements,xe=gt.projectionMatrix.elements,Rn=ve[14]/(ve[10]-1),Ue=ve[14]/(ve[10]+1),je=(ve[9]+1)/ve[5],Xe=(ve[9]-1)/ve[5],me=(ve[8]-1)/ve[0],Ve=(xe[8]+1)/xe[0],X=Rn*me,En=Rn*Ve,Je=Me/(-me+Ve),an=Je*-me;if(Ct.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(an),tt.translateZ(Je),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),ve[10]===-1)tt.projectionMatrix.copy(Ct.projectionMatrix),tt.projectionMatrixInverse.copy(Ct.projectionMatrixInverse);else{const oe=Rn+Je,O=Ue+Je,b=X-an,K=En+(Me-an),yt=je*Ue/O*oe,Tt=Xe*Ue/O*oe;tt.projectionMatrix.makePerspective(b,K,yt,Tt,oe,O),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Q(tt,Ct){Ct===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Ct.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let Ct=tt.near,gt=tt.far;M.texture!==null&&(M.depthNear>0&&(Ct=M.depthNear),M.depthFar>0&&(gt=M.depthFar)),at.near=ft.near=L.near=Ct,at.far=ft.far=L.far=gt,(st!==at.near||xt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),st=at.near,xt=at.far),at.layers.mask=tt.layers.mask|6,L.layers.mask=at.layers.mask&-5,ft.layers.mask=at.layers.mask&-3;const Me=tt.parent,ve=at.cameras;Q(at,Me);for(let xe=0;xe<ve.length;xe++)Q(ve[xe],Me);ve.length===2?D(at,L,ft):at.projectionMatrix.copy(L.projectionMatrix),ct(tt,at,Me)};function ct(tt,Ct,gt){gt===null?tt.matrix.copy(Ct.matrixWorld):(tt.matrix.copy(gt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Ct.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Ct.projectionMatrix),tt.projectionMatrixInverse.copy(Ct.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=dc*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(tt){m=tt,_!==null&&(_.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function(tt){return v[tt]};let _t=null;function qt(tt,Ct){if(g=Ct.getViewerPose(d||f),E=Ct,g!==null){const gt=g.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Me=!1;gt.length!==at.cameras.length&&(at.cameras.length=0,Me=!0);for(let Ue=0;Ue<gt.length;Ue++){const je=gt[Ue];let Xe=null;if(y!==null)Xe=y.getViewport(je);else{const Ve=x.getViewSubImage(_,je);Xe=Ve.viewport,Ue===0&&(t.setRenderTargetTextures(N,Ve.colorTexture,Ve.depthStencilTexture),t.setRenderTarget(N))}let me=V[Ue];me===void 0&&(me=new sa,me.layers.enable(Ue),me.viewport=new Gn,V[Ue]=me),me.matrix.fromArray(je.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(je.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ue===0&&(at.matrix.copy(me.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Me===!0&&at.cameras.push(me)}const ve=l.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=r.getBinding();const Ue=x.getDepthInformation(gt[0]);Ue&&Ue.isValid&&Ue.texture&&M.init(Ue,l.renderState)}if(ve&&ve.includes("camera-access")&&w){t.state.unbindTexture(),x=r.getBinding();for(let Ue=0;Ue<gt.length;Ue++){const je=gt[Ue].camera;if(je){let Xe=v[je];Xe||(Xe=new Sx,v[je]=Xe);const me=x.getCameraImage(je);Xe.sourceTexture=me}}}}for(let gt=0;gt<z.length;gt++){const Me=H[gt],ve=z[gt];Me!==null&&ve!==void 0&&ve.update(Me,Ct,d||f)}_t&&_t(tt,Ct),Ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ct}),E=null}const he=new Ax;he.setAnimationLoop(qt),this.setAnimationLoop=function(tt){_t=tt},this.dispose=function(){}}}const Ps=new Qa,Y2=new An;function j2(s,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,yx(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,C,P,N){v.isMeshBasicMaterial?c(M,v):v.isMeshLambertMaterial?(c(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&y(M,v,N)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),w(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,C,P):v.isSpriteMaterial?d(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Gi&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Gi&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const C=t.get(v),P=C.envMap,N=C.envMapRotation;P&&(M.envMap.value=P,Ps.copy(N),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),M.envMapRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(Ps)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,C,P){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*C,M.scale.value=P*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,C){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gi&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function w(M,v){const C=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Z2(s,t,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const N=P.program;r.uniformBlockBinding(C,N)}function d(C,P){let N=l[C.id];N===void 0&&(E(C),N=g(C),l[C.id]=N,C.addEventListener("dispose",M));const z=P.program;r.updateUBOMapping(C,z);const H=t.render.frame;c[C.id]!==H&&(_(C),c[C.id]=H)}function g(C){const P=x();C.__bindingPointIndex=P;const N=s.createBuffer(),z=C.__size,H=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,z,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function x(){for(let C=0;C<p;C++)if(f.indexOf(C)===-1)return f.push(C),C;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const P=l[C.id],N=C.uniforms,z=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let H=0,k=N.length;H<k;H++){const T=Array.isArray(N[H])?N[H]:[N[H]];for(let L=0,ft=T.length;L<ft;L++){const V=T[L];if(y(V,H,L,z)===!0){const at=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let xt=0;for(let it=0;it<st.length;it++){const F=st[it],B=w(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,at+xt,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,xt),xt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,at,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,P,N,z){const H=C.value,k=P+"_"+N;if(z[k]===void 0)return typeof H=="number"||typeof H=="boolean"?z[k]=H:z[k]=H.clone(),!0;{const T=z[k];if(typeof H=="number"||typeof H=="boolean"){if(T!==H)return z[k]=H,!0}else if(T.equals(H)===!1)return T.copy(H),!0}return!1}function E(C){const P=C.uniforms;let N=0;const z=16;for(let k=0,T=P.length;k<T;k++){const L=Array.isArray(P[k])?P[k]:[P[k]];for(let ft=0,V=L.length;ft<V;ft++){const at=L[ft],st=Array.isArray(at.value)?at.value:[at.value];for(let xt=0,it=st.length;xt<it;xt++){const F=st[xt],B=w(F),ht=N%z,St=ht%B.boundary,D=ht+St;N+=St,D!==0&&z-D<B.storage&&(N+=z-D),at.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=N,N+=B.storage}}}const H=N%z;return H>0&&(N+=z-H),C.__size=N,C.__cache={},this}function w(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",C),P}function M(C){const P=C.target;P.removeEventListener("dispose",M);const N=f.indexOf(P.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function v(){for(const C in l)s.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:d,dispose:v}}const K2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xa=null;function Q2(){return Xa===null&&(Xa=new Oy(K2,16,16,Yo,br),Xa.name="DFG_LUT",Xa.minFilter=Ui,Xa.magFilter=Ui,Xa.wrapS=xr,Xa.wrapT=xr,Xa.generateMipmaps=!1,Xa.needsUpdate=!0),Xa}class J2{constructor(t={}){const{canvas:i=ZS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:y=oa}=t;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const w=y,M=new Set([am,im,nm]),v=new Set([oa,Ka,cc,uc,tm,em]),C=new Uint32Array(4),P=new Int32Array(4);let N=null,z=null;const H=[],k=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let ft=!1;this._outputColorSpace=Sn;let V=0,at=0,st=null,xt=-1,it=null;const F=new Gn,B=new Gn;let ht=null;const St=new Ye(0);let D=0,Q=i.width,ct=i.height,_t=1,qt=null,he=null;const tt=new Gn(0,0,Q,ct),Ct=new Gn(0,0,Q,ct);let gt=!1;const Me=new um;let ve=!1,xe=!1;const Rn=new An,Ue=new Z,je=new Gn,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Ve(){return st===null?_t:1}let X=r;function En(R,J){return i.getContext(R,J)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qp}`),i.addEventListener("webglcontextlost",se,!1),i.addEventListener("webglcontextrestored",Se,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const J="webgl2";if(X=En(J,R),X===null)throw En(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw nn("WebGLRenderer: "+R.message),R}let Je,an,oe,O,b,K,yt,Tt,vt,jt,Ht,pe,ye,Ut,Ot,ee,ie,Zt,De,W,zt,It,te;function Nt(){Je=new Jb(X),Je.init(),zt=new V2(X,Je),an=new Xb(X,Je,t,zt),oe=new H2(X,Je),an.reversedDepthBuffer&&_&&oe.buffers.depth.setReversed(!0),O=new eT(X),b=new A2,K=new G2(X,Je,oe,b,an,zt,O),yt=new Qb(L),Tt=new s1(X),It=new Vb(X,Tt),vt=new $b(X,Tt,O,It),jt=new iT(X,vt,Tt,It,O),Zt=new nT(X,an,K),Ot=new Wb(b),Ht=new T2(L,yt,Je,an,It,Ot),pe=new j2(L,b),ye=new w2,Ut=new P2(Je),ie=new Gb(L,yt,oe,jt,E,m),ee=new z2(L,jt,an),te=new Z2(X,O,an,oe),De=new kb(X,Je,O),W=new tT(X,Je,O),O.programs=Ht.programs,L.capabilities=an,L.extensions=Je,L.properties=b,L.renderLists=ye,L.shadowMap=ee,L.state=oe,L.info=O}Nt(),w!==oa&&(T=new rT(w,i.width,i.height,l,c));const Mt=new q2(L,X);this.xr=Mt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(Q,ct,!1))},this.getSize=function(R){return R.set(Q,ct)},this.setSize=function(R,J,dt=!0){if(Mt.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,ct=J,i.width=Math.floor(R*_t),i.height=Math.floor(J*_t),dt===!0&&(i.style.width=R+"px",i.style.height=J+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(Q*_t,ct*_t).floor()},this.setDrawingBufferSize=function(R,J,dt){Q=R,ct=J,_t=dt,i.width=Math.floor(R*dt),i.height=Math.floor(J*dt),this.setViewport(0,0,R,J)},this.setEffects=function(R){if(w===oa){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let J=0;J<R.length;J++)if(R[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,J,dt,ot){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,J,dt,ot),oe.viewport(F.copy(tt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(Ct)},this.setScissor=function(R,J,dt,ot){R.isVector4?Ct.set(R.x,R.y,R.z,R.w):Ct.set(R,J,dt,ot),oe.scissor(B.copy(Ct).multiplyScalar(_t).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){oe.setScissorTest(gt=R)},this.setOpaqueSort=function(R){qt=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,dt=!0){let ot=0;if(R){let nt=!1;if(st!==null){const Wt=st.texture.format;nt=M.has(Wt)}if(nt){const Wt=st.texture.type,Jt=v.has(Wt),Gt=ie.getClearColor(),ae=ie.getClearAlpha(),le=Gt.r,Ee=Gt.g,we=Gt.b;Jt?(C[0]=le,C[1]=Ee,C[2]=we,C[3]=ae,X.clearBufferuiv(X.COLOR,0,C)):(P[0]=le,P[1]=Ee,P[2]=we,P[3]=ae,X.clearBufferiv(X.COLOR,0,P))}else ot|=X.COLOR_BUFFER_BIT}J&&(ot|=X.DEPTH_BUFFER_BIT),dt&&(ot|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&X.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",se,!1),i.removeEventListener("webglcontextrestored",Se,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),ie.dispose(),ye.dispose(),Ut.dispose(),b.dispose(),yt.dispose(),jt.dispose(),It.dispose(),te.dispose(),Ht.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",fi),Mt.removeEventListener("sessionend",us),Pi.stop()};function se(R){R.preventDefault(),cf("WebGLRenderer: Context Lost."),ft=!0}function Se(){cf("WebGLRenderer: Context Restored."),ft=!1;const R=O.autoReset,J=ee.enabled,dt=ee.autoUpdate,ot=ee.needsUpdate,nt=ee.type;Nt(),O.autoReset=R,ee.enabled=J,ee.autoUpdate=dt,ee.needsUpdate=ot,ee.type=nt}function Ie(R){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ze(R){const J=R.target;J.removeEventListener("dispose",Ze),Ni(J)}function Ni(R){Pn(R),b.remove(R)}function Pn(R){const J=b.get(R).programs;J!==void 0&&(J.forEach(function(dt){Ht.releaseProgram(dt)}),R.isShaderMaterial&&Ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,dt,ot,nt,Wt){J===null&&(J=Xe);const Jt=nt.isMesh&&nt.matrixWorld.determinant()<0,Gt=Rr(R,J,dt,ot,nt);oe.setMaterial(ot,Jt);let ae=dt.index,le=1;if(ot.wireframe===!0){if(ae=vt.getWireframeAttribute(dt),ae===void 0)return;le=2}const Ee=dt.drawRange,we=dt.attributes.position;let $t=Ee.start*le,Ke=(Ee.start+Ee.count)*le;Wt!==null&&($t=Math.max($t,Wt.start*le),Ke=Math.min(Ke,(Wt.start+Wt.count)*le)),ae!==null?($t=Math.max($t,0),Ke=Math.min(Ke,ae.count)):we!=null&&($t=Math.max($t,0),Ke=Math.min(Ke,we.count));const gn=Ke-$t;if(gn<0||gn===1/0)return;It.setup(nt,ot,Gt,dt,ae);let ln,$e=De;if(ae!==null&&(ln=Tt.get(ae),$e=W,$e.setIndex(ln)),nt.isMesh)ot.wireframe===!0?(oe.setLineWidth(ot.wireframeLinewidth*Ve()),$e.setMode(X.LINES)):$e.setMode(X.TRIANGLES);else if(nt.isLine){let wn=ot.linewidth;wn===void 0&&(wn=1),oe.setLineWidth(wn*Ve()),nt.isLineSegments?$e.setMode(X.LINES):nt.isLineLoop?$e.setMode(X.LINE_LOOP):$e.setMode(X.LINE_STRIP)}else nt.isPoints?$e.setMode(X.POINTS):nt.isSprite&&$e.setMode(X.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)uf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))$e.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const wn=nt._multiDrawStarts,ce=nt._multiDrawCounts,un=nt._multiDrawCount,He=ae?Tt.get(ae).bytesPerElement:1,hi=b.get(ot).currentProgram.getUniforms();for(let jn=0;jn<un;jn++)hi.setValue(X,"_gl_DrawID",jn),$e.render(wn[jn]/He,ce[jn])}else if(nt.isInstancedMesh)$e.renderInstances($t,gn,nt.count);else if(dt.isInstancedBufferGeometry){const wn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,ce=Math.min(dt.instanceCount,wn);$e.renderInstances($t,gn,ce)}else $e.render($t,gn)};function Ln(R,J,dt){R.transparent===!0&&R.side===La&&R.forceSinglePass===!1?(R.side=Gi,R.needsUpdate=!0,Zi(R,J,dt),R.side=Er,R.needsUpdate=!0,Zi(R,J,dt),R.side=La):Zi(R,J,dt)}this.compile=function(R,J,dt=null){dt===null&&(dt=R),z=Ut.get(dt),z.init(J),k.push(z),dt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(z.pushLight(nt),nt.castShadow&&z.pushShadow(nt))}),R!==dt&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(z.pushLight(nt),nt.castShadow&&z.pushShadow(nt))}),z.setupLights();const ot=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Wt=nt.material;if(Wt)if(Array.isArray(Wt))for(let Jt=0;Jt<Wt.length;Jt++){const Gt=Wt[Jt];Ln(Gt,dt,nt),ot.add(Gt)}else Ln(Wt,dt,nt),ot.add(Wt)}),z=k.pop(),ot},this.compileAsync=function(R,J,dt=null){const ot=this.compile(R,J,dt);return new Promise(nt=>{function Wt(){if(ot.forEach(function(Jt){b.get(Jt).currentProgram.isReady()&&ot.delete(Jt)}),ot.size===0){nt(R);return}setTimeout(Wt,10)}Je.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let Yn=null;function Oa(R){Yn&&Yn(R)}function fi(){Pi.stop()}function us(){Pi.start()}const Pi=new Ax;Pi.setAnimationLoop(Oa),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Yn=R,Mt.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},Mt.addEventListener("sessionstart",fi),Mt.addEventListener("sessionend",us),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ft===!0)return;const dt=Mt.enabled===!0&&Mt.isPresenting===!0,ot=T!==null&&(st===null||dt)&&T.begin(L,st);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(J),J=Mt.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,J,st),z=Ut.get(R,k.length),z.init(J),k.push(z),Rn.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Me.setFromProjectionMatrix(Rn,Ya,J.reversedDepth),xe=this.localClippingEnabled,ve=Ot.init(this.clippingPlanes,xe),N=ye.get(R,H.length),N.init(),H.push(N),Mt.enabled===!0&&Mt.isPresenting===!0){const Jt=L.xr.getDepthSensingMesh();Jt!==null&&Ei(Jt,J,-1/0,L.sortObjects)}Ei(R,J,0,L.sortObjects),N.finish(),L.sortObjects===!0&&N.sort(qt,he),me=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,me&&ie.addToRenderList(N,R),this.info.render.frame++,ve===!0&&Ot.beginShadows();const nt=z.state.shadowsArray;if(ee.render(nt,R,J),ve===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&T.hasRenderPass())===!1){const Jt=N.opaque,Gt=N.transmissive;if(z.setupLights(),J.isArrayCamera){const ae=J.cameras;if(Gt.length>0)for(let le=0,Ee=ae.length;le<Ee;le++){const we=ae[le];Ar(Jt,Gt,R,we)}me&&ie.render(R);for(let le=0,Ee=ae.length;le<Ee;le++){const we=ae[le];ai(N,R,we,we.viewport)}}else Gt.length>0&&Ar(Jt,Gt,R,J),me&&ie.render(R),ai(N,R,J)}st!==null&&at===0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st)),ot&&T.end(L),R.isScene===!0&&R.onAfterRender(L,R,J),It.resetDefaultState(),xt=-1,it=null,k.pop(),k.length>0?(z=k[k.length-1],ve===!0&&Ot.setGlobalState(L.clippingPlanes,z.state.camera)):z=null,H.pop(),H.length>0?N=H[H.length-1]:N=null};function Ei(R,J,dt,ot){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)dt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Me.intersectsSprite(R)){ot&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Rn);const Jt=jt.update(R),Gt=R.material;Gt.visible&&N.push(R,Jt,Gt,dt,je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Me.intersectsObject(R))){const Jt=jt.update(R),Gt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(Jt.boundingSphere===null&&Jt.computeBoundingSphere(),je.copy(Jt.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(Rn)),Array.isArray(Gt)){const ae=Jt.groups;for(let le=0,Ee=ae.length;le<Ee;le++){const we=ae[le],$t=Gt[we.materialIndex];$t&&$t.visible&&N.push(R,Jt,$t,dt,je.z,we)}}else Gt.visible&&N.push(R,Jt,Gt,dt,je.z,null)}}const Wt=R.children;for(let Jt=0,Gt=Wt.length;Jt<Gt;Jt++)Ei(Wt[Jt],J,dt,ot)}function ai(R,J,dt,ot){const{opaque:nt,transmissive:Wt,transparent:Jt}=R;z.setupLightsView(dt),ve===!0&&Ot.setGlobalState(L.clippingPlanes,dt),ot&&oe.viewport(F.copy(ot)),nt.length>0&&ji(nt,J,dt),Wt.length>0&&ji(Wt,J,dt),Jt.length>0&&ji(Jt,J,dt),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ar(R,J,dt,ot){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ot.id]===void 0){const $t=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ot.id]=new Za(1,1,{generateMipmaps:!0,type:$t?br:oa,minFilter:Bs,samples:Math.max(4,an.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:sn.workingColorSpace})}const Wt=z.state.transmissionRenderTarget[ot.id],Jt=ot.viewport||F;Wt.setSize(Jt.z*L.transmissionResolutionScale,Jt.w*L.transmissionResolutionScale);const Gt=L.getRenderTarget(),ae=L.getActiveCubeFace(),le=L.getActiveMipmapLevel();L.setRenderTarget(Wt),L.getClearColor(St),D=L.getClearAlpha(),D<1&&L.setClearColor(16777215,.5),L.clear(),me&&ie.render(dt);const Ee=L.toneMapping;L.toneMapping=ja;const we=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),z.setupLightsView(ot),ve===!0&&Ot.setGlobalState(L.clippingPlanes,ot),ji(R,dt,ot),K.updateMultisampleRenderTarget(Wt),K.updateRenderTargetMipmap(Wt),Je.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ke=0,gn=J.length;Ke<gn;Ke++){const ln=J[Ke],{object:$e,geometry:wn,material:ce,group:un}=ln;if(ce.side===La&&$e.layers.test(ot.layers)){const He=ce.side;ce.side=Gi,ce.needsUpdate=!0,la($e,dt,ot,wn,ce,un),ce.side=He,ce.needsUpdate=!0,$t=!0}}$t===!0&&(K.updateMultisampleRenderTarget(Wt),K.updateRenderTargetMipmap(Wt))}L.setRenderTarget(Gt,ae,le),L.setClearColor(St,D),we!==void 0&&(ot.viewport=we),L.toneMapping=Ee}function ji(R,J,dt){const ot=J.isScene===!0?J.overrideMaterial:null;for(let nt=0,Wt=R.length;nt<Wt;nt++){const Jt=R[nt],{object:Gt,geometry:ae,group:le}=Jt;let Ee=Jt.material;Ee.allowOverride===!0&&ot!==null&&(Ee=ot),Gt.layers.test(dt.layers)&&la(Gt,J,dt,ae,Ee,le)}}function la(R,J,dt,ot,nt,Wt){R.onBeforeRender(L,J,dt,ot,nt,Wt),R.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(L,J,dt,ot,R,Wt),nt.transparent===!0&&nt.side===La&&nt.forceSinglePass===!1?(nt.side=Gi,nt.needsUpdate=!0,L.renderBufferDirect(dt,J,ot,nt,R,Wt),nt.side=Er,nt.needsUpdate=!0,L.renderBufferDirect(dt,J,ot,nt,R,Wt),nt.side=La):L.renderBufferDirect(dt,J,ot,nt,R,Wt),R.onAfterRender(L,J,dt,ot,nt,Wt)}function Zi(R,J,dt){J.isScene!==!0&&(J=Xe);const ot=b.get(R),nt=z.state.lights,Wt=z.state.shadowsArray,Jt=nt.state.version,Gt=Ht.getParameters(R,nt.state,Wt,J,dt),ae=Ht.getProgramCacheKey(Gt);let le=ot.programs;ot.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?J.environment:null,ot.fog=J.fog;const Ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ot.envMap=yt.get(R.envMap||ot.environment,Ee),ot.envMapRotation=ot.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,le===void 0&&(R.addEventListener("dispose",Ze),le=new Map,ot.programs=le);let we=le.get(ae);if(we!==void 0){if(ot.currentProgram===we&&ot.lightsStateVersion===Jt)return On(R,Gt),we}else Gt.uniforms=Ht.getUniforms(R),R.onBeforeCompile(Gt,L),we=Ht.acquireProgram(Gt,ae),le.set(ae,we),ot.uniforms=Gt.uniforms;const $t=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Ot.uniform),On(R,Gt),ot.needsLights=ua(R),ot.lightsStateVersion=Jt,ot.needsLights&&($t.ambientLightColor.value=nt.state.ambient,$t.lightProbe.value=nt.state.probe,$t.directionalLights.value=nt.state.directional,$t.directionalLightShadows.value=nt.state.directionalShadow,$t.spotLights.value=nt.state.spot,$t.spotLightShadows.value=nt.state.spotShadow,$t.rectAreaLights.value=nt.state.rectArea,$t.ltc_1.value=nt.state.rectAreaLTC1,$t.ltc_2.value=nt.state.rectAreaLTC2,$t.pointLights.value=nt.state.point,$t.pointLightShadows.value=nt.state.pointShadow,$t.hemisphereLights.value=nt.state.hemi,$t.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,$t.spotLightMatrix.value=nt.state.spotLightMatrix,$t.spotLightMap.value=nt.state.spotLightMap,$t.pointShadowMatrix.value=nt.state.pointShadowMatrix),ot.currentProgram=we,ot.uniformsList=null,we}function ca(R){if(R.uniformsList===null){const J=R.currentProgram.getUniforms();R.uniformsList=of.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function On(R,J){const dt=b.get(R);dt.outputColorSpace=J.outputColorSpace,dt.batching=J.batching,dt.batchingColor=J.batchingColor,dt.instancing=J.instancing,dt.instancingColor=J.instancingColor,dt.instancingMorph=J.instancingMorph,dt.skinning=J.skinning,dt.morphTargets=J.morphTargets,dt.morphNormals=J.morphNormals,dt.morphColors=J.morphColors,dt.morphTargetsCount=J.morphTargetsCount,dt.numClippingPlanes=J.numClippingPlanes,dt.numIntersection=J.numClipIntersection,dt.vertexAlphas=J.vertexAlphas,dt.vertexTangents=J.vertexTangents,dt.toneMapping=J.toneMapping}function Rr(R,J,dt,ot,nt){J.isScene!==!0&&(J=Xe),K.resetTextureUnits();const Wt=J.fog,Jt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?J.environment:null,Gt=st===null?L.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:jo,ae=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,le=yt.get(ot.envMap||Jt,ae),Ee=ot.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,we=!!dt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!dt.morphAttributes.position,Ke=!!dt.morphAttributes.normal,gn=!!dt.morphAttributes.color;let ln=ja;ot.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ln=L.toneMapping);const $e=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,wn=$e!==void 0?$e.length:0,ce=b.get(ot),un=z.state.lights;if(ve===!0&&(xe===!0||R!==it)){const Le=R===it&&ot.id===xt;Ot.setState(ot,R,Le)}let He=!1;ot.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==un.state.version||ce.outputColorSpace!==Gt||nt.isBatchedMesh&&ce.batching===!1||!nt.isBatchedMesh&&ce.batching===!0||nt.isBatchedMesh&&ce.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&ce.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&ce.instancing===!1||!nt.isInstancedMesh&&ce.instancing===!0||nt.isSkinnedMesh&&ce.skinning===!1||!nt.isSkinnedMesh&&ce.skinning===!0||nt.isInstancedMesh&&ce.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&ce.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&ce.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&ce.instancingMorph===!1&&nt.morphTexture!==null||ce.envMap!==le||ot.fog===!0&&ce.fog!==Wt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Ot.numPlanes||ce.numIntersection!==Ot.numIntersection)||ce.vertexAlphas!==Ee||ce.vertexTangents!==we||ce.morphTargets!==$t||ce.morphNormals!==Ke||ce.morphColors!==gn||ce.toneMapping!==ln||ce.morphTargetsCount!==wn)&&(He=!0):(He=!0,ce.__version=ot.version);let hi=ce.currentProgram;He===!0&&(hi=Zi(ot,J,nt));let jn=!1,Vn=!1,fa=!1;const rn=hi.getUniforms(),bn=ce.uniforms;if(oe.useProgram(hi.program)&&(jn=!0,Vn=!0,fa=!0),ot.id!==xt&&(xt=ot.id,Vn=!0),jn||it!==R){oe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),rn.setValue(X,"projectionMatrix",R.projectionMatrix),rn.setValue(X,"viewMatrix",R.matrixWorldInverse);const pi=rn.map.cameraPosition;pi!==void 0&&pi.setValue(X,Ue.setFromMatrixPosition(R.matrixWorld)),an.logarithmicDepthBuffer&&rn.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&rn.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),it!==R&&(it=R,Vn=!0,fa=!0)}if(ce.needsLights&&(un.state.directionalShadowMap.length>0&&rn.setValue(X,"directionalShadowMap",un.state.directionalShadowMap,K),un.state.spotShadowMap.length>0&&rn.setValue(X,"spotShadowMap",un.state.spotShadowMap,K),un.state.pointShadowMap.length>0&&rn.setValue(X,"pointShadowMap",un.state.pointShadowMap,K)),nt.isSkinnedMesh){rn.setOptional(X,nt,"bindMatrix"),rn.setOptional(X,nt,"bindMatrixInverse");const Le=nt.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),rn.setValue(X,"boneTexture",Le.boneTexture,K))}nt.isBatchedMesh&&(rn.setOptional(X,nt,"batchingTexture"),rn.setValue(X,"batchingTexture",nt._matricesTexture,K),rn.setOptional(X,nt,"batchingIdTexture"),rn.setValue(X,"batchingIdTexture",nt._indirectTexture,K),rn.setOptional(X,nt,"batchingColorTexture"),nt._colorsTexture!==null&&rn.setValue(X,"batchingColorTexture",nt._colorsTexture,K));const di=dt.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&Zt.update(nt,dt,hi),(Vn||ce.receiveShadow!==nt.receiveShadow)&&(ce.receiveShadow=nt.receiveShadow,rn.setValue(X,"receiveShadow",nt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&J.environment!==null&&(bn.envMapIntensity.value=J.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=Q2()),Vn&&(rn.setValue(X,"toneMappingExposure",L.toneMappingExposure),ce.needsLights&&In(bn,fa),Wt&&ot.fog===!0&&pe.refreshFogUniforms(bn,Wt),pe.refreshMaterialUniforms(bn,ot,_t,ct,z.state.transmissionRenderTarget[R.id]),of.upload(X,ca(ce),bn,K)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(of.upload(X,ca(ce),bn,K),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&rn.setValue(X,"center",nt.center),rn.setValue(X,"modelViewMatrix",nt.modelViewMatrix),rn.setValue(X,"normalMatrix",nt.normalMatrix),rn.setValue(X,"modelMatrix",nt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Le=ot.uniformsGroups;for(let pi=0,Ki=Le.length;pi<Ki;pi++){const ya=Le[pi];te.update(ya,hi),te.bind(ya,hi)}}return hi}function In(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function ua(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(R,J,dt){const ot=b.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=J,b.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:dt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,J){const dt=b.get(R);dt.__webglFramebuffer=J,dt.__useDefaultFramebuffer=J===void 0};const Ia=X.createFramebuffer();this.setRenderTarget=function(R,J=0,dt=0){st=R,V=J,at=dt;let ot=null,nt=!1,Wt=!1;if(R){const Gt=b.get(R);if(Gt.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(X.FRAMEBUFFER,Gt.__webglFramebuffer),F.copy(R.viewport),B.copy(R.scissor),ht=R.scissorTest,oe.viewport(F),oe.scissor(B),oe.setScissorTest(ht),xt=-1;return}else if(Gt.__webglFramebuffer===void 0)K.setupRenderTarget(R);else if(Gt.__hasExternalTextures)K.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ee=R.depthTexture;if(Gt.__boundDepthTexture!==Ee){if(Ee!==null&&b.has(Ee)&&(R.width!==Ee.image.width||R.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(R)}}const ae=R.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Wt=!0);const le=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[J])?ot=le[J][dt]:ot=le[J],nt=!0):R.samples>0&&K.useMultisampledRTT(R)===!1?ot=b.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?ot=le[dt]:ot=le,F.copy(R.viewport),B.copy(R.scissor),ht=R.scissorTest}else F.copy(tt).multiplyScalar(_t).floor(),B.copy(Ct).multiplyScalar(_t).floor(),ht=gt;if(dt!==0&&(ot=Ia),oe.bindFramebuffer(X.FRAMEBUFFER,ot)&&oe.drawBuffers(R,ot),oe.viewport(F),oe.scissor(B),oe.setScissorTest(ht),nt){const Gt=b.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,Gt.__webglTexture,dt)}else if(Wt){const Gt=J;for(let ae=0;ae<R.textures.length;ae++){const le=b.get(R.textures[ae]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ae,le.__webglTexture,dt,Gt)}}else if(R!==null&&dt!==0){const Gt=b.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Gt.__webglTexture,dt)}xt=-1},this.readRenderTargetPixels=function(R,J,dt,ot,nt,Wt,Jt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Jt!==void 0&&(ae=ae[Jt]),ae){oe.bindFramebuffer(X.FRAMEBUFFER,ae);try{const le=R.textures[Gt],Ee=le.format,we=le.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Gt),!an.textureFormatReadable(Ee)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!an.textureTypeReadable(we)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-ot&&dt>=0&&dt<=R.height-nt&&X.readPixels(J,dt,ot,nt,zt.convert(Ee),zt.convert(we),Wt)}finally{const le=st!==null?b.get(st).__webglFramebuffer:null;oe.bindFramebuffer(X.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(R,J,dt,ot,nt,Wt,Jt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ae=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Jt!==void 0&&(ae=ae[Jt]),ae)if(J>=0&&J<=R.width-ot&&dt>=0&&dt<=R.height-nt){oe.bindFramebuffer(X.FRAMEBUFFER,ae);const le=R.textures[Gt],Ee=le.format,we=le.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Gt),!an.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!an.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,$t),X.bufferData(X.PIXEL_PACK_BUFFER,Wt.byteLength,X.STREAM_READ),X.readPixels(J,dt,ot,nt,zt.convert(Ee),zt.convert(we),0);const Ke=st!==null?b.get(st).__webglFramebuffer:null;oe.bindFramebuffer(X.FRAMEBUFFER,Ke);const gn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await KS(X,gn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,$t),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Wt),X.deleteBuffer($t),X.deleteSync(gn),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,J=null,dt=0){const ot=Math.pow(2,-dt),nt=Math.floor(R.image.width*ot),Wt=Math.floor(R.image.height*ot),Jt=J!==null?J.x:0,Gt=J!==null?J.y:0;K.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,dt,0,0,Jt,Gt,nt,Wt),oe.unbindTexture()};const $o=X.createFramebuffer(),fs=X.createFramebuffer();this.copyTextureToTexture=function(R,J,dt=null,ot=null,nt=0,Wt=0){let Jt,Gt,ae,le,Ee,we,$t,Ke,gn;const ln=R.isCompressedTexture?R.mipmaps[Wt]:R.image;if(dt!==null)Jt=dt.max.x-dt.min.x,Gt=dt.max.y-dt.min.y,ae=dt.isBox3?dt.max.z-dt.min.z:1,le=dt.min.x,Ee=dt.min.y,we=dt.isBox3?dt.min.z:0;else{const bn=Math.pow(2,-nt);Jt=Math.floor(ln.width*bn),Gt=Math.floor(ln.height*bn),R.isDataArrayTexture?ae=ln.depth:R.isData3DTexture?ae=Math.floor(ln.depth*bn):ae=1,le=0,Ee=0,we=0}ot!==null?($t=ot.x,Ke=ot.y,gn=ot.z):($t=0,Ke=0,gn=0);const $e=zt.convert(J.format),wn=zt.convert(J.type);let ce;J.isData3DTexture?(K.setTexture3D(J,0),ce=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(K.setTexture2DArray(J,0),ce=X.TEXTURE_2D_ARRAY):(K.setTexture2D(J,0),ce=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const un=X.getParameter(X.UNPACK_ROW_LENGTH),He=X.getParameter(X.UNPACK_IMAGE_HEIGHT),hi=X.getParameter(X.UNPACK_SKIP_PIXELS),jn=X.getParameter(X.UNPACK_SKIP_ROWS),Vn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,ln.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ln.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,le),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ee),X.pixelStorei(X.UNPACK_SKIP_IMAGES,we);const fa=R.isDataArrayTexture||R.isData3DTexture,rn=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){const bn=b.get(R),di=b.get(J),Le=b.get(bn.__renderTarget),pi=b.get(di.__renderTarget);oe.bindFramebuffer(X.READ_FRAMEBUFFER,Le.__webglFramebuffer),oe.bindFramebuffer(X.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Ki=0;Ki<ae;Ki++)fa&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(R).__webglTexture,nt,we+Ki),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(J).__webglTexture,Wt,gn+Ki)),X.blitFramebuffer(le,Ee,Jt,Gt,$t,Ke,Jt,Gt,X.DEPTH_BUFFER_BIT,X.NEAREST);oe.bindFramebuffer(X.READ_FRAMEBUFFER,null),oe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||b.has(R)){const bn=b.get(R),di=b.get(J);oe.bindFramebuffer(X.READ_FRAMEBUFFER,$o),oe.bindFramebuffer(X.DRAW_FRAMEBUFFER,fs);for(let Le=0;Le<ae;Le++)fa?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bn.__webglTexture,nt,we+Le):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,bn.__webglTexture,nt),rn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,di.__webglTexture,Wt,gn+Le):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,di.__webglTexture,Wt),nt!==0?X.blitFramebuffer(le,Ee,Jt,Gt,$t,Ke,Jt,Gt,X.COLOR_BUFFER_BIT,X.NEAREST):rn?X.copyTexSubImage3D(ce,Wt,$t,Ke,gn+Le,le,Ee,Jt,Gt):X.copyTexSubImage2D(ce,Wt,$t,Ke,le,Ee,Jt,Gt);oe.bindFramebuffer(X.READ_FRAMEBUFFER,null),oe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else rn?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(ce,Wt,$t,Ke,gn,Jt,Gt,ae,$e,wn,ln.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(ce,Wt,$t,Ke,gn,Jt,Gt,ae,$e,ln.data):X.texSubImage3D(ce,Wt,$t,Ke,gn,Jt,Gt,ae,$e,wn,ln):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Wt,$t,Ke,Jt,Gt,$e,wn,ln.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Wt,$t,Ke,ln.width,ln.height,$e,ln.data):X.texSubImage2D(X.TEXTURE_2D,Wt,$t,Ke,Jt,Gt,$e,wn,ln);X.pixelStorei(X.UNPACK_ROW_LENGTH,un),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,He),X.pixelStorei(X.UNPACK_SKIP_PIXELS,hi),X.pixelStorei(X.UNPACK_SKIP_ROWS,jn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Vn),Wt===0&&J.generateMipmaps&&X.generateMipmap(ce),oe.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&K.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?K.setTextureCube(R,0):R.isData3DTexture?K.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?K.setTexture2DArray(R,0):K.setTexture2D(R,0),oe.unbindTexture()},this.resetState=function(){V=0,at=0,st=null,oe.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=sn._getDrawingBufferColorSpace(t),i.unpackColorSpace=sn._getUnpackColorSpace()}}const mc=.0002959122083,$2=24612315e-1,tA=Date.UTC(2026,6,10),eA=($2-2451545)/36525,nA=["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"],Xv={Sun:1,Mercury:166e-9,Venus:245e-8,Earth:3e-6,Mars:323e-9,Jupiter:954e-6,Saturn:286e-6,Uranus:436e-7,Neptune:515e-7,Pluto:655e-11},iA={Mercury:{a:[.38709927,37e-8],e:[.20563593,1906e-8],I:[7.00497902,-.00594749],L:[252.2503235,149472.67411175],varpi:[77.45779628,.16047689],Omega:[48.33076593,-.12534081]},Venus:{a:[.72333566,39e-7],e:[.00677672,-4107e-8],I:[3.39467605,-7889e-7],L:[181.9790995,58517.81538729],varpi:[131.60246718,.00268329],Omega:[76.67984255,-.27769418]},Earth:{a:[1.00000261,562e-8],e:[.01671123,-4392e-8],I:[-1531e-8,-.01294668],L:[100.46457166,35999.37244981],varpi:[102.93768193,.32327364],Omega:[0,0]},Mars:{a:[1.52371034,1847e-8],e:[.0933941,7882e-8],I:[1.84969142,-.00813131],L:[-4.55343205,19140.30268499],varpi:[-23.94362959,.44441088],Omega:[49.55953891,-.29257343]},Jupiter:{a:[5.202887,-11607e-8],e:[.04838624,-13253e-8],I:[1.30439695,-.00183714],L:[34.39644051,3034.74612775],varpi:[14.72847983,.21252668],Omega:[100.47390909,.20469106]},Saturn:{a:[9.53667594,-.0012506],e:[.05386179,-50991e-8],I:[2.48599187,.00193609],L:[49.95424423,1222.49362201],varpi:[92.59887831,-.41897216],Omega:[113.66242448,-.28867794]},Uranus:{a:[19.18916464,-.00196176],e:[.04725744,-4397e-8],I:[.77263783,-.00242939],L:[313.23810451,428.48202785],varpi:[170.9542763,.40805281],Omega:[74.01692503,.04240589]},Neptune:{a:[30.06992276,26291e-8],e:[.00859048,5105e-8],I:[1.77004347,35372e-8],L:[-55.12002969,218.45945325],varpi:[44.96476227,-.32241464],Omega:[131.78422574,-.00508664]},Pluto:{a:[39.48211675,-31596e-8],e:[.2488273,517e-7],I:[17.14001206,4818e-8],L:[238.92903833,145.20780515],varpi:[224.06891629,-.04062942],Omega:[110.30393684,-.01183482]}},Qu=Math.PI/180,mf=Math.PI*2,sc=s=>(s%=mf,s<0?s+mf:s);function aA(s,t){let i=t<.8?s:Math.PI;for(let r=0;r<12;r++){const l=i-t*Math.sin(i)-s,c=1-t*Math.cos(i),f=l/c;if(i-=f,Math.abs(f)<1e-13)break}return i}function rA(s,t,i,r,l,c,f){const p=aA(sc(c),t),m=Math.cos(p),d=Math.sin(p),g=Math.sqrt(1-t*t),x=s*(m-t),_=s*g*d,y=Math.sqrt(f/(s*s*s)),E=1-t*m,w=-s*y*d/E,M=s*y*g*m/E,v=Math.cos(r),C=Math.sin(r),P=Math.cos(i),N=Math.sin(i),z=Math.cos(l),H=Math.sin(l),k=v*z-C*H*P,T=-v*H-C*z*P,L=C*z+v*H*P,ft=-C*H+v*z*P,V=H*N,at=z*N;return{x:k*x+T*_,y:L*x+ft*_,z:V*x+at*_,vx:k*w+T*M,vy:L*w+ft*M,vz:V*w+at*M}}function sA(s=eA){const t=[{name:"Sun",m:1,x:0,y:0,z:0,vx:0,vy:0,vz:0}];for(const d of nA){if(d==="Sun")continue;const g=iA[d],x=g.a[0]+g.a[1]*s,_=g.e[0]+g.e[1]*s,y=(g.I[0]+g.I[1]*s)*Qu,E=(g.L[0]+g.L[1]*s)*Qu,w=(g.varpi[0]+g.varpi[1]*s)*Qu,M=(g.Omega[0]+g.Omega[1]*s)*Qu,v=w-M,C=E-w,P=mc*(1+Xv[d]),N=rA(x,_,y,M,v,C,P);t.push({name:d,m:Xv[d],...N})}let i=0,r=0,l=0,c=0,f=0,p=0,m=0;for(const d of t)i+=d.m,r+=d.m*d.vx,l+=d.m*d.vy,c+=d.m*d.vz,f+=d.m*d.x,p+=d.m*d.y,m+=d.m*d.z;for(const d of t)d.vx-=r/i,d.vy-=l/i,d.vz-=c/i,d.x-=f/i,d.y-=p/i,d.z-=m/i;return t}const Wv=1e-10,Zp=Math.cbrt(2),qv=1/(2-Zp),oA=-Zp/(2-Zp);class lA{bodies;t=0;ax;ay;az;constructor(t){this.bodies=t??sA();const i=this.bodies.length;this.ax=new Float64Array(i),this.ay=new Float64Array(i),this.az=new Float64Array(i),this.computeAccel()}computeAccel(){const t=this.bodies,i=t.length,r=this.ax,l=this.ay,c=this.az;r.fill(0),l.fill(0),c.fill(0);for(let f=0;f<i;f++){const p=t[f];for(let m=f+1;m<i;m++){const d=t[m],g=d.x-p.x,x=d.y-p.y,_=d.z-p.z,y=g*g+x*x+_*_+Wv,E=mc/(y*Math.sqrt(y)),w=E*d.m,M=E*p.m;r[f]+=g*w,l[f]+=x*w,c[f]+=_*w,r[m]-=g*M,l[m]-=x*M,c[m]-=_*M}}}kdk(t){const i=this.bodies,r=i.length,l=this.ax,c=this.ay,f=this.az,p=t/2;for(let m=0;m<r;m++){const d=i[m];d.vx+=l[m]*p,d.vy+=c[m]*p,d.vz+=f[m]*p}for(let m=0;m<r;m++){const d=i[m];d.x+=d.vx*t,d.y+=d.vy*t,d.z+=d.vz*t}this.computeAccel();for(let m=0;m<r;m++){const d=i[m];d.vx+=l[m]*p,d.vy+=c[m]*p,d.vz+=f[m]*p}}step(t){this.kdk(qv*t),this.kdk(oA*t),this.kdk(qv*t)}advance(t,i=.25,r=1600){if(!(t>0))return 0;let l=Math.ceil(t/i);l>r&&(l=r,t=l*i);const c=t/l;for(let f=0;f<l;f++)this.step(c);return this.t+=t,t}energy(){const t=this.bodies,i=t.length;let r=0;for(let l=0;l<i;l++){const c=t[l];r+=.5*c.m*(c.vx*c.vx+c.vy*c.vy+c.vz*c.vz);for(let f=l+1;f<i;f++){const p=t[f],m=p.x-c.x,d=p.y-c.y,g=p.z-c.z;r-=mc*c.m*p.m/Math.sqrt(m*m+d*d+g*g+Wv)}}return r}}function Yv(s,t,i,r,l,c,f){const p=Math.sqrt(s*s+t*t+i*i),m=r*r+l*l+c*c,d=t*c-i*l,g=i*r-s*c,x=s*l-t*r,_=Math.sqrt(d*d+g*g+x*x),y=s*r+t*l+i*c,E=m/f-1/p,w=y/f,M=E*s-w*r,v=E*t-w*l,C=E*i-w*c,P=Math.sqrt(M*M+v*v+C*C),N=1/(2/p-m/f),z=Math.acos(Math.min(1,Math.max(-1,x/_))),H=-g,k=d,T=Math.sqrt(H*H+k*k),L=T>1e-12?Math.atan2(k,H):0;let ft,V;if(P>1e-9){T>1e-12?ft=Math.atan2((C*(d*d+g*g)+x*(H*v-k*M))/(T*_),(H*M+k*v)/T):ft=Math.atan2(v,M);const at=(M*s+v*t+C*i)/(P*p);V=Math.acos(Math.min(1,Math.max(-1,at))),y<0&&(V=mf-V)}else ft=0,V=Math.atan2(t,s);return{a:N,e:P,i:z,Omega:sc(L),w:sc(ft),nu:sc(V),varpi:sc(L+ft)}}function cA(s,t){const i=Math.floor(t.length/3);if(!(s.a>0)||!(s.e>=0)||s.e>=.999999||!isFinite(s.a))return!1;const r=Math.cos(s.Omega),l=Math.sin(s.Omega),c=Math.cos(s.i),f=Math.sin(s.i),p=Math.cos(s.w),m=Math.sin(s.w),d=r*p-l*m*c,g=-r*m-l*p*c,x=l*p+r*m*c,_=-l*m+r*p*c,y=m*f,E=p*f,w=s.a*(1-s.e*s.e);for(let M=0;M<i;M++){const v=M/i*mf,C=w/(1+s.e*Math.cos(v)),P=C*Math.cos(v),N=C*Math.sin(v);t[3*M]=d*P+g*N,t[3*M+1]=x*P+_*N,t[3*M+2]=y*P+E*N}return!0}const uA="/SolarHarmonicsConsole/assets/Earth_from_Space_1773586048704-9rjcG3YA.jpg",fA="/SolarHarmonicsConsole/assets/Earth_30_year_comparison_pillars_1773586048704-Dg86GCIW.jpg",dn=(s,t,i)=>Math.max(t,Math.min(i,s)),Ua=s=>s*Math.PI/180,Un=(s,t,i)=>s+(t-s)*i,as=()=>{let s=0,t=0;for(;s===0;)s=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*t)},hA="https://www.solarsystemscope.com/textures/download",Sf="https://cdn.jsdelivr.net/npm/three-globe@2.34.0/example/img",Ju="https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images",jv={Venus:[`${Ju}/venusmap.jpg`],Mars:[`${Ju}/marsmap1k.jpg`],Jupiter:[`${Ju}/jupitermap.jpg`],Pluto:[`${Ju}/plutomap1k.jpg`]},dA=new Set(["Jupiter","Saturn","Uranus","Neptune","Pluto"]),pA=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"],mA={Sun:{kind:"G2V Main-Sequence Star",blurb:"The star at the heart of our solar system, holding 99.86% of its total mass. A churning ball of hydrogen plasma powered by nuclear fusion, the Sun converts about 4 million tonnes of matter into energy every second — the light that drives weather, ocean currents, and photosynthesis on Earth.",stats:[["Diameter","1,392,700 km (109 × Earth)"],["Mass","1.99 × 10³⁰ kg (333,000 × Earth)"],["Surface temp","5,505 °C"],["Core temp","~15,000,000 °C"],["Rotation period","~25.4 days (equator)"],["Composition","≈73% hydrogen, 25% helium"],["Age","~4.6 billion years"]]},Mercury:{kind:"Terrestrial Planet",blurb:"The smallest planet and the closest to the Sun, Mercury is a cratered, airless world that looks much like our Moon. With almost no atmosphere to trap heat, it endures the most extreme temperature swings in the solar system — scorching days and frigid nights.",stats:[["Diameter","4,879 km"],["Mass","3.30 × 10²³ kg"],["Distance from Sun","57.9 M km (0.39 AU)"],["Year length","88 Earth days"],["Day (rotation)","58.6 Earth days"],["Surface temp","−173 to 427 °C"],["Moons","0"]]},Venus:{kind:"Terrestrial Planet",blurb:"Venus is Earth’s hostile twin — nearly the same size, but wrapped in a crushing carbon-dioxide atmosphere topped with clouds of sulfuric acid. A runaway greenhouse effect makes it the hottest planet, and it spins backwards so slowly that its day outlasts its year.",stats:[["Diameter","12,104 km"],["Mass","4.87 × 10²⁴ kg"],["Distance from Sun","108.2 M km (0.72 AU)"],["Year length","224.7 Earth days"],["Day (rotation)","243 Earth days (retrograde)"],["Surface temp","464 °C (hottest planet)"],["Surface pressure","92 × Earth"],["Moons","0"]]},Earth:{kind:"Terrestrial Planet",blurb:"Our home — the only world known to harbor life. Liquid water covers 71% of its surface, a global magnetic field and thick atmosphere shield it from radiation, and plate tectonics continually resurface it. Its large Moon steadies the axial tilt that gives us stable seasons.",stats:[["Diameter","12,742 km"],["Mass","5.97 × 10²⁴ kg"],["Distance from Sun","149.6 M km (1.00 AU)"],["Year length","365.25 days"],["Day (rotation)","23.9 hours"],["Average temp","15 °C"],["Axial tilt","23.4°"],["Moons","1 (the Moon)"]]},Mars:{kind:"Terrestrial Planet",blurb:"The Red Planet owes its color to iron-oxide dust. Mars hosts the solar system’s tallest volcano, Olympus Mons, and a canyon system that would stretch across the United States. Dry riverbeds and minerals show it was once warm and wet — the prime target in the search for past life.",stats:[["Diameter","6,779 km"],["Mass","6.42 × 10²³ kg"],["Distance from Sun","227.9 M km (1.52 AU)"],["Year length","687 Earth days"],["Day (rotation)","24.6 hours"],["Average temp","−63 °C"],["Moons","2 (Phobos & Deimos)"]]},Jupiter:{kind:"Gas Giant",blurb:"The giant of the solar system — more than twice as massive as all the other planets combined. Its banded clouds churn with storms, including the Great Red Spot, a tempest wider than Earth that has raged for centuries. Its huge family of moons is a miniature planetary system.",stats:[["Diameter","139,820 km (11 × Earth)"],["Mass","1.90 × 10²⁷ kg (318 × Earth)"],["Distance from Sun","778.5 M km (5.20 AU)"],["Year length","11.9 Earth years"],["Day (rotation)","9.9 hours (fastest)"],["Cloud-top temp","−108 °C"],["Moons","95 known"]]},Saturn:{kind:"Gas Giant",blurb:"The jewel of the solar system, ringed by billions of ice fragments spanning some 282,000 km yet only tens of meters thick. Saturn is the least dense planet — lighter than water — and its moon family includes Titan, the only moon with a thick atmosphere.",stats:[["Diameter","116,460 km (9.4 × Earth)"],["Mass","5.68 × 10²⁶ kg (95 × Earth)"],["Distance from Sun","1.43 B km (9.54 AU)"],["Year length","29.4 Earth years"],["Day (rotation)","10.7 hours"],["Cloud-top temp","−139 °C"],["Ring span","~282,000 km"],["Moons","274 known (most of any planet)"]]},Uranus:{kind:"Ice Giant",blurb:"Uranus rolls around the Sun on its side — tipped almost 98°, likely by an ancient giant impact — so its poles take turns facing the Sun for 42 years at a time. Methane in its atmosphere gives it a serene teal color, and it has the coldest atmosphere of any planet.",stats:[["Diameter","50,724 km (4 × Earth)"],["Mass","8.68 × 10²⁵ kg (14.5 × Earth)"],["Distance from Sun","2.87 B km (19.2 AU)"],["Year length","84 Earth years"],["Day (rotation)","17.2 hours (retrograde)"],["Cloud-top temp","−197 °C (coldest atmosphere)"],["Axial tilt","97.8°"],["Moons","28 known"]]},Neptune:{kind:"Ice Giant",blurb:"The most distant planet, a deep cobalt world discovered in 1846 by mathematics before it was seen through a telescope. Despite receiving the least sunlight, Neptune hosts the fastest winds in the solar system — supersonic jets reaching 2,100 km/h.",stats:[["Diameter","49,244 km (3.9 × Earth)"],["Mass","1.02 × 10²⁶ kg (17 × Earth)"],["Distance from Sun","4.50 B km (30.1 AU)"],["Year length","164.8 Earth years"],["Day (rotation)","16.1 hours"],["Cloud-top temp","−201 °C"],["Winds","up to 2,100 km/h (fastest)"],["Moons","16 known"]]},Pluto:{kind:"Dwarf Planet",blurb:"The king of the Kuiper Belt, demoted from full planethood in 2006 but no less fascinating. New Horizons revealed a world with a vast heart-shaped nitrogen glacier, blue atmospheric haze, and mountains of water ice. Its moon Charon is so large the two orbit like a double world.",stats:[["Diameter","2,377 km (0.19 × Earth)"],["Mass","1.31 × 10²² kg"],["Distance from Sun","5.9 B km avg (39.5 AU)"],["Year length","248 Earth years"],["Day (rotation)","6.4 Earth days (retrograde)"],["Surface temp","−229 °C"],["Moons","5 (incl. Charon)"]]}},gA=`${Sf}/earth-night.jpg`,_A=`${Sf}/earth-water.png`,vA=`${Sf}/earth-topology.png`,xA={Earth:{color:[.15,.4,1],power:4.5,opacity:0,scale:1.025},Mars:{color:[.8,.35,.2],power:5.5,opacity:.25,scale:1.02},Jupiter:{color:[.85,.65,.35],power:3.5,opacity:.2,scale:1.03},Uranus:{color:[.4,.85,.9],power:3.5,opacity:.3,scale:1.04},Neptune:{color:[.25,.45,1],power:3.5,opacity:.35,scale:1.04}},Zv=`
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main(){
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`,Kv=`
  uniform vec3 uColor;
  uniform float uPower;
  uniform float uOpacity;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main(){
    float intensity = 1.0 - dot(vNormal, vViewDir);
    float scatter = pow(max(intensity, 0.0), uPower);
    gl_FragColor = vec4(uColor, scatter * uOpacity);
  }
`,MA=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  void main(){
    vUv = uv;
    vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,SA=`
  uniform sampler2D dayMap;
  uniform sampler2D nightMap;
  uniform sampler2D specMap;
  uniform sampler2D bumpMap;
  uniform vec3 sunDir;
  uniform vec3 camPos;
  uniform float uBumpScale;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  vec3 perturbNormal(vec3 n, vec2 uv) {
    float bL = texture2D(bumpMap, uv + vec2(-0.001, 0.0)).r;
    float bR = texture2D(bumpMap, uv + vec2( 0.001, 0.0)).r;
    float bD = texture2D(bumpMap, uv + vec2(0.0, -0.001)).r;
    float bU = texture2D(bumpMap, uv + vec2(0.0,  0.001)).r;
    vec3 bump = normalize(n + vec3((bL - bR), (bD - bU), 0.0) * uBumpScale);
    return bump;
  }

  void main(){
    vec3 geoN = normalize(vNormal);
    vec3 n = perturbNormal(geoN, vUv);
    float NdotL = dot(geoN, sunDir);
    float dayFactor = smoothstep(-0.15, 0.25, NdotL);

    vec3 dayColor = texture2D(dayMap, vUv).rgb;
    vec3 nightColor = texture2D(nightMap, vUv).rgb;
    float waterMask = texture2D(specMap, vUv).r;

    vec3 viewDir = normalize(camPos - vWorldPos);

    vec3 halfDir = normalize(sunDir + viewDir);
    float spec = pow(max(dot(n, halfDir), 0.0), 80.0) * waterMask * dayFactor;

    vec3 daySat = dayColor * 1.15;
    daySat = mix(daySat, daySat * vec3(0.7, 0.85, 1.3) * 1.1, waterMask * dayFactor);

    float nightSide = 1.0 - dayFactor;
    vec3 cityLights = nightColor * 6.0 * nightSide;

    vec3 surface = daySat * dayFactor;
    surface += vec3(0.75, 0.85, 1.0) * spec * 0.5;
    surface += cityLights;
    surface += vec3(0.018) * nightSide;

    gl_FragColor = vec4(surface, 1.0);
  }
`;function yA(){const s=Dn.useRef(null),t=Dn.useRef(0),i=1,r=4e3,[l,c]=Dn.useState(30),[f,p]=Dn.useState(()=>AA(30,i,r)),m=Dn.useRef(l);Dn.useEffect(()=>{m.current=l},[l]);const[d,g]=Dn.useState(12e3),x=Dn.useRef(d);Dn.useEffect(()=>{x.current=d},[d]);const[_,y]=Dn.useState(6e4),E=Dn.useRef(_);Dn.useEffect(()=>{E.current=_},[_]);const w=Dn.useRef(-Math.PI/4),M=Dn.useRef(.5),v=Dn.useRef(620),C=pA,[P,N]=Dn.useState("Earth"),[z,H]=Dn.useState(1),[k,T]=Dn.useState(0),L=Dn.useRef(null),ft=Dn.useRef({}),[V,at]=Dn.useState(null),st=Dn.useRef(null),xt=Dn.useRef(null),[it,F]=Dn.useState(!1);return Dn.useEffect(()=>{const B=s.current,ht=B.clientWidth||window.innerWidth,St=B.clientHeight||window.innerHeight;let D;try{D=new J2({antialias:!0})}catch{F(!0);return}D.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),D.setSize(ht,St),D.outputColorSpace=Sn,D.toneMapping=Jp,D.toneMappingExposure=1.4,B.appendChild(D.domElement);const Q=new wy;Q.background=new Ye(0);const ct=new sa(60,ht/St,.1,12e4);Q.userData._spinUpdates=[];const _t=30,qt=365.25,he=_t*1,tt=new lA,Ct={};tt.bodies.forEach((I,q)=>{Ct[I.name]=q});const gt=tt.bodies[Ct.Sun],Me={};for(const I of C){const q=tt.bodies[Ct[I]];Me[I]={x:q.x-gt.x,y:q.y-gt.y,z:q.z-gt.z,vx:q.vx-gt.vx,vy:q.vy-gt.vy,vz:q.vz-gt.vz}}const ve=I=>{const q=tt.bodies[Ct[I]];return{x:q.x-gt.x,y:q.y-gt.y,z:q.z-gt.z,vx:q.vx-gt.vx,vy:q.vy-gt.vy,vz:q.vz-gt.vz}},xe=(I,q)=>{const j=tt.bodies[Ct[I]];q.set((j.x-gt.x)*_t,(j.z-gt.z)*_t,(j.y-gt.y)*_t)},Rn=I=>{const q=ve(I);return Yv(q.x,q.y,q.z,q.vx,q.vy,q.vz,mc*(1+tt.bodies[Ct[I]].m))},Ue={};for(const I of C)Ue[I]=Rn(I);const je=()=>{const I=ve("Jupiter");return Math.atan2(I.y,I.x)},Xe={Mercury:1,Venus:1.8,Earth:2.2,Mars:1.6,Jupiter:5.6,Saturn:4.8,Uranus:3.4,Neptune:3.1,Pluto:2.4},me=I=>(Ve.push(()=>I.dispose()),I),Ve=[],X=(()=>{const I=document.createElement("canvas"),q=64;I.width=I.height=q;const j=I.getContext("2d").createRadialGradient(q/2,q/2,0,q/2,q/2,q/2);j.addColorStop(0,"#fff"),j.addColorStop(1,"#fff0");const U=I.getContext("2d");U.fillStyle=j,U.fillRect(0,0,q,q);const pt=me(new Yi(I));return pt.colorSpace=Sn,pt.needsUpdate=!0,pt})(),En=(I,q,j=110)=>{const pt=document.createElement("canvas");pt.width=pt.height=256;const Rt=pt.getContext("2d");Rt.fillStyle=I,Rt.fillRect(0,0,256,256),Rt.globalAlpha=.25,Rt.fillStyle=q;for(let et=0;et<j;et++){const Et=(Math.random()*.06+.02)*256,Dt=Math.random()*256,Vt=Math.random()*256;Rt.beginPath(),Rt.arc(Dt,Vt,Et,0,Math.PI*2),Rt.fill()}Rt.globalAlpha=1;const Lt=me(new Yi(pt));return Lt.colorSpace=Sn,Lt.needsUpdate=!0,Lt},Je=I=>{const j=document.createElement("canvas");j.width=j.height=256;const U=j.getContext("2d"),pt=256/I.length;I.forEach((Lt,et)=>{U.fillStyle=Lt,U.fillRect(0,et*pt,256,pt)});const Rt=me(new Yi(j));return Rt.colorSpace=Sn,Rt.needsUpdate=!0,Rt},an=()=>{const q=document.createElement("canvas");q.width=q.height=256;const j=q.getContext("2d");j.fillStyle="#2764cc",j.fillRect(0,0,256,256),j.fillStyle="#4caf50",j.globalAlpha=.95;for(let pt=0;pt<80;pt++){const Rt=(Math.random()*.08+.03)*256,Lt=Math.random()*256,et=Math.random()*256;j.beginPath(),j.arc(Lt,et,Rt,0,Math.PI*2),j.fill()}j.globalAlpha=1;const U=me(new Yi(q));return U.colorSpace=Sn,U.needsUpdate=!0,U},oe=I=>{switch(I){case"Mercury":return Ar();case"Venus":return ji();case"Earth":return an();case"Mars":return En("#d16b3e","#7a3e26");case"Jupiter":return Je(["#caa376","#e1c8a8","#b68955","#e6d3b7","#ad7a49","#dcc29f","#bf915f"]);case"Saturn":return la();case"Uranus":return Zi();case"Neptune":return ca();default:return En("#cdcac7","#a09d9b")}},O=new Qy;O.crossOrigin="anonymous";const b=(I,q)=>{let j=0;const U=()=>{if(j>=I.length)return;const pt=I[j++];O.load(pt,Rt=>{Rt.colorSpace=Sn,Rt.needsUpdate=!0,me(Rt),q(Rt)},void 0,()=>U())};U()},K=()=>{const j=document.createElement("canvas");j.width=2048,j.height=8;const U=j.getContext("2d");U.clearRect(0,0,2048,8);const pt=et=>.5+.2*Math.sin(et*831.7)+.16*Math.sin(et*407.3+1.7)+.12*Math.sin(et*1723.9+.6)+.08*Math.sin(et*263.1+2.9),Rt=et=>{let Et=0,Dt=200,Vt=1;const Bt=pt(et);if(et<.031)Et=0;else if(et<.288){const Xt=(et-.031)/.257;Et=.24+.24*Xt+.1*(Bt-.5),Dt=158+34*Xt+22*(Bt-.5),Vt=.92,Math.abs(et-.115)<.004&&(Et*=.3),Math.abs(et-.236)<.004&&(Et*=.3)}else if(et<.664){const Xt=(et-.288)/.376;Et=.88+.12*(Bt-.2),Dt=205+34*Bt-12*Xt,Vt=1,Math.abs(et-.3)<.006&&(Dt-=26)}else if(et<.735)Et=.05,Dt=120,Math.abs(et-.695)<.006&&(Et=.2,Dt=150);else if(et<.947){const Xt=(et-.735)/.212;Et=.6+.1*(Bt-.5)-.1*Xt,Dt=188+22*Bt-10*Xt,Vt=.97,Math.abs(et-.897)<.005&&(Et*=.06),Math.abs(et-.938)<.0022&&(Et*=.15)}else if(et<.985)Et=.012,Dt=120;else{const Xt=Math.abs(et-.9915);Et=Xt<.0035?.55*(1-Xt/.0035):0,Dt=225}return et>.9995&&(Et=0),[Math.max(0,Math.min(1,Et)),Dt,Vt]};for(let et=0;et<2048;et++){const Et=et/2047,[Dt,Vt,Bt]=Rt(Et);U.fillStyle=`rgba(${Vt|0},${Vt*.93*Bt|0},${Vt*.8*Bt|0},${Dt.toFixed(3)})`,U.fillRect(et,0,1,8)}const Lt=me(new Yi(j));return Lt.colorSpace=Sn,Lt.needsUpdate=!0,Lt},yt=()=>{const j=document.createElement("canvas");j.width=1024,j.height=8;const U=j.getContext("2d");U.clearRect(0,0,1024,8);const pt=[.08,.2,.33,.45,.58,.7,.8];for(let Lt=0;Lt<1024;Lt++){const et=Lt/1023;let Et=.02+.012*Math.sin(et*44),Dt=140;for(const Vt of pt){const Bt=Math.abs(et-Vt);if(Bt<.01){const Xt=1-Bt/.01;Et=Math.max(Et,.3*Xt),Dt=120}}{const Vt=Math.abs(et-.93);if(Vt<.028){const Bt=1-Vt/.028;Et=Math.max(Et,.95*Bt),Dt=215}}(et<.01||et>.995)&&(Et=0),U.fillStyle=`rgba(${Dt|0},${Dt*.94|0},${Dt*.92|0},${Math.max(0,Et).toFixed(3)})`,U.fillRect(Lt,0,1,8)}const Rt=me(new Yi(j));return Rt.colorSpace=Sn,Rt.needsUpdate=!0,Rt},Tt=new e1(263176,.02);Q.add(Tt);const vt=new t1(16775399,2,0,2);Q.add(vt);const jt=Ue.Mercury.a*(1-Ue.Mercury.e)*_t,Ht=Math.max(2.5,Math.min(jt*.6,_t*.8)),pe=new rs(Ht,64,48),ye=Ws(),Ut=new Si(pe,ye);Ut.name="Sun",Q.add(Ut);const Ot=new iv(new sf({map:bi(),color:16777215,blending:Vo,transparent:!0,depthWrite:!1}));Ot.scale.setScalar(jt*.9),Q.add(Ot);const ee=tr(),ie=new ac;Q.add(ie);const Zt=90,De=[],W=[],zt=[],It=[];for(let I=0;I<Zt;I++){const q=new sf({map:ee,color:16756848,blending:Vo,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1}),j=new iv(q);j.scale.setScalar(.01),De.push(j),W.push(0),zt.push(0),It.push(new Z),ie.add(j)}const te=_t*(.3871-.02),Nt=()=>{const I=W.findIndex(et=>et<=0);if(I<0)return;const q=Math.random()*Math.PI*2,j=Math.random()*Math.PI/7-Math.PI/14,U=new Z(Math.cos(q)*Math.cos(j),Math.sin(j),Math.sin(q)*Math.cos(j)),pt=8.6+Math.random()*2,Rt=De[I];Rt.position.copy(U.clone().multiplyScalar(pt));const Lt=Rt.material||new sf({map:ee});Lt.opacity=.85,Rt.material=Lt,Rt.scale.setScalar(Un(2,5,Math.random())),W[I]=1e-6,zt[I]=.9+Math.random()*1.2,It[I].copy(U).multiplyScalar(7+Math.random()*12)},Mt=I=>{const q=Math.PI*2;return I%=q,I<0?I+q:I},se=(I,q)=>{let j=q<.8?I:Math.PI;for(let U=0;U<6;U++){const pt=j-q*Math.sin(j)-I,Rt=1-q*Math.cos(j);j-=pt/Rt}return j},Se=(I,q)=>{const j=Math.sin(I),U=Math.sin(2*I);return I+2*q*j+1.25*q*q*U},Ie={},Ze={},Ni=512,Pn=new Float32Array(Ni*3),Ln=I=>{const q=Ze[I];if(!q)return;const j=Ue[I]=Rn(I),U=cA(j,Pn);if(q.visible=U,!U)return;const pt=q.geometry.getAttribute("position"),Rt=pt.array;for(let Lt=0;Lt<Ni;Lt++)Rt[3*Lt]=Pn[3*Lt]*_t,Rt[3*Lt+1]=Pn[3*Lt+2]*_t,Rt[3*Lt+2]=Pn[3*Lt+1]*_t;pt.needsUpdate=!0},Yn=I=>{if(Ze[I])return;const q=new $n,j=new Jn(new Float32Array(Ni*3),3);j.setUsage(Su),q.setAttribute("position",j);const U=new Xp({color:I==="Pluto"?9148072:5661043}),pt=new cv(q,U);pt.frustumCulled=!1,Q.add(pt),Ze[I]=pt,Ln(I)},Oa=(I,q,j)=>{const U=new rs(q*j.scale,48,32),pt=new Hi({vertexShader:Zv,fragmentShader:Kv,uniforms:{uColor:{value:new Z(j.color[0],j.color[1],j.color[2])},uPower:{value:j.power},uOpacity:{value:j.opacity}},transparent:!0,blending:Vo,side:Gi,depthWrite:!1}),Rt=new Si(U,pt);I.add(Rt),Ve.push(()=>{U.dispose(),pt.dispose()});const Lt=new rs(q*(j.scale*.997),48,32),et=new Hi({vertexShader:Zv,fragmentShader:Kv,uniforms:{uColor:{value:new Z(j.color[0],j.color[1],j.color[2])},uPower:{value:j.power+1},uOpacity:{value:j.opacity*.4}},transparent:!0,blending:Vo,side:Er,depthWrite:!1}),Et=new Si(Lt,et);I.add(Et),Ve.push(()=>{Lt.dispose(),et.dispose()})},fi={dayMap:{value:new qn},nightMap:{value:new qn},specMap:{value:new qn},bumpMap:{value:new qn},sunDir:{value:new Z(1,0,0)},camPos:{value:new Z},uBumpScale:{value:.008}},us=I=>{const q=document.createElement("canvas");q.width=q.height=4;const j=q.getContext("2d");j.fillStyle="#"+I.toString(16).padStart(6,"0"),j.fillRect(0,0,4,4);const U=me(new Yi(q));return U.colorSpace=Sn,U};fi.dayMap.value=oe("Earth"),fi.nightMap.value=us(328976),fi.specMap.value=us(0);const Pi=I=>{let q=I>>>0;return()=>(q=q*1664525+1013904223>>>0,q/4294967296)},Ei=(I,q=10)=>{const j=Pi(I),U=[];let pt=0;for(let Rt=0;Rt<q;Rt++){const Lt=1/(1+Rt*.5);pt+=Lt,U.push({fx:1+Math.floor(j()*(2+Rt*1.5)),fy:.5+j()*(1.5+Rt*1.2),ph:j()*Math.PI*2,ph2:j()*Math.PI*2,amp:Lt})}return(Rt,Lt)=>{let et=0;for(const Et of U)et+=Math.sin(Rt*Math.PI*2*Et.fx+Math.sin(Lt*Math.PI*2*Et.fy+Et.ph2)*1.8+Et.ph)*Et.amp;return et/pt}},ai=(I,q,j)=>{for(const U of[-q,0,q])I.save(),I.translate(U,0),j(),I.restore()},Ar=()=>{const j=document.createElement("canvas");j.width=2048,j.height=1024;const U=j.getContext("2d"),pt=Pi(20261),Rt=Ei(11,7),Lt=Ei(23,10),et=512,Et=256,Dt=document.createElement("canvas");Dt.width=et,Dt.height=Et;const Vt=Dt.getContext("2d"),Bt=Vt.createImageData(et,Et),Xt=[191,139,82],re=[118,108,121],ue=[47,60,110];for(let Pt=0;Pt<Et;Pt++)for(let Kt=0;Kt<et;Kt++){const Ft=Kt/et,ne=Pt/Et,ge=Rt(Ft,ne),kt=Lt(Ft*3,ne*3);let Ae,Ne,Fe;if(ge>.08){const tn=Math.min(1,(ge-.08)/.3);Ae=Un(re[0],Xt[0],tn),Ne=Un(re[1],Xt[1],tn),Fe=Un(re[2],Xt[2],tn)}else if(ge<-.08){const tn=Math.min(1,(-ge-.08)/.3);Ae=Un(re[0],ue[0],tn),Ne=Un(re[1],ue[1],tn),Fe=Un(re[2],ue[2],tn)}else Ae=re[0],Ne=re[1],Fe=re[2];const _n=1+kt*.22-(Math.abs(ne-.5)>.42?.08:0),Cn=4*(Pt*et+Kt);Bt.data[Cn]=dn(Ae*_n,0,255),Bt.data[Cn+1]=dn(Ne*_n,0,255),Bt.data[Cn+2]=dn(Fe*_n,0,255),Bt.data[Cn+3]=255}Vt.putImageData(Bt,0,0),U.imageSmoothingEnabled=!0,U.drawImage(Dt,0,0,2048,1024);for(let Pt=0;Pt<26e3;Pt++){const Kt=pt()*2048,Ft=pt()*1024,ne=pt()<.8?1:2;U.fillStyle=pt()<.45?"rgba(232,226,214,0.05)":"rgba(24,28,44,0.055)",U.fillRect(Kt,Ft,ne,ne)}ai(U,2048,()=>{const ne=U.createRadialGradient(1351.68,245.76,0,1351.68,245.76,174.08);ne.addColorStop(0,"rgba(214,156,92,0.9)"),ne.addColorStop(.75,"rgba(206,148,88,0.55)"),ne.addColorStop(1,"rgba(206,148,88,0)"),U.fillStyle=ne,U.beginPath(),U.ellipse(1351.68,245.76,174.08*1.35,174.08,0,0,Math.PI*2),U.fill(),U.strokeStyle="rgba(120,96,80,0.28)",U.lineWidth=5,U.beginPath(),U.ellipse(1351.68,245.76,174.08*1.3,174.08*.96,0,0,Math.PI*2),U.stroke()});for(let Pt=0;Pt<1400;Pt++){const Kt=pt()*2048,Ft=1024*(.03+pt()*.94),ne=(Ft/1024-.5)*Math.PI,ge=Math.min(3.2,1/Math.max(.28,Math.cos(ne))),kt=pt()<.8?1.5+pt()*6:7+pt()*16;ai(U,2048,()=>{U.globalAlpha=.14+pt()*.14,U.fillStyle=pt()<.5?"#1f2740":"#372f28",U.beginPath(),U.ellipse(Kt,Ft,kt*ge,kt,0,0,Math.PI*2),U.fill(),U.globalAlpha=.08+pt()*.08,U.fillStyle="#9a917f",U.beginPath(),U.ellipse(Kt,Ft,kt*ge*.6,kt*.6,0,0,Math.PI*2),U.fill(),U.globalAlpha=.2+pt()*.16,U.strokeStyle="#efe6d2",U.lineWidth=Math.max(.8,kt*.22),U.beginPath(),U.ellipse(Kt,Ft,kt*ge,kt,0,Math.PI*.75,Math.PI*1.65),U.stroke(),U.globalAlpha=.14+pt()*.12,U.strokeStyle="#141a30",U.lineWidth=Math.max(.8,kt*.2),U.beginPath(),U.ellipse(Kt,Ft,kt*ge,kt,0,Math.PI*1.85,Math.PI*.55),U.stroke()})}U.globalAlpha=1;for(let Pt=0;Pt<16;Pt++){const Kt=pt()*2048,Ft=1024*(.12+pt()*.76),ne=(Ft/1024-.5)*Math.PI,ge=Math.min(3.2,1/Math.max(.28,Math.cos(ne))),kt=Pt===0,Ae=kt?22:8+Math.floor(pt()*9),Ne=kt?1024*.3:1024*(.05+pt()*.1);ai(U,2048,()=>{for(let Cn=0;Cn<Ae;Cn++){const tn=pt()*Math.PI*2,Fn=Ne*(.5+pt()*.5),gi=9;for(let _i=1;_i<=gi;_i++){const kn=_i/gi,Oi=Kt+Math.cos(tn)*Fn*kn*ge,Ti=Ft+Math.sin(tn)*Fn*kn;U.globalAlpha=(kt?.1:.085)*(1-kn)*(.7+pt()*.5),U.fillStyle="#dce6f4";const Ii=(1.7-kn)*(kt?2.4:1.6);U.beginPath(),U.ellipse(Oi,Ti,Ii*ge,Ii,0,0,Math.PI*2),U.fill()}}U.globalAlpha=1;const Fe=kt?11:5,_n=U.createRadialGradient(Kt,Ft,0,Kt,Ft,Fe);_n.addColorStop(0,"rgba(236,242,250,0.9)"),_n.addColorStop(1,"rgba(236,242,250,0)"),U.fillStyle=_n,U.beginPath(),U.ellipse(Kt,Ft,Fe*ge,Fe,0,0,Math.PI*2),U.fill()})}U.globalAlpha=1;const Yt=me(new Yi(j));return Yt.colorSpace=Sn,Yt.needsUpdate=!0,Yt},ji=()=>{const j=document.createElement("canvas");j.width=1024,j.height=512;const U=j.getContext("2d"),pt=Pi(80085),Rt=Ei(41,7),Lt=Ei(57,10),et=256,Et=128,Dt=document.createElement("canvas");Dt.width=et,Dt.height=Et;const Vt=Dt.getContext("2d"),Bt=Vt.createImageData(et,Et),Xt=ue=>{const Yt=Math.sin(ue*Math.PI);return[Un(212,242,Yt),Un(176,220,Yt),Un(118,166,Yt)]};for(let ue=0;ue<Et;ue++)for(let Yt=0;Yt<et;Yt++){const Pt=Yt/et,Kt=ue/Et,[Ft,ne,ge]=Xt(Kt),kt=1+Rt(Pt,Kt)*.05+Lt(Pt*2,Kt*2)*.03,Ae=4*(ue*et+Yt);Bt.data[Ae]=dn(Ft*kt,0,255),Bt.data[Ae+1]=dn(ne*kt,0,255),Bt.data[Ae+2]=dn(ge*kt,0,255),Bt.data[Ae+3]=255}Vt.putImageData(Bt,0,0),U.imageSmoothingEnabled=!0,U.drawImage(Dt,0,0,1024,512);for(let ue=0;ue<26;ue++){const Yt=(ue+.5)/26*512,Pt=Yt/512,Kt=512/26*(.7+pt()*.9),Ft=pt()<.5,ne=.04+pt()*.055,ge=(Pt<.5?1:-1)*(4+6*Math.abs(Pt-.5));for(let kt=0;kt<1024;kt++){const Ae=kt/1024,Ne=Math.sin(Ae*Math.PI*2*2+ue*1.9)*3+Math.sin(Ae*Math.PI*2*4+ue)*1.5+Math.sin(Ae*Math.PI*2+ue*.7)*ge;U.fillStyle=Ft?`rgba(252,244,220,${ne.toFixed(3)})`:`rgba(172,136,80,${ne.toFixed(3)})`,U.fillRect(kt,Yt-Kt/2+Ne,1,Kt)}}for(let ue=0;ue<14;ue++){const Yt=pt()*1024,Pt=512*(.2+pt()*.6),Kt=20+pt()*70;ai(U,1024,()=>{const Ft=U.createRadialGradient(Yt,Pt,0,Yt,Pt,Kt);Ft.addColorStop(0,`rgba(252,246,226,${(.05+pt()*.06).toFixed(3)})`),Ft.addColorStop(1,"rgba(252,246,226,0)"),U.fillStyle=Ft,U.beginPath(),U.ellipse(Yt,Pt,Kt*1.8,Kt*.6,0,0,Math.PI*2),U.fill()})}const re=me(new Yi(j));return re.colorSpace=Sn,re.needsUpdate=!0,re},la=()=>{const j=document.createElement("canvas");j.width=2048,j.height=1024;const U=j.getContext("2d"),pt=Pi(60318),Rt=Ei(61,8),Lt=Ei(73,10),et=[[0,[138,150,144]],[.06,[158,164,148]],[.12,[182,178,142]],[.18,[205,192,148]],[.24,[186,166,116]],[.3,[220,203,152]],[.36,[199,177,122]],[.42,[228,211,160]],[.48,[232,217,168]],[.54,[209,184,128]],[.6,[224,204,148]],[.66,[199,172,112]],[.72,[214,190,130]],[.78,[192,161,100]],[.84,[205,177,116]],[.9,[186,152,92]],[1,[172,138,80]]],Et=Yt=>{for(let Pt=0;Pt<et.length-1;Pt++){const[Kt,Ft]=et[Pt],[ne,ge]=et[Pt+1];if(Yt<=ne){const kt=(Yt-Kt)/(ne-Kt);return[Un(Ft[0],ge[0],kt),Un(Ft[1],ge[1],kt),Un(Ft[2],ge[2],kt)]}}return et[et.length-1][1]},Dt=512,Vt=256,Bt=document.createElement("canvas");Bt.width=Dt,Bt.height=Vt;const Xt=Bt.getContext("2d"),re=Xt.createImageData(Dt,Vt);for(let Yt=0;Yt<Vt;Yt++)for(let Pt=0;Pt<Dt;Pt++){const Kt=Pt/Dt,Ft=Yt/Vt,ne=Rt(Kt,Ft)*.02,[ge,kt,Ae]=Et(dn(Ft+ne,0,1)),Ne=1+Lt(Kt*2,Ft*2)*.05,Fe=4*(Yt*Dt+Pt);re.data[Fe]=dn(ge*Ne,0,255),re.data[Fe+1]=dn(kt*Ne,0,255),re.data[Fe+2]=dn(Ae*Ne,0,255),re.data[Fe+3]=255}Xt.putImageData(re,0,0),U.imageSmoothingEnabled=!0,U.drawImage(Bt,0,0,2048,1024);for(let Yt=0;Yt<320;Yt++){const Pt=pt()*1024,Kt=pt()<.5;U.globalAlpha=.014+pt()*.035,U.strokeStyle=Kt?"#fff8e0":"#8a6c3c",U.lineWidth=.6+pt()*1.6,U.beginPath(),U.moveTo(0,Pt);for(let Ft=0;Ft<=2048;Ft+=32)U.lineTo(Ft,Pt+Math.sin(Ft/2048*Math.PI*2*4+Yt)*2);U.stroke()}U.globalAlpha=1;for(let Yt=0;Yt<7;Yt++){const Pt=pt()*2048,Kt=1024*(.5+pt()*.38),Ft=2+pt()*5;U.globalAlpha=.1+pt()*.1,U.fillStyle=Yt===0?"#7a6034":"#fff8e4",U.beginPath(),U.ellipse(Pt,Kt,Ft*2.2,Ft,0,0,Math.PI*2),U.fill()}U.globalAlpha=1;const ue=me(new Yi(j));return ue.colorSpace=Sn,ue.needsUpdate=!0,ue},Zi=()=>{const j=document.createElement("canvas");j.width=1024,j.height=512;const U=j.getContext("2d"),pt=Ei(91,4),Rt=256,Lt=128,et=document.createElement("canvas");et.width=Rt,et.height=Lt;const Et=et.getContext("2d"),Dt=Et.createImageData(Rt,Lt);for(let Bt=0;Bt<Lt;Bt++)for(let Xt=0;Xt<Rt;Xt++){const re=Xt/Rt,ue=Bt/Lt,Yt=Math.sin(ue*Math.PI);let Pt=Un(24,50,Yt),Kt=Un(120,180,Yt),Ft=Un(144,204,Yt);const ne=Math.exp(-Math.pow((ue-.8)/.085,2))*.3,ge=Math.exp(-Math.pow((ue-1)/.12,2))*.22,kt=Math.min(1,ne+ge);Pt=Un(Pt,205,kt),Kt=Un(Kt,244,kt),Ft=Un(Ft,248,kt);const Ae=1+pt(re,ue)*.018,Ne=4*(Bt*Rt+Xt);Dt.data[Ne]=dn(Pt*Ae,0,255),Dt.data[Ne+1]=dn(Kt*Ae,0,255),Dt.data[Ne+2]=dn(Ft*Ae,0,255),Dt.data[Ne+3]=255}Et.putImageData(Dt,0,0),U.imageSmoothingEnabled=!0,U.drawImage(et,0,0,1024,512);for(const[Bt,Xt,re,ue]of[[.28,.3,.011,.35],[.66,.76,.012,.4],[.48,.36,.008,.25]])ai(U,1024,()=>{const Yt=U.createRadialGradient(1024*Bt,512*Xt,0,1024*Bt,512*Xt,1024*re);Yt.addColorStop(0,`rgba(230,252,254,${ue})`),Yt.addColorStop(1,"rgba(230,252,254,0)"),U.fillStyle=Yt,U.beginPath(),U.ellipse(1024*Bt,512*Xt,1024*re*1.6,512*re*2.2,0,0,Math.PI*2),U.fill()});const Vt=me(new Yi(j));return Vt.colorSpace=Sn,Vt.needsUpdate=!0,Vt},ca=()=>{const j=document.createElement("canvas");j.width=1024,j.height=512;const U=j.getContext("2d"),pt=Pi(84630),Rt=Ei(101,7),Lt=Ei(113,10),et=256,Et=128,Dt=document.createElement("canvas");Dt.width=et,Dt.height=Et;const Vt=Dt.getContext("2d"),Bt=Vt.createImageData(et,Et),Xt=[[0,[19,26,84]],[.18,[34,52,152]],[.36,[46,74,202]],[.5,[56,92,222]],[.62,[44,70,196]],[.8,[30,46,142]],[1,[16,22,74]]],re=Pt=>{for(let Kt=0;Kt<Xt.length-1;Kt++){const[Ft,ne]=Xt[Kt],[ge,kt]=Xt[Kt+1];if(Pt<=ge){const Ae=(Pt-Ft)/(ge-Ft);return[Un(ne[0],kt[0],Ae),Un(ne[1],kt[1],Ae),Un(ne[2],kt[2],Ae)]}}return Xt[Xt.length-1][1]};for(let Pt=0;Pt<Et;Pt++)for(let Kt=0;Kt<et;Kt++){const Ft=Kt/et,ne=Pt/Et,[ge,kt,Ae]=re(ne),Ne=1+Rt(Ft,ne)*.09+Lt(Ft*2,ne*2)*.04,Fe=4*(Pt*et+Kt);Bt.data[Fe]=dn(ge*Ne,0,255),Bt.data[Fe+1]=dn(kt*Ne,0,255),Bt.data[Fe+2]=dn(Ae*Ne,0,255),Bt.data[Fe+3]=255}Vt.putImageData(Bt,0,0),U.imageSmoothingEnabled=!0,U.drawImage(Dt,0,0,1024,512),ai(U,1024,()=>{U.save(),U.translate(409.6,317.44),U.scale(63.488,28.16);const ge=U.createRadialGradient(0,0,0,0,0,1);ge.addColorStop(0,"rgba(13,22,74,0.95)"),ge.addColorStop(.55,"rgba(16,26,84,0.85)"),ge.addColorStop(1,"rgba(16,26,84,0)"),U.fillStyle=ge,U.beginPath(),U.arc(0,0,1,0,Math.PI*2),U.fill(),U.restore();for(let kt=0;kt<26;kt++){const Ae=Math.PI*(.15+.7*(kt/26)),Ne=409.6+Math.cos(Ae)*63.488*1.15,Fe=317.44+Math.sin(Ae)*28.16*1.35+28.16*.25;U.globalAlpha=.1+.3*Math.sin(kt/26*Math.PI),U.fillStyle="#f2f6ff",U.beginPath(),U.ellipse(Ne,Fe,3+pt()*7,1.2+pt()*2.2,0,0,Math.PI*2),U.fill()}U.globalAlpha=1}),ai(U,1024,()=>{const Pt=U.createRadialGradient(532.48,368.64,0,532.48,368.64,16.384);Pt.addColorStop(0,"rgba(238,244,255,0.8)"),Pt.addColorStop(1,"rgba(238,244,255,0)"),U.fillStyle=Pt,U.beginPath(),U.ellipse(1024*.52,512*.72,1024*.02,512*.014,0,0,Math.PI*2),U.fill()}),ai(U,1024,()=>{U.save(),U.translate(696.32,409.6),U.scale(1024*.026,512*.02);const Ft=U.createRadialGradient(0,0,0,0,0,1);Ft.addColorStop(0,"rgba(14,22,72,0.85)"),Ft.addColorStop(1,"rgba(14,22,72,0)"),U.fillStyle=Ft,U.beginPath(),U.arc(0,0,1,0,Math.PI*2),U.fill(),U.restore();const ne=U.createRadialGradient(696.32,409.6,0,696.32,409.6,1024*.008);ne.addColorStop(0,"rgba(240,246,255,0.75)"),ne.addColorStop(1,"rgba(240,246,255,0)"),U.fillStyle=ne,U.beginPath(),U.arc(696.32,409.6,1024*.008,0,Math.PI*2),U.fill()});const ue=(Pt,Kt)=>{for(let Ft=0;Ft<Kt;Ft++){const ne=pt(),ge=.05+pt()*.12,kt=512*(Pt+(pt()-.5)*.05),Ae=1.2+pt()*2.4,Ne=.15+pt()*.18,Fe=pt()*Math.PI*2,_n=Math.max(10,Math.floor(ge*1024/8));ai(U,1024,()=>{for(let Cn=0;Cn<=_n;Cn++){const tn=Cn/_n,Fn=ne+ge*tn,gi=Fn*1024,_i=kt+Math.sin(Fn*Math.PI*2*6+Fe)*3+Math.sin(Fn*Math.PI*2*14+Fe*2)*1.2,kn=Math.sin(tn*Math.PI),Oi=Ae*(.8+.5*kn),Ti=U.createRadialGradient(gi,_i,0,gi,_i,Oi*4);Ti.addColorStop(0,`rgba(238,244,255,${(Ne*kn).toFixed(3)})`),Ti.addColorStop(1,"rgba(238,244,255,0)"),U.fillStyle=Ti,U.beginPath(),U.ellipse(gi,_i,Oi*4,Oi*1.6,0,0,Math.PI*2),U.fill()}})}};ue(.33,7),ue(.44,4),ue(.68,6);const Yt=me(new Yi(j));return Yt.colorSpace=Sn,Yt.needsUpdate=!0,Yt};for(const I of C){let q;const j=dA.has(I);if(I==="Earth")q=new Hi({vertexShader:MA,fragmentShader:SA,uniforms:fi});else if(j){const Rt=I==="Saturn"?la():I==="Uranus"?Zi():I==="Neptune"?ca():oe(I),Lt=new ko({map:Rt});Lt.color.setScalar(I==="Pluto"?.9:.82),q=Lt;const et=jv[I];et&&et.length>0&&b(et,Et=>{Lt.map=Et,Lt.needsUpdate=!0})}else{const Rt=oe(I),Lt=new ko({color:16777215,map:Rt});q=Lt;const et=jv[I];et&&et.length>0&&b(et,Et=>{Lt.map=Et,Lt.needsUpdate=!0})}const U=new Si(new rs(Xe[I],64,48),q);if(U.name=I,xe(I,U.position),Ie[I]=U,Q.add(U),I==="Saturn"){const Rt=Xe.Saturn*1.2,Lt=Xe.Saturn*2.33,et=new pf(Rt,Lt,256),Et=et.attributes.position,Dt=et.attributes.uv,Vt=new Z;for(let re=0;re<Et.count;re++){Vt.fromBufferAttribute(Et,re);const ue=(Vt.length()-Rt)/(Lt-Rt);Dt.setXY(re,ue,.5)}Dt.needsUpdate=!0;const Bt=new ko({map:K(),transparent:!0,side:La,depthWrite:!1}),Xt=new Si(et,Bt);Xt.rotation.x=Math.PI/2,U.add(Xt)}if(I==="Uranus"){const Rt=Xe.Uranus*1.55,Lt=Xe.Uranus*2.02,et=new pf(Rt,Lt,256),Et=et.attributes.position,Dt=et.attributes.uv,Vt=new Z;for(let re=0;re<Et.count;re++){Vt.fromBufferAttribute(Et,re);const ue=(Vt.length()-Rt)/(Lt-Rt);Dt.setXY(re,ue,.5)}Dt.needsUpdate=!0;const Bt=new ko({map:yt(),transparent:!0,side:La,depthWrite:!1}),Xt=new Si(et,Bt);Xt.rotation.x=Math.PI/2,U.add(Xt),U.rotation.z=py.degToRad(97.77)}const pt=xA[I];pt&&Oa(U,Xe[I],pt),Yn(I)}const On=I=>{fi.dayMap.value=I};b([`${Sf}/earth-day.jpg`,`${hA}/2k_earth_daymap.jpg`,uA,fA],On),b([gA],I=>{fi.nightMap.value=I}),b([_A],I=>{fi.specMap.value=I}),b([vA],I=>{fi.bumpMap.value=I});const Rr=I=>I/149597870;let In=null,ua=null;function Ia(){const I=Ie.Earth;if(!I)return;const q=_t*Rr(384400),j=.0549,U=Ua(5.145),pt=Ua(125.08),Rt=Ua(318.15),et=2*Math.PI/27.321661,Et=new rs(.58,32,24),Dt=new hv({color:12500670,roughness:.95,metalness:0}),Vt=new Si(Et,Dt);Vt.name="Moon",I.add(Vt),In={body:Vt,a:q,e:j,i:U,Omega:pt,omega:Rt,M:0,n:et,parent:I};const Bt=256,Xt=new Float32Array(Bt*3);for(let Yt=0;Yt<Bt;Yt++){const Pt=Yt/Bt*Math.PI*2,Kt=q*(1-j*j)/(1+j*Math.cos(Pt));let Ft=Kt*Math.cos(Pt),ne=Kt*Math.sin(Pt);const ge=Math.cos(Rt),kt=Math.sin(Rt),Ae=Math.cos(U),Ne=Math.sin(U),Fe=Math.cos(pt),_n=Math.sin(pt);let Cn=Ft*ge-ne*kt,tn=Ft*kt+ne*ge,Fn=0,gi=Cn,_i=tn*Ae-Fn*Ne,kn=tn*Ne+Fn*Ae,Oi=gi*Fe-_i*_n,Ti=gi*_n+_i*Fe,Ii=kn;const ri=3*Yt;Xt[ri]=Oi,Xt[ri+1]=Ti,Xt[ri+2]=Ii}const re=new $n;re.setAttribute("position",new Jn(Xt,3));const ue=new Xp({color:8037119,transparent:!0,opacity:.6});ua=new cv(re,ue),I.add(ua)}function $o(I){if(!In)return;In.M=Mt(In.M+In.n*I);const q=se(In.M,In.e),j=Math.sqrt((1+In.e)/(1-In.e)),U=2*Math.atan(j*Math.tan(q/2)),pt=In.a*(1-In.e*Math.cos(q));let Rt=pt*Math.cos(U),Lt=pt*Math.sin(U);const et=Math.cos(In.omega),Et=Math.sin(In.omega),Dt=Math.cos(In.i),Vt=Math.sin(In.i),Bt=Math.cos(In.Omega),Xt=Math.sin(In.Omega);let re=Rt*et-Lt*Et,ue=Rt*Et+Lt*et,Yt=0,Pt=re,Kt=ue*Dt-Yt*Vt,Ft=ue*Vt+Yt*Dt,ne=Pt*Bt-Kt*Xt,ge=Pt*Xt+Kt*Bt,kt=Ft;In.body.position.set(ne,ge,kt)}let fs=[];(function(){const q=Ie.Jupiter,j=Ie.Saturn;if(!q||!j)return;const U=(pt,Rt,Lt,et,Et,Dt,Vt)=>{const Bt=new ui;Bt.rotation.x=Ua(Dt),pt.add(Bt);const Xt=new hv({color:Et,roughness:.9,metalness:0}),re=new Si(new rs(et,24,18),Xt);re.name=Vt,re.position.set(Rt,0,0),Bt.add(re),fs.push({pivot:Bt,angVel:2*Math.PI/Lt})};U(q,_t*Rr(1070400),7.154553,.72,10328719,2,"Ganymede"),U(j,_t*Rr(1221870),15.945,.67,13280356,3,"Titan")})(),Ia();const R=`
      attribute vec3 color; varying vec3 vColor;
      uniform float uMinPx; uniform float uMaxPx; uniform float uScale;
      void main(){
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_Position = projectionMatrix * mv;
        float px = uScale / max(-mv.z, 1.0);
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
      }
    `,J=`
      varying vec3 vColor; uniform sampler2D uMap; uniform float uOpacity;
      void main(){
        vec4 tex = texture2D(uMap, gl_PointCoord);
        vec4 c = vec4(vColor,1.0) * tex; c.a *= uOpacity;
        if(c.a < 0.02) discard; gl_FragColor = c;
      }
    `,dt=(I,q=1.5,j=6)=>new Hi({vertexShader:R,fragmentShader:J,transparent:!0,depthWrite:!1,depthTest:!0,blending:Hs,uniforms:{uMap:{value:X},uOpacity:{value:I},uMinPx:{value:q},uMaxPx:{value:j},uScale:{value:460*(D.getPixelRatio?.()||1)}}}),ot=(I,q,j,U,pt,Rt,Lt=.62)=>{const et=new $n,Et=new Float32Array(I*3),Dt=new Float32Array(I*3),Vt=new Float32Array(I),Bt=new Float32Array(I),Xt=new Float32Array(I),re=new Float32Array(I),ue=new Float32Array(I);for(let Ft=0;Ft<I;Ft++){const ne=Un(q[0],q[1],Math.random())*_t;Vt[Ft]=ne,Bt[Ft]=Math.random()*j,Xt[Ft]=Ua(Math.max(0,as()*U));const ge=qt*Math.pow(ne/he,1.5);ue[Ft]=2*Math.PI/ge,re[Ft]=Math.random()*Math.PI*2;const kt=Se(re[Ft],Bt[Ft]),Ae=ne*(1-Bt[Ft]*Math.cos(re[Ft])),Ne=Ae*Math.cos(kt),Fe=Ae*Math.sin(kt),_n=3*Ft;Et[_n]=Ne,Et[_n+1]=Fe*Math.sin(Xt[Ft]),Et[_n+2]=Fe*Math.cos(Xt[Ft]);const[Cn,tn,Fn]=Rt(Ft);Dt.set([Cn,tn,Fn],_n)}const Yt=new Jn(Et,3);Yt.setUsage(Su),et.setAttribute("position",Yt),et.setAttribute("color",new Jn(Dt,3));const Pt=dt(Lt,1.6,6.5),Kt=new qu(et,Pt);return Kt.frustumCulled=!1,et.boundingSphere||(et.boundingSphere=new ls(new Z(0,0,0),_t*80)),Q.add(Kt),{geo:et,mesh:Kt,a:Vt,e:Bt,inc:Xt,M:re,n:ue,cursor:0}};let nt=ot(x.current,[2.1,3.3],.12,2.5,.9,()=>{const I=.68+Math.random()*.22;return[I,I,I]},.58),Wt=ot(E.current,[42,48],.1,5.5,1.4,()=>{const I=.78+Math.random()*.18;return[I*.65,I*.85,1]},.72);const Jt=(I,q,j,U,pt,Rt=1.2)=>{const Lt=q[0]*_t,et=q[1]*_t,Et=new $n,Dt=new Float32Array(I*3),Vt=new Float32Array(I*3),Bt=new Float32Array(I),Xt=new Float32Array(I),re=new Float32Array(I),ue=new Float32Array(I),Yt=new Float32Array(I),Pt=new Ye(pt),Kt=je();for(let kt=0;kt<I;kt++){const Ae=Math.random()<.7,Ne=Ua(U),Fe=Ua(60),_n=Ne*.55*as(),Cn=Math.random()*Fe,tn=Ae?_n:Ne*.25*as()+Cn,Fn=Math.sign(j||1),gi=Mt(Kt+j+Fn*tn),_i=dn((Ae?Math.abs(_n):Cn)/Fe,0,1),kn=Un(Lt,et,Ae?.45+.35*Math.random():.25+.7*_i),Oi=Math.min(.08,Math.abs(as())*.03+.01*Math.random()),Ti=Ua(Math.max(0,as()*Rt));Bt[kt]=kn,Xt[kt]=Oi,re[kt]=Ti;const Ii=qt*Math.pow(kn/he,1.5);Yt[kt]=2*Math.PI/Ii,ue[kt]=gi;const ri=Se(ue[kt],Xt[kt]),Ai=kn*(1-Xt[kt]*Math.cos(ue[kt])),Fa=Ai*Math.cos(ri),qs=Ai*Math.sin(ri),ha=3*kt;Dt[ha]=Fa,Dt[ha+1]=qs*Math.sin(Ti),Dt[ha+2]=qs*Math.cos(Ti),Vt.set([Pt.r,Pt.g,Pt.b],ha)}const Ft=new Jn(Dt,3);Ft.setUsage(Su),Et.setAttribute("position",Ft),Et.setAttribute("color",new Jn(Vt,3));const ne=dt(.56,1.6,6.5),ge=new qu(Et,ne);return ge.frustumCulled=!1,Et.boundingSphere||(Et.boundingSphere=new ls(new Z(0,0,0),_t*80)),Q.add(ge),{geo:Et,mesh:ge,a:Bt,e:Xt,inc:re,M:ue,n:Yt,cursor:0}};let Gt,ae;const le=Math.max(2e3,Math.floor(x.current*.2));Gt=Jt(Math.floor(le/2),[4.9,5.5],+Math.PI/3,20,6484878,1),ae=Jt(Math.ceil(le/2),[4.9,5.5],-Math.PI/3,20,16739179,1);const Ee=(I,q)=>{const j=5.2028*Math.pow(.6666666666666666,.6666666666666666),U=new $n,pt=new Float32Array(I*3),Rt=new Float32Array(I*3),Lt=new Float32Array(I),et=new Float32Array(I),Et=new Float32Array(I),Dt=new Float32Array(I),Vt=new Float32Array(I),Bt=je(),Xt=new Ye(13070591);for(let Pt=0;Pt<I;Pt++){const Kt=Ua(18)*as(),Ft=Mt(Bt+q+Kt),ne=(j+Un(-.35,.35,Math.random()))*_t,ge=.08+Math.abs(as())*.05,kt=Ua(Math.max(0,as()*1.5));Lt[Pt]=ne,et[Pt]=dn(ge,0,.18),Et[Pt]=kt;const Ae=qt*Math.pow(ne/he,1.5);Vt[Pt]=2*Math.PI/Ae,Dt[Pt]=Ft;const Ne=Se(Dt[Pt],et[Pt]),Fe=ne*(1-et[Pt]*Math.cos(Dt[Pt])),_n=Fe*Math.cos(Ne),Cn=Fe*Math.sin(Ne),tn=3*Pt;pt[tn]=_n,pt[tn+1]=Cn*Math.sin(kt),pt[tn+2]=Cn*Math.cos(kt),Rt.set([Xt.r,Xt.g,Xt.b],tn)}const re=new Jn(pt,3);re.setUsage(Su),U.setAttribute("position",re),U.setAttribute("color",new Jn(Rt,3));const ue=dt(.64,1.6,6.5),Yt=new qu(U,ue);return Yt.frustumCulled=!1,U.boundingSphere||(U.boundingSphere=new ls(new Z(0,0,0),_t*80)),Q.add(Yt),{geo:U,mesh:Yt,a:Lt,e:et,inc:Et,M:Dt,n:Vt,cursor:0}};let we,$t,Ke;const gn=Math.max(1e3,Math.floor(x.current*.08));we=Ee(Math.floor(gn/3),+Math.PI/3),$t=Ee(Math.floor(gn/3),Math.PI),Ke=Ee(gn-2*Math.floor(gn/3),-Math.PI/3),(function(){const q=new $n,j=new Float32Array(2200*3);for(let pt=0;pt<2200;pt++){const Lt=Math.random(),et=Math.random(),Et=2*Math.PI*Lt,Dt=Math.acos(2*et-1);j[pt*3+0]=5e3*Math.sin(Dt)*Math.cos(Et),j[pt*3+1]=5e3*Math.sin(Dt)*Math.sin(Et),j[pt*3+2]=5e3*Math.cos(Dt)}q.setAttribute("position",new Jn(j,3));const U=new qu(q,new xx({map:X,size:1.5,transparent:!0,depthWrite:!1,color:16777215}));Q.add(U),Ve.push(()=>{q.dispose(),U.material.dispose()})})();let ln=!1,$e=0,wn=0;const ce=I=>{I.button===0&&(ln=!0,$e=I.clientX,wn=I.clientY)},un=I=>{if(!ln)return;const q=I.clientX-$e,j=I.clientY-wn;$e=I.clientX,wn=I.clientY;const U=st.current;U?(U.yaw-=q*.005,U.pitch=dn(U.pitch+j*.005,-1.35,1.35)):(w.current-=q*.005,M.current=dn(M.current+j*.005,0,1.52),v.current=dn(v.current*(1+j*.002),50,3e4))},He=()=>{ln=!1},hi=I=>{const q=st.current;q?q.dist=dn(q.dist*(I.deltaY>0?1.1:.9),q.minDist,q.maxDist):v.current=dn(v.current*(I.deltaY>0?1.1:.9),50,3e4)};D.domElement.addEventListener("mousedown",ce),window.addEventListener("mousemove",un),window.addEventListener("mouseup",He),D.domElement.addEventListener("wheel",hi,{passive:!0});const jn=["Sun",...C],Vn=I=>I==="Sun"?Ut:Ie[I],fa=I=>I==="Sun"?Ht:Xe[I],rn=I=>{let q=I,j=null;for(;q&&!j;)jn.includes(q.name)&&(j=q.name),q=q.parent;return j},bn={Saturn:2.4,Uranus:2.15},di=new Z(0,0,0),Le={active:!1,t0:0,dur:2200,fromPos:new Z,fromLook:new Z,anchor:null,fromOff:new Z,fromLookOff:new Z},pi=()=>{Le.active=!0,Le.t0=performance.now(),Le.fromPos.copy(ct.position),Le.fromLook.copy(di);const I=st.current;if(Le.anchor=I?I.obj:null,Le.anchor){const q=new Z;Le.anchor.getWorldPosition(q),Le.fromOff.copy(ct.position).sub(q),Le.fromLookOff.copy(di).sub(q)}},Ki=I=>{const q=Vn(I),j=fa(I),U=new Z;q.getWorldPosition(U);const pt=Math.atan2(ct.position.x-U.x,ct.position.z-U.z);st.current={name:I,obj:q,dist:j*3.6,minDist:j*(bn[I]??1.45),maxDist:j*30,pitch:.22,yaw:pt,spin:I==="Sun"?.05:.15},pi(),at(I)},ya=()=>{const I=st.current;st.current=null,I&&pi(),at(null)};ft.current.focusBody=Ki,ft.current.unfocus=ya;const Vs=new a1,hs=new ze,Ea=new Z,ks=new Z,Ja=new Z,$a=I=>{const q=D.domElement.getBoundingClientRect(),j=I.clientX-q.left,U=I.clientY-q.top;hs.set(j/q.width*2-1,-(U/q.height)*2+1),Vs.setFromCamera(hs,ct);let pt=null;for(const Rt of Vs.intersectObjects(jn.map(Vn),!0))if(pt=rn(Rt.object),pt)break;if(!pt){ct.getWorldDirection(Ja);let Rt=null,Lt=28;for(const et of jn){if(Vn(et).getWorldPosition(Ea),ks.subVectors(Ea,ct.position).dot(Ja)<=0)continue;Ea.project(ct);const Et=(Ea.x*.5+.5)*q.width,Dt=(-Ea.y*.5+.5)*q.height,Vt=Math.hypot(Et-j,Dt-U);Vt<Lt&&(Lt=Vt,Rt=et)}if(Rt){Vn(Rt).getWorldPosition(Ea),Vs.set(ct.position,ks.subVectors(Ea,ct.position).normalize());const et=Vs.intersectObjects(jn.map(Vn),!0)[0],Et=et?rn(et.object):null;(!Et||Et===Rt)&&(pt=Rt)}}pt&&st.current?.name!==pt&&Ki(pt)};D.domElement.addEventListener("dblclick",$a);const tl=I=>{I.key==="Escape"&&ya()};window.addEventListener("keydown",tl);const Xs=()=>{const I=Math.max(...C.map(j=>{const U=Ue[j];return U.a>0&&U.e<1?U.a*(1+U.e)*_t:0})),q=Wt?Math.max(...Wt.a)*1.05:0;return Math.max(I,q)};ft.current.fitInner=()=>{ya();const I=_t*4,q=ct.fov*Math.PI/180;v.current=dn(I/Math.tan(q/2)*1.25,80,1e4),M.current=.9},ft.current.fitFull=()=>{ya();const I=Xs(),q=ct.fov*Math.PI/180;v.current=dn(I/Math.tan(q/2)*1.25,120,3e4),M.current=.9},ft.current.topDown=()=>{ya(),M.current=1.45},ft.current.iso=()=>{ya(),M.current=.5,w.current=-Math.PI/4};const vc=(I,q,j)=>{const U=tt.bodies[Ct[I]],pt=mc*(1+U.m);let Rt=U.x-gt.x,Lt=U.y-gt.y,et=U.z-gt.z,Et=U.vx-gt.vx,Dt=U.vy-gt.vy,Vt=U.vz-gt.vz;const Bt=Math.hypot(Rt,Lt,et),Xt=Rt/Bt,re=Lt/Bt,ue=et/Bt,Yt=Et*Xt+Dt*re+Vt*ue,Pt=Et-Yt*Xt,Kt=Dt-Yt*re,Ft=Vt-Yt*ue;let ne=dn(q,.1,10);const ge=Xs()/_t*1.2,kt=.09;for(let Ii=0;Ii<200;Ii++){const ri=Yt*Xt+Pt*ne,Ai=Yt*re+Kt*ne,Fa=Yt*ue+Ft*ne;if((ri*ri+Ai*Ai+Fa*Fa)/2-pt/Bt<0){const ha=Yv(Rt,Lt,et,ri,Ai,Fa,pt);if(ha.a*(1+ha.e)<=ge&&ha.a*(1-ha.e)>=kt)break}if(ne=1+(ne-1)*.94,Math.abs(ne-1)<1e-4){ne=1;break}}Et=Yt*Xt+Pt*ne,Dt=Yt*re+Kt*ne,Vt=Yt*ue+Ft*ne;const Ae=Lt*Vt-et*Dt,Ne=et*Et-Rt*Vt,Fe=Rt*Dt-Lt*Et,_n=Math.hypot(Ae,Ne,Fe),Cn=Math.acos(dn(Fe/_n,-1,1));let tn=-Ne,Fn=Ae;const gi=Math.hypot(tn,Fn);gi<1e-12?(tn=1,Fn=0):(tn/=gi,Fn/=gi);const _i=Ua(j)-Cn,kn=Math.cos(_i),Oi=Math.sin(_i),Ti=(Ii,ri,Ai)=>{const Fa=tn*Ii+Fn*ri;return[Ii*kn+Fn*Ai*Oi+tn*Fa*(1-kn),ri*kn+-tn*Ai*Oi+Fn*Fa*(1-kn),Ai*kn+(tn*ri-Fn*Ii)*Oi]};[Rt,Lt,et]=Ti(Rt,Lt,et),[Et,Dt,Vt]=Ti(Et,Dt,Vt),U.x=gt.x+Rt,U.y=gt.y+Lt,U.z=gt.z+et,U.vx=gt.vx+Et,U.vy=gt.vy+Dt,U.vz=gt.vz+Vt,tt.computeAccel(),Ln(I),xe(I,Ie[I].position),L.current=I,st.current?.name===I&&pi()},wr=I=>{const q=tt.bodies[Ct[I]],j=Me[I];q.x=gt.x+j.x,q.y=gt.y+j.y,q.z=gt.z+j.z,q.vx=gt.vx+j.vx,q.vy=gt.vy+j.vy,q.vz=gt.vz+j.vz,Ln(I),xe(I,Ie[I].position)};ft.current.apply=vc,ft.current.resetLast=()=>{const I=L.current;I&&(wr(I),tt.computeAccel(),st.current?.name===I&&pi())},ft.current.fullReset=()=>{for(const I of C)wr(I);tt.t=0,Dr=1,tt.computeAccel(),st.current&&pi()};const mi=(I,q)=>{const j=I.geo.getAttribute("position"),U=j.array,pt=I.a.length,Lt=pt>4e4?Math.max(8e3,Math.ceil(pt/12)):Math.max(12e3,Math.ceil(pt/6));let et=I.cursor,Et=Math.min(pt,et+Lt);for(let Xt=et;Xt<Et;Xt++){const re=Mt(I.M[Xt]+I.n[Xt]*q);I.M[Xt]=re;const ue=I.e[Xt],Yt=Se(re,ue),Pt=I.a[Xt]*(1-ue*Math.cos(re)),Kt=Pt*Math.cos(Yt),Ft=Pt*Math.sin(Yt),ne=Math.sin(I.inc[Xt]),ge=Math.cos(I.inc[Xt]),kt=3*Xt;U[kt]=Kt,U[kt+1]=Ft*ne,U[kt+2]=Ft*ge}const Dt=et*3,Vt=(Et-et)*3,Bt=j;typeof Bt.setUpdateRange=="function"?Bt.setUpdateRange(Dt,Vt):(Bt.updateRange||(Bt.updateRange={offset:0,count:-1}),Bt.updateRange.offset=Dt,Bt.updateRange.count=Vt),j.needsUpdate=!0,I.cursor=Et===pt?0:Et},el=()=>{const I=B.clientWidth||window.innerWidth,q=B.clientHeight||window.innerHeight;D.setSize(I,q),ct.aspect=I/q,ct.updateProjectionMatrix()},Cr=new ResizeObserver(el);Cr.observe(B);const Vi=new Z,ki=new Z,ba=new Z,xc=new Z;let Dr=1,ds=performance.now();const nl=()=>{const I=performance.now(),q=Math.min(.25,(I-ds)/1e3);ds=I;const j=tt.advance(q*m.current);for(const et of C)xe(et,Ie[et].position);if(--Dr<=0){Dr=15;for(const et of C)Ln(et);if(xt.current){const et=tA+tt.t*864e5,Et=tt.t/365.25;xt.current.textContent=et<0xe677d21fdbff?new Date(et).toISOString().slice(0,10)+"  •  T+"+Et.toFixed(2)+" yr":"T+"+Math.round(Et).toLocaleString()+" yr"}}$o(j);for(const et of fs)et.pivot.rotation.y+=et.angVel*j;mi(nt,j),mi(Wt,j),mi(Gt,j),mi(ae,j),mi(we,j),mi($t,j),mi(Ke,j);const U=st.current;if(U)U.yaw+=.06*q,U.obj.rotateY(U.spin*q),U.obj.getWorldPosition(ki),Vi.set(ki.x+U.dist*Math.cos(U.pitch)*Math.sin(U.yaw),ki.y+U.dist*Math.sin(U.pitch),ki.z+U.dist*Math.cos(U.pitch)*Math.cos(U.yaw));else{const et=v.current,Et=w.current,Dt=M.current;Vi.set(et*Math.cos(Dt)*Math.sin(Et),et*Math.sin(Dt),et*Math.cos(Dt)*Math.cos(Et)),ki.set(0,0,0)}if(Le.active){const et=dn((I-Le.t0)/Le.dur,0,1),Et=et*et*et*(et*(et*6-15)+10);Le.anchor&&U&&Le.anchor===U.obj?(ba.subVectors(Vi,ki),ct.position.lerpVectors(Le.fromOff,ba,Et).add(ki),di.lerpVectors(Le.fromLookOff,xc.set(0,0,0),Et).add(ki)):(ct.position.lerpVectors(Le.fromPos,Vi,Et),di.lerpVectors(Le.fromLook,ki,Et));for(const Dt of jn){Vn(Dt).getWorldPosition(ba);const Vt=fa(Dt)*1.15,Bt=ct.position.distanceTo(ba);Bt<Vt&&Bt>1e-6&&ct.position.sub(ba).multiplyScalar(Vt/Bt).add(ba)}et>=1&&(Le.active=!1)}else ct.position.copy(Vi),di.copy(ki);ct.lookAt(di),vt.position.set(0,0,0),Ot.position.set(0,0,0);const pt=Ie.Earth.position,Rt=new Z().copy(pt).negate().normalize();fi.sunDir.value.copy(Rt),fi.camPos.value.copy(ct.position),Math.random()<q*6&&Nt(),Math.random()<q*6&&Nt(),ie.rotation.y+=.25*q;for(let et=0;et<Zt;et++){if(W[et]<=0)continue;W[et]+=q;const Et=De[et],Dt=Et.material||null;if(!Dt)continue;Et.position.addScaledVector(It[et],q);const Vt=dn(W[et]/zt[et],0,1);Dt.opacity=Vt<.15?Vt/.15:1-(Vt-.15)/.85,Et.scale.setScalar(2+6*Vt),(Et.position.length()>te||Vt>=1)&&(Dt.opacity=0,W[et]=0)}Ut.material.uniforms.uTime.value+=q;const Lt=Q.userData._spinUpdates;if(Lt)for(let et=0;et<Lt.length;et++)try{Lt[et](q)}catch{}D.render(Q,ct),t.current=requestAnimationFrame(nl)};return t.current=requestAnimationFrame(nl),ft.current.rebuildBelts=()=>{const I=U=>{Q.remove(U.mesh),U.geo.dispose(),U.mesh.material.dispose()};I(nt),I(Wt),I(Gt),I(ae),I(we),I($t),I(Ke),nt=ot(x.current,[2.1,3.3],.12,2.5,.9,()=>{const U=.68+Math.random()*.22;return[U,U,U]},.58),Wt=ot(E.current,[42,48],.1,5.5,1.4,()=>{const U=.78+Math.random()*.18;return[U*.65,U*.85,1]},.72);const q=Math.max(2e3,Math.floor(x.current*.2));Gt=Jt(Math.floor(q/2),[4.9,5.5],+Math.PI/3,20,6484878,1),ae=Jt(Math.ceil(q/2),[4.9,5.5],-Math.PI/3,20,16739179,1);const j=Math.max(1e3,Math.floor(x.current*.08));we=Ee(Math.floor(j/3),+Math.PI/3),$t=Ee(Math.floor(j/3),Math.PI),Ke=Ee(j-2*Math.floor(j/3),-Math.PI/3)},()=>{cancelAnimationFrame(t.current),Cr.disconnect(),D.domElement.removeEventListener("mousedown",ce),window.removeEventListener("mousemove",un),window.removeEventListener("mouseup",He),D.domElement.removeEventListener("wheel",hi),D.domElement.removeEventListener("dblclick",$a),window.removeEventListener("keydown",tl),window.__solar===ft.current&&delete window.__solar,st.current=null,B.removeChild(D.domElement),D.dispose(),Q.traverse(I=>{I.geometry?.dispose?.();const q=I.material;q&&(Array.isArray(q)?q.forEach(j=>j.dispose?.()):q.dispose?.())}),Ve.forEach(I=>{try{I()}catch{}})};function bi(){const q=document.createElement("canvas");q.width=q.height=256;const j=q.getContext("2d"),U=j.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);U.addColorStop(0,"rgba(255,200,120,.95)"),U.addColorStop(.55,"rgba(255,140,50,.35)"),U.addColorStop(1,"rgba(255,110,40,0)"),j.fillStyle=U,j.fillRect(0,0,256,256);const pt=me(new Yi(q));return pt.colorSpace=Sn,pt.needsUpdate=!0,pt}function tr(){const q=document.createElement("canvas");q.width=q.height=128;const j=q.getContext("2d"),U=j.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);U.addColorStop(0,"rgba(255,220,170,.95)"),U.addColorStop(.35,"rgba(255,140,60,.55)"),U.addColorStop(1,"rgba(255,140,60,0)"),j.fillStyle=U,j.beginPath(),j.ellipse(128/2,128/2,128*.48,128*.18,Math.PI/4,0,Math.PI*2),j.fill();const pt=me(new Yi(q));return pt.colorSpace=Sn,pt.needsUpdate=!0,pt}function Ws(){const I=`
        varying vec3 vN; varying vec3 vWP; varying vec3 vV;
        void main(){
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal);
          vV = normalize(cameraPosition - vWP);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,q=`
        varying vec3 vN; varying vec3 vWP; varying vec3 vV;
        uniform float uTime;
        float hash(vec3 p){ return fract(sin(dot(p, vec3(127.1,311.7,74.7)))*43758.5453123); }
        float noise(vec3 p){ vec3 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          float n = mix(mix(mix(hash(i+vec3(0,0,0)),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                        mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
          return n; }
        float fbm(vec3 p){ float a=0.0; float amp=0.5; float f=1.0; for(int i=0;i<5;i++){ a += amp*noise(p*f); f*=2.07; amp*=0.55; } return a; }
        vec3 palette(float t){ vec3 orange=vec3(1.0,0.58,0.20); vec3 red=vec3(0.85,0.20,0.08); vec3 white=vec3(1.0); vec3 base = 0.6*orange + 0.3*red + 0.1*white; return mix(base, white, smoothstep(0.75,0.98,t)); }
        void main(){
          vec3 n = normalize(vN);
          vec3 p = n*5.0;
          float ct = cos(uTime*0.07), st = sin(uTime*0.07);
          mat2 R = mat2(ct,-st,st,ct);
          p.xy = R * p.xy; p.yz = R * p.yz;
          float g = fbm(p);
          float s = fbm(p*2.3 + vec3(0.0,uTime*0.25,0.0));
          float t = clamp(mix(g,s,0.45),0.0,1.0);
          float mu = clamp(dot(normalize(vV), n), 0.0, 1.0);
          float limb = mix(0.55, 1.0, pow(mu, 0.35));
          vec3 col = palette(t) * (1.1 + 0.6*t) * limb;
          gl_FragColor = vec4(col, 1.0);
        }
      `;return new Hi({vertexShader:I,fragmentShader:q,uniforms:{uTime:{value:0}},transparent:!1,depthWrite:!0,depthTest:!0})}},[]),de.jsxs("div",{style:{width:"100%",height:"100vh",display:"grid",gridTemplateColumns:"1fr 420px",gap:8,background:"#000"},children:[de.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[de.jsx("div",{ref:s,style:{width:"100%",height:"100%"},children:it&&de.jsx("div",{style:{color:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",fontFamily:"system-ui",fontSize:18},children:"WebGL is required to display the 3D simulation."})}),!it&&!V&&de.jsx("div",{style:{position:"absolute",left:16,bottom:14,color:"#cbd5e1",fontFamily:"system-ui,sans-serif",fontSize:12.5,background:"rgba(17,24,39,.65)",border:"1px solid #334155",borderRadius:999,padding:"6px 12px",pointerEvents:"none"},children:"Double-click the Sun or a planet for a close-up satellite view"}),!it&&de.jsx("div",{style:{position:"absolute",right:12,top:12,color:"#cbd5e1",fontFamily:"system-ui,sans-serif",fontSize:12.5,background:"rgba(17,24,39,.65)",border:"1px solid #334155",borderRadius:8,padding:"6px 10px",pointerEvents:"none",fontVariantNumeric:"tabular-nums"},children:de.jsx("span",{ref:xt,children:"2026-07-10  •  T+0.00 yr"})}),!it&&V&&de.jsx(EA,{body:V,onBack:()=>ft.current.unfocus?.()})]}),de.jsxs("div",{style:{color:"#e5e7eb",fontFamily:"system-ui,sans-serif",background:"rgba(17,24,39,.7)",border:"1px solid #334155",borderRadius:10,padding:12,height:"calc(100vh - 8px)",overflowY:"auto"},children:[de.jsx("div",{style:{fontWeight:700,marginBottom:2},children:"🛠 Orbit Editor"}),de.jsx("div",{style:{opacity:.65,fontSize:11.5,marginBottom:10},children:"True N-body gravity: Sun + 9 planets (AU · days · M☉), Yoshida-4 symplectic, dt ≤ 0.25 d — resonances and precession emerge from the forces."}),de.jsxs(nc,{label:"Orbital Speed (days/sec)",children:[de.jsx("input",{type:"range",min:0,max:100,step:1,value:f,onChange:B=>{const ht=parseInt(B.target.value);p(ht);const St=TA(ht,i,r);c(St),m.current=St}}),de.jsx("span",{style:{textAlign:"right"},children:l})]}),de.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:[de.jsx($d,{onClick:()=>ft.current.topDown?.(),children:"Top‑down"}),de.jsx($d,{onClick:()=>ft.current.iso?.(),children:"Isometric"}),de.jsx($u,{onClick:()=>ft.current.fitInner?.(),children:"Fit Inner"}),de.jsx($u,{onClick:()=>ft.current.fitFull?.(),children:"Fit Full"})]}),de.jsxs("div",{style:{marginBottom:10},children:[de.jsx("div",{style:{marginBottom:6,opacity:.9},children:"Planet"}),de.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6},children:C.map(B=>de.jsx(bA,{active:P===B,onClick:()=>N(B),children:B},B))})]}),de.jsxs("div",{style:{marginTop:8,paddingTop:8,borderTop:"1px solid #374151"},children:[de.jsxs(nc,{label:"Speed factor (tangential Δv)",children:[de.jsx("input",{type:"range",min:.1,max:10,step:.01,value:z,onChange:B=>H(parseFloat(B.target.value))}),de.jsxs("span",{children:[z.toFixed(2),"×"]})]}),de.jsxs(nc,{label:"Tilt / Inclination (deg)",children:[de.jsx("input",{type:"range",min:0,max:30,step:.5,value:k,onChange:B=>T(parseFloat(B.target.value))}),de.jsxs("span",{children:[k.toFixed(1),"°"]})]}),de.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[de.jsx($d,{onClick:()=>ft.current.apply?.(P,z,k),children:"Apply"}),de.jsx($u,{onClick:()=>ft.current.resetLast?.(),children:"Reset Last"}),de.jsx($u,{onClick:()=>ft.current.fullReset?.(),children:"Full Reset"})]})]}),de.jsxs("div",{style:{marginTop:16,paddingTop:10,borderTop:"1px solid #374151"},children:[de.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Belts"}),de.jsxs(nc,{label:"Asteroid Density",children:[de.jsx("input",{type:"range",min:0,max:15e4,step:1e3,value:d,onChange:B=>{const ht=parseInt(B.target.value);g(ht),x.current=ht,ft.current.rebuildBelts?.()}}),de.jsx("span",{children:d.toLocaleString()})]}),de.jsxs(nc,{label:"Kuiper Density",children:[de.jsx("input",{type:"range",min:0,max:6e5,step:5e3,value:_,onChange:B=>{const ht=parseInt(B.target.value);y(ht),E.current=ht,ft.current.rebuildBelts?.()}}),de.jsx("span",{children:_.toLocaleString()})]}),de.jsxs("div",{style:{opacity:.85,fontSize:12,marginTop:6},children:["Trojans/Greeks ≈ ",de.jsx("b",{children:"20%"})," of main belt • Hildas ≈ ",de.jsx("b",{children:"8%"})," (auto‑scaled)"]})]})]})]})}function EA({body:s,onBack:t}){const i=mA[s];return de.jsxs("div",{style:{position:"absolute",top:16,left:16,width:340,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",overflowY:"auto",color:"#e5e7eb",fontFamily:"system-ui,sans-serif",background:"rgba(17,24,39,.85)",border:"1px solid #334155",borderRadius:12,padding:16,backdropFilter:"blur(6px)"},children:[de.jsx("button",{onClick:t,style:{padding:"7px 12px",borderRadius:8,background:"#059669",border:"1px solid #10b981",color:"#fff",cursor:"pointer",fontWeight:600},children:"← Back to Solar System"}),de.jsx("div",{style:{fontSize:26,fontWeight:800,marginTop:12,lineHeight:1.1},children:s}),de.jsx("div",{style:{color:"#34d399",fontSize:11.5,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",marginTop:3,marginBottom:10},children:i.kind}),de.jsx("p",{style:{fontSize:13,lineHeight:1.55,opacity:.92,margin:"0 0 12px"},children:i.blurb}),de.jsx("div",{children:i.stats.map(([r,l])=>de.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12,padding:"6px 0",borderTop:"1px solid #273244",fontSize:12.5},children:[de.jsx("span",{style:{opacity:.7,whiteSpace:"nowrap"},children:r}),de.jsx("span",{style:{textAlign:"right",fontWeight:600},children:l})]},r))}),de.jsx("div",{style:{opacity:.6,fontSize:11.5,marginTop:10},children:"Drag to orbit • Scroll to zoom • Esc to exit"})]})}function nc({label:s,children:t}){return de.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 100px",alignItems:"center",gap:10,marginBottom:12},children:[de.jsx("div",{style:{opacity:.9},children:s}),t]})}function bA({active:s,children:t,onClick:i}){return de.jsx("button",{onClick:i,style:{padding:"6px 8px",borderRadius:8,background:s?"#059669":"#1f2937",border:`1px solid ${s?"#10b981":"#374151"}`,color:"#e5e7eb",cursor:"pointer"},children:t})}function $d({children:s,onClick:t}){return de.jsx("button",{onClick:t,style:{padding:"6px 10px",borderRadius:8,background:"#059669",border:"1px solid #10b981",color:"#fff",cursor:"pointer"},children:s})}function $u({children:s,onClick:t}){return de.jsx("button",{onClick:t,style:{padding:"6px 10px",borderRadius:8,background:"#374151",border:"1px solid #4b5563",color:"#e5e7eb",cursor:"pointer"},children:s})}function TA(s,t,i){const r=s/100;return Math.round(t*Math.pow(i/t,r))}function AA(s,t,i){const r=Math.log(s/t)/Math.log(i/t);return Math.round(RA(r)*100)}function RA(s){return Math.max(0,Math.min(1,s))}function wA(){return de.jsx(yA,{})}mS.createRoot(document.getElementById("root")).render(de.jsx(wA,{}));
