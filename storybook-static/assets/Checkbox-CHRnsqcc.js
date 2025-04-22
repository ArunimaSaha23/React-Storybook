import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as p,R as y}from"./index-D4lIrffr.js";import{d as f,l as k}from"./styled-components.browser.esm-B9kjeC-a.js";import{u as z}from"./ThemeProvider-BjJxl09v.js";const H=f.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.5:1};

  /* Add tabindex styling for keyboard focus */
  &:focus-within {
    outline: none;
  }
`,M=f.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  
  /* Ensure the hidden checkbox can receive focus for screen readers */
  &:focus {
    outline: none;
  }
`,V=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>{switch(e.size){case"small":return"16px";case"large":return"24px";default:return"20px"}}};
  height: ${e=>{switch(e.size){case"small":return"16px";case"large":return"24px";default:return"20px"}}};
  border-radius: 4px;
  border: 2px solid;
  transition: all 150ms ease;

  ${({theme:e,checked:c,disabled:i,error:n,isFocused:u})=>{const r=e.colors;let a=r.text.tertiary;c&&(a=r.text.primary),n&&(a=r.text.error),i&&(a=r.text.disabled),u&&(a=r.text.primary);let l="transparent";return c&&(l=r.text.primary),k`
      border-color: ${a};
      background-color: ${l};
      box-shadow: ${u?`0 0 0 3px ${r.text.tertiary}33`:"none"};
    `}}

  &:hover {
    ${({theme:e,disabled:c})=>!c&&k`
      border-color: ${e.colors.text.secondary};
    `}
  }
`,g=f.svg`
  fill: none;
  stroke: ${({theme:e})=>e.colors.background.primary};
  stroke-width: 3px;
  width: ${e=>{switch(e.size){case"small":return"10px";case"large":return"16px";default:return"12px"}}};
  height: ${e=>{switch(e.size){case"small":return"10px";case"large":return"16px";default:return"12px"}}};
`,L=f.span`
  font-size: ${e=>{switch(e.size){case"small":return"12px";case"large":return"16px";default:return"14px"}}};
  color: ${({theme:e})=>e.colors.text.primary};
`,v=p.forwardRef(({id:e,label:c,checked:i=!1,disabled:n=!1,error:u=!1,size:r="medium",indeterminate:a=!1,onChange:l,name:w,className:$,...C},d)=>{const{theme:h}=z(),t=p.useRef(null),[T,x]=y.useState(!1),E=p.useRef(null);p.useEffect(()=>{t.current&&(t.current.indeterminate=a)},[a]);const j=y.useMemo(()=>d?typeof d=="function"?s=>{t.current=s,d(s)}:Object.assign(t,{current:d.current}):t,[d]),R=s=>{!n&&l&&l(s)},q=s=>{if(!n&&(s.key===" "||s.code==="Space")&&(s.preventDefault(),t.current)){const b=!i,I=new Event("change",{bubbles:!0});t.current.checked=b,t.current.dispatchEvent(I),l&&l({target:{...t.current,checked:b},currentTarget:t.current})}},m=e||`checkbox-${Math.random().toString(36).substring(2,9)}`;return o.jsxs(H,{className:$,disabled:n,ref:E,onClick:()=>{!n&&t.current&&(t.current.focus(),t.current.click())},onKeyDown:q,tabIndex:n?-1:0,role:"checkbox","aria-checked":a?"mixed":i,"aria-disabled":n?"true":"false","data-testid":"checkbox-container",children:[o.jsx(M,{id:m,ref:j,checked:i,disabled:n,onChange:R,name:w,onFocus:()=>x(!0),onBlur:()=>x(!1),"aria-invalid":u?"true":"false",...C}),o.jsxs(V,{checked:i,disabled:n,error:u,size:r,isFocused:T,theme:h,"data-testid":"checkbox-visual",children:[i&&!a&&o.jsx(g,{viewBox:"0 0 24 24",size:r,theme:h,"data-testid":"checkbox-icon-check",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})}),a&&o.jsx(g,{viewBox:"0 0 24 24",size:r,theme:h,"data-testid":"checkbox-icon-indeterminate",children:o.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})]}),c&&o.jsx(L,{size:r,theme:h,"data-testid":"checkbox-label",as:"label",htmlFor:m,children:c})]})});v.displayName="Checkbox";v.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:"The label text to display next to the checkbox"},checked:{required:!1,tsType:{name:"boolean"},description:`Whether the checkbox is checked\r
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the checkbox is disabled\r
@default false`,defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:`Whether the checkbox is in an error state\r
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the checkbox\r
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:`Whether the checkbox is in an indeterminate state\r
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Handler called when the checkbox's checked state changes"},className:{required:!1,tsType:{name:"string"},description:"Additional className to apply to the checkbox container"}},composes:["Omit"]};export{v as C};
