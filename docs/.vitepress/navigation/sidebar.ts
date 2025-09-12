/*
 * @Author       : Scientificat 51430248+JY-Mar@users.noreply.github.com
 * @Date         : 2025-09-12 07:24:34
 * @LastEditTime : 2025-09-12 07:24:36
 * @LastEditors  : Scientificat 51430248+JY-Mar@users.noreply.github.com
 * @Description  : 文件描述
 */

import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Examples',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  }
]

export default sidebar
