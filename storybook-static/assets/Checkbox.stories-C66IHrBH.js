import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as K}from"./index-D4lIrffr.js";import{C as r}from"./Checkbox-CHRnsqcc.js";import{T as k}from"./ThemeProvider-BjJxl09v.js";import{d as V}from"./styled-components.browser.esm-B9kjeC-a.js";const se={title:"Data Entry/Checkbox",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
## Checkbox Component

Checkboxes allow users to select one or more items from a set, or to toggle a single option on or off.

### Anatomy
- **Box**: The visual checkbox element that displays the checked/unchecked state
- **Label**: Text that describes the option (optional)
- **Icon**: Visual indicator of the checked or indeterminate state
        `}}},argTypes:{checked:{control:"boolean",description:"Whether the checkbox is checked"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"},error:{control:"boolean",description:"Whether the checkbox is in an error state"},size:{control:"select",options:["small","medium","large"],description:"The size of the checkbox"},indeterminate:{control:"boolean",description:"Whether the checkbox is in an indeterminate state"},label:{control:"text",description:"The label text to display next to the checkbox"}},decorators:[s=>e.jsx(k,{children:e.jsx(s,{})})]},i={args:{label:"Default checkbox"},parameters:{docs:{description:{story:"The default checkbox with a label."}}}},O=()=>{const[s,t]=K.useState(!1);return e.jsx(r,{checked:s,onChange:x=>t(x.target.checked),label:"Controlled checkbox"})},c={render:()=>e.jsx(O,{}),parameters:{docs:{description:{story:"A controlled checkbox that manages its own state."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{label:"Default"}),e.jsx(r,{label:"Checked",checked:!0}),e.jsx(r,{label:"Disabled",disabled:!0}),e.jsx(r,{label:"Disabled and checked",disabled:!0,checked:!0}),e.jsx(r,{label:"Error state",error:!0}),e.jsx(r,{label:"Indeterminate",indeterminate:!0})]}),parameters:{docs:{description:{story:"The checkbox component supports various states including checked, disabled, error, and indeterminate."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{label:"Small size",size:"small"}),e.jsx(r,{label:"Medium size (default)",size:"medium"}),e.jsx(r,{label:"Large size",size:"large"})]}),parameters:{docs:{description:{story:"The checkbox component supports three different sizes: small, medium (default), and large."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Light Theme"}),e.jsx(k,{initialMode:"light",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{label:"Unchecked"}),e.jsx(r,{label:"Checked",checked:!0}),e.jsx(r,{label:"Error",error:!0})]})})]}),e.jsxs("div",{style:{background:"#111827",padding:"20px"},children:[e.jsx("h4",{style:{color:"white"},children:"Dark Theme"}),e.jsx(k,{initialMode:"dark",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{label:"Unchecked"}),e.jsx(r,{label:"Checked",checked:!0}),e.jsx(r,{label:"Error",error:!0})]})})]})]}),parameters:{docs:{description:{story:"The checkbox component adapts to both light and dark themes."}}}},J=V.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,Q=V.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,X=()=>{const[s,t]=K.useState({newsletter:!1,updates:!1,marketing:!1,all:!1}),x=u=>{const a=u.target.checked;t({all:a,newsletter:a,updates:a,marketing:a})},m=u=>{const{name:a,checked:q}=u.target,o={...s,[a]:q},_=o.newsletter&&o.updates&&o.marketing;t({...o,all:_})},W=(s.newsletter||s.updates||s.marketing)&&!s.all;return e.jsxs(J,{children:[e.jsx("h3",{children:"Email Preferences"}),e.jsxs(Q,{children:[e.jsx(r,{label:"Select all",checked:s.all,indeterminate:W,onChange:x,name:"all"}),e.jsxs("div",{style:{marginLeft:20},children:[e.jsx(r,{label:"Newsletter",checked:s.newsletter,onChange:m,name:"newsletter"}),e.jsx(r,{label:"Product updates",checked:s.updates,onChange:m,name:"updates"}),e.jsx(r,{label:"Marketing emails",checked:s.marketing,onChange:m,name:"marketing"})]})]})]})},h={render:()=>e.jsx(X,{}),parameters:{docs:{description:{story:'Example of using checkboxes in a form with an indeterminate "select all" parent checkbox.'}}}},p={args:{label:"Checkbox with keyboard navigation"},render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"Keyboard Navigation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Tab: Focus the checkbox"}),e.jsx("li",{children:"Space: Toggle the checkbox state"})]}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{label:"Try focusing this checkbox with Tab key and pressing Space to toggle",id:"accessible-checkbox"}),e.jsx(r,{label:"This is another checkbox you can navigate to with Tab",id:"accessible-checkbox-2"}),e.jsx(r,{label:"This checkbox is disabled and should be skipped during Tab navigation",id:"accessible-checkbox-3",disabled:!0})]})]}),parameters:{docs:{description:{story:` 
          ### Accessibility Features 
          - **Keyboard Navigation**: Users can navigate to checkboxes using the Tab key and toggle them using the Space bar 
          - **ARIA Support**: Uses aria-checked for state, aria-invalid for error states, and aria-disabled for disabled states
          - **Focus Management**: Visual focus indicators help keyboard users identify which element is currently focused 
          - **Screen Reader Support**: Compatible with screen readers through proper HTML semantics and ARIA attributes
          - **Semantic HTML**: Uses proper label association and keyboard events for native behavior
        `}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Do"}),e.jsxs("div",{style:{border:"1px solid green",padding:"16px",borderRadius:"8px"},children:[e.jsx(r,{label:"Use clear, concise labels"}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx(r,{label:"Format lists of checkboxes consistently"}),e.jsx(r,{label:"Group related options visually"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Don't"}),e.jsxs("div",{style:{border:"1px solid red",padding:"16px",borderRadius:"8px"},children:[e.jsx(r,{label:"Don't use extremely long labels that wrap multiple times and make the checkbox difficult to visually associate with its text, creating confusion for users who are trying to understand what option they're selecting"}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx(r,{}),e.jsx("p",{style:{marginLeft:"16px",marginTop:"4px"},children:"Don't separate labels from checkboxes"})]})]})]})]}),parameters:{docs:{description:{story:`
### Best Practices

#### Do:
- Use clear, concise labels that explain the option
- Group related checkboxes together
- Use the indeterminate state for parent checkboxes when appropriate
- Maintain consistent vertical alignment for lists of checkboxes
- Consider using checkboxes for optional selections and radio buttons for required selections

#### Don't:
- Use checkboxes for actions or commands (use buttons instead)
- Create checkboxes without labels or with unclear descriptions
- Place labels far from their associated checkboxes
- Use extremely long labels that wrap multiple times
- Hide the checkbox itself and only show a label
`}}}};var g,f,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Default checkbox'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default checkbox with a label.'
      }
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,j,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ControlledTemplate />,
  parameters: {
    docs: {
      description: {
        story: 'A controlled checkbox that manages its own state.'
      }
    }
  }
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var T,w,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
      <Checkbox label="Default" />\r
      <Checkbox label="Checked" checked />\r
      <Checkbox label="Disabled" disabled />\r
      <Checkbox label="Disabled and checked" disabled checked />\r
      <Checkbox label="Error state" error />\r
      <Checkbox label="Indeterminate" indeterminate />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The checkbox component supports various states including checked, disabled, error, and indeterminate.'
      }
    }
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var S,U,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
      <Checkbox label="Small size" size="small" />\r
      <Checkbox label="Medium size (default)" size="medium" />\r
      <Checkbox label="Large size" size="large" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The checkbox component supports three different sizes: small, medium (default), and large.'
      }
    }
  }
}`,...(z=(U=n.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var A,E,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px'
  }}>\r
      <div>\r
        <h4>Light Theme</h4>\r
        <ThemeProvider initialMode="light">\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>\r
            <Checkbox label="Unchecked" />\r
            <Checkbox label="Checked" checked />\r
            <Checkbox label="Error" error />\r
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
          gap: '12px'
        }}>\r
            <Checkbox label="Unchecked" />\r
            <Checkbox label="Checked" checked />\r
            <Checkbox label="Error" error />\r
          </div>\r
        </ThemeProvider>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The checkbox component adapts to both light and dark themes.'
      }
    }
  }
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var P,F,L;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <FormExample />,
  parameters: {
    docs: {
      description: {
        story: 'Example of using checkboxes in a form with an indeterminate "select all" parent checkbox.'
      }
    }
  }
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var R,I,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Checkbox with keyboard navigation"
  },
  render: () => <div>\r
      <h3>Keyboard Navigation</h3>\r
      <ul>\r
        <li>Tab: Focus the checkbox</li>\r
        <li>Space: Toggle the checkbox state</li>\r
      </ul>\r
      <div style={{
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>\r
        <Checkbox label="Try focusing this checkbox with Tab key and pressing Space to toggle" id="accessible-checkbox" />\r
        <Checkbox label="This is another checkbox you can navigate to with Tab" id="accessible-checkbox-2" />\r
        <Checkbox label="This checkbox is disabled and should be skipped during Tab navigation" id="accessible-checkbox-3" disabled />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: \` 
          ### Accessibility Features 
          - **Keyboard Navigation**: Users can navigate to checkboxes using the Tab key and toggle them using the Space bar 
          - **ARIA Support**: Uses aria-checked for state, aria-invalid for error states, and aria-disabled for disabled states
          - **Focus Management**: Visual focus indicators help keyboard users identify which element is currently focused 
          - **Screen Reader Support**: Compatible with screen readers through proper HTML semantics and ARIA attributes
          - **Semantic HTML**: Uses proper label association and keyboard events for native behavior
        \`
      }
    }
  }
}`,...(H=(I=p.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var B,G,N;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px'
  }}>\r
      <div>\r
        <h4>Do</h4>\r
        <div style={{
        border: '1px solid green',
        padding: '16px',
        borderRadius: '8px'
      }}>\r
          <Checkbox label="Use clear, concise labels" />\r
          <div style={{
          marginTop: '16px'
        }}>\r
            <Checkbox label="Format lists of checkboxes consistently" />\r
            <Checkbox label="Group related options visually" />\r
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
          <Checkbox label="Don't use extremely long labels that wrap multiple times and make the checkbox difficult to visually associate with its text, creating confusion for users who are trying to understand what option they're selecting" />\r
          <div style={{
          marginTop: '16px'
        }}>\r
            <Checkbox />\r
            <p style={{
            marginLeft: '16px',
            marginTop: '4px'
          }}>Don't separate labels from checkboxes</p>\r
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
- Use clear, concise labels that explain the option
- Group related checkboxes together
- Use the indeterminate state for parent checkboxes when appropriate
- Maintain consistent vertical alignment for lists of checkboxes
- Consider using checkboxes for optional selections and radio buttons for required selections

#### Don't:
- Use checkboxes for actions or commands (use buttons instead)
- Create checkboxes without labels or with unclear descriptions
- Place labels far from their associated checkboxes
- Use extremely long labels that wrap multiple times
- Hide the checkbox itself and only show a label
\`
      }
    }
  }
}`,...(N=(G=b.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};const ae=["Default","Controlled","States","Sizes","Themes","FormUsage","Accessibility","BestPractices"];export{p as Accessibility,b as BestPractices,c as Controlled,i as Default,h as FormUsage,n as Sizes,l as States,d as Themes,ae as __namedExportsOrder,se as default};
