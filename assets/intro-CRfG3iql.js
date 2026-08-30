import{c as r,l as c,aA as t,g as e}from"./index-CrE7RJmu.js";const i={class:"markdown-body"},l={__name:"intro",setup(s,{expose:n}){return n({frontmatter:{}}),(d,o)=>(r(),c("div",i,[...o[0]||(o[0]=[t('<h1 id="%E4%B8%BB%E9%A2%98%E6%A6%82%E8%A7%88" tabindex="-1">主题概览</h1><p>TechUI 的主题系统采用数据驱动的设计。主题文件是一份 JavaScript 数据结构，而不是一组预编译 CSS 文件。</p><p>这份数据在应用运行时被 <code>TuiProvider</code> 解析，并分发到两个通道：<strong>CSS 变量</strong> 和 <strong>Vue 响应式状态</strong>。DOM 组件主要通过 CSS 变量响应主题变化；TechUI 托管的 ECharts 图表和业务逻辑可以通过主题状态读取当前主题值。</p><h2 id="%E6%A0%B8%E5%BF%83%E6%9E%B6%E6%9E%84" tabindex="-1">核心架构</h2><p>TechUI 主题系统的运作流程如下：</p><ol><li><strong>定义 (Definition)</strong>: 开发者创建一个包含语义化颜色定义的 JS 对象（如 <code>lightBlue.js</code>），并使用 <code>tTheme.register</code> 进行注册。</li><li><strong>处理 (Processing)</strong>: <code>TuiProvider</code> 组件初始化时，读取当前激活的主题数据。</li><li><strong>分发 (Distribution)</strong>: <ul><li><strong>通道 A (CSS)</strong>: 系统自动生成 CSS 变量（CSS Custom Properties）并注入到文档根节点。例如 <code>primary.base</code> 转化为 <code>--primary-base</code>。</li><li><strong>通道 B (JS)</strong>: 系统将完整的主题树挂载到 <code>$tState.themePalette</code>，供组件逻辑和图表库使用。</li></ul></li></ol><h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9%E8%BF%99%E7%A7%8D%E8%AE%BE%E8%AE%A1%EF%BC%9F" tabindex="-1">为什么选择这种设计？</h2><h3 id="%E8%AF%AD%E4%B9%89%E5%8C%96%E4%B8%8E%E6%A0%87%E5%87%86%E5%8C%96" tabindex="-1">语义化与标准化</h3><p>我们不再关注具体的色值（如 <code>#1890ff</code>），而是关注颜色的<strong>语义</strong>。 所有的 TechUI 主题都遵循同一套 Schema 结构（如 <code>common</code>, <code>font</code>, <code>primary</code>, <code>danger</code>）。这意味着开发者只需编写一次代码（例如 <code>color: var(--danger-base)</code>），即可在任何主题下完美展示，无需担心深浅色模式的适配问题。</p><h3 id="dom%20%E4%B8%8E%20js%20%E5%8F%8C%E9%80%9A%E9%81%93" tabindex="-1">DOM 与 JS 双通道</h3><p>传统的 CSS 主题方案难以触达 <code>&lt;canvas&gt;</code> 内部。 在数据大屏或复杂应用中，ECharts 图表、Three.js 3D 场景或 OpenLayers 地图通常需要传入具体颜色值。TechUI 通过 <code>$tState.themePalette</code> 和 <code>$tc()</code> 函数，让 JS 侧也能获取当前主题色。TechUI 封装的图表组件会自动处理主题更新；外部自行创建的实例需要根据业务逻辑监听主题变化并刷新。</p><h3 id="%E8%BF%90%E8%A1%8C%E6%97%B6%E5%88%87%E6%8D%A2" tabindex="-1">运行时切换</h3><p>不需要在构建时生成多份 CSS 文件。TechUI 的主题切换在运行时完成，并会更新 CSS 变量与主题响应式状态。开启转场配置后，切换过程也可以配合浏览器 View Transition 做视觉过渡。</p><h2 id="%E6%95%B0%E6%8D%AE%E6%B5%81%E5%90%91%E5%9B%BE" tabindex="-1">数据流向图</h2>',14),e("div",{class:"code-wrapper","data-lang":"text"},[e("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[e("span",{class:"lang-name"},"text")]),e("pre",{class:"language-text"},[e("code",{class:"language-text"},`[ 主题文件 (lightBlue.js) ]
          |
          v
[ tTheme.register (注册中心) ]
          |
   (应用启动 / 切换主题)
          |
          v
[ TuiProvider (核心处理) ]
          |
          +-------------------------------------+
          |                                     |
          v                                     v
[ CSS 变量系统 ]                        [ Vue 响应式系统 ]
:root {                                 $tState.themePalette
  --primary-base: #007bff;              {
  --bg-root: #ffffff;                     primary: { base: "#007bff" },
}                                         bg: { root: "#ffffff" }
          |                                     }
          |                                     |
          v                                     v
   [ DOM 组件 ]                         [ Canvas/JS 组件 ]
   div {                                echarts.init(..., {
     background: var(--bg-root);          color: [ theme.primary.base ]
   }                                    })
`)])],-1),t('<h2 id="%E6%A0%B8%E5%BF%83%E8%83%BD%E5%8A%9B%E4%B8%80%E8%A7%88" tabindex="-1">核心能力一览</h2><ul><li><strong>双通道访问</strong>: CSS 中使用 <code>var(--key-sub)</code>，JS 中使用 <code>$tc(&#39;key.sub&#39;)</code>。</li><li><strong>图表适配</strong>: 开启 ECharts 特性后，自动生成并注册对应的 ECharts 主题 JSON。</li><li><strong>色阶辅助</strong>: 基于 <code>@techui/colors</code>，可从基准色计算衍生色、透明色和交互状态色。</li><li><strong>Scifi 配置</strong>: 包含 <code>scifi</code> 字段，用于配置动态 SVG、FUI 视觉组件和部分装饰组件的颜色。</li></ul>',2)])]))}};export{l as default};
