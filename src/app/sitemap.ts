import { MetadataRoute } from 'next';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://codenaxa.in').replace(/\/$/, '');
    const entries: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    try {
        await connectDB();
        const posts = await Post.find({ published: true })
            .select('slug updatedAt createdAt')
            .lean();

        posts.forEach((post: any) => {
            entries.push({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified: post.updatedAt || post.createdAt || new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    } catch (error) {
        console.warn('Failed to build blog sitemap entries:', error);
    }

    return entries;
}
