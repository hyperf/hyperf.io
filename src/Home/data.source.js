import React from 'react';

let currentLanguage = 'zh-CN'
let languages = {
  'zh-CN': {
    'video': '视频教程',
    'doc': {
      'text': '开发文档',
      'url': 'https://hyperf.wiki'
    },
    'discussions': "Discussions",
    'github': 'GitHub',
    'gitee': 'Gitee(码云)',
    'start-button': '快速开始',
    'content00-text1': '简单化 协程化 组件化',
    'content00-block0-title': '开箱即用，快人一步',
    'content00-block0-content': '官方提供超多常用组件，随取随用',
    'content00-block1-title': '原生协程，超高性能',
    'content00-block1-content': '原生协程能力支持，性能强悍',
    'content00-block2-title': '丰富组件，任意组合',
    'content00-block2-content': '全组件化设计，可复用于其它框架',
    'content30-title': '企业级别的协程框架',
    'content30-content': '由 Swoole/Swow 协程强力驱动',
    'content30-block0-title': '高性能',
    'content30-block0-content': '全协程异步实现，性能远超所有传统 PHP-FPM 框架',
    'content30-block1-title': '生产可用',
    'content30-block1-content': '经历过长时间生产环境考验的企业级框架设计，稳定可靠',
    'content30-block2-title': '微服务',
    'content30-block2-content': '健全的微服务体系，gRPC、JSON RPC、服务发现、熔断，分布式事务',
    'content30-block3-title': '组件丰富',
    'content30-block3-content': '全组件化设计，超多常用组件，绝大部分组件均可复用于其它框架',
    'content30-block4-title': '分布式',
    'content30-block4-content': '基于相关组件可快速搭建出企业级的分布式系统，极速扩容',
    'content30-block5-title': '自动化测试',
    'content30-block5-content': '完备的自动化测试，从开发到生产交付全流程保障',
  },
  'en-US': {
    'video': 'Video',
    'doc': {
      'text': 'Documentation',
      'url': 'https://hyperf.wiki/#/en/'
    },
    'discussions': "Discussions",
    'github': 'GitHub',
    'gitee': 'Gitee',
    'start-button': 'Get started',
    'content00-text1': 'Convenient, Concurrent, Composite',
    'content00-block0-title': 'Productivity Out of Box',
    'content00-block0-content': 'Just pull in components and start working',
    'content00-block1-title': 'Native Coroutine',
    'content00-block1-content': 'Make the most of the cutting-edge swoole engine',
    'content00-block2-title': 'Plugable Interface',
    'content00-block2-content': 'Open arms to the vast ecosystem',
    'content30-title': 'Production-grade coroutine framework',
    'content30-content': 'Powered by Swoole/Swow coroutine',
    'content30-block0-title': 'High performance',
    'content30-block0-content': 'Unblocked I/O provides decisive benchmark victory over PHP-FPM',
    'content30-block1-title': 'Production-ready',
    'content30-block1-content': 'Battle-tested in the most crucial business environment',
    'content30-block2-title': 'Microservice',
    'content30-block2-content': 'Embrace microservice with gRPC, JSON-RPC, service discovery, circuit-breaker, distributed transaction, etc',
    'content30-block3-title': 'Decoupled components',
    'content30-block3-content': 'Hyperf offers a rich pool of components. Most can be used outside of the framework',
    'content30-block4-title': 'Distributed',
    'content30-block4-content': 'Decentralized architecture. Scales up to an unlimited amount of servers',
    'content30-block5-title': 'Tested',
    'content30-block5-content': 'Fully Automated tests cover from development to delivery',
  }
}

