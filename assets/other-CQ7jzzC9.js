import{c as o,l as p,aA as s,g as n,n as t}from"./index-CrE7RJmu.js";const c={class:"markdown-body"},k={__name:"other",setup(l,{expose:e}){return e({frontmatter:{}}),(u,a)=>(o(),p("div",c,[...a[0]||(a[0]=[s('<h1 id="other%20directives" tabindex="-1">Other Directives</h1><p>Apart from the two independent interaction directives <strong>Drag</strong> and <strong>Resize</strong>, TechUI also provides <strong>shortcut directive</strong> versions for frequently used overlay components.</p><p>Using these directives, you can directly bind interaction behaviors to existing DOM elements without changing the HTML structure to nest components.</p><p>These directives are mentioned in their corresponding component documentation, so they are collected in this single document and will not be introduced in separate chapters.</p><h2 id="popover" tabindex="-1">Popover</h2><p>Used to quickly invoke <strong>PopTip (Text Tip)</strong> or <strong>Popinfo (Info Card)</strong>.</p><p>It is a directive encapsulation of the <code>TuiPopTip</code> and <code>TuiPopinfo</code> components, switching forms via the <code>appearance</code> property.</p><h3 id="basic%20usage" tabindex="-1">Basic Usage</h3>',8),n("div",{class:"code-wrapper","data-lang":"vue"},[n("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[n("span",{class:"lang-name"},"vue")]),n("pre",{class:"language-markup"},[n("code",{class:"language-markup"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("TuiButton")]),t(` 
      `),n("span",{class:"token attr-name"},"v-tui-popover"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{ 
        content: 'This is a basic tip', 
        placement: 'top',
        type: 'primary'
      }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Text Tip
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("TuiButton")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("TuiButton")]),t(` 
      `),n("span",{class:"token attr-name"},"v-tui-popover"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{ 
        appearance: 'pop-info',
        title: 'Details', 
        content: 'This is card content containing a title.', 
        trigger: 'click' 
      }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Card Tip
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("TuiButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),s('<blockquote><p>For detailed parameter configuration, please refer to: [PopTip Documentation] or [Popinfo Documentation]</p></blockquote><h2 id="popup%20menu" tabindex="-1">Popup Menu</h2><p>Used to quickly bind <strong>Menu</strong> functionality to an element.</p><p>It is a lightweight implementation of the <code>TuiMenu</code> component, supporting left-click, hover, or right-click menus, with the data source completely driven by the <code>menus</code> array.</p><h3 id="basic%20usage-1" tabindex="-1">Basic Usage</h3>',5),n("div",{class:"code-wrapper","data-lang":"vue"},[n("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[n("span",{class:"lang-name"},"vue")]),n("pre",{class:"language-markup"},[n("code",{class:"language-markup"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" menuData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Copy'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'copy'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ti-copy'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Paste'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'paste'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ti-paste'"),t(),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"]"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(` 
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("context-area"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-tui-menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{ 
      trigger: 'contextmenu', 
      menus: menuData,
      menuClick: (params) => console.log(params)
    }`),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    Right-click in this area
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),n("blockquote",null,[n("p",null,"For detailed parameter configuration, please refer to: [Menu Documentation]")],-1),n("h2",{id:"cursor%20tip",tabindex:"-1"},"Cursor Tip",-1),n("p",null,[t("Used to generate a "),n("strong",null,"CursorTip"),t(" that follows mouse movement.")],-1),n("p",null,[t("It uses "),n("strong",null,"Virtual Anchor"),t(" technology to make the tooltip attach to the mouse in real-time. It is commonly used in areas requiring real-time status feedback (such as map exploration, drawing boards, status indication).")],-1),n("h3",{id:"basic%20usage-2",tabindex:"-1"},"Basic Usage",-1),n("div",{class:"code-wrapper","data-lang":"vue"},[n("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[n("span",{class:"lang-name"},"vue")]),n("pre",{class:"language-markup"},[n("code",{class:"language-markup"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(` 
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("explore-zone"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-tui-cursor-tip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{ 
      title: 'Zone A',
      content: 'Status: Running Normally', 
      type: 'success',
      caretOffset: 15
    }`),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    Hover Me
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),n("blockquote",null,[n("p",null,"For detailed parameter configuration, please refer to: [CursorTip Documentation]")],-1)])]))}};export{k as default};
