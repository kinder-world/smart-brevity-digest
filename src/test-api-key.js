require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

async function testAPI() {
    console.log('🔍 测试新版 Gemini API...\n');
    console.log('API Key:', process.env.GEMINI_API_KEY ? '已设置 ✅' : '未设置 ❌\n');

    try {
        // 根据官方文档，API Key 从环境变量自动读取
        const ai = new GoogleGenAI({});

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-lite',
            contents: 'Say hello in traditional Chinese',
        });

        console.log('✅ API 连接成功！\n');
        console.log('测试响应:', response.text);
        console.log('\n🎉 Gemini API 工作正常！');

        return true;
    } catch (error) {
        console.error('\n❌ API 错误:', error.message);
        console.error('详细信息:', error);
        return false;
    }
}

testAPI();
