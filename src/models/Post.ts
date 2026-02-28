import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
    title: string;
    slug: string;
    content: string; // HTML content from the rich text editor
    coverImage?: string;
    excerpt?: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const PostSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        content: { type: String, required: true },
        coverImage: { type: String },
        excerpt: { type: String },
        published: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
