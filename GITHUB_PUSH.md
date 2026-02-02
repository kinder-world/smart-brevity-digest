# 📤 推送到 GitHub 指南

## 準備工作

✅ **已完成**：

- Git 仓库已初始化
- `.gitignore` 已设置（保护 `.env` 文件）
- 初始提交已创建
- 所有 PII 已移除（API Keys 在 `.env` 中，不会被推送）

---

## 推送步骤

### 1. 在 GitHub 创建新仓库

1. 前往 [https://github.com/new](https://github.com/new)
2. 填写仓库信息：
   - **Repository name**: `smart-brevity-digest` (或你喜欢的名称)
   - **Description**: `AI-powered tech digest using Smart Brevity methodology with Telegram delivery`
   - **Public** 或 **Private**（你选择）
   - ⚠️ **不要**勾选「Add a README」、「Add .gitignore」、「Choose a license」（我们已经有了）

3. 点击「Create repository」

### 2. 连接并推送

GitHub 会显示推送指令，复制并在项目目录执行：

```bash
cd C:\Users\User\.gemini\antigravity\scratch\rss-reader

# 添加远程仓库（替换成你的 GitHub 用户名和仓库名）
git remote add origin https://github.com/你的用户名/smart-brevity-digest.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3. 验证推送成功

刷新 GitHub 仓库页面，你应该能看到：

- README.md（项目说明）
- src/index.js（主程序）
- config/feeds.opml（RSS 订阅清单）
- .env.example（配置范例）
- **确认 `.env` 文件不在列表中**（API Keys 受保护）

---

## ⚠️ 重要提醒

### 确保 .env 文件永远不会被推送

检查确认：

```bash
git status
```

如果看到 `.env` 在列表中，立即执行：

```bash
git rm --cached .env
git commit -m "Remove .env from tracking"
```

### 如果不小心推送了 .env

1. **立即撤销 API Keys**：
   - Gemini API: [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
   - Telegram Bot: 联系 `@BotFather` 使用 `/revoke`

2. **删除 Git 历史中的敏感文件**：

   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env" \
     --prune-empty --tag-name-filter cat -- --all
   git push origin --force --all
   ```

3. **重新生成 API Keys**

---

## 📝 后续维护

### 添加新功能

```bash
git add .
git commit -m "Add: 功能描述"
git push
```

### 更新 README

编辑 `README.md` 后：

```bash
git add README.md
git commit -m "Update README"
git push
```

### 查看提交历史

```bash
git log --oneline
```

---

## 🎉 分享你的项目

推送成功后，你可以：

1. 在 README.md 顶部添加项目徽章
2. 邀请其他人 star 你的仓库
3. 发布到技术社群（如 Hacker News, Reddit）
4. 撰写技术博客介绍你的实作过程

---

**项目 GitHub 链接范例**：  
`https://github.com/你的用户名/smart-brevity-digest`

分享时记得提醒其他人需要自行设置 `.env` 文件！
