require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const readline = require('readline');

const SYSTEM_PROMPT = `你是一位使用 Smart Brevity 方法論的技術策展人。

你的任務是將技術文章轉換為 Axios 風格的極簡摘要，讓讀者在 10 秒內判斷是否值得閱讀。

輸出格式（嚴格遵守）：

**[6字以內的標題]**

[一句話開場：最重要的事實或發現]

**Why it matters：** [這對讀者的工作/學習/決策有什麼影響？1-2句]

**Be smart：** [一個可立即應用的洞見或行動建議]

範例輸出：

**SaaS 創業 6 個月破百萬**

一位獨立開發者分享從 0 到 100 萬美金 ARR 的完整時間線與關鍵轉折點。

**Why it matters：** 如果你正在考慮 SaaS 創業，這篇提供了可複製的市場驗證框架。

**Be smart：** 作者強調「先賣再做」— 在寫任何程式碼前，先確認有人願意付費。`;

async function testAISummary() {
    console.log('🤖 測試 Gemini AI 摘要生成...\n');

    // 檢查是否有 .env 檔案
    const fs = require('fs');
    let apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.log('⚠️  未找到 GEMINI_API_KEY 環境變數');
        console.log('請在命令行中設定或使用 .env 檔案\n');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        apiKey = await new Promise(resolve => {
            rl.question('請輸入你的 Gemini API Key: ', answer => {
                rl.close();
                resolve(answer.trim());
            });
        });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: 'gemini-pro',
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 150,
        }
    });

    // 測試文章
    const testArticle = {
        title: 'How I Built a $1M SaaS in 6 Months',
        source: 'Indie Hackers',
        content: `I started my SaaS journey in January 2025 with zero customers. 
    After validating the market through cold emails and landing pages, I built an MVP in 2 weeks. 
    The key was "selling before building" - I had 50 pre-orders before writing a single line of code.
    By July, I hit $1M ARR through a combination of content marketing and strategic partnerships.`
    };

    const prompt = `請為以下技術文章生成 Smart Brevity 摘要：

標題：${testArticle.title}
來源：${testArticle.source}
內容：${testArticle.content}`;

    try {
        console.log('🔄 正在生成摘要...\n');

        const result = await model.generateContent([
            { text: SYSTEM_PROMPT },
            { text: prompt }
        ]);

        const summary = result.response.text();

        console.log('✅ 摘要生成成功！\n');
        console.log('─'.repeat(60));
        console.log(summary);
        console.log('─'.repeat(60));

        return true;
    } catch (error) {
        console.error('❌ 摘要生成失敗:', error.message);
        return false;
    }
}

testAISummary()
    .then(success => {
        if (success) {
            console.log('\n✅ AI 摘要測試通過！');
            console.log('\n💡 下一步: 執行完整流程測試 (node src/index.js)');
        } else {
            console.log('\n❌ AI 摘要測試失敗');
        }
    })
    .catch(err => {
        console.error('❌ 測試錯誤:', err.message);
    });
