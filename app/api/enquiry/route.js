import { NextResponse } from 'next/server';
import axios from 'axios';
const pool = require('../../../lib/db');
const { sessions } = require('../../../lib/chatbot-logic');

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, mobile, email, project, sessionId } = body;

        if (!name || !mobile || !email) {
            return NextResponse.json({ success: false, message: 'All fields required' }, { status: 400 });
        }

        const session = sessions[sessionId] || { data: {} };
        const { type, city, budget } = session.data || {};

        // 1. Try to save to local MySQL
        try {
            await pool.execute(
                'INSERT INTO form_leads (name, phone, email, project_name, property_type, city, budget) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [name, mobile, email, project || 'General', type || 'N/A', city || 'N/A', budget || 'N/A']
            );
            console.log('[Lead] Saved to MySQL:', name, mobile);
        } catch (dbErr) {
            console.log('[Lead] MySQL unavailable, skipping local storage:', dbErr.code || dbErr.message);
        }

        // 2. External API Integration
        try {
            const externalResponse = await axios.post('https://apis.mypropertyfact.in/enquiry/post', {
                name: name,
                email: email,
                phone: mobile,
                message: null,
                pageName: null,
                enquiryFrom: null,
                projectLink: project ? `https://mypropertyfact.in/${project.toLowerCase().replace(/\s+/g, '-')}` : "https://www.mypropertyfact.com/contact-us",
                status: "PENDING",
                id: 0
            });

            console.log(`[Lead] External API Response:`, externalResponse.data);

            if (externalResponse.data && externalResponse.data.isSuccess === 1) {
                return NextResponse.json({
                    success: true,
                    reply: `Thank you for sharing your details!\nOur consultant will contact you within 24 hours.`,
                    followUp: `Would you like to explore more projects?`,
                    options: ['Yes', 'No']
                });
            } else {
                throw new Error(`External API declined: ${JSON.stringify(externalResponse.data)}`);
            }

        } catch (apiError) {
            console.error("External Enquiry API Failed:", apiError.message);
            return NextResponse.json({
                success: false,
                message: 'Submission failed. Please try again.'
            }, { status: 500 });
        }
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
