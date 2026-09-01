import{V as e,_ as t,p as n,u as r,v as i}from"./runtime-core.esm-bundler-CXb3iQhv.js";var a={class:`markdown-body`},o={__name:`other`,setup(o,{expose:s}){return s({frontmatter:{}}),(o,s)=>(e(),n(`div`,a,[...s[0]||=[t(`<h1 id="other%20directives" tabindex="-1">Other Directives</h1><p>Apart from the two independent interaction directives <strong>Drag</strong> and <strong>Resize</strong>, TechUI also provides <strong>shortcut directive</strong> versions for frequently used overlay components.</p><p>Using these directives, you can directly bind interaction behaviors to existing DOM elements without changing the HTML structure to nest components.</p><p>These directives are mentioned in their corresponding component documentation, so they are collected in this single document and will not be introduced in separate chapters.</p><h2 id="popover" tabindex="-1">Popover</h2><p>Used to quickly invoke <strong>PopTip (Text Tip)</strong> or <strong>Popinfo (Info Card)</strong>.</p><p>It is a directive encapsulation of the <code>TuiPopTip</code> and <code>TuiPopinfo</code> components, switching forms via the <code>appearance</code> property.</p><h3 id="basic%20usage" tabindex="-1">Basic Usage</h3>`,8),r(`div`,{class:`code-wrapper`,"data-lang":`vue`},[r(`button`,{class:`tui-icon ti-copy`,title:`Copy Code`,onclick:`copyCode(this)`},[r(`span`,{class:`lang-name`},`vue`)]),r(`pre`,{class:`language-markup`},[r(`code`,{class:`language-markup`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`div`)]),i(),r(`span`,{class:`token attr-name`},`class`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`row`),r(`span`,{class:`token punctuation`},`"`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
    `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`TuiButton`)]),i(` 
      `),r(`span`,{class:`token attr-name`},`v-tui-popover`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`{ 
        content: 'This is a basic tip', 
        placement: 'top',
        type: 'primary'
      }`),r(`span`,{class:`token punctuation`},`"`)]),i(`
    `),r(`span`,{class:`token punctuation`},`>`)]),i(`
      Text Tip
    `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`TuiButton`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

    `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`TuiButton`)]),i(` 
      `),r(`span`,{class:`token attr-name`},`v-tui-popover`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`{ 
        appearance: 'pop-info',
        title: 'Details', 
        content: 'This is card content containing a title.', 
        trigger: 'click' 
      }`),r(`span`,{class:`token punctuation`},`"`)]),i(`
    `),r(`span`,{class:`token punctuation`},`>`)]),i(`
      Card Tip
    `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`TuiButton`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`div`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
`),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

`)])])],-1),t(`<blockquote><p>For detailed parameter configuration, please refer to: [PopTip Documentation] or [Popinfo Documentation]</p></blockquote><h2 id="popup%20menu" tabindex="-1">Popup Menu</h2><p>Used to quickly bind <strong>Menu</strong> functionality to an element.</p><p>It is a lightweight implementation of the <code>TuiMenu</code> component, supporting left-click, hover, or right-click menus, with the data source completely driven by the <code>menus</code> array.</p><h3 id="basic%20usage-1" tabindex="-1">Basic Usage</h3>`,5),r(`div`,{class:`code-wrapper`,"data-lang":`vue`},[r(`button`,{class:`tui-icon ti-copy`,title:`Copy Code`,onclick:`copyCode(this)`},[r(`span`,{class:`lang-name`},`vue`)]),r(`pre`,{class:`language-markup`},[r(`code`,{class:`language-markup`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`script`)]),i(),r(`span`,{class:`token attr-name`},`setup`),r(`span`,{class:`token punctuation`},`>`)]),r(`span`,{class:`token script`},[r(`span`,{class:`token language-javascript`},[i(`
`),r(`span`,{class:`token keyword`},`const`),i(` menuData `),r(`span`,{class:`token operator`},`=`),i(),r(`span`,{class:`token punctuation`},`[`),i(`
  `),r(`span`,{class:`token punctuation`},`{`),i(),r(`span`,{class:`token literal-property property`},`label`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'Copy'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token literal-property property`},`value`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'copy'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token literal-property property`},`icon`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'ti-copy'`),i(),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`{`),i(),r(`span`,{class:`token literal-property property`},`label`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'Paste'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token literal-property property`},`value`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'paste'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token literal-property property`},`icon`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'ti-paste'`),i(),r(`span`,{class:`token punctuation`},`}`),i(`
`),r(`span`,{class:`token punctuation`},`]`),i(`
`)])]),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`script`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

`),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`div`)]),i(` 
    `),r(`span`,{class:`token attr-name`},`class`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`context-area`),r(`span`,{class:`token punctuation`},`"`)]),i(`
    `),r(`span`,{class:`token attr-name`},`v-tui-menu`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`{ 
      trigger: 'contextmenu', 
      menus: menuData,
      menuClick: (params) => console.log(params)
    }`),r(`span`,{class:`token punctuation`},`"`)]),i(`
  `),r(`span`,{class:`token punctuation`},`>`)]),i(`
    Right-click in this area
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`div`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
`),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

`)])])],-1),r(`blockquote`,null,[r(`p`,null,`For detailed parameter configuration, please refer to: [Menu Documentation]`)],-1),r(`h2`,{id:`cursor%20tip`,tabindex:`-1`},`Cursor Tip`,-1),r(`p`,null,[i(`Used to generate a `),r(`strong`,null,`CursorTip`),i(` that follows mouse movement.`)],-1),r(`p`,null,[i(`It uses `),r(`strong`,null,`Virtual Anchor`),i(` technology to make the tooltip attach to the mouse in real-time. It is commonly used in areas requiring real-time status feedback (such as map exploration, drawing boards, status indication).`)],-1),r(`h3`,{id:`basic%20usage-2`,tabindex:`-1`},`Basic Usage`,-1),r(`div`,{class:`code-wrapper`,"data-lang":`vue`},[r(`button`,{class:`tui-icon ti-copy`,title:`Copy Code`,onclick:`copyCode(this)`},[r(`span`,{class:`lang-name`},`vue`)]),r(`pre`,{class:`language-markup`},[r(`code`,{class:`language-markup`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`div`)]),i(` 
    `),r(`span`,{class:`token attr-name`},`class`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`explore-zone`),r(`span`,{class:`token punctuation`},`"`)]),i(`
    `),r(`span`,{class:`token attr-name`},`v-tui-cursor-tip`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`{ 
      title: 'Zone A',
      content: 'Status: Running Normally', 
      type: 'success',
      caretOffset: 15
    }`),r(`span`,{class:`token punctuation`},`"`)]),i(`
  `),r(`span`,{class:`token punctuation`},`>`)]),i(`
    Hover Me
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`div`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
`),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

`)])])],-1),r(`blockquote`,null,[r(`p`,null,`For detailed parameter configuration, please refer to: [CursorTip Documentation]`)],-1)]]))}};export{o as default};