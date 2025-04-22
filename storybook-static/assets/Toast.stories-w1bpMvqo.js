import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-D4lIrffr.js";import{T as c}from"./Toast-YPCsOtsN.js";import{d as a}from"./styled-components.browser.esm-B9kjeC-a.js";const ne=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M16 6L8 14L4 10",strokeLinecap:"round",strokeLinejoin:"round"})}),ae=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"10",cy:"10",r:"8"}),e.jsx("path",{d:"M12 8L8 12M8 8L12 12",strokeLinecap:"round"})]}),le=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",strokeLinecap:"round"})}),d=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"10",cy:"10",r:"8"}),e.jsx("path",{d:"M10 14V10M10 6H10.01",strokeLinecap:"round"})]}),ce=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`,s=a.button`
  padding: 0.5rem 1rem;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:hover {
    background-color: #2563EB;
  }
`,w=a.div`
  margin-bottom: 2rem;
`,C=a.h3`
  margin-bottom: 1rem;
`,de=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
`,ie=a.div`
  border-radius: 0.5rem;
  padding: 1rem;
  
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
    margin-bottom: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`,pe=a(ie)`
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
`,me=a(ie)`
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
`,ue=a.div`
  position: relative;
  padding: 2rem;
  background-color: #1e293b;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`,he=a.div`
  background-color: #3B82F6;
  color: white;
  padding: 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: flex-start;
  position: relative;
`,p=a.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
`,ye={title:"Feedback/Toast",component:c,parameters:{layout:"centered",docs:{description:{component:`
# Toast Component

The Toast component displays brief, temporary notifications to users. Toasts are non-disruptive and typically appear and disappear with animations. They can be used to confirm actions, display status updates, or provide important information.

## Features

