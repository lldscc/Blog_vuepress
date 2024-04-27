---
title: git部署
date: 2024/4/22
hideComments: false
categories:
 - 部署
tags:
 - Git
---

> [【Git】部署流程｜持续部署到私有服务器_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ck4y1B7Pw/?spm_id_from=333.788.top_right_bar_window_default_collection.content.click&vd_source=dc3fbe24cdee834b2736194bdadc19e7)



## （一）服务器

### 1. 安装git、 node.js 、  nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# 使 nvm 生效
source ~/.bashrc

# 安装node.js
nvm install <version>

# 查看版本
nvm -v
node -v
npm -v
```

### 2. 创建git裸仓库

```bash
git init vue-llds.git --bare
```

### 3. 编写git钩子

```bash
vim post-receive
```

### 4. post-receive文件

```bash
#!/bin/bash   # 指定脚本使用的解释器

echo 'server: received code push...' # 打印消息

cd /var/www/html # 切换到项目目录

echo 'server:checkout latest code from git...' # 打印消息


# 指定的bare仓库 (/opt/vue-calculator.git) 检出最新的代码到指定的工作目录 (/var/www/html)
# 并强制覆盖本地更改。
git --git-dir=/opt/vue-llds.git --work-tree=/var/www/html checkout master -f

echo 'server:running npm install...' # 打印消息

# 安装项目所需的依赖
npm install \
# 打印消息
&& echo 'server:building...' \
&& npm run build \
&& echo 'server:done.'
```

### 5. 更改钩子文件权限

```bash
chmod +x post-receive 
```

## （二）本地项目

```bash
 git remote add prod ssh://root@8.219.151.201/opt/vue-llds.git

 git remote -v

 git push prod master
```















