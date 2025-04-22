import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as r}from"./HelperText-C6uAVCCo.js";import"./Checkbox-CHRnsqcc.js";import"./TextInput-H79V9oIu.js";import"./Toast-YPCsOtsN.js";import{T}from"./ThemeProvider-BjJxl09v.js";import"./index-D4lIrffr.js";import"./styled-components.browser.esm-B9kjeC-a.js";const R={title:"Typography/Caption",component:r,parameters:{layout:"centered",docs:{description:{component:`
# Caption Component

Captions are used for supplementary text that provides additional context or information. They are typically smaller and less emphasized than regular text.

## Accessibility
- Ensure proper color contrast despite smaller text size (WCAG AA: 4.5:1)
- Don't use captions for essential information
- Consider increasing font size on mobile devices for readability

## Usage Guidelines
- Use captions for image descriptions, metadata, timestamps, etc.
- Keep captions concise and informative
- Use tertiary text color to indicate less importance
        `}}},tags:["autodocs"],decorators:[d=>e.jsx(T,{children:e.jsx("div",{style:{padding:"2rem"},children:e.jsx(d,{})})})]},t={render:()=>e.jsx(r,{children:"Last updated: April 12, 2025"})},o={render:()=>e.jsxs("div",{children:[e.jsx("div",{style:{width:"300px",height:"200px",backgroundColor:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.5rem"},children:"[Placeholder Image]"}),e.jsx(r,{children:"Figure 1: Example diagram showing component architecture"})]})},n={render:()=>e.jsx(r,{fontWeight:"medium",letterSpacing:"wide",children:"Custom styled caption with medium weight and wide letter spacing"})},i={render:()=>e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"0.5rem",maxWidth:"300px"},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.25rem",fontWeight:600},children:"Product Name"}),e.jsx("p",{style:{margin:"0 0 1rem 0"},children:"Brief product description with key features."}),e.jsx(r,{children:"In stock • Ships in 2-3 business days"})]})},a={decorators:[d=>e.jsx(T,{initialMode:"dark",children:e.jsx("div",{style:{padding:"2rem",background:"#111827"},children:e.jsx(d,{})})})],render:()=>e.jsx(r,{children:"This caption shows how captions appear in dark mode"})},s={render:()=>e.jsx(r,{color:"secondary",children:"This caption uses the secondary text color for slightly higher emphasis"})};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Caption>Last updated: April 12, 2025</Caption>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,h,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div>\r
      <div style={{
      width: '300px',
      height: '200px',
      backgroundColor: '#e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem'
    }}>\r
        [Placeholder Image]\r
      </div>\r
      <Caption>Figure 1: Example diagram showing component architecture</Caption>\r
    </div>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,y,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Caption fontWeight="medium" letterSpacing="wide">\r
      Custom styled caption with medium weight and wide letter spacing\r
    </Caption>
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,f,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    maxWidth: '300px'
  }}>\r
      <h3 style={{
      margin: '0 0 0.5rem 0',
      fontSize: '1.25rem',
      fontWeight: 600
    }}>\r
        Product Name\r
      </h3>\r
      <p style={{
      margin: '0 0 1rem 0'
    }}>\r
        Brief product description with key features.\r
      </p>\r
      <Caption>In stock • Ships in 2-3 business days</Caption>\r
    </div>
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,w,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider initialMode="dark">\r
        <div style={{
      padding: '2rem',
      background: '#111827'
    }}>\r
          <Story />\r
        </div>\r
      </ThemeProvider>],
  render: () => <Caption>This caption shows how captions appear in dark mode</Caption>
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var b,k,I;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Caption color="secondary">\r
      This caption uses the secondary text color for slightly higher emphasis\r
    </Caption>
}`,...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const U=["Default","WithImage","CustomStyling","InCard","DarkMode","SecondaryColor"];export{n as CustomStyling,a as DarkMode,t as Default,i as InCard,s as SecondaryColor,o as WithImage,U as __namedExportsOrder,R as default};
