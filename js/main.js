!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"f",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"e",function(){return d});const r=()=>"https://andela-stackoverflow.herokuapp.com/api/v1.1/",o=()=>{window.localStorage.removeItem("auth-token"),window.localStorage.removeItem("auth-name"),window.location.replace("login.html")},s=()=>{window.localStorage.getItem("auth-token")&&window.localStorage.getItem("auth-name")||o()},i=t=>{const e=t.querySelectorAll(":not(:defined)");return Promise.all(Array.from(e,t=>window.customElements.whenDefined(t.getAttribute("is")||t.localName)))},a=(t,e={})=>{Object.keys(t).forEach(n=>{const r={};e[n]&&(r.extends=e[n]),window.customElements.define(u(n),t[n],r)})},u=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase(),d=(t,e=100,n="...")=>t.length<=e?t:t.slice(0,e).trim()+n},function(t,e,n){var r,o;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(o="function"==typeof(r=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function r(t){return 100*(-1+t)}t.configure=function(t){var n,r;for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&(e[n]=r);return this},t.status=null,t.set=function(i){var a=t.isStarted();i=n(i,e.minimum,1),t.status=1===i?null:i;var u=t.render(!a),d=u.querySelector(e.barSelector),c=e.speed,l=e.easing;return u.offsetWidth,o(function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),s(d,function(t,n,o){var s;return(s="translate3d"===e.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"}).transition="all "+n+"ms "+o,s}(i,c,l)),1===i?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){s(u,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){t.remove(),n()},c)},c)):setTimeout(n,c)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){t.status&&(t.trickle(),n())},e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var r=t.status;return r?("number"!=typeof e&&(e=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&t.start(),e++,n++,r.always(function(){0==--n?(e=0,t.done()):t.set((e-n)/e)}),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");a(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=e.template;var i,u=o.querySelector(e.barSelector),d=n?"-100":r(t.status||0),l=document.querySelector(e.parent);return s(u,{transition:"all 0 linear",transform:"translate3d("+d+"%,0,0)"}),e.showSpinner||(i=o.querySelector(e.spinnerSelector))&&c(i),l!=document.body&&a(l,"nprogress-custom-parent"),l.appendChild(o),o},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&c(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=function(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}(n),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,o=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);o--;)if((r=t[o]+s)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,o,s=arguments;if(2==s.length)for(n in e)void 0!==(o=e[n])&&e.hasOwnProperty(n)&&r(t,n,o);else r(t,s[1],s[2])}}();function i(t,e){var n="string"==typeof t?t:d(t);return n.indexOf(" "+e+" ")>=0}function a(t,e){var n=d(t),r=n+e;i(n,e)||(t.className=r.substring(1))}function u(t,e){var n,r=d(t);i(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function d(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function c(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?r.call(e,n,e,t):r)||(t.exports=o)},function(t,e,n){var r=n(10),o=36e5,s=6e4,i=2,a=/[T ]/,u=/:/,d=/^(\d{2})$/,c=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],l=/^(\d{4})/,h=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],m=/^-(\d{2})$/,p=/^-?(\d{3})$/,f=/^-?(\d{2})-?(\d{2})$/,g=/^-?W(\d{2})$/,w=/^-?W(\d{2})-?(\d{1})$/,b=/^(\d{2}([.,]\d*)?)$/,v=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,y=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,x=/([Z+-].*)$/,S=/^(Z)$/,N=/^([+-])(\d{2})$/,E=/^([+-])(\d{2}):?(\d{2})$/;function M(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var o=7*e+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}t.exports=function(t,e){if(r(t))return new Date(t.getTime());if("string"!=typeof t)return new Date(t);var n=(e||{}).additionalDigits;n=null==n?i:Number(n);var C=function(t){var e,n={},r=t.split(a);if(u.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1]),e){var o=x.exec(e);o?(n.time=e.replace(o[1],""),n.timezone=o[1]):n.time=e}return n}(t),T=function(t,e){var n,r=c[e],o=h[e];if(n=l.exec(t)||o.exec(t)){var s=n[1];return{year:parseInt(s,10),restDateString:t.slice(s.length)}}if(n=d.exec(t)||r.exec(t)){var i=n[1];return{year:100*parseInt(i,10),restDateString:t.slice(i.length)}}return{year:null}}(C.date,n),I=T.year,L=function(t,e){if(null===e)return null;var n,r,o,s;if(0===t.length)return(r=new Date(0)).setUTCFullYear(e),r;if(n=m.exec(t))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(e,o),r;if(n=p.exec(t)){r=new Date(0);var i=parseInt(n[1],10);return r.setUTCFullYear(e,0,i),r}if(n=f.exec(t)){r=new Date(0),o=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return r.setUTCFullYear(e,o,a),r}if(n=g.exec(t))return s=parseInt(n[1],10)-1,M(e,s);if(n=w.exec(t)){s=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return M(e,s,u)}return null}(T.restDateString,I);if(L){var D,k=L.getTime(),A=0;return C.time&&(A=function(t){var e,n,r;if(e=b.exec(t))return(n=parseFloat(e[1].replace(",",".")))%24*o;if(e=v.exec(t))return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),n%24*o+r*s;if(e=y.exec(t)){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return n%24*o+r*s+1e3*i}return null}(C.time)),C.timezone?D=function(t){var e,n;return(e=S.exec(t))?0:(e=N.exec(t))?(n=60*parseInt(e[2],10),"+"===e[1]?-n:n):(e=E.exec(t))?(n=60*parseInt(e[2],10)+parseInt(e[3],10),"+"===e[1]?-n:n):0}(C.timezone):(D=new Date(k+A).getTimezoneOffset(),D=new Date(k+A+D*s).getTimezoneOffset()),new Date(k+A+D*s)}return new Date(t)}},function(t,e){HTMLElement.prototype.attachShadow||window.location.replace("browserNotSupported.html")},function(t,e){const n="bounceInUp",r="bounceOutDown",o="notificationsStorageKey";window.customElements.define("app-notifications",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.addcontentNode(),this.setStyleNode(),this.shouldFlashNow=!0,this.intervalId=null}onNextLoad(){return this.shouldFlashNow=!1,this}connectedCallback(){this.shadow.appendChild(this.styleNode),this.flashMessageInStorage()}flashMessageInStorage(){const t=window.localStorage.getItem(o);if(null===t)return;const e=JSON.parse(t),n=e.message,r=e.flashClass;this.flash(n,r),window.localStorage.removeItem(o)}error(t){this.flash(t,"danger")}success(t){this.flash(t,"success")}flash(t,e){if(!this.shouldFlashNow)return this.flashLater(t,e);this.contentNode.textContent=t,this.contentNode.className=`notification ${e} ${n}`,this.shadow.appendChild(this.contentNode);const o=window.setTimeout(()=>{this.contentNode.classList.remove(n),this.contentNode.classList.add(r),window.clearTimeout(o)},5e3)}flashLater(t,e){window.localStorage.setItem(o,JSON.stringify({message:t,flashClass:e}))}addcontentNode(){this.contentNode=document.createElement("div"),this.contentNode.addEventListener("animationend",this.doneAnimating.bind(this))}doneAnimating(t){this.contentNode.classList.contains(r)&&this.shadow.removeChild(this.contentNode)}setStyleNode(){this.styleNode=document.createElement("style"),this.styleNode.textContent="@keyframes bounceInUp { from, 60%, 75%, 90%, to { animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); } from { opacity: 0; transform: translate3d(0, 3000px, 0); } 60% { opacity: 1; transform: translate3d(0, -20px, 0); } 75% { transform: translate3d(0, 10px, 0); } 90% { transform: translate3d(0, -5px, 0); } to { transform: translate3d(0, 0, 0); } } @keyframes bounceOutDown { 20% { transform: translate3d(0, 10px, 0); } 40%, 45% { opacity: 1; transform: translate3d(0, -20px, 0); } to { opacity: 0; transform: translate3d(0, 2000px, 0); } } .notification{ z-index:1; position:fixed; top:0; left:0; right:0; text-align:center; text-align:center; padding:0.2em; font-size:1.2rem; animation-duration: 1s; animation-fill-mode: both; } .success{ color: #305c3d; border-left:4px solid #305c3d; background-color:#bfe1c9; } .danger{ background-color: #e1bec7; color:#e3342f; border-left:4px solid #e3342f; } .zoomIn { animation-name: zoomIn; } .bounceInUp { animation-name: bounceInUp; } .bounceOutDown { animation-name: bounceOutDown; } "}});const s=document.createElement("app-notifications");document.body.appendChild(s),window.Notify=s},function(t,e,n){"use strict";n(3);var r=class{constructor(t){this.baseUrl=t,this.method="GET",this.headers={"content-type":"application/json"},this.showProgress=!0,this.errrorInterceptors=[],this.addAuthroziationHeader()}addAuthroziationHeader(){const t=window.localStorage.getItem("auth-token");return t&&(this.headers.Authorization=`Bearer ${t}`),this}get(t){return this.makeRequest(t,"GET")}post(t,e){return this.makeRequest(t,"POST",e)}put(t,e){return this.makeRequest(t,"PUT",e)}patch(t,e){return this.makeRequest(t,"PATCH",e)}delete(t,e){return this.makeRequest(t,"DELETE",e)}resetState(t,e){this.method=t,this.data=e}makeOptions(){const t={method:this.method,mode:"cors",headers:this.headers};return this.data&&(t.body=JSON.stringify(this.data)),t}makeRequest(t,e,n=null){return this.resetState(e,n),this.showProgress&&window.PageLoader.start(),window.fetch(this.prepareUrl(t),this.makeOptions()).then(this.validateResponse.bind(this)).catch(this.handleFailure.bind(this)).finally(()=>window.PageLoader.done())}prepareUrl(t){if(!t)throw new Error("Url is not given");return t.startsWith("/")&&(t=t.replace("/","")),new URL(t,this.baseUrl)}validateResponse(t){return this.convertResponse(t).then(e=>t.ok?Promise.resolve(e):this.handleFailure(e,t))}handleFailure(t,e){let n;return n="string"==typeof t?t:t.message||"Something went wrong",this.fireErrorInterceptors(e),window.Notify.error(n),Promise.reject(t)}addErrorInterceptor(t){this.errrorInterceptors.push(t)}fireErrorInterceptors(t){t&&this.errrorInterceptors.forEach(e=>e(t))}convertResponse(t){const e=t.headers.get("content-type").toLowerCase();return e.includes("json")?t.json():e.includes("html")?t.text():Promise.reject({message:`Content-type: ${e} is not supported`})}withNoProgress(){return this.showProgress=!1,this}withProgress(){return this.showProgress=!1,this}},o=(n(4),n(1)),s=n.n(o);window.customElements.define("page-loader",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.containerNode=this.makeContainerNode(),this.shadow.appendChild(this.containerNode)}start(){this.containerNode.classList.add("show"),s.a.start()}done(){this.containerNode.classList.remove("show"),s.a.done()}makeContainerNode(){const t=document.createElement("div");return t.className="container",t.innerHTML='<style>.container{ position:fixed; background-color:#343435; z-index:50; top:0; bottom:0; right:0; left:0; justify-content:center; align-items:center; opacity:0.6; display:none; cursor: not-allowed; } svg{ fill:#1bcc46; height:6rem; width:6rem; } .show{ display:flex; }</style><svg width="135" height="140" xmlns="http://www.w3.org/2000/svg" fill="#fff"><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect></svg>',t}});const i=document.createElement("page-loader");document.body.appendChild(i),window.PageLoader=i,window.addEventListener("DOMContentLoaded",()=>i.start()),window.addEventListener("load",()=>i.done()),window.addEventListener("unload",i.start());var a=n(0);var u=class{constructor(t={}){this.errors=t}update(t={}){return this.errors=t,self}has(t){return!(!Object.prototype.hasOwnProperty.call(this.errors,t)||!this.errors[t])}first(t){return this.has(t)?this.all(t)[0]:null}all(t){return this.errors[t]}hasAny(){}};var d=class extends HTMLFormElement{constructor(){super(),this.addEventListener("submit",this.submitForm.bind(this)),this.inputs={},this.submitButton=null,this.errors=new u({})}connectedCallback(){Object(a.f)(this).then(()=>this.setInputs().setSubmitButton())}setInputs(){return this.querySelectorAll("custom-input,custom-textarea").forEach(t=>this.inputs[t.getName()]=t.setForm(this)),this}setSubmitButton(){return this.submitButton=this.querySelector("button[is='submit-button']"),this.submitButton||new Error("Form has no button of type submit-button"),this}submitForm(t){t.preventDefault(),this.submitButton.activateLoading(),window.Http.post(this.getAttribute("action"),this.getData()).then(this.successSubmission.bind(this)).catch(({errors:t})=>this.updateInputErrors(t)).finally(()=>this.submitButton.deactivateLoading())}successSubmission(t){this.updateInputErrors({}),this.dispatchEvent(new CustomEvent("submitted",{detail:t}))}getData(){const t={};return this.forAllInputs((e,n)=>t[n]=e.getValue()),t}updateInputErrors(t){this.errors.update(t),this.dispatchEvent(new Event("errors"))}forAllInputs(t){for(let e in this.inputs)t(this.inputs[e],e)}};var c=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.form=null,this.setName().setStyleNode().setInputNode().setErrorNode()}setForm(t){return this.form=t,this.form.addEventListener("errors",this.updateError.bind(this)),this.form.addEventListener("submitted",()=>this.resetInput()),this}updateError(){this.form.errors.has(this.name)?this.displayError(this.form.errors.first(this.name)):this.removeError()}setName(){if(this.name=this.getAttribute("name"),!this.name)throw new Error("Custom Field has no name attribute");return this}setErrorNode(){return this.errorNode=document.createElement("span"),this.errorNode.className="field-error",this.errorNode.setAttribute("hidden",!0),this.shadow.appendChild(this.errorNode),this}setStyleNode(){return this.styleNode=document.createElement("style"),this.styleNode.textContent=".field-error{ color:#E3342F; } .input { box-sizing: border-box; display: block; width: 100%; font-size: 1rem; border: 2px solid #b8c2cc; padding: 0.25em 0.5em; resize: none; color: #323232; } .input:focus { outline: none; box-shadow: inset 0 0 0 0.075em #dae1e7; } .input:invalid{ border-top-color:#E3342F; border-top-width:4px; } ",this.shadow.appendChild(this.styleNode),this}setInputNode(){const t=this.getAttribute("type")||"text";return this.inputNode=document.createElement("input"),this.inputNode.setAttribute("type",t),this.inputNode.className="input",this.shadow.appendChild(this.inputNode),this}getName(){return this.name}getValue(){return this.inputNode.value}displayError(t){this.errorNode.textContent=t,this.inputNode.setCustomValidity(t),this.errorNode.removeAttribute("hidden")}removeError(){this.errorNode.textContent="",this.inputNode.setCustomValidity(""),this.errorNode.setAttribute("hidden",!0)}resetInput(){this.inputNode.value=""}};var l=class extends c{setInputNode(){const t=this.getAttribute("placeholder")||"";return this.inputNode=document.createElement("textarea"),this.inputNode.setAttribute("rows",this.getAttribute("rows")||3),this.inputNode.setAttribute("placeholder",t),this.inputNode.className="input",this.shadow.appendChild(this.inputNode),this.computed=null,this}connectedCallback(){this.inputNode.addEventListener("input",this.autoSize.bind(this)),window.customElements.whenDefined("custom-textarea").then(this.autoSize.bind(this))}autoSize(){this.inputNode.style.height="inherit",this.computed=window.getComputedStyle(this.inputNode);const t=this.inputNode.scrollHeight+this.boxValue("border-top-width")+this.boxValue("padding-top")+this.boxValue("padding-bottom")+this.boxValue("border-bottom-width");this.inputNode.style.height=t+"px"}boxValue(t){return parseFloat(this.computed.getPropertyValue(t),10)}};var h=class extends HTMLButtonElement{constructor(){super(),this.type="submit"}activateLoading(){this.setAttribute("disabled",!0)}deactivateLoading(){this.removeAttribute("disabled")}};Object(a.a)({CustomInput:c,CustomTextarea:l,AjaxForm:d,SubmitButton:h},{AjaxForm:"form",SubmitButton:"button"}),window.Http=new r(Object(a.c)())},function(t,e,n){var r=n(8);t.exports=function(t,e){return r(Date.now(),t,e)}},,function(t,e,n){var r=n(9),o=n(2),s=n(11),i=n(13),a=n(16),u=1440,d=2520,c=43200,l=86400;t.exports=function(t,e,n){var h=n||{},m=r(t,e),p=h.locale,f=a.distanceInWords.localize;p&&p.distanceInWords&&p.distanceInWords.localize&&(f=p.distanceInWords.localize);var g,w,b={addSuffix:Boolean(h.addSuffix),comparison:m};m>0?(g=o(t),w=o(e)):(g=o(e),w=o(t));var v,y=s(w,g),x=w.getTimezoneOffset()-g.getTimezoneOffset(),S=Math.round(y/60)-x;if(S<2)return h.includeSeconds?y<5?f("lessThanXSeconds",5,b):y<10?f("lessThanXSeconds",10,b):y<20?f("lessThanXSeconds",20,b):y<40?f("halfAMinute",null,b):f(y<60?"lessThanXMinutes":"xMinutes",1,b):0===S?f("lessThanXMinutes",1,b):f("xMinutes",S,b);if(S<45)return f("xMinutes",S,b);if(S<90)return f("aboutXHours",1,b);if(S<u)return f("aboutXHours",Math.round(S/60),b);if(S<d)return f("xDays",1,b);if(S<c)return f("xDays",Math.round(S/u),b);if(S<l)return f("aboutXMonths",v=Math.round(S/c),b);if((v=i(w,g))<12)return f("xMonths",Math.round(S/c),b);var N=v%12,E=Math.floor(v/12);return N<3?f("aboutXYears",E,b):N<9?f("overXYears",E,b):f("almostXYears",E+1,b)}},function(t,e,n){var r=n(2);t.exports=function(t,e){var n=r(t).getTime(),o=r(e).getTime();return n>o?-1:n<o?1:0}},function(t,e){t.exports=function(t){return t instanceof Date}},function(t,e,n){var r=n(12);t.exports=function(t,e){var n=r(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}},function(t,e,n){var r=n(2);t.exports=function(t,e){var n=r(t),o=r(e);return n.getTime()-o.getTime()}},function(t,e,n){var r=n(2),o=n(14),s=n(15);t.exports=function(t,e){var n=r(t),i=r(e),a=s(n,i),u=Math.abs(o(n,i));return n.setMonth(n.getMonth()-a*u),a*(u-(s(n,i)===-a))}},function(t,e,n){var r=n(2);t.exports=function(t,e){var n=r(t),o=r(e);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}},function(t,e,n){var r=n(2);t.exports=function(t,e){var n=r(t).getTime(),o=r(e).getTime();return n<o?-1:n>o?1:0}},function(t,e,n){var r=n(17),o=n(18);t.exports={distanceInWords:r(),format:o()}},function(t,e){t.exports=function(){var t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(e,n,r){var o;return r=r||{},o="string"==typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}}}},function(t,e,n){var r=n(19);t.exports=function(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["AM","PM"],a=["am","pm"],u=["a.m.","p.m."],d={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return o[t.getDay()]},dddd:function(t){return s[t.getDay()]},A:function(t){return t.getHours()/12>=1?i[1]:i[0]},a:function(t){return t.getHours()/12>=1?a[1]:a[0]},aa:function(t){return t.getHours()/12>=1?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(t){d[t+"o"]=function(e,n){return function(t){var e=t%100;if(e>20||e<10)switch(e%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"}(n[t](e))}}),{formatters:d,formattingTokensRegExp:r(d)}}},function(t,e){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];t.exports=function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);var o=n.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(t,e){const n="#QuestionForm";new class{constructor(){const t=document.querySelector(n);t&&t.addEventListener("submitted",this.onSubmit.bind(this))}onSubmit(){window.Notify.onNextLoad().success("Question was added successfully"),window.location.replace("index.html")}}},function(t,e){const n=t=>{const e=t.currentTarget;e.classList.toggle("active");const n=e.previousElementSibling||e.nextElementSibling;n&&n.classList.remove("active")};document.querySelectorAll(".js-vote-button").forEach(t=>t.addEventListener("click",n))},function(t,e,n){"use strict";n.r(e);n(23),n(5);var r=n(0);const o="#JS-Sidebar",s="#JS-sidebar-user-profile",i="#JS-logout-link",a=window.location.pathname,u=["answers.html","/"];class d{constructor(t){this.sidebarNode=t,this.links=this.getLinks(),this.links.forEach(this.activateSidebarLink.bind(this)),this.addUserName(),this.listenForLogout()}getLinks(){return this.sidebarNode.querySelectorAll(".sidebar-link")}activateSidebarLink(t){if(a===t.pathname)return t.classList.add("active");return"index.html"===t.getAttribute("href")&&this.pathIsRelatedToQuestion()?t.classList.add("active"):null}pathIsRelatedToQuestion(){return u.includes(a.replace(/(^\/)(.+)/g,"$2"))}listenForLogout(){const t=this.sidebarNode.querySelector(i);t&&t.addEventListener("click",this.logout.bind(this))}logout(t){t.preventDefault(),Object(r.d)()}addUserName(){const t=this.sidebarNode.querySelector(s);if(t){const e=document.createElement("h5");e.className="fw-600",e.textContent=window.localStorage.getItem("auth-name")||"",t.appendChild(e)}}static activateSidebar(t){if(t)return new d(t);throw new TypeError(`No id with ${o} was found in the document`)}}(t=>{d.activateSidebar(t)})(document.querySelector(o));var c=n(6),l=n.n(c);var h=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.setStyleNode().setContentNodes()}static get observedAttributes(){return["when","name"]}attributeChangedCallback(t,e,n){this[t]=n}set when(t){this.whenNode.textContent=l()(t,{includeSeconds:!0})+" ago"}set name(t){this.nameNode.textContent=t}setStyleNode(){return this.styleNode=document.createElement("style"),this.styleNode.textContent="div{ font-size:1.2rem; display:flex; justify-content:flex-end; flex-wrap:wrap; font-size:var(--font-small); color:var(--grey-dark); border-top:1px solid var(--light); padding-top:0.5em; } #when{ font-weight:600; } .px-2{ padding-left:1.5em; padding-right:0.5em; } ",this.shadowRoot.appendChild(this.styleNode),this}setContentNodes(){const t=document.createElement("div");t.innerHTML='<span id="when"></span><span class="px-2">By</span><strong class="text-primary" id="name"></strong>',this.shadowRoot.appendChild(t),this.whenNode=t.querySelector("#when"),this.nameNode=t.querySelector("#name")}};Object(r.a)({AuthorDetails:h});var m=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.questions=[],this.renderedQuestions={}}connectedCallback(){window.Http.get("/questions").then(this.renderQuestions.bind(this))}renderQuestions({data:t}){t.sort(this.sortQuestions.bind(this)).forEach(this.renderQuestion.bind(this))}sortQuestions(t,e){return new Date(e.updated_at)-new Date(t.updated_at)}renderQuestion(t){const e=document.createElement("single-question");this.renderedQuestions[t.id]=e,e.summarize().setTemplate(t),this.shadowRoot.appendChild(e)}};var p=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.contentNode=document.createElement("div"),this.shadowRoot.appendChild(this.contentNode),this.isSummarized=!1}summarize(t=!0){return this.isSummarized=t,this}setTemplate(t){const e=t.author;let n=t.description,o=t.updated_at;n=this.isSummarized?Object(r.e)(n):n,this.contentNode.innerHTML=`<style>:host{ display:block; box-shadow:var(--shadow); margin-bottom:1em; width:100%; } a{ text-decoration:none; } a:hover{ text-decoration:underline; } img{ width:50px; heigth:50px; border-radius:50%; } .container{ display:flex; padding:1em; } .title{ display:block; font-weight:900; color:var(--dark); font-family:var(--font-serif); font-size:1.1rem; } .question-body{ margin-left:0.5em; line-height:1.6; width:100%; } p{ color:var(--grey-dark); line-height:1.8; }</style><div class="container"><div><img src="images/user.png" alt="${e.name} image" ></div><div class="question-body"><a href="answers.html#${t.id}" class="title">${t.title}</a><p>${n}</p><author-details when="${o}" name="${e.name}"></author-details></div></div>`}};n(20);Object(r.a)({SingleQuestion:p,AllQuestions:m});var f=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.addChildComponents(),window.addEventListener("hashchange",this.hashChanged.bind(this)),this.fetchQuestionWithAnswers()}addChildComponents(){this.question=document.createElement("single-question"),this.answers=document.createElement("all-answers"),this.answerForm=document.createElement("answer-form"),this.shadowRoot.appendChild(this.question),this.shadowRoot.appendChild(this.answers),this.shadowRoot.appendChild(this.answerForm)}fetchQuestionWithAnswers(){const t=window.location.hash.replace("#","");window.Http.get(`/questions/${t}`).then(({data:t})=>{this.question.setTemplate(t),console.log(this.question)}).catch(this.onErrorFetching.bind(this))}onErrorFetching(t){}hashChanged(t){this.fetchQuestionWithAnswers()}};var g=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};var w=class extends HTMLElement{};var b=class extends HTMLElement{};Object(r.a)({AnswersComponent:f,AllAnswers:g,SingleAnswer:w,AnswerForm:b});n(21);new class{constructor(){window.Http.addErrorInterceptor(this.handleErrors.bind(this))}handleErrors(t){const e=t.status;return 401===e?(window.Notify.onNextLoad().error("Unauthorized, Please login!"),Object(r.d)()):[404,500].includes(e)?this.redirectToErrorPage(t):null}redirectToErrorPage(t){window.location.href="errorsPage.html"}},Object(r.b)()},function(t,e){}]);