import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://apis.mypropertyfact.in/city/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`External API responded with status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error proxying city data:', error);
        return NextResponse.json({ error: 'Failed to fetch city data' }, { status: 500 });
    }
}
