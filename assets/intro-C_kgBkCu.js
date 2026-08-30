import{c as n,l as s,aA as o,g as e}from"./index-CrE7RJmu.js";const i={class:"markdown-body"},h={__name:"intro",setup(r,{expose:a}){return a({frontmatter:{}}),(d,t)=>(n(),s("div",i,[...t[0]||(t[0]=[o('<h1 id="theme%20overview" tabindex="-1">Theme Overview</h1><p>TechUI’s theme system uses a data-driven design. A theme file is a JavaScript data structure, not a set of precompiled CSS files.</p><p>This data is parsed by <code>TuiProvider</code> at runtime and distributed to two channels: <strong>CSS variables</strong> and <strong>Vue reactive state</strong>. DOM components mainly respond through CSS variables. TechUI-managed ECharts charts and business logic can read current theme values from the theme state.</p><h2 id="core%20architecture" tabindex="-1">Core Architecture</h2><p>The operational workflow of the TechUI theme system is as follows:</p><ol><li><strong>Definition</strong>: Developers create a JS object containing semantic color definitions (e.g., <code>lightBlue.js</code>) and register it using <code>tTheme.register</code>.</li><li><strong>Processing</strong>: When the <code>TuiProvider</code> component initializes, it reads the currently active theme data.</li><li><strong>Distribution</strong>:</li></ol><ul><li><strong>Channel A (CSS)</strong>: The system automatically generates CSS variables (CSS Custom Properties) and injects them into the document root. For example, <code>primary.base</code> is converted to <code>--primary-base</code>.</li><li><strong>Channel B (JS)</strong>: The system mounts the complete theme tree to <code>$tState.themePalette</code> for use by component logic and chart libraries.</li></ul><h2 id="why%20choose%20this%20design%3F" tabindex="-1">Why Choose This Design?</h2><h3 id="semantics%20and%20standardization" tabindex="-1">Semantics and Standardization</h3><p>We no longer focus on specific color values (such as <code>#1890ff</code>), but rather on the <strong>semantics</strong> of the color. All TechUI themes follow the same Schema structure (such as <code>common</code>, <code>font</code>, <code>primary</code>, etc.), which means you can switch themes at any time without changing any component code.</p><h3 id="dom%20and%20js%20channels" tabindex="-1">DOM And JS Channels</h3><p>Traditional CSS-based theme solutions are difficult for Canvas-based libraries to access. TechUI provides <code>$tState.themePalette</code> and <code>$tc()</code>, allowing the JS side to read current theme colors. TechUI-wrapped chart components handle theme updates automatically; external instances created directly by business code should listen for theme changes and refresh themselves.</p><h3 id="runtime%20zero-compilation%20switching" tabindex="-1">Runtime Zero-Compilation Switching</h3><p>There is no need to generate multiple CSS files at build time. TechUI switches themes at runtime by updating CSS variables and reactive theme state. When transition configuration is enabled, the switching process can also use browser View Transition for visual continuity.</p><h2 id="data%20flow%20diagram" tabindex="-1">Data Flow Diagram</h2>',15),e("div",{class:"code-wrapper","data-lang":"text"},[e("button",{class:"tui-icon ti-copy",title:"Copy Code",onclick:"copyCode(this)"},[e("span",{class:"lang-name"},"text")]),e("pre",{class:"language-text"},[e("code",{class:"language-text"},`[ Theme File (lightBlue.js) ]
          |
          v
[ tTheme.register (Registry) ]
          |
   (App Startup / Switch Theme)
          |
          v
[ TuiProvider (Core Processing) ]
          |
          +-------------------------------------+
          |                                     |
          v                                     v
[ CSS Variable System ]                 [ Vue Reactive System ]
:root {                                 $tState.themePalette
  --primary-base: #007bff;              {
  --bg-root: #ffffff;                     primary: { base: "#007bff" },
}                                         bg: { root: "#ffffff" }
          |                                     }
          |                                     |
          v                                     v
   [ DOM Components ]                   [ Canvas/JS Components ]
   div {                                echarts.init(..., {
     background: var(--bg-root);          color: [ theme.primary.base ]
   }                                    })

`)])],-1),o('<h2 id="core%20capabilities%20overview" tabindex="-1">Core Capabilities Overview</h2><ul><li><strong>Dual-Channel Access</strong>: Use <code>var(--key-sub)</code> in CSS and <code>$tc(&#39;key.sub&#39;)</code> in JS.</li><li><strong>Chart Adaptation</strong>: Generates and registers the corresponding ECharts theme JSON after enabling ECharts features.</li><li><strong>Color Scale Helpers</strong>: Based on <code>@techui/colors</code>, derived colors, transparent colors, and interaction state colors can be calculated from base colors.</li><li><strong>Scifi Configuration</strong>: Includes the <code>scifi</code> field for dynamic SVG, FUI visual components, and some decorative components.</li></ul>',2)])]))}};export{h as default};
