import{V as e,_ as t,p as n,u as r,v as i}from"./runtime-core.esm-bundler-CXb3iQhv.js";var a={class:`markdown-body`},o={__name:`other`,setup(o,{expose:s}){return s({frontmatter:{}}),(o,s)=>(e(),n(`div`,a,[...s[0]||=[t(`<h1 id="%E5%85%B6%E4%BB%96%E6%8C%87%E4%BB%A4" tabindex="-1">其他指令</h1><p>除了 <strong>Drag (拖拽)</strong> 和 <strong>Resize (尺寸监听)</strong> 这两个独立的交互指令外，TechUI 还为高频使用的浮层组件提供了<strong>快捷指令</strong>版本。</p><p>使用这些指令，您可以直接将交互行为绑定到现有的 DOM 元素上，而无需改变 HTML 结构进行组件嵌套。</p><p>这些指令在对应的组件文档中均有提及，所以这些指令集合在一个文档中，不再用独立章节进行介绍。</p><h2 id="%E6%B0%94%E6%B3%A1%E6%8F%90%E7%A4%BA" tabindex="-1">气泡提示</h2><p>用于快速唤起 <strong>PopTip (文字提示)</strong> 或 <strong>Popinfo (信息卡片)</strong>。</p><p>它是 <code>TuiPopTip</code> 和 <code>TuiPopinfo</code> 组件的指令化封装，通过 <code>appearance</code> 属性进行形态切换。</p><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1">基础用法</h3>`,8),r(`div`,{class:`code-wrapper`,"data-lang":`vue`},[r(`button`,{class:`tui-icon ti-copy`,title:`Copy Code`,onclick:`copyCode(this)`},[r(`span`,{class:`lang-name`},`vue`)]),r(`pre`,{class:`language-markup`},[r(`code`,{class:`language-markup`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`div`)]),i(),r(`span`,{class:`token attr-name`},`class`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`row`),r(`span`,{class:`token punctuation`},`"`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
    `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`TuiButton`)]),i(` 
      `),r(`span`,{class:`token attr-name`},`v-tui-popover`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`{ 
        content: '这是一个基础提示', 
        placement: 'top',
        type: 'primary'
      }`),r(`span`,{class:`token punctuation`},`"`)]),i(`
    `),r(`span`,{class:`token punctuation`},`>`)]),i(`
      文字提示
    `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`TuiButton`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

    `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`TuiButton`)]),i(` 
      `),r(`span`,{class:`token attr-name`},`v-tui-popover`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`{ 
        appearance: 'pop-info',
        title: '详细信息', 
        content: '这是一段包含标题的卡片内容。', 
        trigger: 'click' 
      }`),r(`span`,{class:`token punctuation`},`"`)]),i(`
    `),r(`span`,{class:`token punctuation`},`>`)]),i(`
      卡片提示
    `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`TuiButton`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`div`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
`),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

`)])])],-1),t(`<blockquote><p>详细参数配置请参阅：[PopTip 文档] 或 [Popinfo 文档]</p></blockquote><h2 id="%E5%BC%B9%E5%87%BA%E8%8F%9C%E5%8D%95" tabindex="-1">弹出菜单</h2><p>用于快速为元素绑定 <strong>Menu (菜单)</strong> 功能。</p><p>它是 <code>TuiMenu</code> 组件的轻量化实现，支持左键点击、悬停或右键菜单，数据源完全由 <code>menus</code> 数组驱动。</p><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95-1" tabindex="-1">基础用法</h3>`,5),r(`div`,{class:`code-wrapper`,"data-lang":`vue`},[r(`button`,{class:`tui-icon ti-copy`,title:`Copy Code`,onclick:`copyCode(this)`},[r(`span`,{class:`lang-name`},`vue`)]),r(`pre`,{class:`language-markup`},[r(`code`,{class:`language-markup`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`script`)]),i(),r(`span`,{class:`token attr-name`},`setup`),r(`span`,{class:`token punctuation`},`>`)]),r(`span`,{class:`token script`},[r(`span`,{class:`token language-javascript`},[i(`
`),r(`span`,{class:`token keyword`},`const`),i(` menuData `),r(`span`,{class:`token operator`},`=`),i(),r(`span`,{class:`token punctuation`},`[`),i(`
  `),r(`span`,{class:`token punctuation`},`{`),i(),r(`span`,{class:`token literal-property property`},`label`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'复制'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token literal-property property`},`value`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'copy'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token literal-property property`},`icon`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'ti-copy'`),i(),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`{`),i(),r(`span`,{class:`token literal-property property`},`label`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'粘贴'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token literal-property property`},`value`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'paste'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token literal-property property`},`icon`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`'ti-paste'`),i(),r(`span`,{class:`token punctuation`},`}`),i(`
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
    在此区域点击右键
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`div`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
`),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

`)])])],-1),r(`blockquote`,null,[r(`p`,null,`详细参数配置请参阅：[Menu 文档]`)],-1),r(`h2`,{id:`%E8%B7%9F%E9%9A%8F%E6%8F%90%E7%A4%BA`,tabindex:`-1`},`跟随提示`,-1),r(`p`,null,[i(`用于生成跟随鼠标移动的 `),r(`strong`,null,`CursorTip (光标提示)`),i(`。`)],-1),r(`p`,null,`它通过虚拟锚点技术让提示框实时吸附在鼠标旁。常用于需要实时反馈状态的区域（如地图探索、绘图板、状态指示）。`,-1),r(`h3`,{id:`%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95-2`,tabindex:`-1`},`基础用法`,-1),r(`div`,{class:`code-wrapper`,"data-lang":`vue`},[r(`button`,{class:`tui-icon ti-copy`,title:`Copy Code`,onclick:`copyCode(this)`},[r(`span`,{class:`lang-name`},`vue`)]),r(`pre`,{class:`language-markup`},[r(`code`,{class:`language-markup`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`<`),i(`div`)]),i(` 
    `),r(`span`,{class:`token attr-name`},`class`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`explore-zone`),r(`span`,{class:`token punctuation`},`"`)]),i(`
    `),r(`span`,{class:`token attr-name`},`v-tui-cursor-tip`),r(`span`,{class:`token attr-value`},[r(`span`,{class:`token punctuation attr-equals`},`=`),r(`span`,{class:`token punctuation`},`"`),i(`{ 
      title: '区域 A',
      content: '状态：正常运行', 
      type: 'success',
      caretOffset: 15
    }`),r(`span`,{class:`token punctuation`},`"`)]),i(`
  `),r(`span`,{class:`token punctuation`},`>`)]),i(`
    Hover Me
  `),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`div`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`
`),r(`span`,{class:`token tag`},[r(`span`,{class:`token tag`},[r(`span`,{class:`token punctuation`},`</`),i(`template`)]),r(`span`,{class:`token punctuation`},`>`)]),i(`

`)])])],-1),r(`blockquote`,null,[r(`p`,null,`详细参数配置请参阅：[CursorTip 文档]`)],-1)]]))}};export{o as default};