(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Sd={exports:{}},jl={};var L_;function aS(){if(L_)return jl;L_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return jl.Fragment=t,jl.jsx=i,jl.jsxs=i,jl}var N_;function sS(){return N_||(N_=1,Sd.exports=aS()),Sd.exports}var pe=sS(),yd={exports:{}},Zl={},bd={exports:{}},Ed={};var P_;function rS(){return P_||(P_=1,(function(r){function t(F,B){var dt=F.length;F.push(B);t:for(;0<dt;){var bt=dt-1>>>1,U=F[bt];if(0<l(U,B))F[bt]=B,F[dt]=U,dt=bt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var B=F[0],dt=F.pop();if(dt!==B){F[0]=dt;t:for(var bt=0,U=F.length,J=U>>>1;bt<J;){var ot=2*(bt+1)-1,vt=F[ot],Kt=ot+1,de=F[Kt];if(0>l(vt,dt))Kt<U&&0>l(de,vt)?(F[bt]=de,F[Kt]=dt,bt=Kt):(F[bt]=vt,F[ot]=dt,bt=ot);else if(Kt<U&&0>l(de,dt))F[bt]=de,F[Kt]=dt,bt=Kt;else break t}}return B}function l(F,B){var dt=F.sortIndex-B.sortIndex;return dt!==0?dt:F.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],d=[],g=1,x=null,_=3,y=!1,b=!1,w=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var B=i(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=F)s(d),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(d)}}function z(F){if(w=!1,P(F),!b)if(i(m)!==null)b=!0,H||(H=!0,st());else{var B=i(d);B!==null&&at(z,B.startTime-F)}}var H=!1,k=-1,T=5,N=-1;function ht(){return M?!0:!(r.unstable_now()-N<T)}function V(){if(M=!1,H){var F=r.unstable_now();N=F;var B=!0;try{t:{b=!1,w&&(w=!1,C(k),k=-1),y=!0;var dt=_;try{e:{for(P(F),x=i(m);x!==null&&!(x.expirationTime>F&&ht());){var bt=x.callback;if(typeof bt=="function"){x.callback=null,_=x.priorityLevel;var U=bt(x.expirationTime<=F);if(F=r.unstable_now(),typeof U=="function"){x.callback=U,P(F),B=!0;break e}x===i(m)&&s(m),P(F)}else s(m);x=i(m)}if(x!==null)B=!0;else{var J=i(d);J!==null&&at(z,J.startTime-F),B=!1}}break t}finally{x=null,_=dt,y=!1}B=void 0}}finally{B?st():H=!1}}}var st;if(typeof I=="function")st=function(){I(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,St=lt.port2;lt.port1.onmessage=V,st=function(){St.postMessage(null)}}else st=function(){v(V,0)};function at(F,B){k=v(function(){F(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(F){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var dt=_;_=B;try{return F()}finally{_=dt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var dt=_;_=F;try{return B()}finally{_=dt}},r.unstable_scheduleCallback=function(F,B,dt){var bt=r.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?bt+dt:bt):dt=bt,F){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=dt+U,F={id:g++,callback:B,priorityLevel:F,startTime:dt,expirationTime:U,sortIndex:-1},dt>bt?(F.sortIndex=dt,t(d,F),i(m)===null&&F===i(d)&&(w?(C(k),k=-1):w=!0,at(z,dt-bt))):(F.sortIndex=U,t(m,F),b||y||(b=!0,H||(H=!0,st()))),F},r.unstable_shouldYield=ht,r.unstable_wrapCallback=function(F){var B=_;return function(){var dt=_;_=B;try{return F.apply(this,arguments)}finally{_=dt}}}})(Ed)),Ed}var O_;function oS(){return O_||(O_=1,bd.exports=rS()),bd.exports}var Td={exports:{}},Pe={};var I_;function lS(){if(I_)return Pe;I_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function M(U,J,ot){this.props=U,this.context=J,this.refs=w,this.updater=ot||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=M.prototype;function C(U,J,ot){this.props=U,this.context=J,this.refs=w,this.updater=ot||y}var I=C.prototype=new v;I.constructor=C,b(I,M.prototype),I.isPureReactComponent=!0;var P=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function k(U,J,ot,vt,Kt,de){return ot=de.ref,{$$typeof:r,type:U,key:J,ref:ot!==void 0?ot:null,props:de}}function T(U,J){return k(U.type,J,void 0,void 0,void 0,U.props)}function N(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function ht(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ot){return J[ot]})}var V=/\/+/g;function st(U,J){return typeof U=="object"&&U!==null&&U.key!=null?ht(""+U.key):J.toString(36)}function lt(){}function St(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(lt,lt):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function at(U,J,ot,vt,Kt){var de=typeof U;(de==="undefined"||de==="boolean")&&(U=null);var nt=!1;if(U===null)nt=!0;else switch(de){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(U.$$typeof){case r:case t:nt=!0;break;case g:return nt=U._init,at(nt(U._payload),J,ot,vt,Kt)}}if(nt)return Kt=Kt(U),nt=vt===""?"."+st(U,0):vt,P(Kt)?(ot="",nt!=null&&(ot=nt.replace(V,"$&/")+"/"),at(Kt,J,ot,"",function(ye){return ye})):Kt!=null&&(N(Kt)&&(Kt=T(Kt,ot+(Kt.key==null||U&&U.key===Kt.key?"":(""+Kt.key).replace(V,"$&/")+"/")+nt)),J.push(Kt)),1;nt=0;var Pt=vt===""?".":vt+":";if(P(U))for(var _t=0;_t<U.length;_t++)vt=U[_t],de=Pt+st(vt,_t),nt+=at(vt,J,ot,de,Kt);else if(_t=_(U),typeof _t=="function")for(U=_t.call(U),_t=0;!(vt=U.next()).done;)vt=vt.value,de=Pt+st(vt,_t++),nt+=at(vt,J,ot,de,Kt);else if(de==="object"){if(typeof U.then=="function")return at(St(U),J,ot,vt,Kt);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return nt}function F(U,J,ot){if(U==null)return U;var vt=[],Kt=0;return at(U,vt,"","",function(de){return J.call(ot,de,Kt++)}),vt}function B(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(ot){(U._status===0||U._status===-1)&&(U._status=1,U._result=ot)},function(ot){(U._status===0||U._status===-1)&&(U._status=2,U._result=ot)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var dt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function bt(){}return Pe.Children={map:F,forEach:function(U,J,ot){F(U,function(){J.apply(this,arguments)},ot)},count:function(U){var J=0;return F(U,function(){J++}),J},toArray:function(U){return F(U,function(J){return J})||[]},only:function(U){if(!N(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Pe.Component=M,Pe.Fragment=i,Pe.Profiler=l,Pe.PureComponent=C,Pe.StrictMode=s,Pe.Suspense=m,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},Pe.cache=function(U){return function(){return U.apply(null,arguments)}},Pe.cloneElement=function(U,J,ot){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var vt=b({},U.props),Kt=U.key,de=void 0;if(J!=null)for(nt in J.ref!==void 0&&(de=void 0),J.key!==void 0&&(Kt=""+J.key),J)!H.call(J,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&J.ref===void 0||(vt[nt]=J[nt]);var nt=arguments.length-2;if(nt===1)vt.children=ot;else if(1<nt){for(var Pt=Array(nt),_t=0;_t<nt;_t++)Pt[_t]=arguments[_t+2];vt.children=Pt}return k(U.type,Kt,void 0,void 0,de,vt)},Pe.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},Pe.createElement=function(U,J,ot){var vt,Kt={},de=null;if(J!=null)for(vt in J.key!==void 0&&(de=""+J.key),J)H.call(J,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(Kt[vt]=J[vt]);var nt=arguments.length-2;if(nt===1)Kt.children=ot;else if(1<nt){for(var Pt=Array(nt),_t=0;_t<nt;_t++)Pt[_t]=arguments[_t+2];Kt.children=Pt}if(U&&U.defaultProps)for(vt in nt=U.defaultProps,nt)Kt[vt]===void 0&&(Kt[vt]=nt[vt]);return k(U,de,void 0,void 0,null,Kt)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(U){return{$$typeof:p,render:U}},Pe.isValidElement=N,Pe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:B}},Pe.memo=function(U,J){return{$$typeof:d,type:U,compare:J===void 0?null:J}},Pe.startTransition=function(U){var J=z.T,ot={};z.T=ot;try{var vt=U(),Kt=z.S;Kt!==null&&Kt(ot,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(bt,dt)}catch(de){dt(de)}finally{z.T=J}},Pe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Pe.use=function(U){return z.H.use(U)},Pe.useActionState=function(U,J,ot){return z.H.useActionState(U,J,ot)},Pe.useCallback=function(U,J){return z.H.useCallback(U,J)},Pe.useContext=function(U){return z.H.useContext(U)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(U,J){return z.H.useDeferredValue(U,J)},Pe.useEffect=function(U,J,ot){var vt=z.H;if(typeof ot=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(U,J)},Pe.useId=function(){return z.H.useId()},Pe.useImperativeHandle=function(U,J,ot){return z.H.useImperativeHandle(U,J,ot)},Pe.useInsertionEffect=function(U,J){return z.H.useInsertionEffect(U,J)},Pe.useLayoutEffect=function(U,J){return z.H.useLayoutEffect(U,J)},Pe.useMemo=function(U,J){return z.H.useMemo(U,J)},Pe.useOptimistic=function(U,J){return z.H.useOptimistic(U,J)},Pe.useReducer=function(U,J,ot){return z.H.useReducer(U,J,ot)},Pe.useRef=function(U){return z.H.useRef(U)},Pe.useState=function(U){return z.H.useState(U)},Pe.useSyncExternalStore=function(U,J,ot){return z.H.useSyncExternalStore(U,J,ot)},Pe.useTransition=function(){return z.H.useTransition()},Pe.version="19.1.0",Pe}var F_;function rm(){return F_||(F_=1,Td.exports=lS()),Td.exports}var Ad={exports:{}},Ei={};var B_;function cS(){if(B_)return Ei;B_=1;var r=rm();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ei.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ei.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Ei.flushSync=function(m){var d=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=g,s.d.f()}},Ei.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Ei.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ei.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,x=p(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ei.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Ei.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,x=p(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ei.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Ei.requestFormReset=function(m){s.d.r(m)},Ei.unstable_batchedUpdates=function(m,d){return m(d)},Ei.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Ei.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ei.version="19.1.0",Ei}var z_;function uS(){if(z_)return Ad.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ad.exports=cS(),Ad.exports}var H_;function fS(){if(H_)return Zl;H_=1;var r=oS(),t=rm(),i=uS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=h;break}if(A===o){S=!0,o=u,a=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===a){S=!0,a=h,o=u;break}if(A===o){S=!0,o=h,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),I=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function St(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case M:return"Profiler";case w:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case I:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:St(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return St(e(n))}catch{}}return null}var at=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},bt=[],U=-1;function J(e){return{current:e}}function ot(e){0>U||(e.current=bt[U],bt[U]=null,U--)}function vt(e,n){U++,bt[U]=e.current,e.current=n}var Kt=J(null),de=J(null),nt=J(null),Pt=J(null);function _t(e,n){switch(vt(nt,n),vt(de,e),vt(Kt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?r_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=r_(n),e=o_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ot(Kt),vt(Kt,e)}function ye(){ot(Kt),ot(de),ot(nt)}function xe(e){e.memoizedState!==null&&vt(Pt,e);var n=Kt.current,a=o_(n,e.type);n!==a&&(vt(de,e),vt(Kt,a))}function Me(e){de.current===e&&(ot(Kt),ot(de)),Pt.current===e&&(ot(Pt),kl._currentValue=dt)}var Cn=Object.prototype.hasOwnProperty,Le=r.unstable_scheduleCallback,We=r.unstable_cancelCallback,qe=r.unstable_shouldYield,me=r.unstable_requestPaint,Qe=r.unstable_now,X=r.unstable_getCurrentPriorityLevel,Dn=r.unstable_ImmediatePriority,Je=r.unstable_UserBlockingPriority,$e=r.unstable_NormalPriority,fe=r.unstable_LowPriority,O=r.unstable_IdlePriority,E=r.log,Q=r.unstable_setDisableYieldValue,Et=null,Tt=null;function xt(e){if(typeof E=="function"&&Q(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Et,e)}catch{}}var Qt=Math.clz32?Math.clz32:Se,Yt=Math.log,_e=Math.LN2;function Se(e){return e>>>=0,e===0?32:31-(Yt(e)/_e|0)|0}var It=256,zt=4194304;function ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function le(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=ae(o):(S&=A,S!==0?u=ae(S):a||(a=A&~e,a!==0&&(u=ae(a))))):(A=o&~h,A!==0?u=ae(A):S!==0?u=ae(S):a||(a=o&~e,a!==0&&(u=ae(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=It;return It<<=1,(It&4194048)===0&&(It=256),e}function kt(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Vt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ne(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ft(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,ut=e.hiddenUpdates;for(a=S&~a;0<a;){var Rt=31-Qt(a),Dt=1<<Rt;A[Rt]=0,G[Rt]=-1;var ft=ut[Rt];if(ft!==null)for(ut[Rt]=null,Rt=0;Rt<ft.length;Rt++){var pt=ft[Rt];pt!==null&&(pt.lane&=-536870913)}a&=~Dt}o!==0&&yt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function yt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Qt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function re(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Qt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ge(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ye(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function xi(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Bn=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Bn,fn="__reactProps$"+Bn,ya="__reactContainer$"+Bn,Ci="__reactEvents$"+Bn,Fi="__reactListeners$"+Bn,ti="__reactHandles$"+Bn,Os="__reactResources$"+Bn,za="__reactMarker$"+Bn;function rs(e){delete e[Wn],delete e[fn],delete e[Ci],delete e[Fi],delete e[ti]}function Bi(e){var n=e[Wn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ya]||a[Wn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=f_(e);e!==null;){if(a=e[Wn])return a;e=f_(e)}return n}e=a,a=e.parentNode}return null}function ca(e){if(e=e[Wn]||e[ya]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Yi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ba(e){var n=e[Os];return n||(n=e[Os]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Un(e){e[za]=!0}var zn=new Set,mr={};function Ea(e,n){Ha(e,n),Ha(e+"Capture",n)}function Ha(e,n){for(mr[e]=n,e=0;e<n.length;e++)zn.add(n[e])}var Kr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},R={};function $(e){return Cn.call(R,e)?!0:Cn.call(Qr,e)?!1:Kr.test(e)?R[e]=!0:(Qr[e]=!0,!1)}function mt(e,n,a){if($(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function it(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var jt,ie;function Xt(e){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+ie}var oe=!1;function ce(e,n){if(!e||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Dt=function(){throw Error()};if(Object.defineProperty(Dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Dt,[])}catch(pt){var ft=pt}Reflect.construct(e,[],Dt)}else{try{Dt.call()}catch(pt){ft=pt}e.call(Dt.prototype)}}else{try{throw Error()}catch(pt){ft=pt}(Dt=e())&&typeof Dt.catch=="function"&&Dt.catch(function(){})}}catch(pt){if(pt&&ft&&typeof pt.stack=="string")return[pt.stack,ft.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var G=S.split(`
`),ut=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ut.length&&!ut[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ut.length)for(o=G.length-1,u=ut.length-1;1<=o&&0<=u&&G[o]!==ut[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ut[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ut[u]){var Rt=`
`+G[o].replace(" at new "," at ");return e.displayName&&Rt.includes("<anonymous>")&&(Rt=Rt.replace("<anonymous>",e.displayName)),Rt}while(1<=o&&0<=u);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function Te(e){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Xt("Activity");default:return""}}function Ue(e){try{var n="";do n+=Te(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ge(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hn(e){var n=Ge(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function an(e){e._valueTracker||(e._valueTracker=hn(e))}function je(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ge(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ue=/[\n"\\]/g;function dn(e){return e.replace(ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(e,n,a,o,u,h,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?ri(e,S,$t(n)):a!=null?ri(e,S,$t(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+$t(A):e.removeAttribute("name")}function Mi(e,n,a,o,u,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function ri(e,n,a){n==="number"&&xn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ei(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ji(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function sn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(at(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ln(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Di(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ln(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Ln(e,h,n[h])}function Zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _r(e){return bc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var os=null;function Ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,ls=null;function Ec(e){var n=ca(e);if(n&&(e=n.stateNode)){var a=e[fn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Be(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[fn]||null;if(!u)throw Error(s(90));Be(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&je(o)}break t;case"textarea":ji(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ei(e,!!a.multiple,n,!1)}}}var ka=!1;function Gn(e,n,a){if(ka)return e(n,a);ka=!0;try{var o=e(n);return o}finally{if(ka=!1,(Va!==null||ls!==null)&&(ou(),Va&&(n=Va,e=ls,ls=Va=null,Ec(n),e)))for(n=0;n<e.length;n++)Ec(e[n])}}function Ta(e,n){var a=e.stateNode;if(a===null)return null;var o=a[fn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=!1;if(ua)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{Xa=!1}var Aa=null,Ra=null,vr=null;function rl(){if(vr)return vr;var e,n=Ra,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return vr=u.slice(e,1<o?1-o:void 0)}function xr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function ol(){return!1}function Si(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Mr:ol,this.isPropagationStopped=ol,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=Si(qa),Sr=g({},qa,{view:0,detail:0}),Tc=Si(Sr),cs,Hi,ha,Jr=g({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:At,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ha&&(ha&&e.type==="mousemove"?(cs=e.screenX-ha.screenX,Hi=e.screenY-ha.screenY):Hi=cs=0,ha=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:Hi}}),$r=Si(Jr),Ac=g({},Jr,{dataTransfer:0}),Rc=Si(Ac),Cf=g({},Sr,{relatedTarget:0}),ll=Si(Cf),Df=g({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),L=Si(Df),W=g({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z=Si(W),D=g({},qa,{data:0}),K=Si(D),Mt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},et={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gt(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=et[e])?!!n[e]:!1}function At(){return gt}var Ut=g({},Sr,{key:function(e){if(e.key){var n=Mt[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lt[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:At,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nt=Si(Ut),Ot=g({},Jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),te=Si(Ot),Zt=g({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:At}),qt=Si(Zt),Ct=g({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wt=Si(Ct),Ht=g({},Jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bt=Si(Ht),se=g({},qa,{newState:0,oldState:0}),Gt=Si(se),be=[9,13,27,32],we=ua&&"CompositionEvent"in window,Ne=null;ua&&"documentMode"in document&&(Ne=document.documentMode);var Nn=ua&&"TextEvent"in window&&!Ne,pn=ua&&(!we||Ne&&8<Ne&&11>=Ne),Ze=" ",In=!1;function Kn(e,n){switch(e){case"keyup":return be.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function Ui(e,n){switch(e){case"compositionend":return oi(n);case"keypress":return n.which!==32?null:(In=!0,Ze);case"textInput":return e=n.data,e===Ze&&In?null:e;default:return null}}function yi(e,n){if(Tn)return e==="compositionend"||!we&&Kn(e,n)?(e=rl(),vr=Ra=Aa=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pn&&n.locale!=="ko"?null:n.data;default:return null}}var Li={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function di(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Li[e.type]:n==="textarea"}function Ki(e,n,a,o){Va?ls?ls.push(o):ls=[o]:Va=o,n=du(n,"onChange"),0<n.length&&(a=new fa("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Gi=null,us=null;function wa(e){e_(e,0)}function wc(e){var n=Yi(e);if(je(n))return e}function ym(e,n){if(e==="change")return n}var bm=!1;if(ua){var Uf;if(ua){var Lf="oninput"in document;if(!Lf){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),Lf=typeof Em.oninput=="function"}Uf=Lf}else Uf=!1;bm=Uf&&(!document.documentMode||9<document.documentMode)}function Tm(){Gi&&(Gi.detachEvent("onpropertychange",Am),us=Gi=null)}function Am(e){if(e.propertyName==="value"&&wc(us)){var n=[];Ki(n,us,e,Ga(e)),Gn(wa,n)}}function Px(e,n,a){e==="focusin"?(Tm(),Gi=n,us=a,Gi.attachEvent("onpropertychange",Am)):e==="focusout"&&Tm()}function Ox(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wc(us)}function Ix(e,n){if(e==="click")return wc(n)}function Fx(e,n){if(e==="input"||e==="change")return wc(n)}function Bx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qi=typeof Object.is=="function"?Object.is:Bx;function cl(e,n){if(Qi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Cn.call(n,u)||!Qi(e[u],n[u]))return!1}return!0}function Rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wm(e,n){var a=Rm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Rm(a)}}function Cm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Dm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xn(e.document)}return n}function Nf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var zx=ua&&"documentMode"in document&&11>=document.documentMode,to=null,Pf=null,ul=null,Of=!1;function Um(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Of||to==null||to!==xn(o)||(o=to,"selectionStart"in o&&Nf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ul&&cl(ul,o)||(ul=o,o=du(Pf,"onSelect"),0<o.length&&(n=new fa("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=to)))}function yr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var eo={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionrun:yr("Transition","TransitionRun"),transitionstart:yr("Transition","TransitionStart"),transitioncancel:yr("Transition","TransitionCancel"),transitionend:yr("Transition","TransitionEnd")},If={},Lm={};ua&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function br(e){if(If[e])return If[e];if(!eo[e])return e;var n=eo[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lm)return If[e]=n[a];return e}var Nm=br("animationend"),Pm=br("animationiteration"),Om=br("animationstart"),Hx=br("transitionrun"),Gx=br("transitionstart"),Vx=br("transitioncancel"),Im=br("transitionend"),Fm=new Map,Ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ff.push("scrollEnd");function Ca(e,n){Fm.set(e,n),Ea(n,[e])}var Bm=new WeakMap;function da(e,n){if(typeof e=="object"&&e!==null){var a=Bm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ue(n)},Bm.set(e,n),n)}return{value:e,source:n,stack:Ue(n)}}var pa=[],no=0,Bf=0;function Cc(){for(var e=no,n=Bf=no=0;n<e;){var a=pa[n];pa[n++]=null;var o=pa[n];pa[n++]=null;var u=pa[n];pa[n++]=null;var h=pa[n];if(pa[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&zm(a,u,h)}}function Dc(e,n,a,o){pa[no++]=e,pa[no++]=n,pa[no++]=a,pa[no++]=o,Bf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zf(e,n,a,o){return Dc(e,n,a,o),Uc(e)}function io(e,n){return Dc(e,null,null,n),Uc(e)}function zm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Qt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Uc(e){if(50<Ol)throw Ol=0,Wh=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ao={};function kx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ji(e,n,a,o){return new kx(e,n,a,o)}function Hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fs(e,n){var a=e.alternate;return a===null?(a=Ji(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Lc(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Hf(e)&&(S=1);else if(typeof e=="string")S=WM(e,a,Kt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Ji(31,a,n,u),e.elementType=N,e.lanes=h,e;case b:return Er(a.children,u,h,n);case w:S=8,u|=24;break;case M:return e=Ji(12,a,n,u|2),e.elementType=M,e.lanes=h,e;case z:return e=Ji(13,a,n,u),e.elementType=z,e.lanes=h,e;case H:return e=Ji(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case I:S=10;break t;case C:S=9;break t;case P:S=11;break t;case k:S=14;break t;case T:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Ji(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Er(e,n,a,o){return e=Ji(7,e,o,n),e.lanes=a,e}function Gf(e,n,a){return e=Ji(6,e,null,n),e.lanes=a,e}function Vf(e,n,a){return n=Ji(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var so=[],ro=0,Nc=null,Pc=0,ma=[],ga=0,Tr=null,hs=1,ds="";function Ar(e,n){so[ro++]=Pc,so[ro++]=Nc,Nc=e,Pc=n}function Gm(e,n,a){ma[ga++]=hs,ma[ga++]=ds,ma[ga++]=Tr,Tr=e;var o=hs;e=ds;var u=32-Qt(o)-1;o&=~(1<<u),a+=1;var h=32-Qt(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,hs=1<<32-Qt(n)+u|a<<u|o,ds=h+e}else hs=1<<h|a<<u|o,ds=e}function kf(e){e.return!==null&&(Ar(e,1),Gm(e,1,0))}function Xf(e){for(;e===Nc;)Nc=so[--ro],so[ro]=null,Pc=so[--ro],so[ro]=null;for(;e===Tr;)Tr=ma[--ga],ma[ga]=null,ds=ma[--ga],ma[ga]=null,hs=ma[--ga],ma[ga]=null}var Ni=null,Vn=null,ln=!1,Rr=null,Ya=!1,Wf=Error(s(519));function wr(e){var n=Error(s(418,""));throw dl(da(n,e)),Wf}function Vm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Wn]=e,n[fn]=o,a){case"dialog":ke("cancel",n),ke("close",n);break;case"iframe":case"object":case"embed":ke("load",n);break;case"video":case"audio":for(a=0;a<Fl.length;a++)ke(Fl[a],n);break;case"source":ke("error",n);break;case"img":case"image":case"link":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"input":ke("invalid",n),Mi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),an(n);break;case"select":ke("invalid",n);break;case"textarea":ke("invalid",n),sn(n,o.value,o.defaultValue,o.children),an(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||s_(n.textContent,a)?(o.popover!=null&&(ke("beforetoggle",n),ke("toggle",n)),o.onScroll!=null&&ke("scroll",n),o.onScrollEnd!=null&&ke("scrollend",n),o.onClick!=null&&(n.onclick=pu),n=!0):n=!1,n||wr(e)}function km(e){for(Ni=e.return;Ni;)switch(Ni.tag){case 5:case 13:Ya=!1;return;case 27:case 3:Ya=!0;return;default:Ni=Ni.return}}function fl(e){if(e!==Ni)return!1;if(!ln)return km(e),ln=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||od(e.type,e.memoizedProps)),a=!a),a&&Vn&&wr(e),km(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Vn=Ua(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Vn=null}}else n===27?(n=Vn,Qs(e.type)?(e=fd,fd=null,Vn=e):Vn=n):Vn=Ni?Ua(e.stateNode.nextSibling):null;return!0}function hl(){Vn=Ni=null,ln=!1}function Xm(){var e=Rr;return e!==null&&(Xi===null?Xi=e:Xi.push.apply(Xi,e),Rr=null),e}function dl(e){Rr===null?Rr=[e]:Rr.push(e)}var qf=J(null),Cr=null,ps=null;function Is(e,n,a){vt(qf,n._currentValue),n._currentValue=a}function ms(e){e._currentValue=qf.current,ot(qf)}function Yf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function jf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Yf(h.return,a,e),o||(S=null);break t}h=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Yf(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function pl(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Qi(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===Pt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(kl):e=[kl])}u=u.return}e!==null&&jf(n,e,a,o),n.flags|=262144}function Oc(e){for(e=e.firstContext;e!==null;){if(!Qi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Dr(e){Cr=e,ps=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bi(e){return Wm(Cr,e)}function Ic(e,n){return Cr===null&&Dr(e),Wm(e,n)}function Wm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ps===null){if(e===null)throw Error(s(308));ps=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ps=ps.next=n;return a}var Xx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Wx=r.unstable_scheduleCallback,qx=r.unstable_NormalPriority,ni={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zf(){return{controller:new Xx,data:new Map,refCount:0}}function ml(e){e.refCount--,e.refCount===0&&Wx(qx,function(){e.controller.abort()})}var gl=null,Kf=0,oo=0,lo=null;function Yx(e,n){if(gl===null){var a=gl=[];Kf=0,oo=Jh(),lo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Kf++,n.then(qm,qm),n}function qm(){if(--Kf===0&&gl!==null){lo!==null&&(lo.status="fulfilled");var e=gl;gl=null,oo=0,lo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function jx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ym=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yx(e,n),Ym!==null&&Ym(e,n)};var Ur=J(null);function Qf(){var e=Ur.current;return e!==null?e:An.pooledCache}function Fc(e,n){n===null?vt(Ur,Ur.current):vt(Ur,n.pool)}function jm(){var e=Qf();return e===null?null:{parent:ni._currentValue,pool:e}}var _l=Error(s(460)),Zm=Error(s(474)),Bc=Error(s(542)),Jf={then:function(){}};function Km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zc(){}function Qm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(zc,zc),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$m(e),e;default:if(typeof n.status=="string")n.then(zc,zc);else{if(e=An,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$m(e),e}throw vl=n,_l}}var vl=null;function Jm(){if(vl===null)throw Error(s(459));var e=vl;return vl=null,e}function $m(e){if(e===_l||e===Bc)throw Error(s(483))}var Fs=!1;function $f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function th(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zs(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(mn&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Uc(e),zm(e,null,a),n}return Dc(e,o,n,a),Uc(e)}function xl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,re(e,a)}}function eh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nh=!1;function Ml(){if(nh){var e=lo;if(e!==null)throw e}}function Sl(e,n,a,o){nh=!1;var u=e.updateQueue;Fs=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,ut=G.next;G.next=null,S===null?h=ut:S.next=ut,S=G;var Rt=e.alternate;Rt!==null&&(Rt=Rt.updateQueue,A=Rt.lastBaseUpdate,A!==S&&(A===null?Rt.firstBaseUpdate=ut:A.next=ut,Rt.lastBaseUpdate=G))}if(h!==null){var Dt=u.baseState;S=0,Rt=ut=G=null,A=h;do{var ft=A.lane&-536870913,pt=ft!==A.lane;if(pt?(en&ft)===ft:(o&ft)===ft){ft!==0&&ft===oo&&(nh=!0),Rt!==null&&(Rt=Rt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ce=e,Ee=A;ft=n;var yn=a;switch(Ee.tag){case 1:if(Ce=Ee.payload,typeof Ce=="function"){Dt=Ce.call(yn,Dt,ft);break t}Dt=Ce;break t;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=Ee.payload,ft=typeof Ce=="function"?Ce.call(yn,Dt,ft):Ce,ft==null)break t;Dt=g({},Dt,ft);break t;case 2:Fs=!0}}ft=A.callback,ft!==null&&(e.flags|=64,pt&&(e.flags|=8192),pt=u.callbacks,pt===null?u.callbacks=[ft]:pt.push(ft))}else pt={lane:ft,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Rt===null?(ut=Rt=pt,G=Dt):Rt=Rt.next=pt,S|=ft;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;pt=A,A=pt.next,pt.next=null,u.lastBaseUpdate=pt,u.shared.pending=null}}while(!0);Rt===null&&(G=Dt),u.baseState=G,u.firstBaseUpdate=ut,u.lastBaseUpdate=Rt,h===null&&(u.shared.lanes=0),Ys|=S,e.lanes=S,e.memoizedState=Dt}}function t0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function e0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)t0(a[e],n)}var co=J(null),Hc=J(0);function n0(e,n){e=ys,vt(Hc,e),vt(co,n),ys=e|n.baseLanes}function ih(){vt(Hc,ys),vt(co,co.current)}function ah(){ys=Hc.current,ot(co),ot(Hc)}var Hs=0,ze=null,Mn=null,Qn=null,Gc=!1,uo=!1,Lr=!1,Vc=0,yl=0,fo=null,Zx=0;function qn(){throw Error(s(321))}function sh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qi(e[a],n[a]))return!1;return!0}function rh(e,n,a,o,u,h){return Hs=h,ze=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?z0:H0,Lr=!1,h=a(o,u),Lr=!1,uo&&(h=a0(n,a,o,u)),i0(e),h}function i0(e){F.H=jc;var n=Mn!==null&&Mn.next!==null;if(Hs=0,Qn=Mn=ze=null,Gc=!1,yl=0,fo=null,n)throw Error(s(300));e===null||li||(e=e.dependencies,e!==null&&Oc(e)&&(li=!0))}function a0(e,n,a,o){ze=e;var u=0;do{if(uo&&(fo=null),yl=0,uo=!1,25<=u)throw Error(s(301));if(u+=1,Qn=Mn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=nM,h=n(a,o)}while(uo);return h}function Kx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?bl(n):n,e=e.useState()[0],(Mn!==null?Mn.memoizedState:null)!==e&&(ze.flags|=1024),n}function oh(){var e=Vc!==0;return Vc=0,e}function lh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ch(e){if(Gc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Gc=!1}Hs=0,Qn=Mn=ze=null,uo=!1,yl=Vc=0,fo=null}function Vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qn===null?ze.memoizedState=Qn=e:Qn=Qn.next=e,Qn}function Jn(){if(Mn===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Mn.next;var n=Qn===null?ze.memoizedState:Qn.next;if(n!==null)Qn=n,Mn=e;else{if(e===null)throw ze.alternate===null?Error(s(467)):Error(s(310));Mn=e,e={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Qn===null?ze.memoizedState=Qn=e:Qn=Qn.next=e}return Qn}function uh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(e){var n=yl;return yl+=1,fo===null&&(fo=[]),e=Qm(fo,e,n),n=ze,(Qn===null?n.memoizedState:Qn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?z0:H0),e}function kc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bl(e);if(e.$$typeof===I)return bi(e)}throw Error(s(438,String(e)))}function fh(e){var n=null,a=ze.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ze.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=uh(),ze.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ht;return n.index++,a}function gs(e,n){return typeof n=="function"?n(e):n}function Xc(e){var n=Jn();return hh(n,Mn,e)}function hh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=S=null,G=null,ut=n,Rt=!1;do{var Dt=ut.lane&-536870913;if(Dt!==ut.lane?(en&Dt)===Dt:(Hs&Dt)===Dt){var ft=ut.revertLane;if(ft===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),Dt===oo&&(Rt=!0);else if((Hs&ft)===ft){ut=ut.next,ft===oo&&(Rt=!0);continue}else Dt={lane:0,revertLane:ut.revertLane,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},G===null?(A=G=Dt,S=h):G=G.next=Dt,ze.lanes|=ft,Ys|=ft;Dt=ut.action,Lr&&a(h,Dt),h=ut.hasEagerState?ut.eagerState:a(h,Dt)}else ft={lane:Dt,revertLane:ut.revertLane,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},G===null?(A=G=ft,S=h):G=G.next=ft,ze.lanes|=Dt,Ys|=Dt;ut=ut.next}while(ut!==null&&ut!==n);if(G===null?S=h:G.next=A,!Qi(h,e.memoizedState)&&(li=!0,Rt&&(a=lo,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function dh(e){var n=Jn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);Qi(h,n.memoizedState)||(li=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function s0(e,n,a){var o=ze,u=Jn(),h=ln;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Qi((Mn||u).memoizedState,a);S&&(u.memoizedState=a,li=!0),u=u.queue;var A=l0.bind(null,o,u,e);if(El(2048,8,A,[e]),u.getSnapshot!==n||S||Qn!==null&&Qn.memoizedState.tag&1){if(o.flags|=2048,ho(9,Wc(),o0.bind(null,o,u,a,n),null),An===null)throw Error(s(349));h||(Hs&124)!==0||r0(o,n,a)}return a}function r0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ze.updateQueue,n===null?(n=uh(),ze.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function o0(e,n,a,o){n.value=a,n.getSnapshot=o,c0(n)&&u0(e)}function l0(e,n,a){return a(function(){c0(n)&&u0(e)})}function c0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qi(e,a)}catch{return!0}}function u0(e){var n=io(e,2);n!==null&&ia(n,e,2)}function ph(e){var n=Vi();if(typeof e=="function"){var a=e;if(e=a(),Lr){xt(!0);try{a()}finally{xt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:e},n}function f0(e,n,a,o){return e.baseState=a,hh(e,Mn,typeof o=="function"?o:gs)}function Qx(e,n,a,o,u){if(Yc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,h0(n,h)):(h.next=a.next,n.pending=a.next=h)}}function h0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=F.T,S={};F.T=S;try{var A=a(u,o),G=F.S;G!==null&&G(S,A),d0(e,n,A)}catch(ut){mh(e,n,ut)}finally{F.T=h}}else try{h=a(u,o),d0(e,n,h)}catch(ut){mh(e,n,ut)}}function d0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){p0(e,n,o)},function(o){return mh(e,n,o)}):p0(e,n,a)}function p0(e,n,a){n.status="fulfilled",n.value=a,m0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,h0(e,a)))}function mh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,m0(n),n=n.next;while(n!==o)}e.action=null}function m0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function g0(e,n){return n}function _0(e,n){if(ln){var a=An.formState;if(a!==null){t:{var o=ze;if(ln){if(Vn){e:{for(var u=Vn,h=Ya;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ua(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Vn=Ua(u.nextSibling),o=u.data==="F!";break t}}wr(o)}o=!1}o&&(n=a[0])}}return a=Vi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g0,lastRenderedState:n},a.queue=o,a=I0.bind(null,ze,o),o.dispatch=a,o=ph(!1),h=Mh.bind(null,ze,!1,o.queue),o=Vi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Qx.bind(null,ze,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function v0(e){var n=Jn();return x0(n,Mn,e)}function x0(e,n,a){if(n=hh(e,n,g0)[0],e=Xc(gs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bl(n)}catch(S){throw S===_l?Bc:S}else o=n;n=Jn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ze.flags|=2048,ho(9,Wc(),Jx.bind(null,u,a),null)),[o,h,e]}function Jx(e,n){e.action=n}function M0(e){var n=Jn(),a=Mn;if(a!==null)return x0(n,a,e);Jn(),n=n.memoizedState,a=Jn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ho(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ze.updateQueue,n===null&&(n=uh(),ze.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Wc(){return{destroy:void 0,resource:void 0}}function S0(){return Jn().memoizedState}function qc(e,n,a,o){var u=Vi();o=o===void 0?null:o,ze.flags|=e,u.memoizedState=ho(1|n,Wc(),a,o)}function El(e,n,a,o){var u=Jn();o=o===void 0?null:o;var h=u.memoizedState.inst;Mn!==null&&o!==null&&sh(o,Mn.memoizedState.deps)?u.memoizedState=ho(n,h,a,o):(ze.flags|=e,u.memoizedState=ho(1|n,h,a,o))}function y0(e,n){qc(8390656,8,e,n)}function b0(e,n){El(2048,8,e,n)}function E0(e,n){return El(4,2,e,n)}function T0(e,n){return El(4,4,e,n)}function A0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function R0(e,n,a){a=a!=null?a.concat([e]):null,El(4,4,A0.bind(null,n,e),a)}function gh(){}function w0(e,n){var a=Jn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function C0(e,n){var a=Jn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sh(n,o[1]))return o[0];if(o=e(),Lr){xt(!0);try{e()}finally{xt(!1)}}return a.memoizedState=[o,n],o}function _h(e,n,a){return a===void 0||(Hs&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Lg(),ze.lanes|=e,Ys|=e,a)}function D0(e,n,a,o){return Qi(a,n)?a:co.current!==null?(e=_h(e,a,o),Qi(e,n)||(li=!0),e):(Hs&42)===0?(li=!0,e.memoizedState=a):(e=Lg(),ze.lanes|=e,Ys|=e,n)}function U0(e,n,a,o,u){var h=B.p;B.p=h!==0&&8>h?h:8;var S=F.T,A={};F.T=A,Mh(e,!1,n,a);try{var G=u(),ut=F.S;if(ut!==null&&ut(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Rt=jx(G,o);Tl(e,n,Rt,na(e))}else Tl(e,n,o,na(e))}catch(Dt){Tl(e,n,{then:function(){},status:"rejected",reason:Dt},na())}finally{B.p=h,F.T=S}}function $x(){}function vh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=L0(e).queue;U0(e,u,n,dt,a===null?$x:function(){return N0(e),a(o)})}function L0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function N0(e){var n=L0(e).next.queue;Tl(e,n,{},na())}function xh(){return bi(kl)}function P0(){return Jn().memoizedState}function O0(){return Jn().memoizedState}function tM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=na();e=Bs(a);var o=zs(n,e,a);o!==null&&(ia(o,n,a),xl(o,n,a)),n={cache:Zf()},e.payload=n;return}n=n.return}}function eM(e,n,a){var o=na();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Yc(e)?F0(n,a):(a=zf(e,n,a,o),a!==null&&(ia(a,e,o),B0(a,n,o)))}function I0(e,n,a){var o=na();Tl(e,n,a,o)}function Tl(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yc(e))F0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,A=h(S,a);if(u.hasEagerState=!0,u.eagerState=A,Qi(A,S))return Dc(e,n,u,0),An===null&&Cc(),!1}catch{}if(a=zf(e,n,u,o),a!==null)return ia(a,e,o),B0(a,n,o),!0}return!1}function Mh(e,n,a,o){if(o={lane:2,revertLane:Jh(),action:o,hasEagerState:!1,eagerState:null,next:null},Yc(e)){if(n)throw Error(s(479))}else n=zf(e,a,o,2),n!==null&&ia(n,e,2)}function Yc(e){var n=e.alternate;return e===ze||n!==null&&n===ze}function F0(e,n){uo=Gc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function B0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,re(e,a)}}var jc={readContext:bi,use:kc,useCallback:qn,useContext:qn,useEffect:qn,useImperativeHandle:qn,useLayoutEffect:qn,useInsertionEffect:qn,useMemo:qn,useReducer:qn,useRef:qn,useState:qn,useDebugValue:qn,useDeferredValue:qn,useTransition:qn,useSyncExternalStore:qn,useId:qn,useHostTransitionStatus:qn,useFormState:qn,useActionState:qn,useOptimistic:qn,useMemoCache:qn,useCacheRefresh:qn},z0={readContext:bi,use:kc,useCallback:function(e,n){return Vi().memoizedState=[e,n===void 0?null:n],e},useContext:bi,useEffect:y0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,qc(4194308,4,A0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return qc(4194308,4,e,n)},useInsertionEffect:function(e,n){qc(4,2,e,n)},useMemo:function(e,n){var a=Vi();n=n===void 0?null:n;var o=e();if(Lr){xt(!0);try{e()}finally{xt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Vi();if(a!==void 0){var u=a(n);if(Lr){xt(!0);try{a(n)}finally{xt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=eM.bind(null,ze,e),[o.memoizedState,e]},useRef:function(e){var n=Vi();return e={current:e},n.memoizedState=e},useState:function(e){e=ph(e);var n=e.queue,a=I0.bind(null,ze,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gh,useDeferredValue:function(e,n){var a=Vi();return _h(a,e,n)},useTransition:function(){var e=ph(!1);return e=U0.bind(null,ze,e.queue,!0,!1),Vi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ze,u=Vi();if(ln){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),An===null)throw Error(s(349));(en&124)!==0||r0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,y0(l0.bind(null,o,h,e),[e]),o.flags|=2048,ho(9,Wc(),o0.bind(null,o,h,a,n),null),a},useId:function(){var e=Vi(),n=An.identifierPrefix;if(ln){var a=ds,o=hs;a=(o&~(1<<32-Qt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Vc++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Zx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:xh,useFormState:_0,useActionState:_0,useOptimistic:function(e){var n=Vi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mh.bind(null,ze,!0,a),a.dispatch=n,[e,n]},useMemoCache:fh,useCacheRefresh:function(){return Vi().memoizedState=tM.bind(null,ze)}},H0={readContext:bi,use:kc,useCallback:w0,useContext:bi,useEffect:b0,useImperativeHandle:R0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:Xc,useRef:S0,useState:function(){return Xc(gs)},useDebugValue:gh,useDeferredValue:function(e,n){var a=Jn();return D0(a,Mn.memoizedState,e,n)},useTransition:function(){var e=Xc(gs)[0],n=Jn().memoizedState;return[typeof e=="boolean"?e:bl(e),n]},useSyncExternalStore:s0,useId:P0,useHostTransitionStatus:xh,useFormState:v0,useActionState:v0,useOptimistic:function(e,n){var a=Jn();return f0(a,Mn,e,n)},useMemoCache:fh,useCacheRefresh:O0},nM={readContext:bi,use:kc,useCallback:w0,useContext:bi,useEffect:b0,useImperativeHandle:R0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:dh,useRef:S0,useState:function(){return dh(gs)},useDebugValue:gh,useDeferredValue:function(e,n){var a=Jn();return Mn===null?_h(a,e,n):D0(a,Mn.memoizedState,e,n)},useTransition:function(){var e=dh(gs)[0],n=Jn().memoizedState;return[typeof e=="boolean"?e:bl(e),n]},useSyncExternalStore:s0,useId:P0,useHostTransitionStatus:xh,useFormState:M0,useActionState:M0,useOptimistic:function(e,n){var a=Jn();return Mn!==null?f0(a,Mn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fh,useCacheRefresh:O0},po=null,Al=0;function Zc(e){var n=Al;return Al+=1,po===null&&(po=[]),Qm(po,e,n)}function Rl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Kc(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function G0(e){var n=e._init;return n(e._payload)}function V0(e){function n(tt,q){if(e){var rt=tt.deletions;rt===null?(tt.deletions=[q],tt.flags|=16):rt.push(q)}}function a(tt,q){if(!e)return null;for(;q!==null;)n(tt,q),q=q.sibling;return null}function o(tt){for(var q=new Map;tt!==null;)tt.key!==null?q.set(tt.key,tt):q.set(tt.index,tt),tt=tt.sibling;return q}function u(tt,q){return tt=fs(tt,q),tt.index=0,tt.sibling=null,tt}function h(tt,q,rt){return tt.index=rt,e?(rt=tt.alternate,rt!==null?(rt=rt.index,rt<q?(tt.flags|=67108866,q):rt):(tt.flags|=67108866,q)):(tt.flags|=1048576,q)}function S(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function A(tt,q,rt,wt){return q===null||q.tag!==6?(q=Gf(rt,tt.mode,wt),q.return=tt,q):(q=u(q,rt),q.return=tt,q)}function G(tt,q,rt,wt){var he=rt.type;return he===b?Rt(tt,q,rt.props.children,wt,rt.key):q!==null&&(q.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===T&&G0(he)===q.type)?(q=u(q,rt.props),Rl(q,rt),q.return=tt,q):(q=Lc(rt.type,rt.key,rt.props,null,tt.mode,wt),Rl(q,rt),q.return=tt,q)}function ut(tt,q,rt,wt){return q===null||q.tag!==4||q.stateNode.containerInfo!==rt.containerInfo||q.stateNode.implementation!==rt.implementation?(q=Vf(rt,tt.mode,wt),q.return=tt,q):(q=u(q,rt.children||[]),q.return=tt,q)}function Rt(tt,q,rt,wt,he){return q===null||q.tag!==7?(q=Er(rt,tt.mode,wt,he),q.return=tt,q):(q=u(q,rt),q.return=tt,q)}function Dt(tt,q,rt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Gf(""+q,tt.mode,rt),q.return=tt,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case _:return rt=Lc(q.type,q.key,q.props,null,tt.mode,rt),Rl(rt,q),rt.return=tt,rt;case y:return q=Vf(q,tt.mode,rt),q.return=tt,q;case T:var wt=q._init;return q=wt(q._payload),Dt(tt,q,rt)}if(at(q)||st(q))return q=Er(q,tt.mode,rt,null),q.return=tt,q;if(typeof q.then=="function")return Dt(tt,Zc(q),rt);if(q.$$typeof===I)return Dt(tt,Ic(tt,q),rt);Kc(tt,q)}return null}function ft(tt,q,rt,wt){var he=q!==null?q.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return he!==null?null:A(tt,q,""+rt,wt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case _:return rt.key===he?G(tt,q,rt,wt):null;case y:return rt.key===he?ut(tt,q,rt,wt):null;case T:return he=rt._init,rt=he(rt._payload),ft(tt,q,rt,wt)}if(at(rt)||st(rt))return he!==null?null:Rt(tt,q,rt,wt,null);if(typeof rt.then=="function")return ft(tt,q,Zc(rt),wt);if(rt.$$typeof===I)return ft(tt,q,Ic(tt,rt),wt);Kc(tt,rt)}return null}function pt(tt,q,rt,wt,he){if(typeof wt=="string"&&wt!==""||typeof wt=="number"||typeof wt=="bigint")return tt=tt.get(rt)||null,A(q,tt,""+wt,he);if(typeof wt=="object"&&wt!==null){switch(wt.$$typeof){case _:return tt=tt.get(wt.key===null?rt:wt.key)||null,G(q,tt,wt,he);case y:return tt=tt.get(wt.key===null?rt:wt.key)||null,ut(q,tt,wt,he);case T:var He=wt._init;return wt=He(wt._payload),pt(tt,q,rt,wt,he)}if(at(wt)||st(wt))return tt=tt.get(rt)||null,Rt(q,tt,wt,he,null);if(typeof wt.then=="function")return pt(tt,q,rt,Zc(wt),he);if(wt.$$typeof===I)return pt(tt,q,rt,Ic(q,wt),he);Kc(q,wt)}return null}function Ce(tt,q,rt,wt){for(var he=null,He=null,ve=q,Ae=q=0,ui=null;ve!==null&&Ae<rt.length;Ae++){ve.index>Ae?(ui=ve,ve=null):ui=ve.sibling;var on=ft(tt,ve,rt[Ae],wt);if(on===null){ve===null&&(ve=ui);break}e&&ve&&on.alternate===null&&n(tt,ve),q=h(on,q,Ae),He===null?he=on:He.sibling=on,He=on,ve=ui}if(Ae===rt.length)return a(tt,ve),ln&&Ar(tt,Ae),he;if(ve===null){for(;Ae<rt.length;Ae++)ve=Dt(tt,rt[Ae],wt),ve!==null&&(q=h(ve,q,Ae),He===null?he=ve:He.sibling=ve,He=ve);return ln&&Ar(tt,Ae),he}for(ve=o(ve);Ae<rt.length;Ae++)ui=pt(ve,tt,Ae,rt[Ae],wt),ui!==null&&(e&&ui.alternate!==null&&ve.delete(ui.key===null?Ae:ui.key),q=h(ui,q,Ae),He===null?he=ui:He.sibling=ui,He=ui);return e&&ve.forEach(function(nr){return n(tt,nr)}),ln&&Ar(tt,Ae),he}function Ee(tt,q,rt,wt){if(rt==null)throw Error(s(151));for(var he=null,He=null,ve=q,Ae=q=0,ui=null,on=rt.next();ve!==null&&!on.done;Ae++,on=rt.next()){ve.index>Ae?(ui=ve,ve=null):ui=ve.sibling;var nr=ft(tt,ve,on.value,wt);if(nr===null){ve===null&&(ve=ui);break}e&&ve&&nr.alternate===null&&n(tt,ve),q=h(nr,q,Ae),He===null?he=nr:He.sibling=nr,He=nr,ve=ui}if(on.done)return a(tt,ve),ln&&Ar(tt,Ae),he;if(ve===null){for(;!on.done;Ae++,on=rt.next())on=Dt(tt,on.value,wt),on!==null&&(q=h(on,q,Ae),He===null?he=on:He.sibling=on,He=on);return ln&&Ar(tt,Ae),he}for(ve=o(ve);!on.done;Ae++,on=rt.next())on=pt(ve,tt,Ae,on.value,wt),on!==null&&(e&&on.alternate!==null&&ve.delete(on.key===null?Ae:on.key),q=h(on,q,Ae),He===null?he=on:He.sibling=on,He=on);return e&&ve.forEach(function(iS){return n(tt,iS)}),ln&&Ar(tt,Ae),he}function yn(tt,q,rt,wt){if(typeof rt=="object"&&rt!==null&&rt.type===b&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case _:t:{for(var he=rt.key;q!==null;){if(q.key===he){if(he=rt.type,he===b){if(q.tag===7){a(tt,q.sibling),wt=u(q,rt.props.children),wt.return=tt,tt=wt;break t}}else if(q.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===T&&G0(he)===q.type){a(tt,q.sibling),wt=u(q,rt.props),Rl(wt,rt),wt.return=tt,tt=wt;break t}a(tt,q);break}else n(tt,q);q=q.sibling}rt.type===b?(wt=Er(rt.props.children,tt.mode,wt,rt.key),wt.return=tt,tt=wt):(wt=Lc(rt.type,rt.key,rt.props,null,tt.mode,wt),Rl(wt,rt),wt.return=tt,tt=wt)}return S(tt);case y:t:{for(he=rt.key;q!==null;){if(q.key===he)if(q.tag===4&&q.stateNode.containerInfo===rt.containerInfo&&q.stateNode.implementation===rt.implementation){a(tt,q.sibling),wt=u(q,rt.children||[]),wt.return=tt,tt=wt;break t}else{a(tt,q);break}else n(tt,q);q=q.sibling}wt=Vf(rt,tt.mode,wt),wt.return=tt,tt=wt}return S(tt);case T:return he=rt._init,rt=he(rt._payload),yn(tt,q,rt,wt)}if(at(rt))return Ce(tt,q,rt,wt);if(st(rt)){if(he=st(rt),typeof he!="function")throw Error(s(150));return rt=he.call(rt),Ee(tt,q,rt,wt)}if(typeof rt.then=="function")return yn(tt,q,Zc(rt),wt);if(rt.$$typeof===I)return yn(tt,q,Ic(tt,rt),wt);Kc(tt,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,q!==null&&q.tag===6?(a(tt,q.sibling),wt=u(q,rt),wt.return=tt,tt=wt):(a(tt,q),wt=Gf(rt,tt.mode,wt),wt.return=tt,tt=wt),S(tt)):a(tt,q)}return function(tt,q,rt,wt){try{Al=0;var he=yn(tt,q,rt,wt);return po=null,he}catch(ve){if(ve===_l||ve===Bc)throw ve;var He=Ji(29,ve,null,tt.mode);return He.lanes=wt,He.return=tt,He}}}var mo=V0(!0),k0=V0(!1),_a=J(null),ja=null;function Gs(e){var n=e.alternate;vt(ii,ii.current&1),vt(_a,e),ja===null&&(n===null||co.current!==null||n.memoizedState!==null)&&(ja=e)}function X0(e){if(e.tag===22){if(vt(ii,ii.current),vt(_a,e),ja===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ja=e)}}else Vs()}function Vs(){vt(ii,ii.current),vt(_a,_a.current)}function _s(e){ot(_a),ja===e&&(ja=null),ot(ii)}var ii=J(0);function Qc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ud(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Sh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=na(),u=Bs(o);u.payload=n,a!=null&&(u.callback=a),n=zs(e,u,o),n!==null&&(ia(n,e,o),xl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=na(),u=Bs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=zs(e,u,o),n!==null&&(ia(n,e,o),xl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=na(),o=Bs(a);o.tag=2,n!=null&&(o.callback=n),n=zs(e,o,a),n!==null&&(ia(n,e,a),xl(n,e,a))}};function W0(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!cl(a,o)||!cl(u,h):!0}function q0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&yh.enqueueReplaceState(n,n.state,null)}function Nr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Jc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Y0(e){Jc(e)}function j0(e){console.error(e)}function Z0(e){Jc(e)}function $c(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function K0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bh(e,n,a){return a=Bs(a),a.tag=3,a.payload={element:null},a.callback=function(){$c(e,n)},a}function Q0(e){return e=Bs(e),e.tag=3,e}function J0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){K0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){K0(n,a,o),typeof u!="function"&&(js===null?js=new Set([this]):js.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function iM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&pl(n,a,u,!0),a=_a.current,a!==null){switch(a.tag){case 13:return ja===null?Yh():a.alternate===null&&kn===0&&(kn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Jf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zh(e,o,u)),!1;case 22:return a.flags|=65536,o===Jf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zh(e,o,u)),!1}throw Error(s(435,a.tag))}return Zh(e,o,u),Yh(),!1}if(ln)return n=_a.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wf&&(e=Error(s(422),{cause:o}),dl(da(e,a)))):(o!==Wf&&(n=Error(s(423),{cause:o}),dl(da(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=da(o,a),u=bh(e.stateNode,o,u),eh(e,u),kn!==4&&(kn=2)),!1;var h=Error(s(520),{cause:o});if(h=da(h,a),Pl===null?Pl=[h]:Pl.push(h),kn!==4&&(kn=2),n===null)return!0;o=da(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bh(a.stateNode,o,e),eh(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(js===null||!js.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Q0(u),J0(u,e,a,o),eh(a,u),!1}a=a.return}while(a!==null);return!1}var $0=Error(s(461)),li=!1;function pi(e,n,a,o){n.child=e===null?k0(n,null,a,o):mo(n,e.child,a,o)}function tg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return Dr(n),o=rh(e,n,a,S,h,u),A=oh(),e!==null&&!li?(lh(e,n,u),vs(e,n,u)):(ln&&A&&kf(n),n.flags|=1,pi(e,n,o,u),n.child)}function eg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Hf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,ng(e,n,h,o,u)):(e=Lc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Uh(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:cl,a(S,o)&&e.ref===n.ref)return vs(e,n,u)}return n.flags|=1,e=fs(h,o),e.ref=n.ref,e.return=n,n.child=e}function ng(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(cl(h,o)&&e.ref===n.ref)if(li=!1,n.pendingProps=o=h,Uh(e,u))(e.flags&131072)!==0&&(li=!0);else return n.lanes=e.lanes,vs(e,n,u)}return Eh(e,n,a,o,u)}function ig(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return ag(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fc(n,h!==null?h.cachePool:null),h!==null?n0(n,h):ih(),X0(n);else return n.lanes=n.childLanes=536870912,ag(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Fc(n,h.cachePool),n0(n,h),Vs(),n.memoizedState=null):(e!==null&&Fc(n,null),ih(),Vs());return pi(e,n,u,a),n.child}function ag(e,n,a,o){var u=Qf();return u=u===null?null:{parent:ni._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Fc(n,null),ih(),X0(n),e!==null&&pl(e,n,o,!0),null}function tu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Eh(e,n,a,o,u){return Dr(n),a=rh(e,n,a,o,void 0,u),o=oh(),e!==null&&!li?(lh(e,n,u),vs(e,n,u)):(ln&&o&&kf(n),n.flags|=1,pi(e,n,a,u),n.child)}function sg(e,n,a,o,u,h){return Dr(n),n.updateQueue=null,a=a0(n,o,a,u),i0(e),o=oh(),e!==null&&!li?(lh(e,n,h),vs(e,n,h)):(ln&&o&&kf(n),n.flags|=1,pi(e,n,a,h),n.child)}function rg(e,n,a,o,u){if(Dr(n),n.stateNode===null){var h=ao,S=a.contextType;typeof S=="object"&&S!==null&&(h=bi(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=yh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},$f(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?bi(S):ao,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Sh(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&yh.enqueueReplaceState(h,h.state,null),Sl(n,o,h,u),Ml(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,G=Nr(a,A);h.props=G;var ut=h.context,Rt=a.contextType;S=ao,typeof Rt=="object"&&Rt!==null&&(S=bi(Rt));var Dt=a.getDerivedStateFromProps;Rt=typeof Dt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,Rt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||ut!==S)&&q0(n,h,o,S),Fs=!1;var ft=n.memoizedState;h.state=ft,Sl(n,o,h,u),Ml(),ut=n.memoizedState,A||ft!==ut||Fs?(typeof Dt=="function"&&(Sh(n,a,Dt,o),ut=n.memoizedState),(G=Fs||W0(n,a,G,o,ft,ut,S))?(Rt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=S,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,th(e,n),S=n.memoizedProps,Rt=Nr(a,S),h.props=Rt,Dt=n.pendingProps,ft=h.context,ut=a.contextType,G=ao,typeof ut=="object"&&ut!==null&&(G=bi(ut)),A=a.getDerivedStateFromProps,(ut=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Dt||ft!==G)&&q0(n,h,o,G),Fs=!1,ft=n.memoizedState,h.state=ft,Sl(n,o,h,u),Ml();var pt=n.memoizedState;S!==Dt||ft!==pt||Fs||e!==null&&e.dependencies!==null&&Oc(e.dependencies)?(typeof A=="function"&&(Sh(n,a,A,o),pt=n.memoizedState),(Rt=Fs||W0(n,a,Rt,o,ft,pt,G)||e!==null&&e.dependencies!==null&&Oc(e.dependencies))?(ut||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,pt,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,pt,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pt),h.props=o,h.state=pt,h.context=G,o=Rt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,tu(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=mo(n,e.child,null,u),n.child=mo(n,null,a,u)):pi(e,n,a,u),n.memoizedState=h.state,e=n.child):e=vs(e,n,u),e}function og(e,n,a,o){return hl(),n.flags|=256,pi(e,n,a,o),n.child}var Th={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ah(e){return{baseLanes:e,cachePool:jm()}}function Rh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=va),e}function lg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(ii.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(ln){if(u?Gs(n):Vs(),ln){var A=Vn,G;if(G=A){t:{for(G=A,A=Ya;G.nodeType!==8;){if(!A){A=null;break t}if(G=Ua(G.nextSibling),G===null){A=null;break t}}A=G}A!==null?(n.memoizedState={dehydrated:A,treeContext:Tr!==null?{id:hs,overflow:ds}:null,retryLane:536870912,hydrationErrors:null},G=Ji(18,null,null,0),G.stateNode=A,G.return=n,n.child=G,Ni=n,Vn=null,G=!0):G=!1}G||wr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return ud(A)?n.lanes=32:n.lanes=536870912,null;_s(n)}return A=o.children,o=o.fallback,u?(Vs(),u=n.mode,A=eu({mode:"hidden",children:A},u),o=Er(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=Ah(a),u.childLanes=Rh(e,S,a),n.memoizedState=Th,o):(Gs(n),wh(n,A))}if(G=e.memoizedState,G!==null&&(A=G.dehydrated,A!==null)){if(h)n.flags&256?(Gs(n),n.flags&=-257,n=Ch(e,n,a)):n.memoizedState!==null?(Vs(),n.child=e.child,n.flags|=128,n=null):(Vs(),u=o.fallback,A=n.mode,o=eu({mode:"visible",children:o.children},A),u=Er(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,mo(n,e.child,null,a),o=n.child,o.memoizedState=Ah(a),o.childLanes=Rh(e,S,a),n.memoizedState=Th,n=u);else if(Gs(n),ud(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ut=S.dgst;S=ut,o=Error(s(419)),o.stack="",o.digest=S,dl({value:o,source:null,stack:null}),n=Ch(e,n,a)}else if(li||pl(e,n,a,!1),S=(a&e.childLanes)!==0,li||S){if(S=An,S!==null&&(o=a&-a,o=(o&42)!==0?1:ge(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,io(e,o),ia(S,e,o),$0;A.data==="$?"||Yh(),n=Ch(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Vn=Ua(A.nextSibling),Ni=n,ln=!0,Rr=null,Ya=!1,e!==null&&(ma[ga++]=hs,ma[ga++]=ds,ma[ga++]=Tr,hs=e.id,ds=e.overflow,Tr=n),n=wh(n,o.children),n.flags|=4096);return n}return u?(Vs(),u=o.fallback,A=n.mode,G=e.child,ut=G.sibling,o=fs(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ut!==null?u=fs(ut,u):(u=Er(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=Ah(a):(G=A.cachePool,G!==null?(ut=ni._currentValue,G=G.parent!==ut?{parent:ut,pool:ut}:G):G=jm(),A={baseLanes:A.baseLanes|a,cachePool:G}),u.memoizedState=A,u.childLanes=Rh(e,S,a),n.memoizedState=Th,o):(Gs(n),a=e.child,e=a.sibling,a=fs(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function wh(e,n){return n=eu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function eu(e,n){return e=Ji(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ch(e,n,a){return mo(n,e.child,null,a),e=wh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Yf(e.return,n,a)}function Dh(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function ug(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(pi(e,n,o.children,a),o=ii.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,a,n);else if(e.tag===19)cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(vt(ii,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Qc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Dh(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Qc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Dh(n,!0,a,null,h);break;case"together":Dh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vs(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ys|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(pl(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=fs(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=fs(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Oc(e)))}function aM(e,n,a){switch(n.tag){case 3:_t(n,n.stateNode.containerInfo),Is(n,ni,e.memoizedState.cache),hl();break;case 27:case 5:xe(n);break;case 4:_t(n,n.stateNode.containerInfo);break;case 10:Is(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Gs(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(e,n,a):(Gs(n),e=vs(e,n,a),e!==null?e.sibling:null);Gs(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(pl(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ug(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(ii,ii.current),o)break;return null;case 22:case 23:return n.lanes=0,ig(e,n,a);case 24:Is(n,ni,e.memoizedState.cache)}return vs(e,n,a)}function fg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)li=!0;else{if(!Uh(e,a)&&(n.flags&128)===0)return li=!1,aM(e,n,a);li=(e.flags&131072)!==0}else li=!1,ln&&(n.flags&1048576)!==0&&Gm(n,Pc,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Hf(o)?(e=Nr(o,e),n.tag=1,n=rg(null,n,o,e,a)):(n.tag=0,n=Eh(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===P){n.tag=11,n=tg(null,n,o,e,a);break t}else if(u===k){n.tag=14,n=eg(null,n,o,e,a);break t}}throw n=St(o)||o,Error(s(306,n,""))}}return n;case 0:return Eh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Nr(o,n.pendingProps),rg(e,n,o,u,a);case 3:t:{if(_t(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,th(e,n),Sl(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Is(n,ni,o),o!==h.cache&&jf(n,[ni],a,!0),Ml(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=og(e,n,o,a);break t}else if(o!==u){u=da(Error(s(424)),n),dl(u),n=og(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Vn=Ua(e.firstChild),Ni=n,ln=!0,Rr=null,Ya=!0,a=k0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hl(),o===u){n=vs(e,n,a);break t}pi(e,n,o,a)}n=n.child}return n;case 26:return tu(e,n),e===null?(a=m_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ln||(a=n.type,e=n.pendingProps,o=mu(nt.current).createElement(a),o[Wn]=n,o[fn]=e,gi(o,a,e),Un(o),n.stateNode=o):n.memoizedState=m_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return xe(n),e===null&&ln&&(o=n.stateNode=h_(n.type,n.pendingProps,nt.current),Ni=n,Ya=!0,u=Vn,Qs(n.type)?(fd=u,Vn=Ua(o.firstChild)):Vn=u),pi(e,n,n.pendingProps.children,a),tu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ln&&((u=o=Vn)&&(o=LM(o,n.type,n.pendingProps,Ya),o!==null?(n.stateNode=o,Ni=n,Vn=Ua(o.firstChild),Ya=!1,u=!0):u=!1),u||wr(n)),xe(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,od(u,h)?o=null:S!==null&&od(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=rh(e,n,Kx,null,null,a),kl._currentValue=u),tu(e,n),pi(e,n,o,a),n.child;case 6:return e===null&&ln&&((e=a=Vn)&&(a=NM(a,n.pendingProps,Ya),a!==null?(n.stateNode=a,Ni=n,Vn=null,e=!0):e=!1),e||wr(n)),null;case 13:return lg(e,n,a);case 4:return _t(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mo(n,null,o,a):pi(e,n,o,a),n.child;case 11:return tg(e,n,n.type,n.pendingProps,a);case 7:return pi(e,n,n.pendingProps,a),n.child;case 8:return pi(e,n,n.pendingProps.children,a),n.child;case 12:return pi(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Is(n,n.type,o.value),pi(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Dr(n),u=bi(u),o=o(u),n.flags|=1,pi(e,n,o,a),n.child;case 14:return eg(e,n,n.type,n.pendingProps,a);case 15:return ng(e,n,n.type,n.pendingProps,a);case 19:return ug(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=eu(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=fs(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return ig(e,n,a);case 24:return Dr(n),o=bi(ni),e===null?(u=Qf(),u===null&&(u=An,h=Zf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},$f(n),Is(n,ni,u)):((e.lanes&a)!==0&&(th(e,n),Sl(n,null,null,a),Ml()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Is(n,ni,o)):(o=h.cache,Is(n,ni,o),o!==u.cache&&jf(n,[ni],a,!0))),pi(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function xs(e){e.flags|=4}function hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M_(n)){if(n=_a.current,n!==null&&((en&4194048)===en?ja!==null:(en&62914560)!==en&&(en&536870912)===0||n!==ja))throw vl=Jf,Zm;e.flags|=8192}}function nu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?kt():536870912,e.lanes|=n,xo|=n)}function wl(e,n){if(!ln)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Hn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function sM(e,n,a){var o=n.pendingProps;switch(Xf(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(n),null;case 1:return Hn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ms(ni),ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fl(n)?xs(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xm())),Hn(n),null;case 26:return a=n.memoizedState,e===null?(xs(n),a!==null?(Hn(n),hg(n,a)):(Hn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(xs(n),Hn(n),hg(n,a)):(Hn(n),n.flags&=-16777217):(e.memoizedProps!==o&&xs(n),Hn(n),n.flags&=-16777217),null;case 27:Me(n),a=nt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Hn(n),null}e=Kt.current,fl(n)?Vm(n):(e=h_(u,o,a),n.stateNode=e,xs(n))}return Hn(n),null;case 5:if(Me(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Hn(n),null}if(e=Kt.current,fl(n))Vm(n);else{switch(u=mu(nt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[Wn]=n,e[fn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(gi(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&xs(n)}}return Hn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&xs(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,fl(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Ni,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Wn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||s_(e.nodeValue,a)),e||wr(n)}else e=mu(e).createTextNode(o),e[Wn]=n,n.stateNode=e}return Hn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=fl(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Wn]=n}else hl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Hn(n),u=!1}else u=Xm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(_s(n),n):(_s(n),null)}if(_s(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),nu(n,n.updateQueue),Hn(n),null;case 4:return ye(),e===null&&nd(n.stateNode.containerInfo),Hn(n),null;case 10:return ms(n.type),Hn(n),null;case 19:if(ot(ii),u=n.memoizedState,u===null)return Hn(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)wl(u,!1);else{if(kn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Qc(e),h!==null){for(n.flags|=128,wl(u,!1),e=h.updateQueue,n.updateQueue=e,nu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hm(a,e),a=a.sibling;return vt(ii,ii.current&1|2),n.child}e=e.sibling}u.tail!==null&&Qe()>su&&(n.flags|=128,o=!0,wl(u,!1),n.lanes=4194304)}else{if(!o)if(e=Qc(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,nu(n,e),wl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!ln)return Hn(n),null}else 2*Qe()-u.renderingStartTime>su&&a!==536870912&&(n.flags|=128,o=!0,wl(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Qe(),n.sibling=null,e=ii.current,vt(ii,o?e&1|2:e&1),n):(Hn(n),null);case 22:case 23:return _s(n),ah(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Hn(n),n.subtreeFlags&6&&(n.flags|=8192)):Hn(n),a=n.updateQueue,a!==null&&nu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ot(Ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ms(ni),Hn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function rM(e,n){switch(Xf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ms(ni),ye(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Me(n),null;case 13:if(_s(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ot(ii),null;case 4:return ye(),null;case 10:return ms(n.type),null;case 22:case 23:return _s(n),ah(),e!==null&&ot(Ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ms(ni),null;case 25:return null;default:return null}}function dg(e,n){switch(Xf(n),n.tag){case 3:ms(ni),ye();break;case 26:case 27:case 5:Me(n);break;case 4:ye();break;case 13:_s(n);break;case 19:ot(ii);break;case 10:ms(n.type);break;case 22:case 23:_s(n),ah(),e!==null&&ot(Ur);break;case 24:ms(ni)}}function Cl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){En(n,n.return,A)}}function ks(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var G=a,ut=A;try{ut()}catch(Rt){En(u,G,Rt)}}}o=o.next}while(o!==h)}}catch(Rt){En(n,n.return,Rt)}}function pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{e0(n,a)}catch(o){En(e,e.return,o)}}}function mg(e,n,a){a.props=Nr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){En(e,n,o)}}function Dl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){En(e,n,u)}}function Za(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){En(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){En(e,n,u)}else a.current=null}function gg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){En(e,e.return,u)}}function Lh(e,n,a){try{var o=e.stateNode;RM(o,e.type,a,n),o[fn]=n}catch(u){En(e,e.return,u)}}function _g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qs(e.type)||e.tag===4}function Nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ph(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=pu));else if(o!==4&&(o===27&&Qs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ph(e,n,a),e=e.sibling;e!==null;)Ph(e,n,a),e=e.sibling}function iu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Qs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(iu(e,n,a),e=e.sibling;e!==null;)iu(e,n,a),e=e.sibling}function vg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);gi(n,o,a),n[Wn]=e,n[fn]=a}catch(h){En(e,e.return,h)}}var Ms=!1,Yn=!1,Oh=!1,xg=typeof WeakSet=="function"?WeakSet:Set,ci=null;function oM(e,n){if(e=e.containerInfo,sd=Su,e=Dm(e),Nf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,A=-1,G=-1,ut=0,Rt=0,Dt=e,ft=null;e:for(;;){for(var pt;Dt!==a||u!==0&&Dt.nodeType!==3||(A=S+u),Dt!==h||o!==0&&Dt.nodeType!==3||(G=S+o),Dt.nodeType===3&&(S+=Dt.nodeValue.length),(pt=Dt.firstChild)!==null;)ft=Dt,Dt=pt;for(;;){if(Dt===e)break e;if(ft===a&&++ut===u&&(A=S),ft===h&&++Rt===o&&(G=S),(pt=Dt.nextSibling)!==null)break;Dt=ft,ft=Dt.parentNode}Dt=pt}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:e,selectionRange:a},Su=!1,ci=n;ci!==null;)if(n=ci,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,ci=e;else for(;ci!==null;){switch(n=ci,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ce=Nr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Ce,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Ee){En(a,a.return,Ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)cd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,ci=e;break}ci=n.return}}function Mg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Xs(e,a),o&4&&Cl(5,a);break;case 1:if(Xs(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){En(a,a.return,S)}else{var u=Nr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){En(a,a.return,S)}}o&64&&pg(a),o&512&&Dl(a,a.return);break;case 3:if(Xs(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{e0(e,n)}catch(S){En(a,a.return,S)}}break;case 27:n===null&&o&4&&vg(a);case 26:case 5:Xs(e,a),n===null&&o&4&&gg(a),o&512&&Dl(a,a.return);break;case 12:Xs(e,a);break;case 13:Xs(e,a),o&4&&bg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gM.bind(null,a),PM(e,a))));break;case 22:if(o=a.memoizedState!==null||Ms,!o){n=n!==null&&n.memoizedState!==null||Yn,u=Ms;var h=Yn;Ms=o,(Yn=n)&&!h?Ws(e,a,(a.subtreeFlags&8772)!==0):Xs(e,a),Ms=u,Yn=h}break;case 30:break;default:Xs(e,a)}}function Sg(e){var n=e.alternate;n!==null&&(e.alternate=null,Sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&rs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fn=null,ki=!1;function Ss(e,n,a){for(a=a.child;a!==null;)yg(e,n,a),a=a.sibling}function yg(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:Yn||Za(a,n),Ss(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yn||Za(a,n);var o=Fn,u=ki;Qs(a.type)&&(Fn=a.stateNode,ki=!1),Ss(e,n,a),zl(a.stateNode),Fn=o,ki=u;break;case 5:Yn||Za(a,n);case 6:if(o=Fn,u=ki,Fn=null,Ss(e,n,a),Fn=o,ki=u,Fn!==null)if(ki)try{(Fn.nodeType===9?Fn.body:Fn.nodeName==="HTML"?Fn.ownerDocument.body:Fn).removeChild(a.stateNode)}catch(h){En(a,n,h)}else try{Fn.removeChild(a.stateNode)}catch(h){En(a,n,h)}break;case 18:Fn!==null&&(ki?(e=Fn,u_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):u_(Fn,a.stateNode));break;case 4:o=Fn,u=ki,Fn=a.stateNode.containerInfo,ki=!0,Ss(e,n,a),Fn=o,ki=u;break;case 0:case 11:case 14:case 15:Yn||ks(2,a,n),Yn||ks(4,a,n),Ss(e,n,a);break;case 1:Yn||(Za(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mg(a,n,o)),Ss(e,n,a);break;case 21:Ss(e,n,a);break;case 22:Yn=(o=Yn)||a.memoizedState!==null,Ss(e,n,a),Yn=o;break;default:Ss(e,n,a)}}function bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){En(n,n.return,a)}}function lM(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xg),n;default:throw Error(s(435,e.tag))}}function Ih(e,n){var a=lM(e);n.forEach(function(o){var u=_M.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function $i(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Qs(A.type)){Fn=A.stateNode,ki=!1;break t}break;case 5:Fn=A.stateNode,ki=!1;break t;case 3:case 4:Fn=A.stateNode.containerInfo,ki=!0;break t}A=A.return}if(Fn===null)throw Error(s(160));yg(h,S,u),Fn=null,ki=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Eg(n,e),n=n.sibling}var Da=null;function Eg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$i(n,e),ta(e),o&4&&(ks(3,e,e.return),Cl(3,e),ks(5,e,e.return));break;case 1:$i(n,e),ta(e),o&512&&(Yn||a===null||Za(a,a.return)),o&64&&Ms&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Da;if($i(n,e),ta(e),o&512&&(Yn||a===null||Za(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[za]||h[Wn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),gi(h,o,a),h[Wn]=e,Un(h),o=h;break t;case"link":var S=v_("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}h=u.createElement(o),gi(h,o,a),u.head.appendChild(h);break;case"meta":if(S=v_("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}h=u.createElement(o),gi(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[Wn]=e,Un(h),o=h}e.stateNode=o}else x_(u,e.type,e.stateNode);else e.stateNode=__(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?x_(u,e.type,e.stateNode):__(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Lh(e,e.memoizedProps,a.memoizedProps)}break;case 27:$i(n,e),ta(e),o&512&&(Yn||a===null||Za(a,a.return)),a!==null&&o&4&&Lh(e,e.memoizedProps,a.memoizedProps);break;case 5:if($i(n,e),ta(e),o&512&&(Yn||a===null||Za(a,a.return)),e.flags&32){u=e.stateNode;try{bn(u,"")}catch(pt){En(e,e.return,pt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Lh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Oh=!0);break;case 6:if($i(n,e),ta(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(pt){En(e,e.return,pt)}}break;case 3:if(vu=null,u=Da,Da=gu(n.containerInfo),$i(n,e),Da=u,ta(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(n.containerInfo)}catch(pt){En(e,e.return,pt)}Oh&&(Oh=!1,Tg(e));break;case 4:o=Da,Da=gu(e.stateNode.containerInfo),$i(n,e),ta(e),Da=o;break;case 12:$i(n,e),ta(e);break;case 13:$i(n,e),ta(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vh=Qe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ih(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ut=Ms,Rt=Yn;if(Ms=ut||u,Yn=Rt||G,$i(n,e),Yn=Rt,Ms=ut,ta(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Ms||Yn||Pr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=G.stateNode;var Dt=G.memoizedProps.style,ft=Dt!=null&&Dt.hasOwnProperty("display")?Dt.display:null;A.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(pt){En(G,G.return,pt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(pt){En(G,G.return,pt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ih(e,a))));break;case 19:$i(n,e),ta(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ih(e,o)));break;case 30:break;case 21:break;default:$i(n,e),ta(e)}}function ta(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(_g(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Nh(e);iu(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(bn(S,""),a.flags&=-33);var A=Nh(e);iu(e,A,S);break;case 3:case 4:var G=a.stateNode.containerInfo,ut=Nh(e);Ph(e,ut,G);break;default:throw Error(s(161))}}catch(Rt){En(e,e.return,Rt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Tg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Xs(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(e,n.alternate,n),n=n.sibling}function Pr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ks(4,n,n.return),Pr(n);break;case 1:Za(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),Pr(n);break;case 27:zl(n.stateNode);case 26:case 5:Za(n,n.return),Pr(n);break;case 22:n.memoizedState===null&&Pr(n);break;case 30:Pr(n);break;default:Pr(n)}e=e.sibling}}function Ws(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Ws(u,h,a),Cl(4,h);break;case 1:if(Ws(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){En(o,o.return,ut)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)t0(G[u],A)}catch(ut){En(o,o.return,ut)}}a&&S&64&&pg(h),Dl(h,h.return);break;case 27:vg(h);case 26:case 5:Ws(u,h,a),a&&o===null&&S&4&&gg(h),Dl(h,h.return);break;case 12:Ws(u,h,a);break;case 13:Ws(u,h,a),a&&S&4&&bg(u,h);break;case 22:h.memoizedState===null&&Ws(u,h,a),Dl(h,h.return);break;case 30:break;default:Ws(u,h,a)}n=n.sibling}}function Fh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ml(a))}function Bh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ml(e))}function Ka(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ag(e,n,a,o),n=n.sibling}function Ag(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ka(e,n,a,o),u&2048&&Cl(9,n);break;case 1:Ka(e,n,a,o);break;case 3:Ka(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ml(e)));break;case 12:if(u&2048){Ka(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){En(n,n.return,G)}}else Ka(e,n,a,o);break;case 13:Ka(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Ka(e,n,a,o):Ul(e,n):h._visibility&2?Ka(e,n,a,o):(h._visibility|=2,go(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Fh(S,n);break;case 24:Ka(e,n,a,o),u&2048&&Bh(n.alternate,n);break;default:Ka(e,n,a,o)}}function go(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,S=n,A=a,G=o,ut=S.flags;switch(S.tag){case 0:case 11:case 15:go(h,S,A,G,u),Cl(8,S);break;case 23:break;case 22:var Rt=S.stateNode;S.memoizedState!==null?Rt._visibility&2?go(h,S,A,G,u):Ul(h,S):(Rt._visibility|=2,go(h,S,A,G,u)),u&&ut&2048&&Fh(S.alternate,S);break;case 24:go(h,S,A,G,u),u&&ut&2048&&Bh(S.alternate,S);break;default:go(h,S,A,G,u)}n=n.sibling}}function Ul(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ul(a,o),u&2048&&Fh(o.alternate,o);break;case 24:Ul(a,o),u&2048&&Bh(o.alternate,o);break;default:Ul(a,o)}n=n.sibling}}var Ll=8192;function _o(e){if(e.subtreeFlags&Ll)for(e=e.child;e!==null;)Rg(e),e=e.sibling}function Rg(e){switch(e.tag){case 26:_o(e),e.flags&Ll&&e.memoizedState!==null&&YM(Da,e.memoizedState,e.memoizedProps);break;case 5:_o(e);break;case 3:case 4:var n=Da;Da=gu(e.stateNode.containerInfo),_o(e),Da=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ll,Ll=16777216,_o(e),Ll=n):_o(e));break;default:_o(e)}}function wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ci=o,Dg(o,e)}wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cg(e),e=e.sibling}function Cg(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&ks(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,au(e)):Nl(e);break;default:Nl(e)}}function au(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ci=o,Dg(o,e)}wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ks(8,n,n.return),au(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,au(n));break;default:au(n)}e=e.sibling}}function Dg(e,n){for(;ci!==null;){var a=ci;switch(a.tag){case 0:case 11:case 15:ks(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ml(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ci=o;else t:for(a=e;ci!==null;){o=ci;var u=o.sibling,h=o.return;if(Sg(o),o===a){ci=null;break t}if(u!==null){u.return=h,ci=u;break t}ci=h}}}var cM={getCacheForType:function(e){var n=bi(ni),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},uM=typeof WeakMap=="function"?WeakMap:Map,mn=0,An=null,Ve=null,en=0,gn=0,ea=null,qs=!1,vo=!1,zh=!1,ys=0,kn=0,Ys=0,Or=0,Hh=0,va=0,xo=0,Pl=null,Xi=null,Gh=!1,Vh=0,su=1/0,ru=null,js=null,mi=0,Zs=null,Mo=null,So=0,kh=0,Xh=null,Ug=null,Ol=0,Wh=null;function na(){if((mn&2)!==0&&en!==0)return en&-en;if(F.T!==null){var e=oo;return e!==0?e:Jh()}return Ye()}function Lg(){va===0&&(va=(en&536870912)===0||ln?Y():536870912);var e=_a.current;return e!==null&&(e.flags|=32),va}function ia(e,n,a){(e===An&&(gn===2||gn===9)||e.cancelPendingCommit!==null)&&(yo(e,0),Ks(e,en,va,!1)),ne(e,a),((mn&2)===0||e!==An)&&(e===An&&((mn&2)===0&&(Or|=a),kn===4&&Ks(e,en,va,!1)),Qa(e))}function Ng(e,n,a){if((mn&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Jt(e,n),u=o?dM(e,n):jh(e,n,!0),h=o;do{if(u===0){vo&&!o&&Ks(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!fM(a)){u=jh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=Pl;var G=A.current.memoizedState.isDehydrated;if(G&&(yo(A,S).flags|=256),S=jh(A,S,!1),S!==2){if(zh&&!G){A.errorRecoveryDisabledLanes|=h,Or|=h,u=4;break t}h=Xi,Xi=u,h!==null&&(Xi===null?Xi=h:Xi.push.apply(Xi,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){yo(e,0),Ks(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ks(o,n,va,!qs);break t;case 2:Xi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vh+300-Qe(),10<u)){if(Ks(o,n,va,!qs),le(o,0,!0)!==0)break t;o.timeoutHandle=l_(Pg.bind(null,o,a,Xi,ru,Gh,n,va,Or,xo,qs,h,2,-0,0),u);break t}Pg(o,a,Xi,ru,Gh,n,va,Or,xo,qs,h,0,-0,0)}}break}while(!0);Qa(e)}function Pg(e,n,a,o,u,h,S,A,G,ut,Rt,Dt,ft,pt){if(e.timeoutHandle=-1,Dt=n.subtreeFlags,(Dt&8192||(Dt&16785408)===16785408)&&(Vl={stylesheets:null,count:0,unsuspend:qM},Rg(n),Dt=jM(),Dt!==null)){e.cancelPendingCommit=Dt(Gg.bind(null,e,n,h,a,o,u,S,A,G,Rt,1,ft,pt)),Ks(e,h,S,!ut);return}Gg(e,n,h,a,o,u,S,A,G)}function fM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Qi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ks(e,n,a,o){n&=~Hh,n&=~Or,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Qt(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&yt(e,a,n)}function ou(){return(mn&6)===0?(Il(0),!1):!0}function qh(){if(Ve!==null){if(gn===0)var e=Ve.return;else e=Ve,ps=Cr=null,ch(e),po=null,Al=0,e=Ve;for(;e!==null;)dg(e.alternate,e),e=e.return;Ve=null}}function yo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,CM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),qh(),An=e,Ve=a=fs(e.current,null),en=n,gn=0,ea=null,qs=!1,vo=Jt(e,n),zh=!1,xo=va=Hh=Or=Ys=kn=0,Xi=Pl=null,Gh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Qt(o),h=1<<u;n|=e[u],o&=~h}return ys=n,Cc(),a}function Og(e,n){ze=null,F.H=jc,n===_l||n===Bc?(n=Jm(),gn=3):n===Zm?(n=Jm(),gn=4):gn=n===$0?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ea=n,Ve===null&&(kn=1,$c(e,da(n,e.current)))}function Ig(){var e=F.H;return F.H=jc,e===null?jc:e}function Fg(){var e=F.A;return F.A=cM,e}function Yh(){kn=4,qs||(en&4194048)!==en&&_a.current!==null||(vo=!0),(Ys&134217727)===0&&(Or&134217727)===0||An===null||Ks(An,en,va,!1)}function jh(e,n,a){var o=mn;mn|=2;var u=Ig(),h=Fg();(An!==e||en!==n)&&(ru=null,yo(e,n)),n=!1;var S=kn;t:do try{if(gn!==0&&Ve!==null){var A=Ve,G=ea;switch(gn){case 8:qh(),S=6;break t;case 3:case 2:case 9:case 6:_a.current===null&&(n=!0);var ut=gn;if(gn=0,ea=null,bo(e,A,G,ut),a&&vo){S=0;break t}break;default:ut=gn,gn=0,ea=null,bo(e,A,G,ut)}}hM(),S=kn;break}catch(Rt){Og(e,Rt)}while(!0);return n&&e.shellSuspendCounter++,ps=Cr=null,mn=o,F.H=u,F.A=h,Ve===null&&(An=null,en=0,Cc()),S}function hM(){for(;Ve!==null;)Bg(Ve)}function dM(e,n){var a=mn;mn|=2;var o=Ig(),u=Fg();An!==e||en!==n?(ru=null,su=Qe()+500,yo(e,n)):vo=Jt(e,n);t:do try{if(gn!==0&&Ve!==null){n=Ve;var h=ea;e:switch(gn){case 1:gn=0,ea=null,bo(e,n,h,1);break;case 2:case 9:if(Km(h)){gn=0,ea=null,zg(n);break}n=function(){gn!==2&&gn!==9||An!==e||(gn=7),Qa(e)},h.then(n,n);break t;case 3:gn=7;break t;case 4:gn=5;break t;case 7:Km(h)?(gn=0,ea=null,zg(n)):(gn=0,ea=null,bo(e,n,h,7));break;case 5:var S=null;switch(Ve.tag){case 26:S=Ve.memoizedState;case 5:case 27:var A=Ve;if(!S||M_(S)){gn=0,ea=null;var G=A.sibling;if(G!==null)Ve=G;else{var ut=A.return;ut!==null?(Ve=ut,lu(ut)):Ve=null}break e}}gn=0,ea=null,bo(e,n,h,5);break;case 6:gn=0,ea=null,bo(e,n,h,6);break;case 8:qh(),kn=6;break t;default:throw Error(s(462))}}pM();break}catch(Rt){Og(e,Rt)}while(!0);return ps=Cr=null,F.H=o,F.A=u,mn=a,Ve!==null?0:(An=null,en=0,Cc(),kn)}function pM(){for(;Ve!==null&&!qe();)Bg(Ve)}function Bg(e){var n=fg(e.alternate,e,ys);e.memoizedProps=e.pendingProps,n===null?lu(e):Ve=n}function zg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=sg(a,n,n.pendingProps,n.type,void 0,en);break;case 11:n=sg(a,n,n.pendingProps,n.type.render,n.ref,en);break;case 5:ch(n);default:dg(a,n),n=Ve=Hm(n,ys),n=fg(a,n,ys)}e.memoizedProps=e.pendingProps,n===null?lu(e):Ve=n}function bo(e,n,a,o){ps=Cr=null,ch(n),po=null,Al=0;var u=n.return;try{if(iM(e,u,n,a,en)){kn=1,$c(e,da(a,e.current)),Ve=null;return}}catch(h){if(u!==null)throw Ve=u,h;kn=1,$c(e,da(a,e.current)),Ve=null;return}n.flags&32768?(ln||o===1?e=!0:vo||(en&536870912)!==0?e=!1:(qs=e=!0,(o===2||o===9||o===3||o===6)&&(o=_a.current,o!==null&&o.tag===13&&(o.flags|=16384))),Hg(n,e)):lu(n)}function lu(e){var n=e;do{if((n.flags&32768)!==0){Hg(n,qs);return}e=n.return;var a=sM(n.alternate,n,ys);if(a!==null){Ve=a;return}if(n=n.sibling,n!==null){Ve=n;return}Ve=n=e}while(n!==null);kn===0&&(kn=5)}function Hg(e,n){do{var a=rM(e.alternate,e);if(a!==null){a.flags&=32767,Ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ve=e;return}Ve=e=a}while(e!==null);kn=6,Ve=null}function Gg(e,n,a,o,u,h,S,A,G){e.cancelPendingCommit=null;do cu();while(mi!==0);if((mn&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Bf,Ft(e,a,h,S,A,G),e===An&&(Ve=An=null,en=0),Mo=n,Zs=e,So=a,kh=h,Xh=u,Ug=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vM($e,function(){return qg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=B.p,B.p=2,S=mn,mn|=4;try{oM(e,n,a)}finally{mn=S,B.p=u,F.T=o}}mi=1,Vg(),kg(),Xg()}}function Vg(){if(mi===1){mi=0;var e=Zs,n=Mo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=mn;mn|=4;try{Eg(n,e);var h=rd,S=Dm(e.containerInfo),A=h.focusedElem,G=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&Cm(A.ownerDocument.documentElement,A)){if(G!==null&&Nf(A)){var ut=G.start,Rt=G.end;if(Rt===void 0&&(Rt=ut),"selectionStart"in A)A.selectionStart=ut,A.selectionEnd=Math.min(Rt,A.value.length);else{var Dt=A.ownerDocument||document,ft=Dt&&Dt.defaultView||window;if(ft.getSelection){var pt=ft.getSelection(),Ce=A.textContent.length,Ee=Math.min(G.start,Ce),yn=G.end===void 0?Ee:Math.min(G.end,Ce);!pt.extend&&Ee>yn&&(S=yn,yn=Ee,Ee=S);var tt=wm(A,Ee),q=wm(A,yn);if(tt&&q&&(pt.rangeCount!==1||pt.anchorNode!==tt.node||pt.anchorOffset!==tt.offset||pt.focusNode!==q.node||pt.focusOffset!==q.offset)){var rt=Dt.createRange();rt.setStart(tt.node,tt.offset),pt.removeAllRanges(),Ee>yn?(pt.addRange(rt),pt.extend(q.node,q.offset)):(rt.setEnd(q.node,q.offset),pt.addRange(rt))}}}}for(Dt=[],pt=A;pt=pt.parentNode;)pt.nodeType===1&&Dt.push({element:pt,left:pt.scrollLeft,top:pt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Dt.length;A++){var wt=Dt[A];wt.element.scrollLeft=wt.left,wt.element.scrollTop=wt.top}}Su=!!sd,rd=sd=null}finally{mn=u,B.p=o,F.T=a}}e.current=n,mi=2}}function kg(){if(mi===2){mi=0;var e=Zs,n=Mo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=mn;mn|=4;try{Mg(e,n.alternate,n)}finally{mn=u,B.p=o,F.T=a}}mi=3}}function Xg(){if(mi===4||mi===3){mi=0,me();var e=Zs,n=Mo,a=So,o=Ug;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mi=5:(mi=0,Mo=Zs=null,Wg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(js=null),tn(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=B.p,B.p=2,F.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{F.T=n,B.p=u}}(So&3)!==0&&cu(),Qa(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Wh?Ol++:(Ol=0,Wh=e):Ol=0,Il(0)}}function Wg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ml(n)))}function cu(e){return Vg(),kg(),Xg(),qg()}function qg(){if(mi!==5)return!1;var e=Zs,n=kh;kh=0;var a=tn(So),o=F.T,u=B.p;try{B.p=32>a?32:a,F.T=null,a=Xh,Xh=null;var h=Zs,S=So;if(mi=0,Mo=Zs=null,So=0,(mn&6)!==0)throw Error(s(331));var A=mn;if(mn|=4,Cg(h.current),Ag(h,h.current,S,a),mn=A,Il(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Et,h)}catch{}return!0}finally{B.p=u,F.T=o,Wg(e,n)}}function Yg(e,n,a){n=da(a,n),n=bh(e.stateNode,n,2),e=zs(e,n,2),e!==null&&(ne(e,2),Qa(e))}function En(e,n,a){if(e.tag===3)Yg(e,e,a);else for(;n!==null;){if(n.tag===3){Yg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(js===null||!js.has(o))){e=da(a,e),a=Q0(2),o=zs(n,a,2),o!==null&&(J0(a,o,n,e),ne(o,2),Qa(o));break}}n=n.return}}function Zh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new uM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zh=!0,u.add(a),e=mM.bind(null,e,n,a),n.then(e,e))}function mM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,An===e&&(en&a)===a&&(kn===4||kn===3&&(en&62914560)===en&&300>Qe()-Vh?(mn&2)===0&&yo(e,0):Hh|=a,xo===en&&(xo=0)),Qa(e)}function jg(e,n){n===0&&(n=kt()),e=io(e,n),e!==null&&(ne(e,n),Qa(e))}function gM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),jg(e,a)}function _M(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),jg(e,a)}function vM(e,n){return Le(e,n)}var uu=null,Eo=null,Kh=!1,fu=!1,Qh=!1,Ir=0;function Qa(e){e!==Eo&&e.next===null&&(Eo===null?uu=Eo=e:Eo=Eo.next=e),fu=!0,Kh||(Kh=!0,MM())}function Il(e,n){if(!Qh&&fu){Qh=!0;do for(var a=!1,o=uu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Qt(42|e)+1)-1,h&=u&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Jg(o,h))}else h=en,h=le(o,o===An?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Jt(o,h)||(a=!0,Jg(o,h));o=o.next}while(a);Qh=!1}}function xM(){Zg()}function Zg(){fu=Kh=!1;var e=0;Ir!==0&&(wM()&&(e=Ir),Ir=0);for(var n=Qe(),a=null,o=uu;o!==null;){var u=o.next,h=Kg(o,n);h===0?(o.next=null,a===null?uu=u:a.next=u,u===null&&(Eo=a)):(a=o,(e!==0||(h&3)!==0)&&(fu=!0)),o=u}Il(e)}function Kg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Qt(h),A=1<<S,G=u[S];G===-1?((A&a)===0||(A&o)!==0)&&(u[S]=Re(A,n)):G<=n&&(e.expiredLanes|=A),h&=~A}if(n=An,a=en,a=le(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(gn===2||gn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&We(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&We(o),tn(a)){case 2:case 8:a=Je;break;case 32:a=$e;break;case 268435456:a=O;break;default:a=$e}return o=Qg.bind(null,e),a=Le(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&We(o),e.callbackPriority=2,e.callbackNode=null,2}function Qg(e,n){if(mi!==0&&mi!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(cu()&&e.callbackNode!==a)return null;var o=en;return o=le(e,e===An?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ng(e,o,n),Kg(e,Qe()),e.callbackNode!=null&&e.callbackNode===a?Qg.bind(null,e):null)}function Jg(e,n){if(cu())return null;Ng(e,n,!0)}function MM(){DM(function(){(mn&6)!==0?Le(Dn,xM):Zg()})}function Jh(){return Ir===0&&(Ir=Y()),Ir}function $g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_r(""+e)}function t_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function SM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=$g((u[fn]||null).action),S=o.submitter;S&&(n=(n=S[fn]||null)?$g(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var A=new fa("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ir!==0){var G=S?t_(u,S):new FormData(u);vh(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(A.preventDefault(),G=S?t_(u,S):new FormData(u),vh(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var $h=0;$h<Ff.length;$h++){var td=Ff[$h],yM=td.toLowerCase(),bM=td[0].toUpperCase()+td.slice(1);Ca(yM,"on"+bM)}Ca(Nm,"onAnimationEnd"),Ca(Pm,"onAnimationIteration"),Ca(Om,"onAnimationStart"),Ca("dblclick","onDoubleClick"),Ca("focusin","onFocus"),Ca("focusout","onBlur"),Ca(Hx,"onTransitionRun"),Ca(Gx,"onTransitionStart"),Ca(Vx,"onTransitionCancel"),Ca(Im,"onTransitionEnd"),Ha("onMouseEnter",["mouseout","mouseover"]),Ha("onMouseLeave",["mouseout","mouseover"]),Ha("onPointerEnter",["pointerout","pointerover"]),Ha("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function e_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],G=A.instance,ut=A.currentTarget;if(A=A.listener,G!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=ut;try{h(u)}catch(Rt){Jc(Rt)}u.currentTarget=null,h=G}else for(S=0;S<o.length;S++){if(A=o[S],G=A.instance,ut=A.currentTarget,A=A.listener,G!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=ut;try{h(u)}catch(Rt){Jc(Rt)}u.currentTarget=null,h=G}}}}function ke(e,n){var a=n[Ci];a===void 0&&(a=n[Ci]=new Set);var o=e+"__bubble";a.has(o)||(n_(n,e,2,!1),a.add(o))}function ed(e,n,a){var o=0;n&&(o|=4),n_(a,e,o,n)}var hu="_reactListening"+Math.random().toString(36).slice(2);function nd(e){if(!e[hu]){e[hu]=!0,zn.forEach(function(a){a!=="selectionchange"&&(EM.has(a)||ed(a,!1,e),ed(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hu]||(n[hu]=!0,ed("selectionchange",!1,n))}}function n_(e,n,a,o){switch(A_(n)){case 2:var u=QM;break;case 8:u=JM;break;default:u=gd}a=u.bind(null,n,a,e),u=void 0,!Xa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function id(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Bi(A),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=h=S;continue t}A=A.parentNode}}o=o.return}Gn(function(){var ut=h,Rt=Ga(a),Dt=[];t:{var ft=Fm.get(e);if(ft!==void 0){var pt=fa,Ce=e;switch(e){case"keypress":if(xr(a)===0)break t;case"keydown":case"keyup":pt=Nt;break;case"focusin":Ce="focus",pt=ll;break;case"focusout":Ce="blur",pt=ll;break;case"beforeblur":case"afterblur":pt=ll;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pt=$r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pt=Rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pt=qt;break;case Nm:case Pm:case Om:pt=L;break;case Im:pt=Wt;break;case"scroll":case"scrollend":pt=Tc;break;case"wheel":pt=Bt;break;case"copy":case"cut":case"paste":pt=Z;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pt=te;break;case"toggle":case"beforetoggle":pt=Gt}var Ee=(n&4)!==0,yn=!Ee&&(e==="scroll"||e==="scrollend"),tt=Ee?ft!==null?ft+"Capture":null:ft;Ee=[];for(var q=ut,rt;q!==null;){var wt=q;if(rt=wt.stateNode,wt=wt.tag,wt!==5&&wt!==26&&wt!==27||rt===null||tt===null||(wt=Ta(q,tt),wt!=null&&Ee.push(Bl(q,wt,rt))),yn)break;q=q.return}0<Ee.length&&(ft=new pt(ft,Ce,null,a,Rt),Dt.push({event:ft,listeners:Ee}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",pt=e==="mouseout"||e==="pointerout",ft&&a!==os&&(Ce=a.relatedTarget||a.fromElement)&&(Bi(Ce)||Ce[ya]))break t;if((pt||ft)&&(ft=Rt.window===Rt?Rt:(ft=Rt.ownerDocument)?ft.defaultView||ft.parentWindow:window,pt?(Ce=a.relatedTarget||a.toElement,pt=ut,Ce=Ce?Bi(Ce):null,Ce!==null&&(yn=c(Ce),Ee=Ce.tag,Ce!==yn||Ee!==5&&Ee!==27&&Ee!==6)&&(Ce=null)):(pt=null,Ce=ut),pt!==Ce)){if(Ee=$r,wt="onMouseLeave",tt="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(Ee=te,wt="onPointerLeave",tt="onPointerEnter",q="pointer"),yn=pt==null?ft:Yi(pt),rt=Ce==null?ft:Yi(Ce),ft=new Ee(wt,q+"leave",pt,a,Rt),ft.target=yn,ft.relatedTarget=rt,wt=null,Bi(Rt)===ut&&(Ee=new Ee(tt,q+"enter",Ce,a,Rt),Ee.target=rt,Ee.relatedTarget=yn,wt=Ee),yn=wt,pt&&Ce)e:{for(Ee=pt,tt=Ce,q=0,rt=Ee;rt;rt=To(rt))q++;for(rt=0,wt=tt;wt;wt=To(wt))rt++;for(;0<q-rt;)Ee=To(Ee),q--;for(;0<rt-q;)tt=To(tt),rt--;for(;q--;){if(Ee===tt||tt!==null&&Ee===tt.alternate)break e;Ee=To(Ee),tt=To(tt)}Ee=null}else Ee=null;pt!==null&&i_(Dt,ft,pt,Ee,!1),Ce!==null&&yn!==null&&i_(Dt,yn,Ce,Ee,!0)}}t:{if(ft=ut?Yi(ut):window,pt=ft.nodeName&&ft.nodeName.toLowerCase(),pt==="select"||pt==="input"&&ft.type==="file")var he=ym;else if(di(ft))if(bm)he=Fx;else{he=Ox;var He=Px}else pt=ft.nodeName,!pt||pt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?ut&&Zi(ut.elementType)&&(he=ym):he=Ix;if(he&&(he=he(e,ut))){Ki(Dt,he,a,Rt);break t}He&&He(e,ft,ut),e==="focusout"&&ut&&ft.type==="number"&&ut.memoizedProps.value!=null&&ri(ft,"number",ft.value)}switch(He=ut?Yi(ut):window,e){case"focusin":(di(He)||He.contentEditable==="true")&&(to=He,Pf=ut,ul=null);break;case"focusout":ul=Pf=to=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,Um(Dt,a,Rt);break;case"selectionchange":if(zx)break;case"keydown":case"keyup":Um(Dt,a,Rt)}var ve;if(we)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Tn?Kn(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(pn&&a.locale!=="ko"&&(Tn||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Tn&&(ve=rl()):(Aa=Rt,Ra="value"in Aa?Aa.value:Aa.textContent,Tn=!0)),He=du(ut,Ae),0<He.length&&(Ae=new K(Ae,e,null,a,Rt),Dt.push({event:Ae,listeners:He}),ve?Ae.data=ve:(ve=oi(a),ve!==null&&(Ae.data=ve)))),(ve=Nn?Ui(e,a):yi(e,a))&&(Ae=du(ut,"onBeforeInput"),0<Ae.length&&(He=new K("onBeforeInput","beforeinput",null,a,Rt),Dt.push({event:He,listeners:Ae}),He.data=ve)),SM(Dt,e,ut,a,Rt)}e_(Dt,n)})}function Bl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function du(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ta(e,a),u!=null&&o.unshift(Bl(e,u,h)),u=Ta(e,n),u!=null&&o.push(Bl(e,u,h))),e.tag===3)return o;e=e.return}return[]}function To(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function i_(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var A=a,G=A.alternate,ut=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||ut===null||(G=ut,u?(ut=Ta(a,h),ut!=null&&S.unshift(Bl(a,ut,G))):u||(ut=Ta(a,h),ut!=null&&S.push(Bl(a,ut,G)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var TM=/\r\n?/g,AM=/\u0000|\uFFFD/g;function a_(e){return(typeof e=="string"?e:""+e).replace(TM,`
`).replace(AM,"")}function s_(e,n){return n=a_(n),a_(e)===n}function pu(){}function Sn(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&bn(e,""+o);break;case"className":ct(e,"class",o);break;case"tabIndex":ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,a,o);break;case"style":Di(e,o,h);break;case"data":if(n!=="object"){ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_r(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Sn(e,n,"name",u.name,u,null),Sn(e,n,"formEncType",u.formEncType,u,null),Sn(e,n,"formMethod",u.formMethod,u,null),Sn(e,n,"formTarget",u.formTarget,u,null)):(Sn(e,n,"encType",u.encType,u,null),Sn(e,n,"method",u.method,u,null),Sn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_r(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=pu);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=_r(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ke("beforetoggle",e),ke("toggle",e),mt(e,"popover",o);break;case"xlinkActuate":it(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":it(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":it(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":it(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":it(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":it(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":it(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":it(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":it(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":mt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gr.get(a)||a,mt(e,a,o))}}function ad(e,n,a,o,u,h){switch(a){case"style":Di(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?bn(e,o):(typeof o=="number"||typeof o=="bigint")&&bn(e,""+o);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"onClick":o!=null&&(e.onclick=pu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mr.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[fn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):mt(e,a,o)}}}function gi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Sn(e,n,h,S,a,null)}}u&&Sn(e,n,"srcSet",a.srcSet,a,null),o&&Sn(e,n,"src",a.src,a,null);return;case"input":ke("invalid",e);var A=h=S=u=null,G=null,ut=null;for(o in a)if(a.hasOwnProperty(o)){var Rt=a[o];if(Rt!=null)switch(o){case"name":u=Rt;break;case"type":S=Rt;break;case"checked":G=Rt;break;case"defaultChecked":ut=Rt;break;case"value":h=Rt;break;case"defaultValue":A=Rt;break;case"children":case"dangerouslySetInnerHTML":if(Rt!=null)throw Error(s(137,n));break;default:Sn(e,n,o,Rt,a,null)}}Mi(e,h,A,G,ut,S,u,!1),an(e);return;case"select":ke("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Sn(e,n,u,A,a,null)}n=h,a=S,e.multiple=!!o,n!=null?ei(e,!!o,n,!1):a!=null&&ei(e,!!o,a,!0);return;case"textarea":ke("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Sn(e,n,S,A,a,null)}sn(e,o,u,h),an(e);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Sn(e,n,G,o,a,null));return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(o=0;o<Fl.length;o++)ke(Fl[o],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in a)if(a.hasOwnProperty(ut)&&(o=a[ut],o!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Sn(e,n,ut,o,a,null)}return;default:if(Zi(n)){for(Rt in a)a.hasOwnProperty(Rt)&&(o=a[Rt],o!==void 0&&ad(e,n,Rt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Sn(e,n,A,o,a,null))}function RM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,A=null,G=null,ut=null,Rt=null;for(pt in a){var Dt=a[pt];if(a.hasOwnProperty(pt)&&Dt!=null)switch(pt){case"checked":break;case"value":break;case"defaultValue":G=Dt;default:o.hasOwnProperty(pt)||Sn(e,n,pt,null,o,Dt)}}for(var ft in o){var pt=o[ft];if(Dt=a[ft],o.hasOwnProperty(ft)&&(pt!=null||Dt!=null))switch(ft){case"type":h=pt;break;case"name":u=pt;break;case"checked":ut=pt;break;case"defaultChecked":Rt=pt;break;case"value":S=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:pt!==Dt&&Sn(e,n,ft,pt,o,Dt)}}Be(e,S,A,G,ut,Rt,h,u);return;case"select":pt=S=A=ft=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":pt=G;default:o.hasOwnProperty(h)||Sn(e,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":ft=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==G&&Sn(e,n,u,h,o,G)}n=A,a=S,o=pt,ft!=null?ei(e,!!a,ft,!1):!!o!=!!a&&(n!=null?ei(e,!!a,n,!0):ei(e,!!a,a?[]:"",!1));return;case"textarea":pt=ft=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Sn(e,n,A,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":ft=u;break;case"defaultValue":pt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Sn(e,n,S,u,o,h)}ji(e,ft,pt);return;case"option":for(var Ce in a)ft=a[Ce],a.hasOwnProperty(Ce)&&ft!=null&&!o.hasOwnProperty(Ce)&&(Ce==="selected"?e.selected=!1:Sn(e,n,Ce,null,o,ft));for(G in o)ft=o[G],pt=a[G],o.hasOwnProperty(G)&&ft!==pt&&(ft!=null||pt!=null)&&(G==="selected"?e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol":Sn(e,n,G,ft,o,pt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)ft=a[Ee],a.hasOwnProperty(Ee)&&ft!=null&&!o.hasOwnProperty(Ee)&&Sn(e,n,Ee,null,o,ft);for(ut in o)if(ft=o[ut],pt=a[ut],o.hasOwnProperty(ut)&&ft!==pt&&(ft!=null||pt!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Sn(e,n,ut,ft,o,pt)}return;default:if(Zi(n)){for(var yn in a)ft=a[yn],a.hasOwnProperty(yn)&&ft!==void 0&&!o.hasOwnProperty(yn)&&ad(e,n,yn,void 0,o,ft);for(Rt in o)ft=o[Rt],pt=a[Rt],!o.hasOwnProperty(Rt)||ft===pt||ft===void 0&&pt===void 0||ad(e,n,Rt,ft,o,pt);return}}for(var tt in a)ft=a[tt],a.hasOwnProperty(tt)&&ft!=null&&!o.hasOwnProperty(tt)&&Sn(e,n,tt,null,o,ft);for(Dt in o)ft=o[Dt],pt=a[Dt],!o.hasOwnProperty(Dt)||ft===pt||ft==null&&pt==null||Sn(e,n,Dt,ft,o,pt)}var sd=null,rd=null;function mu(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function od(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ld=null;function wM(){var e=window.event;return e&&e.type==="popstate"?e===ld?!1:(ld=e,!0):(ld=null,!1)}var l_=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,DM=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(e){return c_.resolve(null).then(e).catch(UM)}:l_;function UM(e){setTimeout(function(){throw e})}function Qs(e){return e==="head"}function u_(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&zl(S.documentElement),a&2&&zl(S.body),a&4)for(a=S.head,zl(a),S=a.firstChild;S;){var A=S.nextSibling,G=S.nodeName;S[za]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=A}}if(u===0){e.removeChild(h),Yl(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Yl(n)}function cd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cd(a),rs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function LM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ua(e.nextSibling),e===null)break}return null}function NM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ua(e.nextSibling),e===null))return null;return e}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function PM(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ua(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var fd=null;function f_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function h_(e,n,a){switch(n=mu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);rs(e)}var xa=new Map,d_=new Set;function gu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bs=B.d;B.d={f:OM,r:IM,D:FM,C:BM,L:zM,m:HM,X:VM,S:GM,M:kM};function OM(){var e=bs.f(),n=ou();return e||n}function IM(e){var n=ca(e);n!==null&&n.tag===5&&n.type==="form"?N0(n):bs.r(e)}var Ao=typeof document>"u"?null:document;function p_(e,n,a){var o=Ao;if(o&&typeof n=="string"&&n){var u=dn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),d_.has(u)||(d_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),gi(n,"link",e),Un(n),o.head.appendChild(n)))}}function FM(e){bs.D(e),p_("dns-prefetch",e,null)}function BM(e,n){bs.C(e,n),p_("preconnect",e,n)}function zM(e,n,a){bs.L(e,n,a);var o=Ao;if(o&&e&&n){var u='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+dn(a.imageSizes)+'"]')):u+='[href="'+dn(e)+'"]';var h=u;switch(n){case"style":h=Ro(e);break;case"script":h=wo(e)}xa.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xa.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Hl(h))||n==="script"&&o.querySelector(Gl(h))||(n=o.createElement("link"),gi(n,"link",e),Un(n),o.head.appendChild(n)))}}function HM(e,n){bs.m(e,n);var a=Ao;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+dn(o)+'"][href="'+dn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=wo(e)}if(!xa.has(h)&&(e=g({rel:"modulepreload",href:e},n),xa.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Gl(h)))return}o=a.createElement("link"),gi(o,"link",e),Un(o),a.head.appendChild(o)}}}function GM(e,n,a){bs.S(e,n,a);var o=Ao;if(o&&e){var u=ba(o).hoistableStyles,h=Ro(e);n=n||"default";var S=u.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Hl(h)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xa.get(h))&&hd(e,a);var G=S=o.createElement("link");Un(G),gi(G,"link",e),G._p=new Promise(function(ut,Rt){G.onload=ut,G.onerror=Rt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_u(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(h,S)}}}function VM(e,n){bs.X(e,n);var a=Ao;if(a&&e){var o=ba(a).hoistableScripts,u=wo(e),h=o.get(u);h||(h=a.querySelector(Gl(u)),h||(e=g({src:e,async:!0},n),(n=xa.get(u))&&dd(e,n),h=a.createElement("script"),Un(h),gi(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function kM(e,n){bs.M(e,n);var a=Ao;if(a&&e){var o=ba(a).hoistableScripts,u=wo(e),h=o.get(u);h||(h=a.querySelector(Gl(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=xa.get(u))&&dd(e,n),h=a.createElement("script"),Un(h),gi(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function m_(e,n,a,o){var u=(u=nt.current)?gu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ro(a.href),a=ba(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ro(a.href);var h=ba(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Hl(e)))&&!h._p&&(S.instance=h,S.state.loading=5),xa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xa.set(e,a),h||XM(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=wo(a),a=ba(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ro(e){return'href="'+dn(e)+'"'}function Hl(e){return'link[rel="stylesheet"]['+e+"]"}function g_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function XM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),gi(n,"link",a),Un(n),e.head.appendChild(n))}function wo(e){return'[src="'+dn(e)+'"]'}function Gl(e){return"script[async]"+e}function __(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+dn(a.href)+'"]');if(o)return n.instance=o,Un(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Un(o),gi(o,"style",u),_u(o,a.precedence,e),n.instance=o;case"stylesheet":u=Ro(a.href);var h=e.querySelector(Hl(u));if(h)return n.state.loading|=4,n.instance=h,Un(h),h;o=g_(a),(u=xa.get(u))&&hd(o,u),h=(e.ownerDocument||e).createElement("link"),Un(h);var S=h;return S._p=new Promise(function(A,G){S.onload=A,S.onerror=G}),gi(h,"link",o),n.state.loading|=4,_u(h,a.precedence,e),n.instance=h;case"script":return h=wo(a.src),(u=e.querySelector(Gl(h)))?(n.instance=u,Un(u),u):(o=a,(u=xa.get(h))&&(o=g({},a),dd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Un(u),gi(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,_u(o,a.precedence,e));return n.instance}function _u(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function hd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function dd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vu=null;function v_(e,n,a){if(vu===null){var o=new Map,u=vu=new Map;u.set(a,o)}else u=vu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[za]||h[Wn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function x_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function WM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Vl=null;function qM(){}function YM(e,n,a){if(Vl===null)throw Error(s(475));var o=Vl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Ro(a.href),h=e.querySelector(Hl(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=xu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,Un(h);return}h=e.ownerDocument||e,a=g_(a),(u=xa.get(u))&&hd(a,u),h=h.createElement("link"),Un(h);var S=h;S._p=new Promise(function(A,G){S.onload=A,S.onerror=G}),gi(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=xu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function jM(){if(Vl===null)throw Error(s(475));var e=Vl;return e.stylesheets&&e.count===0&&pd(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&pd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function xu(){if(this.count--,this.count===0){if(this.stylesheets)pd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mu=null;function pd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mu=new Map,n.forEach(ZM,e),Mu=null,xu.call(e))}function ZM(e,n){if(!(n.state.loading&4)){var a=Mu.get(e);if(a)var o=a.get(null);else{a=new Map,Mu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=xu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var kl={$$typeof:I,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function KM(e,n,a,o,u,h,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.hiddenUpdates=Vt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function S_(e,n,a,o,u,h,S,A,G,ut,Rt,Dt){return e=new KM(e,n,a,S,A,G,ut,Dt),n=1,h===!0&&(n|=24),h=Ji(3,null,null,n),e.current=h,h.stateNode=e,n=Zf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},$f(h),e}function y_(e){return e?(e=ao,e):ao}function b_(e,n,a,o,u,h){u=y_(u),o.context===null?o.context=u:o.pendingContext=u,o=Bs(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=zs(e,o,n),a!==null&&(ia(a,e,n),xl(a,e,n))}function E_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function md(e,n){E_(e,n),(e=e.alternate)&&E_(e,n)}function T_(e){if(e.tag===13){var n=io(e,67108864);n!==null&&ia(n,e,67108864),md(e,67108864)}}var Su=!0;function QM(e,n,a,o){var u=F.T;F.T=null;var h=B.p;try{B.p=2,gd(e,n,a,o)}finally{B.p=h,F.T=u}}function JM(e,n,a,o){var u=F.T;F.T=null;var h=B.p;try{B.p=8,gd(e,n,a,o)}finally{B.p=h,F.T=u}}function gd(e,n,a,o){if(Su){var u=_d(o);if(u===null)id(e,n,o,yu,a),R_(e,o);else if(tS(u,e,n,a,o))o.stopPropagation();else if(R_(e,o),n&4&&-1<$M.indexOf(e)){for(;u!==null;){var h=ca(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=ae(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var G=1<<31-Qt(S);A.entanglements[1]|=G,S&=~G}Qa(h),(mn&6)===0&&(su=Qe()+500,Il(0))}}break;case 13:A=io(h,2),A!==null&&ia(A,h,2),ou(),md(h,2)}if(h=_d(o),h===null&&id(e,n,o,yu,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else id(e,n,o,null,a)}}function _d(e){return e=Ga(e),vd(e)}var yu=null;function vd(e){if(yu=null,e=Bi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yu=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case Dn:return 2;case Je:return 8;case $e:case fe:return 32;case O:return 268435456;default:return 32}default:return 32}}var xd=!1,Js=null,$s=null,tr=null,Xl=new Map,Wl=new Map,er=[],$M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R_(e,n){switch(e){case"focusin":case"focusout":Js=null;break;case"dragenter":case"dragleave":$s=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Xl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(n.pointerId)}}function ql(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ca(n),n!==null&&T_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function tS(e,n,a,o,u){switch(n){case"focusin":return Js=ql(Js,e,n,a,o,u),!0;case"dragenter":return $s=ql($s,e,n,a,o,u),!0;case"mouseover":return tr=ql(tr,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Xl.set(h,ql(Xl.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Wl.set(h,ql(Wl.get(h)||null,e,n,a,o,u)),!0}return!1}function w_(e){var n=Bi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,xi(e.priority,function(){if(a.tag===13){var o=na();o=ge(o);var u=io(a,o);u!==null&&ia(u,a,o),md(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=_d(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);os=o,a.target.dispatchEvent(o),os=null}else return n=ca(a),n!==null&&T_(n),e.blockedOn=a,!1;n.shift()}return!0}function C_(e,n,a){bu(e)&&a.delete(n)}function eS(){xd=!1,Js!==null&&bu(Js)&&(Js=null),$s!==null&&bu($s)&&($s=null),tr!==null&&bu(tr)&&(tr=null),Xl.forEach(C_),Wl.forEach(C_)}function Eu(e,n){e.blockedOn===n&&(e.blockedOn=null,xd||(xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,eS)))}var Tu=null;function D_(e){Tu!==e&&(Tu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tu===e&&(Tu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(vd(o||a)===null)continue;break}var h=ca(a);h!==null&&(e.splice(n,3),n-=3,vh(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Yl(e){function n(G){return Eu(G,e)}Js!==null&&Eu(Js,e),$s!==null&&Eu($s,e),tr!==null&&Eu(tr,e),Xl.forEach(n),Wl.forEach(n);for(var a=0;a<er.length;a++){var o=er[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)w_(a),a.blockedOn===null&&er.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[fn]||null;if(typeof h=="function")S||D_(a);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[fn]||null)A=S.formAction;else if(vd(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),D_(a)}}}function Md(e){this._internalRoot=e}Au.prototype.render=Md.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=na();b_(a,o,e,n,null,null)},Au.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;b_(e.current,2,null,e,null,null),ou(),n[ya]=null}};function Au(e){this._internalRoot=e}Au.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<er.length&&n!==0&&n<er[a].priority;a++);er.splice(a,0,e),a===0&&w_(e)}};var U_=t.version;if(U_!=="19.1.0")throw Error(s(527,U_,"19.1.0"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var nS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{Et=Ru.inject(nS),Tt=Ru}catch{}}return Zl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Y0,h=j0,S=Z0,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=S_(e,1,!1,null,null,a,o,u,h,S,A,null),e[ya]=n.current,nd(e),new Md(n)},Zl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Y0,S=j0,A=Z0,G=null,ut=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(ut=a.formState)),n=S_(e,1,!0,n,a??null,o,u,h,S,A,G,ut),n.context=y_(null),a=n.current,o=na(),o=ge(o),u=Bs(o),u.callback=null,zs(a,u,o),a=o,n.current.lanes=a,ne(n,a),Qa(n),e[ya]=n.current,nd(e),new Au(n)},Zl.version="19.1.0",Zl}var G_;function hS(){if(G_)return yd.exports;G_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yd.exports=fS(),yd.exports}var dS=hS(),Pn=rm();const om="183",pS=0,V_=1,mS=2,lf=1,gS=2,lc=3,dr=0,qi=1,Oa=2,Ds=0,jr=1,jo=2,k_=3,X_=4,_S=5,Xr=100,vS=101,xS=102,MS=103,SS=104,yS=200,bS=201,ES=202,TS=203,cp=204,up=205,AS=206,RS=207,wS=208,CS=209,DS=210,US=211,LS=212,NS=213,PS=214,fp=0,hp=1,dp=2,Jo=3,pp=4,mp=5,gp=6,_p=7,tx=0,OS=1,IS=2,is=0,ex=1,nx=2,ix=3,lm=4,ax=5,sx=6,rx=7,ox=300,Zr=301,$o=302,Rd=303,wd=304,bf=306,vp=1e3,Cs=1001,xp=1002,vi=1003,FS=1004,wu=1005,Ri=1006,Cd=1007,qr=1008,la=1009,lx=1010,cx=1011,pc=1012,cm=1013,ss=1014,es=1015,Ns=1016,um=1017,fm=1018,mc=1020,ux=35902,fx=35899,hx=1021,dx=1022,Fa=1023,Ps=1026,Yr=1027,px=1028,hm=1029,tl=1030,dm=1031,pm=1033,cf=33776,uf=33777,ff=33778,hf=33779,Mp=35840,Sp=35841,yp=35842,bp=35843,Ep=36196,Tp=37492,Ap=37496,Rp=37488,wp=37489,Cp=37490,Dp=37491,Up=37808,Lp=37809,Np=37810,Pp=37811,Op=37812,Ip=37813,Fp=37814,Bp=37815,zp=37816,Hp=37817,Gp=37818,Vp=37819,kp=37820,Xp=37821,Wp=36492,qp=36494,Yp=36495,jp=36283,Zp=36284,Kp=36285,Qp=36286,BS=3200,mx=0,zS=1,ur="",un="srgb",el="srgb-linear",mf="linear",_n="srgb",Co=7680,W_=519,HS=512,GS=513,VS=514,mm=515,kS=516,XS=517,gm=518,WS=519,Jp=35044,Cu=35048,q_="300 es",ns=2e3,gc=2001;function qS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function _c(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function YS(){const r=_c("canvas");return r.style.display="block",r}const Y_={};function gf(...r){const t="THREE."+r.shift();console.log(t,...r)}function gx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function De(...r){r=gx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function nn(...r){r=gx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function _f(...r){const t=r.join(" ");t in Y_||(Y_[t]=!0,De(...r))}function jS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const ZS={[fp]:hp,[dp]:gp,[pp]:_p,[Jo]:mp,[hp]:fp,[gp]:dp,[_p]:pp,[mp]:Jo};class il{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let j_=1234567;const fc=Math.PI/180,vc=180/Math.PI;function Us(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ti[r&255]+Ti[r>>8&255]+Ti[r>>16&255]+Ti[r>>24&255]+"-"+Ti[t&255]+Ti[t>>8&255]+"-"+Ti[t>>16&15|64]+Ti[t>>24&255]+"-"+Ti[i&63|128]+Ti[i>>8&255]+"-"+Ti[i>>16&255]+Ti[i>>24&255]+Ti[s&255]+Ti[s>>8&255]+Ti[s>>16&255]+Ti[s>>24&255]).toLowerCase()}function Ke(r,t,i){return Math.max(t,Math.min(i,r))}function _m(r,t){return(r%t+t)%t}function KS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function QS(r,t,i){return r!==t?(i-r)/(t-r):0}function hc(r,t,i){return(1-i)*r+i*t}function JS(r,t,i,s){return hc(r,t,1-Math.exp(-i*s))}function $S(r,t=1){return t-Math.abs(_m(r,t*2)-t)}function ty(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function ey(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function ny(r,t){return r+Math.floor(Math.random()*(t-r+1))}function iy(r,t){return r+Math.random()*(t-r)}function ay(r){return r*(.5-Math.random())}function sy(r){r!==void 0&&(j_=r);let t=j_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ry(r){return r*fc}function oy(r){return r*vc}function ly(r){return(r&r-1)===0&&r!==0}function cy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fy(r,t,i,s,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((t+s)/2),g=f((t+s)/2),x=c((t-s)/2),_=f((t-s)/2),y=c((s-t)/2),b=f((s-t)/2);switch(l){case"XYX":r.set(p*g,m*x,m*_,p*d);break;case"YZY":r.set(m*_,p*g,m*x,p*d);break;case"ZXZ":r.set(m*x,m*_,p*g,p*d);break;case"XZX":r.set(p*g,m*b,m*y,p*d);break;case"YXY":r.set(m*y,p*g,m*b,p*d);break;case"ZYZ":r.set(m*b,m*y,p*g,p*d);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ia(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hy={DEG2RAD:fc,RAD2DEG:vc,generateUUID:Us,clamp:Ke,euclideanModulo:_m,mapLinear:KS,inverseLerp:QS,lerp:hc,damp:JS,pingpong:$S,smoothstep:ty,smootherstep:ey,randInt:ny,randFloat:iy,randFloatSpread:ay,seededRandom:sy,degToRad:ry,radToDeg:oy,isPowerOfTwo:ly,ceilPowerOfTwo:cy,floorPowerOfTwo:uy,setQuaternionFromProperEuler:fy,normalize:vn,denormalize:Ia};class Fe{constructor(t=0,i=0){Fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ke(this.x,t.x,i.x),this.y=Ke(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ke(this.x,t,i),this.y=Ke(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ke(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ke(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],g=s[l+2],x=s[l+3],_=c[f+0],y=c[f+1],b=c[f+2],w=c[f+3];if(x!==w||m!==_||d!==y||g!==b){let M=m*_+d*y+g*b+x*w;M<0&&(_=-_,y=-y,b=-b,w=-w,M=-M);let v=1-p;if(M<.9995){const C=Math.acos(M),I=Math.sin(C);v=Math.sin(v*C)/I,p=Math.sin(p*C)/I,m=m*v+_*p,d=d*v+y*p,g=g*v+b*p,x=x*v+w*p}else{m=m*v+_*p,d=d*v+y*p,g=g*v+b*p,x=x*v+w*p;const C=1/Math.sqrt(m*m+d*d+g*g+x*x);m*=C,d*=C,g*=C,x*=C}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],g=s[l+3],x=c[f],_=c[f+1],y=c[f+2],b=c[f+3];return t[i]=p*b+g*x+m*y-d*_,t[i+1]=m*b+g*_+d*x-p*y,t[i+2]=d*b+g*y+p*_-m*x,t[i+3]=g*b-p*x-m*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(s/2),g=p(l/2),x=p(c/2),_=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=_*g*x+d*y*b,this._y=d*y*x-_*g*b,this._z=d*g*b+_*y*x,this._w=d*g*x-_*y*b;break;case"YXZ":this._x=_*g*x+d*y*b,this._y=d*y*x-_*g*b,this._z=d*g*b-_*y*x,this._w=d*g*x+_*y*b;break;case"ZXY":this._x=_*g*x-d*y*b,this._y=d*y*x+_*g*b,this._z=d*g*b+_*y*x,this._w=d*g*x-_*y*b;break;case"ZYX":this._x=_*g*x-d*y*b,this._y=d*y*x+_*g*b,this._z=d*g*b-_*y*x,this._w=d*g*x+_*y*b;break;case"YZX":this._x=_*g*x+d*y*b,this._y=d*y*x+_*g*b,this._z=d*g*b-_*y*x,this._w=d*g*x-_*y*b;break;case"XZY":this._x=_*g*x-d*y*b,this._y=d*y*x-_*g*b,this._z=d*g*b+_*y*x,this._w=d*g*x+_*y*b;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],g=i[6],x=i[10],_=s+p+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-d)*y,this._z=(f-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+d)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(c-d)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(f-l)/y,this._x=(c+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=s*g+f*p+l*d-c*m,this._y=l*g+f*m+c*p-s*d,this._z=c*g+f*d+s*m-l*p,this._w=f*g-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Z_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Z_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*s),g=2*(p*i-c*l),x=2*(c*s-f*i);return this.x=i+m*d+f*x-p*g,this.y=s+m*g+p*d-c*x,this.z=l+m*x+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ke(this.x,t.x,i.x),this.y=Ke(this.y,t.y,i.y),this.z=Ke(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ke(this.x,t,i),this.y=Ke(this.y,t,i),this.z=Ke(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ke(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Dd.copy(this).projectOnVector(t),this.sub(Dd)}reflect(t){return this.sub(Dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ke(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new j,Z_=new al;class Oe{constructor(t,i,s,l,c,f,p,m,d){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d)}set(t,i,s,l,c,f,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],g=s[4],x=s[7],_=s[2],y=s[5],b=s[8],w=l[0],M=l[3],v=l[6],C=l[1],I=l[4],P=l[7],z=l[2],H=l[5],k=l[8];return c[0]=f*w+p*C+m*z,c[3]=f*M+p*I+m*H,c[6]=f*v+p*P+m*k,c[1]=d*w+g*C+x*z,c[4]=d*M+g*I+x*H,c[7]=d*v+g*P+x*k,c[2]=_*w+y*C+b*z,c[5]=_*M+y*I+b*H,c[8]=_*v+y*P+b*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*p*d-s*c*g+s*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],x=g*f-p*d,_=p*m-g*c,y=d*c-f*m,b=i*x+s*_+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(l*d-g*s)*w,t[2]=(p*s-l*f)*w,t[3]=_*w,t[4]=(g*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=y*w,t[7]=(s*m-d*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Ud.makeScale(t,i)),this}rotate(t){return this.premultiply(Ud.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ud.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ud=new Oe,K_=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q_=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dy(){const r={enabled:!0,workingColorSpace:el,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===_n&&(l.r=Ls(l.r),l.g=Ls(l.g),l.b=Ls(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===_n&&(l.r=Qo(l.r),l.g=Qo(l.g),l.b=Qo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ur?mf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return _f("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return _f("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[el]:{primaries:t,whitePoint:s,transfer:mf,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:t,whitePoint:s,transfer:_n,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),r}const rn=dy();function Ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Do;class py{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Do===void 0&&(Do=_c("canvas")),Do.width=t.width,Do.height=t.height;const l=Do.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Do}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=_c("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ls(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ls(i[s]/255)*255):i[s]=Ls(i[s]);return{data:i,width:t.width,height:t.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let my=0;class vm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Ld(l[f].image)):c.push(Ld(l[f]))}else c=Ld(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ld(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?py.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let gy=0;const Nd=new j;class Zn extends il{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=Cs,l=Cs,c=Ri,f=qr,p=Fa,m=la,d=Zn.DEFAULT_ANISOTROPY,g=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Us(),this.name="",this.source=new vm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){De(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){De(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ox)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vp:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case xp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vp:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case xp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=ox;Zn.DEFAULT_ANISOTROPY=1;class Xn{constructor(t=0,i=0,s=0,l=1){Xn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],g=m[4],x=m[8],_=m[1],y=m[5],b=m[9],w=m[2],M=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+w)<.1&&Math.abs(b+M)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(d+1)/2,P=(y+1)/2,z=(v+1)/2,H=(g+_)/4,k=(x+w)/4,T=(b+M)/4;return I>P&&I>z?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=H/s,c=k/s):P>z?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=H/l,c=T/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=k/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-b)*(M-b)+(x-w)*(x-w)+(_-g)*(_-g));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(x-w)/C,this.z=(_-g)/C,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ke(this.x,t.x,i.x),this.y=Ke(this.y,t.y,i.y),this.z=Ke(this.z,t.z,i.z),this.w=Ke(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ke(this.x,t,i),this.y=Ke(this.y,t,i),this.z=Ke(this.z,t,i),this.w=Ke(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ke(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _y extends il{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Xn(0,0,t,i),this.scissorTest=!1,this.viewport=new Xn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Zn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new vm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends _y{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class _x extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vy extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t,i,s,l,c,f,p,m,d,g,x,_,y,b,w,M){wn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d,g,x,_,y,b,w,M)}set(t,i,s,l,c,f,p,m,d,g,x,_,y,b,w,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=p,v[13]=m,v[2]=d,v[6]=g,v[10]=x,v[14]=_,v[3]=y,v[7]=b,v[11]=w,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Uo.setFromMatrixColumn(t,0).length(),c=1/Uo.setFromMatrixColumn(t,1).length(),f=1/Uo.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=f*g,y=f*x,b=p*g,w=p*x;i[0]=m*g,i[4]=-m*x,i[8]=d,i[1]=y+b*d,i[5]=_-w*d,i[9]=-p*m,i[2]=w-_*d,i[6]=b+y*d,i[10]=f*m}else if(t.order==="YXZ"){const _=m*g,y=m*x,b=d*g,w=d*x;i[0]=_+w*p,i[4]=b*p-y,i[8]=f*d,i[1]=f*x,i[5]=f*g,i[9]=-p,i[2]=y*p-b,i[6]=w+_*p,i[10]=f*m}else if(t.order==="ZXY"){const _=m*g,y=m*x,b=d*g,w=d*x;i[0]=_-w*p,i[4]=-f*x,i[8]=b+y*p,i[1]=y+b*p,i[5]=f*g,i[9]=w-_*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const _=f*g,y=f*x,b=p*g,w=p*x;i[0]=m*g,i[4]=b*d-y,i[8]=_*d+w,i[1]=m*x,i[5]=w*d+_,i[9]=y*d-b,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,y=f*d,b=p*m,w=p*d;i[0]=m*g,i[4]=w-_*x,i[8]=b*x+y,i[1]=x,i[5]=f*g,i[9]=-p*g,i[2]=-d*g,i[6]=y*x+b,i[10]=_-w*x}else if(t.order==="XZY"){const _=f*m,y=f*d,b=p*m,w=p*d;i[0]=m*g,i[4]=-x,i[8]=d*g,i[1]=_*x+w,i[5]=f*g,i[9]=y*x-b,i[2]=b*x-y,i[6]=p*g,i[10]=w*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xy,t,My)}lookAt(t,i,s){const l=this.elements;return aa.subVectors(t,i),aa.lengthSq()===0&&(aa.z=1),aa.normalize(),ir.crossVectors(s,aa),ir.lengthSq()===0&&(Math.abs(s.z)===1?aa.x+=1e-4:aa.z+=1e-4,aa.normalize(),ir.crossVectors(s,aa)),ir.normalize(),Du.crossVectors(aa,ir),l[0]=ir.x,l[4]=Du.x,l[8]=aa.x,l[1]=ir.y,l[5]=Du.y,l[9]=aa.y,l[2]=ir.z,l[6]=Du.z,l[10]=aa.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],g=s[1],x=s[5],_=s[9],y=s[13],b=s[2],w=s[6],M=s[10],v=s[14],C=s[3],I=s[7],P=s[11],z=s[15],H=l[0],k=l[4],T=l[8],N=l[12],ht=l[1],V=l[5],st=l[9],lt=l[13],St=l[2],at=l[6],F=l[10],B=l[14],dt=l[3],bt=l[7],U=l[11],J=l[15];return c[0]=f*H+p*ht+m*St+d*dt,c[4]=f*k+p*V+m*at+d*bt,c[8]=f*T+p*st+m*F+d*U,c[12]=f*N+p*lt+m*B+d*J,c[1]=g*H+x*ht+_*St+y*dt,c[5]=g*k+x*V+_*at+y*bt,c[9]=g*T+x*st+_*F+y*U,c[13]=g*N+x*lt+_*B+y*J,c[2]=b*H+w*ht+M*St+v*dt,c[6]=b*k+w*V+M*at+v*bt,c[10]=b*T+w*st+M*F+v*U,c[14]=b*N+w*lt+M*B+v*J,c[3]=C*H+I*ht+P*St+z*dt,c[7]=C*k+I*V+P*at+z*bt,c[11]=C*T+I*st+P*F+z*U,c[15]=C*N+I*lt+P*B+z*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],g=t[2],x=t[6],_=t[10],y=t[14],b=t[3],w=t[7],M=t[11],v=t[15],C=m*y-d*_,I=p*y-d*x,P=p*_-m*x,z=f*y-d*g,H=f*_-m*g,k=f*x-p*g;return i*(w*C-M*I+v*P)-s*(b*C-M*z+v*H)+l*(b*I-w*z+v*k)-c*(b*P-w*H+M*k)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],x=t[9],_=t[10],y=t[11],b=t[12],w=t[13],M=t[14],v=t[15],C=i*p-s*f,I=i*m-l*f,P=i*d-c*f,z=s*m-l*p,H=s*d-c*p,k=l*d-c*m,T=g*w-x*b,N=g*M-_*b,ht=g*v-y*b,V=x*M-_*w,st=x*v-y*w,lt=_*v-y*M,St=C*lt-I*st+P*V+z*ht-H*N+k*T;if(St===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const at=1/St;return t[0]=(p*lt-m*st+d*V)*at,t[1]=(l*st-s*lt-c*V)*at,t[2]=(w*k-M*H+v*z)*at,t[3]=(_*H-x*k-y*z)*at,t[4]=(m*ht-f*lt-d*N)*at,t[5]=(i*lt-l*ht+c*N)*at,t[6]=(M*P-b*k-v*I)*at,t[7]=(g*k-_*P+y*I)*at,t[8]=(f*st-p*ht+d*T)*at,t[9]=(s*ht-i*st-c*T)*at,t[10]=(b*H-w*P+v*C)*at,t[11]=(x*P-g*H-y*C)*at,t[12]=(p*N-f*V-m*T)*at,t[13]=(i*V-s*N+l*T)*at,t[14]=(w*I-b*z-M*C)*at,t[15]=(g*z-x*I+_*C)*at,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,d=c*f,g=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+s,g*m-l*f,0,d*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,g=f+f,x=p+p,_=c*d,y=c*g,b=c*x,w=f*g,M=f*x,v=p*x,C=m*d,I=m*g,P=m*x,z=s.x,H=s.y,k=s.z;return l[0]=(1-(w+v))*z,l[1]=(y+P)*z,l[2]=(b-I)*z,l[3]=0,l[4]=(y-P)*H,l[5]=(1-(_+v))*H,l[6]=(M+C)*H,l[7]=0,l[8]=(b+I)*k,l[9]=(M-C)*k,l[10]=(1-(_+w))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Uo.set(l[0],l[1],l[2]).length();const p=Uo.set(l[4],l[5],l[6]).length(),m=Uo.set(l[8],l[9],l[10]).length();c<0&&(f=-f),La.copy(this);const d=1/f,g=1/p,x=1/m;return La.elements[0]*=d,La.elements[1]*=d,La.elements[2]*=d,La.elements[4]*=g,La.elements[5]*=g,La.elements[6]*=g,La.elements[8]*=x,La.elements[9]*=x,La.elements[10]*=x,i.setFromRotationMatrix(La),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=ns,m=!1){const d=this.elements,g=2*c/(i-t),x=2*c/(s-l),_=(i+t)/(i-t),y=(s+l)/(s-l);let b,w;if(m)b=c/(f-c),w=f*c/(f-c);else if(p===ns)b=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(p===gc)b=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=x,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=ns,m=!1){const d=this.elements,g=2/(i-t),x=2/(s-l),_=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,w;if(m)b=1/(f-c),w=f/(f-c);else if(p===ns)b=-2/(f-c),w=-(f+c)/(f-c);else if(p===gc)b=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=x,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Uo=new j,La=new wn,xy=new j(0,0,0),My=new j(1,1,1),ir=new j,Du=new j,aa=new j,J_=new wn,$_=new al;class Ba{constructor(t=0,i=0,s=0,l=Ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],g=l[9],x=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ke(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(Ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return J_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $_.setFromEuler(this),this.setFromQuaternion($_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ba.DEFAULT_ORDER="XYZ";class xm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sy=0;const tv=new j,Lo=new al,Es=new wn,Uu=new j,Kl=new j,yy=new j,by=new al,ev=new j(1,0,0),nv=new j(0,1,0),iv=new j(0,0,1),av={type:"added"},Ey={type:"removed"},No={type:"childadded",child:null},Pd={type:"childremoved",child:null};class hi extends il{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const t=new j,i=new Ba,s=new al,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new wn},normalMatrix:{value:new Oe}}),this.matrix=new wn,this.matrixWorld=new wn,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Lo.setFromAxisAngle(t,i),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(t,i){return Lo.setFromAxisAngle(t,i),this.quaternion.premultiply(Lo),this}rotateX(t){return this.rotateOnAxis(ev,t)}rotateY(t){return this.rotateOnAxis(nv,t)}rotateZ(t){return this.rotateOnAxis(iv,t)}translateOnAxis(t,i){return tv.copy(t).applyQuaternion(this.quaternion),this.position.add(tv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ev,t)}translateY(t){return this.translateOnAxis(nv,t)}translateZ(t){return this.translateOnAxis(iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Es.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Uu.copy(t):Uu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Kl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Es.lookAt(Kl,Uu,this.up):Es.lookAt(Uu,Kl,this.up),this.quaternion.setFromRotationMatrix(Es),l&&(Es.extractRotation(l.matrixWorld),Lo.setFromRotationMatrix(Es),this.quaternion.premultiply(Lo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(nn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(av),No.child=t,this.dispatchEvent(No),No.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ey),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Es.multiply(t.parent.matrixWorld)),t.applyMatrix4(Es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(av),No.child=t,this.dispatchEvent(No),No.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kl,t,yy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kl,by,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),x=f(t.shapes),_=f(t.skeletons),y=f(t.animations),b=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}hi.DEFAULT_UP=new j(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zo extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ty={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),v=this._getHandJoint(d,w);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],_=g.position.distanceTo(x.position),y=.02,b=.005;d.inputState.pinching&&_>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Ty)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Zo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function Id(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,rn.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=rn.workingColorSpace){return this.r=t,this.g=i,this.b=s,rn.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=rn.workingColorSpace){if(t=_m(t,1),i=Ke(i,0,1),s=Ke(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Id(f,c,t+1/3),this.g=Id(f,c,t),this.b=Id(f,c,t-1/3)}return rn.colorSpaceToWorking(this,l),this}setStyle(t,i=un){function s(c){c!==void 0&&parseFloat(c)<1&&De("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:De("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);De("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=un){const s=vx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):De("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}copyLinearToSRGB(t){return this.r=Qo(t.r),this.g=Qo(t.g),this.b=Qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return rn.workingToColorSpace(Ai.copy(this),t),Math.round(Ke(Ai.r*255,0,255))*65536+Math.round(Ke(Ai.g*255,0,255))*256+Math.round(Ke(Ai.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=rn.workingColorSpace){rn.workingToColorSpace(Ai.copy(this),i);const s=Ai.r,l=Ai.g,c=Ai.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const g=(p+f)/2;if(p===f)m=0,d=0;else{const x=f-p;switch(d=g<=.5?x/(f+p):x/(2-f-p),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=rn.workingColorSpace){return rn.workingToColorSpace(Ai.copy(this),i),t.r=Ai.r,t.g=Ai.g,t.b=Ai.b,t}getStyle(t=un){rn.workingToColorSpace(Ai.copy(this),t);const i=Ai.r,s=Ai.g,l=Ai.b;return t!==un?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ar),this.setHSL(ar.h+t,ar.s+i,ar.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ar),t.getHSL(Lu);const s=hc(ar.h,Lu.h,i),l=hc(ar.s,Lu.s,i),c=hc(ar.l,Lu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ai=new Xe;Xe.NAMES=vx;class Ay extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ba,this.environmentIntensity=1,this.environmentRotation=new Ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Na=new j,Ts=new j,Fd=new j,As=new j,Po=new j,Oo=new j,sv=new j,Bd=new j,zd=new j,Hd=new j,Gd=new Xn,Vd=new Xn,kd=new Xn;class Sa{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Na.subVectors(t,i),l.cross(Na);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Na.subVectors(l,i),Ts.subVectors(s,i),Fd.subVectors(t,i);const f=Na.dot(Na),p=Na.dot(Ts),m=Na.dot(Fd),d=Ts.dot(Ts),g=Ts.dot(Fd),x=f*d-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,y=(d*m-p*g)*_,b=(f*g-p*m)*_;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,As)===null?!1:As.x>=0&&As.y>=0&&As.x+As.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,As)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,As.x),m.addScaledVector(f,As.y),m.addScaledVector(p,As.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(t,i),Vd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Gd,c.x),f.addScaledVector(Vd,c.y),f.addScaledVector(kd,c.z),f}static isFrontFacing(t,i,s,l){return Na.subVectors(s,i),Ts.subVectors(t,i),Na.cross(Ts).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Na.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Na.cross(Ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Sa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Sa.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Sa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;Po.subVectors(l,s),Oo.subVectors(c,s),Bd.subVectors(t,s);const m=Po.dot(Bd),d=Oo.dot(Bd);if(m<=0&&d<=0)return i.copy(s);zd.subVectors(t,l);const g=Po.dot(zd),x=Oo.dot(zd);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*d;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Po,f);Hd.subVectors(t,c);const y=Po.dot(Hd),b=Oo.dot(Hd);if(b>=0&&y<=b)return i.copy(c);const w=y*d-m*b;if(w<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(Oo,p);const M=g*b-y*x;if(M<=0&&x-g>=0&&y-b>=0)return sv.subVectors(c,l),p=(x-g)/(x-g+(y-b)),i.copy(l).addScaledVector(sv,p);const v=1/(M+w+_);return f=w*v,p=_*v,i.copy(s).addScaledVector(Po,f).addScaledVector(Oo,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Sc{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pa.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pa.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pa.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Pa):Pa.fromBufferAttribute(c,f),Pa.applyMatrix4(t.matrixWorld),this.expandByPoint(Pa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nu.copy(s.boundingBox)),Nu.applyMatrix4(t.matrixWorld),this.union(Nu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pa),Pa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ql),Pu.subVectors(this.max,Ql),Io.subVectors(t.a,Ql),Fo.subVectors(t.b,Ql),Bo.subVectors(t.c,Ql),sr.subVectors(Fo,Io),rr.subVectors(Bo,Fo),Fr.subVectors(Io,Bo);let i=[0,-sr.z,sr.y,0,-rr.z,rr.y,0,-Fr.z,Fr.y,sr.z,0,-sr.x,rr.z,0,-rr.x,Fr.z,0,-Fr.x,-sr.y,sr.x,0,-rr.y,rr.x,0,-Fr.y,Fr.x,0];return!Xd(i,Io,Fo,Bo,Pu)||(i=[1,0,0,0,1,0,0,0,1],!Xd(i,Io,Fo,Bo,Pu))?!1:(Ou.crossVectors(sr,rr),i=[Ou.x,Ou.y,Ou.z],Xd(i,Io,Fo,Bo,Pu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rs=[new j,new j,new j,new j,new j,new j,new j,new j],Pa=new j,Nu=new Sc,Io=new j,Fo=new j,Bo=new j,sr=new j,rr=new j,Fr=new j,Ql=new j,Pu=new j,Ou=new j,Br=new j;function Xd(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Br.fromArray(r,c);const p=l.x*Math.abs(Br.x)+l.y*Math.abs(Br.y)+l.z*Math.abs(Br.z),m=t.dot(Br),d=i.dot(Br),g=s.dot(Br);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const $n=new j,Iu=new Fe;let Ry=0;class Rn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ry++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Jp,this.updateRanges=[],this.gpuType=es,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Iu.fromBufferAttribute(this,i),Iu.applyMatrix3(t),this.setXY(i,Iu.x,Iu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)$n.fromBufferAttribute(this,i),$n.applyMatrix3(t),this.setXYZ(i,$n.x,$n.y,$n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)$n.fromBufferAttribute(this,i),$n.applyMatrix4(t),this.setXYZ(i,$n.x,$n.y,$n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)$n.fromBufferAttribute(this,i),$n.applyNormalMatrix(t),this.setXYZ(i,$n.x,$n.y,$n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)$n.fromBufferAttribute(this,i),$n.transformDirection(t),this.setXYZ(i,$n.x,$n.y,$n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ia(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=vn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ia(i,this.array)),i}setX(t,i){return this.normalized&&(i=vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ia(i,this.array)),i}setY(t,i){return this.normalized&&(i=vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ia(i,this.array)),i}setZ(t,i){return this.normalized&&(i=vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ia(i,this.array)),i}setW(t,i){return this.normalized&&(i=vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=vn(i,this.array),s=vn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=vn(i,this.array),s=vn(s,this.array),l=vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=vn(i,this.array),s=vn(s,this.array),l=vn(l,this.array),c=vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jp&&(t.usage=this.usage),t}}class xx extends Rn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Mx extends Rn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class wi extends Rn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const wy=new Sc,Jl=new j,Wd=new j;class hr{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):wy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jl.subVectors(t,this.center);const i=Jl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jl.copy(t.center).add(Wd)),this.expandByPoint(Jl.copy(t.center).sub(Wd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Cy=0;const Ma=new wn,qd=new hi,zo=new j,sa=new Sc,$l=new Sc,fi=new j;class jn extends il{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qS(t)?Mx:xx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Oe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ma.makeRotationFromQuaternion(t),this.applyMatrix4(Ma),this}rotateX(t){return Ma.makeRotationX(t),this.applyMatrix4(Ma),this}rotateY(t){return Ma.makeRotationY(t),this.applyMatrix4(Ma),this}rotateZ(t){return Ma.makeRotationZ(t),this.applyMatrix4(Ma),this}translate(t,i,s){return Ma.makeTranslation(t,i,s),this.applyMatrix4(Ma),this}scale(t,i,s){return Ma.makeScale(t,i,s),this.applyMatrix4(Ma),this}lookAt(t){return qd.lookAt(t),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zo).negate(),this.translate(zo.x,zo.y,zo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new wi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];sa.setFromBufferAttribute(c),this.morphTargetsRelative?(fi.addVectors(this.boundingBox.min,sa.min),this.boundingBox.expandByPoint(fi),fi.addVectors(this.boundingBox.max,sa.max),this.boundingBox.expandByPoint(fi)):(this.boundingBox.expandByPoint(sa.min),this.boundingBox.expandByPoint(sa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(sa.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];$l.setFromBufferAttribute(p),this.morphTargetsRelative?(fi.addVectors(sa.min,$l.min),sa.expandByPoint(fi),fi.addVectors(sa.max,$l.max),sa.expandByPoint(fi)):(sa.expandByPoint($l.min),sa.expandByPoint($l.max))}sa.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)fi.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(fi));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)fi.fromBufferAttribute(p,d),m&&(zo.fromBufferAttribute(t,d),fi.add(zo)),l=Math.max(l,s.distanceToSquared(fi))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new j,m[T]=new j;const d=new j,g=new j,x=new j,_=new Fe,y=new Fe,b=new Fe,w=new j,M=new j;function v(T,N,ht){d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,N),x.fromBufferAttribute(s,ht),_.fromBufferAttribute(c,T),y.fromBufferAttribute(c,N),b.fromBufferAttribute(c,ht),g.sub(d),x.sub(d),y.sub(_),b.sub(_);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(V),M.copy(x).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(V),p[T].add(w),p[N].add(w),p[ht].add(w),m[T].add(M),m[N].add(M),m[ht].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,N=C.length;T<N;++T){const ht=C[T],V=ht.start,st=ht.count;for(let lt=V,St=V+st;lt<St;lt+=3)v(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const I=new j,P=new j,z=new j,H=new j;function k(T){z.fromBufferAttribute(l,T),H.copy(z);const N=p[T];I.copy(N),I.sub(z.multiplyScalar(z.dot(N))).normalize(),P.crossVectors(H,N);const V=P.dot(m[T])<0?-1:1;f.setXYZW(T,I.x,I.y,I.z,V)}for(let T=0,N=C.length;T<N;++T){const ht=C[T],V=ht.start,st=ht.count;for(let lt=V,St=V+st;lt<St;lt+=3)k(t.getX(lt+0)),k(t.getX(lt+1)),k(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Rn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new j,c=new j,f=new j,p=new j,m=new j,d=new j,g=new j,x=new j;if(t)for(let _=0,y=t.count;_<y;_+=3){const b=t.getX(_+0),w=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,M),p.add(g),m.add(g),d.add(g),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)fi.fromBufferAttribute(t,i),fi.normalize(),t.setXYZ(i,fi.x,fi.y,fi.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,x=p.normalized,_=new d.constructor(m.length*g);let y=0,b=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*g;for(let v=0;v<g;v++)_[b++]=d[y++]}return new Rn(_,g,x)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new jn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,x=d.length;g<x;g++){const _=d[g],y=t(_,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let x=0,_=d.length;x<_;x++){const y=d[x];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],x=c[d];for(let _=0,y=x.length;_<y;_++)g.push(x[_].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const x=f[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dy{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Jp,this.updateRanges=[],this.version=0,this.uuid=Us()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pi=new j;class vf{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Pi.fromBufferAttribute(this,i),Pi.applyMatrix4(t),this.setXYZ(i,Pi.x,Pi.y,Pi.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Pi.fromBufferAttribute(this,i),Pi.applyNormalMatrix(t),this.setXYZ(i,Pi.x,Pi.y,Pi.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Pi.fromBufferAttribute(this,i),Pi.transformDirection(t),this.setXYZ(i,Pi.x,Pi.y,Pi.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ia(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=vn(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=vn(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=vn(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=vn(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=vn(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ia(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ia(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ia(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ia(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=vn(i,this.array),s=vn(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=vn(i,this.array),s=vn(s,this.array),l=vn(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=vn(i,this.array),s=vn(s,this.array),l=vn(l,this.array),c=vn(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){gf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Rn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){gf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Uy=0;class pr extends il{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=jr,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=up,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){De(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){De(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(s.blending=this.blending),this.side!==dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==cp&&(s.blendSrc=this.blendSrc),this.blendDst!==up&&(s.blendDst=this.blendDst),this.blendEquation!==Xr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Co&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Co&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Co&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class df extends pr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ho;const tc=new j,Go=new j,Vo=new j,ko=new Fe,ec=new Fe,Sx=new wn,Fu=new j,nc=new j,Bu=new j,rv=new Fe,Yd=new Fe,ov=new Fe;class lv extends hi{constructor(t=new df){if(super(),this.isSprite=!0,this.type="Sprite",Ho===void 0){Ho=new jn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Dy(i,5);Ho.setIndex([0,1,2,0,2,3]),Ho.setAttribute("position",new vf(s,3,0,!1)),Ho.setAttribute("uv",new vf(s,2,3,!1))}this.geometry=Ho,this.material=t,this.center=new Fe(.5,.5),this.count=1}raycast(t,i){t.camera===null&&nn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Go.setFromMatrixScale(this.matrixWorld),Sx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Go.multiplyScalar(-Vo.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;zu(Fu.set(-.5,-.5,0),Vo,f,Go,l,c),zu(nc.set(.5,-.5,0),Vo,f,Go,l,c),zu(Bu.set(.5,.5,0),Vo,f,Go,l,c),rv.set(0,0),Yd.set(1,0),ov.set(1,1);let p=t.ray.intersectTriangle(Fu,nc,Bu,!1,tc);if(p===null&&(zu(nc.set(-.5,.5,0),Vo,f,Go,l,c),Yd.set(0,1),p=t.ray.intersectTriangle(Fu,Bu,nc,!1,tc),p===null))return;const m=t.ray.origin.distanceTo(tc);m<t.near||m>t.far||i.push({distance:m,point:tc.clone(),uv:Sa.getInterpolation(tc,Fu,nc,Bu,rv,Yd,ov,new Fe),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zu(r,t,i,s,l,c){ko.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(ec.x=c*ko.x-l*ko.y,ec.y=l*ko.x+c*ko.y):ec.copy(ko),r.copy(t),r.x+=ec.x,r.y+=ec.y,r.applyMatrix4(Sx)}const ws=new j,jd=new j,Hu=new j,or=new j,Zd=new j,Gu=new j,Kd=new j;class Ef{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ws)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ws.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ws.copy(this.origin).addScaledVector(this.direction,i),ws.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){jd.copy(t).add(i).multiplyScalar(.5),Hu.copy(i).sub(t).normalize(),or.copy(this.origin).sub(jd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Hu),p=or.dot(this.direction),m=-or.dot(Hu),d=or.lengthSq(),g=Math.abs(1-f*f);let x,_,y,b;if(g>0)if(x=f*m-p,_=f*p-m,b=c*g,x>=0)if(_>=-b)if(_<=b){const w=1/g;x*=w,_*=w,y=x*(x+f*_+2*p)+_*(f*x+_+2*m)+d}else _=c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;else _=-c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;else _<=-b?(x=Math.max(0,-(-f*c+p)),_=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+d):_<=b?(x=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+d):(x=Math.max(0,-(f*c+p)),_=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+d);else _=f>0?-c:c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(jd).addScaledVector(Hu,_),y}intersectSphere(t,i){ws.subVectors(t.center,this.origin);const s=ws.dot(this.direction),l=ws.dot(ws)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const d=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(p=(t.min.z-_.z)*x,m=(t.max.z-_.z)*x):(p=(t.max.z-_.z)*x,m=(t.min.z-_.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ws)!==null}intersectTriangle(t,i,s,l,c){Zd.subVectors(i,t),Gu.subVectors(s,t),Kd.crossVectors(Zd,Gu);let f=this.direction.dot(Kd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;or.subVectors(this.origin,t);const m=p*this.direction.dot(Gu.crossVectors(or,Gu));if(m<0)return null;const d=p*this.direction.dot(Zd.cross(or));if(d<0||m+d>f)return null;const g=-p*or.dot(Kd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dc extends pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ba,this.combine=tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cv=new wn,zr=new Ef,Vu=new hr,uv=new j,ku=new j,Xu=new j,Wu=new j,Qd=new j,qu=new j,fv=new j,Yu=new j;class Ii extends hi{constructor(t=new jn,i=new dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){qu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],x=c[m];g!==0&&(Qd.fromBufferAttribute(x,t),f?qu.addScaledVector(Qd,g):qu.addScaledVector(Qd.sub(i),g))}i.add(qu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Vu.copy(s.boundingSphere),Vu.applyMatrix4(c),zr.copy(t.ray).recast(t.near),!(Vu.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Vu,uv)===null||zr.origin.distanceToSquared(uv)>(t.far-t.near)**2))&&(cv.copy(c).invert(),zr.copy(t.ray).applyMatrix4(cv),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,zr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,w=_.length;b<w;b++){const M=_[b],v=f[M.materialIndex],C=Math.max(M.start,y.start),I=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let P=C,z=I;P<z;P+=3){const H=p.getX(P),k=p.getX(P+1),T=p.getX(P+2);l=ju(this,v,t,s,d,g,x,H,k,T),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=b,v=w;M<v;M+=3){const C=p.getX(M),I=p.getX(M+1),P=p.getX(M+2);l=ju(this,f,t,s,d,g,x,C,I,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,w=_.length;b<w;b++){const M=_[b],v=f[M.materialIndex],C=Math.max(M.start,y.start),I=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let P=C,z=I;P<z;P+=3){const H=P,k=P+1,T=P+2;l=ju(this,v,t,s,d,g,x,H,k,T),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=b,v=w;M<v;M+=3){const C=M,I=M+1,P=M+2;l=ju(this,f,t,s,d,g,x,C,I,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Ly(r,t,i,s,l,c,f,p){let m;if(t.side===qi?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===dr,p),m===null)return null;Yu.copy(p),Yu.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Yu);return d<i.near||d>i.far?null:{distance:d,point:Yu.clone(),object:r}}function ju(r,t,i,s,l,c,f,p,m,d){r.getVertexPosition(p,ku),r.getVertexPosition(m,Xu),r.getVertexPosition(d,Wu);const g=Ly(r,t,i,s,ku,Xu,Wu,fv);if(g){const x=new j;Sa.getBarycoord(fv,ku,Xu,Wu,x),l&&(g.uv=Sa.getInterpolatedAttribute(l,p,m,d,x,new Fe)),c&&(g.uv1=Sa.getInterpolatedAttribute(c,p,m,d,x,new Fe)),f&&(g.normal=Sa.getInterpolatedAttribute(f,p,m,d,x,new j),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new j,materialIndex:0};Sa.getNormal(ku,Xu,Wu,_.normal),g.face=_,g.barycoord=x}return g}class Ny extends Zn{constructor(t=null,i=1,s=1,l,c,f,p,m,d=vi,g=vi,x,_){super(null,f,p,m,d,g,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new j,Py=new j,Oy=new Oe;class kr{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Jd.subVectors(s,i).cross(Py.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Jd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Oy.getNormalMatrix(t),l=this.coplanarPoint(Jd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new hr,Iy=new Fe(.5,.5),Zu=new j;class Mm{constructor(t=new kr,i=new kr,s=new kr,l=new kr,c=new kr,f=new kr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ns,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],g=c[4],x=c[5],_=c[6],y=c[7],b=c[8],w=c[9],M=c[10],v=c[11],C=c[12],I=c[13],P=c[14],z=c[15];if(l[0].setComponents(d-f,y-g,v-b,z-C).normalize(),l[1].setComponents(d+f,y+g,v+b,z+C).normalize(),l[2].setComponents(d+p,y+x,v+w,z+I).normalize(),l[3].setComponents(d-p,y-x,v-w,z-I).normalize(),s)l[4].setComponents(m,_,M,P).normalize(),l[5].setComponents(d-m,y-_,v-M,z-P).normalize();else if(l[4].setComponents(d-m,y-_,v-M,z-P).normalize(),i===ns)l[5].setComponents(d+m,y+_,v+M,z+P).normalize();else if(i===gc)l[5].setComponents(m,_,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(t){Hr.center.set(0,0,0);const i=Iy.distanceTo(t.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Zu.x=l.normal.x>0?t.max.x:t.min.x,Zu.y=l.normal.y>0?t.max.y:t.min.y,Zu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Zu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $p extends pr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xf=new j,Mf=new j,hv=new wn,ic=new Ef,Ku=new hr,$d=new j,dv=new j;class Fy extends hi{constructor(t=new jn,i=new $p){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)xf.fromBufferAttribute(i,l-1),Mf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=xf.distanceTo(Mf);t.setAttribute("lineDistance",new wi(s,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ku.copy(s.boundingSphere),Ku.applyMatrix4(l),Ku.radius+=c,t.ray.intersectsSphere(Ku)===!1)return;hv.copy(l).invert(),ic.copy(t.ray).applyMatrix4(hv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let w=y,M=b-1;w<M;w+=d){const v=g.getX(w),C=g.getX(w+1),I=Qu(this,t,ic,m,v,C,w);I&&i.push(I)}if(this.isLineLoop){const w=g.getX(b-1),M=g.getX(y),v=Qu(this,t,ic,m,w,M,b-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let w=y,M=b-1;w<M;w+=d){const v=Qu(this,t,ic,m,w,w+1,w);v&&i.push(v)}if(this.isLineLoop){const w=Qu(this,t,ic,m,b-1,y,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Qu(r,t,i,s,l,c,f){const p=r.geometry.attributes.position;if(xf.fromBufferAttribute(p,l),Mf.fromBufferAttribute(p,c),i.distanceSqToSegment(xf,Mf,$d,dv)>s)return;$d.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo($d);if(!(d<t.near||d>t.far))return{distance:d,point:dv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class pv extends Fy{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class tm extends pr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mv=new wn,em=new Ef,Ju=new hr,$u=new j;class ac extends hi{constructor(t=new jn,i=new tm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ju.copy(s.boundingSphere),Ju.applyMatrix4(l),Ju.radius+=c,t.ray.intersectsSphere(Ju)===!1)return;mv.copy(l).invert(),em.copy(t.ray).applyMatrix4(mv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,x=s.attributes.position;if(d!==null){const _=Math.max(0,f.start),y=Math.min(d.count,f.start+f.count);for(let b=_,w=y;b<w;b++){const M=d.getX(b);$u.fromBufferAttribute(x,M),gv($u,M,m,l,t,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(x.count,f.start+f.count);for(let b=_,w=y;b<w;b++)$u.fromBufferAttribute(x,b),gv($u,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function gv(r,t,i,s,l,c,f){const p=em.distanceSqToPoint(r);if(p<i){const m=new j;em.closestPointToPoint(r,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class yx extends Zn{constructor(t=[],i=Zr,s,l,c,f,p,m,d,g){super(t,i,s,l,c,f,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _i extends Zn{constructor(t,i,s,l,c,f,p,m,d){super(t,i,s,l,c,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xc extends Zn{constructor(t,i,s=ss,l,c,f,p=vi,m=vi,d,g=Ps,x=1){if(g!==Ps&&g!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,c,f,p,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class By extends xc{constructor(t,i=ss,s=Zr,l,c,f=vi,p=vi,m,d=Ps){const g={width:t,height:t,depth:1},x=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bx extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yc extends jn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],x=[];let _=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new wi(d,3)),this.setAttribute("normal",new wi(g,3)),this.setAttribute("uv",new wi(x,2));function b(w,M,v,C,I,P,z,H,k,T,N){const ht=P/k,V=z/T,st=P/2,lt=z/2,St=H/2,at=k+1,F=T+1;let B=0,dt=0;const bt=new j;for(let U=0;U<F;U++){const J=U*V-lt;for(let ot=0;ot<at;ot++){const vt=ot*ht-st;bt[w]=vt*C,bt[M]=J*I,bt[v]=St,d.push(bt.x,bt.y,bt.z),bt[w]=0,bt[M]=0,bt[v]=H>0?1:-1,g.push(bt.x,bt.y,bt.z),x.push(ot/k),x.push(1-U/T),B+=1}}for(let U=0;U<T;U++)for(let J=0;J<k;J++){const ot=_+J+at*U,vt=_+J+at*(U+1),Kt=_+(J+1)+at*(U+1),de=_+(J+1)+at*U;m.push(ot,vt,de),m.push(vt,Kt,de),dt+=6}p.addGroup(y,dt,N),y+=dt,_+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Tf extends jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,g=m+1,x=t/p,_=i/m,y=[],b=[],w=[],M=[];for(let v=0;v<g;v++){const C=v*_-f;for(let I=0;I<d;I++){const P=I*x-c;b.push(P,-C,0),w.push(0,0,1),M.push(I/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<p;C++){const I=C+d*v,P=C+d*(v+1),z=C+1+d*(v+1),H=C+1+d*v;y.push(I,P,H),y.push(P,z,H)}this.setIndex(y),this.setAttribute("position",new wi(b,3)),this.setAttribute("normal",new wi(w,3)),this.setAttribute("uv",new wi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tf(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sf extends jn{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],d=[],g=[];let x=t;const _=(i-t)/l,y=new j,b=new Fe;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const v=c+M/s*f;y.x=x*Math.cos(v),y.y=x*Math.sin(v),m.push(y.x,y.y,y.z),d.push(0,0,1),b.x=(y.x/i+1)/2,b.y=(y.y/i+1)/2,g.push(b.x,b.y)}x+=_}for(let w=0;w<l;w++){const M=w*(s+1);for(let v=0;v<s;v++){const C=v+M,I=C,P=C+s+1,z=C+s+2,H=C+1;p.push(I,P,H),p.push(P,z,H)}}this.setIndex(p),this.setAttribute("position",new wi(m,3)),this.setAttribute("normal",new wi(d,3)),this.setAttribute("uv",new wi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ko extends jn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+p,Math.PI);let d=0;const g=[],x=new j,_=new j,y=[],b=[],w=[],M=[];for(let v=0;v<=s;v++){const C=[],I=v/s;let P=0;v===0&&f===0?P=.5/i:v===s&&m===Math.PI&&(P=-.5/i);for(let z=0;z<=i;z++){const H=z/i;x.x=-t*Math.cos(l+H*c)*Math.sin(f+I*p),x.y=t*Math.cos(f+I*p),x.z=t*Math.sin(l+H*c)*Math.sin(f+I*p),b.push(x.x,x.y,x.z),_.copy(x).normalize(),w.push(_.x,_.y,_.z),M.push(H+P,1-I),C.push(d++)}g.push(C)}for(let v=0;v<s;v++)for(let C=0;C<i;C++){const I=g[v][C+1],P=g[v][C],z=g[v+1][C],H=g[v+1][C+1];(v!==0||f>0)&&y.push(I,P,H),(v!==s-1||m<Math.PI)&&y.push(P,z,H)}this.setIndex(y),this.setAttribute("position",new wi(b,3)),this.setAttribute("normal",new wi(w,3)),this.setAttribute("uv",new wi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function nl(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Oi(r){const t={};for(let i=0;i<r.length;i++){const s=nl(r[i]);for(const l in s)t[l]=s[l]}return t}function zy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Ex(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:rn.workingColorSpace}const Hy={clone:nl,merge:Oi};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nl(t.uniforms),this.uniformsGroups=zy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ky extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _v extends pr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mx,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ba,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xy extends pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wy extends pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tp={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(vv(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!vv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function vv(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class qy{constructor(t,i,s){const l=this;let c=!1,f=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){p++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,p),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,p),f===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return d.push(g,x),this},this.removeHandler=function(g){const x=d.indexOf(g);return x!==-1&&d.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=d.length;x<_;x+=2){const y=d[x],b=d[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Yy=new qy;class Sm{constructor(t){this.manager=t!==void 0?t:Yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Sm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xo=new WeakMap;class jy extends Sm{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=tp.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let x=Xo.get(f);x===void 0&&(x=[],Xo.set(f,x)),x.push({onLoad:i,onError:l})}return f}const p=_c("img");function m(){g(),i&&i(this);const x=Xo.get(this)||[];for(let _=0;_<x.length;_++){const y=x[_];y.onLoad&&y.onLoad(this)}Xo.delete(this),c.manager.itemEnd(t)}function d(x){g(),l&&l(x),tp.remove(`image:${t}`);const _=Xo.get(this)||[];for(let y=0;y<_.length;y++){const b=_[y];b.onError&&b.onError(x)}Xo.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),tp.add(`image:${t}`,p),c.manager.itemStart(t),p.src=t,p}}class Zy extends Sm{constructor(t){super(t)}load(t,i,s,l){const c=new Zn,f=new jy(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class Tx extends hi{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ep=new wn,xv=new j,Mv=new j;class Ky{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=la,this.map=null,this.mapPass=null,this.matrix=new wn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mm,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;xv.setFromMatrixPosition(t.matrixWorld),i.position.copy(xv),Mv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Mv),i.updateMatrixWorld(),ep.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===gc||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ep)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tf=new j,ef=new al,Ja=new j;class Ax extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wn,this.projectionMatrix=new wn,this.projectionMatrixInverse=new wn,this.coordinateSystem=ns,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(tf,ef,Ja),Ja.x===1&&Ja.y===1&&Ja.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tf,ef,Ja.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(tf,ef,Ja),Ja.x===1&&Ja.y===1&&Ja.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tf,ef,Ja.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const lr=new j,Sv=new Fe,yv=new Fe;class oa extends Ax{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=vc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,i){return this.getViewBounds(t,Sv,yv),i.subVectors(yv,Sv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(fc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Qy extends Ky{constructor(){super(new oa(90,1,.5,500)),this.isPointLightShadow=!0}}class Jy extends Tx{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Qy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Rx extends Ax{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $y extends Tx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Wo=-90,qo=1;class t1 extends hi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oa(Wo,qo,t,i);l.layers=this.layers,this.add(l);const c=new oa(Wo,qo,t,i);c.layers=this.layers,this.add(c);const f=new oa(Wo,qo,t,i);f.layers=this.layers,this.add(f);const p=new oa(Wo,qo,t,i);p.layers=this.layers,this.add(p);const m=new oa(Wo,qo,t,i);m.layers=this.layers,this.add(m);const d=new oa(Wo,qo,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===ns)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,g]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(x,_,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class e1 extends oa{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const bv=new wn;class n1{constructor(t,i,s=0,l=1/0){this.ray=new Ef(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new xm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):nn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return bv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bv),this}intersectObject(t,i=!0,s=[]){return nm(t,this,s,i),s.sort(Ev),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)nm(t[l],this,s,i);return s.sort(Ev),s}}function Ev(r,t){return r.distance-t.distance}function nm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)nm(c[f],t,i,!0)}}function Tv(r,t,i,s){const l=i1(s);switch(i){case hx:return r*t;case px:return r*t/l.components*l.byteLength;case hm:return r*t/l.components*l.byteLength;case tl:return r*t*2/l.components*l.byteLength;case dm:return r*t*2/l.components*l.byteLength;case dx:return r*t*3/l.components*l.byteLength;case Fa:return r*t*4/l.components*l.byteLength;case pm:return r*t*4/l.components*l.byteLength;case cf:case uf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ff:case hf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sp:case bp:return Math.max(r,16)*Math.max(t,8)/4;case Mp:case yp:return Math.max(r,8)*Math.max(t,8)/2;case Ep:case Tp:case Rp:case wp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ap:case Cp:case Dp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Up:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Np:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Op:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ip:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wp:case qp:case Yp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case jp:case Zp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Kp:case Qp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function i1(r){switch(r){case la:case lx:return{byteLength:1,components:1};case pc:case cx:case Ns:return{byteLength:2,components:1};case um:case fm:return{byteLength:2,components:4};case ss:case cm:case es:return{byteLength:4,components:1};case ux:case fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:om}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=om);function wx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function a1(r){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,x=d.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,d,g),p.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const g=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,g);else{x.sort((y,b)=>y.start-b.start);let _=0;for(let y=1;y<x.length;y++){const b=x[_],w=x[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,x[_]=w)}x.length=_+1;for(let y=0,b=x.length;y<b;y++){const w=x[y];r.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var s1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r1=`#ifdef USE_ALPHAHASH
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
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,h1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d1=`#ifdef USE_BATCHING
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
#endif`,p1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v1=`#ifdef USE_IRIDESCENCE
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
#endif`,x1=`#ifdef USE_BUMPMAP
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,w1=`#define PI 3.141592653589793
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
} // validated`,C1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D1=`vec3 transformedNormal = objectNormal;
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
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",I1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q1=`#ifdef USE_GRADIENTMAP
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
}`,Y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K1=`uniform bool receiveShadow;
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
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nb=`PhysicalMaterial material;
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
#endif`,ib=`uniform sampler2D dfgLUT;
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
}`,ab=`
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pb=`#if defined( USE_POINTS_UV )
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
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rb=`#ifdef USE_NORMALMAP
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
#endif`,wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kb=`float getShadowMask() {
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
}`,Xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
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
#endif`,$b=`#ifdef USE_TRANSMISSION
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
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`#include <common>
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
}`,fE=`#if DEPTH_PACKING == 3200
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
}`,hE=`#define DISTANCE
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
}`,dE=`#define DISTANCE
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`uniform float scale;
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
}`,_E=`uniform vec3 diffuse;
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
}`,vE=`#include <common>
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
}`,xE=`uniform vec3 diffuse;
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
}`,ME=`#define LAMBERT
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
}`,SE=`#define LAMBERT
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
}`,yE=`#define MATCAP
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
}`,bE=`#define MATCAP
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
}`,EE=`#define NORMAL
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
}`,TE=`#define NORMAL
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
}`,AE=`#define PHONG
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
}`,RE=`#define PHONG
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
}`,wE=`#define STANDARD
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
}`,CE=`#define STANDARD
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
}`,DE=`#define TOON
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
}`,UE=`#define TOON
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
}`,LE=`uniform float size;
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
}`,NE=`uniform vec3 diffuse;
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
}`,PE=`#include <common>
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
}`,OE=`uniform vec3 color;
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
}`,IE=`uniform float rotation;
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
}`,FE=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:s1,alphahash_pars_fragment:r1,alphamap_fragment:o1,alphamap_pars_fragment:l1,alphatest_fragment:c1,alphatest_pars_fragment:u1,aomap_fragment:f1,aomap_pars_fragment:h1,batching_pars_vertex:d1,batching_vertex:p1,begin_vertex:m1,beginnormal_vertex:g1,bsdfs:_1,iridescence_fragment:v1,bumpmap_pars_fragment:x1,clipping_planes_fragment:M1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:y1,clipping_planes_vertex:b1,color_fragment:E1,color_pars_fragment:T1,color_pars_vertex:A1,color_vertex:R1,common:w1,cube_uv_reflection_fragment:C1,defaultnormal_vertex:D1,displacementmap_pars_vertex:U1,displacementmap_vertex:L1,emissivemap_fragment:N1,emissivemap_pars_fragment:P1,colorspace_fragment:O1,colorspace_pars_fragment:I1,envmap_fragment:F1,envmap_common_pars_fragment:B1,envmap_pars_fragment:z1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:Q1,envmap_vertex:G1,fog_vertex:V1,fog_pars_vertex:k1,fog_fragment:X1,fog_pars_fragment:W1,gradientmap_pars_fragment:q1,lightmap_pars_fragment:Y1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:Z1,lights_pars_begin:K1,lights_toon_fragment:J1,lights_toon_pars_fragment:$1,lights_phong_fragment:tb,lights_phong_pars_fragment:eb,lights_physical_fragment:nb,lights_physical_pars_fragment:ib,lights_fragment_begin:ab,lights_fragment_maps:sb,lights_fragment_end:rb,logdepthbuf_fragment:ob,logdepthbuf_pars_fragment:lb,logdepthbuf_pars_vertex:cb,logdepthbuf_vertex:ub,map_fragment:fb,map_pars_fragment:hb,map_particle_fragment:db,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:_b,morphcolor_vertex:vb,morphnormal_vertex:xb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Sb,normal_fragment_begin:yb,normal_fragment_maps:bb,normal_pars_fragment:Eb,normal_pars_vertex:Tb,normal_vertex:Ab,normalmap_pars_fragment:Rb,clearcoat_normal_fragment_begin:wb,clearcoat_normal_fragment_maps:Cb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Ub,opaque_fragment:Lb,packing:Nb,premultiplied_alpha_fragment:Pb,project_vertex:Ob,dithering_fragment:Ib,dithering_pars_fragment:Fb,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Hb,shadowmap_pars_vertex:Gb,shadowmap_vertex:Vb,shadowmask_pars_fragment:kb,skinbase_vertex:Xb,skinning_pars_vertex:Wb,skinning_vertex:qb,skinnormal_vertex:Yb,specularmap_fragment:jb,specularmap_pars_fragment:Zb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Qb,transmission_fragment:Jb,transmission_pars_fragment:$b,uv_pars_fragment:tE,uv_pars_vertex:eE,uv_vertex:nE,worldpos_vertex:iE,background_vert:aE,background_frag:sE,backgroundCube_vert:rE,backgroundCube_frag:oE,cube_vert:lE,cube_frag:cE,depth_vert:uE,depth_frag:fE,distance_vert:hE,distance_frag:dE,equirect_vert:pE,equirect_frag:mE,linedashed_vert:gE,linedashed_frag:_E,meshbasic_vert:vE,meshbasic_frag:xE,meshlambert_vert:ME,meshlambert_frag:SE,meshmatcap_vert:yE,meshmatcap_frag:bE,meshnormal_vert:EE,meshnormal_frag:TE,meshphong_vert:AE,meshphong_frag:RE,meshphysical_vert:wE,meshphysical_frag:CE,meshtoon_vert:DE,meshtoon_frag:UE,points_vert:LE,points_frag:NE,shadow_vert:PE,shadow_frag:OE,sprite_vert:IE,sprite_frag:FE},ee={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ts={basic:{uniforms:Oi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Oi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Oi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Oi([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Oi([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Oi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Oi([ee.points,ee.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Oi([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Oi([ee.common,ee.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Oi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Oi([ee.sprite,ee.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distance:{uniforms:Oi([ee.common,ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distance_vert,fragmentShader:Ie.distance_frag},shadow:{uniforms:Oi([ee.lights,ee.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};ts.physical={uniforms:Oi([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const nf={r:0,b:0,g:0},Gr=new Ba,BE=new wn;function zE(r,t,i,s,l,c){const f=new Xe(0);let p=l===!0?0:1,m,d,g=null,x=0,_=null;function y(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){const P=C.backgroundBlurriness>0;I=t.get(I,P)}return I}function b(C){let I=!1;const P=y(C);P===null?M(f,p):P&&P.isColor&&(M(P,1),I=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,I){const P=y(I);P&&(P.isCubeTexture||P.mapping===bf)?(d===void 0&&(d=new Ii(new yc(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:nl(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,H,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Gr.copy(I.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(BE.makeRotationFromEuler(Gr)),d.material.toneMapped=rn.getTransfer(P.colorSpace)!==_n,(g!==P||x!==P.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,g=P,x=P.version,_=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Ii(new Tf(2,2),new Wi({name:"BackgroundMaterial",uniforms:nl(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=rn.getTransfer(P.colorSpace)!==_n,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||x!==P.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,g=P,x=P.version,_=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,I){C.getRGB(nf,Ex(r)),i.buffers.color.setClear(nf.r,nf.g,nf.b,I,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,I=1){f.set(C),p=I,M(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(f,p)},render:b,addToRenderList:w,dispose:v}}function HE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function p(V,st,lt,St,at){let F=!1;const B=x(V,St,lt,st);c!==B&&(c=B,d(c.object)),F=y(V,St,lt,at),F&&b(V,St,lt,at),at!==null&&t.update(at,r.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,P(V,st,lt,St),at!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function m(){return r.createVertexArray()}function d(V){return r.bindVertexArray(V)}function g(V){return r.deleteVertexArray(V)}function x(V,st,lt,St){const at=St.wireframe===!0;let F=s[st.id];F===void 0&&(F={},s[st.id]=F);const B=V.isInstancedMesh===!0?V.id:0;let dt=F[B];dt===void 0&&(dt={},F[B]=dt);let bt=dt[lt.id];bt===void 0&&(bt={},dt[lt.id]=bt);let U=bt[at];return U===void 0&&(U=_(m()),bt[at]=U),U}function _(V){const st=[],lt=[],St=[];for(let at=0;at<i;at++)st[at]=0,lt[at]=0,St[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:lt,attributeDivisors:St,object:V,attributes:{},index:null}}function y(V,st,lt,St){const at=c.attributes,F=st.attributes;let B=0;const dt=lt.getAttributes();for(const bt in dt)if(dt[bt].location>=0){const J=at[bt];let ot=F[bt];if(ot===void 0&&(bt==="instanceMatrix"&&V.instanceMatrix&&(ot=V.instanceMatrix),bt==="instanceColor"&&V.instanceColor&&(ot=V.instanceColor)),J===void 0||J.attribute!==ot||ot&&J.data!==ot.data)return!0;B++}return c.attributesNum!==B||c.index!==St}function b(V,st,lt,St){const at={},F=st.attributes;let B=0;const dt=lt.getAttributes();for(const bt in dt)if(dt[bt].location>=0){let J=F[bt];J===void 0&&(bt==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),bt==="instanceColor"&&V.instanceColor&&(J=V.instanceColor));const ot={};ot.attribute=J,J&&J.data&&(ot.data=J.data),at[bt]=ot,B++}c.attributes=at,c.attributesNum=B,c.index=St}function w(){const V=c.newAttributes;for(let st=0,lt=V.length;st<lt;st++)V[st]=0}function M(V){v(V,0)}function v(V,st){const lt=c.newAttributes,St=c.enabledAttributes,at=c.attributeDivisors;lt[V]=1,St[V]===0&&(r.enableVertexAttribArray(V),St[V]=1),at[V]!==st&&(r.vertexAttribDivisor(V,st),at[V]=st)}function C(){const V=c.newAttributes,st=c.enabledAttributes;for(let lt=0,St=st.length;lt<St;lt++)st[lt]!==V[lt]&&(r.disableVertexAttribArray(lt),st[lt]=0)}function I(V,st,lt,St,at,F,B){B===!0?r.vertexAttribIPointer(V,st,lt,at,F):r.vertexAttribPointer(V,st,lt,St,at,F)}function P(V,st,lt,St){w();const at=St.attributes,F=lt.getAttributes(),B=st.defaultAttributeValues;for(const dt in F){const bt=F[dt];if(bt.location>=0){let U=at[dt];if(U===void 0&&(dt==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),dt==="instanceColor"&&V.instanceColor&&(U=V.instanceColor)),U!==void 0){const J=U.normalized,ot=U.itemSize,vt=t.get(U);if(vt===void 0)continue;const Kt=vt.buffer,de=vt.type,nt=vt.bytesPerElement,Pt=de===r.INT||de===r.UNSIGNED_INT||U.gpuType===cm;if(U.isInterleavedBufferAttribute){const _t=U.data,ye=_t.stride,xe=U.offset;if(_t.isInstancedInterleavedBuffer){for(let Me=0;Me<bt.locationSize;Me++)v(bt.location+Me,_t.meshPerAttribute);V.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Me=0;Me<bt.locationSize;Me++)M(bt.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let Me=0;Me<bt.locationSize;Me++)I(bt.location+Me,ot/bt.locationSize,de,J,ye*nt,(xe+ot/bt.locationSize*Me)*nt,Pt)}else{if(U.isInstancedBufferAttribute){for(let _t=0;_t<bt.locationSize;_t++)v(bt.location+_t,U.meshPerAttribute);V.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let _t=0;_t<bt.locationSize;_t++)M(bt.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let _t=0;_t<bt.locationSize;_t++)I(bt.location+_t,ot/bt.locationSize,de,J,ot*nt,ot/bt.locationSize*_t*nt,Pt)}}else if(B!==void 0){const J=B[dt];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(bt.location,J);break;case 3:r.vertexAttrib3fv(bt.location,J);break;case 4:r.vertexAttrib4fv(bt.location,J);break;default:r.vertexAttrib1fv(bt.location,J)}}}}C()}function z(){N();for(const V in s){const st=s[V];for(const lt in st){const St=st[lt];for(const at in St){const F=St[at];for(const B in F)g(F[B].object),delete F[B];delete St[at]}}delete s[V]}}function H(V){if(s[V.id]===void 0)return;const st=s[V.id];for(const lt in st){const St=st[lt];for(const at in St){const F=St[at];for(const B in F)g(F[B].object),delete F[B];delete St[at]}}delete s[V.id]}function k(V){for(const st in s){const lt=s[st];for(const St in lt){const at=lt[St];if(at[V.id]===void 0)continue;const F=at[V.id];for(const B in F)g(F[B].object),delete F[B];delete at[V.id]}}}function T(V){for(const st in s){const lt=s[st],St=V.isInstancedMesh===!0?V.id:0,at=lt[St];if(at!==void 0){for(const F in at){const B=at[F];for(const dt in B)g(B[dt].object),delete B[dt];delete at[F]}delete lt[St],Object.keys(lt).length===0&&delete s[st]}}}function N(){ht(),f=!0,c!==l&&(c=l,d(c.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:ht,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function GE(r,t,i){let s;function l(d){s=d}function c(d,g){r.drawArrays(s,d,g),i.update(g,s,1)}function f(d,g,x){x!==0&&(r.drawArraysInstanced(s,d,g,x),i.update(g,s,x))}function p(d,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,x);let y=0;for(let b=0;b<x;b++)y+=g[b];i.update(y,s,1)}function m(d,g,x,_){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<d.length;b++)f(d[b],g[b],_[b]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,g,0,_,0,x);let b=0;for(let w=0;w<x;w++)b+=g[w]*_[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function VE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==Fa&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const T=k===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==la&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==es&&!T)}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(De("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:P,maxSamples:z,samples:H}}function kE(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new kr,p=new Oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||s!==0||l;return l=_,s=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,y){const b=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,v=r.get(x);if(!l||b===null||b.length===0||c&&!M)c?g(null):d();else{const C=c?0:s,I=C*4;let P=v.clippingState||null;m.value=P,P=g(b,_,I,y);for(let z=0;z!==I;++z)P[z]=i[z];v.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,_,y,b){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const v=y+w*4,C=_.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<v)&&(M=new Float32Array(v));for(let I=0,P=y;I!==w;++I,P+=4)f.copy(x[I]).applyMatrix4(C,p),f.normal.toArray(M,P),M[P+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const fr=4,Av=[.125,.215,.35,.446,.526,.582],Wr=20,XE=256,sc=new Rx,Rv=new Xe;let np=null,ip=0,ap=0,sp=!1;const WE=new j;class wv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=WE}=c;np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(np,ip,ap),this._renderer.xr.enabled=sp,t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Zr||t.mapping===$o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Ns,format:Fa,colorSpace:el,depthBuffer:!1},l=Cv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qE(c)),this._blurMaterial=jE(c,t,i),this._ggxMaterial=YE(c,t,i)}return l}_compileMaterial(t){const i=new Ii(new jn,t);this._renderer.compile(i,sc)}_sceneToCubeUV(t,i,s,l,c){const m=new oa(90,1,i,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(Rv),x.toneMapping=is,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new yc,new dc({name:"PMREM.Background",side:qi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let v=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,v=!0):(M.color.copy(Rv),v=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[I],c.y,c.z)):P===1?(m.up.set(0,0,d[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[I],c.z)):(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[I]));const z=this._cubeSize;Yo(l,P*z,I>2?z:0,z,z),x.setRenderTarget(l),v&&x.render(w,m),x.render(t,m)}x.toneMapping=y,x.autoClear=_,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Zr||t.mapping===$o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Yo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,sc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-g*g),_=0+d*1.25,y=x*_,{_lodMax:b}=this,w=this._sizeLods[s],M=3*w*(s>b-fr?s-b+fr:0),v=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Yo(c,M,v,3*w,2*w),l.setRenderTarget(c),l.render(p,sc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Yo(t,M,v,3*w,2*w),l.setRenderTarget(t),l.render(p,sc)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=d;const _=d.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Wr-1),w=c/b,M=isFinite(c)?1+Math.floor(g*w):Wr;M>Wr&&De(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Wr}`);const v=[];let C=0;for(let k=0;k<Wr;++k){const T=k/w,N=Math.exp(-T*T/2);v.push(N),k===0?C+=N:k<M&&(C+=2*N)}for(let k=0;k<v.length;k++)v[k]=v[k]/C;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:I}=this;_.dTheta.value=b,_.mipInt.value=I-s;const P=this._sizeLods[l],z=3*P*(l>I-fr?l-I+fr:0),H=4*(this._cubeSize-P);Yo(i,z,H,3*P,2*P),m.setRenderTarget(i),m.render(x,sc)}}function qE(r){const t=[],i=[],s=[];let l=r;const c=r-fr+1+Av.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-fr?m=Av[f-r+fr-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,x=1+d,_=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,b=6,w=3,M=2,v=1,C=new Float32Array(w*b*y),I=new Float32Array(M*b*y),P=new Float32Array(v*b*y);for(let H=0;H<y;H++){const k=H%3*2/3-1,T=H>2?0:-1,N=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];C.set(N,w*b*H),I.set(_,M*b*H);const ht=[H,H,H,H,H,H];P.set(ht,v*b*H)}const z=new jn;z.setAttribute("position",new Rn(C,w)),z.setAttribute("uv",new Rn(I,M)),z.setAttribute("faceIndex",new Rn(P,v)),s.push(new Ii(z,null)),l>fr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Cv(r,t,i){const s=new as(r,t,i);return s.texture.mapping=bf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yo(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function YE(r,t,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Af(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function jE(r,t,i){const s=new Float32Array(Wr),l=new j(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Af(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Dv(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Uv(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Af(){return`

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
	`}class Cx extends as{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new yc(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:nl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qi,blending:Ds});c.uniforms.tEquirect.value=i;const f=new Ii(l,c),p=i.minFilter;return i.minFilter===qr&&(i.minFilter=Ri),new t1(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function ZE(r){let t=new WeakMap,i=new WeakMap,s=null;function l(_,y=!1){return _==null?null:y?f(_):c(_)}function c(_){if(_&&_.isTexture){const y=_.mapping;if(y===Rd||y===wd)if(t.has(_)){const b=t.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new Cx(b.height);return w.fromEquirectangularTexture(r,_),t.set(_,w),_.addEventListener("dispose",d),p(w.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const y=_.mapping,b=y===Rd||y===wd,w=y===Zr||y===$o;if(b||w){let M=i.get(_);const v=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new wv(r)),M=b?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const C=_.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new wv(r)),M=b?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",g),M.texture):null}}}return _}function p(_,y){return y===Rd?_.mapping=Zr:y===wd&&(_.mapping=$o),_}function m(_){let y=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&y++;return y===b}function d(_){const y=_.target;y.removeEventListener("dispose",d);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function g(_){const y=_.target;y.removeEventListener("dispose",g);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function KE(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&_f("WebGLRenderer: "+s+" extension not supported."),l}}}function QE(r,t,i,s){const l={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const y in _)t.update(_[y],r.ARRAY_BUFFER)}function d(x){const _=[],y=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let I=0,P=C.length;I<P;I+=3){const z=C[I+0],H=C[I+1],k=C[I+2];_.push(z,H,H,k,k,z)}}else{const C=b.array;w=b.version;for(let I=0,P=C.length/3-1;I<P;I+=3){const z=I+0,H=I+1,k=I+2;_.push(z,H,H,k,k,z)}}const M=new(b.count>=65535?Mx:xx)(_,1);M.version=w;const v=c.get(x);v&&t.remove(v),c.set(x,M)}function g(x){const _=c.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:g}}function JE(r,t,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,y){r.drawElements(s,y,c,_*f),i.update(y,s,1)}function d(_,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,_*f,b),i.update(y,s,b))}function g(_,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,s,1)}function x(_,y,b,w){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)d(_[v]/f,y[v],w[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,w,0,b);let v=0;for(let C=0;C<b;C++)v+=y[C]*w[C];i.update(v,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function $E(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:nn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function t2(r,t,i){const s=new WeakMap,l=new Xn;function c(f,p,m){const d=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=g!==void 0?g.length:0;let _=s.get(p);if(_===void 0||_.count!==x){let ht=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ht)};var y=ht;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let P=0;b===!0&&(P=1),w===!0&&(P=2),M===!0&&(P=3);let z=p.attributes.position.count*P,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const k=new Float32Array(z*H*4*x),T=new _x(k,z,H,x);T.type=es,T.needsUpdate=!0;const N=P*4;for(let V=0;V<x;V++){const st=v[V],lt=C[V],St=I[V],at=z*H*4*V;for(let F=0;F<st.count;F++){const B=F*N;b===!0&&(l.fromBufferAttribute(st,F),k[at+B+0]=l.x,k[at+B+1]=l.y,k[at+B+2]=l.z,k[at+B+3]=0),w===!0&&(l.fromBufferAttribute(lt,F),k[at+B+4]=l.x,k[at+B+5]=l.y,k[at+B+6]=l.z,k[at+B+7]=0),M===!0&&(l.fromBufferAttribute(St,F),k[at+B+8]=l.x,k[at+B+9]=l.y,k[at+B+10]=l.z,k[at+B+11]=St.itemSize===4?l.w:1)}}_={count:x,texture:T,size:new Fe(z,H)},s.set(p,_),p.addEventListener("dispose",ht)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function e2(r,t,i,s,l){let c=new WeakMap;function f(d){const g=l.render.frame,x=d.geometry,_=t.get(d,x);if(c.get(_)!==g&&(t.update(_),c.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return _}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const n2={[ex]:"LINEAR_TONE_MAPPING",[nx]:"REINHARD_TONE_MAPPING",[ix]:"CINEON_TONE_MAPPING",[lm]:"ACES_FILMIC_TONE_MAPPING",[sx]:"AGX_TONE_MAPPING",[rx]:"NEUTRAL_TONE_MAPPING",[ax]:"CUSTOM_TONE_MAPPING"};function i2(r,t,i,s,l){const c=new as(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new as(t,i,{type:Ns,depthBuffer:!1,stencilBuffer:!1}),p=new jn;p.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new wi([0,2,0,0,2,0],2));const m=new ky({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ii(p,m),g=new Rx(-1,1,1,-1,0,1);let x=null,_=null,y=!1,b,w=null,M=[],v=!1;this.setSize=function(C,I){c.setSize(C,I),f.setSize(C,I);for(let P=0;P<M.length;P++){const z=M[P];z.setSize&&z.setSize(C,I)}},this.setEffects=function(C){M=C,v=M.length>0&&M[0].isRenderPass===!0;const I=c.width,P=c.height;for(let z=0;z<M.length;z++){const H=M[z];H.setSize&&H.setSize(I,P)}},this.begin=function(C,I){if(y||C.toneMapping===is&&M.length===0)return!1;if(w=I,I!==null){const P=I.width,z=I.height;(c.width!==P||c.height!==z)&&this.setSize(P,z)}return v===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=is,!0},this.hasRenderPass=function(){return v},this.end=function(C,I){C.toneMapping=b,y=!0;let P=c,z=f;for(let H=0;H<M.length;H++){const k=M[H];if(k.enabled!==!1&&(k.render(C,z,P,I),k.needsSwap!==!1)){const T=P;P=z,z=T}}if(x!==C.outputColorSpace||_!==C.toneMapping){x=C.outputColorSpace,_=C.toneMapping,m.defines={},rn.getTransfer(x)===_n&&(m.defines.SRGB_TRANSFER="");const H=n2[_];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(w),C.render(d,g),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const Dx=new Zn,im=new xc(1,1),Ux=new _x,Lx=new vy,Nx=new yx,Lv=[],Nv=[],Pv=new Float32Array(16),Ov=new Float32Array(9),Iv=new Float32Array(4);function sl(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Lv[l];if(c===void 0&&(c=new Float32Array(l),Lv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function ai(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function si(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Rf(r,t){let i=Nv[t];i===void 0&&(i=new Int32Array(t),Nv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function a2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function s2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;r.uniform2fv(this.addr,t),si(i,t)}}function r2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ai(i,t))return;r.uniform3fv(this.addr,t),si(i,t)}}function o2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;r.uniform4fv(this.addr,t),si(i,t)}}function l2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(ai(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),si(i,t)}else{if(ai(i,s))return;Iv.set(s),r.uniformMatrix2fv(this.addr,!1,Iv),si(i,s)}}function c2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(ai(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),si(i,t)}else{if(ai(i,s))return;Ov.set(s),r.uniformMatrix3fv(this.addr,!1,Ov),si(i,s)}}function u2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(ai(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),si(i,t)}else{if(ai(i,s))return;Pv.set(s),r.uniformMatrix4fv(this.addr,!1,Pv),si(i,s)}}function f2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function h2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;r.uniform2iv(this.addr,t),si(i,t)}}function d2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ai(i,t))return;r.uniform3iv(this.addr,t),si(i,t)}}function p2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;r.uniform4iv(this.addr,t),si(i,t)}}function m2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function g2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;r.uniform2uiv(this.addr,t),si(i,t)}}function _2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ai(i,t))return;r.uniform3uiv(this.addr,t),si(i,t)}}function v2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;r.uniform4uiv(this.addr,t),si(i,t)}}function x2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(im.compareFunction=i.isReversedDepthBuffer()?gm:mm,c=im):c=Dx,i.setTexture2D(t||c,l)}function M2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Lx,l)}function S2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Nx,l)}function y2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ux,l)}function b2(r){switch(r){case 5126:return a2;case 35664:return s2;case 35665:return r2;case 35666:return o2;case 35674:return l2;case 35675:return c2;case 35676:return u2;case 5124:case 35670:return f2;case 35667:case 35671:return h2;case 35668:case 35672:return d2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return _2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return S2;case 36289:case 36303:case 36311:case 36292:return y2}}function E2(r,t){r.uniform1fv(this.addr,t)}function T2(r,t){const i=sl(t,this.size,2);r.uniform2fv(this.addr,i)}function A2(r,t){const i=sl(t,this.size,3);r.uniform3fv(this.addr,i)}function R2(r,t){const i=sl(t,this.size,4);r.uniform4fv(this.addr,i)}function w2(r,t){const i=sl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function C2(r,t){const i=sl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function D2(r,t){const i=sl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function U2(r,t){r.uniform1iv(this.addr,t)}function L2(r,t){r.uniform2iv(this.addr,t)}function N2(r,t){r.uniform3iv(this.addr,t)}function P2(r,t){r.uniform4iv(this.addr,t)}function O2(r,t){r.uniform1uiv(this.addr,t)}function I2(r,t){r.uniform2uiv(this.addr,t)}function F2(r,t){r.uniform3uiv(this.addr,t)}function B2(r,t){r.uniform4uiv(this.addr,t)}function z2(r,t,i){const s=this.cache,l=t.length,c=Rf(i,l);ai(s,c)||(r.uniform1iv(this.addr,c),si(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=im:f=Dx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function H2(r,t,i){const s=this.cache,l=t.length,c=Rf(i,l);ai(s,c)||(r.uniform1iv(this.addr,c),si(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Lx,c[f])}function G2(r,t,i){const s=this.cache,l=t.length,c=Rf(i,l);ai(s,c)||(r.uniform1iv(this.addr,c),si(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Nx,c[f])}function V2(r,t,i){const s=this.cache,l=t.length,c=Rf(i,l);ai(s,c)||(r.uniform1iv(this.addr,c),si(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Ux,c[f])}function k2(r){switch(r){case 5126:return E2;case 35664:return T2;case 35665:return A2;case 35666:return R2;case 35674:return w2;case 35675:return C2;case 35676:return D2;case 5124:case 35670:return U2;case 35667:case 35671:return L2;case 35668:case 35672:return N2;case 35669:case 35673:return P2;case 5125:return O2;case 36294:return I2;case 36295:return F2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return z2;case 35679:case 36299:case 36307:return H2;case 35680:case 36300:case 36308:case 36293:return G2;case 36289:case 36303:case 36311:case 36292:return V2}}class X2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=b2(i.type)}}class W2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=k2(i.type)}}class q2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function Fv(r,t){r.seq.push(t),r.map[t.id]=t}function Y2(r,t,i){const s=r.name,l=s.length;for(rp.lastIndex=0;;){const c=rp.exec(s),f=rp.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Fv(i,d===void 0?new X2(p,r,t):new W2(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new q2(p),Fv(i,x)),i=x}}}class pf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);Y2(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Bv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const j2=37297;let Z2=0;function K2(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const zv=new Oe;function Q2(r){rn._getMatrix(zv,rn.workingColorSpace,r);const t=`mat3( ${zv.elements.map(i=>i.toFixed(4))} )`;switch(rn.getTransfer(r)){case mf:return[t,"LinearTransferOETF"];case _n:return[t,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Hv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+K2(r.getShaderSource(t),p)}else return c}function J2(r,t){const i=Q2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const $2={[ex]:"Linear",[nx]:"Reinhard",[ix]:"Cineon",[lm]:"ACESFilmic",[sx]:"AgX",[rx]:"Neutral",[ax]:"Custom"};function tT(r,t){const i=$2[t];return i===void 0?(De("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const af=new j;function eT(){rn.getLuminanceCoefficients(af);const r=af.x.toFixed(4),t=af.y.toFixed(4),i=af.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cc).join(`
`)}function iT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function aT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function cc(r){return r!==""}function Gv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sT=/^[ \t]*#include +<([\w\d./]+)>/gm;function am(r){return r.replace(sT,oT)}const rT=new Map;function oT(r,t){let i=Ie[t];if(i===void 0){const s=rT.get(t);if(s!==void 0)i=Ie[s],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return am(i)}const lT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(r){return r.replace(lT,cT)}function cT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Xv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const uT={[lf]:"SHADOWMAP_TYPE_PCF",[lc]:"SHADOWMAP_TYPE_VSM"};function fT(r){return uT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hT={[Zr]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE",[bf]:"ENVMAP_TYPE_CUBE_UV"};function dT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":hT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const pT={[$o]:"ENVMAP_MODE_REFRACTION"};function mT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":pT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gT={[tx]:"ENVMAP_BLENDING_MULTIPLY",[OS]:"ENVMAP_BLENDING_MIX",[IS]:"ENVMAP_BLENDING_ADD"};function _T(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":gT[r.combine]||"ENVMAP_BLENDING_NONE"}function vT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function xT(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=fT(i),d=dT(i),g=mT(i),x=_T(i),_=vT(i),y=nT(i),b=iT(c),w=l.createProgram();let M,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cc).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cc).join(`
`),v.length>0&&(v+=`
`)):(M=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cc).join(`
`),v=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==is?"#define TONE_MAPPING":"",i.toneMapping!==is?Ie.tonemapping_pars_fragment:"",i.toneMapping!==is?tT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,J2("linearToOutputTexel",i.outputColorSpace),eT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cc).join(`
`)),f=am(f),f=Gv(f,i),f=Vv(f,i),p=am(p),p=Gv(p,i),p=Vv(p,i),f=kv(f),p=kv(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=C+M+f,P=C+v+p,z=Bv(l,l.VERTEX_SHADER,I),H=Bv(l,l.FRAGMENT_SHADER,P);l.attachShader(w,z),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function k(V){if(r.debug.checkShaderErrors){const st=l.getProgramInfoLog(w)||"",lt=l.getShaderInfoLog(z)||"",St=l.getShaderInfoLog(H)||"",at=st.trim(),F=lt.trim(),B=St.trim();let dt=!0,bt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(dt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,z,H);else{const U=Hv(l,z,"vertex"),J=Hv(l,H,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+at+`
`+U+`
`+J)}else at!==""?De("WebGLProgram: Program Info Log:",at):(F===""||B==="")&&(bt=!1);bt&&(V.diagnostics={runnable:dt,programLog:at,vertexShader:{log:F,prefix:M},fragmentShader:{log:B,prefix:v}})}l.deleteShader(z),l.deleteShader(H),T=new pf(l,w),N=aT(l,w)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(w,j2)),ht},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Z2++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=H,this}let MT=0;class ST{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new yT(t),i.set(t,s)),s}}class yT{constructor(t){this.id=MT++,this.code=t,this.usedTimes=0}}function bT(r,t,i,s,l,c){const f=new xm,p=new ST,m=new Set,d=[],g=new Map,x=s.logarithmicDepthBuffer;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,ht,V,st){const lt=V.fog,St=st.geometry,at=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||at,F),dt=B&&B.mapping===bf?B.image.height:null,bt=y[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&De("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const U=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,J=U!==void 0?U.length:0;let ot=0;St.morphAttributes.position!==void 0&&(ot=1),St.morphAttributes.normal!==void 0&&(ot=2),St.morphAttributes.color!==void 0&&(ot=3);let vt,Kt,de,nt;if(bt){const Ye=ts[bt];vt=Ye.vertexShader,Kt=Ye.fragmentShader}else vt=T.vertexShader,Kt=T.fragmentShader,p.update(T),de=p.getVertexShaderID(T),nt=p.getFragmentShaderID(T);const Pt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),ye=st.isInstancedMesh===!0,xe=st.isBatchedMesh===!0,Me=!!T.map,Cn=!!T.matcap,Le=!!B,We=!!T.aoMap,qe=!!T.lightMap,me=!!T.bumpMap,Qe=!!T.normalMap,X=!!T.displacementMap,Dn=!!T.emissiveMap,Je=!!T.metalnessMap,$e=!!T.roughnessMap,fe=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Q=T.iridescence>0,Et=T.sheen>0,Tt=T.transmission>0,xt=fe&&!!T.anisotropyMap,Qt=O&&!!T.clearcoatMap,Yt=O&&!!T.clearcoatNormalMap,_e=O&&!!T.clearcoatRoughnessMap,Se=Q&&!!T.iridescenceMap,It=Q&&!!T.iridescenceThicknessMap,zt=Et&&!!T.sheenColorMap,ae=Et&&!!T.sheenRoughnessMap,le=!!T.specularMap,Jt=!!T.specularColorMap,Re=!!T.specularIntensityMap,Y=Tt&&!!T.transmissionMap,kt=Tt&&!!T.thicknessMap,Vt=!!T.gradientMap,ne=!!T.alphaMap,Ft=T.alphaTest>0,yt=!!T.alphaHash,re=!!T.extensions;let ge=is;T.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(ge=r.toneMapping);const tn={shaderID:bt,shaderType:T.type,shaderName:T.name,vertexShader:vt,fragmentShader:Kt,defines:T.defines,customVertexShaderID:de,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:xe,batchingColor:xe&&st._colorsTexture!==null,instancing:ye,instancingColor:ye&&st.instanceColor!==null,instancingMorph:ye&&st.morphTexture!==null,outputColorSpace:Pt===null?r.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:el,alphaToCoverage:!!T.alphaToCoverage,map:Me,matcap:Cn,envMap:Le,envMapMode:Le&&B.mapping,envMapCubeUVHeight:dt,aoMap:We,lightMap:qe,bumpMap:me,normalMap:Qe,displacementMap:X,emissiveMap:Dn,normalMapObjectSpace:Qe&&T.normalMapType===zS,normalMapTangentSpace:Qe&&T.normalMapType===mx,metalnessMap:Je,roughnessMap:$e,anisotropy:fe,anisotropyMap:xt,clearcoat:O,clearcoatMap:Qt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:_e,dispersion:E,iridescence:Q,iridescenceMap:Se,iridescenceThicknessMap:It,sheen:Et,sheenColorMap:zt,sheenRoughnessMap:ae,specularMap:le,specularColorMap:Jt,specularIntensityMap:Re,transmission:Tt,transmissionMap:Y,thicknessMap:kt,gradientMap:Vt,opaque:T.transparent===!1&&T.blending===jr&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:Ft,alphaHash:yt,combine:T.combine,mapUv:Me&&b(T.map.channel),aoMapUv:We&&b(T.aoMap.channel),lightMapUv:qe&&b(T.lightMap.channel),bumpMapUv:me&&b(T.bumpMap.channel),normalMapUv:Qe&&b(T.normalMap.channel),displacementMapUv:X&&b(T.displacementMap.channel),emissiveMapUv:Dn&&b(T.emissiveMap.channel),metalnessMapUv:Je&&b(T.metalnessMap.channel),roughnessMapUv:$e&&b(T.roughnessMap.channel),anisotropyMapUv:xt&&b(T.anisotropyMap.channel),clearcoatMapUv:Qt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:It&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:ae&&b(T.sheenRoughnessMap.channel),specularMapUv:le&&b(T.specularMap.channel),specularColorMapUv:Jt&&b(T.specularColorMap.channel),specularIntensityMapUv:Re&&b(T.specularIntensityMap.channel),transmissionMapUv:Y&&b(T.transmissionMap.channel),thicknessMapUv:kt&&b(T.thicknessMap.channel),alphaMapUv:ne&&b(T.alphaMap.channel),vertexTangents:!!St.attributes.tangent&&(Qe||fe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!St.attributes.uv&&(Me||ne),fog:!!lt,useFog:T.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||St.attributes.normal===void 0&&Qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_t,skinning:st.isSkinnedMesh===!0,morphTargets:St.morphAttributes.position!==void 0,morphNormals:St.morphAttributes.normal!==void 0,morphColors:St.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ot,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ht.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:Me&&T.map.isVideoTexture===!0&&rn.getTransfer(T.map.colorSpace)===_n,decodeVideoTextureEmissive:Dn&&T.emissiveMap.isVideoTexture===!0&&rn.getTransfer(T.emissiveMap.colorSpace)===_n,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Oa,flipSided:T.side===qi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:re&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&T.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return tn.vertexUv1s=m.has(1),tn.vertexUv2s=m.has(2),tn.vertexUv3s=m.has(3),m.clear(),tn}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)N.push(ht),N.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(v(N,T),C(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function v(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function C(T,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),T.push(f.mask)}function I(T){const N=y[T.type];let ht;if(N){const V=ts[N];ht=Hy.clone(V.uniforms)}else ht=T.uniforms;return ht}function P(T,N){let ht=g.get(N);return ht!==void 0?++ht.usedTimes:(ht=new xT(r,N,T,l),d.push(ht),g.set(N,ht)),ht}function z(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function H(T){p.remove(T)}function k(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:I,acquireProgram:P,releaseProgram:z,releaseShaderCache:H,programs:d,dispose:k}}function ET(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function TT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Wv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function qv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function p(_,y,b,w,M,v){let C=r[t];return C===void 0?(C={id:_.id,object:_,geometry:y,material:b,materialVariant:f(_),groupOrder:w,renderOrder:_.renderOrder,z:M,group:v},r[t]=C):(C.id=_.id,C.object=_,C.geometry=y,C.material=b,C.materialVariant=f(_),C.groupOrder=w,C.renderOrder=_.renderOrder,C.z=M,C.group=v),t++,C}function m(_,y,b,w,M,v){const C=p(_,y,b,w,M,v);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function d(_,y,b,w,M,v){const C=p(_,y,b,w,M,v);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function g(_,y){i.length>1&&i.sort(_||TT),s.length>1&&s.sort(y||Wv),l.length>1&&l.sort(y||Wv)}function x(){for(let _=t,y=r.length;_<y;_++){const b=r[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:g}}function AT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new qv,r.set(s,[f])):l>=c.length?(f=new qv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function RT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new Xe};break;case"SpotLight":i={position:new j,direction:new j,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":i={color:new Xe,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function wT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let CT=0;function DT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function UT(r){const t=new RT,i=wT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new j);const l=new j,c=new wn,f=new wn;function p(d){let g=0,x=0,_=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,b=0,w=0,M=0,v=0,C=0,I=0,P=0,z=0,H=0,k=0;d.sort(DT);for(let N=0,ht=d.length;N<ht;N++){const V=d[N],st=V.color,lt=V.intensity,St=V.distance;let at=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===tl?at=V.shadow.map.texture:at=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=st.r*lt,x+=st.g*lt,_+=st.b*lt;else if(V.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(V.sh.coefficients[F],lt);k++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,dt=i.get(V);dt.shadowIntensity=B.intensity,dt.shadowBias=B.bias,dt.shadowNormalBias=B.normalBias,dt.shadowRadius=B.radius,dt.shadowMapSize=B.mapSize,s.directionalShadow[y]=dt,s.directionalShadowMap[y]=at,s.directionalShadowMatrix[y]=V.shadow.matrix,C++}s.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(st).multiplyScalar(lt),F.distance=St,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,s.spot[w]=F;const B=V.shadow;if(V.map&&(s.spotLightMap[z]=V.map,z++,B.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[w]=B.matrix,V.castShadow){const dt=i.get(V);dt.shadowIntensity=B.intensity,dt.shadowBias=B.bias,dt.shadowNormalBias=B.normalBias,dt.shadowRadius=B.radius,dt.shadowMapSize=B.mapSize,s.spotShadow[w]=dt,s.spotShadowMap[w]=at,P++}w++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(st).multiplyScalar(lt),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const B=V.shadow,dt=i.get(V);dt.shadowIntensity=B.intensity,dt.shadowBias=B.bias,dt.shadowNormalBias=B.normalBias,dt.shadowRadius=B.radius,dt.shadowMapSize=B.mapSize,dt.shadowCameraNear=B.camera.near,dt.shadowCameraFar=B.camera.far,s.pointShadow[b]=dt,s.pointShadowMap[b]=at,s.pointShadowMatrix[b]=V.shadow.matrix,I++}s.point[b]=F,b++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(lt),F.groundColor.copy(V.groundColor).multiplyScalar(lt),s.hemi[v]=F,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ee.LTC_FLOAT_1,s.rectAreaLTC2=ee.LTC_FLOAT_2):(s.rectAreaLTC1=ee.LTC_HALF_1,s.rectAreaLTC2=ee.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==C||T.numPointShadows!==I||T.numSpotShadows!==P||T.numSpotMaps!==z||T.numLightProbes!==k)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=P+z-H,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=k,T.directionalLength=y,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=C,T.numPointShadows=I,T.numSpotShadows=P,T.numSpotMaps=z,T.numLightProbes=k,s.version=CT++)}function m(d,g){let x=0,_=0,y=0,b=0,w=0;const M=g.matrixWorldInverse;for(let v=0,C=d.length;v<C;v++){const I=d[v];if(I.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),x++}else if(I.isSpotLight){const P=s.spot[y];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(I.isRectAreaLight){const P=s.rectArea[b];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),f.identity(),c.copy(I.matrixWorld),c.premultiply(M),f.extractRotation(c),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),b++}else if(I.isPointLight){const P=s.point[_];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),_++}else if(I.isHemisphereLight){const P=s.hemi[w];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function Yv(r){const t=new UT(r),i=[],s=[];function l(g){d.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function LT(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Yv(r),t.set(l,[p])):c>=f.length?(p=new Yv(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const NT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
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
}`,OT=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],IT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],jv=new wn,rc=new j,op=new j;function FT(r,t,i){let s=new Mm;const l=new Fe,c=new Fe,f=new Xn,p=new Xy,m=new Wy,d={},g=i.maxTextureSize,x={[dr]:qi,[qi]:dr,[Oa]:Oa},_=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:NT,fragmentShader:PT}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new jn;b.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ii(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lf;let v=this.type;this.render=function(H,k,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;this.type===gS&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=lf);const N=r.getRenderTarget(),ht=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),st=r.state;st.setBlending(Ds),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const lt=v!==this.type;lt&&k.traverse(function(St){St.material&&(Array.isArray(St.material)?St.material.forEach(at=>at.needsUpdate=!0):St.material.needsUpdate=!0)});for(let St=0,at=H.length;St<at;St++){const F=H[St],B=F.shadow;if(B===void 0){De("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const dt=B.getFrameExtents();l.multiply(dt),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/dt.x),l.x=c.x*dt.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/dt.y),l.y=c.y*dt.y,B.mapSize.y=c.y));const bt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=bt,B.map===null||lt===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===lc){if(F.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new as(l.x,l.y,{format:tl,type:Ns,minFilter:Ri,magFilter:Ri,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new xc(l.x,l.y,es),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=Ps,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=vi,B.map.depthTexture.magFilter=vi}else F.isPointLight?(B.map=new Cx(l.x),B.map.depthTexture=new By(l.x,ss)):(B.map=new as(l.x,l.y),B.map.depthTexture=new xc(l.x,l.y,ss)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=Ps,this.type===lf?(B.map.depthTexture.compareFunction=bt?gm:mm,B.map.depthTexture.minFilter=Ri,B.map.depthTexture.magFilter=Ri):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=vi,B.map.depthTexture.magFilter=vi);B.camera.updateProjectionMatrix()}const U=B.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<U;J++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,J),r.clear();else{J===0&&(r.setRenderTarget(B.map),r.clear());const ot=B.getViewport(J);f.set(c.x*ot.x,c.y*ot.y,c.x*ot.z,c.y*ot.w),st.viewport(f)}if(F.isPointLight){const ot=B.camera,vt=B.matrix,Kt=F.distance||ot.far;Kt!==ot.far&&(ot.far=Kt,ot.updateProjectionMatrix()),rc.setFromMatrixPosition(F.matrixWorld),ot.position.copy(rc),op.copy(ot.position),op.add(OT[J]),ot.up.copy(IT[J]),ot.lookAt(op),ot.updateMatrixWorld(),vt.makeTranslation(-rc.x,-rc.y,-rc.z),jv.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),B._frustum.setFromProjectionMatrix(jv,ot.coordinateSystem,ot.reversedDepth)}else B.updateMatrices(F);s=B.getFrustum(),P(k,T,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===lc&&C(B,T),B.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(N,ht,V)};function C(H,k){const T=t.update(w);_.defines.VSM_SAMPLES!==H.blurSamples&&(_.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new as(l.x,l.y,{format:tl,type:Ns})),_.uniforms.shadow_pass.value=H.map.depthTexture,_.uniforms.resolution.value=H.mapSize,_.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(k,null,T,_,w,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(k,null,T,y,w,null)}function I(H,k,T,N){let ht=null;const V=T.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)ht=V;else if(ht=T.isPointLight===!0?m:p,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const st=ht.uuid,lt=k.uuid;let St=d[st];St===void 0&&(St={},d[st]=St);let at=St[lt];at===void 0&&(at=ht.clone(),St[lt]=at,k.addEventListener("dispose",z)),ht=at}if(ht.visible=k.visible,ht.wireframe=k.wireframe,N===lc?ht.side=k.shadowSide!==null?k.shadowSide:k.side:ht.side=k.shadowSide!==null?k.shadowSide:x[k.side],ht.alphaMap=k.alphaMap,ht.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,ht.map=k.map,ht.clipShadows=k.clipShadows,ht.clippingPlanes=k.clippingPlanes,ht.clipIntersection=k.clipIntersection,ht.displacementMap=k.displacementMap,ht.displacementScale=k.displacementScale,ht.displacementBias=k.displacementBias,ht.wireframeLinewidth=k.wireframeLinewidth,ht.linewidth=k.linewidth,T.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const st=r.properties.get(ht);st.light=T}return ht}function P(H,k,T,N,ht){if(H.visible===!1)return;if(H.layers.test(k.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&ht===lc)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,H.matrixWorld);const lt=t.update(H),St=H.material;if(Array.isArray(St)){const at=lt.groups;for(let F=0,B=at.length;F<B;F++){const dt=at[F],bt=St[dt.materialIndex];if(bt&&bt.visible){const U=I(H,bt,N,ht);H.onBeforeShadow(r,H,k,T,lt,U,dt),r.renderBufferDirect(T,null,lt,U,H,dt),H.onAfterShadow(r,H,k,T,lt,U,dt)}}}else if(St.visible){const at=I(H,St,N,ht);H.onBeforeShadow(r,H,k,T,lt,at,null),r.renderBufferDirect(T,null,lt,at,H,null),H.onAfterShadow(r,H,k,T,lt,at,null)}}const st=H.children;for(let lt=0,St=st.length;lt<St;lt++)P(st[lt],k,T,N,ht)}function z(H){H.target.removeEventListener("dispose",z);for(const T in d){const N=d[T],ht=H.target.uuid;ht in N&&(N[ht].dispose(),delete N[ht])}}}function BT(r,t){function i(){let Y=!1;const kt=new Xn;let Vt=null;const ne=new Xn(0,0,0,0);return{setMask:function(Ft){Vt!==Ft&&!Y&&(r.colorMask(Ft,Ft,Ft,Ft),Vt=Ft)},setLocked:function(Ft){Y=Ft},setClear:function(Ft,yt,re,ge,tn){tn===!0&&(Ft*=ge,yt*=ge,re*=ge),kt.set(Ft,yt,re,ge),ne.equals(kt)===!1&&(r.clearColor(Ft,yt,re,ge),ne.copy(kt))},reset:function(){Y=!1,Vt=null,ne.set(-1,0,0,0)}}}function s(){let Y=!1,kt=!1,Vt=null,ne=null,Ft=null;return{setReversed:function(yt){if(kt!==yt){const re=t.get("EXT_clip_control");yt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),kt=yt;const ge=Ft;Ft=null,this.setClear(ge)}},getReversed:function(){return kt},setTest:function(yt){yt?Pt(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(yt){Vt!==yt&&!Y&&(r.depthMask(yt),Vt=yt)},setFunc:function(yt){if(kt&&(yt=ZS[yt]),ne!==yt){switch(yt){case fp:r.depthFunc(r.NEVER);break;case hp:r.depthFunc(r.ALWAYS);break;case dp:r.depthFunc(r.LESS);break;case Jo:r.depthFunc(r.LEQUAL);break;case pp:r.depthFunc(r.EQUAL);break;case mp:r.depthFunc(r.GEQUAL);break;case gp:r.depthFunc(r.GREATER);break;case _p:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=yt}},setLocked:function(yt){Y=yt},setClear:function(yt){Ft!==yt&&(Ft=yt,kt&&(yt=1-yt),r.clearDepth(yt))},reset:function(){Y=!1,Vt=null,ne=null,Ft=null,kt=!1}}}function l(){let Y=!1,kt=null,Vt=null,ne=null,Ft=null,yt=null,re=null,ge=null,tn=null;return{setTest:function(Ye){Y||(Ye?Pt(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(Ye){kt!==Ye&&!Y&&(r.stencilMask(Ye),kt=Ye)},setFunc:function(Ye,xi,Bn){(Vt!==Ye||ne!==xi||Ft!==Bn)&&(r.stencilFunc(Ye,xi,Bn),Vt=Ye,ne=xi,Ft=Bn)},setOp:function(Ye,xi,Bn){(yt!==Ye||re!==xi||ge!==Bn)&&(r.stencilOp(Ye,xi,Bn),yt=Ye,re=xi,ge=Bn)},setLocked:function(Ye){Y=Ye},setClear:function(Ye){tn!==Ye&&(r.clearStencil(Ye),tn=Ye)},reset:function(){Y=!1,kt=null,Vt=null,ne=null,Ft=null,yt=null,re=null,ge=null,tn=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let g={},x={},_=new WeakMap,y=[],b=null,w=!1,M=null,v=null,C=null,I=null,P=null,z=null,H=null,k=new Xe(0,0,0),T=0,N=!1,ht=null,V=null,st=null,lt=null,St=null;const at=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const dt=r.getParameter(r.VERSION);dt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(dt)[1]),F=B>=1):dt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),F=B>=2);let bt=null,U={};const J=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),vt=new Xn().fromArray(J),Kt=new Xn().fromArray(ot);function de(Y,kt,Vt,ne){const Ft=new Uint8Array(4),yt=r.createTexture();r.bindTexture(Y,yt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<Vt;re++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(kt,0,r.RGBA,1,1,ne,0,r.RGBA,r.UNSIGNED_BYTE,Ft):r.texImage2D(kt+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ft);return yt}const nt={};nt[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Pt(r.DEPTH_TEST),f.setFunc(Jo),me(!1),Qe(V_),Pt(r.CULL_FACE),We(Ds);function Pt(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function _t(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function ye(Y,kt){return x[Y]!==kt?(r.bindFramebuffer(Y,kt),x[Y]=kt,Y===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=kt),Y===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=kt),!0):!1}function xe(Y,kt){let Vt=y,ne=!1;if(Y){Vt=_.get(kt),Vt===void 0&&(Vt=[],_.set(kt,Vt));const Ft=Y.textures;if(Vt.length!==Ft.length||Vt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,re=Ft.length;yt<re;yt++)Vt[yt]=r.COLOR_ATTACHMENT0+yt;Vt.length=Ft.length,ne=!0}}else Vt[0]!==r.BACK&&(Vt[0]=r.BACK,ne=!0);ne&&r.drawBuffers(Vt)}function Me(Y){return b!==Y?(r.useProgram(Y),b=Y,!0):!1}const Cn={[Xr]:r.FUNC_ADD,[vS]:r.FUNC_SUBTRACT,[xS]:r.FUNC_REVERSE_SUBTRACT};Cn[MS]=r.MIN,Cn[SS]=r.MAX;const Le={[yS]:r.ZERO,[bS]:r.ONE,[ES]:r.SRC_COLOR,[cp]:r.SRC_ALPHA,[DS]:r.SRC_ALPHA_SATURATE,[wS]:r.DST_COLOR,[AS]:r.DST_ALPHA,[TS]:r.ONE_MINUS_SRC_COLOR,[up]:r.ONE_MINUS_SRC_ALPHA,[CS]:r.ONE_MINUS_DST_COLOR,[RS]:r.ONE_MINUS_DST_ALPHA,[US]:r.CONSTANT_COLOR,[LS]:r.ONE_MINUS_CONSTANT_COLOR,[NS]:r.CONSTANT_ALPHA,[PS]:r.ONE_MINUS_CONSTANT_ALPHA};function We(Y,kt,Vt,ne,Ft,yt,re,ge,tn,Ye){if(Y===Ds){w===!0&&(_t(r.BLEND),w=!1);return}if(w===!1&&(Pt(r.BLEND),w=!0),Y!==_S){if(Y!==M||Ye!==N){if((v!==Xr||P!==Xr)&&(r.blendEquation(r.FUNC_ADD),v=Xr,P=Xr),Ye)switch(Y){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jo:r.blendFunc(r.ONE,r.ONE);break;case k_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case X_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:nn("WebGLState: Invalid blending: ",Y);break}else switch(Y){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case k_:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X_:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",Y);break}C=null,I=null,z=null,H=null,k.set(0,0,0),T=0,M=Y,N=Ye}return}Ft=Ft||kt,yt=yt||Vt,re=re||ne,(kt!==v||Ft!==P)&&(r.blendEquationSeparate(Cn[kt],Cn[Ft]),v=kt,P=Ft),(Vt!==C||ne!==I||yt!==z||re!==H)&&(r.blendFuncSeparate(Le[Vt],Le[ne],Le[yt],Le[re]),C=Vt,I=ne,z=yt,H=re),(ge.equals(k)===!1||tn!==T)&&(r.blendColor(ge.r,ge.g,ge.b,tn),k.copy(ge),T=tn),M=Y,N=!1}function qe(Y,kt){Y.side===Oa?_t(r.CULL_FACE):Pt(r.CULL_FACE);let Vt=Y.side===qi;kt&&(Vt=!Vt),me(Vt),Y.blending===jr&&Y.transparent===!1?We(Ds):We(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const ne=Y.stencilWrite;p.setTest(ne),ne&&(p.setMask(Y.stencilWriteMask),p.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),p.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Dn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Pt(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(Y){ht!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),ht=Y)}function Qe(Y){Y!==pS?(Pt(r.CULL_FACE),Y!==V&&(Y===V_?r.cullFace(r.BACK):Y===mS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),V=Y}function X(Y){Y!==st&&(F&&r.lineWidth(Y),st=Y)}function Dn(Y,kt,Vt){Y?(Pt(r.POLYGON_OFFSET_FILL),(lt!==kt||St!==Vt)&&(lt=kt,St=Vt,f.getReversed()&&(kt=-kt),r.polygonOffset(kt,Vt))):_t(r.POLYGON_OFFSET_FILL)}function Je(Y){Y?Pt(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function $e(Y){Y===void 0&&(Y=r.TEXTURE0+at-1),bt!==Y&&(r.activeTexture(Y),bt=Y)}function fe(Y,kt,Vt){Vt===void 0&&(bt===null?Vt=r.TEXTURE0+at-1:Vt=bt);let ne=U[Vt];ne===void 0&&(ne={type:void 0,texture:void 0},U[Vt]=ne),(ne.type!==Y||ne.texture!==kt)&&(bt!==Vt&&(r.activeTexture(Vt),bt=Vt),r.bindTexture(Y,kt||nt[Y]),ne.type=Y,ne.texture=kt)}function O(){const Y=U[bt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function Et(){try{r.texSubImage2D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function Tt(){try{r.texSubImage3D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function xt(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function Qt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function Yt(){try{r.texStorage2D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function _e(){try{r.texStorage3D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function Se(){try{r.texImage2D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function It(){try{r.texImage3D(...arguments)}catch(Y){nn("WebGLState:",Y)}}function zt(Y){vt.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),vt.copy(Y))}function ae(Y){Kt.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Kt.copy(Y))}function le(Y,kt){let Vt=d.get(kt);Vt===void 0&&(Vt=new WeakMap,d.set(kt,Vt));let ne=Vt.get(Y);ne===void 0&&(ne=r.getUniformBlockIndex(kt,Y.name),Vt.set(Y,ne))}function Jt(Y,kt){const ne=d.get(kt).get(Y);m.get(kt)!==ne&&(r.uniformBlockBinding(kt,ne,Y.__bindingPointIndex),m.set(kt,ne))}function Re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},bt=null,U={},x={},_=new WeakMap,y=[],b=null,w=!1,M=null,v=null,C=null,I=null,P=null,z=null,H=null,k=new Xe(0,0,0),T=0,N=!1,ht=null,V=null,st=null,lt=null,St=null,vt.set(0,0,r.canvas.width,r.canvas.height),Kt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Pt,disable:_t,bindFramebuffer:ye,drawBuffers:xe,useProgram:Me,setBlending:We,setMaterial:qe,setFlipSided:me,setCullFace:Qe,setLineWidth:X,setPolygonOffset:Dn,setScissorTest:Je,activeTexture:$e,bindTexture:fe,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:Se,texImage3D:It,updateUBOMapping:le,uniformBlockBinding:Jt,texStorage2D:Yt,texStorage3D:_e,texSubImage2D:Et,texSubImage3D:Tt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Qt,scissor:zt,viewport:ae,reset:Re}}function zT(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Fe,g=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return y?new OffscreenCanvas(O,E):_c("canvas")}function w(O,E,Q){let Et=1;const Tt=fe(O);if((Tt.width>Q||Tt.height>Q)&&(Et=Q/Math.max(Tt.width,Tt.height)),Et<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xt=Math.floor(Et*Tt.width),Qt=Math.floor(Et*Tt.height);x===void 0&&(x=b(xt,Qt));const Yt=E?b(xt,Qt):x;return Yt.width=xt,Yt.height=Qt,Yt.getContext("2d").drawImage(O,0,0,xt,Qt),De("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+xt+"x"+Qt+")."),Yt}else return"data"in O&&De("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(O,E,Q,Et,Tt=!1){if(O!==null){if(r[O]!==void 0)return r[O];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xt=E;if(E===r.RED&&(Q===r.FLOAT&&(xt=r.R32F),Q===r.HALF_FLOAT&&(xt=r.R16F),Q===r.UNSIGNED_BYTE&&(xt=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.R8UI),Q===r.UNSIGNED_SHORT&&(xt=r.R16UI),Q===r.UNSIGNED_INT&&(xt=r.R32UI),Q===r.BYTE&&(xt=r.R8I),Q===r.SHORT&&(xt=r.R16I),Q===r.INT&&(xt=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(xt=r.RG32F),Q===r.HALF_FLOAT&&(xt=r.RG16F),Q===r.UNSIGNED_BYTE&&(xt=r.RG8)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RG8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RG16UI),Q===r.UNSIGNED_INT&&(xt=r.RG32UI),Q===r.BYTE&&(xt=r.RG8I),Q===r.SHORT&&(xt=r.RG16I),Q===r.INT&&(xt=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RGB16UI),Q===r.UNSIGNED_INT&&(xt=r.RGB32UI),Q===r.BYTE&&(xt=r.RGB8I),Q===r.SHORT&&(xt=r.RGB16I),Q===r.INT&&(xt=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RGBA16UI),Q===r.UNSIGNED_INT&&(xt=r.RGBA32UI),Q===r.BYTE&&(xt=r.RGBA8I),Q===r.SHORT&&(xt=r.RGBA16I),Q===r.INT&&(xt=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(xt=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(xt=r.R11F_G11F_B10F)),E===r.RGBA){const Qt=Tt?mf:rn.getTransfer(Et);Q===r.FLOAT&&(xt=r.RGBA32F),Q===r.HALF_FLOAT&&(xt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(xt=Qt===_n?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(xt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(xt=r.RGB5_A1)}return(xt===r.R16F||xt===r.R32F||xt===r.RG16F||xt===r.RG32F||xt===r.RGBA16F||xt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function P(O,E){let Q;return O?E===null||E===ss||E===mc?Q=r.DEPTH24_STENCIL8:E===es?Q=r.DEPTH32F_STENCIL8:E===pc&&(Q=r.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ss||E===mc?Q=r.DEPTH_COMPONENT24:E===es?Q=r.DEPTH_COMPONENT32F:E===pc&&(Q=r.DEPTH_COMPONENT16),Q}function z(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==vi&&O.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function H(O){const E=O.target;E.removeEventListener("dispose",H),T(E),E.isVideoTexture&&g.delete(E)}function k(O){const E=O.target;E.removeEventListener("dispose",k),ht(E)}function T(O){const E=s.get(O);if(E.__webglInit===void 0)return;const Q=O.source,Et=_.get(Q);if(Et){const Tt=Et[E.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&N(O),Object.keys(Et).length===0&&_.delete(Q)}s.remove(O)}function N(O){const E=s.get(O);r.deleteTexture(E.__webglTexture);const Q=O.source,Et=_.get(Q);delete Et[E.__cacheKey],f.memory.textures--}function ht(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++){if(Array.isArray(E.__webglFramebuffer[Et]))for(let Tt=0;Tt<E.__webglFramebuffer[Et].length;Tt++)r.deleteFramebuffer(E.__webglFramebuffer[Et][Tt]);else r.deleteFramebuffer(E.__webglFramebuffer[Et]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Et])}else{if(Array.isArray(E.__webglFramebuffer))for(let Et=0;Et<E.__webglFramebuffer.length;Et++)r.deleteFramebuffer(E.__webglFramebuffer[Et]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Et=0;Et<E.__webglColorRenderbuffer.length;Et++)E.__webglColorRenderbuffer[Et]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Et]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=O.textures;for(let Et=0,Tt=Q.length;Et<Tt;Et++){const xt=s.get(Q[Et]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),f.memory.textures--),s.remove(Q[Et])}s.remove(O)}let V=0;function st(){V=0}function lt(){const O=V;return O>=l.maxTextures&&De("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function St(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function at(O,E){const Q=s.get(O);if(O.isVideoTexture&&Je(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){const Et=O.image;if(Et===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Et.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Q,O,E);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function F(O,E){const Q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){nt(Q,O,E);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function B(O,E){const Q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){nt(Q,O,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function dt(O,E){const Q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Q.__version!==O.version){Pt(Q,O,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const bt={[vp]:r.REPEAT,[Cs]:r.CLAMP_TO_EDGE,[xp]:r.MIRRORED_REPEAT},U={[vi]:r.NEAREST,[FS]:r.NEAREST_MIPMAP_NEAREST,[wu]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[Cd]:r.LINEAR_MIPMAP_NEAREST,[qr]:r.LINEAR_MIPMAP_LINEAR},J={[HS]:r.NEVER,[WS]:r.ALWAYS,[GS]:r.LESS,[mm]:r.LEQUAL,[VS]:r.EQUAL,[gm]:r.GEQUAL,[kS]:r.GREATER,[XS]:r.NOTEQUAL};function ot(O,E){if(E.type===es&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Cd||E.magFilter===wu||E.magFilter===qr||E.minFilter===Ri||E.minFilter===Cd||E.minFilter===wu||E.minFilter===qr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,bt[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,bt[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,bt[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,U[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==wu&&E.minFilter!==qr||E.type===es&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function vt(O,E){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",H));const Et=E.source;let Tt=_.get(Et);Tt===void 0&&(Tt={},_.set(Et,Tt));const xt=St(E);if(xt!==O.__cacheKey){Tt[xt]===void 0&&(Tt[xt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),Tt[xt].usedTimes++;const Qt=Tt[O.__cacheKey];Qt!==void 0&&(Tt[O.__cacheKey].usedTimes--,Qt.usedTimes===0&&N(E)),O.__cacheKey=xt,O.__webglTexture=Tt[xt].texture}return Q}function Kt(O,E,Q){return Math.floor(Math.floor(O/Q)/E)}function de(O,E,Q,Et){const xt=O.updateRanges;if(xt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,Et,E.data);else{xt.sort((It,zt)=>It.start-zt.start);let Qt=0;for(let It=1;It<xt.length;It++){const zt=xt[Qt],ae=xt[It],le=zt.start+zt.count,Jt=Kt(ae.start,E.width,4),Re=Kt(zt.start,E.width,4);ae.start<=le+1&&Jt===Re&&Kt(ae.start+ae.count-1,E.width,4)===Jt?zt.count=Math.max(zt.count,ae.start+ae.count-zt.start):(++Qt,xt[Qt]=ae)}xt.length=Qt+1;const Yt=r.getParameter(r.UNPACK_ROW_LENGTH),_e=r.getParameter(r.UNPACK_SKIP_PIXELS),Se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let It=0,zt=xt.length;It<zt;It++){const ae=xt[It],le=Math.floor(ae.start/4),Jt=Math.ceil(ae.count/4),Re=le%E.width,Y=Math.floor(le/E.width),kt=Jt,Vt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,Re,Y,kt,Vt,Q,Et,E.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Yt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,Se)}}function nt(O,E,Q){let Et=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Et=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Et=r.TEXTURE_3D);const Tt=vt(O,E),xt=E.source;i.bindTexture(Et,O.__webglTexture,r.TEXTURE0+Q);const Qt=s.get(xt);if(xt.version!==Qt.__version||Tt===!0){i.activeTexture(r.TEXTURE0+Q);const Yt=rn.getPrimaries(rn.workingColorSpace),_e=E.colorSpace===ur?null:rn.getPrimaries(E.colorSpace),Se=E.colorSpace===ur||Yt===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let It=w(E.image,!1,l.maxTextureSize);It=$e(E,It);const zt=c.convert(E.format,E.colorSpace),ae=c.convert(E.type);let le=I(E.internalFormat,zt,ae,E.colorSpace,E.isVideoTexture);ot(Et,E);let Jt;const Re=E.mipmaps,Y=E.isVideoTexture!==!0,kt=Qt.__version===void 0||Tt===!0,Vt=xt.dataReady,ne=z(E,It);if(E.isDepthTexture)le=P(E.format===Yr,E.type),kt&&(Y?i.texStorage2D(r.TEXTURE_2D,1,le,It.width,It.height):i.texImage2D(r.TEXTURE_2D,0,le,It.width,It.height,0,zt,ae,null));else if(E.isDataTexture)if(Re.length>0){Y&&kt&&i.texStorage2D(r.TEXTURE_2D,ne,le,Re[0].width,Re[0].height);for(let Ft=0,yt=Re.length;Ft<yt;Ft++)Jt=Re[Ft],Y?Vt&&i.texSubImage2D(r.TEXTURE_2D,Ft,0,0,Jt.width,Jt.height,zt,ae,Jt.data):i.texImage2D(r.TEXTURE_2D,Ft,le,Jt.width,Jt.height,0,zt,ae,Jt.data);E.generateMipmaps=!1}else Y?(kt&&i.texStorage2D(r.TEXTURE_2D,ne,le,It.width,It.height),Vt&&de(E,It,zt,ae)):i.texImage2D(r.TEXTURE_2D,0,le,It.width,It.height,0,zt,ae,It.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Y&&kt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ne,le,Re[0].width,Re[0].height,It.depth);for(let Ft=0,yt=Re.length;Ft<yt;Ft++)if(Jt=Re[Ft],E.format!==Fa)if(zt!==null)if(Y){if(Vt)if(E.layerUpdates.size>0){const re=Tv(Jt.width,Jt.height,E.format,E.type);for(const ge of E.layerUpdates){const tn=Jt.data.subarray(ge*re/Jt.data.BYTES_PER_ELEMENT,(ge+1)*re/Jt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ft,0,0,ge,Jt.width,Jt.height,1,zt,tn)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ft,0,0,0,Jt.width,Jt.height,It.depth,zt,Jt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ft,le,Jt.width,Jt.height,It.depth,0,Jt.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Vt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ft,0,0,0,Jt.width,Jt.height,It.depth,zt,ae,Jt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ft,le,Jt.width,Jt.height,It.depth,0,zt,ae,Jt.data)}else{Y&&kt&&i.texStorage2D(r.TEXTURE_2D,ne,le,Re[0].width,Re[0].height);for(let Ft=0,yt=Re.length;Ft<yt;Ft++)Jt=Re[Ft],E.format!==Fa?zt!==null?Y?Vt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ft,0,0,Jt.width,Jt.height,zt,Jt.data):i.compressedTexImage2D(r.TEXTURE_2D,Ft,le,Jt.width,Jt.height,0,Jt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Vt&&i.texSubImage2D(r.TEXTURE_2D,Ft,0,0,Jt.width,Jt.height,zt,ae,Jt.data):i.texImage2D(r.TEXTURE_2D,Ft,le,Jt.width,Jt.height,0,zt,ae,Jt.data)}else if(E.isDataArrayTexture)if(Y){if(kt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ne,le,It.width,It.height,It.depth),Vt)if(E.layerUpdates.size>0){const Ft=Tv(It.width,It.height,E.format,E.type);for(const yt of E.layerUpdates){const re=It.data.subarray(yt*Ft/It.data.BYTES_PER_ELEMENT,(yt+1)*Ft/It.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,It.width,It.height,1,zt,ae,re)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,It.width,It.height,It.depth,zt,ae,It.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,le,It.width,It.height,It.depth,0,zt,ae,It.data);else if(E.isData3DTexture)Y?(kt&&i.texStorage3D(r.TEXTURE_3D,ne,le,It.width,It.height,It.depth),Vt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,It.width,It.height,It.depth,zt,ae,It.data)):i.texImage3D(r.TEXTURE_3D,0,le,It.width,It.height,It.depth,0,zt,ae,It.data);else if(E.isFramebufferTexture){if(kt)if(Y)i.texStorage2D(r.TEXTURE_2D,ne,le,It.width,It.height);else{let Ft=It.width,yt=It.height;for(let re=0;re<ne;re++)i.texImage2D(r.TEXTURE_2D,re,le,Ft,yt,0,zt,ae,null),Ft>>=1,yt>>=1}}else if(Re.length>0){if(Y&&kt){const Ft=fe(Re[0]);i.texStorage2D(r.TEXTURE_2D,ne,le,Ft.width,Ft.height)}for(let Ft=0,yt=Re.length;Ft<yt;Ft++)Jt=Re[Ft],Y?Vt&&i.texSubImage2D(r.TEXTURE_2D,Ft,0,0,zt,ae,Jt):i.texImage2D(r.TEXTURE_2D,Ft,le,zt,ae,Jt);E.generateMipmaps=!1}else if(Y){if(kt){const Ft=fe(It);i.texStorage2D(r.TEXTURE_2D,ne,le,Ft.width,Ft.height)}Vt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,zt,ae,It)}else i.texImage2D(r.TEXTURE_2D,0,le,zt,ae,It);M(E)&&v(Et),Qt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Pt(O,E,Q){if(E.image.length!==6)return;const Et=vt(O,E),Tt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+Q);const xt=s.get(Tt);if(Tt.version!==xt.__version||Et===!0){i.activeTexture(r.TEXTURE0+Q);const Qt=rn.getPrimaries(rn.workingColorSpace),Yt=E.colorSpace===ur?null:rn.getPrimaries(E.colorSpace),_e=E.colorSpace===ur||Qt===Yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Se=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let yt=0;yt<6;yt++)!Se&&!It?zt[yt]=w(E.image[yt],!0,l.maxCubemapSize):zt[yt]=It?E.image[yt].image:E.image[yt],zt[yt]=$e(E,zt[yt]);const ae=zt[0],le=c.convert(E.format,E.colorSpace),Jt=c.convert(E.type),Re=I(E.internalFormat,le,Jt,E.colorSpace),Y=E.isVideoTexture!==!0,kt=xt.__version===void 0||Et===!0,Vt=Tt.dataReady;let ne=z(E,ae);ot(r.TEXTURE_CUBE_MAP,E);let Ft;if(Se){Y&&kt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Re,ae.width,ae.height);for(let yt=0;yt<6;yt++){Ft=zt[yt].mipmaps;for(let re=0;re<Ft.length;re++){const ge=Ft[re];E.format!==Fa?le!==null?Y?Vt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re,0,0,ge.width,ge.height,le,ge.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re,Re,ge.width,ge.height,0,ge.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re,0,0,ge.width,ge.height,le,Jt,ge.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re,Re,ge.width,ge.height,0,le,Jt,ge.data)}}}else{if(Ft=E.mipmaps,Y&&kt){Ft.length>0&&ne++;const yt=fe(zt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Re,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(It){Y?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,zt[yt].width,zt[yt].height,le,Jt,zt[yt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Re,zt[yt].width,zt[yt].height,0,le,Jt,zt[yt].data);for(let re=0;re<Ft.length;re++){const tn=Ft[re].image[yt].image;Y?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re+1,0,0,tn.width,tn.height,le,Jt,tn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re+1,Re,tn.width,tn.height,0,le,Jt,tn.data)}}else{Y?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,le,Jt,zt[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Re,le,Jt,zt[yt]);for(let re=0;re<Ft.length;re++){const ge=Ft[re];Y?Vt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re+1,0,0,le,Jt,ge.image[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re+1,Re,le,Jt,ge.image[yt])}}}M(E)&&v(r.TEXTURE_CUBE_MAP),xt.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,Q,Et,Tt,xt){const Qt=c.convert(Q.format,Q.colorSpace),Yt=c.convert(Q.type),_e=I(Q.internalFormat,Qt,Yt,Q.colorSpace),Se=s.get(E),It=s.get(Q);if(It.__renderTarget=E,!Se.__hasExternalTextures){const zt=Math.max(1,E.width>>xt),ae=Math.max(1,E.height>>xt);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?i.texImage3D(Tt,xt,_e,zt,ae,E.depth,0,Qt,Yt,null):i.texImage2D(Tt,xt,_e,zt,ae,0,Qt,Yt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),Dn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,Tt,It.__webglTexture,0,X(E)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Et,Tt,It.__webglTexture,xt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(O,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const Et=E.depthTexture,Tt=Et&&Et.isDepthTexture?Et.type:null,xt=P(E.stencilBuffer,Tt),Qt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Dn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(E),xt,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(E),xt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qt,r.RENDERBUFFER,O)}else{const Et=E.textures;for(let Tt=0;Tt<Et.length;Tt++){const xt=Et[Tt],Qt=c.convert(xt.format,xt.colorSpace),Yt=c.convert(xt.type),_e=I(xt.internalFormat,Qt,Yt,xt.colorSpace);Dn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(E),_e,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(E),_e,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_e,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(O,E,Q){const Et=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=s.get(E.depthTexture);if(Tt.__renderTarget=E,(!Tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Et){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,E.depthTexture.addEventListener("dispose",H)),Tt.__webglTexture===void 0){Tt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Tt.__webglTexture),ot(r.TEXTURE_CUBE_MAP,E.depthTexture);const Se=c.convert(E.depthTexture.format),It=c.convert(E.depthTexture.type);let zt;E.depthTexture.format===Ps?zt=r.DEPTH_COMPONENT24:E.depthTexture.format===Yr&&(zt=r.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,zt,E.width,E.height,0,Se,It,null)}}else at(E.depthTexture,0);const xt=Tt.__webglTexture,Qt=X(E),Yt=Et?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,_e=E.depthTexture.format===Yr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ps)Dn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Yt,xt,0,Qt):r.framebufferTexture2D(r.FRAMEBUFFER,_e,Yt,xt,0);else if(E.depthTexture.format===Yr)Dn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Yt,xt,0,Qt):r.framebufferTexture2D(r.FRAMEBUFFER,_e,Yt,xt,0);else throw new Error("Unknown depthTexture format")}function Me(O){const E=s.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const Et=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Et){const Tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Et.removeEventListener("dispose",Tt)};Et.addEventListener("dispose",Tt),E.__depthDisposeCallback=Tt}E.__boundDepthTexture=Et}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let Et=0;Et<6;Et++)xe(E.__webglFramebuffer[Et],O,Et);else{const Et=O.texture.mipmaps;Et&&Et.length>0?xe(E.__webglFramebuffer[0],O,0):xe(E.__webglFramebuffer,O,0)}else if(Q){E.__webglDepthbuffer=[];for(let Et=0;Et<6;Et++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Et]),E.__webglDepthbuffer[Et]===void 0)E.__webglDepthbuffer[Et]=r.createRenderbuffer(),ye(E.__webglDepthbuffer[Et],O,!1);else{const Tt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer[Et];r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,xt)}}else{const Et=O.texture.mipmaps;if(Et&&Et.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ye(E.__webglDepthbuffer,O,!1);else{const Tt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,xt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Cn(O,E,Q){const Et=s.get(O);E!==void 0&&_t(Et.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Me(O)}function Le(O){const E=O.texture,Q=s.get(O),Et=s.get(E);O.addEventListener("dispose",k);const Tt=O.textures,xt=O.isWebGLCubeRenderTarget===!0,Qt=Tt.length>1;if(Qt||(Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture()),Et.__version=E.version,f.memory.textures++),xt){Q.__webglFramebuffer=[];for(let Yt=0;Yt<6;Yt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Yt]=[];for(let _e=0;_e<E.mipmaps.length;_e++)Q.__webglFramebuffer[Yt][_e]=r.createFramebuffer()}else Q.__webglFramebuffer[Yt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)Q.__webglFramebuffer[Yt]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Qt)for(let Yt=0,_e=Tt.length;Yt<_e;Yt++){const Se=s.get(Tt[Yt]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&Dn(O)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Yt=0;Yt<Tt.length;Yt++){const _e=Tt[Yt];Q.__webglColorRenderbuffer[Yt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Yt]);const Se=c.convert(_e.format,_e.colorSpace),It=c.convert(_e.type),zt=I(_e.internalFormat,Se,It,_e.colorSpace,O.isXRRenderTarget===!0),ae=X(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,zt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Yt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xt){i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),ot(r.TEXTURE_CUBE_MAP,E);for(let Yt=0;Yt<6;Yt++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)_t(Q.__webglFramebuffer[Yt][_e],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,_e);else _t(Q.__webglFramebuffer[Yt],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0);M(E)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Yt=0,_e=Tt.length;Yt<_e;Yt++){const Se=Tt[Yt],It=s.get(Se);let zt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(zt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(zt,It.__webglTexture),ot(zt,Se),_t(Q.__webglFramebuffer,O,Se,r.COLOR_ATTACHMENT0+Yt,zt,0),M(Se)&&v(zt)}i.unbindTexture()}else{let Yt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Yt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Yt,Et.__webglTexture),ot(Yt,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)_t(Q.__webglFramebuffer[_e],O,E,r.COLOR_ATTACHMENT0,Yt,_e);else _t(Q.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,Yt,0);M(E)&&v(Yt),i.unbindTexture()}O.depthBuffer&&Me(O)}function We(O){const E=O.textures;for(let Q=0,Et=E.length;Q<Et;Q++){const Tt=E[Q];if(M(Tt)){const xt=C(O),Qt=s.get(Tt).__webglTexture;i.bindTexture(xt,Qt),v(xt),i.unbindTexture()}}}const qe=[],me=[];function Qe(O){if(O.samples>0){if(Dn(O)===!1){const E=O.textures,Q=O.width,Et=O.height;let Tt=r.COLOR_BUFFER_BIT;const xt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qt=s.get(O),Yt=E.length>1;if(Yt)for(let Se=0;Se<E.length;Se++)i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const _e=O.texture.mipmaps;_e&&_e.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),Yt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[Se]);const It=s.get(E[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,It,0)}r.blitFramebuffer(0,0,Q,Et,0,0,Q,Et,Tt,r.NEAREST),m===!0&&(qe.length=0,me.length=0,qe.push(r.COLOR_ATTACHMENT0+Se),O.depthBuffer&&O.resolveDepthBuffer===!1&&(qe.push(xt),me.push(xt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Yt)for(let Se=0;Se<E.length;Se++){i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[Se]);const It=s.get(E[Se]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,It,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function X(O){return Math.min(l.maxSamples,O.samples)}function Dn(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Je(O){const E=f.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function $e(O,E){const Q=O.colorSpace,Et=O.format,Tt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==el&&Q!==ur&&(rn.getTransfer(Q)===_n?(Et!==Fa||Tt!==la)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",Q)),E}function fe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=lt,this.resetTextureUnits=st,this.setTexture2D=at,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=dt,this.rebindTextures=Cn,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Dn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function HT(r,t){function i(s,l=ur){let c;const f=rn.getTransfer(l);if(s===la)return r.UNSIGNED_BYTE;if(s===um)return r.UNSIGNED_SHORT_4_4_4_4;if(s===fm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ux)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===fx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===lx)return r.BYTE;if(s===cx)return r.SHORT;if(s===pc)return r.UNSIGNED_SHORT;if(s===cm)return r.INT;if(s===ss)return r.UNSIGNED_INT;if(s===es)return r.FLOAT;if(s===Ns)return r.HALF_FLOAT;if(s===hx)return r.ALPHA;if(s===dx)return r.RGB;if(s===Fa)return r.RGBA;if(s===Ps)return r.DEPTH_COMPONENT;if(s===Yr)return r.DEPTH_STENCIL;if(s===px)return r.RED;if(s===hm)return r.RED_INTEGER;if(s===tl)return r.RG;if(s===dm)return r.RG_INTEGER;if(s===pm)return r.RGBA_INTEGER;if(s===cf||s===uf||s===ff||s===hf)if(f===_n)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===cf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ff)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===cf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ff)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mp||s===Sp||s===yp||s===bp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Mp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ep||s===Tp||s===Ap||s===Rp||s===wp||s===Cp||s===Dp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ep||s===Tp)return f===_n?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ap)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rp)return c.COMPRESSED_R11_EAC;if(s===wp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Cp)return c.COMPRESSED_RG11_EAC;if(s===Dp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Up||s===Lp||s===Np||s===Pp||s===Op||s===Ip||s===Fp||s===Bp||s===zp||s===Hp||s===Gp||s===Vp||s===kp||s===Xp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Up)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Np)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Op)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ip)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xp)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wp||s===qp||s===Yp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Wp)return f===_n?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jp||s===Zp||s===Kp||s===Qp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mc?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VT=`
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

}`;class kT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new bx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wi({vertexShader:GT,fragmentShader:VT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ii(new Tf(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XT extends il{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,g=null,x=null,_=null,y=null,b=null;const w=typeof XRWebGLBinding<"u",M=new kT,v={},C=i.getContextAttributes();let I=null,P=null;const z=[],H=[],k=new Fe;let T=null;const N=new oa;N.viewport=new Xn;const ht=new oa;ht.viewport=new Xn;const V=[N,ht],st=new e1;let lt=null,St=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Pt=z[nt];return Pt===void 0&&(Pt=new Od,z[nt]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let Pt=z[nt];return Pt===void 0&&(Pt=new Od,z[nt]=Pt),Pt.getGripSpace()},this.getHand=function(nt){let Pt=z[nt];return Pt===void 0&&(Pt=new Od,z[nt]=Pt),Pt.getHandSpace()};function at(nt){const Pt=H.indexOf(nt.inputSource);if(Pt===-1)return;const _t=z[Pt];_t!==void 0&&(_t.update(nt.inputSource,nt.frame,d||f),_t.dispatchEvent({type:nt.type,data:nt.inputSource}))}function F(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",B);for(let nt=0;nt<z.length;nt++){const Pt=H[nt];Pt!==null&&(H[nt]=null,z[nt].disconnect(Pt))}lt=null,St=null,M.reset();for(const nt in v)delete v[nt];t.setRenderTarget(I),y=null,_=null,x=null,l=null,P=null,de.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){p=nt,s.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",F),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(k),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,ye=null,xe=null;C.depth&&(xe=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=C.stencil?Yr:Ps,ye=C.stencil?mc:ss);const Me={colorFormat:i.RGBA8,depthFormat:xe,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(Me),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),P=new as(_.textureWidth,_.textureHeight,{format:Fa,type:la,depthTexture:new xc(_.textureWidth,_.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _t={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new as(y.framebufferWidth,y.framebufferHeight,{format:Fa,type:la,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),de.setContext(l),de.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(nt){for(let Pt=0;Pt<nt.removed.length;Pt++){const _t=nt.removed[Pt],ye=H.indexOf(_t);ye>=0&&(H[ye]=null,z[ye].disconnect(_t))}for(let Pt=0;Pt<nt.added.length;Pt++){const _t=nt.added[Pt];let ye=H.indexOf(_t);if(ye===-1){for(let Me=0;Me<z.length;Me++)if(Me>=H.length){H.push(_t),ye=Me;break}else if(H[Me]===null){H[Me]=_t,ye=Me;break}if(ye===-1)break}const xe=z[ye];xe&&xe.connect(_t)}}const dt=new j,bt=new j;function U(nt,Pt,_t){dt.setFromMatrixPosition(Pt.matrixWorld),bt.setFromMatrixPosition(_t.matrixWorld);const ye=dt.distanceTo(bt),xe=Pt.projectionMatrix.elements,Me=_t.projectionMatrix.elements,Cn=xe[14]/(xe[10]-1),Le=xe[14]/(xe[10]+1),We=(xe[9]+1)/xe[5],qe=(xe[9]-1)/xe[5],me=(xe[8]-1)/xe[0],Qe=(Me[8]+1)/Me[0],X=Cn*me,Dn=Cn*Qe,Je=ye/(-me+Qe),$e=Je*-me;if(Pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX($e),nt.translateZ(Je),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),xe[10]===-1)nt.projectionMatrix.copy(Pt.projectionMatrix),nt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse);else{const fe=Cn+Je,O=Le+Je,E=X-$e,Q=Dn+(ye-$e),Et=We*Le/O*fe,Tt=qe*Le/O*fe;nt.projectionMatrix.makePerspective(E,Q,Et,Tt,fe,O),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function J(nt,Pt){Pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let Pt=nt.near,_t=nt.far;M.texture!==null&&(M.depthNear>0&&(Pt=M.depthNear),M.depthFar>0&&(_t=M.depthFar)),st.near=ht.near=N.near=Pt,st.far=ht.far=N.far=_t,(lt!==st.near||St!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),lt=st.near,St=st.far),st.layers.mask=nt.layers.mask|6,N.layers.mask=st.layers.mask&-5,ht.layers.mask=st.layers.mask&-3;const ye=nt.parent,xe=st.cameras;J(st,ye);for(let Me=0;Me<xe.length;Me++)J(xe[Me],ye);xe.length===2?U(st,N,ht):st.projectionMatrix.copy(N.projectionMatrix),ot(nt,st,ye)};function ot(nt,Pt,_t){_t===null?nt.matrix.copy(Pt.matrixWorld):(nt.matrix.copy(_t.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Pt.projectionMatrix),nt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=vc*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(nt){m=nt,_!==null&&(_.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function(nt){return v[nt]};let vt=null;function Kt(nt,Pt){if(g=Pt.getViewerPose(d||f),b=Pt,g!==null){const _t=g.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let ye=!1;_t.length!==st.cameras.length&&(st.cameras.length=0,ye=!0);for(let Le=0;Le<_t.length;Le++){const We=_t[Le];let qe=null;if(y!==null)qe=y.getViewport(We);else{const Qe=x.getViewSubImage(_,We);qe=Qe.viewport,Le===0&&(t.setRenderTargetTextures(P,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(P))}let me=V[Le];me===void 0&&(me=new oa,me.layers.enable(Le),me.viewport=new Xn,V[Le]=me),me.matrix.fromArray(We.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(We.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(qe.x,qe.y,qe.width,qe.height),Le===0&&(st.matrix.copy(me.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),ye===!0&&st.cameras.push(me)}const xe=l.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const Le=x.getDepthInformation(_t[0]);Le&&Le.isValid&&Le.texture&&M.init(Le,l.renderState)}if(xe&&xe.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let Le=0;Le<_t.length;Le++){const We=_t[Le].camera;if(We){let qe=v[We];qe||(qe=new bx,v[We]=qe);const me=x.getCameraImage(We);qe.sourceTexture=me}}}}for(let _t=0;_t<z.length;_t++){const ye=H[_t],xe=z[_t];ye!==null&&xe!==void 0&&xe.update(ye,Pt,d||f)}vt&&vt(nt,Pt),Pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Pt}),b=null}const de=new wx;de.setAnimationLoop(Kt),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const Vr=new Ba,WT=new wn;function qT(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Ex(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,C,I,P){v.isMeshBasicMaterial?c(M,v):v.isMeshLambertMaterial?(c(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&y(M,v,P)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),w(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,C,I):v.isSpriteMaterial?d(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===qi&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===qi&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const C=t.get(v),I=C.envMap,P=C.envMapRotation;I&&(M.envMap.value=I,Vr.copy(P),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),M.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Vr)),M.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,C,I){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*C,M.scale.value=I*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,C){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qi&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function w(M,v){const C=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function YT(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const P=I.program;s.uniformBlockBinding(C,P)}function d(C,I){let P=l[C.id];P===void 0&&(b(C),P=g(C),l[C.id]=P,C.addEventListener("dispose",M));const z=I.program;s.updateUBOMapping(C,z);const H=t.render.frame;c[C.id]!==H&&(_(C),c[C.id]=H)}function g(C){const I=x();C.__bindingPointIndex=I;const P=r.createBuffer(),z=C.__size,H=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,P),P}function x(){for(let C=0;C<p;C++)if(f.indexOf(C)===-1)return f.push(C),C;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const I=l[C.id],P=C.uniforms,z=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let H=0,k=P.length;H<k;H++){const T=Array.isArray(P[H])?P[H]:[P[H]];for(let N=0,ht=T.length;N<ht;N++){const V=T[N];if(y(V,H,N,z)===!0){const st=V.__offset,lt=Array.isArray(V.value)?V.value:[V.value];let St=0;for(let at=0;at<lt.length;at++){const F=lt[at],B=w(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,st+St,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,St),St+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,I,P,z){const H=C.value,k=I+"_"+P;if(z[k]===void 0)return typeof H=="number"||typeof H=="boolean"?z[k]=H:z[k]=H.clone(),!0;{const T=z[k];if(typeof H=="number"||typeof H=="boolean"){if(T!==H)return z[k]=H,!0}else if(T.equals(H)===!1)return T.copy(H),!0}return!1}function b(C){const I=C.uniforms;let P=0;const z=16;for(let k=0,T=I.length;k<T;k++){const N=Array.isArray(I[k])?I[k]:[I[k]];for(let ht=0,V=N.length;ht<V;ht++){const st=N[ht],lt=Array.isArray(st.value)?st.value:[st.value];for(let St=0,at=lt.length;St<at;St++){const F=lt[St],B=w(F),dt=P%z,bt=dt%B.boundary,U=dt+bt;P+=bt,U!==0&&z-U<B.storage&&(P+=z-U),st.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=P,P+=B.storage}}}const H=P%z;return H>0&&(P+=z-H),C.__size=P,C.__cache={},this}function w(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",C),I}function M(C){const I=C.target;I.removeEventListener("dispose",M);const P=f.indexOf(I.__bindingPointIndex);f.splice(P,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function v(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:d,dispose:v}}const jT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $a=null;function ZT(){return $a===null&&($a=new Ny(jT,16,16,tl,Ns),$a.name="DFG_LUT",$a.minFilter=Ri,$a.magFilter=Ri,$a.wrapS=Cs,$a.wrapT=Cs,$a.generateMipmaps=!1,$a.needsUpdate=!0),$a}class KT{constructor(t={}){const{canvas:i=YS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:y=la}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const w=y,M=new Set([pm,dm,hm]),v=new Set([la,ss,pc,mc,um,fm]),C=new Uint32Array(4),I=new Int32Array(4);let P=null,z=null;const H=[],k=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ht=!1;this._outputColorSpace=un;let V=0,st=0,lt=null,St=-1,at=null;const F=new Xn,B=new Xn;let dt=null;const bt=new Xe(0);let U=0,J=i.width,ot=i.height,vt=1,Kt=null,de=null;const nt=new Xn(0,0,J,ot),Pt=new Xn(0,0,J,ot);let _t=!1;const ye=new Mm;let xe=!1,Me=!1;const Cn=new wn,Le=new j,We=new Xn,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Qe(){return lt===null?vt:1}let X=s;function Dn(R,$){return i.getContext(R,$)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${om}`),i.addEventListener("webglcontextlost",re,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",tn,!1),X===null){const $="webgl2";if(X=Dn($,R),X===null)throw Dn($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw nn("WebGLRenderer: "+R.message),R}let Je,$e,fe,O,E,Q,Et,Tt,xt,Qt,Yt,_e,Se,It,zt,ae,le,Jt,Re,Y,kt,Vt,ne;function Ft(){Je=new KE(X),Je.init(),kt=new HT(X,Je),$e=new VE(X,Je,t,kt),fe=new BT(X,Je),$e.reversedDepthBuffer&&_&&fe.buffers.depth.setReversed(!0),O=new $E(X),E=new ET,Q=new zT(X,Je,fe,E,$e,kt,O),Et=new ZE(N),Tt=new a1(X),Vt=new HE(X,Tt),xt=new QE(X,Tt,O,Vt),Qt=new e2(X,xt,Tt,Vt,O),Jt=new t2(X,$e,Q),zt=new kE(E),Yt=new bT(N,Et,Je,$e,Vt,zt),_e=new qT(N,E),Se=new AT,It=new LT(Je),le=new zE(N,Et,fe,Qt,b,m),ae=new FT(N,Qt,$e),ne=new YT(X,O,$e,fe),Re=new GE(X,Je,O),Y=new JE(X,Je,O),O.programs=Yt.programs,N.capabilities=$e,N.extensions=Je,N.properties=E,N.renderLists=Se,N.shadowMap=ae,N.state=fe,N.info=O}Ft(),w!==la&&(T=new i2(w,i.width,i.height,l,c));const yt=new XT(N,X);this.xr=yt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize(J,ot,!1))},this.getSize=function(R){return R.set(J,ot)},this.setSize=function(R,$,mt=!0){if(yt.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,ot=$,i.width=Math.floor(R*vt),i.height=Math.floor($*vt),mt===!0&&(i.style.width=R+"px",i.style.height=$+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(J*vt,ot*vt).floor()},this.setDrawingBufferSize=function(R,$,mt){J=R,ot=$,vt=mt,i.width=Math.floor(R*mt),i.height=Math.floor($*mt),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(w===la){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,$,mt,ct){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,$,mt,ct),fe.viewport(F.copy(nt).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(Pt)},this.setScissor=function(R,$,mt,ct){R.isVector4?Pt.set(R.x,R.y,R.z,R.w):Pt.set(R,$,mt,ct),fe.scissor(B.copy(Pt).multiplyScalar(vt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){fe.setScissorTest(_t=R)},this.setOpaqueSort=function(R){Kt=R},this.setTransparentSort=function(R){de=R},this.getClearColor=function(R){return R.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,mt=!0){let ct=0;if(R){let it=!1;if(lt!==null){const jt=lt.texture.format;it=M.has(jt)}if(it){const jt=lt.texture.type,ie=v.has(jt),Xt=le.getClearColor(),oe=le.getClearAlpha(),ce=Xt.r,Te=Xt.g,Ue=Xt.b;ie?(C[0]=ce,C[1]=Te,C[2]=Ue,C[3]=oe,X.clearBufferuiv(X.COLOR,0,C)):(I[0]=ce,I[1]=Te,I[2]=Ue,I[3]=oe,X.clearBufferiv(X.COLOR,0,I))}else ct|=X.COLOR_BUFFER_BIT}$&&(ct|=X.DEPTH_BUFFER_BIT),mt&&(ct|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&X.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",re,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",tn,!1),le.dispose(),Se.dispose(),It.dispose(),E.dispose(),Et.dispose(),Qt.dispose(),Vt.dispose(),ne.dispose(),Yt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Ci),yt.removeEventListener("sessionend",Fi),ti.stop()};function re(R){R.preventDefault(),gf("WebGLRenderer: Context Lost."),ht=!0}function ge(){gf("WebGLRenderer: Context Restored."),ht=!1;const R=O.autoReset,$=ae.enabled,mt=ae.autoUpdate,ct=ae.needsUpdate,it=ae.type;Ft(),O.autoReset=R,ae.enabled=$,ae.autoUpdate=mt,ae.needsUpdate=ct,ae.type=it}function tn(R){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ye(R){const $=R.target;$.removeEventListener("dispose",Ye),xi($)}function xi(R){Bn(R),E.remove(R)}function Bn(R){const $=E.get(R).programs;$!==void 0&&($.forEach(function(mt){Yt.releaseProgram(mt)}),R.isShaderMaterial&&Yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,mt,ct,it,jt){$===null&&($=qe);const ie=it.isMesh&&it.matrixWorld.determinant()<0,Xt=zn(R,$,mt,ct,it);fe.setMaterial(ct,ie);let oe=mt.index,ce=1;if(ct.wireframe===!0){if(oe=xt.getWireframeAttribute(mt),oe===void 0)return;ce=2}const Te=mt.drawRange,Ue=mt.attributes.position;let $t=Te.start*ce,Ge=(Te.start+Te.count)*ce;jt!==null&&($t=Math.max($t,jt.start*ce),Ge=Math.min(Ge,(jt.start+jt.count)*ce)),oe!==null?($t=Math.max($t,0),Ge=Math.min(Ge,oe.count)):Ue!=null&&($t=Math.max($t,0),Ge=Math.min(Ge,Ue.count));const hn=Ge-$t;if(hn<0||hn===1/0)return;Vt.setup(it,ct,Xt,mt,oe);let an,je=Re;if(oe!==null&&(an=Tt.get(oe),je=Y,je.setIndex(an)),it.isMesh)ct.wireframe===!0?(fe.setLineWidth(ct.wireframeLinewidth*Qe()),je.setMode(X.LINES)):je.setMode(X.TRIANGLES);else if(it.isLine){let xn=ct.linewidth;xn===void 0&&(xn=1),fe.setLineWidth(xn*Qe()),it.isLineSegments?je.setMode(X.LINES):it.isLineLoop?je.setMode(X.LINE_LOOP):je.setMode(X.LINE_STRIP)}else it.isPoints?je.setMode(X.POINTS):it.isSprite&&je.setMode(X.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)_f("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))je.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const xn=it._multiDrawStarts,ue=it._multiDrawCounts,dn=it._multiDrawCount,Be=oe?Tt.get(oe).bytesPerElement:1,Mi=E.get(ct).currentProgram.getUniforms();for(let ri=0;ri<dn;ri++)Mi.setValue(X,"_gl_DrawID",ri),je.render(xn[ri]/Be,ue[ri])}else if(it.isInstancedMesh)je.renderInstances($t,hn,it.count);else if(mt.isInstancedBufferGeometry){const xn=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,ue=Math.min(mt.instanceCount,xn);je.renderInstances($t,hn,ue)}else je.render($t,hn)};function Wn(R,$,mt){R.transparent===!0&&R.side===Oa&&R.forceSinglePass===!1?(R.side=qi,R.needsUpdate=!0,Yi(R,$,mt),R.side=dr,R.needsUpdate=!0,Yi(R,$,mt),R.side=Oa):Yi(R,$,mt)}this.compile=function(R,$,mt=null){mt===null&&(mt=R),z=It.get(mt),z.init($),k.push(z),mt.traverseVisible(function(it){it.isLight&&it.layers.test($.layers)&&(z.pushLight(it),it.castShadow&&z.pushShadow(it))}),R!==mt&&R.traverseVisible(function(it){it.isLight&&it.layers.test($.layers)&&(z.pushLight(it),it.castShadow&&z.pushShadow(it))}),z.setupLights();const ct=new Set;return R.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const jt=it.material;if(jt)if(Array.isArray(jt))for(let ie=0;ie<jt.length;ie++){const Xt=jt[ie];Wn(Xt,mt,it),ct.add(Xt)}else Wn(jt,mt,it),ct.add(jt)}),z=k.pop(),ct},this.compileAsync=function(R,$,mt=null){const ct=this.compile(R,$,mt);return new Promise(it=>{function jt(){if(ct.forEach(function(ie){E.get(ie).currentProgram.isReady()&&ct.delete(ie)}),ct.size===0){it(R);return}setTimeout(jt,10)}Je.get("KHR_parallel_shader_compile")!==null?jt():setTimeout(jt,10)})};let fn=null;function ya(R){fn&&fn(R)}function Ci(){ti.stop()}function Fi(){ti.start()}const ti=new wx;ti.setAnimationLoop(ya),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(R){fn=R,yt.setAnimationLoop(R),R===null?ti.stop():ti.start()},yt.addEventListener("sessionstart",Ci),yt.addEventListener("sessionend",Fi),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const mt=yt.enabled===!0&&yt.isPresenting===!0,ct=T!==null&&(lt===null||mt)&&T.begin(N,lt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera($),$=yt.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,$,lt),z=It.get(R,k.length),z.init($),k.push(z),Cn.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ye.setFromProjectionMatrix(Cn,ns,$.reversedDepth),Me=this.localClippingEnabled,xe=zt.init(this.clippingPlanes,Me),P=Se.get(R,H.length),P.init(),H.push(P),yt.enabled===!0&&yt.isPresenting===!0){const ie=N.xr.getDepthSensingMesh();ie!==null&&Os(ie,$,-1/0,N.sortObjects)}Os(R,$,0,N.sortObjects),P.finish(),N.sortObjects===!0&&P.sort(Kt,de),me=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,me&&le.addToRenderList(P,R),this.info.render.frame++,xe===!0&&zt.beginShadows();const it=z.state.shadowsArray;if(ae.render(it,R,$),xe===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct&&T.hasRenderPass())===!1){const ie=P.opaque,Xt=P.transmissive;if(z.setupLights(),$.isArrayCamera){const oe=$.cameras;if(Xt.length>0)for(let ce=0,Te=oe.length;ce<Te;ce++){const Ue=oe[ce];rs(ie,Xt,R,Ue)}me&&le.render(R);for(let ce=0,Te=oe.length;ce<Te;ce++){const Ue=oe[ce];za(P,R,Ue,Ue.viewport)}}else Xt.length>0&&rs(ie,Xt,R,$),me&&le.render(R),za(P,R,$)}lt!==null&&st===0&&(Q.updateMultisampleRenderTarget(lt),Q.updateRenderTargetMipmap(lt)),ct&&T.end(N),R.isScene===!0&&R.onAfterRender(N,R,$),Vt.resetDefaultState(),St=-1,at=null,k.pop(),k.length>0?(z=k[k.length-1],xe===!0&&zt.setGlobalState(N.clippingPlanes,z.state.camera)):z=null,H.pop(),H.length>0?P=H[H.length-1]:P=null};function Os(R,$,mt,ct){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)mt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ye.intersectsSprite(R)){ct&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Cn);const ie=Qt.update(R),Xt=R.material;Xt.visible&&P.push(R,ie,Xt,mt,We.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ye.intersectsObject(R))){const ie=Qt.update(R),Xt=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),We.copy(ie.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(Cn)),Array.isArray(Xt)){const oe=ie.groups;for(let ce=0,Te=oe.length;ce<Te;ce++){const Ue=oe[ce],$t=Xt[Ue.materialIndex];$t&&$t.visible&&P.push(R,ie,$t,mt,We.z,Ue)}}else Xt.visible&&P.push(R,ie,Xt,mt,We.z,null)}}const jt=R.children;for(let ie=0,Xt=jt.length;ie<Xt;ie++)Os(jt[ie],$,mt,ct)}function za(R,$,mt,ct){const{opaque:it,transmissive:jt,transparent:ie}=R;z.setupLightsView(mt),xe===!0&&zt.setGlobalState(N.clippingPlanes,mt),ct&&fe.viewport(F.copy(ct)),it.length>0&&Bi(it,$,mt),jt.length>0&&Bi(jt,$,mt),ie.length>0&&Bi(ie,$,mt),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function rs(R,$,mt,ct){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ct.id]===void 0){const $t=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ct.id]=new as(1,1,{generateMipmaps:!0,type:$t?Ns:la,minFilter:qr,samples:Math.max(4,$e.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rn.workingColorSpace})}const jt=z.state.transmissionRenderTarget[ct.id],ie=ct.viewport||F;jt.setSize(ie.z*N.transmissionResolutionScale,ie.w*N.transmissionResolutionScale);const Xt=N.getRenderTarget(),oe=N.getActiveCubeFace(),ce=N.getActiveMipmapLevel();N.setRenderTarget(jt),N.getClearColor(bt),U=N.getClearAlpha(),U<1&&N.setClearColor(16777215,.5),N.clear(),me&&le.render(mt);const Te=N.toneMapping;N.toneMapping=is;const Ue=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),z.setupLightsView(ct),xe===!0&&zt.setGlobalState(N.clippingPlanes,ct),Bi(R,mt,ct),Q.updateMultisampleRenderTarget(jt),Q.updateRenderTargetMipmap(jt),Je.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ge=0,hn=$.length;Ge<hn;Ge++){const an=$[Ge],{object:je,geometry:xn,material:ue,group:dn}=an;if(ue.side===Oa&&je.layers.test(ct.layers)){const Be=ue.side;ue.side=qi,ue.needsUpdate=!0,ca(je,mt,ct,xn,ue,dn),ue.side=Be,ue.needsUpdate=!0,$t=!0}}$t===!0&&(Q.updateMultisampleRenderTarget(jt),Q.updateRenderTargetMipmap(jt))}N.setRenderTarget(Xt,oe,ce),N.setClearColor(bt,U),Ue!==void 0&&(ct.viewport=Ue),N.toneMapping=Te}function Bi(R,$,mt){const ct=$.isScene===!0?$.overrideMaterial:null;for(let it=0,jt=R.length;it<jt;it++){const ie=R[it],{object:Xt,geometry:oe,group:ce}=ie;let Te=ie.material;Te.allowOverride===!0&&ct!==null&&(Te=ct),Xt.layers.test(mt.layers)&&ca(Xt,$,mt,oe,Te,ce)}}function ca(R,$,mt,ct,it,jt){R.onBeforeRender(N,$,mt,ct,it,jt),R.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),it.onBeforeRender(N,$,mt,ct,R,jt),it.transparent===!0&&it.side===Oa&&it.forceSinglePass===!1?(it.side=qi,it.needsUpdate=!0,N.renderBufferDirect(mt,$,ct,it,R,jt),it.side=dr,it.needsUpdate=!0,N.renderBufferDirect(mt,$,ct,it,R,jt),it.side=Oa):N.renderBufferDirect(mt,$,ct,it,R,jt),R.onAfterRender(N,$,mt,ct,it,jt)}function Yi(R,$,mt){$.isScene!==!0&&($=qe);const ct=E.get(R),it=z.state.lights,jt=z.state.shadowsArray,ie=it.state.version,Xt=Yt.getParameters(R,it.state,jt,$,mt),oe=Yt.getProgramCacheKey(Xt);let ce=ct.programs;ct.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,ct.fog=$.fog;const Te=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ct.envMap=Et.get(R.envMap||ct.environment,Te),ct.envMapRotation=ct.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,ce===void 0&&(R.addEventListener("dispose",Ye),ce=new Map,ct.programs=ce);let Ue=ce.get(oe);if(Ue!==void 0){if(ct.currentProgram===Ue&&ct.lightsStateVersion===ie)return Un(R,Xt),Ue}else Xt.uniforms=Yt.getUniforms(R),R.onBeforeCompile(Xt,N),Ue=Yt.acquireProgram(Xt,oe),ce.set(oe,Ue),ct.uniforms=Xt.uniforms;const $t=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=zt.uniform),Un(R,Xt),ct.needsLights=Ea(R),ct.lightsStateVersion=ie,ct.needsLights&&($t.ambientLightColor.value=it.state.ambient,$t.lightProbe.value=it.state.probe,$t.directionalLights.value=it.state.directional,$t.directionalLightShadows.value=it.state.directionalShadow,$t.spotLights.value=it.state.spot,$t.spotLightShadows.value=it.state.spotShadow,$t.rectAreaLights.value=it.state.rectArea,$t.ltc_1.value=it.state.rectAreaLTC1,$t.ltc_2.value=it.state.rectAreaLTC2,$t.pointLights.value=it.state.point,$t.pointLightShadows.value=it.state.pointShadow,$t.hemisphereLights.value=it.state.hemi,$t.directionalShadowMatrix.value=it.state.directionalShadowMatrix,$t.spotLightMatrix.value=it.state.spotLightMatrix,$t.spotLightMap.value=it.state.spotLightMap,$t.pointShadowMatrix.value=it.state.pointShadowMatrix),ct.currentProgram=Ue,ct.uniformsList=null,Ue}function ba(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=pf.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Un(R,$){const mt=E.get(R);mt.outputColorSpace=$.outputColorSpace,mt.batching=$.batching,mt.batchingColor=$.batchingColor,mt.instancing=$.instancing,mt.instancingColor=$.instancingColor,mt.instancingMorph=$.instancingMorph,mt.skinning=$.skinning,mt.morphTargets=$.morphTargets,mt.morphNormals=$.morphNormals,mt.morphColors=$.morphColors,mt.morphTargetsCount=$.morphTargetsCount,mt.numClippingPlanes=$.numClippingPlanes,mt.numIntersection=$.numClipIntersection,mt.vertexAlphas=$.vertexAlphas,mt.vertexTangents=$.vertexTangents,mt.toneMapping=$.toneMapping}function zn(R,$,mt,ct,it){$.isScene!==!0&&($=qe),Q.resetTextureUnits();const jt=$.fog,ie=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?$.environment:null,Xt=lt===null?N.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:el,oe=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,ce=Et.get(ct.envMap||ie,oe),Te=ct.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,Ue=!!mt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),$t=!!mt.morphAttributes.position,Ge=!!mt.morphAttributes.normal,hn=!!mt.morphAttributes.color;let an=is;ct.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(an=N.toneMapping);const je=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,xn=je!==void 0?je.length:0,ue=E.get(ct),dn=z.state.lights;if(xe===!0&&(Me===!0||R!==at)){const Ln=R===at&&ct.id===St;zt.setState(ct,R,Ln)}let Be=!1;ct.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==dn.state.version||ue.outputColorSpace!==Xt||it.isBatchedMesh&&ue.batching===!1||!it.isBatchedMesh&&ue.batching===!0||it.isBatchedMesh&&ue.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&ue.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&ue.instancing===!1||!it.isInstancedMesh&&ue.instancing===!0||it.isSkinnedMesh&&ue.skinning===!1||!it.isSkinnedMesh&&ue.skinning===!0||it.isInstancedMesh&&ue.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&ue.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&ue.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&ue.instancingMorph===!1&&it.morphTexture!==null||ue.envMap!==ce||ct.fog===!0&&ue.fog!==jt||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==zt.numPlanes||ue.numIntersection!==zt.numIntersection)||ue.vertexAlphas!==Te||ue.vertexTangents!==Ue||ue.morphTargets!==$t||ue.morphNormals!==Ge||ue.morphColors!==hn||ue.toneMapping!==an||ue.morphTargetsCount!==xn)&&(Be=!0):(Be=!0,ue.__version=ct.version);let Mi=ue.currentProgram;Be===!0&&(Mi=Yi(ct,$,it));let ri=!1,ei=!1,ji=!1;const sn=Mi.getUniforms(),bn=ue.uniforms;if(fe.useProgram(Mi.program)&&(ri=!0,ei=!0,ji=!0),ct.id!==St&&(St=ct.id,ei=!0),ri||at!==R){fe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),sn.setValue(X,"projectionMatrix",R.projectionMatrix),sn.setValue(X,"viewMatrix",R.matrixWorldInverse);const Di=sn.map.cameraPosition;Di!==void 0&&Di.setValue(X,Le.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&sn.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&sn.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),at!==R&&(at=R,ei=!0,ji=!0)}if(ue.needsLights&&(dn.state.directionalShadowMap.length>0&&sn.setValue(X,"directionalShadowMap",dn.state.directionalShadowMap,Q),dn.state.spotShadowMap.length>0&&sn.setValue(X,"spotShadowMap",dn.state.spotShadowMap,Q),dn.state.pointShadowMap.length>0&&sn.setValue(X,"pointShadowMap",dn.state.pointShadowMap,Q)),it.isSkinnedMesh){sn.setOptional(X,it,"bindMatrix"),sn.setOptional(X,it,"bindMatrixInverse");const Ln=it.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),sn.setValue(X,"boneTexture",Ln.boneTexture,Q))}it.isBatchedMesh&&(sn.setOptional(X,it,"batchingTexture"),sn.setValue(X,"batchingTexture",it._matricesTexture,Q),sn.setOptional(X,it,"batchingIdTexture"),sn.setValue(X,"batchingIdTexture",it._indirectTexture,Q),sn.setOptional(X,it,"batchingColorTexture"),it._colorsTexture!==null&&sn.setValue(X,"batchingColorTexture",it._colorsTexture,Q));const zi=mt.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&Jt.update(it,mt,Mi),(ei||ue.receiveShadow!==it.receiveShadow)&&(ue.receiveShadow=it.receiveShadow,sn.setValue(X,"receiveShadow",it.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&$.environment!==null&&(bn.envMapIntensity.value=$.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=ZT()),ei&&(sn.setValue(X,"toneMappingExposure",N.toneMappingExposure),ue.needsLights&&mr(bn,ji),jt&&ct.fog===!0&&_e.refreshFogUniforms(bn,jt),_e.refreshMaterialUniforms(bn,ct,vt,ot,z.state.transmissionRenderTarget[R.id]),pf.upload(X,ba(ue),bn,Q)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(pf.upload(X,ba(ue),bn,Q),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&sn.setValue(X,"center",it.center),sn.setValue(X,"modelViewMatrix",it.modelViewMatrix),sn.setValue(X,"normalMatrix",it.normalMatrix),sn.setValue(X,"modelMatrix",it.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Ln=ct.uniformsGroups;for(let Di=0,Zi=Ln.length;Di<Zi;Di++){const gr=Ln[Di];ne.update(gr,Mi),ne.bind(gr,Mi)}}return Mi}function mr(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Ea(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(R,$,mt){const ct=E.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=$,E.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:mt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const mt=E.get(R);mt.__webglFramebuffer=$,mt.__useDefaultFramebuffer=$===void 0};const Ha=X.createFramebuffer();this.setRenderTarget=function(R,$=0,mt=0){lt=R,V=$,st=mt;let ct=null,it=!1,jt=!1;if(R){const Xt=E.get(R);if(Xt.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(X.FRAMEBUFFER,Xt.__webglFramebuffer),F.copy(R.viewport),B.copy(R.scissor),dt=R.scissorTest,fe.viewport(F),fe.scissor(B),fe.setScissorTest(dt),St=-1;return}else if(Xt.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(Xt.__hasExternalTextures)Q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Te=R.depthTexture;if(Xt.__boundDepthTexture!==Te){if(Te!==null&&E.has(Te)&&(R.width!==Te.image.width||R.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}const oe=R.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(jt=!0);const ce=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ce[$])?ct=ce[$][mt]:ct=ce[$],it=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?ct=E.get(R).__webglMultisampledFramebuffer:Array.isArray(ce)?ct=ce[mt]:ct=ce,F.copy(R.viewport),B.copy(R.scissor),dt=R.scissorTest}else F.copy(nt).multiplyScalar(vt).floor(),B.copy(Pt).multiplyScalar(vt).floor(),dt=_t;if(mt!==0&&(ct=Ha),fe.bindFramebuffer(X.FRAMEBUFFER,ct)&&fe.drawBuffers(R,ct),fe.viewport(F),fe.scissor(B),fe.setScissorTest(dt),it){const Xt=E.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+$,Xt.__webglTexture,mt)}else if(jt){const Xt=$;for(let oe=0;oe<R.textures.length;oe++){const ce=E.get(R.textures[oe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+oe,ce.__webglTexture,mt,Xt)}}else if(R!==null&&mt!==0){const Xt=E.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Xt.__webglTexture,mt)}St=-1},this.readRenderTargetPixels=function(R,$,mt,ct,it,jt,ie,Xt=0){if(!(R&&R.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ie!==void 0&&(oe=oe[ie]),oe){fe.bindFramebuffer(X.FRAMEBUFFER,oe);try{const ce=R.textures[Xt],Te=ce.format,Ue=ce.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Xt),!$e.textureFormatReadable(Te)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ue)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ct&&mt>=0&&mt<=R.height-it&&X.readPixels($,mt,ct,it,kt.convert(Te),kt.convert(Ue),jt)}finally{const ce=lt!==null?E.get(lt).__webglFramebuffer:null;fe.bindFramebuffer(X.FRAMEBUFFER,ce)}}},this.readRenderTargetPixelsAsync=async function(R,$,mt,ct,it,jt,ie,Xt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ie!==void 0&&(oe=oe[ie]),oe)if($>=0&&$<=R.width-ct&&mt>=0&&mt<=R.height-it){fe.bindFramebuffer(X.FRAMEBUFFER,oe);const ce=R.textures[Xt],Te=ce.format,Ue=ce.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Xt),!$e.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,$t),X.bufferData(X.PIXEL_PACK_BUFFER,jt.byteLength,X.STREAM_READ),X.readPixels($,mt,ct,it,kt.convert(Te),kt.convert(Ue),0);const Ge=lt!==null?E.get(lt).__webglFramebuffer:null;fe.bindFramebuffer(X.FRAMEBUFFER,Ge);const hn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await jS(X,hn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,$t),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,jt),X.deleteBuffer($t),X.deleteSync(hn),jt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,mt=0){const ct=Math.pow(2,-mt),it=Math.floor(R.image.width*ct),jt=Math.floor(R.image.height*ct),ie=$!==null?$.x:0,Xt=$!==null?$.y:0;Q.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,mt,0,0,ie,Xt,it,jt),fe.unbindTexture()};const Kr=X.createFramebuffer(),Qr=X.createFramebuffer();this.copyTextureToTexture=function(R,$,mt=null,ct=null,it=0,jt=0){let ie,Xt,oe,ce,Te,Ue,$t,Ge,hn;const an=R.isCompressedTexture?R.mipmaps[jt]:R.image;if(mt!==null)ie=mt.max.x-mt.min.x,Xt=mt.max.y-mt.min.y,oe=mt.isBox3?mt.max.z-mt.min.z:1,ce=mt.min.x,Te=mt.min.y,Ue=mt.isBox3?mt.min.z:0;else{const bn=Math.pow(2,-it);ie=Math.floor(an.width*bn),Xt=Math.floor(an.height*bn),R.isDataArrayTexture?oe=an.depth:R.isData3DTexture?oe=Math.floor(an.depth*bn):oe=1,ce=0,Te=0,Ue=0}ct!==null?($t=ct.x,Ge=ct.y,hn=ct.z):($t=0,Ge=0,hn=0);const je=kt.convert($.format),xn=kt.convert($.type);let ue;$.isData3DTexture?(Q.setTexture3D($,0),ue=X.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Q.setTexture2DArray($,0),ue=X.TEXTURE_2D_ARRAY):(Q.setTexture2D($,0),ue=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,$.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,$.unpackAlignment);const dn=X.getParameter(X.UNPACK_ROW_LENGTH),Be=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Mi=X.getParameter(X.UNPACK_SKIP_PIXELS),ri=X.getParameter(X.UNPACK_SKIP_ROWS),ei=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,an.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,an.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ce),X.pixelStorei(X.UNPACK_SKIP_ROWS,Te),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ue);const ji=R.isDataArrayTexture||R.isData3DTexture,sn=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const bn=E.get(R),zi=E.get($),Ln=E.get(bn.__renderTarget),Di=E.get(zi.__renderTarget);fe.bindFramebuffer(X.READ_FRAMEBUFFER,Ln.__webglFramebuffer),fe.bindFramebuffer(X.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Zi=0;Zi<oe;Zi++)ji&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(R).__webglTexture,it,Ue+Zi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get($).__webglTexture,jt,hn+Zi)),X.blitFramebuffer(ce,Te,ie,Xt,$t,Ge,ie,Xt,X.DEPTH_BUFFER_BIT,X.NEAREST);fe.bindFramebuffer(X.READ_FRAMEBUFFER,null),fe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(it!==0||R.isRenderTargetTexture||E.has(R)){const bn=E.get(R),zi=E.get($);fe.bindFramebuffer(X.READ_FRAMEBUFFER,Kr),fe.bindFramebuffer(X.DRAW_FRAMEBUFFER,Qr);for(let Ln=0;Ln<oe;Ln++)ji?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bn.__webglTexture,it,Ue+Ln):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,bn.__webglTexture,it),sn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,zi.__webglTexture,jt,hn+Ln):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,zi.__webglTexture,jt),it!==0?X.blitFramebuffer(ce,Te,ie,Xt,$t,Ge,ie,Xt,X.COLOR_BUFFER_BIT,X.NEAREST):sn?X.copyTexSubImage3D(ue,jt,$t,Ge,hn+Ln,ce,Te,ie,Xt):X.copyTexSubImage2D(ue,jt,$t,Ge,ce,Te,ie,Xt);fe.bindFramebuffer(X.READ_FRAMEBUFFER,null),fe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else sn?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(ue,jt,$t,Ge,hn,ie,Xt,oe,je,xn,an.data):$.isCompressedArrayTexture?X.compressedTexSubImage3D(ue,jt,$t,Ge,hn,ie,Xt,oe,je,an.data):X.texSubImage3D(ue,jt,$t,Ge,hn,ie,Xt,oe,je,xn,an):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,jt,$t,Ge,ie,Xt,je,xn,an.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,jt,$t,Ge,an.width,an.height,je,an.data):X.texSubImage2D(X.TEXTURE_2D,jt,$t,Ge,ie,Xt,je,xn,an);X.pixelStorei(X.UNPACK_ROW_LENGTH,dn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Be),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Mi),X.pixelStorei(X.UNPACK_SKIP_ROWS,ri),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ei),jt===0&&$.generateMipmaps&&X.generateMipmap(ue),fe.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),fe.unbindTexture()},this.resetState=function(){V=0,st=0,lt=null,fe.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=rn._getDrawingBufferColorSpace(t),i.unpackColorSpace=rn._getUnpackColorSpace()}}const Mc=.0002959122083,QT=24612315e-1,JT=Date.UTC(2026,6,10),$T=(QT-2451545)/36525,tA=["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"],Zv={Sun:1,Mercury:166e-9,Venus:245e-8,Earth:3e-6,Mars:323e-9,Jupiter:954e-6,Saturn:286e-6,Uranus:436e-7,Neptune:515e-7,Pluto:655e-11},eA={Mercury:{a:[.38709927,37e-8],e:[.20563593,1906e-8],I:[7.00497902,-.00594749],L:[252.2503235,149472.67411175],varpi:[77.45779628,.16047689],Omega:[48.33076593,-.12534081]},Venus:{a:[.72333566,39e-7],e:[.00677672,-4107e-8],I:[3.39467605,-7889e-7],L:[181.9790995,58517.81538729],varpi:[131.60246718,.00268329],Omega:[76.67984255,-.27769418]},Earth:{a:[1.00000261,562e-8],e:[.01671123,-4392e-8],I:[-1531e-8,-.01294668],L:[100.46457166,35999.37244981],varpi:[102.93768193,.32327364],Omega:[0,0]},Mars:{a:[1.52371034,1847e-8],e:[.0933941,7882e-8],I:[1.84969142,-.00813131],L:[-4.55343205,19140.30268499],varpi:[-23.94362959,.44441088],Omega:[49.55953891,-.29257343]},Jupiter:{a:[5.202887,-11607e-8],e:[.04838624,-13253e-8],I:[1.30439695,-.00183714],L:[34.39644051,3034.74612775],varpi:[14.72847983,.21252668],Omega:[100.47390909,.20469106]},Saturn:{a:[9.53667594,-.0012506],e:[.05386179,-50991e-8],I:[2.48599187,.00193609],L:[49.95424423,1222.49362201],varpi:[92.59887831,-.41897216],Omega:[113.66242448,-.28867794]},Uranus:{a:[19.18916464,-.00196176],e:[.04725744,-4397e-8],I:[.77263783,-.00242939],L:[313.23810451,428.48202785],varpi:[170.9542763,.40805281],Omega:[74.01692503,.04240589]},Neptune:{a:[30.06992276,26291e-8],e:[.00859048,5105e-8],I:[1.77004347,35372e-8],L:[-55.12002969,218.45945325],varpi:[44.96476227,-.32241464],Omega:[131.78422574,-.00508664]},Pluto:{a:[39.48211675,-31596e-8],e:[.2488273,517e-7],I:[17.14001206,4818e-8],L:[238.92903833,145.20780515],varpi:[224.06891629,-.04062942],Omega:[110.30393684,-.01183482]}},sf=Math.PI/180,yf=Math.PI*2,uc=r=>(r%=yf,r<0?r+yf:r);function nA(r,t){let i=t<.8?r:Math.PI;for(let s=0;s<12;s++){const l=i-t*Math.sin(i)-r,c=1-t*Math.cos(i),f=l/c;if(i-=f,Math.abs(f)<1e-13)break}return i}function iA(r,t,i,s,l,c,f){const p=nA(uc(c),t),m=Math.cos(p),d=Math.sin(p),g=Math.sqrt(1-t*t),x=r*(m-t),_=r*g*d,y=Math.sqrt(f/(r*r*r)),b=1-t*m,w=-r*y*d/b,M=r*y*g*m/b,v=Math.cos(s),C=Math.sin(s),I=Math.cos(i),P=Math.sin(i),z=Math.cos(l),H=Math.sin(l),k=v*z-C*H*I,T=-v*H-C*z*I,N=C*z+v*H*I,ht=-C*H+v*z*I,V=H*P,st=z*P;return{x:k*x+T*_,y:N*x+ht*_,z:V*x+st*_,vx:k*w+T*M,vy:N*w+ht*M,vz:V*w+st*M}}function aA(r=$T){const t=[{name:"Sun",m:1,x:0,y:0,z:0,vx:0,vy:0,vz:0}];for(const d of tA){if(d==="Sun")continue;const g=eA[d],x=g.a[0]+g.a[1]*r,_=g.e[0]+g.e[1]*r,y=(g.I[0]+g.I[1]*r)*sf,b=(g.L[0]+g.L[1]*r)*sf,w=(g.varpi[0]+g.varpi[1]*r)*sf,M=(g.Omega[0]+g.Omega[1]*r)*sf,v=w-M,C=b-w,I=Mc*(1+Zv[d]),P=iA(x,_,y,M,v,C,I);t.push({name:d,m:Zv[d],...P})}let i=0,s=0,l=0,c=0,f=0,p=0,m=0;for(const d of t)i+=d.m,s+=d.m*d.vx,l+=d.m*d.vy,c+=d.m*d.vz,f+=d.m*d.x,p+=d.m*d.y,m+=d.m*d.z;for(const d of t)d.vx-=s/i,d.vy-=l/i,d.vz-=c/i,d.x-=f/i,d.y-=p/i,d.z-=m/i;return t}const Kv=1e-10,sm=Math.cbrt(2),Qv=1/(2-sm),sA=-sm/(2-sm);class rA{bodies;t=0;ax;ay;az;constructor(t){this.bodies=t??aA();const i=this.bodies.length;this.ax=new Float64Array(i),this.ay=new Float64Array(i),this.az=new Float64Array(i),this.computeAccel()}computeAccel(){const t=this.bodies,i=t.length,s=this.ax,l=this.ay,c=this.az;s.fill(0),l.fill(0),c.fill(0);for(let f=0;f<i;f++){const p=t[f];for(let m=f+1;m<i;m++){const d=t[m],g=d.x-p.x,x=d.y-p.y,_=d.z-p.z,y=g*g+x*x+_*_+Kv,b=Mc/(y*Math.sqrt(y)),w=b*d.m,M=b*p.m;s[f]+=g*w,l[f]+=x*w,c[f]+=_*w,s[m]-=g*M,l[m]-=x*M,c[m]-=_*M}}}kdk(t){const i=this.bodies,s=i.length,l=this.ax,c=this.ay,f=this.az,p=t/2;for(let m=0;m<s;m++){const d=i[m];d.vx+=l[m]*p,d.vy+=c[m]*p,d.vz+=f[m]*p}for(let m=0;m<s;m++){const d=i[m];d.x+=d.vx*t,d.y+=d.vy*t,d.z+=d.vz*t}this.computeAccel();for(let m=0;m<s;m++){const d=i[m];d.vx+=l[m]*p,d.vy+=c[m]*p,d.vz+=f[m]*p}}step(t){this.kdk(Qv*t),this.kdk(sA*t),this.kdk(Qv*t)}advance(t,i=.25,s=1600){if(!(t>0))return 0;let l=Math.ceil(t/i);l>s&&(l=s,t=l*i);const c=t/l;for(let f=0;f<l;f++)this.step(c);return this.t+=t,t}energy(){const t=this.bodies,i=t.length;let s=0;for(let l=0;l<i;l++){const c=t[l];s+=.5*c.m*(c.vx*c.vx+c.vy*c.vy+c.vz*c.vz);for(let f=l+1;f<i;f++){const p=t[f],m=p.x-c.x,d=p.y-c.y,g=p.z-c.z;s-=Mc*c.m*p.m/Math.sqrt(m*m+d*d+g*g+Kv)}}return s}}function Jv(r,t,i,s,l,c,f){const p=Math.sqrt(r*r+t*t+i*i),m=s*s+l*l+c*c,d=t*c-i*l,g=i*s-r*c,x=r*l-t*s,_=Math.sqrt(d*d+g*g+x*x),y=r*s+t*l+i*c,b=m/f-1/p,w=y/f,M=b*r-w*s,v=b*t-w*l,C=b*i-w*c,I=Math.sqrt(M*M+v*v+C*C),P=1/(2/p-m/f),z=Math.acos(Math.min(1,Math.max(-1,x/_))),H=-g,k=d,T=Math.sqrt(H*H+k*k),N=T>1e-12?Math.atan2(k,H):0;let ht,V;if(I>1e-9){T>1e-12?ht=Math.atan2((C*(d*d+g*g)+x*(H*v-k*M))/(T*_),(H*M+k*v)/T):ht=Math.atan2(v,M);const st=(M*r+v*t+C*i)/(I*p);V=Math.acos(Math.min(1,Math.max(-1,st))),y<0&&(V=yf-V)}else ht=0,V=Math.atan2(t,r);return{a:P,e:I,i:z,Omega:uc(N),w:uc(ht),nu:uc(V),varpi:uc(N+ht)}}function oA(r,t){const i=Math.floor(t.length/3);if(!(r.a>0)||!(r.e>=0)||r.e>=.999999||!isFinite(r.a))return!1;const s=Math.cos(r.Omega),l=Math.sin(r.Omega),c=Math.cos(r.i),f=Math.sin(r.i),p=Math.cos(r.w),m=Math.sin(r.w),d=s*p-l*m*c,g=-s*m-l*p*c,x=l*p+s*m*c,_=-l*m+s*p*c,y=m*f,b=p*f,w=r.a*(1-r.e*r.e);for(let M=0;M<i;M++){const v=M/i*yf,C=w/(1+r.e*Math.cos(v)),I=C*Math.cos(v),P=C*Math.sin(v);t[3*M]=d*I+g*P,t[3*M+1]=x*I+_*P,t[3*M+2]=y*I+b*P}return!0}const lA="/SolarHarmonicsConsole/assets/Earth_from_Space_1773586048704-9rjcG3YA.jpg",cA="/SolarHarmonicsConsole/assets/Earth_30_year_comparison_pillars_1773586048704-Dg86GCIW.jpg",cn=(r,t,i)=>Math.max(t,Math.min(i,r)),ra=r=>r*Math.PI/180,On=(r,t,i)=>r+(t-r)*i,cr=()=>{let r=0,t=0;for(;r===0;)r=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*t)},uA="https://www.solarsystemscope.com/textures/download",wf="https://cdn.jsdelivr.net/npm/three-globe@2.34.0/example/img",rf="https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images",$v={Venus:[`${rf}/venusmap.jpg`],Mars:[`${rf}/marsmap1k.jpg`],Jupiter:[`${rf}/jupitermap.jpg`],Pluto:[`${rf}/plutomap1k.jpg`]},fA=new Set(["Jupiter","Saturn","Uranus","Neptune","Pluto"]),hA=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"],dA={Sun:{kind:"G2V Main-Sequence Star",blurb:"The star at the heart of our solar system, holding 99.86% of its total mass. A churning ball of hydrogen plasma powered by nuclear fusion, the Sun converts about 4 million tonnes of matter into energy every second — the light that drives weather, ocean currents, and photosynthesis on Earth.",stats:[["Diameter","1,392,700 km (109 × Earth)"],["Mass","1.99 × 10³⁰ kg (333,000 × Earth)"],["Surface temp","5,505 °C"],["Core temp","~15,000,000 °C"],["Rotation period","~25.4 days (equator)"],["Composition","≈73% hydrogen, 25% helium"],["Age","~4.6 billion years"]]},Mercury:{kind:"Terrestrial Planet",blurb:"The smallest planet and the closest to the Sun, Mercury is a cratered, airless world that looks much like our Moon. With almost no atmosphere to trap heat, it endures the most extreme temperature swings in the solar system — scorching days and frigid nights.",stats:[["Diameter","4,879 km"],["Mass","3.30 × 10²³ kg"],["Distance from Sun","57.9 M km (0.39 AU)"],["Year length","88 Earth days"],["Day (rotation)","58.6 Earth days"],["Surface temp","−173 to 427 °C"],["Moons","0"]]},Venus:{kind:"Terrestrial Planet",blurb:"Venus is Earth’s hostile twin — nearly the same size, but wrapped in a crushing carbon-dioxide atmosphere topped with clouds of sulfuric acid. A runaway greenhouse effect makes it the hottest planet, and it spins backwards so slowly that its day outlasts its year.",stats:[["Diameter","12,104 km"],["Mass","4.87 × 10²⁴ kg"],["Distance from Sun","108.2 M km (0.72 AU)"],["Year length","224.7 Earth days"],["Day (rotation)","243 Earth days (retrograde)"],["Surface temp","464 °C (hottest planet)"],["Surface pressure","92 × Earth"],["Moons","0"]]},Earth:{kind:"Terrestrial Planet",blurb:"Our home — the only world known to harbor life. Liquid water covers 71% of its surface, a global magnetic field and thick atmosphere shield it from radiation, and plate tectonics continually resurface it. Its large Moon steadies the axial tilt that gives us stable seasons.",stats:[["Diameter","12,742 km"],["Mass","5.97 × 10²⁴ kg"],["Distance from Sun","149.6 M km (1.00 AU)"],["Year length","365.25 days"],["Day (rotation)","23.9 hours"],["Average temp","15 °C"],["Axial tilt","23.4°"],["Moons","1 (the Moon)"]]},Mars:{kind:"Terrestrial Planet",blurb:"The Red Planet owes its color to iron-oxide dust. Mars hosts the solar system’s tallest volcano, Olympus Mons, and a canyon system that would stretch across the United States. Dry riverbeds and minerals show it was once warm and wet — the prime target in the search for past life.",stats:[["Diameter","6,779 km"],["Mass","6.42 × 10²³ kg"],["Distance from Sun","227.9 M km (1.52 AU)"],["Year length","687 Earth days"],["Day (rotation)","24.6 hours"],["Average temp","−63 °C"],["Moons","2 (Phobos & Deimos)"]]},Jupiter:{kind:"Gas Giant",blurb:"The giant of the solar system — more than twice as massive as all the other planets combined. Its banded clouds churn with storms, including the Great Red Spot, a tempest wider than Earth that has raged for centuries. Its huge family of moons is a miniature planetary system.",stats:[["Diameter","139,820 km (11 × Earth)"],["Mass","1.90 × 10²⁷ kg (318 × Earth)"],["Distance from Sun","778.5 M km (5.20 AU)"],["Year length","11.9 Earth years"],["Day (rotation)","9.9 hours (fastest)"],["Cloud-top temp","−108 °C"],["Moons","95 known"]]},Saturn:{kind:"Gas Giant",blurb:"The jewel of the solar system, ringed by billions of ice fragments spanning some 282,000 km yet only tens of meters thick. Saturn is the least dense planet — lighter than water — and its moon family includes Titan, the only moon with a thick atmosphere.",stats:[["Diameter","116,460 km (9.4 × Earth)"],["Mass","5.68 × 10²⁶ kg (95 × Earth)"],["Distance from Sun","1.43 B km (9.54 AU)"],["Year length","29.4 Earth years"],["Day (rotation)","10.7 hours"],["Cloud-top temp","−139 °C"],["Ring span","~282,000 km"],["Moons","274 known (most of any planet)"]]},Uranus:{kind:"Ice Giant",blurb:"Uranus rolls around the Sun on its side — tipped almost 98°, likely by an ancient giant impact — so its poles take turns facing the Sun for 42 years at a time. Methane in its atmosphere gives it a serene teal color, and it has the coldest atmosphere of any planet.",stats:[["Diameter","50,724 km (4 × Earth)"],["Mass","8.68 × 10²⁵ kg (14.5 × Earth)"],["Distance from Sun","2.87 B km (19.2 AU)"],["Year length","84 Earth years"],["Day (rotation)","17.2 hours (retrograde)"],["Cloud-top temp","−197 °C (coldest atmosphere)"],["Axial tilt","97.8°"],["Moons","28 known"]]},Neptune:{kind:"Ice Giant",blurb:"The most distant planet, a deep cobalt world discovered in 1846 by mathematics before it was seen through a telescope. Despite receiving the least sunlight, Neptune hosts the fastest winds in the solar system — supersonic jets reaching 2,100 km/h.",stats:[["Diameter","49,244 km (3.9 × Earth)"],["Mass","1.02 × 10²⁶ kg (17 × Earth)"],["Distance from Sun","4.50 B km (30.1 AU)"],["Year length","164.8 Earth years"],["Day (rotation)","16.1 hours"],["Cloud-top temp","−201 °C"],["Winds","up to 2,100 km/h (fastest)"],["Moons","16 known"]]},Pluto:{kind:"Dwarf Planet",blurb:"The king of the Kuiper Belt, demoted from full planethood in 2006 but no less fascinating. New Horizons revealed a world with a vast heart-shaped nitrogen glacier, blue atmospheric haze, and mountains of water ice. Its moon Charon is so large the two orbit like a double world.",stats:[["Diameter","2,377 km (0.19 × Earth)"],["Mass","1.31 × 10²² kg"],["Distance from Sun","5.9 B km avg (39.5 AU)"],["Year length","248 Earth years"],["Day (rotation)","6.4 Earth days (retrograde)"],["Surface temp","−229 °C"],["Moons","5 (incl. Charon)"]]}},pA=`${wf}/earth-night.jpg`,mA=`${wf}/earth-water.png`,gA=`${wf}/earth-topology.png`,_A=`
  varying vec2 vUv;
  varying vec3 vNormal;
  void main(){
    vUv = uv;
    vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,vA=`
  uniform sampler2D dayMap;
  uniform vec3 sunDir;
  varying vec2 vUv;
  varying vec3 vNormal;
  void main(){
    float NdotL = dot(normalize(vNormal), sunDir);
    float dayFactor = smoothstep(-0.15, 0.25, NdotL);
    vec3 col = texture2D(dayMap, vUv).rgb;
    gl_FragColor = vec4(col * (0.035 + 0.965 * dayFactor), 1.0);
  }
`,xA=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  void main(){
    vUv = uv;
    vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,MA=`
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
`;function SA(){const r=Pn.useRef(null),t=Pn.useRef(0),i=1,s=4e3,[l,c]=Pn.useState(30),[f,p]=Pn.useState(()=>TA(30,i,s)),m=Pn.useRef(l);Pn.useEffect(()=>{m.current=l},[l]);const[d,g]=Pn.useState(12e3),x=Pn.useRef(d);Pn.useEffect(()=>{x.current=d},[d]);const[_,y]=Pn.useState(6e4),b=Pn.useRef(_);Pn.useEffect(()=>{b.current=_},[_]);const w=Pn.useRef(-Math.PI/4),M=Pn.useRef(.5),v=Pn.useRef(620),C=hA,[I,P]=Pn.useState("Earth"),[z,H]=Pn.useState(1),[k,T]=Pn.useState(0),N=Pn.useRef(null),ht=Pn.useRef({}),[V,st]=Pn.useState(null),lt=Pn.useRef(null),St=Pn.useRef(null),[at,F]=Pn.useState(!1);return Pn.useEffect(()=>{const B=r.current,dt=B.clientWidth||window.innerWidth,bt=B.clientHeight||window.innerHeight;let U;try{U=new KT({antialias:!0})}catch{F(!0);return}U.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),U.setSize(dt,bt),U.outputColorSpace=un,U.toneMapping=lm,U.toneMappingExposure=1.4,B.appendChild(U.domElement);const J=new Ay;J.background=new Xe(0);const ot=new oa(60,dt/bt,.1,12e4);J.userData._spinUpdates=[];const vt=30,Kt=365.25,de=vt*1,nt=new rA,Pt={};nt.bodies.forEach((L,W)=>{Pt[L.name]=W});const _t=nt.bodies[Pt.Sun],ye={};for(const L of C){const W=nt.bodies[Pt[L]];ye[L]={x:W.x-_t.x,y:W.y-_t.y,z:W.z-_t.z,vx:W.vx-_t.vx,vy:W.vy-_t.vy,vz:W.vz-_t.vz}}const xe=L=>{const W=nt.bodies[Pt[L]];return{x:W.x-_t.x,y:W.y-_t.y,z:W.z-_t.z,vx:W.vx-_t.vx,vy:W.vy-_t.vy,vz:W.vz-_t.vz}},Me=(L,W)=>{const Z=nt.bodies[Pt[L]];W.set((Z.x-_t.x)*vt,(Z.z-_t.z)*vt,(Z.y-_t.y)*vt)},Cn=L=>{const W=xe(L);return Jv(W.x,W.y,W.z,W.vx,W.vy,W.vz,Mc*(1+nt.bodies[Pt[L]].m))},Le={};for(const L of C)Le[L]=Cn(L);const We=()=>{const L=xe("Jupiter");return Math.atan2(L.y,L.x)},qe={Mercury:1,Venus:1.8,Earth:2.2,Mars:1.6,Jupiter:5.6,Saturn:4.8,Uranus:3.4,Neptune:3.1,Pluto:2.4},me=L=>(Qe.push(()=>L.dispose()),L),Qe=[];(()=>{const L=document.createElement("canvas"),W=64;L.width=L.height=W;const Z=L.getContext("2d").createRadialGradient(W/2,W/2,0,W/2,W/2,W/2);Z.addColorStop(0,"#fff"),Z.addColorStop(1,"#fff0");const D=L.getContext("2d");D.fillStyle=Z,D.fillRect(0,0,W,W);const K=me(new _i(L));return K.colorSpace=un,K.needsUpdate=!0,K})();const X=(L,W,Z=110)=>{const K=document.createElement("canvas");K.width=K.height=256;const Mt=K.getContext("2d");Mt.fillStyle=L,Mt.fillRect(0,0,256,256),Mt.globalAlpha=.25,Mt.fillStyle=W;for(let et=0;et<Z;et++){const gt=(Math.random()*.06+.02)*256,At=Math.random()*256,Ut=Math.random()*256;Mt.beginPath(),Mt.arc(At,Ut,gt,0,Math.PI*2),Mt.fill()}Mt.globalAlpha=1;const Lt=me(new _i(K));return Lt.colorSpace=un,Lt.needsUpdate=!0,Lt},Dn=L=>{const Z=document.createElement("canvas");Z.width=Z.height=256;const D=Z.getContext("2d"),K=256/L.length;L.forEach((Lt,et)=>{D.fillStyle=Lt,D.fillRect(0,et*K,256,K)});const Mt=me(new _i(Z));return Mt.colorSpace=un,Mt.needsUpdate=!0,Mt},Je=()=>{const W=document.createElement("canvas");W.width=W.height=256;const Z=W.getContext("2d");Z.fillStyle="#2764cc",Z.fillRect(0,0,256,256),Z.fillStyle="#4caf50",Z.globalAlpha=.95;for(let K=0;K<80;K++){const Mt=(Math.random()*.08+.03)*256,Lt=Math.random()*256,et=Math.random()*256;Z.beginPath(),Z.arc(Lt,et,Mt,0,Math.PI*2),Z.fill()}Z.globalAlpha=1;const D=me(new _i(W));return D.colorSpace=un,D.needsUpdate=!0,D},$e=L=>{switch(L){case"Mercury":return Os();case"Venus":return za();case"Earth":return Je();case"Mars":return X("#d16b3e","#7a3e26");case"Jupiter":return Dn(["#caa376","#e1c8a8","#b68955","#e6d3b7","#ad7a49","#dcc29f","#bf915f"]);case"Saturn":return rs();case"Uranus":return Bi();case"Neptune":return ca();default:return X("#cdcac7","#a09d9b")}},fe=new Zy;fe.crossOrigin="anonymous";const O=(L,W)=>{let Z=0;const D=()=>{if(Z>=L.length)return;const K=L[Z++];fe.load(K,Mt=>{Mt.colorSpace=un,Mt.needsUpdate=!0,me(Mt),W(Mt)},void 0,()=>D())};D()},E=()=>{const Z=document.createElement("canvas");Z.width=2048,Z.height=8;const D=Z.getContext("2d");D.clearRect(0,0,2048,8);const K=et=>.5+.2*Math.sin(et*831.7)+.16*Math.sin(et*407.3+1.7)+.12*Math.sin(et*1723.9+.6)+.08*Math.sin(et*263.1+2.9),Mt=et=>{let gt=0,At=200,Ut=1;const Nt=K(et);if(et<.031)gt=0;else if(et<.288){const Ot=(et-.031)/.257;gt=.24+.24*Ot+.1*(Nt-.5),At=158+34*Ot+22*(Nt-.5),Ut=.92,Math.abs(et-.115)<.004&&(gt*=.3),Math.abs(et-.236)<.004&&(gt*=.3)}else if(et<.664){const Ot=(et-.288)/.376;gt=.88+.12*(Nt-.2),At=205+34*Nt-12*Ot,Ut=1,Math.abs(et-.3)<.006&&(At-=26)}else if(et<.735)gt=.05,At=120,Math.abs(et-.695)<.006&&(gt=.2,At=150);else if(et<.947){const Ot=(et-.735)/.212;gt=.6+.1*(Nt-.5)-.1*Ot,At=188+22*Nt-10*Ot,Ut=.97,Math.abs(et-.897)<.005&&(gt*=.06),Math.abs(et-.938)<.0022&&(gt*=.15)}else if(et<.985)gt=.012,At=120;else{const Ot=Math.abs(et-.9915);gt=Ot<.0035?.55*(1-Ot/.0035):0,At=225}return et>.9995&&(gt=0),[Math.max(0,Math.min(1,gt)),At,Ut]};for(let et=0;et<2048;et++){const gt=et/2047,[At,Ut,Nt]=Mt(gt);D.fillStyle=`rgba(${Ut|0},${Ut*.93*Nt|0},${Ut*.8*Nt|0},${At.toFixed(3)})`,D.fillRect(et,0,1,8)}const Lt=me(new _i(Z));return Lt.colorSpace=un,Lt.needsUpdate=!0,Lt},Q=()=>{const Z=document.createElement("canvas");Z.width=1024,Z.height=8;const D=Z.getContext("2d");D.clearRect(0,0,1024,8);const K=[.08,.2,.33,.45,.58,.7,.8];for(let Lt=0;Lt<1024;Lt++){const et=Lt/1023;let gt=.02+.012*Math.sin(et*44),At=140;for(const Ut of K){const Nt=Math.abs(et-Ut);if(Nt<.01){const Ot=1-Nt/.01;gt=Math.max(gt,.3*Ot),At=120}}{const Ut=Math.abs(et-.93);if(Ut<.028){const Nt=1-Ut/.028;gt=Math.max(gt,.95*Nt),At=215}}(et<.01||et>.995)&&(gt=0),D.fillStyle=`rgba(${At|0},${At*.94|0},${At*.92|0},${Math.max(0,gt).toFixed(3)})`,D.fillRect(Lt,0,1,8)}const Mt=me(new _i(Z));return Mt.colorSpace=un,Mt.needsUpdate=!0,Mt},Et=new $y(263176,.02);J.add(Et);const Tt=new Jy(16775399,2,0,2);J.add(Tt);const xt=Le.Mercury.a*(1-Le.Mercury.e)*vt,Qt=Math.max(2.5,Math.min(xt*.6,vt*.8)),Yt=new Ko(Qt,64,48),_e=Df(),Se=new Ii(Yt,_e);Se.name="Sun",J.add(Se);const It=new lv(new df({map:Cf(),color:16777215,blending:jo,transparent:!0,depthWrite:!1}));It.scale.setScalar(xt*.9),J.add(It);const zt=ll(),ae=new Zo;J.add(ae);const le=90,Jt=[],Re=[],Y=[],kt=[];for(let L=0;L<le;L++){const W=new df({map:zt,color:16756848,blending:jo,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1}),Z=new lv(W);Z.scale.setScalar(.01),Jt.push(Z),Re.push(0),Y.push(0),kt.push(new j),ae.add(Z)}const Vt=vt*(.3871-.02),ne=()=>{const L=Re.findIndex(et=>et<=0);if(L<0)return;const W=Math.random()*Math.PI*2,Z=Math.random()*Math.PI/7-Math.PI/14,D=new j(Math.cos(W)*Math.cos(Z),Math.sin(Z),Math.sin(W)*Math.cos(Z)),K=8.6+Math.random()*2,Mt=Jt[L];Mt.position.copy(D.clone().multiplyScalar(K));const Lt=Mt.material||new df({map:zt});Lt.opacity=.85,Mt.material=Lt,Mt.scale.setScalar(On(2,5,Math.random())),Re[L]=1e-6,Y[L]=.9+Math.random()*1.2,kt[L].copy(D).multiplyScalar(7+Math.random()*12)},Ft=L=>{const W=Math.PI*2;return L%=W,L<0?L+W:L},yt=(L,W)=>{let Z=W<.8?L:Math.PI;for(let D=0;D<6;D++){const K=Z-W*Math.sin(Z)-L,Mt=1-W*Math.cos(Z);Z-=K/Mt}return Z},re=(L,W)=>{const Z=Math.sin(L),D=Math.sin(2*L);return L+2*W*Z+1.25*W*W*D},ge={},tn={},Ye=512,xi=new Float32Array(Ye*3),Bn=L=>{const W=tn[L];if(!W)return;const Z=Le[L]=Cn(L),D=oA(Z,xi);if(W.visible=D,!D)return;const K=W.geometry.getAttribute("position"),Mt=K.array;for(let Lt=0;Lt<Ye;Lt++)Mt[3*Lt]=xi[3*Lt]*vt,Mt[3*Lt+1]=xi[3*Lt+2]*vt,Mt[3*Lt+2]=xi[3*Lt+1]*vt;K.needsUpdate=!0},Wn=L=>{if(tn[L])return;const W=new jn,Z=new Rn(new Float32Array(Ye*3),3);Z.setUsage(Cu),W.setAttribute("position",Z);const D=new $p({color:L==="Pluto"?9148072:5661043}),K=new pv(W,D);K.frustumCulled=!1,J.add(K),tn[L]=K,Bn(L)},fn={dayMap:{value:new Zn},nightMap:{value:new Zn},specMap:{value:new Zn},bumpMap:{value:new Zn},sunDir:{value:new j(1,0,0)},camPos:{value:new j},uBumpScale:{value:.008}},ya=L=>{const W=document.createElement("canvas");W.width=W.height=4;const Z=W.getContext("2d");Z.fillStyle="#"+L.toString(16).padStart(6,"0"),Z.fillRect(0,0,4,4);const D=me(new _i(W));return D.colorSpace=un,D};fn.dayMap.value=$e("Earth"),fn.nightMap.value=ya(328976),fn.specMap.value=ya(0);const Ci=L=>{let W=L>>>0;return()=>(W=W*1664525+1013904223>>>0,W/4294967296)},Fi=(L,W=10)=>{const Z=Ci(L),D=[];let K=0;for(let Mt=0;Mt<W;Mt++){const Lt=1/(1+Mt*.5);K+=Lt,D.push({fx:1+Math.floor(Z()*(2+Mt*1.5)),fy:.5+Z()*(1.5+Mt*1.2),ph:Z()*Math.PI*2,ph2:Z()*Math.PI*2,amp:Lt})}return(Mt,Lt)=>{let et=0;for(const gt of D)et+=Math.sin(Mt*Math.PI*2*gt.fx+Math.sin(Lt*Math.PI*2*gt.fy+gt.ph2)*1.8+gt.ph)*gt.amp;return et/K}},ti=(L,W,Z)=>{for(const D of[-W,0,W])L.save(),L.translate(D,0),Z(),L.restore()},Os=()=>{const Z=document.createElement("canvas");Z.width=2048,Z.height=1024;const D=Z.getContext("2d"),K=Ci(20261),Mt=Fi(11,7),Lt=Fi(23,10),et=512,gt=256,At=document.createElement("canvas");At.width=et,At.height=gt;const Ut=At.getContext("2d"),Nt=Ut.createImageData(et,gt),Ot=[191,139,82],te=[118,108,121],Zt=[47,60,110];for(let Ct=0;Ct<gt;Ct++)for(let Wt=0;Wt<et;Wt++){const Ht=Wt/et,Bt=Ct/gt,se=Mt(Ht,Bt),Gt=Lt(Ht*3,Bt*3);let be,we,Ne;if(se>.08){const Ze=Math.min(1,(se-.08)/.3);be=On(te[0],Ot[0],Ze),we=On(te[1],Ot[1],Ze),Ne=On(te[2],Ot[2],Ze)}else if(se<-.08){const Ze=Math.min(1,(-se-.08)/.3);be=On(te[0],Zt[0],Ze),we=On(te[1],Zt[1],Ze),Ne=On(te[2],Zt[2],Ze)}else be=te[0],we=te[1],Ne=te[2];const Nn=1+Gt*.22-(Math.abs(Bt-.5)>.42?.08:0),pn=4*(Ct*et+Wt);Nt.data[pn]=cn(be*Nn,0,255),Nt.data[pn+1]=cn(we*Nn,0,255),Nt.data[pn+2]=cn(Ne*Nn,0,255),Nt.data[pn+3]=255}Ut.putImageData(Nt,0,0),D.imageSmoothingEnabled=!0,D.drawImage(At,0,0,2048,1024);for(let Ct=0;Ct<26e3;Ct++){const Wt=K()*2048,Ht=K()*1024,Bt=K()<.8?1:2;D.fillStyle=K()<.45?"rgba(232,226,214,0.05)":"rgba(24,28,44,0.055)",D.fillRect(Wt,Ht,Bt,Bt)}ti(D,2048,()=>{const Bt=D.createRadialGradient(1351.68,245.76,0,1351.68,245.76,174.08);Bt.addColorStop(0,"rgba(214,156,92,0.9)"),Bt.addColorStop(.75,"rgba(206,148,88,0.55)"),Bt.addColorStop(1,"rgba(206,148,88,0)"),D.fillStyle=Bt,D.beginPath(),D.ellipse(1351.68,245.76,174.08*1.35,174.08,0,0,Math.PI*2),D.fill(),D.strokeStyle="rgba(120,96,80,0.28)",D.lineWidth=5,D.beginPath(),D.ellipse(1351.68,245.76,174.08*1.3,174.08*.96,0,0,Math.PI*2),D.stroke()});for(let Ct=0;Ct<1400;Ct++){const Wt=K()*2048,Ht=1024*(.03+K()*.94),Bt=(Ht/1024-.5)*Math.PI,se=Math.min(3.2,1/Math.max(.28,Math.cos(Bt))),Gt=K()<.8?1.5+K()*6:7+K()*16;ti(D,2048,()=>{D.globalAlpha=.14+K()*.14,D.fillStyle=K()<.5?"#1f2740":"#372f28",D.beginPath(),D.ellipse(Wt,Ht,Gt*se,Gt,0,0,Math.PI*2),D.fill(),D.globalAlpha=.08+K()*.08,D.fillStyle="#9a917f",D.beginPath(),D.ellipse(Wt,Ht,Gt*se*.6,Gt*.6,0,0,Math.PI*2),D.fill(),D.globalAlpha=.2+K()*.16,D.strokeStyle="#efe6d2",D.lineWidth=Math.max(.8,Gt*.22),D.beginPath(),D.ellipse(Wt,Ht,Gt*se,Gt,0,Math.PI*.75,Math.PI*1.65),D.stroke(),D.globalAlpha=.14+K()*.12,D.strokeStyle="#141a30",D.lineWidth=Math.max(.8,Gt*.2),D.beginPath(),D.ellipse(Wt,Ht,Gt*se,Gt,0,Math.PI*1.85,Math.PI*.55),D.stroke()})}D.globalAlpha=1;for(let Ct=0;Ct<16;Ct++){const Wt=K()*2048,Ht=1024*(.12+K()*.76),Bt=(Ht/1024-.5)*Math.PI,se=Math.min(3.2,1/Math.max(.28,Math.cos(Bt))),Gt=Ct===0,be=Gt?22:8+Math.floor(K()*9),we=Gt?1024*.3:1024*(.05+K()*.1);ti(D,2048,()=>{for(let pn=0;pn<be;pn++){const Ze=K()*Math.PI*2,In=we*(.5+K()*.5),Kn=9;for(let oi=1;oi<=Kn;oi++){const Tn=oi/Kn,Ui=Wt+Math.cos(Ze)*In*Tn*se,yi=Ht+Math.sin(Ze)*In*Tn;D.globalAlpha=(Gt?.1:.085)*(1-Tn)*(.7+K()*.5),D.fillStyle="#dce6f4";const Li=(1.7-Tn)*(Gt?2.4:1.6);D.beginPath(),D.ellipse(Ui,yi,Li*se,Li,0,0,Math.PI*2),D.fill()}}D.globalAlpha=1;const Ne=Gt?11:5,Nn=D.createRadialGradient(Wt,Ht,0,Wt,Ht,Ne);Nn.addColorStop(0,"rgba(236,242,250,0.9)"),Nn.addColorStop(1,"rgba(236,242,250,0)"),D.fillStyle=Nn,D.beginPath(),D.ellipse(Wt,Ht,Ne*se,Ne,0,0,Math.PI*2),D.fill()})}D.globalAlpha=1;const qt=me(new _i(Z));return qt.colorSpace=un,qt.needsUpdate=!0,qt},za=()=>{const Z=document.createElement("canvas");Z.width=1024,Z.height=512;const D=Z.getContext("2d"),K=Ci(80085),Mt=Fi(41,7),Lt=Fi(57,10),et=256,gt=128,At=document.createElement("canvas");At.width=et,At.height=gt;const Ut=At.getContext("2d"),Nt=Ut.createImageData(et,gt),Ot=Zt=>{const qt=Math.sin(Zt*Math.PI);return[On(212,242,qt),On(176,220,qt),On(118,166,qt)]};for(let Zt=0;Zt<gt;Zt++)for(let qt=0;qt<et;qt++){const Ct=qt/et,Wt=Zt/gt,[Ht,Bt,se]=Ot(Wt),Gt=1+Mt(Ct,Wt)*.05+Lt(Ct*2,Wt*2)*.03,be=4*(Zt*et+qt);Nt.data[be]=cn(Ht*Gt,0,255),Nt.data[be+1]=cn(Bt*Gt,0,255),Nt.data[be+2]=cn(se*Gt,0,255),Nt.data[be+3]=255}Ut.putImageData(Nt,0,0),D.imageSmoothingEnabled=!0,D.drawImage(At,0,0,1024,512);for(let Zt=0;Zt<26;Zt++){const qt=(Zt+.5)/26*512,Ct=qt/512,Wt=512/26*(.7+K()*.9),Ht=K()<.5,Bt=.04+K()*.055,se=(Ct<.5?1:-1)*(4+6*Math.abs(Ct-.5));for(let Gt=0;Gt<1024;Gt++){const be=Gt/1024,we=Math.sin(be*Math.PI*2*2+Zt*1.9)*3+Math.sin(be*Math.PI*2*4+Zt)*1.5+Math.sin(be*Math.PI*2+Zt*.7)*se;D.fillStyle=Ht?`rgba(252,244,220,${Bt.toFixed(3)})`:`rgba(172,136,80,${Bt.toFixed(3)})`,D.fillRect(Gt,qt-Wt/2+we,1,Wt)}}for(let Zt=0;Zt<14;Zt++){const qt=K()*1024,Ct=512*(.2+K()*.6),Wt=20+K()*70;ti(D,1024,()=>{const Ht=D.createRadialGradient(qt,Ct,0,qt,Ct,Wt);Ht.addColorStop(0,`rgba(252,246,226,${(.05+K()*.06).toFixed(3)})`),Ht.addColorStop(1,"rgba(252,246,226,0)"),D.fillStyle=Ht,D.beginPath(),D.ellipse(qt,Ct,Wt*1.8,Wt*.6,0,0,Math.PI*2),D.fill()})}const te=me(new _i(Z));return te.colorSpace=un,te.needsUpdate=!0,te},rs=()=>{const Z=document.createElement("canvas");Z.width=2048,Z.height=1024;const D=Z.getContext("2d"),K=Ci(60318),Mt=Fi(61,8),Lt=Fi(73,10),et=[[0,[138,150,144]],[.06,[158,164,148]],[.12,[182,178,142]],[.18,[205,192,148]],[.24,[186,166,116]],[.3,[220,203,152]],[.36,[199,177,122]],[.42,[228,211,160]],[.48,[232,217,168]],[.54,[209,184,128]],[.6,[224,204,148]],[.66,[199,172,112]],[.72,[214,190,130]],[.78,[192,161,100]],[.84,[205,177,116]],[.9,[186,152,92]],[1,[172,138,80]]],gt=qt=>{for(let Ct=0;Ct<et.length-1;Ct++){const[Wt,Ht]=et[Ct],[Bt,se]=et[Ct+1];if(qt<=Bt){const Gt=(qt-Wt)/(Bt-Wt);return[On(Ht[0],se[0],Gt),On(Ht[1],se[1],Gt),On(Ht[2],se[2],Gt)]}}return et[et.length-1][1]},At=512,Ut=256,Nt=document.createElement("canvas");Nt.width=At,Nt.height=Ut;const Ot=Nt.getContext("2d"),te=Ot.createImageData(At,Ut);for(let qt=0;qt<Ut;qt++)for(let Ct=0;Ct<At;Ct++){const Wt=Ct/At,Ht=qt/Ut,Bt=Mt(Wt,Ht)*.02,[se,Gt,be]=gt(cn(Ht+Bt,0,1)),we=1+Lt(Wt*2,Ht*2)*.05,Ne=4*(qt*At+Ct);te.data[Ne]=cn(se*we,0,255),te.data[Ne+1]=cn(Gt*we,0,255),te.data[Ne+2]=cn(be*we,0,255),te.data[Ne+3]=255}Ot.putImageData(te,0,0),D.imageSmoothingEnabled=!0,D.drawImage(Nt,0,0,2048,1024);for(let qt=0;qt<320;qt++){const Ct=K()*1024,Wt=K()<.5;D.globalAlpha=.014+K()*.035,D.strokeStyle=Wt?"#fff8e0":"#8a6c3c",D.lineWidth=.6+K()*1.6,D.beginPath(),D.moveTo(0,Ct);for(let Ht=0;Ht<=2048;Ht+=32)D.lineTo(Ht,Ct+Math.sin(Ht/2048*Math.PI*2*4+qt)*2);D.stroke()}D.globalAlpha=1;for(let qt=0;qt<7;qt++){const Ct=K()*2048,Wt=1024*(.5+K()*.38),Ht=2+K()*5;D.globalAlpha=.1+K()*.1,D.fillStyle=qt===0?"#7a6034":"#fff8e4",D.beginPath(),D.ellipse(Ct,Wt,Ht*2.2,Ht,0,0,Math.PI*2),D.fill()}D.globalAlpha=1;const Zt=me(new _i(Z));return Zt.colorSpace=un,Zt.needsUpdate=!0,Zt},Bi=()=>{const Z=document.createElement("canvas");Z.width=1024,Z.height=512;const D=Z.getContext("2d"),K=Fi(91,4),Mt=256,Lt=128,et=document.createElement("canvas");et.width=Mt,et.height=Lt;const gt=et.getContext("2d"),At=gt.createImageData(Mt,Lt);for(let Nt=0;Nt<Lt;Nt++)for(let Ot=0;Ot<Mt;Ot++){const te=Ot/Mt,Zt=Nt/Lt,qt=Math.sin(Zt*Math.PI);let Ct=On(24,50,qt),Wt=On(120,180,qt),Ht=On(144,204,qt);const Bt=Math.exp(-Math.pow((Zt-.8)/.085,2))*.3,se=Math.exp(-Math.pow((Zt-1)/.12,2))*.22,Gt=Math.min(1,Bt+se);Ct=On(Ct,205,Gt),Wt=On(Wt,244,Gt),Ht=On(Ht,248,Gt);const be=1+K(te,Zt)*.018,we=4*(Nt*Mt+Ot);At.data[we]=cn(Ct*be,0,255),At.data[we+1]=cn(Wt*be,0,255),At.data[we+2]=cn(Ht*be,0,255),At.data[we+3]=255}gt.putImageData(At,0,0),D.imageSmoothingEnabled=!0,D.drawImage(et,0,0,1024,512);for(const[Nt,Ot,te,Zt]of[[.28,.3,.011,.35],[.66,.76,.012,.4],[.48,.36,.008,.25]])ti(D,1024,()=>{const qt=D.createRadialGradient(1024*Nt,512*Ot,0,1024*Nt,512*Ot,1024*te);qt.addColorStop(0,`rgba(230,252,254,${Zt})`),qt.addColorStop(1,"rgba(230,252,254,0)"),D.fillStyle=qt,D.beginPath(),D.ellipse(1024*Nt,512*Ot,1024*te*1.6,512*te*2.2,0,0,Math.PI*2),D.fill()});const Ut=me(new _i(Z));return Ut.colorSpace=un,Ut.needsUpdate=!0,Ut},ca=()=>{const Z=document.createElement("canvas");Z.width=1024,Z.height=512;const D=Z.getContext("2d"),K=Ci(84630),Mt=Fi(101,7),Lt=Fi(113,10),et=256,gt=128,At=document.createElement("canvas");At.width=et,At.height=gt;const Ut=At.getContext("2d"),Nt=Ut.createImageData(et,gt),Ot=[[0,[19,26,84]],[.18,[34,52,152]],[.36,[46,74,202]],[.5,[56,92,222]],[.62,[44,70,196]],[.8,[30,46,142]],[1,[16,22,74]]],te=Ct=>{for(let Wt=0;Wt<Ot.length-1;Wt++){const[Ht,Bt]=Ot[Wt],[se,Gt]=Ot[Wt+1];if(Ct<=se){const be=(Ct-Ht)/(se-Ht);return[On(Bt[0],Gt[0],be),On(Bt[1],Gt[1],be),On(Bt[2],Gt[2],be)]}}return Ot[Ot.length-1][1]};for(let Ct=0;Ct<gt;Ct++)for(let Wt=0;Wt<et;Wt++){const Ht=Wt/et,Bt=Ct/gt,[se,Gt,be]=te(Bt),we=1+Mt(Ht,Bt)*.09+Lt(Ht*2,Bt*2)*.04,Ne=4*(Ct*et+Wt);Nt.data[Ne]=cn(se*we,0,255),Nt.data[Ne+1]=cn(Gt*we,0,255),Nt.data[Ne+2]=cn(be*we,0,255),Nt.data[Ne+3]=255}Ut.putImageData(Nt,0,0),D.imageSmoothingEnabled=!0,D.drawImage(At,0,0,1024,512),ti(D,1024,()=>{D.save(),D.translate(409.6,317.44),D.scale(63.488,28.16);const se=D.createRadialGradient(0,0,0,0,0,1);se.addColorStop(0,"rgba(13,22,74,0.95)"),se.addColorStop(.55,"rgba(16,26,84,0.85)"),se.addColorStop(1,"rgba(16,26,84,0)"),D.fillStyle=se,D.beginPath(),D.arc(0,0,1,0,Math.PI*2),D.fill(),D.restore();for(let Gt=0;Gt<26;Gt++){const be=Math.PI*(.15+.7*(Gt/26)),we=409.6+Math.cos(be)*63.488*1.15,Ne=317.44+Math.sin(be)*28.16*1.35+28.16*.25;D.globalAlpha=.1+.3*Math.sin(Gt/26*Math.PI),D.fillStyle="#f2f6ff",D.beginPath(),D.ellipse(we,Ne,3+K()*7,1.2+K()*2.2,0,0,Math.PI*2),D.fill()}D.globalAlpha=1}),ti(D,1024,()=>{const Ct=D.createRadialGradient(532.48,368.64,0,532.48,368.64,16.384);Ct.addColorStop(0,"rgba(238,244,255,0.8)"),Ct.addColorStop(1,"rgba(238,244,255,0)"),D.fillStyle=Ct,D.beginPath(),D.ellipse(1024*.52,512*.72,1024*.02,512*.014,0,0,Math.PI*2),D.fill()}),ti(D,1024,()=>{D.save(),D.translate(696.32,409.6),D.scale(1024*.026,512*.02);const Ht=D.createRadialGradient(0,0,0,0,0,1);Ht.addColorStop(0,"rgba(14,22,72,0.85)"),Ht.addColorStop(1,"rgba(14,22,72,0)"),D.fillStyle=Ht,D.beginPath(),D.arc(0,0,1,0,Math.PI*2),D.fill(),D.restore();const Bt=D.createRadialGradient(696.32,409.6,0,696.32,409.6,1024*.008);Bt.addColorStop(0,"rgba(240,246,255,0.75)"),Bt.addColorStop(1,"rgba(240,246,255,0)"),D.fillStyle=Bt,D.beginPath(),D.arc(696.32,409.6,1024*.008,0,Math.PI*2),D.fill()});const Zt=(Ct,Wt)=>{for(let Ht=0;Ht<Wt;Ht++){const Bt=K(),se=.05+K()*.12,Gt=512*(Ct+(K()-.5)*.05),be=1.2+K()*2.4,we=.15+K()*.18,Ne=K()*Math.PI*2,Nn=Math.max(10,Math.floor(se*1024/8));ti(D,1024,()=>{for(let pn=0;pn<=Nn;pn++){const Ze=pn/Nn,In=Bt+se*Ze,Kn=In*1024,oi=Gt+Math.sin(In*Math.PI*2*6+Ne)*3+Math.sin(In*Math.PI*2*14+Ne*2)*1.2,Tn=Math.sin(Ze*Math.PI),Ui=be*(.8+.5*Tn),yi=D.createRadialGradient(Kn,oi,0,Kn,oi,Ui*4);yi.addColorStop(0,`rgba(238,244,255,${(we*Tn).toFixed(3)})`),yi.addColorStop(1,"rgba(238,244,255,0)"),D.fillStyle=yi,D.beginPath(),D.ellipse(Kn,oi,Ui*4,Ui*1.6,0,0,Math.PI*2),D.fill()}})}};Zt(.33,7),Zt(.44,4),Zt(.68,6);const qt=me(new _i(Z));return qt.colorSpace=un,qt.needsUpdate=!0,qt},Yi={};for(const L of C){let W;const Z=fA.has(L);if(L==="Earth")W=new Wi({vertexShader:xA,fragmentShader:MA,uniforms:fn});else if(Z){const K=L==="Saturn"?rs():L==="Uranus"?Bi():L==="Neptune"?ca():$e(L),Mt=new dc({map:K});Mt.color.setScalar(L==="Pluto"?.9:.82),W=Mt;const Lt=$v[L];Lt&&Lt.length>0&&O(Lt,et=>{Mt.map=et,Mt.needsUpdate=!0})}else{const K={dayMap:{value:$e(L)},sunDir:{value:new j(1,0,0)}};Yi[L]=K,W=new Wi({vertexShader:_A,fragmentShader:vA,uniforms:K});const Mt=$v[L];Mt&&Mt.length>0&&O(Mt,Lt=>{K.dayMap.value=Lt})}const D=new Ii(new Ko(qe[L],64,48),W);if(D.name=L,Me(L,D.position),ge[L]=D,J.add(D),L==="Saturn"){const K=qe.Saturn*1.2,Mt=qe.Saturn*2.33,Lt=new Sf(K,Mt,256),et=Lt.attributes.position,gt=Lt.attributes.uv,At=new j;for(let Ot=0;Ot<et.count;Ot++){At.fromBufferAttribute(et,Ot);const te=(At.length()-K)/(Mt-K);gt.setXY(Ot,te,.5)}gt.needsUpdate=!0;const Ut=new dc({map:E(),transparent:!0,side:Oa,depthWrite:!1}),Nt=new Ii(Lt,Ut);Nt.rotation.x=Math.PI/2,D.add(Nt)}if(L==="Uranus"){const K=qe.Uranus*1.55,Mt=qe.Uranus*2.02,Lt=new Sf(K,Mt,256),et=Lt.attributes.position,gt=Lt.attributes.uv,At=new j;for(let Ot=0;Ot<et.count;Ot++){At.fromBufferAttribute(et,Ot);const te=(At.length()-K)/(Mt-K);gt.setXY(Ot,te,.5)}gt.needsUpdate=!0;const Ut=new dc({map:Q(),transparent:!0,side:Oa,depthWrite:!1}),Nt=new Ii(Lt,Ut);Nt.rotation.x=Math.PI/2,D.add(Nt),D.rotation.z=hy.degToRad(97.77)}Wn(L)}const ba=L=>{fn.dayMap.value=L};O([`${wf}/earth-day.jpg`,`${uA}/2k_earth_daymap.jpg`,lA,cA],ba),O([pA],L=>{fn.nightMap.value=L}),O([mA],L=>{fn.specMap.value=L}),O([gA],L=>{fn.bumpMap.value=L});const Un=L=>L/149597870;let zn=null,mr=null;function Ea(){const L=ge.Earth;if(!L)return;const W=vt*Un(384400),Z=.0549,D=ra(5.145),K=ra(125.08),Mt=ra(318.15),et=2*Math.PI/27.321661,gt=new Ko(.58,32,24),At=new _v({color:12500670,roughness:.95,metalness:0}),Ut=new Ii(gt,At);Ut.name="Moon",L.add(Ut),zn={body:Ut,a:W,e:Z,i:D,Omega:K,omega:Mt,M:0,n:et,parent:L};const Nt=256,Ot=new Float32Array(Nt*3);for(let qt=0;qt<Nt;qt++){const Ct=qt/Nt*Math.PI*2,Wt=W*(1-Z*Z)/(1+Z*Math.cos(Ct));let Ht=Wt*Math.cos(Ct),Bt=Wt*Math.sin(Ct);const se=Math.cos(Mt),Gt=Math.sin(Mt),be=Math.cos(D),we=Math.sin(D),Ne=Math.cos(K),Nn=Math.sin(K);let pn=Ht*se-Bt*Gt,Ze=Ht*Gt+Bt*se,In=0,Kn=pn,oi=Ze*be-In*we,Tn=Ze*we+In*be,Ui=Kn*Ne-oi*Nn,yi=Kn*Nn+oi*Ne,Li=Tn;const di=3*qt;Ot[di]=Ui,Ot[di+1]=yi,Ot[di+2]=Li}const te=new jn;te.setAttribute("position",new Rn(Ot,3));const Zt=new $p({color:8037119,transparent:!0,opacity:.6});mr=new pv(te,Zt),L.add(mr)}function Ha(L){if(!zn)return;zn.M=Ft(zn.M+zn.n*L);const W=yt(zn.M,zn.e),Z=Math.sqrt((1+zn.e)/(1-zn.e)),D=2*Math.atan(Z*Math.tan(W/2)),K=zn.a*(1-zn.e*Math.cos(W));let Mt=K*Math.cos(D),Lt=K*Math.sin(D);const et=Math.cos(zn.omega),gt=Math.sin(zn.omega),At=Math.cos(zn.i),Ut=Math.sin(zn.i),Nt=Math.cos(zn.Omega),Ot=Math.sin(zn.Omega);let te=Mt*et-Lt*gt,Zt=Mt*gt+Lt*et,qt=0,Ct=te,Wt=Zt*At-qt*Ut,Ht=Zt*Ut+qt*At,Bt=Ct*Nt-Wt*Ot,se=Ct*Ot+Wt*Nt,Gt=Ht;zn.body.position.set(Bt,se,Gt)}let Kr=[];(function(){const W=ge.Jupiter,Z=ge.Saturn;if(!W||!Z)return;const D=(K,Mt,Lt,et,gt,At,Ut)=>{const Nt=new hi;Nt.rotation.x=ra(At),K.add(Nt);const Ot=new _v({color:gt,roughness:.9,metalness:0}),te=new Ii(new Ko(et,24,18),Ot);te.name=Ut,te.position.set(Mt,0,0),Nt.add(te),Kr.push({pivot:Nt,angVel:2*Math.PI/Lt})};D(W,vt*Un(1070400),7.154553,.72,10328719,2,"Ganymede"),D(Z,vt*Un(1221870),15.945,.67,13280356,3,"Titan")})(),Ea();const Qr=`
      attribute vec3 color; attribute float aCell; attribute float aAng; attribute float aSpin;
      varying vec3 vColor; varying float vCell; varying float vAng; varying float vBright;
      uniform float uMinPx; uniform float uMaxPx; uniform float uScale; uniform float uTime;
      uniform vec3 uCamPos; uniform float uPhase;
      void main(){
        vColor = color;
        vCell = aCell;
        vAng = aAng + aSpin * uTime;
        // Sun-phase lighting: rocks glow when their sunlit side faces the
        // camera (sun at the origin) and dim when backlit. uPhase blends it
        // out for Kuiper objects, which get near-constant display luminance.
        float d = dot(normalize(-position), normalize(uCamPos - position));
        float ph = 0.25 + 0.75 * clamp(0.5 + 0.5 * d, 0.0, 1.0);
        vBright = mix(1.0, ph, uPhase);
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_Position = projectionMatrix * mv;
        float px = uScale / max(-mv.z, 1.0);
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
      }
    `,R=`
      varying vec3 vColor; varying float vCell; varying float vAng; varying float vBright;
      uniform sampler2D uMap; uniform float uOpacity;
      void main(){
        vec2 pc = gl_PointCoord - 0.5;
        float cs = cos(vAng), sn = sin(vAng);
        pc = mat2(cs, -sn, sn, cs) * pc;
        if(abs(pc.x) > 0.499 || abs(pc.y) > 0.499) discard;
        vec2 uv = (vec2(mod(vCell, 4.0), floor(vCell / 4.0)) + pc + 0.5) / vec2(4.0, 2.0);
        vec4 tex = texture2D(uMap, uv);
        vec4 c = vec4(vColor * vBright, 1.0) * tex; c.a *= uOpacity;
        if(c.a < 0.02) discard; gl_FragColor = c;
      }
    `,mt=(()=>{const D=document.createElement("canvas");D.width=512,D.height=256;const K=D.getContext("2d"),Mt=Ci(4242);for(let et=0;et<8;et++){const gt=et%4*128+64,At=Math.floor(et/4)*128+128/2,Ut=128*(.2+Mt()*.08),Nt=10+Math.floor(Mt()*5),Ot=[];for(let Ct=0;Ct<Nt;Ct++)Ot.push(Ut*(.72+Mt()*.5));K.save(),K.beginPath();for(let Ct=0;Ct<=Nt;Ct++){const Wt=Ct/Nt*Math.PI*2,Ht=Ot[Ct%Nt],Bt=gt+Math.cos(Wt)*Ht,se=At+Math.sin(Wt)*Ht*(.8+et%3*.1);Ct===0?K.moveTo(Bt,se):K.lineTo(Bt,se)}K.closePath();const te=et%2===0,Zt=K.createLinearGradient(gt-Ut,At-Ut,gt+Ut,At+Ut);Zt.addColorStop(0,te?"#cdc4b2":"#c2c6cd"),Zt.addColorStop(.55,te?"#8a7f6d":"#83878f"),Zt.addColorStop(1,"#2e2b25"),K.fillStyle=Zt,K.fill(),K.strokeStyle="rgba(0,0,0,0.45)",K.lineWidth=3,K.stroke(),K.clip();const qt=3+Math.floor(Mt()*4);for(let Ct=0;Ct<qt;Ct++){const Wt=Mt()*Math.PI*2,Ht=Mt()*Ut*.7,Bt=gt+Math.cos(Wt)*Ht,se=At+Math.sin(Wt)*Ht,Gt=Ut*(.1+Mt()*.16);K.fillStyle="rgba(16,14,10,0.4)",K.beginPath(),K.arc(Bt,se,Gt,0,Math.PI*2),K.fill(),K.fillStyle="rgba(238,232,218,0.28)",K.beginPath(),K.arc(Bt-Gt*.35,se-Gt*.35,Gt*.5,0,Math.PI*2),K.fill()}K.restore()}const Lt=me(new _i(D));return Lt.colorSpace=un,Lt.needsUpdate=!0,Lt})(),ct=(L,W)=>{const Z=new Float32Array(W),D=new Float32Array(W),K=new Float32Array(W);for(let Mt=0;Mt<W;Mt++)Z[Mt]=Math.floor(Math.random()*8),D[Mt]=Math.random()*Math.PI*2,K[Mt]=(Math.random()-.5)*1.6;L.setAttribute("aCell",new Rn(Z,1)),L.setAttribute("aAng",new Rn(D,1)),L.setAttribute("aSpin",new Rn(K,1))},it=(L,W=2,Z=10,D=1)=>new Wi({vertexShader:Qr,fragmentShader:R,transparent:!0,depthWrite:!1,depthTest:!0,blending:jr,uniforms:{uMap:{value:mt},uTime:{value:0},uCamPos:{value:new j},uPhase:{value:D},uOpacity:{value:L},uMinPx:{value:W},uMaxPx:{value:Z},uScale:{value:460*(U.getPixelRatio?.()||1)}}}),jt=(L,W,Z,D,K,Mt,Lt=.62,et=1)=>{const gt=new jn,At=new Float32Array(L*3),Ut=new Float32Array(L*3),Nt=new Float32Array(L),Ot=new Float32Array(L),te=new Float32Array(L),Zt=new Float32Array(L),qt=new Float32Array(L);for(let Bt=0;Bt<L;Bt++){const se=On(W[0],W[1],Math.random())*vt;Nt[Bt]=se,Ot[Bt]=Math.random()*Z,te[Bt]=ra(Math.max(0,cr()*D));const Gt=Kt*Math.pow(se/de,1.5);qt[Bt]=2*Math.PI/Gt,Zt[Bt]=Math.random()*Math.PI*2;const be=re(Zt[Bt],Ot[Bt]),we=se*(1-Ot[Bt]*Math.cos(Zt[Bt])),Ne=we*Math.cos(be),Nn=we*Math.sin(be),pn=3*Bt;At[pn]=Ne,At[pn+1]=Nn*Math.sin(te[Bt]),At[pn+2]=Nn*Math.cos(te[Bt]);const[Ze,In,Kn]=Mt(Bt);Ut.set([Ze,In,Kn],pn)}const Ct=new Rn(At,3);Ct.setUsage(Cu),gt.setAttribute("position",Ct),gt.setAttribute("color",new Rn(Ut,3)),ct(gt,L);const Wt=it(Lt,2,10,et),Ht=new ac(gt,Wt);return Ht.frustumCulled=!1,gt.boundingSphere||(gt.boundingSphere=new hr(new j(0,0,0),vt*80)),J.add(Ht),{geo:gt,mesh:Ht,a:Nt,e:Ot,inc:te,M:Zt,n:qt,cursor:0}};let ie=jt(x.current,[2.1,3.3],.12,2.5,.9,()=>{const L=.85+Math.random()*.25;return[L,L,L]},.85,1),Xt=jt(b.current,[42,48],.1,5.5,1.4,()=>{const L=.9+Math.random()*.2;return[L*.75,L*.95,1.15]},.95,.15);const oe=(L,W,Z,D,K,Mt=1.2)=>{const Lt=W[0]*vt,et=W[1]*vt,gt=new jn,At=new Float32Array(L*3),Ut=new Float32Array(L*3),Nt=new Float32Array(L),Ot=new Float32Array(L),te=new Float32Array(L),Zt=new Float32Array(L),qt=new Float32Array(L),Ct=new Xe(K),Wt=We();for(let Gt=0;Gt<L;Gt++){const be=Math.random()<.7,we=ra(D),Ne=ra(60),Nn=we*.55*cr(),pn=Math.random()*Ne,Ze=be?Nn:we*.25*cr()+pn,In=Math.sign(Z||1),Kn=Ft(Wt+Z+In*Ze),oi=cn((be?Math.abs(Nn):pn)/Ne,0,1),Tn=On(Lt,et,be?.45+.35*Math.random():.25+.7*oi),Ui=Math.min(.08,Math.abs(cr())*.03+.01*Math.random()),yi=ra(Math.max(0,cr()*Mt));Nt[Gt]=Tn,Ot[Gt]=Ui,te[Gt]=yi;const Li=Kt*Math.pow(Tn/de,1.5);qt[Gt]=2*Math.PI/Li,Zt[Gt]=Kn;const di=re(Zt[Gt],Ot[Gt]),Ki=Tn*(1-Ot[Gt]*Math.cos(Zt[Gt])),Gi=Ki*Math.cos(di),us=Ki*Math.sin(di),wa=3*Gt;At[wa]=Gi,At[wa+1]=us*Math.sin(yi),At[wa+2]=us*Math.cos(yi),Ut.set([Ct.r,Ct.g,Ct.b],wa)}const Ht=new Rn(At,3);Ht.setUsage(Cu),gt.setAttribute("position",Ht),gt.setAttribute("color",new Rn(Ut,3)),ct(gt,L);const Bt=it(.66,2,10,1),se=new ac(gt,Bt);return se.frustumCulled=!1,gt.boundingSphere||(gt.boundingSphere=new hr(new j(0,0,0),vt*80)),J.add(se),{geo:gt,mesh:se,a:Nt,e:Ot,inc:te,M:Zt,n:qt,cursor:0}};let ce,Te;const Ue=Math.max(2e3,Math.floor(x.current*.2));ce=oe(Math.floor(Ue/2),[4.9,5.5],+Math.PI/3,20,6484878,1),Te=oe(Math.ceil(Ue/2),[4.9,5.5],-Math.PI/3,20,16739179,1);const $t=(L,W)=>{const Z=5.2028*Math.pow(.6666666666666666,.6666666666666666),D=new jn,K=new Float32Array(L*3),Mt=new Float32Array(L*3),Lt=new Float32Array(L),et=new Float32Array(L),gt=new Float32Array(L),At=new Float32Array(L),Ut=new Float32Array(L),Nt=We(),Ot=new Xe(13070591);for(let Ct=0;Ct<L;Ct++){const Wt=ra(18)*cr(),Ht=Ft(Nt+W+Wt),Bt=(Z+On(-.35,.35,Math.random()))*vt,se=.08+Math.abs(cr())*.05,Gt=ra(Math.max(0,cr()*1.5));Lt[Ct]=Bt,et[Ct]=cn(se,0,.18),gt[Ct]=Gt;const be=Kt*Math.pow(Bt/de,1.5);Ut[Ct]=2*Math.PI/be,At[Ct]=Ht;const we=re(At[Ct],et[Ct]),Ne=Bt*(1-et[Ct]*Math.cos(At[Ct])),Nn=Ne*Math.cos(we),pn=Ne*Math.sin(we),Ze=3*Ct;K[Ze]=Nn,K[Ze+1]=pn*Math.sin(Gt),K[Ze+2]=pn*Math.cos(Gt),Mt.set([Ot.r,Ot.g,Ot.b],Ze)}const te=new Rn(K,3);te.setUsage(Cu),D.setAttribute("position",te),D.setAttribute("color",new Rn(Mt,3)),ct(D,L);const Zt=it(.74,2,10,1),qt=new ac(D,Zt);return qt.frustumCulled=!1,D.boundingSphere||(D.boundingSphere=new hr(new j(0,0,0),vt*80)),J.add(qt),{geo:D,mesh:qt,a:Lt,e:et,inc:gt,M:At,n:Ut,cursor:0}};let Ge,hn,an;const je=Math.max(1e3,Math.floor(x.current*.08));Ge=$t(Math.floor(je/3),+Math.PI/3),hn=$t(Math.floor(je/3),Math.PI),an=$t(je-2*Math.floor(je/3),-Math.PI/3);const xn=6e4,ue=new Zo;J.add(ue);const dn=new Ba(ra(62),0,ra(23)),Be=L=>{const Z=document.createElement("canvas");Z.width=Z.height=64;const D=Z.getContext("2d"),K=D.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);K.addColorStop(0,"rgba(255,255,255,1)"),K.addColorStop(.25,"rgba(255,255,255,0.55)"),K.addColorStop(.6,"rgba(255,255,255,0.12)"),K.addColorStop(1,"rgba(255,255,255,0)"),D.fillStyle=K,D.fillRect(0,0,64,64),L&&(D.strokeStyle="rgba(255,255,255,0.35)",D.lineWidth=1.2,D.beginPath(),D.moveTo(64/2,2),D.lineTo(64/2,62),D.moveTo(2,64/2),D.lineTo(62,64/2),D.stroke());const Mt=me(new _i(Z));return Mt.colorSpace=un,Mt.needsUpdate=!0,Mt},Mi=()=>{const W=document.createElement("canvas");W.width=W.height=32;const Z=W.getContext("2d"),D=Z.createRadialGradient(32/2,32/2,0,32/2,32/2,32/2);D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(.4,"rgba(255,255,255,0.95)"),D.addColorStop(.7,"rgba(255,255,255,0.3)"),D.addColorStop(1,"rgba(255,255,255,0)"),Z.fillStyle=D,Z.fillRect(0,0,32,32);const K=me(new _i(W));return K.colorSpace=un,K.needsUpdate=!0,K},ri=[],ei=(L,W,Z,D,K,Mt)=>{const Lt=Ci(Mt),et=()=>(Lt()+Lt()+Lt()-1.5)/1.5,gt=new Float32Array(L*3),At=new Float32Array(L*3),Ut=new j;for(let Zt=0;Zt<L;Zt++){if(Lt()<K){const se=Lt()*Math.PI*2,Gt=et()*.16;Ut.set(Math.cos(se)*Math.cos(Gt),Math.sin(Gt),Math.sin(se)*Math.cos(Gt)).applyEuler(dn)}else{const se=Lt(),Gt=Lt(),be=2*Math.PI*se,we=Math.acos(2*Gt-1);Ut.set(Math.sin(we)*Math.cos(be),Math.cos(we),Math.sin(we)*Math.sin(be))}gt[3*Zt]=Ut.x*xn,gt[3*Zt+1]=Ut.y*xn,gt[3*Zt+2]=Ut.z*xn;const qt=Lt();let Ct,Wt,Ht;qt<.1?(Ct=1,Wt=.76,Ht=.58):qt<.28?(Ct=1,Wt=.92,Ht=.8):qt<.74?(Ct=1,Wt=1,Ht=1):(Ct=.78,Wt=.87,Ht=1);const Bt=.6+Math.pow(Lt(),1.5)*.4;At[3*Zt]=Ct*Bt,At[3*Zt+1]=Wt*Bt,At[3*Zt+2]=Ht*Bt}const Nt=new jn;Nt.setAttribute("position",new Rn(gt,3)),Nt.setAttribute("color",new Rn(At,3));const Ot=new tm({map:Z,size:W*(U.getPixelRatio?.()||1),sizeAttenuation:!1,transparent:!0,vertexColors:!0,depthWrite:!1,blending:jo});Ot.toneMapped=!1,Ot.opacity=D,Ot.userData={baseOp:D};const te=new ac(Nt,Ot);te.frustumCulled=!1,te.renderOrder=-1,ue.add(te),ri.push(Ot)},ji=Mi();ei(15e3,2.2,ji,.95,.34,501),ei(3500,3.2,ji,1,.3,504),ei(1300,4.6,Be(!1),1,.28,502),ei(140,8.5,Be(!0),1,.22,503);{const L=Ci(509),W=Ut=>(L()+L()+L()-1.5)/1.5*Ut,Z=7e3,D=new Float32Array(Z*3),K=new Float32Array(Z*3),Mt=new j,Lt=[];for(let Ut=0;Ut<12;Ut++)Lt.push(L()*Math.PI*2);for(let Ut=0;Ut<Z;Ut++){const Nt=L()<.55?L()*Math.PI*2:Lt[Math.floor(L()*12)]+W(.55),Ot=W(.11);Mt.set(Math.cos(Nt)*Math.cos(Ot),Math.sin(Ot),Math.sin(Nt)*Math.cos(Ot)).applyEuler(dn),D[3*Ut]=Mt.x*xn,D[3*Ut+1]=Mt.y*xn,D[3*Ut+2]=Mt.z*xn;const te=.08+Math.pow(L(),2)*.2,Zt=L()<.25;K[3*Ut]=te*(Zt?1:.9),K[3*Ut+1]=te*.95,K[3*Ut+2]=te*(Zt?.85:1)}const et=new jn;et.setAttribute("position",new Rn(D,3)),et.setAttribute("color",new Rn(K,3));const gt=new tm({map:ji,size:1.3*(U.getPixelRatio?.()||1),sizeAttenuation:!1,transparent:!0,vertexColors:!0,depthWrite:!1,blending:jo});gt.toneMapped=!1,gt.opacity=.9,gt.userData={baseOp:.9};const At=new ac(et,gt);At.frustumCulled=!1,At.renderOrder=-1,ue.add(At),ri.push(gt)}const sn=new j,bn=new j;let zi=!1,Ln=0,Di=0;const Zi=L=>{L.button===0&&(zi=!0,Ln=L.clientX,Di=L.clientY)},gr=L=>{if(!zi)return;const W=L.clientX-Ln,Z=L.clientY-Di;Ln=L.clientX,Di=L.clientY;const D=lt.current;D?(D.yaw-=W*.005,D.pitch=cn(D.pitch+Z*.005,-1.35,1.35)):(w.current-=W*.005,M.current=cn(M.current+Z*.005,0,1.52),v.current=cn(v.current*(1+Z*.002),50,3e4))},bc=()=>{zi=!1},_r=L=>{const W=lt.current;W?W.dist=cn(W.dist*(L.deltaY>0?1.1:.9),W.minDist,W.maxDist):v.current=cn(v.current*(L.deltaY>0?1.1:.9),50,3e4)};U.domElement.addEventListener("mousedown",Zi),window.addEventListener("mousemove",gr),window.addEventListener("mouseup",bc),U.domElement.addEventListener("wheel",_r,{passive:!0});const os=["Sun",...C],Ga=L=>L==="Sun"?Se:ge[L],Va=L=>L==="Sun"?Qt:qe[L],ls=L=>{let W=L,Z=null;for(;W&&!Z;)os.includes(W.name)&&(Z=W.name),W=W.parent;return Z},Ec={Saturn:2.4,Uranus:2.15},ka=new j(0,0,0),Gn={active:!1,t0:0,dur:2200,fromPos:new j,fromLook:new j,anchor:null,fromOff:new j,fromLookOff:new j},Ta=()=>{Gn.active=!0,Gn.t0=performance.now(),Gn.fromPos.copy(ot.position),Gn.fromLook.copy(ka);const L=lt.current;if(Gn.anchor=L?L.obj:null,Gn.anchor){const W=new j;Gn.anchor.getWorldPosition(W),Gn.fromOff.copy(ot.position).sub(W),Gn.fromLookOff.copy(ka).sub(W)}},ua=L=>{const W=Ga(L),Z=Va(L),D=new j;W.getWorldPosition(D);const K=Math.atan2(ot.position.x-D.x,ot.position.z-D.z);lt.current={name:L,obj:W,dist:Z*3.6,minDist:Z*(Ec[L]??1.45),maxDist:Z*30,pitch:.22,yaw:K,spin:L==="Sun"?.05:.15},Ta(),st(L)},Xa=()=>{const L=lt.current;lt.current=null,L&&Ta(),st(null)};ht.current.focusBody=ua,ht.current.unfocus=Xa;const Wa=new n1,Aa=new Fe,Ra=new j,vr=new j,rl=new j,xr=L=>{const W=U.domElement.getBoundingClientRect(),Z=L.clientX-W.left,D=L.clientY-W.top;Aa.set(Z/W.width*2-1,-(D/W.height)*2+1),Wa.setFromCamera(Aa,ot);let K=null;for(const Mt of Wa.intersectObjects(os.map(Ga),!0))if(K=ls(Mt.object),K)break;if(!K){ot.getWorldDirection(rl);let Mt=null,Lt=28;for(const et of os){if(Ga(et).getWorldPosition(Ra),vr.subVectors(Ra,ot.position).dot(rl)<=0)continue;Ra.project(ot);const gt=(Ra.x*.5+.5)*W.width,At=(-Ra.y*.5+.5)*W.height,Ut=Math.hypot(gt-Z,At-D);Ut<Lt&&(Lt=Ut,Mt=et)}if(Mt){Ga(Mt).getWorldPosition(Ra),Wa.set(ot.position,vr.subVectors(Ra,ot.position).normalize());const et=Wa.intersectObjects(os.map(Ga),!0)[0],gt=et?ls(et.object):null;(!gt||gt===Mt)&&(K=Mt)}}K&&lt.current?.name!==K&&ua(K)};U.domElement.addEventListener("dblclick",xr);const Mr=L=>{L.key==="Escape"&&Xa()};window.addEventListener("keydown",Mr);const ol=()=>{const L=Math.max(...C.map(Z=>{const D=Le[Z];return D.a>0&&D.e<1?D.a*(1+D.e)*vt:0})),W=Xt?Math.max(...Xt.a)*1.05:0;return Math.max(L,W)};ht.current.fitInner=()=>{Xa();const L=vt*4,W=ot.fov*Math.PI/180;v.current=cn(L/Math.tan(W/2)*1.25,80,1e4),M.current=.9},ht.current.fitFull=()=>{Xa();const L=ol(),W=ot.fov*Math.PI/180;v.current=cn(L/Math.tan(W/2)*1.25,120,3e4),M.current=.9},ht.current.topDown=()=>{Xa(),M.current=1.45},ht.current.iso=()=>{Xa(),M.current=.5,w.current=-Math.PI/4};const Si=(L,W,Z)=>{const D=nt.bodies[Pt[L]],K=Mc*(1+D.m);let Mt=D.x-_t.x,Lt=D.y-_t.y,et=D.z-_t.z,gt=D.vx-_t.vx,At=D.vy-_t.vy,Ut=D.vz-_t.vz;const Nt=Math.hypot(Mt,Lt,et),Ot=Mt/Nt,te=Lt/Nt,Zt=et/Nt,qt=gt*Ot+At*te+Ut*Zt,Ct=gt-qt*Ot,Wt=At-qt*te,Ht=Ut-qt*Zt;let Bt=cn(W,.1,10);const se=ol()/vt*1.2,Gt=.09;for(let Li=0;Li<200;Li++){const di=qt*Ot+Ct*Bt,Ki=qt*te+Wt*Bt,Gi=qt*Zt+Ht*Bt;if((di*di+Ki*Ki+Gi*Gi)/2-K/Nt<0){const wa=Jv(Mt,Lt,et,di,Ki,Gi,K);if(wa.a*(1+wa.e)<=se&&wa.a*(1-wa.e)>=Gt)break}if(Bt=1+(Bt-1)*.94,Math.abs(Bt-1)<1e-4){Bt=1;break}}gt=qt*Ot+Ct*Bt,At=qt*te+Wt*Bt,Ut=qt*Zt+Ht*Bt;const be=Lt*Ut-et*At,we=et*gt-Mt*Ut,Ne=Mt*At-Lt*gt,Nn=Math.hypot(be,we,Ne),pn=Math.acos(cn(Ne/Nn,-1,1));let Ze=-we,In=be;const Kn=Math.hypot(Ze,In);Kn<1e-12?(Ze=1,In=0):(Ze/=Kn,In/=Kn);const oi=ra(Z)-pn,Tn=Math.cos(oi),Ui=Math.sin(oi),yi=(Li,di,Ki)=>{const Gi=Ze*Li+In*di;return[Li*Tn+In*Ki*Ui+Ze*Gi*(1-Tn),di*Tn+-Ze*Ki*Ui+In*Gi*(1-Tn),Ki*Tn+(Ze*di-In*Li)*Ui]};[Mt,Lt,et]=yi(Mt,Lt,et),[gt,At,Ut]=yi(gt,At,Ut),D.x=_t.x+Mt,D.y=_t.y+Lt,D.z=_t.z+et,D.vx=_t.vx+gt,D.vy=_t.vy+At,D.vz=_t.vz+Ut,nt.computeAccel(),Bn(L),Me(L,ge[L].position),N.current=L,lt.current?.name===L&&Ta()},qa=L=>{const W=nt.bodies[Pt[L]],Z=ye[L];W.x=_t.x+Z.x,W.y=_t.y+Z.y,W.z=_t.z+Z.z,W.vx=_t.vx+Z.vx,W.vy=_t.vy+Z.vy,W.vz=_t.vz+Z.vz,Bn(L),Me(L,ge[L].position)};ht.current.apply=Si,ht.current.resetLast=()=>{const L=N.current;L&&(qa(L),nt.computeAccel(),lt.current?.name===L&&Ta())},ht.current.fullReset=()=>{for(const L of C)qa(L);nt.t=0,$r=1,nt.computeAccel(),lt.current&&Ta()};const fa=(L,W)=>{const Z=L.geo.getAttribute("position"),D=Z.array,K=L.a.length,Lt=K>4e4?Math.max(8e3,Math.ceil(K/12)):Math.max(12e3,Math.ceil(K/6));let et=L.cursor,gt=Math.min(K,et+Lt);for(let Ot=et;Ot<gt;Ot++){const te=Ft(L.M[Ot]+L.n[Ot]*W);L.M[Ot]=te;const Zt=L.e[Ot],qt=re(te,Zt),Ct=L.a[Ot]*(1-Zt*Math.cos(te)),Wt=Ct*Math.cos(qt),Ht=Ct*Math.sin(qt),Bt=Math.sin(L.inc[Ot]),se=Math.cos(L.inc[Ot]),Gt=3*Ot;D[Gt]=Wt,D[Gt+1]=Ht*Bt,D[Gt+2]=Ht*se}const At=et*3,Ut=(gt-et)*3,Nt=Z;typeof Nt.setUpdateRange=="function"?Nt.setUpdateRange(At,Ut):(Nt.updateRange||(Nt.updateRange={offset:0,count:-1}),Nt.updateRange.offset=At,Nt.updateRange.count=Ut),Z.needsUpdate=!0,L.cursor=gt===K?0:gt},Sr=()=>{const L=B.clientWidth||window.innerWidth,W=B.clientHeight||window.innerHeight;U.setSize(L,W),ot.aspect=L/W,ot.updateProjectionMatrix()},Tc=new ResizeObserver(Sr);Tc.observe(B);const cs=new j,Hi=new j,ha=new j,Jr=new j;let $r=1,Ac=performance.now();const Rc=()=>{const L=performance.now(),W=Math.min(.25,(L-Ac)/1e3);Ac=L;const Z=nt.advance(W*m.current);for(const et of C)Me(et,ge[et].position);if(--$r<=0){$r=15;for(const et of C)Bn(et);if(St.current){const et=JT+nt.t*864e5,gt=nt.t/365.25;St.current.textContent=et<0xe677d21fdbff?new Date(et).toISOString().slice(0,10)+"  •  T+"+gt.toFixed(2)+" yr":"T+"+Math.round(gt).toLocaleString()+" yr"}}Ha(Z);for(const et of Kr)et.pivot.rotation.y+=et.angVel*Z;fa(ie,Z),fa(Xt,Z),fa(ce,Z),fa(Te,Z),fa(Ge,Z),fa(hn,Z),fa(an,Z);const D=lt.current;if(D)D.yaw+=.06*W,D.obj.rotateY(D.spin*W),D.obj.getWorldPosition(Hi),cs.set(Hi.x+D.dist*Math.cos(D.pitch)*Math.sin(D.yaw),Hi.y+D.dist*Math.sin(D.pitch),Hi.z+D.dist*Math.cos(D.pitch)*Math.cos(D.yaw));else{const et=v.current,gt=w.current,At=M.current;cs.set(et*Math.cos(At)*Math.sin(gt),et*Math.sin(At),et*Math.cos(At)*Math.cos(gt)),Hi.set(0,0,0)}if(Gn.active){const et=cn((L-Gn.t0)/Gn.dur,0,1),gt=et*et*et*(et*(et*6-15)+10);Gn.anchor&&D&&Gn.anchor===D.obj?(ha.subVectors(cs,Hi),ot.position.lerpVectors(Gn.fromOff,ha,gt).add(Hi),ka.lerpVectors(Gn.fromLookOff,Jr.set(0,0,0),gt).add(Hi)):(ot.position.lerpVectors(Gn.fromPos,cs,gt),ka.lerpVectors(Gn.fromLook,Hi,gt));for(const At of os){Ga(At).getWorldPosition(ha);const Ut=Va(At)*1.15,Nt=ot.position.distanceTo(ha);Nt<Ut&&Nt>1e-6&&ot.position.sub(ha).multiplyScalar(Ut/Nt).add(ha)}et>=1&&(Gn.active=!1)}else ot.position.copy(cs),ka.copy(Hi);ot.lookAt(ka),ue.position.copy(ot.position).multiplyScalar(.55);{const et=ot.position.length();ot.getWorldDirection(sn),bn.copy(ot.position).multiplyScalar(-1).normalize();const gt=Math.max(0,sn.dot(bn)),At=cn(Qt*10/Math.max(et,1),0,1),Ut=Math.pow(gt,3)*At,Nt=lt.current,Ot=Nt?cn(Va(Nt.name)*2.2/Nt.dist,0,1)*.18:0,te=.92*(1-.85*Ut)*(1-Ot);for(const Zt of ri)Zt.opacity=(Zt.userData.baseOp||1)*te}{const et=L/1e3;for(const gt of[ie,Xt,ce,Te,Ge,hn,an]){const At=gt.mesh.material.uniforms;At.uTime.value=et,At.uCamPos.value.copy(ot.position)}}Tt.position.set(0,0,0),It.position.set(0,0,0);const K=ge.Earth.position,Mt=new j().copy(K).negate().normalize();fn.sunDir.value.copy(Mt),fn.camPos.value.copy(ot.position);for(const et of["Mercury","Venus","Mars"]){const gt=Yi[et];gt&&gt.sunDir.value.copy(ge[et].position).multiplyScalar(-1).normalize()}Math.random()<W*6&&ne(),Math.random()<W*6&&ne(),ae.rotation.y+=.25*W;for(let et=0;et<le;et++){if(Re[et]<=0)continue;Re[et]+=W;const gt=Jt[et],At=gt.material||null;if(!At)continue;gt.position.addScaledVector(kt[et],W);const Ut=cn(Re[et]/Y[et],0,1);At.opacity=Ut<.15?Ut/.15:1-(Ut-.15)/.85,gt.scale.setScalar(2+6*Ut),(gt.position.length()>Vt||Ut>=1)&&(At.opacity=0,Re[et]=0)}Se.material.uniforms.uTime.value+=W;const Lt=J.userData._spinUpdates;if(Lt)for(let et=0;et<Lt.length;et++)try{Lt[et](W)}catch{}U.render(J,ot),t.current=requestAnimationFrame(Rc)};return t.current=requestAnimationFrame(Rc),ht.current.rebuildBelts=()=>{const L=D=>{J.remove(D.mesh),D.geo.dispose(),D.mesh.material.dispose()};L(ie),L(Xt),L(ce),L(Te),L(Ge),L(hn),L(an),ie=jt(x.current,[2.1,3.3],.12,2.5,.9,()=>{const D=.85+Math.random()*.25;return[D,D,D]},.85,1),Xt=jt(b.current,[42,48],.1,5.5,1.4,()=>{const D=.9+Math.random()*.2;return[D*.75,D*.95,1.15]},.95,.15);const W=Math.max(2e3,Math.floor(x.current*.2));ce=oe(Math.floor(W/2),[4.9,5.5],+Math.PI/3,20,6484878,1),Te=oe(Math.ceil(W/2),[4.9,5.5],-Math.PI/3,20,16739179,1);const Z=Math.max(1e3,Math.floor(x.current*.08));Ge=$t(Math.floor(Z/3),+Math.PI/3),hn=$t(Math.floor(Z/3),Math.PI),an=$t(Z-2*Math.floor(Z/3),-Math.PI/3)},()=>{cancelAnimationFrame(t.current),Tc.disconnect(),U.domElement.removeEventListener("mousedown",Zi),window.removeEventListener("mousemove",gr),window.removeEventListener("mouseup",bc),U.domElement.removeEventListener("wheel",_r),U.domElement.removeEventListener("dblclick",xr),window.removeEventListener("keydown",Mr),window.__solar===ht.current&&delete window.__solar,lt.current=null,B.removeChild(U.domElement),U.dispose(),J.traverse(L=>{L.geometry?.dispose?.();const W=L.material;W&&(Array.isArray(W)?W.forEach(Z=>Z.dispose?.()):W.dispose?.())}),Qe.forEach(L=>{try{L()}catch{}})};function Cf(){const W=document.createElement("canvas");W.width=W.height=256;const Z=W.getContext("2d"),D=Z.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);D.addColorStop(0,"rgba(255,200,120,.95)"),D.addColorStop(.55,"rgba(255,140,50,.35)"),D.addColorStop(1,"rgba(255,110,40,0)"),Z.fillStyle=D,Z.fillRect(0,0,256,256);const K=me(new _i(W));return K.colorSpace=un,K.needsUpdate=!0,K}function ll(){const W=document.createElement("canvas");W.width=W.height=128;const Z=W.getContext("2d"),D=Z.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);D.addColorStop(0,"rgba(255,220,170,.95)"),D.addColorStop(.35,"rgba(255,140,60,.55)"),D.addColorStop(1,"rgba(255,140,60,0)"),Z.fillStyle=D,Z.beginPath(),Z.ellipse(128/2,128/2,128*.48,128*.18,Math.PI/4,0,Math.PI*2),Z.fill();const K=me(new _i(W));return K.colorSpace=un,K.needsUpdate=!0,K}function Df(){const L=`
        varying vec3 vN; varying vec3 vWP; varying vec3 vV;
        void main(){
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal);
          vV = normalize(cameraPosition - vWP);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,W=`
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
      `;return new Wi({vertexShader:L,fragmentShader:W,uniforms:{uTime:{value:0}},transparent:!1,depthWrite:!0,depthTest:!0})}},[]),pe.jsxs("div",{style:{width:"100%",height:"100vh",display:"grid",gridTemplateColumns:"1fr 420px",gap:8,background:"#000"},children:[pe.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[pe.jsx("div",{ref:r,style:{width:"100%",height:"100%"},children:at&&pe.jsx("div",{style:{color:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",fontFamily:"system-ui",fontSize:18},children:"WebGL is required to display the 3D simulation."})}),!at&&!V&&pe.jsx("div",{style:{position:"absolute",left:16,bottom:14,color:"#cbd5e1",fontFamily:"system-ui,sans-serif",fontSize:12.5,background:"rgba(17,24,39,.65)",border:"1px solid #334155",borderRadius:999,padding:"6px 12px",pointerEvents:"none"},children:"Double-click the Sun or a planet for a close-up satellite view"}),!at&&pe.jsx("div",{style:{position:"absolute",right:12,top:12,color:"#cbd5e1",fontFamily:"system-ui,sans-serif",fontSize:12.5,background:"rgba(17,24,39,.65)",border:"1px solid #334155",borderRadius:8,padding:"6px 10px",pointerEvents:"none",fontVariantNumeric:"tabular-nums"},children:pe.jsx("span",{ref:St,children:"2026-07-10  •  T+0.00 yr"})}),!at&&V&&pe.jsx(yA,{body:V,onBack:()=>ht.current.unfocus?.()})]}),pe.jsxs("div",{style:{color:"#e5e7eb",fontFamily:"system-ui,sans-serif",background:"rgba(17,24,39,.7)",border:"1px solid #334155",borderRadius:10,padding:12,height:"calc(100vh - 8px)",overflowY:"auto"},children:[pe.jsx("div",{style:{fontWeight:700,marginBottom:2},children:"🛠 Orbit Editor"}),pe.jsx("div",{style:{opacity:.65,fontSize:11.5,marginBottom:10},children:"True N-body gravity: Sun + 9 planets (AU · days · M☉), Yoshida-4 symplectic, dt ≤ 0.25 d — resonances and precession emerge from the forces."}),pe.jsxs(oc,{label:"Orbital Speed (days/sec)",children:[pe.jsx("input",{type:"range",min:0,max:100,step:1,value:f,onChange:B=>{const dt=parseInt(B.target.value);p(dt);const bt=EA(dt,i,s);c(bt),m.current=bt}}),pe.jsx("span",{style:{textAlign:"right"},children:l})]}),pe.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:[pe.jsx(lp,{onClick:()=>ht.current.topDown?.(),children:"Top‑down"}),pe.jsx(lp,{onClick:()=>ht.current.iso?.(),children:"Isometric"}),pe.jsx(of,{onClick:()=>ht.current.fitInner?.(),children:"Fit Inner"}),pe.jsx(of,{onClick:()=>ht.current.fitFull?.(),children:"Fit Full"})]}),pe.jsxs("div",{style:{marginBottom:10},children:[pe.jsx("div",{style:{marginBottom:6,opacity:.9},children:"Planet"}),pe.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6},children:C.map(B=>pe.jsx(bA,{active:I===B,onClick:()=>P(B),children:B},B))})]}),pe.jsxs("div",{style:{marginTop:8,paddingTop:8,borderTop:"1px solid #374151"},children:[pe.jsxs(oc,{label:"Speed factor (tangential Δv)",children:[pe.jsx("input",{type:"range",min:.1,max:10,step:.01,value:z,onChange:B=>H(parseFloat(B.target.value))}),pe.jsxs("span",{children:[z.toFixed(2),"×"]})]}),pe.jsxs(oc,{label:"Tilt / Inclination (deg)",children:[pe.jsx("input",{type:"range",min:0,max:30,step:.5,value:k,onChange:B=>T(parseFloat(B.target.value))}),pe.jsxs("span",{children:[k.toFixed(1),"°"]})]}),pe.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[pe.jsx(lp,{onClick:()=>ht.current.apply?.(I,z,k),children:"Apply"}),pe.jsx(of,{onClick:()=>ht.current.resetLast?.(),children:"Reset Last"}),pe.jsx(of,{onClick:()=>ht.current.fullReset?.(),children:"Full Reset"})]})]}),pe.jsxs("div",{style:{marginTop:16,paddingTop:10,borderTop:"1px solid #374151"},children:[pe.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Belts"}),pe.jsxs(oc,{label:"Asteroid Density",children:[pe.jsx("input",{type:"range",min:0,max:15e4,step:1e3,value:d,onChange:B=>{const dt=parseInt(B.target.value);g(dt),x.current=dt,ht.current.rebuildBelts?.()}}),pe.jsx("span",{children:d.toLocaleString()})]}),pe.jsxs(oc,{label:"Kuiper Density",children:[pe.jsx("input",{type:"range",min:0,max:6e5,step:5e3,value:_,onChange:B=>{const dt=parseInt(B.target.value);y(dt),b.current=dt,ht.current.rebuildBelts?.()}}),pe.jsx("span",{children:_.toLocaleString()})]}),pe.jsxs("div",{style:{opacity:.85,fontSize:12,marginTop:6},children:["Trojans/Greeks ≈ ",pe.jsx("b",{children:"20%"})," of main belt • Hildas ≈ ",pe.jsx("b",{children:"8%"})," (auto‑scaled)"]})]})]})]})}function yA({body:r,onBack:t}){const i=dA[r];return pe.jsxs("div",{style:{position:"absolute",top:16,left:16,width:340,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",overflowY:"auto",color:"#e5e7eb",fontFamily:"system-ui,sans-serif",background:"rgba(17,24,39,.85)",border:"1px solid #334155",borderRadius:12,padding:16,backdropFilter:"blur(6px)"},children:[pe.jsx("button",{onClick:t,style:{padding:"7px 12px",borderRadius:8,background:"#059669",border:"1px solid #10b981",color:"#fff",cursor:"pointer",fontWeight:600},children:"← Back to Solar System"}),pe.jsx("div",{style:{fontSize:26,fontWeight:800,marginTop:12,lineHeight:1.1},children:r}),pe.jsx("div",{style:{color:"#34d399",fontSize:11.5,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",marginTop:3,marginBottom:10},children:i.kind}),pe.jsx("p",{style:{fontSize:13,lineHeight:1.55,opacity:.92,margin:"0 0 12px"},children:i.blurb}),pe.jsx("div",{children:i.stats.map(([s,l])=>pe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12,padding:"6px 0",borderTop:"1px solid #273244",fontSize:12.5},children:[pe.jsx("span",{style:{opacity:.7,whiteSpace:"nowrap"},children:s}),pe.jsx("span",{style:{textAlign:"right",fontWeight:600},children:l})]},s))}),pe.jsx("div",{style:{opacity:.6,fontSize:11.5,marginTop:10},children:"Drag to orbit • Scroll to zoom • Esc to exit"})]})}function oc({label:r,children:t}){return pe.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 100px",alignItems:"center",gap:10,marginBottom:12},children:[pe.jsx("div",{style:{opacity:.9},children:r}),t]})}function bA({active:r,children:t,onClick:i}){return pe.jsx("button",{onClick:i,style:{padding:"6px 8px",borderRadius:8,background:r?"#059669":"#1f2937",border:`1px solid ${r?"#10b981":"#374151"}`,color:"#e5e7eb",cursor:"pointer"},children:t})}function lp({children:r,onClick:t}){return pe.jsx("button",{onClick:t,style:{padding:"6px 10px",borderRadius:8,background:"#059669",border:"1px solid #10b981",color:"#fff",cursor:"pointer"},children:r})}function of({children:r,onClick:t}){return pe.jsx("button",{onClick:t,style:{padding:"6px 10px",borderRadius:8,background:"#374151",border:"1px solid #4b5563",color:"#e5e7eb",cursor:"pointer"},children:r})}function EA(r,t,i){const s=r/100;return Math.round(t*Math.pow(i/t,s))}function TA(r,t,i){const s=Math.log(r/t)/Math.log(i/t);return Math.round(AA(s)*100)}function AA(r){return Math.max(0,Math.min(1,r))}function RA(){return pe.jsx(SA,{})}dS.createRoot(document.getElementById("root")).render(pe.jsx(RA,{}));
