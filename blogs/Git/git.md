---
title: git
date: 2024/4/1
tags:
 - git
categories:
 - git
---

## git常用命令1

```bash
git init                 //在当前目录中初始化一个新的Git仓库。git init -b <分支名称> 
git add <file>           //将文件添加到暂存区，准备提交。常用git add .
git commit -m "commit message"     //将暂存区的更改提交到本地仓库，并添加提交消息。
git push                           //将本地的更改推送到远程仓库。

git remote add <remote-name> <repository-url>   //添加一个新的远程仓库。并换
git clone <repository-url>                      //克隆一个远程仓库到本地。
git remote remove <remote-name>                 //移除指定的远程仓库。

git remote -v          //查看已配置的远程仓库列表。
git status             //查看当前工作目录和暂存区的状态。
git log                //查看提交历史记录。

git branch -b 分支名        //创建分支
git branch -m master main    //修改本地分支为mian
git push -u origin main     //将本地main分支推送到远程仓库
git branch                   //查看本地分支列表。
git checkout <branch-name>  //切换到指定的分支。
git merge <branch-name>    //将指定分支的更改合并到当前分支。


git config user.name   /查看当前Git账户的用户名
git config user.email  //示当前配置的Git邮箱
git config --list   //所有的Git配置信息
```