import { NextResponse } from 'next/server';
import axios from 'axios';
const pool = require('../../../lib/db');
const { processEnquiry } = require('../../../lib/chatbot-logic');

export async function POST(request) {
    try {
        const body = await request.json();
        const result = await processEnquiry(body);

        return NextResponse.json(result.data, { status: result.status });
    } catch (e) {
        console.error("Lead Submission Error:", e.message);
        return NextResponse.json({ success: false, message: 'Submission failed' }, { status: 500 });
    }
}

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
