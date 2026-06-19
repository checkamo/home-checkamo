import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.EXCHANGE_RATE_API;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // Use exchangerate-api.com with NGN as base
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/NGN`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }

    const data = await response.json();
    return NextResponse.json({
      USD: (1 / data.conversion_rates.USD).toFixed(2),
      GBP: (1 / data.conversion_rates.GBP).toFixed(2),
      EUR: (1 / data.conversion_rates.EUR).toFixed(2),
      base: 'NGN'
    });
  } catch (error) {
    console.error('Exchange rate error:', error);
    return NextResponse.json({ error: 'Failed to fetch rates' }, { status: 500 });
  }
}
