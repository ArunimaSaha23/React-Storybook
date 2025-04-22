import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-D4lIrffr.js";import{d as s,l as m}from"./styled-components.browser.esm-B9kjeC-a.js";import{u as q}from"./ThemeProvider-BjJxl09v.js";const z=s.div`
  display: flex;
  flex-direction: column;
  width: ${e=>e.fullWidth?"100%":"auto"};
  position: relative;
`,C=s.label`
  margin-bottom: 6px;
  font-size: ${e=>{switch(e.size){case"small":return"12px";case"large":return"16px";default:return"14px"}}};
  color: ${e=>e.disabled?e.theme.colors.text.disabled:e.theme.colors.text.primary};
`,S=s.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  border: 1px solid;
  border-radius: 4px;
  background-color: ${e=>e.theme.colors.background.primary};
  transition: all 150ms ease;
  
  /* Set height based on size */
  height: ${e=>{switch(e.size){case"small":return"32px";case"large":return"48px";default:return"40px"}}};
  
  /* Handle border color based on state */
  ${e=>{const t=e.theme.colors;let a=t.text.tertiary;return e.isFocused&&(a=t.text.primary),e.hasError&&(a=t.text.error),e.disabled&&(a=t.text.disabled),m`
      border-color: ${a};
      ${e.isFocused&&!e.hasError&&!e.disabled&&`
        box-shadow: 0 0 0 3px ${t.text.tertiary}33;
      `}
      ${e.hasError&&!e.disabled&&`
        box-shadow: 0 0 0 3px ${t.text.error}33;
      `}
    `}}
  
  /* Handle hover state when not disabled */
  &:hover {
    ${e=>!e.disabled&&!e.isFocused&&m`
      border-color: ${e.hasError?e.theme.colors.text.error:e.theme.colors.text.secondary};
    `}
  }
  
  /* Disabled state */
  ${e=>e.disabled&&m`
    cursor: not-allowed;
    background-color: ${e.theme.colors.background.secondary};
    opacity: 0.7;
  `}
`,g=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.position==="start"?"0 0 0 10px":"0 10px 0 0"};
  
  /* Adjust size based on input size */
  font-size: ${e=>{switch(e.size){case"small":return"14px";case"large":return"20px";default:return"16px"}}};
`,H=s.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  width: 100%;
  
  /* Padding adjustments based on icons */
  padding-left: ${e=>e.hasStartIcon?"5px":"10px"};
  padding-right: ${e=>e.hasEndIcon?"5px":"10px"};
  
  /* Font size based on input size */
  font-size: ${e=>{switch(e.size){case"small":return"12px";case"large":return"16px";default:return"14px"}}};
  
  color: ${e=>e.disabled?e.theme.colors.text.disabled:e.theme.colors.text.primary};
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`,R=s.span`
  margin-top: 4px;
  font-size: ${e=>{switch(e.size){case"small":return"10px";case"large":return"14px";default:return"12px"}}};
  
  color: ${e=>e.hasError?e.theme.colors.text.error:e.theme.colors.text.secondary};
`,y=b.forwardRef(({id:e,label:t,error:a,helperText:p,size:n="medium",disabled:u=!1,placeholder:$,startIcon:o,endIcon:l,fullWidth:v=!1,className:w,onChange:T,...i},E)=>{const{theme:d}=q(),[I,h]=b.useState(!1),x=!!a,f=e||`input-${Math.random().toString(36).substring(2,9)}`,j=c=>{h(!0),i.onFocus&&i.onFocus(c)},F=c=>{h(!1),i.onBlur&&i.onBlur(c)};return r.jsxs(z,{className:w,fullWidth:v,"data-testid":"textinput-container",children:[t&&r.jsx(C,{htmlFor:f,disabled:u,size:n,theme:d,"data-testid":"textinput-label",children:t}),r.jsxs(S,{hasError:x,disabled:u,isFocused:I,size:n,hasStartIcon:!!o,hasEndIcon:!!l,theme:d,"data-testid":"textinput-wrapper",children:[o&&r.jsx(g,{position:"start",size:n,"data-testid":"textinput-starticon",children:o}),r.jsx(H,{id:f,ref:E,disabled:u,placeholder:$,onChange:T,onFocus:j,onBlur:F,hasStartIcon:!!o,hasEndIcon:!!l,size:n,theme:d,"data-testid":"textinput-input",...i}),l&&r.jsx(g,{position:"end",size:n,"data-testid":"textinput-endicon",children:l})]}),(p||a)&&r.jsx(R,{hasError:x,size:n,theme:d,"data-testid":"textinput-helpertext",children:a||p})]})});y.displayName="TextInput";y.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:"Label for the input"},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below input"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Size of the input\r
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the input is disabled\r
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},startIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display at the start of input"},endIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display at the end of input"},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Full width of container\r
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for the container"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when input value changes"}},composes:["Omit"]};export{y as T};
