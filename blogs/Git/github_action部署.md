---
title: github action部署
date: 2024/4/22
categories:
 - 部署
tags:
 - Git
 - Github
---

> [github actions官方文档](https://docs.github.com/zh/actions)

## 部署Vue2

1. git初始化本地项目

2. GitHub创建仓库

3. 本地添加远程仓库，本地项目推送到github仓库

4. GitHub Actions 添加.github/workflows/main.yml文件

   ```yaml
   name: Build PersonWeb to ALi
   on:
     #监听push操作
     push:
       branches:
         # mian分支，你也可以改成其他分支
         - main
   jobs:
     # 任务ID
     build:
       # 运行环境
       runs-on: ubuntu-latest
       # 步骤
       steps:
       # 使用别人的action
       - uses: actions/checkout@v4
       # 步骤名称
       - name: npm install
         # 步骤执行指令
         run: npm install
       - name: npm run build
         run: npm run build
       # 命名这个任务为发布Deploy
       - name: Deploy
         # 因为构建之后，需要把代码上传到服务器上，所以需要连接到ssh，并且做一个拷贝操作
         uses: cross-the-world/scp-pipeline@master
         env:
           WELCOME: "ssh scp ssh pipelines"
           LASTSSH: "Doing something after copying"
         with:
           host: ${{ secrets.USER_HOST }}
           user: ${{ secrets.USER_NAME }}
           pass: ${{ secrets.USER_PASS }}
           connect_timeout: 10s
           local: './dist/*'
           remote: /home/www/dist
   ```

   

5. 本地项目拉取最新代码

6. actions添加环境变量

		+ USER_HOST (服务器ip)
		+ USER_NAME (用户名root)
		+ USER_PASS (密码)

7. 本地推送代码，github actions自动部署到服务器。