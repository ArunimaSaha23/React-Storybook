import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as r,a as c,b as C,c as W,d as z,e as O}from"./HelperText-C6uAVCCo.js";import"./Checkbox-CHRnsqcc.js";import"./TextInput-H79V9oIu.js";import"./Toast-YPCsOtsN.js";import{T as P}from"./ThemeProvider-BjJxl09v.js";import"./index-D4lIrffr.js";import"./styled-components.browser.esm-B9kjeC-a.js";const J={title:"Typography/Heading",component:r,parameters:{layout:"centered",docs:{description:{component:`
# Heading Component

Headings are used to create hierarchical structure for your content. They help users scan and understand the page structure.

## Accessibility
- Use heading levels to reflect the document structure, not for styling purposes
- Do not skip heading levels (e.g., from h1 to h3)
- Only use one h1 per page or distinct section
- Ensure proper color contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large text)

## Responsive Behavior
Headings scale down on smaller screens to maintain readability and proper proportions.
        `}}},tags:["autodocs"],decorators:[p=>e.jsx(P,{children:e.jsx("div",{style:{padding:"2rem"},children:e.jsx(p,{})})})]},s={render:()=>e.jsxs("div",{children:[e.jsx(r,{children:"Heading 1 (h1)"}),e.jsx(c,{children:"Heading 2 (h2)"}),e.jsx(C,{children:"Heading 3 (h3)"}),e.jsx(W,{children:"Heading 4 (h4)"}),e.jsx(z,{children:"Heading 5 (h5)"}),e.jsx(O,{children:"Heading 6 (h6)"})]})},a={render:()=>e.jsx(r,{children:"This is a Heading 1"})},n={render:()=>e.jsx(c,{children:"This is a Heading 2"})},i={render:()=>e.jsx(C,{children:"This is a Heading 3"})},o={render:()=>e.jsx(r,{fontWeight:"light",letterSpacing:"wider",color:"secondary",children:"Custom Styled Heading"})},d={parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"This demonstrates how headings adapt to smaller screen sizes."}}},render:()=>e.jsxs("div",{children:[e.jsx(r,{children:"Responsive Heading 1"}),e.jsx(c,{children:"Responsive Heading 2"})]})},t={decorators:[p=>e.jsx(P,{initialMode:"dark",children:e.jsx("div",{style:{padding:"2rem",background:"#111827"},children:e.jsx(p,{})})})],render:()=>e.jsxs("div",{children:[e.jsx(r,{children:"Dark Mode Heading 1"}),e.jsx(c,{children:"Dark Mode Heading 2"})]})};var H,l,m;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div>\r
      <H1>Heading 1 (h1)</H1>\r
      <H2>Heading 2 (h2)</H2>\r
      <H3>Heading 3 (h3)</H3>\r
      <H4>Heading 4 (h4)</H4>\r
      <H5>Heading 5 (h5)</H5>\r
      <H6>Heading 6 (h6)</H6>\r
    </div>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,h,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <H1>This is a Heading 1</H1>
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,v,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <H2>This is a Heading 2</H2>
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,f,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <H3>This is a Heading 3</H3>
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var S,k,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <H1 fontWeight="light" letterSpacing="wider" color="secondary">\r
      Custom Styled Heading\r
    </H1>
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,M,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'This demonstrates how headings adapt to smaller screen sizes.'
      }
    }
  },
  render: () => <div>\r
      <H1>Responsive Heading 1</H1>\r
      <H2>Responsive Heading 2</H2>\r
    </div>
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var b,D,A;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider initialMode="dark">\r
        <div style={{
      padding: '2rem',
      background: '#111827'
    }}>\r
          <Story />\r
        </div>\r
      </ThemeProvider>],
  render: () => <div>\r
      <H1>Dark Mode Heading 1</H1>\r
      <H2>Dark Mode Heading 2</H2>\r
    </div>
}`,...(A=(D=t.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const K=["AllHeadings","H1Example","H2Example","H3Example","CustomHeading","ResponsiveHeading","DarkModeHeading"];export{s as AllHeadings,o as CustomHeading,t as DarkModeHeading,a as H1Example,n as H2Example,i as H3Example,d as ResponsiveHeading,K as __namedExportsOrder,J as default};
