import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-D4lIrffr.js";import{T as r}from"./TextInput-H79V9oIu.js";import{T as v}from"./ThemeProvider-BjJxl09v.js";import{d as x}from"./styled-components.browser.esm-B9kjeC-a.js";const f=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),Y=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),de={title:"Data Entry/TextInput",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
## TextInput Component

Text inputs allow users to enter and edit text. They are typically used in forms and dialogs.

### Anatomy
- **Label**: Text that describes the input field
- **Input field**: The container for text entry
- **Helper text**: Additional information or error messages
- **Icons**: Optional visual elements to indicate purpose or provide actions
        `}}},argTypes:{label:{control:"text",description:"Text label for the input"},placeholder:{control:"text",description:"Placeholder text when input is empty"},error:{control:"text",description:"Error message to display"},helperText:{control:"text",description:"Helper text displayed below the input"},disabled:{control:"boolean",description:"Whether the input is disabled"},size:{control:"select",options:["small","medium","large"],description:"Size of the input"},fullWidth:{control:"boolean",description:"Whether the input takes up full width"},startIcon:{control:{disable:!0},description:"Icon to display at the start of the input"},endIcon:{control:{disable:!0},description:"Icon to display at the end of the input"}},decorators:[t=>e.jsx(v,{children:e.jsx("div",{style:{padding:"24px"},children:e.jsx(t,{})})})]},l={args:{label:"Username",placeholder:"Enter your username"},parameters:{docs:{description:{story:"Default text input with label and placeholder."}}}},Z=()=>{const[t,b]=g.useState("");return e.jsx(r,{value:t,onChange:a=>b(a.target.value),label:"Controlled Input",placeholder:"Type something...",helperText:`Character count: ${t.length}`})},o={render:()=>e.jsx(Z,{}),parameters:{docs:{description:{story:"A controlled input that manages its own state and displays character count."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(r,{label:"Default",placeholder:"Default state"}),e.jsx(r,{label:"Disabled",placeholder:"Disabled state",disabled:!0}),e.jsx(r,{label:"With helper text",placeholder:"With helper text",helperText:"This is helper text"}),e.jsx(r,{label:"With error",placeholder:"Error state",error:"This field is required"}),e.jsx(r,{label:"With value",value:"This is a pre-filled value",onChange:()=>{}})]}),parameters:{docs:{description:{story:"Text input in various states including default, disabled, with helper text, and with error."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(r,{label:"Small size",placeholder:"Small input",size:"small"}),e.jsx(r,{label:"Medium size (default)",placeholder:"Medium input",size:"medium"}),e.jsx(r,{label:"Large size",placeholder:"Large input",size:"large"})]}),parameters:{docs:{description:{story:"Text input in three different sizes: small, medium (default), and large."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(r,{label:"With start icon",placeholder:"Search...",startIcon:e.jsx(f,{})}),e.jsx(r,{label:"With end icon",placeholder:"Type to search...",endIcon:e.jsx(f,{})}),e.jsx(r,{label:"With both icons",placeholder:"Search...",startIcon:e.jsx(f,{}),endIcon:e.jsx(Y,{}),value:"Search term",onChange:()=>{}})]}),parameters:{docs:{description:{story:"Text input with icons placed at the start, end, or both positions."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"40px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Light Theme"}),e.jsx(v,{initialMode:"light",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{label:"Default",placeholder:"Default input"}),e.jsx(r,{label:"With error",placeholder:"Error input",error:"Error message"})]})})]}),e.jsxs("div",{style:{background:"#111827",padding:"20px"},children:[e.jsx("h4",{style:{color:"white"},children:"Dark Theme"}),e.jsx(v,{initialMode:"dark",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{label:"Default",placeholder:"Default input"}),e.jsx(r,{label:"With error",placeholder:"Error input",error:"Error message"})]})})]})]}),parameters:{docs:{description:{story:"Text input adapts to both light and dark themes."}}}},ee=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,re=x.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,te=x.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`,j=x.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  
  &.primary {
    background-color: #1f2937;
    color: white;
  }
  
  &.secondary {
    background-color: #e5e7eb;
    color: #1f2937;
  }
