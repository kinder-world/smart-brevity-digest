# 🧪 測試指南：Smart Brevity AI Digest

## 測試流程總覽

```
Phase 1: OPML 解析 (✅ 已完成)
    ↓
Phase 2: RSS 抓取測試
    ↓
Phase 3: AI 摘要測試 (需要 Gemini API Key)
    ↓
Phase 4: 郵件發送測試 (需要 Gmail 設定)
    ↓
Phase 5: 完整端到端測試
```

---

## Phase 1: OPML 解析測試 ✅

**已測試並通過！**

```bash
node src/test-opml.js
```

**結果**: ✅ 成功解析 92 個 RSS feeds

---

## Phase 2: RSS 抓取測試

測試是否能成功抓取文章（不需要 API Keys）：

```bash
node src/test-rss.js
```

**預期輸出**:

```
🔄 測試 RSS 抓取...
✅ 成功抓取 20+ 篇文章
📄 文章範例:
   標題: How to Build a SaaS in 2026
   來源: Example Blog
   連結: https://...
```

---

## Phase 3: AI 摘要測試

**前置條件**: 需要設定 `GEMINI_API_KEY`

### 3.1 設定 API Key

1. 複製範本:

   ```bash
   copy .env.example .env
   ```

2. 取得 Gemini API Key:
   - 前往 [Google AI Studio](https://aistudio.google.com/apikey)
   - 點擊「Create API Key」
   - 複製到 `.env` 的 `GEMINI_API_KEY=`

3. 測試 AI 摘要:

   ```bash
   node src/test-ai.js
   ```

**預期輸出**:

```
🤖 測試 Gemini AI 摘要...

**測試文章摘要**

AI 技術的最新突破

**Why it matters：** ...
**Be smart：** ...
```

---

## Phase 4: 郵件發送測試

**前置條件**: 需要設定 Gmail 應用程式密碼

### 4.1 設定 Gmail

1. 前往 [Google 帳戶安全性](https://myaccount.google.com/security)
2. 啟用「兩步驟驗證」
3. 搜尋「應用程式密碼」
4. 選擇「郵件」→ 生成密碼
5. 填入 `.env`:

   ```
   EMAIL_USER=你的Gmail@gmail.com
   EMAIL_PASS=生成的16位數密碼
   EMAIL_TO=收件者@example.com
   ```

### 4.2 測試郵件發送

```bash
node src/test-email.js
```

**預期輸出**:

```
📬 測試郵件發送...
✅ 郵件發送成功！
請檢查信箱: 收件者@example.com
```

---

## Phase 5: 完整端到端測試

所有元件都測試通過後，執行完整流程：

```bash
node src/index.js
```

**預期完整輸出**:

```
🚀 Starting AI Digest Generator...

📥 Found 92 feeds in OPML
🔄 Fetching recent articles...
✅ Fetched 30 articles
🎯 Selected top 10 articles

🤖 Generating AI summaries...
  1/10 ✅
  2/10 ✅
  ...
  10/10 ✅

📬 Sending email...
✅ Email sent successfully!

🎉 Digest generation complete!
```

---

## 常見問題排除

### ❌ 錯誤: "API key not valid"

- 檢查 `.env` 檔案是否正確填寫
- 確認 API Key 沒有多餘空格

### ❌ 錯誤: "Invalid login"

- 確認已啟用 Gmail 兩步驟驗證
- 使用「應用程式密碼」而非一般密碼

### ❌ 部分 RSS 抓取失敗

- 正常現象，部分網站可能沒有 RSS
- 系統會自動跳過問題來源

### ❌ AI 摘要太慢

- 正常現象，每篇約需 2-3 秒
- 10 篇共需約 30 秒

---

## 測試檢查清單

- [ ] Phase 1: OPML 解析 ✅
- [ ] Phase 2: RSS 抓取
- [ ] Phase 3: AI 摘要
- [ ] Phase 4: 郵件發送
- [ ] Phase 5: 完整流程
- [ ] 確認 `.env` 不會被 Git 追蹤

---

## 下一步

測試全部通過後，你可以：

1. **自動化執行**: 設定 Windows Task Scheduler
2. **客製化**: 調整文章數量、摘要風格
3. **分享**: 上傳到 GitHub（記得 `.gitignore`）
