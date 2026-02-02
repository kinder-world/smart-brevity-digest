const fs = require('fs').promises;
const path = require('path');

async function testOPMLParsing() {
    console.log('🧪 測試 OPML 解析...\n');

    const opmlPath = path.join(__dirname, '../config/feeds.opml');
    const opmlContent = await fs.readFile(opmlPath, 'utf-8');

    const feeds = [];
    const urlRegex = /xmlUrl="([^"]+)"/g;
    let match;
    while ((match = urlRegex.exec(opmlContent)) !== null) {
        feeds.push(match[1]);
    }

    console.log(`✅ 成功解析 ${feeds.length} 個 RSS feeds`);
    console.log('\n前 5 個 feeds:');
    feeds.slice(0, 5).forEach((url, i) => {
        console.log(`${i + 1}. ${url}`);
    });

    return feeds.length > 0;
}

testOPMLParsing()
    .then(success => {
        if (success) {
            console.log('\n✅ OPML 解析測試通過！');
        } else {
            console.log('\n❌ OPML 解析失敗');
        }
    })
    .catch(err => {
        console.error('❌ 測試錯誤:', err.message);
    });
