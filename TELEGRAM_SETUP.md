# 🤖 如何创建 Telegram Bot

## 步骤 1: 创建 Bot

1. 在 Telegram 中搜索 `@BotFather`
2. 发送 `/newbot`
3. 按照提示设置：
   - Bot 名称（例如：Tech Digest Bot）
   - Bot 用户名（例如：your_digest_bot）
4. 复制 **Bot Token**（格式：`123456789:ABCdefGhIjKlmNoPqRsTuVwXyZ`）

## 步骤 2: 获取你的 Chat ID

1. 在 Telegram 搜索 `@userinfobot`
2. 点击「开始」
3. 它会显示你的 **Chat ID**（例如：`123456789`）

## 步骤 3: 更新 .env

```env
TELEGRAM_BOT_TOKEN=你的Bot Token
TELEGRAM_CHAT_ID=你的Chat ID
```

## 完成

更新 `.env` 后执行 `node src/index.js` 即可收到 Telegram 消息 🎉
