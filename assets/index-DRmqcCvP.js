(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ud={exports:{}},rc={};var I_;function nS(){if(I_)return rc;I_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return rc.Fragment=t,rc.jsx=i,rc.jsxs=i,rc}var F_;function iS(){return F_||(F_=1,Ud.exports=nS()),Ud.exports}var me=iS(),Ld={exports:{}},oc={},Nd={exports:{}},Pd={};var B_;function aS(){return B_||(B_=1,(function(r){function t(F,B){var dt=F.length;F.push(B);t:for(;0<dt;){var Et=dt-1>>>1,U=F[Et];if(0<l(U,B))F[Et]=B,F[dt]=U,dt=Et;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var B=F[0],dt=F.pop();if(dt!==B){F[0]=dt;t:for(var Et=0,U=F.length,$=U>>>1;Et<$;){var ot=2*(Et+1)-1,vt=F[ot],Zt=ot+1,pe=F[Zt];if(0>l(vt,dt))Zt<U&&0>l(pe,vt)?(F[Et]=pe,F[Zt]=dt,Et=Zt):(F[Et]=vt,F[ot]=dt,Et=ot);else if(Zt<U&&0>l(pe,dt))F[Et]=pe,F[Zt]=dt,Et=Zt;else break t}}return B}function l(F,B){var dt=F.sortIndex-B.sortIndex;return dt!==0?dt:F.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],d=[],g=1,x=null,_=3,y=!1,b=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var B=i(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=F)s(d),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(d)}}function z(F){if(C=!1,N(F),!b)if(i(m)!==null)b=!0,H||(H=!0,st());else{var B=i(d);B!==null&&at(z,B.startTime-F)}}var H=!1,k=-1,T=5,L=-1;function ht(){return M?!0:!(r.unstable_now()-L<T)}function V(){if(M=!1,H){var F=r.unstable_now();L=F;var B=!0;try{t:{b=!1,C&&(C=!1,D(k),k=-1),y=!0;var dt=_;try{e:{for(N(F),x=i(m);x!==null&&!(x.expirationTime>F&&ht());){var Et=x.callback;if(typeof Et=="function"){x.callback=null,_=x.priorityLevel;var U=Et(x.expirationTime<=F);if(F=r.unstable_now(),typeof U=="function"){x.callback=U,N(F),B=!0;break e}x===i(m)&&s(m),N(F)}else s(m);x=i(m)}if(x!==null)B=!0;else{var $=i(d);$!==null&&at(z,$.startTime-F),B=!1}}break t}finally{x=null,_=dt,y=!1}B=void 0}}finally{B?st():H=!1}}}var st;if(typeof I=="function")st=function(){I(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,St=lt.port2;lt.port1.onmessage=V,st=function(){St.postMessage(null)}}else st=function(){v(V,0)};function at(F,B){k=v(function(){F(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(F){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var dt=_;_=B;try{return F()}finally{_=dt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var dt=_;_=F;try{return B()}finally{_=dt}},r.unstable_scheduleCallback=function(F,B,dt){var Et=r.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?Et+dt:Et):dt=Et,F){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=dt+U,F={id:g++,callback:B,priorityLevel:F,startTime:dt,expirationTime:U,sortIndex:-1},dt>Et?(F.sortIndex=dt,t(d,F),i(m)===null&&F===i(d)&&(C?(D(k),k=-1):C=!0,at(z,dt-Et))):(F.sortIndex=U,t(m,F),b||y||(b=!0,H||(H=!0,st()))),F},r.unstable_shouldYield=ht,r.unstable_wrapCallback=function(F){var B=_;return function(){var dt=_;_=B;try{return F.apply(this,arguments)}finally{_=dt}}}})(Pd)),Pd}var z_;function sS(){return z_||(z_=1,Nd.exports=aS()),Nd.exports}var Od={exports:{}},He={};var H_;function rS(){if(H_)return He;H_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function M(U,$,ot){this.props=U,this.context=$,this.refs=C,this.updater=ot||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=M.prototype;function D(U,$,ot){this.props=U,this.context=$,this.refs=C,this.updater=ot||y}var I=D.prototype=new v;I.constructor=D,b(I,M.prototype),I.isPureReactComponent=!0;var N=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function k(U,$,ot,vt,Zt,pe){return ot=pe.ref,{$$typeof:r,type:U,key:$,ref:ot!==void 0?ot:null,props:pe}}function T(U,$){return k(U.type,$,void 0,void 0,void 0,U.props)}function L(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function ht(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ot){return $[ot]})}var V=/\/+/g;function st(U,$){return typeof U=="object"&&U!==null&&U.key!=null?ht(""+U.key):$.toString(36)}function lt(){}function St(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(lt,lt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function at(U,$,ot,vt,Zt){var pe=typeof U;(pe==="undefined"||pe==="boolean")&&(U=null);var nt=!1;if(U===null)nt=!0;else switch(pe){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(U.$$typeof){case r:case t:nt=!0;break;case g:return nt=U._init,at(nt(U._payload),$,ot,vt,Zt)}}if(nt)return Zt=Zt(U),nt=vt===""?"."+st(U,0):vt,N(Zt)?(ot="",nt!=null&&(ot=nt.replace(V,"$&/")+"/"),at(Zt,$,ot,"",function(Re){return Re})):Zt!=null&&(L(Zt)&&(Zt=T(Zt,ot+(Zt.key==null||U&&U.key===Zt.key?"":(""+Zt.key).replace(V,"$&/")+"/")+nt)),$.push(Zt)),1;nt=0;var Pt=vt===""?".":vt+":";if(N(U))for(var _t=0;_t<U.length;_t++)vt=U[_t],pe=Pt+st(vt,_t),nt+=at(vt,$,ot,pe,Zt);else if(_t=_(U),typeof _t=="function")for(U=_t.call(U),_t=0;!(vt=U.next()).done;)vt=vt.value,pe=Pt+st(vt,_t++),nt+=at(vt,$,ot,pe,Zt);else if(pe==="object"){if(typeof U.then=="function")return at(St(U),$,ot,vt,Zt);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return nt}function F(U,$,ot){if(U==null)return U;var vt=[],Zt=0;return at(U,vt,"","",function(pe){return $.call(ot,pe,Zt++)}),vt}function B(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(ot){(U._status===0||U._status===-1)&&(U._status=1,U._result=ot)},function(ot){(U._status===0||U._status===-1)&&(U._status=2,U._result=ot)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var dt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Et(){}return He.Children={map:F,forEach:function(U,$,ot){F(U,function(){$.apply(this,arguments)},ot)},count:function(U){var $=0;return F(U,function(){$++}),$},toArray:function(U){return F(U,function($){return $})||[]},only:function(U){if(!L(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},He.Component=M,He.Fragment=i,He.Profiler=l,He.PureComponent=D,He.StrictMode=s,He.Suspense=m,He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,He.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},He.cache=function(U){return function(){return U.apply(null,arguments)}},He.cloneElement=function(U,$,ot){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var vt=b({},U.props),Zt=U.key,pe=void 0;if($!=null)for(nt in $.ref!==void 0&&(pe=void 0),$.key!==void 0&&(Zt=""+$.key),$)!H.call($,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&$.ref===void 0||(vt[nt]=$[nt]);var nt=arguments.length-2;if(nt===1)vt.children=ot;else if(1<nt){for(var Pt=Array(nt),_t=0;_t<nt;_t++)Pt[_t]=arguments[_t+2];vt.children=Pt}return k(U.type,Zt,void 0,void 0,pe,vt)},He.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},He.createElement=function(U,$,ot){var vt,Zt={},pe=null;if($!=null)for(vt in $.key!==void 0&&(pe=""+$.key),$)H.call($,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(Zt[vt]=$[vt]);var nt=arguments.length-2;if(nt===1)Zt.children=ot;else if(1<nt){for(var Pt=Array(nt),_t=0;_t<nt;_t++)Pt[_t]=arguments[_t+2];Zt.children=Pt}if(U&&U.defaultProps)for(vt in nt=U.defaultProps,nt)Zt[vt]===void 0&&(Zt[vt]=nt[vt]);return k(U,pe,void 0,void 0,null,Zt)},He.createRef=function(){return{current:null}},He.forwardRef=function(U){return{$$typeof:p,render:U}},He.isValidElement=L,He.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:B}},He.memo=function(U,$){return{$$typeof:d,type:U,compare:$===void 0?null:$}},He.startTransition=function(U){var $=z.T,ot={};z.T=ot;try{var vt=U(),Zt=z.S;Zt!==null&&Zt(ot,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(Et,dt)}catch(pe){dt(pe)}finally{z.T=$}},He.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},He.use=function(U){return z.H.use(U)},He.useActionState=function(U,$,ot){return z.H.useActionState(U,$,ot)},He.useCallback=function(U,$){return z.H.useCallback(U,$)},He.useContext=function(U){return z.H.useContext(U)},He.useDebugValue=function(){},He.useDeferredValue=function(U,$){return z.H.useDeferredValue(U,$)},He.useEffect=function(U,$,ot){var vt=z.H;if(typeof ot=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(U,$)},He.useId=function(){return z.H.useId()},He.useImperativeHandle=function(U,$,ot){return z.H.useImperativeHandle(U,$,ot)},He.useInsertionEffect=function(U,$){return z.H.useInsertionEffect(U,$)},He.useLayoutEffect=function(U,$){return z.H.useLayoutEffect(U,$)},He.useMemo=function(U,$){return z.H.useMemo(U,$)},He.useOptimistic=function(U,$){return z.H.useOptimistic(U,$)},He.useReducer=function(U,$,ot){return z.H.useReducer(U,$,ot)},He.useRef=function(U){return z.H.useRef(U)},He.useState=function(U){return z.H.useState(U)},He.useSyncExternalStore=function(U,$,ot){return z.H.useSyncExternalStore(U,$,ot)},He.useTransition=function(){return z.H.useTransition()},He.version="19.1.0",He}var G_;function mm(){return G_||(G_=1,Od.exports=rS()),Od.exports}var Id={exports:{}},Ni={};var V_;function oS(){if(V_)return Ni;V_=1;var r=mm();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ni.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ni.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Ni.flushSync=function(m){var d=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=g,s.d.f()}},Ni.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Ni.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ni.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,x=p(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ni.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Ni.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,x=p(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ni.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Ni.requestFormReset=function(m){s.d.r(m)},Ni.unstable_batchedUpdates=function(m,d){return m(d)},Ni.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Ni.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ni.version="19.1.0",Ni}var k_;function lS(){if(k_)return Id.exports;k_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Id.exports=oS(),Id.exports}var X_;function cS(){if(X_)return oc;X_=1;var r=sS(),t=mm(),i=lS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=h;break}if(R===o){S=!0,o=u,a=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===a){S=!0,a=h,o=u;break}if(R===o){S=!0,o=h,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),I=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function St(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case I:return(e.displayName||"Context")+".Provider";case D:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:St(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return St(e(n))}catch{}}return null}var at=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},Et=[],U=-1;function $(e){return{current:e}}function ot(e){0>U||(e.current=Et[U],Et[U]=null,U--)}function vt(e,n){U++,Et[U]=e.current,e.current=n}var Zt=$(null),pe=$(null),nt=$(null),Pt=$(null);function _t(e,n){switch(vt(nt,n),vt(pe,e),vt(Zt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?u_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=u_(n),e=f_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ot(Zt),vt(Zt,e)}function Re(){ot(Zt),ot(pe),ot(nt)}function ye(e){e.memoizedState!==null&&vt(Pt,e);var n=Zt.current,a=f_(n,e.type);n!==a&&(vt(pe,e),vt(Zt,a))}function be(e){pe.current===e&&(ot(Zt),ot(pe)),Pt.current===e&&(ot(Pt),ec._currentValue=dt)}var Bn=Object.prototype.hasOwnProperty,ze=r.unstable_scheduleCallback,tn=r.unstable_cancelCallback,en=r.unstable_shouldYield,ge=r.unstable_requestPaint,sn=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,zn=r.unstable_ImmediatePriority,rn=r.unstable_UserBlockingPriority,on=r.unstable_NormalPriority,fe=r.unstable_LowPriority,O=r.unstable_IdlePriority,E=r.log,Q=r.unstable_setDisableYieldValue,Tt=null,At=null;function xt(e){if(typeof E=="function"&&Q(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Tt,e)}catch{}}var Kt=Math.clz32?Math.clz32:Ee,qt=Math.log,xe=Math.LN2;function Ee(e){return e>>>=0,e===0?32:31-(qt(e)/xe|0)|0}var It=256,Vt=4194304;function ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function le(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=ae(o):(S&=R,S!==0?u=ae(S):a||(a=R&~e,a!==0&&(u=ae(a))))):(R=o&~h,R!==0?u=ae(R):S!==0?u=ae(S):a||(a=o&~e,a!==0&&(u=ae(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var e=It;return It<<=1,(It&4194048)===0&&(It=256),e}function Wt(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function kt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ne(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,ct=e.hiddenUpdates;for(a=S&~a;0<a;){var Rt=31-Kt(a),Nt=1<<Rt;R[Rt]=0,G[Rt]=-1;var ft=ct[Rt];if(ft!==null)for(ct[Rt]=null,Rt=0;Rt<ft.length;Rt++){var mt=ft[Rt];mt!==null&&(mt.lane&=-536870913)}a&=~Nt}o!==0&&yt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function yt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function oe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Kt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ve(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ln(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nn(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:D_(e.type))}function wi(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Wn=Math.random().toString(36).slice(2),ei="__reactFiber$"+Wn,bn="__reactProps$"+Wn,wa="__reactContainer$"+Wn,zi="__reactEvents$"+Wn,pi="__reactListeners$"+Wn,Qn="__reactHandles$"+Wn,Os="__reactResources$"+Wn,Ga="__reactMarker$"+Wn;function as(e){delete e[ei],delete e[bn],delete e[zi],delete e[pi],delete e[Qn]}function Yi(e){var n=e[ei];if(n)return n;for(var a=e.parentNode;a;){if(n=a[wa]||a[ei]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=m_(e);e!==null;){if(a=e[ei])return a;e=m_(e)}return n}e=a,a=e.parentNode}return null}function pa(e){if(e=e[ei]||e[wa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function $i(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ma(e){var n=e[Os];return n||(n=e[Os]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function qn(e){e[Ga]=!0}var Is=new Set,Yn={};function ga(e,n){Va(e,n),Va(e+"Capture",n)}function Va(e,n){for(Yn[e]=n,e=0;e<n.length;e++)Is.add(n[e])}var pl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sr={},w={};function tt(e){return Bn.call(w,e)?!0:Bn.call(Sr,e)?!1:pl.test(e)?w[e]=!0:(Sr[e]=!0,!1)}function gt(e,n,a){if(tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ut(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function it(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var jt,ie;function Yt(e){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+ie}var re=!1;function ce(e,n){if(!e||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Nt=function(){throw Error()};if(Object.defineProperty(Nt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Nt,[])}catch(mt){var ft=mt}Reflect.construct(e,[],Nt)}else{try{Nt.call()}catch(mt){ft=mt}e.call(Nt.prototype)}}else{try{throw Error()}catch(mt){ft=mt}(Nt=e())&&typeof Nt.catch=="function"&&Nt.catch(function(){})}}catch(mt){if(mt&&ft&&typeof mt.stack=="string")return[mt.stack,ft.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var G=S.split(`
`),ct=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ct.length&&!ct[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ct.length)for(o=G.length-1,u=ct.length-1;1<=o&&0<=u&&G[o]!==ct[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ct[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ct[u]){var Rt=`
`+G[o].replace(" at new "," at ");return e.displayName&&Rt.includes("<anonymous>")&&(Rt=Rt.replace("<anonymous>",e.displayName)),Rt}while(1<=o&&0<=u);break}}}finally{re=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function De(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Yt("Activity");default:return""}}function Pe(e){try{var n="";do n+=De(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function En(e){var n=qe(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fn(e){e._valueTracker||(e._valueTracker=En(e))}function Ze(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function On(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ue=/[\n"\\]/g;function xn(e){return e.replace(ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(e,n,a,o,u,h,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+se(n)):e.value!==""+se(n)&&(e.value=""+se(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Di(e,S,se(n)):a!=null?Di(e,S,se(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+se(R):e.removeAttribute("name")}function Ci(e,n,a,o,u,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+se(a):"",n=n!=null?""+se(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Di(e,n,a){n==="number"&&On(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ui(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+se(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ca(e,n,a){if(n!=null&&(n=""+se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+se(a):""}function hn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(at(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=se(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Nn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ta=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ta.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&kn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&kn(e,h,n[h])}function ji(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yr(e){return Pc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var eo=null;function no(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,ea=null;function io(e){var n=pa(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ye(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ze(o)}break t;case"textarea":Ca(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ui(e,!!a.multiple,n,!1)}}}var ao=!1;function Oc(e,n,a){if(ao)return e(n,a);ao=!0;try{var o=e(n);return o}finally{if(ao=!1,(_a!==null||ea!==null)&&(mu(),_a&&(n=_a,e=ea,ea=_a=null,io(n),e)))for(n=0;n<e.length;n++)io(e[n])}}function va(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=!1;if(Tn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{ss=!1}var Gi=null,zs=null,br=null;function ka(){if(br)return br;var e,n=zs,a=n.length,o,u="value"in Gi?Gi.value:Gi.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return br=u.slice(e,1<o?1-o:void 0)}function Er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function ml(){return!1}function bi(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Tr:ml,this.isPropagationStopped=ml,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=bi(Xa),Hs=g({},Xa,{view:0,detail:0}),rs=bi(Hs),gl,ro,Da,Vi=g({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:J,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Da&&(Da&&e.type==="mousemove"?(gl=e.screenX-Da.screenX,ro=e.screenY-Da.screenY):ro=gl=0,Da=e),gl)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),os=bi(Vi),zf=g({},Vi,{dataTransfer:0}),_l=bi(zf),Ic=g({},Hs,{relatedTarget:0}),oo=bi(Ic),Hf=g({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Gf=bi(Hf),Vf=g({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P=bi(Vf),q=g({},Xa,{data:0}),Z=bi(q),A={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ct(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mt[e])?!!n[e]:!1}function J(){return Ct}var pt=g({},Hs,{key:function(e){if(e.key){var n=A[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:J,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bt=bi(pt),Ot=g({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wt=bi(Ot),zt=g({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:J}),te=bi(zt),$t=g({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ht=bi($t),Dt=g({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xt=bi(Dt),Gt=g({},Xa,{newState:0,oldState:0}),Lt=bi(Gt),Qt=[9,13,27,32],Ft=Tn&&"CompositionEvent"in window,de=null;Tn&&"documentMode"in document&&(de=document.documentMode);var we=Tn&&"TextEvent"in window&&!de,Ie=Tn&&(!Ft||de&&8<de&&11>=de),mn=" ",Ke=!1;function Be(e,n){switch(e){case"keyup":return Qt.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function jn(e,n){switch(e){case"compositionend":return gn(n);case"keypress":return n.which!==32?null:(Ke=!0,mn);case"textInput":return e=n.data,e===mn&&Ke?null:e;default:return null}}function Hn(e,n){if(Mn)return e==="compositionend"||!Ft&&Be(e,n)?(e=ka(),br=zs=Gi=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ie&&n.locale!=="ko"?null:n.data;default:return null}}var Me={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _e(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Me[e.type]:n==="textarea"}function Te(e,n,a,o){_a?ea?ea.push(o):ea=[o]:_a=o,n=Su(n,"onChange"),0<n.length&&(a=new so("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ae=null,Sn=null;function mi(e){s_(e,0)}function Zn(e){var n=$i(e);if(Ze(n))return e}function dn(e,n){if(e==="change")return n}var ci=!1;if(Tn){var gi;if(Tn){var ls="oninput"in document;if(!ls){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),ls=typeof Gs.oninput=="function"}gi=ls}else gi=!1;ci=gi&&(!document.documentMode||9<document.documentMode)}function cs(){Ae&&(Ae.detachEvent("onpropertychange",Ar),Sn=Ae=null)}function Ar(e){if(e.propertyName==="value"&&Zn(Sn)){var n=[];Te(n,Sn,e,no(e)),Oc(mi,n)}}function vl(e,n,a){e==="focusin"?(cs(),Ae=n,Sn=a,Ae.attachEvent("onpropertychange",Ar)):e==="focusout"&&cs()}function xl(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zn(Sn)}function lo(e,n){if(e==="click")return Zn(n)}function us(e,n){if(e==="input"||e==="change")return Zn(n)}function Ml(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var na=typeof Object.is=="function"?Object.is:Ml;function Sl(e,n){if(na(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Bn.call(n,u)||!na(e[u],n[u]))return!1}return!0}function Um(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lm(e,n){var a=Um(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Um(a)}}function Nm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=On(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=On(e.document)}return n}function kf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Fx=Tn&&"documentMode"in document&&11>=document.documentMode,co=null,Xf=null,yl=null,Wf=!1;function Om(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wf||co==null||co!==On(o)||(o=co,"selectionStart"in o&&kf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yl&&Sl(yl,o)||(yl=o,o=Su(Xf,"onSelect"),0<o.length&&(n=new so("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=co)))}function Rr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var uo={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},qf={},Im={};Tn&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function wr(e){if(qf[e])return qf[e];if(!uo[e])return e;var n=uo[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Im)return qf[e]=n[a];return e}var Fm=wr("animationend"),Bm=wr("animationiteration"),zm=wr("animationstart"),Bx=wr("transitionrun"),zx=wr("transitionstart"),Hx=wr("transitioncancel"),Hm=wr("transitionend"),Gm=new Map,Yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yf.push("scrollEnd");function Ua(e,n){Gm.set(e,n),ga(n,[e])}var Vm=new WeakMap;function xa(e,n){if(typeof e=="object"&&e!==null){var a=Vm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pe(n)},Vm.set(e,n),n)}return{value:e,source:n,stack:Pe(n)}}var Ma=[],fo=0,jf=0;function Fc(){for(var e=fo,n=jf=fo=0;n<e;){var a=Ma[n];Ma[n++]=null;var o=Ma[n];Ma[n++]=null;var u=Ma[n];Ma[n++]=null;var h=Ma[n];if(Ma[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&km(a,u,h)}}function Bc(e,n,a,o){Ma[fo++]=e,Ma[fo++]=n,Ma[fo++]=a,Ma[fo++]=o,jf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Zf(e,n,a,o){return Bc(e,n,a,o),zc(e)}function ho(e,n){return Bc(e,null,null,n),zc(e)}function km(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Kt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function zc(e){if(50<Yl)throw Yl=0,ed=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var po={};function Gx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ia(e,n,a,o){return new Gx(e,n,a,o)}function Kf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fs(e,n){var a=e.alternate;return a===null?(a=ia(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Hc(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Kf(e)&&(S=1);else if(typeof e=="string")S=kM(e,a,Zt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ia(31,a,n,u),e.elementType=L,e.lanes=h,e;case b:return Cr(a.children,u,h,n);case C:S=8,u|=24;break;case M:return e=ia(12,a,n,u|2),e.elementType=M,e.lanes=h,e;case z:return e=ia(13,a,n,u),e.elementType=z,e.lanes=h,e;case H:return e=ia(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case I:S=10;break t;case D:S=9;break t;case N:S=11;break t;case k:S=14;break t;case T:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ia(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Cr(e,n,a,o){return e=ia(7,e,o,n),e.lanes=a,e}function Qf(e,n,a){return e=ia(6,e,null,n),e.lanes=a,e}function Jf(e,n,a){return n=ia(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var mo=[],go=0,Gc=null,Vc=0,Sa=[],ya=0,Dr=null,hs=1,ds="";function Ur(e,n){mo[go++]=Vc,mo[go++]=Gc,Gc=e,Vc=n}function Wm(e,n,a){Sa[ya++]=hs,Sa[ya++]=ds,Sa[ya++]=Dr,Dr=e;var o=hs;e=ds;var u=32-Kt(o)-1;o&=~(1<<u),a+=1;var h=32-Kt(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,hs=1<<32-Kt(n)+u|a<<u|o,ds=h+e}else hs=1<<h|a<<u|o,ds=e}function $f(e){e.return!==null&&(Ur(e,1),Wm(e,1,0))}function th(e){for(;e===Gc;)Gc=mo[--go],mo[go]=null,Vc=mo[--go],mo[go]=null;for(;e===Dr;)Dr=Sa[--ya],Sa[ya]=null,ds=Sa[--ya],Sa[ya]=null,hs=Sa[--ya],Sa[ya]=null}var ki=null,Jn=null,vn=!1,Lr=null,Wa=!1,eh=Error(s(519));function Nr(e){var n=Error(s(418,""));throw Tl(xa(n,e)),eh}function qm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ei]=e,n[bn]=o,a){case"dialog":Je("cancel",n),Je("close",n);break;case"iframe":case"object":case"embed":Je("load",n);break;case"video":case"audio":for(a=0;a<Zl.length;a++)Je(Zl[a],n);break;case"source":Je("error",n);break;case"img":case"image":case"link":Je("error",n),Je("load",n);break;case"details":Je("toggle",n);break;case"input":Je("invalid",n),Ci(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),fn(n);break;case"select":Je("invalid",n);break;case"textarea":Je("invalid",n),hn(n,o.value,o.defaultValue,o.children),fn(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||c_(n.textContent,a)?(o.popover!=null&&(Je("beforetoggle",n),Je("toggle",n)),o.onScroll!=null&&Je("scroll",n),o.onScrollEnd!=null&&Je("scrollend",n),o.onClick!=null&&(n.onclick=yu),n=!0):n=!1,n||Nr(e)}function Ym(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 13:Wa=!1;return;case 27:case 3:Wa=!0;return;default:ki=ki.return}}function bl(e){if(e!==ki)return!1;if(!vn)return Ym(e),vn=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_d(e.type,e.memoizedProps)),a=!a),a&&Jn&&Nr(e),Ym(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Jn=Na(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Jn=null}}else n===27?(n=Jn,ir(e.type)?(e=Sd,Sd=null,Jn=e):Jn=n):Jn=ki?Na(e.stateNode.nextSibling):null;return!0}function El(){Jn=ki=null,vn=!1}function jm(){var e=Lr;return e!==null&&(Qi===null?Qi=e:Qi.push.apply(Qi,e),Lr=null),e}function Tl(e){Lr===null?Lr=[e]:Lr.push(e)}var nh=$(null),Pr=null,ps=null;function Vs(e,n,a){vt(nh,n._currentValue),n._currentValue=a}function ms(e){e._currentValue=nh.current,ot(nh)}function ih(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function ah(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),ih(h.return,a,e),o||(S=null);break t}h=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),ih(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Al(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;na(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===Pt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}u=u.return}e!==null&&ah(n,e,a,o),n.flags|=262144}function kc(e){for(e=e.firstContext;e!==null;){if(!na(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Or(e){Pr=e,ps=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Li(e){return Zm(Pr,e)}function Xc(e,n){return Pr===null&&Or(e),Zm(e,n)}function Zm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ps===null){if(e===null)throw Error(s(308));ps=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ps=ps.next=n;return a}var Vx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},kx=r.unstable_scheduleCallback,Xx=r.unstable_NormalPriority,ui={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new Vx,data:new Map,refCount:0}}function Rl(e){e.refCount--,e.refCount===0&&kx(Xx,function(){e.controller.abort()})}var wl=null,rh=0,_o=0,vo=null;function Wx(e,n){if(wl===null){var a=wl=[];rh=0,_o=ld(),vo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return rh++,n.then(Km,Km),n}function Km(){if(--rh===0&&wl!==null){vo!==null&&(vo.status="fulfilled");var e=wl;wl=null,_o=0,vo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function qx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Qm=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wx(e,n),Qm!==null&&Qm(e,n)};var Ir=$(null);function oh(){var e=Ir.current;return e!==null?e:In.pooledCache}function Wc(e,n){n===null?vt(Ir,Ir.current):vt(Ir,n.pool)}function Jm(){var e=oh();return e===null?null:{parent:ui._currentValue,pool:e}}var Cl=Error(s(460)),$m=Error(s(474)),qc=Error(s(542)),lh={then:function(){}};function t0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yc(){}function e0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yc,Yc),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,i0(e),e;default:if(typeof n.status=="string")n.then(Yc,Yc);else{if(e=In,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,i0(e),e}throw Dl=n,Cl}}var Dl=null;function n0(){if(Dl===null)throw Error(s(459));var e=Dl;return Dl=null,e}function i0(e){if(e===Cl||e===qc)throw Error(s(483))}var ks=!1;function ch(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ws(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(An&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=zc(e),km(e,null,a),n}return Bc(e,o,n,a),zc(e)}function Ul(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,oe(e,a)}}function fh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var hh=!1;function Ll(){if(hh){var e=vo;if(e!==null)throw e}}function Nl(e,n,a,o){hh=!1;var u=e.updateQueue;ks=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,ct=G.next;G.next=null,S===null?h=ct:S.next=ct,S=G;var Rt=e.alternate;Rt!==null&&(Rt=Rt.updateQueue,R=Rt.lastBaseUpdate,R!==S&&(R===null?Rt.firstBaseUpdate=ct:R.next=ct,Rt.lastBaseUpdate=G))}if(h!==null){var Nt=u.baseState;S=0,Rt=ct=G=null,R=h;do{var ft=R.lane&-536870913,mt=ft!==R.lane;if(mt?(cn&ft)===ft:(o&ft)===ft){ft!==0&&ft===_o&&(hh=!0),Rt!==null&&(Rt=Rt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Oe=e,Ce=R;ft=n;var Ln=a;switch(Ce.tag){case 1:if(Oe=Ce.payload,typeof Oe=="function"){Nt=Oe.call(Ln,Nt,ft);break t}Nt=Oe;break t;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Ce.payload,ft=typeof Oe=="function"?Oe.call(Ln,Nt,ft):Oe,ft==null)break t;Nt=g({},Nt,ft);break t;case 2:ks=!0}}ft=R.callback,ft!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[ft]:mt.push(ft))}else mt={lane:ft,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Rt===null?(ct=Rt=mt,G=Nt):Rt=Rt.next=mt,S|=ft;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;mt=R,R=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);Rt===null&&(G=Nt),u.baseState=G,u.firstBaseUpdate=ct,u.lastBaseUpdate=Rt,h===null&&(u.shared.lanes=0),$s|=S,e.lanes=S,e.memoizedState=Nt}}function a0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function s0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)a0(a[e],n)}var xo=$(null),jc=$(0);function r0(e,n){e=ys,vt(jc,e),vt(xo,n),ys=e|n.baseLanes}function dh(){vt(jc,ys),vt(xo,xo.current)}function ph(){ys=jc.current,ot(xo),ot(jc)}var qs=0,Xe=null,Dn=null,si=null,Zc=!1,Mo=!1,Fr=!1,Kc=0,Pl=0,So=null,Yx=0;function ni(){throw Error(s(321))}function mh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!na(e[a],n[a]))return!1;return!0}function gh(e,n,a,o,u,h){return qs=h,Xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?k0:X0,Fr=!1,h=a(o,u),Fr=!1,Mo&&(h=l0(n,a,o,u)),o0(e),h}function o0(e){F.H=nu;var n=Dn!==null&&Dn.next!==null;if(qs=0,si=Dn=Xe=null,Zc=!1,Pl=0,So=null,n)throw Error(s(300));e===null||_i||(e=e.dependencies,e!==null&&kc(e)&&(_i=!0))}function l0(e,n,a,o){Xe=e;var u=0;do{if(Mo&&(So=null),Pl=0,Mo=!1,25<=u)throw Error(s(301));if(u+=1,si=Dn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=tM,h=n(a,o)}while(Mo);return h}function jx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Ol(n):n,e=e.useState()[0],(Dn!==null?Dn.memoizedState:null)!==e&&(Xe.flags|=1024),n}function _h(){var e=Kc!==0;return Kc=0,e}function vh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function xh(e){if(Zc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Zc=!1}qs=0,si=Dn=Xe=null,Mo=!1,Pl=Kc=0,So=null}function Zi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return si===null?Xe.memoizedState=si=e:si=si.next=e,si}function ri(){if(Dn===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=Dn.next;var n=si===null?Xe.memoizedState:si.next;if(n!==null)si=n,Dn=e;else{if(e===null)throw Xe.alternate===null?Error(s(467)):Error(s(310));Dn=e,e={memoizedState:Dn.memoizedState,baseState:Dn.baseState,baseQueue:Dn.baseQueue,queue:Dn.queue,next:null},si===null?Xe.memoizedState=si=e:si=si.next=e}return si}function Mh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var n=Pl;return Pl+=1,So===null&&(So=[]),e=e0(So,e,n),n=Xe,(si===null?n.memoizedState:si.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?k0:X0),e}function Qc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===I)return Li(e)}throw Error(s(438,String(e)))}function Sh(e){var n=null,a=Xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Mh(),Xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ht;return n.index++,a}function gs(e,n){return typeof n=="function"?n(e):n}function Jc(e){var n=ri();return yh(n,Dn,e)}function yh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=S=null,G=null,ct=n,Rt=!1;do{var Nt=ct.lane&-536870913;if(Nt!==ct.lane?(cn&Nt)===Nt:(qs&Nt)===Nt){var ft=ct.revertLane;if(ft===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null}),Nt===_o&&(Rt=!0);else if((qs&ft)===ft){ct=ct.next,ft===_o&&(Rt=!0);continue}else Nt={lane:0,revertLane:ct.revertLane,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null},G===null?(R=G=Nt,S=h):G=G.next=Nt,Xe.lanes|=ft,$s|=ft;Nt=ct.action,Fr&&a(h,Nt),h=ct.hasEagerState?ct.eagerState:a(h,Nt)}else ft={lane:Nt,revertLane:ct.revertLane,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null},G===null?(R=G=ft,S=h):G=G.next=ft,Xe.lanes|=Nt,$s|=Nt;ct=ct.next}while(ct!==null&&ct!==n);if(G===null?S=h:G.next=R,!na(h,e.memoizedState)&&(_i=!0,Rt&&(a=vo,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function bh(e){var n=ri(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);na(h,n.memoizedState)||(_i=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function c0(e,n,a){var o=Xe,u=ri(),h=vn;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!na((Dn||u).memoizedState,a);S&&(u.memoizedState=a,_i=!0),u=u.queue;var R=h0.bind(null,o,u,e);if(Il(2048,8,R,[e]),u.getSnapshot!==n||S||si!==null&&si.memoizedState.tag&1){if(o.flags|=2048,yo(9,$c(),f0.bind(null,o,u,a,n),null),In===null)throw Error(s(349));h||(qs&124)!==0||u0(o,n,a)}return a}function u0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Xe.updateQueue,n===null?(n=Mh(),Xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function f0(e,n,a,o){n.value=a,n.getSnapshot=o,d0(n)&&p0(e)}function h0(e,n,a){return a(function(){d0(n)&&p0(e)})}function d0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!na(e,a)}catch{return!0}}function p0(e){var n=ho(e,2);n!==null&&la(n,e,2)}function Eh(e){var n=Zi();if(typeof e=="function"){var a=e;if(e=a(),Fr){xt(!0);try{a()}finally{xt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:e},n}function m0(e,n,a,o){return e.baseState=a,yh(e,Dn,typeof o=="function"?o:gs)}function Zx(e,n,a,o,u){if(eu(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,g0(n,h)):(h.next=a.next,n.pending=a.next=h)}}function g0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=F.T,S={};F.T=S;try{var R=a(u,o),G=F.S;G!==null&&G(S,R),_0(e,n,R)}catch(ct){Th(e,n,ct)}finally{F.T=h}}else try{h=a(u,o),_0(e,n,h)}catch(ct){Th(e,n,ct)}}function _0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){v0(e,n,o)},function(o){return Th(e,n,o)}):v0(e,n,a)}function v0(e,n,a){n.status="fulfilled",n.value=a,x0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,g0(e,a)))}function Th(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,x0(n),n=n.next;while(n!==o)}e.action=null}function x0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function M0(e,n){return n}function S0(e,n){if(vn){var a=In.formState;if(a!==null){t:{var o=Xe;if(vn){if(Jn){e:{for(var u=Jn,h=Wa;u.nodeType!==8;){if(!h){u=null;break e}if(u=Na(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Jn=Na(u.nextSibling),o=u.data==="F!";break t}}Nr(o)}o=!1}o&&(n=a[0])}}return a=Zi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:M0,lastRenderedState:n},a.queue=o,a=H0.bind(null,Xe,o),o.dispatch=a,o=Eh(!1),h=Dh.bind(null,Xe,!1,o.queue),o=Zi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Zx.bind(null,Xe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function y0(e){var n=ri();return b0(n,Dn,e)}function b0(e,n,a){if(n=yh(e,n,M0)[0],e=Jc(gs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ol(n)}catch(S){throw S===Cl?qc:S}else o=n;n=ri();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Xe.flags|=2048,yo(9,$c(),Kx.bind(null,u,a),null)),[o,h,e]}function Kx(e,n){e.action=n}function E0(e){var n=ri(),a=Dn;if(a!==null)return b0(n,a,e);ri(),n=n.memoizedState,a=ri();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function yo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Xe.updateQueue,n===null&&(n=Mh(),Xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function $c(){return{destroy:void 0,resource:void 0}}function T0(){return ri().memoizedState}function tu(e,n,a,o){var u=Zi();o=o===void 0?null:o,Xe.flags|=e,u.memoizedState=yo(1|n,$c(),a,o)}function Il(e,n,a,o){var u=ri();o=o===void 0?null:o;var h=u.memoizedState.inst;Dn!==null&&o!==null&&mh(o,Dn.memoizedState.deps)?u.memoizedState=yo(n,h,a,o):(Xe.flags|=e,u.memoizedState=yo(1|n,h,a,o))}function A0(e,n){tu(8390656,8,e,n)}function R0(e,n){Il(2048,8,e,n)}function w0(e,n){return Il(4,2,e,n)}function C0(e,n){return Il(4,4,e,n)}function D0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function U0(e,n,a){a=a!=null?a.concat([e]):null,Il(4,4,D0.bind(null,n,e),a)}function Ah(){}function L0(e,n){var a=ri();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&mh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function N0(e,n){var a=ri();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&mh(n,o[1]))return o[0];if(o=e(),Fr){xt(!0);try{e()}finally{xt(!1)}}return a.memoizedState=[o,n],o}function Rh(e,n,a){return a===void 0||(qs&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Ig(),Xe.lanes|=e,$s|=e,a)}function P0(e,n,a,o){return na(a,n)?a:xo.current!==null?(e=Rh(e,a,o),na(e,n)||(_i=!0),e):(qs&42)===0?(_i=!0,e.memoizedState=a):(e=Ig(),Xe.lanes|=e,$s|=e,n)}function O0(e,n,a,o,u){var h=B.p;B.p=h!==0&&8>h?h:8;var S=F.T,R={};F.T=R,Dh(e,!1,n,a);try{var G=u(),ct=F.S;if(ct!==null&&ct(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Rt=qx(G,o);Fl(e,n,Rt,oa(e))}else Fl(e,n,o,oa(e))}catch(Nt){Fl(e,n,{then:function(){},status:"rejected",reason:Nt},oa())}finally{B.p=h,F.T=S}}function Qx(){}function wh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=I0(e).queue;O0(e,u,n,dt,a===null?Qx:function(){return F0(e),a(o)})}function I0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function F0(e){var n=I0(e).next.queue;Fl(e,n,{},oa())}function Ch(){return Li(ec)}function B0(){return ri().memoizedState}function z0(){return ri().memoizedState}function Jx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oa();e=Xs(a);var o=Ws(n,e,a);o!==null&&(la(o,n,a),Ul(o,n,a)),n={cache:sh()},e.payload=n;return}n=n.return}}function $x(e,n,a){var o=oa();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},eu(e)?G0(n,a):(a=Zf(e,n,a,o),a!==null&&(la(a,e,o),V0(a,n,o)))}function H0(e,n,a){var o=oa();Fl(e,n,a,o)}function Fl(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(eu(e))G0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,R=h(S,a);if(u.hasEagerState=!0,u.eagerState=R,na(R,S))return Bc(e,n,u,0),In===null&&Fc(),!1}catch{}if(a=Zf(e,n,u,o),a!==null)return la(a,e,o),V0(a,n,o),!0}return!1}function Dh(e,n,a,o){if(o={lane:2,revertLane:ld(),action:o,hasEagerState:!1,eagerState:null,next:null},eu(e)){if(n)throw Error(s(479))}else n=Zf(e,a,o,2),n!==null&&la(n,e,2)}function eu(e){var n=e.alternate;return e===Xe||n!==null&&n===Xe}function G0(e,n){Mo=Zc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function V0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,oe(e,a)}}var nu={readContext:Li,use:Qc,useCallback:ni,useContext:ni,useEffect:ni,useImperativeHandle:ni,useLayoutEffect:ni,useInsertionEffect:ni,useMemo:ni,useReducer:ni,useRef:ni,useState:ni,useDebugValue:ni,useDeferredValue:ni,useTransition:ni,useSyncExternalStore:ni,useId:ni,useHostTransitionStatus:ni,useFormState:ni,useActionState:ni,useOptimistic:ni,useMemoCache:ni,useCacheRefresh:ni},k0={readContext:Li,use:Qc,useCallback:function(e,n){return Zi().memoizedState=[e,n===void 0?null:n],e},useContext:Li,useEffect:A0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,tu(4194308,4,D0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return tu(4194308,4,e,n)},useInsertionEffect:function(e,n){tu(4,2,e,n)},useMemo:function(e,n){var a=Zi();n=n===void 0?null:n;var o=e();if(Fr){xt(!0);try{e()}finally{xt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zi();if(a!==void 0){var u=a(n);if(Fr){xt(!0);try{a(n)}finally{xt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=$x.bind(null,Xe,e),[o.memoizedState,e]},useRef:function(e){var n=Zi();return e={current:e},n.memoizedState=e},useState:function(e){e=Eh(e);var n=e.queue,a=H0.bind(null,Xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ah,useDeferredValue:function(e,n){var a=Zi();return Rh(a,e,n)},useTransition:function(){var e=Eh(!1);return e=O0.bind(null,Xe,e.queue,!0,!1),Zi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Xe,u=Zi();if(vn){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),In===null)throw Error(s(349));(cn&124)!==0||u0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,A0(h0.bind(null,o,h,e),[e]),o.flags|=2048,yo(9,$c(),f0.bind(null,o,h,a,n),null),a},useId:function(){var e=Zi(),n=In.identifierPrefix;if(vn){var a=ds,o=hs;a=(o&~(1<<32-Kt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Kc++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Yx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ch,useFormState:S0,useActionState:S0,useOptimistic:function(e){var n=Zi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dh.bind(null,Xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Sh,useCacheRefresh:function(){return Zi().memoizedState=Jx.bind(null,Xe)}},X0={readContext:Li,use:Qc,useCallback:L0,useContext:Li,useEffect:R0,useImperativeHandle:U0,useInsertionEffect:w0,useLayoutEffect:C0,useMemo:N0,useReducer:Jc,useRef:T0,useState:function(){return Jc(gs)},useDebugValue:Ah,useDeferredValue:function(e,n){var a=ri();return P0(a,Dn.memoizedState,e,n)},useTransition:function(){var e=Jc(gs)[0],n=ri().memoizedState;return[typeof e=="boolean"?e:Ol(e),n]},useSyncExternalStore:c0,useId:B0,useHostTransitionStatus:Ch,useFormState:y0,useActionState:y0,useOptimistic:function(e,n){var a=ri();return m0(a,Dn,e,n)},useMemoCache:Sh,useCacheRefresh:z0},tM={readContext:Li,use:Qc,useCallback:L0,useContext:Li,useEffect:R0,useImperativeHandle:U0,useInsertionEffect:w0,useLayoutEffect:C0,useMemo:N0,useReducer:bh,useRef:T0,useState:function(){return bh(gs)},useDebugValue:Ah,useDeferredValue:function(e,n){var a=ri();return Dn===null?Rh(a,e,n):P0(a,Dn.memoizedState,e,n)},useTransition:function(){var e=bh(gs)[0],n=ri().memoizedState;return[typeof e=="boolean"?e:Ol(e),n]},useSyncExternalStore:c0,useId:B0,useHostTransitionStatus:Ch,useFormState:E0,useActionState:E0,useOptimistic:function(e,n){var a=ri();return Dn!==null?m0(a,Dn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Sh,useCacheRefresh:z0},bo=null,Bl=0;function iu(e){var n=Bl;return Bl+=1,bo===null&&(bo=[]),e0(bo,e,n)}function zl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function au(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function W0(e){var n=e._init;return n(e._payload)}function q0(e){function n(et,Y){if(e){var rt=et.deletions;rt===null?(et.deletions=[Y],et.flags|=16):rt.push(Y)}}function a(et,Y){if(!e)return null;for(;Y!==null;)n(et,Y),Y=Y.sibling;return null}function o(et){for(var Y=new Map;et!==null;)et.key!==null?Y.set(et.key,et):Y.set(et.index,et),et=et.sibling;return Y}function u(et,Y){return et=fs(et,Y),et.index=0,et.sibling=null,et}function h(et,Y,rt){return et.index=rt,e?(rt=et.alternate,rt!==null?(rt=rt.index,rt<Y?(et.flags|=67108866,Y):rt):(et.flags|=67108866,Y)):(et.flags|=1048576,Y)}function S(et){return e&&et.alternate===null&&(et.flags|=67108866),et}function R(et,Y,rt,Ut){return Y===null||Y.tag!==6?(Y=Qf(rt,et.mode,Ut),Y.return=et,Y):(Y=u(Y,rt),Y.return=et,Y)}function G(et,Y,rt,Ut){var he=rt.type;return he===b?Rt(et,Y,rt.props.children,Ut,rt.key):Y!==null&&(Y.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===T&&W0(he)===Y.type)?(Y=u(Y,rt.props),zl(Y,rt),Y.return=et,Y):(Y=Hc(rt.type,rt.key,rt.props,null,et.mode,Ut),zl(Y,rt),Y.return=et,Y)}function ct(et,Y,rt,Ut){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==rt.containerInfo||Y.stateNode.implementation!==rt.implementation?(Y=Jf(rt,et.mode,Ut),Y.return=et,Y):(Y=u(Y,rt.children||[]),Y.return=et,Y)}function Rt(et,Y,rt,Ut,he){return Y===null||Y.tag!==7?(Y=Cr(rt,et.mode,Ut,he),Y.return=et,Y):(Y=u(Y,rt),Y.return=et,Y)}function Nt(et,Y,rt){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Qf(""+Y,et.mode,rt),Y.return=et,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case _:return rt=Hc(Y.type,Y.key,Y.props,null,et.mode,rt),zl(rt,Y),rt.return=et,rt;case y:return Y=Jf(Y,et.mode,rt),Y.return=et,Y;case T:var Ut=Y._init;return Y=Ut(Y._payload),Nt(et,Y,rt)}if(at(Y)||st(Y))return Y=Cr(Y,et.mode,rt,null),Y.return=et,Y;if(typeof Y.then=="function")return Nt(et,iu(Y),rt);if(Y.$$typeof===I)return Nt(et,Xc(et,Y),rt);au(et,Y)}return null}function ft(et,Y,rt,Ut){var he=Y!==null?Y.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return he!==null?null:R(et,Y,""+rt,Ut);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case _:return rt.key===he?G(et,Y,rt,Ut):null;case y:return rt.key===he?ct(et,Y,rt,Ut):null;case T:return he=rt._init,rt=he(rt._payload),ft(et,Y,rt,Ut)}if(at(rt)||st(rt))return he!==null?null:Rt(et,Y,rt,Ut,null);if(typeof rt.then=="function")return ft(et,Y,iu(rt),Ut);if(rt.$$typeof===I)return ft(et,Y,Xc(et,rt),Ut);au(et,rt)}return null}function mt(et,Y,rt,Ut,he){if(typeof Ut=="string"&&Ut!==""||typeof Ut=="number"||typeof Ut=="bigint")return et=et.get(rt)||null,R(Y,et,""+Ut,he);if(typeof Ut=="object"&&Ut!==null){switch(Ut.$$typeof){case _:return et=et.get(Ut.key===null?rt:Ut.key)||null,G(Y,et,Ut,he);case y:return et=et.get(Ut.key===null?rt:Ut.key)||null,ct(Y,et,Ut,he);case T:var je=Ut._init;return Ut=je(Ut._payload),mt(et,Y,rt,Ut,he)}if(at(Ut)||st(Ut))return et=et.get(rt)||null,Rt(Y,et,Ut,he,null);if(typeof Ut.then=="function")return mt(et,Y,rt,iu(Ut),he);if(Ut.$$typeof===I)return mt(et,Y,rt,Xc(Y,Ut),he);au(Y,Ut)}return null}function Oe(et,Y,rt,Ut){for(var he=null,je=null,Se=Y,Ue=Y=0,xi=null;Se!==null&&Ue<rt.length;Ue++){Se.index>Ue?(xi=Se,Se=null):xi=Se.sibling;var _n=ft(et,Se,rt[Ue],Ut);if(_n===null){Se===null&&(Se=xi);break}e&&Se&&_n.alternate===null&&n(et,Se),Y=h(_n,Y,Ue),je===null?he=_n:je.sibling=_n,je=_n,Se=xi}if(Ue===rt.length)return a(et,Se),vn&&Ur(et,Ue),he;if(Se===null){for(;Ue<rt.length;Ue++)Se=Nt(et,rt[Ue],Ut),Se!==null&&(Y=h(Se,Y,Ue),je===null?he=Se:je.sibling=Se,je=Se);return vn&&Ur(et,Ue),he}for(Se=o(Se);Ue<rt.length;Ue++)xi=mt(Se,et,Ue,rt[Ue],Ut),xi!==null&&(e&&xi.alternate!==null&&Se.delete(xi.key===null?Ue:xi.key),Y=h(xi,Y,Ue),je===null?he=xi:je.sibling=xi,je=xi);return e&&Se.forEach(function(lr){return n(et,lr)}),vn&&Ur(et,Ue),he}function Ce(et,Y,rt,Ut){if(rt==null)throw Error(s(151));for(var he=null,je=null,Se=Y,Ue=Y=0,xi=null,_n=rt.next();Se!==null&&!_n.done;Ue++,_n=rt.next()){Se.index>Ue?(xi=Se,Se=null):xi=Se.sibling;var lr=ft(et,Se,_n.value,Ut);if(lr===null){Se===null&&(Se=xi);break}e&&Se&&lr.alternate===null&&n(et,Se),Y=h(lr,Y,Ue),je===null?he=lr:je.sibling=lr,je=lr,Se=xi}if(_n.done)return a(et,Se),vn&&Ur(et,Ue),he;if(Se===null){for(;!_n.done;Ue++,_n=rt.next())_n=Nt(et,_n.value,Ut),_n!==null&&(Y=h(_n,Y,Ue),je===null?he=_n:je.sibling=_n,je=_n);return vn&&Ur(et,Ue),he}for(Se=o(Se);!_n.done;Ue++,_n=rt.next())_n=mt(Se,et,Ue,_n.value,Ut),_n!==null&&(e&&_n.alternate!==null&&Se.delete(_n.key===null?Ue:_n.key),Y=h(_n,Y,Ue),je===null?he=_n:je.sibling=_n,je=_n);return e&&Se.forEach(function(eS){return n(et,eS)}),vn&&Ur(et,Ue),he}function Ln(et,Y,rt,Ut){if(typeof rt=="object"&&rt!==null&&rt.type===b&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case _:t:{for(var he=rt.key;Y!==null;){if(Y.key===he){if(he=rt.type,he===b){if(Y.tag===7){a(et,Y.sibling),Ut=u(Y,rt.props.children),Ut.return=et,et=Ut;break t}}else if(Y.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===T&&W0(he)===Y.type){a(et,Y.sibling),Ut=u(Y,rt.props),zl(Ut,rt),Ut.return=et,et=Ut;break t}a(et,Y);break}else n(et,Y);Y=Y.sibling}rt.type===b?(Ut=Cr(rt.props.children,et.mode,Ut,rt.key),Ut.return=et,et=Ut):(Ut=Hc(rt.type,rt.key,rt.props,null,et.mode,Ut),zl(Ut,rt),Ut.return=et,et=Ut)}return S(et);case y:t:{for(he=rt.key;Y!==null;){if(Y.key===he)if(Y.tag===4&&Y.stateNode.containerInfo===rt.containerInfo&&Y.stateNode.implementation===rt.implementation){a(et,Y.sibling),Ut=u(Y,rt.children||[]),Ut.return=et,et=Ut;break t}else{a(et,Y);break}else n(et,Y);Y=Y.sibling}Ut=Jf(rt,et.mode,Ut),Ut.return=et,et=Ut}return S(et);case T:return he=rt._init,rt=he(rt._payload),Ln(et,Y,rt,Ut)}if(at(rt))return Oe(et,Y,rt,Ut);if(st(rt)){if(he=st(rt),typeof he!="function")throw Error(s(150));return rt=he.call(rt),Ce(et,Y,rt,Ut)}if(typeof rt.then=="function")return Ln(et,Y,iu(rt),Ut);if(rt.$$typeof===I)return Ln(et,Y,Xc(et,rt),Ut);au(et,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,Y!==null&&Y.tag===6?(a(et,Y.sibling),Ut=u(Y,rt),Ut.return=et,et=Ut):(a(et,Y),Ut=Qf(rt,et.mode,Ut),Ut.return=et,et=Ut),S(et)):a(et,Y)}return function(et,Y,rt,Ut){try{Bl=0;var he=Ln(et,Y,rt,Ut);return bo=null,he}catch(Se){if(Se===Cl||Se===qc)throw Se;var je=ia(29,Se,null,et.mode);return je.lanes=Ut,je.return=et,je}}}var Eo=q0(!0),Y0=q0(!1),ba=$(null),qa=null;function Ys(e){var n=e.alternate;vt(fi,fi.current&1),vt(ba,e),qa===null&&(n===null||xo.current!==null||n.memoizedState!==null)&&(qa=e)}function j0(e){if(e.tag===22){if(vt(fi,fi.current),vt(ba,e),qa===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(qa=e)}}else js()}function js(){vt(fi,fi.current),vt(ba,ba.current)}function _s(e){ot(ba),qa===e&&(qa=null),ot(fi)}var fi=$(0);function su(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Md(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Uh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Lh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oa(),u=Xs(o);u.payload=n,a!=null&&(u.callback=a),n=Ws(e,u,o),n!==null&&(la(n,e,o),Ul(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oa(),u=Xs(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ws(e,u,o),n!==null&&(la(n,e,o),Ul(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oa(),o=Xs(a);o.tag=2,n!=null&&(o.callback=n),n=Ws(e,o,a),n!==null&&(la(n,e,a),Ul(n,e,a))}};function Z0(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!Sl(a,o)||!Sl(u,h):!0}function K0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Lh.enqueueReplaceState(n,n.state,null)}function Br(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var ru=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Q0(e){ru(e)}function J0(e){console.error(e)}function $0(e){ru(e)}function ou(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function tg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Nh(e,n,a){return a=Xs(a),a.tag=3,a.payload={element:null},a.callback=function(){ou(e,n)},a}function eg(e){return e=Xs(e),e.tag=3,e}function ng(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){tg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){tg(n,a,o),typeof u!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function eM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Al(n,a,u,!0),a=ba.current,a!==null){switch(a.tag){case 13:return qa===null?id():a.alternate===null&&$n===0&&($n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===lh?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),sd(e,o,u)),!1;case 22:return a.flags|=65536,o===lh?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),sd(e,o,u)),!1}throw Error(s(435,a.tag))}return sd(e,o,u),id(),!1}if(vn)return n=ba.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==eh&&(e=Error(s(422),{cause:o}),Tl(xa(e,a)))):(o!==eh&&(n=Error(s(423),{cause:o}),Tl(xa(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=xa(o,a),u=Nh(e.stateNode,o,u),fh(e,u),$n!==4&&($n=2)),!1;var h=Error(s(520),{cause:o});if(h=xa(h,a),ql===null?ql=[h]:ql.push(h),$n!==4&&($n=2),n===null)return!0;o=xa(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Nh(a.stateNode,o,e),fh(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tr===null||!tr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=eg(u),ng(u,e,a,o),fh(a,u),!1}a=a.return}while(a!==null);return!1}var ig=Error(s(461)),_i=!1;function Ei(e,n,a,o){n.child=e===null?Y0(n,null,a,o):Eo(n,e.child,a,o)}function ag(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Or(n),o=gh(e,n,a,S,h,u),R=_h(),e!==null&&!_i?(vh(e,n,u),vs(e,n,u)):(vn&&R&&$f(n),n.flags|=1,Ei(e,n,o,u),n.child)}function sg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Kf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,rg(e,n,h,o,u)):(e=Hc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Gh(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Sl,a(S,o)&&e.ref===n.ref)return vs(e,n,u)}return n.flags|=1,e=fs(h,o),e.ref=n.ref,e.return=n,n.child=e}function rg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Sl(h,o)&&e.ref===n.ref)if(_i=!1,n.pendingProps=o=h,Gh(e,u))(e.flags&131072)!==0&&(_i=!0);else return n.lanes=e.lanes,vs(e,n,u)}return Ph(e,n,a,o,u)}function og(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return lg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wc(n,h!==null?h.cachePool:null),h!==null?r0(n,h):dh(),j0(n);else return n.lanes=n.childLanes=536870912,lg(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Wc(n,h.cachePool),r0(n,h),js(),n.memoizedState=null):(e!==null&&Wc(n,null),dh(),js());return Ei(e,n,u,a),n.child}function lg(e,n,a,o){var u=oh();return u=u===null?null:{parent:ui._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Wc(n,null),dh(),j0(n),e!==null&&Al(e,n,o,!0),null}function lu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ph(e,n,a,o,u){return Or(n),a=gh(e,n,a,o,void 0,u),o=_h(),e!==null&&!_i?(vh(e,n,u),vs(e,n,u)):(vn&&o&&$f(n),n.flags|=1,Ei(e,n,a,u),n.child)}function cg(e,n,a,o,u,h){return Or(n),n.updateQueue=null,a=l0(n,o,a,u),o0(e),o=_h(),e!==null&&!_i?(vh(e,n,h),vs(e,n,h)):(vn&&o&&$f(n),n.flags|=1,Ei(e,n,a,h),n.child)}function ug(e,n,a,o,u){if(Or(n),n.stateNode===null){var h=po,S=a.contextType;typeof S=="object"&&S!==null&&(h=Li(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Lh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},ch(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Li(S):po,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Uh(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Lh.enqueueReplaceState(h,h.state,null),Nl(n,o,h,u),Ll(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,G=Br(a,R);h.props=G;var ct=h.context,Rt=a.contextType;S=po,typeof Rt=="object"&&Rt!==null&&(S=Li(Rt));var Nt=a.getDerivedStateFromProps;Rt=typeof Nt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Rt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||ct!==S)&&K0(n,h,o,S),ks=!1;var ft=n.memoizedState;h.state=ft,Nl(n,o,h,u),Ll(),ct=n.memoizedState,R||ft!==ct||ks?(typeof Nt=="function"&&(Uh(n,a,Nt,o),ct=n.memoizedState),(G=ks||Z0(n,a,G,o,ft,ct,S))?(Rt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=S,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,uh(e,n),S=n.memoizedProps,Rt=Br(a,S),h.props=Rt,Nt=n.pendingProps,ft=h.context,ct=a.contextType,G=po,typeof ct=="object"&&ct!==null&&(G=Li(ct)),R=a.getDerivedStateFromProps,(ct=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Nt||ft!==G)&&K0(n,h,o,G),ks=!1,ft=n.memoizedState,h.state=ft,Nl(n,o,h,u),Ll();var mt=n.memoizedState;S!==Nt||ft!==mt||ks||e!==null&&e.dependencies!==null&&kc(e.dependencies)?(typeof R=="function"&&(Uh(n,a,R,o),mt=n.memoizedState),(Rt=ks||Z0(n,a,Rt,o,ft,mt,G)||e!==null&&e.dependencies!==null&&kc(e.dependencies))?(ct||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,mt,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,mt,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=mt),h.props=o,h.state=mt,h.context=G,o=Rt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,lu(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Eo(n,e.child,null,u),n.child=Eo(n,null,a,u)):Ei(e,n,a,u),n.memoizedState=h.state,e=n.child):e=vs(e,n,u),e}function fg(e,n,a,o){return El(),n.flags|=256,Ei(e,n,a,o),n.child}var Oh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ih(e){return{baseLanes:e,cachePool:Jm()}}function Fh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ea),e}function hg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(fi.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(vn){if(u?Ys(n):js(),vn){var R=Jn,G;if(G=R){t:{for(G=R,R=Wa;G.nodeType!==8;){if(!R){R=null;break t}if(G=Na(G.nextSibling),G===null){R=null;break t}}R=G}R!==null?(n.memoizedState={dehydrated:R,treeContext:Dr!==null?{id:hs,overflow:ds}:null,retryLane:536870912,hydrationErrors:null},G=ia(18,null,null,0),G.stateNode=R,G.return=n,n.child=G,ki=n,Jn=null,G=!0):G=!1}G||Nr(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Md(R)?n.lanes=32:n.lanes=536870912,null;_s(n)}return R=o.children,o=o.fallback,u?(js(),u=n.mode,R=cu({mode:"hidden",children:R},u),o=Cr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=Ih(a),u.childLanes=Fh(e,S,a),n.memoizedState=Oh,o):(Ys(n),Bh(n,R))}if(G=e.memoizedState,G!==null&&(R=G.dehydrated,R!==null)){if(h)n.flags&256?(Ys(n),n.flags&=-257,n=zh(e,n,a)):n.memoizedState!==null?(js(),n.child=e.child,n.flags|=128,n=null):(js(),u=o.fallback,R=n.mode,o=cu({mode:"visible",children:o.children},R),u=Cr(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Eo(n,e.child,null,a),o=n.child,o.memoizedState=Ih(a),o.childLanes=Fh(e,S,a),n.memoizedState=Oh,n=u);else if(Ys(n),Md(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ct=S.dgst;S=ct,o=Error(s(419)),o.stack="",o.digest=S,Tl({value:o,source:null,stack:null}),n=zh(e,n,a)}else if(_i||Al(e,n,a,!1),S=(a&e.childLanes)!==0,_i||S){if(S=In,S!==null&&(o=a&-a,o=(o&42)!==0?1:ve(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,ho(e,o),la(S,e,o),ig;R.data==="$?"||id(),n=zh(e,n,a)}else R.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Jn=Na(R.nextSibling),ki=n,vn=!0,Lr=null,Wa=!1,e!==null&&(Sa[ya++]=hs,Sa[ya++]=ds,Sa[ya++]=Dr,hs=e.id,ds=e.overflow,Dr=n),n=Bh(n,o.children),n.flags|=4096);return n}return u?(js(),u=o.fallback,R=n.mode,G=e.child,ct=G.sibling,o=fs(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ct!==null?u=fs(ct,u):(u=Cr(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=e.child.memoizedState,R===null?R=Ih(a):(G=R.cachePool,G!==null?(ct=ui._currentValue,G=G.parent!==ct?{parent:ct,pool:ct}:G):G=Jm(),R={baseLanes:R.baseLanes|a,cachePool:G}),u.memoizedState=R,u.childLanes=Fh(e,S,a),n.memoizedState=Oh,o):(Ys(n),a=e.child,e=a.sibling,a=fs(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Bh(e,n){return n=cu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function cu(e,n){return e=ia(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zh(e,n,a){return Eo(n,e.child,null,a),e=Bh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ih(e.return,n,a)}function Hh(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function pg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Ei(e,n,o.children,a),o=fi.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,a,n);else if(e.tag===19)dg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(vt(fi,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&su(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Hh(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&su(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Hh(n,!0,a,null,h);break;case"together":Hh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vs(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$s|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Al(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=fs(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=fs(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&kc(e)))}function nM(e,n,a){switch(n.tag){case 3:_t(n,n.stateNode.containerInfo),Vs(n,ui,e.memoizedState.cache),El();break;case 27:case 5:ye(n);break;case 4:_t(n,n.stateNode.containerInfo);break;case 10:Vs(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ys(n),n.flags|=128,null):(a&n.child.childLanes)!==0?hg(e,n,a):(Ys(n),e=vs(e,n,a),e!==null?e.sibling:null);Ys(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Al(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return pg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(fi,fi.current),o)break;return null;case 22:case 23:return n.lanes=0,og(e,n,a);case 24:Vs(n,ui,e.memoizedState.cache)}return vs(e,n,a)}function mg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_i=!0;else{if(!Gh(e,a)&&(n.flags&128)===0)return _i=!1,nM(e,n,a);_i=(e.flags&131072)!==0}else _i=!1,vn&&(n.flags&1048576)!==0&&Wm(n,Vc,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Kf(o)?(e=Br(o,e),n.tag=1,n=ug(null,n,o,e,a)):(n.tag=0,n=Ph(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=ag(null,n,o,e,a);break t}else if(u===k){n.tag=14,n=sg(null,n,o,e,a);break t}}throw n=St(o)||o,Error(s(306,n,""))}}return n;case 0:return Ph(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Br(o,n.pendingProps),ug(e,n,o,u,a);case 3:t:{if(_t(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,uh(e,n),Nl(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Vs(n,ui,o),o!==h.cache&&ah(n,[ui],a,!0),Ll(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=fg(e,n,o,a);break t}else if(o!==u){u=xa(Error(s(424)),n),Tl(u),n=fg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Jn=Na(e.firstChild),ki=n,vn=!0,Lr=null,Wa=!0,a=Y0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(El(),o===u){n=vs(e,n,a);break t}Ei(e,n,o,a)}n=n.child}return n;case 26:return lu(e,n),e===null?(a=x_(n.type,null,n.pendingProps,null))?n.memoizedState=a:vn||(a=n.type,e=n.pendingProps,o=bu(nt.current).createElement(a),o[ei]=n,o[bn]=e,Ai(o,a,e),qn(o),n.stateNode=o):n.memoizedState=x_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ye(n),e===null&&vn&&(o=n.stateNode=g_(n.type,n.pendingProps,nt.current),ki=n,Wa=!0,u=Jn,ir(n.type)?(Sd=u,Jn=Na(o.firstChild)):Jn=u),Ei(e,n,n.pendingProps.children,a),lu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&vn&&((u=o=Jn)&&(o=DM(o,n.type,n.pendingProps,Wa),o!==null?(n.stateNode=o,ki=n,Jn=Na(o.firstChild),Wa=!1,u=!0):u=!1),u||Nr(n)),ye(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,_d(u,h)?o=null:S!==null&&_d(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=gh(e,n,jx,null,null,a),ec._currentValue=u),lu(e,n),Ei(e,n,o,a),n.child;case 6:return e===null&&vn&&((e=a=Jn)&&(a=UM(a,n.pendingProps,Wa),a!==null?(n.stateNode=a,ki=n,Jn=null,e=!0):e=!1),e||Nr(n)),null;case 13:return hg(e,n,a);case 4:return _t(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Eo(n,null,o,a):Ei(e,n,o,a),n.child;case 11:return ag(e,n,n.type,n.pendingProps,a);case 7:return Ei(e,n,n.pendingProps,a),n.child;case 8:return Ei(e,n,n.pendingProps.children,a),n.child;case 12:return Ei(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Vs(n,n.type,o.value),Ei(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Or(n),u=Li(u),o=o(u),n.flags|=1,Ei(e,n,o,a),n.child;case 14:return sg(e,n,n.type,n.pendingProps,a);case 15:return rg(e,n,n.type,n.pendingProps,a);case 19:return pg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=cu(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=fs(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return og(e,n,a);case 24:return Or(n),o=Li(ui),e===null?(u=oh(),u===null&&(u=In,h=sh(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},ch(n),Vs(n,ui,u)):((e.lanes&a)!==0&&(uh(e,n),Nl(n,null,null,a),Ll()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Vs(n,ui,o)):(o=h.cache,Vs(n,ui,o),o!==u.cache&&ah(n,[ui],a,!0))),Ei(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function xs(e){e.flags|=4}function gg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!E_(n)){if(n=ba.current,n!==null&&((cn&4194048)===cn?qa!==null:(cn&62914560)!==cn&&(cn&536870912)===0||n!==qa))throw Dl=lh,$m;e.flags|=8192}}function uu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Wt():536870912,e.lanes|=n,wo|=n)}function Hl(e,n){if(!vn)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Kn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function iM(e,n,a){var o=n.pendingProps;switch(th(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(n),null;case 1:return Kn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ms(ui),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(bl(n)?xs(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jm())),Kn(n),null;case 26:return a=n.memoizedState,e===null?(xs(n),a!==null?(Kn(n),gg(n,a)):(Kn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(xs(n),Kn(n),gg(n,a)):(Kn(n),n.flags&=-16777217):(e.memoizedProps!==o&&xs(n),Kn(n),n.flags&=-16777217),null;case 27:be(n),a=nt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kn(n),null}e=Zt.current,bl(n)?qm(n):(e=g_(u,o,a),n.stateNode=e,xs(n))}return Kn(n),null;case 5:if(be(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xs(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kn(n),null}if(e=Zt.current,bl(n))qm(n);else{switch(u=bu(nt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[ei]=n,e[bn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Ai(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&xs(n)}}return Kn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&xs(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,bl(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ki,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ei]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||c_(e.nodeValue,a)),e||Nr(n)}else e=bu(e).createTextNode(o),e[ei]=n,n.stateNode=e}return Kn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=bl(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ei]=n}else El(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kn(n),u=!1}else u=jm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(_s(n),n):(_s(n),null)}if(_s(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),uu(n,n.updateQueue),Kn(n),null;case 4:return Re(),e===null&&hd(n.stateNode.containerInfo),Kn(n),null;case 10:return ms(n.type),Kn(n),null;case 19:if(ot(fi),u=n.memoizedState,u===null)return Kn(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)Hl(u,!1);else{if($n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=su(e),h!==null){for(n.flags|=128,Hl(u,!1),e=h.updateQueue,n.updateQueue=e,uu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Xm(a,e),a=a.sibling;return vt(fi,fi.current&1|2),n.child}e=e.sibling}u.tail!==null&&sn()>du&&(n.flags|=128,o=!0,Hl(u,!1),n.lanes=4194304)}else{if(!o)if(e=su(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,uu(n,e),Hl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!vn)return Kn(n),null}else 2*sn()-u.renderingStartTime>du&&a!==536870912&&(n.flags|=128,o=!0,Hl(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=sn(),n.sibling=null,e=fi.current,vt(fi,o?e&1|2:e&1),n):(Kn(n),null);case 22:case 23:return _s(n),ph(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kn(n),n.subtreeFlags&6&&(n.flags|=8192)):Kn(n),a=n.updateQueue,a!==null&&uu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ot(Ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ms(ui),Kn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function aM(e,n){switch(th(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ms(ui),Re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return be(n),null;case 13:if(_s(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));El()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ot(fi),null;case 4:return Re(),null;case 10:return ms(n.type),null;case 22:case 23:return _s(n),ph(),e!==null&&ot(Ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ms(ui),null;case 25:return null;default:return null}}function _g(e,n){switch(th(n),n.tag){case 3:ms(ui),Re();break;case 26:case 27:case 5:be(n);break;case 4:Re();break;case 13:_s(n);break;case 19:ot(fi);break;case 10:ms(n.type);break;case 22:case 23:_s(n),ph(),e!==null&&ot(Ir);break;case 24:ms(ui)}}function Gl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Pn(n,n.return,R)}}function Zs(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var G=a,ct=R;try{ct()}catch(Rt){Pn(u,G,Rt)}}}o=o.next}while(o!==h)}}catch(Rt){Pn(n,n.return,Rt)}}function vg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{s0(n,a)}catch(o){Pn(e,e.return,o)}}}function xg(e,n,a){a.props=Br(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Pn(e,n,o)}}function Vl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Pn(e,n,u)}}function Ya(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Pn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pn(e,n,u)}else a.current=null}function Mg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Pn(e,e.return,u)}}function Vh(e,n,a){try{var o=e.stateNode;TM(o,e.type,a,n),o[bn]=n}catch(u){Pn(e,e.return,u)}}function Sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ir(e.type)||e.tag===4}function kh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=yu));else if(o!==4&&(o===27&&ir(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Xh(e,n,a),e=e.sibling;e!==null;)Xh(e,n,a),e=e.sibling}function fu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ir(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fu(e,n,a),e=e.sibling;e!==null;)fu(e,n,a),e=e.sibling}function yg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ai(n,o,a),n[ei]=e,n[bn]=a}catch(h){Pn(e,e.return,h)}}var Ms=!1,ii=!1,Wh=!1,bg=typeof WeakSet=="function"?WeakSet:Set,vi=null;function sM(e,n){if(e=e.containerInfo,md=Cu,e=Pm(e),kf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,R=-1,G=-1,ct=0,Rt=0,Nt=e,ft=null;e:for(;;){for(var mt;Nt!==a||u!==0&&Nt.nodeType!==3||(R=S+u),Nt!==h||o!==0&&Nt.nodeType!==3||(G=S+o),Nt.nodeType===3&&(S+=Nt.nodeValue.length),(mt=Nt.firstChild)!==null;)ft=Nt,Nt=mt;for(;;){if(Nt===e)break e;if(ft===a&&++ct===u&&(R=S),ft===h&&++Rt===o&&(G=S),(mt=Nt.nextSibling)!==null)break;Nt=ft,ft=Nt.parentNode}Nt=mt}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:e,selectionRange:a},Cu=!1,vi=n;vi!==null;)if(n=vi,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vi=e;else for(;vi!==null;){switch(n=vi,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Oe=Br(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Oe,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Ce){Pn(a,a.return,Ce)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)xd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vi=e;break}vi=n.return}}function Eg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ks(e,a),o&4&&Gl(5,a);break;case 1:if(Ks(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Pn(a,a.return,S)}else{var u=Br(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Pn(a,a.return,S)}}o&64&&vg(a),o&512&&Vl(a,a.return);break;case 3:if(Ks(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{s0(e,n)}catch(S){Pn(a,a.return,S)}}break;case 27:n===null&&o&4&&yg(a);case 26:case 5:Ks(e,a),n===null&&o&4&&Mg(a),o&512&&Vl(a,a.return);break;case 12:Ks(e,a);break;case 13:Ks(e,a),o&4&&Rg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pM.bind(null,a),LM(e,a))));break;case 22:if(o=a.memoizedState!==null||Ms,!o){n=n!==null&&n.memoizedState!==null||ii,u=Ms;var h=ii;Ms=o,(ii=n)&&!h?Qs(e,a,(a.subtreeFlags&8772)!==0):Ks(e,a),Ms=u,ii=h}break;case 30:break;default:Ks(e,a)}}function Tg(e){var n=e.alternate;n!==null&&(e.alternate=null,Tg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&as(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xn=null,Ki=!1;function Ss(e,n,a){for(a=a.child;a!==null;)Ag(e,n,a),a=a.sibling}function Ag(e,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:ii||Ya(a,n),Ss(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ii||Ya(a,n);var o=Xn,u=Ki;ir(a.type)&&(Xn=a.stateNode,Ki=!1),Ss(e,n,a),Ql(a.stateNode),Xn=o,Ki=u;break;case 5:ii||Ya(a,n);case 6:if(o=Xn,u=Ki,Xn=null,Ss(e,n,a),Xn=o,Ki=u,Xn!==null)if(Ki)try{(Xn.nodeType===9?Xn.body:Xn.nodeName==="HTML"?Xn.ownerDocument.body:Xn).removeChild(a.stateNode)}catch(h){Pn(a,n,h)}else try{Xn.removeChild(a.stateNode)}catch(h){Pn(a,n,h)}break;case 18:Xn!==null&&(Ki?(e=Xn,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),sc(e)):p_(Xn,a.stateNode));break;case 4:o=Xn,u=Ki,Xn=a.stateNode.containerInfo,Ki=!0,Ss(e,n,a),Xn=o,Ki=u;break;case 0:case 11:case 14:case 15:ii||Zs(2,a,n),ii||Zs(4,a,n),Ss(e,n,a);break;case 1:ii||(Ya(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&xg(a,n,o)),Ss(e,n,a);break;case 21:Ss(e,n,a);break;case 22:ii=(o=ii)||a.memoizedState!==null,Ss(e,n,a),ii=o;break;default:Ss(e,n,a)}}function Rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sc(e)}catch(a){Pn(n,n.return,a)}}function rM(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bg),n;default:throw Error(s(435,e.tag))}}function qh(e,n){var a=rM(e);n.forEach(function(o){var u=mM.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function aa(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(ir(R.type)){Xn=R.stateNode,Ki=!1;break t}break;case 5:Xn=R.stateNode,Ki=!1;break t;case 3:case 4:Xn=R.stateNode.containerInfo,Ki=!0;break t}R=R.return}if(Xn===null)throw Error(s(160));Ag(h,S,u),Xn=null,Ki=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)wg(n,e),n=n.sibling}var La=null;function wg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:aa(n,e),sa(e),o&4&&(Zs(3,e,e.return),Gl(3,e),Zs(5,e,e.return));break;case 1:aa(n,e),sa(e),o&512&&(ii||a===null||Ya(a,a.return)),o&64&&Ms&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=La;if(aa(n,e),sa(e),o&512&&(ii||a===null||Ya(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ga]||h[ei]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Ai(h,o,a),h[ei]=e,qn(h),o=h;break t;case"link":var S=y_("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}h=u.createElement(o),Ai(h,o,a),u.head.appendChild(h);break;case"meta":if(S=y_("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}h=u.createElement(o),Ai(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[ei]=e,qn(h),o=h}e.stateNode=o}else b_(u,e.type,e.stateNode);else e.stateNode=S_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?b_(u,e.type,e.stateNode):S_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Vh(e,e.memoizedProps,a.memoizedProps)}break;case 27:aa(n,e),sa(e),o&512&&(ii||a===null||Ya(a,a.return)),a!==null&&o&4&&Vh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(aa(n,e),sa(e),o&512&&(ii||a===null||Ya(a,a.return)),e.flags&32){u=e.stateNode;try{Nn(u,"")}catch(mt){Pn(e,e.return,mt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Vh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Wh=!0);break;case 6:if(aa(n,e),sa(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(mt){Pn(e,e.return,mt)}}break;case 3:if(Au=null,u=La,La=Eu(n.containerInfo),aa(n,e),La=u,sa(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{sc(n.containerInfo)}catch(mt){Pn(e,e.return,mt)}Wh&&(Wh=!1,Cg(e));break;case 4:o=La,La=Eu(e.stateNode.containerInfo),aa(n,e),sa(e),La=o;break;case 12:aa(n,e),sa(e);break;case 13:aa(n,e),sa(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jh=sn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qh(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ct=Ms,Rt=ii;if(Ms=ct||u,ii=Rt||G,aa(n,e),ii=Rt,Ms=ct,sa(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Ms||ii||zr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=G.stateNode;var Nt=G.memoizedProps.style,ft=Nt!=null&&Nt.hasOwnProperty("display")?Nt.display:null;R.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(mt){Pn(G,G.return,mt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(mt){Pn(G,G.return,mt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,qh(e,a))));break;case 19:aa(n,e),sa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qh(e,o)));break;case 30:break;case 21:break;default:aa(n,e),sa(e)}}function sa(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Sg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=kh(e);fu(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(Nn(S,""),a.flags&=-33);var R=kh(e);fu(e,R,S);break;case 3:case 4:var G=a.stateNode.containerInfo,ct=kh(e);Xh(e,ct,G);break;default:throw Error(s(161))}}catch(Rt){Pn(e,e.return,Rt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ks(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Eg(e,n.alternate,n),n=n.sibling}function zr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Zs(4,n,n.return),zr(n);break;case 1:Ya(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xg(n,n.return,a),zr(n);break;case 27:Ql(n.stateNode);case 26:case 5:Ya(n,n.return),zr(n);break;case 22:n.memoizedState===null&&zr(n);break;case 30:zr(n);break;default:zr(n)}e=e.sibling}}function Qs(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Qs(u,h,a),Gl(4,h);break;case 1:if(Qs(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ct){Pn(o,o.return,ct)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)a0(G[u],R)}catch(ct){Pn(o,o.return,ct)}}a&&S&64&&vg(h),Vl(h,h.return);break;case 27:yg(h);case 26:case 5:Qs(u,h,a),a&&o===null&&S&4&&Mg(h),Vl(h,h.return);break;case 12:Qs(u,h,a);break;case 13:Qs(u,h,a),a&&S&4&&Rg(u,h);break;case 22:h.memoizedState===null&&Qs(u,h,a),Vl(h,h.return);break;case 30:break;default:Qs(u,h,a)}n=n.sibling}}function Yh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Rl(a))}function jh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Rl(e))}function ja(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dg(e,n,a,o),n=n.sibling}function Dg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ja(e,n,a,o),u&2048&&Gl(9,n);break;case 1:ja(e,n,a,o);break;case 3:ja(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Rl(e)));break;case 12:if(u&2048){ja(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Pn(n,n.return,G)}}else ja(e,n,a,o);break;case 13:ja(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?ja(e,n,a,o):kl(e,n):h._visibility&2?ja(e,n,a,o):(h._visibility|=2,To(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Yh(S,n);break;case 24:ja(e,n,a,o),u&2048&&jh(n.alternate,n);break;default:ja(e,n,a,o)}}function To(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,S=n,R=a,G=o,ct=S.flags;switch(S.tag){case 0:case 11:case 15:To(h,S,R,G,u),Gl(8,S);break;case 23:break;case 22:var Rt=S.stateNode;S.memoizedState!==null?Rt._visibility&2?To(h,S,R,G,u):kl(h,S):(Rt._visibility|=2,To(h,S,R,G,u)),u&&ct&2048&&Yh(S.alternate,S);break;case 24:To(h,S,R,G,u),u&&ct&2048&&jh(S.alternate,S);break;default:To(h,S,R,G,u)}n=n.sibling}}function kl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:kl(a,o),u&2048&&Yh(o.alternate,o);break;case 24:kl(a,o),u&2048&&jh(o.alternate,o);break;default:kl(a,o)}n=n.sibling}}var Xl=8192;function Ao(e){if(e.subtreeFlags&Xl)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 26:Ao(e),e.flags&Xl&&e.memoizedState!==null&&WM(La,e.memoizedState,e.memoizedProps);break;case 5:Ao(e);break;case 3:case 4:var n=La;La=Eu(e.stateNode.containerInfo),Ao(e),La=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Xl,Xl=16777216,Ao(e),Xl=n):Ao(e));break;default:Ao(e)}}function Lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vi=o,Pg(o,e)}Lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ng(e),e=e.sibling}function Ng(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Zs(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,hu(e)):Wl(e);break;default:Wl(e)}}function hu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vi=o,Pg(o,e)}Lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Zs(8,n,n.return),hu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,hu(n));break;default:hu(n)}e=e.sibling}}function Pg(e,n){for(;vi!==null;){var a=vi;switch(a.tag){case 0:case 11:case 15:Zs(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Rl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vi=o;else t:for(a=e;vi!==null;){o=vi;var u=o.sibling,h=o.return;if(Tg(o),o===a){vi=null;break t}if(u!==null){u.return=h,vi=u;break t}vi=h}}}var oM={getCacheForType:function(e){var n=Li(ui),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},lM=typeof WeakMap=="function"?WeakMap:Map,An=0,In=null,Qe=null,cn=0,Rn=0,ra=null,Js=!1,Ro=!1,Zh=!1,ys=0,$n=0,$s=0,Hr=0,Kh=0,Ea=0,wo=0,ql=null,Qi=null,Qh=!1,Jh=0,du=1/0,pu=null,tr=null,Ti=0,er=null,Co=null,Do=0,$h=0,td=null,Og=null,Yl=0,ed=null;function oa(){if((An&2)!==0&&cn!==0)return cn&-cn;if(F.T!==null){var e=_o;return e!==0?e:ld()}return nn()}function Ig(){Ea===0&&(Ea=(cn&536870912)===0||vn?j():536870912);var e=ba.current;return e!==null&&(e.flags|=32),Ea}function la(e,n,a){(e===In&&(Rn===2||Rn===9)||e.cancelPendingCommit!==null)&&(Uo(e,0),nr(e,cn,Ea,!1)),ne(e,a),((An&2)===0||e!==In)&&(e===In&&((An&2)===0&&(Hr|=a),$n===4&&nr(e,cn,Ea,!1)),Za(e))}function Fg(e,n,a){if((An&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Jt(e,n),u=o?fM(e,n):ad(e,n,!0),h=o;do{if(u===0){Ro&&!o&&nr(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!cM(a)){u=ad(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=ql;var G=R.current.memoizedState.isDehydrated;if(G&&(Uo(R,S).flags|=256),S=ad(R,S,!1),S!==2){if(Zh&&!G){R.errorRecoveryDisabledLanes|=h,Hr|=h,u=4;break t}h=Qi,Qi=u,h!==null&&(Qi===null?Qi=h:Qi.push.apply(Qi,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){Uo(e,0),nr(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:nr(o,n,Ea,!Js);break t;case 2:Qi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Jh+300-sn(),10<u)){if(nr(o,n,Ea,!Js),le(o,0,!0)!==0)break t;o.timeoutHandle=h_(Bg.bind(null,o,a,Qi,pu,Qh,n,Ea,Hr,wo,Js,h,2,-0,0),u);break t}Bg(o,a,Qi,pu,Qh,n,Ea,Hr,wo,Js,h,0,-0,0)}}break}while(!0);Za(e)}function Bg(e,n,a,o,u,h,S,R,G,ct,Rt,Nt,ft,mt){if(e.timeoutHandle=-1,Nt=n.subtreeFlags,(Nt&8192||(Nt&16785408)===16785408)&&(tc={stylesheets:null,count:0,unsuspend:XM},Ug(n),Nt=qM(),Nt!==null)){e.cancelPendingCommit=Nt(Wg.bind(null,e,n,h,a,o,u,S,R,G,Rt,1,ft,mt)),nr(e,h,S,!ct);return}Wg(e,n,h,a,o,u,S,R,G)}function cM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!na(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nr(e,n,a,o){n&=~Kh,n&=~Hr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Kt(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&yt(e,a,n)}function mu(){return(An&6)===0?(jl(0),!1):!0}function nd(){if(Qe!==null){if(Rn===0)var e=Qe.return;else e=Qe,ps=Pr=null,xh(e),bo=null,Bl=0,e=Qe;for(;e!==null;)_g(e.alternate,e),e=e.return;Qe=null}}function Uo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,RM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nd(),In=e,Qe=a=fs(e.current,null),cn=n,Rn=0,ra=null,Js=!1,Ro=Jt(e,n),Zh=!1,wo=Ea=Kh=Hr=$s=$n=0,Qi=ql=null,Qh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Kt(o),h=1<<u;n|=e[u],o&=~h}return ys=n,Fc(),a}function zg(e,n){Xe=null,F.H=nu,n===Cl||n===qc?(n=n0(),Rn=3):n===$m?(n=n0(),Rn=4):Rn=n===ig?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ra=n,Qe===null&&($n=1,ou(e,xa(n,e.current)))}function Hg(){var e=F.H;return F.H=nu,e===null?nu:e}function Gg(){var e=F.A;return F.A=oM,e}function id(){$n=4,Js||(cn&4194048)!==cn&&ba.current!==null||(Ro=!0),($s&134217727)===0&&(Hr&134217727)===0||In===null||nr(In,cn,Ea,!1)}function ad(e,n,a){var o=An;An|=2;var u=Hg(),h=Gg();(In!==e||cn!==n)&&(pu=null,Uo(e,n)),n=!1;var S=$n;t:do try{if(Rn!==0&&Qe!==null){var R=Qe,G=ra;switch(Rn){case 8:nd(),S=6;break t;case 3:case 2:case 9:case 6:ba.current===null&&(n=!0);var ct=Rn;if(Rn=0,ra=null,Lo(e,R,G,ct),a&&Ro){S=0;break t}break;default:ct=Rn,Rn=0,ra=null,Lo(e,R,G,ct)}}uM(),S=$n;break}catch(Rt){zg(e,Rt)}while(!0);return n&&e.shellSuspendCounter++,ps=Pr=null,An=o,F.H=u,F.A=h,Qe===null&&(In=null,cn=0,Fc()),S}function uM(){for(;Qe!==null;)Vg(Qe)}function fM(e,n){var a=An;An|=2;var o=Hg(),u=Gg();In!==e||cn!==n?(pu=null,du=sn()+500,Uo(e,n)):Ro=Jt(e,n);t:do try{if(Rn!==0&&Qe!==null){n=Qe;var h=ra;e:switch(Rn){case 1:Rn=0,ra=null,Lo(e,n,h,1);break;case 2:case 9:if(t0(h)){Rn=0,ra=null,kg(n);break}n=function(){Rn!==2&&Rn!==9||In!==e||(Rn=7),Za(e)},h.then(n,n);break t;case 3:Rn=7;break t;case 4:Rn=5;break t;case 7:t0(h)?(Rn=0,ra=null,kg(n)):(Rn=0,ra=null,Lo(e,n,h,7));break;case 5:var S=null;switch(Qe.tag){case 26:S=Qe.memoizedState;case 5:case 27:var R=Qe;if(!S||E_(S)){Rn=0,ra=null;var G=R.sibling;if(G!==null)Qe=G;else{var ct=R.return;ct!==null?(Qe=ct,gu(ct)):Qe=null}break e}}Rn=0,ra=null,Lo(e,n,h,5);break;case 6:Rn=0,ra=null,Lo(e,n,h,6);break;case 8:nd(),$n=6;break t;default:throw Error(s(462))}}hM();break}catch(Rt){zg(e,Rt)}while(!0);return ps=Pr=null,F.H=o,F.A=u,An=a,Qe!==null?0:(In=null,cn=0,Fc(),$n)}function hM(){for(;Qe!==null&&!en();)Vg(Qe)}function Vg(e){var n=mg(e.alternate,e,ys);e.memoizedProps=e.pendingProps,n===null?gu(e):Qe=n}function kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=cg(a,n,n.pendingProps,n.type,void 0,cn);break;case 11:n=cg(a,n,n.pendingProps,n.type.render,n.ref,cn);break;case 5:xh(n);default:_g(a,n),n=Qe=Xm(n,ys),n=mg(a,n,ys)}e.memoizedProps=e.pendingProps,n===null?gu(e):Qe=n}function Lo(e,n,a,o){ps=Pr=null,xh(n),bo=null,Bl=0;var u=n.return;try{if(eM(e,u,n,a,cn)){$n=1,ou(e,xa(a,e.current)),Qe=null;return}}catch(h){if(u!==null)throw Qe=u,h;$n=1,ou(e,xa(a,e.current)),Qe=null;return}n.flags&32768?(vn||o===1?e=!0:Ro||(cn&536870912)!==0?e=!1:(Js=e=!0,(o===2||o===9||o===3||o===6)&&(o=ba.current,o!==null&&o.tag===13&&(o.flags|=16384))),Xg(n,e)):gu(n)}function gu(e){var n=e;do{if((n.flags&32768)!==0){Xg(n,Js);return}e=n.return;var a=iM(n.alternate,n,ys);if(a!==null){Qe=a;return}if(n=n.sibling,n!==null){Qe=n;return}Qe=n=e}while(n!==null);$n===0&&($n=5)}function Xg(e,n){do{var a=aM(e.alternate,e);if(a!==null){a.flags&=32767,Qe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Qe=e;return}Qe=e=a}while(e!==null);$n=6,Qe=null}function Wg(e,n,a,o,u,h,S,R,G){e.cancelPendingCommit=null;do _u();while(Ti!==0);if((An&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=jf,Bt(e,a,h,S,R,G),e===In&&(Qe=In=null,cn=0),Co=n,er=e,Do=a,$h=h,td=u,Og=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gM(on,function(){return Kg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=B.p,B.p=2,S=An,An|=4;try{sM(e,n,a)}finally{An=S,B.p=u,F.T=o}}Ti=1,qg(),Yg(),jg()}}function qg(){if(Ti===1){Ti=0;var e=er,n=Co,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=An;An|=4;try{wg(n,e);var h=gd,S=Pm(e.containerInfo),R=h.focusedElem,G=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&Nm(R.ownerDocument.documentElement,R)){if(G!==null&&kf(R)){var ct=G.start,Rt=G.end;if(Rt===void 0&&(Rt=ct),"selectionStart"in R)R.selectionStart=ct,R.selectionEnd=Math.min(Rt,R.value.length);else{var Nt=R.ownerDocument||document,ft=Nt&&Nt.defaultView||window;if(ft.getSelection){var mt=ft.getSelection(),Oe=R.textContent.length,Ce=Math.min(G.start,Oe),Ln=G.end===void 0?Ce:Math.min(G.end,Oe);!mt.extend&&Ce>Ln&&(S=Ln,Ln=Ce,Ce=S);var et=Lm(R,Ce),Y=Lm(R,Ln);if(et&&Y&&(mt.rangeCount!==1||mt.anchorNode!==et.node||mt.anchorOffset!==et.offset||mt.focusNode!==Y.node||mt.focusOffset!==Y.offset)){var rt=Nt.createRange();rt.setStart(et.node,et.offset),mt.removeAllRanges(),Ce>Ln?(mt.addRange(rt),mt.extend(Y.node,Y.offset)):(rt.setEnd(Y.node,Y.offset),mt.addRange(rt))}}}}for(Nt=[],mt=R;mt=mt.parentNode;)mt.nodeType===1&&Nt.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Nt.length;R++){var Ut=Nt[R];Ut.element.scrollLeft=Ut.left,Ut.element.scrollTop=Ut.top}}Cu=!!md,gd=md=null}finally{An=u,B.p=o,F.T=a}}e.current=n,Ti=2}}function Yg(){if(Ti===2){Ti=0;var e=er,n=Co,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=An;An|=4;try{Eg(e,n.alternate,n)}finally{An=u,B.p=o,F.T=a}}Ti=3}}function jg(){if(Ti===4||Ti===3){Ti=0,ge();var e=er,n=Co,a=Do,o=Og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ti=5:(Ti=0,Co=er=null,Zg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(tr=null),ln(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=B.p,B.p=2,F.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];h(R.value,{componentStack:R.stack})}}finally{F.T=n,B.p=u}}(Do&3)!==0&&_u(),Za(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===ed?Yl++:(Yl=0,ed=e):Yl=0,jl(0)}}function Zg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Rl(n)))}function _u(e){return qg(),Yg(),jg(),Kg()}function Kg(){if(Ti!==5)return!1;var e=er,n=$h;$h=0;var a=ln(Do),o=F.T,u=B.p;try{B.p=32>a?32:a,F.T=null,a=td,td=null;var h=er,S=Do;if(Ti=0,Co=er=null,Do=0,(An&6)!==0)throw Error(s(331));var R=An;if(An|=4,Ng(h.current),Dg(h,h.current,S,a),An=R,jl(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Tt,h)}catch{}return!0}finally{B.p=u,F.T=o,Zg(e,n)}}function Qg(e,n,a){n=xa(a,n),n=Nh(e.stateNode,n,2),e=Ws(e,n,2),e!==null&&(ne(e,2),Za(e))}function Pn(e,n,a){if(e.tag===3)Qg(e,e,a);else for(;n!==null;){if(n.tag===3){Qg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(tr===null||!tr.has(o))){e=xa(a,e),a=eg(2),o=Ws(n,a,2),o!==null&&(ng(a,o,n,e),ne(o,2),Za(o));break}}n=n.return}}function sd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new lM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Zh=!0,u.add(a),e=dM.bind(null,e,n,a),n.then(e,e))}function dM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,In===e&&(cn&a)===a&&($n===4||$n===3&&(cn&62914560)===cn&&300>sn()-Jh?(An&2)===0&&Uo(e,0):Kh|=a,wo===cn&&(wo=0)),Za(e)}function Jg(e,n){n===0&&(n=Wt()),e=ho(e,n),e!==null&&(ne(e,n),Za(e))}function pM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Jg(e,a)}function mM(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Jg(e,a)}function gM(e,n){return ze(e,n)}var vu=null,No=null,rd=!1,xu=!1,od=!1,Gr=0;function Za(e){e!==No&&e.next===null&&(No===null?vu=No=e:No=No.next=e),xu=!0,rd||(rd=!0,vM())}function jl(e,n){if(!od&&xu){od=!0;do for(var a=!1,o=vu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Kt(42|e)+1)-1,h&=u&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,n_(o,h))}else h=cn,h=le(o,o===In?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Jt(o,h)||(a=!0,n_(o,h));o=o.next}while(a);od=!1}}function _M(){$g()}function $g(){xu=rd=!1;var e=0;Gr!==0&&(AM()&&(e=Gr),Gr=0);for(var n=sn(),a=null,o=vu;o!==null;){var u=o.next,h=t_(o,n);h===0?(o.next=null,a===null?vu=u:a.next=u,u===null&&(No=a)):(a=o,(e!==0||(h&3)!==0)&&(xu=!0)),o=u}jl(e)}function t_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Kt(h),R=1<<S,G=u[S];G===-1?((R&a)===0||(R&o)!==0)&&(u[S]=Le(R,n)):G<=n&&(e.expiredLanes|=R),h&=~R}if(n=In,a=cn,a=le(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Rn===2||Rn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&tn(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&tn(o),ln(a)){case 2:case 8:a=rn;break;case 32:a=on;break;case 268435456:a=O;break;default:a=on}return o=e_.bind(null,e),a=ze(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&tn(o),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,n){if(Ti!==0&&Ti!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_u()&&e.callbackNode!==a)return null;var o=cn;return o=le(e,e===In?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Fg(e,o,n),t_(e,sn()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function n_(e,n){if(_u())return null;Fg(e,n,!0)}function vM(){wM(function(){(An&6)!==0?ze(zn,_M):$g()})}function ld(){return Gr===0&&(Gr=j()),Gr}function i_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yr(""+e)}function a_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function xM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=i_((u[bn]||null).action),S=o.submitter;S&&(n=(n=S[bn]||null)?i_(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var R=new so("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Gr!==0){var G=S?a_(u,S):new FormData(u);wh(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=S?a_(u,S):new FormData(u),wh(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var cd=0;cd<Yf.length;cd++){var ud=Yf[cd],MM=ud.toLowerCase(),SM=ud[0].toUpperCase()+ud.slice(1);Ua(MM,"on"+SM)}Ua(Fm,"onAnimationEnd"),Ua(Bm,"onAnimationIteration"),Ua(zm,"onAnimationStart"),Ua("dblclick","onDoubleClick"),Ua("focusin","onFocus"),Ua("focusout","onBlur"),Ua(Bx,"onTransitionRun"),Ua(zx,"onTransitionStart"),Ua(Hx,"onTransitionCancel"),Ua(Hm,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zl));function s_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],G=R.instance,ct=R.currentTarget;if(R=R.listener,G!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=ct;try{h(u)}catch(Rt){ru(Rt)}u.currentTarget=null,h=G}else for(S=0;S<o.length;S++){if(R=o[S],G=R.instance,ct=R.currentTarget,R=R.listener,G!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=ct;try{h(u)}catch(Rt){ru(Rt)}u.currentTarget=null,h=G}}}}function Je(e,n){var a=n[zi];a===void 0&&(a=n[zi]=new Set);var o=e+"__bubble";a.has(o)||(r_(n,e,2,!1),a.add(o))}function fd(e,n,a){var o=0;n&&(o|=4),r_(a,e,o,n)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[Mu]){e[Mu]=!0,Is.forEach(function(a){a!=="selectionchange"&&(yM.has(a)||fd(a,!1,e),fd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Mu]||(n[Mu]=!0,fd("selectionchange",!1,n))}}function r_(e,n,a,o){switch(D_(n)){case 2:var u=ZM;break;case 8:u=KM;break;default:u=Ad}a=u.bind(null,n,a,e),u=void 0,!ss||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function dd(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Yi(R),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=h=S;continue t}R=R.parentNode}}o=o.return}Oc(function(){var ct=h,Rt=no(a),Nt=[];t:{var ft=Gm.get(e);if(ft!==void 0){var mt=so,Oe=e;switch(e){case"keypress":if(Er(a)===0)break t;case"keydown":case"keyup":mt=bt;break;case"focusin":Oe="focus",mt=oo;break;case"focusout":Oe="blur",mt=oo;break;case"beforeblur":case"afterblur":mt=oo;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=_l;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=te;break;case Fm:case Bm:case zm:mt=Gf;break;case Hm:mt=Ht;break;case"scroll":case"scrollend":mt=rs;break;case"wheel":mt=Xt;break;case"copy":case"cut":case"paste":mt=P;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=wt;break;case"toggle":case"beforetoggle":mt=Lt}var Ce=(n&4)!==0,Ln=!Ce&&(e==="scroll"||e==="scrollend"),et=Ce?ft!==null?ft+"Capture":null:ft;Ce=[];for(var Y=ct,rt;Y!==null;){var Ut=Y;if(rt=Ut.stateNode,Ut=Ut.tag,Ut!==5&&Ut!==26&&Ut!==27||rt===null||et===null||(Ut=va(Y,et),Ut!=null&&Ce.push(Kl(Y,Ut,rt))),Ln)break;Y=Y.return}0<Ce.length&&(ft=new mt(ft,Oe,null,a,Rt),Nt.push({event:ft,listeners:Ce}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",mt=e==="mouseout"||e==="pointerout",ft&&a!==eo&&(Oe=a.relatedTarget||a.fromElement)&&(Yi(Oe)||Oe[wa]))break t;if((mt||ft)&&(ft=Rt.window===Rt?Rt:(ft=Rt.ownerDocument)?ft.defaultView||ft.parentWindow:window,mt?(Oe=a.relatedTarget||a.toElement,mt=ct,Oe=Oe?Yi(Oe):null,Oe!==null&&(Ln=c(Oe),Ce=Oe.tag,Oe!==Ln||Ce!==5&&Ce!==27&&Ce!==6)&&(Oe=null)):(mt=null,Oe=ct),mt!==Oe)){if(Ce=os,Ut="onMouseLeave",et="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=wt,Ut="onPointerLeave",et="onPointerEnter",Y="pointer"),Ln=mt==null?ft:$i(mt),rt=Oe==null?ft:$i(Oe),ft=new Ce(Ut,Y+"leave",mt,a,Rt),ft.target=Ln,ft.relatedTarget=rt,Ut=null,Yi(Rt)===ct&&(Ce=new Ce(et,Y+"enter",Oe,a,Rt),Ce.target=rt,Ce.relatedTarget=Ln,Ut=Ce),Ln=Ut,mt&&Oe)e:{for(Ce=mt,et=Oe,Y=0,rt=Ce;rt;rt=Po(rt))Y++;for(rt=0,Ut=et;Ut;Ut=Po(Ut))rt++;for(;0<Y-rt;)Ce=Po(Ce),Y--;for(;0<rt-Y;)et=Po(et),rt--;for(;Y--;){if(Ce===et||et!==null&&Ce===et.alternate)break e;Ce=Po(Ce),et=Po(et)}Ce=null}else Ce=null;mt!==null&&o_(Nt,ft,mt,Ce,!1),Oe!==null&&Ln!==null&&o_(Nt,Ln,Oe,Ce,!0)}}t:{if(ft=ct?$i(ct):window,mt=ft.nodeName&&ft.nodeName.toLowerCase(),mt==="select"||mt==="input"&&ft.type==="file")var he=dn;else if(_e(ft))if(ci)he=us;else{he=xl;var je=vl}else mt=ft.nodeName,!mt||mt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?ct&&ji(ct.elementType)&&(he=dn):he=lo;if(he&&(he=he(e,ct))){Te(Nt,he,a,Rt);break t}je&&je(e,ft,ct),e==="focusout"&&ct&&ft.type==="number"&&ct.memoizedProps.value!=null&&Di(ft,"number",ft.value)}switch(je=ct?$i(ct):window,e){case"focusin":(_e(je)||je.contentEditable==="true")&&(co=je,Xf=ct,yl=null);break;case"focusout":yl=Xf=co=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Om(Nt,a,Rt);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":Om(Nt,a,Rt)}var Se;if(Ft)t:{switch(e){case"compositionstart":var Ue="onCompositionStart";break t;case"compositionend":Ue="onCompositionEnd";break t;case"compositionupdate":Ue="onCompositionUpdate";break t}Ue=void 0}else Mn?Be(e,a)&&(Ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ue="onCompositionStart");Ue&&(Ie&&a.locale!=="ko"&&(Mn||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&Mn&&(Se=ka()):(Gi=Rt,zs="value"in Gi?Gi.value:Gi.textContent,Mn=!0)),je=Su(ct,Ue),0<je.length&&(Ue=new Z(Ue,e,null,a,Rt),Nt.push({event:Ue,listeners:je}),Se?Ue.data=Se:(Se=gn(a),Se!==null&&(Ue.data=Se)))),(Se=we?jn(e,a):Hn(e,a))&&(Ue=Su(ct,"onBeforeInput"),0<Ue.length&&(je=new Z("onBeforeInput","beforeinput",null,a,Rt),Nt.push({event:je,listeners:Ue}),je.data=Se)),xM(Nt,e,ct,a,Rt)}s_(Nt,n)})}function Kl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Su(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=va(e,a),u!=null&&o.unshift(Kl(e,u,h)),u=va(e,n),u!=null&&o.push(Kl(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Po(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function o_(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var R=a,G=R.alternate,ct=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||ct===null||(G=ct,u?(ct=va(a,h),ct!=null&&S.unshift(Kl(a,ct,G))):u||(ct=va(a,h),ct!=null&&S.push(Kl(a,ct,G)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var bM=/\r\n?/g,EM=/\u0000|\uFFFD/g;function l_(e){return(typeof e=="string"?e:""+e).replace(bM,`
`).replace(EM,"")}function c_(e,n){return n=l_(n),l_(e)===n}function yu(){}function Un(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Nn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Nn(e,""+o);break;case"className":ut(e,"class",o);break;case"tabIndex":ut(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ut(e,a,o);break;case"style":Hi(e,o,h);break;case"data":if(n!=="object"){ut(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=yr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Un(e,n,"name",u.name,u,null),Un(e,n,"formEncType",u.formEncType,u,null),Un(e,n,"formMethod",u.formMethod,u,null),Un(e,n,"formTarget",u.formTarget,u,null)):(Un(e,n,"encType",u.encType,u,null),Un(e,n,"method",u.method,u,null),Un(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=yr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=yu);break;case"onScroll":o!=null&&Je("scroll",e);break;case"onScrollEnd":o!=null&&Je("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=yr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Je("beforetoggle",e),Je("toggle",e),gt(e,"popover",o);break;case"xlinkActuate":it(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":it(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":it(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":it(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":it(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":it(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":it(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":it(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":it(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":gt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fs.get(a)||a,gt(e,a,o))}}function pd(e,n,a,o,u,h){switch(a){case"style":Hi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Nn(e,o):(typeof o=="number"||typeof o=="bigint")&&Nn(e,""+o);break;case"onScroll":o!=null&&Je("scroll",e);break;case"onScrollEnd":o!=null&&Je("scrollend",e);break;case"onClick":o!=null&&(e.onclick=yu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[bn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):gt(e,a,o)}}}function Ai(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Je("error",e),Je("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Un(e,n,h,S,a,null)}}u&&Un(e,n,"srcSet",a.srcSet,a,null),o&&Un(e,n,"src",a.src,a,null);return;case"input":Je("invalid",e);var R=h=S=u=null,G=null,ct=null;for(o in a)if(a.hasOwnProperty(o)){var Rt=a[o];if(Rt!=null)switch(o){case"name":u=Rt;break;case"type":S=Rt;break;case"checked":G=Rt;break;case"defaultChecked":ct=Rt;break;case"value":h=Rt;break;case"defaultValue":R=Rt;break;case"children":case"dangerouslySetInnerHTML":if(Rt!=null)throw Error(s(137,n));break;default:Un(e,n,o,Rt,a,null)}}Ci(e,h,R,G,ct,S,u,!1),fn(e);return;case"select":Je("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Un(e,n,u,R,a,null)}n=h,a=S,e.multiple=!!o,n!=null?Ui(e,!!o,n,!1):a!=null&&Ui(e,!!o,a,!0);return;case"textarea":Je("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Un(e,n,S,R,a,null)}hn(e,o,u,h),fn(e);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Un(e,n,G,o,a,null));return;case"dialog":Je("beforetoggle",e),Je("toggle",e),Je("cancel",e),Je("close",e);break;case"iframe":case"object":Je("load",e);break;case"video":case"audio":for(o=0;o<Zl.length;o++)Je(Zl[o],e);break;case"image":Je("error",e),Je("load",e);break;case"details":Je("toggle",e);break;case"embed":case"source":case"link":Je("error",e),Je("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ct in a)if(a.hasOwnProperty(ct)&&(o=a[ct],o!=null))switch(ct){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Un(e,n,ct,o,a,null)}return;default:if(ji(n)){for(Rt in a)a.hasOwnProperty(Rt)&&(o=a[Rt],o!==void 0&&pd(e,n,Rt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Un(e,n,R,o,a,null))}function TM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,R=null,G=null,ct=null,Rt=null;for(mt in a){var Nt=a[mt];if(a.hasOwnProperty(mt)&&Nt!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":G=Nt;default:o.hasOwnProperty(mt)||Un(e,n,mt,null,o,Nt)}}for(var ft in o){var mt=o[ft];if(Nt=a[ft],o.hasOwnProperty(ft)&&(mt!=null||Nt!=null))switch(ft){case"type":h=mt;break;case"name":u=mt;break;case"checked":ct=mt;break;case"defaultChecked":Rt=mt;break;case"value":S=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:mt!==Nt&&Un(e,n,ft,mt,o,Nt)}}Ye(e,S,R,G,ct,Rt,h,u);return;case"select":mt=S=R=ft=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":mt=G;default:o.hasOwnProperty(h)||Un(e,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":ft=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==G&&Un(e,n,u,h,o,G)}n=R,a=S,o=mt,ft!=null?Ui(e,!!a,ft,!1):!!o!=!!a&&(n!=null?Ui(e,!!a,n,!0):Ui(e,!!a,a?[]:"",!1));return;case"textarea":mt=ft=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Un(e,n,R,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":ft=u;break;case"defaultValue":mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Un(e,n,S,u,o,h)}Ca(e,ft,mt);return;case"option":for(var Oe in a)ft=a[Oe],a.hasOwnProperty(Oe)&&ft!=null&&!o.hasOwnProperty(Oe)&&(Oe==="selected"?e.selected=!1:Un(e,n,Oe,null,o,ft));for(G in o)ft=o[G],mt=a[G],o.hasOwnProperty(G)&&ft!==mt&&(ft!=null||mt!=null)&&(G==="selected"?e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol":Un(e,n,G,ft,o,mt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in a)ft=a[Ce],a.hasOwnProperty(Ce)&&ft!=null&&!o.hasOwnProperty(Ce)&&Un(e,n,Ce,null,o,ft);for(ct in o)if(ft=o[ct],mt=a[ct],o.hasOwnProperty(ct)&&ft!==mt&&(ft!=null||mt!=null))switch(ct){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Un(e,n,ct,ft,o,mt)}return;default:if(ji(n)){for(var Ln in a)ft=a[Ln],a.hasOwnProperty(Ln)&&ft!==void 0&&!o.hasOwnProperty(Ln)&&pd(e,n,Ln,void 0,o,ft);for(Rt in o)ft=o[Rt],mt=a[Rt],!o.hasOwnProperty(Rt)||ft===mt||ft===void 0&&mt===void 0||pd(e,n,Rt,ft,o,mt);return}}for(var et in a)ft=a[et],a.hasOwnProperty(et)&&ft!=null&&!o.hasOwnProperty(et)&&Un(e,n,et,null,o,ft);for(Nt in o)ft=o[Nt],mt=a[Nt],!o.hasOwnProperty(Nt)||ft===mt||ft==null&&mt==null||Un(e,n,Nt,ft,o,mt)}var md=null,gd=null;function bu(e){return e.nodeType===9?e:e.ownerDocument}function u_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function _d(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vd=null;function AM(){var e=window.event;return e&&e.type==="popstate"?e===vd?!1:(vd=e,!0):(vd=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,RM=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,wM=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(CM)}:h_;function CM(e){setTimeout(function(){throw e})}function ir(e){return e==="head"}function p_(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&Ql(S.documentElement),a&2&&Ql(S.body),a&4)for(a=S.head,Ql(a),S=a.firstChild;S;){var R=S.nextSibling,G=S.nodeName;S[Ga]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=R}}if(u===0){e.removeChild(h),sc(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);sc(n)}function xd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xd(a),as(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function DM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ga])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Na(e.nextSibling),e===null)break}return null}function UM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Na(e.nextSibling),e===null))return null;return e}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function LM(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Na(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Sd=null;function m_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function g_(e,n,a){switch(n=bu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ql(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);as(e)}var Ta=new Map,__=new Set;function Eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bs=B.d;B.d={f:NM,r:PM,D:OM,C:IM,L:FM,m:BM,X:HM,S:zM,M:GM};function NM(){var e=bs.f(),n=mu();return e||n}function PM(e){var n=pa(e);n!==null&&n.tag===5&&n.type==="form"?F0(n):bs.r(e)}var Oo=typeof document>"u"?null:document;function v_(e,n,a){var o=Oo;if(o&&typeof n=="string"&&n){var u=xn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),__.has(u)||(__.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ai(n,"link",e),qn(n),o.head.appendChild(n)))}}function OM(e){bs.D(e),v_("dns-prefetch",e,null)}function IM(e,n){bs.C(e,n),v_("preconnect",e,n)}function FM(e,n,a){bs.L(e,n,a);var o=Oo;if(o&&e&&n){var u='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xn(a.imageSizes)+'"]')):u+='[href="'+xn(e)+'"]';var h=u;switch(n){case"style":h=Io(e);break;case"script":h=Fo(e)}Ta.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ta.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Jl(h))||n==="script"&&o.querySelector($l(h))||(n=o.createElement("link"),Ai(n,"link",e),qn(n),o.head.appendChild(n)))}}function BM(e,n){bs.m(e,n);var a=Oo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xn(o)+'"][href="'+xn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Fo(e)}if(!Ta.has(h)&&(e=g({rel:"modulepreload",href:e},n),Ta.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($l(h)))return}o=a.createElement("link"),Ai(o,"link",e),qn(o),a.head.appendChild(o)}}}function zM(e,n,a){bs.S(e,n,a);var o=Oo;if(o&&e){var u=ma(o).hoistableStyles,h=Io(e);n=n||"default";var S=u.get(h);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Jl(h)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ta.get(h))&&yd(e,a);var G=S=o.createElement("link");qn(G),Ai(G,"link",e),G._p=new Promise(function(ct,Rt){G.onload=ct,G.onerror=Rt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Tu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(h,S)}}}function HM(e,n){bs.X(e,n);var a=Oo;if(a&&e){var o=ma(a).hoistableScripts,u=Fo(e),h=o.get(u);h||(h=a.querySelector($l(u)),h||(e=g({src:e,async:!0},n),(n=Ta.get(u))&&bd(e,n),h=a.createElement("script"),qn(h),Ai(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function GM(e,n){bs.M(e,n);var a=Oo;if(a&&e){var o=ma(a).hoistableScripts,u=Fo(e),h=o.get(u);h||(h=a.querySelector($l(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=Ta.get(u))&&bd(e,n),h=a.createElement("script"),qn(h),Ai(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function x_(e,n,a,o){var u=(u=nt.current)?Eu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Io(a.href),a=ma(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Io(a.href);var h=ma(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Jl(e)))&&!h._p&&(S.instance=h,S.state.loading=5),Ta.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ta.set(e,a),h||VM(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fo(a),a=ma(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Io(e){return'href="'+xn(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function M_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function VM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ai(n,"link",a),qn(n),e.head.appendChild(n))}function Fo(e){return'[src="'+xn(e)+'"]'}function $l(e){return"script[async]"+e}function S_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xn(a.href)+'"]');if(o)return n.instance=o,qn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),qn(o),Ai(o,"style",u),Tu(o,a.precedence,e),n.instance=o;case"stylesheet":u=Io(a.href);var h=e.querySelector(Jl(u));if(h)return n.state.loading|=4,n.instance=h,qn(h),h;o=M_(a),(u=Ta.get(u))&&yd(o,u),h=(e.ownerDocument||e).createElement("link"),qn(h);var S=h;return S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Ai(h,"link",o),n.state.loading|=4,Tu(h,a.precedence,e),n.instance=h;case"script":return h=Fo(a.src),(u=e.querySelector($l(h)))?(n.instance=u,qn(u),u):(o=a,(u=Ta.get(h))&&(o=g({},a),bd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),qn(u),Ai(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Tu(o,a.precedence,e));return n.instance}function Tu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Au=null;function y_(e,n,a){if(Au===null){var o=new Map,u=Au=new Map;u.set(a,o)}else u=Au,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ga]||h[ei]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var R=o.get(S);R?R.push(h):o.set(S,[h])}}return o}function b_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function kM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var tc=null;function XM(){}function WM(e,n,a){if(tc===null)throw Error(s(475));var o=tc;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Io(a.href),h=e.querySelector(Jl(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ru.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,qn(h);return}h=e.ownerDocument||e,a=M_(a),(u=Ta.get(u))&&yd(a,u),h=h.createElement("link"),qn(h);var S=h;S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Ai(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Ru.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function qM(){if(tc===null)throw Error(s(475));var e=tc;return e.stylesheets&&e.count===0&&Ed(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ed(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ru(){if(this.count--,this.count===0){if(this.stylesheets)Ed(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wu=null;function Ed(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wu=new Map,n.forEach(YM,e),wu=null,Ru.call(e))}function YM(e,n){if(!(n.state.loading&4)){var a=wu.get(e);if(a)var o=a.get(null);else{a=new Map,wu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=Ru.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ec={$$typeof:I,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function jM(e,n,a,o,u,h,S,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kt(0),this.hiddenUpdates=kt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function T_(e,n,a,o,u,h,S,R,G,ct,Rt,Nt){return e=new jM(e,n,a,S,R,G,ct,Nt),n=1,h===!0&&(n|=24),h=ia(3,null,null,n),e.current=h,h.stateNode=e,n=sh(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},ch(h),e}function A_(e){return e?(e=po,e):po}function R_(e,n,a,o,u,h){u=A_(u),o.context===null?o.context=u:o.pendingContext=u,o=Xs(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ws(e,o,n),a!==null&&(la(a,e,n),Ul(a,e,n))}function w_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Td(e,n){w_(e,n),(e=e.alternate)&&w_(e,n)}function C_(e){if(e.tag===13){var n=ho(e,67108864);n!==null&&la(n,e,67108864),Td(e,67108864)}}var Cu=!0;function ZM(e,n,a,o){var u=F.T;F.T=null;var h=B.p;try{B.p=2,Ad(e,n,a,o)}finally{B.p=h,F.T=u}}function KM(e,n,a,o){var u=F.T;F.T=null;var h=B.p;try{B.p=8,Ad(e,n,a,o)}finally{B.p=h,F.T=u}}function Ad(e,n,a,o){if(Cu){var u=Rd(o);if(u===null)dd(e,n,o,Du,a),U_(e,o);else if(JM(u,e,n,a,o))o.stopPropagation();else if(U_(e,o),n&4&&-1<QM.indexOf(e)){for(;u!==null;){var h=pa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=ae(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var G=1<<31-Kt(S);R.entanglements[1]|=G,S&=~G}Za(h),(An&6)===0&&(du=sn()+500,jl(0))}}break;case 13:R=ho(h,2),R!==null&&la(R,h,2),mu(),Td(h,2)}if(h=Rd(o),h===null&&dd(e,n,o,Du,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else dd(e,n,o,null,a)}}function Rd(e){return e=no(e),wd(e)}var Du=null;function wd(e){if(Du=null,e=Yi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Du=e,null}function D_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case zn:return 2;case rn:return 8;case on:case fe:return 32;case O:return 268435456;default:return 32}default:return 32}}var Cd=!1,ar=null,sr=null,rr=null,nc=new Map,ic=new Map,or=[],QM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U_(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":nc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ic.delete(n.pointerId)}}function ac(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=pa(n),n!==null&&C_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function JM(e,n,a,o,u){switch(n){case"focusin":return ar=ac(ar,e,n,a,o,u),!0;case"dragenter":return sr=ac(sr,e,n,a,o,u),!0;case"mouseover":return rr=ac(rr,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return nc.set(h,ac(nc.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,ic.set(h,ac(ic.get(h)||null,e,n,a,o,u)),!0}return!1}function L_(e){var n=Yi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,wi(e.priority,function(){if(a.tag===13){var o=oa();o=ve(o);var u=ho(a,o);u!==null&&la(u,a,o),Td(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Rd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);eo=o,a.target.dispatchEvent(o),eo=null}else return n=pa(a),n!==null&&C_(n),e.blockedOn=a,!1;n.shift()}return!0}function N_(e,n,a){Uu(e)&&a.delete(n)}function $M(){Cd=!1,ar!==null&&Uu(ar)&&(ar=null),sr!==null&&Uu(sr)&&(sr=null),rr!==null&&Uu(rr)&&(rr=null),nc.forEach(N_),ic.forEach(N_)}function Lu(e,n){e.blockedOn===n&&(e.blockedOn=null,Cd||(Cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$M)))}var Nu=null;function P_(e){Nu!==e&&(Nu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Nu===e&&(Nu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(wd(o||a)===null)continue;break}var h=pa(a);h!==null&&(e.splice(n,3),n-=3,wh(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function sc(e){function n(G){return Lu(G,e)}ar!==null&&Lu(ar,e),sr!==null&&Lu(sr,e),rr!==null&&Lu(rr,e),nc.forEach(n),ic.forEach(n);for(var a=0;a<or.length;a++){var o=or[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<or.length&&(a=or[0],a.blockedOn===null);)L_(a),a.blockedOn===null&&or.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[bn]||null;if(typeof h=="function")S||P_(a);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[bn]||null)R=S.formAction;else if(wd(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),P_(a)}}}function Dd(e){this._internalRoot=e}Pu.prototype.render=Dd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oa();R_(a,o,e,n,null,null)},Pu.prototype.unmount=Dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;R_(e.current,2,null,e,null,null),mu(),n[wa]=null}};function Pu(e){this._internalRoot=e}Pu.prototype.unstable_scheduleHydration=function(e){if(e){var n=nn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<or.length&&n!==0&&n<or[a].priority;a++);or.splice(a,0,e),a===0&&L_(e)}};var O_=t.version;if(O_!=="19.1.0")throw Error(s(527,O_,"19.1.0"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var tS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{Tt=Ou.inject(tS),At=Ou}catch{}}return oc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Q0,h=J0,S=$0,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=T_(e,1,!1,null,null,a,o,u,h,S,R,null),e[wa]=n.current,hd(e),new Dd(n)},oc.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Q0,S=J0,R=$0,G=null,ct=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(ct=a.formState)),n=T_(e,1,!0,n,a??null,o,u,h,S,R,G,ct),n.context=A_(null),a=n.current,o=oa(),o=ve(o),u=Xs(o),u.callback=null,Ws(a,u,o),a=o,n.current.lanes=a,ne(n,a),Za(n),e[wa]=n.current,hd(e),new Pu(n)},oc.version="19.1.0",oc}var W_;function uS(){if(W_)return Ld.exports;W_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ld.exports=cS(),Ld.exports}var fS=uS(),Gn=mm();const gm="183",hS=0,q_=1,dS=2,gf=1,pS=2,xc=3,xr=0,Ji=1,Fa=2,Ds=0,$r=1,yc=2,Y_=3,j_=4,mS=5,Zr=100,gS=101,_S=102,vS=103,xS=104,MS=200,SS=201,yS=202,bS=203,xp=204,Mp=205,ES=206,TS=207,AS=208,RS=209,wS=210,CS=211,DS=212,US=213,LS=214,Sp=0,yp=1,bp=2,rl=3,Ep=4,Tp=5,Ap=6,Rp=7,ix=0,NS=1,PS=2,es=0,ax=1,sx=2,rx=3,_m=4,ox=5,lx=6,cx=7,ux=300,to=301,ol=302,Fd=303,Bd=304,Nf=306,wp=1e3,Cs=1001,Cp=1002,Ri=1003,OS=1004,Iu=1005,Fi=1006,zd=1007,Qr=1008,da=1009,fx=1010,hx=1011,Tc=1012,vm=1013,is=1014,$a=1015,Ns=1016,xm=1017,Mm=1018,Ac=1020,dx=35902,px=35899,mx=1021,gx=1022,za=1023,Ps=1026,Jr=1027,_x=1028,Sm=1029,ll=1030,ym=1031,bm=1033,_f=33776,vf=33777,xf=33778,Mf=33779,Dp=35840,Up=35841,Lp=35842,Np=35843,Pp=36196,Op=37492,Ip=37496,Fp=37488,Bp=37489,zp=37490,Hp=37491,Gp=37808,Vp=37809,kp=37810,Xp=37811,Wp=37812,qp=37813,Yp=37814,jp=37815,Zp=37816,Kp=37817,Qp=37818,Jp=37819,$p=37820,tm=37821,em=36492,nm=36494,im=36495,am=36283,sm=36284,rm=36285,om=36286,IS=3200,vx=0,FS=1,gr="",yn="srgb",cl="srgb-linear",Ef="linear",wn="srgb",Bo=7680,Z_=519,BS=512,zS=513,HS=514,Em=515,GS=516,VS=517,Tm=518,kS=519,lm=35044,Fu=35048,K_="300 es",ts=2e3,Rc=2001;function XS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function wc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function WS(){const r=wc("canvas");return r.style.display="block",r}const Q_={};function Tf(...r){const t="THREE."+r.shift();console.log(t,...r)}function xx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Fe(...r){r=xx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function un(...r){r=xx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Af(...r){const t=r.join(" ");t in Q_||(Q_[t]=!0,Fe(...r))}function qS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const YS={[Sp]:yp,[bp]:Ap,[Ep]:Rp,[rl]:Tp,[yp]:Sp,[Ap]:bp,[Rp]:Ep,[Tp]:rl};class fl{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let J_=1234567;const bc=Math.PI/180,Cc=180/Math.PI;function Us(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pi[r&255]+Pi[r>>8&255]+Pi[r>>16&255]+Pi[r>>24&255]+"-"+Pi[t&255]+Pi[t>>8&255]+"-"+Pi[t>>16&15|64]+Pi[t>>24&255]+"-"+Pi[i&63|128]+Pi[i>>8&255]+"-"+Pi[i>>16&255]+Pi[i>>24&255]+Pi[s&255]+Pi[s>>8&255]+Pi[s>>16&255]+Pi[s>>24&255]).toLowerCase()}function an(r,t,i){return Math.max(t,Math.min(i,r))}function Am(r,t){return(r%t+t)%t}function jS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function ZS(r,t,i){return r!==t?(i-r)/(t-r):0}function Ec(r,t,i){return(1-i)*r+i*t}function KS(r,t,i,s){return Ec(r,t,1-Math.exp(-i*s))}function QS(r,t=1){return t-Math.abs(Am(r,t*2)-t)}function JS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function $S(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function ty(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ey(r,t){return r+Math.random()*(t-r)}function ny(r){return r*(.5-Math.random())}function iy(r){r!==void 0&&(J_=r);let t=J_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ay(r){return r*bc}function sy(r){return r*Cc}function ry(r){return(r&r-1)===0&&r!==0}function oy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ly(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cy(r,t,i,s,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((t+s)/2),g=f((t+s)/2),x=c((t-s)/2),_=f((t-s)/2),y=c((s-t)/2),b=f((s-t)/2);switch(l){case"XYX":r.set(p*g,m*x,m*_,p*d);break;case"YZY":r.set(m*_,p*g,m*x,p*d);break;case"ZXZ":r.set(m*x,m*_,p*g,p*d);break;case"XZX":r.set(p*g,m*b,m*y,p*d);break;case"YXY":r.set(m*y,p*g,m*b,p*d);break;case"ZYZ":r.set(m*b,m*y,p*g,p*d);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ba(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Cn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uy={DEG2RAD:bc,RAD2DEG:Cc,generateUUID:Us,clamp:an,euclideanModulo:Am,mapLinear:jS,inverseLerp:ZS,lerp:Ec,damp:KS,pingpong:QS,smoothstep:JS,smootherstep:$S,randInt:ty,randFloat:ey,randFloatSpread:ny,seededRandom:iy,degToRad:ay,radToDeg:sy,isPowerOfTwo:ry,ceilPowerOfTwo:oy,floorPowerOfTwo:ly,setQuaternionFromProperEuler:cy,normalize:Cn,denormalize:Ba};class ke{constructor(t=0,i=0){ke.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=an(this.x,t.x,i.x),this.y=an(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=an(this.x,t,i),this.y=an(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(an(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(an(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],g=s[l+2],x=s[l+3],_=c[f+0],y=c[f+1],b=c[f+2],C=c[f+3];if(x!==C||m!==_||d!==y||g!==b){let M=m*_+d*y+g*b+x*C;M<0&&(_=-_,y=-y,b=-b,C=-C,M=-M);let v=1-p;if(M<.9995){const D=Math.acos(M),I=Math.sin(D);v=Math.sin(v*D)/I,p=Math.sin(p*D)/I,m=m*v+_*p,d=d*v+y*p,g=g*v+b*p,x=x*v+C*p}else{m=m*v+_*p,d=d*v+y*p,g=g*v+b*p,x=x*v+C*p;const D=1/Math.sqrt(m*m+d*d+g*g+x*x);m*=D,d*=D,g*=D,x*=D}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],g=s[l+3],x=c[f],_=c[f+1],y=c[f+2],b=c[f+3];return t[i]=p*b+g*x+m*y-d*_,t[i+1]=m*b+g*_+d*x-p*y,t[i+2]=d*b+g*y+p*_-m*x,t[i+3]=g*b-p*x-m*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(s/2),g=p(l/2),x=p(c/2),_=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=_*g*x+d*y*b,this._y=d*y*x-_*g*b,this._z=d*g*b+_*y*x,this._w=d*g*x-_*y*b;break;case"YXZ":this._x=_*g*x+d*y*b,this._y=d*y*x-_*g*b,this._z=d*g*b-_*y*x,this._w=d*g*x+_*y*b;break;case"ZXY":this._x=_*g*x-d*y*b,this._y=d*y*x+_*g*b,this._z=d*g*b+_*y*x,this._w=d*g*x-_*y*b;break;case"ZYX":this._x=_*g*x-d*y*b,this._y=d*y*x+_*g*b,this._z=d*g*b-_*y*x,this._w=d*g*x+_*y*b;break;case"YZX":this._x=_*g*x+d*y*b,this._y=d*y*x+_*g*b,this._z=d*g*b-_*y*x,this._w=d*g*x-_*y*b;break;case"XZY":this._x=_*g*x-d*y*b,this._y=d*y*x-_*g*b,this._z=d*g*b+_*y*x,this._w=d*g*x+_*y*b;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],g=i[6],x=i[10],_=s+p+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-d)*y,this._z=(f-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+d)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(c-d)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(f-l)/y,this._x=(c+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=s*g+f*p+l*d-c*m,this._y=l*g+f*m+c*p-s*d,this._z=c*g+f*d+s*m-l*p,this._w=f*g-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*s),g=2*(p*i-c*l),x=2*(c*s-f*i);return this.x=i+m*d+f*x-p*g,this.y=s+m*g+p*d-c*x,this.z=l+m*x+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=an(this.x,t.x,i.x),this.y=an(this.y,t.y,i.y),this.z=an(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=an(this.x,t,i),this.y=an(this.y,t,i),this.z=an(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(an(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Hd.copy(this).projectOnVector(t),this.sub(Hd)}reflect(t){return this.sub(Hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(an(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new K,$_=new hl;class Ge{constructor(t,i,s,l,c,f,p,m,d){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d)}set(t,i,s,l,c,f,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],g=s[4],x=s[7],_=s[2],y=s[5],b=s[8],C=l[0],M=l[3],v=l[6],D=l[1],I=l[4],N=l[7],z=l[2],H=l[5],k=l[8];return c[0]=f*C+p*D+m*z,c[3]=f*M+p*I+m*H,c[6]=f*v+p*N+m*k,c[1]=d*C+g*D+x*z,c[4]=d*M+g*I+x*H,c[7]=d*v+g*N+x*k,c[2]=_*C+y*D+b*z,c[5]=_*M+y*I+b*H,c[8]=_*v+y*N+b*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*p*d-s*c*g+s*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],x=g*f-p*d,_=p*m-g*c,y=d*c-f*m,b=i*x+s*_+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=x*C,t[1]=(l*d-g*s)*C,t[2]=(p*s-l*f)*C,t[3]=_*C,t[4]=(g*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=y*C,t[7]=(s*m-d*i)*C,t[8]=(f*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Gd.makeScale(t,i)),this}rotate(t){return this.premultiply(Gd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Gd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new Ge,tv=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ev=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){const r={enabled:!0,workingColorSpace:cl,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===wn&&(l.r=Ls(l.r),l.g=Ls(l.g),l.b=Ls(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===wn&&(l.r=sl(l.r),l.g=sl(l.g),l.b=sl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===gr?Ef:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Af("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Af("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[cl]:{primaries:t,whitePoint:s,transfer:Ef,toXYZ:tv,fromXYZ:ev,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:s,transfer:wn,toXYZ:tv,fromXYZ:ev,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),r}const pn=fy();function Ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zo;class hy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{zo===void 0&&(zo=wc("canvas")),zo.width=t.width,zo.height=t.height;const l=zo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=zo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=wc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ls(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ls(i[s]/255)*255):i[s]=Ls(i[s]);return{data:i,width:t.width,height:t.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dy=0;class Rm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Vd(l[f].image)):c.push(Vd(l[f]))}else c=Vd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Vd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let py=0;const kd=new K;class ai extends fl{constructor(t=ai.DEFAULT_IMAGE,i=ai.DEFAULT_MAPPING,s=Cs,l=Cs,c=Fi,f=Qr,p=za,m=da,d=ai.DEFAULT_ANISOTROPY,g=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Us(),this.name="",this.source=new Rm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Fe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ux)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wp:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case Cp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wp:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case Cp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=ux;ai.DEFAULT_ANISOTROPY=1;class ti{constructor(t=0,i=0,s=0,l=1){ti.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],g=m[4],x=m[8],_=m[1],y=m[5],b=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+C)<.1&&Math.abs(b+M)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(d+1)/2,N=(y+1)/2,z=(v+1)/2,H=(g+_)/4,k=(x+C)/4,T=(b+M)/4;return I>N&&I>z?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=H/s,c=k/s):N>z?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=H/l,c=T/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=k/c,l=T/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-b)*(M-b)+(x-C)*(x-C)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(x-C)/D,this.z=(_-g)/D,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=an(this.x,t.x,i.x),this.y=an(this.y,t.y,i.y),this.z=an(this.z,t.z,i.z),this.w=an(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=an(this.x,t,i),this.y=an(this.y,t,i),this.z=an(this.z,t,i),this.w=an(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(an(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class my extends fl{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ti(0,0,t,i),this.scissorTest=!1,this.viewport=new ti(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ai(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Rm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends my{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Mx extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(t,i,s,l,c,f,p,m,d,g,x,_,y,b,C,M){Fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d,g,x,_,y,b,C,M)}set(t,i,s,l,c,f,p,m,d,g,x,_,y,b,C,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=p,v[13]=m,v[2]=d,v[6]=g,v[10]=x,v[14]=_,v[3]=y,v[7]=b,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ho.setFromMatrixColumn(t,0).length(),c=1/Ho.setFromMatrixColumn(t,1).length(),f=1/Ho.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=f*g,y=f*x,b=p*g,C=p*x;i[0]=m*g,i[4]=-m*x,i[8]=d,i[1]=y+b*d,i[5]=_-C*d,i[9]=-p*m,i[2]=C-_*d,i[6]=b+y*d,i[10]=f*m}else if(t.order==="YXZ"){const _=m*g,y=m*x,b=d*g,C=d*x;i[0]=_+C*p,i[4]=b*p-y,i[8]=f*d,i[1]=f*x,i[5]=f*g,i[9]=-p,i[2]=y*p-b,i[6]=C+_*p,i[10]=f*m}else if(t.order==="ZXY"){const _=m*g,y=m*x,b=d*g,C=d*x;i[0]=_-C*p,i[4]=-f*x,i[8]=b+y*p,i[1]=y+b*p,i[5]=f*g,i[9]=C-_*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const _=f*g,y=f*x,b=p*g,C=p*x;i[0]=m*g,i[4]=b*d-y,i[8]=_*d+C,i[1]=m*x,i[5]=C*d+_,i[9]=y*d-b,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,y=f*d,b=p*m,C=p*d;i[0]=m*g,i[4]=C-_*x,i[8]=b*x+y,i[1]=x,i[5]=f*g,i[9]=-p*g,i[2]=-d*g,i[6]=y*x+b,i[10]=_-C*x}else if(t.order==="XZY"){const _=f*m,y=f*d,b=p*m,C=p*d;i[0]=m*g,i[4]=-x,i[8]=d*g,i[1]=_*x+C,i[5]=f*g,i[9]=y*x-b,i[2]=b*x-y,i[6]=p*g,i[10]=C*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_y,t,vy)}lookAt(t,i,s){const l=this.elements;return ca.subVectors(t,i),ca.lengthSq()===0&&(ca.z=1),ca.normalize(),cr.crossVectors(s,ca),cr.lengthSq()===0&&(Math.abs(s.z)===1?ca.x+=1e-4:ca.z+=1e-4,ca.normalize(),cr.crossVectors(s,ca)),cr.normalize(),Bu.crossVectors(ca,cr),l[0]=cr.x,l[4]=Bu.x,l[8]=ca.x,l[1]=cr.y,l[5]=Bu.y,l[9]=ca.y,l[2]=cr.z,l[6]=Bu.z,l[10]=ca.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],g=s[1],x=s[5],_=s[9],y=s[13],b=s[2],C=s[6],M=s[10],v=s[14],D=s[3],I=s[7],N=s[11],z=s[15],H=l[0],k=l[4],T=l[8],L=l[12],ht=l[1],V=l[5],st=l[9],lt=l[13],St=l[2],at=l[6],F=l[10],B=l[14],dt=l[3],Et=l[7],U=l[11],$=l[15];return c[0]=f*H+p*ht+m*St+d*dt,c[4]=f*k+p*V+m*at+d*Et,c[8]=f*T+p*st+m*F+d*U,c[12]=f*L+p*lt+m*B+d*$,c[1]=g*H+x*ht+_*St+y*dt,c[5]=g*k+x*V+_*at+y*Et,c[9]=g*T+x*st+_*F+y*U,c[13]=g*L+x*lt+_*B+y*$,c[2]=b*H+C*ht+M*St+v*dt,c[6]=b*k+C*V+M*at+v*Et,c[10]=b*T+C*st+M*F+v*U,c[14]=b*L+C*lt+M*B+v*$,c[3]=D*H+I*ht+N*St+z*dt,c[7]=D*k+I*V+N*at+z*Et,c[11]=D*T+I*st+N*F+z*U,c[15]=D*L+I*lt+N*B+z*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],g=t[2],x=t[6],_=t[10],y=t[14],b=t[3],C=t[7],M=t[11],v=t[15],D=m*y-d*_,I=p*y-d*x,N=p*_-m*x,z=f*y-d*g,H=f*_-m*g,k=f*x-p*g;return i*(C*D-M*I+v*N)-s*(b*D-M*z+v*H)+l*(b*I-C*z+v*k)-c*(b*N-C*H+M*k)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],x=t[9],_=t[10],y=t[11],b=t[12],C=t[13],M=t[14],v=t[15],D=i*p-s*f,I=i*m-l*f,N=i*d-c*f,z=s*m-l*p,H=s*d-c*p,k=l*d-c*m,T=g*C-x*b,L=g*M-_*b,ht=g*v-y*b,V=x*M-_*C,st=x*v-y*C,lt=_*v-y*M,St=D*lt-I*st+N*V+z*ht-H*L+k*T;if(St===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const at=1/St;return t[0]=(p*lt-m*st+d*V)*at,t[1]=(l*st-s*lt-c*V)*at,t[2]=(C*k-M*H+v*z)*at,t[3]=(_*H-x*k-y*z)*at,t[4]=(m*ht-f*lt-d*L)*at,t[5]=(i*lt-l*ht+c*L)*at,t[6]=(M*N-b*k-v*I)*at,t[7]=(g*k-_*N+y*I)*at,t[8]=(f*st-p*ht+d*T)*at,t[9]=(s*ht-i*st-c*T)*at,t[10]=(b*H-C*N+v*D)*at,t[11]=(x*N-g*H-y*D)*at,t[12]=(p*L-f*V-m*T)*at,t[13]=(i*V-s*L+l*T)*at,t[14]=(C*I-b*z-M*D)*at,t[15]=(g*z-x*I+_*D)*at,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,d=c*f,g=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+s,g*m-l*f,0,d*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,g=f+f,x=p+p,_=c*d,y=c*g,b=c*x,C=f*g,M=f*x,v=p*x,D=m*d,I=m*g,N=m*x,z=s.x,H=s.y,k=s.z;return l[0]=(1-(C+v))*z,l[1]=(y+N)*z,l[2]=(b-I)*z,l[3]=0,l[4]=(y-N)*H,l[5]=(1-(_+v))*H,l[6]=(M+D)*H,l[7]=0,l[8]=(b+I)*k,l[9]=(M-D)*k,l[10]=(1-(_+C))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ho.set(l[0],l[1],l[2]).length();const p=Ho.set(l[4],l[5],l[6]).length(),m=Ho.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Pa.copy(this);const d=1/f,g=1/p,x=1/m;return Pa.elements[0]*=d,Pa.elements[1]*=d,Pa.elements[2]*=d,Pa.elements[4]*=g,Pa.elements[5]*=g,Pa.elements[6]*=g,Pa.elements[8]*=x,Pa.elements[9]*=x,Pa.elements[10]*=x,i.setFromRotationMatrix(Pa),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=ts,m=!1){const d=this.elements,g=2*c/(i-t),x=2*c/(s-l),_=(i+t)/(i-t),y=(s+l)/(s-l);let b,C;if(m)b=c/(f-c),C=f*c/(f-c);else if(p===ts)b=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===Rc)b=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=x,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=ts,m=!1){const d=this.elements,g=2/(i-t),x=2/(s-l),_=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,C;if(m)b=1/(f-c),C=f/(f-c);else if(p===ts)b=-2/(f-c),C=-(f+c)/(f-c);else if(p===Rc)b=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=x,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ho=new K,Pa=new Fn,_y=new K(0,0,0),vy=new K(1,1,1),cr=new K,Bu=new K,ca=new K,nv=new Fn,iv=new hl;class Ha{constructor(t=0,i=0,s=0,l=Ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],g=l[9],x=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(an(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-an(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(an(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-an(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(an(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return nv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return iv.setFromEuler(this),this.setFromQuaternion(iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ha.DEFAULT_ORDER="XYZ";class wm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xy=0;const av=new K,Go=new hl,Es=new Fn,zu=new K,lc=new K,My=new K,Sy=new hl,sv=new K(1,0,0),rv=new K(0,1,0),ov=new K(0,0,1),lv={type:"added"},yy={type:"removed"},Vo={type:"childadded",child:null},Xd={type:"childremoved",child:null};class yi extends fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yi.DEFAULT_UP.clone();const t=new K,i=new Ha,s=new hl,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Fn},normalMatrix:{value:new Ge}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=yi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Go.setFromAxisAngle(t,i),this.quaternion.multiply(Go),this}rotateOnWorldAxis(t,i){return Go.setFromAxisAngle(t,i),this.quaternion.premultiply(Go),this}rotateX(t){return this.rotateOnAxis(sv,t)}rotateY(t){return this.rotateOnAxis(rv,t)}rotateZ(t){return this.rotateOnAxis(ov,t)}translateOnAxis(t,i){return av.copy(t).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(sv,t)}translateY(t){return this.translateOnAxis(rv,t)}translateZ(t){return this.translateOnAxis(ov,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Es.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?zu.copy(t):zu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Es.lookAt(lc,zu,this.up):Es.lookAt(zu,lc,this.up),this.quaternion.setFromRotationMatrix(Es),l&&(Es.extractRotation(l.matrixWorld),Go.setFromRotationMatrix(Es),this.quaternion.premultiply(Go.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(un("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lv),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null):un("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(yy),Xd.child=t,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Es.multiply(t.parent.matrixWorld)),t.applyMatrix4(Es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lv),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,t,My),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,Sy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),x=f(t.shapes),_=f(t.skeletons),y=f(t.animations),b=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}yi.DEFAULT_UP=new K(0,1,0);yi.DEFAULT_MATRIX_AUTO_UPDATE=!0;yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class il extends yi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,s),v=this._getHandJoint(d,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],_=g.position.distanceTo(x.position),y=.02,b=.005;d.inputState.pinching&&_>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(by)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new il;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Hu={h:0,s:0,l:0};function qd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class $e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pn.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=pn.workingColorSpace){return this.r=t,this.g=i,this.b=s,pn.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=pn.workingColorSpace){if(t=Am(t,1),i=an(i,0,1),s=an(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=qd(f,c,t+1/3),this.g=qd(f,c,t),this.b=qd(f,c,t-1/3)}return pn.colorSpaceToWorking(this,l),this}setStyle(t,i=yn){function s(c){c!==void 0&&parseFloat(c)<1&&Fe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Fe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);Fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=yn){const s=Sx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}copyLinearToSRGB(t){return this.r=sl(t.r),this.g=sl(t.g),this.b=sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return pn.workingToColorSpace(Oi.copy(this),t),Math.round(an(Oi.r*255,0,255))*65536+Math.round(an(Oi.g*255,0,255))*256+Math.round(an(Oi.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=pn.workingColorSpace){pn.workingToColorSpace(Oi.copy(this),i);const s=Oi.r,l=Oi.g,c=Oi.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const g=(p+f)/2;if(p===f)m=0,d=0;else{const x=f-p;switch(d=g<=.5?x/(f+p):x/(2-f-p),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=pn.workingColorSpace){return pn.workingToColorSpace(Oi.copy(this),i),t.r=Oi.r,t.g=Oi.g,t.b=Oi.b,t}getStyle(t=yn){pn.workingToColorSpace(Oi.copy(this),t);const i=Oi.r,s=Oi.g,l=Oi.b;return t!==yn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(Hu);const s=Ec(ur.h,Hu.h,i),l=Ec(ur.s,Hu.s,i),c=Ec(ur.l,Hu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oi=new $e;$e.NAMES=Sx;class Ey extends yi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ha,this.environmentIntensity=1,this.environmentRotation=new Ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oa=new K,Ts=new K,Yd=new K,As=new K,ko=new K,Xo=new K,cv=new K,jd=new K,Zd=new K,Kd=new K,Qd=new ti,Jd=new ti,$d=new ti;class Ra{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Oa.subVectors(t,i),l.cross(Oa);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Oa.subVectors(l,i),Ts.subVectors(s,i),Yd.subVectors(t,i);const f=Oa.dot(Oa),p=Oa.dot(Ts),m=Oa.dot(Yd),d=Ts.dot(Ts),g=Ts.dot(Yd),x=f*d-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,y=(d*m-p*g)*_,b=(f*g-p*m)*_;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,As)===null?!1:As.x>=0&&As.y>=0&&As.x+As.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,As)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,As.x),m.addScaledVector(f,As.y),m.addScaledVector(p,As.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(t,i),Jd.fromBufferAttribute(t,s),$d.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Qd,c.x),f.addScaledVector(Jd,c.y),f.addScaledVector($d,c.z),f}static isFrontFacing(t,i,s,l){return Oa.subVectors(s,i),Ts.subVectors(t,i),Oa.cross(Ts).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oa.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Oa.cross(Ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ra.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ra.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ra.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ra.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ra.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;ko.subVectors(l,s),Xo.subVectors(c,s),jd.subVectors(t,s);const m=ko.dot(jd),d=Xo.dot(jd);if(m<=0&&d<=0)return i.copy(s);Zd.subVectors(t,l);const g=ko.dot(Zd),x=Xo.dot(Zd);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*d;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(ko,f);Kd.subVectors(t,c);const y=ko.dot(Kd),b=Xo.dot(Kd);if(b>=0&&y<=b)return i.copy(c);const C=y*d-m*b;if(C<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(Xo,p);const M=g*b-y*x;if(M<=0&&x-g>=0&&y-b>=0)return cv.subVectors(c,l),p=(x-g)/(x-g+(y-b)),i.copy(l).addScaledVector(cv,p);const v=1/(M+C+_);return f=C*v,p=_*v,i.copy(s).addScaledVector(ko,f).addScaledVector(Xo,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Lc{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ia.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ia.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ia.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Ia):Ia.fromBufferAttribute(c,f),Ia.applyMatrix4(t.matrixWorld),this.expandByPoint(Ia);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Gu.copy(s.boundingBox)),Gu.applyMatrix4(t.matrixWorld),this.union(Gu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ia),Ia.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cc),Vu.subVectors(this.max,cc),Wo.subVectors(t.a,cc),qo.subVectors(t.b,cc),Yo.subVectors(t.c,cc),fr.subVectors(qo,Wo),hr.subVectors(Yo,qo),Vr.subVectors(Wo,Yo);let i=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Vr.z,Vr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Vr.z,0,-Vr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Vr.y,Vr.x,0];return!tp(i,Wo,qo,Yo,Vu)||(i=[1,0,0,0,1,0,0,0,1],!tp(i,Wo,qo,Yo,Vu))?!1:(ku.crossVectors(fr,hr),i=[ku.x,ku.y,ku.z],tp(i,Wo,qo,Yo,Vu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ia).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ia).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rs=[new K,new K,new K,new K,new K,new K,new K,new K],Ia=new K,Gu=new Lc,Wo=new K,qo=new K,Yo=new K,fr=new K,hr=new K,Vr=new K,cc=new K,Vu=new K,ku=new K,kr=new K;function tp(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){kr.fromArray(r,c);const p=l.x*Math.abs(kr.x)+l.y*Math.abs(kr.y)+l.z*Math.abs(kr.z),m=t.dot(kr),d=i.dot(kr),g=s.dot(kr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const oi=new K,Xu=new ke;let Ty=0;class Vn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=lm,this.updateRanges=[],this.gpuType=$a,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Xu.fromBufferAttribute(this,i),Xu.applyMatrix3(t),this.setXY(i,Xu.x,Xu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)oi.fromBufferAttribute(this,i),oi.applyMatrix3(t),this.setXYZ(i,oi.x,oi.y,oi.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)oi.fromBufferAttribute(this,i),oi.applyMatrix4(t),this.setXYZ(i,oi.x,oi.y,oi.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)oi.fromBufferAttribute(this,i),oi.applyNormalMatrix(t),this.setXYZ(i,oi.x,oi.y,oi.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)oi.fromBufferAttribute(this,i),oi.transformDirection(t),this.setXYZ(i,oi.x,oi.y,oi.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ba(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Cn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ba(i,this.array)),i}setX(t,i){return this.normalized&&(i=Cn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ba(i,this.array)),i}setY(t,i){return this.normalized&&(i=Cn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ba(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Cn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ba(i,this.array)),i}setW(t,i){return this.normalized&&(i=Cn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Cn(i,this.array),s=Cn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Cn(i,this.array),s=Cn(s,this.array),l=Cn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Cn(i,this.array),s=Cn(s,this.array),l=Cn(l,this.array),c=Cn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lm&&(t.usage=this.usage),t}}class yx extends Vn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class bx extends Vn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Bi extends Vn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const Ay=new Lc,uc=new K,ep=new K;class vr{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ay.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uc.subVectors(t,this.center);const i=uc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(uc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ep.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uc.copy(t.center).add(ep)),this.expandByPoint(uc.copy(t.center).sub(ep))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ry=0;const Aa=new Fn,np=new yi,jo=new K,ua=new Lc,fc=new Lc,Mi=new K;class li extends fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(XS(t)?bx:yx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Aa.makeRotationFromQuaternion(t),this.applyMatrix4(Aa),this}rotateX(t){return Aa.makeRotationX(t),this.applyMatrix4(Aa),this}rotateY(t){return Aa.makeRotationY(t),this.applyMatrix4(Aa),this}rotateZ(t){return Aa.makeRotationZ(t),this.applyMatrix4(Aa),this}translate(t,i,s){return Aa.makeTranslation(t,i,s),this.applyMatrix4(Aa),this}scale(t,i,s){return Aa.makeScale(t,i,s),this.applyMatrix4(Aa),this}lookAt(t){return np.lookAt(t),np.updateMatrix(),this.applyMatrix4(np.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Bi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){un("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ua.setFromBufferAttribute(c),this.morphTargetsRelative?(Mi.addVectors(this.boundingBox.min,ua.min),this.boundingBox.expandByPoint(Mi),Mi.addVectors(this.boundingBox.max,ua.max),this.boundingBox.expandByPoint(Mi)):(this.boundingBox.expandByPoint(ua.min),this.boundingBox.expandByPoint(ua.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&un('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){un("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(ua.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];fc.setFromBufferAttribute(p),this.morphTargetsRelative?(Mi.addVectors(ua.min,fc.min),ua.expandByPoint(Mi),Mi.addVectors(ua.max,fc.max),ua.expandByPoint(Mi)):(ua.expandByPoint(fc.min),ua.expandByPoint(fc.max))}ua.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Mi.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mi));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)Mi.fromBufferAttribute(p,d),m&&(jo.fromBufferAttribute(t,d),Mi.add(jo)),l=Math.max(l,s.distanceToSquared(Mi))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&un('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){un("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new K,m[T]=new K;const d=new K,g=new K,x=new K,_=new ke,y=new ke,b=new ke,C=new K,M=new K;function v(T,L,ht){d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,L),x.fromBufferAttribute(s,ht),_.fromBufferAttribute(c,T),y.fromBufferAttribute(c,L),b.fromBufferAttribute(c,ht),g.sub(d),x.sub(d),y.sub(_),b.sub(_);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(V),M.copy(x).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(V),p[T].add(C),p[L].add(C),p[ht].add(C),m[T].add(M),m[L].add(M),m[ht].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,L=D.length;T<L;++T){const ht=D[T],V=ht.start,st=ht.count;for(let lt=V,St=V+st;lt<St;lt+=3)v(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const I=new K,N=new K,z=new K,H=new K;function k(T){z.fromBufferAttribute(l,T),H.copy(z);const L=p[T];I.copy(L),I.sub(z.multiplyScalar(z.dot(L))).normalize(),N.crossVectors(H,L);const V=N.dot(m[T])<0?-1:1;f.setXYZW(T,I.x,I.y,I.z,V)}for(let T=0,L=D.length;T<L;++T){const ht=D[T],V=ht.start,st=ht.count;for(let lt=V,St=V+st;lt<St;lt+=3)k(t.getX(lt+0)),k(t.getX(lt+1)),k(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new K,c=new K,f=new K,p=new K,m=new K,d=new K,g=new K,x=new K;if(t)for(let _=0,y=t.count;_<y;_+=3){const b=t.getX(_+0),C=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,M),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),p.add(g),m.add(g),d.add(g),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mi.fromBufferAttribute(t,i),Mi.normalize(),t.setXYZ(i,Mi.x,Mi.y,Mi.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,x=p.normalized,_=new d.constructor(m.length*g);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?y=m[C]*p.data.stride+p.offset:y=m[C]*g;for(let v=0;v<g;v++)_[b++]=d[y++]}return new Vn(_,g,x)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new li,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,x=d.length;g<x;g++){const _=d[g],y=t(_,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let x=0,_=d.length;x<_;x++){const y=d[x];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],x=c[d];for(let _=0,y=x.length;_<y;_++)g.push(x[_].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const x=f[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wy{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=lm,this.updateRanges=[],this.version=0,this.uuid=Us()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xi=new K;class Rf{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Xi.fromBufferAttribute(this,i),Xi.applyMatrix4(t),this.setXYZ(i,Xi.x,Xi.y,Xi.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Xi.fromBufferAttribute(this,i),Xi.applyNormalMatrix(t),this.setXYZ(i,Xi.x,Xi.y,Xi.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Xi.fromBufferAttribute(this,i),Xi.transformDirection(t),this.setXYZ(i,Xi.x,Xi.y,Xi.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ba(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Cn(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Cn(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Cn(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Cn(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Cn(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ba(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ba(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ba(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ba(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Cn(i,this.array),s=Cn(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Cn(i,this.array),s=Cn(s,this.array),l=Cn(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Cn(i,this.array),s=Cn(s,this.array),l=Cn(l,this.array),c=Cn(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Tf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Vn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Tf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Cy=0;class Mr extends fl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=$r,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xp,this.blendDst=Mp,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Fe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(s.blending=this.blending),this.side!==xr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xp&&(s.blendSrc=this.blendSrc),this.blendDst!==Mp&&(s.blendDst=this.blendDst),this.blendEquation!==Zr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sf extends Mr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zo;const hc=new K,Ko=new K,Qo=new K,Jo=new ke,dc=new ke,Ex=new Fn,Wu=new K,pc=new K,qu=new K,uv=new ke,ip=new ke,fv=new ke;class hv extends yi{constructor(t=new Sf){if(super(),this.isSprite=!0,this.type="Sprite",Zo===void 0){Zo=new li;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new wy(i,5);Zo.setIndex([0,1,2,0,2,3]),Zo.setAttribute("position",new Rf(s,3,0,!1)),Zo.setAttribute("uv",new Rf(s,2,3,!1))}this.geometry=Zo,this.material=t,this.center=new ke(.5,.5),this.count=1}raycast(t,i){t.camera===null&&un('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ko.setFromMatrixScale(this.matrixWorld),Ex.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ko.multiplyScalar(-Qo.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;Yu(Wu.set(-.5,-.5,0),Qo,f,Ko,l,c),Yu(pc.set(.5,-.5,0),Qo,f,Ko,l,c),Yu(qu.set(.5,.5,0),Qo,f,Ko,l,c),uv.set(0,0),ip.set(1,0),fv.set(1,1);let p=t.ray.intersectTriangle(Wu,pc,qu,!1,hc);if(p===null&&(Yu(pc.set(-.5,.5,0),Qo,f,Ko,l,c),ip.set(0,1),p=t.ray.intersectTriangle(Wu,qu,pc,!1,hc),p===null))return;const m=t.ray.origin.distanceTo(hc);m<t.near||m>t.far||i.push({distance:m,point:hc.clone(),uv:Ra.getInterpolation(hc,Wu,pc,qu,uv,ip,fv,new ke),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yu(r,t,i,s,l,c){Jo.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(dc.x=c*Jo.x-l*Jo.y,dc.y=l*Jo.x+c*Jo.y):dc.copy(Jo),r.copy(t),r.x+=dc.x,r.y+=dc.y,r.applyMatrix4(Ex)}const ws=new K,ap=new K,ju=new K,dr=new K,sp=new K,Zu=new K,rp=new K;class Pf{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ws)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ws.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ws.copy(this.origin).addScaledVector(this.direction,i),ws.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ap.copy(t).add(i).multiplyScalar(.5),ju.copy(i).sub(t).normalize(),dr.copy(this.origin).sub(ap);const c=t.distanceTo(i)*.5,f=-this.direction.dot(ju),p=dr.dot(this.direction),m=-dr.dot(ju),d=dr.lengthSq(),g=Math.abs(1-f*f);let x,_,y,b;if(g>0)if(x=f*m-p,_=f*p-m,b=c*g,x>=0)if(_>=-b)if(_<=b){const C=1/g;x*=C,_*=C,y=x*(x+f*_+2*p)+_*(f*x+_+2*m)+d}else _=c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;else _=-c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;else _<=-b?(x=Math.max(0,-(-f*c+p)),_=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+d):_<=b?(x=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+d):(x=Math.max(0,-(f*c+p)),_=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+d);else _=f>0?-c:c,x=Math.max(0,-(f*_+p)),y=-x*x+_*(_+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ap).addScaledVector(ju,_),y}intersectSphere(t,i){ws.subVectors(t.center,this.origin);const s=ws.dot(this.direction),l=ws.dot(ws)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const d=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(p=(t.min.z-_.z)*x,m=(t.max.z-_.z)*x):(p=(t.max.z-_.z)*x,m=(t.min.z-_.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ws)!==null}intersectTriangle(t,i,s,l,c){sp.subVectors(i,t),Zu.subVectors(s,t),rp.crossVectors(sp,Zu);let f=this.direction.dot(rp),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;dr.subVectors(this.origin,t);const m=p*this.direction.dot(Zu.crossVectors(dr,Zu));if(m<0)return null;const d=p*this.direction.dot(sp.cross(dr));if(d<0||m+d>f)return null;const g=-p*dr.dot(rp);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wf extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ha,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dv=new Fn,Xr=new Pf,Ku=new vr,pv=new K,Qu=new K,Ju=new K,$u=new K,op=new K,tf=new K,mv=new K,ef=new K;class qi extends yi{constructor(t=new li,i=new wf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){tf.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],x=c[m];g!==0&&(op.fromBufferAttribute(x,t),f?tf.addScaledVector(op,g):tf.addScaledVector(op.sub(i),g))}i.add(tf)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ku.copy(s.boundingSphere),Ku.applyMatrix4(c),Xr.copy(t.ray).recast(t.near),!(Ku.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Ku,pv)===null||Xr.origin.distanceToSquared(pv)>(t.far-t.near)**2))&&(dv.copy(c).invert(),Xr.copy(t.ray).applyMatrix4(dv),!(s.boundingBox!==null&&Xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Xr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,C=_.length;b<C;b++){const M=_[b],v=f[M.materialIndex],D=Math.max(M.start,y.start),I=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let N=D,z=I;N<z;N+=3){const H=p.getX(N),k=p.getX(N+1),T=p.getX(N+2);l=nf(this,v,t,s,d,g,x,H,k,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let M=b,v=C;M<v;M+=3){const D=p.getX(M),I=p.getX(M+1),N=p.getX(M+2);l=nf(this,f,t,s,d,g,x,D,I,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,C=_.length;b<C;b++){const M=_[b],v=f[M.materialIndex],D=Math.max(M.start,y.start),I=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=D,z=I;N<z;N+=3){const H=N,k=N+1,T=N+2;l=nf(this,v,t,s,d,g,x,H,k,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,v=C;M<v;M+=3){const D=M,I=M+1,N=M+2;l=nf(this,f,t,s,d,g,x,D,I,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Dy(r,t,i,s,l,c,f,p){let m;if(t.side===Ji?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===xr,p),m===null)return null;ef.copy(p),ef.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(ef);return d<i.near||d>i.far?null:{distance:d,point:ef.clone(),object:r}}function nf(r,t,i,s,l,c,f,p,m,d){r.getVertexPosition(p,Qu),r.getVertexPosition(m,Ju),r.getVertexPosition(d,$u);const g=Dy(r,t,i,s,Qu,Ju,$u,mv);if(g){const x=new K;Ra.getBarycoord(mv,Qu,Ju,$u,x),l&&(g.uv=Ra.getInterpolatedAttribute(l,p,m,d,x,new ke)),c&&(g.uv1=Ra.getInterpolatedAttribute(c,p,m,d,x,new ke)),f&&(g.normal=Ra.getInterpolatedAttribute(f,p,m,d,x,new K),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new K,materialIndex:0};Ra.getNormal(Qu,Ju,$u,_.normal),g.face=_,g.barycoord=x}return g}class Uy extends ai{constructor(t=null,i=1,s=1,l,c,f,p,m,d=Ri,g=Ri,x,_){super(null,f,p,m,d,g,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lp=new K,Ly=new K,Ny=new Ge;class jr{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=lp.subVectors(s,i).cross(Ly.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(lp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Ny.getNormalMatrix(t),l=this.coplanarPoint(lp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new vr,Py=new ke(.5,.5),af=new K;class Cm{constructor(t=new jr,i=new jr,s=new jr,l=new jr,c=new jr,f=new jr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ts,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],g=c[4],x=c[5],_=c[6],y=c[7],b=c[8],C=c[9],M=c[10],v=c[11],D=c[12],I=c[13],N=c[14],z=c[15];if(l[0].setComponents(d-f,y-g,v-b,z-D).normalize(),l[1].setComponents(d+f,y+g,v+b,z+D).normalize(),l[2].setComponents(d+p,y+x,v+C,z+I).normalize(),l[3].setComponents(d-p,y-x,v-C,z-I).normalize(),s)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(d-m,y-_,v-M,z-N).normalize();else if(l[4].setComponents(d-m,y-_,v-M,z-N).normalize(),i===ts)l[5].setComponents(d+m,y+_,v+M,z+N).normalize();else if(i===Rc)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);const i=Py.distanceTo(t.center);return Wr.radius=.7071067811865476+i,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(af.x=l.normal.x>0?t.max.x:t.min.x,af.y=l.normal.y>0?t.max.y:t.min.y,af.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(af)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cm extends Mr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cf=new K,Df=new K,gv=new Fn,mc=new Pf,sf=new vr,cp=new K,_v=new K;class Oy extends yi{constructor(t=new li,i=new cm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Cf.fromBufferAttribute(i,l-1),Df.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Cf.distanceTo(Df);t.setAttribute("lineDistance",new Bi(s,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),sf.copy(s.boundingSphere),sf.applyMatrix4(l),sf.radius+=c,t.ray.intersectsSphere(sf)===!1)return;gv.copy(l).invert(),mc.copy(t.ray).applyMatrix4(gv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let C=y,M=b-1;C<M;C+=d){const v=g.getX(C),D=g.getX(C+1),I=rf(this,t,mc,m,v,D,C);I&&i.push(I)}if(this.isLineLoop){const C=g.getX(b-1),M=g.getX(y),v=rf(this,t,mc,m,C,M,b-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let C=y,M=b-1;C<M;C+=d){const v=rf(this,t,mc,m,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=rf(this,t,mc,m,b-1,y,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function rf(r,t,i,s,l,c,f){const p=r.geometry.attributes.position;if(Cf.fromBufferAttribute(p,l),Df.fromBufferAttribute(p,c),i.distanceSqToSegment(Cf,Df,cp,_v)>s)return;cp.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(cp);if(!(d<t.near||d>t.far))return{distance:d,point:_v.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class vv extends Oy{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class Iy extends Mr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xv=new Fn,um=new Pf,of=new vr,lf=new K;class cf extends yi{constructor(t=new li,i=new Iy){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),of.copy(s.boundingSphere),of.applyMatrix4(l),of.radius+=c,t.ray.intersectsSphere(of)===!1)return;xv.copy(l).invert(),um.copy(t.ray).applyMatrix4(xv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,x=s.attributes.position;if(d!==null){const _=Math.max(0,f.start),y=Math.min(d.count,f.start+f.count);for(let b=_,C=y;b<C;b++){const M=d.getX(b);lf.fromBufferAttribute(x,M),Mv(lf,M,m,l,t,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(x.count,f.start+f.count);for(let b=_,C=y;b<C;b++)lf.fromBufferAttribute(x,b),Mv(lf,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Mv(r,t,i,s,l,c,f){const p=um.distanceSqToPoint(r);if(p<i){const m=new K;um.closestPointToPoint(r,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Tx extends ai{constructor(t=[],i=to,s,l,c,f,p,m,d,g){super(t,i,s,l,c,f,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Si extends ai{constructor(t,i,s,l,c,f,p,m,d){super(t,i,s,l,c,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dc extends ai{constructor(t,i,s=is,l,c,f,p=Ri,m=Ri,d,g=Ps,x=1){if(g!==Ps&&g!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,c,f,p,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fy extends Dc{constructor(t,i=is,s=to,l,c,f=Ri,p=Ri,m,d=Ps){const g={width:t,height:t,depth:1},x=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ax extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Nc extends li{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],x=[];let _=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Bi(d,3)),this.setAttribute("normal",new Bi(g,3)),this.setAttribute("uv",new Bi(x,2));function b(C,M,v,D,I,N,z,H,k,T,L){const ht=N/k,V=z/T,st=N/2,lt=z/2,St=H/2,at=k+1,F=T+1;let B=0,dt=0;const Et=new K;for(let U=0;U<F;U++){const $=U*V-lt;for(let ot=0;ot<at;ot++){const vt=ot*ht-st;Et[C]=vt*D,Et[M]=$*I,Et[v]=St,d.push(Et.x,Et.y,Et.z),Et[C]=0,Et[M]=0,Et[v]=H>0?1:-1,g.push(Et.x,Et.y,Et.z),x.push(ot/k),x.push(1-U/T),B+=1}}for(let U=0;U<T;U++)for(let $=0;$<k;$++){const ot=_+$+at*U,vt=_+$+at*(U+1),Zt=_+($+1)+at*(U+1),pe=_+($+1)+at*U;m.push(ot,vt,pe),m.push(vt,Zt,pe),dt+=6}p.addGroup(y,dt,L),y+=dt,_+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Of extends li{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,g=m+1,x=t/p,_=i/m,y=[],b=[],C=[],M=[];for(let v=0;v<g;v++){const D=v*_-f;for(let I=0;I<d;I++){const N=I*x-c;b.push(N,-D,0),C.push(0,0,1),M.push(I/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<p;D++){const I=D+d*v,N=D+d*(v+1),z=D+1+d*(v+1),H=D+1+d*v;y.push(I,N,H),y.push(N,z,H)}this.setIndex(y),this.setAttribute("position",new Bi(b,3)),this.setAttribute("normal",new Bi(C,3)),this.setAttribute("uv",new Bi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Of(t.width,t.height,t.widthSegments,t.heightSegments)}}class Uf extends li{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],d=[],g=[];let x=t;const _=(i-t)/l,y=new K,b=new ke;for(let C=0;C<=l;C++){for(let M=0;M<=s;M++){const v=c+M/s*f;y.x=x*Math.cos(v),y.y=x*Math.sin(v),m.push(y.x,y.y,y.z),d.push(0,0,1),b.x=(y.x/i+1)/2,b.y=(y.y/i+1)/2,g.push(b.x,b.y)}x+=_}for(let C=0;C<l;C++){const M=C*(s+1);for(let v=0;v<s;v++){const D=v+M,I=D,N=D+s+1,z=D+s+2,H=D+1;p.push(I,N,H),p.push(N,z,H)}}this.setIndex(p),this.setAttribute("position",new Bi(m,3)),this.setAttribute("normal",new Bi(d,3)),this.setAttribute("uv",new Bi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class al extends li{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+p,Math.PI);let d=0;const g=[],x=new K,_=new K,y=[],b=[],C=[],M=[];for(let v=0;v<=s;v++){const D=[],I=v/s;let N=0;v===0&&f===0?N=.5/i:v===s&&m===Math.PI&&(N=-.5/i);for(let z=0;z<=i;z++){const H=z/i;x.x=-t*Math.cos(l+H*c)*Math.sin(f+I*p),x.y=t*Math.cos(f+I*p),x.z=t*Math.sin(l+H*c)*Math.sin(f+I*p),b.push(x.x,x.y,x.z),_.copy(x).normalize(),C.push(_.x,_.y,_.z),M.push(H+N,1-I),D.push(d++)}g.push(D)}for(let v=0;v<s;v++)for(let D=0;D<i;D++){const I=g[v][D+1],N=g[v][D],z=g[v+1][D],H=g[v+1][D+1];(v!==0||f>0)&&y.push(I,N,H),(v!==s-1||m<Math.PI)&&y.push(N,z,H)}this.setIndex(y),this.setAttribute("position",new Bi(b,3)),this.setAttribute("normal",new Bi(C,3)),this.setAttribute("uv",new Bi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ul(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Wi(r){const t={};for(let i=0;i<r.length;i++){const s=ul(r[i]);for(const l in s)t[l]=s[l]}return t}function By(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Rx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pn.workingColorSpace}const zy={clone:ul,merge:Wi};var Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=Gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ul(t.uniforms),this.uniformsGroups=By(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Vy extends Ii{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sv extends Mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vx,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ha,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ky extends Mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xy extends Mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const up={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(yv(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!yv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function yv(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Wy{constructor(t,i,s){const l=this;let c=!1,f=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){p++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,p),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,p),f===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return d.push(g,x),this},this.removeHandler=function(g){const x=d.indexOf(g);return x!==-1&&d.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=d.length;x<_;x+=2){const y=d[x],b=d[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qy=new Wy;class Dm{constructor(t){this.manager=t!==void 0?t:qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Dm.DEFAULT_MATERIAL_NAME="__DEFAULT";const $o=new WeakMap;class Yy extends Dm{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=up.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let x=$o.get(f);x===void 0&&(x=[],$o.set(f,x)),x.push({onLoad:i,onError:l})}return f}const p=wc("img");function m(){g(),i&&i(this);const x=$o.get(this)||[];for(let _=0;_<x.length;_++){const y=x[_];y.onLoad&&y.onLoad(this)}$o.delete(this),c.manager.itemEnd(t)}function d(x){g(),l&&l(x),up.remove(`image:${t}`);const _=$o.get(this)||[];for(let y=0;y<_.length;y++){const b=_[y];b.onError&&b.onError(x)}$o.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),up.add(`image:${t}`,p),c.manager.itemStart(t),p.src=t,p}}class jy extends Dm{constructor(t){super(t)}load(t,i,s,l){const c=new ai,f=new Yy(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class wx extends yi{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const fp=new Fn,bv=new K,Ev=new K;class Zy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=da,this.map=null,this.mapPass=null,this.matrix=new Fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cm,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ti(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;bv.setFromMatrixPosition(t.matrixWorld),i.position.copy(bv),Ev.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Ev),i.updateMatrixWorld(),fp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fp,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Rc||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(fp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const uf=new K,ff=new hl,Ka=new K;class Cx extends yi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fn,this.projectionMatrix=new Fn,this.projectionMatrixInverse=new Fn,this.coordinateSystem=ts,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uf,ff,Ka),Ka.x===1&&Ka.y===1&&Ka.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uf,ff,Ka.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(uf,ff,Ka),Ka.x===1&&Ka.y===1&&Ka.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uf,ff,Ka.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new K,Tv=new ke,Av=new ke;class ha extends Cx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-t/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(pr.x,pr.y).multiplyScalar(-t/pr.z)}getViewSize(t,i){return this.getViewBounds(t,Tv,Av),i.subVectors(Av,Tv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ky extends Zy{constructor(){super(new ha(90,1,.5,500)),this.isPointLightShadow=!0}}class Qy extends wx{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Ky}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Dx extends Cx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Jy extends wx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const tl=-90,el=1;class $y extends yi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ha(tl,el,t,i);l.layers=this.layers,this.add(l);const c=new ha(tl,el,t,i);c.layers=this.layers,this.add(c);const f=new ha(tl,el,t,i);f.layers=this.layers,this.add(f);const p=new ha(tl,el,t,i);p.layers=this.layers,this.add(p);const m=new ha(tl,el,t,i);m.layers=this.layers,this.add(m);const d=new ha(tl,el,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===ts)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Rc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,g]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(x,_,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class t1 extends ha{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Rv=new Fn;class e1{constructor(t,i,s=0,l=1/0){this.ray=new Pf(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new wm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):un("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Rv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rv),this}intersectObject(t,i=!0,s=[]){return fm(t,this,s,i),s.sort(wv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)fm(t[l],this,s,i);return s.sort(wv),s}}function wv(r,t){return r.distance-t.distance}function fm(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)fm(c[f],t,i,!0)}}function Cv(r,t,i,s){const l=n1(s);switch(i){case mx:return r*t;case _x:return r*t/l.components*l.byteLength;case Sm:return r*t/l.components*l.byteLength;case ll:return r*t*2/l.components*l.byteLength;case ym:return r*t*2/l.components*l.byteLength;case gx:return r*t*3/l.components*l.byteLength;case za:return r*t*4/l.components*l.byteLength;case bm:return r*t*4/l.components*l.byteLength;case _f:case vf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xf:case Mf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Up:case Np:return Math.max(r,16)*Math.max(t,8)/4;case Dp:case Lp:return Math.max(r,8)*Math.max(t,8)/2;case Pp:case Op:case Fp:case Bp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ip:case zp:case Hp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case kp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case qp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case $p:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tm:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case em:case nm:case im:return Math.ceil(r/4)*Math.ceil(t/4)*16;case am:case sm:return Math.ceil(r/4)*Math.ceil(t/4)*8;case rm:case om:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function n1(r){switch(r){case da:case fx:return{byteLength:1,components:1};case Tc:case hx:case Ns:return{byteLength:2,components:1};case xm:case Mm:return{byteLength:2,components:4};case is:case vm:case $a:return{byteLength:4,components:1};case dx:case px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);function Ux(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function i1(r){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,x=d.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,d,g),p.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const g=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,g);else{x.sort((y,b)=>y.start-b.start);let _=0;for(let y=1;y<x.length;y++){const b=x[_],C=x[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,x[_]=C)}x.length=_+1;for(let y=0,b=x.length;y<b;y++){const C=x[y];r.bufferSubData(d,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s1=`#ifdef USE_ALPHAHASH
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
#endif`,r1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u1=`#ifdef USE_AOMAP
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
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h1=`#ifdef USE_BATCHING
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
#endif`,d1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,v1=`#ifdef USE_BUMPMAP
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
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,R1=`#define PI 3.141592653589793
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
} // validated`,w1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C1=`vec3 transformedNormal = objectNormal;
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
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P1="gl_FragColor = linearToOutputTexel( gl_FragColor );",O1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W1=`#ifdef USE_GRADIENTMAP
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
}`,q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z1=`uniform bool receiveShadow;
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
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eb=`PhysicalMaterial material;
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
#endif`,nb=`uniform sampler2D dfgLUT;
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
}`,ib=`
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,db=`#if defined( USE_POINTS_UV )
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
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`#ifdef USE_MORPHTARGETS
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
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ab=`#ifdef USE_NORMALMAP
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
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vb=`float getShadowMask() {
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
}`,kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xb=`#ifdef USE_SKINNING
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
#endif`,Wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,Yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qb=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#ifdef USE_TRANSMISSION
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`#include <common>
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
}`,uE=`#if DEPTH_PACKING == 3200
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
}`,fE=`#define DISTANCE
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
}`,hE=`#define DISTANCE
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`uniform float scale;
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
}`,gE=`uniform vec3 diffuse;
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
}`,_E=`#include <common>
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
}`,vE=`uniform vec3 diffuse;
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
}`,xE=`#define LAMBERT
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
}`,ME=`#define LAMBERT
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
}`,SE=`#define MATCAP
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
}`,yE=`#define MATCAP
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
}`,bE=`#define NORMAL
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
}`,EE=`#define NORMAL
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
}`,TE=`#define PHONG
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
}`,AE=`#define PHONG
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
}`,RE=`#define STANDARD
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
}`,wE=`#define STANDARD
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
}`,CE=`#define TOON
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
}`,DE=`#define TOON
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
}`,UE=`uniform float size;
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
}`,LE=`uniform vec3 diffuse;
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
}`,NE=`#include <common>
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
}`,PE=`uniform vec3 color;
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
}`,OE=`uniform float rotation;
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
}`,IE=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:a1,alphahash_pars_fragment:s1,alphamap_fragment:r1,alphamap_pars_fragment:o1,alphatest_fragment:l1,alphatest_pars_fragment:c1,aomap_fragment:u1,aomap_pars_fragment:f1,batching_pars_vertex:h1,batching_vertex:d1,begin_vertex:p1,beginnormal_vertex:m1,bsdfs:g1,iridescence_fragment:_1,bumpmap_pars_fragment:v1,clipping_planes_fragment:x1,clipping_planes_pars_fragment:M1,clipping_planes_pars_vertex:S1,clipping_planes_vertex:y1,color_fragment:b1,color_pars_fragment:E1,color_pars_vertex:T1,color_vertex:A1,common:R1,cube_uv_reflection_fragment:w1,defaultnormal_vertex:C1,displacementmap_pars_vertex:D1,displacementmap_vertex:U1,emissivemap_fragment:L1,emissivemap_pars_fragment:N1,colorspace_fragment:P1,colorspace_pars_fragment:O1,envmap_fragment:I1,envmap_common_pars_fragment:F1,envmap_pars_fragment:B1,envmap_pars_vertex:z1,envmap_physical_pars_fragment:K1,envmap_vertex:H1,fog_vertex:G1,fog_pars_vertex:V1,fog_fragment:k1,fog_pars_fragment:X1,gradientmap_pars_fragment:W1,lightmap_pars_fragment:q1,lights_lambert_fragment:Y1,lights_lambert_pars_fragment:j1,lights_pars_begin:Z1,lights_toon_fragment:Q1,lights_toon_pars_fragment:J1,lights_phong_fragment:$1,lights_phong_pars_fragment:tb,lights_physical_fragment:eb,lights_physical_pars_fragment:nb,lights_fragment_begin:ib,lights_fragment_maps:ab,lights_fragment_end:sb,logdepthbuf_fragment:rb,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:lb,logdepthbuf_vertex:cb,map_fragment:ub,map_pars_fragment:fb,map_particle_fragment:hb,map_particle_pars_fragment:db,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphinstance_vertex:gb,morphcolor_vertex:_b,morphnormal_vertex:vb,morphtarget_pars_vertex:xb,morphtarget_vertex:Mb,normal_fragment_begin:Sb,normal_fragment_maps:yb,normal_pars_fragment:bb,normal_pars_vertex:Eb,normal_vertex:Tb,normalmap_pars_fragment:Ab,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:wb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:Db,opaque_fragment:Ub,packing:Lb,premultiplied_alpha_fragment:Nb,project_vertex:Pb,dithering_fragment:Ob,dithering_pars_fragment:Ib,roughnessmap_fragment:Fb,roughnessmap_pars_fragment:Bb,shadowmap_pars_fragment:zb,shadowmap_pars_vertex:Hb,shadowmap_vertex:Gb,shadowmask_pars_fragment:Vb,skinbase_vertex:kb,skinning_pars_vertex:Xb,skinning_vertex:Wb,skinnormal_vertex:qb,specularmap_fragment:Yb,specularmap_pars_fragment:jb,tonemapping_fragment:Zb,tonemapping_pars_fragment:Kb,transmission_fragment:Qb,transmission_pars_fragment:Jb,uv_pars_fragment:$b,uv_pars_vertex:tE,uv_vertex:eE,worldpos_vertex:nE,background_vert:iE,background_frag:aE,backgroundCube_vert:sE,backgroundCube_frag:rE,cube_vert:oE,cube_frag:lE,depth_vert:cE,depth_frag:uE,distance_vert:fE,distance_frag:hE,equirect_vert:dE,equirect_frag:pE,linedashed_vert:mE,linedashed_frag:gE,meshbasic_vert:_E,meshbasic_frag:vE,meshlambert_vert:xE,meshlambert_frag:ME,meshmatcap_vert:SE,meshmatcap_frag:yE,meshnormal_vert:bE,meshnormal_frag:EE,meshphong_vert:TE,meshphong_frag:AE,meshphysical_vert:RE,meshphysical_frag:wE,meshtoon_vert:CE,meshtoon_frag:DE,points_vert:UE,points_frag:LE,shadow_vert:NE,shadow_frag:PE,sprite_vert:OE,sprite_frag:IE},ee={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ja={basic:{uniforms:Wi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Wi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Wi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Wi([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Wi([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Wi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Wi([ee.points,ee.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Wi([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Wi([ee.common,ee.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Wi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Wi([ee.sprite,ee.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Wi([ee.common,ee.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Wi([ee.lights,ee.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ja.physical={uniforms:Wi([Ja.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const hf={r:0,b:0,g:0},qr=new Ha,FE=new Fn;function BE(r,t,i,s,l,c){const f=new $e(0);let p=l===!0?0:1,m,d,g=null,x=0,_=null;function y(D){let I=D.isScene===!0?D.background:null;if(I&&I.isTexture){const N=D.backgroundBlurriness>0;I=t.get(I,N)}return I}function b(D){let I=!1;const N=y(D);N===null?M(f,p):N&&N.isColor&&(M(N,1),I=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(D,I){const N=y(I);N&&(N.isCubeTexture||N.mapping===Nf)?(d===void 0&&(d=new qi(new Nc(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:ul(Ja.backgroundCube.uniforms),vertexShader:Ja.backgroundCube.vertexShader,fragmentShader:Ja.backgroundCube.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,H,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),qr.copy(I.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(qr)),d.material.toneMapped=pn.getTransfer(N.colorSpace)!==wn,(g!==N||x!==N.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,g=N,x=N.version,_=r.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new qi(new Of(2,2),new Ii({name:"BackgroundMaterial",uniforms:ul(Ja.background.uniforms),vertexShader:Ja.background.vertexShader,fragmentShader:Ja.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=pn.getTransfer(N.colorSpace)!==wn,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||x!==N.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,g=N,x=N.version,_=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,I){D.getRGB(hf,Rx(r)),i.buffers.color.setClear(hf.r,hf.g,hf.b,I,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,I=1){f.set(D),p=I,M(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(f,p)},render:b,addToRenderList:C,dispose:v}}function zE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function p(V,st,lt,St,at){let F=!1;const B=x(V,St,lt,st);c!==B&&(c=B,d(c.object)),F=y(V,St,lt,at),F&&b(V,St,lt,at),at!==null&&t.update(at,r.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,N(V,st,lt,St),at!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function m(){return r.createVertexArray()}function d(V){return r.bindVertexArray(V)}function g(V){return r.deleteVertexArray(V)}function x(V,st,lt,St){const at=St.wireframe===!0;let F=s[st.id];F===void 0&&(F={},s[st.id]=F);const B=V.isInstancedMesh===!0?V.id:0;let dt=F[B];dt===void 0&&(dt={},F[B]=dt);let Et=dt[lt.id];Et===void 0&&(Et={},dt[lt.id]=Et);let U=Et[at];return U===void 0&&(U=_(m()),Et[at]=U),U}function _(V){const st=[],lt=[],St=[];for(let at=0;at<i;at++)st[at]=0,lt[at]=0,St[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:lt,attributeDivisors:St,object:V,attributes:{},index:null}}function y(V,st,lt,St){const at=c.attributes,F=st.attributes;let B=0;const dt=lt.getAttributes();for(const Et in dt)if(dt[Et].location>=0){const $=at[Et];let ot=F[Et];if(ot===void 0&&(Et==="instanceMatrix"&&V.instanceMatrix&&(ot=V.instanceMatrix),Et==="instanceColor"&&V.instanceColor&&(ot=V.instanceColor)),$===void 0||$.attribute!==ot||ot&&$.data!==ot.data)return!0;B++}return c.attributesNum!==B||c.index!==St}function b(V,st,lt,St){const at={},F=st.attributes;let B=0;const dt=lt.getAttributes();for(const Et in dt)if(dt[Et].location>=0){let $=F[Et];$===void 0&&(Et==="instanceMatrix"&&V.instanceMatrix&&($=V.instanceMatrix),Et==="instanceColor"&&V.instanceColor&&($=V.instanceColor));const ot={};ot.attribute=$,$&&$.data&&(ot.data=$.data),at[Et]=ot,B++}c.attributes=at,c.attributesNum=B,c.index=St}function C(){const V=c.newAttributes;for(let st=0,lt=V.length;st<lt;st++)V[st]=0}function M(V){v(V,0)}function v(V,st){const lt=c.newAttributes,St=c.enabledAttributes,at=c.attributeDivisors;lt[V]=1,St[V]===0&&(r.enableVertexAttribArray(V),St[V]=1),at[V]!==st&&(r.vertexAttribDivisor(V,st),at[V]=st)}function D(){const V=c.newAttributes,st=c.enabledAttributes;for(let lt=0,St=st.length;lt<St;lt++)st[lt]!==V[lt]&&(r.disableVertexAttribArray(lt),st[lt]=0)}function I(V,st,lt,St,at,F,B){B===!0?r.vertexAttribIPointer(V,st,lt,at,F):r.vertexAttribPointer(V,st,lt,St,at,F)}function N(V,st,lt,St){C();const at=St.attributes,F=lt.getAttributes(),B=st.defaultAttributeValues;for(const dt in F){const Et=F[dt];if(Et.location>=0){let U=at[dt];if(U===void 0&&(dt==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),dt==="instanceColor"&&V.instanceColor&&(U=V.instanceColor)),U!==void 0){const $=U.normalized,ot=U.itemSize,vt=t.get(U);if(vt===void 0)continue;const Zt=vt.buffer,pe=vt.type,nt=vt.bytesPerElement,Pt=pe===r.INT||pe===r.UNSIGNED_INT||U.gpuType===vm;if(U.isInterleavedBufferAttribute){const _t=U.data,Re=_t.stride,ye=U.offset;if(_t.isInstancedInterleavedBuffer){for(let be=0;be<Et.locationSize;be++)v(Et.location+be,_t.meshPerAttribute);V.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let be=0;be<Et.locationSize;be++)M(Et.location+be);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let be=0;be<Et.locationSize;be++)I(Et.location+be,ot/Et.locationSize,pe,$,Re*nt,(ye+ot/Et.locationSize*be)*nt,Pt)}else{if(U.isInstancedBufferAttribute){for(let _t=0;_t<Et.locationSize;_t++)v(Et.location+_t,U.meshPerAttribute);V.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let _t=0;_t<Et.locationSize;_t++)M(Et.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let _t=0;_t<Et.locationSize;_t++)I(Et.location+_t,ot/Et.locationSize,pe,$,ot*nt,ot/Et.locationSize*_t*nt,Pt)}}else if(B!==void 0){const $=B[dt];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(Et.location,$);break;case 3:r.vertexAttrib3fv(Et.location,$);break;case 4:r.vertexAttrib4fv(Et.location,$);break;default:r.vertexAttrib1fv(Et.location,$)}}}}D()}function z(){L();for(const V in s){const st=s[V];for(const lt in st){const St=st[lt];for(const at in St){const F=St[at];for(const B in F)g(F[B].object),delete F[B];delete St[at]}}delete s[V]}}function H(V){if(s[V.id]===void 0)return;const st=s[V.id];for(const lt in st){const St=st[lt];for(const at in St){const F=St[at];for(const B in F)g(F[B].object),delete F[B];delete St[at]}}delete s[V.id]}function k(V){for(const st in s){const lt=s[st];for(const St in lt){const at=lt[St];if(at[V.id]===void 0)continue;const F=at[V.id];for(const B in F)g(F[B].object),delete F[B];delete at[V.id]}}}function T(V){for(const st in s){const lt=s[st],St=V.isInstancedMesh===!0?V.id:0,at=lt[St];if(at!==void 0){for(const F in at){const B=at[F];for(const dt in B)g(B[dt].object),delete B[dt];delete at[F]}delete lt[St],Object.keys(lt).length===0&&delete s[st]}}}function L(){ht(),f=!0,c!==l&&(c=l,d(c.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:ht,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function HE(r,t,i){let s;function l(d){s=d}function c(d,g){r.drawArrays(s,d,g),i.update(g,s,1)}function f(d,g,x){x!==0&&(r.drawArraysInstanced(s,d,g,x),i.update(g,s,x))}function p(d,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,x);let y=0;for(let b=0;b<x;b++)y+=g[b];i.update(y,s,1)}function m(d,g,x,_){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<d.length;b++)f(d[b],g[b],_[b]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,g,0,_,0,x);let b=0;for(let C=0;C<x;C++)b+=g[C]*_[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function GE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==za&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const T=k===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==da&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==$a&&!T)}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(Fe("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:N,maxSamples:z,samples:H}}function VE(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new jr,p=new Ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||s!==0||l;return l=_,s=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,y){const b=x.clippingPlanes,C=x.clipIntersection,M=x.clipShadows,v=r.get(x);if(!l||b===null||b.length===0||c&&!M)c?g(null):d();else{const D=c?0:s,I=D*4;let N=v.clippingState||null;m.value=N,N=g(b,_,I,y);for(let z=0;z!==I;++z)N[z]=i[z];v.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,_,y,b){const C=x!==null?x.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const v=y+C*4,D=_.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<v)&&(M=new Float32Array(v));for(let I=0,N=y;I!==C;++I,N+=4)f.copy(x[I]).applyMatrix4(D,p),f.normal.toArray(M,N),M[N+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}const _r=4,Dv=[.125,.215,.35,.446,.526,.582],Kr=20,kE=256,gc=new Dx,Uv=new $e;let hp=null,dp=0,pp=0,mp=!1;const XE=new K;class Lv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=XE}=c;hp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hp,dp,pp),this._renderer.xr.enabled=mp,t.scissorTest=!1,nl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===to||t.mapping===ol?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Ns,format:za,colorSpace:cl,depthBuffer:!1},l=Nv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WE(c)),this._blurMaterial=YE(c,t,i),this._ggxMaterial=qE(c,t,i)}return l}_compileMaterial(t){const i=new qi(new li,t);this._renderer.compile(i,gc)}_sceneToCubeUV(t,i,s,l,c){const m=new ha(90,1,i,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(Uv),x.toneMapping=es,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new Nc,new wf({name:"PMREM.Background",side:Ji,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let v=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,v=!0):(M.color.copy(Uv),v=!0);for(let I=0;I<6;I++){const N=I%3;N===0?(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[I],c.y,c.z)):N===1?(m.up.set(0,0,d[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[I],c.z)):(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[I]));const z=this._cubeSize;nl(l,N*z,I>2?z:0,z,z),x.setRenderTarget(l),v&&x.render(C,m),x.render(t,m)}x.toneMapping=y,x.autoClear=_,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===to||t.mapping===ol;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;nl(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,gc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-g*g),_=0+d*1.25,y=x*_,{_lodMax:b}=this,C=this._sizeLods[s],M=3*C*(s>b-_r?s-b+_r:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,nl(c,M,v,3*C,2*C),l.setRenderTarget(c),l.render(p,gc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,nl(t,M,v,3*C,2*C),l.setRenderTarget(t),l.render(p,gc)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&un("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=d;const _=d.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Kr-1),C=c/b,M=isFinite(c)?1+Math.floor(g*C):Kr;M>Kr&&Fe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Kr}`);const v=[];let D=0;for(let k=0;k<Kr;++k){const T=k/C,L=Math.exp(-T*T/2);v.push(L),k===0?D+=L:k<M&&(D+=2*L)}for(let k=0;k<v.length;k++)v[k]=v[k]/D;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:I}=this;_.dTheta.value=b,_.mipInt.value=I-s;const N=this._sizeLods[l],z=3*N*(l>I-_r?l-I+_r:0),H=4*(this._cubeSize-N);nl(i,z,H,3*N,2*N),m.setRenderTarget(i),m.render(x,gc)}}function WE(r){const t=[],i=[],s=[];let l=r;const c=r-_r+1+Dv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-_r?m=Dv[f-r+_r-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,x=1+d,_=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,b=6,C=3,M=2,v=1,D=new Float32Array(C*b*y),I=new Float32Array(M*b*y),N=new Float32Array(v*b*y);for(let H=0;H<y;H++){const k=H%3*2/3-1,T=H>2?0:-1,L=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];D.set(L,C*b*H),I.set(_,M*b*H);const ht=[H,H,H,H,H,H];N.set(ht,v*b*H)}const z=new li;z.setAttribute("position",new Vn(D,C)),z.setAttribute("uv",new Vn(I,M)),z.setAttribute("faceIndex",new Vn(N,v)),s.push(new qi(z,null)),l>_r&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Nv(r,t,i){const s=new ns(r,t,i);return s.texture.mapping=Nf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function nl(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function qE(r,t,i){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:If(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function YE(r,t,i){const s=new Float32Array(Kr),l=new K(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:If(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Pv(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Ov(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function If(){return`

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
	`}class Lx extends ns{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Nc(5,5,5),c=new Ii({name:"CubemapFromEquirect",uniforms:ul(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Ji,blending:Ds});c.uniforms.tEquirect.value=i;const f=new qi(l,c),p=i.minFilter;return i.minFilter===Qr&&(i.minFilter=Fi),new $y(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function jE(r){let t=new WeakMap,i=new WeakMap,s=null;function l(_,y=!1){return _==null?null:y?f(_):c(_)}function c(_){if(_&&_.isTexture){const y=_.mapping;if(y===Fd||y===Bd)if(t.has(_)){const b=t.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new Lx(b.height);return C.fromEquirectangularTexture(r,_),t.set(_,C),_.addEventListener("dispose",d),p(C.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const y=_.mapping,b=y===Fd||y===Bd,C=y===to||y===ol;if(b||C){let M=i.get(_);const v=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new Lv(r)),M=b?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return b&&D&&D.height>0||C&&D&&m(D)?(s===null&&(s=new Lv(r)),M=b?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",g),M.texture):null}}}return _}function p(_,y){return y===Fd?_.mapping=to:y===Bd&&(_.mapping=ol),_}function m(_){let y=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&y++;return y===b}function d(_){const y=_.target;y.removeEventListener("dispose",d);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function g(_){const y=_.target;y.removeEventListener("dispose",g);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function ZE(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Af("WebGLRenderer: "+s+" extension not supported."),l}}}function KE(r,t,i,s){const l={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const y in _)t.update(_[y],r.ARRAY_BUFFER)}function d(x){const _=[],y=x.index,b=x.attributes.position;let C=0;if(b===void 0)return;if(y!==null){const D=y.array;C=y.version;for(let I=0,N=D.length;I<N;I+=3){const z=D[I+0],H=D[I+1],k=D[I+2];_.push(z,H,H,k,k,z)}}else{const D=b.array;C=b.version;for(let I=0,N=D.length/3-1;I<N;I+=3){const z=I+0,H=I+1,k=I+2;_.push(z,H,H,k,k,z)}}const M=new(b.count>=65535?bx:yx)(_,1);M.version=C;const v=c.get(x);v&&t.remove(v),c.set(x,M)}function g(x){const _=c.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:g}}function QE(r,t,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,y){r.drawElements(s,y,c,_*f),i.update(y,s,1)}function d(_,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,_*f,b),i.update(y,s,b))}function g(_,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,s,1)}function x(_,y,b,C){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)d(_[v]/f,y[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,C,0,b);let v=0;for(let D=0;D<b;D++)v+=y[D]*C[D];i.update(v,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function JE(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:un("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function $E(r,t,i){const s=new WeakMap,l=new ti;function c(f,p,m){const d=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=g!==void 0?g.length:0;let _=s.get(p);if(_===void 0||_.count!==x){let ht=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ht)};var y=ht;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let z=p.attributes.position.count*N,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const k=new Float32Array(z*H*4*x),T=new Mx(k,z,H,x);T.type=$a,T.needsUpdate=!0;const L=N*4;for(let V=0;V<x;V++){const st=v[V],lt=D[V],St=I[V],at=z*H*4*V;for(let F=0;F<st.count;F++){const B=F*L;b===!0&&(l.fromBufferAttribute(st,F),k[at+B+0]=l.x,k[at+B+1]=l.y,k[at+B+2]=l.z,k[at+B+3]=0),C===!0&&(l.fromBufferAttribute(lt,F),k[at+B+4]=l.x,k[at+B+5]=l.y,k[at+B+6]=l.z,k[at+B+7]=0),M===!0&&(l.fromBufferAttribute(St,F),k[at+B+8]=l.x,k[at+B+9]=l.y,k[at+B+10]=l.z,k[at+B+11]=St.itemSize===4?l.w:1)}}_={count:x,texture:T,size:new ke(z,H)},s.set(p,_),p.addEventListener("dispose",ht)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function t2(r,t,i,s,l){let c=new WeakMap;function f(d){const g=l.render.frame,x=d.geometry,_=t.get(d,x);if(c.get(_)!==g&&(t.update(_),c.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return _}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const e2={[ax]:"LINEAR_TONE_MAPPING",[sx]:"REINHARD_TONE_MAPPING",[rx]:"CINEON_TONE_MAPPING",[_m]:"ACES_FILMIC_TONE_MAPPING",[lx]:"AGX_TONE_MAPPING",[cx]:"NEUTRAL_TONE_MAPPING",[ox]:"CUSTOM_TONE_MAPPING"};function n2(r,t,i,s,l){const c=new ns(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ns(t,i,{type:Ns,depthBuffer:!1,stencilBuffer:!1}),p=new li;p.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const m=new Vy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new qi(p,m),g=new Dx(-1,1,1,-1,0,1);let x=null,_=null,y=!1,b,C=null,M=[],v=!1;this.setSize=function(D,I){c.setSize(D,I),f.setSize(D,I);for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(D,I)}},this.setEffects=function(D){M=D,v=M.length>0&&M[0].isRenderPass===!0;const I=c.width,N=c.height;for(let z=0;z<M.length;z++){const H=M[z];H.setSize&&H.setSize(I,N)}},this.begin=function(D,I){if(y||D.toneMapping===es&&M.length===0)return!1;if(C=I,I!==null){const N=I.width,z=I.height;(c.width!==N||c.height!==z)&&this.setSize(N,z)}return v===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=es,!0},this.hasRenderPass=function(){return v},this.end=function(D,I){D.toneMapping=b,y=!0;let N=c,z=f;for(let H=0;H<M.length;H++){const k=M[H];if(k.enabled!==!1&&(k.render(D,z,N,I),k.needsSwap!==!1)){const T=N;N=z,z=T}}if(x!==D.outputColorSpace||_!==D.toneMapping){x=D.outputColorSpace,_=D.toneMapping,m.defines={},pn.getTransfer(x)===wn&&(m.defines.SRGB_TRANSFER="");const H=e2[_];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(C),D.render(d,g),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const Nx=new ai,hm=new Dc(1,1),Px=new Mx,Ox=new gy,Ix=new Tx,Iv=[],Fv=[],Bv=new Float32Array(16),zv=new Float32Array(9),Hv=new Float32Array(4);function dl(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Iv[l];if(c===void 0&&(c=new Float32Array(l),Iv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function hi(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function di(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Ff(r,t){let i=Fv[t];i===void 0&&(i=new Int32Array(t),Fv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function i2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function a2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hi(i,t))return;r.uniform2fv(this.addr,t),di(i,t)}}function s2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hi(i,t))return;r.uniform3fv(this.addr,t),di(i,t)}}function r2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hi(i,t))return;r.uniform4fv(this.addr,t),di(i,t)}}function o2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hi(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),di(i,t)}else{if(hi(i,s))return;Hv.set(s),r.uniformMatrix2fv(this.addr,!1,Hv),di(i,s)}}function l2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hi(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),di(i,t)}else{if(hi(i,s))return;zv.set(s),r.uniformMatrix3fv(this.addr,!1,zv),di(i,s)}}function c2(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hi(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),di(i,t)}else{if(hi(i,s))return;Bv.set(s),r.uniformMatrix4fv(this.addr,!1,Bv),di(i,s)}}function u2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function f2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hi(i,t))return;r.uniform2iv(this.addr,t),di(i,t)}}function h2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hi(i,t))return;r.uniform3iv(this.addr,t),di(i,t)}}function d2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hi(i,t))return;r.uniform4iv(this.addr,t),di(i,t)}}function p2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function m2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hi(i,t))return;r.uniform2uiv(this.addr,t),di(i,t)}}function g2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hi(i,t))return;r.uniform3uiv(this.addr,t),di(i,t)}}function _2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hi(i,t))return;r.uniform4uiv(this.addr,t),di(i,t)}}function v2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(hm.compareFunction=i.isReversedDepthBuffer()?Tm:Em,c=hm):c=Nx,i.setTexture2D(t||c,l)}function x2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ox,l)}function M2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ix,l)}function S2(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Px,l)}function y2(r){switch(r){case 5126:return i2;case 35664:return a2;case 35665:return s2;case 35666:return r2;case 35674:return o2;case 35675:return l2;case 35676:return c2;case 5124:case 35670:return u2;case 35667:case 35671:return f2;case 35668:case 35672:return h2;case 35669:case 35673:return d2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return S2}}function b2(r,t){r.uniform1fv(this.addr,t)}function E2(r,t){const i=dl(t,this.size,2);r.uniform2fv(this.addr,i)}function T2(r,t){const i=dl(t,this.size,3);r.uniform3fv(this.addr,i)}function A2(r,t){const i=dl(t,this.size,4);r.uniform4fv(this.addr,i)}function R2(r,t){const i=dl(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function w2(r,t){const i=dl(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function C2(r,t){const i=dl(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function D2(r,t){r.uniform1iv(this.addr,t)}function U2(r,t){r.uniform2iv(this.addr,t)}function L2(r,t){r.uniform3iv(this.addr,t)}function N2(r,t){r.uniform4iv(this.addr,t)}function P2(r,t){r.uniform1uiv(this.addr,t)}function O2(r,t){r.uniform2uiv(this.addr,t)}function I2(r,t){r.uniform3uiv(this.addr,t)}function F2(r,t){r.uniform4uiv(this.addr,t)}function B2(r,t,i){const s=this.cache,l=t.length,c=Ff(i,l);hi(s,c)||(r.uniform1iv(this.addr,c),di(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=hm:f=Nx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function z2(r,t,i){const s=this.cache,l=t.length,c=Ff(i,l);hi(s,c)||(r.uniform1iv(this.addr,c),di(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Ox,c[f])}function H2(r,t,i){const s=this.cache,l=t.length,c=Ff(i,l);hi(s,c)||(r.uniform1iv(this.addr,c),di(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ix,c[f])}function G2(r,t,i){const s=this.cache,l=t.length,c=Ff(i,l);hi(s,c)||(r.uniform1iv(this.addr,c),di(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Px,c[f])}function V2(r){switch(r){case 5126:return b2;case 35664:return E2;case 35665:return T2;case 35666:return A2;case 35674:return R2;case 35675:return w2;case 35676:return C2;case 5124:case 35670:return D2;case 35667:case 35671:return U2;case 35668:case 35672:return L2;case 35669:case 35673:return N2;case 5125:return P2;case 36294:return O2;case 36295:return I2;case 36296:return F2;case 35678:case 36198:case 36298:case 36306:case 35682:return B2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return G2}}class k2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=y2(i.type)}}class X2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=V2(i.type)}}class W2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const gp=/(\w+)(\])?(\[|\.)?/g;function Gv(r,t){r.seq.push(t),r.map[t.id]=t}function q2(r,t,i){const s=r.name,l=s.length;for(gp.lastIndex=0;;){const c=gp.exec(s),f=gp.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Gv(i,d===void 0?new k2(p,r,t):new X2(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new W2(p),Gv(i,x)),i=x}}}class yf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);q2(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Vv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const Y2=37297;let j2=0;function Z2(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const kv=new Ge;function K2(r){pn._getMatrix(kv,pn.workingColorSpace,r);const t=`mat3( ${kv.elements.map(i=>i.toFixed(4))} )`;switch(pn.getTransfer(r)){case Ef:return[t,"LinearTransferOETF"];case wn:return[t,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Xv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Z2(r.getShaderSource(t),p)}else return c}function Q2(r,t){const i=K2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const J2={[ax]:"Linear",[sx]:"Reinhard",[rx]:"Cineon",[_m]:"ACESFilmic",[lx]:"AgX",[cx]:"Neutral",[ox]:"Custom"};function $2(r,t){const i=J2[t];return i===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const df=new K;function tT(){pn.getLuminanceCoefficients(df);const r=df.x.toFixed(4),t=df.y.toFixed(4),i=df.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mc).join(`
`)}function nT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function iT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function Mc(r){return r!==""}function Wv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aT=/^[ \t]*#include +<([\w\d./]+)>/gm;function dm(r){return r.replace(aT,rT)}const sT=new Map;function rT(r,t){let i=Ve[t];if(i===void 0){const s=sT.get(t);if(s!==void 0)i=Ve[s],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return dm(i)}const oT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yv(r){return r.replace(oT,lT)}function lT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function jv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const cT={[gf]:"SHADOWMAP_TYPE_PCF",[xc]:"SHADOWMAP_TYPE_VSM"};function uT(r){return cT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fT={[to]:"ENVMAP_TYPE_CUBE",[ol]:"ENVMAP_TYPE_CUBE",[Nf]:"ENVMAP_TYPE_CUBE_UV"};function hT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":fT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const dT={[ol]:"ENVMAP_MODE_REFRACTION"};function pT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":dT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mT={[ix]:"ENVMAP_BLENDING_MULTIPLY",[NS]:"ENVMAP_BLENDING_MIX",[PS]:"ENVMAP_BLENDING_ADD"};function gT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":mT[r.combine]||"ENVMAP_BLENDING_NONE"}function _T(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function vT(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=uT(i),d=hT(i),g=pT(i),x=gT(i),_=_T(i),y=eT(i),b=nT(c),C=l.createProgram();let M,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Mc).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Mc).join(`
`),v.length>0&&(v+=`
`)):(M=[jv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mc).join(`
`),v=[jv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==es?"#define TONE_MAPPING":"",i.toneMapping!==es?Ve.tonemapping_pars_fragment:"",i.toneMapping!==es?$2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Q2("linearToOutputTexel",i.outputColorSpace),tT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Mc).join(`
`)),f=dm(f),f=Wv(f,i),f=qv(f,i),p=dm(p),p=Wv(p,i),p=qv(p,i),f=Yv(f),p=Yv(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=D+M+f,N=D+v+p,z=Vv(l,l.VERTEX_SHADER,I),H=Vv(l,l.FRAGMENT_SHADER,N);l.attachShader(C,z),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(V){if(r.debug.checkShaderErrors){const st=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(z)||"",St=l.getShaderInfoLog(H)||"",at=st.trim(),F=lt.trim(),B=St.trim();let dt=!0,Et=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(dt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,z,H);else{const U=Xv(l,z,"vertex"),$=Xv(l,H,"fragment");un("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+at+`
`+U+`
`+$)}else at!==""?Fe("WebGLProgram: Program Info Log:",at):(F===""||B==="")&&(Et=!1);Et&&(V.diagnostics={runnable:dt,programLog:at,vertexShader:{log:F,prefix:M},fragmentShader:{log:B,prefix:v}})}l.deleteShader(z),l.deleteShader(H),T=new yf(l,C),L=iT(l,C)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(C,Y2)),ht},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=j2++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=H,this}let xT=0;class MT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new ST(t),i.set(t,s)),s}}class ST{constructor(t){this.id=xT++,this.code=t,this.usedTimes=0}}function yT(r,t,i,s,l,c){const f=new wm,p=new MT,m=new Set,d=[],g=new Map,x=s.logarithmicDepthBuffer;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,L,ht,V,st){const lt=V.fog,St=st.geometry,at=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||at,F),dt=B&&B.mapping===Nf?B.image.height:null,Et=y[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&Fe("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const U=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,$=U!==void 0?U.length:0;let ot=0;St.morphAttributes.position!==void 0&&(ot=1),St.morphAttributes.normal!==void 0&&(ot=2),St.morphAttributes.color!==void 0&&(ot=3);let vt,Zt,pe,nt;if(Et){const nn=Ja[Et];vt=nn.vertexShader,Zt=nn.fragmentShader}else vt=T.vertexShader,Zt=T.fragmentShader,p.update(T),pe=p.getVertexShaderID(T),nt=p.getFragmentShaderID(T);const Pt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Re=st.isInstancedMesh===!0,ye=st.isBatchedMesh===!0,be=!!T.map,Bn=!!T.matcap,ze=!!B,tn=!!T.aoMap,en=!!T.lightMap,ge=!!T.bumpMap,sn=!!T.normalMap,W=!!T.displacementMap,zn=!!T.emissiveMap,rn=!!T.metalnessMap,on=!!T.roughnessMap,fe=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Q=T.iridescence>0,Tt=T.sheen>0,At=T.transmission>0,xt=fe&&!!T.anisotropyMap,Kt=O&&!!T.clearcoatMap,qt=O&&!!T.clearcoatNormalMap,xe=O&&!!T.clearcoatRoughnessMap,Ee=Q&&!!T.iridescenceMap,It=Q&&!!T.iridescenceThicknessMap,Vt=Tt&&!!T.sheenColorMap,ae=Tt&&!!T.sheenRoughnessMap,le=!!T.specularMap,Jt=!!T.specularColorMap,Le=!!T.specularIntensityMap,j=At&&!!T.transmissionMap,Wt=At&&!!T.thicknessMap,kt=!!T.gradientMap,ne=!!T.alphaMap,Bt=T.alphaTest>0,yt=!!T.alphaHash,oe=!!T.extensions;let ve=es;T.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(ve=r.toneMapping);const ln={shaderID:Et,shaderType:T.type,shaderName:T.name,vertexShader:vt,fragmentShader:Zt,defines:T.defines,customVertexShaderID:pe,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:ye,batchingColor:ye&&st._colorsTexture!==null,instancing:Re,instancingColor:Re&&st.instanceColor!==null,instancingMorph:Re&&st.morphTexture!==null,outputColorSpace:Pt===null?r.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:cl,alphaToCoverage:!!T.alphaToCoverage,map:be,matcap:Bn,envMap:ze,envMapMode:ze&&B.mapping,envMapCubeUVHeight:dt,aoMap:tn,lightMap:en,bumpMap:ge,normalMap:sn,displacementMap:W,emissiveMap:zn,normalMapObjectSpace:sn&&T.normalMapType===FS,normalMapTangentSpace:sn&&T.normalMapType===vx,metalnessMap:rn,roughnessMap:on,anisotropy:fe,anisotropyMap:xt,clearcoat:O,clearcoatMap:Kt,clearcoatNormalMap:qt,clearcoatRoughnessMap:xe,dispersion:E,iridescence:Q,iridescenceMap:Ee,iridescenceThicknessMap:It,sheen:Tt,sheenColorMap:Vt,sheenRoughnessMap:ae,specularMap:le,specularColorMap:Jt,specularIntensityMap:Le,transmission:At,transmissionMap:j,thicknessMap:Wt,gradientMap:kt,opaque:T.transparent===!1&&T.blending===$r&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:Bt,alphaHash:yt,combine:T.combine,mapUv:be&&b(T.map.channel),aoMapUv:tn&&b(T.aoMap.channel),lightMapUv:en&&b(T.lightMap.channel),bumpMapUv:ge&&b(T.bumpMap.channel),normalMapUv:sn&&b(T.normalMap.channel),displacementMapUv:W&&b(T.displacementMap.channel),emissiveMapUv:zn&&b(T.emissiveMap.channel),metalnessMapUv:rn&&b(T.metalnessMap.channel),roughnessMapUv:on&&b(T.roughnessMap.channel),anisotropyMapUv:xt&&b(T.anisotropyMap.channel),clearcoatMapUv:Kt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:qt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:It&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:ae&&b(T.sheenRoughnessMap.channel),specularMapUv:le&&b(T.specularMap.channel),specularColorMapUv:Jt&&b(T.specularColorMap.channel),specularIntensityMapUv:Le&&b(T.specularIntensityMap.channel),transmissionMapUv:j&&b(T.transmissionMap.channel),thicknessMapUv:Wt&&b(T.thicknessMap.channel),alphaMapUv:ne&&b(T.alphaMap.channel),vertexTangents:!!St.attributes.tangent&&(sn||fe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!St.attributes.uv&&(be||ne),fog:!!lt,useFog:T.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||St.attributes.normal===void 0&&sn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_t,skinning:st.isSkinnedMesh===!0,morphTargets:St.morphAttributes.position!==void 0,morphNormals:St.morphAttributes.normal!==void 0,morphColors:St.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ot,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ht.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:be&&T.map.isVideoTexture===!0&&pn.getTransfer(T.map.colorSpace)===wn,decodeVideoTextureEmissive:zn&&T.emissiveMap.isVideoTexture===!0&&pn.getTransfer(T.emissiveMap.colorSpace)===wn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fa,flipSided:T.side===Ji,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:oe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&T.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ln.vertexUv1s=m.has(1),ln.vertexUv2s=m.has(2),ln.vertexUv3s=m.has(3),m.clear(),ln}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)L.push(ht),L.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(v(L,T),D(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function v(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function D(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function I(T){const L=y[T.type];let ht;if(L){const V=Ja[L];ht=zy.clone(V.uniforms)}else ht=T.uniforms;return ht}function N(T,L){let ht=g.get(L);return ht!==void 0?++ht.usedTimes:(ht=new vT(r,L,T,l),d.push(ht),g.set(L,ht)),ht}function z(T){if(--T.usedTimes===0){const L=d.indexOf(T);d[L]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function H(T){p.remove(T)}function k(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:I,acquireProgram:N,releaseProgram:z,releaseShaderCache:H,programs:d,dispose:k}}function bT(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function ET(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Zv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Kv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function p(_,y,b,C,M,v){let D=r[t];return D===void 0?(D={id:_.id,object:_,geometry:y,material:b,materialVariant:f(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:v},r[t]=D):(D.id=_.id,D.object=_,D.geometry=y,D.material=b,D.materialVariant=f(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=M,D.group=v),t++,D}function m(_,y,b,C,M,v){const D=p(_,y,b,C,M,v);b.transmission>0?s.push(D):b.transparent===!0?l.push(D):i.push(D)}function d(_,y,b,C,M,v){const D=p(_,y,b,C,M,v);b.transmission>0?s.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function g(_,y){i.length>1&&i.sort(_||ET),s.length>1&&s.sort(y||Zv),l.length>1&&l.sort(y||Zv)}function x(){for(let _=t,y=r.length;_<y;_++){const b=r[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:g}}function TT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Kv,r.set(s,[f])):l>=c.length?(f=new Kv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function AT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new $e};break;case"SpotLight":i={position:new K,direction:new K,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new $e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":i={color:new $e,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function RT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let wT=0;function CT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function DT(r){const t=new AT,i=RT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new K);const l=new K,c=new Fn,f=new Fn;function p(d){let g=0,x=0,_=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,b=0,C=0,M=0,v=0,D=0,I=0,N=0,z=0,H=0,k=0;d.sort(CT);for(let L=0,ht=d.length;L<ht;L++){const V=d[L],st=V.color,lt=V.intensity,St=V.distance;let at=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ll?at=V.shadow.map.texture:at=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=st.r*lt,x+=st.g*lt,_+=st.b*lt;else if(V.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(V.sh.coefficients[F],lt);k++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,dt=i.get(V);dt.shadowIntensity=B.intensity,dt.shadowBias=B.bias,dt.shadowNormalBias=B.normalBias,dt.shadowRadius=B.radius,dt.shadowMapSize=B.mapSize,s.directionalShadow[y]=dt,s.directionalShadowMap[y]=at,s.directionalShadowMatrix[y]=V.shadow.matrix,D++}s.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(st).multiplyScalar(lt),F.distance=St,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,s.spot[C]=F;const B=V.shadow;if(V.map&&(s.spotLightMap[z]=V.map,z++,B.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[C]=B.matrix,V.castShadow){const dt=i.get(V);dt.shadowIntensity=B.intensity,dt.shadowBias=B.bias,dt.shadowNormalBias=B.normalBias,dt.shadowRadius=B.radius,dt.shadowMapSize=B.mapSize,s.spotShadow[C]=dt,s.spotShadowMap[C]=at,N++}C++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(st).multiplyScalar(lt),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const B=V.shadow,dt=i.get(V);dt.shadowIntensity=B.intensity,dt.shadowBias=B.bias,dt.shadowNormalBias=B.normalBias,dt.shadowRadius=B.radius,dt.shadowMapSize=B.mapSize,dt.shadowCameraNear=B.camera.near,dt.shadowCameraFar=B.camera.far,s.pointShadow[b]=dt,s.pointShadowMap[b]=at,s.pointShadowMatrix[b]=V.shadow.matrix,I++}s.point[b]=F,b++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(lt),F.groundColor.copy(V.groundColor).multiplyScalar(lt),s.hemi[v]=F,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ee.LTC_FLOAT_1,s.rectAreaLTC2=ee.LTC_FLOAT_2):(s.rectAreaLTC1=ee.LTC_HALF_1,s.rectAreaLTC2=ee.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==D||T.numPointShadows!==I||T.numSpotShadows!==N||T.numSpotMaps!==z||T.numLightProbes!==k)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=N+z-H,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=k,T.directionalLength=y,T.pointLength=b,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=D,T.numPointShadows=I,T.numSpotShadows=N,T.numSpotMaps=z,T.numLightProbes=k,s.version=wT++)}function m(d,g){let x=0,_=0,y=0,b=0,C=0;const M=g.matrixWorldInverse;for(let v=0,D=d.length;v<D;v++){const I=d[v];if(I.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),x++}else if(I.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(I.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(M),f.identity(),c.copy(I.matrixWorld),c.premultiply(M),f.extractRotation(c),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(I.isPointLight){const N=s.point[_];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(M),_++}else if(I.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:s}}function Qv(r){const t=new DT(r),i=[],s=[];function l(g){d.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function UT(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Qv(r),t.set(l,[p])):c>=f.length?(p=new Qv(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const LT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NT=`uniform sampler2D shadow_pass;
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
}`,PT=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],OT=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Jv=new Fn,_c=new K,_p=new K;function IT(r,t,i){let s=new Cm;const l=new ke,c=new ke,f=new ti,p=new ky,m=new Xy,d={},g=i.maxTextureSize,x={[xr]:Ji,[Ji]:xr,[Fa]:Fa},_=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:LT,fragmentShader:NT}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new li;b.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new qi(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let v=this.type;this.render=function(H,k,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;this.type===pS&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gf);const L=r.getRenderTarget(),ht=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),st=r.state;st.setBlending(Ds),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const lt=v!==this.type;lt&&k.traverse(function(St){St.material&&(Array.isArray(St.material)?St.material.forEach(at=>at.needsUpdate=!0):St.material.needsUpdate=!0)});for(let St=0,at=H.length;St<at;St++){const F=H[St],B=F.shadow;if(B===void 0){Fe("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const dt=B.getFrameExtents();l.multiply(dt),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/dt.x),l.x=c.x*dt.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/dt.y),l.y=c.y*dt.y,B.mapSize.y=c.y));const Et=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Et,B.map===null||lt===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===xc){if(F.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ns(l.x,l.y,{format:ll,type:Ns,minFilter:Fi,magFilter:Fi,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new Dc(l.x,l.y,$a),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=Ps,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ri,B.map.depthTexture.magFilter=Ri}else F.isPointLight?(B.map=new Lx(l.x),B.map.depthTexture=new Fy(l.x,is)):(B.map=new ns(l.x,l.y),B.map.depthTexture=new Dc(l.x,l.y,is)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=Ps,this.type===gf?(B.map.depthTexture.compareFunction=Et?Tm:Em,B.map.depthTexture.minFilter=Fi,B.map.depthTexture.magFilter=Fi):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ri,B.map.depthTexture.magFilter=Ri);B.camera.updateProjectionMatrix()}const U=B.map.isWebGLCubeRenderTarget?6:1;for(let $=0;$<U;$++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,$),r.clear();else{$===0&&(r.setRenderTarget(B.map),r.clear());const ot=B.getViewport($);f.set(c.x*ot.x,c.y*ot.y,c.x*ot.z,c.y*ot.w),st.viewport(f)}if(F.isPointLight){const ot=B.camera,vt=B.matrix,Zt=F.distance||ot.far;Zt!==ot.far&&(ot.far=Zt,ot.updateProjectionMatrix()),_c.setFromMatrixPosition(F.matrixWorld),ot.position.copy(_c),_p.copy(ot.position),_p.add(PT[$]),ot.up.copy(OT[$]),ot.lookAt(_p),ot.updateMatrixWorld(),vt.makeTranslation(-_c.x,-_c.y,-_c.z),Jv.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Jv,ot.coordinateSystem,ot.reversedDepth)}else B.updateMatrices(F);s=B.getFrustum(),N(k,T,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===xc&&D(B,T),B.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(L,ht,V)};function D(H,k){const T=t.update(C);_.defines.VSM_SAMPLES!==H.blurSamples&&(_.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new ns(l.x,l.y,{format:ll,type:Ns})),_.uniforms.shadow_pass.value=H.map.depthTexture,_.uniforms.resolution.value=H.mapSize,_.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(k,null,T,_,C,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(k,null,T,y,C,null)}function I(H,k,T,L){let ht=null;const V=T.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)ht=V;else if(ht=T.isPointLight===!0?m:p,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const st=ht.uuid,lt=k.uuid;let St=d[st];St===void 0&&(St={},d[st]=St);let at=St[lt];at===void 0&&(at=ht.clone(),St[lt]=at,k.addEventListener("dispose",z)),ht=at}if(ht.visible=k.visible,ht.wireframe=k.wireframe,L===xc?ht.side=k.shadowSide!==null?k.shadowSide:k.side:ht.side=k.shadowSide!==null?k.shadowSide:x[k.side],ht.alphaMap=k.alphaMap,ht.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,ht.map=k.map,ht.clipShadows=k.clipShadows,ht.clippingPlanes=k.clippingPlanes,ht.clipIntersection=k.clipIntersection,ht.displacementMap=k.displacementMap,ht.displacementScale=k.displacementScale,ht.displacementBias=k.displacementBias,ht.wireframeLinewidth=k.wireframeLinewidth,ht.linewidth=k.linewidth,T.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const st=r.properties.get(ht);st.light=T}return ht}function N(H,k,T,L,ht){if(H.visible===!1)return;if(H.layers.test(k.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&ht===xc)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,H.matrixWorld);const lt=t.update(H),St=H.material;if(Array.isArray(St)){const at=lt.groups;for(let F=0,B=at.length;F<B;F++){const dt=at[F],Et=St[dt.materialIndex];if(Et&&Et.visible){const U=I(H,Et,L,ht);H.onBeforeShadow(r,H,k,T,lt,U,dt),r.renderBufferDirect(T,null,lt,U,H,dt),H.onAfterShadow(r,H,k,T,lt,U,dt)}}}else if(St.visible){const at=I(H,St,L,ht);H.onBeforeShadow(r,H,k,T,lt,at,null),r.renderBufferDirect(T,null,lt,at,H,null),H.onAfterShadow(r,H,k,T,lt,at,null)}}const st=H.children;for(let lt=0,St=st.length;lt<St;lt++)N(st[lt],k,T,L,ht)}function z(H){H.target.removeEventListener("dispose",z);for(const T in d){const L=d[T],ht=H.target.uuid;ht in L&&(L[ht].dispose(),delete L[ht])}}}function FT(r,t){function i(){let j=!1;const Wt=new ti;let kt=null;const ne=new ti(0,0,0,0);return{setMask:function(Bt){kt!==Bt&&!j&&(r.colorMask(Bt,Bt,Bt,Bt),kt=Bt)},setLocked:function(Bt){j=Bt},setClear:function(Bt,yt,oe,ve,ln){ln===!0&&(Bt*=ve,yt*=ve,oe*=ve),Wt.set(Bt,yt,oe,ve),ne.equals(Wt)===!1&&(r.clearColor(Bt,yt,oe,ve),ne.copy(Wt))},reset:function(){j=!1,kt=null,ne.set(-1,0,0,0)}}}function s(){let j=!1,Wt=!1,kt=null,ne=null,Bt=null;return{setReversed:function(yt){if(Wt!==yt){const oe=t.get("EXT_clip_control");yt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Wt=yt;const ve=Bt;Bt=null,this.setClear(ve)}},getReversed:function(){return Wt},setTest:function(yt){yt?Pt(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(yt){kt!==yt&&!j&&(r.depthMask(yt),kt=yt)},setFunc:function(yt){if(Wt&&(yt=YS[yt]),ne!==yt){switch(yt){case Sp:r.depthFunc(r.NEVER);break;case yp:r.depthFunc(r.ALWAYS);break;case bp:r.depthFunc(r.LESS);break;case rl:r.depthFunc(r.LEQUAL);break;case Ep:r.depthFunc(r.EQUAL);break;case Tp:r.depthFunc(r.GEQUAL);break;case Ap:r.depthFunc(r.GREATER);break;case Rp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=yt}},setLocked:function(yt){j=yt},setClear:function(yt){Bt!==yt&&(Bt=yt,Wt&&(yt=1-yt),r.clearDepth(yt))},reset:function(){j=!1,kt=null,ne=null,Bt=null,Wt=!1}}}function l(){let j=!1,Wt=null,kt=null,ne=null,Bt=null,yt=null,oe=null,ve=null,ln=null;return{setTest:function(nn){j||(nn?Pt(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(nn){Wt!==nn&&!j&&(r.stencilMask(nn),Wt=nn)},setFunc:function(nn,wi,Wn){(kt!==nn||ne!==wi||Bt!==Wn)&&(r.stencilFunc(nn,wi,Wn),kt=nn,ne=wi,Bt=Wn)},setOp:function(nn,wi,Wn){(yt!==nn||oe!==wi||ve!==Wn)&&(r.stencilOp(nn,wi,Wn),yt=nn,oe=wi,ve=Wn)},setLocked:function(nn){j=nn},setClear:function(nn){ln!==nn&&(r.clearStencil(nn),ln=nn)},reset:function(){j=!1,Wt=null,kt=null,ne=null,Bt=null,yt=null,oe=null,ve=null,ln=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let g={},x={},_=new WeakMap,y=[],b=null,C=!1,M=null,v=null,D=null,I=null,N=null,z=null,H=null,k=new $e(0,0,0),T=0,L=!1,ht=null,V=null,st=null,lt=null,St=null;const at=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const dt=r.getParameter(r.VERSION);dt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(dt)[1]),F=B>=1):dt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),F=B>=2);let Et=null,U={};const $=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),vt=new ti().fromArray($),Zt=new ti().fromArray(ot);function pe(j,Wt,kt,ne){const Bt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(j,yt),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<kt;oe++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Wt,0,r.RGBA,1,1,ne,0,r.RGBA,r.UNSIGNED_BYTE,Bt):r.texImage2D(Wt+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Bt);return yt}const nt={};nt[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Pt(r.DEPTH_TEST),f.setFunc(rl),ge(!1),sn(q_),Pt(r.CULL_FACE),tn(Ds);function Pt(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function _t(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function Re(j,Wt){return x[j]!==Wt?(r.bindFramebuffer(j,Wt),x[j]=Wt,j===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Wt),j===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Wt),!0):!1}function ye(j,Wt){let kt=y,ne=!1;if(j){kt=_.get(Wt),kt===void 0&&(kt=[],_.set(Wt,kt));const Bt=j.textures;if(kt.length!==Bt.length||kt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,oe=Bt.length;yt<oe;yt++)kt[yt]=r.COLOR_ATTACHMENT0+yt;kt.length=Bt.length,ne=!0}}else kt[0]!==r.BACK&&(kt[0]=r.BACK,ne=!0);ne&&r.drawBuffers(kt)}function be(j){return b!==j?(r.useProgram(j),b=j,!0):!1}const Bn={[Zr]:r.FUNC_ADD,[gS]:r.FUNC_SUBTRACT,[_S]:r.FUNC_REVERSE_SUBTRACT};Bn[vS]=r.MIN,Bn[xS]=r.MAX;const ze={[MS]:r.ZERO,[SS]:r.ONE,[yS]:r.SRC_COLOR,[xp]:r.SRC_ALPHA,[wS]:r.SRC_ALPHA_SATURATE,[AS]:r.DST_COLOR,[ES]:r.DST_ALPHA,[bS]:r.ONE_MINUS_SRC_COLOR,[Mp]:r.ONE_MINUS_SRC_ALPHA,[RS]:r.ONE_MINUS_DST_COLOR,[TS]:r.ONE_MINUS_DST_ALPHA,[CS]:r.CONSTANT_COLOR,[DS]:r.ONE_MINUS_CONSTANT_COLOR,[US]:r.CONSTANT_ALPHA,[LS]:r.ONE_MINUS_CONSTANT_ALPHA};function tn(j,Wt,kt,ne,Bt,yt,oe,ve,ln,nn){if(j===Ds){C===!0&&(_t(r.BLEND),C=!1);return}if(C===!1&&(Pt(r.BLEND),C=!0),j!==mS){if(j!==M||nn!==L){if((v!==Zr||N!==Zr)&&(r.blendEquation(r.FUNC_ADD),v=Zr,N=Zr),nn)switch(j){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yc:r.blendFunc(r.ONE,r.ONE);break;case Y_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case j_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:un("WebGLState: Invalid blending: ",j);break}else switch(j){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Y_:un("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j_:un("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:un("WebGLState: Invalid blending: ",j);break}D=null,I=null,z=null,H=null,k.set(0,0,0),T=0,M=j,L=nn}return}Bt=Bt||Wt,yt=yt||kt,oe=oe||ne,(Wt!==v||Bt!==N)&&(r.blendEquationSeparate(Bn[Wt],Bn[Bt]),v=Wt,N=Bt),(kt!==D||ne!==I||yt!==z||oe!==H)&&(r.blendFuncSeparate(ze[kt],ze[ne],ze[yt],ze[oe]),D=kt,I=ne,z=yt,H=oe),(ve.equals(k)===!1||ln!==T)&&(r.blendColor(ve.r,ve.g,ve.b,ln),k.copy(ve),T=ln),M=j,L=!1}function en(j,Wt){j.side===Fa?_t(r.CULL_FACE):Pt(r.CULL_FACE);let kt=j.side===Ji;Wt&&(kt=!kt),ge(kt),j.blending===$r&&j.transparent===!1?tn(Ds):tn(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const ne=j.stencilWrite;p.setTest(ne),ne&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),zn(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Pt(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(j){ht!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),ht=j)}function sn(j){j!==hS?(Pt(r.CULL_FACE),j!==V&&(j===q_?r.cullFace(r.BACK):j===dS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),V=j}function W(j){j!==st&&(F&&r.lineWidth(j),st=j)}function zn(j,Wt,kt){j?(Pt(r.POLYGON_OFFSET_FILL),(lt!==Wt||St!==kt)&&(lt=Wt,St=kt,f.getReversed()&&(Wt=-Wt),r.polygonOffset(Wt,kt))):_t(r.POLYGON_OFFSET_FILL)}function rn(j){j?Pt(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function on(j){j===void 0&&(j=r.TEXTURE0+at-1),Et!==j&&(r.activeTexture(j),Et=j)}function fe(j,Wt,kt){kt===void 0&&(Et===null?kt=r.TEXTURE0+at-1:kt=Et);let ne=U[kt];ne===void 0&&(ne={type:void 0,texture:void 0},U[kt]=ne),(ne.type!==j||ne.texture!==Wt)&&(Et!==kt&&(r.activeTexture(kt),Et=kt),r.bindTexture(j,Wt||nt[j]),ne.type=j,ne.texture=Wt)}function O(){const j=U[Et];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(j){un("WebGLState:",j)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(j){un("WebGLState:",j)}}function Tt(){try{r.texSubImage2D(...arguments)}catch(j){un("WebGLState:",j)}}function At(){try{r.texSubImage3D(...arguments)}catch(j){un("WebGLState:",j)}}function xt(){try{r.compressedTexSubImage2D(...arguments)}catch(j){un("WebGLState:",j)}}function Kt(){try{r.compressedTexSubImage3D(...arguments)}catch(j){un("WebGLState:",j)}}function qt(){try{r.texStorage2D(...arguments)}catch(j){un("WebGLState:",j)}}function xe(){try{r.texStorage3D(...arguments)}catch(j){un("WebGLState:",j)}}function Ee(){try{r.texImage2D(...arguments)}catch(j){un("WebGLState:",j)}}function It(){try{r.texImage3D(...arguments)}catch(j){un("WebGLState:",j)}}function Vt(j){vt.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),vt.copy(j))}function ae(j){Zt.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Zt.copy(j))}function le(j,Wt){let kt=d.get(Wt);kt===void 0&&(kt=new WeakMap,d.set(Wt,kt));let ne=kt.get(j);ne===void 0&&(ne=r.getUniformBlockIndex(Wt,j.name),kt.set(j,ne))}function Jt(j,Wt){const ne=d.get(Wt).get(j);m.get(Wt)!==ne&&(r.uniformBlockBinding(Wt,ne,j.__bindingPointIndex),m.set(Wt,ne))}function Le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Et=null,U={},x={},_=new WeakMap,y=[],b=null,C=!1,M=null,v=null,D=null,I=null,N=null,z=null,H=null,k=new $e(0,0,0),T=0,L=!1,ht=null,V=null,st=null,lt=null,St=null,vt.set(0,0,r.canvas.width,r.canvas.height),Zt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Pt,disable:_t,bindFramebuffer:Re,drawBuffers:ye,useProgram:be,setBlending:tn,setMaterial:en,setFlipSided:ge,setCullFace:sn,setLineWidth:W,setPolygonOffset:zn,setScissorTest:rn,activeTexture:on,bindTexture:fe,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:Ee,texImage3D:It,updateUBOMapping:le,uniformBlockBinding:Jt,texStorage2D:qt,texStorage3D:xe,texSubImage2D:Tt,texSubImage3D:At,compressedTexSubImage2D:xt,compressedTexSubImage3D:Kt,scissor:Vt,viewport:ae,reset:Le}}function BT(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ke,g=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return y?new OffscreenCanvas(O,E):wc("canvas")}function C(O,E,Q){let Tt=1;const At=fe(O);if((At.width>Q||At.height>Q)&&(Tt=Q/Math.max(At.width,At.height)),Tt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xt=Math.floor(Tt*At.width),Kt=Math.floor(Tt*At.height);x===void 0&&(x=b(xt,Kt));const qt=E?b(xt,Kt):x;return qt.width=xt,qt.height=Kt,qt.getContext("2d").drawImage(O,0,0,xt,Kt),Fe("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+xt+"x"+Kt+")."),qt}else return"data"in O&&Fe("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(O,E,Q,Tt,At=!1){if(O!==null){if(r[O]!==void 0)return r[O];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xt=E;if(E===r.RED&&(Q===r.FLOAT&&(xt=r.R32F),Q===r.HALF_FLOAT&&(xt=r.R16F),Q===r.UNSIGNED_BYTE&&(xt=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.R8UI),Q===r.UNSIGNED_SHORT&&(xt=r.R16UI),Q===r.UNSIGNED_INT&&(xt=r.R32UI),Q===r.BYTE&&(xt=r.R8I),Q===r.SHORT&&(xt=r.R16I),Q===r.INT&&(xt=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(xt=r.RG32F),Q===r.HALF_FLOAT&&(xt=r.RG16F),Q===r.UNSIGNED_BYTE&&(xt=r.RG8)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RG8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RG16UI),Q===r.UNSIGNED_INT&&(xt=r.RG32UI),Q===r.BYTE&&(xt=r.RG8I),Q===r.SHORT&&(xt=r.RG16I),Q===r.INT&&(xt=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RGB16UI),Q===r.UNSIGNED_INT&&(xt=r.RGB32UI),Q===r.BYTE&&(xt=r.RGB8I),Q===r.SHORT&&(xt=r.RGB16I),Q===r.INT&&(xt=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(xt=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(xt=r.RGBA16UI),Q===r.UNSIGNED_INT&&(xt=r.RGBA32UI),Q===r.BYTE&&(xt=r.RGBA8I),Q===r.SHORT&&(xt=r.RGBA16I),Q===r.INT&&(xt=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(xt=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(xt=r.R11F_G11F_B10F)),E===r.RGBA){const Kt=At?Ef:pn.getTransfer(Tt);Q===r.FLOAT&&(xt=r.RGBA32F),Q===r.HALF_FLOAT&&(xt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(xt=Kt===wn?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(xt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(xt=r.RGB5_A1)}return(xt===r.R16F||xt===r.R32F||xt===r.RG16F||xt===r.RG32F||xt===r.RGBA16F||xt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function N(O,E){let Q;return O?E===null||E===is||E===Ac?Q=r.DEPTH24_STENCIL8:E===$a?Q=r.DEPTH32F_STENCIL8:E===Tc&&(Q=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===is||E===Ac?Q=r.DEPTH_COMPONENT24:E===$a?Q=r.DEPTH_COMPONENT32F:E===Tc&&(Q=r.DEPTH_COMPONENT16),Q}function z(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ri&&O.minFilter!==Fi?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function H(O){const E=O.target;E.removeEventListener("dispose",H),T(E),E.isVideoTexture&&g.delete(E)}function k(O){const E=O.target;E.removeEventListener("dispose",k),ht(E)}function T(O){const E=s.get(O);if(E.__webglInit===void 0)return;const Q=O.source,Tt=_.get(Q);if(Tt){const At=Tt[E.__cacheKey];At.usedTimes--,At.usedTimes===0&&L(O),Object.keys(Tt).length===0&&_.delete(Q)}s.remove(O)}function L(O){const E=s.get(O);r.deleteTexture(E.__webglTexture);const Q=O.source,Tt=_.get(Q);delete Tt[E.__cacheKey],f.memory.textures--}function ht(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Tt=0;Tt<6;Tt++){if(Array.isArray(E.__webglFramebuffer[Tt]))for(let At=0;At<E.__webglFramebuffer[Tt].length;At++)r.deleteFramebuffer(E.__webglFramebuffer[Tt][At]);else r.deleteFramebuffer(E.__webglFramebuffer[Tt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let Tt=0;Tt<E.__webglFramebuffer.length;Tt++)r.deleteFramebuffer(E.__webglFramebuffer[Tt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Tt=0;Tt<E.__webglColorRenderbuffer.length;Tt++)E.__webglColorRenderbuffer[Tt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Tt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=O.textures;for(let Tt=0,At=Q.length;Tt<At;Tt++){const xt=s.get(Q[Tt]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),f.memory.textures--),s.remove(Q[Tt])}s.remove(O)}let V=0;function st(){V=0}function lt(){const O=V;return O>=l.maxTextures&&Fe("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function St(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function at(O,E){const Q=s.get(O);if(O.isVideoTexture&&rn(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){const Tt=O.image;if(Tt===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Tt.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Q,O,E);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function F(O,E){const Q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){nt(Q,O,E);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function B(O,E){const Q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){nt(Q,O,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function dt(O,E){const Q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Q.__version!==O.version){Pt(Q,O,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const Et={[wp]:r.REPEAT,[Cs]:r.CLAMP_TO_EDGE,[Cp]:r.MIRRORED_REPEAT},U={[Ri]:r.NEAREST,[OS]:r.NEAREST_MIPMAP_NEAREST,[Iu]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[zd]:r.LINEAR_MIPMAP_NEAREST,[Qr]:r.LINEAR_MIPMAP_LINEAR},$={[BS]:r.NEVER,[kS]:r.ALWAYS,[zS]:r.LESS,[Em]:r.LEQUAL,[HS]:r.EQUAL,[Tm]:r.GEQUAL,[GS]:r.GREATER,[VS]:r.NOTEQUAL};function ot(O,E){if(E.type===$a&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Fi||E.magFilter===zd||E.magFilter===Iu||E.magFilter===Qr||E.minFilter===Fi||E.minFilter===zd||E.minFilter===Iu||E.minFilter===Qr)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Et[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Et[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Et[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,U[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ri||E.minFilter!==Iu&&E.minFilter!==Qr||E.type===$a&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function vt(O,E){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",H));const Tt=E.source;let At=_.get(Tt);At===void 0&&(At={},_.set(Tt,At));const xt=St(E);if(xt!==O.__cacheKey){At[xt]===void 0&&(At[xt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),At[xt].usedTimes++;const Kt=At[O.__cacheKey];Kt!==void 0&&(At[O.__cacheKey].usedTimes--,Kt.usedTimes===0&&L(E)),O.__cacheKey=xt,O.__webglTexture=At[xt].texture}return Q}function Zt(O,E,Q){return Math.floor(Math.floor(O/Q)/E)}function pe(O,E,Q,Tt){const xt=O.updateRanges;if(xt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,Tt,E.data);else{xt.sort((It,Vt)=>It.start-Vt.start);let Kt=0;for(let It=1;It<xt.length;It++){const Vt=xt[Kt],ae=xt[It],le=Vt.start+Vt.count,Jt=Zt(ae.start,E.width,4),Le=Zt(Vt.start,E.width,4);ae.start<=le+1&&Jt===Le&&Zt(ae.start+ae.count-1,E.width,4)===Jt?Vt.count=Math.max(Vt.count,ae.start+ae.count-Vt.start):(++Kt,xt[Kt]=ae)}xt.length=Kt+1;const qt=r.getParameter(r.UNPACK_ROW_LENGTH),xe=r.getParameter(r.UNPACK_SKIP_PIXELS),Ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let It=0,Vt=xt.length;It<Vt;It++){const ae=xt[It],le=Math.floor(ae.start/4),Jt=Math.ceil(ae.count/4),Le=le%E.width,j=Math.floor(le/E.width),Wt=Jt,kt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Le),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,Le,j,Wt,kt,Q,Tt,E.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,qt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ee)}}function nt(O,E,Q){let Tt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Tt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Tt=r.TEXTURE_3D);const At=vt(O,E),xt=E.source;i.bindTexture(Tt,O.__webglTexture,r.TEXTURE0+Q);const Kt=s.get(xt);if(xt.version!==Kt.__version||At===!0){i.activeTexture(r.TEXTURE0+Q);const qt=pn.getPrimaries(pn.workingColorSpace),xe=E.colorSpace===gr?null:pn.getPrimaries(E.colorSpace),Ee=E.colorSpace===gr||qt===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let It=C(E.image,!1,l.maxTextureSize);It=on(E,It);const Vt=c.convert(E.format,E.colorSpace),ae=c.convert(E.type);let le=I(E.internalFormat,Vt,ae,E.colorSpace,E.isVideoTexture);ot(Tt,E);let Jt;const Le=E.mipmaps,j=E.isVideoTexture!==!0,Wt=Kt.__version===void 0||At===!0,kt=xt.dataReady,ne=z(E,It);if(E.isDepthTexture)le=N(E.format===Jr,E.type),Wt&&(j?i.texStorage2D(r.TEXTURE_2D,1,le,It.width,It.height):i.texImage2D(r.TEXTURE_2D,0,le,It.width,It.height,0,Vt,ae,null));else if(E.isDataTexture)if(Le.length>0){j&&Wt&&i.texStorage2D(r.TEXTURE_2D,ne,le,Le[0].width,Le[0].height);for(let Bt=0,yt=Le.length;Bt<yt;Bt++)Jt=Le[Bt],j?kt&&i.texSubImage2D(r.TEXTURE_2D,Bt,0,0,Jt.width,Jt.height,Vt,ae,Jt.data):i.texImage2D(r.TEXTURE_2D,Bt,le,Jt.width,Jt.height,0,Vt,ae,Jt.data);E.generateMipmaps=!1}else j?(Wt&&i.texStorage2D(r.TEXTURE_2D,ne,le,It.width,It.height),kt&&pe(E,It,Vt,ae)):i.texImage2D(r.TEXTURE_2D,0,le,It.width,It.height,0,Vt,ae,It.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&Wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ne,le,Le[0].width,Le[0].height,It.depth);for(let Bt=0,yt=Le.length;Bt<yt;Bt++)if(Jt=Le[Bt],E.format!==za)if(Vt!==null)if(j){if(kt)if(E.layerUpdates.size>0){const oe=Cv(Jt.width,Jt.height,E.format,E.type);for(const ve of E.layerUpdates){const ln=Jt.data.subarray(ve*oe/Jt.data.BYTES_PER_ELEMENT,(ve+1)*oe/Jt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Bt,0,0,ve,Jt.width,Jt.height,1,Vt,ln)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Bt,0,0,0,Jt.width,Jt.height,It.depth,Vt,Jt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Bt,le,Jt.width,Jt.height,It.depth,0,Jt.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?kt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Bt,0,0,0,Jt.width,Jt.height,It.depth,Vt,ae,Jt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Bt,le,Jt.width,Jt.height,It.depth,0,Vt,ae,Jt.data)}else{j&&Wt&&i.texStorage2D(r.TEXTURE_2D,ne,le,Le[0].width,Le[0].height);for(let Bt=0,yt=Le.length;Bt<yt;Bt++)Jt=Le[Bt],E.format!==za?Vt!==null?j?kt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Bt,0,0,Jt.width,Jt.height,Vt,Jt.data):i.compressedTexImage2D(r.TEXTURE_2D,Bt,le,Jt.width,Jt.height,0,Jt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?kt&&i.texSubImage2D(r.TEXTURE_2D,Bt,0,0,Jt.width,Jt.height,Vt,ae,Jt.data):i.texImage2D(r.TEXTURE_2D,Bt,le,Jt.width,Jt.height,0,Vt,ae,Jt.data)}else if(E.isDataArrayTexture)if(j){if(Wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ne,le,It.width,It.height,It.depth),kt)if(E.layerUpdates.size>0){const Bt=Cv(It.width,It.height,E.format,E.type);for(const yt of E.layerUpdates){const oe=It.data.subarray(yt*Bt/It.data.BYTES_PER_ELEMENT,(yt+1)*Bt/It.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,It.width,It.height,1,Vt,ae,oe)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,It.width,It.height,It.depth,Vt,ae,It.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,le,It.width,It.height,It.depth,0,Vt,ae,It.data);else if(E.isData3DTexture)j?(Wt&&i.texStorage3D(r.TEXTURE_3D,ne,le,It.width,It.height,It.depth),kt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,It.width,It.height,It.depth,Vt,ae,It.data)):i.texImage3D(r.TEXTURE_3D,0,le,It.width,It.height,It.depth,0,Vt,ae,It.data);else if(E.isFramebufferTexture){if(Wt)if(j)i.texStorage2D(r.TEXTURE_2D,ne,le,It.width,It.height);else{let Bt=It.width,yt=It.height;for(let oe=0;oe<ne;oe++)i.texImage2D(r.TEXTURE_2D,oe,le,Bt,yt,0,Vt,ae,null),Bt>>=1,yt>>=1}}else if(Le.length>0){if(j&&Wt){const Bt=fe(Le[0]);i.texStorage2D(r.TEXTURE_2D,ne,le,Bt.width,Bt.height)}for(let Bt=0,yt=Le.length;Bt<yt;Bt++)Jt=Le[Bt],j?kt&&i.texSubImage2D(r.TEXTURE_2D,Bt,0,0,Vt,ae,Jt):i.texImage2D(r.TEXTURE_2D,Bt,le,Vt,ae,Jt);E.generateMipmaps=!1}else if(j){if(Wt){const Bt=fe(It);i.texStorage2D(r.TEXTURE_2D,ne,le,Bt.width,Bt.height)}kt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Vt,ae,It)}else i.texImage2D(r.TEXTURE_2D,0,le,Vt,ae,It);M(E)&&v(Tt),Kt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Pt(O,E,Q){if(E.image.length!==6)return;const Tt=vt(O,E),At=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+Q);const xt=s.get(At);if(At.version!==xt.__version||Tt===!0){i.activeTexture(r.TEXTURE0+Q);const Kt=pn.getPrimaries(pn.workingColorSpace),qt=E.colorSpace===gr?null:pn.getPrimaries(E.colorSpace),xe=E.colorSpace===gr||Kt===qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,Vt=[];for(let yt=0;yt<6;yt++)!Ee&&!It?Vt[yt]=C(E.image[yt],!0,l.maxCubemapSize):Vt[yt]=It?E.image[yt].image:E.image[yt],Vt[yt]=on(E,Vt[yt]);const ae=Vt[0],le=c.convert(E.format,E.colorSpace),Jt=c.convert(E.type),Le=I(E.internalFormat,le,Jt,E.colorSpace),j=E.isVideoTexture!==!0,Wt=xt.__version===void 0||Tt===!0,kt=At.dataReady;let ne=z(E,ae);ot(r.TEXTURE_CUBE_MAP,E);let Bt;if(Ee){j&&Wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Le,ae.width,ae.height);for(let yt=0;yt<6;yt++){Bt=Vt[yt].mipmaps;for(let oe=0;oe<Bt.length;oe++){const ve=Bt[oe];E.format!==za?le!==null?j?kt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe,0,0,ve.width,ve.height,le,ve.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe,Le,ve.width,ve.height,0,ve.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe,0,0,ve.width,ve.height,le,Jt,ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe,Le,ve.width,ve.height,0,le,Jt,ve.data)}}}else{if(Bt=E.mipmaps,j&&Wt){Bt.length>0&&ne++;const yt=fe(Vt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Le,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(It){j?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Vt[yt].width,Vt[yt].height,le,Jt,Vt[yt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Le,Vt[yt].width,Vt[yt].height,0,le,Jt,Vt[yt].data);for(let oe=0;oe<Bt.length;oe++){const ln=Bt[oe].image[yt].image;j?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe+1,0,0,ln.width,ln.height,le,Jt,ln.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe+1,Le,ln.width,ln.height,0,le,Jt,ln.data)}}else{j?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,le,Jt,Vt[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Le,le,Jt,Vt[yt]);for(let oe=0;oe<Bt.length;oe++){const ve=Bt[oe];j?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe+1,0,0,le,Jt,ve.image[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe+1,Le,le,Jt,ve.image[yt])}}}M(E)&&v(r.TEXTURE_CUBE_MAP),xt.__version=At.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,Q,Tt,At,xt){const Kt=c.convert(Q.format,Q.colorSpace),qt=c.convert(Q.type),xe=I(Q.internalFormat,Kt,qt,Q.colorSpace),Ee=s.get(E),It=s.get(Q);if(It.__renderTarget=E,!Ee.__hasExternalTextures){const Vt=Math.max(1,E.width>>xt),ae=Math.max(1,E.height>>xt);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,xt,xe,Vt,ae,E.depth,0,Kt,qt,null):i.texImage2D(At,xt,xe,Vt,ae,0,Kt,qt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),zn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Tt,At,It.__webglTexture,0,W(E)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Tt,At,It.__webglTexture,xt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(O,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const Tt=E.depthTexture,At=Tt&&Tt.isDepthTexture?Tt.type:null,xt=N(E.stencilBuffer,At),Kt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;zn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(E),xt,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(E),xt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Kt,r.RENDERBUFFER,O)}else{const Tt=E.textures;for(let At=0;At<Tt.length;At++){const xt=Tt[At],Kt=c.convert(xt.format,xt.colorSpace),qt=c.convert(xt.type),xe=I(xt.internalFormat,Kt,qt,xt.colorSpace);zn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(E),xe,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(E),xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(O,E,Q){const Tt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(E.depthTexture);if(At.__renderTarget=E,(!At.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Tt){if(At.__webglInit===void 0&&(At.__webglInit=!0,E.depthTexture.addEventListener("dispose",H)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),ot(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ee=c.convert(E.depthTexture.format),It=c.convert(E.depthTexture.type);let Vt;E.depthTexture.format===Ps?Vt=r.DEPTH_COMPONENT24:E.depthTexture.format===Jr&&(Vt=r.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Vt,E.width,E.height,0,Ee,It,null)}}else at(E.depthTexture,0);const xt=At.__webglTexture,Kt=W(E),qt=Tt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,xe=E.depthTexture.format===Jr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ps)zn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,qt,xt,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,xe,qt,xt,0);else if(E.depthTexture.format===Jr)zn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,qt,xt,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,xe,qt,xt,0);else throw new Error("Unknown depthTexture format")}function be(O){const E=s.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const Tt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Tt){const At=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Tt.removeEventListener("dispose",At)};Tt.addEventListener("dispose",At),E.__depthDisposeCallback=At}E.__boundDepthTexture=Tt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let Tt=0;Tt<6;Tt++)ye(E.__webglFramebuffer[Tt],O,Tt);else{const Tt=O.texture.mipmaps;Tt&&Tt.length>0?ye(E.__webglFramebuffer[0],O,0):ye(E.__webglFramebuffer,O,0)}else if(Q){E.__webglDepthbuffer=[];for(let Tt=0;Tt<6;Tt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Tt]),E.__webglDepthbuffer[Tt]===void 0)E.__webglDepthbuffer[Tt]=r.createRenderbuffer(),Re(E.__webglDepthbuffer[Tt],O,!1);else{const At=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer[Tt];r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,xt)}}else{const Tt=O.texture.mipmaps;if(Tt&&Tt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Re(E.__webglDepthbuffer,O,!1);else{const At=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,xt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Bn(O,E,Q){const Tt=s.get(O);E!==void 0&&_t(Tt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&be(O)}function ze(O){const E=O.texture,Q=s.get(O),Tt=s.get(E);O.addEventListener("dispose",k);const At=O.textures,xt=O.isWebGLCubeRenderTarget===!0,Kt=At.length>1;if(Kt||(Tt.__webglTexture===void 0&&(Tt.__webglTexture=r.createTexture()),Tt.__version=E.version,f.memory.textures++),xt){Q.__webglFramebuffer=[];for(let qt=0;qt<6;qt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[qt]=[];for(let xe=0;xe<E.mipmaps.length;xe++)Q.__webglFramebuffer[qt][xe]=r.createFramebuffer()}else Q.__webglFramebuffer[qt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let qt=0;qt<E.mipmaps.length;qt++)Q.__webglFramebuffer[qt]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Kt)for(let qt=0,xe=At.length;qt<xe;qt++){const Ee=s.get(At[qt]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&zn(O)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let qt=0;qt<At.length;qt++){const xe=At[qt];Q.__webglColorRenderbuffer[qt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[qt]);const Ee=c.convert(xe.format,xe.colorSpace),It=c.convert(xe.type),Vt=I(xe.internalFormat,Ee,It,xe.colorSpace,O.isXRRenderTarget===!0),ae=W(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,Vt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,Q.__webglColorRenderbuffer[qt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(Q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xt){i.bindTexture(r.TEXTURE_CUBE_MAP,Tt.__webglTexture),ot(r.TEXTURE_CUBE_MAP,E);for(let qt=0;qt<6;qt++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)_t(Q.__webglFramebuffer[qt][xe],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+qt,xe);else _t(Q.__webglFramebuffer[qt],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+qt,0);M(E)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let qt=0,xe=At.length;qt<xe;qt++){const Ee=At[qt],It=s.get(Ee);let Vt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Vt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Vt,It.__webglTexture),ot(Vt,Ee),_t(Q.__webglFramebuffer,O,Ee,r.COLOR_ATTACHMENT0+qt,Vt,0),M(Ee)&&v(Vt)}i.unbindTexture()}else{let qt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(qt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(qt,Tt.__webglTexture),ot(qt,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)_t(Q.__webglFramebuffer[xe],O,E,r.COLOR_ATTACHMENT0,qt,xe);else _t(Q.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,qt,0);M(E)&&v(qt),i.unbindTexture()}O.depthBuffer&&be(O)}function tn(O){const E=O.textures;for(let Q=0,Tt=E.length;Q<Tt;Q++){const At=E[Q];if(M(At)){const xt=D(O),Kt=s.get(At).__webglTexture;i.bindTexture(xt,Kt),v(xt),i.unbindTexture()}}}const en=[],ge=[];function sn(O){if(O.samples>0){if(zn(O)===!1){const E=O.textures,Q=O.width,Tt=O.height;let At=r.COLOR_BUFFER_BIT;const xt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Kt=s.get(O),qt=E.length>1;if(qt)for(let Ee=0;Ee<E.length;Ee++)i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const xe=O.texture.mipmaps;xe&&xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),qt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[Ee]);const It=s.get(E[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,It,0)}r.blitFramebuffer(0,0,Q,Tt,0,0,Q,Tt,At,r.NEAREST),m===!0&&(en.length=0,ge.length=0,en.push(r.COLOR_ATTACHMENT0+Ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(en.push(xt),ge.push(xt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,en))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),qt)for(let Ee=0;Ee<E.length;Ee++){i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[Ee]);const It=s.get(E[Ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,It,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function W(O){return Math.min(l.maxSamples,O.samples)}function zn(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function rn(O){const E=f.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function on(O,E){const Q=O.colorSpace,Tt=O.format,At=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==cl&&Q!==gr&&(pn.getTransfer(Q)===wn?(Tt!==za||At!==da)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):un("WebGLTextures: Unsupported texture color space:",Q)),E}function fe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=lt,this.resetTextureUnits=st,this.setTexture2D=at,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=dt,this.rebindTextures=Bn,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=zn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function zT(r,t){function i(s,l=gr){let c;const f=pn.getTransfer(l);if(s===da)return r.UNSIGNED_BYTE;if(s===xm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Mm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===dx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===px)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===fx)return r.BYTE;if(s===hx)return r.SHORT;if(s===Tc)return r.UNSIGNED_SHORT;if(s===vm)return r.INT;if(s===is)return r.UNSIGNED_INT;if(s===$a)return r.FLOAT;if(s===Ns)return r.HALF_FLOAT;if(s===mx)return r.ALPHA;if(s===gx)return r.RGB;if(s===za)return r.RGBA;if(s===Ps)return r.DEPTH_COMPONENT;if(s===Jr)return r.DEPTH_STENCIL;if(s===_x)return r.RED;if(s===Sm)return r.RED_INTEGER;if(s===ll)return r.RG;if(s===ym)return r.RG_INTEGER;if(s===bm)return r.RGBA_INTEGER;if(s===_f||s===vf||s===xf||s===Mf)if(f===wn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===_f)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===_f)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dp||s===Up||s===Lp||s===Np)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Dp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Up)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Np)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pp||s===Op||s===Ip||s===Fp||s===Bp||s===zp||s===Hp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Pp||s===Op)return f===wn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ip)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Fp)return c.COMPRESSED_R11_EAC;if(s===Bp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===zp)return c.COMPRESSED_RG11_EAC;if(s===Hp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gp||s===Vp||s===kp||s===Xp||s===Wp||s===qp||s===Yp||s===jp||s===Zp||s===Kp||s===Qp||s===Jp||s===$p||s===tm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Gp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jp)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$p)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tm)return f===wn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===em||s===nm||s===im)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===em)return f===wn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===im)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===am||s===sm||s===rm||s===om)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===am)return c.COMPRESSED_RED_RGTC1_EXT;if(s===sm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===om)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ac?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const HT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GT=`
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

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ax(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ii({vertexShader:HT,fragmentShader:GT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qi(new Of(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends fl{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,g=null,x=null,_=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",M=new VT,v={},D=i.getContextAttributes();let I=null,N=null;const z=[],H=[],k=new ke;let T=null;const L=new ha;L.viewport=new ti;const ht=new ha;ht.viewport=new ti;const V=[L,ht],st=new t1;let lt=null,St=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Pt=z[nt];return Pt===void 0&&(Pt=new Wd,z[nt]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let Pt=z[nt];return Pt===void 0&&(Pt=new Wd,z[nt]=Pt),Pt.getGripSpace()},this.getHand=function(nt){let Pt=z[nt];return Pt===void 0&&(Pt=new Wd,z[nt]=Pt),Pt.getHandSpace()};function at(nt){const Pt=H.indexOf(nt.inputSource);if(Pt===-1)return;const _t=z[Pt];_t!==void 0&&(_t.update(nt.inputSource,nt.frame,d||f),_t.dispatchEvent({type:nt.type,data:nt.inputSource}))}function F(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",B);for(let nt=0;nt<z.length;nt++){const Pt=H[nt];Pt!==null&&(H[nt]=null,z[nt].disconnect(Pt))}lt=null,St=null,M.reset();for(const nt in v)delete v[nt];t.setRenderTarget(I),y=null,_=null,x=null,l=null,N=null,pe.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){p=nt,s.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",F),l.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Re=null,ye=null;D.depth&&(ye=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=D.stencil?Jr:Ps,Re=D.stencil?Ac:is);const be={colorFormat:i.RGBA8,depthFormat:ye,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(be),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),N=new ns(_.textureWidth,_.textureHeight,{format:za,type:da,depthTexture:new Dc(_.textureWidth,_.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _t={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new ns(y.framebufferWidth,y.framebufferHeight,{format:za,type:da,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),pe.setContext(l),pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(nt){for(let Pt=0;Pt<nt.removed.length;Pt++){const _t=nt.removed[Pt],Re=H.indexOf(_t);Re>=0&&(H[Re]=null,z[Re].disconnect(_t))}for(let Pt=0;Pt<nt.added.length;Pt++){const _t=nt.added[Pt];let Re=H.indexOf(_t);if(Re===-1){for(let be=0;be<z.length;be++)if(be>=H.length){H.push(_t),Re=be;break}else if(H[be]===null){H[be]=_t,Re=be;break}if(Re===-1)break}const ye=z[Re];ye&&ye.connect(_t)}}const dt=new K,Et=new K;function U(nt,Pt,_t){dt.setFromMatrixPosition(Pt.matrixWorld),Et.setFromMatrixPosition(_t.matrixWorld);const Re=dt.distanceTo(Et),ye=Pt.projectionMatrix.elements,be=_t.projectionMatrix.elements,Bn=ye[14]/(ye[10]-1),ze=ye[14]/(ye[10]+1),tn=(ye[9]+1)/ye[5],en=(ye[9]-1)/ye[5],ge=(ye[8]-1)/ye[0],sn=(be[8]+1)/be[0],W=Bn*ge,zn=Bn*sn,rn=Re/(-ge+sn),on=rn*-ge;if(Pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(on),nt.translateZ(rn),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),ye[10]===-1)nt.projectionMatrix.copy(Pt.projectionMatrix),nt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse);else{const fe=Bn+rn,O=ze+rn,E=W-on,Q=zn+(Re-on),Tt=tn*ze/O*fe,At=en*ze/O*fe;nt.projectionMatrix.makePerspective(E,Q,Tt,At,fe,O),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function $(nt,Pt){Pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let Pt=nt.near,_t=nt.far;M.texture!==null&&(M.depthNear>0&&(Pt=M.depthNear),M.depthFar>0&&(_t=M.depthFar)),st.near=ht.near=L.near=Pt,st.far=ht.far=L.far=_t,(lt!==st.near||St!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),lt=st.near,St=st.far),st.layers.mask=nt.layers.mask|6,L.layers.mask=st.layers.mask&-5,ht.layers.mask=st.layers.mask&-3;const Re=nt.parent,ye=st.cameras;$(st,Re);for(let be=0;be<ye.length;be++)$(ye[be],Re);ye.length===2?U(st,L,ht):st.projectionMatrix.copy(L.projectionMatrix),ot(nt,st,Re)};function ot(nt,Pt,_t){_t===null?nt.matrix.copy(Pt.matrixWorld):(nt.matrix.copy(_t.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Pt.projectionMatrix),nt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Cc*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(nt){m=nt,_!==null&&(_.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function(nt){return v[nt]};let vt=null;function Zt(nt,Pt){if(g=Pt.getViewerPose(d||f),b=Pt,g!==null){const _t=g.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Re=!1;_t.length!==st.cameras.length&&(st.cameras.length=0,Re=!0);for(let ze=0;ze<_t.length;ze++){const tn=_t[ze];let en=null;if(y!==null)en=y.getViewport(tn);else{const sn=x.getViewSubImage(_,tn);en=sn.viewport,ze===0&&(t.setRenderTargetTextures(N,sn.colorTexture,sn.depthStencilTexture),t.setRenderTarget(N))}let ge=V[ze];ge===void 0&&(ge=new ha,ge.layers.enable(ze),ge.viewport=new ti,V[ze]=ge),ge.matrix.fromArray(tn.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(tn.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(en.x,en.y,en.width,en.height),ze===0&&(st.matrix.copy(ge.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Re===!0&&st.cameras.push(ge)}const ye=l.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const ze=x.getDepthInformation(_t[0]);ze&&ze.isValid&&ze.texture&&M.init(ze,l.renderState)}if(ye&&ye.includes("camera-access")&&C){t.state.unbindTexture(),x=s.getBinding();for(let ze=0;ze<_t.length;ze++){const tn=_t[ze].camera;if(tn){let en=v[tn];en||(en=new Ax,v[tn]=en);const ge=x.getCameraImage(tn);en.sourceTexture=ge}}}}for(let _t=0;_t<z.length;_t++){const Re=H[_t],ye=z[_t];Re!==null&&ye!==void 0&&ye.update(Re,Pt,d||f)}vt&&vt(nt,Pt),Pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Pt}),b=null}const pe=new Ux;pe.setAnimationLoop(Zt),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const Yr=new Ha,XT=new Fn;function WT(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Rx(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,D,I,N){v.isMeshBasicMaterial?c(M,v):v.isMeshLambertMaterial?(c(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&y(M,v,N)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),C(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,D,I):v.isSpriteMaterial?d(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Ji&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Ji&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const D=t.get(v),I=D.envMap,N=D.envMapRotation;I&&(M.envMap.value=I,Yr.copy(N),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),M.envMapRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Yr)),M.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,D,I){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*D,M.scale.value=I*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,D){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ji&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const D=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function qT(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,I){const N=I.program;s.uniformBlockBinding(D,N)}function d(D,I){let N=l[D.id];N===void 0&&(b(D),N=g(D),l[D.id]=N,D.addEventListener("dispose",M));const z=I.program;s.updateUBOMapping(D,z);const H=t.render.frame;c[D.id]!==H&&(_(D),c[D.id]=H)}function g(D){const I=x();D.__bindingPointIndex=I;const N=r.createBuffer(),z=D.__size,H=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,z,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,N),N}function x(){for(let D=0;D<p;D++)if(f.indexOf(D)===-1)return f.push(D),D;return un("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const I=l[D.id],N=D.uniforms,z=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let H=0,k=N.length;H<k;H++){const T=Array.isArray(N[H])?N[H]:[N[H]];for(let L=0,ht=T.length;L<ht;L++){const V=T[L];if(y(V,H,L,z)===!0){const st=V.__offset,lt=Array.isArray(V.value)?V.value:[V.value];let St=0;for(let at=0;at<lt.length;at++){const F=lt[at],B=C(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,st+St,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,St),St+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(D,I,N,z){const H=D.value,k=I+"_"+N;if(z[k]===void 0)return typeof H=="number"||typeof H=="boolean"?z[k]=H:z[k]=H.clone(),!0;{const T=z[k];if(typeof H=="number"||typeof H=="boolean"){if(T!==H)return z[k]=H,!0}else if(T.equals(H)===!1)return T.copy(H),!0}return!1}function b(D){const I=D.uniforms;let N=0;const z=16;for(let k=0,T=I.length;k<T;k++){const L=Array.isArray(I[k])?I[k]:[I[k]];for(let ht=0,V=L.length;ht<V;ht++){const st=L[ht],lt=Array.isArray(st.value)?st.value:[st.value];for(let St=0,at=lt.length;St<at;St++){const F=lt[St],B=C(F),dt=N%z,Et=dt%B.boundary,U=dt+Et;N+=Et,U!==0&&z-U<B.storage&&(N+=z-U),st.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=N,N+=B.storage}}}const H=N%z;return H>0&&(N+=z-H),D.__size=N,D.__cache={},this}function C(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",D),I}function M(D){const I=D.target;I.removeEventListener("dispose",M);const N=f.indexOf(I.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function v(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:d,dispose:v}}const YT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qa=null;function jT(){return Qa===null&&(Qa=new Uy(YT,16,16,ll,Ns),Qa.name="DFG_LUT",Qa.minFilter=Fi,Qa.magFilter=Fi,Qa.wrapS=Cs,Qa.wrapT=Cs,Qa.generateMipmaps=!1,Qa.needsUpdate=!0),Qa}class ZT{constructor(t={}){const{canvas:i=WS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:y=da}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const C=y,M=new Set([bm,ym,Sm]),v=new Set([da,is,Tc,Ac,xm,Mm]),D=new Uint32Array(4),I=new Int32Array(4);let N=null,z=null;const H=[],k=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let ht=!1;this._outputColorSpace=yn;let V=0,st=0,lt=null,St=-1,at=null;const F=new ti,B=new ti;let dt=null;const Et=new $e(0);let U=0,$=i.width,ot=i.height,vt=1,Zt=null,pe=null;const nt=new ti(0,0,$,ot),Pt=new ti(0,0,$,ot);let _t=!1;const Re=new Cm;let ye=!1,be=!1;const Bn=new Fn,ze=new K,tn=new ti,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function sn(){return lt===null?vt:1}let W=s;function zn(w,tt){return i.getContext(w,tt)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gm}`),i.addEventListener("webglcontextlost",oe,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",ln,!1),W===null){const tt="webgl2";if(W=zn(tt,w),W===null)throw zn(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw un("WebGLRenderer: "+w.message),w}let rn,on,fe,O,E,Q,Tt,At,xt,Kt,qt,xe,Ee,It,Vt,ae,le,Jt,Le,j,Wt,kt,ne;function Bt(){rn=new ZE(W),rn.init(),Wt=new zT(W,rn),on=new GE(W,rn,t,Wt),fe=new FT(W,rn),on.reversedDepthBuffer&&_&&fe.buffers.depth.setReversed(!0),O=new JE(W),E=new bT,Q=new BT(W,rn,fe,E,on,Wt,O),Tt=new jE(L),At=new i1(W),kt=new zE(W,At),xt=new KE(W,At,O,kt),Kt=new t2(W,xt,At,kt,O),Jt=new $E(W,on,Q),Vt=new VE(E),qt=new yT(L,Tt,rn,on,kt,Vt),xe=new WT(L,E),Ee=new TT,It=new UT(rn),le=new BE(L,Tt,fe,Kt,b,m),ae=new IT(L,Kt,on),ne=new qT(W,O,on,fe),Le=new HE(W,rn,O),j=new QE(W,rn,O),O.programs=qt.programs,L.capabilities=on,L.extensions=rn,L.properties=E,L.renderLists=Ee,L.shadowMap=ae,L.state=fe,L.info=O}Bt(),C!==da&&(T=new n2(C,i.width,i.height,l,c));const yt=new kT(L,W);this.xr=yt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=rn.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=rn.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(w){w!==void 0&&(vt=w,this.setSize($,ot,!1))},this.getSize=function(w){return w.set($,ot)},this.setSize=function(w,tt,gt=!0){if(yt.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,ot=tt,i.width=Math.floor(w*vt),i.height=Math.floor(tt*vt),gt===!0&&(i.style.width=w+"px",i.style.height=tt+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,w,tt)},this.getDrawingBufferSize=function(w){return w.set($*vt,ot*vt).floor()},this.setDrawingBufferSize=function(w,tt,gt){$=w,ot=tt,vt=gt,i.width=Math.floor(w*gt),i.height=Math.floor(tt*gt),this.setViewport(0,0,w,tt)},this.setEffects=function(w){if(C===da){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let tt=0;tt<w.length;tt++)if(w[tt].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,tt,gt,ut){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,tt,gt,ut),fe.viewport(F.copy(nt).multiplyScalar(vt).round())},this.getScissor=function(w){return w.copy(Pt)},this.setScissor=function(w,tt,gt,ut){w.isVector4?Pt.set(w.x,w.y,w.z,w.w):Pt.set(w,tt,gt,ut),fe.scissor(B.copy(Pt).multiplyScalar(vt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(w){fe.setScissorTest(_t=w)},this.setOpaqueSort=function(w){Zt=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(w=!0,tt=!0,gt=!0){let ut=0;if(w){let it=!1;if(lt!==null){const jt=lt.texture.format;it=M.has(jt)}if(it){const jt=lt.texture.type,ie=v.has(jt),Yt=le.getClearColor(),re=le.getClearAlpha(),ce=Yt.r,De=Yt.g,Pe=Yt.b;ie?(D[0]=ce,D[1]=De,D[2]=Pe,D[3]=re,W.clearBufferuiv(W.COLOR,0,D)):(I[0]=ce,I[1]=De,I[2]=Pe,I[3]=re,W.clearBufferiv(W.COLOR,0,I))}else ut|=W.COLOR_BUFFER_BIT}tt&&(ut|=W.DEPTH_BUFFER_BIT),gt&&(ut|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ut!==0&&W.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",oe,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",ln,!1),le.dispose(),Ee.dispose(),It.dispose(),E.dispose(),Tt.dispose(),Kt.dispose(),kt.dispose(),ne.dispose(),qt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",zi),yt.removeEventListener("sessionend",pi),Qn.stop()};function oe(w){w.preventDefault(),Tf("WebGLRenderer: Context Lost."),ht=!0}function ve(){Tf("WebGLRenderer: Context Restored."),ht=!1;const w=O.autoReset,tt=ae.enabled,gt=ae.autoUpdate,ut=ae.needsUpdate,it=ae.type;Bt(),O.autoReset=w,ae.enabled=tt,ae.autoUpdate=gt,ae.needsUpdate=ut,ae.type=it}function ln(w){un("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nn(w){const tt=w.target;tt.removeEventListener("dispose",nn),wi(tt)}function wi(w){Wn(w),E.remove(w)}function Wn(w){const tt=E.get(w).programs;tt!==void 0&&(tt.forEach(function(gt){qt.releaseProgram(gt)}),w.isShaderMaterial&&qt.releaseShaderCache(w))}this.renderBufferDirect=function(w,tt,gt,ut,it,jt){tt===null&&(tt=en);const ie=it.isMesh&&it.matrixWorld.determinant()<0,Yt=Is(w,tt,gt,ut,it);fe.setMaterial(ut,ie);let re=gt.index,ce=1;if(ut.wireframe===!0){if(re=xt.getWireframeAttribute(gt),re===void 0)return;ce=2}const De=gt.drawRange,Pe=gt.attributes.position;let se=De.start*ce,qe=(De.start+De.count)*ce;jt!==null&&(se=Math.max(se,jt.start*ce),qe=Math.min(qe,(jt.start+jt.count)*ce)),re!==null?(se=Math.max(se,0),qe=Math.min(qe,re.count)):Pe!=null&&(se=Math.max(se,0),qe=Math.min(qe,Pe.count));const En=qe-se;if(En<0||En===1/0)return;kt.setup(it,ut,Yt,gt,re);let fn,Ze=Le;if(re!==null&&(fn=At.get(re),Ze=j,Ze.setIndex(fn)),it.isMesh)ut.wireframe===!0?(fe.setLineWidth(ut.wireframeLinewidth*sn()),Ze.setMode(W.LINES)):Ze.setMode(W.TRIANGLES);else if(it.isLine){let On=ut.linewidth;On===void 0&&(On=1),fe.setLineWidth(On*sn()),it.isLineSegments?Ze.setMode(W.LINES):it.isLineLoop?Ze.setMode(W.LINE_LOOP):Ze.setMode(W.LINE_STRIP)}else it.isPoints?Ze.setMode(W.POINTS):it.isSprite&&Ze.setMode(W.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)Af("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(rn.get("WEBGL_multi_draw"))Ze.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const On=it._multiDrawStarts,ue=it._multiDrawCounts,xn=it._multiDrawCount,Ye=re?At.get(re).bytesPerElement:1,Ci=E.get(ut).currentProgram.getUniforms();for(let Di=0;Di<xn;Di++)Ci.setValue(W,"_gl_DrawID",Di),Ze.render(On[Di]/Ye,ue[Di])}else if(it.isInstancedMesh)Ze.renderInstances(se,En,it.count);else if(gt.isInstancedBufferGeometry){const On=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,ue=Math.min(gt.instanceCount,On);Ze.renderInstances(se,En,ue)}else Ze.render(se,En)};function ei(w,tt,gt){w.transparent===!0&&w.side===Fa&&w.forceSinglePass===!1?(w.side=Ji,w.needsUpdate=!0,$i(w,tt,gt),w.side=xr,w.needsUpdate=!0,$i(w,tt,gt),w.side=Fa):$i(w,tt,gt)}this.compile=function(w,tt,gt=null){gt===null&&(gt=w),z=It.get(gt),z.init(tt),k.push(z),gt.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(z.pushLight(it),it.castShadow&&z.pushShadow(it))}),w!==gt&&w.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(z.pushLight(it),it.castShadow&&z.pushShadow(it))}),z.setupLights();const ut=new Set;return w.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const jt=it.material;if(jt)if(Array.isArray(jt))for(let ie=0;ie<jt.length;ie++){const Yt=jt[ie];ei(Yt,gt,it),ut.add(Yt)}else ei(jt,gt,it),ut.add(jt)}),z=k.pop(),ut},this.compileAsync=function(w,tt,gt=null){const ut=this.compile(w,tt,gt);return new Promise(it=>{function jt(){if(ut.forEach(function(ie){E.get(ie).currentProgram.isReady()&&ut.delete(ie)}),ut.size===0){it(w);return}setTimeout(jt,10)}rn.get("KHR_parallel_shader_compile")!==null?jt():setTimeout(jt,10)})};let bn=null;function wa(w){bn&&bn(w)}function zi(){Qn.stop()}function pi(){Qn.start()}const Qn=new Ux;Qn.setAnimationLoop(wa),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(w){bn=w,yt.setAnimationLoop(w),w===null?Qn.stop():Qn.start()},yt.addEventListener("sessionstart",zi),yt.addEventListener("sessionend",pi),this.render=function(w,tt){if(tt!==void 0&&tt.isCamera!==!0){un("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const gt=yt.enabled===!0&&yt.isPresenting===!0,ut=T!==null&&(lt===null||gt)&&T.begin(L,lt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(tt),tt=yt.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,tt,lt),z=It.get(w,k.length),z.init(tt),k.push(z),Bn.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),Re.setFromProjectionMatrix(Bn,ts,tt.reversedDepth),be=this.localClippingEnabled,ye=Vt.init(this.clippingPlanes,be),N=Ee.get(w,H.length),N.init(),H.push(N),yt.enabled===!0&&yt.isPresenting===!0){const ie=L.xr.getDepthSensingMesh();ie!==null&&Os(ie,tt,-1/0,L.sortObjects)}Os(w,tt,0,L.sortObjects),N.finish(),L.sortObjects===!0&&N.sort(Zt,pe),ge=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,ge&&le.addToRenderList(N,w),this.info.render.frame++,ye===!0&&Vt.beginShadows();const it=z.state.shadowsArray;if(ae.render(it,w,tt),ye===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ut&&T.hasRenderPass())===!1){const ie=N.opaque,Yt=N.transmissive;if(z.setupLights(),tt.isArrayCamera){const re=tt.cameras;if(Yt.length>0)for(let ce=0,De=re.length;ce<De;ce++){const Pe=re[ce];as(ie,Yt,w,Pe)}ge&&le.render(w);for(let ce=0,De=re.length;ce<De;ce++){const Pe=re[ce];Ga(N,w,Pe,Pe.viewport)}}else Yt.length>0&&as(ie,Yt,w,tt),ge&&le.render(w),Ga(N,w,tt)}lt!==null&&st===0&&(Q.updateMultisampleRenderTarget(lt),Q.updateRenderTargetMipmap(lt)),ut&&T.end(L),w.isScene===!0&&w.onAfterRender(L,w,tt),kt.resetDefaultState(),St=-1,at=null,k.pop(),k.length>0?(z=k[k.length-1],ye===!0&&Vt.setGlobalState(L.clippingPlanes,z.state.camera)):z=null,H.pop(),H.length>0?N=H[H.length-1]:N=null};function Os(w,tt,gt,ut){if(w.visible===!1)return;if(w.layers.test(tt.layers)){if(w.isGroup)gt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(tt);else if(w.isLight)z.pushLight(w),w.castShadow&&z.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Re.intersectsSprite(w)){ut&&tn.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Bn);const ie=Kt.update(w),Yt=w.material;Yt.visible&&N.push(w,ie,Yt,gt,tn.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Re.intersectsObject(w))){const ie=Kt.update(w),Yt=w.material;if(ut&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tn.copy(w.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),tn.copy(ie.boundingSphere.center)),tn.applyMatrix4(w.matrixWorld).applyMatrix4(Bn)),Array.isArray(Yt)){const re=ie.groups;for(let ce=0,De=re.length;ce<De;ce++){const Pe=re[ce],se=Yt[Pe.materialIndex];se&&se.visible&&N.push(w,ie,se,gt,tn.z,Pe)}}else Yt.visible&&N.push(w,ie,Yt,gt,tn.z,null)}}const jt=w.children;for(let ie=0,Yt=jt.length;ie<Yt;ie++)Os(jt[ie],tt,gt,ut)}function Ga(w,tt,gt,ut){const{opaque:it,transmissive:jt,transparent:ie}=w;z.setupLightsView(gt),ye===!0&&Vt.setGlobalState(L.clippingPlanes,gt),ut&&fe.viewport(F.copy(ut)),it.length>0&&Yi(it,tt,gt),jt.length>0&&Yi(jt,tt,gt),ie.length>0&&Yi(ie,tt,gt),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function as(w,tt,gt,ut){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ut.id]===void 0){const se=rn.has("EXT_color_buffer_half_float")||rn.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ut.id]=new ns(1,1,{generateMipmaps:!0,type:se?Ns:da,minFilter:Qr,samples:Math.max(4,on.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pn.workingColorSpace})}const jt=z.state.transmissionRenderTarget[ut.id],ie=ut.viewport||F;jt.setSize(ie.z*L.transmissionResolutionScale,ie.w*L.transmissionResolutionScale);const Yt=L.getRenderTarget(),re=L.getActiveCubeFace(),ce=L.getActiveMipmapLevel();L.setRenderTarget(jt),L.getClearColor(Et),U=L.getClearAlpha(),U<1&&L.setClearColor(16777215,.5),L.clear(),ge&&le.render(gt);const De=L.toneMapping;L.toneMapping=es;const Pe=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),z.setupLightsView(ut),ye===!0&&Vt.setGlobalState(L.clippingPlanes,ut),Yi(w,gt,ut),Q.updateMultisampleRenderTarget(jt),Q.updateRenderTargetMipmap(jt),rn.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let qe=0,En=tt.length;qe<En;qe++){const fn=tt[qe],{object:Ze,geometry:On,material:ue,group:xn}=fn;if(ue.side===Fa&&Ze.layers.test(ut.layers)){const Ye=ue.side;ue.side=Ji,ue.needsUpdate=!0,pa(Ze,gt,ut,On,ue,xn),ue.side=Ye,ue.needsUpdate=!0,se=!0}}se===!0&&(Q.updateMultisampleRenderTarget(jt),Q.updateRenderTargetMipmap(jt))}L.setRenderTarget(Yt,re,ce),L.setClearColor(Et,U),Pe!==void 0&&(ut.viewport=Pe),L.toneMapping=De}function Yi(w,tt,gt){const ut=tt.isScene===!0?tt.overrideMaterial:null;for(let it=0,jt=w.length;it<jt;it++){const ie=w[it],{object:Yt,geometry:re,group:ce}=ie;let De=ie.material;De.allowOverride===!0&&ut!==null&&(De=ut),Yt.layers.test(gt.layers)&&pa(Yt,tt,gt,re,De,ce)}}function pa(w,tt,gt,ut,it,jt){w.onBeforeRender(L,tt,gt,ut,it,jt),w.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),it.onBeforeRender(L,tt,gt,ut,w,jt),it.transparent===!0&&it.side===Fa&&it.forceSinglePass===!1?(it.side=Ji,it.needsUpdate=!0,L.renderBufferDirect(gt,tt,ut,it,w,jt),it.side=xr,it.needsUpdate=!0,L.renderBufferDirect(gt,tt,ut,it,w,jt),it.side=Fa):L.renderBufferDirect(gt,tt,ut,it,w,jt),w.onAfterRender(L,tt,gt,ut,it,jt)}function $i(w,tt,gt){tt.isScene!==!0&&(tt=en);const ut=E.get(w),it=z.state.lights,jt=z.state.shadowsArray,ie=it.state.version,Yt=qt.getParameters(w,it.state,jt,tt,gt),re=qt.getProgramCacheKey(Yt);let ce=ut.programs;ut.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?tt.environment:null,ut.fog=tt.fog;const De=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ut.envMap=Tt.get(w.envMap||ut.environment,De),ut.envMapRotation=ut.environment!==null&&w.envMap===null?tt.environmentRotation:w.envMapRotation,ce===void 0&&(w.addEventListener("dispose",nn),ce=new Map,ut.programs=ce);let Pe=ce.get(re);if(Pe!==void 0){if(ut.currentProgram===Pe&&ut.lightsStateVersion===ie)return qn(w,Yt),Pe}else Yt.uniforms=qt.getUniforms(w),w.onBeforeCompile(Yt,L),Pe=qt.acquireProgram(Yt,re),ce.set(re,Pe),ut.uniforms=Yt.uniforms;const se=ut.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(se.clippingPlanes=Vt.uniform),qn(w,Yt),ut.needsLights=ga(w),ut.lightsStateVersion=ie,ut.needsLights&&(se.ambientLightColor.value=it.state.ambient,se.lightProbe.value=it.state.probe,se.directionalLights.value=it.state.directional,se.directionalLightShadows.value=it.state.directionalShadow,se.spotLights.value=it.state.spot,se.spotLightShadows.value=it.state.spotShadow,se.rectAreaLights.value=it.state.rectArea,se.ltc_1.value=it.state.rectAreaLTC1,se.ltc_2.value=it.state.rectAreaLTC2,se.pointLights.value=it.state.point,se.pointLightShadows.value=it.state.pointShadow,se.hemisphereLights.value=it.state.hemi,se.directionalShadowMatrix.value=it.state.directionalShadowMatrix,se.spotLightMatrix.value=it.state.spotLightMatrix,se.spotLightMap.value=it.state.spotLightMap,se.pointShadowMatrix.value=it.state.pointShadowMatrix),ut.currentProgram=Pe,ut.uniformsList=null,Pe}function ma(w){if(w.uniformsList===null){const tt=w.currentProgram.getUniforms();w.uniformsList=yf.seqWithValue(tt.seq,w.uniforms)}return w.uniformsList}function qn(w,tt){const gt=E.get(w);gt.outputColorSpace=tt.outputColorSpace,gt.batching=tt.batching,gt.batchingColor=tt.batchingColor,gt.instancing=tt.instancing,gt.instancingColor=tt.instancingColor,gt.instancingMorph=tt.instancingMorph,gt.skinning=tt.skinning,gt.morphTargets=tt.morphTargets,gt.morphNormals=tt.morphNormals,gt.morphColors=tt.morphColors,gt.morphTargetsCount=tt.morphTargetsCount,gt.numClippingPlanes=tt.numClippingPlanes,gt.numIntersection=tt.numClipIntersection,gt.vertexAlphas=tt.vertexAlphas,gt.vertexTangents=tt.vertexTangents,gt.toneMapping=tt.toneMapping}function Is(w,tt,gt,ut,it){tt.isScene!==!0&&(tt=en),Q.resetTextureUnits();const jt=tt.fog,ie=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial?tt.environment:null,Yt=lt===null?L.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:cl,re=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial&&!ut.envMap||ut.isMeshPhongMaterial&&!ut.envMap,ce=Tt.get(ut.envMap||ie,re),De=ut.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,Pe=!!gt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),se=!!gt.morphAttributes.position,qe=!!gt.morphAttributes.normal,En=!!gt.morphAttributes.color;let fn=es;ut.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(fn=L.toneMapping);const Ze=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,On=Ze!==void 0?Ze.length:0,ue=E.get(ut),xn=z.state.lights;if(ye===!0&&(be===!0||w!==at)){const kn=w===at&&ut.id===St;Vt.setState(ut,w,kn)}let Ye=!1;ut.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==xn.state.version||ue.outputColorSpace!==Yt||it.isBatchedMesh&&ue.batching===!1||!it.isBatchedMesh&&ue.batching===!0||it.isBatchedMesh&&ue.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&ue.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&ue.instancing===!1||!it.isInstancedMesh&&ue.instancing===!0||it.isSkinnedMesh&&ue.skinning===!1||!it.isSkinnedMesh&&ue.skinning===!0||it.isInstancedMesh&&ue.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&ue.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&ue.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&ue.instancingMorph===!1&&it.morphTexture!==null||ue.envMap!==ce||ut.fog===!0&&ue.fog!==jt||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==Vt.numPlanes||ue.numIntersection!==Vt.numIntersection)||ue.vertexAlphas!==De||ue.vertexTangents!==Pe||ue.morphTargets!==se||ue.morphNormals!==qe||ue.morphColors!==En||ue.toneMapping!==fn||ue.morphTargetsCount!==On)&&(Ye=!0):(Ye=!0,ue.__version=ut.version);let Ci=ue.currentProgram;Ye===!0&&(Ci=$i(ut,tt,it));let Di=!1,Ui=!1,Ca=!1;const hn=Ci.getUniforms(),Nn=ue.uniforms;if(fe.useProgram(Ci.program)&&(Di=!0,Ui=!0,Ca=!0),ut.id!==St&&(St=ut.id,Ui=!0),Di||at!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),hn.setValue(W,"projectionMatrix",w.projectionMatrix),hn.setValue(W,"viewMatrix",w.matrixWorldInverse);const Hi=hn.map.cameraPosition;Hi!==void 0&&Hi.setValue(W,ze.setFromMatrixPosition(w.matrixWorld)),on.logarithmicDepthBuffer&&hn.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&hn.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),at!==w&&(at=w,Ui=!0,Ca=!0)}if(ue.needsLights&&(xn.state.directionalShadowMap.length>0&&hn.setValue(W,"directionalShadowMap",xn.state.directionalShadowMap,Q),xn.state.spotShadowMap.length>0&&hn.setValue(W,"spotShadowMap",xn.state.spotShadowMap,Q),xn.state.pointShadowMap.length>0&&hn.setValue(W,"pointShadowMap",xn.state.pointShadowMap,Q)),it.isSkinnedMesh){hn.setOptional(W,it,"bindMatrix"),hn.setOptional(W,it,"bindMatrixInverse");const kn=it.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),hn.setValue(W,"boneTexture",kn.boneTexture,Q))}it.isBatchedMesh&&(hn.setOptional(W,it,"batchingTexture"),hn.setValue(W,"batchingTexture",it._matricesTexture,Q),hn.setOptional(W,it,"batchingIdTexture"),hn.setValue(W,"batchingIdTexture",it._indirectTexture,Q),hn.setOptional(W,it,"batchingColorTexture"),it._colorsTexture!==null&&hn.setValue(W,"batchingColorTexture",it._colorsTexture,Q));const ta=gt.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&Jt.update(it,gt,Ci),(Ui||ue.receiveShadow!==it.receiveShadow)&&(ue.receiveShadow=it.receiveShadow,hn.setValue(W,"receiveShadow",it.receiveShadow)),(ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial)&&ut.envMap===null&&tt.environment!==null&&(Nn.envMapIntensity.value=tt.environmentIntensity),Nn.dfgLUT!==void 0&&(Nn.dfgLUT.value=jT()),Ui&&(hn.setValue(W,"toneMappingExposure",L.toneMappingExposure),ue.needsLights&&Yn(Nn,Ca),jt&&ut.fog===!0&&xe.refreshFogUniforms(Nn,jt),xe.refreshMaterialUniforms(Nn,ut,vt,ot,z.state.transmissionRenderTarget[w.id]),yf.upload(W,ma(ue),Nn,Q)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(yf.upload(W,ma(ue),Nn,Q),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&hn.setValue(W,"center",it.center),hn.setValue(W,"modelViewMatrix",it.modelViewMatrix),hn.setValue(W,"normalMatrix",it.normalMatrix),hn.setValue(W,"modelMatrix",it.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const kn=ut.uniformsGroups;for(let Hi=0,ji=kn.length;Hi<ji;Hi++){const Fs=kn[Hi];ne.update(Fs,Ci),ne.bind(Fs,Ci)}}return Ci}function Yn(w,tt){w.ambientLightColor.needsUpdate=tt,w.lightProbe.needsUpdate=tt,w.directionalLights.needsUpdate=tt,w.directionalLightShadows.needsUpdate=tt,w.pointLights.needsUpdate=tt,w.pointLightShadows.needsUpdate=tt,w.spotLights.needsUpdate=tt,w.spotLightShadows.needsUpdate=tt,w.rectAreaLights.needsUpdate=tt,w.hemisphereLights.needsUpdate=tt}function ga(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(w,tt,gt){const ut=E.get(w);ut.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=tt,E.get(w.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:gt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,tt){const gt=E.get(w);gt.__webglFramebuffer=tt,gt.__useDefaultFramebuffer=tt===void 0};const Va=W.createFramebuffer();this.setRenderTarget=function(w,tt=0,gt=0){lt=w,V=tt,st=gt;let ut=null,it=!1,jt=!1;if(w){const Yt=E.get(w);if(Yt.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(W.FRAMEBUFFER,Yt.__webglFramebuffer),F.copy(w.viewport),B.copy(w.scissor),dt=w.scissorTest,fe.viewport(F),fe.scissor(B),fe.setScissorTest(dt),St=-1;return}else if(Yt.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(Yt.__hasExternalTextures)Q.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const De=w.depthTexture;if(Yt.__boundDepthTexture!==De){if(De!==null&&E.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}const re=w.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(jt=!0);const ce=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ce[tt])?ut=ce[tt][gt]:ut=ce[tt],it=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?ut=E.get(w).__webglMultisampledFramebuffer:Array.isArray(ce)?ut=ce[gt]:ut=ce,F.copy(w.viewport),B.copy(w.scissor),dt=w.scissorTest}else F.copy(nt).multiplyScalar(vt).floor(),B.copy(Pt).multiplyScalar(vt).floor(),dt=_t;if(gt!==0&&(ut=Va),fe.bindFramebuffer(W.FRAMEBUFFER,ut)&&fe.drawBuffers(w,ut),fe.viewport(F),fe.scissor(B),fe.setScissorTest(dt),it){const Yt=E.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Yt.__webglTexture,gt)}else if(jt){const Yt=tt;for(let re=0;re<w.textures.length;re++){const ce=E.get(w.textures[re]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+re,ce.__webglTexture,gt,Yt)}}else if(w!==null&&gt!==0){const Yt=E.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Yt.__webglTexture,gt)}St=-1},this.readRenderTargetPixels=function(w,tt,gt,ut,it,jt,ie,Yt=0){if(!(w&&w.isWebGLRenderTarget)){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ie!==void 0&&(re=re[ie]),re){fe.bindFramebuffer(W.FRAMEBUFFER,re);try{const ce=w.textures[Yt],De=ce.format,Pe=ce.type;if(w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Yt),!on.textureFormatReadable(De)){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!on.textureTypeReadable(Pe)){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=w.width-ut&&gt>=0&&gt<=w.height-it&&W.readPixels(tt,gt,ut,it,Wt.convert(De),Wt.convert(Pe),jt)}finally{const ce=lt!==null?E.get(lt).__webglFramebuffer:null;fe.bindFramebuffer(W.FRAMEBUFFER,ce)}}},this.readRenderTargetPixelsAsync=async function(w,tt,gt,ut,it,jt,ie,Yt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ie!==void 0&&(re=re[ie]),re)if(tt>=0&&tt<=w.width-ut&&gt>=0&&gt<=w.height-it){fe.bindFramebuffer(W.FRAMEBUFFER,re);const ce=w.textures[Yt],De=ce.format,Pe=ce.type;if(w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Yt),!on.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!on.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,se),W.bufferData(W.PIXEL_PACK_BUFFER,jt.byteLength,W.STREAM_READ),W.readPixels(tt,gt,ut,it,Wt.convert(De),Wt.convert(Pe),0);const qe=lt!==null?E.get(lt).__webglFramebuffer:null;fe.bindFramebuffer(W.FRAMEBUFFER,qe);const En=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await qS(W,En,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,se),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,jt),W.deleteBuffer(se),W.deleteSync(En),jt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,tt=null,gt=0){const ut=Math.pow(2,-gt),it=Math.floor(w.image.width*ut),jt=Math.floor(w.image.height*ut),ie=tt!==null?tt.x:0,Yt=tt!==null?tt.y:0;Q.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,gt,0,0,ie,Yt,it,jt),fe.unbindTexture()};const pl=W.createFramebuffer(),Sr=W.createFramebuffer();this.copyTextureToTexture=function(w,tt,gt=null,ut=null,it=0,jt=0){let ie,Yt,re,ce,De,Pe,se,qe,En;const fn=w.isCompressedTexture?w.mipmaps[jt]:w.image;if(gt!==null)ie=gt.max.x-gt.min.x,Yt=gt.max.y-gt.min.y,re=gt.isBox3?gt.max.z-gt.min.z:1,ce=gt.min.x,De=gt.min.y,Pe=gt.isBox3?gt.min.z:0;else{const Nn=Math.pow(2,-it);ie=Math.floor(fn.width*Nn),Yt=Math.floor(fn.height*Nn),w.isDataArrayTexture?re=fn.depth:w.isData3DTexture?re=Math.floor(fn.depth*Nn):re=1,ce=0,De=0,Pe=0}ut!==null?(se=ut.x,qe=ut.y,En=ut.z):(se=0,qe=0,En=0);const Ze=Wt.convert(tt.format),On=Wt.convert(tt.type);let ue;tt.isData3DTexture?(Q.setTexture3D(tt,0),ue=W.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(Q.setTexture2DArray(tt,0),ue=W.TEXTURE_2D_ARRAY):(Q.setTexture2D(tt,0),ue=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,tt.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,tt.unpackAlignment);const xn=W.getParameter(W.UNPACK_ROW_LENGTH),Ye=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Ci=W.getParameter(W.UNPACK_SKIP_PIXELS),Di=W.getParameter(W.UNPACK_SKIP_ROWS),Ui=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,fn.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,fn.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ce),W.pixelStorei(W.UNPACK_SKIP_ROWS,De),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Pe);const Ca=w.isDataArrayTexture||w.isData3DTexture,hn=tt.isDataArrayTexture||tt.isData3DTexture;if(w.isDepthTexture){const Nn=E.get(w),ta=E.get(tt),kn=E.get(Nn.__renderTarget),Hi=E.get(ta.__renderTarget);fe.bindFramebuffer(W.READ_FRAMEBUFFER,kn.__webglFramebuffer),fe.bindFramebuffer(W.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let ji=0;ji<re;ji++)Ca&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,E.get(w).__webglTexture,it,Pe+ji),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,E.get(tt).__webglTexture,jt,En+ji)),W.blitFramebuffer(ce,De,ie,Yt,se,qe,ie,Yt,W.DEPTH_BUFFER_BIT,W.NEAREST);fe.bindFramebuffer(W.READ_FRAMEBUFFER,null),fe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(it!==0||w.isRenderTargetTexture||E.has(w)){const Nn=E.get(w),ta=E.get(tt);fe.bindFramebuffer(W.READ_FRAMEBUFFER,pl),fe.bindFramebuffer(W.DRAW_FRAMEBUFFER,Sr);for(let kn=0;kn<re;kn++)Ca?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Nn.__webglTexture,it,Pe+kn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Nn.__webglTexture,it),hn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ta.__webglTexture,jt,En+kn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ta.__webglTexture,jt),it!==0?W.blitFramebuffer(ce,De,ie,Yt,se,qe,ie,Yt,W.COLOR_BUFFER_BIT,W.NEAREST):hn?W.copyTexSubImage3D(ue,jt,se,qe,En+kn,ce,De,ie,Yt):W.copyTexSubImage2D(ue,jt,se,qe,ce,De,ie,Yt);fe.bindFramebuffer(W.READ_FRAMEBUFFER,null),fe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else hn?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(ue,jt,se,qe,En,ie,Yt,re,Ze,On,fn.data):tt.isCompressedArrayTexture?W.compressedTexSubImage3D(ue,jt,se,qe,En,ie,Yt,re,Ze,fn.data):W.texSubImage3D(ue,jt,se,qe,En,ie,Yt,re,Ze,On,fn):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,jt,se,qe,ie,Yt,Ze,On,fn.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,jt,se,qe,fn.width,fn.height,Ze,fn.data):W.texSubImage2D(W.TEXTURE_2D,jt,se,qe,ie,Yt,Ze,On,fn);W.pixelStorei(W.UNPACK_ROW_LENGTH,xn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ye),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ci),W.pixelStorei(W.UNPACK_SKIP_ROWS,Di),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ui),jt===0&&tt.generateMipmaps&&W.generateMipmap(ue),fe.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){V=0,st=0,lt=null,fe.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=pn._getDrawingBufferColorSpace(t),i.unpackColorSpace=pn._getUnpackColorSpace()}}const Uc=.0002959122083,KT=24612315e-1,QT=Date.UTC(2026,6,10),JT=(KT-2451545)/36525,$T=["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"],$v={Sun:1,Mercury:166e-9,Venus:245e-8,Earth:3e-6,Mars:323e-9,Jupiter:954e-6,Saturn:286e-6,Uranus:436e-7,Neptune:515e-7,Pluto:655e-11},tA={Mercury:{a:[.38709927,37e-8],e:[.20563593,1906e-8],I:[7.00497902,-.00594749],L:[252.2503235,149472.67411175],varpi:[77.45779628,.16047689],Omega:[48.33076593,-.12534081]},Venus:{a:[.72333566,39e-7],e:[.00677672,-4107e-8],I:[3.39467605,-7889e-7],L:[181.9790995,58517.81538729],varpi:[131.60246718,.00268329],Omega:[76.67984255,-.27769418]},Earth:{a:[1.00000261,562e-8],e:[.01671123,-4392e-8],I:[-1531e-8,-.01294668],L:[100.46457166,35999.37244981],varpi:[102.93768193,.32327364],Omega:[0,0]},Mars:{a:[1.52371034,1847e-8],e:[.0933941,7882e-8],I:[1.84969142,-.00813131],L:[-4.55343205,19140.30268499],varpi:[-23.94362959,.44441088],Omega:[49.55953891,-.29257343]},Jupiter:{a:[5.202887,-11607e-8],e:[.04838624,-13253e-8],I:[1.30439695,-.00183714],L:[34.39644051,3034.74612775],varpi:[14.72847983,.21252668],Omega:[100.47390909,.20469106]},Saturn:{a:[9.53667594,-.0012506],e:[.05386179,-50991e-8],I:[2.48599187,.00193609],L:[49.95424423,1222.49362201],varpi:[92.59887831,-.41897216],Omega:[113.66242448,-.28867794]},Uranus:{a:[19.18916464,-.00196176],e:[.04725744,-4397e-8],I:[.77263783,-.00242939],L:[313.23810451,428.48202785],varpi:[170.9542763,.40805281],Omega:[74.01692503,.04240589]},Neptune:{a:[30.06992276,26291e-8],e:[.00859048,5105e-8],I:[1.77004347,35372e-8],L:[-55.12002969,218.45945325],varpi:[44.96476227,-.32241464],Omega:[131.78422574,-.00508664]},Pluto:{a:[39.48211675,-31596e-8],e:[.2488273,517e-7],I:[17.14001206,4818e-8],L:[238.92903833,145.20780515],varpi:[224.06891629,-.04062942],Omega:[110.30393684,-.01183482]}},pf=Math.PI/180,Lf=Math.PI*2,Sc=r=>(r%=Lf,r<0?r+Lf:r);function eA(r,t){let i=t<.8?r:Math.PI;for(let s=0;s<12;s++){const l=i-t*Math.sin(i)-r,c=1-t*Math.cos(i),f=l/c;if(i-=f,Math.abs(f)<1e-13)break}return i}function nA(r,t,i,s,l,c,f){const p=eA(Sc(c),t),m=Math.cos(p),d=Math.sin(p),g=Math.sqrt(1-t*t),x=r*(m-t),_=r*g*d,y=Math.sqrt(f/(r*r*r)),b=1-t*m,C=-r*y*d/b,M=r*y*g*m/b,v=Math.cos(s),D=Math.sin(s),I=Math.cos(i),N=Math.sin(i),z=Math.cos(l),H=Math.sin(l),k=v*z-D*H*I,T=-v*H-D*z*I,L=D*z+v*H*I,ht=-D*H+v*z*I,V=H*N,st=z*N;return{x:k*x+T*_,y:L*x+ht*_,z:V*x+st*_,vx:k*C+T*M,vy:L*C+ht*M,vz:V*C+st*M}}function iA(r=JT){const t=[{name:"Sun",m:1,x:0,y:0,z:0,vx:0,vy:0,vz:0}];for(const d of $T){if(d==="Sun")continue;const g=tA[d],x=g.a[0]+g.a[1]*r,_=g.e[0]+g.e[1]*r,y=(g.I[0]+g.I[1]*r)*pf,b=(g.L[0]+g.L[1]*r)*pf,C=(g.varpi[0]+g.varpi[1]*r)*pf,M=(g.Omega[0]+g.Omega[1]*r)*pf,v=C-M,D=b-C,I=Uc*(1+$v[d]),N=nA(x,_,y,M,v,D,I);t.push({name:d,m:$v[d],...N})}let i=0,s=0,l=0,c=0,f=0,p=0,m=0;for(const d of t)i+=d.m,s+=d.m*d.vx,l+=d.m*d.vy,c+=d.m*d.vz,f+=d.m*d.x,p+=d.m*d.y,m+=d.m*d.z;for(const d of t)d.vx-=s/i,d.vy-=l/i,d.vz-=c/i,d.x-=f/i,d.y-=p/i,d.z-=m/i;return t}const tx=1e-10,pm=Math.cbrt(2),ex=1/(2-pm),aA=-pm/(2-pm);class sA{bodies;t=0;ax;ay;az;constructor(t){this.bodies=t??iA();const i=this.bodies.length;this.ax=new Float64Array(i),this.ay=new Float64Array(i),this.az=new Float64Array(i),this.computeAccel()}computeAccel(){const t=this.bodies,i=t.length,s=this.ax,l=this.ay,c=this.az;s.fill(0),l.fill(0),c.fill(0);for(let f=0;f<i;f++){const p=t[f];for(let m=f+1;m<i;m++){const d=t[m],g=d.x-p.x,x=d.y-p.y,_=d.z-p.z,y=g*g+x*x+_*_+tx,b=Uc/(y*Math.sqrt(y)),C=b*d.m,M=b*p.m;s[f]+=g*C,l[f]+=x*C,c[f]+=_*C,s[m]-=g*M,l[m]-=x*M,c[m]-=_*M}}}kdk(t){const i=this.bodies,s=i.length,l=this.ax,c=this.ay,f=this.az,p=t/2;for(let m=0;m<s;m++){const d=i[m];d.vx+=l[m]*p,d.vy+=c[m]*p,d.vz+=f[m]*p}for(let m=0;m<s;m++){const d=i[m];d.x+=d.vx*t,d.y+=d.vy*t,d.z+=d.vz*t}this.computeAccel();for(let m=0;m<s;m++){const d=i[m];d.vx+=l[m]*p,d.vy+=c[m]*p,d.vz+=f[m]*p}}step(t){this.kdk(ex*t),this.kdk(aA*t),this.kdk(ex*t)}advance(t,i=.25,s=1600){if(!(t>0))return 0;let l=Math.ceil(t/i);l>s&&(l=s,t=l*i);const c=t/l;for(let f=0;f<l;f++)this.step(c);return this.t+=t,t}energy(){const t=this.bodies,i=t.length;let s=0;for(let l=0;l<i;l++){const c=t[l];s+=.5*c.m*(c.vx*c.vx+c.vy*c.vy+c.vz*c.vz);for(let f=l+1;f<i;f++){const p=t[f],m=p.x-c.x,d=p.y-c.y,g=p.z-c.z;s-=Uc*c.m*p.m/Math.sqrt(m*m+d*d+g*g+tx)}}return s}}function nx(r,t,i,s,l,c,f){const p=Math.sqrt(r*r+t*t+i*i),m=s*s+l*l+c*c,d=t*c-i*l,g=i*s-r*c,x=r*l-t*s,_=Math.sqrt(d*d+g*g+x*x),y=r*s+t*l+i*c,b=m/f-1/p,C=y/f,M=b*r-C*s,v=b*t-C*l,D=b*i-C*c,I=Math.sqrt(M*M+v*v+D*D),N=1/(2/p-m/f),z=Math.acos(Math.min(1,Math.max(-1,x/_))),H=-g,k=d,T=Math.sqrt(H*H+k*k),L=T>1e-12?Math.atan2(k,H):0;let ht,V;if(I>1e-9){T>1e-12?ht=Math.atan2((D*(d*d+g*g)+x*(H*v-k*M))/(T*_),(H*M+k*v)/T):ht=Math.atan2(v,M);const st=(M*r+v*t+D*i)/(I*p);V=Math.acos(Math.min(1,Math.max(-1,st))),y<0&&(V=Lf-V)}else ht=0,V=Math.atan2(t,r);return{a:N,e:I,i:z,Omega:Sc(L),w:Sc(ht),nu:Sc(V),varpi:Sc(L+ht)}}function rA(r,t){const i=Math.floor(t.length/3);if(!(r.a>0)||!(r.e>=0)||r.e>=.999999||!isFinite(r.a))return!1;const s=Math.cos(r.Omega),l=Math.sin(r.Omega),c=Math.cos(r.i),f=Math.sin(r.i),p=Math.cos(r.w),m=Math.sin(r.w),d=s*p-l*m*c,g=-s*m-l*p*c,x=l*p+s*m*c,_=-l*m+s*p*c,y=m*f,b=p*f,C=r.a*(1-r.e*r.e);for(let M=0;M<i;M++){const v=M/i*Lf,D=C/(1+r.e*Math.cos(v)),I=D*Math.cos(v),N=D*Math.sin(v);t[3*M]=d*I+g*N,t[3*M+1]=x*I+_*N,t[3*M+2]=y*I+b*N}return!0}const oA="/SolarHarmonicsConsole/assets/Earth_from_Space_1773586048704-9rjcG3YA.jpg",lA="/SolarHarmonicsConsole/assets/Earth_30_year_comparison_pillars_1773586048704-Dg86GCIW.jpg",We=(r,t,i)=>Math.max(t,Math.min(i,r)),fa=r=>r*Math.PI/180,Ne=(r,t,i)=>r+(t-r)*i,mr=()=>{let r=0,t=0;for(;r===0;)r=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*t)},cA="https://www.solarsystemscope.com/textures/download",Bf="https://cdn.jsdelivr.net/npm/three-globe@2.34.0/example/img",uA="https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images",bf="/SolarHarmonicsConsole/textures",fA={Mercury:[`${bf}/mercury_4k.jpg`],Venus:[`${bf}/venus_4k.jpg`],Mars:[`${bf}/mars_4k.jpg`,`${uA}/marsmap1k.jpg`]},hA=new Set(["Jupiter","Saturn","Uranus","Neptune","Pluto"]),dA=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"],pA={Sun:{kind:"G2V Main-Sequence Star",blurb:"The star at the heart of our solar system, holding 99.86% of its total mass. A churning ball of hydrogen plasma powered by nuclear fusion, the Sun converts about 4 million tonnes of matter into energy every second — the light that drives weather, ocean currents, and photosynthesis on Earth.",stats:[["Diameter","1,392,700 km (109 × Earth)"],["Mass","1.99 × 10³⁰ kg (333,000 × Earth)"],["Surface temp","5,505 °C"],["Core temp","~15,000,000 °C"],["Rotation period","~25.4 days (equator)"],["Composition","≈73% hydrogen, 25% helium"],["Age","~4.6 billion years"]]},Mercury:{kind:"Terrestrial Planet",blurb:"The smallest planet and the closest to the Sun, Mercury is a cratered, airless world that looks much like our Moon. Shown in MESSENGER’s enhanced color, which exaggerates subtle mineral differences across its surface. With almost no atmosphere to trap heat, it endures the most extreme temperature swings in the solar system — scorching days and frigid nights.",stats:[["Diameter","4,879 km"],["Mass","3.30 × 10²³ kg"],["Distance from Sun","57.9 M km (0.39 AU)"],["Year length","88 Earth days"],["Day (rotation)","58.6 Earth days"],["Surface temp","−173 to 427 °C"],["Moons","0"]]},Venus:{kind:"Terrestrial Planet",blurb:"Venus is Earth’s hostile twin — nearly the same size, but wrapped in a crushing carbon-dioxide atmosphere topped with clouds of sulfuric acid. A runaway greenhouse effect makes it the hottest planet, and it spins backwards so slowly that its day outlasts its year.",stats:[["Diameter","12,104 km"],["Mass","4.87 × 10²⁴ kg"],["Distance from Sun","108.2 M km (0.72 AU)"],["Year length","224.7 Earth days"],["Day (rotation)","243 Earth days (retrograde)"],["Surface temp","464 °C (hottest planet)"],["Surface pressure","92 × Earth"],["Moons","0"]]},Earth:{kind:"Terrestrial Planet",blurb:"Our home — the only world known to harbor life. Liquid water covers 71% of its surface, a global magnetic field and thick atmosphere shield it from radiation, and plate tectonics continually resurface it. Its large Moon steadies the axial tilt that gives us stable seasons.",stats:[["Diameter","12,742 km"],["Mass","5.97 × 10²⁴ kg"],["Distance from Sun","149.6 M km (1.00 AU)"],["Year length","365.25 days"],["Day (rotation)","23.9 hours"],["Average temp","15 °C"],["Axial tilt","23.4°"],["Moons","1 (the Moon)"]]},Mars:{kind:"Terrestrial Planet",blurb:"The Red Planet owes its color to iron-oxide dust. Mars hosts the solar system’s tallest volcano, Olympus Mons, and a canyon system that would stretch across the United States. Dry riverbeds and minerals show it was once warm and wet — the prime target in the search for past life.",stats:[["Diameter","6,779 km"],["Mass","6.42 × 10²³ kg"],["Distance from Sun","227.9 M km (1.52 AU)"],["Year length","687 Earth days"],["Day (rotation)","24.6 hours"],["Average temp","−63 °C"],["Moons","2 (Phobos & Deimos)"]]},Jupiter:{kind:"Gas Giant",blurb:"The giant of the solar system — more than twice as massive as all the other planets combined. Its banded clouds churn with storms, including the Great Red Spot, a tempest wider than Earth that has raged for centuries. Its huge family of moons is a miniature planetary system.",stats:[["Diameter","139,820 km (11 × Earth)"],["Mass","1.90 × 10²⁷ kg (318 × Earth)"],["Distance from Sun","778.5 M km (5.20 AU)"],["Year length","11.9 Earth years"],["Day (rotation)","9.9 hours (fastest)"],["Cloud-top temp","−108 °C"],["Moons","95 known"]]},Saturn:{kind:"Gas Giant",blurb:"The jewel of the solar system, ringed by billions of ice fragments spanning some 282,000 km yet only tens of meters thick. Saturn is the least dense planet — lighter than water — and its moon family includes Titan, the only moon with a thick atmosphere.",stats:[["Diameter","116,460 km (9.4 × Earth)"],["Mass","5.68 × 10²⁶ kg (95 × Earth)"],["Distance from Sun","1.43 B km (9.54 AU)"],["Year length","29.4 Earth years"],["Day (rotation)","10.7 hours"],["Cloud-top temp","−139 °C"],["Ring span","~282,000 km"],["Moons","274 known (most of any planet)"]]},Uranus:{kind:"Ice Giant",blurb:"Uranus rolls around the Sun on its side — tipped almost 98°, likely by an ancient giant impact — so its poles take turns facing the Sun for 42 years at a time. In true color a shroud of haze above its methane clouds mutes it to a pale, milky cyan, hiding faint bands, bright storm clouds, and the occasional dark spot. It has the coldest atmosphere of any planet.",stats:[["Diameter","50,724 km (4 × Earth)"],["Mass","8.68 × 10²⁵ kg (14.5 × Earth)"],["Distance from Sun","2.87 B km (19.2 AU)"],["Year length","84 Earth years"],["Day (rotation)","17.2 hours (retrograde)"],["Cloud-top temp","−197 °C (coldest atmosphere)"],["Axial tilt","97.8°"],["Moons","28 known"]]},Neptune:{kind:"Ice Giant",blurb:"The most distant planet, discovered in 1846 by mathematics before it was seen through a telescope. In true color it is a pale, milky blue-green — much like Uranus — streaked by methane cirrus and dark storms like the Great Dark Spot. Despite receiving the least sunlight, Neptune hosts the fastest winds in the solar system — supersonic jets reaching 2,100 km/h.",stats:[["Diameter","49,244 km (3.9 × Earth)"],["Mass","1.02 × 10²⁶ kg (17 × Earth)"],["Distance from Sun","4.50 B km (30.1 AU)"],["Year length","164.8 Earth years"],["Day (rotation)","16.1 hours"],["Cloud-top temp","−201 °C"],["Winds","up to 2,100 km/h (fastest)"],["Moons","16 known"]]},Pluto:{kind:"Dwarf Planet",blurb:"The king of the Kuiper Belt, demoted from full planethood in 2006 but no less fascinating. New Horizons revealed a world with a vast heart-shaped nitrogen glacier, blue atmospheric haze, and mountains of water ice. Its moon Charon is so large the two orbit like a double world.",stats:[["Diameter","2,377 km (0.19 × Earth)"],["Mass","1.31 × 10²² kg"],["Distance from Sun","5.9 B km avg (39.5 AU)"],["Year length","248 Earth years"],["Day (rotation)","6.4 Earth days (retrograde)"],["Surface temp","−229 °C"],["Moons","5 (incl. Charon)"]]}},mA=`${Bf}/earth-night.jpg`,gA=`${Bf}/earth-water.png`,_A=`${Bf}/earth-topology.png`,vA=`
  varying vec2 vUv;
  varying vec3 vNormal;
  void main(){
    vUv = uv;
    vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,xA=`
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
`,MA=`
  varying vec2 vUv;
  varying vec3 vVNormal;
  void main(){
    vUv = uv;
    vVNormal = normalMatrix * normal; // view-space normal
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,SA=`
  uniform sampler2D uMap;
  uniform float uDim;
  varying vec2 vUv;
  varying vec3 vVNormal;
  void main(){
    vec3 n = normalize(vVNormal);
    // Soft key light from the viewer's upper-left (view space), like the
    // New Horizons full-disk portrait: the disk rolls off into shadow toward
    // the lower-right limb instead of shading uniformly like a full moon.
    vec3 lightDir = normalize(vec3(-0.48, 0.40, 0.62));
    float day = smoothstep(-0.05, 0.60, dot(n, lightDir));
    // Gentle radial limb darkening on top; n.z is the facing-camera term.
    float limb = mix(0.60, 1.0, pow(clamp(n.z, 0.0, 1.0), 0.5));
    float shade = (0.12 + 0.88 * day) * limb;
    vec3 col = texture2D(uMap, vUv).rgb * shade * uDim;
    gl_FragColor = vec4(col, 1.0);
    // Match MeshBasicMaterial's output pipeline (ACES tone map + sRGB encode)
    // so the authored texture colors survive; without these the raw linear
    // values render far too dark.
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,yA=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  void main(){
    vUv = uv;
    vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,bA=`
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
`;function EA(){const r=Gn.useRef(null),t=Gn.useRef(0),i=1,s=4e3,[l,c]=Gn.useState(30),[f,p]=Gn.useState(()=>wA(30,i,s)),m=Gn.useRef(l);Gn.useEffect(()=>{m.current=l},[l]);const[d,g]=Gn.useState(12e3),x=Gn.useRef(d);Gn.useEffect(()=>{x.current=d},[d]);const[_,y]=Gn.useState(6e4),b=Gn.useRef(_);Gn.useEffect(()=>{b.current=_},[_]);const C=Gn.useRef(-Math.PI/4),M=Gn.useRef(.5),v=Gn.useRef(620),D=dA,[I,N]=Gn.useState("Earth"),[z,H]=Gn.useState(1),[k,T]=Gn.useState(0),L=Gn.useRef(null),ht=Gn.useRef({}),[V,st]=Gn.useState(null),lt=Gn.useRef(null),St=Gn.useRef(null),[at,F]=Gn.useState(!1);return Gn.useEffect(()=>{const B=r.current,dt=B.clientWidth||window.innerWidth,Et=B.clientHeight||window.innerHeight;let U;try{U=new ZT({antialias:!0})}catch{F(!0);return}U.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),U.setSize(dt,Et),U.outputColorSpace=yn,U.toneMapping=_m,U.toneMappingExposure=1.4,B.appendChild(U.domElement);const $=new Ey;$.background=new $e(0);const ot=new ha(60,dt/Et,.1,12e4);$.userData._spinUpdates=[];const vt=30,Zt=365.25,pe=vt*1,nt=new sA,Pt={};nt.bodies.forEach((P,q)=>{Pt[P.name]=q});const _t=nt.bodies[Pt.Sun],Re={};for(const P of D){const q=nt.bodies[Pt[P]];Re[P]={x:q.x-_t.x,y:q.y-_t.y,z:q.z-_t.z,vx:q.vx-_t.vx,vy:q.vy-_t.vy,vz:q.vz-_t.vz}}const ye=P=>{const q=nt.bodies[Pt[P]];return{x:q.x-_t.x,y:q.y-_t.y,z:q.z-_t.z,vx:q.vx-_t.vx,vy:q.vy-_t.vy,vz:q.vz-_t.vz}},be=(P,q)=>{const Z=nt.bodies[Pt[P]];q.set((Z.x-_t.x)*vt,(Z.z-_t.z)*vt,(Z.y-_t.y)*vt)},Bn=P=>{const q=ye(P);return nx(q.x,q.y,q.z,q.vx,q.vy,q.vz,Uc*(1+nt.bodies[Pt[P]].m))},ze={};for(const P of D)ze[P]=Bn(P);const tn=()=>{const P=ye("Jupiter");return Math.atan2(P.y,P.x)},en={Mercury:1,Venus:1.8,Earth:2.2,Mars:1.6,Jupiter:5.6,Saturn:4.8,Uranus:3.4,Neptune:3.1,Pluto:2.4},ge=P=>(sn.push(()=>P.dispose()),P),sn=[];(()=>{const P=document.createElement("canvas"),q=64;P.width=P.height=q;const Z=P.getContext("2d").createRadialGradient(q/2,q/2,0,q/2,q/2,q/2);Z.addColorStop(0,"#fff"),Z.addColorStop(1,"#fff0");const A=P.getContext("2d");A.fillStyle=Z,A.fillRect(0,0,q,q);const X=ge(new Si(P));return X.colorSpace=yn,X.needsUpdate=!0,X})();const W=(P,q,Z=110)=>{const X=document.createElement("canvas");X.width=X.height=256;const Mt=X.getContext("2d");Mt.fillStyle=P,Mt.fillRect(0,0,256,256),Mt.globalAlpha=.25,Mt.fillStyle=q;for(let J=0;J<Z;J++){const pt=(Math.random()*.06+.02)*256,bt=Math.random()*256,Ot=Math.random()*256;Mt.beginPath(),Mt.arc(bt,Ot,pt,0,Math.PI*2),Mt.fill()}Mt.globalAlpha=1;const Ct=ge(new Si(X));return Ct.colorSpace=yn,Ct.needsUpdate=!0,Ct},zn=P=>{const Z=document.createElement("canvas");Z.width=Z.height=256;const A=Z.getContext("2d"),X=256/P.length;P.forEach((Ct,J)=>{A.fillStyle=Ct,A.fillRect(0,J*X,256,X)});const Mt=ge(new Si(Z));return Mt.colorSpace=yn,Mt.needsUpdate=!0,Mt},rn=()=>{const q=document.createElement("canvas");q.width=q.height=256;const Z=q.getContext("2d");Z.fillStyle="#2764cc",Z.fillRect(0,0,256,256),Z.fillStyle="#4caf50",Z.globalAlpha=.95;for(let X=0;X<80;X++){const Mt=(Math.random()*.08+.03)*256,Ct=Math.random()*256,J=Math.random()*256;Z.beginPath(),Z.arc(Ct,J,Mt,0,Math.PI*2),Z.fill()}Z.globalAlpha=1;const A=ge(new Si(q));return A.colorSpace=yn,A.needsUpdate=!0,A},on=P=>{switch(P){case"Mercury":return Os();case"Venus":return Ga();case"Earth":return rn();case"Mars":return W("#d16b3e","#7a3e26");case"Jupiter":return zn(["#caa376","#e1c8a8","#b68955","#e6d3b7","#ad7a49","#dcc29f","#bf915f"]);case"Saturn":return as();case"Uranus":return Yi();case"Neptune":return pa();case"Pluto":return $i();default:return W("#cdcac7","#a09d9b")}},fe=new jy;fe.crossOrigin="anonymous";const O=(P,q)=>{let Z=0;const A=()=>{if(Z>=P.length)return;const X=P[Z++];fe.load(X,Mt=>{Mt.colorSpace=yn,Mt.anisotropy=U.capabilities.getMaxAnisotropy(),Mt.needsUpdate=!0,ge(Mt),q(Mt)},void 0,()=>A())};A()},E=()=>{const Z=document.createElement("canvas");Z.width=2048,Z.height=8;const A=Z.getContext("2d");A.clearRect(0,0,2048,8);const X=J=>.5+.2*Math.sin(J*831.7)+.16*Math.sin(J*407.3+1.7)+.12*Math.sin(J*1723.9+.6)+.08*Math.sin(J*263.1+2.9),Mt=J=>{let pt=0,bt=200,Ot=1;const wt=X(J);if(J<.031)pt=0;else if(J<.288){const zt=(J-.031)/.257;pt=.24+.24*zt+.1*(wt-.5),bt=158+34*zt+22*(wt-.5),Ot=.92,Math.abs(J-.115)<.004&&(pt*=.3),Math.abs(J-.236)<.004&&(pt*=.3)}else if(J<.664){const zt=(J-.288)/.376;pt=.88+.12*(wt-.2),bt=205+34*wt-12*zt,Ot=1,Math.abs(J-.3)<.006&&(bt-=26)}else if(J<.735)pt=.05,bt=120,Math.abs(J-.695)<.006&&(pt=.2,bt=150);else if(J<.947){const zt=(J-.735)/.212;pt=.6+.1*(wt-.5)-.1*zt,bt=188+22*wt-10*zt,Ot=.97,Math.abs(J-.897)<.005&&(pt*=.06),Math.abs(J-.938)<.0022&&(pt*=.15)}else if(J<.985)pt=.012,bt=120;else{const zt=Math.abs(J-.9915);pt=zt<.0035?.55*(1-zt/.0035):0,bt=225}return J>.9995&&(pt=0),[Math.max(0,Math.min(1,pt)),bt,Ot]};for(let J=0;J<2048;J++){const pt=J/2047,[bt,Ot,wt]=Mt(pt);A.fillStyle=`rgba(${Ot|0},${Ot*.93*wt|0},${Ot*.8*wt|0},${bt.toFixed(3)})`,A.fillRect(J,0,1,8)}const Ct=ge(new Si(Z));return Ct.colorSpace=yn,Ct.needsUpdate=!0,Ct},Q=()=>{const Z=document.createElement("canvas");Z.width=1024,Z.height=8;const A=Z.getContext("2d");A.clearRect(0,0,1024,8);const X=[.08,.2,.33,.45,.58,.7,.8];for(let Ct=0;Ct<1024;Ct++){const J=Ct/1023;let pt=.02+.012*Math.sin(J*44),bt=140;for(const Ot of X){const wt=Math.abs(J-Ot);if(wt<.01){const zt=1-wt/.01;pt=Math.max(pt,.3*zt),bt=120}}{const Ot=Math.abs(J-.93);if(Ot<.028){const wt=1-Ot/.028;pt=Math.max(pt,.95*wt),bt=215}}(J<.01||J>.995)&&(pt=0),A.fillStyle=`rgba(${bt|0},${bt*.94|0},${bt*.92|0},${Math.max(0,pt).toFixed(3)})`,A.fillRect(Ct,0,1,8)}const Mt=ge(new Si(Z));return Mt.colorSpace=yn,Mt.needsUpdate=!0,Mt},Tt=new Jy(263176,.02);$.add(Tt);const At=new Qy(16775399,2,0,2);$.add(At);const xt=ze.Mercury.a*(1-ze.Mercury.e)*vt,Kt=Math.max(2.5,Math.min(xt*.6,vt*.8)),qt=new al(Kt,64,48),xe=Vf(),Ee=new qi(qt,xe);Ee.name="Sun",$.add(Ee);const It=new hv(new Sf({map:Hf(),color:16777215,blending:yc,transparent:!0,depthWrite:!1}));It.scale.setScalar(xt*.9),$.add(It);const Vt=Gf(),ae=new il;$.add(ae);const le=90,Jt=[],Le=[],j=[],Wt=[];for(let P=0;P<le;P++){const q=new Sf({map:Vt,color:16756848,blending:yc,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1}),Z=new hv(q);Z.scale.setScalar(.01),Jt.push(Z),Le.push(0),j.push(0),Wt.push(new K),ae.add(Z)}const kt=vt*(.3871-.02),ne=()=>{const P=Le.findIndex(J=>J<=0);if(P<0)return;const q=Math.random()*Math.PI*2,Z=Math.random()*Math.PI/7-Math.PI/14,A=new K(Math.cos(q)*Math.cos(Z),Math.sin(Z),Math.sin(q)*Math.cos(Z)),X=8.6+Math.random()*2,Mt=Jt[P];Mt.position.copy(A.clone().multiplyScalar(X));const Ct=Mt.material||new Sf({map:Vt});Ct.opacity=.85,Mt.material=Ct,Mt.scale.setScalar(Ne(2,5,Math.random())),Le[P]=1e-6,j[P]=.9+Math.random()*1.2,Wt[P].copy(A).multiplyScalar(7+Math.random()*12)},Bt=P=>{const q=Math.PI*2;return P%=q,P<0?P+q:P},yt=(P,q)=>{let Z=q<.8?P:Math.PI;for(let A=0;A<6;A++){const X=Z-q*Math.sin(Z)-P,Mt=1-q*Math.cos(Z);Z-=X/Mt}return Z},oe=(P,q)=>{const Z=Math.sin(P),A=Math.sin(2*P);return P+2*q*Z+1.25*q*q*A},ve={},ln={},nn=512,wi=new Float32Array(nn*3),Wn=P=>{const q=ln[P];if(!q)return;const Z=ze[P]=Bn(P),A=rA(Z,wi);if(q.visible=A,!A)return;const X=q.geometry.getAttribute("position"),Mt=X.array;for(let Ct=0;Ct<nn;Ct++)Mt[3*Ct]=wi[3*Ct]*vt,Mt[3*Ct+1]=wi[3*Ct+2]*vt,Mt[3*Ct+2]=wi[3*Ct+1]*vt;X.needsUpdate=!0},ei=P=>{if(ln[P])return;const q=new li,Z=new Vn(new Float32Array(nn*3),3);Z.setUsage(Fu),q.setAttribute("position",Z);const A=new cm({color:P==="Pluto"?9148072:5661043}),X=new vv(q,A);X.frustumCulled=!1,$.add(X),ln[P]=X,Wn(P)},bn={dayMap:{value:new ai},nightMap:{value:new ai},specMap:{value:new ai},bumpMap:{value:new ai},sunDir:{value:new K(1,0,0)},camPos:{value:new K},uBumpScale:{value:.008}},wa=P=>{const q=document.createElement("canvas");q.width=q.height=4;const Z=q.getContext("2d");Z.fillStyle="#"+P.toString(16).padStart(6,"0"),Z.fillRect(0,0,4,4);const A=ge(new Si(q));return A.colorSpace=yn,A};bn.dayMap.value=on("Earth"),bn.nightMap.value=wa(328976),bn.specMap.value=wa(0);const zi=P=>{let q=P>>>0;return()=>(q=q*1664525+1013904223>>>0,q/4294967296)},pi=(P,q=10)=>{const Z=zi(P),A=[];let X=0;for(let Mt=0;Mt<q;Mt++){const Ct=1/(1+Mt*.5);X+=Ct,A.push({fx:1+Math.floor(Z()*(2+Mt*1.5)),fy:.5+Z()*(1.5+Mt*1.2),ph:Z()*Math.PI*2,ph2:Z()*Math.PI*2,amp:Ct})}return(Mt,Ct)=>{let J=0;for(const pt of A)J+=Math.sin(Mt*Math.PI*2*pt.fx+Math.sin(Ct*Math.PI*2*pt.fy+pt.ph2)*1.8+pt.ph)*pt.amp;return J/X}},Qn=(P,q,Z)=>{for(const A of[-q,0,q])P.save(),P.translate(A,0),Z(),P.restore()},Os=()=>{const Z=document.createElement("canvas");Z.width=2048,Z.height=1024;const A=Z.getContext("2d"),X=zi(20261),Mt=pi(11,7),Ct=pi(23,10),J=512,pt=256,bt=document.createElement("canvas");bt.width=J,bt.height=pt;const Ot=bt.getContext("2d"),wt=Ot.createImageData(J,pt),zt=[191,139,82],te=[118,108,121],$t=[47,60,110];for(let Dt=0;Dt<pt;Dt++)for(let Xt=0;Xt<J;Xt++){const Gt=Xt/J,Lt=Dt/pt,Qt=Mt(Gt,Lt),Ft=Ct(Gt*3,Lt*3);let de,we,Ie;if(Qt>.08){const Be=Math.min(1,(Qt-.08)/.3);de=Ne(te[0],zt[0],Be),we=Ne(te[1],zt[1],Be),Ie=Ne(te[2],zt[2],Be)}else if(Qt<-.08){const Be=Math.min(1,(-Qt-.08)/.3);de=Ne(te[0],$t[0],Be),we=Ne(te[1],$t[1],Be),Ie=Ne(te[2],$t[2],Be)}else de=te[0],we=te[1],Ie=te[2];const mn=1+Ft*.22-(Math.abs(Lt-.5)>.42?.08:0),Ke=4*(Dt*J+Xt);wt.data[Ke]=We(de*mn,0,255),wt.data[Ke+1]=We(we*mn,0,255),wt.data[Ke+2]=We(Ie*mn,0,255),wt.data[Ke+3]=255}Ot.putImageData(wt,0,0),A.imageSmoothingEnabled=!0,A.drawImage(bt,0,0,2048,1024);for(let Dt=0;Dt<26e3;Dt++){const Xt=X()*2048,Gt=X()*1024,Lt=X()<.8?1:2;A.fillStyle=X()<.45?"rgba(232,226,214,0.05)":"rgba(24,28,44,0.055)",A.fillRect(Xt,Gt,Lt,Lt)}Qn(A,2048,()=>{const Lt=A.createRadialGradient(1351.68,245.76,0,1351.68,245.76,174.08);Lt.addColorStop(0,"rgba(214,156,92,0.9)"),Lt.addColorStop(.75,"rgba(206,148,88,0.55)"),Lt.addColorStop(1,"rgba(206,148,88,0)"),A.fillStyle=Lt,A.beginPath(),A.ellipse(1351.68,245.76,174.08*1.35,174.08,0,0,Math.PI*2),A.fill(),A.strokeStyle="rgba(120,96,80,0.28)",A.lineWidth=5,A.beginPath(),A.ellipse(1351.68,245.76,174.08*1.3,174.08*.96,0,0,Math.PI*2),A.stroke()});for(let Dt=0;Dt<1400;Dt++){const Xt=X()*2048,Gt=1024*(.03+X()*.94),Lt=(Gt/1024-.5)*Math.PI,Qt=Math.min(3.2,1/Math.max(.28,Math.cos(Lt))),Ft=X()<.8?1.5+X()*6:7+X()*16;Qn(A,2048,()=>{A.globalAlpha=.14+X()*.14,A.fillStyle=X()<.5?"#1f2740":"#372f28",A.beginPath(),A.ellipse(Xt,Gt,Ft*Qt,Ft,0,0,Math.PI*2),A.fill(),A.globalAlpha=.08+X()*.08,A.fillStyle="#9a917f",A.beginPath(),A.ellipse(Xt,Gt,Ft*Qt*.6,Ft*.6,0,0,Math.PI*2),A.fill(),A.globalAlpha=.2+X()*.16,A.strokeStyle="#efe6d2",A.lineWidth=Math.max(.8,Ft*.22),A.beginPath(),A.ellipse(Xt,Gt,Ft*Qt,Ft,0,Math.PI*.75,Math.PI*1.65),A.stroke(),A.globalAlpha=.14+X()*.12,A.strokeStyle="#141a30",A.lineWidth=Math.max(.8,Ft*.2),A.beginPath(),A.ellipse(Xt,Gt,Ft*Qt,Ft,0,Math.PI*1.85,Math.PI*.55),A.stroke()})}A.globalAlpha=1;for(let Dt=0;Dt<16;Dt++){const Xt=X()*2048,Gt=1024*(.12+X()*.76),Lt=(Gt/1024-.5)*Math.PI,Qt=Math.min(3.2,1/Math.max(.28,Math.cos(Lt))),Ft=Dt===0,de=Ft?22:8+Math.floor(X()*9),we=Ft?1024*.3:1024*(.05+X()*.1);Qn(A,2048,()=>{for(let Ke=0;Ke<de;Ke++){const Be=X()*Math.PI*2,gn=we*(.5+X()*.5),Mn=9;for(let jn=1;jn<=Mn;jn++){const Hn=jn/Mn,Me=Xt+Math.cos(Be)*gn*Hn*Qt,_e=Gt+Math.sin(Be)*gn*Hn;A.globalAlpha=(Ft?.1:.085)*(1-Hn)*(.7+X()*.5),A.fillStyle="#dce6f4";const Te=(1.7-Hn)*(Ft?2.4:1.6);A.beginPath(),A.ellipse(Me,_e,Te*Qt,Te,0,0,Math.PI*2),A.fill()}}A.globalAlpha=1;const Ie=Ft?11:5,mn=A.createRadialGradient(Xt,Gt,0,Xt,Gt,Ie);mn.addColorStop(0,"rgba(236,242,250,0.9)"),mn.addColorStop(1,"rgba(236,242,250,0)"),A.fillStyle=mn,A.beginPath(),A.ellipse(Xt,Gt,Ie*Qt,Ie,0,0,Math.PI*2),A.fill()})}A.globalAlpha=1;const Ht=ge(new Si(Z));return Ht.colorSpace=yn,Ht.needsUpdate=!0,Ht},Ga=()=>{const Z=document.createElement("canvas");Z.width=1024,Z.height=512;const A=Z.getContext("2d"),X=zi(80085),Mt=pi(41,7),Ct=pi(57,10),J=256,pt=128,bt=document.createElement("canvas");bt.width=J,bt.height=pt;const Ot=bt.getContext("2d"),wt=Ot.createImageData(J,pt),zt=$t=>{const Ht=Math.sin($t*Math.PI);return[Ne(212,242,Ht),Ne(176,220,Ht),Ne(118,166,Ht)]};for(let $t=0;$t<pt;$t++)for(let Ht=0;Ht<J;Ht++){const Dt=Ht/J,Xt=$t/pt,[Gt,Lt,Qt]=zt(Xt),Ft=1+Mt(Dt,Xt)*.05+Ct(Dt*2,Xt*2)*.03,de=4*($t*J+Ht);wt.data[de]=We(Gt*Ft,0,255),wt.data[de+1]=We(Lt*Ft,0,255),wt.data[de+2]=We(Qt*Ft,0,255),wt.data[de+3]=255}Ot.putImageData(wt,0,0),A.imageSmoothingEnabled=!0,A.drawImage(bt,0,0,1024,512);for(let $t=0;$t<26;$t++){const Ht=($t+.5)/26*512,Dt=Ht/512,Xt=512/26*(.7+X()*.9),Gt=X()<.5,Lt=.04+X()*.055,Qt=(Dt<.5?1:-1)*(4+6*Math.abs(Dt-.5));for(let Ft=0;Ft<1024;Ft++){const de=Ft/1024,we=Math.sin(de*Math.PI*2*2+$t*1.9)*3+Math.sin(de*Math.PI*2*4+$t)*1.5+Math.sin(de*Math.PI*2+$t*.7)*Qt;A.fillStyle=Gt?`rgba(252,244,220,${Lt.toFixed(3)})`:`rgba(172,136,80,${Lt.toFixed(3)})`,A.fillRect(Ft,Ht-Xt/2+we,1,Xt)}}for(let $t=0;$t<14;$t++){const Ht=X()*1024,Dt=512*(.2+X()*.6),Xt=20+X()*70;Qn(A,1024,()=>{const Gt=A.createRadialGradient(Ht,Dt,0,Ht,Dt,Xt);Gt.addColorStop(0,`rgba(252,246,226,${(.05+X()*.06).toFixed(3)})`),Gt.addColorStop(1,"rgba(252,246,226,0)"),A.fillStyle=Gt,A.beginPath(),A.ellipse(Ht,Dt,Xt*1.8,Xt*.6,0,0,Math.PI*2),A.fill()})}const te=ge(new Si(Z));return te.colorSpace=yn,te.needsUpdate=!0,te},as=()=>{const Z=document.createElement("canvas");Z.width=2048,Z.height=1024;const A=Z.getContext("2d"),X=zi(60318),Mt=pi(61,8),Ct=pi(73,10),J=[[0,[138,150,144]],[.06,[158,164,148]],[.12,[182,178,142]],[.18,[205,192,148]],[.24,[186,166,116]],[.3,[220,203,152]],[.36,[199,177,122]],[.42,[228,211,160]],[.48,[232,217,168]],[.54,[209,184,128]],[.6,[224,204,148]],[.66,[199,172,112]],[.72,[214,190,130]],[.78,[192,161,100]],[.84,[205,177,116]],[.9,[186,152,92]],[1,[172,138,80]]],pt=Ht=>{for(let Dt=0;Dt<J.length-1;Dt++){const[Xt,Gt]=J[Dt],[Lt,Qt]=J[Dt+1];if(Ht<=Lt){const Ft=(Ht-Xt)/(Lt-Xt);return[Ne(Gt[0],Qt[0],Ft),Ne(Gt[1],Qt[1],Ft),Ne(Gt[2],Qt[2],Ft)]}}return J[J.length-1][1]},bt=512,Ot=256,wt=document.createElement("canvas");wt.width=bt,wt.height=Ot;const zt=wt.getContext("2d"),te=zt.createImageData(bt,Ot);for(let Ht=0;Ht<Ot;Ht++)for(let Dt=0;Dt<bt;Dt++){const Xt=Dt/bt,Gt=Ht/Ot,Lt=Mt(Xt,Gt)*.02,[Qt,Ft,de]=pt(We(Gt+Lt,0,1)),we=1+Ct(Xt*2,Gt*2)*.05,Ie=4*(Ht*bt+Dt);te.data[Ie]=We(Qt*we,0,255),te.data[Ie+1]=We(Ft*we,0,255),te.data[Ie+2]=We(de*we,0,255),te.data[Ie+3]=255}zt.putImageData(te,0,0),A.imageSmoothingEnabled=!0,A.drawImage(wt,0,0,2048,1024);for(let Ht=0;Ht<320;Ht++){const Dt=X()*1024,Xt=X()<.5;A.globalAlpha=.014+X()*.035,A.strokeStyle=Xt?"#fff8e0":"#8a6c3c",A.lineWidth=.6+X()*1.6,A.beginPath(),A.moveTo(0,Dt);for(let Gt=0;Gt<=2048;Gt+=32)A.lineTo(Gt,Dt+Math.sin(Gt/2048*Math.PI*2*4+Ht)*2);A.stroke()}A.globalAlpha=1;for(let Ht=0;Ht<7;Ht++){const Dt=X()*2048,Xt=1024*(.5+X()*.38),Gt=2+X()*5;A.globalAlpha=.1+X()*.1,A.fillStyle=Ht===0?"#7a6034":"#fff8e4",A.beginPath(),A.ellipse(Dt,Xt,Gt*2.2,Gt,0,0,Math.PI*2),A.fill()}A.globalAlpha=1;const $t=ge(new Si(Z));return $t.colorSpace=yn,$t.needsUpdate=!0,$t},Yi=()=>{const Z=document.createElement("canvas");Z.width=1024,Z.height=512;const A=Z.getContext("2d"),X=pi(91,4),Mt=256,Ct=128,J=document.createElement("canvas");J.width=Mt,J.height=Ct;const pt=J.getContext("2d"),bt=pt.createImageData(Mt,Ct);for(let wt=0;wt<Ct;wt++)for(let zt=0;zt<Mt;zt++){const te=zt/Mt,$t=wt/Ct,Ht=Math.sin($t*Math.PI);let Dt=Ne(197,173,Ht),Xt=Ne(207,198,Ht),Gt=Ne(210,206,Ht);const Lt=Math.exp(-Math.pow(($t-.8)/.085,2))*.3,Qt=Math.exp(-Math.pow(($t-1)/.12,2))*.22,Ft=Math.min(1,Lt+Qt)*.5;Dt=Ne(Dt,224,Ft),Xt=Ne(Xt,233,Ft),Gt=Ne(Gt,236,Ft);const de=1+X(te,$t)*.018,we=4*(wt*Mt+zt);bt.data[we]=We(Dt*de,0,255),bt.data[we+1]=We(Xt*de,0,255),bt.data[we+2]=We(Gt*de,0,255),bt.data[we+3]=255}pt.putImageData(bt,0,0),A.imageSmoothingEnabled=!0,A.drawImage(J,0,0,1024,512);for(const[wt,zt,te,$t]of[[.28,.3,.011,.35],[.66,.76,.012,.4],[.48,.36,.008,.25]])Qn(A,1024,()=>{const Ht=A.createRadialGradient(1024*wt,512*zt,0,1024*wt,512*zt,1024*te);Ht.addColorStop(0,`rgba(230,252,254,${$t})`),Ht.addColorStop(1,"rgba(230,252,254,0)"),A.fillStyle=Ht,A.beginPath(),A.ellipse(1024*wt,512*zt,1024*te*1.6,512*te*2.2,0,0,Math.PI*2),A.fill()});const Ot=ge(new Si(Z));return Ot.colorSpace=yn,Ot.needsUpdate=!0,Ot},pa=()=>{const Z=document.createElement("canvas");Z.width=1024,Z.height=512;const A=Z.getContext("2d"),X=zi(84630),Mt=pi(101,7),Ct=pi(113,10),J=256,pt=128,bt=document.createElement("canvas");bt.width=J,bt.height=pt;const Ot=bt.getContext("2d"),wt=Ot.createImageData(J,pt),zt=[[0,[176,200,214]],[.18,[193,215,227]],[.36,[185,209,223]],[.5,[171,197,213]],[.62,[165,191,209]],[.8,[159,185,203]],[1,[147,173,193]]],te=Dt=>{for(let Xt=0;Xt<zt.length-1;Xt++){const[Gt,Lt]=zt[Xt],[Qt,Ft]=zt[Xt+1];if(Dt<=Qt){const de=(Dt-Gt)/(Qt-Gt);return[Ne(Lt[0],Ft[0],de),Ne(Lt[1],Ft[1],de),Ne(Lt[2],Ft[2],de)]}}return zt[zt.length-1][1]};for(let Dt=0;Dt<pt;Dt++)for(let Xt=0;Xt<J;Xt++){const Gt=Xt/J,Lt=Dt/pt,[Qt,Ft,de]=te(Lt),we=1+Mt(Gt,Lt)*.09+Ct(Gt*2,Lt*2)*.04,Ie=4*(Dt*J+Xt);wt.data[Ie]=We(Qt*we,0,255),wt.data[Ie+1]=We(Ft*we,0,255),wt.data[Ie+2]=We(de*we,0,255),wt.data[Ie+3]=255}Ot.putImageData(wt,0,0),A.imageSmoothingEnabled=!0,A.drawImage(bt,0,0,1024,512),Qn(A,1024,()=>{A.save(),A.translate(409.6,317.44),A.scale(63.488,28.16);const Qt=A.createRadialGradient(0,0,0,0,0,1);Qt.addColorStop(0,"rgba(112,138,160,0.85)"),Qt.addColorStop(.55,"rgba(122,148,170,0.7)"),Qt.addColorStop(1,"rgba(122,148,170,0)"),A.fillStyle=Qt,A.beginPath(),A.arc(0,0,1,0,Math.PI*2),A.fill(),A.restore();for(let Ft=0;Ft<26;Ft++){const de=Math.PI*(.15+.7*(Ft/26)),we=409.6+Math.cos(de)*63.488*1.15,Ie=317.44+Math.sin(de)*28.16*1.35+28.16*.25;A.globalAlpha=.1+.3*Math.sin(Ft/26*Math.PI),A.fillStyle="#f2f6ff",A.beginPath(),A.ellipse(we,Ie,3+X()*7,1.2+X()*2.2,0,0,Math.PI*2),A.fill()}A.globalAlpha=1}),Qn(A,1024,()=>{const Dt=A.createRadialGradient(532.48,368.64,0,532.48,368.64,16.384);Dt.addColorStop(0,"rgba(238,244,255,0.8)"),Dt.addColorStop(1,"rgba(238,244,255,0)"),A.fillStyle=Dt,A.beginPath(),A.ellipse(1024*.52,512*.72,1024*.02,512*.014,0,0,Math.PI*2),A.fill()}),Qn(A,1024,()=>{A.save(),A.translate(696.32,409.6),A.scale(1024*.026,512*.02);const Gt=A.createRadialGradient(0,0,0,0,0,1);Gt.addColorStop(0,"rgba(116,142,164,0.75)"),Gt.addColorStop(1,"rgba(116,142,164,0)"),A.fillStyle=Gt,A.beginPath(),A.arc(0,0,1,0,Math.PI*2),A.fill(),A.restore();const Lt=A.createRadialGradient(696.32,409.6,0,696.32,409.6,1024*.008);Lt.addColorStop(0,"rgba(240,246,255,0.75)"),Lt.addColorStop(1,"rgba(240,246,255,0)"),A.fillStyle=Lt,A.beginPath(),A.arc(696.32,409.6,1024*.008,0,Math.PI*2),A.fill()});const $t=(Dt,Xt)=>{for(let Gt=0;Gt<Xt;Gt++){const Lt=X(),Qt=.05+X()*.12,Ft=512*(Dt+(X()-.5)*.05),de=1.2+X()*2.4,we=.15+X()*.18,Ie=X()*Math.PI*2,mn=Math.max(10,Math.floor(Qt*1024/8));Qn(A,1024,()=>{for(let Ke=0;Ke<=mn;Ke++){const Be=Ke/mn,gn=Lt+Qt*Be,Mn=gn*1024,jn=Ft+Math.sin(gn*Math.PI*2*6+Ie)*3+Math.sin(gn*Math.PI*2*14+Ie*2)*1.2,Hn=Math.sin(Be*Math.PI),Me=de*(.8+.5*Hn),_e=A.createRadialGradient(Mn,jn,0,Mn,jn,Me*4);_e.addColorStop(0,`rgba(238,244,255,${(we*Hn).toFixed(3)})`),_e.addColorStop(1,"rgba(238,244,255,0)"),A.fillStyle=_e,A.beginPath(),A.ellipse(Mn,jn,Me*4,Me*1.6,0,0,Math.PI*2),A.fill()}})}};$t(.33,7),$t(.44,4),$t(.68,6);const Ht=ge(new Si(Z));return Ht.colorSpace=yn,Ht.needsUpdate=!0,Ht},$i=()=>{const Z=document.createElement("canvas");Z.width=2048,Z.height=1024;const A=Z.getContext("2d"),X=zi(134340),Mt=pi(31,9),Ct=pi(47,7),J=pi(59,8),pt=pi(73,6),bt=(Me,_e,Te)=>{const Ae=We((Te-Me)/(_e-Me),0,1);return Ae*Ae*(3-2*Ae)},Ot=(Me,_e)=>{const Te=Math.abs(Me-_e);return Math.min(Te,1-Te)},wt=(Me,_e)=>{const Te=.088*Math.max(.22,1-Math.max(0,_e-.36)*2.1);return Math.exp(-(((Me-.455)/Te)**2+((_e-.455)/.145)**2)*1.55)},zt=(Me,_e)=>.82*Math.exp(-(((Me-.575)/.08)**2+((_e-.425)/.095)**2)*1.75),te=(Me,_e)=>bt(.3+.1*J(Me*2,_e*2),.58,wt(Me,_e)+zt(Me,_e)),$t=(Me,_e)=>{let Te=Math.exp(-((Ot(Me,.18)/(.17+.05*Ct(Me,_e)))**2+((_e-.555)/.075)**2)*1.35);for(const[Ae,Sn]of[[.685,.75],[.76,.9],[.835,.7],[.905,.8]])Te=Math.max(Te,Sn*Math.exp(-((Ot(Me,Ae)/.03)**2+((_e-.545)/.045)**2)*1.6));return bt(.28,.6,Te+Ct(Me*3,_e*3)*.08)*(1-te(Me,_e))},Ht=512,Dt=256,Xt=document.createElement("canvas");Xt.width=Ht,Xt.height=Dt;const Gt=Xt.getContext("2d"),Lt=Gt.createImageData(Ht,Dt),Qt=[248,242,232],Ft=[232,218,196],de=[219,183,118],we=[176,127,84],Ie=[112,70,42],mn=[124,48,26],Ke=[70,26,15];for(let Me=0;Me<Dt;Me++)for(let _e=0;_e<Ht;_e++){const Te=_e/Ht,Ae=Me/Dt,Sn=Mt(Te*2.5,Ae*2.5),mi=Mt(Te*7,Ae*7),Zn=We(.5+Sn*.7+mi*.3,0,1);let dn=Ne(Ie[0],we[0],Zn),ci=Ne(Ie[1],we[1],Zn),gi=Ne(Ie[2],we[2],Zn);const ls=bt(.3,.06,Ae)*(.75+.25*pt(Te*2,Ae*2));dn=Ne(dn,de[0],ls),ci=Ne(ci,de[1],ls),gi=Ne(gi,de[2],ls);const Gs=bt(.15,.55,Ct(Te*4,Ae*4+2))*bt(.4,.55,Ae)*(1-bt(.8,.95,Ae))*.5;dn=Ne(dn,150,Gs),ci=Ne(ci,84,Gs),gi=Ne(gi,48,Gs);const cs=$t(Te,Ae);if(cs>.003){const us=We(.45+Ct(Te*5,Ae*5)*.5,0,1);dn=Ne(dn,Ne(Ke[0],mn[0],us),cs),ci=Ne(ci,Ne(Ke[1],mn[1],us),cs),gi=Ne(gi,Ne(Ke[2],mn[2],us),cs)}const Ar=te(Te,Ae);if(Ar>.003){const us=bt(.46,.56,Te),Ml=1+Mt(Te*16,Ae*16)*.02;dn=Ne(dn,Ne(Qt[0],Ft[0],us)*Ml,Ar),ci=Ne(ci,Ne(Qt[1],Ft[1],us)*Ml,Ar),gi=Ne(gi,Ne(Qt[2],Ft[2],us)*Ml,Ar)}const vl=bt(.78,.98,Ae)*.45,xl=(dn+ci+gi)/3*.9;dn=Ne(dn,xl,vl),ci=Ne(ci,xl,vl),gi=Ne(gi,xl,vl);const lo=4*(Me*Ht+_e);Lt.data[lo]=We(dn,0,255),Lt.data[lo+1]=We(ci,0,255),Lt.data[lo+2]=We(gi,0,255),Lt.data[lo+3]=255}Gt.putImageData(Lt,0,0),A.imageSmoothingEnabled=!0,A.drawImage(Xt,0,0,2048,1024);for(let Me=0;Me<600;Me++){const _e=X(),Te=.26+X()*.42;if(te(_e,Te)<.55)continue;const Ae=9+X()*16;A.globalAlpha=.05+X()*.05,A.strokeStyle="#c9bda8",A.lineWidth=1.5+X()*1.5,A.beginPath(),A.ellipse(_e*2048,Te*1024,Ae*(.8+X()*.5),Ae*(.7+X()*.4),X()*Math.PI,0,Math.PI*2),A.stroke()}A.globalAlpha=1;let Be=0,gn=0;for(;Be<420&&gn++<4e3;){const Me=X(),_e=.04+X()*.92;if(te(Me,_e)>.3)continue;Be++;const Te=Me*2048,Ae=_e*1024,Sn=(_e-.5)*Math.PI,mi=Math.min(3.2,1/Math.max(.28,Math.cos(Sn))),Zn=X()<.82?1.5+X()*5:6+X()*13,dn=$t(Me,_e)>.5;Qn(A,2048,()=>{A.globalAlpha=.12+X()*.12,A.fillStyle=dn?"#2a100a":"#4a3220",A.beginPath(),A.ellipse(Te,Ae,Zn*mi,Zn,0,0,Math.PI*2),A.fill(),A.globalAlpha=.07+X()*.07,A.fillStyle=dn?"#8a5a40":"#a98e6c",A.beginPath(),A.ellipse(Te,Ae,Zn*mi*.6,Zn*.6,0,0,Math.PI*2),A.fill(),A.globalAlpha=.16+X()*.14,A.strokeStyle=dn?"#c69a74":"#e8dcc2",A.lineWidth=Math.max(.8,Zn*.2),A.beginPath(),A.ellipse(Te,Ae,Zn*mi,Zn,0,Math.PI*.75,Math.PI*1.65),A.stroke()})}A.globalAlpha=1;let Mn=0,jn=0;for(;Mn<14&&jn++<200;){let Me=X(),_e=.15+X()*.6;if(te(Me,_e)>.2)continue;Mn++;let Te=X()*Math.PI*2;const Ae=30+Math.floor(X()*50),Sn=1.2+X()*1.8,mi=.16+X()*.12;for(let Zn=0;Zn<Ae;Zn++){Te+=(X()-.5)*.35;const dn=Me+Math.cos(Te)*.004,ci=We(_e+Math.sin(Te)*.0022,.03,.97);if(te((dn%1+1)%1,ci)>.2)break;const gi=Me*2048,ls=_e*1024,Gs=dn*2048,cs=ci*1024;Qn(A,2048,()=>{A.globalAlpha=mi,A.strokeStyle="#3a2012",A.lineWidth=Sn,A.lineCap="round",A.beginPath(),A.moveTo(gi,ls),A.lineTo(Gs,cs),A.stroke()}),Me=dn,_e=ci}}A.globalAlpha=1;for(let Me=0;Me<46;Me++){const _e=X()*2048,Te=(.1+X()*.28)*1024,Ae=4+X()*14;Qn(A,2048,()=>{const Sn=A.createRadialGradient(_e,Te,0,_e,Te,Ae);Sn.addColorStop(0,"rgba(238,226,198,0.22)"),Sn.addColorStop(1,"rgba(238,226,198,0)"),A.fillStyle=Sn,A.beginPath(),A.ellipse(_e,Te,Ae*1.3,Ae,0,0,Math.PI*2),A.fill()})}for(let Me=0;Me<15e3;Me++){const _e=X()*2048,Te=X()*1024,Ae=X()<.8?1:2,Sn=te(_e/2048,Te/1024)>.4;A.fillStyle=Sn?X()<.5?"rgba(255,252,244,0.05)":"rgba(196,186,168,0.05)":X()<.45?"rgba(244,230,204,0.05)":"rgba(58,32,20,0.06)",A.fillRect(_e,Te,Ae,Ae)}A.globalAlpha=1;const Hn=ge(new Si(Z));return Hn.colorSpace=yn,Hn.needsUpdate=!0,Hn},ma={};for(const P of D){let q;if(P==="Earth")q=new Ii({vertexShader:yA,fragmentShader:bA,uniforms:bn});else if(hA.has(P)){const A={uMap:{value:P==="Pluto"?$i():P==="Neptune"?pa():P==="Uranus"?Yi():P==="Saturn"?as():on(P)},uDim:{value:1}};q=new Ii({vertexShader:MA,fragmentShader:SA,uniforms:A}),O([`${bf}/${P.toLowerCase()}_4k.jpg`],X=>{A.uMap.value=X})}else{const A={dayMap:{value:on(P)},sunDir:{value:new K(1,0,0)}};ma[P]=A,q=new Ii({vertexShader:vA,fragmentShader:xA,uniforms:A});const X=fA[P];X&&X.length>0&&O(X,Mt=>{A.dayMap.value=Mt})}const Z=new qi(new al(en[P],128,64),q);if(Z.name=P,be(P,Z.position),ve[P]=Z,$.add(Z),P==="Saturn"){const A=en.Saturn*1.2,X=en.Saturn*2.33,Mt=new Uf(A,X,256),Ct=Mt.attributes.position,J=Mt.attributes.uv,pt=new K;for(let wt=0;wt<Ct.count;wt++){pt.fromBufferAttribute(Ct,wt);const zt=(pt.length()-A)/(X-A);J.setXY(wt,zt,.5)}J.needsUpdate=!0;const bt=new wf({map:E(),transparent:!0,side:Fa,depthWrite:!1}),Ot=new qi(Mt,bt);Ot.rotation.x=Math.PI/2,Z.add(Ot)}if(P==="Uranus"){const A=en.Uranus*1.55,X=en.Uranus*2.02,Mt=new Uf(A,X,256),Ct=Mt.attributes.position,J=Mt.attributes.uv,pt=new K;for(let wt=0;wt<Ct.count;wt++){pt.fromBufferAttribute(Ct,wt);const zt=(pt.length()-A)/(X-A);J.setXY(wt,zt,.5)}J.needsUpdate=!0;const bt=new wf({map:Q(),transparent:!0,side:Fa,depthWrite:!1}),Ot=new qi(Mt,bt);Ot.rotation.x=Math.PI/2,Z.add(Ot),Z.rotation.z=uy.degToRad(97.77)}ei(P)}const qn=P=>{bn.dayMap.value=P};O([`${Bf}/earth-day.jpg`,`${cA}/2k_earth_daymap.jpg`,oA,lA],qn),O([mA],P=>{bn.nightMap.value=P}),O([gA],P=>{bn.specMap.value=P}),O([_A],P=>{bn.bumpMap.value=P});const Is=P=>P/149597870;let Yn=null,ga=null;function Va(){const P=ve.Earth;if(!P)return;const q=vt*Is(384400),Z=.0549,A=fa(5.145),X=fa(125.08),Mt=fa(318.15),J=2*Math.PI/27.321661,pt=new al(.58,32,24),bt=new Sv({color:12500670,roughness:.95,metalness:0}),Ot=new qi(pt,bt);Ot.name="Moon",P.add(Ot),Yn={body:Ot,a:q,e:Z,i:A,Omega:X,omega:Mt,M:0,n:J,parent:P};const wt=256,zt=new Float32Array(wt*3);for(let Ht=0;Ht<wt;Ht++){const Dt=Ht/wt*Math.PI*2,Xt=q*(1-Z*Z)/(1+Z*Math.cos(Dt));let Gt=Xt*Math.cos(Dt),Lt=Xt*Math.sin(Dt);const Qt=Math.cos(Mt),Ft=Math.sin(Mt),de=Math.cos(A),we=Math.sin(A),Ie=Math.cos(X),mn=Math.sin(X);let Ke=Gt*Qt-Lt*Ft,Be=Gt*Ft+Lt*Qt,gn=0,Mn=Ke,jn=Be*de-gn*we,Hn=Be*we+gn*de,Me=Mn*Ie-jn*mn,_e=Mn*mn+jn*Ie,Te=Hn;const Ae=3*Ht;zt[Ae]=Me,zt[Ae+1]=_e,zt[Ae+2]=Te}const te=new li;te.setAttribute("position",new Vn(zt,3));const $t=new cm({color:8037119,transparent:!0,opacity:.6});ga=new vv(te,$t),P.add(ga)}function pl(P){if(!Yn)return;Yn.M=Bt(Yn.M+Yn.n*P);const q=yt(Yn.M,Yn.e),Z=Math.sqrt((1+Yn.e)/(1-Yn.e)),A=2*Math.atan(Z*Math.tan(q/2)),X=Yn.a*(1-Yn.e*Math.cos(q));let Mt=X*Math.cos(A),Ct=X*Math.sin(A);const J=Math.cos(Yn.omega),pt=Math.sin(Yn.omega),bt=Math.cos(Yn.i),Ot=Math.sin(Yn.i),wt=Math.cos(Yn.Omega),zt=Math.sin(Yn.Omega);let te=Mt*J-Ct*pt,$t=Mt*pt+Ct*J,Ht=0,Dt=te,Xt=$t*bt-Ht*Ot,Gt=$t*Ot+Ht*bt,Lt=Dt*wt-Xt*zt,Qt=Dt*zt+Xt*wt,Ft=Gt;Yn.body.position.set(Lt,Qt,Ft)}let Sr=[];(function(){const q=ve.Jupiter,Z=ve.Saturn;if(!q||!Z)return;const A=(X,Mt,Ct,J,pt,bt,Ot)=>{const wt=new yi;wt.rotation.x=fa(bt),X.add(wt);const zt=new Sv({color:pt,roughness:.9,metalness:0}),te=new qi(new al(J,24,18),zt);te.name=Ot,te.position.set(Mt,0,0),wt.add(te),Sr.push({pivot:wt,angVel:2*Math.PI/Ct})};A(q,vt*Is(1070400),7.154553,.72,10328719,2,"Ganymede"),A(Z,vt*Is(1221870),15.945,.67,13280356,3,"Titan")})(),Va();const w=`
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
    `,tt=`
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
    `,ut=(()=>{const A=document.createElement("canvas");A.width=512,A.height=256;const X=A.getContext("2d"),Mt=zi(4242);for(let J=0;J<8;J++){const pt=J%4*128+64,bt=Math.floor(J/4)*128+128/2,Ot=128*(.2+Mt()*.08),wt=10+Math.floor(Mt()*5),zt=[];for(let Dt=0;Dt<wt;Dt++)zt.push(Ot*(.72+Mt()*.5));X.save(),X.beginPath();for(let Dt=0;Dt<=wt;Dt++){const Xt=Dt/wt*Math.PI*2,Gt=zt[Dt%wt],Lt=pt+Math.cos(Xt)*Gt,Qt=bt+Math.sin(Xt)*Gt*(.8+J%3*.1);Dt===0?X.moveTo(Lt,Qt):X.lineTo(Lt,Qt)}X.closePath();const te=J%2===0,$t=X.createLinearGradient(pt-Ot,bt-Ot,pt+Ot,bt+Ot);$t.addColorStop(0,te?"#cdc4b2":"#c2c6cd"),$t.addColorStop(.55,te?"#8a7f6d":"#83878f"),$t.addColorStop(1,"#2e2b25"),X.fillStyle=$t,X.fill(),X.strokeStyle="rgba(0,0,0,0.45)",X.lineWidth=3,X.stroke(),X.clip();const Ht=3+Math.floor(Mt()*4);for(let Dt=0;Dt<Ht;Dt++){const Xt=Mt()*Math.PI*2,Gt=Mt()*Ot*.7,Lt=pt+Math.cos(Xt)*Gt,Qt=bt+Math.sin(Xt)*Gt,Ft=Ot*(.1+Mt()*.16);X.fillStyle="rgba(16,14,10,0.4)",X.beginPath(),X.arc(Lt,Qt,Ft,0,Math.PI*2),X.fill(),X.fillStyle="rgba(238,232,218,0.28)",X.beginPath(),X.arc(Lt-Ft*.35,Qt-Ft*.35,Ft*.5,0,Math.PI*2),X.fill()}X.restore()}const Ct=ge(new Si(A));return Ct.colorSpace=yn,Ct.needsUpdate=!0,Ct})(),it=(P,q)=>{const Z=new Float32Array(q),A=new Float32Array(q),X=new Float32Array(q);for(let Mt=0;Mt<q;Mt++)Z[Mt]=Math.floor(Math.random()*8),A[Mt]=Math.random()*Math.PI*2,X[Mt]=(Math.random()-.5)*1.6;P.setAttribute("aCell",new Vn(Z,1)),P.setAttribute("aAng",new Vn(A,1)),P.setAttribute("aSpin",new Vn(X,1))},jt=(P,q=2,Z=10,A=1)=>new Ii({vertexShader:w,fragmentShader:tt,transparent:!0,depthWrite:!1,depthTest:!0,blending:$r,uniforms:{uMap:{value:ut},uTime:{value:0},uCamPos:{value:new K},uPhase:{value:A},uOpacity:{value:P},uMinPx:{value:q},uMaxPx:{value:Z},uScale:{value:460*(U.getPixelRatio?.()||1)}}}),ie=(P,q,Z,A,X,Mt,Ct=.62,J=1)=>{const pt=new li,bt=new Float32Array(P*3),Ot=new Float32Array(P*3),wt=new Float32Array(P),zt=new Float32Array(P),te=new Float32Array(P),$t=new Float32Array(P),Ht=new Float32Array(P);for(let Lt=0;Lt<P;Lt++){const Qt=Ne(q[0],q[1],Math.random())*vt;wt[Lt]=Qt,zt[Lt]=Math.random()*Z,te[Lt]=fa(Math.max(0,mr()*A));const Ft=Zt*Math.pow(Qt/pe,1.5);Ht[Lt]=2*Math.PI/Ft,$t[Lt]=Math.random()*Math.PI*2;const de=oe($t[Lt],zt[Lt]),we=Qt*(1-zt[Lt]*Math.cos($t[Lt])),Ie=we*Math.cos(de),mn=we*Math.sin(de),Ke=3*Lt;bt[Ke]=Ie,bt[Ke+1]=mn*Math.sin(te[Lt]),bt[Ke+2]=mn*Math.cos(te[Lt]);const[Be,gn,Mn]=Mt(Lt);Ot.set([Be,gn,Mn],Ke)}const Dt=new Vn(bt,3);Dt.setUsage(Fu),pt.setAttribute("position",Dt),pt.setAttribute("color",new Vn(Ot,3)),it(pt,P);const Xt=jt(Ct,2,10,J),Gt=new cf(pt,Xt);return Gt.frustumCulled=!1,pt.boundingSphere||(pt.boundingSphere=new vr(new K(0,0,0),vt*80)),$.add(Gt),{geo:pt,mesh:Gt,a:wt,e:zt,inc:te,M:$t,n:Ht,cursor:0}};let Yt=ie(x.current,[2.1,3.3],.12,2.5,.9,()=>{const P=.85+Math.random()*.25;return[P,P,P]},.85,1),re=ie(b.current,[42,48],.1,5.5,1.4,()=>{const P=.9+Math.random()*.2;return[P*.75,P*.95,1.15]},.95,.15);const ce=(P,q,Z,A,X,Mt=1.2)=>{const Ct=q[0]*vt,J=q[1]*vt,pt=new li,bt=new Float32Array(P*3),Ot=new Float32Array(P*3),wt=new Float32Array(P),zt=new Float32Array(P),te=new Float32Array(P),$t=new Float32Array(P),Ht=new Float32Array(P),Dt=new $e(X),Xt=tn();for(let Ft=0;Ft<P;Ft++){const de=Math.random()<.7,we=fa(A),Ie=fa(60),mn=we*.55*mr(),Ke=Math.random()*Ie,Be=de?mn:we*.25*mr()+Ke,gn=Math.sign(Z||1),Mn=Bt(Xt+Z+gn*Be),jn=We((de?Math.abs(mn):Ke)/Ie,0,1),Hn=Ne(Ct,J,de?.45+.35*Math.random():.25+.7*jn),Me=Math.min(.08,Math.abs(mr())*.03+.01*Math.random()),_e=fa(Math.max(0,mr()*Mt));wt[Ft]=Hn,zt[Ft]=Me,te[Ft]=_e;const Te=Zt*Math.pow(Hn/pe,1.5);Ht[Ft]=2*Math.PI/Te,$t[Ft]=Mn;const Ae=oe($t[Ft],zt[Ft]),Sn=Hn*(1-zt[Ft]*Math.cos($t[Ft])),mi=Sn*Math.cos(Ae),Zn=Sn*Math.sin(Ae),dn=3*Ft;bt[dn]=mi,bt[dn+1]=Zn*Math.sin(_e),bt[dn+2]=Zn*Math.cos(_e),Ot.set([Dt.r,Dt.g,Dt.b],dn)}const Gt=new Vn(bt,3);Gt.setUsage(Fu),pt.setAttribute("position",Gt),pt.setAttribute("color",new Vn(Ot,3)),it(pt,P);const Lt=jt(.66,2,10,1),Qt=new cf(pt,Lt);return Qt.frustumCulled=!1,pt.boundingSphere||(pt.boundingSphere=new vr(new K(0,0,0),vt*80)),$.add(Qt),{geo:pt,mesh:Qt,a:wt,e:zt,inc:te,M:$t,n:Ht,cursor:0}};let De,Pe;const se=Math.max(2e3,Math.floor(x.current*.2));De=ce(Math.floor(se/2),[4.9,5.5],+Math.PI/3,20,6484878,1),Pe=ce(Math.ceil(se/2),[4.9,5.5],-Math.PI/3,20,16739179,1);const qe=(P,q)=>{const Z=5.2028*Math.pow(.6666666666666666,.6666666666666666),A=new li,X=new Float32Array(P*3),Mt=new Float32Array(P*3),Ct=new Float32Array(P),J=new Float32Array(P),pt=new Float32Array(P),bt=new Float32Array(P),Ot=new Float32Array(P),wt=tn(),zt=new $e(13070591);for(let Dt=0;Dt<P;Dt++){const Xt=fa(18)*mr(),Gt=Bt(wt+q+Xt),Lt=(Z+Ne(-.35,.35,Math.random()))*vt,Qt=.08+Math.abs(mr())*.05,Ft=fa(Math.max(0,mr()*1.5));Ct[Dt]=Lt,J[Dt]=We(Qt,0,.18),pt[Dt]=Ft;const de=Zt*Math.pow(Lt/pe,1.5);Ot[Dt]=2*Math.PI/de,bt[Dt]=Gt;const we=oe(bt[Dt],J[Dt]),Ie=Lt*(1-J[Dt]*Math.cos(bt[Dt])),mn=Ie*Math.cos(we),Ke=Ie*Math.sin(we),Be=3*Dt;X[Be]=mn,X[Be+1]=Ke*Math.sin(Ft),X[Be+2]=Ke*Math.cos(Ft),Mt.set([zt.r,zt.g,zt.b],Be)}const te=new Vn(X,3);te.setUsage(Fu),A.setAttribute("position",te),A.setAttribute("color",new Vn(Mt,3)),it(A,P);const $t=jt(.74,2,10,1),Ht=new cf(A,$t);return Ht.frustumCulled=!1,A.boundingSphere||(A.boundingSphere=new vr(new K(0,0,0),vt*80)),$.add(Ht),{geo:A,mesh:Ht,a:Ct,e:J,inc:pt,M:bt,n:Ot,cursor:0}};let En,fn,Ze;const On=Math.max(1e3,Math.floor(x.current*.08));En=qe(Math.floor(On/3),+Math.PI/3),fn=qe(Math.floor(On/3),Math.PI),Ze=qe(On-2*Math.floor(On/3),-Math.PI/3);const ue=6e4,xn=new il;$.add(xn);const Ye=new Ha(fa(62),0,fa(23)),Ci=()=>{const q=document.createElement("canvas");q.width=q.height=64;const Z=q.getContext("2d"),A=Z.createImageData(64,64);for(let Mt=0;Mt<64;Mt++)for(let Ct=0;Ct<64;Ct++){const J=(Ct+.5)/64-.5,pt=(Mt+.5)/64-.5,bt=Math.sqrt(J*J+pt*pt)*2,Ot=Math.exp(-Math.pow(bt*2.2,2)),wt=4*(Mt*64+Ct);A.data[wt]=A.data[wt+1]=A.data[wt+2]=255,A.data[wt+3]=Math.round(Ot*255)}Z.putImageData(A,0,0);const X=ge(new Si(q));return X.needsUpdate=!0,X},Di=()=>{const Z=document.createElement("canvas");Z.width=Z.height=128;const A=Z.getContext("2d"),X=A.createImageData(128,128);for(let Ct=0;Ct<128;Ct++)for(let J=0;J<128;J++){const pt=J+.5-64,bt=Ct+.5-64,Ot=Math.sqrt(pt*pt+bt*bt)/64;let wt=Math.exp(-Math.pow(Ot*2.8,2))+.28*Math.exp(-Math.pow(Ot*1.15,2));wt+=.4*Math.exp(-(bt*bt)/(2*1.2*1.2))*Math.exp(-Math.abs(pt)/(64*.38)),wt+=.4*Math.exp(-(pt*pt)/(2*1.2*1.2))*Math.exp(-Math.abs(bt)/(64*.38));const zt=4*(Ct*128+J);X.data[zt]=X.data[zt+1]=X.data[zt+2]=255,X.data[zt+3]=Math.round(Math.min(1,wt)*255)}A.putImageData(X,0,0);const Mt=ge(new Si(Z));return Mt.needsUpdate=!0,Mt},Ui=`
      attribute float aSize; attribute vec3 color;
      varying vec3 vColor; varying float vFade;
      uniform float uPx;
      void main(){
        vColor=color;
        float s=max(aSize,1.8);
        vFade=pow(clamp(aSize/1.8,0.35,1.0),1.1);
        gl_PointSize=s*uPx;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
      }
    `,Ca=`
      uniform sampler2D uMap; uniform float uOpacity;
      varying vec3 vColor; varying float vFade;
      void main(){
        vec4 tex=texture2D(uMap,gl_PointCoord);
        gl_FragColor=vec4(vColor*tex.a, tex.a*vFade*uOpacity);
      }
    `,hn=[],Nn=(P,q,Z,A,X,Mt)=>{const Ct=zi(q),J=Lt=>(Ct()+Ct()+Ct()-1.5)/1.5*Lt,pt=new Float32Array(P*3),bt=new Float32Array(P*3),Ot=new Float32Array(P),wt=new K,zt=[];for(let Lt=0;Lt<12;Lt++)zt.push(Ct()*Math.PI*2);let te=1e9,$t=0;const Ht=[];for(let Lt=0;Lt<P;Lt++){const Qt=Mt(Ct);Ht.push(Qt),Qt<te&&(te=Qt),Qt>$t&&($t=Qt)}for(let Lt=0;Lt<P;Lt++){if(Ct()<Z){const Be=Ct()<.6?Ct()*Math.PI*2:zt[Math.floor(Ct()*12)]+J(.55),gn=J(Ct()<.5?.11:.17);wt.set(Math.cos(Be)*Math.cos(gn),Math.sin(gn),Math.sin(Be)*Math.cos(gn)).applyEuler(Ye)}else{const Be=Ct(),gn=Ct(),Mn=2*Math.PI*Be,jn=Math.acos(2*gn-1);wt.set(Math.sin(jn)*Math.cos(Mn),Math.cos(jn),Math.sin(jn)*Math.sin(Mn))}pt[3*Lt]=wt.x*ue,pt[3*Lt+1]=wt.y*ue,pt[3*Lt+2]=wt.z*ue;const Qt=Ct();let Ft,de,we;Qt<.1?(Ft=1,de=.74,we=.55):Qt<.28?(Ft=1,de=.9,we=.76):Qt<.72?(Ft=1,de=1,we=1):(Ft=.74,de=.85,we=1);const Ie=Ht[Lt];Ot[Lt]=Ie;const mn=(Ie-te)/Math.max(1e-6,$t-te),Ke=(.5+.5*Math.pow(mn,.75))*(.62+.38*Ct());bt[3*Lt]=Ft*Ke,bt[3*Lt+1]=de*Ke,bt[3*Lt+2]=we*Ke}const Dt=new li;Dt.setAttribute("position",new Vn(pt,3)),Dt.setAttribute("color",new Vn(bt,3)),Dt.setAttribute("aSize",new Vn(Ot,1));const Xt=new Ii({vertexShader:Ui,fragmentShader:Ca,transparent:!0,depthWrite:!1,depthTest:!0,blending:yc,uniforms:{uMap:{value:A},uOpacity:{value:X},uPx:{value:U.getPixelRatio?.()||1}}});Xt.userData={baseOp:X};const Gt=new cf(Dt,Xt);Gt.frustumCulled=!1,Gt.renderOrder=-1,xn.add(Gt),hn.push(Xt)};Nn(34e3,501,.45,Ci(),.95,P=>1.3+4.7*Math.pow(P(),2.8)),Nn(300,503,.25,Di(),1,P=>5+9*Math.pow(P(),2.2));const ta=new K,kn=new K;let Hi=!1,ji=0,Fs=0;const Pc=P=>{P.button===0&&(Hi=!0,ji=P.clientX,Fs=P.clientY)},yr=P=>{if(!Hi)return;const q=P.clientX-ji,Z=P.clientY-Fs;ji=P.clientX,Fs=P.clientY;const A=lt.current;A?(A.yaw-=q*.005,A.pitch=We(A.pitch+Z*.005,-1.35,1.35)):(C.current-=q*.005,M.current=We(M.current+Z*.005,0,1.52),v.current=We(v.current*(1+Z*.002),50,3e4))},eo=()=>{Hi=!1},no=P=>{const q=lt.current;q?q.dist=We(q.dist*(P.deltaY>0?1.1:.9),q.minDist,q.maxDist):v.current=We(v.current*(P.deltaY>0?1.1:.9),50,3e4)};U.domElement.addEventListener("mousedown",Pc),window.addEventListener("mousemove",yr),window.addEventListener("mouseup",eo),U.domElement.addEventListener("wheel",no,{passive:!0});const _a=["Sun",...D],ea=P=>P==="Sun"?Ee:ve[P],io=P=>P==="Sun"?Kt:en[P],ao=P=>{let q=P,Z=null;for(;q&&!Z;)_a.includes(q.name)&&(Z=q.name),q=q.parent;return Z},Oc={Saturn:2.4,Uranus:2.15},va=new K(0,0,0),Tn={active:!1,t0:0,dur:2200,fromPos:new K,fromLook:new K,anchor:null,fromOff:new K,fromLookOff:new K},ss=()=>{Tn.active=!0,Tn.t0=performance.now(),Tn.fromPos.copy(ot.position),Tn.fromLook.copy(va);const P=lt.current;if(Tn.anchor=P?P.obj:null,Tn.anchor){const q=new K;Tn.anchor.getWorldPosition(q),Tn.fromOff.copy(ot.position).sub(q),Tn.fromLookOff.copy(va).sub(q)}},Bs=P=>{const q=ea(P),Z=io(P),A=new K;q.getWorldPosition(A);const X=Math.atan2(ot.position.x-A.x,ot.position.z-A.z);lt.current={name:P,obj:q,dist:Z*3.6,minDist:Z*(Oc[P]??1.45),maxDist:Z*30,pitch:.22,yaw:X,spin:P==="Sun"?.05:.15},ss(),st(P)},Gi=()=>{const P=lt.current;lt.current=null,P&&ss(),st(null)};ht.current.focusBody=Bs,ht.current.unfocus=Gi;const zs=new e1,br=new ke,ka=new K,Er=new K,Tr=new K,ml=P=>{const q=U.domElement.getBoundingClientRect(),Z=P.clientX-q.left,A=P.clientY-q.top;br.set(Z/q.width*2-1,-(A/q.height)*2+1),zs.setFromCamera(br,ot);let X=null;for(const Mt of zs.intersectObjects(_a.map(ea),!0))if(X=ao(Mt.object),X)break;if(!X){ot.getWorldDirection(Tr);let Mt=null,Ct=28;for(const J of _a){if(ea(J).getWorldPosition(ka),Er.subVectors(ka,ot.position).dot(Tr)<=0)continue;ka.project(ot);const pt=(ka.x*.5+.5)*q.width,bt=(-ka.y*.5+.5)*q.height,Ot=Math.hypot(pt-Z,bt-A);Ot<Ct&&(Ct=Ot,Mt=J)}if(Mt){ea(Mt).getWorldPosition(ka),zs.set(ot.position,Er.subVectors(ka,ot.position).normalize());const J=zs.intersectObjects(_a.map(ea),!0)[0],pt=J?ao(J.object):null;(!pt||pt===Mt)&&(X=Mt)}}X&&lt.current?.name!==X&&Bs(X)};U.domElement.addEventListener("dblclick",ml);const bi=P=>{P.key==="Escape"&&Gi()};window.addEventListener("keydown",bi);const Xa=()=>{const P=Math.max(...D.map(Z=>{const A=ze[Z];return A.a>0&&A.e<1?A.a*(1+A.e)*vt:0})),q=re?Math.max(...re.a)*1.05:0;return Math.max(P,q)};ht.current.fitInner=()=>{Gi();const P=vt*4,q=ot.fov*Math.PI/180;v.current=We(P/Math.tan(q/2)*1.25,80,1e4),M.current=.9},ht.current.fitFull=()=>{Gi();const P=Xa(),q=ot.fov*Math.PI/180;v.current=We(P/Math.tan(q/2)*1.25,120,3e4),M.current=.9},ht.current.topDown=()=>{Gi(),M.current=1.45},ht.current.iso=()=>{Gi(),M.current=.5,C.current=-Math.PI/4};const so=(P,q,Z)=>{const A=nt.bodies[Pt[P]],X=Uc*(1+A.m);let Mt=A.x-_t.x,Ct=A.y-_t.y,J=A.z-_t.z,pt=A.vx-_t.vx,bt=A.vy-_t.vy,Ot=A.vz-_t.vz;const wt=Math.hypot(Mt,Ct,J),zt=Mt/wt,te=Ct/wt,$t=J/wt,Ht=pt*zt+bt*te+Ot*$t,Dt=pt-Ht*zt,Xt=bt-Ht*te,Gt=Ot-Ht*$t;let Lt=We(q,.1,10);const Qt=Xa()/vt*1.2,Ft=.09;for(let Te=0;Te<200;Te++){const Ae=Ht*zt+Dt*Lt,Sn=Ht*te+Xt*Lt,mi=Ht*$t+Gt*Lt;if((Ae*Ae+Sn*Sn+mi*mi)/2-X/wt<0){const dn=nx(Mt,Ct,J,Ae,Sn,mi,X);if(dn.a*(1+dn.e)<=Qt&&dn.a*(1-dn.e)>=Ft)break}if(Lt=1+(Lt-1)*.94,Math.abs(Lt-1)<1e-4){Lt=1;break}}pt=Ht*zt+Dt*Lt,bt=Ht*te+Xt*Lt,Ot=Ht*$t+Gt*Lt;const de=Ct*Ot-J*bt,we=J*pt-Mt*Ot,Ie=Mt*bt-Ct*pt,mn=Math.hypot(de,we,Ie),Ke=Math.acos(We(Ie/mn,-1,1));let Be=-we,gn=de;const Mn=Math.hypot(Be,gn);Mn<1e-12?(Be=1,gn=0):(Be/=Mn,gn/=Mn);const jn=fa(Z)-Ke,Hn=Math.cos(jn),Me=Math.sin(jn),_e=(Te,Ae,Sn)=>{const mi=Be*Te+gn*Ae;return[Te*Hn+gn*Sn*Me+Be*mi*(1-Hn),Ae*Hn+-Be*Sn*Me+gn*mi*(1-Hn),Sn*Hn+(Be*Ae-gn*Te)*Me]};[Mt,Ct,J]=_e(Mt,Ct,J),[pt,bt,Ot]=_e(pt,bt,Ot),A.x=_t.x+Mt,A.y=_t.y+Ct,A.z=_t.z+J,A.vx=_t.vx+pt,A.vy=_t.vy+bt,A.vz=_t.vz+Ot,nt.computeAccel(),Wn(P),be(P,ve[P].position),L.current=P,lt.current?.name===P&&ss()},Hs=P=>{const q=nt.bodies[Pt[P]],Z=Re[P];q.x=_t.x+Z.x,q.y=_t.y+Z.y,q.z=_t.z+Z.z,q.vx=_t.vx+Z.vx,q.vy=_t.vy+Z.vy,q.vz=_t.vz+Z.vz,Wn(P),be(P,ve[P].position)};ht.current.apply=so,ht.current.resetLast=()=>{const P=L.current;P&&(Hs(P),nt.computeAccel(),lt.current?.name===P&&ss())},ht.current.fullReset=()=>{for(const P of D)Hs(P);nt.t=0,_l=1,nt.computeAccel(),lt.current&&ss()};const rs=(P,q)=>{const Z=P.geo.getAttribute("position"),A=Z.array,X=P.a.length,Ct=X>4e4?Math.max(8e3,Math.ceil(X/12)):Math.max(12e3,Math.ceil(X/6));let J=P.cursor,pt=Math.min(X,J+Ct);for(let zt=J;zt<pt;zt++){const te=Bt(P.M[zt]+P.n[zt]*q);P.M[zt]=te;const $t=P.e[zt],Ht=oe(te,$t),Dt=P.a[zt]*(1-$t*Math.cos(te)),Xt=Dt*Math.cos(Ht),Gt=Dt*Math.sin(Ht),Lt=Math.sin(P.inc[zt]),Qt=Math.cos(P.inc[zt]),Ft=3*zt;A[Ft]=Xt,A[Ft+1]=Gt*Lt,A[Ft+2]=Gt*Qt}const bt=J*3,Ot=(pt-J)*3,wt=Z;typeof wt.setUpdateRange=="function"?wt.setUpdateRange(bt,Ot):(wt.updateRange||(wt.updateRange={offset:0,count:-1}),wt.updateRange.offset=bt,wt.updateRange.count=Ot),Z.needsUpdate=!0,P.cursor=pt===X?0:pt},gl=()=>{const P=B.clientWidth||window.innerWidth,q=B.clientHeight||window.innerHeight;U.setSize(P,q),ot.aspect=P/q,ot.updateProjectionMatrix()},ro=new ResizeObserver(gl);ro.observe(B);const Da=new K,Vi=new K,os=new K,zf=new K;let _l=1,Ic=performance.now();const oo=()=>{const P=performance.now(),q=Math.min(.25,(P-Ic)/1e3);Ic=P;const Z=nt.advance(q*m.current);for(const J of D)be(J,ve[J].position);if(--_l<=0){_l=15;for(const J of D)Wn(J);if(St.current){const J=QT+nt.t*864e5,pt=nt.t/365.25;St.current.textContent=J<0xe677d21fdbff?new Date(J).toISOString().slice(0,10)+"  •  T+"+pt.toFixed(2)+" yr":"T+"+Math.round(pt).toLocaleString()+" yr"}}pl(Z);for(const J of Sr)J.pivot.rotation.y+=J.angVel*Z;rs(Yt,Z),rs(re,Z),rs(De,Z),rs(Pe,Z),rs(En,Z),rs(fn,Z),rs(Ze,Z);const A=lt.current;if(A)A.yaw+=.06*q,A.obj.rotateY(A.spin*q),A.obj.getWorldPosition(Vi),Da.set(Vi.x+A.dist*Math.cos(A.pitch)*Math.sin(A.yaw),Vi.y+A.dist*Math.sin(A.pitch),Vi.z+A.dist*Math.cos(A.pitch)*Math.cos(A.yaw));else{const J=v.current,pt=C.current,bt=M.current;Da.set(J*Math.cos(bt)*Math.sin(pt),J*Math.sin(bt),J*Math.cos(bt)*Math.cos(pt)),Vi.set(0,0,0)}if(Tn.active){const J=We((P-Tn.t0)/Tn.dur,0,1),pt=J*J*J*(J*(J*6-15)+10);Tn.anchor&&A&&Tn.anchor===A.obj?(os.subVectors(Da,Vi),ot.position.lerpVectors(Tn.fromOff,os,pt).add(Vi),va.lerpVectors(Tn.fromLookOff,zf.set(0,0,0),pt).add(Vi)):(ot.position.lerpVectors(Tn.fromPos,Da,pt),va.lerpVectors(Tn.fromLook,Vi,pt));for(const bt of _a){ea(bt).getWorldPosition(os);const Ot=io(bt)*1.15,wt=ot.position.distanceTo(os);wt<Ot&&wt>1e-6&&ot.position.sub(os).multiplyScalar(Ot/wt).add(os)}J>=1&&(Tn.active=!1)}else ot.position.copy(Da),va.copy(Vi);ot.lookAt(va),xn.position.copy(ot.position).multiplyScalar(.55);{const J=ot.position.length();ot.getWorldDirection(ta),kn.copy(ot.position).multiplyScalar(-1).normalize();const pt=Math.max(0,ta.dot(kn)),bt=We(Kt*10/Math.max(J,1),0,1),Ot=Math.pow(pt,3)*bt,wt=lt.current,zt=wt?We(io(wt.name)*2.2/wt.dist,0,1)*.18:0,$t=(.35+.65*We((J-1200)/2300,0,1))*(1-.85*Ot)*(1-zt);for(const Ht of hn)Ht.uniforms.uOpacity.value=(Ht.userData.baseOp||1)*$t}{const J=P/1e3;for(const pt of[Yt,re,De,Pe,En,fn,Ze]){const bt=pt.mesh.material.uniforms;bt.uTime.value=J,bt.uCamPos.value.copy(ot.position)}}At.position.set(0,0,0),It.position.set(0,0,0);const X=ve.Earth.position,Mt=new K().copy(X).negate().normalize();bn.sunDir.value.copy(Mt),bn.camPos.value.copy(ot.position);for(const J of["Mercury","Venus","Mars"]){const pt=ma[J];pt&&pt.sunDir.value.copy(ve[J].position).multiplyScalar(-1).normalize()}Math.random()<q*6&&ne(),Math.random()<q*6&&ne(),ae.rotation.y+=.25*q;for(let J=0;J<le;J++){if(Le[J]<=0)continue;Le[J]+=q;const pt=Jt[J],bt=pt.material||null;if(!bt)continue;pt.position.addScaledVector(Wt[J],q);const Ot=We(Le[J]/j[J],0,1);bt.opacity=Ot<.15?Ot/.15:1-(Ot-.15)/.85,pt.scale.setScalar(2+6*Ot),(pt.position.length()>kt||Ot>=1)&&(bt.opacity=0,Le[J]=0)}Ee.material.uniforms.uTime.value+=q;const Ct=$.userData._spinUpdates;if(Ct)for(let J=0;J<Ct.length;J++)try{Ct[J](q)}catch{}U.render($,ot),t.current=requestAnimationFrame(oo)};return t.current=requestAnimationFrame(oo),ht.current.rebuildBelts=()=>{const P=A=>{$.remove(A.mesh),A.geo.dispose(),A.mesh.material.dispose()};P(Yt),P(re),P(De),P(Pe),P(En),P(fn),P(Ze),Yt=ie(x.current,[2.1,3.3],.12,2.5,.9,()=>{const A=.85+Math.random()*.25;return[A,A,A]},.85,1),re=ie(b.current,[42,48],.1,5.5,1.4,()=>{const A=.9+Math.random()*.2;return[A*.75,A*.95,1.15]},.95,.15);const q=Math.max(2e3,Math.floor(x.current*.2));De=ce(Math.floor(q/2),[4.9,5.5],+Math.PI/3,20,6484878,1),Pe=ce(Math.ceil(q/2),[4.9,5.5],-Math.PI/3,20,16739179,1);const Z=Math.max(1e3,Math.floor(x.current*.08));En=qe(Math.floor(Z/3),+Math.PI/3),fn=qe(Math.floor(Z/3),Math.PI),Ze=qe(Z-2*Math.floor(Z/3),-Math.PI/3)},()=>{cancelAnimationFrame(t.current),ro.disconnect(),U.domElement.removeEventListener("mousedown",Pc),window.removeEventListener("mousemove",yr),window.removeEventListener("mouseup",eo),U.domElement.removeEventListener("wheel",no),U.domElement.removeEventListener("dblclick",ml),window.removeEventListener("keydown",bi),window.__solar===ht.current&&delete window.__solar,lt.current=null,B.removeChild(U.domElement),U.dispose(),$.traverse(P=>{P.geometry?.dispose?.();const q=P.material;q&&(Array.isArray(q)?q.forEach(Z=>Z.dispose?.()):q.dispose?.())}),sn.forEach(P=>{try{P()}catch{}})};function Hf(){const q=document.createElement("canvas");q.width=q.height=256;const Z=q.getContext("2d"),A=Z.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);A.addColorStop(0,"rgba(255,200,120,.95)"),A.addColorStop(.55,"rgba(255,140,50,.35)"),A.addColorStop(1,"rgba(255,110,40,0)"),Z.fillStyle=A,Z.fillRect(0,0,256,256);const X=ge(new Si(q));return X.colorSpace=yn,X.needsUpdate=!0,X}function Gf(){const q=document.createElement("canvas");q.width=q.height=128;const Z=q.getContext("2d"),A=Z.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);A.addColorStop(0,"rgba(255,220,170,.95)"),A.addColorStop(.35,"rgba(255,140,60,.55)"),A.addColorStop(1,"rgba(255,140,60,0)"),Z.fillStyle=A,Z.beginPath(),Z.ellipse(128/2,128/2,128*.48,128*.18,Math.PI/4,0,Math.PI*2),Z.fill();const X=ge(new Si(q));return X.colorSpace=yn,X.needsUpdate=!0,X}function Vf(){const P=`
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
      `;return new Ii({vertexShader:P,fragmentShader:q,uniforms:{uTime:{value:0}},transparent:!1,depthWrite:!0,depthTest:!0})}},[]),me.jsxs("div",{style:{width:"100%",height:"100vh",display:"grid",gridTemplateColumns:"1fr 420px",gap:8,background:"#000"},children:[me.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[me.jsx("div",{ref:r,style:{width:"100%",height:"100%"},children:at&&me.jsx("div",{style:{color:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",fontFamily:"system-ui",fontSize:18},children:"WebGL is required to display the 3D simulation."})}),!at&&!V&&me.jsx("div",{style:{position:"absolute",left:16,bottom:14,color:"#cbd5e1",fontFamily:"system-ui,sans-serif",fontSize:12.5,background:"rgba(17,24,39,.65)",border:"1px solid #334155",borderRadius:999,padding:"6px 12px",pointerEvents:"none"},children:"Double-click the Sun or a planet for a close-up satellite view"}),!at&&me.jsx("div",{style:{position:"absolute",right:12,top:12,color:"#cbd5e1",fontFamily:"system-ui,sans-serif",fontSize:12.5,background:"rgba(17,24,39,.65)",border:"1px solid #334155",borderRadius:8,padding:"6px 10px",pointerEvents:"none",fontVariantNumeric:"tabular-nums"},children:me.jsx("span",{ref:St,children:"2026-07-10  •  T+0.00 yr"})}),!at&&V&&me.jsx(TA,{body:V,onBack:()=>ht.current.unfocus?.()})]}),me.jsxs("div",{style:{color:"#e5e7eb",fontFamily:"system-ui,sans-serif",background:"rgba(17,24,39,.7)",border:"1px solid #334155",borderRadius:10,padding:12,height:"calc(100vh - 8px)",overflowY:"auto"},children:[me.jsx("div",{style:{fontWeight:700,marginBottom:2},children:"🛠 Orbit Editor"}),me.jsx("div",{style:{opacity:.65,fontSize:11.5,marginBottom:10},children:"True N-body gravity: Sun + 9 planets (AU · days · M☉), Yoshida-4 symplectic, dt ≤ 0.25 d — resonances and precession emerge from the forces."}),me.jsxs(vc,{label:"Orbital Speed (days/sec)",children:[me.jsx("input",{type:"range",min:0,max:100,step:1,value:f,onChange:B=>{const dt=parseInt(B.target.value);p(dt);const Et=RA(dt,i,s);c(Et),m.current=Et}}),me.jsx("span",{style:{textAlign:"right"},children:l})]}),me.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:[me.jsx(vp,{onClick:()=>ht.current.topDown?.(),children:"Top‑down"}),me.jsx(vp,{onClick:()=>ht.current.iso?.(),children:"Isometric"}),me.jsx(mf,{onClick:()=>ht.current.fitInner?.(),children:"Fit Inner"}),me.jsx(mf,{onClick:()=>ht.current.fitFull?.(),children:"Fit Full"})]}),me.jsxs("div",{style:{marginBottom:10},children:[me.jsx("div",{style:{marginBottom:6,opacity:.9},children:"Planet"}),me.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6},children:D.map(B=>me.jsx(AA,{active:I===B,onClick:()=>N(B),children:B},B))})]}),me.jsxs("div",{style:{marginTop:8,paddingTop:8,borderTop:"1px solid #374151"},children:[me.jsxs(vc,{label:"Speed factor (tangential Δv)",children:[me.jsx("input",{type:"range",min:.1,max:10,step:.01,value:z,onChange:B=>H(parseFloat(B.target.value))}),me.jsxs("span",{children:[z.toFixed(2),"×"]})]}),me.jsxs(vc,{label:"Tilt / Inclination (deg)",children:[me.jsx("input",{type:"range",min:0,max:30,step:.5,value:k,onChange:B=>T(parseFloat(B.target.value))}),me.jsxs("span",{children:[k.toFixed(1),"°"]})]}),me.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[me.jsx(vp,{onClick:()=>ht.current.apply?.(I,z,k),children:"Apply"}),me.jsx(mf,{onClick:()=>ht.current.resetLast?.(),children:"Reset Last"}),me.jsx(mf,{onClick:()=>ht.current.fullReset?.(),children:"Full Reset"})]})]}),me.jsxs("div",{style:{marginTop:16,paddingTop:10,borderTop:"1px solid #374151"},children:[me.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"Belts"}),me.jsxs(vc,{label:"Asteroid Density",children:[me.jsx("input",{type:"range",min:0,max:15e4,step:1e3,value:d,onChange:B=>{const dt=parseInt(B.target.value);g(dt),x.current=dt,ht.current.rebuildBelts?.()}}),me.jsx("span",{children:d.toLocaleString()})]}),me.jsxs(vc,{label:"Kuiper Density",children:[me.jsx("input",{type:"range",min:0,max:6e5,step:5e3,value:_,onChange:B=>{const dt=parseInt(B.target.value);y(dt),b.current=dt,ht.current.rebuildBelts?.()}}),me.jsx("span",{children:_.toLocaleString()})]}),me.jsxs("div",{style:{opacity:.85,fontSize:12,marginTop:6},children:["Trojans/Greeks ≈ ",me.jsx("b",{children:"20%"})," of main belt • Hildas ≈ ",me.jsx("b",{children:"8%"})," (auto‑scaled)"]})]})]})]})}function TA({body:r,onBack:t}){const i=pA[r];return me.jsxs("div",{style:{position:"absolute",top:16,left:16,width:340,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",overflowY:"auto",color:"#e5e7eb",fontFamily:"system-ui,sans-serif",background:"rgba(17,24,39,.85)",border:"1px solid #334155",borderRadius:12,padding:16,backdropFilter:"blur(6px)"},children:[me.jsx("button",{onClick:t,style:{padding:"7px 12px",borderRadius:8,background:"#059669",border:"1px solid #10b981",color:"#fff",cursor:"pointer",fontWeight:600},children:"← Back to Solar System"}),me.jsx("div",{style:{fontSize:26,fontWeight:800,marginTop:12,lineHeight:1.1},children:r}),me.jsx("div",{style:{color:"#34d399",fontSize:11.5,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",marginTop:3,marginBottom:10},children:i.kind}),me.jsx("p",{style:{fontSize:13,lineHeight:1.55,opacity:.92,margin:"0 0 12px"},children:i.blurb}),me.jsx("div",{children:i.stats.map(([s,l])=>me.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12,padding:"6px 0",borderTop:"1px solid #273244",fontSize:12.5},children:[me.jsx("span",{style:{opacity:.7,whiteSpace:"nowrap"},children:s}),me.jsx("span",{style:{textAlign:"right",fontWeight:600},children:l})]},s))}),me.jsx("div",{style:{opacity:.6,fontSize:11.5,marginTop:10},children:"Drag to orbit • Scroll to zoom • Esc to exit"})]})}function vc({label:r,children:t}){return me.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 100px",alignItems:"center",gap:10,marginBottom:12},children:[me.jsx("div",{style:{opacity:.9},children:r}),t]})}function AA({active:r,children:t,onClick:i}){return me.jsx("button",{onClick:i,style:{padding:"6px 8px",borderRadius:8,background:r?"#059669":"#1f2937",border:`1px solid ${r?"#10b981":"#374151"}`,color:"#e5e7eb",cursor:"pointer"},children:t})}function vp({children:r,onClick:t}){return me.jsx("button",{onClick:t,style:{padding:"6px 10px",borderRadius:8,background:"#059669",border:"1px solid #10b981",color:"#fff",cursor:"pointer"},children:r})}function mf({children:r,onClick:t}){return me.jsx("button",{onClick:t,style:{padding:"6px 10px",borderRadius:8,background:"#374151",border:"1px solid #4b5563",color:"#e5e7eb",cursor:"pointer"},children:r})}function RA(r,t,i){const s=r/100;return Math.round(t*Math.pow(i/t,s))}function wA(r,t,i){const s=Math.log(r/t)/Math.log(i/t);return Math.round(CA(s)*100)}function CA(r){return Math.max(0,Math.min(1,r))}function DA(){return me.jsx(EA,{})}fS.createRoot(document.getElementById("root")).render(me.jsx(DA,{}));
