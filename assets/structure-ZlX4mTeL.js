import{c as l,l as o,aA as s,g as t,n as e}from"./index-CrE7RJmu.js";const c={class:"markdown-body"},g={__name:"structure",setup(p,{expose:a}){return a({frontmatter:{}}),(i,n)=>(l(),o("div",c,[...n[0]||(n[0]=[s('<h1 id="%E8%AF%AD%E4%B9%89%E7%BB%93%E6%9E%84" tabindex="-1">语义结构</h1><p>TechUI 的语言包本质上是一个层级分明的 JavaScript 对象。为了便于维护，源码层面采用了模块化拆分，但在运行时，它们会被聚合为一个完整的树状结构。</p><h2 id="%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%A6%82%E8%A7%88" tabindex="-1">数据结构概览</h2><p>语言包的根节点主要由“通用词汇”、“组件文案”、“系统模块”和“业务模块”组成。</p><p>以下是核心的语义分类说明：</p><table><thead><tr><th style="text-align:left;">根节点 Key</th><th style="text-align:left;">描述</th><th style="text-align:left;">示例内容</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>common</strong></td><td style="text-align:left;">通用词汇</td><td style="text-align:left;">确定、取消、返回、加载中…</td></tr><tr><td style="text-align:left;"><strong>components</strong></td><td style="text-align:left;">组件内部文案</td><td style="text-align:left;">表格空数据提示、分页器文本、上传状态…</td></tr><tr><td style="text-align:left;"><strong>theme</strong></td><td style="text-align:left;">主题名称</td><td style="text-align:left;">天穹、夜阑、深色、浅色…</td></tr><tr><td style="text-align:left;"><strong>controlPanel</strong></td><td style="text-align:left;">全局设置</td><td style="text-align:left;">控制面板中的选项标题、提示语（如“3D面板开关”）…</td></tr><tr><td style="text-align:left;"><strong>navTab</strong></td><td style="text-align:left;">导航页签</td><td style="text-align:left;">关闭、刷新、锁定、全屏切换等导航操作文案。</td></tr><tr><td style="text-align:left;"><strong>datetime</strong></td><td style="text-align:left;">日期时间</td><td style="text-align:left;">年、月、日、刚刚、几分钟前…</td></tr><tr><td style="text-align:left;"><strong>login</strong></td><td style="text-align:left;">登录页</td><td style="text-align:left;">用户名、密码、验证码、忘记密码…</td></tr><tr><td style="text-align:left;"><strong>panicAlert</strong></td><td style="text-align:left;">错误/告警</td><td style="text-align:left;">屏幕分辨率不足提示、禁止调试提示…</td></tr><tr><td style="text-align:left;"><strong>error/success…</strong></td><td style="text-align:left;">状态反馈</td><td style="text-align:left;">成功、失败、警告等状态的基础标签。</td></tr></tbody></table><h2 id="%E6%A8%A1%E5%9D%97%E5%8C%96%E6%8B%86%E5%88%86" tabindex="-1">模块化拆分</h2><p>在源码层面（<code>@techui/locales</code>），为了避免单个文件过大，我们将语言包拆分为多个语言模块文件：</p>',8),t("div",{class:"code-wrapper","data-lang":"text"},[t("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[t("span",{class:"lang-name"},"text")]),t("pre",{class:"language-text"},[t("code",{class:"language-text"},`@techui/locales/
  ├── index.js                 # 默认入口，提供 localeLoader.ensure()
  ├── lang/
  │   ├── zh-CN/               # 简体中文模块目录
  │   │   ├── index.js         # 简体中文注册入口
  │   │   ├── common/
  │   │   │   ├── index.js     # 通用词汇与基础语义聚合
  │   │   │   └── result.js    # 结果状态相关
  │   │   ├── components/
  │   │   │   ├── index.js     # 基础组件与轻量组件文案聚合
  │   │   │   ├── lightbox.js  # Lightbox 相关
  │   │   │   ├── dateTime.js  # 日期时间相关
  │   │   │   ├── controlPanel.js # 控制面板相关
  │   │   │   ├── login.js     # 登录相关
  │   │   │   └── panicAlert.js # 全局错误/告警相关
  │   │   └── extended/
  │   │       ├── index.js     # 扩展组件文案聚合
  │   │       └── dataUnit.js  # 扩展 DataUnit 相关
  │   ├── zh-TW/
  │   └── en/
  └── ...
`)])],-1),t("p",null,[e("在初始化时，"),t("code",null,"lang/zh-CN/index.js"),e(" 会通过 "),t("code",null,"..."),e(" 扩展运算符将这些分散的模块合并为一个对象并注册语言，因此在调用时您无需关心物理文件结构，只需关心逻辑层级（如 "),t("code",null,"i18n('login.username')"),e("）。")],-1),t("h2",{id:"%E8%AF%AD%E6%B3%95%E8%A7%84%E8%8C%83",tabindex:"-1"},"语法规范",-1),t("h3",{id:"%E9%9D%99%E6%80%81%E6%96%87%E6%9C%AC",tabindex:"-1"},"静态文本",-1),t("p",null,"最基础的键值对，直接对应翻译文本。",-1),t("div",{class:"code-wrapper","data-lang":"javascript"},[t("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[t("span",{class:"lang-name"},"javascript")]),t("pre",{class:"language-javascript"},[t("code",{class:"language-javascript"},[t("span",{class:"token string-property property"},'"result"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token string-property property"},'"empty"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token string-property property"},'"title"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"暂无内容"'),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token string-property property"},'"description"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"当前区域没有可展示的数据。"'),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])])],-1),t("h3",{id:"%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20(variable%20placeholder)",tabindex:"-1"},"动态插值 (Variable Placeholder)",-1),t("p",null,[e("支持在文本中嵌入变量，格式为 "),t("code",null,"${变量名}"),e("。这在需要动态显示设备名、倒计时或特定数值时非常有用。")],-1),t("p",null,[t("strong",null,"定义示例"),e("：")],-1),t("div",{class:"code-wrapper","data-lang":"javascript"},[t("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[t("span",{class:"lang-name"},"javascript")]),t("pre",{class:"language-javascript"},[t("code",{class:"language-javascript"},[t("span",{class:"token string-property property"},'"panicAlert"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token string-property property"},'"device"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token string-property property"},'"content"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"此页面为 ${deviceA} 端专属，当前访问设备为 ${deviceB}..."'),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])])],-1),t("p",null,[t("strong",null,"调用示例"),e("：")],-1),t("div",{class:"code-wrapper","data-lang":"javascript"},[t("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[t("span",{class:"lang-name"},"javascript")]),t("pre",{class:"language-javascript"},[t("code",{class:"language-javascript"},[t("span",{class:"token function"},"i18n"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'panicAlert.device.content'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token punctuation"},"{"),e(` 
  `),t("span",{class:"token literal-property property"},"deviceA"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'PC'"),t("span",{class:"token punctuation"},","),e(` 
  `),t("span",{class:"token literal-property property"},"deviceB"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'Mobile'"),e(` 
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token comment"},'// 输出: "此页面为 PC 端专属，当前访问设备为 Mobile..."'),e(`
`)])])],-1),s('<h2 id="%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E5%AE%8C%E6%95%B4%E5%AE%9A%E4%B9%89%EF%BC%9F" tabindex="-1">如何查看完整定义？</h2><p>由于语言包包含数百个键值对，且会随着 TechUI 版本更新而增加，本文档不进行全量罗列。</p><p>如果您需要查找某个特定文案的 Key，或查看所有可用的翻译项，建议直接查阅项目依赖中的源码文件：</p><ol><li>在您的 IDE 中，展开 <code>node_modules</code> 目录。</li><li>找到 <code>@techui/locales</code> 包。</li><li>打开对应的语言入口文件（如 <code>lang/zh-CN/index.js</code>）或其子目录 <code>lang/zh-CN</code>。</li></ol><p>这些文件是语言包语义结构的主要来源。</p>',5)])]))}};export{g as default};
