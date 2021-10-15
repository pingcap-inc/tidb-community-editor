var Ie=Object.defineProperty,De=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var X=(t,e,n)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))le.call(e,n)&&X(t,n,e[n]);if(U)for(var n of U(e))ce.call(e,n)&&X(t,n,e[n]);return t},E=(t,e)=>De(t,Re(e));var ue=(t,e)=>{var n={};for(var s in t)le.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&U)for(var s of U(t))e.indexOf(s)<0&&ce.call(t,s)&&(n[s]=t[s]);return n};var C=(t,e,n)=>(X(t,typeof e!="symbol"?e+"":e,n),n);import{r as d,u as pe,a as fe,p as Le,b as Oe,c as ze,d as Fe,E as b,e as S,P as u,N as y,f as Z,j as i,g as j,T as K,l as $,h as de,i as ge,F as A,k as ee,m as te,n as ne,o as G,R as F,q as L,s as $e,t as p,v as I,w as he,x as O,y as Ae,z as me,A as Be,B as je,_ as q,C as Y,D as be,G as ye,H as xe,I as qe,J as He,K as Ve,L as Ue,M as Ke,S as Ge,O as Ye,Q as ve,U as Je,V as Qe}from"./vendor.0146825c.js";const We=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};We();class Xe{constructor(e,n){C(this,"getMarkdownProcessor",pe().use(fe).use(Le).use(Oe,{bullet:"-",listItemIndent:"one",fence:"`",rule:"-"}));C(this,"setMarkdownProcessor",pe().use(fe).use(ze).use(Fe));this.editor=e,this.setValue=n,this.getMarkdownProcessor.freeze(),this.setMarkdownProcessor.freeze()}get markdown(){return this.getMarkdownProcessor.stringify(this.getMarkdownProcessor.runSync({type:"root",children:this.editor.children}))}set markdown(e){this.setValue(this.setMarkdownProcessor.processSync(e).result),setTimeout(()=>{b.normalize(this.editor,{force:!0})},0)}}function Ze(t){const[e,n]=d.exports.useState([{type:"paragraph",children:[{text:""}]}]);return[d.exports.useMemo(()=>new Xe(t,n),[t]),e,n]}function D(t){return E(v({},t),{register(e){e.define(t)}})}function M(t,e){return S.isElement(t)&&t.type===e}function et(t,e){const n=u.previous(e),s=y.get(t,n);return n.concat(s.children.length)}function _e({icon:t,active:e,disabled:n,action:s,tips:r}){const o=Z(),l=d.exports.useCallback(g=>{s&&g.button===0&&(g.preventDefault(),g.stopPropagation(),n||b.withoutNormalizing(o,()=>{s(g)}))},[s]),m=i("span",{className:j("toolbar-item",{active:e,disabled:n}),onMouseDown:l,children:t});return r?i(K,{content:i("span",{className:"toolbar-item-tips",children:r}),children:m}):m}$.add(de,ge);function tt({isEmpty:t,element:e,items:n,setActive:s}){return i(K,{appendTo:"parent",content:nt(n),hideOnClick:!1,interactive:!0,onHide:()=>s(!1),onShow:()=>s(!0),children:i("span",{className:"line-operations",contentEditable:!1,children:i(A,{icon:t?ge:de})})})}const nt=t=>i("div",{className:"block-toolbar",children:t.map(e=>i(_e,{action:e.action,active:e.active,disabled:e.disabled,icon:e.icon,tips:e.tips},e.key))});$.add(ee,te,ne,G);function st(t,e){return t.factory.blockConfigs.flatMap(s=>s.toolbarItems).map(({key:s,isDisabled:r,isActive:o,action:l,icon:m,tips:g})=>({key:s,disabled:e?r(t,e):!1,active:e?o(t,e):!1,icon:m,action:e?_=>l(t,e,_):()=>{},tips:g}))}function ke(){const[t,e]=d.exports.useState(0);return()=>{e(n=>n+1)}}function se({element:t,children:e}){const[n,s]=d.exports.useState(null),r=d.exports.useRef(),o=Z(),l=st(o,r.current),m=ke();d.exports.useLayoutEffect(()=>{if(n){const c=document.createRange();c.selectNode(n.childNodes.item(0));const f=F.toSlateRange(o,c,{exactMatch:!1});let h=u.common(f.anchor.path,f.focus.path);for(;h.length!==0;){if(b.isBlock(o,y.get(o,h))){r.current=h;break}h=u.parent(h)}}else r.current=void 0},[n]);const[g,_]=d.exports.useState(!1),a=(()=>{const c=t.children[0];return t.children.length===1&&L.isText(c)&&c.text===""})();return i($e,{appendTo:document.body,arrow:!1,hideOnClick:!1,interactive:!0,interactiveBorder:12,offset:[0,8],onTrigger:m,placement:"left",popperOptions:{modifiers:[{name:"flip",options:{allowedAutoPlacements:["left"]}}]},ref:s,render:()=>i(tt,{element:t,isEmpty:a,items:l,setActive:_}),children:e({active:g,path:r.current})})}const rt=["markdown","javascript","sql","bash","go","rust"],H=Symbol("prism_token"),re=D({type:"code",isInline:!1,isLeaf:!1,isVoid:!1,isDisallowTextDecorators:!0,isHiddenHoverToolbar:!0,wrappingParagraph:!1,render:(t,{element:e,children:n,attributes:s})=>i(se,{element:e,children:({active:r,path:o})=>i(K,{appendTo:document.body,content:i("select",{className:"lang-selector",contentEditable:!1,onChange:l=>{p.setNodes(t,{lang:l.currentTarget.value},{at:o})},tabIndex:void 0,value:e.lang||void 0,children:rt.map(l=>i("option",{children:l},l))}),interactive:!0,placement:"top-start",children:i("pre",E(v({},s),{className:j({active:r},e.lang?`language-${e.lang}`:void 0),children:i("code",{className:"prism-code",children:n})}))})}),toggle:{prefix:/^`{3}(?: (\w+))?$/,toggle:(t,e,n)=>{if(n){const s=y.string(y.get(t,e));p.removeNodes(t,{at:e}),p.insertNodes(t,E(v({type:"code"},n),{children:[{text:s}]}),{at:e}),p.select(t,e.concat(0))}else p.unsetNodes(t,["meta","lang"],{at:e}),p.setNodes(t,{type:"paragraph"},{at:e})},onTrigger:t=>{const e=/^`{3}(?: (\w+))?$/.exec(t);return e?{lang:e[1]||"markdown",meta:void 0}:{lang:"markdown",meta:void 0}}},events:{},toolbarItems:[{key:"code-block",icon:i(A,{icon:G}),isActive:(t,e)=>R(t,e,"code"),isDisabled:(t,e)=>e.length>1,tips:i(I,{children:"\u4EE3\u7801\u5757"}),action:(t,e,n)=>{R(t,e,"code")?re.toggle.toggle(t,e,!1):re.toggle.toggle(t,e,{lang:"markdown",meta:void 0})}}],decorate:(t,[e,n],s)=>{if(L.isText(e)&&s.lang){const r=he.languages[s.lang];if(!r)return[];const o=[],l=he.tokenize(e.text,r);let m=0;for(const g of l){const _=we(g),a=m+_;typeof g!="string"&&o.push({[H]:g.type,anchor:{path:n,offset:m},focus:{path:n,offset:a}}),m=a}return o}return[]}}),we=t=>typeof t=="string"?t.length:typeof t.content=="string"?t.content.length:t.content.reduce((e,n)=>e+we(n),0);var ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SYMBOL_PRISM_TOKEN:H,default:re}),T;(function(t){t.strong="strong",t.emphasis="emphasis",t.delete="delete",t.inlineCode="inlineCode"})(T||(T={}));const V=D({isLeaf:!0,normalize:(t,e,n,s)=>{if(e.text===""){const r=[T.strong,T.emphasis,T.delete,T.inlineCode].filter(o=>!!e[o]);r.length>0&&p.unsetNodes(t,r,{at:n})}},render(t,{leaf:e,children:n,attributes:s}){let r=n;return e[H]&&(r=i("span",{className:j(e[H]?`token ${e[H]}`:void 0,s.className),children:r})),e.delete&&(r=i("del",{children:r})),e.emphasis&&(r=i("em",{children:r})),e.strong&&(r=i("strong",{children:r})),e.inlineCode&&(r=i("code",{children:r})),i("span",E(v({},s),{children:r}))},toggleDecorator:(t,e,n)=>{const s=Ne(t),r=o=>s(y.get(t,o.anchor.path),o.anchor.path);oe(t,e,n)?O.isCollapsed(e)?r(e)&&b.addMark(t,n,!1):p.setNodes(t,{[n]:!1},{match:s,split:!0}):O.isCollapsed(e)?r(e)&&b.addMark(t,n,!0):p.setNodes(t,{[n]:!0},{match:s,split:!0})},toolbarItems:[{key:T.strong,icon:ee,tips:i(I,{children:"\u52A0\u7C97"})},{key:T.emphasis,icon:te,tips:i(I,{children:"\u659C\u4F53"})},{key:T.inlineCode,icon:G,tips:i(I,{children:"\u884C\u5185\u4EE3\u7801"})},{key:T.delete,icon:ne,tips:i(I,{children:"\u5220\u9664"})}].map(({key:t,icon:e,tips:n})=>({key:t,icon:i(A,{icon:e}),isActive:(s,r)=>oe(s,r,t),isDisabled:(s,r)=>!J(s,r),action:(s,r,o)=>{V.toggleDecorator(s,r,t)},tips:n}))});function oe(t,e,n){if(!F.hasRange(t,e))return!1;const s=b.marks(t);return s?!!s[n]:!1}const J=(t,e)=>{const n=Ee(t),[s]=b.nodes(t,{at:e,match:n});return!s},Ne=t=>(e,n)=>{if(!L.isText(e))return!1;const s=y.parent(t,n);if(S.isElement(s)){const r=t.factory.customElementMap.get(s.type);return r?!r.isDisallowTextDecorators:!1}else return!1},Ee=t=>(e,n)=>{if(!L.isText(e))return!1;const s=y.parent(t,n);if(S.isElement(s)){const r=t.factory.customElementMap.get(s.type);return r?!!r.isDisallowTextDecorators:!0}else return!0};function R(t,e,n,s){if(O.isRange(e)){if(!F.hasRange(t,e))return!1}else if(u.isPath(e)){if(!b.hasPath(t,e))return!1}else if(!F.hasRange(t,{anchor:e,focus:e}))return!1;if(u.isPath(e)){const o=y.get(t,e);return M(o,n)&&(s?s(o):!0)}const[r]=b.nodes(t,{at:O.isRange(e)?b.unhangRange(t,e):e,match:o=>!b.isEditor(o)&&M(o,n)&&(s?s(o):!0)});return!!r}var at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",get TextNodeDecorator(){return T},isDecoratorActive:oe,isRangeCustomTextPropsEnabled:J,isCustomTextPropsEnabled:Ne,isCustomTextPropsNotEnabled:Ee,isElementActive:R,default:V});function it({schema:t,onSubmit:e,defaultValues:n}){return i("div",{contentEditable:!1,children:i(Ae,{className:"action-form",formData:n,onSubmit:s=>e(s.formData),schema:t})})}function lt(t,e){return d.exports.useCallback(()=>t.selection?F.toDOMRange(t,t.selection).getBoundingClientRect():e.getBoundingClientRect(),[t,e])}function ct(t,e){return d.exports.useCallback(()=>{t("user canceled"),e.current&&e.current.hide()},[t])}function ut(){const t=d.exports.useRef(),e=d.exports.useCallback(n=>{t.current=n},[t]);return[t,e]}function pt(t,e,n,s){const r=d.exports.useCallback(o=>{var l;e(o),(l=s.current)==null||l.hide()},[e,s]);return d.exports.useMemo(()=>i(it,{defaultValues:n,onSubmit:r,schema:t}),[t,r])}function ft({editor:t,el:e,reject:n,resolve:s,schema:r,defaultValues:o}){const[l,m]=ut(),g=lt(t,e),_=ct(n,l),a=pt(r,s,o,l);return i(K,{content:a,getReferenceClientRect:g,interactive:!0,onClickOutside:_,onMount:m,placement:"right-start",visible:!0,children:i("span",{})})}function Te(t,e,n,s){return new Promise((r,o)=>{t.setActionForm(i(ft,{defaultValues:s,editor:t,el:e,reject:o,resolve:r,schema:n}))}).catch(r=>{if(r==="user canceled")return Promise.resolve(void 0);throw r})}const dt="\u6DFB\u52A0\u8D85\u94FE\u63A5",gt="object",ht={src:{title:"\u94FE\u63A5",type:"string",format:"url"},text:{title:"\u663E\u793A\u6587\u672C",type:"string"}},mt=["src","text"];var bt={title:dt,type:gt,properties:ht,required:mt};$.add(me);const ae=D({type:"link",isInline:!0,isVoid:!1,isLeaf:!1,normalize:(t,e,n,s)=>{y.string(e).trim().length===0&&(p.removeNodes(t,{at:n}),s())},render:(t,{element:e,attributes:n,children:s})=>i("a",E(v({href:e.url,onClick:()=>window.open(e.url,"_blank"),style:{display:"inline-flex",cursor:"pointer"}},n),{children:s})),insert:(t,e,r)=>{var o=r,{text:n}=o,s=ue(o,["text"]);p.insertNodes(t,[v({type:"link",children:[{text:n}]},s),{text:" "}],{at:e,select:!0}),Be.isPoint(e)&&p.move(t,{distance:1})},match:{regexp:je()},toolbarItems:[{key:"link",icon:i(A,{icon:me}),tips:i(I,{children:"\u8D85\u94FE\u63A5"}),isActive:(t,e)=>R(t,e,"link"),isDisabled:(t,e)=>!u.equals(u.parent(e.focus.path),u.parent(e.anchor.path))||!J(t,e),action:(t,e,n)=>{R(t,e,"link")?p.unwrapNodes(t,{at:b.unhangRange(t,e),match:s=>!b.isEditor(s)&&S.isElement(s)&&s.type==="link"}):Te(t,n.target,bt,{text:b.string(t,e),src:""}).then(s=>{if(s){const{src:r,text:o}=s;b.withoutNormalizing(t,()=>{ae.insert(t,e,{url:r,title:"",text:o})})}})}}]});var yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});class xt{constructor(e,n){C(this,"state",[]);this.factory=e,this.editor=n}process(e){const[n,s]=e;if(b.isEditor(n))return this.state=[],[];if(S.isElement(n)){const r=this.factory.customElementMap.get(n.type);if(r&&!r.isInline){const o=r;if(o.decorate)return this.state.push({element:n,path:s,config:o}),[]}}if(this.state.length>0){for(const r of this.state.reverse())if(u.isAncestor(r.path,s))return r.config.decorate(this.editor,e,r.element)}return[]}}class vt{constructor(){C(this,"blockConfigs",[]);C(this,"inlineConfigs",[]);C(this,"textConfig");C(this,"inlineSet",new Set);C(this,"voidSet",new Set);C(this,"customElementMap",new Map)}define(e){return e.isLeaf?this.textConfig=e:(e.isInline?(this.inlineSet.add(e.type),this.inlineConfigs.push(e)):this.blockConfigs.push(e),this.customElementMap.set(e.type,e),e.isVoid&&this.voidSet.add(e.type)),this}wrapEditor(e){const{isVoid:n,isInline:s,normalizeNode:r}=e;return e.factory=this,e.updatePopper=e.hidePopper=e.togglePopper=()=>{},e.isVoid=o=>this.voidSet.has(o.type)||n(o),e.isInline=o=>this.inlineSet.has(o.type)||s(o),e.normalizeNode=o=>{let l=!0;const m=()=>{l=!1};b.withoutNormalizing(e,()=>{var a;const[g,_]=o;if(S.isElement(g)){const c=(a=this.customElementMap.get(g.type))==null?void 0:a.normalize;c&&c(e,g,_,m)}L.isText(g)&&this.textConfig.normalize&&this.textConfig.normalize(e,g,_,m)}),l&&r(o)},e}createDefaultEditableProps(e){const n=a=>{var f;const{selection:c}=e;if(c&&O.isCollapsed(c)){const h=c.anchor,P=y.get(e,h.path),N=y.parent(e,h.path);if(L.isText(P)&&S.isElement(N)&&N.type==="paragraph"&&a.data===" "&&!u.hasPrevious(h.path)){const w=P.text.slice(0,h.offset);for(const{toggle:x}of this.blockConfigs)if(!(typeof x.estimatePrefixLength=="number"&&w.length>x.estimatePrefixLength)&&((f=x.prefix)==null?void 0:f.test(w))){const k=x.onTrigger(w);if(typeof k!="undefined"){p.delete(e,{at:{path:h.path,offset:0},distance:h.offset}),x.toggle(e,u.parent(h.path),k),a.preventDefault();return}}}if(L.isText(P)&&!M(N,"link")&&a.data===" "){for(const w of this.inlineConfigs)if(w.match){const x=w.match.regexp.exec(P.text.slice(0,h.offset));if(x){const k=x[0],z=x.index,Ce=x.index+k.length,Me={anchor:{path:h.path,offset:z},focus:{path:h.path,offset:Ce}};ae.insert(e,Me,{url:k,title:"",text:k}),a.preventDefault();return}}}if(b.isInline(e,N)){const w=u.parent(h.path).concat(N.children.length);p.insertNodes(e,{text:a.data||""},{at:w}),p.move(e,{distance:1}),a.preventDefault();return}}},s=a=>c=>{const{selection:f}=e;if(f&&O.isCollapsed(f)){const h=f.anchor;if(_t(e,h)){const P=u.parent(h.path),N=y.get(e,P);if(S.isElement(N)){const w=this.customElementMap.get(N.type);if(w){const x=a(w.events);if(x&&x(e,h.path)){c.preventDefault();return}}if(N.type==="paragraph"){const x=y.parent(e,P);if(!u.hasPrevious(P)&&S.isElement(x)){const k=this.customElementMap.get(x.type);if(k==null?void 0:k.wrappingParagraph){const z=a(k.events);if(z&&z(e,h.path)){c.preventDefault();return}}}}}}}},r=s(a=>a.onStartDelete),o=s(a=>a.onStartEnter),m=(a=>c=>{const{selection:f}=e;if(f&&O.isCollapsed(f)){const h=f.anchor,P=u.parent(h.path),N=y.parent(e,h.path);if(S.isElement(N)){const w=this.customElementMap.get(N.type);if(w){const x=a(w.events);if(x&&x(e,h.path)){c.preventDefault();return}}if(N.type==="paragraph"){const x=y.parent(e,P);if(S.isElement(x)){const k=this.customElementMap.get(x.type);if(k==null?void 0:k.wrappingParagraph){const z=a(k.events);if(z&&z(e,h.path)){c.preventDefault();return}}}}}}})(a=>a.onTab),g=new xt(this,e);return{renderElement:a=>{const c=this.customElementMap.get(a.element.type);return c?c.render(e,a):(console.warn(`${a.element.type} not impl`),d.exports.createElement("div",a.attributes,a.children))},renderLeaf:a=>this.textConfig?this.textConfig.render(e,a):d.exports.createElement("span",a.attributes,a.children),decorate:a=>g.process(a),onDOMBeforeInput:a=>{Pe(e,()=>{switch(console.log(a.inputType),a.inputType){case"insertText":n(a);break;case"deleteContentBackward":r(a);break;case"insertParagraph":o(a);break;case"insertFromPaste":console.log(a);break}})},onKeyDown:a=>{Pe(e,()=>{if(q("tab",a)){m(a);return}if(q(["ctrl+enter"],a)){p.insertText(e,`
`);return}if(q("enter",a)&&e.selection){const c=y.parent(e,e.selection.anchor.path);if(b.isBlock(e,c)&&!/paragraph|heading/.test(c.type)){p.insertText(e,`
`),a.preventDefault();return}}if(e.selection){if(q("meta+b",a)){V.toggleDecorator(e,e.selection,T.strong),a.preventDefault();return}if(q("meta+i",a)){V.toggleDecorator(e,e.selection,T.emphasis),a.preventDefault();return}}})},onSelect:a=>{const c=window.getSelection();c&&(c.isCollapsed?e.hidePopper():c.rangeCount>0&&e.updatePopper(c.getRangeAt(0)))},onBlur:a=>{e.hidePopper()},onClick:()=>{const a=window.getSelection();if(a&&a.isCollapsed&&a.rangeCount>0){const c=a.getRangeAt(0),f=F.toSlateRange(e,c,{exactMatch:!0});f&&e.selection&&O.equals(f,e.selection)&&e.togglePopper(c)}}}}}function _t(t,e){return e.offset===0&&!u.hasPrevious(e.path)&&L.isText(y.get(t,e.path))}function Pe(t,e){let n=!0;b.withoutNormalizing(t,()=>{e(()=>{n=!1})}),n||b.normalize(t)}const Se=D({type:"blockquote",isInline:!1,isLeaf:!1,isVoid:!1,wrappingParagraph:!0,render:(t,{children:e,attributes:n})=>i("blockquote",E(v({},n),{children:e})),toggle:{prefix:/^>$/,toggle:(t,e,n)=>{n?p.wrapNodes(t,{type:"blockquote",children:[]},{at:e}):p.unwrapNodes(t,{at:u.parent(e)})},onTrigger(){return!0}},events:{onStartDelete:(t,e)=>{const n=y.parent(t,u.parent(e));return M(n,"blockquote")?(Se.toggle.toggle(t,u.parent(e),!1),!0):!1}},toolbarItems:[]});var kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Se});const Q=D({type:"heading",isInline:!1,isLeaf:!1,isVoid:!1,wrappingParagraph:!1,render:(t,{element:e,children:n,attributes:s})=>i(se,{element:e,children:({active:r})=>d.exports.createElement(`h${e.depth}`,Object.assign(s,{className:j({active:r})}),n)}),toggle:{prefix:/^#{1,6}$/,estimatePrefixLength:6,toggle:(t,e,n)=>{n?p.setNodes(t,v({type:"heading"},n),{at:e}):(p.unsetNodes(t,"depth",{at:e}),p.setNodes(t,{type:"paragraph"},{at:e}))},onTrigger:t=>({depth:t.length})},events:{onStartEnter:(t,e)=>{const n=y.parent(t,e);return M(n,"heading")?(Q.toggle.toggle(t,u.parent(e),!1),!0):!1}},toolbarItems:[1,2,3,4,5,6].map(t=>{const e=(n,s)=>R(n,s,"heading",r=>r.depth===t);return{key:`heading-level-${t}`,icon:Y(I,{children:["H",t]}),isActive:e,isDisabled:()=>!1,action:(n,s,r)=>{e(n,s)?Q.toggle.toggle(n,s,!1):Q.toggle.toggle(n,s,{depth:t})}}})});var wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const Nt="\u6DFB\u52A0\u56FE\u7247",Et="object",Tt={src:{title:"\u94FE\u63A5",type:"string",format:"url"},alt:{title:"\u66FF\u4EE3\u6587\u672C\uFF08alt\uFF09",type:"string"}},Pt=["src","alt"];var St={title:Nt,type:Et,properties:Tt,required:Pt};$.add(be);const ie=D({type:"image",isInline:!0,isVoid:!1,isLeaf:!1,render:(t,{element:e,attributes:n})=>i("img",v({alt:e.alt,src:e.url,title:e.title},n)),insert:(t,e,n)=>{p.insertNodes(t,[{text:" "},v({type:"image",children:[]},n),{text:" "}],{at:e})},toolbarItems:[{key:"image",icon:i(A,{icon:be}),tips:i(I,{children:"\u8D85\u94FE\u63A5"}),isActive:(t,e)=>R(t,e,"image"),isDisabled:(t,e)=>!u.equals(u.parent(e.focus.path),u.parent(e.anchor.path))||!J(t,e),action:(t,e,n)=>{R(t,e,"image")?p.removeNodes(t,{at:b.unhangRange(t,e),match:s=>!b.isEditor(s)&&S.isElement(s)&&s.type==="image"}):Te(t,n.target,St,{alt:b.string(t,e),src:""}).then(s=>{if(s){const{src:r,alt:o}=s;b.withoutNormalizing(t,()=>{ie.insert(t,e,{url:r,title:"",alt:o})})}})}}]});var Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie});$.add(ye,xe);const B=D({type:"list",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!0,normalize:(t,e,n,s)=>{if(e.children.length===0){p.removeNodes(t,{at:n}),s();return}if(u.hasPrevious(n)){const r=y.get(t,u.previous(n));if(M(r,"list")&&r.ordered===e.ordered&&r.spread===e.spread&&r.start===void 0){p.mergeNodes(t,{at:n}),s();return}}},render(t,{element:e,attributes:n,children:s}){return e.ordered?i("ol",E(v({},n),{start:e.start,children:s})):i("ul",E(v({},n),{children:s}))},toggle:{prefix:/^(?:-|\d+\.)$/,toggle:(t,e,n)=>{if(!M(y.get(t,e),"paragraph"))throw new Error("can only call ListNode.toggle on a paragraph node.");if(n===!1){const s=u.parent(e),r=u.next(u.parent(s));p.splitNodes(t,{at:s}),p.moveNodes(t,{at:r.concat(0),to:r}),p.unwrapNodes(t,{at:r}),p.select(t,{path:r,offset:0})}else{const s=u.parent(e),r=y.get(t,s);if(M(r,"listItem")){if(u.hasPrevious(s)){const o=et(t,s);p.moveNodes(t,{at:s,to:o}),p.wrapNodes(t,v({type:"list",children:[]},n),{at:o})}}else p.wrapNodes(t,{type:"listItem",checked:void 0,spread:n.spread,children:[]},{at:e}),p.wrapNodes(t,v({type:"list",children:[]},n),{at:e})}},onTrigger:t=>t==="-"?{ordered:!1,start:void 0,spread:void 0}:{ordered:!0,start:parseInt(t),spread:void 0}},events:{},toolbarItems:[!0,!1].map(t=>{const e=(n,s)=>s.length>2&&R(n,u.parent(u.parent(s)),"list",r=>r.ordered===t);return{key:`list-${t?"ordered":"unordered"}`,icon:i(A,{icon:t?ye:xe}),isActive:e,isDisabled:(n,s)=>y.get(n,s).type!=="paragraph",action:(n,s,r)=>{e(n,s)?B.toggle.toggle(n,s,!1):B.toggle.toggle(n,s,{ordered:t,start:void 0,spread:void 0})}}})});var Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const It=D({type:"listItem",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!0,normalize:(t,e,n)=>{const s=e.children.length-1;if(e.children.length>1&&M(e.children[s],"paragraph")){const r=u.next(n);p.moveNodes(t,{at:n.concat(s),to:r}),p.wrapNodes(t,{type:"listItem",checked:e.checked,spread:e.spread,children:[]},{at:r})}},render(t,{element:e,attributes:n,children:s}){return i("li",E(v({},n),{children:s}))},toggle:{},events:{onStartDelete:(t,e)=>(B.toggle.toggle(t,u.parent(e),!1),!0),onStartEnter:(t,e)=>y.string(y.get(t,e))?!1:(B.toggle.toggle(t,u.parent(e),!1),!0),onTab:(t,e)=>{const n=y.parent(t,u.parent(u.parent(e)));if(M(n,"list")){const{spread:s,ordered:r}=n;return B.toggle.toggle(t,u.parent(e),{spread:s,ordered:r,start:void 0}),!0}else return console.warn(`bad structure, expect a list at ${e}-2`),!1}},toolbarItems:[]});var Dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:It});const Rt=D({type:"paragraph",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!1,toggle:{},events:{},render(t,{element:e,attributes:n,children:s}){return i(se,{element:e,children:({active:r})=>i("p",E(v({className:j({active:r})},n),{children:s}))})},toolbarItems:[]});var Lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rt});const Ot={"./blockquote/BlockquoteNode.tsx":kt,"./code/CodeNode.tsx":ot,"./heading/HeadingNode.tsx":wt,"./image/ImageNode.tsx":Ct,"./link/LinkNode.tsx":yt,"./list/ListItemNode.tsx":Dt,"./list/ListNode.tsx":Mt,"./paragraph/ParagraphNode.tsx":Lt,"./text/TextNode.tsx":at};function zt(t){for(const[e,{default:n}]of Object.entries(Ot))typeof(n==null?void 0:n.register)=="function"&&(console.debug("auto detected",e),n.register(t))}$.add(ee,te,ne,G);function Ft(t,e){var r;if(!e)return[];const n=(r=F.toSlateRange(t,e,{exactMatch:!0}))!=null?r:t.selection;if(n){const[o]=b.nodes(t,{at:n,match:l=>{const m=l.type;if(m){const g=t.factory.customElementMap.get(m);if(g&&g.isHiddenHoverToolbar)return!0}return!1}});if(o)return[]}return V.toolbarItems.concat(t.factory.inlineConfigs.flatMap(o=>o.toolbarItems)).map(({key:o,isDisabled:l,isActive:m,action:g,icon:_,tips:a})=>({key:o,disabled:n?l(t,n):!1,active:n?m(t,n):!1,icon:_,action:n?c=>g(t,n,c):()=>{},tips:a}))}function $t(){const t=Z(),e=d.exports.useRef(null),n=d.exports.useRef(),[s,r]=d.exports.useState(!0),o=ke(),[l,m]=d.exports.useState([]);t.hidePopper=()=>r(!0);const g=d.exports.useMemo(()=>({getBoundingClientRect(){return n.current?n.current.getBoundingClientRect():{width:0,height:0}}}),[t,n]),{styles:_,attributes:a,update:c}=qe(g,e.current,{placement:"top",modifiers:[{name:"computeStyles",options:{adaptive:!1}},{name:"offset",options:{offset:[0,8]}}]});return t.updatePopper=f=>{if(f){const P=!n.current;n.current=f,P&&setTimeout(()=>{t.updatePopper()},0)}const h=Ft(t,n.current);m(h),h.length>0?(r(!1),c&&c()):r(!0),o()},t.togglePopper=f=>{s?t.updatePopper(f):t.hidePopper()},i("div",E(v({className:"ti-hovering-toolbar",ref:e,style:E(v({},_.popper),{opacity:s?0:1,pointerEvents:s?"none":"initial"})},a.popper),{children:l.map(f=>i(_e,{action:f.action,active:f.active,disabled:f.disabled,icon:f.icon,tips:f.tips},f.key))}))}const W=d.exports.forwardRef(({disabled:t=!1,initialMarkdown:e=""},n)=>{const s=d.exports.useMemo(()=>{const f=new vt;return zt(f),f},[]),r=d.exports.useMemo(()=>{const f=He(Ve(Ue()));return s.wrapEditor(f)},[]),o=d.exports.useMemo(()=>s.createDefaultEditableProps(r),[]),[l,m,g]=Ze(r);d.exports.useEffect(()=>{n&&(typeof n=="function"?n(l):n.current=l),l.markdown=e},[r]);const[_,a]=d.exports.useState();r.setActionForm=a;const c=d.exports.useMemo(()=>{if(_)return Ke.exports.createPortal(_,document.body)},[_]);return Y(Ge,{editor:r,onChange:g,value:m,children:[i($t,{}),i(Ye,v({as:"article",className:"ti-community-editor"},o)),c]})});W.displayName="TiEditor";W.propTypes={disabled:ve.bool,initialMarkdown:ve.string};W.defaultProps={disabled:!1,initialMarkdown:""};const At=`## \u5F15\u7528 (blockquote)

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
`;var Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:At});const jt=`## Codes

