import { NextResponse } from 'next/server';
const { generateAIResponse } = require('../../../lib/chatbot-logic');

export async function POST(request) {
    try {
        const body = await request.json();
        const { message, sessionId } = body;

        const responseData = await generateAIResponse(message, sessionId || 'default');

        return NextResponse.json(responseData);
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// Handle OPTIONS for CORS if needed (Next.js handles basic CORS but explicit might be safer for embedding)
export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        },
    });
}
