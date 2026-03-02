import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import slugify from 'slugify';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const id = (await params).id;
        // can be ID or slug
        const post = await Post.findOne({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { title, content, coverImage, excerpt, published } = await req.json();
        await connectDB();
        const id = (await params).id;

        // Optional: if title changed, might want to update slug too. Assuming static for now or just updating literal.
        const updateData: any = { title, content, coverImage, excerpt, published };

        const post = await Post.findByIdAndUpdate(id, updateData, { new: true });
        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json(post);
    } catch (error: any) {
        console.error("PUT /api/posts/[id] error:", error);
        return NextResponse.json({ error: error.message || 'Failed to update post' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const id = (await params).id;
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Post deleted' });
    } catch (error: any) {
        console.error("DELETE /api/posts/[id] error:", error);
        return NextResponse.json({ error: error.message || 'Failed to delete post' }, { status: 500 });
    }
}
