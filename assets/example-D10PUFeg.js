import{V as e,_ as t,p as n,u as r,v as i}from"./runtime-core.esm-bundler-CXb3iQhv.js";var a={class:`markdown-body`},o={__name:`example`,setup(o,{expose:s}){return s({frontmatter:{}}),(o,s)=>(e(),n(`div`,a,[...s[0]||=[t(`<h1 id="%E4%B8%BB%E9%A2%98%E6%A1%88%E4%BE%8B" tabindex="-1">主题案例</h1><p>本章节提供了一个标准主题文件的完整代码示例。您可以将其作为模板，复制并修改以创建您的自定义主题。</p><p>该案例展示了以下核心特性：</p><ol><li><strong>混合颜色格式</strong>：演示了如何同时使用 TechUI 预设色 (<code>$c</code>)、十六进制 (<code>#fff</code>) 和 RGBA (<code>rgba(...)</code>)。</li><li><strong>颜色计算</strong>：演示了如何使用 <code>fade</code>、<code>darken</code> 等函数基于基准色生成衍生色。</li><li><strong>标准结构</strong>：包含了 <code>common</code>, <code>font</code>, <code>button</code>, <code>chart</code> 等所有必要字段。</li></ol><h2 id="%E4%BB%A3%E7%A0%81%E5%B1%95%E7%A4%BA" tabindex="-1">代码展示</h2><p>创建文件 <code>src/themes/myTheme.js</code>：</p>`,6),r(`div`,{class:`code-wrapper`,"data-lang":`javascript`},[r(`button`,{class:`tui-icon ti-copy`,title:`Copy Code`,onclick:`copyCode(this)`},[r(`span`,{class:`lang-name`},`javascript`)]),r(`pre`,{class:`language-javascript`},[r(`code`,{class:`language-javascript`},[r(`span`,{class:`token keyword`},`import`),i(` $c `),r(`span`,{class:`token keyword`},`from`),i(),r(`span`,{class:`token string`},`"@techui/colors"`),r(`span`,{class:`token punctuation`},`;`),i(`
`),r(`span`,{class:`token keyword`},`import`),i(),r(`span`,{class:`token punctuation`},`{`),i(` tTheme `),r(`span`,{class:`token punctuation`},`}`),i(),r(`span`,{class:`token keyword`},`from`),i(),r(`span`,{class:`token string`},`"@techui/utils"`),r(`span`,{class:`token punctuation`},`;`),i(`

`),r(`span`,{class:`token comment`},`// 1. 提取常用的颜色处理函数`),i(`
`),r(`span`,{class:`token keyword`},`const`),i(),r(`span`,{class:`token punctuation`},`{`),i(` fade`),r(`span`,{class:`token punctuation`},`,`),i(` darken`),r(`span`,{class:`token punctuation`},`,`),i(` lighten `),r(`span`,{class:`token punctuation`},`}`),i(),r(`span`,{class:`token operator`},`=`),i(` $c`),r(`span`,{class:`token punctuation`},`;`),i(`

`),r(`span`,{class:`token comment`},`// 2. 定义主题数据对象`),i(`
`),r(`span`,{class:`token keyword`},`const`),i(` themeData `),r(`span`,{class:`token operator`},`=`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
  `),r(`span`,{class:`token literal-property property`},`name`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`"lightBlue"`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 主题内部名称`),i(`

  `),r(`span`,{class:`token comment`},`// --- 基础通用层 ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`common`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`          `),r(`span`,{class:`token comment`},`// 使用 TechUI 预设色 (White)`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya3`),r(`span`,{class:`token punctuation`},`,`),i(`        `),r(`span`,{class:`token comment`},`// 使用 TechUI 预设色 (Gray Light 3)`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_layer`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`"#f0f2f5"`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 使用 Hex 十六进制`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_layer`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyA08`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_muted`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyA06`),r(`span`,{class:`token punctuation`},`,`),i(`  `),r(`span`,{class:`token comment`},`// 弱化背景，用于组件内部低强调区域`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_muted`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyA09`),r(`span`,{class:`token punctuation`},`,`),i(`  `),r(`span`,{class:`token comment`},`// 弱化边框，用于组件内部低强调边界`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_frame`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyA03`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_frame`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyA08`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_root`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`"rgba(240, 242, 245, 1)"`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 使用 RGBA`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_root`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyA15`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`

  `),r(`span`,{class:`token comment`},`// --- 排版系统 ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`font`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token literal-property property`},`weakest`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`weaker`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya5`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`weak`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyb5`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`base`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyc9`),r(`span`,{class:`token punctuation`},`,`),i(`      `),r(`span`,{class:`token comment`},`// 正文颜色`),i(`
    `),r(`span`,{class:`token literal-property property`},`strong`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyd3`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`stronger`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyd7`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`strongest`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`"#000000"`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 纯黑`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`

  `),r(`span`,{class:`token comment`},`// --- 交互组件：按钮 ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`button`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya4`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token comment`},`// 悬停态：使用 TechUI 颜色`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_hov`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza1`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_hov`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza2`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token comment`},`// 激活态：使用透明度函数计算`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_act`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token function`},`fade`),r(`span`,{class:`token punctuation`},`(`),r(`span`,{class:`token string`},`'azA01'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token number`},`0.9`),r(`span`,{class:`token punctuation`},`)`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_act`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza5`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token comment`},`// 禁用态`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_dis`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya2`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_dis`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya4`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`

  `),r(`span`,{class:`token comment`},`// --- 交互组件：输入框 ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`input`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya3`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_hov`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_hov`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azC03`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_foc`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_foc`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA08`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 聚焦时的边框色`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_dis`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyA08`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd_dis`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyA12`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`

  `),r(`span`,{class:`token comment`},`// --- 功能色阶 ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`primary`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token literal-property property`},`weakest`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA01`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`weaker`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA03`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`weak`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA06`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`base`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA09`),r(`span`,{class:`token punctuation`},`,`),i(`   `),r(`span`,{class:`token comment`},`// 主色基准`),i(`
    `),r(`span`,{class:`token literal-property property`},`strong`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azC11`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`stronger`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azD13`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`strongest`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azE16`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token comment`},`// ... success, warning, danger, info (结构同上，此处省略)`),i(`

  `),r(`span`,{class:`token comment`},`// --- 布局配置 ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`sider`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token literal-property property`},`fc`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token function`},`fade`),r(`span`,{class:`token punctuation`},`(`),r(`span`,{class:`token string`},`'azd1'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token number`},`0.8`),r(`span`,{class:`token punctuation`},`)`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 侧边栏文字带透明度`),i(`
    `),r(`span`,{class:`token literal-property property`},`focus`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`cyA10`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_hov`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token function`},`fade`),r(`span`,{class:`token punctuation`},`(`),r(`span`,{class:`token string`},`'bk'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token number`},`0.1`),r(`span`,{class:`token punctuation`},`)`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_act`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token function`},`fade`),r(`span`,{class:`token punctuation`},`(`),r(`span`,{class:`token string`},`'bk'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token number`},`0.3`),r(`span`,{class:`token punctuation`},`)`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
      `),r(`span`,{class:`token comment`},`// 侧边栏渐变背景`),i(`
      `),r(`span`,{class:`token literal-property property`},`grad_pri`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza5`),r(`span`,{class:`token punctuation`},`,`),i(`
      `),r(`span`,{class:`token literal-property property`},`grad_sec`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza7`),r(`span`,{class:`token punctuation`},`,`),i(`
      `),r(`span`,{class:`token literal-property property`},`grad_thi`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza8`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`

  `),r(`span`,{class:`token comment`},`// --- 全局背景策略 ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`background`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token comment`},`// 视图区域渐变流`),i(`
    `),r(`span`,{class:`token literal-property property`},`view_grad`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`[`),i(`$c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`caA01`),r(`span`,{class:`token punctuation`},`,`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA03`),r(`span`,{class:`token punctuation`},`]`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`view_svgfill`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`view_svgfill_opa`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token number`},`0.5`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`root`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya2`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`root_svgfill`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`root_svgfill_opa`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token number`},`0.7`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`

  `),r(`span`,{class:`token comment`},`// --- 科幻/3D 风格配置 ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`scifi`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token literal-property property`},`thickness`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gyb5`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bg_alt`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA02`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`bd`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza1`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`fc`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza5`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`hlite`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`cya5`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 高亮发光色`),i(`
    `),r(`span`,{class:`token literal-property property`},`focus`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza5`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`

  `),r(`span`,{class:`token comment`},`// --- 图表配色 (ECharts) ---`),i(`
  `),r(`span`,{class:`token literal-property property`},`chart`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
    `),r(`span`,{class:`token literal-property property`},`line`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
      `),r(`span`,{class:`token literal-property property`},`weak`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya2`),r(`span`,{class:`token punctuation`},`,`),i(`
      `),r(`span`,{class:`token literal-property property`},`base`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya5`),r(`span`,{class:`token punctuation`},`,`),i(`
      `),r(`span`,{class:`token literal-property property`},`strong`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`gya9`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`map`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`{`),i(`
      `),r(`span`,{class:`token literal-property property`},`fc`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza6`),r(`span`,{class:`token punctuation`},`,`),i(`
      `),r(`span`,{class:`token literal-property property`},`bg`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA01`),r(`span`,{class:`token punctuation`},`,`),i(`
      `),r(`span`,{class:`token literal-property property`},`bd`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`azA05`),r(`span`,{class:`token punctuation`},`,`),i(`
      `),r(`span`,{class:`token literal-property property`},`bg_hov`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`yea1`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 地图 Hover 黄色`),i(`
      `),r(`span`,{class:`token literal-property property`},`bd_hov`),r(`span`,{class:`token operator`},`:`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`ora3`),r(`span`,{class:`token punctuation`},`,`),i(`
      `),r(`span`,{class:`token literal-property property`},`glow`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token function`},`fade`),r(`span`,{class:`token punctuation`},`(`),r(`span`,{class:`token string`},`'caa7'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token number`},`0.3`),r(`span`,{class:`token punctuation`},`)`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 发光效果`),i(`
      `),r(`span`,{class:`token literal-property property`},`shadow`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token function`},`fade`),r(`span`,{class:`token punctuation`},`(`),r(`span`,{class:`token string`},`'azA05'`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token number`},`0.5`),r(`span`,{class:`token punctuation`},`)`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token comment`},`// 自动生成 ECharts 调色盘`),i(`
    `),r(`span`,{class:`token literal-property property`},`palette`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`[`),i(`$c`),r(`span`,{class:`token punctuation`},`.`),i(`aza5`),r(`span`,{class:`token punctuation`},`,`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`cya5`),r(`span`,{class:`token punctuation`},`,`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`yea5`),r(`span`,{class:`token punctuation`},`,`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`rea4`),r(`span`,{class:`token punctuation`},`]`),r(`span`,{class:`token punctuation`},`,`),i(`
    `),r(`span`,{class:`token literal-property property`},`visual`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`[`),i(`$c`),r(`span`,{class:`token punctuation`},`.`),i(`caa3`),r(`span`,{class:`token punctuation`},`,`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`wh`),r(`span`,{class:`token punctuation`},`]`),r(`span`,{class:`token punctuation`},`,`),i(`
  `),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`,`),i(`
`),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`;`),i(`

`),r(`span`,{class:`token comment`},`// 3. 注册主题`),i(`
tTheme`),r(`span`,{class:`token punctuation`},`.`),r(`span`,{class:`token function`},`register`),r(`span`,{class:`token punctuation`},`(`),r(`span`,{class:`token punctuation`},`{`),i(`
  `),r(`span`,{class:`token literal-property property`},`value`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`"lightBlue"`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 全局唯一 ID`),i(`
  `),r(`span`,{class:`token literal-property property`},`scheme`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token string`},`"light"`),r(`span`,{class:`token punctuation`},`,`),i(`    `),r(`span`,{class:`token comment`},`// 归属色系：light | dark`),i(`
  `),r(`span`,{class:`token literal-property property`},`colors`),r(`span`,{class:`token operator`},`:`),i(),r(`span`,{class:`token punctuation`},`[`),i(`$c`),r(`span`,{class:`token punctuation`},`.`),i(`aza5`),r(`span`,{class:`token punctuation`},`,`),i(` $c`),r(`span`,{class:`token punctuation`},`.`),i(`aza1`),r(`span`,{class:`token punctuation`},`]`),r(`span`,{class:`token punctuation`},`,`),i(),r(`span`,{class:`token comment`},`// 在控制面板显示的预览色块`),i(`
  `),r(`span`,{class:`token literal-property property`},`data`),r(`span`,{class:`token operator`},`:`),i(` themeData
`),r(`span`,{class:`token punctuation`},`}`),r(`span`,{class:`token punctuation`},`)`),r(`span`,{class:`token punctuation`},`;`),i(`
`)])])],-1),t(`<h2 id="%E9%A2%9C%E8%89%B2%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E" tabindex="-1">颜色格式说明</h2><p>TechUI 的主题系统支持多种颜色格式。您可以在 <code>themeData</code> 中混合使用以下三种格式，但建议优先保持语义清晰和色彩体系一致。</p><h3 id="techui%20%E9%A2%84%E8%AE%BE%E5%8F%98%E9%87%8F%20(%24c)" tabindex="-1">TechUI 预设变量 ($c)</h3><p><strong>推荐使用</strong>。这是最语义化且便于维护的方式。</p><ul><li>示例：<code>$c.rea5</code> (标准红), <code>$c.gya3</code> (浅灰)</li><li>优势：支持 <code>lighten</code>, <code>fade</code> 等函数计算，自动适配色谱。</li></ul><h3 id="%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%20(hex)" tabindex="-1">十六进制 (Hex)</h3><p>适用于从设计稿（Figma/Sketch）直接复制颜色值。</p><ul><li>示例：<code>&quot;#ffffff&quot;</code>, <code>&quot;#1890ff&quot;</code></li><li>优势：通用性强，与设计工具无缝对接。</li></ul><h3 id="rgba%20%2F%20rgb" tabindex="-1">RGBA / RGB</h3><p>适用于需要精确控制透明度，且不想使用 <code>$c.fade</code> 函数的场景。</p><ul><li>示例：<code>&quot;rgba(0, 0, 0, 0.5)&quot;</code>, <code>&quot;rgb(255, 255, 255)&quot;</code></li><li>优势：原生 CSS 支持，直观的透明度控制。</li></ul><h2 id="%E5%BC%80%E5%8F%91%E5%BB%BA%E8%AE%AE" tabindex="-1">开发建议</h2><ul><li><strong>基准色优先</strong>：在定义 <code>primary</code> 等色阶时，建议先确定 <code>base</code> 色，然后通过 <code>$c.lighten()</code> 或 <code>$c.darken()</code> 自动生成 weak/strong 变体，以保持色阶的数学规律性。</li><li><strong>复用变量</strong>：在 <code>scifi</code> 或 <code>chart</code> 等高级配置中，尽量复用 <code>common</code> 或 <code>primary</code> 中的颜色，而不是引入新的色值，这能让主题看起来更加统一协调。</li></ul>`,13)]]))}};export{o as default};