import { NextResponse } from 'next/server';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  const SUBSTACK_RSS_FEED_URL = 'https://yuktichopra.substack.com/feed/';

  try {
    const response = await fetch(SUBSTACK_RSS_FEED_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }
    const xml = await response.text();
    const result = await parseStringPromise(xml);

    const posts = result.rss.channel[0].item.map((item: any) => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      description: item.description[0],
      // You might need to clean up description (remove HTML, truncate, etc.)
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching or parsing Substack RSS feed:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}