`,se=()=>{const[t,b]=g.useState({firstName:"",lastName:"",email:"",password:""}),[a,T]=g.useState({}),i=y=>{const{name:s,value:X}=y.target;b({...t,[s]:X}),a[s]&&T({...a,[s]:""})},Q=y=>{y.preventDefault();const s={};t.firstName||(s.firstName="First name is required"),t.lastName||(s.lastName="Last name is required"),t.email?/\S+@\S+\.\S+/.test(t.email)||(s.email="Email address is invalid"):s.email="Email is required",t.password?t.password.length<6&&(s.password="Password must be at least 6 characters"):s.password="Password is required",T(s),Object.keys(s).length===0&&alert("Form submitted successfully!")};return e.jsxs(ee,{children:[e.jsx("h3",{children:"Registration Form"}),e.jsxs("form",{onSubmit:Q,children:[e.jsxs(re,{children:[e.jsx(r,{label:"First Name",placeholder:"Enter first name",name:"firstName",value:t.firstName,onChange:i,error:a.firstName,fullWidth:!0}),e.jsx(r,{label:"Last Name",placeholder:"Enter last name",name:"lastName",value:t.lastName,onChange:i,error:a.lastName,fullWidth:!0})]}),e.jsx(r,{label:"Email",placeholder:"Enter email address",type:"email",name:"email",value:t.email,onChange:i,error:a.email,fullWidth:!0}),e.jsx(r,{label:"Password",placeholder:"Enter password",type:"password",name:"password",value:t.password,onChange:i,error:a.password,helperText:a.password?"":"Password must be at least 6 characters",fullWidth:!0}),e.jsxs(te,{children:[e.jsx(j,{type:"button",className:"secondary",children:"Cancel"}),e.jsx(j,{type:"submit",className:"primary",children:"Register"})]})]})]})},h={render:()=>e.jsx(se,{}),parameters:{docs:{description:{story:"Example of using text inputs in a registration form with validation."}}}},u={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"Keyboard Navigation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Tab: Focus the input field"}),e.jsx("li",{children:"Enter/Space: Submit when inside a form"})]}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsx(r,{label:"Try focusing this input with Tab key",id:"accessible-input",placeholder:"Focus me with keyboard",helperText:"Press Tab to focus, and type to enter text"})})]}),parameters:{docs:{description:{story:`
### Accessibility Features
- **Keyboard Navigation**: Users can navigate to inputs using the Tab key
- **Label Association**: Labels are properly associated with inputs using the 'for' attribute
- **Error States**: Error states are communicated visually and through ARIA attributes
- **Focus Management**: Visual focus indicators help keyboard users identify the active element
- **Screen Reader Support**: Compatible with screen readers through proper HTML semantics and ARIA attributes
`}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"40px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Do"}),e.jsxs("div",{style:{border:"1px solid green",padding:"16px",borderRadius:"8px"},children:[e.jsx(r,{label:"Email address",placeholder:"name@example.com",helperText:"We'll never share your email with anyone else."}),e.jsx("div",{style:{marginTop:"24px"},children:e.jsx(r,{label:"Password",type:"password",placeholder:"Enter your password",helperText:"Must be at least 8 characters"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Don't"}),e.jsxs("div",{style:{border:"1px solid red",padding:"16px",borderRadius:"8px"},children:[e.jsx(r,{placeholder:"Email..."}),e.jsx("div",{style:{marginTop:"24px"},children:e.jsx(r,{label:"A very long label that doesn't clearly explain what the user should enter in this field and might confuse them",placeholder:"???"})})]})]})]}),parameters:{docs:{description:{story:`
### Best Practices

#### Do:
- Use clear, concise labels that describe the requested information
- Use placeholder text as additional guidance, not as a replacement for labels
- Provide helpful error messages that explain how to resolve the issue
- Use appropriate input types (email, password, number, etc.) for better mobile experience
- Include helper text for complex inputs

