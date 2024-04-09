---
title: lottiejs
date: 2024/4/1
tags:
 - js框架
categories:
 - web前端
---

# lottie

## 简介

为网站和应用程序提供轻量级、可扩展的动画

## 引入

[Lottie-player文档](https://docs.lottiefiles.com/lottie-player/)

```html
   <!-- Lottie JSON方式 -->
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src=".."></lottie-player>

   <!--dotLottie方式 -->
<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
<dotlottie-player src=".."></dotlottie-player>
```

## 交互

[交互文档](https://lottiefiles.com/interactivity)

### 引入

```html
<script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>

<lottie-player id="firstLottie" src="https://assets2.lottiefiles.com/packages/lf20_i9mxcD.json" style="width:400px; height: 400px;">">
</lottie-player>
```

### 配置

```js
<script>
  LottieInteractivity.create({
    player: '#firstLottie',  //id
    mode: 'scroll',		//模式：滚动scroll，光标cursor
    actions: [
      {
        visibility: [0,1],
        type: 'seek',
        frames: [0, 300],
      },
    ]
  });
</script>
```
