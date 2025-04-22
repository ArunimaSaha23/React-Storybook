import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";import{d as o,l as t,m as g}from"./styled-components.browser.esm-B9kjeC-a.js";const y=g`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,T=g`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,w=e=>{switch(e){case"top-left":return t`
        top: 1rem;
        left: 1rem;
      `;case"top-right":return t`
        top: 1rem;
        right: 1rem;
      `;case"top-center":return t`
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;case"bottom-left":return t`
        bottom: 1rem;
        left: 1rem;
      `;case"bottom-center":return t`
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;case"bottom-right":default:return t`
        bottom: 1rem;
        right: 1rem;
      `}},V=e=>{switch(e){case"success":return t`
        background-color: #10B981;
        color: white;
      `;case"error":return t`
        background-color: #EF4444;
        color: white;
      `;case"warning":return t`
        background-color: #F59E0B;
        color: white;
      `;case"info":default:return t`
        background-color: #3B82F6;
        color: white;
      `}},j=o.div`
  position: fixed;
  min-width: 300px;
  max-width: 400px;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  z-index: 1000;
  
  ${e=>w(e.$position)}
  ${e=>V(e.$variant)}
  
  animation: ${e=>e.$isVisible?y:T} 0.3s ease-in-out forwards;
`,q=o.div`
  flex-shrink: 0;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,$=o.div`
  flex: 1;
`,k=o.h4`
  margin: 0 0 0.25rem;
  font-weight: 600;
  font-size: 1rem;
`,C=o.p`
  margin: 0;
  font-size: 0.875rem;
`,X=o.button`
  background: transparent;
  border: none;
  color: inherit;
  opacity: 0.7;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }
`,E=({variant:e="info",position:b="bottom-right",title:n,message:l,icon:c,autoClose:m=!0,autoCloseTime:u=5e3,onClose:f,isOpen:a=!1})=>{const[d,p]=s.useState(a),[v,i]=s.useState(!1);s.useEffect(()=>{if(a&&(p(!0),i(!0),m)){const x=setTimeout(()=>{h()},u);return()=>clearTimeout(x)}},[a,m,u]);const h=()=>{p(!1),i(!0),setTimeout(()=>{i(!1),f&&f()},300)};return!d&&!v?null:r.jsxs(j,{$position:b,$variant:e,$isVisible:d,role:"alert","aria-live":"assertive",children:[c&&r.jsx(q,{children:c}),r.jsxs($,{children:[n&&r.jsx(k,{children:n}),l&&r.jsx(C,{children:l})]}),r.jsx(X,{onClick:h,"aria-label":"Close notification",children:"×"})]})};E.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`The variant determines the color scheme of the toast\r
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"}]},description:`Where the toast should appear on the screen\r
@default 'bottom-right'`,defaultValue:{value:"'bottom-right'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"The title text of the toast"},message:{required:!1,tsType:{name:"string"},description:"The body message of the toast"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon element to display"},autoClose:{required:!1,tsType:{name:"boolean"},description:`Whether the toast should automatically close after a certain time\r
@default true`,defaultValue:{value:"true",computed:!1}},autoCloseTime:{required:!1,tsType:{name:"number"},description:`Time in milliseconds after which the toast will auto-close\r
@default 5000`,defaultValue:{value:"5000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function when the toast is closed"},isOpen:{required:!1,tsType:{name:"boolean"},description:`Controls the visibility of the toast\r
@default false`,defaultValue:{value:"false",computed:!1}}}};export{E as T};
