#!/bin/bash
# GitHub 推送脚本
# 使用方法：将 YOUR_USERNAME 替换成你的 GitHub 用户名，然后执行

# 设置变量
GITHUB_USERNAME="YOUR_USERNAME"  # 👈 请修改这里
REPO_NAME="smart-brevity-digest"

# 显示当前配置
echo "📋 配置信息："
echo "GitHub 用户名: $GITHUB_USERNAME"
echo "仓库名称: $REPO_NAME"
echo ""

# 检查是否已设置用户名
if [ "$GITHUB_USERNAME" == "YOUR_USERNAME" ]; then
    echo "❌ 错误：请先在脚本中设置你的 GitHub 用户名"
    echo "编辑此文件，将 YOUR_USERNAME 替换成你的 GitHub 用户名"
    exit 1
fi

# 执行推送
echo "🔗 添加远程仓库..."
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo "🌿 切换到 main 分支..."
git branch -M main

echo "🚀 推送到 GitHub..."
git push -u origin main

echo ""
echo "✅ 完成！"
echo "访问你的仓库：https://github.com/$GITHUB_USERNAME/$REPO_NAME"
