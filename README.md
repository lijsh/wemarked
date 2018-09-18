# wemarked 
> **wemarked** 是一个小程序原生组件，用于解析及渲染 Markdown。内部封装了 [mpvue-markdown-parser](https://github.com/dwqs/mpvue-markdown-parser)。

## pros
- 原生自定义组件，适用于无框架开发的情景；
- markdown 解析使用 `marked`，非常轻量；
- 支持直接 copy 使用或 npm 调用（需借助开发者工具的 npm 构建功能）；
- 支持语法高亮

## cros
- 使用 `rich-text` 实现，无法更精细地响应事件；
- 暂时没有太多自定义选项；
- mpvue 建议直接使用 [mpvue-markdown-parser](https://github.com/dwqs/mpvue-markdown-parser)

## 引用方法（直接拷贝）
1. 下载这个仓库的代码到本地，然后将 `wemarked` 目录 copy 到小程序自定义组件对应目录下；
2. 在需要引用 `wemarked` 的页面对应的 json 声明配置：
```
{
  "usingComponents": {
    "wemarked": "${你的自定义组件目录}/wemarked/index"
  }
}
```

## 引用方法（npm 安装）
1. 通过 `npm install -S wemarked` 将 `wemarked` 安装到项目的 `node_modules`；
2. 使用开发工具的[ npm 构建功能](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)将 `wemarked` 及其依赖构建出来
3. 在需要引用 `wemarked` 的页面对应的 json 声明配置：
```
{
  "usingComponents": {
    "wemarked": "wemarked"
  }
}
```

## 使用方法
``` html
<!--index.wxml-->
<view class="container">
  <wemarked md="{{'# This is A **Heading**\\n#### This is Another *Heading*'}}"/>
</view>
```

效果如图：

![](./preview.png)