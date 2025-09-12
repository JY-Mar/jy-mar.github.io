/*
 * @Author       : Scientificat 51430248+JY-Mar@users.noreply.github.com
 * @Date         : 2025-09-12 07:24:22
 * @LastEditTime : 2025-09-12 07:24:23
 * @LastEditors  : Scientificat 51430248+JY-Mar@users.noreply.github.com
 * @Description  : 顶部导航栏配置
 */

import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  { text: 'Examples', link: '/markdown-examples' }
]

export default nav
