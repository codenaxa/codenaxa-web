import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import slugify from 'slugify';
import { revalidatePath } from 'next/cache';

export async function GET() {
    try {
        await connectDB();
        const posts = await Post.find({}).sort({ createdAt: -1 });
        return NextResponse.json(posts);
    } catch (error: any) {
        console.error("GET /api/posts error:", error);
        return NextResponse.json({ error: error.message || 'Failed to fetch posts' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { title, slug: providedSlug, content, coverImage, excerpt, published, metaTitle, metaDescription, metaKeywords } = await req.json();
        await connectDB();

        const baseSlug = providedSlug || slugify(title, { lower: true, strict: true });
        let slug = baseSlug;
        let counter = 1;

        // Ensure unique slug
        while (await Post.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }

        const post = await Post.create({
            title,
            slug,
            content,
            coverImage,
            excerpt,
            published,
            metaTitle,
            metaDescription,
            metaKeywords,
        });

        // Revalidate the sitemap and blog list page to include the new post
        revalidatePath('/sitemap.xml');
        revalidatePath('/blog');

        return NextResponse.json(post, { status: 201 });
    } catch (error: any) {
        console.error("POST /api/posts error:", error);
        return NextResponse.json({ error: error.message || 'Failed to create post' }, { status: 500 });
    }
}