if (navigator.language && navigator.language !== 'zh-CN') {
  currentLanguage = 'en-US'
}

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper jwbweljfrfi-editor_css' },
  page: { className: 'home-page jwbwg2b25dc-editor_css' },
  logo: {
    className: 'header0-logo jwbwdwdhgqr-editor_css',
    children: 'https://hyperf.oss-cn-hangzhou.aliyuncs.com/hyperf.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        a: {
          children: languages[currentLanguage]['video'],
          href: 'https://space.bilibili.com/1176880220/channel/seriesdetail?sid=2121560',
          className: 'jwbwev2ey7-editor_css',
        },
      },
      {
        name: 'item0',
        a: {
          children: languages[currentLanguage]['doc']['text'],
          href: languages[currentLanguage]['doc']['url'],
          className: 'jwbwev2ey7-editor_css',
        },
      },
      {
        name: 'item1',
        a: {
          children: languages[currentLanguage]['discussions'],
          href: 'https://github.com/orgs/hyperf/discussions',
          className: 'jwbwf54e8hn-editor_css',
        },
      },
      {
        name: 'item1',
        a: {
          children: languages[currentLanguage]['github'],
          href: 'https://github.com/hyperf/hyperf',
          className: 'jwbwf54e8hn-editor_css',
        },
      },
      {
        name: 'item1',
        a: {
          children: languages[currentLanguage]['gitee'],
          href: 'https://gitee.com/hyperf/hyperf',
          className: 'jwbwf54e8hn-editor_css',
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3 jwbvg9mw5gi-editor_css' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: (
          <>
            <p>
              <br />
            </p>
          </>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan jwbvhicx5l-editor_css',
        children: 'The Way to PHP Microservice',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name jwbvj2078d8-editor_css',
        children: (
          <>
            <p>Hyperf = Hyperspeed + Flexibility</p>
          </>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button jwbvker8eo-editor_css',
        children: (
          languages[currentLanguage]['start-button']
        ),
        href: languages[currentLanguage]['doc']['url']
      },
      {
        name: 'time',
        className: 'banner3-time',
        children: (
          <>
            <p>
              <br />
            </p>
          </>
        ),
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper jwq3fv7xmf-editor_css',
  },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          languages[currentLanguage]['content00-text1']
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTUzNzI0NTcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05NjYuMjA4IDI0Ni43NTJMNTM0LjE0NCAyMS40MDhhNDcuOTY4IDQ3Ljk2OCAwIDAgMC00NC4xMjgtMC4xMjhMNTguMDggMjQzLjEzNkE0Ny45NjggNDcuOTY4IDAgMCAwIDMyIDI4NS44MjRWNzQ0LjY0YzAgMTguMjA4IDEwLjMwNCAzNC44NDggMjYuNTkyIDQyLjk3Nmw0MzIgMjE1LjM2YTQ4IDQ4IDAgMCAwIDQyLjgxNiAwbDQzMi0yMTUuMzZBNDggNDggMCAwIDAgOTkyIDc0NC42NzJWMjg5LjM0NGMwLTE3LjkyLTkuOTUyLTM0LjMwNC0yNS43OTItNDIuNTkyek01MDguMzg0IDQ2My42OGwtMTYyLjE3Ni03OS44MDggMzY3LjM2LTE5Ni43MDQgMTU4LjQgODIuNjI0LTM2My41ODQgMTkzLjg4OHogbTMuNDg4LTM4MS42OTZsMTMyLjk5MiA2OS4zNzYtMzY5LjMxMiAxOTcuNzYtMTQ0Ljg5Ni03MS4zMjggMzgxLjIxNi0xOTUuODA4ek05NiAzMzIuMDk2bDE1My4yMTYgNzUuMzkydjE2OC4yNTZhMzIgMzIgMCAwIDAgNjQgMHYtMTM2LjczNkw0ODAgNTIxLjAyNHY0MDUuMTg0TDk2IDczNC43NTJWMzMyLjA5NnogbTQ0OCA1OTQuMTEyVjUxNy4xODRsMzg0LTIwNC43MzZ2NDIyLjMwNGwtMzg0IDE5MS40NTZ6IiBwLWlkPSI2NTkiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4=',
          },
          title: {
            className: 'content0-title',
            children: (
              languages[currentLanguage]['content00-block0-title']
            ),
          },
          content: {
            children: (
              languages[currentLanguage]['content00-block0-content']
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTUzNzk0NTk2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk2NyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04OTIuMjI0IDExNy4wMjRjLTgzLjkzNi04My45MzYtMjMxLjY0OC04MS4xMi0zODcuNjE2LTMuODQtMTU1LjkzNi03Ny4yOC0zMDMuNjgtODAuMDk2LTM4Ny42MTYgMy44NC02OS43NiA2OS43Ni03OS40ODggMTgzLjU1Mi0zNi42NCAzMDkuMzQ0YTk1Ljc3NiA5NS43NzYgMCAwIDAgMTIuOTkyIDEyMi41MjhjLTU1LjkzNiAxMzYuODk2LTUzLjQ3MiAyNjYuMTc2IDIzLjY4IDM0My4zMjggODMuOTM2IDgzLjkzNiAyMzEuNzEyIDgxLjE1MiAzODcuNzc2IDMuNzc2IDE1Mi44IDc1LjY4IDMwMi4wMTYgODEuNjMyIDM4Ny40MjQtMy43NzYgODUuNDQtODUuNDQgNzkuNDI0LTIzNC43MiAzLjY4LTM4Ny41ODQgNzUuNzQ0LTE1Mi44OTYgODEuNzYtMzAyLjE3Ni0zLjY4LTM4Ny42MTZ6IG0tNDUuMjQ4IDcyOS45NTJjLTk2LjQxNiA5Ni40MTYtMzMyLjY0IDI5LjQwOC01MjMuMzYtMTYxLjM0NGEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OCA0NS4yNDggOTEzLjA1NiA5MTMuMDU2IDAgMCAwIDE1Ny4zNzYgMTI2LjMwNGMtMTE3LjI0OCA0Ny45MDQtMjE5LjEwNCA0NC4xMjgtMjczLjQ3Mi0xMC4yNC01NS43NzYtNTUuNzc2LTU2LjU0NC0xNTguMzY4LTEwLjY1Ni0yNzEuODA4IDIuODE2IDAuMjU2IDUuNTA0IDAuODY0IDguMzg0IDAuODY0YTk2IDk2IDAgMCAwIDk2LTk2YzAtMjEuMDI0LTYuOTQ0LTQwLjI4OC0xOC40LTU2LjA5NmE4NzAuNTkyIDg3MC41OTIgMCAwIDEgODYuMDE2LTEwMC4yODggMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDgtNDUuMjQ4IDkzMy42IDkzMy42IDAgMCAwLTkzLjQ3MiAxMDkuMzQ0QTkyLjkyOCA5Mi45MjggMCAwIDAgMTYwIDM4NGE5NS42OCA5NS42OCAwIDAgMC0yNC43MzYgMy42MTZjLTI4LjcwNC05Ni40NDgtMTkuNzc2LTE3OC41NiAyNy4wMDgtMjI1LjM0NCA2Mi4zNjgtNjIuMzY4IDE4Ny4yNjQtNTguMTc2IDMyNi4xMTIgMTQuMjRhMzEuMDA4IDMxLjAwOCAwIDAgMCAxNi41NDQgMy4wNCAzMS4xMDQgMzEuMTA0IDAgMCAwIDE2LjAzMi0zLjEwNGMxMzguODE2LTcyLjM1MiAyNjMuNjQ4LTc2LjU0NCAzMjYuMDE2LTE0LjE3NiA1NiA1NiA1Ni41NDQgMTU5LjIgMTAuMDQ4IDI3My4yMTZhODc5LjM2IDg3OS4zNiAwIDAgMC02Ny41ODQtOTIuNDhjNi41MjgtMTEuNTg0IDEwLjU2LTI0Ljc2OCAxMC41Ni0zOS4wMDhhODAgODAgMCAxIDAtODAgODBjNi4zNjggMCAxMi40OC0wLjkyOCAxOC40LTIuMzM2YTc5NS45NjggNzk1Ljk2OCAwIDAgMSA4NS40MDggMTIyLjk0NGMtMzEuNTIgNTYuNjcyLTczLjk4NCAxMTQuMDgtMTI2LjE3NiAxNjguMzUyLTMuMi0wLjM4NC02LjMzNi0wLjk2LTkuNjMyLTAuOTZhODAgODAgMCAxIDAgNjUuNzkyIDM0LjYyNCA5MDEuMDU2IDkwMS4wNTYgMCAwIDAgMTAzLjIzMi0xMzIuODY0YzQ2LjQ2NCAxMTMuOTg0IDQ1Ljk1MiAyMTcuMjE2LTEwLjA0OCAyNzMuMjE2eiIgcC1pZD0iOTY4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTUxMiAzODRhMTI4IDEyOCAwIDEgMCAwIDI1NiAxMjggMTI4IDAgMCAwIDAtMjU2eiBtMCAxOTJhNjQgNjQgMCAxIDEgMC4wMzItMTI4LjAzMkE2NCA2NCAwIDAgMSA1MTIgNTc2eiIgcC1pZD0iOTY5IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+',
          },
          title: {
            className: 'content0-title',
            children: (
              languages[currentLanguage]['content00-block1-title']
            ),
          },
          content: {
            children: (
              languages[currentLanguage]['content00-block1-content']
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTUzNzY3NzMwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTIgMTYwYTMyIDMyIDAgMCAwLTMyIDMydjE5MmEzMiAzMiAwIDAgMCAzMiAzMmgxOTJhMzIgMzIgMCAwIDAgMzItMzJWMTkyYTMyIDMyIDAgMCAwLTMyLTMySDE5MnogbTAtNjRoMTkyYTk2IDk2IDAgMCAxIDk2IDk2djE5MmE5NiA5NiAwIDAgMS05NiA5NkgxOTJhOTYgOTYgMCAwIDEtOTYtOTZWMTkyYTk2IDk2IDAgMCAxIDk2LTk2ek0xOTIgNjA4YTMyIDMyIDAgMCAwLTMyIDMydjE5MmEzMiAzMiAwIDAgMCAzMiAzMmgxOTJhMzIgMzIgMCAwIDAgMzItMzJ2LTE5MmEzMiAzMiAwIDAgMC0zMi0zMkgxOTJ6IG0wLTY0aDE5MmE5NiA5NiAwIDAgMSA5NiA5NnYxOTJhOTYgOTYgMCAwIDEtOTYgOTZIMTkyYTk2IDk2IDAgMCAxLTk2LTk2di0xOTJhOTYgOTYgMCAwIDEgOTYtOTZ6TTY0MCA2MDhhMzIgMzIgMCAwIDAtMzIgMzJ2MTkyYTMyIDMyIDAgMCAwIDMyIDMyaDE5MmEzMiAzMiAwIDAgMCAzMi0zMnYtMTkyYTMyIDMyIDAgMCAwLTMyLTMyaC0xOTJ6IG0wLTY0aDE5MmE5NiA5NiAwIDAgMSA5NiA5NnYxOTJhOTYgOTYgMCAwIDEtOTYgOTZoLTE5MmE5NiA5NiAwIDAgMS05Ni05NnYtMTkyYTk2IDk2IDAgMCAxIDk2LTk2ek02MDIuMjcyIDI2Ni4yNzJhMzIgMzIgMCAwIDAgMCA0NS4yOGwxMTIgMTEyYTMyIDMyIDAgMCAwIDQ1LjI4IDBsMTEyLTExMmEzMiAzMiAwIDAgMCAwLTQ1LjI4bC0xMTItMTEyYTMyIDMyIDAgMCAwLTQ1LjI4IDBsLTExMiAxMTJ6IG0tNDUuMjQ4LTQ1LjI0OGwxMTItMTEyYTk2IDk2IDAgMCAxIDEzNS43NzYgMGwxMTIgMTEyYTk2IDk2IDAgMCAxIDAgMTM1Ljc3NmwtMTEyIDExMmE5NiA5NiAwIDAgMS0xMzUuNzc2IDBsLTExMi0xMTJhOTYgOTYgMCAwIDEgMC0xMzUuNzc2eiIgcC1pZD0iODE3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+',
          },
          title: {
            className: 'content0-title',
            children: (
                languages[currentLanguage]['content00-block2-title']
            ),
          },
          content: {
            children: (
                languages[currentLanguage]['content00-block2-content']
            ),
          },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: {
    className: 'home-page-wrapper content3-wrapper jwq3fnvddaf-editor_css',
  },
  page: { className: 'home-page content3 jwq3bo8n6w-editor_css' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          languages[currentLanguage]['content30-title']
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          languages[currentLanguage]['content30-content']
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU1ODQ5MzM1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTc5LjIgMTU4Ljg0OGEzMiAzMiAwIDAgMC0zOC40LTIzLjkzNmwtMTY2Ljg0OCAzOC42NTZhMzIgMzIgMCAwIDAtMTUuODA4IDUzLjQwOEw3OTQuNTYgMjY0LjY0bC0xOTQuNTYgMTczLjU2OC0xMDEuMDI0LTk1LjY4YTMyIDMyIDAgMCAwLTQ1LjE1MiAxLjE1MmwtMjE2LjczNiAyMjcuMjY0QTY0IDY0IDAgMSAwIDI4OCA2MzMuNmMwLTYuOTQ0LTEuMzc2LTEzLjQ3Mi0zLjQyNC0xOS43MTJsMTkzLjUzNi0yMDIuOTQ0IDk5LjIzMiA5My45NTJhMzIgMzIgMCAwIDAgNDMuMjk2IDAuNjRMODM5LjA0IDMxMC43Mmw0MS41MDQgNDIuOTc2YTMyIDMyIDAgMCAwIDUzLjkyLTEzLjkybDQ0LjQ0OC0xNjUuNDA4YTMxLjg0IDMxLjg0IDAgMCAwIDAuMjg4LTE1LjUyeiIgcC1pZD0iNDEwMSIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjxwYXRoIGQ9Ik05MjggNDUwLjQ2NGEzMiAzMiAwIDAgMC0zMiAzMlY3MzZhMzIgMzIgMCAwIDEtMzIgMzJIMTYwYTMyIDMyIDAgMCAxLTMyLTMyVjE2MGEzMiAzMiAwIDAgMSAzMi0zMmg1MzAuNjU2YTMyIDMyIDAgMCAwIDAtNjRIMTYwYTk2IDk2IDAgMCAwLTk2IDk2djU3NmE5NiA5NiAwIDAgMCA5NiA5Nmg3MDRhOTYgOTYgMCAwIDAgOTYtOTZ2LTI1My41MzZhMzIgMzIgMCAwIDAtMzItMzJ6TTkxMiA4OTZoLTgwMGEzMiAzMiAwIDAgMCAwIDY0aDgwMGEzMiAzMiAwIDAgMCAwLTY0eiIgcC1pZD0iNDEwMiIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjwvc3ZnPg==',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
                languages[currentLanguage]['content30-block0-title']
            ),
          },
          content: {
            className: 'content3-content',
            children: (
                languages[currentLanguage]['content30-block0-content']
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU1OTM0MTEyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDgzMm0tNjQgMGE2NCA2NCAwIDEgMCAxMjggMCA2NCA2NCAwIDEgMC0xMjggMFoiIHAtaWQ9IjQyNTMiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48cGF0aCBkPSJNNzkwLjQgMzJIMjMzLjZDMTgyLjcyIDMyIDE0NCA3OC4zMzYgMTQ0IDEzMi45Mjh2NzU4LjE0NEMxNDQgOTQ1LjY2NCAxODIuNzIgOTkyIDIzMy42IDk5Mmg1NTYuOGM1MC44OCAwIDg5LjYtNDYuMzM2IDg5LjYtMTAwLjkyOFYxMzIuOTI4Qzg4MCA3OC4zMzYgODQxLjI4IDMyIDc5MC40IDMyek0yMzMuNiA5Nmg1NTYuOGMxMi43MzYgMCAyNS42IDE1LjM5MiAyNS42IDM2LjkyOFYxNjBoLTYwOHYtMjcuMDcyQzIwOCAxMTEuMzkyIDIyMC44NjQgOTYgMjMzLjYgOTZ6IG01NTYuOCA4MzJIMjMzLjZjLTEyLjczNiAwLTI1LjYtMTUuMzkyLTI1LjYtMzYuOTI4VjIyNGg2MDh2NjY3LjA3MmMwIDIxLjUzNi0xMi44NjQgMzYuOTI4LTI1LjYgMzYuOTI4eiIgcC1pZD0iNDI1NCIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjxwYXRoIGQ9Ik03MDQgNTYwSDMyMGEzMiAzMiAwIDEgMCAwIDY0aDM4NGEzMiAzMiAwIDEgMCAwLTY0ek0zMjAgNDMyaDI1Ni41NzZhMzIgMzIgMCAxIDAgMC02NEgzMjBhMzIgMzIgMCAwIDAgMCA2NHoiIHAtaWQ9IjQyNTUiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4=',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
                languages[currentLanguage]['content30-block1-title']
            ),
          },
          content: {
            className: 'content3-content',
            children: (
                languages[currentLanguage]['content30-block1-content']
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU2MjI3MjYzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4MzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODY0IDE2MGgtMTY0LjUxMkExMjcuNzEyIDEyNy43MTIgMCAwIDAgNTc2IDY0YTEyOCAxMjggMCAwIDAgMCAyNTYgMTI3LjcxMiAxMjcuNzEyIDAgMCAwIDEyMy40ODgtOTZIODY0YTMyIDMyIDAgMCAxIDMyIDMydjI4OGEzMiAzMiAwIDAgMS0zMiAzMmgtMzA0YTMyIDMyIDAgMCAwIDAgNjRIODY0YTk2IDk2IDAgMCAwIDk2LTk2VjI1NmE5NiA5NiAwIDAgMC05Ni05NnogbS0yODggOTZhNjQgNjQgMCAxIDEgMC4wMzItMTI4LjAzMkE2NCA2NCAwIDAgMSA1NzYgMjU2eiIgcC1pZD0iNDgzNCIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjxwYXRoIGQ9Ik04MzIgNzA0Yy01Ny4zNzYgMC0xMDUuMzc2IDM4LjAxNi0xMjEuNjMyIDkwLjA0OEgzODRhMzEuODcyIDMxLjg3MiAwIDAgMS0zMS43NDQtMzAuNjU2QTEyNy42OCAxMjcuNjggMCAwIDAgMzIwIDUxMmMtNDcuMjY0IDAtODguMDY0IDI1Ljg4OC0xMTAuMjQgNjRIMTYwYTMyIDMyIDAgMCAxLTMyLTMyVjI1NmEzMiAzMiAwIDAgMSAzMi0zMmgyMDhhMzIgMzIgMCAwIDAgMC02NEgxNjBhOTYgOTYgMCAwIDAtOTYgOTZ2Mjg4YTk2IDk2IDAgMCAwIDk2IDk2aDMyYTEyNy42OCAxMjcuNjggMCAwIDAgOTYuMTYgMTIzLjUyQTk1LjkzNiA5NS45MzYgMCAwIDAgMzg0IDg1OC4wOGgzMjIuNjg4QTEyOCAxMjggMCAxIDAgODMyIDcwNHpNMjU2IDY0MGE2NCA2NCAwIDEgMSAxMjguMDMyIDAuMDMyQTY0IDY0IDAgMCAxIDI1NiA2NDB6IG01NzYgMjU2YTY0IDY0IDAgMSAxIDAuMDMyLTEyOC4wMzJBNjQgNjQgMCAwIDEgODMyIDg5NnoiIHAtaWQ9IjQ4MzUiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4=',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              languages[currentLanguage]['content30-block2-title']
            ),
          },
          content: {
            className: 'content3-content',
            children: (
                languages[currentLanguage]['content30-block2-content']
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU2MTkyNTkwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ2ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDY2OC4yMjRsMzY5LjY5Ni0xODQuODMyYTMyIDMyIDAgMCAxIDI4LjYwOCA1Ny4yMTZsLTM4NCAxOTJhMzIgMzIgMCAwIDEtMjguNjA4IDBsLTM4NC0xOTJhMzIgMzIgMCAwIDEgMjguNjA4LTU3LjIxNkw1MTIgNjY4LjIyNHoiIHAtaWQ9IjQ2ODIiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48cGF0aCBkPSJNNTEyIDg2MC4yMjRsMzY5LjY5Ni0xODQuODMyYTMyIDMyIDAgMCAxIDI4LjYwOCA1Ny4yMTZsLTM4NCAxOTJhMzIgMzIgMCAwIDEtMjguNjA4IDBsLTM4NC0xOTJhMzIgMzIgMCAwIDEgMjguNjA4LTU3LjIxNkw1MTIgODYwLjIyNHpNMTEzLjY5NiAzNDguNjRhMzIgMzIgMCAwIDEgMC01Ny4yOGwzODQtMTkyYTMyIDMyIDAgMCAxIDI4LjYwOCAwbDM4NCAxOTJhMzIgMzIgMCAwIDEgMCA1Ny4yOGwtMzg0IDE5MmEzMiAzMiAwIDAgMS0yOC42MDggMGwtMzg0LTE5MnpNNTEyIDQ3Ni4yMjRMODI0LjQ0OCAzMjAgNTEyIDE2My43NzYgMTk5LjU1MiAzMjAgNTEyIDQ3Ni4yMjR6IiBwLWlkPSI0NjgzIiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              languages[currentLanguage]['content30-block3-title']
            ),
          },
          content: {
            className: 'content3-content',
            children: (
                languages[currentLanguage]['content30-block3-content']
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU2MDA4NTc0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1MjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODMyIDczNmExMjggMTI4IDAgMCAwLTEyNS4yOCAxMDEuODI0bC0zMTguMzA0LTAuMDY0Yy04LjM1Mi01LjU2OC0xMy40NC00My42MTYtMTYuNDQ4LTY5Ljc2aDkyLjM4NGMxNC41OTIgMTkuMzI4IDM3LjU2OCAzMiA2My42NDggMzJhODAgODAgMCAxIDAtNzguNC05NmgtODYuMjRjLTExLjYxNi02My4xMzYtMzguMzM2LTEyOC0xMjIuMTQ0LTEyOEg5NmEzMiAzMiAwIDEgMCAwIDY0aDE0NS4yNDhjMzIuMzIgMCA0Ny4xMzYgMTkuNzc2IDU2LjcwNCA2NEg5NmEzMiAzMiAwIDAgMCAwIDY0aDIxMS41NTJjNi43MiA2MC4wNjQgMTUuNTg0IDEzMy44MjQgODIuMjQgMTMzLjgyNGgzMTguMTc2YzAuOCAwIDEuNDQtMC4zODQgMi4yMDgtMC40NDhDNzI2LjI3MiA5NTMuNjk2IDc3NC40IDk5MiA4MzIgOTkyYTEyOCAxMjggMCAwIDAgMC0yNTZ6IG0wIDE5MmE2NCA2NCAwIDEgMSAwLjAzMi0xMjguMDMyQTY0IDY0IDAgMCAxIDgzMiA5Mjh6TTk2IDUxMmgzODQuNTEyYzEuMzQ0IDAgMi40OTYtMC42MDggMy43NzYtMC43NjhBMTI3Ljc0NCAxMjcuNzQ0IDAgMCAwIDYwOCA2MDhhMTI4IDEyOCAwIDAgMCAwLTI1NiAxMjcuNzQ0IDEyNy43NDQgMCAwIDAtMTIzLjcxMiA5Ni43NjhjLTEuMjgtMC4xNi0yLjQzMi0wLjc2OC0zLjc3Ni0wLjc2OEg5NmEzMiAzMiAwIDAgMCAwIDY0eiBtNTEyLTk2YTY0IDY0IDAgMSAxLTAuMDMyIDEyOC4wMzJBNjQgNjQgMCAwIDEgNjA4IDQxNnpNOTYgMzg5Ljc5MmgxNDUuMjQ4YzEwOC4yMjQgMCAxMjEuNi05MC4yNzIgMTI5LjYtMTQ0LjE5MiA2LjY4OC00NS41MDQgMTAuNzg0LTUzLjYgMTguOTQ0LTUzLjZoMjk4LjU2YzE0LjU5MiAxOS4zMjggMzcuNTY4IDMyIDYzLjY0OCAzMmE4MCA4MCAwIDEgMC03OC40LTk2aC0yODMuODA4QzMyMy41MiAxMjggMzEzLjg4OCAxOTMuMTIgMzA3LjUyIDIzNi4yMjRjLTkuNDA4IDYzLjY0OC0xOC4wNDggODkuNTY4LTY2LjI3MiA4OS41NjhIOTZhMzIgMzIgMCAwIDAgMCA2NHoiIHAtaWQ9IjQ1MjMiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4=',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              languages[currentLanguage]['content30-block4-title']
            ),
          },
          content: {
            className: 'content3-content',
            children: (
                languages[currentLanguage]['content30-block4-content']
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU2MzA1OTQ1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ5ODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODY3LjU4NCAxNjAuMTkyYy0xNDkuNjMyLTE2LjkyOC0yNjIuMjA4LTU3LjQwOC0zMzQuNTkyLTEyMC4zNTJsLTE5LjA0LTE2LjU0NC0yMC41NDQgMTQuNjU2QzM3OS45NjggMTE4Ljk0NCAyNjcuNzc2IDE2MCAxNjAgMTYwSDEyOHY0NDhjMCAxMzcuMzQ0IDEyMS4wODggMjYxLjkyIDM3MC4yMDggMzgwLjg2NGwxMy4wODggNi4yNCAxMy4zNDQtNS43MjhDNzcxLjA3MiA4ODMuNTIgODk2IDc1NS4yMzIgODk2IDYwOFYxNjMuNDI0bC0yOC40MTYtMy4yMzJ6TTgzMiA2MDhjMCAxMTYuOC0xMDcuMzkyIDIyMy4zNi0zMTkuMzI4IDMxNi44QzI5OS44NzIgODIxLjAyNCAxOTIgNzE0LjQ2NCAxOTIgNjA4VjIyMi45NzZjMTA0LjY3Mi02Ljc4NCAyMTEuNTg0LTQ2LjY4OCAzMTguNDk2LTExOC45NDRDNTg3LjIzMiAxNjIuNTI4IDY5NS4xNjggMjAxLjUzNiA4MzIgMjIwLjI1NlY2MDh6IiBwLWlkPSI0OTg2IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM1OS43NzYgNDY4LjY3MmEzMiAzMiAwIDEgMC00Ny45NjggNDIuNGwxMjEuNzkyIDEzNy44MjRjMTIuNjA4IDE0LjI0IDMwLjE3NiAyMS41NjggNDcuOTA0IDIxLjU2OGE2NC4zODQgNjQuMzg0IDAgMCAwIDQ5LjY5Ni0yMy41MmwxOTcuNi0yNDIuNzJhMzIgMzIgMCAwIDAtNDkuNjMyLTQwLjQxNmwtMTk3LjYgMjQyLjY4OC0xMjEuNzkyLTEzNy44MjR6IiBwLWlkPSI0OTg3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              languages[currentLanguage]['content30-block5-title']
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              languages[currentLanguage]['content30-block5-content']
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer0-wrapper jwq3bq34q9r-editor_css',
  },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>©2018-2023 Hyperf&nbsp;All Rights Reserved</span>
      </>
    ),
  },
};