### Usage

- \u8F93\u5165 \\\`\\\`\\\` \u52A0\u7A7A\u683C

### Examples

\`\`\`javascript
console.log('hello world')
\`\`\`

\`\`\`sql
SELECT * FROM hello_world;
\`\`\`

`;var qt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:jt});const Ht=`## \u6807\u9898

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
`;var Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Ht});const Ut=`## \u94FE\u63A5

\`\`\`
[title](url)
\`\`\`

> [title](#)

- \u521B\u5EFA\u94FE\u63A5
  - \u8F93\u5165\u94FE\u63A5 url \u5E76\u8F93\u5165\u7A7A\u683C\u4F1A\u81EA\u52A8\u8F6C\u6362
`;var Kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Ut});const Gt=`## \u5217\u8868

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
`;var Yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Gt});const Jt={"./slate-markdown/elements/blockquote/instructions.md":Bt,"./slate-markdown/elements/code/instructions.md":qt,"./slate-markdown/elements/heading/instructions.md":Vt,"./slate-markdown/elements/link/instructions.md":Kt,"./slate-markdown/elements/list/instructions.md":Yt},Qt=Object.values(Jt).map(t=>t.plainText).join(`

`);function Wt(){const t=d.exports.useRef(null),[e,n]=d.exports.useState("");return d.exports.useEffect(()=>{const r=setInterval(()=>{var o,l;n((l=(o=t.current)==null?void 0:o.markdown)!=null?l:"")},1e3);return()=>clearInterval(r)},[]),Y(I,{children:["\u5DE6\u8FB9\u662F\u7F16\u8F91\u5668\uFF0C\u53F3\u8FB9\u662F\u7F16\u8F91\u5668\u5185\u5BB9\u5B9E\u9645\u7684 markdown",i("button",{onClick:()=>{var o;const r=t.current.editor;ie.insert(r,(o=r.selection)!=null?o:[r.children.length-1],{url:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",alt:"",title:""})},children:"add img"}),Y("div",{style:{display:"flex"},children:[i(W,{ref:t,initialMarkdown:Qt}),i("textarea",{onChange:r=>{n(r.currentTarget.value),t.current.markdown=r.currentTarget.value},value:e})]})]})}Je.render(i(Qe.StrictMode,{children:i(Wt,{})}),document.getElementById("root"));
