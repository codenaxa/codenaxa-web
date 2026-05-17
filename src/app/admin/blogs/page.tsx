"use client";

import React, { useState, useEffect, useRef } from "react";
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
    Stack,
    Divider,
    alpha,
    Tooltip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { 
    Edit, 
    Trash2, 
    Plus, 
    UploadCloud, 
    X, 
    LayoutDashboard, 
    Eye, 
    FileText, 
    PlusCircle,
    GripVertical,
    ChevronUp,
    ChevronDown,
    Save,
    Settings,
    ChevronRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import slugify from "slugify";

export default function AdminBlogsPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [editingPost, setEditingPost] = useState<any | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        coverImage: "",
        published: true,
        excerpt: "",
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
    });
    // Each block represents a paragraph
    const [blocks, setBlocks] = useState<string[]>([""]); 
    
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
            }
        } catch {
            setPosts([]);
            toast({ title: "Error", description: "Failed to fetch posts", variant: "destructive" });
        }
    };

    const handleAddBlock = () => {
        setBlocks([...blocks, ""]);
    };

    const handleUpdateBlock = (index: number, value: string) => {
        const newBlocks = [...blocks];
        newBlocks[index] = value;
        setBlocks(newBlocks);
    };

    const handleRemoveBlock = (index: number) => {
        if (blocks.length === 1) {
            setBlocks([""]);
            return;
        }
        const newBlocks = blocks.filter((_, i) => i !== index);
        setBlocks(newBlocks);
    };

    const handleMoveBlock = (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === blocks.length - 1) return;
        
        const newBlocks = [...blocks];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
        setBlocks(newBlocks);
    };

    const generateHtmlContent = () => {
        return blocks
            .filter(b => b.trim().length > 0)
            .map(b => `<p>${b.replace(/\n/g, '<br>')}</p>`)
            .join('\n');
    };


    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const htmlContent = generateHtmlContent();
        
        if (!formData.title.trim() || !formData.slug.trim() || !htmlContent.trim()) {
            toast({
                title: "Validation error",
                description: "Title, Slug, and at least one paragraph are required.",
                variant: "destructive"
            });
            return;
        }

        try {
            const endpoint = editingPost ? `/api/posts/${editingPost._id}` : '/api/posts';
            const method = editingPost ? 'PUT' : 'POST';

            const payload = {
                ...formData,
                content: htmlContent,
                excerpt: formData.excerpt || blocks[0].substring(0, 150)
            };

            const res = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                toast({
                    title: editingPost ? "Updated" : "Created",
                    description: "Post saved successfully!"
                });
                resetForm();
                fetchPosts();
            } else {
                const data = await res.json().catch(() => ({}));
                toast({ title: "Error", description: data.error || "Failed to save post", variant: "destructive" });
            }
        } catch {
            toast({ title: "Error", description: "Network Error", variant: "destructive" });
        }
    };

    const resetForm = () => {
        setEditingPost(null);
        setIsCreating(false);
        setFormData({ 
            title: "", 
            slug: "",
            coverImage: "", 
            published: true, 
            excerpt: "",
            metaTitle: "",
            metaDescription: "",
            metaKeywords: "",
        });
        setBlocks([""]);
        setCoverPreview(null);
    };

    const openEdit = (post: any) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            slug: post.slug || "",
            coverImage: post.coverImage || "",
            published: post.published,
            excerpt: post.excerpt || "",
            metaTitle: post.metaTitle || "",
            metaDescription: post.metaDescription || "",
            metaKeywords: post.metaKeywords || "",
        });
        
        // Parse HTML to blocks (roughly)
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const paragraphs = Array.from(tempDiv.querySelectorAll('p')).map(p => p.innerText);
        setBlocks(paragraphs.length > 0 ? paragraphs : [post.content.replace(/<[^>]*>/g, '')]);
        
        setCoverPreview(post.coverImage || null);
        setIsCreating(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure?')) return;
        const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
        if (res.ok) {
            toast({ title: "Deleted", description: "Post removed." });
            fetchPosts();
        }
    };

    const handleCoverUpload = async (file: File) => {
        const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

        if (!cloudinaryCloudName || !uploadPreset) return;

        setUploading(true);
        setUploadProgress(0);

        const formDataCloud = new FormData();
        formDataCloud.append("file", file);
        formDataCloud.append("upload_preset", uploadPreset);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`);
        xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) setUploadProgress(Math.round((e.loaded / e.total) * 100));
        };
        xhr.onload = () => {
            const resp = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                setFormData(prev => ({ ...prev, coverImage: resp.secure_url }));
                setCoverPreview(resp.secure_url);
                toast({ title: "Success", description: "Cover image uploaded!" });
            }
            setUploading(false);
        };
        xhr.send(formDataCloud);
    };

    return (
        <Box sx={{ py: 8, minHeight: '100vh', bgcolor: 'background.default' }}>
            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 6 }}>
                    <Box>
                        <Breadcrumb current={isCreating ? (editingPost ? "Editing Post" : "New Post") : "Dashboard"} />
                        <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>Blog Workspace</Typography>
                    </Box>
                    {!isCreating && (
                        <Button 
                            variant="contained" 
                            size="large" 
                            startIcon={<PlusCircle size={20} />}
                            onClick={() => setIsCreating(true)}
                            sx={{ px: 4, borderRadius: 3 }}
                        >
                            Create Thread Post
                        </Button>
                    )}
                </Stack>

                {isCreating ? (
                    <Grid container spacing={4}>
                        {/* Editor Side */}
                        <Grid size={{ xs: 12, lg: 7 }}>

                            <Paper sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }} elevation={0}>
                                <Stack spacing={4}>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: 'text.secondary' }}>POST TITLE</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Catchy headline for your story..."
                                            variant="standard"
                                            value={formData.title}
                                            onChange={(e) => {
                                                const title = e.target.value;
                                                setFormData({ 
                                                    ...formData, 
                                                    title, 
                                                    slug: slugify(title, { lower: true, strict: true }) 
                                                });
                                            }}
                                            InputProps={{
                                                style: { fontSize: '2rem', fontWeight: 800 }
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: 'text.secondary' }}>POST URL SLUG</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="my-blog-post-url"
                                            variant="outlined"
                                            size="small"
                                            value={formData.slug}
                                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                            sx={{ bgcolor: 'background.paper', borderRadius: 2 }}
                                        />
                                        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                                            URL: codenaxa.in/blog/{formData.slug || '...'}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: 'text.secondary' }}>COVER IMAGE</Typography>
                                        <Box 
                                            sx={{ 
                                                p: 4, 
                                                border: '2px dashed', 
                                                borderColor: coverPreview ? 'primary.main' : 'divider',
                                                borderRadius: 4,
                                                textAlign: 'center',
                                                bgcolor: alpha('#3B82F6', 0.02),
                                                position: 'relative',
                                                overflow: 'hidden',
                                                minHeight: 120,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {coverPreview ? (
                                                <Box sx={{ width: '100%', height: '100%' }}>
                                                    <Box component="img" src={coverPreview} sx={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 2 }} />
                                                    <IconButton 
                                                        onClick={() => { setCoverPreview(null); setFormData(p => ({ ...p, coverImage: "" })) }}
                                                        sx={{ position: 'absolute', top: 10, right: 10, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}
                                                    >
                                                        <X size={16} />
                                                    </IconButton>
                                                </Box>
                                            ) : (
                                                <>
                                                    <UploadCloud size={40} className="text-secondary-main mb-2" />
                                                    <Typography variant="body2" color="text.secondary">Drop or click to upload cover image</Typography>
                                                    <input 
                                                        type="file" 
                                                        accept="image/*" 
                                                        onChange={(e) => e.target.files?.[0] && handleCoverUpload(e.target.files[0])}
                                                        style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} 
                                                    />
                                                </>
                                            )}
                                            {uploading && (
                                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                                                    <LinearProgress variant="determinate" value={uploadProgress} />
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, color: 'text.secondary' }}>SEO & ANALYTICS SETTINGS</Typography>
                                        <Accordion sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', boxShadow: 'none', '&:before': { display: 'none' } }}>
                                            <AccordionSummary expandIcon={<ChevronRight size={18} />}>
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <Settings size={18} className="text-secondary-main" />
                                                    <Typography sx={{ fontWeight: 600 }}>Configure Meta Tags & Description</Typography>
                                                </Stack>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ pt: 0 }}>
                                                <Stack spacing={3}>
                                                    <TextField
                                                        fullWidth
                                                        label="SEO Title (Meta Title)"
                                                        placeholder="Custom title for Google search results"
                                                        value={formData.metaTitle}
                                                        onChange={(e) => setFormData(p => ({ ...p, metaTitle: e.target.value }))}
                                                        variant="outlined"
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        rows={3}
                                                        label="SEO Description (Meta Description)"
                                                        placeholder="Short summary for search engines (Recommended < 160 chars)"
                                                        value={formData.metaDescription}
                                                        onChange={(e) => setFormData(p => ({ ...p, metaDescription: e.target.value }))}
                                                        variant="outlined"
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="SEO Keywords (Meta Keywords)"
                                                        placeholder="blog, tutorial, nextjs..."
                                                        value={formData.metaKeywords}
                                                        onChange={(e) => setFormData(p => ({ ...p, metaKeywords: e.target.value }))}
                                                        variant="outlined"
                                                    />
                                                </Stack>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, color: 'text.secondary' }}>THREAD CONTENT (Paragraph Blocks)</Typography>
                                        <Stack spacing={3}>
                                            {blocks.map((block, idx) => (
                                                <Box key={idx} sx={{ position: 'relative', p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3, bgcolor: 'background.paper' }}>
                                                    <Stack direction="row" spacing={1} sx={{ position: 'absolute', right: 8, top: 8 }}>
                                                        <IconButton size="small" onClick={() => handleMoveBlock(idx, 'up')} disabled={idx === 0}><ChevronUp size={16} /></IconButton>
                                                        <IconButton size="small" onClick={() => handleMoveBlock(idx, 'down')} disabled={idx === blocks.length - 1}><ChevronDown size={16} /></IconButton>
                                                        <IconButton size="small" onClick={() => handleRemoveBlock(idx)} color="error"><X size={16} /></IconButton>
                                                    </Stack>
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        placeholder={`Paragraph ${idx + 1}...`}
                                                        variant="standard"
                                                        value={block}
                                                        onChange={(e) => handleUpdateBlock(idx, e.target.value)}
                                                        InputProps={{ disableUnderline: true, style: { fontSize: '1.1rem', lineHeight: 1.6 } }}
                                                    />
                                                </Box>
                                            ))}
                                            <Button 
                                                variant="outlined" 
                                                startIcon={<Plus size={18} />} 
                                                onClick={handleAddBlock}
                                                sx={{ py: 2, borderRadius: 3, borderStyle: 'dashed' }}
                                            >
                                                Add New Paragraph
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Stack>

                                <Divider sx={{ my: 6 }} />

                                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                                    <FormControlLabel
                                        control={<Switch checked={formData.published} onChange={(e) => setFormData(p => ({ ...p, published: e.target.checked }))} />}
                                        label="Published"
                                    />
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="outlined" color="inherit" onClick={resetForm} disableElevation sx={{ borderRadius: 2 }}>Cancel</Button>
                                        <Button 
                                            variant="contained" 
                                            size="large" 
                                            startIcon={<Save size={20} />} 
                                            onClick={handleSave}
                                            disabled={uploading}
                                            sx={{ px: 6, borderRadius: 2 }}
                                        >
                                            {editingPost ? 'Update Post' : 'Post Content'}
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Grid>

                        {/* Preview Side */}
                        <Grid size={{ xs: 12, lg: 5 }}>
                            <Box sx={{ position: 'sticky', top: 32 }}>
                                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, color: 'secondary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Eye size={18} /> LIVE RENDER PREVIEW
                                </Typography>
                                <Paper sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }} elevation={0}>
                                    <Box sx={{ p: 2, bgcolor: 'action.hover', borderBottom: '1px solid', borderColor: 'divider' }}>
                                        <Stack direction="row" spacing={1}>
                                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FF5F56' }} />
                                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FFBD2E' }} />
                                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#27C93F' }} />
                                        </Stack>
                                    </Box>
                                    <Box sx={{ height: 'calc(100vh - 200px)', overflow: 'auto', bgcolor: 'white' }}>
                                        {/* Injecting CSS used in Blog detail page for identical render */}
                                        <iframe
                                            title="Live Preview"
                                            srcDoc={`
                                                <!DOCTYPE html>
                                                <html>
                                                <head>
                                                    <style>
                                                        body { 
                                                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
                                                            padding: 40px; 
                                                            max-width: 800px; 
                                                            margin: 0 auto;
                                                            line-height: 1.9;
                                                            color: #1a1a1a;
                                                        }
                                                        h1 { font-size: 2.2rem; font-weight: 800; margin-bottom: 30px; line-height: 1.2; color: #111; }
                                                        .cover { width: 100%; height: 300px; object-fit: cover; border-radius: 16px; margin-bottom: 40px; }
                                                        .content { font-size: 1.15rem; color: #374151; }
                                                        p { margin-bottom: 24px; }
                                                        .meta { display: flex; gap: 12px; font-size: 0.9rem; color: #6b7280; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.05em; }
                                                    </style>
                                                </head>
                                                <body>
                                                    <div class="meta">March 29, 2026 | By Codenaxa</div>
                                                    <h1>${formData.title || "Untiled Story"}</h1>
                                                    ${coverPreview ? `<img src="${coverPreview}" class="cover" />` : ''}
                                                    <div class="content">
                                                        ${generateHtmlContent() || '<p style="color: #9ca3af; font-style: italic;">Your story starts here...</p>'}
                                                    </div>
                                                </body>
                                                </html>
                                            `}
                                            style={{ width: '100%', height: '100%', border: 'none' }}
                                        />
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={3}>
                        {posts.map(post => (
                            <Grid size={{ xs: 12 }} key={post._id}>
                                <Paper 
                                    sx={{ 
                                        p: 3, 
                                        borderRadius: 3, 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 3,
                                        border: '1px solid', 
                                        borderColor: 'divider',
                                        transition: 'all 0.2s',
                                        '&:hover': { borderColor: 'primary.main', bgcolor: alpha('#3B82F6', 0.01) }
                                    }} 
                                    elevation={0}
                                >
                                    <Box sx={{ width: 60, height: 60, borderRadius: 2, overflow: 'hidden', bgcolor: 'action.hover', flexShrink: 0 }}>
                                        {post.coverImage && <Box component="img" src={post.coverImage} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                                    </Box>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{post.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {new Date(post.createdAt).toLocaleDateString()} • {post.published ? 'Published' : 'Draft'}
                                        </Typography>
                                    </Box>
                                    <Stack direction="row" spacing={1}>
                                        <Tooltip title="Edit Post"><IconButton onClick={() => openEdit(post)} size="small" sx={{ bgcolor: alpha('#3B82F6', 0.1), color: 'primary.main' }}><Edit size={18} /></IconButton></Tooltip>
                                        <Tooltip title="Delete"><IconButton onClick={() => handleDelete(post._id)} size="small" sx={{ bgcolor: alpha('#EF4444', 0.1), color: 'error.main' }}><Trash2 size={18} /></IconButton></Tooltip>
                                    </Stack>
                                </Paper>
                            </Grid>
                        ))}
                        {posts.length === 0 && (
                            <Box sx={{ width: '100%', py: 12, textAlign: 'center' }}>
                                <FileText size={48} className="text-secondary-main mb-2" />
                                <Typography color="text.secondary">No posts yet. Time to share some knowledge!</Typography>
                            </Box>
                        )}
                    </Grid>
                )}
            </Container>
        </Box>
    );
}

function Breadcrumb({ current }: { current: string }) {
    return (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
            <LayoutDashboard size={14} />
            <Typography variant="inherit">Admin</Typography>
            <Typography variant="inherit">/</Typography>
            <Typography variant="inherit" sx={{ fontWeight: 600, color: 'primary.main' }}>{current}</Typography>
        </Stack>
    );
}
