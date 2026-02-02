# 🤖 Smart Brevity AI Digest

基於 Axios 方法論的個人技術文摘系統

## 功能特色

✅ 自動從 200+ 技術部落格抓取最新文章  
✅ 使用 Gemini AI 生成 Smart Brevity 風格摘要  
✅ 每日精選 Top 10 最高價值文章  
✅ 自動發送到 Telegram，隨時隨地接收  

## 快速開始

### 1. 安裝依賴

已安裝完成 ✅

### 2. 設定 API Keys

複製環境變數範本：

```bash
copy .env.example .env
```

然後編輯 `.env` 檔案，填入你的 API Keys：

```env
GEMINI_API_KEY=你的_Gemini_API_Key
TELEGRAM_BOT_TOKEN=你的_Bot_Token
TELEGRAM_CHAT_ID=你的_Chat_ID
```

#### 如何取得 API Keys

**Gemini API Key:**

1. 前往 [Google AI Studio](https://aistudio.google.com/apikey)
2. 點擊「Create API Key」
3. 複製並貼到 `.env`

**Telegram Bot Token & Chat ID:**

請參考 [TELEGRAM_SETUP.md](TELEGRAM_SETUP.md) 完整設置指南。

### 3. 執行文摘生成

```bash
node src/index.js
```

## 預期輸出

```
🚀 Starting AI Digest Generator...

📥 Found 92 feeds in OPML
🔄 Fetching recent articles...
✅ Fetched 19 articles
🎯 Selected top 10 articles

🤖 Generating AI summaries...
📨 Sending to Telegram...
✅ Messages sent to Telegram successfully!

🎉 Digest generation complete!
```

## 成本估算

- **每日成本**: ~$0.0003 USD (不到 1 分錢台幣)
- **使用模型**: Gemini 2.5 Flash-Lite
- **每日 Token 消耗**: ~6,000 Tokens

## 自動化 (選填)

使用 Windows Task Scheduler 設定每日自動執行：

1. 開啟「工作排程器」
2. 建立基本工作
3. 觸發條件：每日 08:00
4. 動作：啟動程式 → `node`
5. 引數：`C:\\Users\\User\\.gemini\\antigravity\\scratch\\rss-reader\\src\\index.js`

## 檔案結構

```
rss-reader/
├── src/
│   └── index.js          # 主程式
├── config/
│   └── feeds.opml        # RSS 訂閱清單 (92個)
├── .env.example          # 環境變數範本
├── .env                  # 你的 API Keys (請勿上傳)
├── TELEGRAM_SETUP.md     # Telegram Bot 設置指南
├── package.json          # 專案設定
└── README.md             # 本說明文件
```

## 故障排除

**❌ API Key 錯誤**

- 檢查 `.env` 檔案是否正確填寫
- 確認 Gemini API Key 有效

**❌ Telegram 發送失敗**

- 確認 Bot Token 和 Chat ID 正確
- 檢查是否已和 Bot 對話（發送 `/start`）

**❌ RSS 抓取失敗**

- 部分部落格可能沒有 RSS，這是正常的
- 程式會自動跳過問題來源

**❌ AI 摘要太慢**

- 正常現象，每篇約需 2-3 秒
- 10 篇共需約 30 秒

## Smart Brevity 輸出範例

```
**SaaS 創業 6 個月破百萬**

一位獨立開發者分享從 0 到 100 萬美金 ARR 的完整時間線與關鍵轉折點。

**Why it matters：** 如果你正在考慮 SaaS 創業，這篇提供了可複製的市場驗證框架。

**Be smart：** 作者強調「先賣再做」— 在寫任何程式碼前，先確認有人願意付費。

🔗 https://example.com/article
```

## 授權

MIT License
