var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var R=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))ne.call(e,n)&&R(t,n,e[n]);if(H)for(var n of H(e))se.call(e,n)&&R(t,n,e[n]);return t},v=(t,e)=>ee(t,te(e));var T=(t,e,n)=>(R(t,typeof e!="symbol"?e+"":e,n),n);import{r as g,u as A,p as re,a as oe,b as ae,c as le,d as ie,E as w,j as i,R as I,T as u,e as L,f as M,_ as B,N as f,P as c,l as ce,g as U,h as K,i as G,k as J,F as j,m as F,n as ue,o as pe,q as de,w as fe,s as ge,t as he,v as $,S as me,x as be,y as Q,z as ye,A as _e,B as ke}from"./vendor.e2a8d831.js";const ve=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};ve();class xe{constructor(e,n){T(this,"getMarkdownProcessor",A().use(re).use(oe,{bullet:"-",listItemIndent:"one",fence:"`",rule:"-"}));T(this,"setMarkdownProcessor",A().use(ae).use(le).use(ie));this.editor=e,this.setValue=n,this.getMarkdownProcessor.freeze(),this.setMarkdownProcessor.freeze()}get markdown(){return this.getMarkdownProcessor.stringify(this.getMarkdownProcessor.runSync({type:"root",children:this.editor.children}))}set markdown(e){this.setValue(this.setMarkdownProcessor.processSync(e).result),setTimeout(()=>{w.normalize(this.editor,{force:!0})},0)}}function we(t){const[e,n]=g.exports.useState([{type:"paragraph",children:[{text:""}]}]);return[g.exports.useMemo(()=>new xe(t,n),[t]),e,n]}function E(t){return v(m({},t),{register(e){e.define(t)}})}var b;(function(t){t.strong="strong",t.emphasis="emphasis",t.delete="delete",t.inlineCode="inlineCode"})(b||(b={}));var C=E({isLeaf:!0,render(t,{text:e,children:n,attributes:o}){let s=n;return e.delete&&(s=i("del",{children:s})),e.emphasis&&(s=i("em",{children:s})),e.strong&&(s=i("strong",{children:s})),e.inlineCode&&(s=i("code",{children:s})),i("span",v(m({},o),{children:s}))},toggleDecorator(t,e){!t.selection||(D(t,t.selection,e)?I.isCollapsed(t.selection)?w.addMark(t,e,!1):u.setNodes(t,{[e]:!1},{match:L.isText,split:!0}):I.isCollapsed(t.selection)?w.addMark(t,e,!0):u.setNodes(t,{[e]:!0},{match:L.isText,split:!0}),t.shouldUpdatePopper())}});function D(t,e,n){if(I.isCollapsed(e)&&t.marks&&typeof t.marks[n]!="undefined")return!!t.marks[n];const[o]=w.nodes(t,{at:w.unhangRange(t,e),match:s=>!w.isEditor(s)&&L.isText(s)&&!!s[n]});return!!o}var Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",get TextNodeDecorator(){return b},default:C,isDecoratorActive:D});class Ne{constructor(){T(this,"blockConfigs",[]);T(this,"inlineConfigs",[]);T(this,"textConfig");T(this,"inlineSet",new Set);T(this,"voidSet",new Set);T(this,"customElementMap",new Map)}define(e){return e.isLeaf?this.textConfig=e:(e.isInline?(this.inlineSet.add(e.type),this.inlineConfigs.push(e)):this.blockConfigs.push(e),this.customElementMap.set(e.type,e),e.isVoid&&this.voidSet.add(e.type)),this}wrapEditor(e){const{isVoid:n,isInline:o,normalizeNode:s}=e;return e.shouldUpdatePopper=()=>{},e.isVoid=a=>this.voidSet.has(a.type)||n(a),e.isInline=a=>this.inlineSet.has(a.type)||o(a),e.normalizeNode=a=>{let y=!0;w.withoutNormalizing(e,()=>{var l;const[P,r]=a;if(M.isElement(P)){const _=(l=this.customElementMap.get(P.type))==null?void 0:l.normalize;_&&_(e,P,r,()=>{y=!1})}}),y&&s(a)},e}createDefaultEditableProps(e){const n=r=>{var _;const{selection:l}=e;if(l&&I.isCollapsed(l)){const p=l.anchor,h=f.get(e,p.path),x=f.parent(e,p.path);if(L.isText(h)&&M.isElement(x)&&x.type==="paragraph"&&r.data===" "&&!c.hasPrevious(p.path)){const N=h.text.slice(0,p.offset);for(const{toggle:d}of this.blockConfigs)if(!(typeof d.estimatePrefixLength=="number"&&N.length>d.estimatePrefixLength)&&(console.log(d.prefix,"go",this.blockConfigs),(_=d.prefix)==null?void 0:_.test(N))){console.log(d.prefix,"go");const k=d.onTrigger(N);if(typeof k!="undefined"){u.delete(e,{at:{path:p.path,offset:0},distance:p.offset}),d.toggle(e,c.parent(p.path),k),r.preventDefault();return}}}}},o=r=>l=>{const{selection:_}=e;if(_&&I.isCollapsed(_)){const p=_.anchor;if(Te(e,p)){const h=c.parent(p.path),x=f.get(e,h);if(M.isElement(x)){const N=this.customElementMap.get(x.type);if(N){const d=r(N.events);if(d&&d(e,p.path)){l.preventDefault();return}}if(x.type==="paragraph"){const d=f.parent(e,h);if(!c.hasPrevious(h)&&M.isElement(d)){const k=this.customElementMap.get(d.type);if(k==null?void 0:k.wrappingParagraph){const z=r(k.events);if(z&&z(e,p.path)){l.preventDefault();return}}}}}}}},s=o(r=>r.onStartDelete),a=o(r=>r.onStartEnter),P=(r=>l=>{const{selection:_}=e;if(_&&I.isCollapsed(_)){const p=_.anchor,h=c.parent(p.path),x=f.parent(e,p.path);if(M.isElement(x)){const N=this.customElementMap.get(x.type);if(N){const d=r(N.events);if(d&&d(e,p.path)){l.preventDefault();return}}if(x.type==="paragraph"){const d=f.parent(e,h);if(M.isElement(d)){const k=this.customElementMap.get(d.type);if(k==null?void 0:k.wrappingParagraph){const z=r(k.events);if(z&&z(e,p.path)){l.preventDefault();return}}}}}}})(r=>r.onTab);return{renderElement:r=>{const l=this.customElementMap.get(r.element.type);return l?l.render(e,r):(console.warn(`${r.element.type} not impl`),g.exports.createElement("div",r.attributes,r.children))},renderLeaf:r=>this.textConfig?this.textConfig.render(e,r):g.exports.createElement("span",r.attributes,r.children),onDOMBeforeInput:r=>{W(e,()=>{switch(console.log(r.inputType),r.inputType){case"insertText":n(r);break;case"deleteContentBackward":s(r);break;case"insertParagraph":a(r);break;case"insertFromPaste":console.log(r);break}})},onKeyDown:r=>{W(e,()=>{if(B("tab",r)){P(r);return}if(B(["ctrl+enter"],r)){u.insertText(e,`
`);return}if(B("enter",r)&&e.selection){const l=f.parent(e,e.selection.anchor.path);if(w.isBlock(e,l)&&!/paragraph|heading/.test(l.type)){u.insertText(e,`
`),r.preventDefault();return}}if(B("meta+b",r)){C.toggleDecorator(e,b.strong),r.preventDefault();return}if(B("meta+i",r)){C.toggleDecorator(e,b.emphasis),r.preventDefault();return}})},onContextMenu:r=>{e.shouldUpdatePopper(),r.preventDefault(),r.stopPropagation()},onClick:r=>{e.shouldHidePopper()}}}}function Te(t,e){return e.offset===0&&!c.hasPrevious(e.path)&&L.isText(f.get(t,e.path))}function W(t,e){let n=!0;w.withoutNormalizing(t,()=>{e(()=>{n=!1})}),n||w.normalize(t)}function S(t,e){return M.isElement(t)&&t.type===e}function Se(t,e){const n=c.previous(e),o=f.get(t,n);return n.concat(o.children.length)}const X=E({type:"blockquote",isInline:!1,isLeaf:!1,isVoid:!1,wrappingParagraph:!0,render:(t,{children:e,attributes:n})=>i("blockquote",v(m({},n),{children:e})),toggle:{prefix:/^>$/,toggle:(t,e,n)=>{n?u.wrapNodes(t,{type:"blockquote",children:[]},{at:e}):u.unwrapNodes(t,{at:c.parent(e)})},onTrigger(){return!0}},events:{onStartDelete:(t,e)=>{const n=f.parent(t,c.parent(e));return S(n,"blockquote")?(X.toggle.toggle(t,c.parent(e),!1),!0):!1}}});var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const Me=E({type:"code",isInline:!1,isLeaf:!1,isVoid:!1,wrappingParagraph:!1,render:(t,{children:e,attributes:n})=>i("pre",v(m({},n),{children:i("code",{children:e})})),toggle:{},events:{}});var Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me});const O=E({type:"heading",isInline:!1,isLeaf:!1,isVoid:!1,wrappingParagraph:!1,render:(t,{element:e,children:n,attributes:o})=>g.exports.createElement(`h${e.depth}`,o,n),toggle:{prefix:/^#{1,6}$/,estimatePrefixLength:6,toggle:(t,e,n)=>{n?u.setNodes(t,m({type:"heading"},n),{at:e}):(u.unsetNodes(t,"depth",{at:e}),u.setNodes(t,{type:"paragraph"},{at:e}))},onTrigger:t=>({depth:t.length})},events:{onStartDelete:(t,e)=>{const n=f.parent(t,e);return S(n,"heading")?(n.depth>1?O.toggle.toggle(t,c.parent(e),{depth:n.depth-1}):O.toggle.toggle(t,c.parent(e),!1),!0):!1},onStartEnter:(t,e)=>{const n=f.parent(t,e);return S(n,"heading")?(O.toggle.toggle(t,c.parent(e),!1),!0):!1},onTab:(t,e)=>{const n=f.parent(t,e);return S(n,"heading")?(n.depth<6&&O.toggle.toggle(t,c.parent(e),{depth:n.depth+1}),!0):!1}}});var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O}),Y=E({type:"image",isInline:!0,isVoid:!1,isLeaf:!1,render:(t,{element:e,attributes:n})=>i("img",m({alt:e.alt,src:e.url,title:e.title},n)),insert:(t,e,n)=>{u.insertNodes(t,[{text:" "},m({type:"image",children:[]},n),{text:" "}],{at:e})}}),De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const q=E({type:"list",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!0,normalize:(t,e,n,o)=>{if(e.children.length===0){u.removeNodes(t,{at:n}),o();return}if(c.hasPrevious(n)){const s=f.get(t,c.previous(n));if(S(s,"list")&&s.ordered===e.ordered&&s.spread===e.spread&&s.start===void 0){u.mergeNodes(t,{at:n}),o();return}}},render(t,{element:e,attributes:n,children:o}){return e.ordered?i("ol",v(m({},n),{start:e.start,children:o})):i("ul",v(m({},n),{children:o}))},toggle:{prefix:/^-|\d+\.$/,toggle:(t,e,n)=>{if(!S(f.get(t,e),"paragraph"))throw new Error("can only call ListNode.toggle on a paragraph node.");if(n===!1){const o=c.parent(e),s=c.next(c.parent(o));u.splitNodes(t,{at:o}),u.moveNodes(t,{at:s.concat(0),to:s}),u.unwrapNodes(t,{at:s}),u.select(t,{path:s,offset:0})}else{const o=c.parent(e),s=f.get(t,o);if(S(s,"listItem")){if(c.hasPrevious(o)){const a=Se(t,o);u.moveNodes(t,{at:o,to:a}),u.wrapNodes(t,m({type:"list",children:[]},n),{at:a})}}else u.wrapNodes(t,{type:"listItem",checked:void 0,spread:n.spread,children:[]},{at:e}),u.wrapNodes(t,m({type:"list",children:[]},n),{at:e})}},onTrigger:t=>t==="-"?{ordered:!1,start:void 0,spread:void 0}:{ordered:!0,start:parseInt(t),spread:void 0}},events:{}});var ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const Le=E({type:"listItem",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!0,normalize:(t,e,n)=>{const o=e.children.length-1;if(e.children.length>1&&S(e.children[o],"paragraph")){const s=c.next(n);u.moveNodes(t,{at:n.concat(o),to:s}),u.wrapNodes(t,{type:"listItem",checked:e.checked,spread:e.spread,children:[]},{at:s})}},render(t,{element:e,attributes:n,children:o}){return i("li",v(m({},n),{children:o}))},toggle:{},events:{onStartDelete:(t,e)=>(q.toggle.toggle(t,c.parent(e),!1),!0),onStartEnter:(t,e)=>f.string(f.get(t,e))?!1:(q.toggle.toggle(t,c.parent(e),!1),!0),onTab:(t,e)=>{const n=f.parent(t,c.parent(c.parent(e)));if(S(n,"list")){const{spread:o,ordered:s}=n;return q.toggle.toggle(t,c.parent(e),{spread:o,ordered:s,start:void 0}),!0}else return console.warn(`bad structure, expect a list at ${e}-2`),!1}}});var Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Le});const Fe=E({type:"paragraph",isLeaf:!1,isInline:!1,isVoid:!1,wrappingParagraph:!1,toggle:{},events:{},render(t,{attributes:e,children:n}){return i("p",v(m({},e),{children:n}))}});var Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fe});const je={"./blockquote/BlockquoteNode.tsx":Ee,"./code/CodeNode.tsx":Ce,"./heading/HeadingNode.tsx":Ie,"./image/ImageNode.tsx":De,"./list/ListItemNode.tsx":Be,"./list/ListNode.tsx":ze,"./paragraph/ParagraphNode.tsx":Oe,"./text/TextNode.tsx":Pe};function qe(t){for(const[e,{default:n}]of Object.entries(je))typeof(n==null?void 0:n.register)=="function"&&(console.debug("auto detected",e),n.register(t))}ce.add(U,K,G,J);function Ve(t){return t.selection?[{key:b.strong,icon:i(j,{icon:U}),active:D(t,t.selection,b.strong),disabled:!1,action:n=>{console.log(t.selection),C.toggleDecorator(t,b.strong),n.preventDefault(),n.stopPropagation(),F.focus(t)}},{key:b.emphasis,icon:i(j,{icon:K}),active:D(t,t.selection,b.emphasis),disabled:!1,action:n=>{C.toggleDecorator(t,b.emphasis),n.preventDefault(),n.stopPropagation(),F.focus(t)}},{key:b.delete,icon:i(j,{icon:G}),active:D(t,t.selection,b.delete),disabled:!1,action:n=>{C.toggleDecorator(t,b.delete),n.preventDefault(),n.stopPropagation(),F.focus(t)}},{key:b.inlineCode,icon:i(j,{icon:J}),active:D(t,t.selection,b.inlineCode),disabled:!1,action:n=>{C.toggleDecorator(t,b.inlineCode),n.preventDefault(),n.stopPropagation(),F.focus(t)}}]:[]}function Re({icon:t,active:e,action:n}){return i("span",{className:ue("toolbar-item",{active:e}),onMouseDown:n,children:t})}function $e(){const t=pe(),e=g.exports.useRef(null),[n,o]=g.exports.useState(0),[s,a]=g.exports.useState(!0);t.shouldUpdatePopper=()=>{o(h=>h+1),a(!1)},t.shouldHidePopper=()=>a(!0);const y=g.exports.useMemo(()=>({getBoundingClientRect(){return t.selection?F.toDOMRange(t,t.selection).getBoundingClientRect():{width:0,height:0}}}),[t]),{styles:P,attributes:r,update:l}=de(y,e.current,{placement:"top",modifiers:[{name:"computeStyles",options:{adaptive:!1}},{name:"offset",options:{offset:[0,8]}}]});g.exports.useEffect(()=>{l&&l()},[n,l]);const _=Ve(t),p=s||_.length===0;return i("div",v(m({className:"ti-hovering-toolbar",ref:e,style:v(m({},P.popper),{opacity:p?0:1})},r.popper),{children:_.map(h=>i(Re,{action:h.action,active:h.active,disabled:h.disabled,icon:h.icon},h.key))}))}const V=g.exports.forwardRef(({disabled:t=!1,initialMarkdown:e=""},n)=>{const o=g.exports.useMemo(()=>{const l=new Ne;return qe(l),l},[]),s=g.exports.useMemo(()=>{const l=fe(ge(he()));return o.wrapEditor(l)},[]),a=g.exports.useMemo(()=>o.createDefaultEditableProps(s),[]),[y,P,r]=we(s);return g.exports.useEffect(()=>{n&&(typeof n=="function"?n(y):n.current=y),y.markdown=e},[s]),$(me,{editor:s,onChange:r,value:P,children:[i($e,{}),i(be,m({className:"ti-community-editor"},a))]})});V.displayName="TiEditor";V.propTypes={disabled:Q.bool,initialMarkdown:Q.string};V.defaultProps={disabled:!1,initialMarkdown:""};const He=`## \u5F15\u7528 (blockquote)

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
`;var Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:He});const Ue=`## \u6807\u9898

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
- \u8C03\u6574\u6807\u9898\u7EA7\u522B
  1. \u6309 \`<Tab>\` \u589E\u52A0\u6807\u9898\u7EA7\u522B
  2. \u5728\u6807\u9898\u8D77\u59CB\u5904\u70B9\u51FB \`<Backspace>\` \u4EE5\u964D\u7EA7
  3. \u5728\u6807\u9898\u8D77\u59CB\u5904\u70B9\u51FB \`<Enter>\` \u4EE5\u5C06\u6807\u9898\u8F6C\u6362\u6210\u6BB5\u843D
`;var Ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Ue});const Ge=`## \u5217\u8868

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
`;var Je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",plainText:Ge});const Qe={"./slate-markdown/elements/blockquote/instructions.md":Ae,"./slate-markdown/elements/heading/instructions.md":Ke,"./slate-markdown/elements/list/instructions.md":Je},We=Object.values(Qe).map(t=>t.plainText).join(`

`);function Xe(){const t=g.exports.useRef(null),[e,n]=g.exports.useState("");return g.exports.useEffect(()=>{const s=setInterval(()=>{var a,y;n((y=(a=t.current)==null?void 0:a.markdown)!=null?y:"")},1e3);return()=>clearInterval(s)},[]),$(ye,{children:["\u5DE6\u8FB9\u662F\u7F16\u8F91\u5668\uFF0C\u53F3\u8FB9\u662F\u7F16\u8F91\u5668\u5185\u5BB9\u5B9E\u9645\u7684 markdown",i("button",{onClick:()=>{var a;const s=t.current.editor;Y.insert(s,(a=s.selection)!=null?a:[s.children.length-1],{url:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",alt:"",title:""})},children:"add img"}),$("div",{style:{display:"flex"},children:[i(V,{ref:t,initialMarkdown:We}),i("textarea",{onChange:s=>{n(s.currentTarget.value),t.current.markdown=s.currentTarget.value},value:e})]})]})}_e.render(i(ke.StrictMode,{children:i(Xe,{})}),document.getElementById("root"));
