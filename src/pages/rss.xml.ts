import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {
  const blogpost = await getCollection('blog');
  return rss({
    stylesheet: '/styles/rss.xsl',
    title: 'Carlos Blog',
    description: 'Un blog sobre tecnología y desarrollo web',
    site: site ?? '',
    items: blogpost.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link: `post/${slug}`,
    })),
    customData: `<language>es-mx</language>`,
  });
}