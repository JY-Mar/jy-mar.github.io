import{_ as e,p as a,q as n,a1 as d}from"./framework-96b046e1.js";const i={},r=d(`<h1 id="踩坑笔记" tabindex="-1"><a class="header-anchor" href="#踩坑笔记" aria-hidden="true">#</a> 踩坑笔记</h1><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><h3 id="兼容性问题" tabindex="-1"><a class="header-anchor" href="#兼容性问题" aria-hidden="true">#</a> 兼容性问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conflicting peer dependency: ***
node_modules/***
  peer *** from ***
  node_modules/***
    dev *** from the root project**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存在冲突/版本不兼容插件存在，解决：</p><ul><li>可以更新/<strong>降低插件版本以使之兼容</strong></li><li><code>npm</code>指令强制安装/忽略冲突安装</li></ul><p><code>--force</code> 会无视冲突，并强制获取远端<code>npm</code>库资源，即使本地有资源也会覆盖掉<br><code>--legacy-peer-deps</code> 安装时忽略所有peerDependencies，忽视依赖冲突，采用<code>npm</code>版本4到版本6的样式去安装依赖，已有的依赖不会覆盖</p><h2 id="babel-6与babel-7" tabindex="-1"><a class="header-anchor" href="#babel-6与babel-7" aria-hidden="true">#</a> <code>babel 6</code>与<code>babel 7</code></h2><p><code>babel 7</code>的插件与<code>babel 6</code>的插件名称不同，无法直接通过<code>npm install</code>完成升级。<code>babel 6</code>插件名称以“babel-plugin-”开头，而<code>babel 7</code>插件以“@vue/cli-plugin-”开头。</p><h3 id="升级代码" tabindex="-1"><a class="header-anchor" href="#升级代码" aria-hidden="true">#</a> 升级代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 卸载旧版本babel core
<span class="token function">npm</span> uninstall babel-core
// 安装新版本babel core
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @babel/core
// babel-upgrade自动升级babel及插件
npx babel-upgrade <span class="token parameter variable">--write</span> <span class="token parameter variable">--install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git报错" tabindex="-1"><a class="header-anchor" href="#git报错" aria-hidden="true">#</a> Git报错</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Git: fatal: bad object refs/heads/2023.01.0
ignoring broken ref refs/heads/master
warning: ignoring broken ref refs/remotes/origin/HEAD（git pull 报错 ）
Unable to fetch repository. See output channel for more details
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[r];function l(c,o){return a(),n("div",null,s)}const b=e(i,[["render",l],["__file","errorRecord.html.vue"]]);export{b as default};