#### Don't:
- Omit labels and rely only on placeholder text
- Use vague or overly long labels
- Create inputs without sufficient context
- Use placeholder text that disappears when the user starts typing without other guidance
- Use error messages that don't help users correct their input
`}}}};var w,I,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default text input with label and placeholder.'
      }
    }
  }
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var D,E,W;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ControlledTemplate />,
  parameters: {
    docs: {
      description: {
        story: 'A controlled input that manages its own state and displays character count.'
      }
    }
  }
}`,...(W=(E=o.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var C,k,A;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <TextInput label="Default" placeholder="Default state" />\r
      <TextInput label="Disabled" placeholder="Disabled state" disabled />\r
      <TextInput label="With helper text" placeholder="With helper text" helperText="This is helper text" />\r
      <TextInput label="With error" placeholder="Error state" error="This field is required" />\r
      <TextInput label="With value" value="This is a pre-filled value" onChange={() => {}} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text input in various states including default, disabled, with helper text, and with error.'
      }
    }
  }
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,N,P;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <TextInput label="Small size" placeholder="Small input" size="small" />\r
      <TextInput label="Medium size (default)" placeholder="Medium input" size="medium" />\r
      <TextInput label="Large size" placeholder="Large input" size="large" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text input in three different sizes: small, medium (default), and large.'
      }
    }
  }
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var z,U,L;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <TextInput label="With start icon" placeholder="Search..." startIcon={<SearchIcon />} />\r
      <TextInput label="With end icon" placeholder="Type to search..." endIcon={<SearchIcon />} />\r
      <TextInput label="With both icons" placeholder="Search..." startIcon={<SearchIcon />} endIcon={<CloseIcon />} value="Search term" onChange={() => {}} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text input with icons placed at the start, end, or both positions.'
      }
    }
  }
}`,...(L=(U=p.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var M,R,q;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '40px'
  }}>\r
      <div>\r
        <h4>Light Theme</h4>\r
        <ThemeProvider initialMode="light">\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>\r
            <TextInput label="Default" placeholder="Default input" />\r
            <TextInput label="With error" placeholder="Error input" error="Error message" />\r
          </div>\r
        </ThemeProvider>\r
      </div>\r
      <div style={{
      background: '#111827',
      padding: '20px'
    }}>\r
        <h4 style={{
        color: 'white'
      }}>Dark Theme</h4>\r
        <ThemeProvider initialMode="dark">\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>\r
            <TextInput label="Default" placeholder="Default input" />\r
            <TextInput label="With error" placeholder="Error input" error="Error message" />\r
          </div>\r
        </ThemeProvider>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text input adapts to both light and dark themes.'
      }
    }
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var B,O,H;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <FormExample />,
  parameters: {
    docs: {
      description: {
        story: 'Example of using text inputs in a registration form with validation.'
      }
    }
  }
}`,...(H=(O=h.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var K,V,_;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div>\r
      <h3>Keyboard Navigation</h3>\r
      <ul>\r
        <li>Tab: Focus the input field</li>\r
        <li>Enter/Space: Submit when inside a form</li>\r
      </ul>\r
      <div style={{
      marginTop: '20px'
    }}>\r
        <TextInput label="Try focusing this input with Tab key" id="accessible-input" placeholder="Focus me with keyboard" helperText="Press Tab to focus, and type to enter text" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Accessibility Features
- **Keyboard Navigation**: Users can navigate to inputs using the Tab key
- **Label Association**: Labels are properly associated with inputs using the 'for' attribute
- **Error States**: Error states are communicated visually and through ARIA attributes
- **Focus Management**: Visual focus indicators help keyboard users identify the active element
- **Screen Reader Support**: Compatible with screen readers through proper HTML semantics and ARIA attributes
\`
      }
    }
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var $,G,J;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '40px'
  }}>\r
      <div>\r
        <h4>Do</h4>\r
        <div style={{
        border: '1px solid green',
        padding: '16px',
        borderRadius: '8px'
      }}>\r
          <TextInput label="Email address" placeholder="name@example.com" helperText="We'll never share your email with anyone else." />\r
          <div style={{
          marginTop: '24px'
        }}>\r
            <TextInput label="Password" type="password" placeholder="Enter your password" helperText="Must be at least 8 characters" />\r
          </div>\r
        </div>\r
      </div>\r
      <div>\r
        <h4>Don't</h4>\r
        <div style={{
        border: '1px solid red',
        padding: '16px',
        borderRadius: '8px'
      }}>\r
          <TextInput placeholder="Email..." />\r
          <div style={{
          marginTop: '24px'
        }}>\r
            <TextInput label="A very long label that doesn't clearly explain what the user should enter in this field and might confuse them" placeholder="???" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Best Practices

#### Do:
- Use clear, concise labels that describe the requested information
- Use placeholder text as additional guidance, not as a replacement for labels
- Provide helpful error messages that explain how to resolve the issue
- Use appropriate input types (email, password, number, etc.) for better mobile experience
- Include helper text for complex inputs

#### Don't:
- Omit labels and rely only on placeholder text
- Use vague or overly long labels
- Create inputs without sufficient context
- Use placeholder text that disappears when the user starts typing without other guidance
- Use error messages that don't help users correct their input
\`
      }
    }
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const pe=["Default","Controlled","States","Sizes","WithIcons","Themes","FormUsage","Accessibility","BestPractices"];export{u as Accessibility,m as BestPractices,o as Controlled,l as Default,h as FormUsage,d as Sizes,n as States,c as Themes,p as WithIcons,pe as __namedExportsOrder,de as default};
