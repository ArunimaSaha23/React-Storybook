import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./HelperText-C6uAVCCo.js";import"./Checkbox-CHRnsqcc.js";import"./TextInput-H79V9oIu.js";import"./Toast-YPCsOtsN.js";import{T as D}from"./ThemeProvider-BjJxl09v.js";import"./index-D4lIrffr.js";import"./styled-components.browser.esm-B9kjeC-a.js";const F={title:"Typography/Paragraph",component:r,parameters:{layout:"centered",docs:{description:{component:`
# Paragraph Component

Paragraphs are used for blocks of text content in your application. They provide consistent styling for readable text.

## Accessibility
- Maintain proper color contrast for readability (WCAG AA: 4.5:1)
- Keep line length between 50-75 characters for optimal readability
- Use appropriate line height to improve readability

## Responsive Behavior
Paragraphs maintain consistent and readable text size across devices.
        `}}},tags:["autodocs"],decorators:[c=>e.jsx(D,{children:e.jsx("div",{style:{padding:"2rem",maxWidth:"640px"},children:e.jsx(c,{})})})]},a={render:()=>e.jsx(r,{children:"This is a standard paragraph with default styling. Paragraphs are the fundamental building blocks of text content in your application. They should be easy to read with proper spacing and sizing."})},t={render:()=>e.jsx(r,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vel urna fringilla luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at diam eget nisi aliquam ultrices. Phasellus vestibulum enim eu tellus venenatis, ac auctor velit tincidunt. Fusce eget nunc non libero lobortis finibus. Nulla facilisi. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})},i={render:()=>e.jsx(r,{color:"secondary",children:"This paragraph uses the secondary text color, which is typically used for less emphasized content."})},s={render:()=>e.jsx(r,{fontSize:"lg",fontWeight:"medium",lineHeight:"loose",children:"This paragraph has custom styling with larger font size, medium font weight, and looser line height for increased readability."})},n={decorators:[c=>e.jsx(D,{initialMode:"dark",children:e.jsx("div",{style:{padding:"2rem",maxWidth:"640px",background:"#111827"},children:e.jsx(c,{})})})],render:()=>e.jsx(r,{children:"This paragraph demonstrates how text appears in dark mode. Dark mode uses higher contrast colors to maintain readability while reducing eye strain in low-light environments."})},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"This is the first paragraph. Multiple paragraphs can be used to structure content into digestible sections."}),e.jsx(r,{children:"This is the second paragraph. Proper spacing between paragraphs improves readability and content structure."}),e.jsx(r,{children:"This is the third paragraph. Notice how the whitespace between paragraphs helps to visually separate the content."})]})};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Paragraph>\r
      This is a standard paragraph with default styling. Paragraphs are the fundamental building blocks of text content in your application. They should be easy to read with proper spacing and sizing.\r
    </Paragraph>
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,u,m;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Paragraph>\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vel urna fringilla luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at diam eget nisi aliquam ultrices. Phasellus vestibulum enim eu tellus venenatis, ac auctor velit tincidunt. Fusce eget nunc non libero lobortis finibus. Nulla facilisi. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r
    </Paragraph>
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Paragraph color="secondary">\r
      This paragraph uses the secondary text color, which is typically used for less emphasized content.\r
    </Paragraph>
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,P,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Paragraph fontSize="lg" fontWeight="medium" lineHeight="loose">\r
      This paragraph has custom styling with larger font size, medium font weight, and looser line height for increased readability.\r
    </Paragraph>
}`,...(x=(P=s.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var v,w,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider initialMode="dark">\r
        <div style={{
      padding: '2rem',
      maxWidth: '640px',
      background: '#111827'
    }}>\r
          <Story />\r
        </div>\r
      </ThemeProvider>],
  render: () => <Paragraph>\r
      This paragraph demonstrates how text appears in dark mode. Dark mode uses higher contrast colors to maintain readability while reducing eye strain in low-light environments.\r
    </Paragraph>
}`,...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var j,S,k;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <>\r
      <Paragraph>\r
        This is the first paragraph. Multiple paragraphs can be used to structure content into digestible sections.\r
      </Paragraph>\r
      <Paragraph>\r
        This is the second paragraph. Proper spacing between paragraphs improves readability and content structure.\r
      </Paragraph>\r
      <Paragraph>\r
        This is the third paragraph. Notice how the whitespace between paragraphs helps to visually separate the content.\r
      </Paragraph>\r
    </>
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const E=["Default","LongContent","SecondaryColor","CustomStyling","DarkMode","WithMultipleParagraphs"];export{s as CustomStyling,n as DarkMode,a as Default,t as LongContent,i as SecondaryColor,o as WithMultipleParagraphs,E as __namedExportsOrder,F as default};
