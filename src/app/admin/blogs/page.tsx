"use client";

import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    Button,
    TextField,
    Paper,
    Grid,
    IconButton,
    Switch,
    FormControlLabel,
    LinearProgress,
} from "@mui/material";
import { Edit, Trash2, Plus, UploadCloud, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminBlogsPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [editingPost, setEditingPost] = useState<any | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        coverImage: "",
        excerpt: "",
        published: false,
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
    });
    const [isCreating, setIsCreating] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [coverPreview, setCoverPreview] = useState<string | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch('/api/posts');
            const data = await res.json();
            if (Array.isArray(data)) {
                setPosts(data);
            } else {
                setPosts([]);
                toast({ title: "Error", description: "Unexpected posts response.", variant: "destructive" });
            }
        } catch {
            setPosts([]);
            toast({ title: "Error", description: "Failed to fetch posts", variant: "destructive" });
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (uploading) {
            toast({
                title: "Upload in progress",
                description: "Please wait for the cover image to finish uploading.",
                variant: "destructive",
            });
            return;
        }
        if (!formData.title.trim() || !formData.content.trim()) {
            toast({
                title: "Validation error",
                description: "Title and Content are required to save a post.",
                variant: "destructive"
            });
            return;
        }

        try {
            const endpoint = editingPost ? `/api/posts/${editingPost._id}` : '/api/posts';
            const method = editingPost ? 'PUT' : 'POST';

            console.log("Saving post to:", endpoint, method);
            const res = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json().catch(() => ({ error: 'Invalid server response' }));

            if (res.ok) {
                toast({
                    title: editingPost ? "Updated" : "Created",
                    description: editingPost ? "Post updated successfully!" : "Post created successfully!"
                });

                if (editingPost) {
                    setEditingPost(null);
                } else {
                    setIsCreating(false);
                }

                setFormData({ title: "", content: "", coverImage: "", excerpt: "", published: false, metaTitle: "", metaDescription: "", metaKeywords: "" });
                setCoverPreview(null);
                fetchPosts();
            } else {
                toast({
                    title: "Action failed",
                    description: data.error || "Please check if all required fields are filled.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            console.error("Save error:", error);
            toast({
                title: "Network Error",
                description: "Failed to communicate with the server. Please check your connection.",
                variant: "destructive"
            });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;
        try {
            const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
            if (res.ok) {
                toast({ title: "Deleted", description: "Post deleted successfully!" });
                fetchPosts();
            } else {
                toast({ title: "Error", description: "Failed to delete post", variant: "destructive" });
            }
        } catch {
            toast({ title: "Error", description: "Delete operation failed", variant: "destructive" });
        }
    };

    const openEdit = (post: any) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            content: post.content,
            coverImage: post.coverImage || "",
            excerpt: post.excerpt || "",
            published: post.published,
            metaTitle: post.metaTitle || "",
            metaDescription: post.metaDescription || "",
            metaKeywords: post.metaKeywords || "",
        });
        setCoverPreview(post.coverImage || null);
        setIsCreating(true);
    };

    const cancelEdit = () => {
        setEditingPost(null);
        setIsCreating(false);
        setFormData({ title: "", content: "", coverImage: "", excerpt: "", published: false, metaTitle: "", metaDescription: "", metaKeywords: "" });
        setCoverPreview(null);
    };

    const handleCoverUpload = async (file: File) => {
        const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

        if (!cloudinaryCloudName || !uploadPreset) {
            toast({
                title: "Setup required",
                description: "Cloudinary keys are missing in .env. Please add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET.",
                variant: "destructive",
            });
            return;
        }

        setUploading(true);
        setUploadProgress(0);

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", uploadPreset);

            // Using XHR so we can still track progress smoothly
            const xhr = new XMLHttpRequest();
            xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`);

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const progress = (event.loaded / event.total) * 100;
                    setUploadProgress(Math.round(progress));
                }
            };

            xhr.onload = () => {
                const response = JSON.parse(xhr.responseText);
                if (xhr.status === 200) {
                    const downloadUrl = response.secure_url;
                    setFormData((prev) => ({ ...prev, coverImage: downloadUrl }));
                    setCoverPreview(downloadUrl);
                    toast({ title: "Upload complete", description: "Cover image saved to Cloudinary!" });
                    setUploading(false);
                } else {
                    const errMsg = response.error?.message || "Check your Cloudinary settings.";
                    console.error("Cloudinary error:", errMsg);
                    toast({
                        title: "Upload failed",
                        description: errMsg,
                        variant: "destructive",
                    });
                    setUploading(false);
                }
            };

            xhr.onerror = () => {
                toast({ title: "Upload failed", description: "Network error during upload.", variant: "destructive" });
                setUploading(false);
            };

            xhr.send(formData);
        } catch (error: any) {
            console.error("Upload initialization error:", error);
            setUploading(false);
            toast({ title: "Error", description: "Could not start upload.", variant: "destructive" });
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            handleCoverUpload(file);
        }
        event.currentTarget.value = "";
    };

    const handleRemoveCover = () => {
        setFormData((prev) => ({ ...prev, coverImage: "" }));
        setCoverPreview(null);
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
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                                        <Button
                                            variant="outlined"
                                            component="label"
                                            startIcon={<UploadCloud size={18} />}
                                            disabled={uploading}
                                        >
                                            Choose cover image
                                            <input
                                                type="file"
                                                accept="image/*"
                                                hidden
                                                onChange={handleFileChange}
                                            />
                                        </Button>
                                        {coverPreview && (
                                            <Button
                                                variant="text"
                                                color="inherit"
                                                startIcon={<X size={16} />}
                                                onClick={handleRemoveCover}
                                            >
                                                Remove
                                            </Button>
                                        )}
                                        <Typography variant="body2" color="text.secondary">
                                            JPG, PNG, or WebP up to 4 MB.
                                        </Typography>
                                    </Box>
                                    {uploading && (
                                        <Box sx={{ mt: 2 }}>
                                            <LinearProgress variant="determinate" value={uploadProgress} />
                                            <Typography variant="caption" color="text.secondary">
                                                Uploading: {uploadProgress}%
                                            </Typography>
                                        </Box>
                                    )}
                                    {coverPreview && (
                                        <Box
                                            sx={{
                                                mt: 3,
                                                borderRadius: 2,
                                                overflow: "hidden",
                                                border: "1px solid",
                                                borderColor: "divider",
                                                maxWidth: 520,
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={coverPreview}
                                                alt="Cover preview"
                                                sx={{ width: "100%", display: "block", objectFit: "cover" }}
                                            />
                                        </Box>
                                    )}
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Meta Title (SEO)"
                                        value={formData.metaTitle}
                                        onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                                        placeholder="Overrides default title tag"
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Meta Description (SEO)"
                                        value={formData.metaDescription}
                                        onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                                        multiline
                                        rows={2}
                                        placeholder="Overrides default description tag"
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Meta Keywords (SEO)"
                                        value={formData.metaKeywords}
                                        onChange={(e) => setFormData({ ...formData, metaKeywords: e.target.value })}
                                        placeholder="e.g. scalable web, saas, performance"
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Content Editor (Pure HTML & CSS)</Typography>
                                    <TextField
                                        fullWidth
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        multiline
                                        minRows={15}
                                        placeholder="<h1>Your Title</h1><p>Your content here</p><style>h1 { color: red; }</style>"
                                        sx={{ fontFamily: 'monospace' }}
                                    />
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
                                    <Button variant="contained" type="submit" size="large" disabled={uploading}>
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
                                                Slug: {post.slug} | status: {post.published ? 'Published' : 'Draft'} | {new Date(post.createdAt).toLocaleDateString()}
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
