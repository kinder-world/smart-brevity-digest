const Parser = require('rss-parser');
const parser = new Parser();

async function testRSSFetching() {
    console.log('🔄 測試 RSS 抓取...\n');

    // 測試幾個知名的 RSS feeds
    const testFeeds = [
        'https://simonwillison.net/atom/everything/',
        'https://www.jeffgeerling.com/blog.xml',
        'https://daringfireball.net/feeds/main'
    ];

    const articles = [];

    for (const feedUrl of testFeeds) {
        try {
            console.log(`📡 抓取: ${feedUrl}`);
            const feed = await parser.parseURL(feedUrl);

            if (feed.items && feed.items.length > 0) {
                const recent = feed.items[0];
                articles.push({
                    title: recent.title,
                    link: recent.link,
                    source: feed.title,
                    pubDate: recent.pubDate
                });
                console.log(`  ✅ 成功: ${feed.title}`);
            }
        } catch (error) {
            console.log(`  ⚠️  失敗: ${error.message}`);
        }
    }

    console.log(`\n✅ 成功抓取 ${articles.length} 篇文章\n`);

    if (articles.length > 0) {
        console.log('📄 文章範例:');
        articles.forEach((article, i) => {
            console.log(`\n${i + 1}. 標題: ${article.title}`);
            console.log(`   來源: ${article.source}`);
            console.log(`   日期: ${article.pubDate}`);
            console.log(`   連結: ${article.link}`);
        });

        return true;
    } else {
        console.log('❌ 未能抓取任何文章');
        return false;
    }
}

testRSSFetching()
    .then(success => {
        if (success) {
            console.log('\n✅ RSS 抓取測試通過！');
        } else {
            console.log('\n❌ RSS 抓取測試失敗');
        }
    })
    .catch(err => {
        console.error('❌ 測試錯誤:', err.message);
    });