- Multiple variants (info, success, warning, error)
- Configurable positions
- Auto-dismiss functionality
- Custom icons
- Accessible (proper ARIA attributes)
- Themeable with styled-components
- Responsive design
        `}}},argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"The visual style of the toast"},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],description:"Where the toast should appear on the screen"},title:{control:"text",description:"The title text displayed in the toast"},message:{control:"text",description:"The body text displayed in the toast"},icon:{control:!1,description:"Optional icon element to display in the toast"},autoClose:{control:"boolean",description:"Whether the toast should automatically close"},autoCloseTime:{control:"number",description:"Time in milliseconds before the toast auto-closes"},isOpen:{control:"boolean",description:"Controls the visibility of the toast"},onClose:{action:"closed",description:"Callback function when the toast is closed"}}},m={args:{variant:"info",title:"Information",message:"This is an information message",isOpen:!0,icon:e.jsx(d,{})}},u={args:{variant:"success",title:"Success",message:"Your action was completed successfully",isOpen:!0,icon:e.jsx(ne,{})}},h={args:{variant:"warning",title:"Warning",message:"Please be careful with this action",isOpen:!0,icon:e.jsx(le,{})}},g={args:{variant:"error",title:"Error",message:"Something went wrong. Please try again",isOpen:!0,icon:e.jsx(ae,{})}},x={render:()=>{const[r,t]=i.useState("top-right"),[n,o]=i.useState(!1),l=S=>{t(S),o(!0)};return e.jsxs("div",{children:[e.jsx("h3",{children:"Select a position to show the toast"}),e.jsxs(ce,{children:[e.jsx(s,{onClick:()=>l("top-left"),children:"Top Left"}),e.jsx(s,{onClick:()=>l("top-right"),children:"Top Right"}),e.jsx(s,{onClick:()=>l("top-center"),children:"Top Center"}),e.jsx(s,{onClick:()=>l("bottom-left"),children:"Bottom Left"}),e.jsx(s,{onClick:()=>l("bottom-right"),children:"Bottom Right"}),e.jsx(s,{onClick:()=>l("bottom-center"),children:"Bottom Center"})]}),e.jsx(c,{variant:"info",title:"Toast Position",message:`This toast is positioned at: ${r}`,position:r,isOpen:n,onClose:()=>o(!1),icon:e.jsx(d,{})})]})},parameters:{docs:{description:{story:"Toasts can be positioned in six different locations on the screen."}}}},f={render:()=>{const[r,t]=i.useState(!1),[n,o]=i.useState(3e3);return e.jsxs("div",{children:[e.jsx("h3",{children:"Auto-close Behavior"}),e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsxs("label",{children:["Auto-close after:",e.jsxs("select",{value:n,onChange:l=>o(Number(l.target.value)),style:{marginLeft:"0.5rem"},children:[e.jsx("option",{value:1e3,children:"1 second"}),e.jsx("option",{value:3e3,children:"3 seconds"}),e.jsx("option",{value:5e3,children:"5 seconds"}),e.jsx("option",{value:8e3,children:"8 seconds"})]})]})}),e.jsx(s,{onClick:()=>t(!0),children:"Show Auto-close Toast"}),e.jsx(c,{variant:"info",title:"Auto-close Toast",message:`This toast will auto-close after ${n/1e3} seconds`,isOpen:r,onClose:()=>t(!1),autoClose:!0,autoCloseTime:n})]})},parameters:{docs:{description:{story:"Toasts can be configured to automatically close after a specified time."}}}},b={render:()=>{const[r,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsx("h3",{children:"Accessibility Features"}),e.jsx("p",{children:"This toast uses proper ARIA attributes for accessibility:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Uses ",e.jsx("code",{children:'role="alert"'})]}),e.jsxs("li",{children:["Uses ",e.jsx("code",{children:'aria-live="assertive"'})]}),e.jsxs("li",{children:["Close button has ",e.jsx("code",{children:"aria-label"})]})]}),e.jsx(s,{onClick:()=>t(!0),children:"Show Accessible Toast"}),e.jsx(c,{variant:"info",title:"Accessible Toast",message:"This toast is fully accessible with proper ARIA attributes",isOpen:r,onClose:()=>t(!1)})]})},parameters:{docs:{description:{story:"Toasts are built with accessibility in mind, using proper ARIA roles and attributes."}}}},y={render:()=>{const[r,t]=i.useState(!1),[n,o]=i.useState(!1);return e.jsxs(w,{children:[e.jsx(C,{children:"Best Practices"}),e.jsxs(de,{children:[e.jsxs(pe,{children:[e.jsx("h4",{children:"✅ Do"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use toasts for non-critical, temporary information"}),e.jsx("li",{children:"Keep toast messages brief and clear"}),e.jsx("li",{children:"Include a way to dismiss the toast"}),e.jsx("li",{children:"Position toasts in a non-intrusive location"}),e.jsx("li",{children:"Use appropriate colors for different message types"})]}),e.jsx(s,{onClick:()=>t(!0),style:{marginTop:"1rem"},children:"Show Good Example"})]}),e.jsxs(me,{children:[e.jsx("h4",{children:"❌ Don't"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use toasts for critical errors that require user action"}),e.jsx("li",{children:"Stack too many toasts at once"}),e.jsx("li",{children:"Use toasts for persistent information"}),e.jsx("li",{children:"Make auto-close times too short for users to read"}),e.jsx("li",{children:"Position toasts where they block important UI elements"})]}),e.jsx(s,{onClick:()=>o(!0),style:{marginTop:"1rem"},children:"Show Bad Example"})]})]}),e.jsx(c,{variant:"success",title:"Document Saved",message:"Your changes have been saved successfully",icon:e.jsx(ne,{}),position:"bottom-right",isOpen:r,onClose:()=>t(!1),autoClose:!0,autoCloseTime:5e3}),e.jsx(c,{variant:"error",title:"Critical System Error 5023",message:"The system encountered a fatal exception in module DATA_PROCESSOR_XJ5. This requires immediate attention. Please contact your system administrator immediately and provide error code 5023-B. Do not attempt to continue using the application until this issue is resolved as it may result in data corruption or loss.",position:"top-center",isOpen:n,onClose:()=>o(!1),autoClose:!0,autoCloseTime:3e3})]})},parameters:{docs:{description:{story:"Guidelines for the effective use of Toast components."}}}},v={render:()=>e.jsxs(w,{children:[e.jsx(C,{children:"Toast Anatomy"}),e.jsx(ue,{children:e.jsxs(he,{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",marginRight:"12px"},children:e.jsx(d,{})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h4",{style:{margin:"0 0 4px",fontWeight:600},children:"Toast Title"}),e.jsx("p",{style:{margin:0,fontSize:"14px"},children:"This is the toast message content"})]}),e.jsx("button",{style:{background:"transparent",border:"none",color:"white",fontSize:"20px"},children:"×"}),e.jsx(p,{style:{top:"-15px",left:"25px"},children:"Icon"}),e.jsx(p,{style:{top:"10px",left:"100px"},children:"Title"}),e.jsx(p,{style:{top:"35px",left:"150px"},children:"Message"}),e.jsx(p,{style:{top:"10px",right:"-30px"},children:"Close Button"}),e.jsx(p,{style:{bottom:"-15px",left:"150px"},children:"Container"})]})}),e.jsx("p",{children:"A toast notification consists of the following parts:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Container"})," - The outer wrapper with background color based on variant"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Icon"})," (optional) - Visual indicator of the notification type"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Content"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Title"})," - Brief, bold heading (optional)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Message"})," - Descriptive text"]})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Close Button"})," - Allows users to dismiss the notification"]})]}),e.jsx("p",{children:"The toast also has built-in animation for mount/unmount transitions."})]}),parameters:{docs:{description:{story:"The structural components of the Toast component."}}}},T={render:()=>{const[r,t]=i.useState(!1),[n,o]=i.useState(!1);return e.jsxs(w,{children:[e.jsx(C,{children:"Responsive Behavior"}),e.jsx("p",{children:"The Toast component adapts to different screen sizes:"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"2rem",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Desktop View"}),e.jsxs("div",{style:{width:"500px",height:"300px",border:"1px solid #ccc",position:"relative",overflow:"hidden",borderRadius:"0.5rem",background:"#f9fafb",padding:"1rem"},children:[e.jsx("div",{style:{textAlign:"center",marginTop:"2rem"},children:e.jsx(s,{onClick:()=>t(!0),children:"Show Desktop Toast"})}),r&&e.jsxs("div",{style:{position:"absolute",bottom:"1rem",right:"1rem",width:"300px",background:"#3B82F6",color:"white",borderRadius:"0.375rem",padding:"1rem",display:"flex"},children:[e.jsx("div",{style:{marginRight:"0.75rem"},children:e.jsx(d,{})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"0.25rem"},children:"Desktop Toast"}),e.jsx("div",{style:{fontSize:"0.875rem"},children:"Standard width on larger screens"})]}),e.jsx("button",{style:{background:"transparent",border:"none",color:"white",fontSize:"1.25rem"},onClick:()=>t(!1),children:"×"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Mobile View"}),e.jsxs("div",{style:{width:"320px",height:"300px",border:"1px solid #ccc",position:"relative",overflow:"hidden",borderRadius:"0.5rem",background:"#f9fafb",padding:"1rem"},children:[e.jsx("div",{style:{textAlign:"center",marginTop:"2rem"},children:e.jsx(s,{onClick:()=>o(!0),children:"Show Mobile Toast"})}),n&&e.jsxs("div",{style:{position:"absolute",bottom:"1rem",left:"1rem",right:"1rem",background:"#3B82F6",color:"white",borderRadius:"0.375rem",padding:"1rem",display:"flex"},children:[e.jsx("div",{style:{marginRight:"0.75rem"},children:e.jsx(d,{})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"0.25rem"},children:"Mobile Toast"}),e.jsx("div",{style:{fontSize:"0.875rem"},children:"Adapts to fill available width"})]}),e.jsx("button",{style:{background:"transparent",border:"none",color:"white",fontSize:"1.25rem"},onClick:()=>o(!1),children:"×"})]})]})]})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"On larger screens, toasts maintain their standard width"}),e.jsx("li",{children:"On smaller screens (mobile devices), toasts adapt to take up more horizontal space"}),e.jsx("li",{children:"Position adapts based on screen size"}),e.jsx("li",{children:"Text wraps appropriately for smaller viewports"})]})]})},parameters:{docs:{description:{story:"How the Toast component adapts to different screen sizes."}}}},j={render:()=>{const[r,t]=i.useState(!1),[n,o]=i.useState(""),l=()=>{o("Close button is focused! Press Enter or Space to close.")},S=()=>{o("")};return e.jsxs(w,{children:[e.jsx(C,{children:"Keyboard Navigation"}),e.jsx("p",{children:"The Toast component supports these keyboard interactions:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tab"}),": Focuses the close button"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enter/Space"}),": When focus is on the close button, dismisses the toast"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Escape"}),": If implemented with a toast manager, can dismiss all toasts"]})]}),e.jsxs("div",{style:{marginTop:"1.5rem"},children:[e.jsx("p",{children:"Try keyboard navigation on this example:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Click the button below to show a toast"}),e.jsx("li",{children:"Press Tab to focus the close button"}),e.jsx("li",{children:"Press Enter or Space to dismiss"})]}),e.jsx(s,{onClick:()=>t(!0),children:"Show Toast for Keyboard Navigation"}),n&&e.jsx("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"rgba(59, 130, 246, 0.1)",borderRadius:"0.25rem",border:"1px solid rgba(59, 130, 246, 0.3)"},children:n})]}),r&&e.jsxs("div",{style:{position:"fixed",bottom:"1rem",right:"1rem",minWidth:"300px",maxWidth:"400px",background:"#3B82F6",color:"white",borderRadius:"0.375rem",padding:"1rem",display:"flex",zIndex:1e3},children:[e.jsx("div",{style:{marginRight:"0.75rem"},children:e.jsx(d,{})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"0.25rem"},children:"Keyboard Navigation Demo"}),e.jsx("div",{style:{fontSize:"0.875rem"},children:"Press Tab to focus the close button"})]}),e.jsx("button",{style:{background:"transparent",border:"none",color:"white",fontSize:"1.25rem",cursor:"pointer"},onClick:()=>t(!1),onFocus:l,onBlur:S,"aria-label":"Close notification",children:"×"})]})]})},parameters:{docs:{description:{story:"Keyboard accessibility features of the Toast component."}}}};var k,B,A;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an information message',
    isOpen: true,
    icon: <InfoIcon />
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var I,O,D;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your action was completed successfully',
    isOpen: true,
    icon: <SuccessIcon />
  }
}`,...(D=(O=u.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var R,E,M;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please be careful with this action',
    isOpen: true,
    icon: <WarningIcon />
  }
}`,...(M=(E=h.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var P,W,z;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again',
    isOpen: true,
    icon: <ErrorIcon />
  }
}`,...(z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var L,F,G;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState<ToastProps['position']>('top-right');
    const [isOpen, setIsOpen] = useState(false);
    const showToast = (pos: ToastProps['position']) => {
      setPosition(pos);
      setIsOpen(true);
    };
    return <div>\r
        <h3>Select a position to show the toast</h3>\r
        <ButtonGrid>\r
          <Button onClick={() => showToast('top-left')}>Top Left</Button>\r
          <Button onClick={() => showToast('top-right')}>Top Right</Button>\r
          <Button onClick={() => showToast('top-center')}>Top Center</Button>\r
          <Button onClick={() => showToast('bottom-left')}>Bottom Left</Button>\r
          <Button onClick={() => showToast('bottom-right')}>Bottom Right</Button>\r
          <Button onClick={() => showToast('bottom-center')}>Bottom Center</Button>\r
        </ButtonGrid>\r
        \r
        <Toast variant="info" title="Toast Position" message={\`This toast is positioned at: \${position}\`} position={position} isOpen={isOpen} onClose={() => setIsOpen(false)} icon={<InfoIcon />} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toasts can be positioned in six different locations on the screen.'
      }
    }
  }
}`,...(G=(F=x.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var U,K,N;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [autoCloseTime, setAutoCloseTime] = useState(3000);
    return <div>\r
        <h3>Auto-close Behavior</h3>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <label>\r
            Auto-close after:\r
            <select value={autoCloseTime} onChange={e => setAutoCloseTime(Number(e.target.value))} style={{
            marginLeft: '0.5rem'
          }}>\r
              <option value={1000}>1 second</option>\r
              <option value={3000}>3 seconds</option>\r
              <option value={5000}>5 seconds</option>\r
              <option value={8000}>8 seconds</option>\r
            </select>\r
          </label>\r
        </div>\r
        \r
        <Button onClick={() => setIsOpen(true)}>\r
          Show Auto-close Toast\r
        </Button>\r
        \r
        <Toast variant="info" title="Auto-close Toast" message={\`This toast will auto-close after \${autoCloseTime / 1000} seconds\`} isOpen={isOpen} onClose={() => setIsOpen(false)} autoClose={true} autoCloseTime={autoCloseTime} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toasts can be configured to automatically close after a specified time.'
      }
    }
  }
}`,...(N=(K=f.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var V,_,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>\r
        <h3>Accessibility Features</h3>\r
        <p>This toast uses proper ARIA attributes for accessibility:</p>\r
        <ul>\r
          <li>Uses <code>role="alert"</code></li>\r
          <li>Uses <code>aria-live="assertive"</code></li>\r
          <li>Close button has <code>aria-label</code></li>\r
        </ul>\r
        \r
        <Button onClick={() => setIsOpen(true)}>\r
          Show Accessible Toast\r
        </Button>\r
        \r
        <Toast variant="info" title="Accessible Toast" message="This toast is fully accessible with proper ARIA attributes" isOpen={isOpen} onClose={() => setIsOpen(false)} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toasts are built with accessibility in mind, using proper ARIA roles and attributes.'
      }
    }
  }
}`,...(q=(_=b.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var H,Y,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [goodExample, setGoodExample] = useState(false);
    const [badExample, setBadExample] = useState(false);
    return <DocsSection>\r
        <DocsTitle>Best Practices</DocsTitle>\r
        \r
        <DoDontGrid>\r
          <DoSection>\r
            <h4>✅ Do</h4>\r
            <ul>\r
              <li>Use toasts for non-critical, temporary information</li>\r
              <li>Keep toast messages brief and clear</li>\r
              <li>Include a way to dismiss the toast</li>\r
              <li>Position toasts in a non-intrusive location</li>\r
              <li>Use appropriate colors for different message types</li>\r
            </ul>\r
            <Button onClick={() => setGoodExample(true)} style={{
            marginTop: '1rem'
          }}>\r
              Show Good Example\r
            </Button>\r
          </DoSection>\r
          \r
          <DontSection>\r
            <h4>❌ Don't</h4>\r
            <ul>\r
              <li>Use toasts for critical errors that require user action</li>\r
              <li>Stack too many toasts at once</li>\r
              <li>Use toasts for persistent information</li>\r
              <li>Make auto-close times too short for users to read</li>\r
              <li>Position toasts where they block important UI elements</li>\r
            </ul>\r
            <Button onClick={() => setBadExample(true)} style={{
            marginTop: '1rem'
          }}>\r
              Show Bad Example\r
            </Button>\r
          </DontSection>\r
        </DoDontGrid>\r
        \r
        {/* Good example toast */}\r
        <Toast variant="success" title="Document Saved" message="Your changes have been saved successfully" icon={<SuccessIcon />} position="bottom-right" isOpen={goodExample} onClose={() => setGoodExample(false)} autoClose={true} autoCloseTime={5000} />\r
        \r
        {/* Bad example toast - Deliberately long text */}\r
        <Toast variant="error" title="Critical System Error 5023" message="The system encountered a fatal exception in module DATA_PROCESSOR_XJ5. This requires immediate attention. Please contact your system administrator immediately and provide error code 5023-B. Do not attempt to continue using the application until this issue is resolved as it may result in data corruption or loss." position="top-center" isOpen={badExample} onClose={() => setBadExample(false)} autoClose={true} autoCloseTime={3000} />\r
      </DocsSection>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Guidelines for the effective use of Toast components.'
      }
    }
  }
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var J,X,Z;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    return <DocsSection>\r
        <DocsTitle>Toast Anatomy</DocsTitle>\r
        \r
        <AnatomyContainer>\r
          <AnatomyToast>\r
            <div style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '12px'
          }}>\r
              <InfoIcon />\r
            </div>\r
            <div style={{
            flex: 1
          }}>\r
              <h4 style={{
              margin: '0 0 4px',
              fontWeight: 600
            }}>Toast Title</h4>\r
              <p style={{
              margin: 0,
              fontSize: '14px'
            }}>This is the toast message content</p>\r
            </div>\r
            <button style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '20px'
          }}>×</button>\r
            \r
            {/* Labels for anatomy */}\r
            <AnatomyLabel style={{
            top: '-15px',
            left: '25px'
          }}>Icon</AnatomyLabel>\r
            <AnatomyLabel style={{
            top: '10px',
            left: '100px'
          }}>Title</AnatomyLabel>\r
            <AnatomyLabel style={{
            top: '35px',
            left: '150px'
          }}>Message</AnatomyLabel>\r
            <AnatomyLabel style={{
            top: '10px',
            right: '-30px'
          }}>Close Button</AnatomyLabel>\r
            <AnatomyLabel style={{
            bottom: '-15px',
            left: '150px'
          }}>Container</AnatomyLabel>\r
          </AnatomyToast>\r
        </AnatomyContainer>\r
        \r
        <p>A toast notification consists of the following parts:</p>\r
        <ol>\r
          <li><strong>Container</strong> - The outer wrapper with background color based on variant</li>\r
          <li><strong>Icon</strong> (optional) - Visual indicator of the notification type</li>\r
          <li><strong>Content</strong>\r
            <ul>\r
              <li><strong>Title</strong> - Brief, bold heading (optional)</li>\r
              <li><strong>Message</strong> - Descriptive text</li>\r
            </ul>\r
          </li>\r
          <li><strong>Close Button</strong> - Allows users to dismiss the notification</li>\r
        </ol>\r
        \r
        <p>The toast also has built-in animation for mount/unmount transitions.</p>\r
      </DocsSection>;
  },
  parameters: {
    docs: {
      description: {
        story: 'The structural components of the Toast component.'
      }
    }
  }
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Q,ee,te;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [isDesktopToastOpen, setIsDesktopToastOpen] = useState(false);
    const [isMobileToastOpen, setIsMobileToastOpen] = useState(false);
    return <DocsSection>\r
        <DocsTitle>Responsive Behavior</DocsTitle>\r
        \r
        <p>The Toast component adapts to different screen sizes:</p>\r
        \r
        <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>\r
          <div>\r
            <h4>Desktop View</h4>\r
            <div style={{
            width: '500px',
            height: '300px',
            border: '1px solid #ccc',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '0.5rem',
            background: '#f9fafb',
            padding: '1rem'
          }}>\r
              <div style={{
              textAlign: 'center',
              marginTop: '2rem'
            }}>\r
                <Button onClick={() => setIsDesktopToastOpen(true)}>\r
                  Show Desktop Toast\r
                </Button>\r
              </div>\r
              \r
              {isDesktopToastOpen && <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              width: '300px',
              background: '#3B82F6',
              color: 'white',
              borderRadius: '0.375rem',
              padding: '1rem',
              display: 'flex'
            }}>\r
                  <div style={{
                marginRight: '0.75rem'
              }}><InfoIcon /></div>\r
                  <div style={{
                flex: 1
              }}>\r
                    <div style={{
                  fontWeight: 'bold',
                  marginBottom: '0.25rem'
                }}>Desktop Toast</div>\r
                    <div style={{
                  fontSize: '0.875rem'
                }}>Standard width on larger screens</div>\r
                  </div>\r
                  <button style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.25rem'
              }} onClick={() => setIsDesktopToastOpen(false)}>×</button>\r
                </div>}\r
            </div>\r
          </div>\r
          \r
          <div>\r
            <h4>Mobile View</h4>\r
            <div style={{
            width: '320px',
            height: '300px',
            border: '1px solid #ccc',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '0.5rem',
            background: '#f9fafb',
            padding: '1rem'
          }}>\r
              <div style={{
              textAlign: 'center',
              marginTop: '2rem'
            }}>\r
                <Button onClick={() => setIsMobileToastOpen(true)}>\r
                  Show Mobile Toast\r
                </Button>\r
              </div>\r
              \r
              {isMobileToastOpen && <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              background: '#3B82F6',
              color: 'white',
              borderRadius: '0.375rem',
              padding: '1rem',
              display: 'flex'
            }}>\r
                  <div style={{
                marginRight: '0.75rem'
              }}><InfoIcon /></div>\r
                  <div style={{
                flex: 1
              }}>\r
                    <div style={{
                  fontWeight: 'bold',
                  marginBottom: '0.25rem'
                }}>Mobile Toast</div>\r
                    <div style={{
                  fontSize: '0.875rem'
                }}>Adapts to fill available width</div>\r
                  </div>\r
                  <button style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.25rem'
              }} onClick={() => setIsMobileToastOpen(false)}>×</button>\r
                </div>}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <ul>\r
          <li>On larger screens, toasts maintain their standard width</li>\r
          <li>On smaller screens (mobile devices), toasts adapt to take up more horizontal space</li>\r
          <li>Position adapts based on screen size</li>\r
          <li>Text wraps appropriately for smaller viewports</li>\r
        </ul>\r
      </DocsSection>;
  },
  parameters: {
    docs: {
      description: {
        story: 'How the Toast component adapts to different screen sizes.'
      }
    }
  }
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,se,re;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusMessage, setFocusMessage] = useState('');
    const handleFocus = () => {
      setFocusMessage('Close button is focused! Press Enter or Space to close.');
    };
    const handleBlur = () => {
      setFocusMessage('');
    };
    return <DocsSection>\r
        <DocsTitle>Keyboard Navigation</DocsTitle>\r
        \r
        <p>The Toast component supports these keyboard interactions:</p>\r
        \r
        <ul>\r
          <li><strong>Tab</strong>: Focuses the close button</li>\r
          <li><strong>Enter/Space</strong>: When focus is on the close button, dismisses the toast</li>\r
          <li><strong>Escape</strong>: If implemented with a toast manager, can dismiss all toasts</li>\r
        </ul>\r
        \r
        <div style={{
        marginTop: '1.5rem'
      }}>\r
          <p>Try keyboard navigation on this example:</p>\r
          <ol>\r
            <li>Click the button below to show a toast</li>\r
            <li>Press Tab to focus the close button</li>\r
            <li>Press Enter or Space to dismiss</li>\r
          </ol>\r
          \r
          <Button onClick={() => setIsOpen(true)}>\r
            Show Toast for Keyboard Navigation\r
          </Button>\r
          \r
          {focusMessage && <div style={{
          marginTop: '1rem',
          padding: '0.5rem',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '0.25rem',
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}>\r
              {focusMessage}\r
            </div>}\r
        </div>\r
        \r
        {/* Custom toast with onFocus handler for the close button */}\r
        {isOpen && <div style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        minWidth: '300px',
        maxWidth: '400px',
        background: '#3B82F6',
        color: 'white',
        borderRadius: '0.375rem',
        padding: '1rem',
        display: 'flex',
        zIndex: 1000
      }}>\r
            <div style={{
          marginRight: '0.75rem'
        }}><InfoIcon /></div>\r
            <div style={{
          flex: 1
        }}>\r
              <div style={{
            fontWeight: 'bold',
            marginBottom: '0.25rem'
          }}>Keyboard Navigation Demo</div>\r
              <div style={{
            fontSize: '0.875rem'
          }}>Press Tab to focus the close button</div>\r
            </div>\r
            <button style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '1.25rem',
          cursor: 'pointer'
        }} onClick={() => setIsOpen(false)} onFocus={handleFocus} onBlur={handleBlur} aria-label="Close notification">×</button>\r
          </div>}\r
      </DocsSection>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Keyboard accessibility features of the Toast component.'
      }
    }
  }
}`,...(re=(se=j.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const ve=["Info","Success","Warning","Error","Positions","AutoClose","Accessibility","BestPractices","Anatomy","Responsive","KeyboardNavigation"];export{b as Accessibility,v as Anatomy,f as AutoClose,y as BestPractices,g as Error,m as Info,j as KeyboardNavigation,x as Positions,T as Responsive,u as Success,h as Warning,ve as __namedExportsOrder,ye as default};
