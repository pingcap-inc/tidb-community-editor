var Ye=Object.defineProperty,Je=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var ce=(t,e,n)=>e in t?Ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,T=(t,e)=>{for(var n in e||(e={}))we.call(e,n)&&ce(t,n,e[n]);if(te)for(var n of te(e))Te.call(e,n)&&ce(t,n,e[n]);return t},M=(t,e)=>Je(t,Xe(e));var xe=(t,e)=>{var n={};for(var s in t)we.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&te)for(var s of te(t))e.indexOf(s)<0&&Te.call(t,s)&&(n[s]=t[s]);return n};var O=(t,e,n)=>(ce(t,typeof e!="symbol"?e+"":e,n),n);import{r as v,u as _e,a as ke,p as Ze,b as et,c as tt,d as nt,E as b,e as E,f as ue,j as i,g as Q,T as ne,l as z,h as Ne,i as Me,F as L,k as fe,m as pe,n as de,o as se,R as q,P as y,N as u,q as I,s as st,t as g,v as Ee,w as j,x as B,y as rt,z as Pe,A as ot,B as at,_ as G,C as Ce,D as re,G as Se,H as Ie,I as Re,J as De,K as Oe,L as Le,M as lt,O as it,Q as ct,S as ut,U as ft,V as pt,W as dt,X as gt,Y as ht,Z as mt,$ as yt,a0 as Ae,a1 as bt,a2 as vt}from"./vendor.7cf0e345.js";const wt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};wt();class Tt{constructor(e,n){O(this,"getMarkdownProcessor",_e().use(ke).use(Ze).use(et,{bullet:"-",listItemIndent:"one",fence:"`",rule:"-"}));O(this,"setMarkdownProcessor",_e().use(ke).use(tt).use(nt));this.editor=e,this.setValue=n,this.getMarkdownProcessor.freeze(),this.setMarkdownProcessor.freeze()}get markdown(){return this.getMarkdownProcessor.stringify(this.getMarkdownProcessor.runSync({type:"root",children:this.editor.children}))}set markdown(e){this.setValue(this.setMarkdownProcessor.processSync(e).result),setTimeout(()=>{b.normalize(this.editor,{force:!0})},0)}}function xt(t){const[e,n]=v.exports.useState([{type:"paragraph",children:[{text:""}]}]);return[v.exports.useMemo(()=>new Tt(t,n),[t]),e,n]}var w;(function(t){t[t.flow=16]="flow",t[t.list=32]="list",t[t.phrasing=48]="phrasing",t[t.staticPhrasing=49]="staticPhrasing",t[t.value=64]="value",t[t.table=80]="table",t[t.tableRow=96]="tableRow"})(w||(w={}));function H(t,e){return t===e||t<e&&(t^e)<16}function R(t){return M(T({},t),{register(e){e.define(t)}})}function C(t,e){return E.isElement(t)?e instanceof Array?e.indexOf(t.type)>=0:t.type===e:!1}function ze({icon:t,active:e,disabled:n,action:s,tips:r}){const o=ue(),a=v.exports.useCallback(p=>{s&&p.button===0&&(p.preventDefault(),p.stopPropagation(),n||b.withoutNormalizing(o,()=>{s(p)}))},[s]),c=i("span",{className:Q("toolbar-item",{active:e,disabled:n}),onMouseDown:a,children:t});return r?i(ne,{content:i("span",{className:"toolbar-item-tips",children:r}),children:c}):c}z.add(Ne,Me);function _t({isEmpty:t,element:e,items:n,setActive:s}){return i(ne,{appendTo:"parent",content:kt(n),hideOnClick:!1,interactive:!0,onHide:()=>s(!1),onShow:()=>s(!0),children:i("span",{className:"line-operations",contentEditable:!1,children:i(L,{icon:t?Me:Ne})})})}const kt=t=>i("div",{className:"block-toolbar",children:t.map((e,n)=>i("div",{className:"toolbar-group",children:e.map(s=>i(ze,{action:s.action,active:s.active,disabled:s.disabled,icon:s.icon,tips:s.tips},s.key))},n))});z.add(fe,pe,de,se);function Nt(t,e){const n=e==null?void 0:e.current;return t.factory.blockConfigs.map(s=>s.toolbarItems.map(({key:r,isDisabled:o,isActive:a,action:c,icon:p,tips:h})=>({key:r,disabled:n?o(t,n):!1,active:n?a(t,n):!1,icon:p,action:n?l=>c(t,n,l):()=>{},tips:h}))).filter(s=>s.length>0)}function je(){const[t,e]=v.exports.useState(0);return()=>{e(n=>n+1)}}function Y({element:t,children:e}){const[n,s]=v.exports.useState(null),r=v.exports.useRef(),o=ue(),a=Nt(o,r.current),c=je();v.exports.useLayoutEffect(()=>{var f,d;if(n){const m=document.createRange();m.selectNode(n.childNodes.item(0));const _=q.toSlateRange(o,m,{exactMatch:!1});let x=y.common(_.anchor.path,_.focus.path);for(;x.length!==0;){if(b.isBlock(o,u.get(o,x))){r.current=b.pathRef(o,x);break}x=y.parent(x)}}else r.current&&((d=(f=r.current).unref)==null||d.call(f)),r.current=void 0},[n]);const[p,h]=v.exports.useState(!1),l=(()=>{const f=t.children[0];return t.children.length===1&&I.isText(f)&&f.text===""})();return i(st,{appendTo:document.body,arrow:!1,hideOnClick:!1,interactive:!0,interactiveBorder:12,offset:[0,8],onTrigger:c,placement:"left",popperOptions:{modifiers:[{name:"flip",options:{allowedAutoPlacements:["left"]}}]},ref:s,render:()=>i(_t,{element:t,isEmpty:l,items:a,setActive:h}),children:typeof e=="function"?e({active:p,pathRef:r.current}):e})}const Mt=["markdown","javascript","typescript","jsx","tsx","sql","bash","go","rust","json","log"],J=Symbol("prism_token"),Et=[{key:"code-block",icon:i(L,{icon:se}),isActive:(t,e)=>C(u.get(t,e),"code"),isDisabled:(t,e)=>{const n=u.get(t,e);if(C(n,"code"))return!1;const s=u.parent(t,e),r=t.getContentModelType(s);return r?!H($e.contentType,r):!0},tips:i(j,{children:"\u4EE3\u7801\u5757"}),action:(t,e,n)=>{const s=u.get(t,e);if(C(s,"code"))g.unsetNodes(t,Object.keys(u.extractProps(s)),{at:e}),g.setNodes(t,{type:"paragraph"},{at:e});else{const r=u.string(s);g.removeNodes(t,{at:e}),g.insertNodes(t,{type:"code",lang:"markdown",meta:void 0,children:[{text:r}]},{at:e,select:!0})}}}],$e=R({type:"code",isInline:!1,isLeaf:!1,isVoid:!1,isDisallowTextDecorators:!0,isHiddenHoverToolbar:!0,wrappingParagraph:!1,contentType:w.flow,contentModelType:w.flow,render:(t,{element:e,children:n,attributes:s})=>i(Y,{element:e,children:({active:r,pathRef:o})=>i(ne,{appendTo:document.body,content:i("select",{className:"lang-selector",contentEditable:!1,onChange:a=>{(o==null?void 0:o.current)&&g.setNodes(t,{lang:a.currentTarget.value},{at:o.current})},tabIndex:void 0,value:e.lang||void 0,children:Mt.map(a=>i("option",{children:a},a))}),interactive:!0,placement:"top-start",children:i("pre",M(T({},s),{className:Q({active:r},e.lang?`language-${e.lang}`:void 0),children:i("code",{className:"prism-code",children:n})}))})}),toggle:{prefix:/^`{3}(?: (\w+))?$/,toggle:(t,e,n)=>{if(n){const s=u.string(u.get(t,e));g.removeNodes(t,{at:e}),g.insertNodes(t,M(T({type:"code"},n),{children:[{text:s}]}),{at:e}),g.select(t,e.concat(0))}else g.unsetNodes(t,["meta","lang"],{at:e}),g.setNodes(t,{type:"paragraph"},{at:e})},onTrigger:(t,e,n)=>{if(n.length>1)return;const s=/^`{3}(?: (\w+))?$/.exec(t);return s?{lang:s[1]||"markdown",meta:void 0}:{lang:"markdown",meta:void 0}}},events:{},toolbarItems:Et,decorate:(t,[e,n],s)=>{if(I.isText(e)&&s.lang){const r=Ee.languages[s.lang];if(!r)return[];const o=[],a=Ee.tokenize(e.text,r);let c=0;for(const p of a){const h=qe(p),l=c+h;typeof p!="string"&&o.push({[J]:p.type,anchor:{path:n,offset:c},focus:{path:n,offset:l}}),c=l}return o}return[]}}),qe=t=>typeof t=="string"?t.length:typeof t.content=="string"?t.content.length:t.content.reduce((e,n)=>e+qe(n),0);var Pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SYMBOL_PRISM_TOKEN:J,default:$e}),D;(function(t){t.strong="strong",t.emphasis="emphasis",t.delete="delete",t.inlineCode="inlineCode"})(D||(D={}));const W=R({isLeaf:!0,contentType:w.staticPhrasing,contentModelType:w.value,canContainsContentModelTypeOf:t=>t.inlineCode?w.value:(t.strong||t.emphasis||t.delete,w.phrasing),normalize:(t,e,n,s)=>{if(e.text===""){const r=[D.strong,D.emphasis,D.delete,D.inlineCode].filter(o=>!!e[o]);r.length>0&&g.unsetNodes(t,r,{at:n})}},render(t,{leaf:e,children:n,attributes:s}){let r=n;return e[J]&&(r=i("span",{className:Q(e[J]?`token ${e[J]}`:void 0,s.className),children:r})),e.delete&&(r=i("del",{children:r})),e.emphasis&&(r=i("em",{children:r})),e.strong&&(r=i("strong",{children:r})),e.inlineCode&&(r=i("code",{children:r})),i("span",M(T({},s),{children:r}))},toggleDecorator:(t,e,n)=>{const s=Be(t),r=o=>s(u.get(t,o.anchor.path),o.anchor.path);ge(t,e,n)?B.isCollapsed(e)?r(e)&&b.addMark(t,n,!1):g.setNodes(t,{[n]:!1},{match:s,split:!0}):B.isCollapsed(e)?r(e)&&b.addMark(t,n,!0):g.setNodes(t,{[n]:!0},{match:s,split:!0})},toolbarItems:[{key:D.strong,icon:fe,tips:i(j,{children:"\u52A0\u7C97"})},{key:D.emphasis,icon:pe,tips:i(j,{children:"\u659C\u4F53"})},{key:D.inlineCode,icon:se,tips:i(j,{children:"\u884C\u5185\u4EE3\u7801"})},{key:D.delete,icon:de,tips:i(j,{children:"\u5220\u9664"})}].map(({key:t,icon:e,tips:n})=>({key:t,icon:i(L,{icon:e}),isActive:(s,r)=>ge(s,r,t),isDisabled:(s,r)=>!oe(s,r),action:(s,r,o)=>{W.toggleDecorator(s,r,t)},tips:n}))});function ge(t,e,n){if(!q.hasRange(t,e))return!1;const s=b.marks(t);return s?!!s[n]:!1}const oe=(t,e)=>{const n=Fe(t),[s]=b.nodes(t,{at:e,match:n});return!s},Be=t=>(e,n)=>{if(!I.isText(e))return!1;const s=u.parent(t,n);if(E.isElement(s)){const r=t.factory.customElementMap.get(s.type);return r?!r.isDisallowTextDecorators:!1}else return!1},Fe=t=>(e,n)=>{if(!I.isText(e))return!1;const s=u.parent(t,n);if(E.isElement(s)){const r=t.factory.customElementMap.get(s.type);return r?!!r.isDisallowTextDecorators:!0}else return!0};function X(t,e,n,s){if(B.isRange(e)){if(!q.hasRange(t,e))return!1}else if(y.isPath(e)){if(!b.hasPath(t,e))return!1}else if(!q.hasRange(t,{anchor:e,focus:e}))return!1;if(y.isPath(e)){const o=u.get(t,e);return C(o,n)&&(s?s(o):!0)}const[r]=b.nodes(t,{at:B.isRange(e)?b.unhangRange(t,e):e,match:o=>!b.isEditor(o)&&C(o,n)&&(s?s(o):!0)});return!!r}var Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",get TextNodeDecorator(){return D},isDecoratorActive:ge,isRangeCustomTextPropsEnabled:oe,isCustomTextPropsEnabled:Be,isCustomTextPropsNotEnabled:Fe,isElementActive:X,default:W});function St({schema:t,onSubmit:e,defaultValues:n}){return i("div",{contentEditable:!1,children:i(rt,{className:"action-form",formData:n,onSubmit:s=>e(s.formData),schema:t})})}function It(t,e){return v.exports.useCallback(()=>t.selection?q.toDOMRange(t,t.selection).getBoundingClientRect():e.getBoundingClientRect(),[t,e])}function Rt(t,e){return v.exports.useCallback(()=>{t("user canceled"),e.current&&e.current.hide()},[t])}function Dt(){const t=v.exports.useRef(),e=v.exports.useCallback(n=>{t.current=n},[t]);return[t,e]}function Ot(t,e,n,s){const r=v.exports.useCallback(o=>{var a;e(o),(a=s.current)==null||a.hide()},[e,s]);return v.exports.useMemo(()=>i(St,{defaultValues:n,onSubmit:r,schema:t}),[t,r])}function Lt({editor:t,el:e,reject:n,resolve:s,schema:r,defaultValues:o}){const[a,c]=Dt(),p=It(t,e),h=Rt(n,a),l=Ot(r,s,o,a);return i(ne,{content:l,getReferenceClientRect:p,interactive:!0,onClickOutside:h,onMount:c,placement:"right-start",visible:!0,children:i("span",{})})}function he(t,e,n,s){return new Promise((r,o)=>{t.setActionForm(i(Lt,{defaultValues:s,editor:t,el:e,reject:o,resolve:r,schema:n}))}).catch(r=>{if(r==="user canceled")return Promise.resolve(void 0);throw r})}const At="\u6DFB\u52A0\u8D85\u94FE\u63A5",zt="object",jt={src:{title:"\u94FE\u63A5",type:"string",format:"url"},text:{title:"\u663E\u793A\u6587\u672C",type:"string"}},$t=["src","text"];var qt={title:At,type:zt,properties:jt,required:$t};z.add(Pe);const me=R({type:"link",isInline:!0,isVoid:!1,isLeaf:!1,contentType:w.phrasing,contentModelType:w.staticPhrasing,normalize:(t,e,n,s)=>{u.string(e).trim().length===0&&(g.removeNodes(t,{at:n}),s())},render:(t,{element:e,attributes:n,children:s})=>i("a",M(T({href:e.url,onClick:()=>window.open(e.url,"_blank"),style:{display:"inline-flex",cursor:"pointer"}},n),{children:s})),insert:(t,e,r)=>{var o=r,{text:n}=o,s=xe(o,["text"]);g.insertNodes(t,[T({type:"link",children:[{text:n}]},s),{text:" "}],{at:e,select:!0}),ot.isPoint(e)&&g.move(t,{distance:1})},match:{regexp:at()},toolbarItems:[{key:"link",icon:i(L,{icon:Pe}),tips:i(j,{children:"\u8D85\u94FE\u63A5"}),isActive:(t,e)=>X(t,e,"link"),isDisabled:(t,e)=>!y.equals(y.parent(e.focus.path),y.parent(e.anchor.path))||!oe(t,e),action:(t,e,n)=>{X(t,e,"link")?g.unwrapNodes(t,{at:b.unhangRange(t,e),match:s=>!b.isEditor(s)&&E.isElement(s)&&s.type==="link"}):he(t,n.target,qt,{text:b.string(t,e),src:""}).then(s=>{if(s){const{src:r,text:o}=s;b.withoutNormalizing(t,()=>{me.insert(t,e,{url:r,title:"",text:o})})}})}}]});var Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me});class Ft{constructor(e,n){O(this,"state",[]);this.factory=e,this.editor=n}process(e){const[n,s]=e;if(b.isEditor(n))return this.state=[],[];if(E.isElement(n)){const r=this.factory.customElementMap.get(n.type);if(r&&!r.isInline){const o=r;if(o.decorate)return this.state.push({element:n,path:s,config:o}),[]}}if(this.state.length>0){for(const r of this.state.reverse())if(y.isAncestor(r.path,s))return r.config.decorate(this.editor,e,r.element)}return[]}}class Ht{constructor(){O(this,"blockConfigs",[]);O(this,"inlineConfigs",[]);O(this,"textConfig");O(this,"inlineSet",new Set);O(this,"voidSet",new Set);O(this,"customElementMap",new Map);O(this,"contentTypeMap",new Map);O(this,"contentModelTypeMap",new Map)}define(e){return e.isLeaf?this.textConfig=e:(e.isInline?(this.inlineSet.add(e.type),this.inlineConfigs.push(e)):this.blockConfigs.push(e),this.customElementMap.set(e.type,e),this.contentModelTypeMap.set(e.type,e.contentModelType),this.contentTypeMap.set(e.type,e.contentType),e.isVoid&&this.voidSet.add(e.type)),this}wrapEditor(e){const{isVoid:n,isInline:s,normalizeNode:r}=e;return e.factory=this,e.updatePopper=e.hidePopper=e.togglePopper=()=>{},e.isContent=(o,a)=>E.isElement(o)?this.contentTypeMap.get(o.type)===a:I.isText(o)?this.textConfig.contentType===a:!1,e.canContainsContent=(o,a)=>{if(b.isEditor(o))return a===w.flow;if(E.isElement(o)){const c=this.contentModelTypeMap.get(o.type);return c?H(a,c):!1}else return I.isText(o)?H(a,W.canContainsContentModelTypeOf(o)):!1},e.getContentType=o=>E.isElement(o)?this.contentTypeMap.get(o.type)||null:I.isText(o)&&this.textConfig.contentType||null,e.getContentModelType=o=>b.isEditor(o)?w.flow:E.isElement(o)?this.contentModelTypeMap.get(o.type)||null:I.isText(o)?this.textConfig.contentModelType:null,e.getContentTypePair=o=>E.isElement(o)?[this.contentTypeMap.get(o.type)||null,this.contentModelTypeMap.get(o.type)||null]:I.isText(o)?[this.textConfig.contentType||null,this.textConfig.contentModelType||null]:[null,null],e.toggle=(o,a,c)=>{const p=e.canToggle(o,a,!0);if(!p)return!1;const[[h,l],f]=p,d=typeof c=="object"?c:{};switch(f){case U.replace:return g.unsetNodes(e,Object.keys(u.extractProps(h))),g.setNodes(e,M(T({type:a.type},d),{children:[]}),{at:l}),!0;case U.wrap:return g.wrapNodes(e,T({type:a.type},d),{at:l}),!0;case U.custom:throw new Error("TODO: ToggleStrategy.custom");default:throw new Error("unknown ToggleStrategy: "+f)}},e.canToggle=(o,a,c)=>{const[p]=o,[h,l]=e.getContentTypePair(p);if(a.contentType!==h)return!1;if(a.contentModelType===l)return[o,U.replace];if(a.contentModelType===h)return[o,U.wrap];if(!c)return!1;const f=u.ancestors(e,o[1],{reverse:!0});for(const d of f){const m=e.canToggle(d,a,!1);if(m)return m}return!1},e.unwrap=(o,a)=>{if(!e.canUnwrap(o,a))return!1;const[c,p]=o,h=[[[]]];let l=[[c,[]]],f=0;for(;f<a.length-1;){const d=[];for(const[m,_]of l)for(const[x,N]of m.children.entries())d.push([N,_.concat(x)]);f+=1,l=d,h.push(d.map(([,m])=>m))}for(const d of h.reverse())for(const m of d.reverse())g.unwrapNodes(e,{at:p.concat(m),split:!0});return!0},e.canUnwrap=([o,a],c)=>{if(c.length===0)return!0;const p=e.getContentModelType(u.parent(e,a)),h=c[c.length-1].contentModelType;if(!p||!h||!H(h,p))return!1;let l=[[o,[]]],f=0;for(;f<c.length;){const d=[];for(const[m,_]of l){if(!C(m,c[f].type))return!1;for(const[x,N]of m.children.entries())d.push([N,_.concat(x)])}f+=1,l=d}return!0},e.wrap=(o,a,c)=>{if(!e.canWrap(o,a,c))return!1;const[,p]=o;let h=a.length-1;for(;h>=0;){const l=a[h],f=c[h];g.wrapNodes(e,Object.assign({type:l.type,children:[]},f),{at:p}),h--}return!0},e.canWrap=(o,a,c)=>{console.assert(a.length===c.length,"editor.canWrap: configs.length should be equals to params.length");const[p,h]=o,l=u.parent(e,h);let f=0,d=e.getContentModelType(l);for(;f<a.length;){const _=a[f];if(d===null||!H(_.contentType,d))return!1;d=_.contentModelType,f+=1}if(d===null)return!1;const m=e.getContentType(p);return m?H(m,d):!1},e.nearest=(o,a)=>{const[c,p]=o;if(C(c,a.type))return o;for(const h of u.ancestors(e,p,{reverse:!0}))if(C(h[0],a.type))return h},e.getAndRemoveMark=o=>{if(e.marks){const a=e.marks[o];return e.removeMark(o),a}},e.isVoid=o=>this.voidSet.has(o.type)||n(o),e.isInline=o=>this.inlineSet.has(o.type)||s(o),e.normalizeNode=o=>{let a=!0;const c=()=>{a=!1};b.withoutNormalizing(e,()=>{var l;const[p,h]=o;if(E.isElement(p)){const f=(l=this.customElementMap.get(p.type))==null?void 0:l.normalize;f&&f(e,p,h,c)}I.isText(p)&&this.textConfig.normalize&&this.textConfig.normalize(e,p,h,c)}),a&&r(o)},e}createDefaultEditableProps(e){const n=l=>{var d;const{selection:f}=e;if(f&&B.isCollapsed(f)){const m=f.anchor,_=u.get(e,m.path),x=u.parent(e,m.path);if(I.isText(_)&&E.isElement(x)&&x.type==="paragraph"&&l.data===" "&&!y.hasPrevious(m.path)){const N=_.text.slice(0,m.offset);for(const{toggle:k}of this.blockConfigs)if(!(typeof k.estimatePrefixLength=="number"&&N.length>k.estimatePrefixLength)&&((d=k.prefix)==null?void 0:d.test(N))){const P=k.onTrigger(N,e,y.parent(m.path));if(typeof P!="undefined"){g.delete(e,{at:{path:m.path,offset:0},distance:m.offset}),k.toggle(e,y.parent(m.path),P),l.preventDefault();return}}}if(I.isText(_)&&!C(x,"link")&&l.data===" "){for(const N of this.inlineConfigs)if(N.match){const k=N.match.regexp.exec(_.text.slice(0,m.offset));if(k){const P=k[0],F=k.index,Qe=k.index+P.length,Ge={anchor:{path:m.path,offset:F},focus:{path:m.path,offset:Qe}};me.insert(e,Ge,{url:P,title:"",text:P}),l.preventDefault();return}}}if(b.isInline(e,x)){const N=y.parent(m.path).concat(x.children.length);g.insertNodes(e,{text:l.data||""},{at:N}),g.move(e,{distance:1}),l.preventDefault();return}}},s=l=>f=>{const{selection:d}=e;if(d&&B.isCollapsed(d)){const m=d.anchor;if(Vt(e,m)){const _=y.parent(m.path),x=u.get(e,_);if(E.isElement(x)){const N=this.customElementMap.get(x.type);if(N){const k=l(N.events);if(k&&k(e,m.path)){f.preventDefault();return}}if(x.type==="paragraph"){const k=u.parent(e,_);if(!y.hasPrevious(_)&&E.isElement(k)){const P=this.customElementMap.get(k.type);if(P==null?void 0:P.wrappingParagraph){const F=l(P.events);if(F&&F(e,m.path)){f.preventDefault();return}}}}}}}},r=s(l=>l.onStartDelete),o=s(l=>l.onStartEnter),c=(l=>f=>{const{selection:d}=e;if(d&&B.isCollapsed(d)){const m=d.anchor,_=y.parent(m.path),x=u.parent(e,m.path);if(E.isElement(x)){const N=this.customElementMap.get(x.type);if(N){const k=l(N.events);if(k&&k(e,m.path)){f.preventDefault();return}}if(x.type==="paragraph"){const k=u.parent(e,_);if(E.isElement(k)){const P=this.customElementMap.get(k.type);if(P==null?void 0:P.wrappingParagraph){const F=l(P.events);if(F&&F(e,m.path)){f.preventDefault();return}}}}}}})(l=>l.onTab),p=new Ft(this,e);return{renderElement:l=>{const f=this.customElementMap.get(l.element.type);return f?f.render(e,l):(console.warn(`${l.element.type} not impl`),v.exports.createElement("div",l.attributes,l.children))},renderLeaf:l=>this.textConfig?this.textConfig.render(e,l):v.exports.createElement("span",l.attributes,l.children),decorate:l=>p.process(l),onDOMBeforeInput:l=>{He(e,()=>{switch(console.log(l.inputType),l.inputType){case"insertText":n(l);break;case"deleteContentBackward":r(l);break;case"insertParagraph":o(l);break;case"insertFromPaste":console.log(l);break}})},onKeyDown:l=>{He(e,()=>{if(G("tab",l)){c(l);return}if(G(["ctrl+enter"],l)){g.insertText(e,`
`);return}if(G("enter",l)&&e.selection){const f=u.parent(e,e.selection.anchor.path);if(b.isBlock(e,f)&&!/paragraph|heading/.test(f.type)){g.insertText(e,`
`),l.preventDefault();return}}if(e.selection){if(G("meta+b",l)){W.toggleDecorator(e,e.selection,D.strong),l.preventDefault();return}if(G("meta+i",l)){W.toggleDecorator(e,e.selection,D.emphasis),l.preventDefault();return}}})},onSelect:l=>{const f=window.getSelection();f&&(f.isCollapsed?e.hidePopper():f.rangeCount>0&&e.updatePopper(f.getRangeAt(0)))},onBlur:l=>{e.hidePopper()},onClick:()=>{const l=window.getSelection();if(l&&l.isCollapsed&&l.rangeCount>0){const f=l.getRangeAt(0),d=q.toSlateRange(e,f,{exactMatch:!0});d&&e.selection&&B.equals(d,e.selection)&&e.togglePopper(f)}}}}}function Vt(t,e){return e.offset===0&&!y.hasPrevious(e.path)&&I.isText(u.get(t,e.path))}function He(t,e){let n=!0;b.withoutNormalizing(t,()=>{e(()=>{n=!1})}),n||b.normalize(t)}z.add(Ce);const Ut=[{key:"blockquote",icon:i(L,{icon:Ce}),isActive:(t,e)=>{const n=[u.get(t,e),e];return!!t.nearest(n,$)},isDisabled:(t,e)=>{const n=[u.get(t,e),e],s=t.nearest(n,$);return s?!t.canUnwrap(s,[$]):!t.canToggle(n,$,!1)},tips:i(j,{children:"\u5F15\u7528"}),action:(t,e,n)=>{const s=[u.get(t,e),e],r=t.nearest(s,$);return r?t.unwrap(r,[$]):t.toggle(s,$,void 0)}}],$=R({type:"blockquote",isInline:!1,isLeaf:!1,isVoid:!1,wrappingParagraph:!0,contentType:w.flow,contentModelType:w.flow,render:(t,{children:e,attributes:n})=>i("blockquote",M(T({},n),{children:e})),toggle:{prefix:/^>$/,toggle:(t,e,n)=>{n?g.wrapNodes(t,{type:"blockquote",children:[]},{at:e}):g.unwrapNodes(t,{at:y.parent(e)})},onTrigger(){return!0}},events:{onStartDelete:(t,e)=>{const n=u.parent(t,y.parent(e));return C(n,"blockquote")?($.toggle.toggle(t,y.parent(e),!1),!0):!1}},toolbarItems:Ut});var Wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});const Z=R({type:"paragraph",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!1,contentType:w.flow,contentModelType:w.phrasing,toggle:{},events:{},render(t,{element:e,attributes:n,children:s}){return i(Y,{element:e,children:({active:r})=>i("p",M(T({className:Q({active:r})},n),{children:s}))})},toolbarItems:[]});var Kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const Qt=[1,2,3,4,5,6].map(t=>{const e=(s,r)=>{const o=[u.get(s,r),r],a=s.nearest(o,V);return!!(a&&a[0].depth===t)},n=(s,r)=>{const o=[u.get(s,r),r],a=s.nearest(o,V);return a?!s.canToggle(a,Z,!1):!s.canToggle(o,V,!0)};return{key:`heading-level-${t}`,icon:re(j,{children:["H",t]}),isActive:e,isDisabled:n,action:(s,r,o)=>{const a=[u.get(s,r),r],c=s.nearest(a,V);c?s.toggle(c,Z,void 0):s.toggle(a,V,{depth:t})}}}),V=R({type:"heading",isInline:!1,isLeaf:!1,isVoid:!1,wrappingParagraph:!1,contentType:w.flow,contentModelType:w.phrasing,render:(t,{element:e,children:n,attributes:s})=>i(Y,{element:e,children:({active:r})=>v.exports.createElement(`h${e.depth}`,Object.assign(s,{className:Q({active:r})}),n)}),toggle:{prefix:/^#{1,6}$/,estimatePrefixLength:6,toggle:(t,e,n)=>{n?t.toggle([u.get(t,e),e],V,n):t.toggle([u.get(t,e),e],Z,void 0)},onTrigger:t=>({depth:t.length})},events:{onStartEnter:(t,e)=>{const n=u.parent(t,e);return C(n,"heading")?(t.toggle([n,y.parent(e)],Z,void 0),!0):!1}},toolbarItems:Qt});var Gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const Yt="\u6DFB\u52A0\u56FE\u7247",Jt="object",Xt={src:{title:"\u94FE\u63A5",type:"string",format:"url"},alt:{title:"\u66FF\u4EE3\u6587\u672C\uFF08alt\uFF09",type:"string"}},Zt=["src","alt"];var en={title:Yt,type:Jt,properties:Xt,required:Zt};z.add(Se);const Ve=R({type:"image",isInline:!0,isVoid:!1,isLeaf:!1,contentType:w.staticPhrasing,contentModelType:null,render:(t,{element:e,attributes:n})=>i("img",T({alt:e.alt,src:e.url,title:e.title},n)),insert:(t,e,n)=>{g.insertNodes(t,[{text:" "},T({type:"image",children:[]},n),{text:" "}],{at:e})},toolbarItems:[{key:"image",icon:i(L,{icon:Se}),tips:i(j,{children:"\u8D85\u94FE\u63A5"}),isActive:(t,e)=>X(t,e,"image"),isDisabled:(t,e)=>!y.equals(y.parent(e.focus.path),y.parent(e.anchor.path))||!oe(t,e),action:(t,e,n)=>{X(t,e,"image")?g.removeNodes(t,{at:b.unhangRange(t,e),match:s=>!b.isEditor(s)&&E.isElement(s)&&s.type==="image"}):he(t,n.target,en,{alt:b.string(t,e),src:""}).then(s=>{if(s){const{src:r,alt:o}=s;b.withoutNormalizing(t,()=>{Ve.insert(t,e,{url:r,title:"",alt:o})})}})}}]});var tn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ve});z.add(Ie,Re);const Ue=[!0,!1].map(t=>{const e={ordered:t,spread:void 0,start:void 0},n={spread:void 0,checked:void 0};return{key:`list-${t?"ordered":"unordered"}`,icon:i(L,{icon:t?Ie:Re}),isActive:(s,r)=>{const o=[u.get(s,r),r],a=s.nearest(o,S);return a?Boolean(a[0].ordered)===Boolean(t):!1},isDisabled:(s,r)=>{const o=[u.get(s,r),r],a=s.nearest(o,S);return a?!s.canUnwrap(a,[S,K]):!s.canWrap(o,[S,K],[e,n])},action:(s,r,o)=>{const a=s.getAndRemoveMark("start"),c=[u.get(s,r),r],p=s.nearest(c,S);if(p){const[h,l]=p;h.ordered===t?s.unwrap(p,[S,K]):g.setNodes(s,{ordered:t,start:a},{at:l})}else s.wrap(c,[S,K],[Object.assign({},e,{start:a}),n])}}}),S=R({type:"list",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!0,contentType:w.flow,contentModelType:w.list,normalize:(t,e,n,s)=>{if(e.children.length===0){g.removeNodes(t,{at:n}),s();return}if(y.hasPrevious(n)){const r=u.get(t,y.previous(n));if(C(r,"list")&&Boolean(r.ordered)===Boolean(e.ordered)&&r.start===void 0&&e.start===void 0){g.mergeNodes(t,{at:n}),s();return}}},render(t,{element:e,attributes:n,children:s}){return e.ordered?i("ol",M(T({},n),{start:e.start,children:s})):i("ul",M(T({},n),{children:s}))},toggle:{prefix:/^(?:-|\d+\.)$/,toggle:We,onTrigger:t=>{if(t==="-")return{ordered:!1,start:void 0,spread:void 0};{const e=parseInt(t);return{ordered:!0,start:e===1?void 0:e,spread:void 0}}}},events:{},toolbarItems:Ue});function We(t,e,n){if(n===!1)throw new Error("should never reach");t.addMark("start",n.start),t.nearest([u.get(t,e),e],S)?(t.addMark("ordered",n.ordered),K.toolbarItems[0].action(t,e,{})):Ue[n.ordered?0:1].action(t,e,{})}var nn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",toggleList:We,default:S});z.add(De,Oe);const ae=[{key:"indent-list-item",isActive:()=>!1,isDisabled:(t,e)=>{const n=t.nearest([u.get(t,e),e],S);return!n||n[0].children.length<=1},icon:i(L,{icon:De}),action:(t,e,n)=>{const s=t.getAndRemoveMark("ordered"),r=t.getAndRemoveMark("start"),o=[u.get(t,e),e],a=t.nearest(o,S);if(!a||a[0].children.length<=1)return;const c=t.nearest(o,ee);!c||!y.hasPrevious(c[1])||t.wrap(c,[ee,S],[{spread:void 0,checked:void 0},{ordered:s!=null?s:a[0].ordered,spread:void 0,start:r}])&&g.mergeNodes(t,{at:c[1]})}},{key:"outdent-list-item",isActive:()=>!1,isDisabled:(t,e)=>!t.nearest([u.get(t,e),e],S),icon:i(L,{icon:Oe}),action:(t,e,n)=>{const s=[u.get(t,e),e];if(!t.nearest(s,S))return;const o=t.nearest(s,ee);if(!o)return;const a=b.pathRef(t,o[1]),c=y.next(o[1]);if(b.hasPath(t,c)&&g.splitNodes(t,{at:c}),g.splitNodes(t,{at:o[1]}),a.current){const p=y.parent(a.current),h=[u.get(t,p),p];t.unwrap(h,[S,ee]),g.splitNodes(t,{at:p})}a.unref()}}],ee=R({type:"listItem",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!0,contentType:w.list,contentModelType:w.flow,normalize:(t,e,n)=>{const s=e.children.length-1;if(e.children.length>1&&C(e.children[s],"paragraph")){const r=y.next(n);g.moveNodes(t,{at:n.concat(s),to:r}),g.wrapNodes(t,{type:"listItem",checked:e.checked,spread:e.spread,children:[]},{at:r})}},render(t,{element:e,attributes:n,children:s}){return i("li",M(T({},n),{children:s}))},toggle:{},events:{onStartDelete:(t,e)=>(ae[1].action(t,y.parent(e),{}),!0),onStartEnter:(t,e)=>u.string(u.get(t,e))?!1:(ae[1].action(t,y.parent(e),{}),!0),onTab:(t,e)=>(ae[0].action(t,y.parent(e),{}),!0)},toolbarItems:ae});var K=ee,sn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const le=v.exports.createContext({isHeader:!1});var rn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",TableContext:le});const ye=R({type:"tableCell",isInline:!1,isLeaf:!1,isVoid:!1,contentType:w.tableRow,contentModelType:w.phrasing,wrappingParagraph:!1,events:{},toggle:{},toolbarItems:[],render:(t,{element:e,attributes:n,children:s})=>i(le.Consumer,{children:({isHeader:r})=>r?i("th",M(T({},n),{children:s})):i("td",M(T({},n),{children:s}))})});var on=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const be=R({type:"tableRow",isInline:!1,isLeaf:!1,isVoid:!1,contentType:w.table,contentModelType:w.tableRow,wrappingParagraph:!1,events:{},toggle:{},toolbarItems:[],render:(t,{element:e,attributes:n,children:s})=>i("tr",M(T({},n),{children:s}))});var an=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:be});const ln="\u6DFB\u52A0\u56FE\u7247",cn="object",un={cols:{title:"\u5217\u6570",type:"number",min:2},rows:{title:"\u884C\u6570",type:"number",min:2}},fn=["cols","rows"];var pn={title:ln,type:cn,properties:un,required:fn};z.add(Le);const dn=t=>t.children.length,ve=t=>t.children.length>0?t.children[0].children.length:0,gn=[{key:"toggle-table",icon:i(L,{icon:Le}),isActive:(t,e)=>C(u.get(t,e),"table"),isDisabled:(t,e)=>{const n=u.get(t,e);if(C(n,"table"))return!1;const s=u.parent(t,e),r=t.getContentModelType(s);return r?!H(A.contentType,r):!0},action:(t,e,n)=>{const s=u.get(t,e);if(C(s,"table")){const r=[...u.texts(s)].map(([o])=>o.text).join(" ");g.removeNodes(t,{at:e}),g.insertNodes(t,{type:"paragraph",children:[{text:r}]},{at:e})}else he(t,n.target,pn,{cols:2,rows:2}).then(r=>{r&&b.withoutNormalizing(t,()=>{const{cols:o,rows:a}=r;g.removeNodes(t,{at:e}),g.insertNodes(t,{type:"table",align:void 0,children:Array(a).fill(0).map(()=>({type:"tableRow",children:Array(o).fill(0).map(()=>({type:"tableCell",children:[{text:""}]}))}))},{at:e})})})}},{key:"table-insert-row-above",icon:i(lt,{}),isActive:()=>!1,isDisabled:(t,e)=>!t.nearest([u.get(t,e),e],A),action:(t,e,n)=>{const s=t.nearest([u.get(t,e),e],A);if(!s)return;let r;if(t.selection){const a=t.selection.focus.path,c=t.nearest([u.get(t,a),a],be);c&&(r=c[1])}r||(r=s[1].concat(0));const o=ve(s[0]);g.insertNodes(t,{type:"tableRow",children:Array(o).fill(0).map(()=>({type:"tableCell",children:[{text:""}]}))},{at:r})}},{key:"table-insert-row-below",icon:i(it,{}),isActive:()=>!1,isDisabled:(t,e)=>!t.nearest([u.get(t,e),e],A),action:(t,e,n)=>{const s=t.nearest([u.get(t,e),e],A);if(!s)return;let r;if(t.selection){const a=t.selection.focus.path,c=t.nearest([u.get(t,a),a],be);c&&(r=c[1])}r||(r=s[1].concat(dn(s[0])-1)),r=y.next(r);const o=ve(s[0]);g.insertNodes(t,{type:"tableRow",children:Array(o).fill(0).map(()=>({type:"tableCell",children:[{text:""}]}))},{at:r})}},{key:"table-insert-row-left",icon:i(ct,{}),isActive:()=>!1,isDisabled:(t,e)=>!t.nearest([u.get(t,e),e],A),action:(t,e,n)=>{const s=t.nearest([u.get(t,e),e],A);if(!s)return;let r;if(t.selection){const o=t.selection.focus.path,a=t.nearest([u.get(t,o),o],ye);a&&(r=a[1][a[1].length-1])}typeof r!="number"&&(r=0);for(const[o]of Array(s[0].children.length).fill(0).entries()){const a=s[1].concat(o,r);g.insertNodes(t,{type:"tableCell",children:[{text:""}]},{at:a})}}},{key:"table-insert-row-right",icon:i(ut,{}),isActive:()=>!1,isDisabled:(t,e)=>!t.nearest([u.get(t,e),e],A),action:(t,e,n)=>{const s=t.nearest([u.get(t,e),e],A);if(!s)return;let r;if(t.selection){const o=t.selection.focus.path,a=t.nearest([u.get(t,o),o],ye);a&&(r=a[1][a[1].length-1])}typeof r!="number"&&(r=ve(s[0])-1),r+=1;for(const[o]of Array(s[0].children.length).fill(0).entries()){const a=s[1].concat(o,r);g.insertNodes(t,{type:"tableCell",children:[{text:""}]},{at:a})}}}],A=R({type:"table",isInline:!1,isLeaf:!1,isVoid:!1,contentType:w.flow,contentModelType:w.table,wrappingParagraph:!1,events:{},toggle:{},toolbarItems:gn,render:(t,{element:e,attributes:n,children:s})=>{const[r,...o]=s,a={isHeader:!0,align:e.align},c={isHeader:!1,align:e.align};return i(Y,{element:e,children:re("table",M(T({},n),{children:[i(le.Provider,{value:a,children:i("thead",{children:r})}),i(le.Provider,{value:c,children:i("tbody",{children:o})})]}))})}});var hn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const Ke=v.exports.forwardRef(function({children:t},e){return i("div",{className:"void-element",contentEditable:!1,ref:e,children:t})});Ke.displayName="VoidElement";var mn=R({type:"thematicBreak",isLeaf:!1,isInline:!1,isVoid:!0,wrappingParagraph:!1,contentType:w.flow,contentModelType:null,isDisallowTextDecorators:!0,isHiddenHoverToolbar:!0,render(t,{element:e,children:n,attributes:s}){return i(Y,{element:e,children:re(Ke,{children:[i("hr",T({},s)),n]})})},toggle:{prefix:/^---$/,estimatePrefixLength:3,toggle:(t,e,n)=>{n?(g.removeNodes(t,{at:e}),g.insertNodes(t,{type:"paragraph",children:[{text:""}]},{at:e}),g.insertNodes(t,{type:"thematicBreak",children:[]},{at:e}),q.deselect(t),g.select(t,b.start(t,y.next(e)))):g.setNodes(t,{type:"thematicBreak",children:[{text:""}]},{at:e})},onTrigger:(t,e,n)=>{if(!(n.length>1))return!0}},events:{},toolbarItems:[]}),yn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mn});const bn={"./blockquote/BlockquoteNode.tsx":Wt,"./code/CodeNode.tsx":Pt,"./heading/HeadingNode.tsx":Gt,"./image/ImageNode.tsx":tn,"./link/LinkNode.tsx":Bt,"./list/ListItemNode.tsx":sn,"./list/ListNode.tsx":nn,"./paragraph/ParagraphNode.tsx":Kt,"./table/TableCellNode.tsx":on,"./table/TableNode.tsx":hn,"./table/TableRowNode.tsx":an,"./table/context.tsx":rn,"./text/TextNode.tsx":Ct,"./thematic-break/ThematicBreakNode.tsx":yn};function vn(t){for(const[e,{default:n}]of Object.entries(bn))typeof(n==null?void 0:n.register)=="function"&&(console.debug("auto detected",e),n.register(t))}z.add(fe,pe,de,se);function wn(t,e){var r;if(!e)return[];const n=(r=q.toSlateRange(t,e,{exactMatch:!0}))!=null?r:t.selection;if(n){const[o]=b.nodes(t,{at:n,match:a=>{const c=a.type;if(c){const p=t.factory.customElementMap.get(c);if(p&&p.isHiddenHoverToolbar)return!0}return!1}});if(o)return[]}return W.toolbarItems.concat(t.factory.inlineConfigs.flatMap(o=>o.toolbarItems)).map(({key:o,isDisabled:a,isActive:c,action:p,icon:h,tips:l})=>({key:o,disabled:n?a(t,n):!1,active:n?c(t,n):!1,icon:h,action:n?f=>p(t,n,f):()=>{},tips:l}))}function Tn(){const t=ue(),e=v.exports.useRef(null),n=v.exports.useRef(),[s,r]=v.exports.useState(!0),o=je(),[a,c]=v.exports.useState([]);t.hidePopper=()=>r(!0);const p=v.exports.useMemo(()=>({getBoundingClientRect(){return n.current?n.current.getBoundingClientRect():{width:0,height:0}}}),[t,n]),{styles:h,attributes:l,update:f}=ft(p,e.current,{placement:"top",modifiers:[{name:"computeStyles",options:{adaptive:!1}},{name:"offset",options:{offset:[0,8]}}]});return t.updatePopper=d=>{if(d){const _=!n.current;n.current=d,_&&setTimeout(()=>{t.updatePopper()},0)}const m=wn(t,n.current);c(m),m.length>0?(r(!1),f&&f()):r(!0),o()},t.togglePopper=d=>{s?t.updatePopper(d):t.hidePopper()},i("div",M(T({className:"ti-hovering-toolbar",ref:e,style:M(T({},h.popper),{opacity:s?0:1,pointerEvents:s?"none":"initial"})},l.popper),{children:a.map(d=>i(ze,{action:d.action,active:d.active,disabled:d.disabled,icon:d.icon,tips:d.tips},d.key))}))}var U;(function(t){t[t.replace=1]="replace",t[t.wrap=2]="wrap",t[t.unwrap=3]="unwrap",t[t.custom=4]="custom"})(U||(U={}));const ie=v.exports.forwardRef(({disabled:t=!1,initialMarkdown:e=""},n)=>{const s=v.exports.useMemo(()=>{const d=new Ht;return vn(d),d},[]),r=v.exports.useMemo(()=>{const d=pt(dt(gt()));return s.wrapEditor(d)},[]),o=v.exports.useMemo(()=>s.createDefaultEditableProps(r),[]),[a,c,p]=xt(r);v.exports.useEffect(()=>{n&&(typeof n=="function"?n(a):n.current=a),a.markdown=e},[r]);const[h,l]=v.exports.useState();r.setActionForm=l;const f=v.exports.useMemo(()=>{if(h)return ht.exports.createPortal(h,document.body)},[h]);return re(mt,{editor:r,onChange:p,value:c,children:[i(Tn,{}),i(yt,T({as:"article",className:"ti-community-editor markdown-body"},o)),f]})});ie.displayName="TiEditor";ie.propTypes={disabled:Ae.bool,initialMarkdown:Ae.string};ie.defaultProps={disabled:!1,initialMarkdown:""};const xn=`### \u5F15\u7528 (blockquote)

