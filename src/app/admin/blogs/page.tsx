"use client";

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, TextField, Paper, Grid, IconButton, Switch, FormControlLabel } from '@mui/material';
import { Edit, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    return (
        <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', p: 1, display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1, bgcolor: 'background.paper' }}>
            <Button size="small" variant={editor.isActive('bold') ? 'contained' : 'outlined'} onClick={() => editor.chain().focus().toggleBold().run()}>Bold</Button>
            <Button size="small" variant={editor.isActive('italic') ? 'contained' : 'outlined'} onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</Button>
            <Button size="small" variant={editor.isActive('strike') ? 'contained' : 'outlined'} onClick={() => editor.chain().focus().toggleStrike().run()}>Strike</Button>
            <Button size="small" variant={editor.isActive('heading', { level: 2 }) ? 'contained' : 'outlined'} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Button>
            <Button size="small" variant={editor.isActive('heading', { level: 3 }) ? 'contained' : 'outlined'} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Button>
            <Button size="small" variant={editor.isActive('bulletList') ? 'contained' : 'outlined'} onClick={() => editor.chain().focus().toggleBulletList().run()}>Bullets</Button>
            <Button size="small" variant={editor.isActive('orderedList') ? 'contained' : 'outlined'} onClick={() => editor.chain().focus().toggleOrderedList().run()}>Ordered</Button>
            <Button size="small" variant={editor.isActive('blockquote') ? 'contained' : 'outlined'} onClick={() => editor.chain().focus().toggleBlockquote().run()}>Quote</Button>
            <Button size="small" variant="outlined" onClick={() => editor.chain().focus().setHorizontalRule().run()}>Divider</Button>
            <Button size="small" variant="outlined" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>Undo</Button>
            <Button size="small" variant="outlined" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>Redo</Button>
        </Box>
    );
};

function Tiptap({ content, onChange }: { content: string, onChange: (content: string) => void }) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none max-w-none',
                style: 'min-height: 300px; padding: 1rem;'
            }
        }
    });

    // Sync external content changes into the editor when switching posts
    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    return (
        <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, overflow: 'hidden' }}>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </Box>
    );
}

export default function AdminBlogsPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [editingPost, setEditingPost] = useState<any | null>(null);
    const [formData, setFormData] = useState({ title: '', content: '', coverImage: '', excerpt: '', published: false });
    const [isCreating, setIsCreating] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch('/api/posts');
            const data = await res.json();
            setPosts(data);
        } catch {
            toast({ title: "Error", description: "Failed to fetch posts", variant: "destructive" });
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingPost) {
                // Update
                const res = await fetch(`/api/posts/${editingPost._id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                if (res.ok) {
                    toast({ title: "Updated", description: "Post updated successfully!" });
                    setEditingPost(null);
                }
            } else {
                // Create
                const res = await fetch('/api/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                if (res.ok) {
                    toast({ title: "Created", description: "Post created successfully!" });
                    setIsCreating(false);
                }
            }
            setFormData({ title: '', content: '', coverImage: '', excerpt: '', published: false });
            fetchPosts();
        } catch {
            toast({ title: "Error", description: "Operation failed", variant: "destructive" });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;
        try {
            await fetch(`/api/posts/${id}`, { method: 'DELETE' });
            toast({ title: "Deleted", description: "Post deleted successfully!" });
            fetchPosts();
        } catch {
            toast({ title: "Error", description: "Delete failed", variant: "destructive" });
        }
    };

    const openEdit = (post: any) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            content: post.content,
            coverImage: post.coverImage || '',
            excerpt: post.excerpt || '',
            published: post.published
        });
        setIsCreating(true);
    };

    const cancelEdit = () => {
        setEditingPost(null);
        setIsCreating(false);
        setFormData({ title: '', content: '', coverImage: '', excerpt: '', published: false });
    };

    return (
        <Box sx={{ py: 12, minHeight: '100vh', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 6 }}>Blog Administration Workspace</Typography>

                {isCreating ? (
                    <Paper sx={{ p: 4, borderRadius: 4, mb: 6, border: '1px solid', borderColor: 'divider' }} elevation={0}>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>
                            {editingPost ? 'Edit Post' : 'Create New Post'}
                        </Typography>
                        <form onSubmit={handleSave}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Post Title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        required
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Excerpt (Short Description)"
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        multiline
                                        rows={2}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Cover Image URL"
                                        value={formData.coverImage}
                                        onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Rich Content Editor (Accepts HTML/Images)</Typography>
                                    <Tiptap content={formData.content} onChange={(html) => setFormData({ ...formData, content: html })} />
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={formData.published}
                                                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                                            />
                                        }
                                        label="Publish immediately?"
                                    />
                                </Grid>

                                <Grid size={{ xs: 12 }} sx={{ display: 'flex', gap: 2, mt: 2 }}>
                                    <Button variant="contained" type="submit" size="large">
                                        {editingPost ? 'Update Post' : 'Publish Post'}
                                    </Button>
                                    <Button variant="outlined" onClick={cancelEdit} size="large" color="inherit">
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                ) : (
                    <>
                        <Box sx={{ mb: 5, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" startIcon={<Plus size={18} />} onClick={() => setIsCreating(true)}>
                                Draft New Post
                            </Button>
                        </Box>

                        <Grid container spacing={4}>
                            {posts.map(post => (
                                <Grid size={{ xs: 12 }} key={post._id}>
                                    <Paper sx={{ p: 4, borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid', borderColor: 'divider' }} elevation={0}>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{post.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Slug: {post.slug} • status: {post.published ? 'Published' : 'Draft'} • {new Date(post.createdAt).toLocaleDateString()}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <IconButton onClick={() => openEdit(post)} color="primary">
                                                <Edit size={20} />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(post._id)} color="error">
                                                <Trash2 size={20} />
                                            </IconButton>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}

                            {posts.length === 0 && (
                                <Grid size={{ xs: 12 }}>
                                    <Typography color="text.secondary" sx={{ textAlign: 'center', py: 8 }}>
                                        No posts found. Create your first blog post!
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </>
                )}
            </Container>
        </Box>
    );
}
