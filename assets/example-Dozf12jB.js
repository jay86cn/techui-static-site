import{c as p,l as e,aA as t,g as n,n as a}from"./index-CrE7RJmu.js";const c={class:"markdown-body"},i={__name:"example",setup(r,{expose:o}){return o({frontmatter:{}}),(u,s)=>(p(),e("div",c,[...s[0]||(s[0]=[t('<h1 id="%E4%B8%BB%E9%A2%98%E6%A1%88%E4%BE%8B" tabindex="-1">主题案例</h1><p>本章节提供了一个标准主题文件的完整代码示例。您可以将其作为模板，复制并修改以创建您的自定义主题。</p><p>该案例展示了以下核心特性：</p><ol><li><strong>混合颜色格式</strong>：演示了如何同时使用 TechUI 预设色 (<code>$c</code>)、十六进制 (<code>#fff</code>) 和 RGBA (<code>rgba(...)</code>)。</li><li><strong>颜色计算</strong>：演示了如何使用 <code>fade</code>、<code>darken</code> 等函数基于基准色生成衍生色。</li><li><strong>标准结构</strong>：包含了 <code>common</code>, <code>font</code>, <code>button</code>, <code>chart</code> 等所有必要字段。</li></ol><h2 id="%E4%BB%A3%E7%A0%81%E5%B1%95%E7%A4%BA" tabindex="-1">代码展示</h2><p>创建文件 <code>src/themes/myTheme.js</code>：</p>',6),n("div",{class:"code-wrapper","data-lang":"javascript"},[n("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[n("span",{class:"lang-name"},"javascript")]),n("pre",{class:"language-javascript"},[n("code",{class:"language-javascript"},[n("span",{class:"token keyword"},"import"),a(" $c "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@techui/colors"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" tTheme "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@techui/utils"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// 1. 提取常用的颜色处理函数"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" fade"),n("span",{class:"token punctuation"},","),a(" darken"),n("span",{class:"token punctuation"},","),a(" lighten "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" $c"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// 2. 定义主题数据对象"),a(`
`),n("span",{class:"token keyword"},"const"),a(" themeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"lightBlue"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 主题内部名称"),a(`

  `),n("span",{class:"token comment"},"// --- 基础通用层 ---"),a(`
  `),n("span",{class:"token literal-property property"},"common"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a("          "),n("span",{class:"token comment"},"// 使用 TechUI 预设色 (White)"),a(`
    `),n("span",{class:"token literal-property property"},"bd"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya3"),n("span",{class:"token punctuation"},","),a("        "),n("span",{class:"token comment"},"// 使用 TechUI 预设色 (Gray Light 3)"),a(`
    `),n("span",{class:"token literal-property property"},"bg_layer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"#f0f2f5"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 使用 Hex 十六进制"),a(`
    `),n("span",{class:"token literal-property property"},"bd_layer"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyA08"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg_muted"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyA06"),n("span",{class:"token punctuation"},","),a("  "),n("span",{class:"token comment"},"// 弱化背景，用于组件内部低强调区域"),a(`
    `),n("span",{class:"token literal-property property"},"bd_muted"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyA09"),n("span",{class:"token punctuation"},","),a("  "),n("span",{class:"token comment"},"// 弱化边框，用于组件内部低强调边界"),a(`
    `),n("span",{class:"token literal-property property"},"bg_frame"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyA03"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd_frame"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyA08"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg_root"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"rgba(240, 242, 245, 1)"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 使用 RGBA"),a(`
    `),n("span",{class:"token literal-property property"},"bd_root"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyA15"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// --- 排版系统 ---"),a(`
  `),n("span",{class:"token literal-property property"},"font"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"weakest"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"weaker"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya5"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"weak"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyb5"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyc9"),n("span",{class:"token punctuation"},","),a("      "),n("span",{class:"token comment"},"// 正文颜色"),a(`
    `),n("span",{class:"token literal-property property"},"strong"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyd3"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"stronger"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyd7"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"strongest"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"#000000"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 纯黑"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// --- 交互组件：按钮 ---"),a(`
  `),n("span",{class:"token literal-property property"},"button"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya4"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// 悬停态：使用 TechUI 颜色"),a(`
    `),n("span",{class:"token literal-property property"},"bg_hov"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza1"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd_hov"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza2"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// 激活态：使用透明度函数计算"),a(`
    `),n("span",{class:"token literal-property property"},"bg_act"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"fade"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'azA01'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0.9"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd_act"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza5"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// 禁用态"),a(`
    `),n("span",{class:"token literal-property property"},"bg_dis"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya2"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd_dis"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya4"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// --- 交互组件：输入框 ---"),a(`
  `),n("span",{class:"token literal-property property"},"input"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya3"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg_hov"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd_hov"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azC03"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg_foc"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd_foc"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA08"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 聚焦时的边框色"),a(`
    `),n("span",{class:"token literal-property property"},"bg_dis"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyA08"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd_dis"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyA12"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// --- 功能色阶 ---"),a(`
  `),n("span",{class:"token literal-property property"},"primary"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"weakest"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA01"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"weaker"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA03"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"weak"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA06"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA09"),n("span",{class:"token punctuation"},","),a("   "),n("span",{class:"token comment"},"// 主色基准"),a(`
    `),n("span",{class:"token literal-property property"},"strong"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azC11"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"stronger"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azD13"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"strongest"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azE16"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token comment"},"// ... success, warning, danger, info (结构同上，此处省略)"),a(`

  `),n("span",{class:"token comment"},"// --- 布局配置 ---"),a(`
  `),n("span",{class:"token literal-property property"},"sider"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"fc"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"fade"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'azd1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0.8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 侧边栏文字带透明度"),a(`
    `),n("span",{class:"token literal-property property"},"focus"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("cyA10"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg_hov"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"fade"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bk'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg_act"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"fade"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bk'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// 侧边栏渐变背景"),a(`
      `),n("span",{class:"token literal-property property"},"grad_pri"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza5"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"grad_sec"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza7"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"grad_thi"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza8"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// --- 全局背景策略 ---"),a(`
  `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// 视图区域渐变流"),a(`
    `),n("span",{class:"token literal-property property"},"view_grad"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("$c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(" $c"),n("span",{class:"token punctuation"},"."),a("caA01"),n("span",{class:"token punctuation"},","),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA03"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"view_svgfill"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"view_svgfill_opa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"root"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya2"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"root_svgfill"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"root_svgfill_opa"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0.7"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// --- 科幻/3D 风格配置 ---"),a(`
  `),n("span",{class:"token literal-property property"},"scifi"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"thickness"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gyb5"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bg_alt"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA02"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"bd"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza1"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"fc"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza5"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"hlite"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("cya5"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 高亮发光色"),a(`
    `),n("span",{class:"token literal-property property"},"focus"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza5"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// --- 图表配色 (ECharts) ---"),a(`
  `),n("span",{class:"token literal-property property"},"chart"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"line"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"weak"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya2"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya5"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"strong"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("gya9"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"map"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"fc"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza6"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"bg"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA01"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"bd"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("azA05"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"bg_hov"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("yea1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 地图 Hover 黄色"),a(`
      `),n("span",{class:"token literal-property property"},"bd_hov"),n("span",{class:"token operator"},":"),a(" $c"),n("span",{class:"token punctuation"},"."),a("ora3"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"glow"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"fade"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'caa7'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 发光效果"),a(`
      `),n("span",{class:"token literal-property property"},"shadow"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"fade"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'azA05'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// 自动生成 ECharts 调色盘"),a(`
    `),n("span",{class:"token literal-property property"},"palette"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("$c"),n("span",{class:"token punctuation"},"."),a("aza5"),n("span",{class:"token punctuation"},","),a(" $c"),n("span",{class:"token punctuation"},"."),a("cya5"),n("span",{class:"token punctuation"},","),a(" $c"),n("span",{class:"token punctuation"},"."),a("yea5"),n("span",{class:"token punctuation"},","),a(" $c"),n("span",{class:"token punctuation"},"."),a("rea4"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"visual"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("$c"),n("span",{class:"token punctuation"},"."),a("caa3"),n("span",{class:"token punctuation"},","),a(" $c"),n("span",{class:"token punctuation"},"."),a("wh"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// 3. 注册主题"),a(`
tTheme`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"register"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"lightBlue"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 全局唯一 ID"),a(`
  `),n("span",{class:"token literal-property property"},"scheme"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"light"'),n("span",{class:"token punctuation"},","),a("    "),n("span",{class:"token comment"},"// 归属色系：light | dark"),a(`
  `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("$c"),n("span",{class:"token punctuation"},"."),a("aza5"),n("span",{class:"token punctuation"},","),a(" $c"),n("span",{class:"token punctuation"},"."),a("aza1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// 在控制面板显示的预览色块"),a(`
  `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),a(` themeData
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1),t('<h2 id="%E9%A2%9C%E8%89%B2%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E" tabindex="-1">颜色格式说明</h2><p>TechUI 的主题系统支持多种颜色格式。您可以在 <code>themeData</code> 中混合使用以下三种格式，但建议优先保持语义清晰和色彩体系一致。</p><h3 id="techui%20%E9%A2%84%E8%AE%BE%E5%8F%98%E9%87%8F%20(%24c)" tabindex="-1">TechUI 预设变量 ($c)</h3><p><strong>推荐使用</strong>。这是最语义化且便于维护的方式。</p><ul><li>示例：<code>$c.rea5</code> (标准红), <code>$c.gya3</code> (浅灰)</li><li>优势：支持 <code>lighten</code>, <code>fade</code> 等函数计算，自动适配色谱。</li></ul><h3 id="%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%20(hex)" tabindex="-1">十六进制 (Hex)</h3><p>适用于从设计稿（Figma/Sketch）直接复制颜色值。</p><ul><li>示例：<code>&quot;#ffffff&quot;</code>, <code>&quot;#1890ff&quot;</code></li><li>优势：通用性强，与设计工具无缝对接。</li></ul><h3 id="rgba%20%2F%20rgb" tabindex="-1">RGBA / RGB</h3><p>适用于需要精确控制透明度，且不想使用 <code>$c.fade</code> 函数的场景。</p><ul><li>示例：<code>&quot;rgba(0, 0, 0, 0.5)&quot;</code>, <code>&quot;rgb(255, 255, 255)&quot;</code></li><li>优势：原生 CSS 支持，直观的透明度控制。</li></ul><h2 id="%E5%BC%80%E5%8F%91%E5%BB%BA%E8%AE%AE" tabindex="-1">开发建议</h2><ul><li><strong>基准色优先</strong>：在定义 <code>primary</code> 等色阶时，建议先确定 <code>base</code> 色，然后通过 <code>$c.lighten()</code> 或 <code>$c.darken()</code> 自动生成 weak/strong 变体，以保持色阶的数学规律性。</li><li><strong>复用变量</strong>：在 <code>scifi</code> 或 <code>chart</code> 等高级配置中，尽量复用 <code>common</code> 或 <code>primary</code> 中的颜色，而不是引入新的色值，这能让主题看起来更加统一协调。</li></ul>',13)])]))}};export{i as default};