\`\`\`markdown
> blockquote
> 
> yeah
\`\`\`

> blockquote
> 
> yeah

- \u6DFB\u52A0\u5F15\u7528
  - \u8F93\u5165 \`>\` \u5E76\u8F93\u5165\u7A7A\u683C
- \u5220\u9664\u5F15\u7528
  - \u5728\u5F15\u7528\u8D77\u59CB\u5904\u70B9\u51FB \`<Backspace>\`
`;var _n=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:xn});const kn=`### Codes

### Usage

- \u8F93\u5165 \\\`\\\`\\\` \u52A0\u7A7A\u683C

### Examples

\`\`\`javascript
console.log('hello world')
\`\`\`

\`\`\`sql
SELECT * FROM hello_world;
\`\`\`

`;var Nn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:kn});const Mn=`### \u6807\u9898

\`\`\`markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
\`\`\`

> # h1
> ## h2
> ### h3
> #### h4
> ##### h5
> ###### h6

- \u521B\u5EFA\u6807\u9898
  1. \u8F93\u5165 1-6 \u4E2A \`#\` \u5E76\u8F93\u5165\u7A7A\u683C
  2. \u5728\u6807\u9898\u4E2D\u95F4\u6216\u7ED3\u5C3E\u70B9\u51FB \`<Enter>\`
- \u5220\u9664\u6807\u9898
  - \u5728\u6807\u9898\u8D77\u59CB\u5904\u70B9\u51FB \`<Enter>\` \u4EE5\u5C06\u6807\u9898\u8F6C\u6362\u6210\u6BB5\u843D
`;var En=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Mn});const Pn=`### \u94FE\u63A5

\`\`\`
[title](url)
\`\`\`

> [title](#)

- \u521B\u5EFA\u94FE\u63A5
  - \u8F93\u5165\u94FE\u63A5 url \u5E76\u8F93\u5165\u7A7A\u683C\u4F1A\u81EA\u52A8\u8F6C\u6362
`;var Cn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Pn});const Sn=`### \u5217\u8868

\`\`\`markdown
- \u65E0\u5E8F\u5217\u8868
- ...
  - \u7F29\u8FDB\u5217\u8868

1. \u6709\u5E8F\u5217\u8868
\`\`\`

> - \u65E0\u5E8F\u5217\u8868
> - ...
>   - \u7F29\u8FDB\u5217\u8868
> 
> 1. \u6709\u5E8F\u5217\u8868 1
> 2. \u6709\u5E8F\u5217\u8868 2

\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u63A7\u5236 Markdown \u5217\u8868\uFF1A
- \u65B0\u5EFA\u5217\u8868\uFF1A
  1. \u8F93\u5165 \`-\` \u52A0\u7A7A\u683C\u63D2\u5165\u65E0\u5E8F\u5217\u8868
  2. \u8F93\u5165 \`number.\` \u52A0\u7A7A\u683C\u63D2\u5165\u6709\u5E8F\u5217\u8868
- \u5217\u8868\u7F29\u8FDB\uFF1A
  1. \u5728\u5217\u8868\u9879\u4E2D\u8F93\u5165 \`<Tab>\` \u751F\u6210\u4E0B\u7EA7\u5217\u8868 
  2. \u5728\u5217\u8868\u9879\u4E2D\u8F93\u5165 \`-\` \u6216 \`<number>\`\u3002
- \u53D6\u6D88\u5217\u8868
  1. \u5728\u7A7A\u5217\u8868\u9879\u4E2D\u76F4\u63A5\u8F93\u5165 \`<Enter>\`
`;var In=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Sn});const Rn=`### Table

| foo | bar |
| :-- | :-: |
| baz | qux |

`;var Dn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Rn});const On=`# a-editor

## \u6280\u672F\u6808

- core
  - [slate](https://www.slatejs.org/)
  - [remark](https://remark.js.org/)
  - [remark-slate-transformer](https://github.com/inokawa/remark-slate-transformer)
- code highlight
  - [prism](https://prismjs.com/)

## \u6837\u5F0F\u914D\u7F6E

### \u4EE3\u7801\u9AD8\u4EAE

\u5728 \`src/slate-markdown/elements/code/style.less\` \u6DFB\u52A0\u5BF9\u5E94 token \u6837\u5F0F\u3002

## \u7528\u6CD5
`,Ln={"./slate-markdown/elements/blockquote/instructions.md":_n,"./slate-markdown/elements/code/instructions.md":Nn,"./slate-markdown/elements/heading/instructions.md":En,"./slate-markdown/elements/link/instructions.md":Cn,"./slate-markdown/elements/list/instructions.md":In,"./slate-markdown/elements/table/instructions.md":Dn},An=On+`

`+Object.values(Ln).map(t=>t.plainText).join(`

`);function zn(){return i("div",{children:i(ie,{initialMarkdown:An})})}bt.render(i(vt.StrictMode,{children:i(zn,{})}),document.getElementById("root"));
