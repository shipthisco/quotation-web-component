(function(){"use strict";const wt=globalThis,Jt=wt.ShadowRoot&&(wt.ShadyCSS===void 0||wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xt=Symbol(),zr=new WeakMap;let Wr=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Jt&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=zr.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&zr.set(r,e))}return e}toString(){return this.cssText}};const Yn=t=>new Wr(typeof t=="string"?t:t+"",void 0,Xt),j=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1],t[0]);return new Wr(r,t,Xt)},Jn=(t,e)=>{if(Jt)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),n=wt.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,t.appendChild(i)}},Kr=Jt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Yn(r)})(t):t;const{is:Xn,defineProperty:Zn,getOwnPropertyDescriptor:Qn,getOwnPropertyNames:eo,getOwnPropertySymbols:to,getPrototypeOf:ro}=Object,xt=globalThis,Yr=xt.trustedTypes,io=Yr?Yr.emptyScript:"",no=xt.reactiveElementPolyfillSupport,Je=(t,e)=>t,Ct={toAttribute(t,e){switch(e){case Boolean:t=t?io:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Zt=(t,e)=>!Xn(t,e),Jr={attribute:!0,type:String,converter:Ct,reflect:!1,useDefault:!1,hasChanged:Zt};Symbol.metadata??=Symbol("metadata"),xt.litPropertyMetadata??=new WeakMap;let Fe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Jr){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,r);n!==void 0&&Zn(this.prototype,e,n)}}static getPropertyDescriptor(e,r,i){const{get:n,set:o}=Qn(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:n,set(s){const a=n?.call(this);o?.call(this,s),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Jr}static _$Ei(){if(this.hasOwnProperty(Je("elementProperties")))return;const e=ro(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Je("properties"))){const r=this.properties,i=[...eo(r),...to(r)];for(const n of i)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)r.unshift(Kr(n))}else e!==void 0&&r.push(Kr(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$ET(e,r){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:Ct).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,r){const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ct;this._$Em=n;const a=s.fromAttribute(r,o.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,r,i,n=!1,o){if(e!==void 0){const s=this.constructor;if(n===!1&&(o=this[e]),i??=s.getPropertyOptions(e),!((i.hasChanged??Zt)(o,r)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??r??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(r=void 0),this._$AL.set(e,r)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:s}=o,a=this[n];s!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};Fe.elementStyles=[],Fe.shadowRootOptions={mode:"open"},Fe[Je("elementProperties")]=new Map,Fe[Je("finalized")]=new Map,no?.({ReactiveElement:Fe}),(xt.reactiveElementVersions??=[]).push("2.1.2");const Qt=globalThis,Xr=t=>t,St=Qt.trustedTypes,Zr=St?St.createPolicy("lit-html",{createHTML:t=>t}):void 0,Qr="$lit$",ce=`lit$${Math.random().toFixed(9).slice(2)}$`,ei="?"+ce,oo=`<${ei}>`,ye=document,Xe=()=>ye.createComment(""),Ze=t=>t===null||typeof t!="object"&&typeof t!="function",er=Array.isArray,so=t=>er(t)||typeof t?.[Symbol.iterator]=="function",tr=`[ 	
\f\r]`,Qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ti=/-->/g,ri=/>/g,be=RegExp(`>|${tr}(?:([^\\s"'>=/]+)(${tr}*=${tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ii=/'/g,ni=/"/g,oi=/^(?:script|style|textarea|title)$/i,ao=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),f=ao(1),qe=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),si=new WeakMap,ve=ye.createTreeWalker(ye,129);function ai(t,e){if(!er(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zr!==void 0?Zr.createHTML(e):e}const lo=(t,e)=>{const r=t.length-1,i=[];let n,o=e===2?"<svg>":e===3?"<math>":"",s=Qe;for(let a=0;a<r;a++){const d=t[a];let c,u,h=-1,m=0;for(;m<d.length&&(s.lastIndex=m,u=s.exec(d),u!==null);)m=s.lastIndex,s===Qe?u[1]==="!--"?s=ti:u[1]!==void 0?s=ri:u[2]!==void 0?(oi.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=be):u[3]!==void 0&&(s=be):s===be?u[0]===">"?(s=n??Qe,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?be:u[3]==='"'?ni:ii):s===ni||s===ii?s=be:s===ti||s===ri?s=Qe:(s=be,n=void 0);const b=s===be&&t[a+1].startsWith("/>")?" ":"";o+=s===Qe?d+oo:h>=0?(i.push(c),d.slice(0,h)+Qr+d.slice(h)+ce+b):d+ce+(h===-2?a:b)}return[ai(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class et{constructor({strings:e,_$litType$:r},i){let n;this.parts=[];let o=0,s=0;const a=e.length-1,d=this.parts,[c,u]=lo(e,r);if(this.el=et.createElement(c,i),ve.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=ve.nextNode())!==null&&d.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(Qr)){const m=u[s++],b=n.getAttribute(h).split(ce),C=/([.?@])?(.*)/.exec(m);d.push({type:1,index:o,name:C[2],strings:b,ctor:C[1]==="."?uo:C[1]==="?"?ho:C[1]==="@"?po:Et}),n.removeAttribute(h)}else h.startsWith(ce)&&(d.push({type:6,index:o}),n.removeAttribute(h));if(oi.test(n.tagName)){const h=n.textContent.split(ce),m=h.length-1;if(m>0){n.textContent=St?St.emptyScript:"";for(let b=0;b<m;b++)n.append(h[b],Xe()),ve.nextNode(),d.push({type:2,index:++o});n.append(h[m],Xe())}}}else if(n.nodeType===8)if(n.data===ei)d.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(ce,h+1))!==-1;)d.push({type:7,index:o}),h+=ce.length-1}o++}}static createElement(e,r){const i=ye.createElement("template");return i.innerHTML=e,i}}function Le(t,e,r=t,i){if(e===qe)return e;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const o=Ze(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(t),n._$AT(t,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(e=Le(t,n._$AS(t,e.values),n,i)),e}class co{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,n=(e?.creationScope??ye).importNode(r,!0);ve.currentNode=n;let o=ve.nextNode(),s=0,a=0,d=i[0];for(;d!==void 0;){if(s===d.index){let c;d.type===2?c=new tt(o,o.nextSibling,this,e):d.type===1?c=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(c=new fo(o,this,e)),this._$AV.push(c),d=i[++a]}s!==d?.index&&(o=ve.nextNode(),s++)}return ve.currentNode=ye,n}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,n){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Le(this,e,r),Ze(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==qe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):so(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&Ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(ye.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=et.createElement(ai(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new co(n,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(e){let r=si.get(e.strings);return r===void 0&&si.set(e.strings,r=new et(e)),r}k(e){er(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of e)n===r.length?r.push(i=new tt(this.O(Xe()),this.O(Xe()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const i=Xr(e).nextSibling;Xr(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,n,o){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}_$AI(e,r=this,i,n){const o=this.strings;let s=!1;if(o===void 0)e=Le(this,e,r,0),s=!Ze(e)||e!==this._$AH&&e!==qe,s&&(this._$AH=e);else{const a=e;let d,c;for(e=o[0],d=0;d<o.length-1;d++)c=Le(this,a[i+d],r,d),c===qe&&(c=this._$AH[d]),s||=!Ze(c)||c!==this._$AH[d],c===I?e=I:e!==I&&(e+=(c??"")+o[d+1]),this._$AH[d]=c}s&&!n&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class uo extends Et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class ho extends Et{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class po extends Et{constructor(e,r,i,n,o){super(e,r,i,n,o),this.type=5}_$AI(e,r=this){if((e=Le(this,e,r,0)??I)===qe)return;const i=this._$AH,n=e===I&&i!==I||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==I&&(i===I||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class fo{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}}const $o=Qt.litHtmlPolyfillSupport;$o?.(et,tt),(Qt.litHtmlVersions??=[]).push("3.3.2");const mo=(t,e,r)=>{const i=r?.renderBefore??e;let n=i._$litPart$;if(n===void 0){const o=r?.renderBefore??null;i._$litPart$=n=new tt(e.insertBefore(Xe(),o),o,void 0,r??{})}return n._$AI(t),n};const rr=globalThis;class X extends Fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mo(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qe}}X._$litElement$=!0,X.finalized=!0,rr.litElementHydrateSupport?.({LitElement:X});const go=rr.litElementPolyfillSupport;go?.({LitElement:X}),(rr.litElementVersions??=[]).push("4.2.2");const q=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};const yo={attribute:!0,type:String,converter:Ct,reflect:!1,hasChanged:Zt},bo=(t=yo,e,r)=>{const{kind:i,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),i==="accessor"){const{name:s}=r;return{set(a){const d=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,d,t,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(i==="setter"){const{name:s}=r;return function(a){const d=this[s];e.call(this,a),this.requestUpdate(s,d,t,!0,a)}}throw Error("Unsupported decorator location: "+i)};function $(t){return(e,r)=>typeof r=="object"?bo(t,e,r):((i,n,o)=>{const s=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),s?Object.getOwnPropertyDescriptor(n,o):void 0})(t,e,r)}function O(t){return $({...t,state:!0,attribute:!1})}const vo=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);function di(t,e){return(r,i,n)=>{const o=s=>s.renderRoot?.querySelector(t)??null;return vo(r,i,{get(){return o(this)}})}}var _o=Object.getOwnPropertyDescriptor,wo=(t,e,r,i)=>{for(var n=i>1?void 0:i?_o(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let ir=class extends X{render(){return f`<slot></slot>`}};ir.styles=j`
    :host {
      display: block;
      border-radius: var(--qwc-radius);
      padding: 20px;
      border: 1px solid var(--qwc-border);
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
      background: var(--qwc-bg);
      color: var(--qwc-text);
    }
  `,ir=wo([q("shipthis-quote-card")],ir);var xo=Object.getOwnPropertyDescriptor,Co=(t,e,r,i)=>{for(var n=i>1?void 0:i?xo(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let nr=class extends X{render(){return f`
      <slot>
        <h3>Quotation Form</h3>
      </slot>
    `}};nr.styles=j`
    :host {
      display:block;
      margin-bottom:16px;
    }
  `,nr=Co([q("shipthis-quote-header")],nr);var So=Object.getOwnPropertyDescriptor,Eo=(t,e,r,i)=>{for(var n=i>1?void 0:i?So(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let or=class extends X{render(){return f`
      <slot>
        <button>Submit</button>
      </slot>
    `}};or.styles=j`
    :host {
      display:block;
      margin-top:20px;
      border-top:1px solid #eee;
      padding-top:12px;
    }
  `,or=Eo([q("shipthis-quote-footer")],or);function li(t,e){return function(){return t.apply(e,arguments)}}const{toString:Oo}=Object.prototype,{getPrototypeOf:ue}=Object,{iterator:rt,toStringTag:ci}=Symbol,it=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),ui=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),hi=(t,e,r)=>t===Object.prototype||!r&&e===null,Ao=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(r=>{if(ui(r))return!1;const i=Object.getOwnPropertyDescriptor(t,r);return!!i&&i.configurable&&i.writable===!0})},nt=(t,e)=>{let r=t;const i=[];for(;r!=null;){if(i.indexOf(r)!==-1)return!1;i.push(r);const n=ue(r);if(hi(r,n,r===t))return!1;if(it(r,e))return!0;r=n}return!1},Po=(t,e)=>t!=null&&nt(t,e)?t[e]:void 0,To=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=ue(t);if(e===null&&Ao(t))return t;const r=Object.create(null),i=Object.create(null),n=[];let o=t;for(;o!=null&&n.indexOf(o)===-1;){n.push(o);const s=o===t?e:ue(o);if(hi(o,s,o===t))break;const a=Object.getOwnPropertyNames(o);Object.getOwnPropertySymbols&&a.push(...Object.getOwnPropertySymbols(o));for(const d of a)ui(d)||it(i,d)||(r[d]=t[d],i[d]=!0);o=s}return r},sr=(t=>e=>{const r=Oo.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Y=t=>(t=t.toLowerCase(),e=>sr(e)===t),Ot=t=>e=>typeof e===t,{isArray:_e}=Array,we=Ot("undefined");function je(t){return t!==null&&!we(t)&&t.constructor!==null&&!we(t.constructor)&&K(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const pi=Y("ArrayBuffer");function Ro(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&pi(t.buffer),e}const Do=Ot("string"),K=Ot("function"),fi=Ot("number"),ke=t=>t!==null&&typeof t=="object",No=t=>t===!0||t===!1,At=t=>{if(!ke(t))return!1;const e=ue(t);return(e===null||e===Object.prototype||ue(e)===null)&&!nt(t,ci)&&!nt(t,rt)},Io=t=>{if(!ke(t)||je(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Fo=Y("Date"),qo=Y("File"),Lo=t=>!!(t&&typeof t.uri<"u"),jo=t=>t&&typeof t.getParts<"u",ko=Y("Blob"),Mo=Y("FileList"),Uo=Y("Set"),Bo=t=>ke(t)&&K(t.pipe);function Go(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const $i=Go(),mi=typeof $i.FormData<"u"?$i.FormData:void 0,Ho=t=>{if(!t)return!1;if(mi&&t instanceof mi)return!0;const e=ue(t);if(!e||e===Object.prototype||!K(t.append))return!1;const r=sr(t);return r==="formdata"||r==="object"&&K(t.toString)&&t.toString()==="[object FormData]"},Vo=Y("URLSearchParams"),[zo,Wo,Ko,Yo]=["ReadableStream","Request","Response","Headers"].map(Y),Jo=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ot(t,e,{allOwnKeys:r=!1}={}){if(t===null||typeof t>"u")return;let i,n;if(typeof t!="object"&&(t=[t]),_e(t))for(i=0,n=t.length;i<n;i++)e.call(null,t[i],i,t);else{if(je(t))return;const o=r?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;let a;for(i=0;i<s;i++)a=o[i],e.call(null,t[a],a,t)}}function gi(t,e){if(je(t))return null;e=e.toLowerCase();const r=Object.keys(t);let i=r.length,n;for(;i-- >0;)if(n=r[i],e===n.toLowerCase())return n;return null}const xe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,yi=t=>!we(t)&&t!==xe;function ar(...t){const{caseless:e,skipUndefined:r}=yi(this)&&this||{},i={},n=(o,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const a=e&&typeof s=="string"&&gi(i,s)||s,d=it(i,a)?i[a]:void 0;At(d)&&At(o)?i[a]=ar(d,o):At(o)?i[a]=ar({},o):_e(o)?i[a]=o.slice():(!r||!we(o))&&(i[a]=o)};for(let o=0,s=t.length;o<s;o++){const a=t[o];if(!a||je(a)||(ot(a,n),typeof a!="object"||_e(a)))continue;const d=Object.getOwnPropertySymbols(a);for(let c=0;c<d.length;c++){const u=d[c];ds.call(a,u)&&n(a[u],u)}}return i}const Xo=(t,e,r,{allOwnKeys:i}={})=>(ot(e,(n,o)=>{r&&K(n)?Object.defineProperty(t,o,{__proto__:null,value:li(n,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,o,{__proto__:null,value:n,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Zo=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Qo=(t,e,r,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),r&&Object.assign(t.prototype,r)},es=(t,e,r,i)=>{let n,o,s;const a={};if(e=e||{},t==null)return e;do{for(n=Object.getOwnPropertyNames(t),o=n.length;o-- >0;)s=n[o],(!i||i(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=r!==!1&&ue(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},ts=(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;const i=t.indexOf(e,r);return i!==-1&&i===r},rs=t=>{if(!t)return null;if(_e(t))return t;let e=t.length;if(!fi(e))return null;const r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},is=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ue(Uint8Array)),ns=(t,e)=>{const i=(t&&t[rt]).call(t);let n;for(;(n=i.next())&&!n.done;){const o=n.value;e.call(t,o[0],o[1])}},os=(t,e)=>{let r;const i=[];for(;(r=t.exec(e))!==null;)i.push(r);return i},ss=Y("HTMLFormElement"),as=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,n){return i.toUpperCase()+n}),{propertyIsEnumerable:ds}=Object.prototype,ls=Y("RegExp"),bi=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),i={};ot(r,(n,o)=>{let s;(s=e(n,o,t))!==!1&&(i[o]=s||n)}),Object.defineProperties(t,i)},cs=t=>{bi(t,(e,r)=>{if(K(t)&&["arguments","caller","callee"].includes(r))return!1;const i=t[r];if(K(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},us=(t,e)=>{const r={},i=n=>{n.forEach(o=>{r[o]=!0})};return _e(t)?i(t):i(String(t).split(e)),r},hs=()=>{},ps=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function fs(t){return!!(t&&K(t.append)&&t[ci]==="FormData"&&t[rt])}const $s=t=>{const e=new WeakSet,r=i=>{if(ke(i)){if(e.has(i))return;if(je(i))return i;if(!("toJSON"in i)){e.add(i);let n;if(Uo(i)){n=[];for(const o of i){const s=r(o);!we(s)&&n.push(s)}}else n=_e(i)?[]:{},ot(i,(o,s)=>{const a=r(o);!we(a)&&(n[s]=a)});return e.delete(i),n}}return i};return r(t)},ms=Y("AsyncFunction"),gs=t=>t&&(ke(t)||K(t))&&K(t.then)&&K(t.catch),vi=((t,e)=>t?setImmediate:e?((r,i)=>(xe.addEventListener("message",({source:n,data:o})=>{n===xe&&o===r&&i.length&&i.shift()()},!1),n=>{i.push(n),xe.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",K(xe.postMessage)),ys=typeof queueMicrotask<"u"?queueMicrotask.bind(xe):typeof process<"u"&&process.nextTick||vi,_i=t=>t!=null&&K(t[rt]),l={isArray:_e,isArrayBuffer:pi,isBuffer:je,isFormData:Ho,isArrayBufferView:Ro,isString:Do,isNumber:fi,isBoolean:No,isObject:ke,isPlainObject:At,isEmptyObject:Io,isReadableStream:zo,isRequest:Wo,isResponse:Ko,isHeaders:Yo,isUndefined:we,isDate:Fo,isFile:qo,isReactNativeBlob:Lo,isReactNative:jo,isBlob:ko,isRegExp:ls,isFunction:K,isStream:Bo,isURLSearchParams:Vo,isTypedArray:is,isFileList:Mo,forEach:ot,merge:ar,extend:Xo,trim:Jo,stripBOM:Zo,inherits:Qo,toFlatObject:es,kindOf:sr,kindOfTest:Y,endsWith:ts,toArray:rs,forEachEntry:ns,matchAll:os,isHTMLForm:ss,hasOwnProperty:it,hasOwnProp:it,hasOwnInPrototypeChain:nt,getSafeProp:Po,toSafeFlatObject:To,reduceDescriptors:bi,freezeMethods:cs,toObjectSet:us,toCamelCase:as,noop:hs,toFiniteNumber:ps,findKey:gi,global:xe,isContextDefined:yi,isSpecCompliantForm:fs,toJSONObject:$s,isAsyncFn:ms,isThenable:gs,setImmediate:vi,asap:ys,isIterable:_i,isSafeIterable:t=>t!=null&&nt(t,rt)&&_i(t)},bs=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vs=t=>{const e={};let r,i,n;return t&&t.split(`
`).forEach(function(s){n=s.indexOf(":"),r=s.substring(0,n).trim().toLowerCase(),i=s.substring(n+1).trim();const a=l.hasOwnProp(e,r);!r||a&&l.hasOwnProp(bs,r)||(r==="set-cookie"?a?e[r].push(i):e[r]=[i]:e[r]=a?e[r]+", "+i:i)}),e};function _s(t){let e=0,r=t.length;for(;e<r;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;r>e;){const i=t.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return e===0&&r===t.length?t:t.slice(e,r)}const ws=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),xs=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function dr(t,e){return l.isArray(t)?t.map(r=>dr(r,e)):_s(String(t).replace(e,""))}const Cs=t=>dr(t,ws),Ss=t=>dr(t,xs);function wi(t){const e=Object.create(null);return l.forEach(t.toJSON(),(r,i)=>{e[i]=Ss(r)}),e}const xi=Symbol("internals");function st(t){return t&&String(t).trim().toLowerCase()}function Pt(t){return t===!1||t==null?t:l.isArray(t)?t.map(Pt):Cs(String(t))}function Es(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(t);)e[i[1]]=i[2];return e}const Os=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function lr(t){let e=0,r=t.length;for(;e<r;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;r>e;){const i=t.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return e===0&&r===t.length?t:t.slice(e,r)}function As(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let r="";for(let i=1;i<e;i++){const n=t.charCodeAt(i);if(n===34||n===92&&(i+=1,i>=e))return t;r+=t[i]}return r}function Ps(t){const e=Object.create(null),r=String(t);let i=0,n=!1,o=!1;function s(a){const d=lr(r.slice(i,a)),c=d.indexOf("=");if(c<1)return;const u=lr(d.slice(0,c));if(!Os.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const m=lr(d.slice(c+1));e[h]=As(m)}for(let a=0;a<r.length;a++){const d=r.charCodeAt(a);n?o?o=!1:d===92?o=!0:d===34&&(n=!1):d===34?n=!0:(d===44||d===59)&&(s(a),i=a+1)}return s(r.length),e}const Ts=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function cr(t,e,r,i,n){if(l.isFunction(i))return i.call(this,e,r);if(n&&(e=r),!!l.isString(e)){if(l.isString(i))return e.indexOf(i)!==-1;if(l.isRegExp(i))return i.test(e)}}function Rs(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,r,i)=>r.toUpperCase()+i)}function Ds(t,e){const r=l.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+r,{__proto__:null,value:function(n,o,s){return this[i].call(this,e,n,o,s)},configurable:!0})})}let H=class{constructor(e){e&&this.set(e)}set(e,r,i){const n=this;function o(a,d,c){const u=st(d);if(!u)return;const h=l.findKey(n,u);(!h||n[h]===void 0||c===!0||c===void 0&&n[h]!==!1)&&(n[h||d]=Pt(a))}const s=(a,d)=>l.forEach(a,(c,u)=>o(c,u,d));if(l.isPlainObject(e)||e instanceof this.constructor)s(e,r);else if(l.isString(e)&&(e=e.trim())&&!Ts(e))s(vs(e),r);else if(l.isObject(e)&&l.isSafeIterable(e)){let a=Object.create(null),d,c;for(const u of e){if(!l.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],l.hasOwnProp(a,c)?(d=a[c],a[c]=l.isArray(d)?[...d,u[1]]:[d,u[1]]):a[c]=u[1]}s(a,r)}else e!=null&&o(r,e,i);return this}get(e,r){if(e=st(e),e){const i=l.findKey(this,e);if(i){const n=this[i];if(!r)return n;if(r===!0)return Es(n);if(l.isFunction(r))return r.call(this,n,i);if(l.isRegExp(r))return r.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,r){if(e=st(e),e){const i=l.findKey(this,e);return!!(i&&this[i]!==void 0&&(!r||cr(this,this[i],i,r)))}return!1}delete(e,r){const i=this;let n=!1;function o(s){if(s=st(s),s){const a=l.findKey(i,s);a&&(!r||cr(i,i[a],a,r))&&(delete i[a],n=!0)}}return l.isArray(e)?e.forEach(o):o(e),n}clear(e){const r=Object.keys(this);let i=r.length,n=!1;for(;i--;){const o=r[i];(!e||cr(this,this[o],o,e,!0))&&(delete this[o],n=!0)}return n}normalize(e){const r=this,i={};return l.forEach(this,(n,o)=>{const s=l.findKey(i,o);if(s){r[s]=Pt(n),delete r[o];return}const a=e?Rs(o):String(o).trim();a!==o&&delete r[o],r[a]=Pt(n),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const r=Object.create(null);return l.forEach(this,(i,n)=>{i!=null&&i!==!1&&(r[n]=e&&l.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,r])=>e+": "+r).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return l.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Ps(e)}static concat(e,...r){const i=new this(e);return r.forEach(n=>i.set(n)),i}static accessor(e){const i=(this[xi]=this[xi]={accessors:{}}).accessors,n=this.prototype;function o(s){const a=st(s);i[a]||(Ds(n,s),i[a]=!0)}return l.isArray(e)?e.forEach(o):o(e),this}};H.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),l.reduceDescriptors(H.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[r]=i}}}),l.freezeMethods(H);const Tt="[REDACTED ****]";function Ns(t){if(l.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(l.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Is(t,e){const r=new Set(e.map(o=>String(o).toLowerCase())),i=[],n=o=>{if(o===null||typeof o!="object"||l.isBuffer(o))return o;if(i.indexOf(o)!==-1)return;o instanceof H&&(o=o.toJSON()),i.push(o);let s;if(l.isArray(o))s=[],o.forEach((a,d)=>{const c=n(a);l.isUndefined(c)||(s[d]=c)});else{if(!l.isPlainObject(o)&&Ns(o))return i.pop(),o;s=Object.create(null);for(const[a,d]of Object.entries(o)){const c=r.has(a.toLowerCase())?Tt:n(d);l.isUndefined(c)||(s[a]=c)}}return i.pop(),s};return n(t)}function Ci(t){try{return String(t)}catch{return""}}function Fs(t){return t.errors.map(r=>{try{return r&&r.message?Ci(r.message):Ci(r)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let g=class Wn extends Error{static from(e,r,i,n,o,s){let a=e.message;!a&&l.isArray(e.errors)&&e.errors.length&&(a=Fs(e));const d=new Wn(a,r||e.code,i,n,o);return Object.defineProperty(d,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),d.name=e.name,e.status!=null&&d.status==null&&(d.status=e.status),s&&Object.assign(d,s),d}constructor(e,r,i,n,o){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),i&&(this.config=i),n&&(this.request=n),o&&(this.response=o,this.status=o.status)}toJSON(){const e=this.config,r=e&&l.hasOwnProp(e,"redact")?e.redact:void 0,i=l.isArray(r)&&r.length>0?Is(e,r):l.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};g.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE",g.ERR_BAD_OPTION="ERR_BAD_OPTION",g.ECONNABORTED="ECONNABORTED",g.ETIMEDOUT="ETIMEDOUT",g.ECONNREFUSED="ECONNREFUSED",g.ERR_NETWORK="ERR_NETWORK",g.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS",g.ERR_DEPRECATED="ERR_DEPRECATED",g.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE",g.ERR_BAD_REQUEST="ERR_BAD_REQUEST",g.ERR_CANCELED="ERR_CANCELED",g.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT",g.ERR_INVALID_URL="ERR_INVALID_URL",g.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const qs=null,Si=100;function ur(t){return l.isPlainObject(t)||l.isArray(t)}function Ei(t){return l.endsWith(t,"[]")?t.slice(0,-2):t}function hr(t,e,r){return t?t.concat(e).map(function(n,o){return n=Ei(n),!r&&o?"["+n+"]":n}).join(r?".":""):e}function Ls(t){return l.isArray(t)&&!t.some(ur)}const js=l.toFlatObject(l,{},null,function(e){return/^is[A-Z]/.test(e)});function Rt(t,e,r){if(!l.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(y,S)=>{const w=l.getSafeProp(r,y);return l.isUndefined(w)?S:w},n=i("metaTokens",!0),o=i("visitor")||T,s=i("dots",!1),a=i("indexes",!1),d=i("Blob")||typeof Blob<"u"&&Blob,c=i("maxDepth",Si),u=d&&l.isSpecCompliantForm(e),h=[];if(!l.isFunction(o))throw new TypeError("visitor must be a function");function m(y){if(y===null)return"";if(l.isDate(y))return y.toISOString();if(l.isBoolean(y))return y.toString();if(!u&&l.isBlob(y))throw new g("Blob is not supported. Use a Buffer instead.");if(l.isArrayBuffer(y)||l.isTypedArray(y)){if(u&&typeof d=="function")return new d([y]);throw new g("Blob is not supported. Use a Buffer instead.",g.ERR_NOT_SUPPORT)}return y}function b(y){if(y>c)throw new g("Object is too deeply nested ("+y+" levels). Max depth: "+c,g.ERR_FORM_DATA_DEPTH_EXCEEDED)}function C(y,S){if(c===1/0)return JSON.stringify(y);const w=[];return JSON.stringify(y,function(z,F){if(!l.isObject(F))return F;for(;w.length&&w[w.length-1]!==this;)w.pop();return w.push(F),b(S+w.length-1),F})}function T(y,S,w){let U=y;if(l.isReactNative(e)&&l.isReactNativeBlob(y))return e.append(hr(w,S,s),m(y)),!1;if(y&&!w&&typeof y=="object"){if(l.endsWith(S,"{}"))S=n?S:S.slice(0,-2),y=C(y,1);else if(l.isArray(y)&&Ls(y)||(l.isFileList(y)||l.endsWith(S,"[]"))&&(U=l.toArray(y)))return S=Ei(S),U.forEach(function(F,te){!(l.isUndefined(F)||F===null)&&e.append(a===!0?hr([S],te,s):a===null?S:S+"[]",m(F))}),!1}return ur(y)?!0:(e.append(hr(w,S,s),m(y)),!1)}const L=Object.assign(js,{defaultVisitor:T,convertValue:m,isVisitable:ur});function p(y,S,w=0){if(!l.isUndefined(y)){if(b(w),h.indexOf(y)!==-1)throw new Error("Circular reference detected in "+S.join("."));h.push(y),l.forEach(y,function(z,F){(!(l.isUndefined(z)||z===null)&&o.call(e,z,l.isString(F)?F.trim():F,S,L))===!0&&p(z,S?S.concat(F):[F],w+1)}),h.pop()}}if(!l.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Oi(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function pr(t,e){this._pairs=[],t&&Rt(t,this,e)}const Ai=pr.prototype;Ai.append=function(e,r){this._pairs.push([e,r])},Ai.toString=function(e){const r=e?i=>e.call(this,i,Oi):Oi;return this._pairs.map(function(n){return r(n[0])+"="+r(n[1])},"").join("&")};function ks(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Pi(t,e,r){if(!e)return t;t=t||"";const i=l.isFunction(r)?{serialize:r}:r,n=l.getSafeProp(i,"encode")||ks,o=l.getSafeProp(i,"serialize");let s;if(o?s=o(e,i):s=l.isURLSearchParams(e)?e.toString():new pr(e,i).toString(n),s){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}const at=Symbol("internals");function Ti(t){return t?t.length:0}function Ri(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function dt(t,e){const r=t.handlers,i=Ti(r);r!==e.handlersRef?(e.handlersRef=r,e.handlerEntries.clear()):i!==e.handlersLength&&(i?e.handlerEntries.forEach(function(o,s){r[o.index]!==o.handler&&e.handlerEntries.delete(s)}):e.handlerEntries.clear()),e.handlersLength=i}class Di{constructor(){this.handlers=[],this[at]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,r,i){const n={fulfilled:e,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},o=this[at];this.handlers==null&&(this.handlers=[]),dt(this,o);const s=o.nextId++;return this.handlers.push(n),o.handlerEntries.set(s,{handler:n,index:this.handlers.length-1}),o.handlersLength=this.handlers.length,s}eject(e){const r=this[at];dt(this,r);const i=r.handlerEntries.get(e);if(i){if(r.handlerEntries.delete(e),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,r.iterationDepth||(Ri(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],dt(this,this[at]))}forEach(e){const r=this[at];dt(this,r),r.iterationDepth++;try{l.forEach(this.handlers,function(n){n!==null&&e(n)})}finally{--r.iterationDepth||(dt(this,r),Ri(this.handlers),r.handlersLength=Ti(this.handlers))}}}const fr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ms={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:pr,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},$r=typeof window<"u"&&typeof document<"u",mr=typeof navigator=="object"&&navigator||void 0,Us=$r&&(!mr||["ReactNative","NativeScript","NS"].indexOf(mr.product)<0),Bs=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Gs=$r&&window.location.href||"http://localhost",k={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$r,hasStandardBrowserEnv:Us,hasStandardBrowserWebWorkerEnv:Bs,navigator:mr,origin:Gs},Symbol.toStringTag,{value:"Module"})),...Ms};function Hs(t,e){return Rt(t,new k.classes.URLSearchParams,{visitor:function(r,i,n,o){return k.isNode&&l.isBuffer(r)?(this.append(i,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...e})}const Ni=Si;function Ii(t){if(t>Ni)throw new g("FormData field is too deeply nested ("+t+" levels). Max depth: "+Ni,g.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Vs(t){const e=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=r.exec(t))!==null;)Ii(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function zs(t){const e={},r=Object.keys(t);let i;const n=r.length;let o;for(i=0;i<n;i++)o=r[i],e[o]=t[o];return e}function Fi(t){function e(r,i,n,o){Ii(o);let s=r[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),d=o>=r.length;return s=!s&&l.isArray(n)?n.length:s,d?(l.hasOwnProp(n,s)?n[s]=l.isArray(n[s])?n[s].concat(i):[n[s],i]:n[s]=i,!a):((!l.hasOwnProp(n,s)||!l.isObject(n[s]))&&(n[s]=[]),e(r,i,n[s],o)&&l.isArray(n[s])&&(n[s]=zs(n[s])),!a)}if(l.isFormData(t)&&l.isFunction(t.entries)){const r={};return l.forEachEntry(t,(i,n)=>{e(Vs(i),n,r,0)}),r}return null}const qi=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Me=(t,e)=>t!=null&&l.hasOwnProp(t,e)?t[e]:void 0;function Ws(t,e,r){if(l.isString(t))try{return(e||JSON.parse)(t),l.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(t)}const lt={transitional:fr,adapter:["xhr","http","fetch"],transformRequest:[function(e,r){const i=r.getContentType()||"",n=i.indexOf("application/json")>-1,o=l.isObject(e);if(o&&l.isHTMLForm(e)&&(e=new FormData(e)),l.isFormData(e))return n?JSON.stringify(Fi(e)):e;if(l.isArrayBuffer(e)||l.isBuffer(e)||l.isStream(e)||l.isFile(e)||l.isBlob(e)||l.isReadableStream(e))return e;if(l.isArrayBufferView(e))return e.buffer;if(l.isURLSearchParams(e))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){const d=Me(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Hs(e,d).toString();if((a=l.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Me(this,"env"),u=c&&c.FormData;return Rt(a?{"files[]":e}:e,u&&new u,d)}}return o||n?(r.setContentType("application/json",!1),Ws(e)):e}],transformResponse:[function(e){const r=Me(this,"transitional")||lt.transitional,i=r&&r.forcedJSONParsing,n=Me(this,"responseType"),o=n==="json";if(l.isResponse(e)||l.isReadableStream(e))return e;if(e&&l.isString(e)&&(i&&!n||o)){const a=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(e,Me(this,"parseReviver"))}catch(d){if(a)throw d.name==="SyntaxError"?g.from(d,g.ERR_BAD_RESPONSE,this,null,Me(this,"response")):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:k.classes.FormData,Blob:k.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(qi,t=>{lt.headers[t]={}});function gr(t,e){const r=this||lt,i=e||r,n=H.from(i.headers);let o=i.data;return l.forEach(t,function(a){o=a.call(r,o,n.normalize(),e?e.status:void 0)}),n.normalize(),o}function Li(t){return!!(t&&t.__CANCEL__)}let ct=class extends g{constructor(e,r,i){super(e??"canceled",g.ERR_CANCELED,r,i),this.name="CanceledError",this.__CANCEL__=!0}};function ji(t,e,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?t(r):e(new g("Request failed with status code "+r.status,r.status>=400&&r.status<500?g.ERR_BAD_REQUEST:g.ERR_BAD_RESPONSE,r.config,r.request,r))}const Ks=/[\t\n\r]/g;function ki(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(Ks,"")}function yr(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function Ys(t,e){t=t||10;const r=new Array(t),i=new Array(t);let n=0,o=0,s;return e=e!==void 0?e:1e3,function(d){const c=Date.now(),u=i[o];s||(s=c),r[n]=d,i[n]=c;let h=o,m=0;for(;h!==n;)m+=r[h++],h=h%t;if(n=(n+1)%t,n===o&&(o=(o+1)%t),c-s<e)return;const b=u&&c-u;return b?Math.round(m*1e3/b):void 0}}function Js(t,e){let r=0,i=1e3/e,n,o;const s=(u,h=Date.now())=>{r=h,n=null,o&&(clearTimeout(o),o=null),t(...u)};return[(...u)=>{const h=Date.now(),m=h-r;m>=i?s(u,h):(n=u,o||(o=setTimeout(()=>{o=null,s(n)},i-m)))},()=>n&&s(n),(...u)=>s(u)]}const Dt=(t,e,r=3)=>{let i=0;const n=Ys(50,250);return Js(o=>{if(!o||!l.isNumber(o.loaded))return;const s=o.loaded,a=o.lengthComputable?o.total:void 0,d=Math.max(0,a!=null?Math.min(s,a):s),c=Math.max(0,d-i),u=n(c);i=Math.max(i,d);const h={loaded:d,total:a,progress:a?d/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-d)/u:void 0,event:o,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},r)},Mi=(t,e)=>{const r=t!=null;return[i=>e[0]({lengthComputable:r,total:t,loaded:i}),e[1]]},Ui=(t,e=l.asap)=>(...r)=>e(()=>t(...r)),Xs=k.hasStandardBrowserEnv?((t,e)=>r=>(r=new URL(r,k.origin),t.protocol===r.protocol&&t.host===r.host&&(e||t.port===r.port)))(new URL(k.origin),k.navigator&&/(msie|trident)/i.test(k.navigator.userAgent)):()=>!0,Zs=k.hasStandardBrowserEnv?{write(t,e,r,i,n,o,s){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];l.isNumber(r)&&a.push(`expires=${new Date(r).toUTCString()}`),l.isString(i)&&a.push(`path=${i}`),l.isString(n)&&a.push(`domain=${n}`),o===!0&&a.push("secure"),l.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let r=0;r<e.length;r++){const i=e[r].replace(/^\s+/,""),n=i.indexOf("=");if(n!==-1&&i.slice(0,n)===t)try{return decodeURIComponent(i.slice(n+1))}catch{return i.slice(n+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Qs(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ea(t,e){if(!e)return t;let r=t.length;for(;r>0&&t.charCodeAt(r-1)===47;)r--;return t.slice(0,r)+"/"+e.replace(/^\/+/,"")}const ta=/^https?:(?!\/\/)/i;function ra(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,r,i="")=>`${r}${i}${Tt}`)}function ia(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Tt}@`),r=e.indexOf("#"),n=(r===-1?e:e.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Tt}`);return r===-1?n:`${n}#${ra(e.slice(r+1))}`}function Bi(t,e){if(typeof t=="string"){const r=ki(t);if(ta.test(r))throw new g(`Invalid URL ${JSON.stringify(ia(r))}: missing "//" after protocol`,g.ERR_INVALID_URL,e)}}function Gi(t,e,r,i){Bi(e,i);let n=!Qs(e);return t&&(n||r===!1)?(Bi(t,i),ea(t,e)):e}const Hi=t=>t instanceof H?{...t}:t,na=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>Object.getOwnPropertyDescriptor(t,e).enumerable)):Object.keys(t);function Ce(t,e){t=t||{},e=e||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,h,m,b){return l.isPlainObject(u)&&l.isPlainObject(h)?l.merge.call({caseless:b},u,h):l.isPlainObject(h)?l.merge({},h):l.isArray(h)?h.slice():h}function n(u,h,m,b){if(l.isUndefined(h)){if(!l.isUndefined(u))return i(void 0,u,m,b)}else return i(u,h,m,b)}function o(u,h){if(!l.isUndefined(h))return i(void 0,h)}function s(u,h){if(l.isUndefined(h)){if(!l.isUndefined(u))return i(void 0,u)}else return i(void 0,h)}function a(u){const h=l.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!l.isUndefined(h))if(l.isPlainObject(h)){if(l.hasOwnProp(h,u))return h[u]}else return;const m=l.hasOwnProp(t,"transitional")?t.transitional:void 0;if(l.isPlainObject(m)&&l.hasOwnProp(m,u))return m[u]}function d(u,h,m){if(l.hasOwnProp(e,m))return i(u,h);if(l.hasOwnProp(t,m))return i(void 0,u)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutErrorMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,allowedSocketPaths:s,responseEncoding:s,validateStatus:d,headers:(u,h,m)=>n(Hi(u),Hi(h),m,!0)};return l.forEach(na({...t,...e}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const m=l.hasOwnProp(c,h)?c[h]:n,b=l.hasOwnProp(t,h)?t[h]:void 0,C=l.hasOwnProp(e,h)?e[h]:void 0,T=m(b,C,h);l.isUndefined(T)&&m!==d||(r[h]=T)}),l.hasOwnProp(e,"validateStatus")&&l.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(l.hasOwnProp(t,"validateStatus")?r.validateStatus=i(void 0,t.validateStatus):delete r.validateStatus),r}const oa=["content-type","content-length"];function sa(t,e,r){if(r!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,n])=>{oa.includes(i.toLowerCase())&&t.set(i,n)})}const aa=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,r)=>String.fromCharCode(parseInt(r,16)));function Vi(t){const e=Ce({},t),r=m=>l.hasOwnProp(e,m)?e[m]:void 0,i=r("data");let n=r("withXSRFToken");const o=r("xsrfHeaderName"),s=r("xsrfCookieName");let a=r("headers");const d=r("auth"),c=r("baseURL"),u=r("allowAbsoluteUrls"),h=r("url");if(e.headers=a=H.from(a),e.url=Pi(Gi(c,h,u,e),r("params"),r("paramsSerializer")),d){const m=l.getSafeProp(d,"username")||"",b=l.getSafeProp(d,"password")||"";try{a.set("Authorization","Basic "+btoa(m+":"+(b?aa(b):"")))}catch(C){throw g.from(C,g.ERR_BAD_OPTION_VALUE,t)}}if(l.isFormData(i)){const m=l.getSafeProp(i,"getHeaders");k.hasStandardBrowserEnv||k.hasStandardBrowserWebWorkerEnv||l.isReactNative(i)?a.setContentType(void 0):l.isFunction(m)&&sa(a,m.call(i),r("formDataHeaderPolicy"))}if(k.hasStandardBrowserEnv&&(l.isFunction(n)&&(n=n(e)),n===!0||n==null&&Xs(e.url))){const b=o&&s&&Zs.read(s);b&&a.set(o,b)}return e}const da=typeof XMLHttpRequest<"u"&&function(t){return new Promise(function(r,i){const n=Vi(t);let o=n.data;const s=H.from(n.headers).normalize();let{responseType:a,onUploadProgress:d,onDownloadProgress:c}=n,u,h,m,b,C,T;function L(){b&&b(),C&&C(),n.cancelToken&&n.cancelToken.unsubscribe(u),n.signal&&n.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(n.method.toUpperCase(),n.url,!0),p.timeout=n.timeout;function y(w){if(!p)return;if(p.status===0&&(yr(ki(n.url))||yr(k.origin))!=="file"&&!(p.responseURL&&p.responseURL.startsWith("file:"))){i(new g("Request aborted",g.ECONNABORTED,t,p)),L(),p=null;return}try{w?T&&T(w):C&&C()}catch(te){setTimeout(()=>{throw te})}if(!p)return;const U=H.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),F={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:U,config:t,request:p};ji(function(De){r(De),L()},function(De){i(De),L()},F),p=null}"onloadend"in p?p.onloadend=y:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(y)},p.onabort=function(){p&&(i(new g("Request aborted",g.ECONNABORTED,t,p)),L(),p=null)},p.onerror=function(U){const z=U&&U.message?U.message:"Network Error",F=new g(z,g.ERR_NETWORK,t,p);F.event=U||null,i(F),L(),p=null},p.ontimeout=function(){let U=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const z=n.transitional||fr;n.timeoutErrorMessage&&(U=n.timeoutErrorMessage),i(new g(U,z.clarifyTimeoutError?g.ETIMEDOUT:g.ECONNABORTED,t,p)),L(),p=null},o===void 0&&s.setContentType(null),"setRequestHeader"in p&&l.forEach(wi(s),function(U,z){p.setRequestHeader(z,U)}),l.isUndefined(n.withCredentials)||(p.withCredentials=!!n.withCredentials),a&&a!=="json"&&(p.responseType=n.responseType),c&&([m,C,T]=Dt(c,!0),p.addEventListener("progress",m)),d&&p.upload&&([h,b]=Dt(d),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",b)),(n.cancelToken||n.signal)&&(u=w=>{p&&(i(!w||w.type?new ct(null,t,p):w),p.abort(),L(),p=null)},n.cancelToken&&n.cancelToken.subscribe(u),n.signal&&(n.signal.aborted?u():n.signal.addEventListener("abort",u)));const S=yr(n.url);if(S&&!k.protocols.includes(S)){i(new g("Unsupported protocol "+S+":",g.ERR_BAD_REQUEST,t)),L();return}p.send(o||null)})},la=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const r=new AbortController;let i=!1;const n=function(d){if(!i){i=!0,s();const c=d instanceof Error?d:this.reason;r.abort(c instanceof g?c:new ct(c instanceof Error?c.message:c))}};let o=e&&setTimeout(()=>{o=null,n(new g(`timeout of ${e}ms exceeded`,g.ETIMEDOUT))},e);const s=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(d=>{d.unsubscribe?d.unsubscribe(n):d.removeEventListener("abort",n)}),t=null)};t.forEach(d=>{if(!i){if(d.aborted){n.call(d);return}d.addEventListener("abort",n,{once:!0})}});const{signal:a}=r;return a.unsubscribe=()=>l.asap(s),a},ca=function*(t,e){let r=t.byteLength;if(r<e){yield t;return}let i=0,n;for(;i<r;)n=i+e,yield t.slice(i,n),i=n},ua=async function*(t,e){for await(const r of ha(t))yield*ca(r,e)},ha=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:r,value:i}=await e.read();if(r)break;yield i}}finally{await e.cancel()}},zi=(t,e,r,i)=>{const n=ua(t,e);let o=0,s,a=d=>{s||(s=!0,i&&i(d))};return new ReadableStream({async pull(d){try{const{done:c,value:u}=await n.next();if(c){a(),d.close();return}let h=u.byteLength;if(r){let m=o+=h;r(m)}d.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(d){return a(d),n.return()}},{highWaterMark:2})},Wi=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,Ki=(t,e,r)=>e+2<r&&Wi(t.charCodeAt(e+1))&&Wi(t.charCodeAt(e+2)),Yi=t=>t<=57?t-48:(t&223)-55,pa=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,fa=t=>t===9||t===10||t===12||t===13||t===32,$a=t=>{const e=Math.floor(t/4),r=t%4;return e*3+(r===2?1:r===3?2:0)},ma=t=>{const e=t.length;let r=0;return e>0&&t.charCodeAt(e-1)===61&&(r++,e>1&&t.charCodeAt(e-2)===61&&r++),Math.floor((e-r)*3/4)},ga=t=>{const e=t.length;let r=0,i=0,n=!1;for(let o=0;o<e;o++){let s=t.charCodeAt(o);if(s===37&&Ki(t,o,e)&&(s=Yi(t.charCodeAt(o+1))*16+Yi(t.charCodeAt(o+2)),o+=2),!fa(s)){if(s===61){i++;continue}if(!pa(s)||i>0){n=!0;continue}r++}}return n||i>2||i>0&&(r+i)%4!==0||r%4===1?ma(t):$a(r)},ya=(t,e)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const r=t.indexOf(",");if(r<0)return 0;const i=t.slice(5,r),n=t.slice(r+1);if(/;base64/i.test(i))return e(n);let s=0;for(let a=0,d=n.length;a<d;a++){const c=n.charCodeAt(a);if(c===37&&Ki(n,a,d))s+=1,a+=2;else if(c<128)s+=1;else if(c<2048)s+=2;else if(c>=55296&&c<=56319&&a+1<d){const u=n.charCodeAt(a+1);u>=56320&&u<=57343?(s+=4,a++):s+=3}else s+=3}return s};function ba(t){const e=typeof t=="string"?t.indexOf("#"):-1;return ya(e===-1?t:t.slice(0,e),ga)}const br="1.20.0",Ji=64*1024,va={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Nt}=l,_a=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,r)=>String.fromCharCode(parseInt(r,16))),Xi=t=>{if(!l.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Zi=(t,...e)=>{try{return!!t(...e)}catch{return!1}},wa=t=>{const e=t.indexOf("://");let r=t;return e!==-1&&(r=r.slice(e+3)),r.includes("@")||r.includes(":")},xa=t=>{const e=l.global!==void 0&&l.global!==null?l.global:globalThis,{ReadableStream:r,TextEncoder:i}=e;t=l.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:n,Request:o,Response:s}=t,a=n?Nt(n):typeof fetch=="function",d=Nt(o),c=Nt(s);if(!a)return!1;const u=a&&Nt(r),h=a&&(typeof i=="function"?(p=>y=>p.encode(y))(new i):async p=>new Uint8Array(await new o(p).arrayBuffer())),m=d&&u&&Zi(()=>{let p=!1;const y=new o(k.origin,{body:new r,method:"POST",get duplex(){return p=!0,"half"}}),S=y.headers.has("Content-Type");return y.body!=null&&y.body.cancel(),p&&!S}),b=c&&u&&Zi(()=>l.isReadableStream(new s("").body)),C={stream:b&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!C[p]&&(C[p]=(y,S)=>{let w=y&&y[p];if(w)return w.call(y);throw new g(`Response type '${p}' is not supported`,g.ERR_NOT_SUPPORT,S)})});const T=async p=>{if(p==null)return 0;if(l.isBlob(p))return p.size;if(l.isSpecCompliantForm(p))return(await new o(k.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(l.isArrayBufferView(p)||l.isArrayBuffer(p))return p.byteLength;if(l.isURLSearchParams(p)&&(p=p+""),l.isString(p))return(await h(p)).byteLength},L=async(p,y)=>{const S=l.toFiniteNumber(p.getContentLength());return S??T(y)};return async p=>{let{url:y,method:S,data:w,signal:U,cancelToken:z,timeout:F,onDownloadProgress:te,onUploadProgress:De,responseType:fe,headers:$e,withCredentials:Wt="same-origin",fetchOptions:Gr,maxContentLength:re,maxBodyLength:Kt,maxRedirects:wu}=Vi(p);const bt=l.isNumber(re)&&re>-1,Hr=l.isNumber(Kt)&&Kt>-1,xu=R=>l.hasOwnProp(p,R)?p[R]:void 0;let Bn=n||fetch;fe=fe?(fe+"").toLowerCase():"text";let me=la([U,z&&z.toAbortSignal()],F),G=null;const Ne=me&&me.unsubscribe&&(()=>{me.unsubscribe()});let Ye,vt=null;const Gn=()=>new g("Request body larger than maxBodyLength limit",g.ERR_BAD_REQUEST,p,G);try{let R;const J=xu("auth");if(J){const x=l.getSafeProp(J,"username")||"",W=l.getSafeProp(J,"password")||"";R={username:x,password:W}}if(wa(y)){const x=new URL(y,k.origin);if(!R&&(x.username||x.password)){const W=Xi(x.username),ge=Xi(x.password);R={username:W,password:ge}}(x.username||x.password)&&(x.username="",x.password="",y=x.href)}if(R&&($e.delete("authorization"),$e.set("Authorization","Basic "+btoa(_a((R.username||"")+":"+(R.password||""))))),bt&&typeof y=="string"&&y.startsWith("data:")&&ba(y)>re)throw new g("maxContentLength size of "+re+" exceeded",g.ERR_BAD_RESPONSE,p,G);if(Hr&&S!=="get"&&S!=="head"){const x=await T(w);if(typeof x=="number"&&isFinite(x)&&(Ye=x,x>Kt))throw Gn()}const Yt=Hr&&(l.isReadableStream(w)||l.isStream(w)),Hn=(x,W,ge)=>zi(x,Ji,Ie=>{if(Hr&&Ie>Kt)throw vt=Gn();W&&W(Ie)},ge);if(m&&S!=="get"&&S!=="head"&&(De||Yt)){if(Ye=Ye??await L($e,w),Ye!==0||Yt){let x=new o(y,{method:"POST",body:w,duplex:"half"}),W;if(l.isFormData(w)&&(W=x.headers.get("content-type"))&&$e.setContentType(W),x.body){const[ge,Ie]=De&&Mi(Ye,Dt(Ui(De)))||[];w=Hn(x.body,ge,Ie)}}}else if(Yt&&!d&&u&&S!=="get"&&S!=="head")w=Hn(w);else if(Yt&&d&&!m&&S!=="get"&&S!=="head")throw new g("Stream request bodies are not supported by the current fetch implementation",g.ERR_NOT_SUPPORT,p,G);l.isString(Wt)||(Wt=Wt?"include":"omit");const Cu=d&&"credentials"in o.prototype;if(l.isFormData(w)){const x=$e.getContentType();x&&/^multipart\/form-data/i.test(x)&&!/boundary=/i.test(x)&&$e.delete("content-type")}$e.set("User-Agent","axios/"+br,!1);const Q=Gr==null?Gr:Object.assign(Object.create(null),Gr);Q&&(delete Q.body,delete Q.headers,delete Q.method,delete Q.signal,delete Q.duplex,delete Q.credentials);const ae=Object.assign(Object.create(null),Q,{signal:me,method:S.toUpperCase(),headers:wi($e.normalize()),body:w,duplex:"half",credentials:Cu?Wt:void 0});d&&(l.forEach(va,(x,W)=>{ae[W]===void 0&&(ae[W]=x)}),ae.signal===void 0&&(ae.signal=null),ae.body===void 0&&(ae.body=null)),wu===0&&(ae.redirect="manual",Q&&(Q.redirect="manual")),G=d&&new o(y,ae);let de=await(d?Bn(G,Q):Bn(y,ae));const Vn=H.from(de.headers);if(bt){const x=l.toFiniteNumber(Vn.getContentLength());if(x!=null&&x>re)throw new g("maxContentLength size of "+re+" exceeded",g.ERR_BAD_RESPONSE,p,G)}const Vr=b&&(fe==="stream"||fe==="response");if(b&&de.body&&(te||bt||Vr&&Ne)){const x={};["status","statusText","headers"].forEach(_t=>{x[_t]=de[_t]});const W=l.toFiniteNumber(Vn.getContentLength()),[ge,Ie]=te&&Mi(W,Dt(Ui(te),!0))||[];let zn=0;const Su=_t=>{if(bt&&(zn=_t,zn>re))throw new g("maxContentLength size of "+re+" exceeded",g.ERR_BAD_RESPONSE,p,G);ge&&ge(_t)};de=new s(zi(de.body,Ji,Su,()=>{Ie&&Ie(),Ne&&Ne()}),x)}fe=fe||"text";let le=await C[l.findKey(C,fe)||"text"](de,p);if(bt&&!b&&!Vr){let x;if(le!=null&&(typeof le.byteLength=="number"?x=le.byteLength:typeof le.size=="number"?x=le.size:typeof le=="string"&&(x=typeof i=="function"?new i().encode(le).byteLength:le.length)),typeof x=="number"&&x>re)throw new g("maxContentLength size of "+re+" exceeded",g.ERR_BAD_RESPONSE,p,G)}return!Vr&&Ne&&Ne(),await new Promise((x,W)=>{ji(x,W,{data:le,headers:H.from(de.headers),status:de.status,statusText:de.statusText,config:p,request:G})})}catch(R){if(Ne&&Ne(),me&&me.aborted&&me.reason instanceof g){const J=me.reason;throw J.config=p,G&&(J.request=G),R!==J&&Object.defineProperty(J,"cause",{__proto__:null,value:R,writable:!0,enumerable:!1,configurable:!0}),J}if(vt)throw G&&!vt.request&&(vt.request=G),vt;if(R instanceof g)throw G&&!R.request&&(R.request=G),R;if(R&&R.name==="TypeError"&&/Load failed|fetch/i.test(R.message)){const J=new g("Network Error",g.ERR_NETWORK,p,G,R&&R.response);throw Object.defineProperty(J,"cause",{__proto__:null,value:R.cause||R,writable:!0,enumerable:!1,configurable:!0}),J}throw g.from(R,R&&R.code,p,G,R&&R.response)}}},Ca=new Map,Qi=t=>{let e=t&&t.env||{};const{fetch:r,Request:i,Response:n}=e,o=[i,n,r];let s=o.length,a=s,d,c,u=Ca;for(;a--;)d=o[a],c=u.get(d),c===void 0&&u.set(d,c=a?new Map:xa(e)),u=c;return c};Qi();const vr={http:qs,xhr:da,fetch:{get:Qi}};l.forEach(vr,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const en=t=>`- ${t}`,Sa=t=>l.isFunction(t)||t===null||t===!1;function Ea(t,e){t=l.isArray(t)?t:[t];const{length:r}=t;let i,n;const o={};for(let s=0;s<r;s++){i=t[s];let a;if(n=i,!Sa(i)&&(n=vr[(a=String(i)).toLowerCase()],n===void 0))throw new g(`Unknown adapter '${a}'`);if(n&&(l.isFunction(n)||(n=n.get(e))))break;o[a||"#"+s]=n}if(!n){const s=Object.entries(o).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=r?s.length>1?`since :
`+s.map(en).join(`
`):" "+en(s[0]):"as no adapter specified";throw new g("There is no suitable adapter to dispatch the request "+a,g.ERR_NOT_SUPPORT)}return n}const tn={getAdapter:Ea,adapters:vr};function _r(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ct(null,t)}function wr(t){const e=l.toSafeFlatObject(t);return _r(e),e.headers=H.from(l.getSafeProp(e,"headers")),e.data=gr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tn.getAdapter(e.adapter||lt.adapter,e)(e).then(function(n){_r(e),e.response=n;try{n.data=gr.call(e,e.transformResponse,n)}finally{delete e.response}return n.headers=H.from(n.headers),n},function(n){if(!Li(n)&&(_r(e),n&&n.response)){e.response=n.response;try{n.response.data=gr.call(e,e.transformResponse,n.response)}finally{delete e.response}n.response.headers=H.from(n.response.headers)}return Promise.reject(n)})}const It={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{It[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const rn={};It.transitional=function(e,r,i){function n(o,s){return"[Axios v"+br+"] Transitional option '"+o+"'"+s+(i?". "+i:"")}return(o,s,a)=>{if(e===!1)throw new g(n(s," has been removed"+(r?" in "+r:"")),g.ERR_DEPRECATED);return r&&!rn[s]&&(rn[s]=!0,console.warn(n(s," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(o,s,a):!0}},It.spelling=function(e){return(r,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Oa(t,e,r){if(typeof t!="object"||t===null)throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let n=i.length;for(;n-- >0;){const o=i[n],s=Object.prototype.hasOwnProperty.call(e,o)?e[o]:void 0;if(s){const a=t[o],d=a===void 0||s(a,o,t);if(d!==!0)throw new g("option "+o+" must be "+d,g.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new g("Unknown option "+o,g.ERR_BAD_OPTION)}}const Ft={assertOptions:Oa,validators:It},V=Ft.validators;let Se=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Di,response:new Di}}async request(e,r){try{return await this._request(e,r)}catch(i){if(i instanceof Error)try{let n={};Error.captureStackTrace?Error.captureStackTrace(n):n=new Error;const o=n.stack;let s="";if(typeof o=="string"){const a=o.indexOf(`
`);s=a===-1?"":o.slice(a+1)}if(!i.stack)i.stack=s;else if(s){const a=s.indexOf(`
`),d=a===-1?-1:s.indexOf(`
`,a+1),c=d===-1?"":s.slice(d+1);String(i.stack).endsWith(c)||(i.stack+=`
`+s)}}catch{}throw i}}_request(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=Ce(this.defaults,r);const{transitional:i,paramsSerializer:n,headers:o}=r;i!==void 0&&Ft.assertOptions(i,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean),legacyInterceptorReqResOrdering:V.transitional(V.boolean),advertiseZstdAcceptEncoding:V.transitional(V.boolean),validateStatusUndefinedResolves:V.transitional(V.boolean)},!1),n!=null&&(l.isFunction(n)?r.paramsSerializer={serialize:n}:Ft.assertOptions(n,{encode:V.function,serialize:V.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ft.assertOptions(r,{baseUrl:V.spelling("baseURL"),withXsrfToken:V.spelling("withXSRFToken")},!0),r.method=(l.getSafeProp(r,"method")||l.getSafeProp(this.defaults,"method")||"get").toLowerCase();let s=o&&l.merge(o.common,o[r.method]);o&&l.forEach(qi.concat("common"),C=>{delete o[C]}),r.headers=H.concat(s,o);const a=[];let d=!0;this.interceptors.request.forEach(function(T){if(typeof T.runWhen=="function"&&T.runWhen(r)===!1)return;d=d&&T.synchronous;const L=r.transitional||fr;L&&L.legacyInterceptorReqResOrdering?a.unshift(T.fulfilled,T.rejected):a.push(T.fulfilled,T.rejected)});const c=[];this.interceptors.response.forEach(function(T){c.push(T.fulfilled,T.rejected)});let u,h=0,m;if(!d){const C=[wr.bind(this),void 0];for(C.unshift(...a),C.push(...c),m=C.length,u=Promise.resolve(r);h<m;)u=u.then(C[h++],C[h++]);return u}m=a.length;let b=r;for(;h<m;){const C=a[h++],T=a[h++];try{b=C?C(b):b}catch(L){if(!T){u=Promise.reject(L);break}try{const p=T.call(this,L);l.isThenable(p)&&(u=Promise.resolve(p).then(()=>wr.call(this,b)))}catch(p){u=Promise.reject(p)}break}}if(!u)try{u=wr.call(this,b)}catch(C){u=Promise.reject(C)}for(h=0,m=c.length;h<m;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=Ce(this.defaults,e);const r=Gi(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Pi(r,e.params,e.paramsSerializer)}};l.forEach(["delete","get","head","options"],function(e){Se.prototype[e]=function(r,i){return this.request(Ce(i||{},{method:e,url:r,data:i&&l.hasOwnProp(i,"data")?i.data:void 0}))}}),l.forEach(["post","put","patch","query"],function(e){function r(i){return function(o,s,a){return this.request(Ce(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Se.prototype[e]=r(),e!=="query"&&(Se.prototype[e+"Form"]=r(!0))});let Aa=class Kn{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const i=this;this.promise.then(n=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](n);i._listeners=null}),this.promise.then=n=>{let o;const s=new Promise(a=>{i.subscribe(a),o=a}).then(n);return s.cancel=function(){i.unsubscribe(o)},s},e(function(o,s,a){i.reason||(i.reason=new ct(o,s,a),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const e=new AbortController,r=i=>{e.abort(i)};return this.subscribe(r),e.signal.unsubscribe=()=>this.unsubscribe(r),e.signal}static source(){let e;return{token:new Kn(function(n){e=n}),cancel:e}}};function Pa(t){return function(r){return t.apply(null,r)}}function Ta(t){return l.isObject(t)&&t.isAxiosError===!0}const qt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(qt).forEach(([t,e])=>{qt[e]===void 0&&(qt[e]=t)});function nn(t){const e=new Se(t),r=li(Se.prototype.request,e);return l.extend(r,Se.prototype,e,{allOwnKeys:!0}),l.extend(r,e,null,{allOwnKeys:!0}),r.create=function(n){return nn(Ce(t,n))},r}const N=nn(lt);N.Axios=Se,N.CanceledError=ct,N.CancelToken=Aa,N.isCancel=Li,N.VERSION=br,N.toFormData=Rt,N.AxiosError=g,N.Cancel=N.CanceledError,N.all=function(e){return Promise.all(e)},N.spread=Pa,N.isAxiosError=Ta,N.mergeConfig=Ce,N.AxiosHeaders=H,N.formToJSON=t=>Fi(l.isHTMLForm(t)?new FormData(t):t),N.getAdapter=tn.getAdapter,N.HttpStatusCode=qt,N.default=N;const{Axios:Du,AxiosError:Nu,CanceledError:Iu,isCancel:Fu,CancelToken:qu,VERSION:Lu,all:ju,Cancel:ku,isAxiosError:Mu,spread:Uu,toFormData:Bu,AxiosHeaders:Gu,HttpStatusCode:Hu,formToJSON:Vu,getAdapter:zu,mergeConfig:Wu,create:Ku}=N,Ra=async(t,e,r)=>(r||(r={}),t.internalRequest(t,"POST",`/report-view/${e}`,{params:r})),Da=async(t,e,r)=>(r||(r={}),t.internalRequest(t,"GET",`/incollection/${e}`,{params:r})),Na=async(t,e,r,i)=>(i||(i={}),t.internalRequest(t,"GET",`/incollection/${e}?search_query=${r}`,{params:i})),Ia=async(t,e,r,i)=>(i||(i={}),t.internalRequest(t,"GET",`/incollection/${e}?search_query=${r.search_query}&count=${r.count}&page=${r.page}&multi_sort=${JSON.stringify(r.multi_sort)}&output_type=${r.output_type}&meta=${r.meta}&queryFilterV2=${r.queryFilterV2}&general_filter=${JSON.stringify(r.general_filter)}&only=${r.only}&location=${r.location}&region_override=${r.region_override}`,{params:i})),Fa=async(t,e,r)=>t.internalRequest(t,"GET",`/incollection/${e}/${r}`),qa=async(t,e,r,i)=>(i||(i={}),t.internalRequest(t,"POST",`/incollection/${e}`,{requestData:{reqbody:r},params:i})),La=async(t,e,r,i)=>t.internalRequest(t,"PUT",`/incollection/${e}/${r}`,{requestData:i}),ja=async(t,e,r,i)=>t.internalRequest(t,"PATCH",`/incollection/${e}/${r}`,{requestData:{update_fields:i}}),ka=async(t,e,r,i,n)=>{const o={data:{ids:r,update_data:i}};return n&&(o.data.external_update_data=n),t.internalRequest(t,"POST",`/incollection_group_edit/${e}`,{requestData:o})},Ma=async(t,e,r,i,n,o,s)=>{const a={action_index:n,intended_state_id:o};return s&&(a.start_state_id=s),t.internalRequest(t,"POST",`/workflow/${e}/${r}/${i}`,{requestData:a})},Ua=async(t,e,r,i,n,o)=>t.internalRequest(t,"POST",`/workflow/${e}/${r}/${i}/${n}`,{requestData:o||{}}),Ba=async(t,e,r,i)=>t.internalRequest(t,"POST",`/workflow/${e}/job_status/${r}`,{action_index:i}),Ga=async(t,e,r)=>t.internalRequest(t,"GET",`/workflow/${e}/job_status/${r}`),Ha=async(t,e)=>t.internalRequest(t,"GET",`/incollection/workflow/${e}`),Va=async(t,e)=>t.internalRequest(t,"PUT",`/incollection/workflow/${e}`),za=async(t,e)=>t.internalRequest(t,"GET",`thirdparty/currency?source=${e}&target=USD&date=${new Date().getTime()}`),Wa=async(t,e,r)=>{const i=t.selectedLocation||"new_york";return t.internalRequest(t,"POST",`autocomplete-reference/${e}?location=${i}`,{requestData:r})},Ka=async(t,e,r)=>(r||(r={}),t.internalRequest(t,"GET",`thirdparty/${e}`,{params:r})),Ya=async(t,e,r)=>t.internalRequest(t,"GET",`thirdparty/${e}?query=${r.placeId}&description=${r.description}`,{params:r}),Ja=async(t,e,r,i)=>t.internalRequest(t,"POST",e,r),Xa=async(t,e,r,i)=>{const n={conversation:i,document_id:r,view_name:e,message_type:i?.type||""};return t.internalRequest(t,"POST","conversation",{requestData:n})},Za=async(t,e,r,i="all",n=1,o=100)=>{const s=new URLSearchParams({view_name:e,document_id:r,page:String(n),count:String(o),message_type:i,version:"2"});return t.internalRequest(t,"GET",`conversation?${s.toString()}`)},Qa=async(t,e,r)=>t.internalRequest(t,"DELETE",`/incollection/${e}/${r}`),ed=async(t,e,r,i,n,o="json",s="true",a)=>t.internalRequest(t,"POST",`/report-view/${e}`,{params:{start_date:r,end_date:i,output_type:o,skip_meta:s,location:n},requestData:a}),on=async t=>{const e={organisation:t.organisationId,usertype:t.userType,region:t.selectedRegion||"",location:t.selectedLocation||""};return t.xApiKey&&(e["x-api-key"]=t.xApiKey||""),t.authorization&&(e.authorization=t.authorization||""),e},Lt=async(t,e,r,i)=>{if(t.isSessionValid&&!t.isConnectionValid)throw Error(t.connectionErrorMessage);r.charAt(0)==="/"&&(r=r.substring(1));const n=await on(t);n["Access-Control-Allow-Origin"]="*",n["Access-Control-Allow-Credentials"]=!0;const o=i?.queryParams||null,s={method:e,url:(t.serverUrl||t.base_api_endpoint)+"/api/v3/"+r+(o?"?"+o:""),headers:n,params:i?.params||{}};["post","POST","put","PUT","patch","PATCH"].includes(e)&&(s.data=i?.requestData||{});const a=await N.request(s);if(a.status===200&&a?.data?.success)return a?.data?.data;if(a.data.errors)throw typeof a?.data?.errors[0]?.message=="string"?new Error(a?.data?.errors[0]?.message):new Error(JSON.stringify(a?.data?.errors[0]))},td=async(t,e)=>{const r=await on(t);r["Content-Type"]="multipart/form-data";const i=new FormData;i.append("file",e);const n=await N.post(t.file_upload_api_endpoint,i,{headers:r});if(n.status===200)return n?.data;throw console.log(n.data),new Error("File Upload Error")},sn={port_of_loading:{},port_of_discharge:{},job_id:"",customer_name:{},shipment_type:"",shipment_name:"",shipment_term:{},carrier_code:"",__scp:{},"port_of_loading.transit_time":"",hawb_rates:"",__events:{opened__date:{$date:new Date().getTime()},opened__comments:""},is_consolidated_shipment:!1,enable_automated_tracking:!1,custom:{is_exhibition:!1},order_ref_no:[],shipper_declared_value:{amount:0},country_of_origin:{},insurance:{need_insurance:!1},cartage_cost_amount:0,place_of_receipt:{location:{}},place_of_delivery:{location:{}},operation_executive:{},forwarding_agent_show_on_master:!0,destination_agent_show_on_master:!0,pod_documents:[],skus:[],under_watchlist:!1,notify_events_via_email:!1,tags:[],pick_charge_from_invoice:!1,hawb_override_dimensions:!1,hawb_rate_class_code:"B",hawb_rate_or_charge:0,hawb_rate_total:0,hawb_has_other_charges:!1,documents:[],customer_documents:[],customer_uploaded_documents:[],shipment_status:"opened",shipment_class:"",master_shipment_cost_allocation:""},an={__scp:{},"port_of_loading.transit_time":"",__events:{opened__date:{$date:new Date().getTime()},opened__comments:""},enable_automated_tracking:!1,enable_inter_branch:!1,custom:{is_removal_shipment:!1},order_ref_no:[],shipper_declared_value:{amount:0},country_of_origin:{},insurance:{need_insurance:!1},cartage_cost_amount:0,place_of_pickup:{location:{}},place_of_receipt:{location:{}},port_of_loading:{},port_of_discharge:{},port_of_destination:{},place_of_delivery:{location:{}},final_destination:{},forwarding_agent_show_on_master:!1,destination_agent_show_on_master:!1,has_switch_bl:!1,pod_documents:[],skus:[],under_watchlist:!1,notify_events_via_email:!1,tags:[],documents:[],customer_documents:[],customer_uploaded_documents:[],shipment_status:"",job_id:"",product_type:"",customer_name:{},shipment_type:"",weight_unit:"",volume_unit:"",shipment_class:"",shipment_term:{},shipment_name:"",volume:""},dn={__scp:{},__events:{opened__date:{$date:new Date().getTime()},opened__comments:""},master_shipment_revenue_allocation:"per_cbm",master_shipment_cost_allocation:"per_cbm",enable_automated_tracking:!1,custom:{},order_ref_no:[],shipper_declared_value:{amount:0},country_of_origin:{},insurance:{need_insurance:!1},origin:{location:{}},destination:{location:{}},operation_executive:{},pod_documents:[],skus:[],under_watchlist:!1,notify_events_via_email:!1,tags:[],documents:[],customer_documents:[],customer_uploaded_documents:[],shipment_status:"opened",job_id:"",shipment_class:"",customer_name:{},shipment_type:"",movement_type:"",master_reference:{},shipment_term:{},shipment_name:""},Ee={fields:["name","location","code"],display_fields:["code","name"],filter_txt:"",input_filters:"{}",general_filters:"{}"},rd={fields:["primary_contact_person","company","sales_person","payment_term","currency","__warn","customs_agent","cartage_by"],display_fields:["company.name"],filter_txt:"",input_filters:"{}",general_filters:"{}"},id={opening_balance:{},account_contact_person:{same_as_primary:!1,additional_emails:[],enable_portal_access:!1},company:{is_agent:!1,name:"",phone:"",client_code:""},primary_contact_person:{additional_emails:[],enable_portal_access:!1,first_name:"",last_name:"",name:"",email:""},address:{city:{}},__events:{lead__date:{$date:new Date().getTime()},lead__comments:""},accounting:{credit_limit:0,external_balance:0,account_credit_block:!1,block_reason:"Exceeded Credit Terms",currency:{},is_inter_branch:!1,need_insurance:!1,automatic_ar_reminder:{enable_automatic_reminder:!1},automatic_ar_aging_reminder:{enable_automatic_reminder:!1},notification:{sea_shipment:{},air_shipment:{},land_shipment:{},clearance_job:{},documentation_job:{}},documents:[],customer_lifecycle:"lead",full_address:`\r
E :cargoson@gmail.com\r
T :93848928993`,full_address_field_compute:""}},nd={company:{party_type:[],name:"",phone:""},primary_contact_person:{},account_contact_person:{},address:{city:{}},full_address:"",full_address_field:""},D=(t,e,r,i,n)=>({fields:e??Ee.fields,display_fields:r??Ee.display_fields,filter_txt:t??Ee.filter_txt,input_filters:i??Ee.input_filters,general_filters:n??Ee.general_filters});class od{obj;constructor(e){this.obj=e}getSomeShipments(e){return this.obj.getListGeneric(this.obj,"shipment_list_all",e)}getAllShipments(){return this.obj.getListGenericCollection(this.obj,"shipment_v2")}getAllAirFreight(){return this.obj.getListGenericCollection(this.obj,"air_shipment")}getAllSeaFreight(){return this.obj.getListGenericCollection(this.obj,"sea_shipment")}getAllLandFreight(){return this.obj.getListGenericCollection(this.obj,"land_shipment")}getAirFreight(e){return this.obj.getOneGenericCollectionItem(this.obj,"air_shipment",e)}getSeaFreight(e){return this.obj.getOneGenericCollectionItem(this.obj,"sea_shipment",e)}getLandFreight(e){return this.obj.getOneGenericCollectionItem(this.obj,"land_shipment",e)}updateAirFreight(e,r){const i={...sn,...r};return this.obj.updateGenericCollectionItem(this.obj,"air_shipment",e,i)}updateSeaFreight(e,r){const i={...an,...r};return this.obj.updateGenericCollectionItem(this.obj,"sea_shipment",e,i)}updateLandFreight(e,r){const i={...dn,...r};return this.obj.updateGenericCollectionItem(this.obj,"land_shipment",e,i)}createAirFreight(e){const r={...sn,...e};return this.obj.createGenericCollectionItem(this.obj,"air_shipment",r)}createSeaFreight(e){const r={...an,...e};return this.obj.createGenericCollectionItem(this.obj,"sea_shipment",r)}createLandFreight(e){const r={...dn,...e};return this.obj.createGenericCollectionItem(this.obj,"land_shipment",r)}deleteAirFreight(e){return this.obj.deleteGenericCollectionItem(this.obj,"air_shipment",e)}deleteSeaFreight(e){return this.obj.deleteGenericCollectionItem(this.obj,"sea_shipment",e)}deleteLandFreight(e){return this.obj.deleteGenericCollectionItem(this.obj,"land_shipment",e)}getAirPort(e=""){const r={...Ee};return r.filter_txt=e,this.obj.getGenericAutoComplete(this.obj,"airport",r)}getCustomers(e=""){const r={...rd};return r.filter_txt=e,this.obj.getGenericAutoComplete(this.obj,"customer",r)}async createCustomer(e){const r=await this.getCurrency(e.accounting.currency),i={...id,...e};return i.accounting.currency=r.items[0],this.obj.createGenericCollectionItem(this.obj,"customer",i)}async createCustomerParty(e,r){const i={...nd,...e},n={input_filters:{"customer._id":`${r}`}};return this.obj.createGenericCollectionItem(this.obj,"customer_party",i,n)}getShipmentTerms(e){if(e){const r=D(e);return this.obj.getGenericAutoComplete(this.obj,"shipment_term",r)}else return this.obj.getListGenericCollection(this.obj,"shipment_term",{only:"name,code,order",general_filter:{}})}getQuotationReference(e=null){const r=D(e,["quotation_number"],["quotation_number"]);return this.obj.getGenericAutoComplete(this.obj,"quotation",r)}getMasterShipment(e=null){const n=D(e,["company.name","full_address","address","tin_no"],["company.name"]);return this.obj.getGenericAutoComplete(this.obj,"sea_shipment",n)}getConsignee(e="",r){const i=["company.name","full_address","address","tin_no","company.phone"],n=["company.name"],o=JSON.stringify({"customer._id":`${r}`}),s=D(e,i,n,o);return this.obj.getGenericAutoComplete(this.obj,"customer_party",s)}getShipper(e="",r){const i=["company.name","full_address","address","tin_no"],n=["company.name"],o=JSON.stringify({"customer._id":`${r}`}),s=D(e,i,n,o);return this.obj.getGenericAutoComplete(this.obj,"customer_party",s)}getPickUpNDelivery(e="",r){const i=["full_address","address","company","tin_no"],n=["company.name"],o=JSON.stringify({"customer._id":`${r}`}),s=D(e,i,n,o);return this.obj.getGenericAutoComplete(this.obj,"customer_party",s)}getNotifyParty(e="",r){const i=["company.name","full_address","address","tin_no"],n=["company.name"],o=JSON.stringify({"customer._id":`${r}`}),s=D(e,i,n,o);return this.obj.getGenericAutoComplete(this.obj,"customer_party",s)}getGoogleLocation(e=""){return this.obj.getLocation(this.obj,"search-place-autocomplete",{query_level:void 0,query:e})}selectGoogleLocations(e,r){return this.obj.selectGoogleLocation(this.obj,"search-place",{placeId:e,description:r})}getForwordingAgent(e=""){const n=D(e,["full_address","address","company","primary_contact_person","tin_no"],["company.name"]);return this.obj.getGenericAutoComplete(this.obj,"vendor",n)}getConsolidator(e=""){const r=["company.name","full_address","address","tin_no"],i=["company.name"],n=JSON.stringify({"company.vendor_type":"consolidator"}),o=D(e,r,i,null,n);return this.obj.getGenericAutoComplete(this.obj,"vendor",o)}getPlaceOfConsolidation(e=""){const o=D(e,["company.name","full_address","address","tin_no"],["company.name"],null,`{
    "company.vendor_type":"place_of_consolidation"
}`);return this.obj.getGenericAutoComplete(this.obj,"vendor",o)}getAllOperationExecutive(){return this.obj.getListGenericCollection(this.obj,"employee",{only:"_id,name",general_filter:{}})}getOperationExecutive(e=""){const r=D(e);return this.obj.getGenericAutoComplete(this.obj,"employee",r)}getAirlineName(){return this.obj.getListGenericCollection(this.obj,"airline",{only:"name,cbsa_code,prefix_code",general_filter:{}})}getAllCurrency(){return this.obj.getListGenericCollection(this.obj,"currency",{only:"name",general_filter:{}})}getCurrency(e=""){const r=D(e);return this.obj.getGenericAutoComplete(this.obj,"currency",r)}CartageByAndCustomClearance(e=""){const o=D(e,["company","address","primary_contact_person"],["company.name"],`{
    "company.vendor_type":"place_of_consolidation"
}`);return this.obj.getGenericAutoComplete(this.obj,"vendor",o)}getProductType(){return this.obj.getListGenericCollection(this.obj,"product_type",{only:"_id,name",general_filter:{}})}getShippingLineName(){return this.obj.getListGenericCollection(this.obj,"shipping_line",{only:"name,carrier_code,cbsa_code,shipthis_code",general_filter:{}})}getVesselName(e=""){const n=D(e,["_id","name"],["name"]);return this.obj.getGenericAutoComplete(this.obj,"vessel",n)}getSeaPort(e=""){const r={...Ee};return r.filter_txt=e,this.obj.getGenericAutoComplete(this.obj,"sea",r)}getPickup(e=""){const n=D(e,["company","full_address","address","tin_no"],["company.name"]);return this.obj.getGenericAutoComplete(this.obj,"customer_party",n)}getCustomClearance(e=""){const o=D(e,["company.name","full_address","address","tin_no","company.vendor_type"],["company.name"],`{
    "company.vendor_type":"customs_agent"
}`);return this.obj.getGenericAutoComplete(this.obj,"vendor",o)}getLandCarrier(e=""){const o=D(e,["company","address","primary_contact_person","full_address"],["company.name"],'{"company.vendor_type":"carrier"}');return this.obj.getGenericAutoComplete(this.obj,"vendor",o)}getVehicleType(e=""){const r=D(e);return this.obj.getGenericAutoComplete(this.obj,"vehicle_type",r)}async getPackageTypeList(e=""){const r=D(e);return this.obj.getGenericAutoComplete(this.obj,"package_type",r)}async getPackageType({data:e=""}){const r=D(e);return(await this.obj.getGenericAutoComplete(this.obj,"package_type",r)).items[0]}getContainerType(e=""){const r=D(e);return this.obj.getGenericAutoComplete(this.obj,"container_type",r)}getHarzardUnNumber(e=""){const r=D(e);return this.obj.getGenericAutoComplete(this.obj,"hazard_un_number",r)}getHarzardClass(e=""){const r=D(e);return this.obj.getGenericAutoComplete(this.obj,"hazard_class",r)}initiaConversation(e){return this.obj.conversation(this.obj,"conversation",e)}createAirLoad(e){return this.obj.createGenericCollectionItem(this.obj,"air_load",e)}createSeaFclLoad(e){return this.obj.createGenericCollectionItem(this.obj,"fcl_load",e)}createSeaLclLoad(e){return this.obj.createGenericCollectionItem(this.obj,"lcl_load",e)}createSeaRoroLoad(e){return this.obj.createGenericCollectionItem(this.obj,"roro_load",e)}createSeaBulkLoad(e){return this.obj.createGenericCollectionItem(this.obj,"bulk_load",e)}createLandFtlLoad(e){return this.obj.createGenericCollectionItem(this.obj,"ftl_load",e)}createLandltlLoad(e){return this.obj.createGenericCollectionItem(this.obj,"ltl_load",e)}createLandFclLoad(e){return this.obj.createGenericCollectionItem(this.obj,"fcl_load",e)}}const sd={name:"",max_cbm:0,length:0,width:0,height:0,max_weight:0},jt={name:"",code:""},ad={name:"",code:"",container_size:""},dd={location:{description:"",bold:"",lat:0,lng:0,query_type:"",type:"",province:"",province_code:"",city:"",country:"",country_code:""},custom:{new_port:""},name:"",code:"",numeric_code:"",latitude:0,longitude:0},ld={location:{description:"",bold:"",lat:0,lng:0,query_type:"",type:"",province:"",province_code:"",city:"",country:"",country_code:""},custom:{new_field:""},name:"",code:""},cd={name:"",code:"",order:0},ud={address:{},name:"",code:"",shipthis_code:"",cbsa_code:"",phone:"",fax:"",email:""},hd={name:"",code:"",imo:"",mmsi:"",flag:"",type:""},pd={available_count:0,used:[],used_count:0,all_counts:"",locked:!1,no_of_digits:0,used_codes:[],available:[],airline:"",acquired_on:{$date:0},valid_till:{$date:0},prefix:"",start_number:0,end_number:0};class fd{obj;constructor(e){this.obj=e}getAllAirport(){return this.obj.getListGenericCollection(this.obj,"airport")}getAllPort(){return this.obj.getListGenericCollection(this.obj,"port")}getAllContainerType(){return this.obj.getListGenericCollection(this.obj,"container_type")}getAllPackageType(){return this.obj.getListGenericCollection(this.obj,"package_type")}getAllDocumentType(){return this.obj.getListGenericCollection(this.obj,"documentation_kind")}getAllVehicleType(){return this.obj.getListGenericCollection(this.obj,"vehicle_type")}getAllProductType(){return this.obj.getListGenericCollection(this.obj,"product_type")}getAllAirline(){return this.obj.getListGenericCollection(this.obj,"airline")}getAllShipmentTerms(){return this.obj.getListGenericCollection(this.obj,"shipment_term")}getAllShippingLine(){return this.obj.getListGenericCollection(this.obj,"shipping_line")}getAllVessel(){return this.obj.getListGenericCollection(this.obj,"vessel")}getAllAWBBlock(){return this.obj.getListGenericCollection(this.obj,"awb_block")}getAirport(e){return this.obj.getOneGenericCollectionItem(this.obj,"airport",e)}getPort(e){return this.obj.getOneGenericCollectionItem(this.obj,"port",e)}getContainerType(e){return this.obj.getOneGenericCollectionItem(this.obj,"container_type",e)}getPackageType(e){return this.obj.getOneGenericCollectionItem(this.obj,"package_type",e)}getDocumentType(e){return this.obj.getOneGenericCollectionItem(this.obj,"documentation_kind",e)}getVehicleType(e){return this.obj.getOneGenericCollectionItem(this.obj,"vehicle_type",e)}getProductType(e){return this.obj.getOneGenericCollectionItem(this.obj,"product_type",e)}getAirline(e){return this.obj.getOneGenericCollectionItem(this.obj,"airline",e)}getShipmentTerms(e){return this.obj.getOneGenericCollectionItem(this.obj,"shipment_term",e)}getShippingLine(e){return this.obj.getOneGenericCollectionItem(this.obj,"shipping_line",e)}getVessel(e){return this.obj.getOneGenericCollectionItem(this.obj,"vessel",e)}getAWBBlock(e){return this.obj.getOneGenericCollectionItem(this.obj,"awb_block",e)}createContainerType(e){const r={requestCatData:sd,...e};return this.obj.createGenericCollectionItem(this.obj,"container_type",r)}createPackageType(e){const r={requestCommonData:jt,...e};return this.obj.createGenericCollectionItem(this.obj,"package_type",r)}createDocumentType(e){const r={requestCommonData:jt,...e};return this.obj.createGenericCollectionItem(this.obj,"documentation_kind",r)}createVehicleType(e){const r={requestVehicleData:ad,...e};return this.obj.createGenericCollectionItem(this.obj,"vehicle_type",r)}createProductType(e){const r={requestCommonData:jt,...e};return this.obj.createGenericCollectionItem(this.obj,"product_type",r)}createAirline(e){const r={requestCommonData:jt,...e};return this.obj.createGenericCollectionItem(this.obj,"airline",r)}async createPort(e){const r=await this.obj.Shipment.getGoogleLocation(e.location.bold),i=await this.obj.Shipment.selectGoogleLocations(r.items[0].place_id,r.items[0].description),n={requestPortData:dd,...e,selectLocation:i};return this.obj.createGenericCollectionItem(this.obj,"port",n)}async createAirport(e){const r=await this.obj.Shipment.getGoogleLocation(e?.location?.bold),i=await this.obj.Shipment.selectGoogleLocations(r.items[0].place_id,r.items[0].description),n={requestAirportData:ld,...e,selectLocation:i};return this.obj.createGenericCollectionItem(this.obj,"airport",n)}createShipmentTerms(e){const r={requestShipmentTermsData:cd,...e};return this.obj.createGenericCollectionItem(this.obj,"shipment_term",r)}async createShippingLine(e){const r={requestShippingLine:ud,...e},i=await this.obj.Shipment.getGoogleLocation(e.address),n=await this.obj.Shipment.selectGoogleLocations(i.items[0].place_id,i.items[0].description);return r.address.city=n,this.obj.createGenericCollectionItem(this.obj,"shipping_line",r)}async createVessel(e){const r={requestVesselData:hd,...e};return this.obj.createGenericCollectionItem(this.obj,"vessel",r)}async createAWBBlock(e){const r=["name","code"],i=["name"],n=D(e?.airline,r,i),o=await this.obj.getGenericAutoComplete(this.obj,"airline",n);e.airline=o.items[0];const s={requestAWBData:pd,...e};return this.obj.createGenericCollectionItem(this.obj,"awb_block",s)}deleteOperation(e,r){return this.obj.deleteGenericCollectionItem(this.obj,r,e)}deletePort(e){return this.deleteOperation(e,"port")}deleteAirport(e){return this.deleteOperation(e,"airport")}deleteContainersType(e){return this.deleteOperation(e,"container_type")}deletePackageType(e){return this.deleteOperation(e,"package_type")}deleteDocumentKind(e){return this.deleteOperation(e,"document_kind")}deleteVehicleType(e){return this.deleteOperation(e,"vehicle_type")}deleteProductType(e){return this.deleteOperation(e,"product_type")}deleteAirline(e){return this.deleteOperation(e,"airline")}deleteShipmentTerms(e){return this.deleteOperation(e,"shipment_term")}deleteShippingLine(e){return this.deleteOperation(e,"shipping_line")}deleteVessel(e){return this.deleteOperation(e,"vessel")}deleteAWBBlock(e){return this.deleteOperation(e,"awb_block")}updatePort(e,r){return this.obj.updateGenericCollectionItem(this.obj,"port",e,r)}updateAirport(e,r){return this.obj.updateGenericCollectionItem(this.obj,"airport",e,r)}updateContainerType(e,r){return this.obj.updateGenericCollectionItem(this.obj,"airport",e,r)}updatePackageType(e,r){return this.obj.updateGenericCollectionItem(this.obj,"package_type",e,r)}updateDocumentType(e,r){return this.obj.updateGenericCollectionItem(this.obj,"document_type",e,r)}updateVehicleType(e,r){return this.obj.updateGenericCollectionItem(this.obj,"vehicle_type",e,r)}updateProductType(e,r){return this.obj.updateGenericCollectionItem(this.obj,"product_type",e,r)}updateAirline(e,r){return this.obj.updateGenericCollectionItem(this.obj,"airline",e,r)}updateShipmentTerms(e,r){return this.obj.updateGenericCollectionItem(this.obj,"package_type",e,r)}updateShippingLine(e,r){return this.obj.updateGenericCollectionItem(this.obj,"shipping_type",e,r)}updateVessel(e,r){return this.obj.updateGenericCollectionItem(this.obj,"vessel",e,r)}updateAWBBlock(e,r){return this.obj.updateGenericCollectionItem(this.obj,"awb_block",e,r)}}class $d{serverUrl="https://api.shipthis.co";base_api_endpoint="https://api.shipthis.co";file_upload_api_endpoint="https://upload.shipthis.co/api/v3/file-upload";xApiKey;authorization;organisationId;organisation;userType;selectedRegion;selectedLocation;profiles=[];selectedProfile;isSessionValid;isConnectionValid;connectionErrorMessage;internalRequest=Lt;getListGeneric=Ra;uploadFile=td;getListGenericCollection=Da;getSearchListCollection=Na;getFullSearchListCollection=Ia;getOneGenericCollectionItem=Fa;createGenericCollectionItem=qa;updateGenericCollectionItem=La;patchGenericCollectionItem=ja;deleteGenericCollectionItem=Qa;bulkEdit=ka;primaryWorkflowAction=Ma;secondaryWorkflowAction=Ua;getExchangeRateForCurrency=za;getGenericAutoComplete=Wa;getLocation=Ka;selectGoogleLocation=Ya;setJobStatus=Ba;getJobStatus=Ga;getWorkflowReport=Ha;setWorkflowReport=Va;conversation=Ja;createConversation=Xa;getConversations=Za;getReportView=ed;Shipment;Invoice;Setup;Quotation;Customer;constructor(e){this.organisationId=e.organisationId,this.userType=e.userType,this.xApiKey=e.xApiKey,this.selectedRegion=e.regionId||"",this.selectedLocation=e.locationId||"",this.isConnectionValid=!1}connect(){return new Promise((e,r)=>{this.getInfo().then(i=>{if(this.onInfoChange(i),!this.selectedLocation)this.selectedRegion=i?.organisation?.regions[0]?.region_id,this.selectedLocation=i?.organisation?.regions[0]?.locations[0]?.location_id,this.isConnectionValid=!0;else{const n=this.organisation?.regions?.find(s=>s.region_id===this.selectedRegion);n||(this.connectionErrorMessage="Region Not Found",r({message:this.connectionErrorMessage})),n?.locations?.find(s=>s.location_id===this.selectedLocation)||(this.connectionErrorMessage="Location Not Found",r({message:this.connectionErrorMessage})),this.isConnectionValid=!0}e({region:this.selectedRegion,selectedLocation:this.selectedLocation})}).catch(i=>{r({message:i})})})}disconnect(){this.xApiKey=null}async loginViaPassword(e,r){return new Promise((i,n)=>{this.internalRequest(this,"POST","/user-auth/login",{requestData:{email:e.toLowerCase(),password:r}}).then(s=>{s.user&&(this.onInfoChange(s),i(s.user))}).catch(s=>{n(s)})})}onInfoChange(e){e?.profiles&&(this.selectedProfile=e.profiles[0]),this.organisation=e.organisation,this.isSessionValid=!0,this.serverUrl=e.api_endpoint,this.setObjectReferences()}async customerUserRegistration(e,r,i,n,o,s,a,d,c){return new Promise((u,h)=>{Lt(this,"POST","/customer/auth/register",{requestData:{email:e,password:r,first_name:i,last_name:n,company_name:o,accounting:d,address:c,phone:s,accept_terms_and_condition:a,skip_recaptcha:!0}}).then(m=>{this.onInfoChange(m.user),u(m.user)}).catch(m=>{h(m)})})}async customerForgotPassword(e,r){return new Promise((i,n)=>{Lt(this,"POST","/user-auth/forgot-password",{requestData:{email:e.toLowerCase(),captcha:{captcha_name:"default",captcha_response:r}}}).then(o=>{i(o)}).catch(o=>{n(o)})})}async setPasswordViaToken(e,r){return new Promise((i,n)=>{Lt(this,"POST","/user-auth/set-password-via-token",{requestData:{token:e,new_password:r}}).then(o=>{i(o)}).catch(o=>{n(o)})})}getSelectedRegion(){return this.selectedRegion}setRegionAndLocation(e,r){this.selectedRegion=e,this.selectedLocation=r}setObjectReferences(){this.Shipment=new od(this),this.Setup=new fd(this)}getInfo(){return this.internalRequest(this,"GET","user-auth/info")}searchLocation(e){return this.internalRequest(this,"GET","thirdparty/search-place-autocomplete?query-level=undefined&query="+e)}}class md{get API_URL(){return`https://main-app-hypercorn-hypercorn-us-central1-fast-dev-pelq277qkq-uc.a.run.app/api/v3/getrelated/${this.config?.collection||"third_party_quotation"}`}async init(e){this.config=e;const r=new $d({xApiKey:e.apiKey,organisationId:e.organisationId,userType:"employee"});try{const i=await r.connect();return this.client=r,i}catch(i){throw this.client=null,i}}async createQuotation(e){return this.client.quotation.create(e)}async getMetadata(e,r,i="employee"){return N.get(this.API_URL,{headers:{"Content-Type":"application/json","x-api-key":e,organisation:r,"user-type":i}}).then(n=>n.data.data).catch(n=>null)}async getFormConfig(){return this.client.widget.getFormConfig()}async getAutocompleteResults(e,r){if(!this.client)return console.error("ShipthisApiService not initialized"),{items:[]};try{return await this.client.getGenericAutoComplete(this.client,e,r)}catch(i){return console.error("SDK Autocomplete failed:",i),{items:[]}}}async searchLocation(e){if(!this.client)return{items:[]};try{return await this.client.searchLocation(e)}catch(r){return console.error("Location search failed:",r),{items:[]}}}async getLocationDetails(e,r){if(!this.client)return null;try{return await this.client.selectGoogleLocation(this.client,"search-place",{placeId:e,description:r})}catch(i){return console.error("Get location details failed:",i),null}}async createCollectionItem(e,r){if(!this.client)throw new Error("ShipthisApiService not initialized");try{return await this.client.createGenericCollectionItem(this.client,e,r)}catch(i){throw console.error("Create collection item failed:",i),i}}}const Oe=new md;class gd{evaluateCondition(e,r,i,n=""){if(!e||!i)return!1;const o=e.startsWith("!"),s=o?e.substring(1):e,a=n?`${n}${s}`:s,d=this.getDataViaAccessor(i,a),c=String(d??""),h=String(r).split(",").map(m=>m.trim()).some(m=>c===m);return o?!h:h}getDataViaAccessor(e,r){return r?r.split(".").reduce((i,n)=>i&&i[n]!==void 0?i[n]:void 0,e):e}}const Ae=new gd;class yd{static validateRegex(e,r,i){if(!e||!r)return null;try{if(!new RegExp(r).test(e))return i?`Invalid format. Example: ${i}`:"Invalid format"}catch{console.error("Invalid regex pattern:",r)}return null}static validateRequired(e){return e==null||e===""||Array.isArray(e)&&e.length===0?"This field is required":null}static validateNumberRange(e,r,i){if(e==null||e==="")return null;const n=parseFloat(e);return isNaN(n)?"Invalid number":r!==void 0&&n<r?`Value must be at least ${r}`:i!==void 0&&n>i?`Value must be no more than ${i}`:null}static validateEmail(e){return e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?null:"Invalid email address":null}static validateUrl(e){if(!e)return null;try{return new URL(e),null}catch{return"Invalid URL"}}}const Ue=yd;var bd=Object.defineProperty,M=(t,e,r,i)=>{for(var n=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(e,r,n)||n);return n&&bd(e,r,n),n};const Br=class Br extends X{constructor(){super(...arguments),this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.read_only=!1,this.hint_message="",this.prefix_text="",this.base_currency="",this.hide_label=!1,this.hide_title=!1,this.lines=2,this.fieldId="",this.max_value=null,this.min_value=null,this.isInvalid=!1,this.errorMessage=""}render(){return f`
      <div class="field-container ${this.isInvalid?"invalid":""}">
        ${this.renderLabel()}
        ${this.renderInput()}
        ${this.isInvalid?f`<div class="error-message">${this.errorMessage}</div>`:""}
        ${this.hint_message&&!this.isInvalid?f`<div class="hint">${this.hint_message}</div>`:""}
      </div>
    `}renderLabel(){return this.hide_label||this.hide_title||!this.label?f``:f`
      <label>
        ${this.label}
        ${this.required?f`<span class="required-star">*</span>`:""}
      </label>
    `}handleInput(e){const r=e.target;this.value=r.value,this.validate(),this.dispatchChange()}handleBlur(){this.validate(),this.dispatchChange()}isEmailLikeField(){const e=String(this.field?.field_type||"").toLowerCase(),r=String(this.fieldId||this.field?.field_id||"").toLowerCase(),i=String(this.label||this.field?.label||"").toLowerCase(),n=String(this.field?.field_meta?.example||"").toLowerCase(),o=r.replace(/[^a-z0-9]/g,""),s=i.replace(/[^a-z0-9]/g,"");return!!(e==="email"||r.includes("email")||o.includes("email")||i.includes("email")||s.includes("email")||n.includes("@"))}validate(){this.isInvalid=!1,this.errorMessage="";const e=typeof this.value=="string"?this.value.trim():this.value;if(this.required){const i=Ue.validateRequired(e);if(i)return this.isInvalid=!0,this.errorMessage=i,!1}if(this.isEmailLikeField()){const i=Ue.validateEmail(e);if(i)return this.isInvalid=!0,this.errorMessage=this.field?.field_meta?.example?`Invalid email address. Example: ${this.field.field_meta.example}`:i,!1}if(this.field?.field_meta?.enable_regex&&this.field?.field_meta?.regex){const i=Ue.validateRegex(e,this.field.field_meta.regex,this.field.field_meta.example);if(i)return this.isInvalid=!0,this.errorMessage=i,!1}const r=this.field?.field_type;if(r==="email"){const i=Ue.validateEmail(e);if(i)return this.isInvalid=!0,this.errorMessage=i,!1}else if(r==="url"){const i=Ue.validateUrl(e);if(i)return this.isInvalid=!0,this.errorMessage=i,!1}return!0}dispatchChange(){this.dispatchEvent(new CustomEvent("field-change",{detail:{value:this.value,fieldId:this.fieldId||this.field?.field_id,isInvalid:this.isInvalid,errorMessage:this.errorMessage},bubbles:!0,composed:!0}))}};Br.styles=j`
    :host {
      display: block;
      margin-bottom: 20px;
      font-family: inherit;
      max-width: 100%;
      min-width: 0;
      -webkit-text-size-adjust: 100%;
    }

    .field-container {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }

    label {
      font-size: 13px;
      font-weight: 500;
      color: var(--qwc-field-label, var(--qwc-text-muted));
      margin-bottom: 2px;
      text-align: left;
    }

    .required-star {
      color: var(--qwc-error);
      margin-left: 2px;
    }

    input, textarea, select {
      padding: 10px 12px;
      border: 1.5px solid var(--qwc-border);
      border-radius: var(--qwc-radius);
      font-size: 14px;
      transition: all 0.2s ease;
      background: var(--qwc-surface);
      color: var(--qwc-text);
      width: 100%;
      box-sizing: border-box;
      max-width: 100%;
      min-width: 0;
      outline: none;
    }

    input:focus, textarea:focus, select:focus {
      border-color: var(--qwc-primary);
      background: var(--qwc-bg);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }

    input:disabled, textarea:disabled, select:disabled {
      background: var(--qwc-surface);
      cursor: not-allowed;
      opacity: 0.7;
    }

    .hint {
      font-size: 11px;
      color: var(--qwc-text-muted);
      margin-top: 2px;
    }

    /* Error States */
    .field-container.invalid input,
    .field-container.invalid textarea,
    .field-container.invalid select {
      border-color: var(--qwc-error);
      background: color-mix(in srgb, var(--qwc-error) 5%, var(--qwc-bg));
    }

    .field-container.invalid input:focus,
    .field-container.invalid textarea:focus,
    .field-container.invalid select:focus {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-error) 10%, transparent);
    }

    .error-message {
      font-size: 11px;
      color: var(--qwc-error);
      margin-top: 2px;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      input, textarea, select {
        font-size: 16px;
      }
    }
  `;let v=Br;M([$({type:Object})],v.prototype,"field"),M([$({type:String})],v.prototype,"label"),M([$({type:String})],v.prototype,"value"),M([$({type:Boolean})],v.prototype,"required"),M([$({type:String})],v.prototype,"placeholder"),M([$({type:Boolean})],v.prototype,"disabled"),M([$({type:Boolean})],v.prototype,"read_only"),M([$({type:String})],v.prototype,"hint_message"),M([$({type:String})],v.prototype,"prefix_text"),M([$({type:String})],v.prototype,"base_currency"),M([$({type:Boolean})],v.prototype,"hide_label"),M([$({type:Boolean})],v.prototype,"hide_title"),M([$({type:Number})],v.prototype,"lines"),M([$({type:String})],v.prototype,"fieldId"),M([$({type:Number})],v.prototype,"max_value"),M([$({type:Number})],v.prototype,"min_value"),M([O()],v.prototype,"isInvalid"),M([O()],v.prototype,"errorMessage");var vd=Object.getOwnPropertyDescriptor,_d=(t,e,r,i)=>{for(var n=i>1?void 0:i?vd(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let ln=class extends v{renderInput(){const t=String(this.field?.field_type||"").toLowerCase(),e=String(this.fieldId||this.field?.field_id||"").toLowerCase(),r=String(this.label||this.field?.label||"").toLowerCase(),i=t==="email"||e.includes("email")||r.includes("email");return f`
      <input 
        type=${i?"email":"text"}
        .value=${this.value||""} 
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.read_only}
        @input=${this.handleInput}
        @blur=${this.handleBlur}
      />
    `}};ln=_d([q("shipthis-text-field")],ln);var wd=Object.getOwnPropertyDescriptor,xd=(t,e,r,i)=>{for(var n=i>1?void 0:i?wd(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let xr=class extends v{renderInput(){return f`
      <textarea 
        .value=${this.value||""} 
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.read_only}
        rows=${this.lines||3}
        @input=${this.handleInput}
      ></textarea>
    `}};xr.styles=j`
    ${v.styles}
    textarea {
      resize: vertical;
      min-height: 80px;
    }
  `,xr=xd([q("shipthis-textarea-field")],xr);var Cd=Object.getOwnPropertyDescriptor,Sd=(t,e,r,i)=>{for(var n=i>1?void 0:i?Cd(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let Cr=class extends v{renderInput(){return f`
      <div class="checkbox-container" @click=${this.toggleChecked}>
        <input 
          type="checkbox" 
          .checked=${!!this.value}
          ?disabled=${this.disabled||this.read_only}
        />
        ${this.label?f`<label>${this.label}</label>`:""}
      </div>
    `}renderLabel(){return f``}toggleChecked(){this.disabled||this.read_only||(this.value=!this.value,this.dispatchChange())}};Cr.styles=j`
    ${v.styles}
    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: var(--qwc-primary);
      border: 1.5px solid var(--qwc-border);
      border-radius: 4px;
    }

    label {
      margin-bottom: 0;
      cursor: pointer;
      color: var(--qwc-text);
    }
  `,Cr=Sd([q("shipthis-boolean-field")],Cr);var Ed=Object.getOwnPropertyDescriptor,Od=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ed(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let cn=class extends v{renderInput(){return f`
      <input 
        type="number" 
        .value=${this.value} 
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.read_only}
        .max=${this.max_value!==null?String(this.max_value):""}
        .min=${this.min_value!==null?String(this.min_value):""}
        @input=${this.handleInput}
      />
    `}handleInput(t){const e=t.target;this.value=e.value===""?null:Number(e.value),this.validate(),this.dispatchChange()}validate(){if(!super.validate())return!1;if(this.value!==null&&(this.min_value!==null||this.max_value!==null)){const t=Ue.validateNumberRange(this.value,this.min_value??void 0,this.max_value??void 0);if(t)return this.isInvalid=!0,this.errorMessage=t,!1}return!0}};cn=Od([q("shipthis-number-field")],cn);var Ad=Object.getOwnPropertyDescriptor,Pd=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ad(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let Sr=class extends v{renderInput(){return f`
      <div class="input-wrapper">
        <span class="prefix">${this.prefix_text||this.base_currency||"$"}</span>
        <input 
          type="number" 
          .value=${this.value} 
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?readonly=${this.read_only}
          @input=${this.handleInput}
        />
      </div>
    `}handleInput(t){const e=t.target;this.value=e.value===""?null:Number(e.value),this.validate(),this.dispatchChange()}};Sr.styles=j`
    ${v.styles}
    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .prefix {
      position: absolute;
      left: 12px;
      color: #64748b;
      font-size: 14px;
      pointer-events: none;
    }

    input {
      padding-left: 32px;
    }

    .reference-container {
      position: relative;
    }
    
    .loader {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
      color: #64748b;
    }
  `,Sr=Pd([q("shipthis-currency-field")],Sr);var Td=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,Pe=(t,e,r,i)=>{for(var n=i>1?void 0:i?Rd(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Td(e,r,n),n};let ie=class extends v{constructor(){super(...arguments),this.items=[],this.loading=!1,this.searchText="",this.showDropdown=!1,this.opData={},this.global_op_data={}}async firstUpdated(){this.value&&(typeof this.value=="string"?this.fetchById(this.value):this.value.__display?this.searchText=this.value.__display:this.searchText=this.generateDisplayString(this.value))}renderInput(){return f`
      <div class="reference-container">
        <input 
          type="text" 
          .value=${this.searchText}
          @input=${this.handleSearchInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          placeholder=${this.placeholder||"Search..."}
          ?disabled=${this.disabled||this.read_only}
        />
        ${this.showDropdown?f`
          <ul class="dropdown">
            ${this.loading?f`<li class="no-results">Searching...</li>`:I}
            ${!this.loading&&this.items.length===0?f`<li class="no-results">No results found</li>`:I}
            ${this.items.map(t=>f`
              <li @mousedown=${()=>this.selectItem(t)}>${t.__display}</li>
            `)}
          </ul>
        `:I}
        ${this.loading?f`<span class="loader">...</span>`:I}
      </div>
    `}handleSearchInput(t){const e=t.target.value;this.searchText=e,this.showDropdown=!0,clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.fetchResults(e)},300)}handleFocus(){(this.searchText||!this.value)&&(this.showDropdown=!0,this.items.length===0&&this.fetchResults(this.searchText))}handleBlur(){setTimeout(()=>{this.showDropdown=!1,!this.searchText&&this.value?(this.value=null,this.validate(),this.dispatchChange()):this.value&&(this.searchText=this.value.__display||this.generateDisplayString(this.value),this.validate(),this.dispatchChange())},200)}async fetchResults(t){if(this.field?.reference_meta?.view_name){this.loading=!0;try{const e=this.field.reference_meta,r={fields:e.fields||e.dependent_fields,display_fields:e.display_fields,filter_txt:t,general_filters:e.general_filter||"{}",number_of_items:20};if(e.is_filtered_reference&&e.filter_field_ids){const n={};for(const o of e.filter_field_ids){const s=o.field_accessor.split(".");let a=this.global_op_data||this.opData;for(const d of s)a=a?.[d];a&&(n[o.field_name]=a)}Object.keys(n).length>0&&(r.input_filters=JSON.stringify(n))}const i=await Oe.getAutocompleteResults(e.view_name,r);this.items=(i?.items||[]).map(n=>({...n,__display:this.generateDisplayString(n)}))}catch(e){console.error("Error fetching autocomplete results:",e)}finally{this.loading=!1}}}async fetchById(t){if(!this.field?.reference_meta?.view_name)return;this.loading=!0;const e=this.field.reference_meta,r={fields:e.fields||e.dependent_fields,display_fields:e.display_fields,filter_txt:"",general_filters:JSON.stringify({_id:{$oid:t}}),number_of_items:1},i=await Oe.getAutocompleteResults(e.view_name,r);i?.items?.[0]&&(this.value=i.items[0],this.value.__display=this.generateDisplayString(this.value),this.searchText=this.value.__display),this.loading=!1}generateDisplayString(t){return(this.field?.reference_meta?.display_fields||["name"]).map(r=>{const i=r.split(".");let n=t;for(const o of i)n=n?.[o];return n}).filter(r=>r!=null&&r!=="").join(" - ")}selectItem(t){this.value=t,this.searchText=t.__display,this.showDropdown=!1,this.validate(),this.dispatchChange()}};ie.styles=j`
    ${v.styles}
    .reference-container {
      position: relative;
    }
    
    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 100;
      max-height: 250px;
      overflow-y: auto;
      list-style: none;
      padding: 4px;
      margin: 4px 0 0;
    }

    .dropdown li {
      padding: 10px 12px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 6px;
      transition: background 0.2s;
    }

    .dropdown li:hover {
      background: #f1f5f9;
      color: var(--qwc-primary, #0661FC);
    }

    .loader {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 11px;
      color: #94a3b8;
    }

    .no-results {
      padding: 12px;
      text-align: center;
      color: #64748b;
      font-size: 13px;
    }
  `,Pe([O()],ie.prototype,"items",2),Pe([O()],ie.prototype,"loading",2),Pe([O()],ie.prototype,"searchText",2),Pe([O()],ie.prototype,"showDropdown",2),Pe([$({type:Object})],ie.prototype,"opData",2),Pe([$({type:Object})],ie.prototype,"global_op_data",2),ie=Pe([q("shipthis-reference-field")],ie);var Dd=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,kt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Nd(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Dd(e,r,n),n};let Be=class extends v{constructor(){super(...arguments),this.opData={},this.conditions={},this.condition_base_key=""}renderInput(){const t=(this.field?.fields||[]).filter(e=>!e.attributes?.hidden);return f`
      <div class="embed-container">
        ${t.map(e=>{const i=`width: calc(${e.field_meta?.field_width?.width||100}% - 16px); min-width: min(250px, 100%); max-width: 100%; flex-grow: 1;`;return f`
            <shipthis-field
              style=${i}
              .field=${e}
              .label=${e.label}
              .type=${e.field_type}
              .value=${this.value?.[e.field_id]||""}
              .fieldId=${e.field_id}
              .opData=${this.opData}
              .conditions=${this.conditions}
              .condition_base_key=${this.condition_base_key?`${this.condition_base_key}${this.fieldId}.`:`${this.fieldId}.`}
              .hide_label=${e.attributes?.hide_label||!1}
              @field-change=${n=>this.handleSubFieldChange(e.field_id,n.detail.value,n)}
            ></shipthis-field>
          `})}
      </div>
    `}handleSubFieldChange(t,e,r){r&&r.stopPropagation(),(!this.value||typeof this.value!="object")&&(this.value={}),this.value={...this.value,[t]:e},this.dispatchChange()}validate(){const t=this.shadowRoot?.querySelectorAll("shipthis-field")||[];let e=!0;return t.forEach(r=>{typeof r.validate=="function"&&(r.validate()||(e=!1))}),e}};Be.styles=j`
    ${v.styles}
    .embed-container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      border-left: 2px solid #e2e8f0;
      padding-left: 16px;
      margin-top: 8px;
    }
  `,kt([$({type:Object})],Be.prototype,"opData",2),kt([$({type:Object})],Be.prototype,"conditions",2),kt([$()],Be.prototype,"condition_base_key",2),Be=kt([q("shipthis-embed-field")],Be);var Id=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,Mt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Fd(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Id(e,r,n),n};let Ge=class extends v{constructor(){super(...arguments),this.opData={},this.conditions={},this.condition_base_key=""}renderInput(){const t=Array.isArray(this.value)?this.value:[],e=(this.field?.fields||[]).filter(r=>!r.attributes?.hidden);return f`
      <div class="list-container">
        ${t.map((r,i)=>f`
          <div class="list-item">
            <button class="remove-btn" @click=${()=>this.removeItem(i)}>✕</button>
            ${e.map(n=>{const s=`width: calc(${n.field_meta?.field_width?.width||100}% - 16px); min-width: min(200px, 100%); max-width: 100%; flex-grow: 1;`;return f`
                <shipthis-field
                  style=${s}
                  .field=${n}
                  .label=${n.label}
                  .type=${n.field_type}
                  .value=${r[n.field_id]||""}
                  .fieldId=${n.field_id}
                  .opData=${this.opData}
                  .conditions=${this.conditions}
                  .condition_base_key=${this.condition_base_key?`${this.condition_base_key}${this.fieldId}.${i}.`:`${this.fieldId}.${i}.`}
                  .hide_label=${n.attributes?.hide_label||!1}
                  @field-change=${a=>this.handleItemFieldChange(i,n.field_id,a.detail.value,a)}
                ></shipthis-field>
              `})}
          </div>
        `)}
        <button class="add-btn" @click=${this.addItem}>+ Add Item</button>
      </div>
    `}addItem(){const t=Array.isArray(this.value)?[...this.value]:[];t.push({}),this.value=t,this.dispatchChange()}removeItem(t){const e=Array.isArray(this.value)?[...this.value]:[];e.splice(t,1),this.value=e,this.dispatchChange()}handleItemFieldChange(t,e,r,i){i&&i.stopPropagation();const n=Array.isArray(this.value)?[...this.value]:[];n[t]={...n[t],[e]:r},this.value=n,this.dispatchChange()}validate(){const t=this.shadowRoot?.querySelectorAll("shipthis-field")||[];let e=!0;return t.forEach(r=>{typeof r.validate=="function"&&(r.validate()||(e=!1))}),e}};Ge.styles=j`
    ${v.styles}
    .list-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .list-item {
      border: 1px solid #e2e8f0;
      padding: 16px;
      border-radius: 8px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .remove-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff1f2;
      border: 1px solid #fecada;
      color: #e11d48;
      border-radius: 50%;
      cursor: pointer;
      font-size: 10px;
      transition: all 0.2s ease;
      z-index: 10;
    }

    .remove-btn:hover {
      background: #ffe4e6;
      border-color: #fda4af;
      color: #be123c;
      transform: scale(1.1);
    }

    .remove-btn:active {
      transform: scale(0.95);
    }

    .add-btn {
      align-self: flex-start;
      margin-top: 12px;
      padding: 8px 16px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      color: #334155;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .add-btn:hover {
      background: #f8fafc;
      border-color: #94a3b8;
      color: #1e293b;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .add-btn:active {
      background: #f1f5f9;
      transform: translateY(0);
    }
  `,Mt([$({type:Object})],Ge.prototype,"opData",2),Mt([$({type:Object})],Ge.prototype,"conditions",2),Mt([$()],Ge.prototype,"condition_base_key",2),Ge=Mt([q("shipthis-list-embed-field")],Ge);var qd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Ut=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ld(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&qd(e,r,n),n};let He=class extends v{constructor(){super(...arguments),this.searchResults=[],this.showDropdown=!1,this.isSearching=!1}handleInput(t){const r=t.target.value;if(this.value=r,this.searchTimeout&&clearTimeout(this.searchTimeout),r.length<3){this.searchResults=[],this.showDropdown=!1;return}this.searchTimeout=setTimeout(()=>{this.performSearch(r)},300)}async performSearch(t){this.isSearching=!0,this.showDropdown=!0;try{const e=await Oe.searchLocation(t);this.searchResults=e?.items||[]}catch(e){console.error("Location search failed",e)}finally{this.isSearching=!1}}async selectLocation(t){this.showDropdown=!1,this.searchResults=[];try{const e=await Oe.getLocationDetails(t.place_id,t.description);e&&(this.value=e,this.validate(),this.dispatchChange())}catch(e){console.error("Failed to get place details",e)}}handleBlur(){setTimeout(()=>{this.showDropdown=!1},200)}addCustomLocation(){if(typeof this.value=="string"&&this.value.trim()){const t={description:this.value,main_text:this.value,__display:this.value,type:"custom"};this.value=t,this.validate(),this.dispatchChange()}this.showDropdown=!1}renderInput(){const t=typeof this.value=="object"?this.value?.description||"":this.value||"";return f`
      <div class="location-container">
        <input
          type="text"
          .value=${t}
          placeholder=${this.placeholder||"Search for a location..."}
          ?disabled=${this.disabled}
          ?readonly=${this.read_only}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${()=>t.length>=3&&(this.showDropdown=!0)}
          class=${this.isInvalid?"invalid":""}
          autocomplete="off"
        />
        
        ${this.showDropdown?f`
          <div class="autocomplete-dropdown">
            ${this.isSearching?f`<div class="loader">Searching...</div>`:""}
            
            ${this.searchResults.map(e=>f`
              <div class="suggestion-item" @click=${()=>this.selectLocation(e)}>
                <div class="bold">${e.bold||e.main_text}</div>
                <div class="description">${e.description}</div>
              </div>
            `)}

            ${!this.isSearching&&this.searchResults.length===0?f`
               <div class="suggestion-item" style="cursor: default; color: #94a3b8;">No locations found</div>
            `:""}

            <div class="custom-location-btn" @click=${this.addCustomLocation}>
              + Use "${t}" as custom location
            </div>
          </div>
        `:""}
      </div>
    `}validate(){const t=this.value,e=this.required||!!this.field?.attributes?.required;return!t||typeof t=="object"&&!Object.keys(t).length?(this.isInvalid=e,this.errorMessage=this.isInvalid?"This field is required":"",!this.isInvalid):(this.isInvalid=!1,this.errorMessage="",!0)}};He.styles=j`
    ${v.styles}
    .location-container {
      position: relative;
    }
    .autocomplete-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #cbd5e1;
      border-top: none;
      border-radius: 0 0 6px 6px;
      z-index: 1000;
      max-height: 250px;
      overflow-y: auto;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .suggestion-item {
      padding: 10px 12px;
      cursor: pointer;
      font-size: 13px;
      border-bottom: 1px solid #f1f5f9;
      transition: background 0.2s;
    }
    .suggestion-item:last-child {
      border-bottom: none;
    }
    .suggestion-item:hover {
      background: #f8fafc;
    }
    .suggestion-item .bold {
      font-weight: 600;
      color: #1e293b;
    }
    .suggestion-item .description {
      color: #64748b;
      font-size: 12px;
    }
    .loader {
      padding: 10px;
      text-align: center;
      color: #64748b;
      font-size: 12px;
    }
    .custom-location-btn {
      padding: 10px 12px;
      cursor: pointer;
      color: #3b82f6;
      font-size: 13px;
      font-weight: 500;
      border-top: 1px solid #e2e8f0;
      background: #f8fafc;
    }
  `,Ut([O()],He.prototype,"searchResults",2),Ut([O()],He.prototype,"showDropdown",2),Ut([O()],He.prototype,"isSearching",2),He=Ut([q("shipthis-location-field")],He);const jd={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]","(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|2[23]"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","(?:[025-7]\\d|44)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[024-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[02-4679]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","(?:01\\d|8)\\d{7}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["0"]]]],BL:["590","00","(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","8001\\d{5}|(?:[2-467]\\d|50)\\d{6}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[235]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37|86)","300|4(?:0(?:0|20)|370|864)"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[178]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-6]|7[246]|8[2-4]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|[78]"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-9]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","[2-9]\\d{9}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["5"],"0$1"]],"0"],CF:["236","00","8776\\d{4}|(?:[27]\\d|61)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-8]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["60|809"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9(?:10|[2-9])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]","(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["46"]],["(\\d{3})(\\d{7})","$1 $2",["6|90"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|9[14]"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["[56]"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9,10,11,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[03568]","15(?:[0568]|3[13])"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{8})","$1 $2",["1"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,0,[["528[89]\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|5[0-5]))\\d{6}"],["80[0-7]\\d{6}"],["89\\d{7}"],0,0,0,0,["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],ET:["251","00","(?:11|[2-579]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d{5})","$1",["20[2-59]"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[68])0|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"],["(\\d)(\\d{4,9})","$1 $2",["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,"0|180020",0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0|180020","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-8]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","(?:[2-8]\\d{3}|9008)\\d{3}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",[7,8,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6|7[245]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","[2-589]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13,14,15,16,17],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0|180020","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689])\\d|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["16|[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["18[06]","18[06]0"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11,12],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]|43"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[03]"]]],0,0,0,0,0,0,[["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[2-9]\\d{7,8}|(?:31|43)\\d{8}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],["3[2-8]\\d{9,10}",[11,12]],0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0|180020","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[47]"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]","3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[25-9]"],"0$1"]],"0",0,"(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0","$1"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|[235-9]\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[36]0|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","8\\d{13}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["3"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["4[67]|[56]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(0-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"0 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(0-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(0-$1)",1]],"0",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["20"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["20"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|78|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2679]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{4})(\\d{5})","$1-$2",["892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8(?:0[0-7]|9)"],"0$1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[5-8]"],"0$1"]],"0",0,0,0,0,"[5-8]"],MC:["377","00","(?:[3489]|[67]\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[67]"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|452|678|86","[12]|452|6788|86"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]|8(?:0[6-9]|[36])"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],MX:["52","0[09]","[2-9]\\d{9}",[10],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"]]],0,0,0,0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[0467]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:20|9\\d)\\d{8}|[78]\\d{9,13}",[10,11,12,13,14],[["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["20[129]"],"0$1"],["(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[24-9]"]]]],NU:["683","00","(?:[4-7]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-79]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|8|90","50(?:[0367]|88)|8|90"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[589]"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[45]\\d{5}|(?:708|8\\d\\d)\\d{6}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["3[289]|4[246-8]|61|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[136]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","709\\d{6}|(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-9]"],"0$1"]],"0",0,0,0,0,0,[["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"[3489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],"0"],SA:["966","00","(?:[15]\\d|800|92)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","[6-9]\\d{6}|[1-6]\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","(?:[2489]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10,12],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-9]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|79)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["(?:2|90)4|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[348]|64|79|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6[0-35-9]|7[67]|9[2-9]"]]],"0"],SR:["597","00","(?:[2-5]|[6-8]\\d|90)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-9]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[25-7]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-359]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-4]|5[1-3]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[59]"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|30|[689]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[236-9]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:[0-57-9]\\d|66)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["44[02-479]|[34]7"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3(?:[1245]|3[12])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["\\d"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","(?:[1-6]\\d|71)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["[67]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-579]|61)","5(?:[0-579]|61[06])","5(?:[0-579]|61[06]1)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:274[27]|(?:472|983)[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",[4,5,6,7,8,9,10,11,12,13],[["(\\d{4,5})","$1",["21"]],["(\\d{3})(\\d{3,4})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[49]0|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","00","(?:20|33|[5-9]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-9]"]]]],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11,12],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["6"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[357-9]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[47-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",[8,9,10,11,12],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2|39"],"0$1"],["(\\d{2})(\\d{7,10})","$1 $2",["3"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",[9],0,"0",0,0,0,0,0,[["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],["80\\d{7}"],0,0,0,0,0,["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|[579]\\d|63)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[579]"],"0$1"]],"0"],ZW:["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[235-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],0,0,0,0,0,0,["2\\d{8}",[9]]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"6\\d{9}|[0-36-9]\\d{8}",[9,10],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-37-9]"]],["(\\d)(\\d{3})(\\d{5,6})","$1 $2 $3",["6"]]],0,0,0,0,0,0,[0,["6\\d{9}|[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|5[12]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}",[7,8,9,10,12]],0,0,0,["348[57]\\d{7}",[11]],0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};function Er(t,e){var r=Array.prototype.slice.call(e);return r.push(jd),t.apply(this,r)}function un(t,e){t=t.split("-"),e=e.split("-");for(var r=t[0].split("."),i=e[0].split("."),n=0;n<3;n++){var o=Number(r[n]),s=Number(i[n]);if(o>s)return 1;if(s>o)return-1;if(!isNaN(o)&&isNaN(s))return 1;if(isNaN(o)&&!isNaN(s))return-1}return t[1]&&e[1]?t[1]>e[1]?1:t[1]<e[1]?-1:0:!t[1]&&e[1]?1:t[1]&&!e[1]?-1:0}var kd={}.constructor;function Ve(t){return t!=null&&t.constructor===kd}function ze(t){"@babel/helpers - typeof";return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ze(t)}function Bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Md(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Ud(i.key),i)}}function Gt(t,e,r){return e&&Md(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ud(t){var e=Bd(t,"string");return ze(e)=="symbol"?e:e+""}function Bd(t,e){if(ze(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(ze(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Gd="1.2.0",Hd="1.7.35",hn=" ext. ",Vd=/^\d+$/,B=(function(){function t(e){Bt(this,t),$n(e),this.metadata=e,mn.call(this,e)}return Gt(t,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(r){return r!=="001"})}},{key:"getCountryMetadata",value:function(r){return this.metadata.countries[r]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(r){return this.getCountryMetadata(r)!==void 0}},{key:"hasCallingCode",value:function(r){if(this.getCountryCodesForCallingCode(r))return!0;if(this.nonGeographic()){if(this.nonGeographic()[r])return!0}else{var i=this.countryCallingCodes()[r];if(i&&i.length===1&&i[0]==="001")return!0}}},{key:"isNonGeographicCallingCode",value:function(r){return this.nonGeographic()?!!this.nonGeographic()[r]:!this.getCountryCodesForCallingCode(r)}},{key:"country",value:function(r){return this.selectNumberingPlan(r)}},{key:"selectNumberingPlan",value:function(r,i){if(r&&Vd.test(r)&&(i=r,r=null),r&&r!=="001"){if(!this.hasCountry(r))throw new Error("Unknown country: ".concat(r));this.numberingPlan=new pn(this.getCountryMetadata(r),this)}else if(i){if(!this.hasCallingCode(i))throw new Error("Unknown calling code: ".concat(i));this.numberingPlan=new pn(this.getNumberingPlanMetadata(i),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(r){var i=this.countryCallingCodes()[r];if(i)return i.length===1&&i[0].length===3?void 0:i}},{key:"getCountryCodeForCallingCode",value:function(r){var i=this.getCountryCodesForCallingCode(r);if(i)return i[0]}},{key:"getNumberingPlanMetadata",value:function(r){var i=this.getCountryCodeForCallingCode(r);if(i)return this.getCountryMetadata(i);if(this.nonGeographic()){var n=this.nonGeographic()[r];if(n)return n}else{var o=this.countryCallingCodes()[r];if(o&&o.length===1&&o[0]==="001")return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(r){return this.numberingPlan.type(r)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(r){return this.selectNumberingPlan(r)}},{key:"hasSelectedNumberingPlan",value:function(){return this.numberingPlan!==void 0}}])})(),pn=(function(){function t(e,r){Bt(this,t),this.globalMetadataObject=r,this.metadata=e,mn.call(this,r.metadata)}return Gt(t,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(r){return r[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var r=this,i=this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return i.map(function(n){return new zd(n,r)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(r){return r[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return this.types()&&this.types().length===0?!1:!!this.types()}},{key:"type",value:function(r){if(this.hasTypes()&&fn(this.types(),r))return new Kd(fn(this.types(),r),this)}},{key:"ext",value:function(){return this.v1||this.v2?hn:this.metadata[13]||hn}}])})(),zd=(function(){function t(e,r){Bt(this,t),this._format=e,this.metadata=r}return Gt(t,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!(this.nationalPrefixFormattingRule()&&!Wd.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}])})(),Wd=/^\(?\$1\)?$/,Kd=(function(){function t(e,r){Bt(this,t),this.type=e,this.metadata=r}return Gt(t,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}])})();function fn(t,e){switch(e){case"FIXED_LINE":return t[0];case"MOBILE":return t[1];case"TOLL_FREE":return t[2];case"PREMIUM_RATE":return t[3];case"PERSONAL_NUMBER":return t[4];case"VOICEMAIL":return t[5];case"UAN":return t[6];case"PAGER":return t[7];case"VOIP":return t[8];case"SHARED_COST":return t[9]}}function $n(t){if(!t)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!Ve(t)||!Ve(t.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ve(t)?"an object of shape: { "+Object.keys(t).join(", ")+" }":"a "+Yd(t)+": "+t,"."))}var Yd=function(e){return ze(e)};function Ht(t,e){if(e=new B(e),e.hasCountry(t))return e.selectNumberingPlan(t).countryCallingCode();throw new Error("Unknown country: ".concat(t))}function Jd(t,e){return e.countries.hasOwnProperty(t)}function mn(t){var e=t.version;typeof e=="number"?(this.v1=e===1,this.v2=e===2,this.v3=e===3,this.v4=e===4):e?un(e,Gd)===-1?this.v2=!0:un(e,Hd)===-1?this.v3=!0:this.v4=!0:this.v1=!0}function Or(t,e,r){return Xd(t,e,void 0,r)}function Xd(t,e,r,i){e&&(i=new B(i.metadata),i.selectNumberingPlan(e));var n=i.type(r),o=n&&n.possibleLengths()||i.possibleLengths();if(!o)return"IS_POSSIBLE";var s=t.length,a=o[0];return a===s?"IS_POSSIBLE":a>s?"TOO_SHORT":o[o.length-1]<s?"TOO_LONG":o.indexOf(s,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}function Zd(t,e,r){if(e===void 0&&(e={}),r=new B(r),e.v2){if(!t.countryCallingCode)throw new Error("Invalid phone number object passed");r.selectNumberingPlan(t.countryCallingCode)}else{if(!t.phone)return!1;if(t.country){if(!r.hasCountry(t.country))throw new Error("Unknown country: ".concat(t.country));r.selectNumberingPlan(t.country)}else{if(!t.countryCallingCode)throw new Error("Invalid phone number object passed");r.selectNumberingPlan(t.countryCallingCode)}}if(r.possibleLengths())return gn(t.phone||t.nationalNumber,t.country,r);if(t.countryCallingCode&&r.isNonGeographicCallingCode(t.countryCallingCode))return!0;throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}function gn(t,e,r){return Or(t,e,r)==="IS_POSSIBLE"}function ne(t,e){return t=t||"",new RegExp("^(?:"+e+")$").test(t)}function Qd(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=el(t))||e){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function el(t,e){if(t){if(typeof t=="string")return yn(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?yn(t,e):void 0}}function yn(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}var tl=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function Ar(t,e,r){if(e=e||{},!(!t.country&&!t.countryCallingCode)){r=new B(r),r.selectNumberingPlan(t.country,t.countryCallingCode);var i=e.v2?t.nationalNumber:t.phone;if(ne(i,r.nationalNumberPattern())){if(Pr(i,"FIXED_LINE",r))return r.type("MOBILE")&&r.type("MOBILE").pattern()===""||!r.type("MOBILE")||Pr(i,"MOBILE",r)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE";for(var n=Qd(tl),o;!(o=n()).done;){var s=o.value;if(Pr(i,s,r))return s}}}}function Pr(t,e,r){var i=r.type(e);return!i||!i.pattern()||i.possibleLengths()&&i.possibleLengths().indexOf(t.length)<0?!1:ne(t,i.pattern())}function rl(t,e,r){if(e=e||{},r=new B(r),r.selectNumberingPlan(t.country,t.countryCallingCode),r.hasTypes())return Ar(t,e,r.metadata)!==void 0;var i=e.v2?t.nationalNumber:t.phone;return ne(i,r.nationalNumberPattern())}function il(t,e,r){var i=new B(r),n=i.getCountryCodesForCallingCode(t);return n?n.filter(function(o){return nl(e,o,r)}):[]}function nl(t,e,r){var i=new B(r);return i.selectNumberingPlan(e),i.numberingPlan.possibleLengths().indexOf(t.length)>=0}var Tr=2,ol=17,sl=3,Z="0-9０-９٠-٩۰-۹",al="-‐-―−ー－",dl="／/",ll="．.",cl="  ­​⁠　",ul="()（）［］\\[\\]",hl="~⁓∼～",Vt="".concat(al).concat(dl).concat(ll).concat(cl).concat(ul).concat(hl),Rr="+＋",pl=new RegExp("(["+Z+"])");function fl(t,e,r,i){if(e){var n=new B(i);n.selectNumberingPlan(e,r);var o=new RegExp(n.IDDPrefix());if(t.search(o)===0){t=t.slice(t.match(o)[0].length);var s=t.match(pl);if(!(s&&s[1]!=null&&s[1].length>0&&s[1]==="0"))return t}}}function $l(t,e){if(t&&e.numberingPlan.nationalPrefixForParsing()){var r=new RegExp("^(?:"+e.numberingPlan.nationalPrefixForParsing()+")"),i=r.exec(t);if(i){var n,o,s=i.length-1,a=s>0&&i[s];if(e.nationalPrefixTransformRule()&&a)n=t.replace(r,e.nationalPrefixTransformRule()),s>1&&(o=i[1]);else{var d=i[0];n=t.slice(d.length),a&&(o=i[1])}var c;if(a){var u=t.indexOf(i[1]),h=t.slice(0,u);h===e.numberingPlan.nationalPrefix()&&(c=e.numberingPlan.nationalPrefix())}else c=i[0];return{nationalNumber:n,nationalPrefix:c,carrierCode:o}}}return{nationalNumber:t}}function ml(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=gl(t))||e){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gl(t,e){if(t){if(typeof t=="string")return bn(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?bn(t,e):void 0}}function bn(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function yl(t,e){var r=e.countries,i=e.metadata;i=new B(i);for(var n=ml(r),o;!(o=n()).done;){var s=o.value;if(i.selectNumberingPlan(s),i.leadingDigits()){if(t&&t.search(i.leadingDigits())===0)return s}else if(Ar({phone:t,country:s},void 0,i.metadata))return s}}function vn(t,e){var r=e.nationalNumber,i=e.metadata,n=i.getCountryCodesForCallingCode(t);if(n)return n.length===1?n[0]:yl(r,{countries:n,metadata:i.metadata})}function Dr(t,e,r){var i=$l(t,r),n=i.carrierCode,o=i.nationalNumber;if(o!==t){if(!bl(t,o,r))return{nationalNumber:t};if(r.numberingPlan.possibleLengths()&&(e||(e=vn(r.numberingPlan.callingCode(),{nationalNumber:o,metadata:r})),!vl(o,e,r)))return{nationalNumber:t}}return{nationalNumber:o,carrierCode:n}}function bl(t,e,r){return!(ne(t,r.nationalNumberPattern())&&!ne(e,r.nationalNumberPattern()))}function vl(t,e,r){switch(Or(t,e,r)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}function _l(t,e,r,i,n){var o=r?Ht(r,n):i;if(t.indexOf(o)===0){n=new B(n),n.selectNumberingPlan(r,o);var s=t.slice(o.length),a=Dr(s,e,n),d=a.nationalNumber,c=Dr(t,e,n),u=c.nationalNumber;if(!ne(u,n.nationalNumberPattern())&&ne(d,n.nationalNumberPattern())||Or(u,e,n)==="TOO_LONG")return{countryCallingCode:o,number:s}}return{number:t}}function _n(t,e,r,i,n){if(!t)return{};var o;if(t[0]!=="+"){var s=fl(t,r,i,n);if(s&&s!==t)o=!0,t="+"+s;else{if(r||i){var a=_l(t,e,r,i,n),d=a.countryCallingCode,c=a.number;if(d)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:d,number:c}}return{number:t}}}if(t[1]==="0")return{};n=new B(n);for(var u=2;u-1<=sl&&u<=t.length;){var h=t.slice(1,u);if(n.hasCallingCode(h))return n.selectNumberingPlan(h),{countryCallingCodeSource:o?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:h,number:t.slice(u)};u++}return{}}function wl(t){return t.replace(new RegExp("[".concat(Vt,"]+"),"g")," ").trim()}var xl=/(\$\d)/;function Cl(t,e,r){var i=r.useInternationalFormat,n=r.withNationalPrefix,o=t.replace(new RegExp(e.pattern()),i?e.internationalFormat():n&&e.nationalPrefixFormattingRule()?e.format().replace(xl,e.nationalPrefixFormattingRule()):e.format());return i?wl(o):o}var Sl=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function El(t,e,r){var i=new B(r);if(i.selectNumberingPlan(t,e),i.defaultIDDPrefix())return i.defaultIDDPrefix();if(Sl.test(i.IDDPrefix()))return i.IDDPrefix()}var Ol=";ext=",We=function(e){return"([".concat(Z,"]{1,").concat(e,"})")};function wn(t){var e="20",r="15",i="9",n="6",o="[  \\t,]*",s="[:\\.．]?[  \\t,-]*",a="#?",d="(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",c="(?:[xｘ#＃~～]|int|ｉｎｔ)",u="[- ]+",h="[  \\t]*",m="(?:,{2}|;)",b=Ol+We(e),C=o+d+s+We(e)+a,T=o+c+s+We(i)+a,L=u+We(n)+"#",p=h+m+s+We(r)+a,y=h+"(?:,)+"+s+We(i)+a;return b+"|"+C+"|"+T+"|"+L+"|"+p+"|"+y}var Al="["+Z+"]{"+Tr+"}",Pl="["+Rr+"]{0,1}(?:["+Vt+"]*["+Z+"]){3,}["+Vt+Z+"]*",Tl=new RegExp("^["+Rr+"]{0,1}(?:["+Vt+"]*["+Z+"]){1,2}$","i"),Rl=Pl+"(?:"+wn()+")?",Dl=new RegExp("^"+Al+"$|^"+Rl+"$","i");function Nl(t){return t.length>=Tr&&Dl.test(t)}function Il(t){return Tl.test(t)}function Fl(t){var e=t.number,r=t.ext;if(!e)return"";if(e[0]!=="+")throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(e).concat(r?";ext="+r:"")}var xn={formatExtension:function(e,r,i){return"".concat(e).concat(i.ext()).concat(r)}};function ql(t,e,r,i){if(r?r=kl({},xn,r):r=xn,i=new B(i),t.country&&t.country!=="001"){if(!i.hasCountry(t.country))throw new Error("Unknown country: ".concat(t.country));i.selectNumberingPlan(t.country)}else if(t.countryCallingCode)i.selectNumberingPlan(t.countryCallingCode);else return t.phone||"";var n=i.countryCallingCode(),o=r.v2?t.nationalNumber:t.phone,s;switch(e){case"NATIONAL":return o?(s=zt(o,t.carrierCode,"NATIONAL",i,r),Nr(s,t.ext,i,r.formatExtension)):"";case"INTERNATIONAL":return o?(s=zt(o,null,"INTERNATIONAL",i,r),s="+".concat(n," ").concat(s),Nr(s,t.ext,i,r.formatExtension)):"+".concat(n);case"E.164":return"+".concat(n).concat(o);case"RFC3966":return Fl({number:"+".concat(n).concat(o),ext:t.ext});case"IDD":if(!r.fromCountry)return;var a=jl(o,t.carrierCode,n,r.fromCountry,i);return a?Nr(a,t.ext,i,r.formatExtension):void 0;default:throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e,'"'))}}function zt(t,e,r,i,n){var o=Ll(i.formats(),t);return o?Cl(t,o,{useInternationalFormat:r==="INTERNATIONAL",withNationalPrefix:!(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat()&&n&&n.nationalPrefix===!1)}):t}function Ll(t,e){return Ml(t,function(r){if(r.leadingDigitsPatterns().length>0){var i=r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length-1];if(e.search(i)!==0)return!1}return ne(e,r.pattern())})}function Nr(t,e,r,i){return e?i(t,e,r):t}function jl(t,e,r,i,n){var o=Ht(i,n.metadata);if(o===r){var s=zt(t,e,"NATIONAL",n);return r==="1"?r+" "+s:s}var a=El(i,void 0,n.metadata);if(a)return"".concat(a," ").concat(r," ").concat(zt(t,null,"INTERNATIONAL",n))}function kl(){for(var t=1,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];for(;t<r.length;){if(r[t])for(var n in r[t])r[0][n]=r[t][n];t++}return r[0]}function Ml(t,e){for(var r=0;r<t.length;){if(e(t[r]))return t[r];r++}}function ut(t){"@babel/helpers - typeof";return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ut(t)}function Cn(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function Sn(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Cn(Object(r),!0).forEach(function(i){Ul(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Cn(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Ul(t,e,r){return(e=En(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Bl(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Gl(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,En(i.key),i)}}function Hl(t,e,r){return e&&Gl(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function En(t){var e=Vl(t,"string");return ut(e)=="symbol"?e:e+""}function Vl(t,e){if(ut(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(ut(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var zl=(function(){function t(e,r,i){if(Bl(this,t),!e)throw new TypeError("First argument is required");if(typeof e!="string")throw new TypeError("First argument must be a string");if(e[0]==="+"&&!r)throw new TypeError("`metadata` argument not passed");if(Ve(r)&&Ve(r.countries)){i=r;var n=e;if(!Yl.test(n))throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');var o=_n(n,void 0,void 0,void 0,i),s=o.countryCallingCode,a=o.number;if(r=a,e=s,!r)throw new Error("Invalid `number` argument passed: too short")}if(!r)throw new TypeError("`nationalNumber` argument is required");if(typeof r!="string")throw new TypeError("`nationalNumber` argument must be a string");$n(i);var d=Kl(e,i),c=d.country,u=d.countryCallingCode;this.country=c,this.countryCallingCode=u,this.nationalNumber=r,this.number="+"+this.countryCallingCode+this.nationalNumber,this.getMetadata=function(){return i}}return Hl(t,[{key:"setExt",value:function(r){this.ext=r}},{key:"getPossibleCountries",value:function(){return this.country?[this.country]:il(this.countryCallingCode,this.nationalNumber,this.getMetadata())}},{key:"isPossible",value:function(){return Zd(this,{v2:!0},this.getMetadata())}},{key:"isValid",value:function(){return rl(this,{v2:!0},this.getMetadata())}},{key:"isNonGeographic",value:function(){var r=new B(this.getMetadata());return r.isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(r){return this.number===r.number&&this.ext===r.ext}},{key:"getType",value:function(){return Ar(this,{v2:!0},this.getMetadata())}},{key:"format",value:function(r,i){return ql(this,r,i?Sn(Sn({},i),{},{v2:!0}):{v2:!0},this.getMetadata())}},{key:"formatNational",value:function(r){return this.format("NATIONAL",r)}},{key:"formatInternational",value:function(r){return this.format("INTERNATIONAL",r)}},{key:"getURI",value:function(r){return this.format("RFC3966",r)}}])})(),Wl=function(e){return/^[A-Z]{2}$/.test(e)};function Kl(t,e){var r,i,n=new B(e);return Wl(t)?(r=t,n.selectNumberingPlan(r),i=n.countryCallingCode()):i=t,{country:r,countryCallingCode:i}}var Yl=/^\+\d+$/;function Ir(t){"@babel/helpers - typeof";return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ir(t)}function Jl(t,e,r){return Object.defineProperty(t,"prototype",{writable:!1}),t}function Xl(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zl(t,e,r){return e=pt(e),Ql(t,qr()?Reflect.construct(e,r||[],pt(t).constructor):e.apply(t,r))}function Ql(t,e){if(e&&(Ir(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ec(t)}function ec(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tc(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ht(t,e)}function Fr(t){var e=typeof Map=="function"?new Map:void 0;return Fr=function(i){if(i===null||!ic(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(i))return e.get(i);e.set(i,n)}function n(){return rc(i,arguments,pt(this).constructor)}return n.prototype=Object.create(i.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ht(n,i)},Fr(t)}function rc(t,e,r){if(qr())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var n=new(t.bind.apply(t,i));return r&&ht(n,r.prototype),n}function qr(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(qr=function(){return!!t})()}function ic(t){try{return Function.toString.call(t).indexOf("[native code]")!==-1}catch{return typeof t=="function"}}function ht(t,e){return ht=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ht(t,e)}function pt(t){return pt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},pt(t)}var oe=(function(t){function e(r){var i;return Xl(this,e),i=Zl(this,e,[r]),Object.setPrototypeOf(i,e.prototype),i.name=i.constructor.name,i}return tc(e,t),Jl(e)})(Fr(Error)),On=new RegExp("(?:"+wn()+")$","i");function nc(t){var e=t.search(On);if(e<0)return{};for(var r=t.slice(0,e),i=t.match(On),n=1;n<i.length;){if(i[n])return{number:r,ext:i[n]};n++}}var oc={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function sc(t){return oc[t]}function ac(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=dc(t))||e){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dc(t,e){if(t){if(typeof t=="string")return An(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?An(t,e):void 0}}function An(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function Pn(t){for(var e="",r=ac(t.split("")),i;!(i=r()).done;){var n=i.value;e+=lc(n,e)||""}return e}function lc(t,e,r){return t==="+"?e?void 0:"+":sc(t)}var Tn="+",cc="[\\-\\.\\(\\)]?",Rn="(["+Z+"]|"+cc+")",uc="^\\"+Tn+Rn+"*["+Z+"]"+Rn+"*$",hc=new RegExp(uc,"g"),Lr=Z,pc="["+Lr+"]+((\\-)*["+Lr+"])*",fc="a-zA-Z",$c="["+fc+"]+((\\-)*["+Lr+"])*",mc="^("+pc+"\\.)*"+$c+"\\.?$",gc=new RegExp(mc,"g"),Dn="tel:",jr=";phone-context=",yc=";isub=";function bc(t){var e=t.indexOf(jr);if(e<0)return null;var r=e+jr.length;if(r>=t.length)return"";var i=t.indexOf(";",r);return i>=0?t.substring(r,i):t.substring(r)}function vc(t){return t===null?!0:t.length===0?!1:hc.test(t)||gc.test(t)}function _c(t,e){var r=e.extractFormattedPhoneNumber,i=bc(t);if(!vc(i))throw new oe("NOT_A_NUMBER");var n;if(i===null)n=r(t)||"";else{n="",i.charAt(0)===Tn&&(n+=i);var o=t.indexOf(Dn),s;o>=0?s=o+Dn.length:s=0;var a=t.indexOf(jr);n+=t.substring(s,a)}var d=n.indexOf(yc);if(d>0&&(n=n.substring(0,d)),n!=="")return n}var wc=250,xc=new RegExp("["+Rr+Z+"]"),Cc=new RegExp("[^"+Z+"#]+$");function Sc(t,e,r){if(e=e||{},r=new B(r),e.defaultCountry&&!r.hasCountry(e.defaultCountry))throw e.v2?new oe("INVALID_COUNTRY"):new Error("Unknown country: ".concat(e.defaultCountry));var i=Oc(t,e.v2,e.extract),n=i.number,o=i.ext,s=i.error;if(!n){if(e.v2)throw s==="TOO_SHORT"?new oe("TOO_SHORT"):new oe("NOT_A_NUMBER");return{}}var a=Pc(n,e.defaultCountry,e.defaultCallingCode,r),d=a.country,c=a.nationalNumber,u=a.countryCallingCode,h=a.countryCallingCodeSource,m=a.carrierCode;if(!r.hasSelectedNumberingPlan()){if(e.v2)throw new oe("INVALID_COUNTRY");return{}}if(!c||c.length<Tr){if(e.v2)throw new oe("TOO_SHORT");return{}}if(c.length>ol){if(e.v2)throw new oe("TOO_LONG");return{}}if(e.v2){var b=new zl(u,c,r.metadata);return d&&(b.country=d),m&&(b.carrierCode=m),o&&(b.ext=o),b.__countryCallingCodeSource=h,b}var C=(e.extended?r.hasSelectedNumberingPlan():d)?ne(c,r.nationalNumberPattern()):!1;return e.extended?{country:d,countryCallingCode:u,carrierCode:m,valid:C,possible:C?!0:!!(e.extended===!0&&r.possibleLengths()&&gn(c,d,r)),phone:c,ext:o}:C?Ac(d,c,o):{}}function Ec(t,e,r){if(t){if(t.length>wc){if(r)throw new oe("TOO_LONG");return}if(e===!1)return t;var i=t.search(xc);if(!(i<0))return t.slice(i).replace(Cc,"")}}function Oc(t,e,r){var i=_c(t,{extractFormattedPhoneNumber:function(s){return Ec(s,r,e)}});if(!i)return{};if(!Nl(i))return Il(i)?{error:"TOO_SHORT"}:{};var n=nc(i);return n.ext?n:{number:i}}function Ac(t,e,r){var i={country:t,phone:e};return r&&(i.ext=r),i}function Pc(t,e,r,i){var n=_n(Pn(t),void 0,e,r,i.metadata),o=n.countryCallingCodeSource,s=n.countryCallingCode,a=n.number,d;if(s)i.selectNumberingPlan(s);else if(a&&(e||r))i.selectNumberingPlan(e,r),e&&(d=e),s=r||Ht(e,i.metadata);else return{};if(!a)return{countryCallingCodeSource:o,countryCallingCode:s};var c=Dr(Pn(a),d,i),u=c.nationalNumber,h=c.carrierCode,m=vn(s,{nationalNumber:u,metadata:i});return m&&(d=m,m==="001"||i.selectNumberingPlan(d)),{country:d,countryCallingCode:s,countryCallingCodeSource:o,nationalNumber:u,carrierCode:h}}function ft(t){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ft(t)}function Nn(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function In(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Nn(Object(r),!0).forEach(function(i){Tc(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Nn(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Tc(t,e,r){return(e=Rc(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Rc(t){var e=Dc(t,"string");return ft(e)=="symbol"?e:e+""}function Dc(t,e){if(ft(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(ft(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Nc(t,e,r){return Sc(t,In(In({},e),{},{v2:!0}),r)}function $t(t){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t(t)}function Fn(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function Ic(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Fn(Object(r),!0).forEach(function(i){Fc(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Fn(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Fc(t,e,r){return(e=qc(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function qc(t){var e=Lc(t,"string");return $t(e)=="symbol"?e:e+""}function Lc(t,e){if($t(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if($t(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jc(t,e){return Bc(t)||Uc(t,e)||Mc(t,e)||kc()}function kc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mc(t,e){if(t){if(typeof t=="string")return qn(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?qn(t,e):void 0}}function qn(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function Uc(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,n,o,s,a=[],d=!0,c=!1;try{if(o=(r=r.call(t)).next,e!==0)for(;!(d=(i=o.call(r)).done)&&(a.push(i.value),a.length!==e);d=!0);}catch(u){c=!0,n=u}finally{try{if(!d&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw n}}return a}}function Bc(t){if(Array.isArray(t))return t}function Gc(t){var e=Array.prototype.slice.call(t),r=jc(e,4),i=r[0],n=r[1],o=r[2],s=r[3],a,d,c;if(typeof i=="string")a=i;else throw new TypeError("A text for parsing must be a string.");if(!n||typeof n=="string")s?(d=o,c=s):(d=void 0,c=o),n&&(d=Ic({defaultCountry:n},d));else if(Ve(n))o?(d=n,c=o):c=n;else throw new Error("Invalid second argument: ".concat(n));return{text:a,options:d,metadata:c}}function mt(t){"@babel/helpers - typeof";return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mt(t)}function Ln(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function jn(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Ln(Object(r),!0).forEach(function(i){Hc(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ln(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Hc(t,e,r){return(e=Vc(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Vc(t){var e=zc(t,"string");return mt(e)=="symbol"?e:e+""}function zc(t,e){if(mt(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(mt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Wc(t,e,r){e&&e.defaultCountry&&!Jd(e.defaultCountry,r)&&(e=jn(jn({},e),{},{defaultCountry:void 0}));try{return Nc(t,e,r)}catch(i){if(!(i instanceof oe))throw i}}function Kc(){var t=Gc(arguments),e=t.text,r=t.options,i=t.metadata;return Wc(e,r,i)}function Yc(t){return new B(t).getCountries()}function kn(){return Er(Kc,arguments)}function Jc(){return Er(Yc,arguments)}function Xc(){return Er(Ht,arguments)}var Zc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,Ke=(t,e,r,i)=>{for(var n=i>1?void 0:i?Qc(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Zc(e,r,n),n};const eu=typeof Intl<"u"&&"DisplayNames"in Intl?new Intl.DisplayNames(["en"],{type:"region"}):null;function tu(t){return eu?.of(t)||t}const gt=Jc().map(t=>({code:t,name:tu(t),callingCode:Xc(t)})).sort((t,e)=>t.name.localeCompare(e.name)),Mn=new Set(gt.map(t=>t.code)),kr=new Map,ru="US";for(const t of gt)kr.has(t.callingCode)||kr.set(t.callingCode,t.code);function iu(){const e=(Intl.DateTimeFormat().resolvedOptions().locale||"").match(/[-_](\w{2})\b/i)?.[1]?.toUpperCase();return e&&Mn.has(e)?e:""}let he=class extends v{constructor(){super(...arguments),this.selectedCountry="",this.localNumber="",this.showCountryMenu=!1,this.countrySearchQuery="",this.default_country="",this.syncingFromInternal=!1}firstUpdated(){this.hydrateFromValue(String(this.value||"")),this.ensureDefaultCountry()}updated(t){t.has("value")&&!this.syncingFromInternal&&(this.hydrateFromValue(String(this.value||"")),this.ensureDefaultCountry()),t.has("default_country")&&this.ensureDefaultCountry()}handleInput(t){const r=t.target.value.trim();this.localNumber=r.replace(/[^\d]/g,""),this.syncValue(),this.validate(),this.dispatchChange()}toggleCountryMenu(){this.showCountryMenu=!this.showCountryMenu,this.showCountryMenu||(this.countrySearchQuery="")}selectCountry(t){this.selectedCountry=t,this.showCountryMenu=!1,this.countrySearchQuery="",this.syncValue(),this.validate(),this.dispatchChange()}handleCountrySearchInput(t){const e=t.target;this.countrySearchQuery=e.value}resolveConfiguredDefaultCountry(){const t=String(this.default_country||"").trim();if(!t)return"";const e=t.toUpperCase();if(Mn.has(e))return e;const r=t.replace(/^\+/,"").replace(/[^\d]/g,"");return r&&kr.get(r)||""}resolveDefaultCountry(){return this.resolveConfiguredDefaultCountry()||iu()||ru}ensureDefaultCountry(){this.selectedCountry||(this.selectedCountry=this.resolveDefaultCountry())}syncValue(){const t=this.countryCallingCode,e=this.localNumber&&t?`+${t}${this.localNumber}`:"";this.value!==e&&(this.syncingFromInternal=!0,this.value=e,this.syncingFromInternal=!1)}hydrateFromValue(t){const e=kn(t);if(e?.country){this.selectedCountry=e.country,this.localNumber=String(e.nationalNumber||"");return}t?.trim()||(this.localNumber="")}get selectedCountryOption(){return gt.find(t=>t.code===this.selectedCountry)}get countryCallingCode(){return this.selectedCountryOption?.callingCode||""}get filteredCountryOptions(){const t=this.countrySearchQuery.trim().toLowerCase();return t?gt.filter(e=>e.name.toLowerCase().includes(t)||e.code.toLowerCase().includes(t)||e.callingCode.includes(t.replace("+",""))):gt}validate(){const t=String(this.value||"").trim(),e=this.required||!!this.field?.attributes?.required;if(!t||!this.localNumber)return this.isInvalid=e,this.errorMessage=this.isInvalid?"This field is required":"",!this.isInvalid;let r;try{r=kn(t)}catch{r=void 0}const i=!!(r&&r.isValid());return this.isInvalid=!i,this.errorMessage=i?"":`Enter a valid number for +${this.countryCallingCode}`,i}renderInput(){const t=this.selectedCountryOption,e=t?`+${t.callingCode}`:"Select country";return f`
      <div>
        <div class="phone-row">
          <div class="country-picker">
            <button
              type="button"
              class="country-trigger"
              @click=${this.toggleCountryMenu}
            >
              <span class="country-trigger-label">${e}</span>
              <span class="country-trigger-caret">${this.showCountryMenu?"▴":"▾"}</span>
            </button>

            ${this.showCountryMenu?f`
              <div class="country-menu">
                <div class="country-search-wrap">
                  <input
                    class="country-search-input"
                    type="text"
                    placeholder="Search country/code"
                    .value=${this.countrySearchQuery}
                    @input=${this.handleCountrySearchInput}
                  />
                </div>
                <div class="country-list">
                  ${this.filteredCountryOptions.map(r=>f`
                    <button
                      class="country-item ${r.code===this.selectedCountry?"selected":""}"
                      @click=${()=>this.selectCountry(r.code)}
                    >
                      <span>${r.name}</span>
                      <span>+${r.callingCode}</span>
                    </button>
                  `)}
                </div>
              </div>
            `:""}
          </div>

          <input
            type="tel"
            .value=${this.localNumber}
            placeholder=${this.placeholder||"Phone number"}
            ?disabled=${this.disabled}
            ?readonly=${this.read_only}
            @input=${this.handleInput}
          />
        </div>

        <div class="format-description">
          ${t?`Using country code +${t.callingCode}`:"Select a country code"}
        </div>
      </div>
    `}};he.styles=j`
    ${v.styles}

    .phone-row {
      display: grid;
      grid-template-columns: minmax(72px, 1fr) minmax(0, 4fr);
      gap: 10px;
      align-items: center;
    }

    .country-picker {
      position: relative;
      min-width: 0;
      max-width: 100%;
    }

    .country-trigger {
      width: 100%;
      text-align: left;
      padding: 10px 12px;
      border: 1.5px solid var(--qwc-border);
      border-radius: var(--qwc-radius);
      font-size: 14px;
      background: var(--qwc-surface);
      color: var(--qwc-text);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      min-height: 42px;
      font-weight: 600;
    }

    .country-trigger:hover {
      border-color: var(--qwc-primary);
    }

    .country-trigger-label {
      font-variant-numeric: tabular-nums;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .country-trigger-caret {
      color: var(--qwc-text-muted);
      font-size: 11px;
      line-height: 1;
      flex: 0 0 auto;
    }

    .country-menu {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      min-width: 100%;
      max-width: min(320px, 92vw);

      z-index: 50;
      background: var(--qwc-bg);
      border: 1px solid var(--qwc-border);
      border-radius: 10px;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }

    .country-list {
      max-height: 220px;
      overflow-y: auto;
    }

    .country-search-wrap {
      padding: 8px;
      border-bottom: 1px solid var(--qwc-border);
      background: var(--qwc-surface);
    }

    .country-search-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid var(--qwc-border);
      border-radius: 8px;
      font-size: 13px;
      background: var(--qwc-bg);
      color: var(--qwc-text);
      box-sizing: border-box;
      outline: none;
    }

    .country-search-input:focus {
      border-color: var(--qwc-primary);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }

    .country-item {
      width: 100%;
      border: 0;
      background: transparent;
      color: var(--qwc-text);
      text-align: left;
      padding: 10px 12px;
      cursor: pointer;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }

    .country-item:hover {
      background: var(--qwc-surface);
    }

    .country-item.selected {
      color: var(--qwc-primary);
      font-weight: 600;
    }

    .format-description {
      margin-top: 6px;
      font-size: 11px;
      color: var(--qwc-text-muted);
    }

    @media (max-width: 768px) {
      .country-trigger,
      .country-search-input,
      .country-item {
        font-size: 16px;
      }
    }
  `,Ke([O()],he.prototype,"selectedCountry",2),Ke([O()],he.prototype,"localNumber",2),Ke([O()],he.prototype,"showCountryMenu",2),Ke([O()],he.prototype,"countrySearchQuery",2),Ke([$()],he.prototype,"default_country",2),he=Ke([q("shipthis-phone-field")],he);var nu=Object.getOwnPropertyDescriptor,ou=(t,e,r,i)=>{for(var n=i>1?void 0:i?nu(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let Mr=class extends v{render(){return f`<div class="spacer"></div>`}};Mr.styles=j`
    :host {
      display: block;
      min-height: 20px;
    }
  `,Mr=ou([q("shipthis-empty-field")],Mr);var su=Object.getOwnPropertyDescriptor,au=(t,e,r,i)=>{for(var n=i>1?void 0:i?su(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=s(n)||n);return n};let Ur=class extends v{handleInput(t){const e=t.target;this.value=e.value,this.validate(),this.dispatchChange()}renderInput(){const t=this.field?.field_meta?.choices||[],e=this.field?.field_meta?.blank_choice!==!1;return f`
      <select 
        .value=${this.value||""}
        @change=${this.handleInput}
        ?disabled=${this.disabled||this.read_only}
      >
        ${e?f`<option value="">Select an option</option>`:""}
        ${t.map(r=>f`
          <option value=${r.value} ?selected=${this.value===r.value}>
            ${r.display||r.label||r.value}
          </option>
        `)}
      </select>
    `}};Ur.styles=j`
    ${v.styles}
  `,Ur=au([q("shipthis-dropdown-field")],Ur);var du=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,yt=(t,e,r,i)=>{for(var n=i>1?void 0:i?lu(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&du(e,r,n),n};const cu=["January","February","March","April","May","June","July","August","September","October","November","December"],uu=["Su","Mo","Tu","We","Th","Fr","Sa"];let Te=class extends v{constructor(){super(...arguments),this.isOpen=!1,this.viewYear=new Date().getFullYear(),this.viewMonth=new Date().getMonth(),this.popupShift=0}updated(t){super.updated(t),t.has("isOpen")&&this.isOpen&&requestAnimationFrame(()=>this.repositionPopup())}repositionPopup(){const t=this.shadowRoot?.querySelector(".calendar-popup");if(!t)return;const r=t.getBoundingClientRect().right-(window.innerWidth-12);this.popupShift=r>0?r:0}connectedCallback(){if(super.connectedCallback(),this.value){const t=new Date(this.value);isNaN(t.getTime())||(this.viewMonth=t.getMonth(),this.viewYear=t.getFullYear())}}renderInput(){const t=this.formatDate(this.value),e=!!this.value;return f`
      <div class="date-wrapper">
        <div
          class="date-input ${this.isOpen?"open":""} ${this.disabled||this.read_only?"disabled":""}"
          @click=${this.toggleCalendar}
          tabindex="0"
          @keydown=${this.handleKeydown}
        >
          <span class="icon-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </span>
          <span class="date-text ${e?"":"date-placeholder"}">
            ${e?t:"Select a date"}
          </span>
          ${e?f`
            <button class="icon-btn clear" @click=${this.clearDate} title="Clear">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          `:""}
        </div>

        ${this.isOpen?f`
          <div class="cal-backdrop" @click=${this.closeCalendar}></div>
          ${this.renderCalendar()}
        `:""}
      </div>
    `}renderCalendar(){const t=this.getCalendarDays(),e=new Date,r=this.toISODate(e),i=this.value||"";return f`
      <div class="calendar-popup" style=${this.popupShift?`transform: translateX(-${this.popupShift}px)`:""}>
        <div class="cal-header">
          <span class="cal-title">${cu[this.viewMonth]} ${this.viewYear}</span>
          <div class="cal-nav">
            <button @click=${this.prevMonth} title="Previous month">‹</button>
            <button @click=${this.nextMonth} title="Next month">›</button>
          </div>
        </div>

        <div class="cal-dow">
          ${uu.map(n=>f`<span>${n}</span>`)}
        </div>

        <div class="cal-days">
          ${t.map(n=>{const o=this.toISODate(n.date),s=["cal-day",n.other?"other":"",o===r?"today":"",o===i?"selected":""].filter(Boolean).join(" ");return f`
              <button class=${s} @click=${()=>this.selectDate(n.date)}>${n.date.getDate()}</button>
            `})}
        </div>

        <div class="cal-footer">
          <button class="cal-clear" @click=${this.clearAndClose}>Clear</button>
          <button class="cal-today" @click=${this.goToday}>Today</button>
        </div>
      </div>
    `}getCalendarDays(){const e=new Date(this.viewYear,this.viewMonth,1).getDay(),r=[];for(let o=e-1;o>=0;o--){const s=new Date(this.viewYear,this.viewMonth,-o);r.push({date:s,other:!0})}const i=new Date(this.viewYear,this.viewMonth+1,0).getDate();for(let o=1;o<=i;o++)r.push({date:new Date(this.viewYear,this.viewMonth,o),other:!1});const n=42-r.length;for(let o=1;o<=n;o++)r.push({date:new Date(this.viewYear,this.viewMonth+1,o),other:!0});return r}toggleCalendar(t){if(!(this.disabled||this.read_only)&&(t.stopPropagation(),this.isOpen=!this.isOpen,this.popupShift=0,this.isOpen&&this.value)){const e=new Date(this.value);isNaN(e.getTime())||(this.viewMonth=e.getMonth(),this.viewYear=e.getFullYear())}}closeCalendar(){this.isOpen=!1}selectDate(t){this.value=this.toISODate(t),this.isOpen=!1,this.validate(),this.dispatchChange()}clearDate(t){t.stopPropagation(),this.value="",this.validate(),this.dispatchChange()}clearAndClose(){this.value="",this.isOpen=!1,this.validate(),this.dispatchChange()}goToday(){const t=new Date;this.viewMonth=t.getMonth(),this.viewYear=t.getFullYear(),this.selectDate(t)}prevMonth(){this.viewMonth===0?(this.viewMonth=11,this.viewYear--):this.viewMonth--}nextMonth(){this.viewMonth===11?(this.viewMonth=0,this.viewYear++):this.viewMonth++}handleKeydown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.toggleCalendar(t)),t.key==="Escape"&&this.closeCalendar()}toISODate(t){const e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${r}-${i}`}formatDate(t){if(!t)return"";const e=new Date(t+"T00:00:00");return isNaN(e.getTime())?t:e.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}};Te.styles=j`
    ${v.styles}

    .date-wrapper {
      position: relative;
      max-width: 100%;
    }

    /* ---------- trigger input ---------- */
    .date-input {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border: 1.5px solid var(--qwc-border);
      border-radius: var(--qwc-radius);
      font-size: 14px;
      font-family: inherit;
      background: var(--qwc-surface);
      color: var(--qwc-text);
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
      min-height: 20px;
    }

    .date-input:hover { border-color: var(--qwc-primary); background: var(--qwc-bg); }
    .date-input.open,
    .date-input:focus-within {
      border-color: var(--qwc-primary);
      background: var(--qwc-bg);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }
    .date-input.disabled { opacity: .7; cursor: not-allowed; background: var(--qwc-surface); }

    .date-text { flex: 1; }
    .date-placeholder { color: var(--qwc-text-muted); }

    .icon-btn {
      background: none; border: none; padding: 0; cursor: pointer;
      color: var(--qwc-text-muted); display: flex; align-items: center; transition: color 0.15s;
    }
    .icon-btn:hover { color: var(--qwc-text); }
    .icon-btn.clear:hover { color: var(--qwc-error); }

    /* ---------- calendar popup ---------- */
    .calendar-popup {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      z-index: 100;
      width: min(320px, calc(100vw - 24px));
      min-width: min(280px, calc(100vw - 24px));
      max-width: calc(100vw - 24px);
      background: var(--qwc-bg);
      border: 1px solid var(--qwc-border);
      border-radius: var(--qwc-radius);
      box-shadow: 0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
      padding: 16px;
      animation: calendar-in 0.15s ease;
    }

    @keyframes calendar-in {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* header */
    .cal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }

    .cal-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--qwc-text);
    }

    .cal-nav {
      display: flex; gap: 4px;
    }

    .cal-nav button {
      width: 28px; height: 28px;
      display: flex; align-items: center; justify-content: center;
      background: none; border: 1px solid transparent; border-radius: min(6px, var(--qwc-radius));
      color: var(--qwc-text-muted); cursor: pointer; font-size: 14px;
      transition: all 0.1s ease;
    }
    .cal-nav button:hover {
      background: var(--qwc-surface); border-color: var(--qwc-border); color: var(--qwc-text);
    }

    /* day-of-week header */
    .cal-dow {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      margin-bottom: 4px;
    }
    .cal-dow span {
      text-align: center;
      font-size: 11px;
      font-weight: 600;
      color: var(--qwc-text-muted);
      padding: 4px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* day grid */
    .cal-days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
    }

    .cal-day {
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 500;
      border-radius: min(8px, var(--qwc-radius));
      cursor: pointer;
      border: none;
      background: none;
      color: var(--qwc-text);
      transition: all 0.1s ease;
      margin: 0 auto;
    }
    .cal-day:hover { background: var(--qwc-surface); }
    .cal-day.other { color: var(--qwc-text-muted); opacity: 0.5; }
    .cal-day.today {
      border: 1.5px solid var(--qwc-primary);
      color: var(--qwc-primary);
      font-weight: 700;
    }
    .cal-day.selected {
      background: var(--qwc-primary);
      color: #fff;
      font-weight: 700;
    }
    .cal-day.selected:hover {
      background: var(--qwc-primary);
      filter: brightness(1.1);
    }

    /* footer */
    .cal-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px solid var(--qwc-border);
    }

    .cal-footer button {
      background: none; border: none;
      font-size: 13px; font-weight: 500;
      cursor: pointer; padding: 4px 8px; border-radius: min(6px, var(--qwc-radius));
      transition: all 0.1s ease;
    }
    .cal-footer .cal-clear { color: var(--qwc-text-muted); }
    .cal-footer .cal-clear:hover { background: color-mix(in srgb, var(--qwc-error) 10%, transparent); color: var(--qwc-error); }
    .cal-footer .cal-today { color: var(--qwc-primary); }
    .cal-footer .cal-today:hover { background: color-mix(in srgb, var(--qwc-primary) 10%, transparent); }

    /* backdrop overlay to close on outside click */
    .cal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 99;
    }

    @media (max-width: 768px) {
      .date-input {
        font-size: 16px;
      }
    }
  `,yt([O()],Te.prototype,"isOpen",2),yt([O()],Te.prototype,"viewYear",2),yt([O()],Te.prototype,"viewMonth",2),yt([O()],Te.prototype,"popupShift",2),Te=yt([q("shipthis-date-field")],Te);var hu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,Re=(t,e,r,i)=>{for(var n=i>1?void 0:i?pu(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&hu(e,r,n),n};const fu=["January","February","March","April","May","June","July","August","September","October","November","December"],$u=["Su","Mo","Tu","We","Th","Fr","Sa"];let se=class extends v{constructor(){super(...arguments),this.isOpen=!1,this.popupShift=0,this.viewYear=new Date().getFullYear(),this.viewMonth=new Date().getMonth(),this.selectedDate="",this.selectedTime="00:00"}connectedCallback(){super.connectedCallback(),this.parseValue()}updated(t){super.updated(t),t.has("value")&&this.parseValue(),t.has("isOpen")&&this.isOpen&&requestAnimationFrame(()=>this.repositionPopup())}repositionPopup(){const t=this.shadowRoot?.querySelector(".dt-popup");if(!t)return;const r=t.getBoundingClientRect().right-(window.innerWidth-12);this.popupShift=r>0?r:0}parseValue(){if(!this.value){this.selectedDate="",this.selectedTime="00:00";return}let t;typeof this.value=="object"&&this.value.$date?t=new Date(this.value.$date):t=new Date(this.value),!isNaN(t.getTime())&&(this.selectedDate=this.toISODate(t),this.selectedTime=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`,this.viewMonth=t.getMonth(),this.viewYear=t.getFullYear())}renderInput(){const t=this.formatDisplay(),e=!!this.selectedDate;return f`
      <div class="dt-wrapper">
        <div
          class="dt-input ${this.isOpen?"open":""} ${this.disabled||this.read_only?"disabled":""}"
          @click=${this.toggle}
          tabindex="0"
          @keydown=${this.handleKeydown}
        >
          <span class="icon-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
              <circle cx="17" cy="17" r="3"/><line x1="17" y1="15.5" x2="17" y2="17" /><line x1="17" y1="17" x2="18" y2="18"/>
            </svg>
          </span>
          <span class="dt-text ${e?"":"dt-placeholder"}">${e?t:"Select date & time"}</span>
          ${e?f`
            <button class="icon-btn clear" @click=${this.clearValue} title="Clear">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          `:""}
        </div>

        ${this.isOpen?f`
          <div class="cal-backdrop" @click=${this.close}></div>
          ${this.renderPopup()}
        `:""}
      </div>
    `}renderPopup(){const t=this.getCalendarDays(),e=new Date,r=this.toISODate(e);return f`
      <div class="dt-popup" style=${this.popupShift?`transform: translateX(-${this.popupShift}px)`:""}>
        <div class="cal-header">
          <span class="cal-title">${fu[this.viewMonth]} ${this.viewYear}</span>
          <div class="cal-nav">
            <button @click=${this.prevMonth}>‹</button>
            <button @click=${this.nextMonth}>›</button>
          </div>
        </div>

        <div class="cal-dow">${$u.map(i=>f`<span>${i}</span>`)}</div>

        <div class="cal-days">
          ${t.map(i=>{const n=this.toISODate(i.date),o=["cal-day",i.other?"other":"",n===r?"today":"",n===this.selectedDate?"selected":""].filter(Boolean).join(" ");return f`<button class=${o} @click=${()=>this.pickDate(i.date)}>${i.date.getDate()}</button>`})}
        </div>

        <div class="time-section">
          <span class="time-label">Time</span>
          <input
            class="time-input"
            type="time"
            .value=${this.selectedTime}
            @change=${this.onTimeChange}
          />
        </div>

        <div class="cal-footer">
          <button class="cal-clear" @click=${this.clearAndClose}>Clear</button>
          <button class="cal-now" @click=${this.setNow}>Now</button>
        </div>
      </div>
    `}getCalendarDays(){const e=new Date(this.viewYear,this.viewMonth,1).getDay(),r=[];for(let o=e-1;o>=0;o--)r.push({date:new Date(this.viewYear,this.viewMonth,-o),other:!0});const i=new Date(this.viewYear,this.viewMonth+1,0).getDate();for(let o=1;o<=i;o++)r.push({date:new Date(this.viewYear,this.viewMonth,o),other:!1});const n=42-r.length;for(let o=1;o<=n;o++)r.push({date:new Date(this.viewYear,this.viewMonth+1,o),other:!0});return r}toggle(t){if(!(this.disabled||this.read_only)&&(t.stopPropagation(),this.isOpen=!this.isOpen,this.popupShift=0,this.isOpen&&this.selectedDate)){const e=new Date(this.selectedDate);isNaN(e.getTime())||(this.viewMonth=e.getMonth(),this.viewYear=e.getFullYear())}}close(){this.isOpen=!1}pickDate(t){this.selectedDate=this.toISODate(t),this.emitValue()}onTimeChange(t){this.selectedTime=t.target.value||"00:00",this.selectedDate&&this.emitValue()}clearValue(t){t.stopPropagation(),this.selectedDate="",this.selectedTime="00:00",this.value="",this.validate(),this.dispatchChange()}clearAndClose(){this.selectedDate="",this.selectedTime="00:00",this.value="",this.isOpen=!1,this.validate(),this.dispatchChange()}setNow(){const t=new Date;this.selectedDate=this.toISODate(t),this.selectedTime=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`,this.viewMonth=t.getMonth(),this.viewYear=t.getFullYear(),this.emitValue(),this.isOpen=!1}prevMonth(){this.viewMonth===0?(this.viewMonth=11,this.viewYear--):this.viewMonth--}nextMonth(){this.viewMonth===11?(this.viewMonth=0,this.viewYear++):this.viewMonth++}handleKeydown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.toggle(t)),t.key==="Escape"&&this.close()}emitValue(){if(!this.selectedDate)return;const[t,e]=(this.selectedTime||"00:00").split(":").map(Number),r=new Date(this.selectedDate+"T00:00:00");r.setHours(t,e,0,0);const i=r.getTime()-r.getTimezoneOffset()*60*1e3;this.value={$date:i},this.validate(),this.dispatchChange()}toISODate(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}formatDisplay(){if(!this.selectedDate)return"";const t=new Date(this.selectedDate+"T00:00:00");return isNaN(t.getTime())?"":`${t.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}, ${this.selectedTime||"00:00"}`}};se.styles=j`
    ${v.styles}

    .dt-wrapper { position: relative; max-width: 100%; }

    /* ---------- trigger ---------- */
    .dt-input {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 12px;
      border: 1.5px solid var(--qwc-border); border-radius: var(--qwc-radius);
      font-size: 14px; font-family: inherit;
      background: var(--qwc-surface); color: var(--qwc-text);
      cursor: pointer; transition: all 0.2s ease;
      user-select: none; min-height: 20px;
    }
    .dt-input:hover { border-color: var(--qwc-primary); background: var(--qwc-bg); }
    .dt-input.open, .dt-input:focus-within {
      border-color: var(--qwc-primary);
      background: var(--qwc-bg);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }
    .dt-input.disabled { opacity: .7; cursor: not-allowed; background: var(--qwc-surface); }
    .dt-text { flex: 1; }
    .dt-placeholder { color: var(--qwc-text-muted); }

    .icon-btn {
      background: none; border: none; padding: 0; cursor: pointer;
      color: var(--qwc-text-muted); display: flex; align-items: center; transition: color 0.15s;
    }
    .icon-btn:hover { color: var(--qwc-text); }
    .icon-btn.clear:hover { color: var(--qwc-error); }

    /* ---------- popup ---------- */
    .dt-popup {
      position: absolute; top: calc(100% + 6px); left: 0; z-index: 100;
      width: min(340px, calc(100vw - 24px));
      min-width: min(300px, calc(100vw - 24px));
      max-width: calc(100vw - 24px);
      background: var(--qwc-bg);
      border: 1px solid var(--qwc-border); border-radius: var(--qwc-radius);
      box-shadow: 0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
      padding: 16px;
      animation: popup-in 0.15s ease;
    }
    @keyframes popup-in {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* calendar header */
    .cal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .cal-title { font-size: 15px; font-weight: 600; color: var(--qwc-text); }
    .cal-nav { display: flex; gap: 4px; }
    .cal-nav button {
      width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
      background: none; border: 1px solid transparent; border-radius: min(6px, var(--qwc-radius));
      color: var(--qwc-text-muted); cursor: pointer; font-size: 14px; transition: all 0.1s ease;
    }
    .cal-nav button:hover { background: var(--qwc-surface); border-color: var(--qwc-border); color: var(--qwc-text); }

    /* day-of-week */
    .cal-dow { display: grid; grid-template-columns: repeat(7,1fr); gap: 2px; margin-bottom: 4px; }
    .cal-dow span { text-align: center; font-size: 11px; font-weight: 600; color: var(--qwc-text-muted); padding: 4px 0; text-transform: uppercase; letter-spacing: 0.5px; }

    /* day grid */
    .cal-days { display: grid; grid-template-columns: repeat(7,1fr); gap: 2px; }
    .cal-day {
      width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 500; border-radius: min(8px, var(--qwc-radius)); cursor: pointer;
      border: none; background: none; color: var(--qwc-text); transition: all 0.1s ease; margin: 0 auto;
    }
    .cal-day:hover { background: var(--qwc-surface); }
    .cal-day.other { color: var(--qwc-text-muted); opacity: 0.5; }
    .cal-day.today { border: 1.5px solid var(--qwc-primary); color: var(--qwc-primary); font-weight: 700; }
    .cal-day.selected { background: var(--qwc-primary); color: #fff; font-weight: 700; }
    .cal-day.selected:hover { background: var(--qwc-primary); filter: brightness(1.1); }

    /* ---------- time section ---------- */
    .time-section {
      margin-top: 14px; padding-top: 12px;
      border-top: 1px solid var(--qwc-border);
      display: flex; align-items: center; gap: 10px;
    }
    .time-label { font-size: 13px; font-weight: 500; color: var(--qwc-text-muted); white-space: nowrap; }
    .time-input {
      flex: 1; padding: 8px 10px;
      border: 1.5px solid var(--qwc-border); border-radius: var(--qwc-radius);
      font-size: 14px; font-family: inherit;
      background: var(--qwc-surface); color: var(--qwc-text);
      outline: none; transition: all 0.2s ease;
      text-align: center; max-width: 100px;
    }
    .time-input:focus { border-color: var(--qwc-primary); background: var(--qwc-bg); box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent); }

    /* footer */
    .cal-footer { display: flex; justify-content: space-between; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--qwc-border); }
    .cal-footer button {
      background: none; border: none; font-size: 13px; font-weight: 500;
      cursor: pointer; padding: 4px 8px; border-radius: min(6px, var(--qwc-radius)); transition: all 0.1s ease;
    }
    .cal-footer .cal-clear { color: var(--qwc-text-muted); }
    .cal-footer .cal-clear:hover { background: color-mix(in srgb, var(--qwc-error) 10%, transparent); color: var(--qwc-error); }
    .cal-footer .cal-now { color: var(--qwc-primary); }
    .cal-footer .cal-now:hover { background: color-mix(in srgb, var(--qwc-primary) 10%, transparent); }

    .cal-backdrop { position: fixed; inset: 0; z-index: 99; }

    @media (max-width: 768px) {
      .dt-input,
      .time-input {
        font-size: 16px;
      }
    }
  `,Re([O()],se.prototype,"isOpen",2),Re([O()],se.prototype,"popupShift",2),Re([O()],se.prototype,"viewYear",2),Re([O()],se.prototype,"viewMonth",2),Re([O()],se.prototype,"selectedDate",2),Re([O()],se.prototype,"selectedTime",2),se=Re([q("shipthis-datetime-field")],se);var mu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,P=(t,e,r,i)=>{for(var n=i>1?void 0:i?gu(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&mu(e,r,n),n};let A=class extends X{constructor(){super(...arguments),this.field={},this.label="",this.type="",this.value="",this.required=!1,this.options=[],this.placeholder="",this.opData={},this.conditions={},this.global_op_data={},this.collection="",this.operation="Add",this.disabled=!1,this.read_only=!1,this.hint_message="",this.help_text="",this.field_appearance="fill",this.field_class="",this.max_value=null,this.min_value=null,this.hide_label=!1,this.field_width={},this.lines=2,this.fieldId="",this.condition_base_key="",this.hide_title=!1,this.allow_add_button=!0,this.base_currency="",this.prefix_text="",this.default_country=""}get isHidden(){if(this.field?.attributes?.hidden)return!0;const t=this.field?.advanced_attributes;return!t||!t.enable_conditions?!1:t.enable_direct_show_condition&&t.direct_show_condition_name?!Ae.evaluateCondition(t.direct_show_condition_name,t.direct_show_condition_value,this.conditions?.__direct,this.condition_base_key):t.enable_direct_hidden_condition&&t.direct_hidden_condition_name?Ae.evaluateCondition(t.direct_hidden_condition_name,t.direct_hidden_condition_value,this.conditions?.__direct,this.condition_base_key):!1}get isRequired(){let t=this.required||this.field?.attributes?.required;const e=this.field?.advanced_attributes;return!this.required&&e?.enable_conditions&&e?.enable_direct_required_condition&&e?.direct_required_condition_name&&(t=Ae.evaluateCondition(e.direct_required_condition_name,e.direct_required_condition_value,this.conditions?.__direct,this.condition_base_key)),!!t}get isReadOnly(){let t=this.read_only||this.field?.attributes?.read_only;const e=this.field?.advanced_attributes;return e?.enable_conditions&&e?.enable_direct_read_only_condition&&e?.direct_read_only_condition_name&&(t=Ae.evaluateCondition(e.direct_read_only_condition_name,e.direct_read_only_condition_value,this.conditions?.__direct,this.condition_base_key)),!!t}render(){if(this.isHidden)return this.style.display="none",f``;this.style.display="";const t=this.type||this.field?.field_type||"single_line",e=this.isRequired,r=this.isReadOnly;switch(t){case"single_line":return f`<shipthis-text-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r} 
          .hint_message=${this.hint_message} .max_value=${this.max_value} .min_value=${this.min_value}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-text-field>`;case"multi_line":return f`<shipthis-textarea-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r} 
          .hint_message=${this.hint_message} .lines=${this.lines}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-textarea-field>`;case"boolean":case"yes_no":return f`<shipthis-boolean-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} 
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-boolean-field>`;case"number":return f`<shipthis-number-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r} 
          .max_value=${this.max_value} .min_value=${this.min_value}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-number-field>`;case"currency":return f`<shipthis-currency-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r} 
          .base_currency=${this.base_currency} .prefix_text=${this.prefix_text}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-currency-field>`;case"reference":return f`<shipthis-reference-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          .opData=${this.opData} .global_op_data=${this.global_op_data}
          @field-change=${this.handleFieldChange}></shipthis-reference-field>`;case"embed":return f`<shipthis-embed-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} 
          .fieldId=${this.fieldId||this.field?.field_id} .opData=${this.opData}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-embed-field>`;case"list_embed":return f`<shipthis-list-embed-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} 
          .fieldId=${this.fieldId||this.field?.field_id}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-list-embed-field>`;case"drop_down":return f`<shipthis-dropdown-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} 
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-dropdown-field>`;case"date":return f`<shipthis-date-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} 
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-date-field>`;case"location":return f`<shipthis-location-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} 
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-location-field>`;case"date_time":return f`<shipthis-datetime-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} 
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-datetime-field>`;case"phone":return f`<shipthis-phone-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r}
          .default_country=${this.default_country}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-phone-field>`;case"json":return f`<div class="json-field" style="font-family: monospace; font-size: 11px; white-space: pre-wrap; overflow: hidden;">${JSON.stringify(this.value,null,2)}</div>`;case"empty":return f`<shipthis-empty-field
          .fieldWidth=${this.field_width}
        ></shipthis-empty-field>`;default:return f`<shipthis-text-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${e}
          .fieldId=${this.fieldId||this.field?.field_id} .disabled=${this.disabled} .read_only=${r}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-text-field>`}}handleFieldChange(t){t.stopPropagation(),this.value=t.detail.value,this.dispatchEvent(new CustomEvent("field-change",{detail:t.detail,bubbles:!0,composed:!0}))}validate(){const t=this.shadowRoot?.firstElementChild;return t&&typeof t.validate=="function"?t.validate():!0}};P([$({type:Object})],A.prototype,"field",2),P([$()],A.prototype,"label",2),P([$()],A.prototype,"type",2),P([$()],A.prototype,"value",2),P([$({type:Boolean})],A.prototype,"required",2),P([$({type:Array})],A.prototype,"options",2),P([$()],A.prototype,"placeholder",2),P([$({type:Object})],A.prototype,"opData",2),P([$({type:Object})],A.prototype,"conditions",2),P([$({type:Object})],A.prototype,"global_op_data",2),P([$()],A.prototype,"collection",2),P([$()],A.prototype,"operation",2),P([$({type:Boolean})],A.prototype,"disabled",2),P([$({type:Boolean})],A.prototype,"read_only",2),P([$()],A.prototype,"hint_message",2),P([$()],A.prototype,"help_text",2),P([$()],A.prototype,"field_appearance",2),P([$()],A.prototype,"field_class",2),P([$({type:Number})],A.prototype,"max_value",2),P([$({type:Number})],A.prototype,"min_value",2),P([$({type:Boolean})],A.prototype,"hide_label",2),P([$({type:Object})],A.prototype,"field_width",2),P([$({type:Number})],A.prototype,"lines",2),P([$()],A.prototype,"fieldId",2),P([$()],A.prototype,"condition_base_key",2),P([$({type:Boolean})],A.prototype,"hide_title",2),P([$({type:Boolean})],A.prototype,"allow_add_button",2),P([$()],A.prototype,"base_currency",2),P([$()],A.prototype,"prefix_text",2),P([$()],A.prototype,"default_country",2),A=P([q("shipthis-field")],A);var yu=Object.defineProperty,bu=Object.getOwnPropertyDescriptor,pe=(t,e,r,i)=>{for(var n=i>1?void 0:i?bu(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&yu(e,r,n),n};let ee=class extends X{constructor(){super(...arguments),this.metadata=null,this.formData={},this.currentStep=0,this.activeAccordion=[0],this.activeTab=0,this.centerStepRaf=null,this.stepTopRaf=null,this.mobileFocusRaf=null,this.stepperScrollTimeout=null,this.handleViewportChange=()=>{this.cfg?.layout==="stepper"&&this.scheduleCenterActiveStep("auto")},this.fieldValidation={}}get formLayoutUnits(){if(!this.metadata?.meta?.sections)return[];const t=[];return this.metadata.meta.sections.forEach(e=>{e.name!=="Hidden"&&e.cards?.forEach((r,i)=>{r.hidden||t.push({id:`${e.name}-${r.name}-${i}`,name:r.name||e.name,type:"card",data:r})})}),t}async firstUpdated(){this.metadata=await Oe.getMetadata(this.cfg.apiKey,this.cfg.organisationId),this.notifyFormChange(),this.emitStepperState(),this.scheduleCenterActiveStep("auto"),this.schedulePreventMobileAutoFocus()}updated(t){super.updated(t),(t.has("currentStep")||t.has("metadata"))&&this.emitStepperState(),this.cfg?.layout==="stepper"&&((t.has("currentStep")||t.has("metadata"))&&this.scheduleCenterActiveStep(t.has("currentStep")?"smooth":"auto"),t.has("currentStep")&&(t.get("currentStep")!==void 0&&this.scheduleScrollToStepTop(),this.schedulePreventMobileAutoFocus()))}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleViewportChange),window.addEventListener("orientationchange",this.handleViewportChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleViewportChange),window.removeEventListener("orientationchange",this.handleViewportChange),this.centerStepRaf!==null&&(cancelAnimationFrame(this.centerStepRaf),this.centerStepRaf=null),this.stepperScrollTimeout!==null&&(window.clearTimeout(this.stepperScrollTimeout),this.stepperScrollTimeout=null),this.stepTopRaf!==null&&(cancelAnimationFrame(this.stepTopRaf),this.stepTopRaf=null),this.mobileFocusRaf!==null&&(cancelAnimationFrame(this.mobileFocusRaf),this.mobileFocusRaf=null)}scheduleCenterActiveStep(t="smooth"){this.centerStepRaf!==null&&cancelAnimationFrame(this.centerStepRaf),this.centerStepRaf=requestAnimationFrame(()=>{this.centerStepRaf=null,this.centerActiveStep(t)})}centerActiveStep(t="smooth"){const e=this.stepperHeaderEl;if(!e)return;if(this.currentStep===0){const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({left:0,behavior:c?"auto":t});return}const r=e.querySelector(".step-item.active");if(!r)return;const i=e.getBoundingClientRect(),n=r.getBoundingClientRect(),o=e.scrollLeft+(n.left-i.left)-(i.width/2-n.width/2),s=Math.max(0,e.scrollWidth-e.clientWidth),a=Math.min(Math.max(o,0),s),d=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({left:a,behavior:d?"auto":t})}scheduleScrollToStepTop(){this.stepTopRaf!==null&&cancelAnimationFrame(this.stepTopRaf),this.stepTopRaf=requestAnimationFrame(()=>{this.stepTopRaf=null,this.scrollToStepTop()})}scrollToStepTop(){const t=this.cfg?.autoScroll??"mobile";if(t==="off")return;const e=window.matchMedia("(max-width: 768px)").matches;if(t==="mobile"&&!e)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",o=this.shadowRoot?.querySelector(".step-content")??this,s=this.findScrollableParent();if(s){const c=s.getBoundingClientRect(),u=o.getBoundingClientRect(),h=s.scrollTop+(u.top-c.top)-8;s.scrollTo({top:Math.max(0,h),behavior:i});return}const a=o.getBoundingClientRect(),d=window.scrollY+a.top-8;window.scrollTo({top:Math.max(0,d),behavior:i})}findScrollableParent(){let t=this;for(;t;){if(t instanceof HTMLElement&&t!==this){const e=window.getComputedStyle(t);if(/(auto|scroll|overlay)/.test(e.overflowY)&&t.scrollHeight>t.clientHeight+1)return t}if(t.parentNode){t=t.parentNode;continue}if(t instanceof ShadowRoot){t=t.host;continue}t=null}return null}schedulePreventMobileAutoFocus(){this.shouldPreventMobileAutoFocus()&&(this.mobileFocusRaf!==null&&cancelAnimationFrame(this.mobileFocusRaf),this.mobileFocusRaf=requestAnimationFrame(()=>{this.mobileFocusRaf=null,this.preventMobileAutoFocus()}))}shouldPreventMobileAutoFocus(){return window.matchMedia("(max-width: 768px), (pointer: coarse)").matches}preventMobileAutoFocus(){if(!this.shouldPreventMobileAutoFocus())return;const t=this.getDeepActiveElement();!(t instanceof HTMLElement)||!this.isNodeInsideHost(t,this)||!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t.isContentEditable)||t.blur()}getDeepActiveElement(){let t=document.activeElement;for(;t instanceof HTMLElement&&t.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}isNodeInsideHost(t,e){let r=t;for(;r;){if(r===e)return!0;if(r.parentNode){r=r.parentNode;continue}if(r instanceof ShadowRoot){r=r.host;continue}r=null}return!1}setCurrentStep(t,e=!1){const r=this.formLayoutUnits.length;if(r===0)return!1;const i=Math.max(0,Math.min(t,r-1));return i>this.currentStep&&!this.validateCurrentStep()?(e&&this.cfg?.layout==="stepper"&&this.scheduleCenterActiveStep("smooth"),!1):i!==this.currentStep?(this.currentStep=i,!0):(e&&this.cfg?.layout==="stepper"&&this.scheduleCenterActiveStep("smooth"),!1)}goNextStep(){return this.setCurrentStep(this.currentStep+1,!0)}goPreviousStep(){return this.setCurrentStep(this.currentStep-1,!0)}validateCurrentStep(){if(this.cfg?.layout!=="stepper")return this.validateForm();const t=this.shadowRoot?.querySelectorAll(".step-content shipthis-field")||[];let e=!0;return t.forEach(r=>{typeof r.validate=="function"&&!r.validate()&&(e=!1)}),this.notifyFormChange(),e}onStepItemKeydown(t,e,r){if(t.key==="Enter"||t.key===" "){t.preventDefault(),this.setCurrentStep(e);return}if(t.key==="ArrowRight"){t.preventDefault(),this.setCurrentStep(Math.min(e+1,r-1));return}if(t.key==="ArrowLeft"){t.preventDefault(),this.setCurrentStep(Math.max(e-1,0));return}if(t.key==="Home"){t.preventDefault(),this.setCurrentStep(0);return}t.key==="End"&&(t.preventDefault(),this.setCurrentStep(r-1))}onStepperScroll(){this.stepperScrollTimeout!==null&&window.clearTimeout(this.stepperScrollTimeout),this.stepperScrollTimeout=window.setTimeout(()=>{this.stepperScrollTimeout=null,this.settleToNearestStep()},120)}settleToNearestStep(){const t=this.stepperHeaderEl;if(!t)return;const e=Array.from(t.querySelectorAll(".step-item"));if(e.length===0)return;const r=t.scrollLeft+t.clientWidth/2;let i=0,n=Number.POSITIVE_INFINITY;e.forEach((o,s)=>{const a=o.offsetLeft+o.offsetWidth/2,d=Math.abs(a-r);d<n&&(n=d,i=s)}),this.setCurrentStep(i,!0)}emitStepperState(){const t=this.formLayoutUnits.length,e=t>0?Math.min(this.currentStep,t-1):0,r=t>0?e>=t-1:!0;this.dispatchEvent(new CustomEvent("stepper-state-change",{detail:{currentStep:e,totalSteps:t,isLastStep:r},bubbles:!0,composed:!0}))}render(){if(!this.metadata)return f`<slot name="loader"></slot>`;switch(this.cfg?.layout||"fullform"){case"stepper":return this.renderStepper();case"accordion":return this.renderAccordion();case"tabs":return this.renderTabs();default:return this.renderFullForm()}}renderFullForm(){const t=(this.metadata?.meta?.sections||[]).filter(e=>e.name!=="Hidden");return f`
      <div class="form-container">
        ${t.map(e=>f`
          <div class="section">
            <h2 class="section-title">${e.name}</h2>
            <div class="cards-container">
              ${e.cards?.filter(r=>!r.hidden).map(r=>this.renderCard(r))}
            </div>
          </div>
        `)}
      </div>
    `}renderStepper(){const t=this.formLayoutUnits,e=t.length;if(e===0)return f`<div class="stepper-container"></div>`;const r=this.cfg?.stepperSubmitLastOnly===!0,i=Math.min(this.currentStep,e-1),n=t[i];return f`
      <div class="stepper-container">
        <div class="stepper-header" @scroll=${this.onStepperScroll}>
          ${t.map((o,s)=>f`
            <button
              type="button"
              class="step-item ${s===i?"active":""} ${s<i?"completed":""}"
              @click=${()=>this.setCurrentStep(s)}
              @keydown=${a=>this.onStepItemKeydown(a,s,e)}
              aria-current=${s===i?"step":"false"}
              aria-label=${`Step ${s+1}: ${o.name}`}
            >
              <div class="step-circle">
                ${s<i?f`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:s+1}
              </div>
              <span class="step-label">${o.name}</span>
            </button>
          `)}
        </div>

        <div class="step-content" .key=${i}>
          ${this.renderCard(n.data)}
        </div>

        ${r?null:f`
          <div class="step-nav">
            ${i>0?f`
              <button class="step-btn step-btn-back" @click=${()=>this.setCurrentStep(i-1)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                Back
              </button>
            `:f`<div></div>`}
            <span class="step-progress-text">${i+1} / ${e}</span>
            ${i<e-1?f`
              <button class="step-btn step-btn-next" @click=${()=>this.setCurrentStep(i+1)}>
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            `:f`<div></div>`}
          </div>
        `}
      </div>
    `}renderAccordion(){const t=this.formLayoutUnits;return f`
      <div class="accordion-container">
        ${t.map((e,r)=>{const i=this.activeAccordion.includes(r);return f`
            <div class="accordion-item ${i?"open":""}">
              <div class="accordion-header" @click=${()=>this.toggleAccordion(r)}>
                <div class="accordion-title">
                  <span style="color:#94a3b8; font-size:13px; min-width:20px;">${r+1}.</span>
                  ${e.name}
                </div>
                <svg class="accordion-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="accordion-content">
                ${this.renderCard(e.data)}
              </div>
            </div>
          `})}
      </div>
    `}renderTabs(){const t=this.formLayoutUnits,e=t[this.activeTab];return f`
      <div class="tabs-container">
        <div class="tabs-header">
          ${t.map((r,i)=>f`
            <div class="tab-item ${this.activeTab===i?"active":""}" @click=${()=>this.activeTab=i}>
              ${r.name}
            </div>
          `)}
        </div>
        <div class="tab-content" .key=${this.activeTab}>
          ${this.renderCard(e.data)}
        </div>
      </div>
    `}toggleAccordion(t){this.activeAccordion.includes(t)?this.activeAccordion=this.activeAccordion.filter(e=>e!==t):this.activeAccordion=[...this.activeAccordion,t]}renderCard(t){return t?f`
      <shipthis-quote-card style="display: block; margin-bottom: 12px;">
        <h3 class="card-title">${t.name}</h3>
        <div class="fields-grid">
          ${t.fields?.filter(e=>!e.attributes?.hidden).map(e=>this.renderField(e))}
        </div>
      </shipthis-quote-card>
    `:f``}normalizeFieldText(t){return String(t??"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}compactFieldText(t){return this.normalizeFieldText(t).replace(/\s+/g,"")}isMandatoryContactField(t){const e=this.normalizeFieldText(t?.field_type||t?.type),r=this.compactFieldText(t?.label),i=this.compactFieldText(t?.field_id),n=`${r} ${i}`,o=e==="email"||n.includes("email"),s=n.includes("company"),a=e==="phone"||/(phone|mobile|telephone|contactnumber|tel)/.test(n),d=/(countrycode|dialcode|isdcode|countryprefix|dialprefix)/.test(n);return/^(name|fullname|clientname|contactname|customername)$/.test(r)||/^(name|fullname|clientname|contactname|customername)$/.test(i)||o||s||a||d}isFieldRequired(t){return!!(t?.required||t?.attributes?.required||this.isMandatoryContactField(t))}isFieldRequiredForValidation(t){let e=this.isFieldRequired(t);const r=t?.advanced_attributes;return!e&&r?.enable_conditions&&r?.enable_direct_required_condition&&r?.direct_required_condition_name&&(e=Ae.evaluateCondition(r.direct_required_condition_name,r.direct_required_condition_value,this.formData)),!!e}getRenderableFields(){const t=[];return this.metadata?.meta?.sections?.forEach(e=>{e?.name!=="Hidden"&&e?.cards?.forEach(r=>{r?.hidden||r?.fields?.forEach(i=>t.push(i))})}),t}hasFieldValue(t){return t==null?!1:typeof t=="string"?t.trim().length>0:Array.isArray(t)?t.length>0:typeof t=="object"?Object.keys(t).length>0:!0}renderField(t){const r=`width: calc(${t.field_meta?.field_width?.width||100}% - 16px); min-width: min(250px, 100%); max-width: 100%; flex-grow: 1;`;return t.attributes?.hidden?f``:f`
      <shipthis-field
        style=${r} .field=${t} .label=${t.label} .type=${t.field_type||t.type}
        .required=${this.isFieldRequired(t)} .placeholder=${t.placeholder||""} .hint_message=${t.hint_message||""}
        .hide_label=${t.attributes?.hide_label||!1} .read_only=${t.attributes?.read_only||!1}
        .disabled=${t.attributes?.disabled||!1} .max_value=${t.attributes?.max_value}
        .min_value=${t.attributes?.min_value} .lines=${t.attributes?.lines||2}
        .value=${this.formData[t.field_id]||""} .fieldId=${t.field_id}
        .default_country=${this.cfg?.phoneDefaultCountry||""}
        .opData=${this.formData} .conditions=${{__direct:this.formData}}
        @field-change=${i=>this.handleFieldChange(t.field_id,i.detail.value,i.detail)}
      ></shipthis-field>
    `}handleFieldChange(t,e,r){this.formData={...this.formData,[t]:e},this.fieldValidation[t]=r.isInvalid===!0,this.notifyFormChange()}notifyFormChange(){this.dispatchEvent(new CustomEvent("form-change",{detail:{formData:this.formData,isValid:this.isFormValid()},bubbles:!0,composed:!0}))}isFormValid(){const t=this.getRenderableFields();return t.length===0||t.some(r=>!r?.field_id||this.isFieldHidden(r)?!1:this.fieldValidation[r.field_id]===!0)?!1:t.every(r=>!r?.field_id||this.isFieldHidden(r)||!this.isFieldRequiredForValidation(r)?!0:this.hasFieldValue(this.formData[r.field_id]))}isFieldHidden(t){if(t.attributes?.hidden)return!0;const e=t?.advanced_attributes;return!e||!e.enable_conditions?!1:e.enable_direct_show_condition&&e.direct_show_condition_name?!Ae.evaluateCondition(e.direct_show_condition_name,e.direct_show_condition_value,this.formData):e.enable_direct_hidden_condition&&e.direct_hidden_condition_name?Ae.evaluateCondition(e.direct_hidden_condition_name,e.direct_hidden_condition_value,this.formData):!1}validateForm(){const t=this.shadowRoot?.querySelectorAll("shipthis-field")||[];let e=!0;return t.forEach(r=>{typeof r.validate=="function"&&!r.validate()&&(e=!1)}),e}resetForm(){this.formData={},this.fieldValidation={},this.currentStep=0,this.activeAccordion=[0],this.activeTab=0,this.requestUpdate(),this.notifyFormChange()}};ee.styles=j`
    :host {
      display: block;
    }

    /* ================================================
     * SHARED
     * ============================================= */
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .section-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
      color: var(--qwc-primary);
    }

    .card-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 12px;
      color: var(--qwc-card-title, var(--qwc-text));
    }

    .fields-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .fields-grid > * {
      min-width: 0;
      max-width: 100%;
    }

    /* ================================================
     * STEPPER
     * ============================================= */
    .stepper-container {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .stepper-header {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 8px 12px 28px;
      position: relative;
      overflow-x: auto;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      touch-action: pan-x;
      overscroll-behavior-x: contain;
      scroll-snap-type: x proximity;
    }
    .stepper-header::-webkit-scrollbar { display: none; }

    .step-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      min-width: 80px;
      position: relative;
      cursor: pointer;
      z-index: 1;
      scroll-snap-align: center;
      border: none;
      background: transparent;
      padding: 0;
      appearance: none;
      -webkit-appearance: none;
    }

    .step-item:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 18px;
      left: calc(50% + 18px);
      width: calc(100% - 36px);
      height: 2px;
      background: var(--qwc-border);
      z-index: 0;
      transition: background 0.3s ease;
    }

    .step-item.completed:not(:last-child)::after {
      background: var(--qwc-primary);
    }

    .step-circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      border: 2px solid var(--qwc-border);
      background: var(--qwc-bg);
      color: var(--qwc-text-muted);
      transition: all 0.25s ease;
      position: relative;
      z-index: 2;
    }

    .step-item.active .step-circle {
      background: var(--qwc-primary);
      border-color: var(--qwc-primary);
      color: #fff;
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--qwc-primary) 15%, transparent);
    }

    .step-item.completed .step-circle {
      background: var(--qwc-primary);
      border-color: var(--qwc-primary);
      color: #fff;
    }

    .step-label {
      margin-top: 8px;
      font-size: 11px;
      font-weight: 600;
      color: var(--qwc-step-label, var(--qwc-text-muted));
      text-align: center;
      max-width: 90px;
      word-wrap: break-word;
      line-height: 1.2;
      transition: color 0.25s ease;
    }

    .step-item.active .step-label {
      color: var(--qwc-step-label-active, var(--qwc-primary));
    }

    .step-item:focus-visible .step-circle {
      outline: 2px solid var(--qwc-primary);
      outline-offset: 3px;
    }

    .step-content {
      padding: 4px 0 0;
      animation: step-fade 0.25s ease;
    }

    @keyframes step-fade {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .step-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0 0;
      margin-top: 16px;
      border-top: 1px solid var(--qwc-border);
    }

    .step-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 20px;
      border-radius: var(--qwc-radius);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
      font-family: inherit;
    }

    .step-btn-back { background: var(--qwc-btn-clear-bg); border: 1.5px solid var(--qwc-btn-clear-border); color: var(--qwc-btn-clear-text); }
    .step-btn-back:hover { background: var(--qwc-surface); border-color: var(--qwc-primary); }
    .step-btn-next { background: var(--qwc-btn-submit-bg); border: none; color: var(--qwc-btn-submit-text); box-shadow: 0 2px 8px color-mix(in srgb, var(--qwc-btn-submit-bg) 30%, transparent); }
    .step-btn-next:hover { transform: translateY(-1px); filter: brightness(1.05); }

    .step-progress-text { font-size: 13px; color: var(--qwc-text-muted); font-weight: 500; }

    @media (max-width: 768px) {
      .stepper-header {
        justify-content: flex-start;
        padding-left: 12px;
        padding-right: 12px;
      }

      .step-item {
        flex: 0 0 96px;
        min-width: 96px;
      }

      .step-label {
        max-width: 80px;
      }
    }

    @media (max-width: 560px) {
      .fields-grid {
        gap: 12px;
      }

      .step-nav {
        gap: 10px;
        flex-wrap: wrap;
      }

      .step-progress-text {
        width: 100%;
        text-align: center;
        order: 3;
      }

      .step-btn {
        flex: 1 1 0;
        justify-content: center;
      }
    }

    /* ================================================
     * ACCORDION
     * ============================================= */
    .accordion-container { display: flex; flex-direction: column; gap: 8px; }
    .accordion-item { border: 1px solid var(--qwc-border); border-radius: var(--qwc-radius); overflow: hidden; background: var(--qwc-bg); transition: all 0.2s ease; }
    .accordion-item.open { border-color: var(--qwc-primary); box-shadow: 0 4px 12px color-mix(in srgb, var(--qwc-primary) 10%, transparent); }
    .accordion-header { padding: 16px 20px; background: var(--qwc-surface); cursor: pointer; display: flex; align-items: center; justify-content: space-between; user-select: none; }
    .accordion-item.open .accordion-header { background: var(--qwc-bg); border-bottom: 1px solid var(--qwc-border); }
    .accordion-title { font-size: 15px; font-weight: 600; color: var(--qwc-text); display: flex; align-items: center; gap: 10px; }
    .accordion-item.open .accordion-title { color: var(--qwc-primary); }
    .accordion-icon { transition: transform 0.3s ease; color: var(--qwc-text-muted); }
    .accordion-item.open .accordion-icon { transform: rotate(180deg); color: var(--qwc-primary); }
    .accordion-content { padding: 20px; display: none; }
    .accordion-item.open .accordion-content { display: block; animation: slide-down 0.3s ease-out; }
    @keyframes slide-down { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

    /* ================================================
     * TABS
     * ============================================= */
    .tabs-header { 
      display: flex; 
      gap: 12px; 
      border-bottom: 1px solid var(--qwc-border); 
      margin-bottom: 24px; 
      overflow-x: auto; 
      scrollbar-width: none;
      padding: 4px 0;
    }
    .tabs-header::-webkit-scrollbar { display: none; }
    
    .tab-item { 
      padding: 10px 18px; 
      font-size: 14px; 
      font-weight: 600; 
      color: var(--qwc-text-muted); 
      cursor: pointer; 
      position: relative; 
      white-space: nowrap; 
      border-radius: var(--qwc-radius);
      transition: all 0.2s ease;
    }
    .tab-item:hover {
      background: var(--qwc-surface);
      color: var(--qwc-text);
    }
    .tab-item.active { 
      color: var(--qwc-primary); 
      background: color-mix(in srgb, var(--qwc-primary) 8%, transparent);
    }
    .tab-item.active::after { 
      content: ''; 
      position: absolute; 
      bottom: -4px; 
      left: 15%; 
      width: 70%; 
      height: 3px; 
      background: var(--qwc-primary); 
      border-radius: 2px;
    }
    .tab-content { animation: tab-fade 0.3s ease; }
    @keyframes tab-fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  `,pe([$({attribute:!1})],ee.prototype,"cfg",2),pe([O()],ee.prototype,"metadata",2),pe([$({attribute:!1})],ee.prototype,"formData",2),pe([O()],ee.prototype,"currentStep",2),pe([O()],ee.prototype,"activeAccordion",2),pe([O()],ee.prototype,"activeTab",2),pe([di(".stepper-header")],ee.prototype,"stepperHeaderEl",2),ee=pe([q("shipthis-quote-form")],ee);class Un{static init(e){this.config=e}static get(){return this.config}}var vu=Object.defineProperty,_u=Object.getOwnPropertyDescriptor,E=(t,e,r,i)=>{for(var n=i>1?void 0:i?_u(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&vu(e,r,n),n};let _=class extends X{constructor(){super(...arguments),this.organisationId="",this.apiKey="",this.captchaKey="",this.collection="third_party_quotation",this.title="Get a Quote",this.description="",this.redirectUrl="",this.locale="en",this.layout="fullform",this.showHeader=!0,this.showFooter=!0,this.submitButtonText=null,this.clearButtonText=null,this.showClearButton=!0,this.stepperSubmitLastOnly=!1,this.nextButtonText=null,this.phoneDefaultCountry=null,this.fieldLabelColor=null,this.stepLabelColor=null,this.stepLabelActiveColor=null,this.cardTitleColor=null,this.debug=!1,this.trackEvents=!0,this.successMessage=null,this.toastPosition="top-right",this.toastOffsetX="16px",this.toastOffsetY="16px",this.toastZIndex="2147483000",this.toastMaxWidth="360px",this.autoScroll="mobile",this.theme={},this.isLoading=!0,this.isFormValid=!1,this.toasts=[],this.toastCounter=0,this.isSubmitting=!1,this.isSubmitted=!1,this.isConfigValid=!0,this.initError=null,this.stepperState={currentStep:0,totalSteps:0,isLastStep:!1}}get cfg(){return Un.get()}connectedCallback(){super.connectedCallback(),this.syncConfig(),this.updateThemeVariables()}willUpdate(t){super.willUpdate?.(t),this.syncConfig(),(t.has("theme")||t.has("toastOffsetX")||t.has("toastOffsetY")||t.has("toastZIndex")||t.has("toastMaxWidth")||t.has("fieldLabelColor")||t.has("stepLabelColor")||t.has("stepLabelActiveColor")||t.has("cardTitleColor"))&&this.updateThemeVariables()}syncConfig(){Un.init({organisationId:this.organisationId,apiKey:this.apiKey,captchaKey:this.captchaKey,collection:this.collection,theme:this.theme,layout:this.layout,showHeader:this.showHeader,showFooter:this.showFooter,redirectUrl:this.redirectUrl,locale:this.locale,description:this.description,title:this.title,debug:this.debug,trackEvents:this.trackEvents,submitButtonText:this.submitButtonText,clearButtonText:this.clearButtonText,showClearButton:this.showClearButton,stepperSubmitLastOnly:this.stepperSubmitLastOnly,nextButtonText:this.nextButtonText,phoneDefaultCountry:this.phoneDefaultCountry,fieldLabelColor:this.fieldLabelColor,stepLabelColor:this.stepLabelColor,stepLabelActiveColor:this.stepLabelActiveColor,cardTitleColor:this.cardTitleColor,successMessage:this.successMessage,toastPosition:this.toastPosition,toastOffsetX:this.toastOffsetX,toastOffsetY:this.toastOffsetY,toastZIndex:this.toastZIndex,toastMaxWidth:this.toastMaxWidth,autoScroll:this.autoScroll})}async firstUpdated(){this.initialize()}async initialize(){const t=this.cfg;if(!t?.apiKey||!t?.organisationId){this.isConfigValid=!1,this.isLoading=!1;return}try{const e=await Oe.init({apiKey:t.apiKey,organisationId:t.organisationId,collection:t.collection,userType:"employee"});if(e&&e.success===!1)throw new Error(e.errors?.[0]?.message||"Initialization failed");this.isConfigValid=!0,this.initError=null}catch(e){console.error("ShipthisQuoteForm: Initialization failed",e),this.isConfigValid=!1,this.initError=e?.message||"Failed to connect to Shipthis API"}finally{this.isLoading=!1,this.updateThemeVariables()}}updateThemeVariables(){const t=this.cfg?.theme??{},e=t.mode??"light",r=t[e]??{},i=(o,s)=>{const a=o.split(".");let d=r;for(const c of a){if(d[c]===void 0)return s;d=d[c]}return d},n={"--qwc-primary":r.primary??"#0661FC","--qwc-secondary":r.secondary??r.primary??"#094fb5","--qwc-accent":r.accent??"#FFB200","--qwc-bg":r.background??(e==="light"?"#ffffff":"#0f172a"),"--qwc-surface":r.surface??(e==="light"?"#f8fafc":"#1e293b"),"--qwc-text":r.text??(e==="light"?"#1e293b":"#f8fafc"),"--qwc-text-muted":r.textMuted??(e==="light"?"#64748b":"#94a3b8"),"--qwc-border":r.border??(e==="light"?"#e2e8f0":"#334155"),"--qwc-radius":t.radius??"12px","--qwc-error":r.error??"#ef4444","--qwc-success":r.success??"#22c55e","--qwc-btn-submit-bg":i("submitButton.background",r.primary??"#0661FC"),"--qwc-btn-submit-text":i("submitButton.text","#ffffff"),"--qwc-btn-clear-bg":i("clearButton.background","transparent"),"--qwc-btn-clear-text":i("clearButton.text",e==="light"?"#64748b":"#94a3b8"),"--qwc-btn-clear-border":i("clearButton.border",e==="light"?"#e2e8f0":"#334155"),"--qwc-field-label":this.cfg?.fieldLabelColor||i("labels.field",r.textMuted??(e==="light"?"#64748b":"#94a3b8")),"--qwc-step-label":this.cfg?.stepLabelColor||i("labels.stepper",r.textMuted??(e==="light"?"#64748b":"#94a3b8")),"--qwc-step-label-active":this.cfg?.stepLabelActiveColor||i("labels.stepperActive",r.primary??"#0661FC"),"--qwc-card-title":this.cfg?.cardTitleColor||i("labels.card",r.text??(e==="light"?"#1e293b":"#f8fafc")),"--qwc-toast-offset-x":this.toCssLength(this.cfg?.toastOffsetX,"16px"),"--qwc-toast-offset-y":this.toCssLength(this.cfg?.toastOffsetY,"16px"),"--qwc-toast-z-index":this.toCssZIndex(this.cfg?.toastZIndex,"2147483000"),"--qwc-toast-max-width":this.toCssLength(this.cfg?.toastMaxWidth,"360px")};Object.entries(n).forEach(([o,s])=>{this.style.setProperty(o,s)})}get toastPositionClass(){const t=["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"],e=this.cfg?.toastPosition||"top-right";return t.includes(e)?`toast-${e}`:"toast-top-right"}toCssLength(t,e){if(t==null||t==="")return e;if(typeof t=="number")return`${t}px`;const r=String(t).trim();return r?/^-?\d+(\.\d+)?$/.test(r)?`${r}px`:r:e}toCssZIndex(t,e){if(t==null||t==="")return e;const r=Number(t);return Number.isFinite(r)?String(Math.round(r)):e}handleFormChange(t){this.isFormValid=t.detail.isValid}handleRequestSubmit(){this.handleSubmit()}handleStepperStateChange(t){this.stepperState=t.detail||{currentStep:0,totalSteps:0,isLastStep:!0}}handleFooterPrimaryAction(){if(this.cfg?.layout==="stepper"&&this.cfg?.stepperSubmitLastOnly==!0&&!this.stepperState.isLastStep){this._formEl?.goNextStep?.();return}this.handleSubmit()}showToast(t,e="error"){const r=++this.toastCounter;this.toasts=[...this.toasts,{id:r,message:t,type:e}],setTimeout(()=>{this.toasts=this.toasts.filter(i=>i.id!==r)},4e3)}async handleSubmit(){if(!this.isFormValid){this.showToast("Please fill in all required fields before submitting.","error");return}const t=this._formEl?.formData??{},e=this.cfg?.collection||"third_party_quotation";this.isSubmitting=!0;try{await Oe.createCollectionItem(e,t);const r=this.cfg?.successMessage||"Your request has been submitted successfully! We will get back to you shortly.";this.showToast(r,"success"),this.isSubmitted=!0,this.dispatchEvent(new CustomEvent("quote-submit",{detail:{formData:t},bubbles:!0,composed:!0})),setTimeout(()=>{this.cfg?.redirectUrl?window.location.href=this.cfg.redirectUrl:window.location.reload()},2e3),this.handleClear()}catch(r){const i=r?.message||"Something went wrong. Please try again.";this.showToast(`Submission failed: ${i}`,"error")}finally{this.isSubmitting=!1}}handleClear(){this._formEl&&typeof this._formEl.resetForm=="function"&&this._formEl.resetForm(),this.isFormValid=!1,this.dispatchEvent(new CustomEvent("quote-clear",{bubbles:!0,composed:!0}))}renderLoader(){return f`
      <slot name="loader">
        <div class="loader-container">
          <div class="mesh-background"></div>
          <div style="position: relative; z-index: 1;">
            <div class="skeleton-header">
              <div class="skeleton-title shimmer"></div>
              <div class="skeleton-text shimmer"></div>
            </div>
            <div class="skeleton-body">
              <div class="skeleton-input shimmer"></div>
              <div class="skeleton-input shimmer"></div>
              <div class="skeleton-input shimmer"></div>
              <div class="skeleton-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <div class="skeleton-input shimmer"></div>
                <div class="skeleton-input shimmer"></div>
              </div>
            </div>
            <div class="loader-footer">
              <div class="skeleton-button shimmer"></div>
            </div>
          </div>
        </div>
      </slot>
    `}renderSuccess(){return f`
      <shipthis-quote-card>
        <div class="success-container">
          <div class="success-icon">✅</div>
          <p>${this.cfg?.successMessage||"Your request has been submitted successfully! We will get back to you shortly."}</p>
        </div>
      </shipthis-quote-card>
    `}render(){if(this.isLoading)return this.renderLoader();if(this.isSubmitted)return this.renderSuccess();const t=this.cfg?.layout==="stepper"&&this.cfg?.stepperSubmitLastOnly===!0,e=t&&(this.stepperState.totalSteps===0||!this.stepperState.isLastStep),r=e?this.cfg?.nextButtonText||"Next":t?this.cfg?.submitButtonText||(this.isSubmitting?"Submitting...":"Get My Quote"):this.cfg?.submitButtonText||(this.isSubmitting?"Submitting...":"Submit Request");return f`
      <shipthis-quote-card>
        ${this.isConfigValid?f`
          ${this.cfg.showHeader?f`
            <shipthis-quote-header>
              <slot name="header">
                <h3>${this.cfg.title}</h3>
                <p>${this.cfg.description}</p>
              </slot>
            </shipthis-quote-header>
          `:null}

          <div>
           <shipthis-quote-form
             .cfg=${this.cfg}
             @form-change=${this.handleFormChange}
             @request-submit=${this.handleRequestSubmit}
             @stepper-state-change=${this.handleStepperStateChange}
           ></shipthis-quote-form>
          </div>

          <div class="form-footer">
            ${this.cfg.showClearButton!==!1&&!t?f`
              <button class="btn-clear" @click=${this.handleClear}>
                ${this.cfg.clearButtonText||"Clear"}
              </button>
            `:null}
            <button class="btn-submit" @click=${this.handleFooterPrimaryAction} ?disabled=${e?!1:this.isSubmitting}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              ${r}
            </button>
          </div>

          ${this.cfg.showFooter?f`
            <shipthis-quote-footer>
              <slot name="footer">
                <div class="powered-by">
                  Powered by <a href="https://shipthis.co" target="_blank">Shipthis</a>
                </div>
              </slot>
            </shipthis-quote-footer>
          `:null}
        `:this.renderConfigError()}

        <div class="toast-container ${this.toastPositionClass}">
          ${this.toasts.map(i=>f`
            <div class="toast toast-${i.type}">
              <span class="toast-icon">${i.type==="success"?"✅":"⚠️"}</span>
              <span>${i.message}</span>
            </div>
          `)}
        </div>
      </shipthis-quote-card>
    `}renderConfigError(){return f`
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 80px 40px;
        text-align: center;
        background: var(--qwc-bg);
        border-radius: var(--qwc-radius);
      ">
        <h2 style="
          font-size: 20px;
          font-weight: 600;
          color: var(--qwc-primary);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        ">
          System Notice
        </h2>
        
        <p style="
          color: var(--qwc-text);
          line-height: 1.6;
          font-size: 16px;
          max-width: 480px;
          margin: 0 auto 40px;
          font-weight: 400;
        ">
          ${this.initError?f`The quotation module encountered a connection error. Please verify your network and credentials.`:f`The quotation module requires valid configuration parameters to initialize. Please ensure all required identity attributes are provided.`}
        </p>

        <div style="
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          width: 100%;
          max-width: 400px;
          background: var(--qwc-border);
          border: 1px solid var(--qwc-border);
          border-radius: 4px;
          overflow: hidden;
        ">
          <div style="display: flex; justify-content: space-between; padding: 12px 16px; background: var(--qwc-surface);">
            <span style="font-size: 12px; font-weight: 500; color: var(--qwc-text-muted);">PARAMETER</span>
            <span style="font-size: 12px; font-weight: 500; color: var(--qwc-text-muted);">STATUS</span>
          </div>
          
          <div style="display: flex; justify-content: space-between; padding: 14px 16px; background: var(--qwc-bg);">
            <span style="font-size: 13px; font-family: monospace; color: var(--qwc-text);">organisation-id</span>
            <span style="font-size: 11px; font-weight: 600; color: ${this.organisationId?"var(--qwc-success)":"var(--qwc-error)"};">
              ${this.organisationId?"CONFIGURED":"REQUIRED"}
            </span>
          </div>

          <div style="display: flex; justify-content: space-between; padding: 14px 16px; background: var(--qwc-bg);">
            <span style="font-size: 13px; font-family: monospace; color: var(--qwc-text);">api-key</span>
            <span style="font-size: 11px; font-weight: 600; color: ${this.apiKey?"var(--qwc-success)":"var(--qwc-error)"};">
              ${this.apiKey?"CONFIGURED":"REQUIRED"}
            </span>
          </div>

          <div style="display: flex; justify-content: space-between; padding: 14px 16px; background: var(--qwc-bg);">
            <span style="font-size: 13px; font-family: monospace; color: var(--qwc-text);">api-connection</span>
            <span style="font-size: 11px; font-weight: 600; color: ${this.initError?"var(--qwc-error)":this.isConfigValid?"var(--qwc-success)":"var(--qwc-text-muted)"};">
               ${this.initError?"FAILED":this.isConfigValid?"CONNECTED":"WAITING"}
            </span>
          </div>
        </div>

        ${this.initError?f`
          <div style="margin-top: 16px; font-size: 12px; color: var(--qwc-error); font-family: monospace;">
             Error: ${this.initError}
          </div>
        `:null}

        <div style="margin-top: 48px; font-size: 13px; color: var(--qwc-text-muted);">
          For technical assistance, please refer to the integration documentation.
        </div>
      </div>
    `}};_.styles=j`
    :host {
      display: block;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: var(--qwc-text, #1e293b);
      max-width: 100%;
    }

    shipthis-quote-card {
      position: relative;
    }

    .form-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;
      padding: 20px 32px 28px;
      border-top: 1px solid var(--qwc-border);
    }

    .btn-clear {
      background: var(--qwc-btn-clear-bg);
      border: 1.5px solid var(--qwc-btn-clear-border);
      color: var(--qwc-btn-clear-text);
      padding: 10px 24px;
      border-radius: var(--qwc-radius);
      font-size: 14px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .btn-clear:hover {
      background: var(--qwc-surface);
      border-color: var(--qwc-primary);
      filter: brightness(0.95);
    }

    .btn-submit {
      background: var(--qwc-btn-submit-bg);
      color: var(--qwc-btn-submit-text);
      border: none;
      padding: 10px 28px;
      border-radius: var(--qwc-radius);
      font-size: 14px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 2px 8px color-mix(in srgb, var(--qwc-btn-submit-bg) 40%, transparent);
    }

    .btn-submit:hover:not(:disabled) {
      filter: brightness(1.1);
      box-shadow: 0 4px 14px color-mix(in srgb, var(--qwc-btn-submit-bg) 50%, transparent);
      transform: translateY(-1px);
    }

    .btn-submit:disabled {
      opacity: 0.55;
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
      filter: none;
    }

    /* Toast */
    .toast-container {
      position: fixed;
      z-index: var(--qwc-toast-z-index, 2147483000);
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
      width: fit-content;
      max-width: min(var(--qwc-toast-max-width, 360px), calc(100% - 24px));
    }

    .toast-container.toast-top-right {
      top: calc(env(safe-area-inset-top, 0px) + var(--qwc-toast-offset-y, 16px));
      right: var(--qwc-toast-offset-x, 16px);
      align-items: flex-end;
    }

    .toast-container.toast-top-left {
      top: calc(env(safe-area-inset-top, 0px) + var(--qwc-toast-offset-y, 16px));
      left: var(--qwc-toast-offset-x, 16px);
      align-items: flex-start;
    }

    .toast-container.toast-bottom-right {
      bottom: calc(env(safe-area-inset-bottom, 0px) + var(--qwc-toast-offset-y, 16px));
      right: var(--qwc-toast-offset-x, 16px);
      align-items: flex-end;
    }

    .toast-container.toast-bottom-left {
      bottom: calc(env(safe-area-inset-bottom, 0px) + var(--qwc-toast-offset-y, 16px));
      left: var(--qwc-toast-offset-x, 16px);
      align-items: flex-start;
    }

    .toast-container.toast-top-center {
      top: calc(env(safe-area-inset-top, 0px) + var(--qwc-toast-offset-y, 16px));
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
      width: min(var(--qwc-toast-max-width, 360px), calc(100% - 24px));
    }

    .toast-container.toast-bottom-center {
      bottom: calc(env(safe-area-inset-bottom, 0px) + var(--qwc-toast-offset-y, 16px));
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
      width: min(var(--qwc-toast-max-width, 360px), calc(100% - 24px));
    }

    .toast {
      background: var(--qwc-text);
      color: var(--qwc-bg);
      padding: 14px 20px;
      border-radius: min(10px, var(--qwc-radius));
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.18);
      pointer-events: all;
      animation: toast-in 0.25s ease;
      max-width: min(var(--qwc-toast-max-width, 360px), calc(100% - 4px));
      width: fit-content;
    }

    .toast.toast-error {
      border-left: 4px solid var(--qwc-error);
    }

    .toast.toast-success {
      border-left: 4px solid var(--qwc-success);
    }

    .toast-icon {
      font-size: 18px;
      flex-shrink: 0;
    }

    @keyframes toast-in {
      from { opacity: 0; transform: translateX(40px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    .powered-by {
      text-align: center;
      font-size: 12px;
      color: var(--qwc-text-muted);
      padding: 12px 0 4px;
    }

    .powered-by a {
      color: var(--qwc-primary);
      text-decoration: none;
      font-weight: 500;
    }

    .powered-by a:hover {
      text-decoration: underline;
    }

    .success-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      min-height: 320px;
      padding: 40px 24px;
      text-align: center;
      color: var(--qwc-text);
    }

    .success-icon {
      font-size: 48px;
    }

    .loader-container {
      display: flex;
      flex-direction: column;
      background: var(--qwc-bg);
      border-radius: var(--qwc-radius);
      position: relative;
      overflow: hidden;
      min-height: 480px;
      border: 1px solid var(--qwc-border);
    }

    .mesh-background {
      position: absolute;
      inset: 0;
      opacity: 0.15;
      background: 
        radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--qwc-primary) 5%, transparent) 0%, transparent 50%),
        radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--qwc-accent) 5%, transparent) 0%, transparent 50%);
    }

    .skeleton-header { padding: 48px 32px 32px; z-index: 1; }
    .skeleton-title { width: 180px; height: 28px; background: var(--qwc-surface); border-radius: 4px; margin-bottom: 12px; }
    .skeleton-text { width: 280px; height: 14px; background: var(--qwc-surface); border-radius: 4px; }
    
    .skeleton-body { padding: 0 32px 40px; display: flex; flex-direction: column; gap: 24px; z-index: 1; }
    .skeleton-input { height: 52px; background: var(--qwc-surface); border-radius: 8px; width: 100%; border: 1px solid var(--qwc-border); }
    .skeleton-button { width: 160px; height: 44px; background: var(--qwc-surface); border-radius: var(--qwc-radius); }

    .loader-footer {
      padding: 24px 32px;
      border-top: 1px solid var(--qwc-border);
      display: flex;
      justify-content: flex-end;
      background: color-mix(in srgb, var(--qwc-surface) 30%, transparent);
      z-index: 1;
    }

    .shimmer {
      position: relative;
      overflow: hidden;
    }

    .shimmer::after {
      content: "";
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
      animation: shimmer-load 2s infinite linear;
    }
    
    @keyframes shimmer-load {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    @media (max-width: 640px) {
      .form-footer {
        padding: 14px 14px 18px;
        flex-wrap: wrap;
        gap: 10px;
      }

      .btn-clear,
      .btn-submit {
        width: 100%;
        justify-content: center;
      }
    }
  `,E([$({attribute:"organisation-id"})],_.prototype,"organisationId",2),E([$({attribute:"api-key"})],_.prototype,"apiKey",2),E([$({attribute:"captcha-key"})],_.prototype,"captchaKey",2),E([$()],_.prototype,"collection",2),E([$()],_.prototype,"title",2),E([$()],_.prototype,"description",2),E([$({attribute:"redirect-url"})],_.prototype,"redirectUrl",2),E([$()],_.prototype,"locale",2),E([$()],_.prototype,"layout",2),E([$({attribute:"show-header",converter:t=>t!=="false"&&t!==null})],_.prototype,"showHeader",2),E([$({attribute:"show-footer",converter:t=>t!=="false"&&t!==null})],_.prototype,"showFooter",2),E([$({attribute:"submit-button-text"})],_.prototype,"submitButtonText",2),E([$({attribute:"clear-button-text"})],_.prototype,"clearButtonText",2),E([$({attribute:"show-clear-button",converter:t=>t!=="false"&&t!==null})],_.prototype,"showClearButton",2),E([$({attribute:"stepper-submit-last-only",converter:t=>t!=="false"&&t!==null})],_.prototype,"stepperSubmitLastOnly",2),E([$({attribute:"next-button-text"})],_.prototype,"nextButtonText",2),E([$({attribute:"phone-default-country"})],_.prototype,"phoneDefaultCountry",2),E([$({attribute:"field-label-color"})],_.prototype,"fieldLabelColor",2),E([$({attribute:"step-label-color"})],_.prototype,"stepLabelColor",2),E([$({attribute:"step-label-active-color"})],_.prototype,"stepLabelActiveColor",2),E([$({attribute:"card-title-color"})],_.prototype,"cardTitleColor",2),E([$({type:Boolean})],_.prototype,"debug",2),E([$({attribute:"track-events",type:Boolean})],_.prototype,"trackEvents",2),E([$({attribute:"success-message"})],_.prototype,"successMessage",2),E([$({attribute:"toast-position"})],_.prototype,"toastPosition",2),E([$({attribute:"toast-offset-x"})],_.prototype,"toastOffsetX",2),E([$({attribute:"toast-offset-y"})],_.prototype,"toastOffsetY",2),E([$({attribute:"toast-z-index"})],_.prototype,"toastZIndex",2),E([$({attribute:"toast-max-width"})],_.prototype,"toastMaxWidth",2),E([$({attribute:"auto-scroll"})],_.prototype,"autoScroll",2),E([$({converter:t=>{if(!t)return{};try{return JSON.parse(t)}catch{return{}}}})],_.prototype,"theme",2),E([O()],_.prototype,"isLoading",2),E([O()],_.prototype,"isFormValid",2),E([O()],_.prototype,"toasts",2),E([di("shipthis-quote-form")],_.prototype,"_formEl",2),E([O()],_.prototype,"isSubmitting",2),E([O()],_.prototype,"isSubmitted",2),E([O()],_.prototype,"isConfigValid",2),E([O()],_.prototype,"initError",2),E([O()],_.prototype,"stepperState",2),_=E([q("shipthis-quotation")],_),window.QWC={version:"1.0.0"}})();
