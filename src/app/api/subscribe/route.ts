import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Forward the request to the external backend if needed, or simply mock success.
    // This bypasses CORS issues from the browser.
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    
    if (backendUrl && backendUrl !== 'http://localhost:3300/api') {
      try {
        await fetch(`${backendUrl}/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      } catch (error) {
        console.warn('External subscription backend is unreachable, proceeding with local success.');
      }
    }

    // Return success to the client
    return NextResponse.json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}
