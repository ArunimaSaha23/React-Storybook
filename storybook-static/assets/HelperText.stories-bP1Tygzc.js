import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as r,L as n}from"./HelperText-C6uAVCCo.js";import"./Checkbox-CHRnsqcc.js";import"./TextInput-H79V9oIu.js";import"./Toast-YPCsOtsN.js";import{T as A}from"./ThemeProvider-BjJxl09v.js";import"./index-D4lIrffr.js";import"./styled-components.browser.esm-B9kjeC-a.js";const G={title:"Typography/HelperText",component:r,parameters:{layout:"centered",docs:{description:{component:`
# Helper Text Component

Helper text provides additional guidance, requirements, or context for form fields and other UI elements. It helps users understand expected input and avoid errors.

## Accessibility
- Ensure proper color contrast (WCAG AA: 4.5:1)
- For error messages, don't rely solely on color to indicate errors
- Associate helper text with form controls using appropriate ARIA attributes when needed

## Usage Guidelines
- Keep helper text concise and instructional
- Position helper text consistently (typically below the input field)
- Use error state for validation messages
- Use regular helper text for guidelines or additional information
        `}}},tags:["autodocs"],decorators:[p=>e.jsx(A,{children:e.jsx("div",{style:{padding:"2rem"},children:e.jsx(p,{})})})]},t={render:()=>e.jsx(r,{children:"Must be at least 8 characters"})},s={render:()=>e.jsxs("div",{children:[e.jsx(n,{htmlFor:"password-input",children:"Password"}),e.jsx("input",{id:"password-input",type:"password",style:{display:"block",width:"100%",marginTop:"0.5rem",padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"}}),e.jsx("div",{style:{marginTop:"0.25rem"},children:e.jsx(r,{children:"Must be at least 8 characters with one number and one special character"})})]})},i={render:()=>e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email-input",children:"Email Address"}),e.jsx("input",{id:"email-input",type:"email",style:{display:"block",width:"100%",marginTop:"0.5rem",padding:"0.5rem",border:"1px solid #e11d48",borderRadius:"4px"},value:"invalid-email"}),e.jsx("div",{style:{marginTop:"0.25rem"},children:e.jsx(r,{error:!0,children:"Please enter a valid email address"})})]})},a={render:()=>e.jsxs("div",{children:[e.jsx(n,{htmlFor:"username-input",children:"Username"}),e.jsx("input",{id:"username-input",type:"text",style:{display:"block",width:"100%",marginTop:"0.5rem",padding:"0.5rem",border:"1px solid #22c55e",borderRadius:"4px"},value:"available_username"}),e.jsxs("div",{style:{marginTop:"0.25rem"},children:[e.jsx(r,{color:"success",children:"Username is available"}),e.jsx(r,{color:"error",children:"Please enter a valid email"}),e.jsx(r,{color:"warning",children:"Too many attempts"})]})]})},o={render:()=>e.jsx(r,{fontWeight:"medium",letterSpacing:"wide",children:"Custom styled helper text with medium weight and wide letter spacing"})},d={decorators:[p=>e.jsx(A,{initialMode:"dark",children:e.jsx("div",{style:{padding:"2rem",background:"#111827"},children:e.jsx(p,{})})})],render:()=>e.jsx(r,{children:"This helper text shows how it appears in dark mode"})},l={render:()=>e.jsxs("div",{children:[e.jsx(n,{htmlFor:"bio-input",children:"Bio"}),e.jsx("textarea",{id:"bio-input",style:{display:"block",width:"100%",marginTop:"0.5rem",padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"},rows:3}),e.jsxs("div",{style:{marginTop:"0.25rem",display:"flex",justifyContent:"space-between"},children:[e.jsx(r,{children:"Briefly describe yourself"}),e.jsx(r,{children:"0/150"})]})]})};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <HelperText>Must be at least 8 characters</HelperText>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div>\r
      <Label htmlFor="password-input">Password</Label>\r
      <input id="password-input" type="password" style={{
      display: 'block',
      width: '100%',
      marginTop: '0.5rem',
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px'
    }} />\r
      <div style={{
      marginTop: '0.25rem'
    }}>\r
        <HelperText>Must be at least 8 characters with one number and one special character</HelperText>\r
      </div>\r
    </div>
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,b,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div>\r
      <Label htmlFor="email-input">Email Address</Label>\r
      <input id="email-input" type="email" style={{
      display: 'block',
      width: '100%',
      marginTop: '0.5rem',
      padding: '0.5rem',
      border: '1px solid #e11d48',
      borderRadius: '4px'
    }} value="invalid-email" />\r
      <div style={{
      marginTop: '0.25rem'
    }}>\r
        <HelperText error={true}>Please enter a valid email address</HelperText>\r
      </div>\r
    </div>
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var T,w,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div>\r
      <Label htmlFor="username-input">Username</Label>\r
      <input id="username-input" type="text" style={{
      display: 'block',
      width: '100%',
      marginTop: '0.5rem',
      padding: '0.5rem',
      border: '1px solid #22c55e',
      borderRadius: '4px'
    }} value="available_username" />\r
      <div style={{
      marginTop: '0.25rem'
    }}>\r
        <HelperText color="success">Username is available</HelperText>\r
        <HelperText color="error">Please enter a valid email</HelperText>\r
        <HelperText color="warning">Too many attempts</HelperText>\r
      </div>\r
    </div>
}`,...(j=(w=a.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var f,H,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <HelperText fontWeight="medium" letterSpacing="wide">\r
      Custom styled helper text with medium weight and wide letter spacing\r
    </HelperText>
}`,...(S=(H=o.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var k,F,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider initialMode="dark">\r
        <div style={{
      padding: '2rem',
      background: '#111827'
    }}>\r
          <Story />\r
        </div>\r
      </ThemeProvider>],
  render: () => <HelperText>This helper text shows how it appears in dark mode</HelperText>
}`,...(C=(F=d.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var L,P,R;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div>\r
      <Label htmlFor="bio-input">Bio</Label>\r
      <textarea id="bio-input" style={{
      display: 'block',
      width: '100%',
      marginTop: '0.5rem',
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px'
    }} rows={3} />\r
      <div style={{
      marginTop: '0.25rem',
      display: 'flex',
      justifyContent: 'space-between'
    }}>\r
        <HelperText>Briefly describe yourself</HelperText>\r
        <HelperText>0/150</HelperText>\r
      </div>\r
    </div>
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const q=["Default","WithFormField","ErrorState","SuccessState","CustomStyling","DarkMode","WithCharacterCount"];export{o as CustomStyling,d as DarkMode,t as Default,i as ErrorState,a as SuccessState,l as WithCharacterCount,s as WithFormField,q as __namedExportsOrder,G as default};
