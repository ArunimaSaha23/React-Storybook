import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as r}from"./HelperText-C6uAVCCo.js";import"./Checkbox-CHRnsqcc.js";import"./TextInput-H79V9oIu.js";import"./Toast-YPCsOtsN.js";import{T as A}from"./ThemeProvider-BjJxl09v.js";import"./index-D4lIrffr.js";import"./styled-components.browser.esm-B9kjeC-a.js";const w={title:"Typography/Label",component:r,parameters:{layout:"centered",docs:{description:{component:`
# Label Component

Labels are used to identify form controls and other UI elements. They provide context and instructions for users.

## Accessibility
- Always associate labels with their form controls using the \`htmlFor\` attribute
- Make labels descriptive and concise
- Ensure proper color contrast for readability (WCAG AA: 4.5:1)
- Don't rely on color alone to convey meaning

## Usage Guidelines
- Position labels consistently (typically above or to the left of form elements)
- Use sentence case for label text
- Keep labels concise but descriptive
        `}}},tags:["autodocs"],decorators:[l=>e.jsx(A,{children:e.jsx("div",{style:{padding:"2rem"},children:e.jsx(l,{})})})]},o={render:()=>e.jsx(r,{htmlFor:"example-input",children:"Email Address"})},a={render:()=>e.jsxs("div",{children:[e.jsx(r,{htmlFor:"example-input",children:"Email Address"}),e.jsx("input",{id:"example-input",type:"email",placeholder:"example@email.com",style:{display:"block",marginTop:"0.5rem",padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"}})]})},t={render:()=>e.jsxs(r,{htmlFor:"required-input",children:["Username ",e.jsx("span",{style:{color:"red"},children:"*"})]})},s={render:()=>e.jsx(r,{htmlFor:"custom-input",fontWeight:"bold",fontSize:"base",letterSpacing:"wider",children:"Custom Styled Label"})},d={decorators:[l=>e.jsx(A,{initialMode:"dark",children:e.jsx("div",{style:{padding:"2rem",background:"#111827"},children:e.jsx(l,{})})})],render:()=>e.jsx(r,{htmlFor:"dark-mode-input",children:"Dark Mode Label"})},i={render:()=>e.jsx(r,{htmlFor:"secondary-input",color:"secondary",children:"Secondary Color Label"})};var n,c,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Label htmlFor="example-input">Email Address</Label>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div>\r
      <Label htmlFor="example-input">Email Address</Label>\r
      <input id="example-input" type="email" placeholder="example@email.com" style={{
      display: 'block',
      marginTop: '0.5rem',
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px'
    }} />\r
    </div>
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,y,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Label htmlFor="required-input">\r
      Username <span style={{
      color: 'red'
    }}>*</span>\r
    </Label>
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,L,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Label htmlFor="custom-input" fontWeight="bold" fontSize="base" letterSpacing="wider">\r
      Custom Styled Label\r
    </Label>
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var f,j,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider initialMode="dark">\r
        <div style={{
      padding: '2rem',
      background: '#111827'
    }}>\r
          <Story />\r
        </div>\r
      </ThemeProvider>],
  render: () => <Label htmlFor="dark-mode-input">Dark Mode Label</Label>
}`,...(v=(j=d.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var F,k,C;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Label htmlFor="secondary-input" color="secondary">\r
      Secondary Color Label\r
    </Label>
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const P=["Default","WithFormControl","Required","WithCustomStyling","DarkMode","SecondaryColor"];export{d as DarkMode,o as Default,t as Required,i as SecondaryColor,s as WithCustomStyling,a as WithFormControl,P as __namedExportsOrder,w as default};
