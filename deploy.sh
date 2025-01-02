#!/usr/bin/env bash

# 构建项目
echo "Building the project..."
npm run build

# 进入构建文件夹
cd build

# 创建一个新的 git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交变更
git commit -m "Deploy to GitHub Pages"

# 添加远程仓库
# 请将 USERNAME 替换为你的 GitHub 用户名
git remote add origin git@github.com:USERNAME/USERNAME.github.io.git

# 强制推送到 gh-pages 分支
git push -f origin main:gh-pages

# 返回到项目根目录
cd ..